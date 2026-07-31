# Project 2 · S4B Plugin Step-1 V0.2.6 Implementation Prompt

Date: 2026-07-31  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Target plugin baseline: Spatial Flow Crypto Pay Trial 0.2.5
Authorized output version: 0.2.6
Authorized development group: Step 1 only
Later plugin steps: not authorized
Project 2 Checkout source changes: not authorized
```

## Prompt to send to the payment-plugin window

```text
你已经提交：

《Spatial Flow Crypto Pay · Project 2 First-Phase Implementation Plan》

项目二窗口已完成正式审查。实施计划主体获得批准，但以下修正已经锁定，并优先于你提交的原计划：

1. 第一阶段 Workspace 授权采用方案 B，不采用 HttpOnly Cookie 方案 A。
2. 未来 Workspace Token 是：
   - 服务端在 WooCommerce order-pay 完成订单、用户、库存和 Guest Email Verification 后签发；
   - 短期；
   - 签名；
   - 不透明；
   - 通过 X-SF-Workspace-Token Header 发送；
   - 不包含原始 Order Key；
   - 原始 Order Key 不进入普通 JSON、日志或 REST 鉴权参数。
3. before_woocommerce_pay_form 未来只用于建立已验证的请求上下文和签发内存中的 Token，不用于 Set-Cookie。
4. 第一阶段未来使用一个 order-scoped MySQL advisory-lock family，覆盖 Invoice 和最终 Settlement 写操作。
5. TronGrid HTTP 请求未来必须在 Settlement Lock 外执行；取得验证结果后再加锁、重新读取订单/Invoice、完成幂等结算。
6. 无效 Hash 格式不改变 Invoice 状态、不写顾客订单备注。
7. TronGrid 临时错误或尚未确认不固化为 verification_failed。
8. 只有确定性的 Receiver mismatch、Old transaction、Wrong token、Amount too low、No qualifying token transfer 等结果才进入 verification_failed。
9. Submit Hash REST 在未来实现前必须补充真实限流机制；本 Step 1 不实现限流和 REST。
10. Workspace 恢复页未来必须使用 Referrer-Policy: no-referrer，且不加载第三方脚本或第三方资源。
11. 第一阶段仍不做 QR、倒计时、expired、替代 Invoice、自动监控、多币种或顾客网络选择。

本轮现在正式授权开发，但只允许执行：

【Plugin Step 1：V0.2.6 模块骨架 + 默认关闭 Feature Flag + 旧路径兼容基线】

不要开始 Step 2 或后续步骤。

---

# 一、源码基线和版本

输入源码：

```text
spatial-flow-crypto-pay-trial-v0.2.5.zip
```

输出插件版本：

```text
0.2.6
```

插件正式名称保持：

```text
Spatial Flow Crypto Pay Trial
```

插件目录保持：

```text
spatial-flow-crypto-pay
```

Gateway 保持：

```text
Class: SF_Crypto_Pay_Gateway
ID: spatial_flow_crypto
```

---

# 二、本轮允许修改的内容

## 1. 主插件文件

修改：

```text
spatial-flow-crypto-pay/spatial-flow-crypto-pay.php
```

只允许：

- 插件版本更新为 0.2.6；
- 安全加载本轮新增的 includes 类文件；
- 在现有 Gateway 后台设置中新增 Feature Flag；
- 初始化或维护 Feature epoch Option；
- 增加后续架构所需但当前不激活任何行为的常量或安全辅助加载逻辑；
- 保持现有全局函数、Gateway、admin-post、Shortcode、TRON 验证和 Sandbox 行为不变。

## 2. 新增类文件骨架

允许新增：

```text
includes/class-sf-crypto-pay-order-guard.php
includes/class-sf-crypto-pay-workspace-token.php
includes/class-sf-crypto-pay-invoice-service.php
includes/class-sf-crypto-pay-payment-service.php
includes/class-sf-crypto-pay-rest-controller.php
includes/class-sf-crypto-pay-workspace.php
includes/class-sf-crypto-pay-response.php
```

