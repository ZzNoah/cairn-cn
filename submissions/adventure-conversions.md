---
layout: default
title: 冒险转换
nav_order: 3
parent: 提交
---

# 冒险转换

- 向《Cairn》网站提交冒险时，请遵循下述模板。
- 文本转换请遵循[格式指南](/submissions/style-guide)。
- 文件应按 [Markdown](/submissions/submission-guide/#markdown) 书写。文件名应用英文小写，并用 \*.md 后缀（譬如：cool-adventure.md），或用小写汉语拼音（譬如：xuankumaoxian.md）。
- 确保在文件顶部添加 "front matter"（以`---`开头的部分），否则提交将无效。举例而言，见[此处](/adventures/conversions/stellarium-of-the-vinteralf)（原始文本[此处](https://github.com/yochaigal/cairn/blob/main/adventures/conversions/stellarium-of-the-vinteralf.md) ）。
- 冒险提交应*始终*注明原作作者*以及*转换作者的署名。
- 请链接到作者、冒险以及（假若你方便）你自己的网站或联系方式。
- 若可能，请尽量征得作者的同意。若不征求，也没关系！我们一般用不上，就像锦上添花。

## 提交模版

```
---
layout: default
parent: 转换
grand_parent: 冒险
title: 冒险标题
nav_exclude: true
search_exclude: true
---

# 冒险标题

- 基于[原作](原作页面链接) by 作者署名](作者页面链接).
- 转换 by [你的署名](你的联系方式链接]

## 一般注释
- 在这写各种转换注释！Put any notes on the conversion here!
- 既可单独列出怪物 & NPC，也可按出现地点列出。

## 怪物 & NPC

### 怪物名称
怪物 1
- 特殊细节（危急伤害，能力）
- 更多特殊细节，等等。

## 地点
### 地点 A
#### 怪事物 1
- 怪事物 1

```

注意，Front Matter 指令中的 "nav_exclude" 和 "search_exclude" 仅用于施工阶段；转换完工后就可删掉那两行。
