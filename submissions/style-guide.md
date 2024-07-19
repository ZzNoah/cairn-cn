---
layout: default
title: 格式指南
nav_order: 2
parent: 提交
---

# 格式指南

下述指南介绍了向《石冢》网站提交材料的预期格式。
**所有提交须按 [markdown](/submissions/submission-guide/#markdown) 写作。**

## 冒险
- 见[冒险提交模版](/submissions/adventure-conversions/#submission-template)。 
- 请遵循[怪物](#怪物)和[奇物](#奇物)指引来纳入转换。 

## 奇物
奇物遵循如下模版：
```
#### 奇物名称，# 发充能
- 酷炫奇物说明
- **充能**：如何重新充能（若可行）
```

## 怪物（在冒险转换中）
- 若某项属性值为 10，则可选择忽略。
- 注意*数值*要写在数据**前面**（譬如 2 HP，1 护甲）
- 标准怪物格式如下：

```
#### 怪物名称
# HP，# 护甲，# 力量，# 敏捷，# 意志，武器1（d#），物品或能力（特殊细节）
- 生动描述外貌或举止。
- 使此生物独特的怪癖、策略或特性。
- 特殊效果或危急伤害后果。
```

### 怪物志（网站上的怪物目录）
- 注意 Front Matter（以 `---` 开头）和结尾的空行。
- 注意怪物名称、数据、特殊条目之间的空格。
- 包括每项属性值，*即便仅为 10*。
- 举例而言，见[侍僧](/resources/monsters/acolyte)及其[源代码文本](https://github.com/ZzNoah/cairn-cn/blob/main/resources/monsters/acolyte.md)。
- 提交给网站的怪物（有别于冒险转换）须遵循下述格式。

```
---
layout: default
parent: 怪物
grand_parent: 资源
---

# 怪物名称

# HP，# 护甲，# 力量，# 敏捷，# 意志，武器1（d#），物品或能力（特殊细节）

- 生动描述外貌或举止。
- 使此生物独特的怪癖、策略或特性。
- 特殊效果或危急伤害后果。

```
