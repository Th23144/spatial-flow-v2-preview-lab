# Project 2 · S4B Payment-Plugin Integration Contract Prompt Proposal

Date: 2026-07-31  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Purpose: prompt for the separate Spatial Flow Crypto Pay plugin window
Stage: prepared for user delivery
Plugin code generation: not authorized
Plugin version increment: not authorized
Project 2 page modification: not authorized
```

## Prompt to send to the payment-plugin window

```text
你已经完成《Spatial Flow Crypto 支付插件架构交接报告》，并确认当前源码基线为：

Spatial Flow Crypto Pay Trial
Version: 0.2.5
Gateway class: SF_Crypto_Pay_Gateway
Gateway ID: spatial_flow_crypto

另一个项目二 Checkout 窗口已经对报告和 V0.2.5 ZIP 做了独立核验，并完成 S4B 架构决策。

本轮不要生成新插件 ZIP，不要修改代码，不要直接开始 V0.2.6，也不要扩展多币种、多链或钱包连接。

本轮唯一任务是：

【为项目二 Step 03 Crypto Payment Workspace 输出一份严格、可审查的插件集成接口契约。】

一、已经锁定的架构结论

1. 当前真实资产固定为 USDT。
2. 当前真实网络固定为管理员配置的 TRON 环境。
3. Mainnet / Nile / Shasta 由管理员全局选择，顾客不能逐订单选择。
4. 项目二 S4A 不再作为真实多资产、多网络选择器。
5. S4A 的正式目标是固定 USDT / TRON 的支付确认层。
6. WooCommerce 订单必须先创建，Crypto invoice 才能创建。
7. 订单等待付款时保持 on-hold。
8. Crypto Invoice / Waiting 仍属于用户可见的 Step 03 子页面。
9. 支付成功只能由服务器验证后调用 payment_complete()。
10. Step 04 只能在服务器确认付款后进入。
11. 项目二可以控制 Invoice / Waiting 页面视觉外壳。
12. 插件必须控制真实订单、Invoice、地址、金额、验证和订单状态。

二、本轮必须设计的最小契约

请基于 V0.2.5 现有代码，提出一个最小、可渐进实现的集成契约，至少覆盖：

1. Create or Reuse Invoice
2. Get Current Invoice
3. Submit Transaction Hash
4. Get Payment Status
5. Sandbox Simulate Success
6. Recover Unfinished Payment
7. Customer-safe Error Response
8. Server-authoritative Success Response

你可以建议使用：

- WordPress REST API；
- authenticated / guest-safe AJAX；
- 返回 JSON 的 admin-post 兼容层；
- 服务端渲染 PHP；
- 混合方式。

但必须根据当前插件和 WooCommerce 的安全边界选择，不能只因为 REST 看起来现代就默认选 REST。

三、每个操作都必须说明

对每一个操作，请提供：

- 操作名称；
- 建议传输方式；
- HTTP method（如适用）；
- Endpoint / action 名称建议；
- 登录顾客和游客结账如何授权；
- 必填输入字段；
- 可选输入字段；
- 成功响应字段；
- 失败响应字段；
- Nonce / Order Key / Capability 校验；
- 幂等规则；
- 可以重复调用的条件；
- WooCommerce 订单状态影响；
- Invoice 数据库影响；
- 是否能在刷新页面后恢复；
- 是否需要修改 V0.2.5 现有函数；
- 可以复用的现有函数、表和 Meta。

四、统一响应模型

请设计统一 JSON 响应结构。至少考虑：

- success；
- code；
- message；
- retryable；
- order；
- invoice；
- payment；
- actions；
- redirect_url。

Invoice 至少评估这些字段是否应返回：

- order_id；
- invoice_id；
- payment_method；
- asset_code；
- network_code；
- network_label；
- environment；
- fiat_currency；
- fiat_amount；
- expected_amount_decimal；
- receiver_address；
- status；
- expires_at；
- tx_hash；
- reject_code；
- reject_message；
- sandbox；
- order_received_url。

不要在响应中返回：

- API Key；
- Webhook Secret；
- 私钥；
- 不必要的 raw TronGrid 数据；
- 可用于绕过订单权限的数据。

五、状态模型

当前 V0.2.5 主要只有：

waiting_payment
paid_confirmed

请为“第一阶段项目二接入”提出最小状态模型。

不要一次性设计完整支付平台。请明确：

- 第一阶段必须有的状态；
- 可以继续沿用的状态；
- 需要新增的状态；
- 暂缓到未来 Worker / 自动检测阶段的状态。

