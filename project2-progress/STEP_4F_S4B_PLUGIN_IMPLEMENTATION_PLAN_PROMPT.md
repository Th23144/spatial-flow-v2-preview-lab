# Project 2 · S4B Payment-Plugin Implementation-Plan Prompt

Date: 2026-07-31  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Purpose: next prompt for the separate Spatial Flow Crypto Pay plugin window
Input contract: reviewed and corrected
Plugin code generation: not authorized
Plugin ZIP generation: not authorized
New version number: not authorized
Project 2 source modification: not authorized
```

## Prompt to send to the payment-plugin window

```text
你已经提交《Spatial Flow Crypto Pay · Project 2 Integration Contract Proposal》。项目二窗口已经完成审查。

总体架构获得认可，但不能原样进入代码开发。以下修正已经锁定，并优先于原契约：

一、已批准的总体方向

1. WooCommerce 在 Step 03 中创建订单。
2. Crypto 订单进入 on-hold。
3. 顾客进入仍被视觉定义为 Step 03 的 Crypto Payment Workspace。
4. Workspace 使用服务端渲染启动上下文 + 同源 REST JSON 操作。
5. WooCommerce order-pay 作为未完成付款恢复路径。
6. 现有 /crypto-pay/、Shortcode 和 admin-post 路径必须继续保留为回滚方案。
7. 项目二控制视觉外壳；插件和服务器控制订单、Invoice、金额、地址、验证、payment_complete() 和状态。

二、必须采用的修正

1. 不允许前端 JavaScript 在每次 REST 请求中重复发送原始 WooCommerce Order Key。
2. order-pay 服务端验证成功后，插件必须创建短期、不可读、订单范围的 Workspace 凭证。
3. Workspace 凭证必须绑定：
   - order_id；
   - Gateway ID = spatial_flow_crypto；
   - Order Key 的不可逆摘要，而不是原始值；
   - 登录订单的 Customer ID；
   - 有效期；
   - 订单未支付且未取消的状态。
4. 需要单独定义 Guest REST 的 CSRF 保护，不能只写“订单级 Nonce”而不解释实现。
5. on-hold 是本插件未付款订单的主要合法状态。不能因为通用 needs_payment() 判断而错误拒绝 on-hold。
6. 订单可操作性检查必须限定在 spatial_flow_crypto，不得全局修改所有支付方式的 WooCommerce payable status。
7. 第一阶段不启用真实 expired 行为、不显示运营倒计时、不自动创建替代 Invoice。
8. 第一阶段状态为：
   - waiting_payment；
   - verification_failed；
   - manual_review；
   - cancelled；
   - paid_confirmed。
9. 第一阶段不做默认定时轮询。只在：
   - 页面加载；
   - 页面恢复焦点；
   - 创建 Invoice 后；
   - 提交 Hash 后；
   - Sandbox 后；
   - 用户手动 Refresh 时查询服务器状态。
10. 当前没有自动扫链，交易 Hash 输入是完成验证的必需步骤，不得伪装成备用功能。
11. 用户在 S4A 点击 Continue to Create Crypto Invoice 后，订单创建并进入 Workspace；Workspace 自动执行一次幂等 Create or Reuse Invoice，不再要求顾客点击第二次 Generate Invoice。
12. 第一阶段不做二维码。
13. 第一阶段不做真实倒计时或 Invoice 过期。
14. 客户界面使用英文安全文案；内部错误码保留在结构化数据和后台日志，但不默认突出显示。
15. Recovery 使用服务器生成的 WooCommerce order-pay URL；第一阶段页面提供 Copy recovery link，邮件接入暂缓。
16. 旧 /crypto-pay/ 路径在新 Workspace 验收前必须保持可用。
17. 新 Workspace 必须有 Feature Flag 或同等回滚开关；关闭后无需数据库回滚即可恢复 V0.2.5 旧路径。

三、本轮唯一任务

本轮只输出：

【Spatial Flow Crypto Pay 第一阶段 Project 2 Integration Implementation Plan】

不要生成代码，不要生成 ZIP，不要决定新版本号。

四、实施计划必须回答

## 1. 精确文件计划

逐个列出：

- 要修改的现有文件；
- 要新增的文件；
- 每个文件的职责；
- 为什么不能继续全部写在主插件 PHP；
- 哪些旧文件保持不动。

