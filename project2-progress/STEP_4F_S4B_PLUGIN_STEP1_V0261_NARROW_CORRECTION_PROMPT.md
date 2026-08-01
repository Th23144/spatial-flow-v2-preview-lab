# Project 2 · S4B Plugin Step-1 V0.2.6.1 Narrow Correction Prompt

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Input package: Spatial Flow Crypto Pay Trial V0.2.6
Input SHA256: 9555a00587d731a815fc37c27939b5644711c54766535978e8d54aaa14e72a71
Authorized output version: 0.2.6.1
Authorized task: one narrow WordPress compatibility correction
Plugin Step 2: not authorized
Project 2 Checkout changes: not authorized
```

## Prompt to send to the payment-plugin window

```text
你已经交付：

Spatial Flow Crypto Pay Trial V0.2.6
ZIP SHA256:
9555a00587d731a815fc37c27939b5644711c54766535978e8d54aaa14e72a71

项目二窗口已经独立检查 ZIP、源码差异和交付报告。

检查结果：

- 模块骨架范围通过；
- 七个新类文件均为 inert；
- process_payment() 与 V0.2.5 一致；
- 旧模板、CSS、JS 与 V0.2.5 字节一致；
- 没有 REST；
- 没有 order-pay Hook；
- 没有 Token、CSRF、Lock 或 Workspace；
- PHP 语法通过；
- ZIP SHA256 与报告一致。

但是发现一处必须在本地安装前修正的 WordPress 兼容性问题。

V0.2.6 当前代码：

```php
add_option(SF_CRYPTO_PAY_WORKSPACE_EPOCH_OPTION, 1, '', 'no');
```

WordPress 6.7 起已弃用 add_option()/update_option() 的字符串 autoload 值 'yes'/'no'。用户当前环境为 WordPress 6.9.4。

必须改为布尔值：

```php
add_option(SF_CRYPTO_PAY_WORKSPACE_EPOCH_OPTION, 1, '', false);
```

现有插件已经通过 sf_crypto_pay_maybe_upgrade() 在 admin_init 检查 sf_crypto_pay_db_version，并在版本不一致时调用现有 activation/upgrade routine。因此：

- 不要增加新的 always-on 初始化 Hook；
- 不要增加新的数据库升级系统；
- 不要改变 epoch option 名称；
- 不要改变初始值 1；
- 不要实现 epoch 自动递增；
- 不要改变 Feature Flag 行为。

本轮正式授权：

【V0.2.6.1 窄范围兼容性修正版】

# 一、输入与输出

输入：

```text
spatial-flow-crypto-pay-trial-v0.2.6.zip
SHA256:
9555a00587d731a815fc37c27939b5644711c54766535978e8d54aaa14e72a71
```

输出版本：

```text
0.2.6.1
```

输出文件名：

```text
spatial-flow-crypto-pay-trial-v0.2.6.1.zip
```

同时输出：

```text
Spatial-Flow-Crypto-Pay-Trial-V0.2.6.1-Narrow-Correction-Delivery-Report.md
```

# 二、唯一允许的源码修改

V0.2.6.1 与 V0.2.6 的源码 diff 只能包含：

1. 插件 Header：

```text
Version: 0.2.6
→
Version: 0.2.6.1
```

2. 版本常量：

```php
SF_CRYPTO_PAY_VERSION = '0.2.6'
→
SF_CRYPTO_PAY_VERSION = '0.2.6.1'
```

3. epoch option autoload 参数：

```php
add_option(SF_CRYPTO_PAY_WORKSPACE_EPOCH_OPTION, 1, '', 'no');
→
add_option(SF_CRYPTO_PAY_WORKSPACE_EPOCH_OPTION, 1, '', false);
```

除此之外，不允许修改任何源码字符、格式、注释、空行、函数、类或文件。

# 三、必须保持字节一致

以下文件必须与已审查 V0.2.6 字节一致：

```text
includes/class-sf-crypto-pay-order-guard.php
includes/class-sf-crypto-pay-workspace-token.php
includes/class-sf-crypto-pay-invoice-service.php
includes/class-sf-crypto-pay-payment-service.php
includes/class-sf-crypto-pay-rest-controller.php
includes/class-sf-crypto-pay-workspace.php
includes/class-sf-crypto-pay-response.php
templates/crypto-pay-page.php
assets/crypto-pay.js
assets/crypto-pay.css
```

主插件 PHP 除上述三处之外也必须字节一致。

# 四、本轮继续禁止

不要：

- 开始 Plugin Step 2；
- 注册 REST；
- 注册 order-pay Hook；
- 实现 Token；
- 实现 CSRF；
- 实现 MySQL Lock；
- 实现 Workspace；
- 改 process_payment()；
- 重构 Invoice；
- 重构 Transaction Hash；
- 改 Sandbox；
- 改 /crypto-pay/；
- 改模板、CSS 或 JS；
- 修改数据库 Schema；
- 实现 epoch 自动递增；
- 修改项目二 Checkout；
- 加入二维码、倒计时、过期、监控、多币种或多网络。

# 五、必须完成的检查

1. 输出 ZIP SHA256。
2. 全部 PHP 文件执行语法检查。
3. ZIP 根目录必须仍为：

```text
spatial-flow-crypto-pay/
```

4. 对 V0.2.6 与 V0.2.6.1 执行精确 diff，并明确报告只有三处源码变化。
5. 对十个要求保持不变的文件逐一计算 SHA256，证明与 V0.2.6 一致。
6. 确认没有新增或删除任何文件。
7. 确认没有新增 Hook、Filter、Route、Redirect 或数据库操作。
8. 确认 Feature Flag 打开或关闭仍不会改变支付路径。
9. 确认 sf_crypto_pay_maybe_upgrade() 保持不变。
10. 确认 process_payment() 与 V0.2.6 完全一致。

# 六、交付报告格式

请按以下结构输出：

# Spatial Flow Crypto Pay Trial V0.2.6.1 · Narrow Correction Delivery Report

## 1. Input Baseline and SHA256
## 2. Exact Three Source Changes
## 3. Files Confirmed Byte-Identical
## 4. Confirmed Non-Changes
## 5. PHP and ZIP Checks
## 6. Output ZIP SHA256
## 7. Local Runtime Tests Still Required
## 8. Stop Point

停止点：

只交付 V0.2.6.1 ZIP 和窄范围修正报告。
不要开始任何后续开发。
```