至少评估：

- waiting_payment；
- verification_failed；
- paid_confirmed；
- expired；
- cancelled；
- manual_review。

如果当前没有自动检测，就不要伪造 payment_detected 或 confirming 为已实现状态。

六、订单与页面恢复

请详细说明：

1. 顾客从 Checkout 创建订单后如何进入 Step 03 Crypto Workspace；
2. 页面刷新后如何重新取得当前 Invoice；
3. 顾客关闭浏览器后如何重新进入未完成付款；
4. 是否需要 order-pay 或自定义恢复 URL；
5. Order ID + Order Key 是否足够；
6. 如何防止读取其他顾客的订单；
7. 已付款订单再次打开时如何处理；
8. 已取消订单如何处理；
9. 是否需要新的 WooCommerce My Account 能力；
10. 游客结账如何安全恢复。

七、当前手动 tx hash 流程

第一阶段保留“用户提交 tx hash”作为真实验证方式。

请说明：

- 新页面如何调用现有验证逻辑；
- 是否应重构 sf_crypto_pay_submit_tx；
- 如何返回结构化错误；
- 如何防止重复提交；
- 同一订单重复提交已成功 hash 时如何幂等；
- 其他订单已经使用该 hash 时如何处理；
- 验证成功后如何返回 order_received_url；
- 验证失败时如何保持 on-hold 并允许重试。

八、Sandbox 契约

必须保留当前管理员专用 Sandbox 成功路径。

请说明：

- Sandbox 操作的 Endpoint / action；
- manage_woocommerce 权限校验；
- nonce；
- invoice 和 order 校验；
- 如何通过与正式支付一致的响应模型返回；
- 如何明确 sandbox=true；
- 如何避免普通顾客看到或调用；
- 是否继续调用 payment_complete()；
- 是否继续进入真实 WooCommerce Thank You 路径。

九、本轮明确不做

不要把以下内容放入第一阶段实现范围：

- USDC；
- BTC；
- 多资产选择；
- 多网络顾客选择；
- Ethereum、Solana、Bitcoin、BNB、Base、Arbitrum 正式支付；
- WalletConnect；
- TronLink；
- MetaMask；
- HD wallet；
- 地址池；
- 自动退款；
- 完整实时汇率系统；
- 自动扫链 Worker；
- Webhook；
- WP-Cron 自动确认；
- WooCommerce Blocks 支付注册；
- 生产级多节点架构。

可以把它们列为未来阶段，但不得混入当前契约和工期。

十、输出格式

请严格按以下结构输出：

# Spatial Flow Crypto Pay · Project 2 Integration Contract Proposal

## 1. 推荐的集成方式

## 2. 为什么选择该方式

## 3. 现有 V0.2.5 可直接复用的代码

## 4. 需要重构但不应删除的代码

## 5. Create or Reuse Invoice 契约

## 6. Get Current Invoice 契约

## 7. Submit Transaction Hash 契约

## 8. Get Payment Status 契约

## 9. Sandbox Simulate Success 契约

## 10. Unfinished Payment Recovery 契约

## 11. 统一 JSON Schema

## 12. 最小 Invoice 状态机

## 13. WooCommerce 订单状态映射

## 14. 授权、Nonce、Order Key 和权限模型

## 15. 幂等与重复请求处理

## 16. 项目二前端可以安全读取的字段

## 17. 项目二前端禁止控制的字段和操作

## 18. 第一阶段建议修改的插件文件

## 19. 第一阶段明确不修改的插件文件或能力

## 20. 实施顺序和每步验收标准

## 21. 仍需项目二窗口决定的问题

十一、第一轮停止点

本轮只输出契约提案。

不要：

- 生成 ZIP；
- 输出完整新版代码；
- 声称已经实现；
- 自动决定插件新版本号；
- 开始多币种、多链；
- 修改项目二页面。

等用户把契约提案交回项目二窗口审查并明确批准后，再进入插件开发。
```

## Project 2 review gate

When the contract proposal returns, Project 2 must verify:

```text
- the proposed transport fits guest Checkout security
- order-key and nonce authorization cannot expose other orders
- invoice creation is idempotent
- successful payment remains server-authoritative
- Sandbox remains administrator-only
- response fields are sufficient for S4A and S5
- no future multi-chain scope leaked into the first integration revision
- unfinished-payment recovery is concrete
- the proposal distinguishes implemented behavior from future automatic monitoring
```

Only after approval may the separate plugin workstream receive a code-generation instruction.