## 2. order-pay Workspace 接入

必须给出：

- process_payment() 最终返回什么 URL；
- 使用哪个 WooCommerce Hook、Endpoint 或模板边界识别 order-pay；
- 如何只对 payment_method = spatial_flow_crypto 生效；
- 如何阻止默认 order-pay 支付方式列表或重复 Pay 按钮与 Workspace 同时出现；
- 如何保持其他 Gateway 的 order-pay 页面完全不受影响；
- 如何保证 Workspace 视觉仍属于 Step 03；
- 已支付、取消、退款、错误 Gateway 的访问分别如何处理。

不能只写“使用 order-pay”，必须给出准确 Hook / Filter / Template / Method 名称和调用顺序。

## 3. Workspace 授权凭证

必须选择并锁定一种实现：

A. HttpOnly + Secure + SameSite Cookie 的签名 Workspace Token，并配合前端 CSRF Token；

或

B. 服务端渲染的短期签名不透明 Workspace Token，通过专用 Header 发送。

然后说明：

- Token payload；
- 签名算法或 WordPress 签名机制；
- 使用哪个服务器 Secret；
- 是否包含原始 Order Key；
- Order Key 如何只用于服务端初始验证；
- Token 有效期；
- 如何失效；
- 如何绑定 Customer ID / Guest；
- 多标签页是否共用；
- 日志中如何防止泄露；
- Guest CSRF 如何防护；
- 登录管理员 Sandbox 为什么还要 X-WP-Nonce；
- 支付成功或订单取消后如何拒绝旧 Token。

严禁把原始 Order Key 放入正常 JSON 响应。

## 4. on-hold 订单可操作性

请提供明确的服务器函数或伪代码，判断：

```text
payment_method = spatial_flow_crypto
AND ! order->is_paid()
AND status 属于允许集合
AND 非 cancelled / refunded / completed / trash
```

说明：

- on-hold 如何通过；
- pending 何时允许；
- failed 何时允许；
- 是否调用 needs_payment()；
- 如果调用，如何避免 on-hold 被错误拒绝；
- 为什么不会影响其他 Gateway。

## 5. Workspace Token 与 REST 路由的完整请求流程

至少覆盖：

- 页面首次进入；
- 自动 Create or Reuse Invoice；
- 页面刷新；
- 关闭浏览器后重新打开 order-pay；
- 页面重新取得凭证；
- Submit Hash；
- Sandbox；
- 已付款后再次进入；
- 取消订单后再次进入。

## 6. Create Invoice 并发锁

必须锁定一个服务器机制，不得只列候选项。

可选：

- MySQL advisory lock；
- 数据库事务 + 可证明的行锁；
- 唯一约束配合可恢复写入；
- 其他能够证明原子性的 WordPress/MySQL 实现。

说明：

- Lock key；
- 获取超时；
- 获取失败响应；
- try/finally 释放；
- PHP fatal 或请求中断后的行为；
- 不同订单能否并发；
- 同一订单重复点击如何返回同一 Invoice；
- 是否需要数据库迁移。

## 7. 第一阶段 Invoice 生命周期

必须确认：

- 保留 expires_at 字段但不启用自动过期；
- 不显示真实倒计时；
- 不自动创建替代 Invoice；
- 一个未支付订单复用同一活动 Invoice；
- verification_failed 后仍使用同一 Invoice；
- paid_confirmed 后不可重开；
- cancelled 后不可继续；
- manual_review 如何停止顾客自动操作。

## 8. REST Route 和 JSON Schema

逐个列出最终 Route：

- Workspace Bootstrap / Get Invoice；
- Create or Reuse Invoice；
- Submit Transaction Hash；
- Get Payment Status；
- Sandbox Simulate Success。

对每个 Route 说明：

- Method；
- Permission Callback；
- 请求头；
- Body；
- 成功 HTTP；
- 失败 HTTP；
- 幂等；
- 数据库副作用；
- WooCommerce 副作用；
- 是否允许 Guest。

必须说明 Workspace Token 在哪里校验。

## 9. 状态与错误迁移

说明如何把当前 V0.2.5：

```text
waiting_payment
paid_confirmed
订单 reject Meta
```

安全扩展为：

```text
waiting_payment
verification_failed
manual_review
cancelled
paid_confirmed
```

