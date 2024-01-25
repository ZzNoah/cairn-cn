gen_data['character'] = [
  '你是<i>{name}·{surname}</i>，曾任{background}。你体格{physique}，皮肤{skin}，毛发{hair}，面容{face}。你言谈{speech}，穿着{clothing}。你{vice}但{virtue}，并公认{reputation}。你不幸遭受了{misfortune}。'
]

gen_data['name'] = [
'阿贡恩'
, '碧翠丝'
, '布瑞根'
, '布朗温'
, '坎诺拉'
, '芝艾欧'
, '埃吉欧'
, '埃斯米'
, '格瑞娅'
, '赫奈恩'
, '利兰'
, '利拉瑟欧'
, '丽莎白'
, '莫拉利欧'
, '莫格温'
, '希泊'
, '希欧恩'
, '温内恩'
, '伊格沃'
, '伊斯伦'
, '阿沃欧'
, '拜文'
, '博若斯'
, '伯瑞德'
, '布瑞苟'
, '布瑞格勒'
, '坎霍瑞欧'
, '艾姆瑞斯'
, '艾赛克斯'
, '格林苟'
, '格林维特'
, '格鲁威德'
, '格鲁斯'
, '格威斯汀'
, '曼诺格'
, '麦欧纳克斯'
, '奥萨克斯'
, '崔安尼恩'
, '温兰'
, '伊尔米尔'
]

gen_data['surname'] = [
'阿伯纳西'
, '阿德卡普'
, '伯尔'
, '坎德维克'
, '科米克'
, '克拉姆沃勒'
, '邓斯沃洛'
, '盖特瑞'
, '格莱斯'
, '哈克尼斯'
, '哈珀'
, '卢末'
, '迈克斯谬克'
, '斯迈斯'
, '桑德曼'
, '斯温尼'
, '撒切尔'
, '托尔门'
, '韦弗'
, '沃尔德'
]

gen_data['background'] = [
  '炼金师'
,  '铁匠'
,  '窃贼'
,  '屠夫'
,  '木匠'
,  '牧师'
,  '赌徒'
,  '掘墓人'
,  '草药师'
,  '猎人'
,  '魔法师'
,  '佣兵'
,  '商人'
,  '矿工'
,  '亡命徒'
,  '演员'
,  '扒手'
,  '走私贩'
,  '仆从'
,  '游侠'
]

gen_data['physique'] = [
  '匀称'
,  '健壮'
,  '高耸'
,  '矮胖'
,  '结实'
,  '运动'
,  '瘦长'
,  '矮小'
,  '骨瘦'
,  '软弱'
]

gen_data['skin'] = [
  '深暗'
,  '胎记'
,  '晒黑'
,  '瘢麻'
,  '风霜'
,  '油滑'
,  '苍白'
,  '完美'
,  '玫红'
,  '纹身'
]

gen_data['hair'] = [
  '光秃'
,  '编辫'
,  '油滑'
,  '波浪'
,  '卷毛'
,  '长发'
,  '稀疏'
,  '肮脏'
,  '拳曲'
,  '奢华'
]

gen_data['face'] = [
  '棱角'
,  '方脸'
,  '骨感'
,  '锋利'
,  '凹沉'
,  '拉长'
,  '破碎'
,  '柔软'
,  '似鼠'
,  '圆润'
]

gen_data['speech'] = [
  '粗钝'
,  '洪亮'
,  '单调'
,  '沙哑'
,  '隐晦'
,  '正式'
,  '结巴'
,  '严谨'
,  '尖锐'
,  '呢喃'
]

gen_data['clothing'] = [
  '古朴'
,  '血腥'
,  '馊臭'
,  '污脏'
,  '老套'
,  '优雅'
,  '磨损'
,  '异域'
,  '制服'
,  '肮脏'
]

gen_data['virtue'] = [
  '雄心'
,  '勇敢'
,  '自律'
,  '荣耀'
,  '沉着'
,  '仁慈'
,  '谦逊'
,  '宽容'
,  '合群'
,  '谨慎'
]

gen_data['vice'] = [
  '好斗'
,  '刻薄'
,  '怯懦'
,  '狡诈'
,  '贪婪'
,  '记仇'
,  '懒惰'
,  '紧张'
,  '粗鲁'
,  '虚荣'
]

gen_data['reputation'] = [
  '古怪'
,  '睿智'
,  '尊敬'
,  '雄心'
,  '丑恶'
,  '危险'
,  '诚实'
,  '粗野'
,  '懒散'
,  '逗趣'
]

gen_data['misfortune'] = [
  '遗弃'
,  '成瘾'
,  '勒索'
,  '蒙罪'
,  '诅咒'
,  '遇骗'
,  '降职'
,  '辱没'
,  '决裂'
,  '流放'
]

gen_data['equipment'] = [
  '护甲：{armor}<br>头盔/盾牌：{helmet}<br>武器：{weapons}<br>物品：{tool,gear,trinket}<br>额外物品：{bonus}'
]
gen_data['armor'] = {
  '1-3': '无上身防具',
  '4-14': '镶嵌甲（1 护甲，笨重）',
  '15-19': '链甲（2 护甲，笨重）',
  '20': '板甲（3 护甲，笨重）'
}

