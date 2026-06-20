# Project 2 · Next Window Prompt

复制下面这段给新窗口，用于完整继承 Project 2：

```text
请先读取 GitHub 仓库 `Th23144/spatial-flow-v2-preview-lab` 中的两个文件：

1. `PROJECT2_CURRENT_STATE.md`
2. `PROJECT2_NEXT_WINDOW_PROMPT.md`

读取后再继续 Project 2 · Spatial Flow V2 换皮工程。

重要基准：
- 用户已经清空旧上传文件。
- 后续上传的是服务器当前源文件拷贝到本地后的最新文件。
- 之前本窗口生成过的所有补丁、下载文件、整文件替换版本全部作废。
- 不要把旧上传文件或旧生成文件当作当前真实基准。

执行原则：
- 不再优先整文件覆盖。
- 不再优先 CSS 末尾无限追加。
- 每次先读取用户上传的当前源文件。
- 先检查文件大小、行数、关键结构。
- 再对照 GitHub 静态视觉稿源码。
- 在聊天框内直接给可复制的精确替换代码。
- 不要默认让用户下载完整文件。
- PHP：保留 WordPress / WooCommerce 功能，把功能代码嵌入 V2 视觉结构。
- CSS：优先替换旧选择器块、合并重复补丁、删除无效旧块，必要时才追加。
- 目标是逐页 1:1 迁移，不是差不多像。
- 后台可编辑性是硬边界：用户当前成品站已经做到几乎所有后期运营内容都可在后台编辑，后续换皮不能破坏这个能力。
- 能用现有动态函数、theme_mod、option、菜单、shortcode、template-part、自定义字段，就不要写死静态文案。
- 如果静态稿里有固定文案，迁移到真实站时应优先映射到已有后台可编辑来源；确实没有来源时，必须明确标注“这里暂时硬编码”，并建议后续补后台字段。

标准输出格式：

文件：xxx.php / xxx.css

【先检查】
- 文件大小
- 行数
- 关键结构

【定位】
找到从：
...
到：
...

【删除 / 替换】
把这一段删除，替换成：
...

【保留功能 / 后台可编辑性】
说明保留了哪些 WordPress / WooCommerce / Wishlist / Cart / Search / Mobile Menu 功能，以及哪些后台可编辑来源被保留。

【视觉来源】
说明对应 V2 静态稿哪一块。

【风险】
说明可能影响哪里，尤其是否会损失后台可编辑能力。

【回滚】
说明恢复哪一段或恢复哪个备份文件。

当前状态：
- 用户已执行 Step 4B-R1 · Header 精确替换，并反馈检查没有问题。
- 新增硬要求：后台可编辑能力不可丢。

当前下一步建议：
`Step 4B-R2 · Header 可编辑性回补 / Footer 精确合并前审计`

先审计 Header 替换后是否丢失后台菜单可编辑性；如果丢失，应把桌面 Header 左侧栏目改回后台菜单优先、静态 fallback 备用。然后再进入 Footer。
```

## 对助手的额外提醒

如果用户说“继续项目二 / 继承项目二 / 读取 handoff”，必须先读取 `PROJECT2_CURRENT_STATE.md`，不要凭长期记忆直接继续。

如果用户重新上传文件，必须以新上传文件为唯一基准。

不要引用、使用、推荐此前生成的以下历史产物作为当前版本：

```text
project2-step-3g-shop-first-cut-*
project2-step-3g-c-shop-visual-gap-fix-*
project2-step-4a-shop-v2-structural-*
project2-step-4b-editorial-shell-*
project2-step-4b-r1-editorial-header-precise-*
```

这些历史产物最多只作为“曾经尝试过但作废”的参考。
