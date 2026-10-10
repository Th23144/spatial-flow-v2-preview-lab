# Project2 · Blog Search05 — user provisional selection / 暂定

记录日期：2026-10-10
用户原话：**“先暂定这一版吧”**。

## 唯一准确的状态
**Search05 暂定采用（PROVISIONAL / 待最终全站一致性复核）**。
- 用户允许先以 Search05 作为后续设计的基准，进入下一页；但这**不是**“最终封版”，也不是生产 WordPress 1:1 映射通过。
- 不应把“暂定”误记为正式视觉验收 PASS，不能宣称响应式/全浏览器 QA 已通过。
- Search01/02/03 均已被用户否决；Search04 修正版为可比较/回退参考；当前选中的是在 Search04 上精修的 Search05。
- 原定流程仍然有效：先完成所有博客静态页面并统一视觉复核，最后才做 WordPress 映射；本轮未动用户 WP 源码或线上站点。

## Search05 精确锁定快照
候选静态预览：
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/e0017a00c283dc6c99ce590c509fbf8f5bc45686/temp-preview/Spatial-Flow-Journal-Search-05.html

分支：`temp-blog-search04-refinement-05`
文件：`temp-preview/Spatial-Flow-Journal-Search-05.html`
固定提交：`e0017a00c283dc6c99ce590c509fbf8f5bc45686`

对照上版 Search04：
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/bb5391d8240a7264c6f5bcbb7c1e333eb23c5231/temp-preview/Spatial-Flow-Journal-Search-04.html

已确定的设计方向：紧贴项目三高保真 Archive 原版的字体、纸色/墨色/朱砂比例、墨色 Inquiry 双栏、纸色 Shelf 目录；Search05 仅收紧墨色区留白，上方三项为结果数量概览不承担重复筛选，下方 Shelf 为真正的类型筛选及文章列表。无默认按钮白框，隐藏屏幕阅读器标签不得泄漏。

## 后续计划及未决事项
**下一页按锁定顺序进入 Blog 404 / Empty State（博客 404、空状态、相关 taxonomy/author/tag 路由覆盖检查）。** 继续静态预览，不提前映射。

随后进行博客各页面视觉与移动端的统一大审查，再决定 Search05 是否从“暂定”升级为“最终通过”。不得因为用户暂定就跳过这道回归检查。

真实 `/search/?q=…`：独立博客文章（最多9）、页面（最多6）、类别/主题（最多12），独立于原生 WP `?s=…` 和主站产品检索；预览样本不是正式 WordPress 搜索数据。

## 跨页面永久提醒
Single Article04 的 Afterword 是每篇文章**可选的真实内容，不是设计占位**。将来进入 WordPress 生产映射，必须主动提醒用户、在编辑后台提供清楚用途教学，而非预填看似已发布的抒情文案；没有填写则前端整个隐藏。另一个 Reading Invitation 模块必须独立保留。

权威规范：`project2-progress/LOCKED_BLOG_SINGLE_ARTICLE_AFTERWORD_EDITORIAL_CONTENT_CONTRACT_20261009.md`。
