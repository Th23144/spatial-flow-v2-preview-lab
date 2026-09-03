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
5. project2-progress/PROJECT2_USER_REOPEN_HEADER_FOOTER_SHOP_SINGLE_PRODUCT_20260903.md
6. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
7. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
8. PROJECT2_CSS_MAINTENANCE_POLICY.md
9. PROJECT2_STEP_RECORDING_POLICY.md
10. PROJECT2_RUNTIME_TEST_BATCHING_POLICY.md

历史优先级：
later explicit user correction/reopen
> later formal runtime/source/user acceptance
> standing policy
> older plan/snapshot/pass record

当前 binary 状态：
- Header: Not done
- Footer: Not done
- Shop archive: Not done
- Single Product: Not done
- Cart: Completed 1:1
- Checkout: Completed 1:1
- Thank You / WooCommerce Order Result: Completed 1:1

其余 Home / Wishlist / Track Order / Account / Search / 404 / About Us / Services / FAQ / Contact / Utility pages / Blog family 等均仍是 Not done。

2026-09-03 用户明确纠正：
- Header 仍有需要调整的地方；部分细节可能只在用户自己的记录里，仓库不完整，不要猜。
- Footer 仍有需要调整的地方；旧记录只能证明后台可编辑 owner 仍存在，不能替代最终真实后台可编辑性验收。
- Shop 明确未完成；仓库还记录了商品卡 Editorial Place Note 因缺少真实后台字段而刻意未实现。
- Single Product 旧的 Completed 1:1 结论被用户重新质疑并正式 reopen。已知 Story Behind / Care Ritual / Quiet Notes-Reviews 延期；静态稿还有 Closing Editor's Note，需要重新判定；必须做整页严格 1:1 总审。

不要为了补齐静态稿伪造商品故事、maker/origin、客户评论或 place note。需要真实内容时必须建立后台可编辑数据源并动态输出。

Checkout 已封版，不受此次 reopen 影响：
- Step01/02/03/04 已闭环
- Product Packaging 已闭环
- transient/error states 已闭环
- Crypto Workspace / Refresh Status 已闭环
- WPCode 1706 `收款页` 保持 disabled，不删除

此前准备进入 Home 的计划暂停。

当前下一步：
`Step 4D-REOPEN-A · Single Product whole-page strict 1:1 re-audit`

推荐顺序：
1. Single Product 整页严格复审
2. Header 严格复审
3. Footer 严格复审
4. Shop 严格复审
5. Home

除非用户明确改变顺序。

执行原则：
- 用户最新服务器源文件是唯一 live baseline
- 先审计再改代码
- 先区分：已完成 / 合理延期 / 真遗漏 / 用户新增调整
- 后台可编辑性是硬边界
- 不硬编码动态商业数据或虚构 editorial 内容
- CSS 优先 canonical 原位修正，不堆补丁
- 每个有意义步骤写 GitHub
- 一次性给完整可预见测试清单，不临时追加重复测试
```