本轮这些文件只能建立：

- 类声明；
- 防止直接访问；
- 构造方法或静态 bootstrap 骨架；
- 明确的职责注释；
- 不触发真实功能的安全占位方法；
- 后续依赖检查所需的最小接口。

不要在本轮注册：

- REST Route；
- order-pay Hook；
- Template Filter；
- Workspace Token；
- MySQL Lock；
- 新 Invoice 路径；
- 新支付路径。

## 3. Feature Flag

在现有 WooCommerce Gateway 设置中新增：

```text
Field ID: project2_workspace_enabled
Label: Project 2 Crypto Workspace
Type: checkbox
Default: no
```

后台说明必须明确：

```text
Experimental integration switch. Keep disabled until the Project 2 Workspace implementation and regression review are complete.
```

本轮即使管理员打开该 Flag，也不得改变：

- process_payment()；
- Redirect；
- /crypto-pay/；
- Invoice；
- Sandbox；
- Checkout 页面；
- REST 或 order-pay 行为。

它在 V0.2.6 中只是配置基线，不是功能开关。

## 4. Feature epoch

新增 WordPress Option：

```text
sf_crypto_workspace_token_epoch
```

初始值：

```text
1
```

要求：

- 仅在 `project2_workspace_enabled` 的实际保存值发生变化时递增；
- 重复保存相同值不得递增；
- 插件升级、页面刷新、普通 Gateway 设置保存不得无条件递增；
- 本轮 epoch 不参与 Token，因为本轮不生成 Token；
- 不删除或重置既有订单、Invoice、Transaction、Log 或 Meta。

如果你认为在 V0.2.6 中可靠检测设置前后值会扩大改动，请选择更安全的方案：

```text
只创建 epoch Option，不实现自动递增；
并把自动递增明确推迟到 Token 真正接入的后续步骤。
```

不得为了满足 epoch 自动递增而重写整个 Gateway 设置保存流程。

---

# 三、本轮必须保持完全不变的行为

以下 V0.2.5 行为必须保持：

```text
Checkout 显示 Pay with Crypto
选择 Crypto 后创建 WooCommerce 订单
订单进入 on-hold
process_payment() 继续跳转旧 /crypto-pay/
旧 Generate Payment Invoice 正常
旧 admin-post Invoice 创建正常
旧 tx hash 提交正常
旧 TronGrid 验证逻辑正常
Receiver mismatch 拒绝正常
Old transaction 拒绝正常
No token logs 拒绝正常
TRON 地址格式归一化正常
Sandbox 管理员按钮正常
Sandbox 成功调用 payment_complete()
订单进入 processing
WooCommerce Thank You 正常
订单备注正常
```

本轮不得修改：

```text
process_payment() 的 Redirect
sf_crypto_pay_generate_invoice()
sf_crypto_pay_submit_tx()
sf_crypto_pay_sandbox_success()
sf_crypto_pay_verify_tron_usdt_payment()
sf_crypto_pay_verify_tron_usdt_payment_from_txinfo()
templates/crypto-pay-page.php
assets/crypto-pay.js
assets/crypto-pay.css
数据库表结构
订单状态语义
```

除非只是为了更新版本显示而必须修改插件头，其他旧逻辑不做格式化重写或顺手清理。

---

# 四、Token 方案的本轮注释要求

`class-sf-crypto-pay-workspace-token.php` 中只建立未来骨架，并用注释锁定：

```text
Future contract: scheme B
- short-lived signed opaque token
- server-rendered only after WooCommerce order-pay validation
- sent through X-SF-Workspace-Token
- no raw Order Key in token or normal JSON
- no HttpOnly Workspace Cookie implementation in the first phase
```

不要实现 Token 签名、解析或 Route 鉴权。

---

# 五、禁止范围

本轮禁止：