gen_data['helmet'] = {
  '1-13': '，无头盔及盾牌',
  '14-16': '，头盔（+1 护甲）',
  '17-19': '，盾牌（+1 护甲）',
  '20': '，头盔（+1 护甲）和盾牌（+1 护甲）'
}

gen_data['weapons'] = {
'1-10':'{wgroup1}',
'11-14':'{wgroup2}',
'15-19':'{wgroup3}',
'20':'{wgroup4}'
}

gen_data['wgroup1'] = ['匕首', '棍棒', '杖']
gen_data['wgroup2'] = ['剑', '硬头锤', '斧']
gen_data['wgroup3'] = ['弓（笨重）', '弩（笨重）', '投石索']
gen_data['wgroup4'] = ['戟（笨重）', '战锤（笨重）', '战斧（笨重）']

gen_data['armor_weapons'] = {
  '1-10':'{armor}',
  '11-20':'{weapons}'
}

gen_data['tool_trinket'] = {
  '1-10':'{tool}',
  '11-20':'{trinket}'
}

gen_data['bonus'] = {
  '1-6': '{tool_trinket}',
  '7-13': '{gear}',
  '14-17': '{armor_weapons}',
  '18-20': '法术书（包含法术\'{spellbook}\'）'
}

gen_data['tool'] = [
'风箱'
,  '水桶（叠放）'
,  '蒺藜'
,  '粉笔'
,  '凿子'
,  '炊具'
,  '撬棍'
,  '手动钻头'
,  '鱼竿'
,  '胶水（叠放）'
,  '油脂'
,  '锤子'
,  '沙漏'
,  '金属锉刀（叠放）'
,  '钉子（叠放）'
,  '网（叠放）'
,  '锯子'
,  '密封剂'
,  '铲子'
,  '钳子'
]

gen_data['trinket'] = [
'瓶子'
,  '牌组（叠放）'
,  '骰组（叠放）'
,  '脸彩'
,  '假珠宝（叠放）'
,  '号角'
,  '焚香（叠放）'
,  '乐器'
,  '透镜'
,  '弹珠（叠放）'
,  '镜子'
,  '香水'
,  '羽毛笔&墨水'
,  '盐袋（叠放）'
,  '小铃铛'
,  '肥皂（叠放）'
,  '海绵'
,  '焦油罐'
,  '细绳（叠放）'
,  '哨子'
]

gen_data['gear'] = [
'气囊'
,  '抗毒剂'
,  '板车（+4 栏位，笨重）'
,  '锁链（10\'）'
,  '道金棒'
,  '火油'
,  '抓钩'
,  '大麻袋'
,  '大陷阱'
,  '开锁器'
,  '手铐'
,  '镐子'
,  '长杆（10\'）'
,  '滑轮'
,  '驱虫剂'
,  '绳索（25\'）'
,  '结界法物'
,  '望远镜'
,  '火绒盒'
,  '狼毒草'
]

gen_data['spellbook'] = [
'黏附'
,  '锚丝'
,  '活化物体'
,  '拟人'
,  '奥术眼'
,  '星界监狱'
,  '磁吸'
,  '幻听'
,  '乱语'
,  '饵花'
,  '兽形'
,  '迷糊'
,  '换身'
,  '魅惑'
,  '命令'
,  '领悟'
,  '泡沫锥'
,  '操控植物'
,  '操控天气'
,  '治愈创伤'
,  '耳聋'
,  '侦测魔法'
,  '拆卸'
,  '伪装'
,  '移位'
,  '地震'
,  '弹性'
,  '元素墙'
,  '取物'
,  '炽光弹'
,  '雾云'
,  '狂暴'
,  '异界门'
,  '重力转移'
,  '贪婪'
,  '加速'
,  '仇恨'
,  '聆听耳语'
,  '悬浮'
,  '催眠'
,  '冰触'
,  '鉴别物主'
,  '照明'
,  '隐形系绳'
,  '敲击'
,  '跳跃'
,  '液态空气'
,  '魔法缓冲'
,  '住宅'
,  '弹珠狂欢'
,  '假面'
,  '微缩'
,  '镜影'
,  '镜行'
,  '多臂'
,  '夜球'
,  '物化'
,  '泥形'
,  '安抚'
,  '恐惧症'
,  '陷坑'
,  '原始澎湃'
,  '推/拉'
,  '复苏死者'
,  '复苏魂灵'
,  '读心'
,  '磁斥'
,  '视卜'
,  '雕塑元素'
,  '感知'
,  '护盾'
,  '遮蔽'
,  '易位'
,  '睡眠'
,  '滑溜'
,  '烟形'
,  '嗅闻'
,  '熄灭'
,  '排序'
,  '奇观'
,  '法术锯'
,  '蛛爬'
,  '召唤方块'
,  '化群'
,  '心灵遥控'
,  '心灵感应'
,  '传送'
,  '标靶'
,  '灌丛'
,  '召唤石偶'
,  '时间操控'
,  '真视'
,  '涌泉'
,  '视控'
,  '幻视'
,  '结界'
,  '蛛网'
,  '部件'
,  '法师标记'
,  'X光透视'
]
