# Project 2 · Next Window Prompt

Last updated: 2026-09-03

复制下面这段给新窗口，用于继续 Project 2：

```text
继续 Project 2 · Spatial Flow V2 换皮工程。

先读取 GitHub 仓库 `Th23144/spatial-flow-v2-preview-lab`：

1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_ACTIVE_STOP_POINT_20260816.md
3. PROJECT2_DOCS_INDEX.md
4. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
5. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
6. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
7. PROJECT2_CSS_MAINTENANCE_POLICY.md
8. PROJECT2_STEP_RECORDING_POLICY.md
9. PROJECT2_RUNTIME_TEST_BATCHING_POLICY.md
10. project2-progress/PROJECT2_POST_CHECKOUT_PAGE_INVENTORY_RECONCILIATION_20260903.md

历史优先级：
later explicit correction/rejection/rollback
> later formal runtime/source/user acceptance
> later standing policy
> older plan/snapshot

当前 binary 状态：
- Header: Completed 1:1
- Footer: Completed 1:1
- Shop archive: Completed 1:1
- Single Product: Completed 1:1
- Cart: Completed 1:1
- Checkout: Completed 1:1
- Thank You / WooCommerce Order Result: Completed 1:1

仍然 Not done：
- Home
- Wishlist
- Track Order
- Account
- Search
- 404
- About Us
- Services
- FAQ / Help
- Contact
- Utility / policy pages
- Blog Header/Footer branch
- Blog home
- Blog issue
- Blog article

注意：Wishlist / Track Order / About Us / Services / FAQ 等过去存在“完成、通过、原生重做”等历史记录，但没有后来严格 `Completed 1:1` 的 binary closure，因此按用户规则仍视为 `Not done`。不要因为旧的局部 pass 自动宣布完成。

Checkout 已正式封版，不要继续找 Checkout 子任务：
- Step01/02/03/04 均闭环
- Product Packaging 闭环
- Step03 gateway host 闭环
- Step01 refresh FOUC 闭环
- Order Summary / Payment AJAX white wash 闭环
- Terms notice / Processing Payment / direct mini-cart Checkout notice 闭环
- Crypto transfer button typography 闭环
- Crypto Refresh Status 手动反馈闭环
- WPCode 1706 `收款页` 必须保持 disabled，不删除

明确 deferred / non-blocking：
- Single Product Story Behind
- Single Product Care Ritual
- Single Product real WooCommerce Reviews / Quiet Notes
- Step04 status icon micro polish
- conditional Step02 no-method / true multi-rate regression
- future Crypto rate lock / QR / expiry / monitoring / WalletConnect / multi-asset/network
- Crypto Workspace rollout flag
- Project2-CLEAN-CSS global CSS consolidation

当前推荐下一页：Home。
静态视觉参考：`preview/spatial-flow-v1.html`。

不要直接改 Home。先执行：
`Step 4G-A · Home current live source + ownership audit`

第一步只读检查：
- 找出 `/` 实际由哪个 WordPress 页面/模板负责
- 检查 Home 当前 PHP/template/shortcode/page-builder ownership
- 检查 Home CSS/JS ownership
- 检查后台可编辑文案、媒体、菜单、商品/分类数据来源
- 对照 `preview/spatial-flow-v1.html` 做 live-vs-static delta
- 再给出 bounded implementation plan

执行原则：
- 用户重新上传的服务器当前文件 = 唯一当前真实基准
- 修改前先检查文件大小、行数、关键结构
- 不默认整文件覆盖
- 不在 CSS 末尾无限追加
- 优先原位替换/合并 canonical owner
- 后台可编辑性是硬边界
- WooCommerce/WordPress/插件真实数据与业务逻辑不能被静态假数据替换
- 每个有意义的步骤先写 GitHub 再推进
- 一个测试 batch 一次性把需要用户做的检查说完整，不要做完后再临时追加可预见的截图/测试轮次

不要重新打开 Header/Footer/Shop/Single Product/Cart/Checkout/Thank You，除非出现新的具体回归证据。
```