- 不注册 REST API；
- 不创建 Workspace 页面；
- 不覆盖 checkout/form-pay.php；
- 不添加 woocommerce_valid_order_statuses_for_payment；
- 不添加 before_woocommerce_pay_form；
- 不添加 woocommerce_locate_template；
- 不修改 process_payment()；
- 不生成 Workspace Token；
- 不实现 Guest CSRF；
- 不实现 MySQL Lock；
- 不重构 Invoice Service；
- 不重构 Payment Service；
- 不改 Sandbox 结算；
- 不新增 JS/CSS Workspace；
- 不新增二维码；
- 不新增倒计时；
- 不启用 expired；
- 不新增自动监听；
- 不新增多资产或多网络；
- 不修改 Project 2 Checkout；
- 不删除旧 /crypto-pay/；
- 不升级 WooCommerce；
- 不安装其他依赖。

---

# 六、输出物

请生成：

```text
spatial-flow-crypto-pay-trial-v0.2.6.zip
```

ZIP 内根目录必须仍是：

```text
spatial-flow-crypto-pay/
```

同时输出一份报告，严格包含：

# Spatial Flow Crypto Pay Trial V0.2.6 · Step 1 Delivery Report

## 1. Source Baseline
## 2. Exact Changed Files
## 3. Exact Added Files
## 4. Feature Flag Behavior
## 5. Feature Epoch Behavior
## 6. Confirmed Non-Changes
## 7. Syntax and Static Checks
## 8. Regression Tests That Can Be Performed Without Installation
## 9. Local Manual Tests Required From User
## 10. Rollback Instructions
## 11. ZIP SHA256
## 12. Stop Point

---

# 七、静态检查要求

至少执行并报告：

- 全部 PHP 文件语法检查；
- ZIP 目录结构检查；
- 插件主文件头版本检查；
- 新类文件是否全部安全加载；
- WooCommerce 不存在时是否避免 Fatal；
- 搜索确认没有新增 REST Route；
- 搜索确认没有新增 order-pay Hook；
- 搜索确认 process_payment() Redirect 未改变；
- 搜索确认旧 admin-post Hook 仍存在；
- 搜索确认旧 Shortcode 仍存在；
- 搜索确认旧 Sandbox Action 仍存在。

不能执行的本地 WordPress 测试必须明确列为待用户测试，不得写成已通过。

---

# 八、用户本地验收清单

报告必须要求用户安装前备份 V0.2.5，然后测试：

1. 插件升级/安装无 Fatal；
2. 后台版本显示 0.2.6；
3. Gateway 仍启用；
4. 新 Feature Flag 默认关闭；
5. 普通 Checkout 创建 Crypto 订单；
6. 订单仍进入 on-hold；
7. 仍跳旧 /crypto-pay/；
8. Generate Invoice 正常；
9. Sandbox 成功；
10. 订单进入 processing；
11. Thank You 正常；
12. 订单备注正常；
13. 打开/关闭 Feature Flag 后，支付路径仍不改变；
14. 如 epoch 已实现，确认只有 Flag 真正变化时递增。

---

# 九、停止点

完成 V0.2.6 ZIP 和交付报告后立即停止。

不要：

- 自动开始 Step 2；
- 自动生成 V0.2.7；
- 提前实现 Token；
- 提前实现 REST；
- 提前改 order-pay；
- 提前修改 Project 2 页面。

等待用户把 V0.2.6 ZIP 和报告交回项目二窗口审查，并完成本地回归后，才能授权下一组。
```

## Project 2 review gate after delivery

When V0.2.6 returns, Project 2 must verify:

```text
- package root and version
- exact diff from V0.2.5
- Feature Flag default off
- no process_payment redirect change
- no REST/order-pay behavior activation
- old functions/templates/assets preserved
- new class files are skeletons only
- Token comments lock scheme B
- PHP syntax and ZIP structure
- local old-path regression evidence
```
