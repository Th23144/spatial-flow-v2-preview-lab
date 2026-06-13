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

【保留功能】
说明保留了哪些 WordPress / WooCommerce / Wishlist / Cart / Search / Mobile Menu 功能。

【视觉来源】
说明对应 V2 静态稿哪一块。

【风险】
说明可能影响哪里。

【回滚】
说明恢复哪一段或恢复哪个备份文件。

当前下一步：
等待用户重新上传服务器当前源文件，建议先上传：

- `header.php`
- `footer.php`
- `assets/css/spatial-flow.css`

然后执行：
`Step 4B-R1 · Header 精确替换方案`

先只做 Header，不碰 Footer。Header 通过后再做 Footer，之后再回到 Shop body。
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
