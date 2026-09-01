# Step 4F · Step03 WPCode active-snippet list reconfirm · 2026-09-01

User supplied a fresh WPCode `Code Snippets` list screenshot while diagnosing the Step03 gateway-host white-card override.

Visible status:

- All: 12
- Active: 7
- Inactive: 5
- Trash: 4

Visible active snippets:

- ID 3094 — 购物车css — CSS — Site Wide Header — active
- ID 3093 — 订单查询结果css — CSS — Site Wide Header — active
- ID 3071 — 订单查询美化 — CSS — Site Wide Header — active
- ID 2801 — 主站限制搜索及页面定向 — PHP — Run Everywhere — active
- ID 1706 — 收藏页 — CSS — Site Wide Header — active
- ID 1682 — 页眉固定 — HTML — Site Wide Header — active
- ID 1598 — 筛选按钮 — HTML — Site Wide Footer — active

Visible inactive snippets:

- ID 1602 — 手机端菜单 — CSS
- ID 1198 — Untitled Snippet — JS
- ID 1197 — Untitled Snippet — CSS
- ID 1196 — 二级菜单 — HTML
- ID 1137 — Untitled Snippet — JS

Current runtime evidence already proves that one active WPCode CSS snippet injects a `<style class="wpcode-css-snippet">` containing the legacy header comment `WooCommerce Checkout UI - Final PRO (WPCode)` and `!important` Checkout payment-card rules. The list screenshot alone does not prove which of the four active CSS snippet IDs owns that body, because the visible snippet names may be misleading or broader than their current source.

Next safe action: inspect one active CSS snippet at a time without saving or disabling, starting with ID 3094, and search its editor contents for either:

- `WooCommerce Checkout UI - Final PRO (WPCode)`
- `body.woocommerce-checkout #payment .wc_payment_method`

No snippet should be edited, saved, disabled, or deleted until the exact owner is proven.