说明：

- 是否需要数据库 schema 迁移；
- verification_failed 写入 Invoice 还是只写 Meta；
- 再提交新 Hash 后如何清理旧错误；
- manual_review 的进入条件；
- paid_confirmed 如何防重复备注、重复邮件和重复 payment_complete()。

## 10. Feature Flag 和回滚

必须提供：

- 后台设置字段名称；
- 默认值；
- 启用时 process_payment() 走哪里；
- 关闭时如何恢复现有 /crypto-pay/；
- REST Route 是否仍注册；
- 如何防止关闭后旧 Workspace Token 继续操作；
- 是否需要清理新数据库字段；
- 回滚是否影响旧 Invoice；
- 回滚测试步骤。

## 11. 旧路径兼容

必须说明：

- sf_crypto_pay_generate_invoice() 如何成为 Service Wrapper；
- sf_crypto_pay_submit_tx() 如何成为 Service Wrapper；
- sf_crypto_pay_sandbox_success() 如何复用共同结算 Service；
- /crypto-pay/ 模板是否需要修改；
- 旧 admin-post 重定向错误如何继续工作；
- V0.2.3 已通过的负向测试如何在旧路径和新路径同时复测。

## 12. 前端启动配置

服务端渲染给 Project 2 Workspace 的最小配置必须列出：

- REST Base URL；
- order_id；
- order number；
- Workspace Token 或 CSRF Token；
- 初始允许动作；
- Sandbox 可见性；
- Recovery URL；
- Customer-safe 文案；
- 不允许包含的敏感字段。

## 13. 测试计划

分为：

### 单元或服务级测试

至少包含：

- Token 签名和过期；
- Guest / Customer / Admin 权限；
- 错 Order；
- 错 Gateway；
- on-hold 允许；
- paid/cancelled 拒绝；
- Create Invoice 幂等；
- 锁竞争；
- 重复 Hash；
- payment_complete() 只执行一次。

### REST 集成测试

至少包含：

- 正常创建/恢复；
- 刷新恢复；
- 非法 Token；
- CSRF；
- 其他订单访问；
- 可重试错误；
- Sandbox 普通用户拒绝；
- 管理员 Sandbox 成功。

### 本地人工回归

必须包含旧 V0.2.5 已通过路径：

- Gateway 显示；
- on-hold；
- Invoice；
- Receiver mismatch；
- Old transaction；
- No token logs；
- 地址格式归一化；
- Sandbox processing；
- Thank You；
- 订单备注。

再增加：

- order-pay Workspace；
- 浏览器刷新；
- 关闭后恢复；
- 多标签页；
- Feature Flag 回滚；
- 390 / 360 Workspace 功能可用性，不要求本轮完成最终视觉。

## 14. 分步开发顺序

把开发拆成可单独验收和回滚的小步骤。

每一步必须写：

- 文件范围；
- 是否改变旧路径；
- 自动测试；
- 人工测试；
- 失败后的回滚方式；
- 下一步进入条件。

五、本轮明确禁止

不要：

- 输出任何完整 PHP / JS / CSS 代码；
- 生成 ZIP；
- 决定新版本号；
- 开始修改插件；
- 加入 QR；
- 加入倒计时；
- 加入 expired 行为；
- 加入自动监听；
- 加入 Worker / Cron / Webhook；
- 加入 USDC / BTC / 多链；
- 修改项目二 Checkout 页面；
- 删除旧 /crypto-pay/ 路径。

六、输出格式

请严格按以下标题输出：

# Spatial Flow Crypto Pay · Project 2 First-Phase Implementation Plan

## 1. Locked Architecture
## 2. Exact File Plan
## 3. order-pay Workspace Integration
## 4. Workspace Authorization Token
## 5. Guest CSRF Protection
## 6. Crypto Order Eligibility
## 7. REST Routes and Permission Callbacks
## 8. Invoice Concurrency Lock
## 9. Invoice Lifecycle and Status Migration
## 10. Shared Service Refactor
## 11. Feature Flag and Rollback
## 12. Legacy Path Compatibility
## 13. Front-End Bootstrap Contract
## 14. Testing Matrix
## 15. Bounded Development Steps
## 16. Remaining Risks and Unknowns

停止点：只交付实施计划，等待项目二窗口审查。不要开始开发。
```
