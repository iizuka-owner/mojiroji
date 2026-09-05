const ANSWERS = [
    {
        normalized: "あいうち",
        originals: [
            "相打ち",
        ]
    },
    {
        normalized: "あいかき",
        originals: [
            "合いかぎ",
        ]
    },
    {
        normalized: "あいかた",
        originals: [
            "相方",
        ]
    },
    {
        normalized: "あいけん",
        originals: [
            "愛犬",
        ]
    },
    {
        normalized: "あいこう",
        originals: [
            "愛好",
        ]
    },
    {
        normalized: "あいこく",
        originals: [
            "愛国",
        ]
    },
    {
        normalized: "あいこん",
        originals: [
            "アイコン",
        ]
    },
    {
        normalized: "あいさい",
        originals: [
            "愛妻",
        ]
    },
    {
        normalized: "あいさつ",
        originals: [
            "挨拶",
        ]
    },
    {
        normalized: "あいしや",
        originals: [
            "愛車",
        ]
    },
    {
        normalized: "あいしん",
        originals: [
            "愛人",
        ]
    },
    {
        normalized: "あいせき",
        originals: [
            "相席",
        ]
    },
    {
        normalized: "あいそう",
        originals: [
            "愛想",
        ]
    },
    {
        normalized: "あいたい",
        originals: [
            "相対",
        ]
    },
    {
        normalized: "あいつち",
        originals: [
            "相づち",
        ]
    },
    {
        normalized: "あいてむ",
        originals: [
            "アイテム",
        ]
    },
    {
        normalized: "あいとく",
        originals: [
            "愛読",
        ]
    },
    {
        normalized: "あいとる",
        originals: [
            "アイドル",
        ]
    },
    {
        normalized: "あいのて",
        originals: [
            "合いの手",
        ]
    },
    {
        normalized: "あいひき",
        originals: [
            "合いびき",
        ]
    },
    {
        normalized: "あいへや",
        originals: [
            "相部屋",
        ]
    },
    {
        normalized: "あいほう",
        originals: [
            "相棒",
        ]
    },
    {
        normalized: "あいよう",
        originals: [
            "愛用",
        ]
    },
    {
        normalized: "あいろん",
        originals: [
            "アイロン",
        ]
    },
    {
        normalized: "あえもの",
        originals: [
            "あえ物",
        ]
    },
    {
        normalized: "あおしる",
        originals: [
            "青汁",
        ]
    },
    {
        normalized: "あおそら",
        originals: [
            "青空",
            "天空",
        ]
    },
    {
        normalized: "あおのり",
        originals: [
            "青のり",
        ]
    },
    {
        normalized: "あおむき",
        originals: [
            "あお向き",
        ]
    },
    {
        normalized: "あおむけ",
        originals: [
            "あお向け",
        ]
    },
    {
        normalized: "あおむし",
        originals: [
            "青虫",
        ]
    },
    {
        normalized: "あかいろ",
        originals: [
            "赤色",
        ]
    },
    {
        normalized: "あかきれ",
        originals: [
            "あかぎれ",
        ]
    },
    {
        normalized: "あかさひ",
        originals: [
            "赤さび",
        ]
    },
    {
        normalized: "あかしお",
        originals: [
            "赤潮",
        ]
    },
    {
        normalized: "あかたし",
        originals: [
            "赤だし",
        ]
    },
    {
        normalized: "あかちん",
        originals: [
            "赤チン",
        ]
    },
    {
        normalized: "あかつき",
        originals: [
            "暁",
        ]
    },
    {
        normalized: "あかつち",
        originals: [
            "赤土",
        ]
    },
    {
        normalized: "あかはし",
        originals: [
            "赤恥",
        ]
    },
    {
        normalized: "あかへら",
        originals: [
            "アカペラ",
        ]
    },
    {
        normalized: "あかりめ",
        originals: [
            "上がり目",
        ]
    },
    {
        normalized: "あかるみ",
        originals: [
            "明るみ",
        ]
    },
    {
        normalized: "あきあき",
        originals: [
            "飽き飽き",
        ]
    },
    {
        normalized: "あきかん",
        originals: [
            "空き缶",
        ]
    },
    {
        normalized: "あきくち",
        originals: [
            "秋口",
        ]
    },
    {
        normalized: "あきさめ",
        originals: [
            "秋雨",
        ]
    },
    {
        normalized: "あきそら",
        originals: [
            "秋空",
        ]
    },
    {
        normalized: "あきない",
        originals: [
            "商い",
        ]
    },
    {
        normalized: "あきはこ",
        originals: [
            "空き箱",
        ]
    },
    {
        normalized: "あきはれ",
        originals: [
            "秋晴れ",
        ]
    },
    {
        normalized: "あきひん",
        originals: [
            "空き瓶",
        ]
    },
    {
        normalized: "あきらめ",
        originals: [
            "あきらめ",
        ]
    },
    {
        normalized: "あきんと",
        originals: [
            "あきんど",
            "商人",
        ]
    },
    {
        normalized: "あくうん",
        originals: [
            "悪運",
        ]
    },
    {
        normalized: "あくしゆ",
        originals: [
            "握手",
        ]
    },
    {
        normalized: "あくしよ",
        originals: [
            "悪女",
        ]
    },
    {
        normalized: "あくせい",
        originals: [
            "悪性",
        ]
    },
    {
        normalized: "あくせる",
        originals: [
            "アクセル",
        ]
    },
    {
        normalized: "あくたい",
        originals: [
            "悪態",
        ]
    },
    {
        normalized: "あくたま",
        originals: [
            "悪玉",
        ]
    },
    {
        normalized: "あくとう",
        originals: [
            "悪党",
        ]
    },
    {
        normalized: "あくとく",
        originals: [
            "悪徳",
        ]
    },
    {
        normalized: "あくにん",
        originals: [
            "悪人",
        ]
    },
    {
        normalized: "あくぬき",
        originals: [
            "あく抜き",
        ]
    },
    {
        normalized: "あくへき",
        originals: [
            "悪癖",
        ]
    },
    {
        normalized: "あくめい",
        originals: [
            "悪名",
        ]
    },
    {
        normalized: "あくやく",
        originals: [
            "悪役",
        ]
    },
    {
        normalized: "あくゆう",
        originals: [
            "悪友",
        ]
    },
    {
        normalized: "あくよう",
        originals: [
            "悪用",
        ]
    },
    {
        normalized: "あくりる",
        originals: [
            "アクリル",
        ]
    },
    {
        normalized: "あくるひ",
        originals: [
            "明くる日",
        ]
    },
    {
        normalized: "あけあし",
        originals: [
            "揚げ足",
        ]
    },
    {
        normalized: "あけかた",
        originals: [
            "明け方",
        ]
    },
    {
        normalized: "あけさけ",
        originals: [
            "上げ下げ",
        ]
    },
    {
        normalized: "あけしめ",
        originals: [
            "開け閉め",
        ]
    },
    {
        normalized: "あけそこ",
        originals: [
            "上げ底",
        ]
    },
    {
        normalized: "あけたし",
        originals: [
            "揚げ出し",
        ]
    },
    {
        normalized: "あけたま",
        originals: [
            "揚げ玉",
        ]
    },
    {
        normalized: "あけもの",
        originals: [
            "揚げ物",
        ]
    },
    {
        normalized: "あこかれ",
        originals: [
            "あこがれ",
        ]
    },
    {
        normalized: "あこひけ",
        originals: [
            "あごひげ",
        ]
    },
    {
        normalized: "あさいち",
        originals: [
            "朝市",
        ]
    },
    {
        normalized: "あさおき",
        originals: [
            "朝起き",
        ]
    },
    {
        normalized: "あさかお",
        originals: [
            "朝顔",
        ]
    },
    {
        normalized: "あさかた",
        originals: [
            "朝型",
            "朝方",
        ]
    },
    {
        normalized: "あさつけ",
        originals: [
            "浅漬け",
        ]
    },
    {
        normalized: "あさつて",
        originals: [
            "あさって",
        ]
    },
    {
        normalized: "あさはん",
        originals: [
            "朝飯",
            "朝晩",
        ]
    },
    {
        normalized: "あさめし",
        originals: [
            "朝飯",
        ]
    },
    {
        normalized: "あさもや",
        originals: [
            "朝もや",
        ]
    },
    {
        normalized: "あさやけ",
        originals: [
            "朝焼け",
        ]
    },
    {
        normalized: "あさゆう",
        originals: [
            "朝夕",
        ]
    },
    {
        normalized: "あさらし",
        originals: [
            "あざらし",
        ]
    },
    {
        normalized: "あされん",
        originals: [
            "朝練",
        ]
    },
    {
        normalized: "あしあと",
        originals: [
            "足跡",
        ]
    },
    {
        normalized: "あしおと",
        originals: [
            "足音",
        ]
    },
    {
        normalized: "あしかせ",
        originals: [
            "足かせ",
        ]
    },
    {
        normalized: "あしかる",
        originals: [
            "足軽",
        ]
    },
    {
        normalized: "あしくひ",
        originals: [
            "足首",
        ]
    },
    {
        normalized: "あしこし",
        originals: [
            "足腰",
        ]
    },
    {
        normalized: "あしさい",
        originals: [
            "あじさい",
        ]
    },
    {
        normalized: "あしつけ",
        originals: [
            "味付け",
        ]
    },
    {
        normalized: "あしとり",
        originals: [
            "足どり",
        ]
    },
    {
        normalized: "あしなみ",
        originals: [
            "足並み",
        ]
    },
    {
        normalized: "あしもと",
        originals: [
            "足もと",
        ]
    },
    {
        normalized: "あしわい",
        originals: [
            "味わい",
        ]
    },
    {
        normalized: "あすかり",
        originals: [
            "預かり",
        ]
    },
    {
        normalized: "あせたく",
        originals: [
            "汗だく",
        ]
    },
    {
        normalized: "あせとり",
        originals: [
            "汗取り",
        ]
    },
    {
        normalized: "あせみす",
        originals: [
            "汗水",
        ]
    },
    {
        normalized: "あせみち",
        originals: [
            "あぜ道",
        ]
    },
    {
        normalized: "あそひは",
        originals: [
            "遊び場",
        ]
    },
    {
        normalized: "あたつく",
        originals: [
            "アタック",
        ]
    },
    {
        normalized: "あたりや",
        originals: [
            "当たり屋",
        ]
    },
    {
        normalized: "あたると",
        originals: [
            "アダルト",
        ]
    },
    {
        normalized: "あつあけ",
        originals: [
            "厚揚げ",
        ]
    },
    {
        normalized: "あつかい",
        originals: [
            "扱い",
        ]
    },
    {
        normalized: "あつかみ",
        originals: [
            "厚紙",
        ]
    },
    {
        normalized: "あつかん",
        originals: [
            "圧巻",
            "熱燗",
        ]
    },
    {
        normalized: "あつきり",
        originals: [
            "厚切り",
        ]
    },
    {
        normalized: "あつせん",
        originals: [
            "斡旋",
        ]
    },
    {
        normalized: "あつとう",
        originals: [
            "圧倒",
        ]
    },
    {
        normalized: "あつはく",
        originals: [
            "圧迫",
        ]
    },
    {
        normalized: "あつふる",
        originals: [
            "アップル",
        ]
    },
    {
        normalized: "あつまり",
        originals: [
            "集まり",
        ]
    },
    {
        normalized: "あつやき",
        originals: [
            "厚焼き",
        ]
    },
    {
        normalized: "あつれき",
        originals: [
            "軋轢",
        ]
    },
    {
        normalized: "あてさき",
        originals: [
            "あて先",
        ]
    },
    {
        normalized: "あてつけ",
        originals: [
            "当て付け",
        ]
    },
    {
        normalized: "あてにけ",
        originals: [
            "当て逃げ",
        ]
    },
    {
        normalized: "あとあし",
        originals: [
            "後味",
        ]
    },
    {
        normalized: "あとおし",
        originals: [
            "後押し",
        ]
    },
    {
        normalized: "あとかき",
        originals: [
            "後書き",
        ]
    },
    {
        normalized: "あとかま",
        originals: [
            "後がま",
        ]
    },
    {
        normalized: "あとさき",
        originals: [
            "後先",
        ]
    },
    {
        normalized: "あとたし",
        originals: [
            "後出し",
        ]
    },
    {
        normalized: "あとつき",
        originals: [
            "跡継ぎ",
        ]
    },
    {
        normalized: "あととり",
        originals: [
            "跡取り",
        ]
    },
    {
        normalized: "あとりえ",
        originals: [
            "アトリエ",
        ]
    },
    {
        normalized: "あとりふ",
        originals: [
            "アドリブ",
        ]
    },
    {
        normalized: "あとれす",
        originals: [
            "アドレス",
        ]
    },
    {
        normalized: "あなうめ",
        originals: [
            "穴埋め",
        ]
    },
    {
        normalized: "あなほこ",
        originals: [
            "穴ぼこ",
        ]
    },
    {
        normalized: "あなろく",
        originals: [
            "アナログ",
        ]
    },
    {
        normalized: "あにまる",
        originals: [
            "アニマル",
        ]
    },
    {
        normalized: "あによめ",
        originals: [
            "兄嫁",
        ]
    },
    {
        normalized: "あふらえ",
        originals: [
            "油絵",
        ]
    },
    {
        normalized: "あふらみ",
        originals: [
            "脂身",
        ]
    },
    {
        normalized: "あふりか",
        originals: [
            "アフリカ",
        ]
    },
    {
        normalized: "あへつく",
        originals: [
            "アベック",
        ]
    },
    {
        normalized: "あほかと",
        originals: [
            "アボカド",
        ]
    },
    {
        normalized: "あまあし",
        originals: [
            "雨足",
        ]
    },
    {
        normalized: "あまえひ",
        originals: [
            "甘えび",
        ]
    },
    {
        normalized: "あまかさ",
        originals: [
            "雨傘",
        ]
    },
    {
        normalized: "あまくち",
        originals: [
            "甘口",
        ]
    },
    {
        normalized: "あまくつ",
        originals: [
            "雨靴",
        ]
    },
    {
        normalized: "あまくも",
        originals: [
            "雨雲",
        ]
    },
    {
        normalized: "あまくり",
        originals: [
            "甘ぐり",
        ]
    },
    {
        normalized: "あまさけ",
        originals: [
            "甘酒",
        ]
    },
    {
        normalized: "あまそら",
        originals: [
            "雨空",
        ]
    },
    {
        normalized: "あまつふ",
        originals: [
            "雨粒",
        ]
    },
    {
        normalized: "あまとい",
        originals: [
            "雨どい",
        ]
    },
    {
        normalized: "あまとう",
        originals: [
            "甘党",
        ]
    },
    {
        normalized: "あまみす",
        originals: [
            "雨水",
        ]
    },
    {
        normalized: "あまもり",
        originals: [
            "雨漏り",
        ]
    },
    {
        normalized: "あまよけ",
        originals: [
            "雨よけ",
        ]
    },
    {
        normalized: "あみこみ",
        originals: [
            "編み込み",
        ]
    },
    {
        normalized: "あみもの",
        originals: [
            "編み物",
        ]
    },
    {
        normalized: "あみやき",
        originals: [
            "網焼き",
        ]
    },
    {
        normalized: "あめかせ",
        originals: [
            "雨風",
        ]
    },
    {
        normalized: "あめたま",
        originals: [
            "あめ玉",
        ]
    },
    {
        normalized: "あめりか",
        originals: [
            "アメリカ",
        ]
    },
    {
        normalized: "あめんほ",
        originals: [
            "あめんぼ",
        ]
    },
    {
        normalized: "あやとり",
        originals: [
            "あや取り",
        ]
    },
    {
        normalized: "あやまち",
        originals: [
            "過ち",
        ]
    },
    {
        normalized: "あやまり",
        originals: [
            "誤り",
        ]
    },
    {
        normalized: "あらいは",
        originals: [
            "洗い場",
        ]
    },
    {
        normalized: "あらかた",
        originals: [
            "あらかた",
        ]
    },
    {
        normalized: "あらくれ",
        originals: [
            "荒くれ",
        ]
    },
    {
        normalized: "あらすか",
        originals: [
            "アラスカ",
        ]
    },
    {
        normalized: "あらそい",
        originals: [
            "争い",
        ]
    },
    {
        normalized: "あらため",
        originals: [
            "改め",
        ]
    },
    {
        normalized: "あらなみ",
        originals: [
            "荒波",
        ]
    },
    {
        normalized: "あらわさ",
        originals: [
            "荒技",
        ]
    },
    {
        normalized: "あらわれ",
        originals: [
            "現れ",
        ]
    },
    {
        normalized: "ありかね",
        originals: [
            "あり金",
        ]
    },
    {
        normalized: "ありさま",
        originals: [
            "ありさま",
        ]
    },
    {
        normalized: "ありはい",
        originals: [
            "アリバイ",
        ]
    },
    {
        normalized: "あるかり",
        originals: [
            "アルカリ",
        ]
    },
    {
        normalized: "あるはか",
        originals: [
            "アルパカ",
        ]
    },
    {
        normalized: "あるはむ",
        originals: [
            "アルバム",
        ]
    },
    {
        normalized: "あるふす",
        originals: [
            "アルプス",
        ]
    },
    {
        normalized: "あれこれ",
        originals: [
            "あれこれ",
        ]
    },
    {
        normalized: "あれんし",
        originals: [
            "アレンジ",
        ]
    },
    {
        normalized: "あわたて",
        originals: [
            "泡立て",
        ]
    },
    {
        normalized: "あわもり",
        originals: [
            "泡盛",
        ]
    },
    {
        normalized: "あんかい",
        originals: [
            "案外",
        ]
    },
    {
        normalized: "あんくる",
        originals: [
            "アングル",
        ]
    },
    {
        normalized: "あんこう",
        originals: [
            "暗号",
        ]
    },
    {
        normalized: "あんこく",
        originals: [
            "暗黒",
        ]
    },
    {
        normalized: "あんさつ",
        originals: [
            "暗殺",
        ]
    },
    {
        normalized: "あんさん",
        originals: [
            "安産",
            "暗算",
        ]
    },
    {
        normalized: "あんしつ",
        originals: [
            "暗室",
        ]
    },
    {
        normalized: "あんしん",
        originals: [
            "安心",
        ]
    },
    {
        normalized: "あんせい",
        originals: [
            "安静",
        ]
    },
    {
        normalized: "あんせん",
        originals: [
            "安全",
        ]
    },
    {
        normalized: "あんそく",
        originals: [
            "安息",
        ]
    },
    {
        normalized: "あんたい",
        originals: [
            "安泰",
        ]
    },
    {
        normalized: "あんてい",
        originals: [
            "安定",
        ]
    },
    {
        normalized: "あんてな",
        originals: [
            "アンテナ",
        ]
    },
    {
        normalized: "あんてん",
        originals: [
            "暗転",
        ]
    },
    {
        normalized: "あんない",
        originals: [
            "案内",
        ]
    },
    {
        normalized: "あんまん",
        originals: [
            "あんまん",
        ]
    },
    {
        normalized: "あんみつ",
        originals: [
            "あんみつ",
        ]
    },
    {
        normalized: "あんみん",
        originals: [
            "安眠",
        ]
    },
    {
        normalized: "あんもく",
        originals: [
            "暗黙",
        ]
    },
    {
        normalized: "いいあい",
        originals: [
            "言い合い",
        ]
    },
    {
        normalized: "いいかえ",
        originals: [
            "言い換え",
        ]
    },
    {
        normalized: "いいくさ",
        originals: [
            "言いぐさ",
        ]
    },
    {
        normalized: "いいつけ",
        originals: [
            "言い付け",
        ]
    },
    {
        normalized: "いいとも",
        originals: [
            "いいとも",
        ]
    },
    {
        normalized: "いいふん",
        originals: [
            "言い分",
        ]
    },
    {
        normalized: "いいわけ",
        originals: [
            "言い分け",
            "言い訳",
        ]
    },
    {
        normalized: "いえから",
        originals: [
            "家柄",
        ]
    },
    {
        normalized: "いえなみ",
        originals: [
            "家並み",
        ]
    },
    {
        normalized: "いえねこ",
        originals: [
            "家猫",
        ]
    },
    {
        normalized: "いかくり",
        originals: [
            "いがぐり",
        ]
    },
    {
        normalized: "いかさし",
        originals: [
            "いか刺し",
        ]
    },
    {
        normalized: "いかさま",
        originals: [
            "いかさま",
        ]
    },
    {
        normalized: "いかほと",
        originals: [
            "いかほど",
        ]
    },
    {
        normalized: "いきうめ",
        originals: [
            "生き埋め",
        ]
    },
    {
        normalized: "いきおい",
        originals: [
            "勢い",
        ]
    },
    {
        normalized: "いきかい",
        originals: [
            "生きがい",
        ]
    },
    {
        normalized: "いききれ",
        originals: [
            "息切れ",
        ]
    },
    {
        normalized: "いきさき",
        originals: [
            "行き先",
        ]
    },
    {
        normalized: "いきさつ",
        originals: [
            "いきさつ",
        ]
    },
    {
        normalized: "いきさま",
        originals: [
            "生きざま",
        ]
    },
    {
        normalized: "いきしに",
        originals: [
            "生き死に",
        ]
    },
    {
        normalized: "いきつき",
        originals: [
            "息継ぎ",
        ]
    },
    {
        normalized: "いきつけ",
        originals: [
            "行きつけ",
        ]
    },
    {
        normalized: "いきぬき",
        originals: [
            "息抜き",
        ]
    },
    {
        normalized: "いきのね",
        originals: [
            "息の根",
        ]
    },
    {
        normalized: "いきはし",
        originals: [
            "生き恥",
        ]
    },
    {
        normalized: "いきもの",
        originals: [
            "生き物",
        ]
    },
    {
        normalized: "いきよう",
        originals: [
            "偉業",
        ]
    },
    {
        normalized: "いきりす",
        originals: [
            "イギリス",
        ]
    },
    {
        normalized: "いくあな",
        originals: [
            "イグアナ",
        ]
    },
    {
        normalized: "いくすり",
        originals: [
            "胃薬",
        ]
    },
    {
        normalized: "いくせい",
        originals: [
            "育成",
        ]
    },
    {
        normalized: "いくもう",
        originals: [
            "育毛",
        ]
    },
    {
        normalized: "いけかき",
        originals: [
            "生け垣",
        ]
    },
    {
        normalized: "いけとり",
        originals: [
            "生け捕り",
        ]
    },
    {
        normalized: "いけはな",
        originals: [
            "生け花",
        ]
    },
    {
        normalized: "いここち",
        originals: [
            "居心地",
        ]
    },
    {
        normalized: "いさかや",
        originals: [
            "居酒屋",
        ]
    },
    {
        normalized: "いさこさ",
        originals: [
            "いざこざ",
        ]
    },
    {
        normalized: "いしかき",
        originals: [
            "石垣",
        ]
    },
    {
        normalized: "いしころ",
        originals: [
            "石ころ",
        ]
    },
    {
        normalized: "いしすえ",
        originals: [
            "礎",
        ]
    },
    {
        normalized: "いしたん",
        originals: [
            "石段",
        ]
    },
    {
        normalized: "いしはし",
        originals: [
            "石橋",
        ]
    },
    {
        normalized: "いしやき",
        originals: [
            "石焼き",
        ]
    },
    {
        normalized: "いしゆう",
        originals: [
            "移住",
        ]
    },
    {
        normalized: "いしゆく",
        originals: [
            "萎縮",
        ]
    },
    {
        normalized: "いしゆつ",
        originals: [
            "医術",
        ]
    },
    {
        normalized: "いしよう",
        originals: [
            "意匠",
            "衣装",
            "以上",
            "異常",
        ]
    },
    {
        normalized: "いしよく",
        originals: [
            "衣食",
        ]
    },
    {
        normalized: "いすわり",
        originals: [
            "居座り",
        ]
    },
    {
        normalized: "いたすら",
        originals: [
            "いたずら",
        ]
    },
    {
        normalized: "いたたき",
        originals: [
            "頂",
            "頂き",
        ]
    },
    {
        normalized: "いたまえ",
        originals: [
            "板前",
        ]
    },
    {
        normalized: "いためし",
        originals: [
            "イタ飯",
        ]
    },
    {
        normalized: "いたりあ",
        originals: [
            "イタリア",
        ]
    },
    {
        normalized: "いたわり",
        originals: [
            "いたわり",
        ]
    },
    {
        normalized: "いちいち",
        originals: [
            "いちいち",
        ]
    },
    {
        normalized: "いちいん",
        originals: [
            "一員",
            "一因",
        ]
    },
    {
        normalized: "いちえん",
        originals: [
            "一円",
        ]
    },
    {
        normalized: "いちおう",
        originals: [
            "一応",
        ]
    },
    {
        normalized: "いちおし",
        originals: [
            "一推し",
        ]
    },
    {
        normalized: "いちかん",
        originals: [
            "一丸",
        ]
    },
    {
        normalized: "いちくん",
        originals: [
            "一軍",
        ]
    },
    {
        normalized: "いちけい",
        originals: [
            "一芸",
        ]
    },
    {
        normalized: "いちけき",
        originals: [
            "一撃",
        ]
    },
    {
        normalized: "いちけん",
        originals: [
            "一見",
            "一言",
        ]
    },
    {
        normalized: "いちこん",
        originals: [
            "一言",
        ]
    },
    {
        normalized: "いちしく",
        originals: [
            "いちじく",
        ]
    },
    {
        normalized: "いちそく",
        originals: [
            "一族",
        ]
    },
    {
        normalized: "いちそん",
        originals: [
            "一存",
        ]
    },
    {
        normalized: "いちたん",
        originals: [
            "一団",
            "一段",
        ]
    },
    {
        normalized: "いちとう",
        originals: [
            "一同",
        ]
    },
    {
        normalized: "いちとく",
        originals: [
            "一読",
        ]
    },
    {
        normalized: "いちなん",
        originals: [
            "一難",
        ]
    },
    {
        normalized: "いちにん",
        originals: [
            "一任",
        ]
    },
    {
        normalized: "いちめい",
        originals: [
            "一命",
        ]
    },
    {
        normalized: "いちめん",
        originals: [
            "一面",
        ]
    },
    {
        normalized: "いちもく",
        originals: [
            "一目",
        ]
    },
    {
        normalized: "いちゆう",
        originals: [
            "意中",
        ]
    },
    {
        normalized: "いちよう",
        originals: [
            "いちょう",
            "胃腸",
        ]
    },
    {
        normalized: "いちらん",
        originals: [
            "一覧",
        ]
    },
    {
        normalized: "いちりつ",
        originals: [
            "一律",
        ]
    },
    {
        normalized: "いちるい",
        originals: [
            "一塁",
        ]
    },
    {
        normalized: "いつかつ",
        originals: [
            "一括",
        ]
    },
    {
        normalized: "いつかん",
        originals: [
            "一環",
            "一貫",
        ]
    },
    {
        normalized: "いつけん",
        originals: [
            "一見",
        ]
    },
    {
        normalized: "いつこう",
        originals: [
            "一行",
        ]
    },
    {
        normalized: "いつこく",
        originals: [
            "一刻",
        ]
    },
    {
        normalized: "いつころ",
        originals: [
            "いつごろ",
        ]
    },
    {
        normalized: "いつさい",
        originals: [
            "一切",
            "逸材",
        ]
    },
    {
        normalized: "いつしき",
        originals: [
            "一式",
        ]
    },
    {
        normalized: "いつしゆ",
        originals: [
            "一種",
        ]
    },
    {
        normalized: "いつしよ",
        originals: [
            "一緒",
        ]
    },
    {
        normalized: "いつしん",
        originals: [
            "一新",
            "一身",
        ]
    },
    {
        normalized: "いつせい",
        originals: [
            "一斉",
        ]
    },
    {
        normalized: "いつせつ",
        originals: [
            "一説",
        ]
    },
    {
        normalized: "いつせん",
        originals: [
            "一戦",
            "一線",
        ]
    },
    {
        normalized: "いつそう",
        originals: [
            "一掃",
        ]
    },
    {
        normalized: "いつたい",
        originals: [
            "一体",
        ]
    },
    {
        normalized: "いつたつ",
        originals: [
            "逸脱",
        ]
    },
    {
        normalized: "いつてい",
        originals: [
            "一定",
        ]
    },
    {
        normalized: "いつてん",
        originals: [
            "一転",
        ]
    },
    {
        normalized: "いつとき",
        originals: [
            "一時",
        ]
    },
    {
        normalized: "いつはい",
        originals: [
            "一杯",
        ]
    },
    {
        normalized: "いつはん",
        originals: [
            "一般",
        ]
    },
    {
        normalized: "いつひつ",
        originals: [
            "一筆",
        ]
    },
    {
        normalized: "いつふく",
        originals: [
            "一服",
        ]
    },
    {
        normalized: "いつへん",
        originals: [
            "一変",
        ]
    },
    {
        normalized: "いつほう",
        originals: [
            "一報",
            "一方",
        ]
    },
    {
        normalized: "いつほん",
        originals: [
            "一本",
        ]
    },
    {
        normalized: "いつわり",
        originals: [
            "偽り",
        ]
    },
    {
        normalized: "いてたち",
        originals: [
            "いで立ち",
        ]
    },
    {
        normalized: "いとくち",
        originals: [
            "糸口",
        ]
    },
    {
        normalized: "いところ",
        originals: [
            "居所",
        ]
    },
    {
        normalized: "いとなみ",
        originals: [
            "営み",
        ]
    },
    {
        normalized: "いなさく",
        originals: [
            "稲作",
        ]
    },
    {
        normalized: "いなすま",
        originals: [
            "稲妻",
        ]
    },
    {
        normalized: "いぬかき",
        originals: [
            "犬かき",
        ]
    },
    {
        normalized: "いぬそり",
        originals: [
            "犬ぞり",
        ]
    },
    {
        normalized: "いぬとし",
        originals: [
            "いぬどし",
        ]
    },
    {
        normalized: "いねかり",
        originals: [
            "稲刈り",
        ]
    },
    {
        normalized: "いねむり",
        originals: [
            "居眠り",
        ]
    },
    {
        normalized: "いのこり",
        originals: [
            "居残り",
        ]
    },
    {
        normalized: "いのしし",
        originals: [
            "いのしし",
        ]
    },
    {
        normalized: "いふくろ",
        originals: [
            "胃袋",
        ]
    },
    {
        normalized: "いへんと",
        originals: [
            "イベント",
        ]
    },
    {
        normalized: "いまいち",
        originals: [
            "今一",
        ]
    },
    {
        normalized: "いまころ",
        originals: [
            "今ごろ",
        ]
    },
    {
        normalized: "いましめ",
        originals: [
            "戒め",
        ]
    },
    {
        normalized: "いまとき",
        originals: [
            "今時",
        ]
    },
    {
        normalized: "いみよう",
        originals: [
            "異名",
        ]
    },
    {
        normalized: "いもうと",
        originals: [
            "妹",
        ]
    },
    {
        normalized: "いもつる",
        originals: [
            "芋づる",
        ]
    },
    {
        normalized: "いもほり",
        originals: [
            "芋掘り",
        ]
    },
    {
        normalized: "いもむし",
        originals: [
            "芋虫",
        ]
    },
    {
        normalized: "いやいや",
        originals: [
            "いやいや",
        ]
    },
    {
        normalized: "いらいら",
        originals: [
            "いらいら",
        ]
    },
    {
        normalized: "いらすと",
        originals: [
            "イラスト",
        ]
    },
    {
        normalized: "いらたち",
        originals: [
            "いら立ち",
        ]
    },
    {
        normalized: "いりくち",
        originals: [
            "入り口",
        ]
    },
    {
        normalized: "いりよう",
        originals: [
            "医療",
            "衣料",
        ]
    },
    {
        normalized: "いりよく",
        originals: [
            "威力",
        ]
    },
    {
        normalized: "いれかえ",
        originals: [
            "入れ替え",
        ]
    },
    {
        normalized: "いれすみ",
        originals: [
            "入れ墨",
        ]
    },
    {
        normalized: "いれふん",
        originals: [
            "イレブン",
        ]
    },
    {
        normalized: "いれもの",
        originals: [
            "入れ物",
        ]
    },
    {
        normalized: "いろいろ",
        originals: [
            "いろいろ",
        ]
    },
    {
        normalized: "いろかみ",
        originals: [
            "色紙",
        ]
    },
    {
        normalized: "いろから",
        originals: [
            "色柄",
        ]
    },
    {
        normalized: "いろこい",
        originals: [
            "色恋",
        ]
    },
    {
        normalized: "いろしろ",
        originals: [
            "色白",
        ]
    },
    {
        normalized: "いろつや",
        originals: [
            "色つや",
        ]
    },
    {
        normalized: "いろとり",
        originals: [
            "彩り",
        ]
    },
    {
        normalized: "いろむら",
        originals: [
            "色むら",
        ]
    },
    {
        normalized: "いろもの",
        originals: [
            "色物",
        ]
    },
    {
        normalized: "いろわけ",
        originals: [
            "色分け",
        ]
    },
    {
        normalized: "いわはた",
        originals: [
            "岩肌",
        ]
    },
    {
        normalized: "いんかん",
        originals: [
            "印鑑",
        ]
    },
    {
        normalized: "いんきよ",
        originals: [
            "隠居",
        ]
    },
    {
        normalized: "いんさつ",
        originals: [
            "印刷",
        ]
    },
    {
        normalized: "いんしつ",
        originals: [
            "陰湿",
        ]
    },
    {
        normalized: "いんしゆ",
        originals: [
            "飲酒",
        ]
    },
    {
        normalized: "いんせい",
        originals: [
            "陰性",
            "印税",
        ]
    },
    {
        normalized: "いんせき",
        originals: [
            "隕石",
        ]
    },
    {
        normalized: "いんそつ",
        originals: [
            "引率",
        ]
    },
    {
        normalized: "いんたい",
        originals: [
            "引退",
        ]
    },
    {
        normalized: "いんちき",
        originals: [
            "いんちき",
        ]
    },
    {
        normalized: "いんてり",
        originals: [
            "インテリ",
        ]
    },
    {
        normalized: "いんとあ",
        originals: [
            "インドア",
        ]
    },
    {
        normalized: "いんとろ",
        originals: [
            "イントロ",
        ]
    },
    {
        normalized: "いんない",
        originals: [
            "院内",
        ]
    },
    {
        normalized: "いんふれ",
        originals: [
            "インフレ",
        ]
    },
    {
        normalized: "いんへい",
        originals: [
            "隠蔽",
        ]
    },
    {
        normalized: "いんほう",
        originals: [
            "陰謀",
        ]
    },
    {
        normalized: "いんもう",
        originals: [
            "陰毛",
        ]
    },
    {
        normalized: "いんよう",
        originals: [
            "引用",
            "飲用",
        ]
    },
    {
        normalized: "ういさん",
        originals: [
            "初産",
        ]
    },
    {
        normalized: "ういしん",
        originals: [
            "初陣",
        ]
    },
    {
        normalized: "ういまこ",
        originals: [
            "初孫",
        ]
    },
    {
        normalized: "ういるす",
        originals: [
            "ウイルス",
        ]
    },
    {
        normalized: "ういろう",
        originals: [
            "ういろう",
        ]
    },
    {
        normalized: "ういんく",
        originals: [
            "ウインク",
        ]
    },
    {
        normalized: "うえかわ",
        originals: [
            "上側",
        ]
    },
    {
        normalized: "うえこみ",
        originals: [
            "植え込み",
        ]
    },
    {
        normalized: "うえした",
        originals: [
            "上下",
        ]
    },
    {
        normalized: "うえしに",
        originals: [
            "飢え死に",
        ]
    },
    {
        normalized: "うえすと",
        originals: [
            "ウエスト",
        ]
    },
    {
        normalized: "うおつか",
        originals: [
            "ウォッカ",
        ]
    },
    {
        normalized: "うきあし",
        originals: [
            "浮き足",
        ]
    },
    {
        normalized: "うきくさ",
        originals: [
            "浮き草",
        ]
    },
    {
        normalized: "うきしま",
        originals: [
            "浮き島",
        ]
    },
    {
        normalized: "うきほり",
        originals: [
            "浮き彫り",
        ]
    },
    {
        normalized: "うくいす",
        originals: [
            "うぐいす",
        ]
    },
    {
        normalized: "うくれれ",
        originals: [
            "ウクレレ",
        ]
    },
    {
        normalized: "うけあい",
        originals: [
            "請け合い",
        ]
    },
    {
        normalized: "うけいれ",
        originals: [
            "受け入れ",
        ]
    },
    {
        normalized: "うけうり",
        originals: [
            "受け売り",
        ]
    },
    {
        normalized: "うけおい",
        originals: [
            "請負",
        ]
    },
    {
        normalized: "うけくち",
        originals: [
            "受け口",
        ]
    },
    {
        normalized: "うけさら",
        originals: [
            "受け皿",
        ]
    },
    {
        normalized: "うけつき",
        originals: [
            "受け継ぎ",
        ]
    },
    {
        normalized: "うけつけ",
        originals: [
            "受付",
        ]
    },
    {
        normalized: "うけとり",
        originals: [
            "受取",
        ]
    },
    {
        normalized: "うけもち",
        originals: [
            "受け持ち",
        ]
    },
    {
        normalized: "うしとし",
        originals: [
            "うしどし",
        ]
    },
    {
        normalized: "うすあし",
        originals: [
            "薄味",
        ]
    },
    {
        normalized: "うすかわ",
        originals: [
            "薄皮",
        ]
    },
    {
        normalized: "うすきり",
        originals: [
            "薄切り",
        ]
    },
    {
        normalized: "うすくち",
        originals: [
            "薄口",
        ]
    },
    {
        normalized: "うすまき",
        originals: [
            "渦巻き",
        ]
    },
    {
        normalized: "うそつき",
        originals: [
            "うそつき",
        ]
    },
    {
        normalized: "うたいて",
        originals: [
            "歌い手",
        ]
    },
    {
        normalized: "うたかい",
        originals: [
            "疑い",
        ]
    },
    {
        normalized: "うたこえ",
        originals: [
            "歌声",
        ]
    },
    {
        normalized: "うたたね",
        originals: [
            "うたた寝",
        ]
    },
    {
        normalized: "うたひめ",
        originals: [
            "歌姫",
        ]
    },
    {
        normalized: "うたまね",
        originals: [
            "歌まね",
        ]
    },
    {
        normalized: "うちあい",
        originals: [
            "打ち合い",
        ]
    },
    {
        normalized: "うちあけ",
        originals: [
            "打ち上げ",
        ]
    },
    {
        normalized: "うちかわ",
        originals: [
            "内側",
        ]
    },
    {
        normalized: "うちきり",
        originals: [
            "打ち切り",
        ]
    },
    {
        normalized: "うちくひ",
        originals: [
            "打ち首",
        ]
    },
    {
        normalized: "うちけし",
        originals: [
            "打ち消し",
        ]
    },
    {
        normalized: "うちしに",
        originals: [
            "討ち死に",
        ]
    },
    {
        normalized: "うちせい",
        originals: [
            "内税",
        ]
    },
    {
        normalized: "うちとめ",
        originals: [
            "打ち止め",
        ]
    },
    {
        normalized: "うちまた",
        originals: [
            "内また",
        ]
    },
    {
        normalized: "うちみす",
        originals: [
            "打ち水",
        ]
    },
    {
        normalized: "うちゆう",
        originals: [
            "宇宙",
        ]
    },
    {
        normalized: "うちわけ",
        originals: [
            "内訳",
        ]
    },
    {
        normalized: "うつかり",
        originals: [
            "うっかり",
        ]
    },
    {
        normalized: "うつたえ",
        originals: [
            "訴え",
        ]
    },
    {
        normalized: "うつふせ",
        originals: [
            "うつぶせ",
        ]
    },
    {
        normalized: "うつふん",
        originals: [
            "鬱憤",
        ]
    },
    {
        normalized: "うつむき",
        originals: [
            "うつむき",
        ]
    },
    {
        normalized: "うてきき",
        originals: [
            "腕利き",
        ]
    },
    {
        normalized: "うてくみ",
        originals: [
            "腕組み",
        ]
    },
    {
        normalized: "うてまえ",
        originals: [
            "腕前",
        ]
    },
    {
        normalized: "うぬほれ",
        originals: [
            "うぬぼれ",
        ]
    },
    {
        normalized: "うふこえ",
        originals: [
            "産声",
        ]
    },
    {
        normalized: "うまのり",
        originals: [
            "馬乗り",
        ]
    },
    {
        normalized: "うみかせ",
        originals: [
            "海風",
        ]
    },
    {
        normalized: "うみかめ",
        originals: [
            "海がめ",
        ]
    },
    {
        normalized: "うみかわ",
        originals: [
            "海側",
        ]
    },
    {
        normalized: "うみたて",
        originals: [
            "生みたて",
        ]
    },
    {
        normalized: "うみつり",
        originals: [
            "海釣り",
        ]
    },
    {
        normalized: "うみとり",
        originals: [
            "海鳥",
        ]
    },
    {
        normalized: "うみへひ",
        originals: [
            "海へび",
        ]
    },
    {
        normalized: "うみやま",
        originals: [
            "海山",
        ]
    },
    {
        normalized: "うめこみ",
        originals: [
            "埋め込み",
        ]
    },
    {
        normalized: "うめしゆ",
        originals: [
            "梅酒",
        ]
    },
    {
        normalized: "うめたて",
        originals: [
            "埋め立て",
        ]
    },
    {
        normalized: "うめほし",
        originals: [
            "梅干し",
        ]
    },
    {
        normalized: "うらかた",
        originals: [
            "裏方",
        ]
    },
    {
        normalized: "うらかね",
        originals: [
            "裏金",
        ]
    },
    {
        normalized: "うらかわ",
        originals: [
            "裏側",
        ]
    },
    {
        normalized: "うらきり",
        originals: [
            "裏切り",
        ]
    },
    {
        normalized: "うらくち",
        originals: [
            "裏口",
        ]
    },
    {
        normalized: "うらこえ",
        originals: [
            "裏声",
        ]
    },
    {
        normalized: "うらつけ",
        originals: [
            "裏付け",
        ]
    },
    {
        normalized: "うらない",
        originals: [
            "占い",
        ]
    },
    {
        normalized: "うらにわ",
        originals: [
            "裏庭",
        ]
    },
    {
        normalized: "うらもん",
        originals: [
            "裏門",
        ]
    },
    {
        normalized: "うらやま",
        originals: [
            "裏山",
        ]
    },
    {
        normalized: "うらわさ",
        originals: [
            "裏技",
        ]
    },
    {
        normalized: "うりあけ",
        originals: [
            "売り上げ",
        ]
    },
    {
        normalized: "うりいえ",
        originals: [
            "売り家",
        ]
    },
    {
        normalized: "うりかた",
        originals: [
            "売り方",
        ]
    },
    {
        normalized: "うりきれ",
        originals: [
            "売り切れ",
        ]
    },
    {
        normalized: "うりこみ",
        originals: [
            "売り込み",
        ]
    },
    {
        normalized: "うりたし",
        originals: [
            "売り出し",
        ]
    },
    {
        normalized: "うりとき",
        originals: [
            "売り時",
        ]
    },
    {
        normalized: "うりぬし",
        originals: [
            "売り主",
        ]
    },
    {
        normalized: "うりもの",
        originals: [
            "売り物",
        ]
    },
    {
        normalized: "うりよう",
        originals: [
            "雨量",
        ]
    },
    {
        normalized: "うるおい",
        originals: [
            "潤い",
        ]
    },
    {
        normalized: "うれすし",
        originals: [
            "売れ筋",
        ]
    },
    {
        normalized: "うれたん",
        originals: [
            "ウレタン",
        ]
    },
    {
        normalized: "うれつこ",
        originals: [
            "売れっ子",
        ]
    },
    {
        normalized: "うれゆき",
        originals: [
            "売れ行き",
        ]
    },
    {
        normalized: "うわあこ",
        originals: [
            "上あご",
        ]
    },
    {
        normalized: "うわかわ",
        originals: [
            "上側",
        ]
    },
    {
        normalized: "うわくつ",
        originals: [
            "上靴",
        ]
    },
    {
        normalized: "うわこと",
        originals: [
            "うわごと",
        ]
    },
    {
        normalized: "うわすみ",
        originals: [
            "上澄み",
        ]
    },
    {
        normalized: "うわつみ",
        originals: [
            "上積み",
        ]
    },
    {
        normalized: "うわぬり",
        originals: [
            "上塗り",
        ]
    },
    {
        normalized: "うわのせ",
        originals: [
            "上乗せ",
        ]
    },
    {
        normalized: "うわはき",
        originals: [
            "上履き",
        ]
    },
    {
        normalized: "うわむき",
        originals: [
            "上向き",
        ]
    },
    {
        normalized: "うわやく",
        originals: [
            "上役",
        ]
    },
    {
        normalized: "うんえい",
        originals: [
            "運営",
        ]
    },
    {
        normalized: "うんかい",
        originals: [
            "雲海",
        ]
    },
    {
        normalized: "うんこう",
        originals: [
            "運航",
            "運行",
        ]
    },
    {
        normalized: "うんせい",
        originals: [
            "運勢",
        ]
    },
    {
        normalized: "うんそう",
        originals: [
            "運送",
        ]
    },
    {
        normalized: "うんちく",
        originals: [
            "蘊蓄",
        ]
    },
    {
        normalized: "うんちん",
        originals: [
            "運賃",
        ]
    },
    {
        normalized: "うんてん",
        originals: [
            "運転",
        ]
    },
    {
        normalized: "うんとう",
        originals: [
            "運動",
        ]
    },
    {
        normalized: "うんはん",
        originals: [
            "運搬",
        ]
    },
    {
        normalized: "うんめい",
        originals: [
            "運命",
        ]
    },
    {
        normalized: "うんよう",
        originals: [
            "運用",
        ]
    },
    {
        normalized: "えあこん",
        originals: [
            "エアコン",
        ]
    },
    {
        normalized: "えいえん",
        originals: [
            "永遠",
        ]
    },
    {
        normalized: "えいこう",
        originals: [
            "栄光",
        ]
    },
    {
        normalized: "えいこく",
        originals: [
            "英国",
        ]
    },
    {
        normalized: "えいせい",
        originals: [
            "衛星",
            "衛生",
        ]
    },
    {
        normalized: "えいそう",
        originals: [
            "映像",
        ]
    },
    {
        normalized: "えいそく",
        originals: [
            "永続",
        ]
    },
    {
        normalized: "えいたん",
        originals: [
            "英断",
        ]
    },
    {
        normalized: "えいてん",
        originals: [
            "栄転",
        ]
    },
    {
        normalized: "えいふん",
        originals: [
            "英文",
        ]
    },
    {
        normalized: "えいみん",
        originals: [
            "永眠",
        ]
    },
    {
        normalized: "えいやく",
        originals: [
            "英訳",
        ]
    },
    {
        normalized: "えいゆう",
        originals: [
            "英雄",
        ]
    },
    {
        normalized: "えいよう",
        originals: [
            "栄養",
        ]
    },
    {
        normalized: "えきいん",
        originals: [
            "駅員",
        ]
    },
    {
        normalized: "えきしや",
        originals: [
            "駅舎",
        ]
    },
    {
        normalized: "えきたい",
        originals: [
            "液体",
        ]
    },
    {
        normalized: "えきてん",
        originals: [
            "駅伝",
        ]
    },
    {
        normalized: "えきひる",
        originals: [
            "駅ビル",
        ]
    },
    {
        normalized: "えきへん",
        originals: [
            "駅弁",
        ]
    },
    {
        normalized: "えきまえ",
        originals: [
            "駅前",
        ]
    },
    {
        normalized: "えきめい",
        originals: [
            "駅名",
        ]
    },
    {
        normalized: "えこころ",
        originals: [
            "絵心",
        ]
    },
    {
        normalized: "えしそん",
        originals: [
            "エジソン",
        ]
    },
    {
        normalized: "えしふと",
        originals: [
            "エジプト",
        ]
    },
    {
        normalized: "えしやく",
        originals: [
            "会釈",
        ]
    },
    {
        normalized: "えすえふ",
        originals: [
            "ＳＦ",
        ]
    },
    {
        normalized: "えたまめ",
        originals: [
            "枝豆",
        ]
    },
    {
        normalized: "えつらん",
        originals: [
            "閲覧",
        ]
    },
    {
        normalized: "えなめる",
        originals: [
            "エナメル",
        ]
    },
    {
        normalized: "えはかき",
        originals: [
            "絵はがき",
        ]
    },
    {
        normalized: "えふえむ",
        originals: [
            "ＦＭ",
        ]
    },
    {
        normalized: "えふろん",
        originals: [
            "エプロン",
        ]
    },
    {
        normalized: "えりくひ",
        originals: [
            "襟首",
        ]
    },
    {
        normalized: "えろほん",
        originals: [
            "エロ本",
        ]
    },
    {
        normalized: "えんかい",
        originals: [
            "宴会",
            "塩害",
        ]
    },
    {
        normalized: "えんかく",
        originals: [
            "遠隔",
        ]
    },
    {
        normalized: "えんかわ",
        originals: [
            "縁側",
        ]
    },
    {
        normalized: "えんかん",
        originals: [
            "沿岸",
        ]
    },
    {
        normalized: "えんきり",
        originals: [
            "縁切り",
        ]
    },
    {
        normalized: "えんきん",
        originals: [
            "遠近",
        ]
    },
    {
        normalized: "えんくん",
        originals: [
            "援軍",
        ]
    },
    {
        normalized: "えんけい",
        originals: [
            "円形",
            "園芸",
            "演芸",
        ]
    },
    {
        normalized: "えんけき",
        originals: [
            "演劇",
        ]
    },
    {
        normalized: "えんさい",
        originals: [
            "冤罪",
        ]
    },
    {
        normalized: "えんさん",
        originals: [
            "塩酸",
        ]
    },
    {
        normalized: "えんしや",
        originals: [
            "演者",
        ]
    },
    {
        normalized: "えんしよ",
        originals: [
            "援助",
        ]
    },
    {
        normalized: "えんしん",
        originals: [
            "エンジン",
            "円陣",
        ]
    },
    {
        normalized: "えんすと",
        originals: [
            "エンスト",
        ]
    },
    {
        normalized: "えんせい",
        originals: [
            "遠征",
        ]
    },
    {
        normalized: "えんせき",
        originals: [
            "宴席",
            "縁石",
        ]
    },
    {
        normalized: "えんせつ",
        originals: [
            "演説",
        ]
    },
    {
        normalized: "えんせん",
        originals: [
            "沿線",
        ]
    },
    {
        normalized: "えんそう",
        originals: [
            "演奏",
        ]
    },
    {
        normalized: "えんそく",
        originals: [
            "遠足",
        ]
    },
    {
        normalized: "えんたい",
        originals: [
            "延滞",
        ]
    },
    {
        normalized: "えんたか",
        originals: [
            "円高",
        ]
    },
    {
        normalized: "えんたく",
        originals: [
            "円卓",
        ]
    },
    {
        normalized: "えんたん",
        originals: [
            "縁談",
        ]
    },
    {
        normalized: "えんとつ",
        originals: [
            "煙突",
        ]
    },
    {
        normalized: "えんにち",
        originals: [
            "縁日",
        ]
    },
    {
        normalized: "えんはん",
        originals: [
            "円盤",
        ]
    },
    {
        normalized: "えんひつ",
        originals: [
            "鉛筆",
        ]
    },
    {
        normalized: "えんふん",
        originals: [
            "塩分",
        ]
    },
    {
        normalized: "えんほう",
        originals: [
            "遠方",
        ]
    },
    {
        normalized: "えんまん",
        originals: [
            "円満",
        ]
    },
    {
        normalized: "えんめい",
        originals: [
            "延命",
        ]
    },
    {
        normalized: "えんもく",
        originals: [
            "演目",
        ]
    },
    {
        normalized: "えんやす",
        originals: [
            "円安",
        ]
    },
    {
        normalized: "えんりよ",
        originals: [
            "遠慮",
        ]
    },
    {
        normalized: "おあしす",
        originals: [
            "オアシス",
        ]
    },
    {
        normalized: "おいうち",
        originals: [
            "追い討ち",
        ]
    },
    {
        normalized: "おいかせ",
        originals: [
            "追い風",
        ]
    },
    {
        normalized: "おいこし",
        originals: [
            "追い越し",
        ]
    },
    {
        normalized: "おいこみ",
        originals: [
            "追い込み",
        ]
    },
    {
        normalized: "おいさき",
        originals: [
            "老い先",
        ]
    },
    {
        normalized: "おいたち",
        originals: [
            "生い立ち",
        ]
    },
    {
        normalized: "おいぬき",
        originals: [
            "追い抜き",
        ]
    },
    {
        normalized: "おういん",
        originals: [
            "押印",
        ]
    },
    {
        normalized: "おうえん",
        originals: [
            "応援",
        ]
    },
    {
        normalized: "おうかん",
        originals: [
            "王冠",
        ]
    },
    {
        normalized: "おうこく",
        originals: [
            "王国",
        ]
    },
    {
        normalized: "おうこん",
        originals: [
            "黄金",
        ]
    },
    {
        normalized: "おうしつ",
        originals: [
            "王室",
        ]
    },
    {
        normalized: "おうしや",
        originals: [
            "王者",
        ]
    },
    {
        normalized: "おうしよ",
        originals: [
            "王女",
        ]
    },
    {
        normalized: "おうしん",
        originals: [
            "往診",
        ]
    },
    {
        normalized: "おうせつ",
        originals: [
            "応接",
        ]
    },
    {
        normalized: "おうせん",
        originals: [
            "応戦",
        ]
    },
    {
        normalized: "おうそく",
        originals: [
            "王族",
        ]
    },
    {
        normalized: "おうたい",
        originals: [
            "応対",
        ]
    },
    {
        normalized: "おうたん",
        originals: [
            "横断",
        ]
    },
    {
        normalized: "おうてん",
        originals: [
            "横転",
        ]
    },
    {
        normalized: "おうとう",
        originals: [
            "応答",
            "王道",
        ]
    },
    {
        normalized: "おうとつ",
        originals: [
            "凹凸",
        ]
    },
    {
        normalized: "おうふく",
        originals: [
            "往復",
        ]
    },
    {
        normalized: "おうへい",
        originals: [
            "欧米",
        ]
    },
    {
        normalized: "おうほう",
        originals: [
            "横暴",
        ]
    },
    {
        normalized: "おうよう",
        originals: [
            "応用",
        ]
    },
    {
        normalized: "おうらい",
        originals: [
            "往来",
        ]
    },
    {
        normalized: "おおあせ",
        originals: [
            "大汗",
        ]
    },
    {
        normalized: "おおあな",
        originals: [
            "大穴",
        ]
    },
    {
        normalized: "おおあめ",
        originals: [
            "大雨",
        ]
    },
    {
        normalized: "おおあれ",
        originals: [
            "大荒れ",
        ]
    },
    {
        normalized: "おおおく",
        originals: [
            "大奥",
        ]
    },
    {
        normalized: "おおかた",
        originals: [
            "大型",
        ]
    },
    {
        normalized: "おおかみ",
        originals: [
            "おおかみ",
        ]
    },
    {
        normalized: "おおから",
        originals: [
            "大柄",
        ]
    },
    {
        normalized: "おおくい",
        originals: [
            "大食い",
        ]
    },
    {
        normalized: "おおくち",
        originals: [
            "大口",
        ]
    },
    {
        normalized: "おおこえ",
        originals: [
            "大声",
        ]
    },
    {
        normalized: "おおこと",
        originals: [
            "大事",
        ]
    },
    {
        normalized: "おおさし",
        originals: [
            "大さじ",
        ]
    },
    {
        normalized: "おおすし",
        originals: [
            "大筋",
        ]
    },
    {
        normalized: "おおせい",
        originals: [
            "大勢",
        ]
    },
    {
        normalized: "おおせき",
        originals: [
            "大関",
        ]
    },
    {
        normalized: "おおそら",
        originals: [
            "大空",
        ]
    },
    {
        normalized: "おおそん",
        originals: [
            "大損",
        ]
    },
    {
        normalized: "おおつふ",
        originals: [
            "大粒",
        ]
    },
    {
        normalized: "おおつめ",
        originals: [
            "大詰め",
        ]
    },
    {
        normalized: "おおとろ",
        originals: [
            "大とろ",
        ]
    },
    {
        normalized: "おおなみ",
        originals: [
            "大波",
        ]
    },
    {
        normalized: "おおはん",
        originals: [
            "大判",
        ]
    },
    {
        normalized: "おおふり",
        originals: [
            "大振り",
        ]
    },
    {
        normalized: "おおへや",
        originals: [
            "大部屋",
        ]
    },
    {
        normalized: "おおむき",
        originals: [
            "大麦",
        ]
    },
    {
        normalized: "おおむね",
        originals: [
            "おおむね",
        ]
    },
    {
        normalized: "おおもの",
        originals: [
            "大物",
        ]
    },
    {
        normalized: "おおもり",
        originals: [
            "大盛り",
        ]
    },
    {
        normalized: "おおやけ",
        originals: [
            "公",
        ]
    },
    {
        normalized: "おおゆき",
        originals: [
            "大雪",
        ]
    },
    {
        normalized: "おおわさ",
        originals: [
            "大技",
        ]
    },
    {
        normalized: "おかくす",
        originals: [
            "おがくず",
        ]
    },
    {
        normalized: "おかつは",
        originals: [
            "おかっぱ",
        ]
    },
    {
        normalized: "おかりな",
        originals: [
            "オカリナ",
        ]
    },
    {
        normalized: "おかると",
        originals: [
            "オカルト",
        ]
    },
    {
        normalized: "おきかえ",
        originals: [
            "置き換え",
        ]
    },
    {
        normalized: "おきかさ",
        originals: [
            "置き傘",
        ]
    },
    {
        normalized: "おきさり",
        originals: [
            "置き去り",
        ]
    },
    {
        normalized: "おきなわ",
        originals: [
            "沖縄",
        ]
    },
    {
        normalized: "おきひき",
        originals: [
            "置き引き",
        ]
    },
    {
        normalized: "おきもの",
        originals: [
            "置物",
        ]
    },
    {
        normalized: "おくかい",
        originals: [
            "屋外",
        ]
    },
    {
        normalized: "おくかた",
        originals: [
            "奥方",
        ]
    },
    {
        normalized: "おくそく",
        originals: [
            "憶測",
            "臆測",
        ]
    },
    {
        normalized: "おくない",
        originals: [
            "屋内",
        ]
    },
    {
        normalized: "おくのて",
        originals: [
            "奥の手",
        ]
    },
    {
        normalized: "おくゆき",
        originals: [
            "奥行き",
        ]
    },
    {
        normalized: "おこない",
        originals: [
            "行い",
        ]
    },
    {
        normalized: "おさなこ",
        originals: [
            "幼子",
        ]
    },
    {
        normalized: "おさなり",
        originals: [
            "おざなり",
        ]
    },
    {
        normalized: "おさまり",
        originals: [
            "おさまり",
            "収まり",
        ]
    },
    {
        normalized: "おしあい",
        originals: [
            "押し合い",
        ]
    },
    {
        normalized: "おしいれ",
        originals: [
            "押し入れ",
        ]
    },
    {
        normalized: "おしうり",
        originals: [
            "押し売り",
        ]
    },
    {
        normalized: "おしえこ",
        originals: [
            "教え子",
        ]
    },
    {
        normalized: "おしたし",
        originals: [
            "押し出し",
        ]
    },
    {
        normalized: "おしつけ",
        originals: [
            "押し付け",
        ]
    },
    {
        normalized: "おしつこ",
        originals: [
            "おしっこ",
        ]
    },
    {
        normalized: "おしとり",
        originals: [
            "おしどり",
        ]
    },
    {
        normalized: "おしはな",
        originals: [
            "押し花",
        ]
    },
    {
        normalized: "おしほり",
        originals: [
            "お絞り",
        ]
    },
    {
        normalized: "おしやか",
        originals: [
            "おしゃか",
        ]
    },
    {
        normalized: "おしやれ",
        originals: [
            "おしゃれ",
        ]
    },
    {
        normalized: "おしやん",
        originals: [
            "おじゃん",
        ]
    },
    {
        normalized: "おしよう",
        originals: [
            "和尚",
        ]
    },
    {
        normalized: "おしよく",
        originals: [
            "汚職",
        ]
    },
    {
        normalized: "おそさき",
        originals: [
            "遅咲き",
        ]
    },
    {
        normalized: "おそはん",
        originals: [
            "遅番",
        ]
    },
    {
        normalized: "おたけひ",
        originals: [
            "雄たけび",
        ]
    },
    {
        normalized: "おちつき",
        originals: [
            "落ち着き",
        ]
    },
    {
        normalized: "おつかけ",
        originals: [
            "追っ掛け",
        ]
    },
    {
        normalized: "おつくう",
        originals: [
            "おっくう",
        ]
    },
    {
        normalized: "おつはい",
        originals: [
            "おっぱい",
        ]
    },
    {
        normalized: "おてあけ",
        originals: [
            "お手上げ",
        ]
    },
    {
        normalized: "おてんは",
        originals: [
            "おてんば",
        ]
    },
    {
        normalized: "おとうと",
        originals: [
            "弟",
        ]
    },
    {
        normalized: "おとかし",
        originals: [
            "脅かし",
        ]
    },
    {
        normalized: "おとこき",
        originals: [
            "男気",
        ]
    },
    {
        normalized: "おとすれ",
        originals: [
            "訪れ",
        ]
    },
    {
        normalized: "おととい",
        originals: [
            "おととい",
        ]
    },
    {
        normalized: "おととし",
        originals: [
            "おととし",
        ]
    },
    {
        normalized: "おととひ",
        originals: [
            "音飛び",
        ]
    },
    {
        normalized: "おともれ",
        originals: [
            "音漏れ",
        ]
    },
    {
        normalized: "おとりこ",
        originals: [
            "踊り子",
        ]
    },
    {
        normalized: "おとりて",
        originals: [
            "踊り手",
        ]
    },
    {
        normalized: "おとりは",
        originals: [
            "踊り場",
        ]
    },
    {
        normalized: "おとろえ",
        originals: [
            "衰え",
        ]
    },
    {
        normalized: "おとろき",
        originals: [
            "驚き",
        ]
    },
    {
        normalized: "おにきり",
        originals: [
            "お握り",
        ]
    },
    {
        normalized: "おにはは",
        originals: [
            "鬼ばば",
        ]
    },
    {
        normalized: "おねしよ",
        originals: [
            "おねしょ",
        ]
    },
    {
        normalized: "おのおの",
        originals: [
            "各各",
        ]
    },
    {
        normalized: "おふいす",
        originals: [
            "オフィス",
        ]
    },
    {
        normalized: "おふくろ",
        originals: [
            "おふくろ",
        ]
    },
    {
        normalized: "おふしえ",
        originals: [
            "オブジェ",
        ]
    },
    {
        normalized: "おふれこ",
        originals: [
            "オフレコ",
        ]
    },
    {
        normalized: "おむれつ",
        originals: [
            "オムレツ",
        ]
    },
    {
        normalized: "おめてた",
        originals: [
            "おめでた",
        ]
    },
    {
        normalized: "おめみえ",
        originals: [
            "お目見え",
        ]
    },
    {
        normalized: "おもいて",
        originals: [
            "思い出",
        ]
    },
    {
        normalized: "おもかけ",
        originals: [
            "面影",
        ]
    },
    {
        normalized: "おもちや",
        originals: [
            "おもちゃ",
        ]
    },
    {
        normalized: "おもなか",
        originals: [
            "面長",
        ]
    },
    {
        normalized: "おもむき",
        originals: [
            "趣",
        ]
    },
    {
        normalized: "おもらし",
        originals: [
            "お漏らし",
        ]
    },
    {
        normalized: "おもわく",
        originals: [
            "思わく",
        ]
    },
    {
        normalized: "おやかた",
        originals: [
            "親方",
        ]
    },
    {
        normalized: "おやたま",
        originals: [
            "親玉",
        ]
    },
    {
        normalized: "おやとり",
        originals: [
            "親鳥",
        ]
    },
    {
        normalized: "おやふん",
        originals: [
            "親分",
        ]
    },
    {
        normalized: "おやもと",
        originals: [
            "親もと",
        ]
    },
    {
        normalized: "おやゆひ",
        originals: [
            "親指",
        ]
    },
    {
        normalized: "おらんた",
        originals: [
            "オランダ",
        ]
    },
    {
        normalized: "おりあい",
        originals: [
            "折り合い",
        ]
    },
    {
        normalized: "おりかみ",
        originals: [
            "折り紙",
        ]
    },
    {
        normalized: "おりくち",
        originals: [
            "降り口",
        ]
    },
    {
        normalized: "おりこみ",
        originals: [
            "折り込み",
            "織り込み",
        ]
    },
    {
        normalized: "おりつる",
        originals: [
            "折りづる",
        ]
    },
    {
        normalized: "おりひめ",
        originals: [
            "織り姫",
        ]
    },
    {
        normalized: "おりもの",
        originals: [
            "織物",
        ]
    },
    {
        normalized: "おるかん",
        originals: [
            "オルガン",
        ]
    },
    {
        normalized: "おれんし",
        originals: [
            "オレンジ",
        ]
    },
    {
        normalized: "おんいき",
        originals: [
            "音域",
        ]
    },
    {
        normalized: "おんかい",
        originals: [
            "音階",
        ]
    },
    {
        normalized: "おんかく",
        originals: [
            "音楽",
        ]
    },
    {
        normalized: "おんかん",
        originals: [
            "音感",
        ]
    },
    {
        normalized: "おんけい",
        originals: [
            "恩恵",
        ]
    },
    {
        normalized: "おんけん",
        originals: [
            "音源",
        ]
    },
    {
        normalized: "おんこう",
        originals: [
            "温厚",
        ]
    },
    {
        normalized: "おんしつ",
        originals: [
            "温室",
            "音質",
        ]
    },
    {
        normalized: "おんしん",
        originals: [
            "音信",
            "恩人",
        ]
    },
    {
        normalized: "おんすい",
        originals: [
            "温水",
        ]
    },
    {
        normalized: "おんせい",
        originals: [
            "音声",
        ]
    },
    {
        normalized: "おんせん",
        originals: [
            "温泉",
        ]
    },
    {
        normalized: "おんそく",
        originals: [
            "音速",
        ]
    },
    {
        normalized: "おんそん",
        originals: [
            "温存",
        ]
    },
    {
        normalized: "おんたい",
        originals: [
            "温帯",
        ]
    },
    {
        normalized: "おんてい",
        originals: [
            "音程",
        ]
    },
    {
        normalized: "おんとく",
        originals: [
            "音読",
        ]
    },
    {
        normalized: "おんとり",
        originals: [
            "おんどり",
        ]
    },
    {
        normalized: "おんふう",
        originals: [
            "温風",
        ]
    },
    {
        normalized: "おんほろ",
        originals: [
            "おんぼろ",
        ]
    },
    {
        normalized: "かいあく",
        originals: [
            "改悪",
        ]
    },
    {
        normalized: "かいあけ",
        originals: [
            "買い上げ",
        ]
    },
    {
        normalized: "かいいき",
        originals: [
            "海域",
        ]
    },
    {
        normalized: "かいいぬ",
        originals: [
            "飼い犬",
        ]
    },
    {
        normalized: "かいいん",
        originals: [
            "会員",
            "開院",
        ]
    },
    {
        normalized: "かいうん",
        originals: [
            "開運",
        ]
    },
    {
        normalized: "かいえん",
        originals: [
            "開園",
            "開演",
        ]
    },
    {
        normalized: "かいおき",
        originals: [
            "買い置き",
        ]
    },
    {
        normalized: "かいかい",
        originals: [
            "開会",
            "海外",
        ]
    },
    {
        normalized: "かいかく",
        originals: [
            "改革",
            "外角",
        ]
    },
    {
        normalized: "かいかた",
        originals: [
            "買い方",
        ]
    },
    {
        normalized: "かいから",
        originals: [
            "貝殻",
        ]
    },
    {
        normalized: "かいかん",
        originals: [
            "快感",
            "開館",
            "海岸",
            "外観",
        ]
    },
    {
        normalized: "かいきよ",
        originals: [
            "快挙",
        ]
    },
    {
        normalized: "かいきん",
        originals: [
            "皆勤",
            "解禁",
        ]
    },
    {
        normalized: "かいくい",
        originals: [
            "買い食い",
        ]
    },
    {
        normalized: "かいくん",
        originals: [
            "海軍",
        ]
    },
    {
        normalized: "かいけい",
        originals: [
            "会計",
        ]
    },
    {
        normalized: "かいけつ",
        originals: [
            "解決",
        ]
    },
    {
        normalized: "かいけん",
        originals: [
            "会見",
            "外見",
        ]
    },
    {
        normalized: "かいこう",
        originals: [
            "開校",
            "会合",
            "外交",
        ]
    },
    {
        normalized: "かいこく",
        originals: [
            "開国",
            "外国",
        ]
    },
    {
        normalized: "かいこつ",
        originals: [
            "骸骨",
        ]
    },
    {
        normalized: "かいさい",
        originals: [
            "開催",
        ]
    },
    {
        normalized: "かいさつ",
        originals: [
            "改札",
        ]
    },
    {
        normalized: "かいさん",
        originals: [
            "海産",
            "解散",
            "海山",
            "概算",
        ]
    },
    {
        normalized: "かいしめ",
        originals: [
            "買い占め",
        ]
    },
    {
        normalized: "かいしや",
        originals: [
            "会社",
            "外車",
        ]
    },
    {
        normalized: "かいしよ",
        originals: [
            "解除",
        ]
    },
    {
        normalized: "かいしん",
        originals: [
            "回診",
            "改心",
            "怪人",
            "外人",
        ]
    },
    {
        normalized: "かいすい",
        originals: [
            "海水",
        ]
    },
    {
        normalized: "かいすう",
        originals: [
            "回数",
        ]
    },
    {
        normalized: "かいせい",
        originals: [
            "快晴",
            "改正",
        ]
    },
    {
        normalized: "かいせき",
        originals: [
            "会席",
            "懐石",
            "解析",
        ]
    },
    {
        normalized: "かいせつ",
        originals: [
            "解説",
            "開設",
        ]
    },
    {
        normalized: "かいせん",
        originals: [
            "回線",
            "開戦",
            "改善",
            "凱旋",
        ]
    },
    {
        normalized: "かいそう",
        originals: [
            "海草",
            "回想",
            "回送",
            "改装",
            "海藻",
            "階層",
            "改造",
            "外装",
        ]
    },
    {
        normalized: "かいそく",
        originals: [
            "快速",
            "海賊",
        ]
    },
    {
        normalized: "かいたい",
        originals: [
            "解体",
        ]
    },
    {
        normalized: "かいたく",
        originals: [
            "開拓",
            "快諾",
        ]
    },
    {
        normalized: "かいたし",
        originals: [
            "買い出し",
        ]
    },
    {
        normalized: "かいため",
        originals: [
            "買いだめ",
        ]
    },
    {
        normalized: "かいたん",
        originals: [
            "会談",
            "怪談",
            "階段",
        ]
    },
    {
        normalized: "かいちく",
        originals: [
            "改築",
        ]
    },
    {
        normalized: "かいつう",
        originals: [
            "開通",
        ]
    },
    {
        normalized: "かいつか",
        originals: [
            "貝塚",
        ]
    },
    {
        normalized: "かいつけ",
        originals: [
            "買い付け",
        ]
    },
    {
        normalized: "かいてい",
        originals: [
            "改定",
            "改訂",
            "海底",
        ]
    },
    {
        normalized: "かいてき",
        originals: [
            "快適",
        ]
    },
    {
        normalized: "かいてん",
        originals: [
            "回転",
            "開店",
        ]
    },
    {
        normalized: "かいとう",
        originals: [
            "回答",
            "怪盗",
            "解凍",
            "解答",
            "街道",
            "外灯",
            "街灯",
            "街頭",
            "該当",
        ]
    },
    {
        normalized: "かいとき",
        originals: [
            "買い時",
        ]
    },
    {
        normalized: "かいとく",
        originals: [
            "解読",
            "買い得",
        ]
    },
    {
        normalized: "かいとり",
        originals: [
            "買い取り",
        ]
    },
    {
        normalized: "かいにん",
        originals: [
            "懐妊",
            "解任",
        ]
    },
    {
        normalized: "かいぬし",
        originals: [
            "買い主",
            "飼い主",
        ]
    },
    {
        normalized: "かいねこ",
        originals: [
            "飼い猫",
        ]
    },
    {
        normalized: "かいねん",
        originals: [
            "概念",
        ]
    },
    {
        normalized: "かいはく",
        originals: [
            "外泊",
        ]
    },
    {
        normalized: "かいはつ",
        originals: [
            "開発",
        ]
    },
    {
        normalized: "かいひん",
        originals: [
            "海浜",
        ]
    },
    {
        normalized: "かいふう",
        originals: [
            "開封",
        ]
    },
    {
        normalized: "かいふく",
        originals: [
            "回復",
        ]
    },
    {
        normalized: "かいふつ",
        originals: [
            "怪物",
        ]
    },
    {
        normalized: "かいへい",
        originals: [
            "海兵",
            "開閉",
        ]
    },
    {
        normalized: "かいへき",
        originals: [
            "外壁",
        ]
    },
    {
        normalized: "かいへん",
        originals: [
            "改変",
            "快便",
        ]
    },
    {
        normalized: "かいほう",
        originals: [
            "介抱",
            "会報",
            "解放",
            "開放",
            "解剖",
        ]
    },
    {
        normalized: "かいまく",
        originals: [
            "開幕",
        ]
    },
    {
        normalized: "かいみん",
        originals: [
            "快眠",
        ]
    },
    {
        normalized: "かいめい",
        originals: [
            "改名",
            "解明",
        ]
    },
    {
        normalized: "かいめつ",
        originals: [
            "壊滅",
        ]
    },
    {
        normalized: "かいめん",
        originals: [
            "海面",
            "外面",
        ]
    },
    {
        normalized: "かいもの",
        originals: [
            "買い物",
        ]
    },
    {
        normalized: "かいもん",
        originals: [
            "開門",
        ]
    },
    {
        normalized: "かいやく",
        originals: [
            "解約",
        ]
    },
    {
        normalized: "かいよう",
        originals: [
            "海洋",
            "概要",
        ]
    },
    {
        normalized: "かいらい",
        originals: [
            "外来",
        ]
    },
    {
        normalized: "かいらく",
        originals: [
            "快楽",
        ]
    },
    {
        normalized: "かいらん",
        originals: [
            "回覧",
        ]
    },
    {
        normalized: "かいりき",
        originals: [
            "怪力",
        ]
    },
    {
        normalized: "かいろう",
        originals: [
            "回廊",
        ]
    },
    {
        normalized: "かいろん",
        originals: [
            "概論",
        ]
    },
    {
        normalized: "かうんと",
        originals: [
            "カウント",
        ]
    },
    {
        normalized: "かえうた",
        originals: [
            "替え歌",
        ]
    },
    {
        normalized: "かえしん",
        originals: [
            "替え芯",
        ]
    },
    {
        normalized: "かえたま",
        originals: [
            "替え玉",
        ]
    },
    {
        normalized: "かえりち",
        originals: [
            "返り血",
        ]
    },
    {
        normalized: "かおいろ",
        originals: [
            "顔色",
        ]
    },
    {
        normalized: "かおそり",
        originals: [
            "顔そり",
        ]
    },
    {
        normalized: "かおたし",
        originals: [
            "顔出し",
        ]
    },
    {
        normalized: "かおたち",
        originals: [
            "顔立ち",
        ]
    },
    {
        normalized: "かおふれ",
        originals: [
            "顔ぶれ",
        ]
    },
    {
        normalized: "かかやき",
        originals: [
            "輝き",
        ]
    },
    {
        normalized: "かかわり",
        originals: [
            "かかわり",
        ]
    },
    {
        normalized: "かきあけ",
        originals: [
            "かき揚げ",
        ]
    },
    {
        normalized: "かきあな",
        originals: [
            "かぎ穴",
        ]
    },
    {
        normalized: "かきおき",
        originals: [
            "書き置き",
        ]
    },
    {
        normalized: "かきかえ",
        originals: [
            "書き替え",
        ]
    },
    {
        normalized: "かきこみ",
        originals: [
            "書き込み",
        ]
    },
    {
        normalized: "かきそめ",
        originals: [
            "書き初め",
        ]
    },
    {
        normalized: "かきとめ",
        originals: [
            "書留",
        ]
    },
    {
        normalized: "かきとり",
        originals: [
            "書き取り",
        ]
    },
    {
        normalized: "かきもの",
        originals: [
            "書き物",
        ]
    },
    {
        normalized: "かきゆう",
        originals: [
            "下級",
        ]
    },
    {
        normalized: "かきよう",
        originals: [
            "家業",
        ]
    },
    {
        normalized: "かくあけ",
        originals: [
            "格上げ",
        ]
    },
    {
        normalized: "かくいん",
        originals: [
            "学院",
        ]
    },
    {
        normalized: "かくえん",
        originals: [
            "学園",
        ]
    },
    {
        normalized: "かくかり",
        originals: [
            "角刈り",
        ]
    },
    {
        normalized: "かくけい",
        originals: [
            "学芸",
        ]
    },
    {
        normalized: "かくけん",
        originals: [
            "格言",
        ]
    },
    {
        normalized: "かくさい",
        originals: [
            "角材",
        ]
    },
    {
        normalized: "かくさく",
        originals: [
            "画策",
        ]
    },
    {
        normalized: "かくさけ",
        originals: [
            "格下げ",
        ]
    },
    {
        normalized: "かくさん",
        originals: [
            "拡散",
        ]
    },
    {
        normalized: "かくしき",
        originals: [
            "格式",
            "学識",
        ]
    },
    {
        normalized: "かくしつ",
        originals: [
            "確執",
            "角質",
        ]
    },
    {
        normalized: "かくしや",
        originals: [
            "学者",
        ]
    },
    {
        normalized: "かくしゆ",
        originals: [
            "各種",
        ]
    },
    {
        normalized: "かくしよ",
        originals: [
            "各所",
        ]
    },
    {
        normalized: "かくしん",
        originals: [
            "核心",
            "確信",
            "革新",
        ]
    },
    {
        normalized: "かくすう",
        originals: [
            "画数",
        ]
    },
    {
        normalized: "かくせい",
        originals: [
            "覚醒",
            "学生",
        ]
    },
    {
        normalized: "かくせつ",
        originals: [
            "学説",
        ]
    },
    {
        normalized: "かくたい",
        originals: [
            "拡大",
        ]
    },
    {
        normalized: "かくたん",
        originals: [
            "楽団",
        ]
    },
    {
        normalized: "かくつけ",
        originals: [
            "格付け",
        ]
    },
    {
        normalized: "かくてい",
        originals: [
            "各停",
            "確定",
        ]
    },
    {
        normalized: "かくてる",
        originals: [
            "カクテル",
        ]
    },
    {
        normalized: "かくとう",
        originals: [
            "格闘",
        ]
    },
    {
        normalized: "かくとく",
        originals: [
            "獲得",
        ]
    },
    {
        normalized: "かくない",
        originals: [
            "学内",
        ]
    },
    {
        normalized: "かくにん",
        originals: [
            "確認",
        ]
    },
    {
        normalized: "かくねん",
        originals: [
            "学年",
        ]
    },
    {
        normalized: "かくのう",
        originals: [
            "格納",
        ]
    },
    {
        normalized: "かくふち",
        originals: [
            "額縁",
        ]
    },
    {
        normalized: "かくまく",
        originals: [
            "角膜",
        ]
    },
    {
        normalized: "かくめい",
        originals: [
            "革命",
        ]
    },
    {
        normalized: "かくもん",
        originals: [
            "学問",
        ]
    },
    {
        normalized: "かくやく",
        originals: [
            "確約",
        ]
    },
    {
        normalized: "かくゆう",
        originals: [
            "学友",
        ]
    },
    {
        normalized: "かくらん",
        originals: [
            "学ラン",
        ]
    },
    {
        normalized: "かくりつ",
        originals: [
            "確率",
            "確立",
        ]
    },
    {
        normalized: "かくれか",
        originals: [
            "隠れ家",
        ]
    },
    {
        normalized: "かくれき",
        originals: [
            "学歴",
        ]
    },
    {
        normalized: "かくわり",
        originals: [
            "学割",
        ]
    },
    {
        normalized: "かけあし",
        originals: [
            "駆け足",
        ]
    },
    {
        normalized: "かけおち",
        originals: [
            "駆け落ち",
        ]
    },
    {
        normalized: "かけかね",
        originals: [
            "掛け金",
        ]
    },
    {
        normalized: "かけきん",
        originals: [
            "掛け金",
        ]
    },
    {
        normalized: "かけくち",
        originals: [
            "陰口",
        ]
    },
    {
        normalized: "かけこえ",
        originals: [
            "掛け声",
        ]
    },
    {
        normalized: "かけこと",
        originals: [
            "賭け事",
        ]
    },
    {
        normalized: "かけこみ",
        originals: [
            "駆け込み",
        ]
    },
    {
        normalized: "かけさん",
        originals: [
            "掛け算",
        ]
    },
    {
        normalized: "かけしく",
        originals: [
            "掛け軸",
        ]
    },
    {
        normalized: "かけたし",
        originals: [
            "駆け出し",
        ]
    },
    {
        normalized: "かけはし",
        originals: [
            "掛け橋",
        ]
    },
    {
        normalized: "かけひき",
        originals: [
            "駆け引き",
        ]
    },
    {
        normalized: "かけほし",
        originals: [
            "陰干し",
        ]
    },
    {
        normalized: "かけもち",
        originals: [
            "掛け持ち",
        ]
    },
    {
        normalized: "かさあな",
        originals: [
            "風穴",
        ]
    },
    {
        normalized: "かさいれ",
        originals: [
            "がさ入れ",
        ]
    },
    {
        normalized: "かさかみ",
        originals: [
            "風上",
        ]
    },
    {
        normalized: "かさしも",
        originals: [
            "風下",
        ]
    },
    {
        normalized: "かさなり",
        originals: [
            "重なり",
        ]
    },
    {
        normalized: "かさねき",
        originals: [
            "重ね着",
        ]
    },
    {
        normalized: "かさふた",
        originals: [
            "かさぶた",
        ]
    },
    {
        normalized: "かさむき",
        originals: [
            "風向き",
        ]
    },
    {
        normalized: "かさよけ",
        originals: [
            "風よけ",
        ]
    },
    {
        normalized: "かさりけ",
        originals: [
            "飾り気",
        ]
    },
    {
        normalized: "かしかり",
        originals: [
            "貸し借り",
        ]
    },
    {
        normalized: "かしきり",
        originals: [
            "貸し切り",
        ]
    },
    {
        normalized: "かしたし",
        originals: [
            "貸し出し",
        ]
    },
    {
        normalized: "かしつけ",
        originals: [
            "貸し付け",
        ]
    },
    {
        normalized: "かしとり",
        originals: [
            "かじ取り",
        ]
    },
    {
        normalized: "かしぬし",
        originals: [
            "貸し主",
        ]
    },
    {
        normalized: "かしもの",
        originals: [
            "貸し物",
        ]
    },
    {
        normalized: "かしゆう",
        originals: [
            "果汁",
            "画集",
        ]
    },
    {
        normalized: "かしよう",
        originals: [
            "仮称",
            "歌唱",
            "過小",
            "過少",
            "箇条",
            "過剰",
            "賀正",
        ]
    },
    {
        normalized: "かしよく",
        originals: [
            "過食",
        ]
    },
    {
        normalized: "かすかい",
        originals: [
            "かすがい",
        ]
    },
    {
        normalized: "かすてら",
        originals: [
            "カステラ",
        ]
    },
    {
        normalized: "かすとし",
        originals: [
            "万年",
        ]
    },
    {
        normalized: "かすのこ",
        originals: [
            "数の子",
        ]
    },
    {
        normalized: "かせつと",
        originals: [
            "カセット",
        ]
    },
    {
        normalized: "かせひき",
        originals: [
            "風邪引き",
        ]
    },
    {
        normalized: "かせよけ",
        originals: [
            "風よけ",
        ]
    },
    {
        normalized: "かそりん",
        originals: [
            "ガソリン",
        ]
    },
    {
        normalized: "かたおち",
        originals: [
            "がた落ち",
        ]
    },
    {
        normalized: "かたおや",
        originals: [
            "片親",
        ]
    },
    {
        normalized: "かたかき",
        originals: [
            "肩書き",
        ]
    },
    {
        normalized: "かたかな",
        originals: [
            "片仮名",
        ]
    },
    {
        normalized: "かたかわ",
        originals: [
            "片側",
        ]
    },
    {
        normalized: "かたこと",
        originals: [
            "かたこと",
            "片言",
        ]
    },
    {
        normalized: "かたこり",
        originals: [
            "肩凝り",
        ]
    },
    {
        normalized: "かたすみ",
        originals: [
            "片隅",
        ]
    },
    {
        normalized: "かたつけ",
        originals: [
            "片付け",
        ]
    },
    {
        normalized: "かたてま",
        originals: [
            "片手間",
        ]
    },
    {
        normalized: "かたとき",
        originals: [
            "片時",
        ]
    },
    {
        normalized: "かたはは",
        originals: [
            "肩幅",
        ]
    },
    {
        normalized: "かたひさ",
        originals: [
            "片ひざ",
        ]
    },
    {
        normalized: "かたひし",
        originals: [
            "片ひじ",
        ]
    },
    {
        normalized: "かたふつ",
        originals: [
            "堅物",
        ]
    },
    {
        normalized: "かたほう",
        originals: [
            "片方",
            "片棒",
        ]
    },
    {
        normalized: "かたまり",
        originals: [
            "塊",
        ]
    },
    {
        normalized: "かたみち",
        originals: [
            "片道",
        ]
    },
    {
        normalized: "かたむき",
        originals: [
            "傾き",
        ]
    },
    {
        normalized: "かためん",
        originals: [
            "片面",
        ]
    },
    {
        normalized: "かたりて",
        originals: [
            "語り手",
        ]
    },
    {
        normalized: "かたろく",
        originals: [
            "カタログ",
        ]
    },
    {
        normalized: "かたわれ",
        originals: [
            "片割れ",
        ]
    },
    {
        normalized: "かちうま",
        originals: [
            "勝ち馬",
        ]
    },
    {
        normalized: "かちくみ",
        originals: [
            "勝ち組",
        ]
    },
    {
        normalized: "かちこし",
        originals: [
            "勝ち越し",
        ]
    },
    {
        normalized: "かちぬき",
        originals: [
            "勝ち抜き",
        ]
    },
    {
        normalized: "かちほし",
        originals: [
            "勝ち星",
        ]
    },
    {
        normalized: "かちまけ",
        originals: [
            "勝ち負け",
        ]
    },
    {
        normalized: "かちゆう",
        originals: [
            "家中",
            "渦中",
        ]
    },
    {
        normalized: "かちよう",
        originals: [
            "家長",
            "課長",
            "がちょう",
        ]
    },
    {
        normalized: "かつあい",
        originals: [
            "割愛",
        ]
    },
    {
        normalized: "かつかい",
        originals: [
            "学会",
        ]
    },
    {
        normalized: "かつこう",
        originals: [
            "かっこう",
            "格好",
            "学校",
        ]
    },
    {
        normalized: "かつこく",
        originals: [
            "各国",
        ]
    },
    {
        normalized: "かつさく",
        originals: [
            "合作",
        ]
    },
    {
        normalized: "かつさん",
        originals: [
            "合算",
        ]
    },
    {
        normalized: "かつせつ",
        originals: [
            "滑舌",
        ]
    },
    {
        normalized: "かつせん",
        originals: [
            "合戦",
        ]
    },
    {
        normalized: "かつそう",
        originals: [
            "滑走",
            "合奏",
        ]
    },
    {
        normalized: "かつたい",
        originals: [
            "合体",
        ]
    },
    {
        normalized: "かつとう",
        originals: [
            "葛藤",
            "活動",
        ]
    },
    {
        normalized: "かつとん",
        originals: [
            "カツどん",
        ]
    },
    {
        normalized: "かつふる",
        originals: [
            "カップル",
        ]
    },
    {
        normalized: "かつへい",
        originals: [
            "合併",
        ]
    },
    {
        normalized: "かつほう",
        originals: [
            "割烹",
            "渇望",
        ]
    },
    {
        normalized: "かつやく",
        originals: [
            "活躍",
        ]
    },
    {
        normalized: "かつよう",
        originals: [
            "活用",
        ]
    },
    {
        normalized: "かつらく",
        originals: [
            "滑落",
        ]
    },
    {
        normalized: "かつれつ",
        originals: [
            "カツレツ",
        ]
    },
    {
        normalized: "かとまつ",
        originals: [
            "門松",
        ]
    },
    {
        normalized: "かなあみ",
        originals: [
            "金網",
        ]
    },
    {
        normalized: "かなかき",
        originals: [
            "仮名書き",
        ]
    },
    {
        normalized: "かなかた",
        originals: [
            "金型",
        ]
    },
    {
        normalized: "かなしみ",
        originals: [
            "悲しみ",
        ]
    },
    {
        normalized: "かなつち",
        originals: [
            "金づち",
        ]
    },
    {
        normalized: "かなふん",
        originals: [
            "かなぶん",
        ]
    },
    {
        normalized: "かなほう",
        originals: [
            "金棒",
        ]
    },
    {
        normalized: "かなもの",
        originals: [
            "金物",
        ]
    },
    {
        normalized: "かにたま",
        originals: [
            "かに玉",
        ]
    },
    {
        normalized: "かにまた",
        originals: [
            "がにまた",
        ]
    },
    {
        normalized: "かにゆう",
        originals: [
            "加入",
        ]
    },
    {
        normalized: "かねあい",
        originals: [
            "兼ね合い",
        ]
    },
    {
        normalized: "かねかし",
        originals: [
            "金貸し",
        ]
    },
    {
        normalized: "かねつる",
        originals: [
            "金づる",
        ]
    },
    {
        normalized: "かねもち",
        originals: [
            "金持ち",
        ]
    },
    {
        normalized: "かはやき",
        originals: [
            "かば焼き",
        ]
    },
    {
        normalized: "かひよう",
        originals: [
            "画鋲",
        ]
    },
    {
        normalized: "かふけん",
        originals: [
            "株券",
        ]
    },
    {
        normalized: "かふしき",
        originals: [
            "株式",
        ]
    },
    {
        normalized: "かふせる",
        originals: [
            "カプセル",
        ]
    },
    {
        normalized: "かふそく",
        originals: [
            "過不足",
        ]
    },
    {
        normalized: "かふぬし",
        originals: [
            "株主",
        ]
    },
    {
        normalized: "かふのみ",
        originals: [
            "がぶ飲み",
        ]
    },
    {
        normalized: "かへかけ",
        originals: [
            "壁掛け",
        ]
    },
    {
        normalized: "かへかみ",
        originals: [
            "壁紙",
        ]
    },
    {
        normalized: "かへこし",
        originals: [
            "壁越し",
        ]
    },
    {
        normalized: "かほちや",
        originals: [
            "かぼちゃ",
        ]
    },
    {
        normalized: "かまきり",
        originals: [
            "かまきり",
        ]
    },
    {
        normalized: "かまくち",
        originals: [
            "がま口",
        ]
    },
    {
        normalized: "かまくら",
        originals: [
            "かまくら",
        ]
    },
    {
        normalized: "かまほこ",
        originals: [
            "かまぼこ",
        ]
    },
    {
        normalized: "かみあい",
        originals: [
            "かみ合い",
        ]
    },
    {
        normalized: "かみかせ",
        originals: [
            "神風",
        ]
    },
    {
        normalized: "かみかた",
        originals: [
            "髪型",
        ]
    },
    {
        normalized: "かみきれ",
        originals: [
            "紙切れ",
        ]
    },
    {
        normalized: "かみくす",
        originals: [
            "紙くず",
        ]
    },
    {
        normalized: "かみそり",
        originals: [
            "かみそり",
        ]
    },
    {
        normalized: "かみたな",
        originals: [
            "神棚",
        ]
    },
    {
        normalized: "かみなり",
        originals: [
            "雷",
        ]
    },
    {
        normalized: "かみのけ",
        originals: [
            "髪の毛",
        ]
    },
    {
        normalized: "かみわさ",
        originals: [
            "神技",
            "神業",
        ]
    },
    {
        normalized: "かめむし",
        originals: [
            "かめ虫",
        ]
    },
    {
        normalized: "かやつく",
        originals: [
            "カヤック",
        ]
    },
    {
        normalized: "からあき",
        originals: [
            "がらあき",
            "がら空き",
        ]
    },
    {
        normalized: "からうり",
        originals: [
            "空売り",
        ]
    },
    {
        normalized: "からおけ",
        originals: [
            "カラオケ",
        ]
    },
    {
        normalized: "からくし",
        originals: [
            "空くじ",
        ]
    },
    {
        normalized: "からくた",
        originals: [
            "がらくた",
        ]
    },
    {
        normalized: "からくち",
        originals: [
            "辛口",
        ]
    },
    {
        normalized: "からくり",
        originals: [
            "からくり",
        ]
    },
    {
        normalized: "からすき",
        originals: [
            "がら空き",
        ]
    },
    {
        normalized: "からつと",
        originals: [
            "カラット",
        ]
    },
    {
        normalized: "からつほ",
        originals: [
            "空っぽ",
        ]
    },
    {
        normalized: "からとう",
        originals: [
            "辛党",
        ]
    },
    {
        normalized: "からはこ",
        originals: [
            "空箱",
        ]
    },
    {
        normalized: "からふり",
        originals: [
            "空振り",
        ]
    },
    {
        normalized: "からもの",
        originals: [
            "柄物",
        ]
    },
    {
        normalized: "かりあけ",
        originals: [
            "刈り上げ",
        ]
    },
    {
        normalized: "かりいえ",
        originals: [
            "借り家",
        ]
    },
    {
        normalized: "かりいれ",
        originals: [
            "借り入れ",
        ]
    },
    {
        normalized: "かりうむ",
        originals: [
            "カリウム",
        ]
    },
    {
        normalized: "かりかた",
        originals: [
            "借り方",
        ]
    },
    {
        normalized: "かりすま",
        originals: [
            "カリスマ",
        ]
    },
    {
        normalized: "かりとり",
        originals: [
            "刈り取り",
        ]
    },
    {
        normalized: "かりぬい",
        originals: [
            "仮縫い",
        ]
    },
    {
        normalized: "かりぬし",
        originals: [
            "借り主",
        ]
    },
    {
        normalized: "かりへん",
        originals: [
            "がり勉",
        ]
    },
    {
        normalized: "かりめん",
        originals: [
            "仮免",
        ]
    },
    {
        normalized: "かりもの",
        originals: [
            "借り物",
        ]
    },
    {
        normalized: "かりゆう",
        originals: [
            "下流",
            "顆粒",
            "我流",
        ]
    },
    {
        normalized: "かりよく",
        originals: [
            "火力",
        ]
    },
    {
        normalized: "かるいし",
        originals: [
            "軽石",
        ]
    },
    {
        normalized: "かるかも",
        originals: [
            "かるがも",
        ]
    },
    {
        normalized: "かるくち",
        originals: [
            "軽口",
        ]
    },
    {
        normalized: "かれえた",
        originals: [
            "枯れ枝",
        ]
    },
    {
        normalized: "かれくさ",
        originals: [
            "枯れ草",
        ]
    },
    {
        normalized: "かれつし",
        originals: [
            "カレッジ",
        ]
    },
    {
        normalized: "かわうそ",
        originals: [
            "かわうそ",
        ]
    },
    {
        normalized: "かわかみ",
        originals: [
            "川上",
        ]
    },
    {
        normalized: "かわきし",
        originals: [
            "川岸",
        ]
    },
    {
        normalized: "かわくつ",
        originals: [
            "革靴",
        ]
    },
    {
        normalized: "かわそい",
        originals: [
            "川沿い",
        ]
    },
    {
        normalized: "かわそこ",
        originals: [
            "川底",
        ]
    },
    {
        normalized: "かわはき",
        originals: [
            "かわはぎ",
        ]
    },
    {
        normalized: "かわへり",
        originals: [
            "川べり",
        ]
    },
    {
        normalized: "かわりみ",
        originals: [
            "変わり身",
        ]
    },
    {
        normalized: "かわりめ",
        originals: [
            "変わり目",
        ]
    },
    {
        normalized: "かんえん",
        originals: [
            "肝炎",
            "岩塩",
        ]
    },
    {
        normalized: "かんおけ",
        originals: [
            "棺おけ",
        ]
    },
    {
        normalized: "かんかい",
        originals: [
            "感慨",
        ]
    },
    {
        normalized: "かんかえ",
        originals: [
            "考え",
        ]
    },
    {
        normalized: "かんかく",
        originals: [
            "感覚",
            "間隔",
        ]
    },
    {
        normalized: "かんかつ",
        originals: [
            "管轄",
        ]
    },
    {
        normalized: "かんきり",
        originals: [
            "缶切り",
        ]
    },
    {
        normalized: "かんきん",
        originals: [
            "換金",
            "監禁",
        ]
    },
    {
        normalized: "かんけい",
        originals: [
            "関係",
            "歓迎",
        ]
    },
    {
        normalized: "かんけき",
        originals: [
            "感激",
            "観劇",
        ]
    },
    {
        normalized: "かんけつ",
        originals: [
            "完結",
            "簡潔",
        ]
    },
    {
        normalized: "かんけん",
        originals: [
            "還元",
        ]
    },
    {
        normalized: "かんこう",
        originals: [
            "観光",
            "眼光",
        ]
    },
    {
        normalized: "かんこく",
        originals: [
            "勧告",
            "韓国",
            "監獄",
        ]
    },
    {
        normalized: "かんさい",
        originals: [
            "関西",
            "完済",
        ]
    },
    {
        normalized: "かんさく",
        originals: [
            "贋作",
        ]
    },
    {
        normalized: "かんさし",
        originals: [
            "かんざし",
        ]
    },
    {
        normalized: "かんさつ",
        originals: [
            "観察",
        ]
    },
    {
        normalized: "かんさん",
        originals: [
            "閑散",
        ]
    },
    {
        normalized: "かんしつ",
        originals: [
            "元日",
        ]
    },
    {
        normalized: "かんしや",
        originals: [
            "感謝",
            "患者",
        ]
    },
    {
        normalized: "かんしゆ",
        originals: [
            "看守",
        ]
    },
    {
        normalized: "かんしよ",
        originals: [
            "願書",
        ]
    },
    {
        normalized: "かんしん",
        originals: [
            "感心",
            "関心",
        ]
    },
    {
        normalized: "かんすい",
        originals: [
            "完遂",
        ]
    },
    {
        normalized: "かんすう",
        originals: [
            "関数",
        ]
    },
    {
        normalized: "かんせい",
        originals: [
            "完成",
            "感性",
            "歓声",
            "閑静",
            "関税",
        ]
    },
    {
        normalized: "かんせき",
        originals: [
            "岩石",
        ]
    },
    {
        normalized: "かんせつ",
        originals: [
            "間接",
            "関節",
        ]
    },
    {
        normalized: "かんせん",
        originals: [
            "感染",
            "汗腺",
            "観戦",
        ]
    },
    {
        normalized: "かんそう",
        originals: [
            "乾燥",
            "感想",
            "間奏",
            "肝臓",
        ]
    },
    {
        normalized: "かんそく",
        originals: [
            "観測",
        ]
    },
    {
        normalized: "かんたい",
        originals: [
            "艦隊",
            "眼帯",
        ]
    },
    {
        normalized: "かんたん",
        originals: [
            "感嘆",
            "かんたん",
            "寒暖",
            "元旦",
        ]
    },
    {
        normalized: "かんつめ",
        originals: [
            "缶詰め",
        ]
    },
    {
        normalized: "かんてい",
        originals: [
            "官邸",
            "鑑定",
        ]
    },
    {
        normalized: "かんてん",
        originals: [
            "寒天",
            "観点",
            "感電",
        ]
    },
    {
        normalized: "かんとう",
        originals: [
            "関東",
            "完投",
            "巻頭",
            "勘当",
            "感動",
        ]
    },
    {
        normalized: "かんとく",
        originals: [
            "監督",
        ]
    },
    {
        normalized: "かんない",
        originals: [
            "館内",
        ]
    },
    {
        normalized: "かんにん",
        originals: [
            "堪忍",
        ]
    },
    {
        normalized: "かんぬし",
        originals: [
            "神主",
        ]
    },
    {
        normalized: "かんねん",
        originals: [
            "元年",
        ]
    },
    {
        normalized: "かんのん",
        originals: [
            "観音",
        ]
    },
    {
        normalized: "かんはい",
        originals: [
            "完売",
            "乾杯",
            "完敗",
        ]
    },
    {
        normalized: "かんはく",
        originals: [
            "関白",
        ]
    },
    {
        normalized: "かんはち",
        originals: [
            "かんぱち",
        ]
    },
    {
        normalized: "かんはつ",
        originals: [
            "干ばつ",
        ]
    },
    {
        normalized: "かんはり",
        originals: [
            "頑張り",
        ]
    },
    {
        normalized: "かんはん",
        originals: [
            "看板",
        ]
    },
    {
        normalized: "かんふう",
        originals: [
            "完封",
            "寒風",
        ]
    },
    {
        normalized: "かんふく",
        originals: [
            "感服",
        ]
    },
    {
        normalized: "かんふつ",
        originals: [
            "乾物",
        ]
    },
    {
        normalized: "かんふん",
        originals: [
            "漢文",
        ]
    },
    {
        normalized: "かんへき",
        originals: [
            "完璧",
            "岩壁",
        ]
    },
    {
        normalized: "かんへん",
        originals: [
            "勘弁",
        ]
    },
    {
        normalized: "かんほう",
        originals: [
            "官房",
            "漢方",
            "願望",
        ]
    },
    {
        normalized: "かんほつ",
        originals: [
            "陥没",
        ]
    },
    {
        normalized: "かんほん",
        originals: [
            "元本",
        ]
    },
    {
        normalized: "かんまつ",
        originals: [
            "巻末",
        ]
    },
    {
        normalized: "かんめい",
        originals: [
            "感銘",
        ]
    },
    {
        normalized: "かんめん",
        originals: [
            "乾麺",
            "顔面",
        ]
    },
    {
        normalized: "かんゆう",
        originals: [
            "勧誘",
        ]
    },
    {
        normalized: "かんよう",
        originals: [
            "寛容",
        ]
    },
    {
        normalized: "かんらく",
        originals: [
            "陥落",
        ]
    },
    {
        normalized: "かんらん",
        originals: [
            "観覧",
        ]
    },
    {
        normalized: "かんりき",
        originals: [
            "眼力",
        ]
    },
    {
        normalized: "かんれい",
        originals: [
            "寒冷",
            "慣例",
        ]
    },
    {
        normalized: "かんれき",
        originals: [
            "還暦",
        ]
    },
    {
        normalized: "かんれん",
        originals: [
            "関連",
        ]
    },
    {
        normalized: "かんろく",
        originals: [
            "貫禄",
        ]
    },
    {
        normalized: "きおくれ",
        originals: [
            "気後れ",
        ]
    },
    {
        normalized: "きおすく",
        originals: [
            "キオスク",
        ]
    },
    {
        normalized: "きかまえ",
        originals: [
            "気構え",
        ]
    },
    {
        normalized: "ききあし",
        originals: [
            "利き足",
        ]
    },
    {
        normalized: "ききうて",
        originals: [
            "利き腕",
        ]
    },
    {
        normalized: "ききかた",
        originals: [
            "聞き方",
        ]
    },
    {
        normalized: "ききこみ",
        originals: [
            "聞き込み",
        ]
    },
    {
        normalized: "ききさけ",
        originals: [
            "利き酒",
        ]
    },
    {
        normalized: "ききすて",
        originals: [
            "聞き捨て",
        ]
    },
    {
        normalized: "ききとり",
        originals: [
            "聞き取り",
        ]
    },
    {
        normalized: "ききみみ",
        originals: [
            "聞き耳",
        ]
    },
    {
        normalized: "ききやく",
        originals: [
            "棄却",
        ]
    },
    {
        normalized: "ききよう",
        originals: [
            "帰京",
            "帰郷",
            "企業",
            "起業",
        ]
    },
    {
        normalized: "ききわけ",
        originals: [
            "聞き分け",
        ]
    },
    {
        normalized: "きくはり",
        originals: [
            "気配り",
        ]
    },
    {
        normalized: "きこころ",
        originals: [
            "気心",
        ]
    },
    {
        normalized: "きさきさ",
        originals: [
            "ぎざぎざ",
        ]
    },
    {
        normalized: "きしめん",
        originals: [
            "きしめん",
        ]
    },
    {
        normalized: "きしゆう",
        originals: [
            "奇襲",
        ]
    },
    {
        normalized: "きしゆつ",
        originals: [
            "記述",
            "技術",
        ]
    },
    {
        normalized: "きしゆん",
        originals: [
            "基準",
        ]
    },
    {
        normalized: "きしよう",
        originals: [
            "気性",
            "気象",
            "起床",
            "机上",
            "騎乗",
            "偽証",
        ]
    },
    {
        normalized: "きすあと",
        originals: [
            "傷跡",
        ]
    },
    {
        normalized: "きすくち",
        originals: [
            "傷口",
        ]
    },
    {
        normalized: "きせかえ",
        originals: [
            "着せ替え",
        ]
    },
    {
        normalized: "きたかせ",
        originals: [
            "北風",
        ]
    },
    {
        normalized: "きたかわ",
        originals: [
            "北側",
        ]
    },
    {
        normalized: "きたくち",
        originals: [
            "北口",
        ]
    },
    {
        normalized: "きたむき",
        originals: [
            "北向き",
        ]
    },
    {
        normalized: "きちゆう",
        originals: [
            "忌中",
        ]
    },
    {
        normalized: "きちよう",
        originals: [
            "機長",
            "記帳",
            "議長",
        ]
    },
    {
        normalized: "きつえん",
        originals: [
            "喫煙",
        ]
    },
    {
        normalized: "きつかい",
        originals: [
            "気遣い",
        ]
    },
    {
        normalized: "きつかけ",
        originals: [
            "切っ掛け",
        ]
    },
    {
        normalized: "きつかれ",
        originals: [
            "気疲れ",
        ]
    },
    {
        normalized: "きつしつ",
        originals: [
            "吉日",
        ]
    },
    {
        normalized: "きつすい",
        originals: [
            "生粋",
        ]
    },
    {
        normalized: "きつちん",
        originals: [
            "キッチン",
        ]
    },
    {
        normalized: "きつつき",
        originals: [
            "きつつき",
        ]
    },
    {
        normalized: "きつほう",
        originals: [
            "吉報",
        ]
    },
    {
        normalized: "きつもん",
        originals: [
            "詰問",
        ]
    },
    {
        normalized: "きにゆう",
        originals: [
            "記入",
        ]
    },
    {
        normalized: "きぬいと",
        originals: [
            "絹糸",
        ]
    },
    {
        normalized: "きぬこし",
        originals: [
            "絹ごし",
        ]
    },
    {
        normalized: "きのほり",
        originals: [
            "木登り",
        ]
    },
    {
        normalized: "きはらし",
        originals: [
            "気晴らし",
        ]
    },
    {
        normalized: "きふくれ",
        originals: [
            "着膨れ",
        ]
    },
    {
        normalized: "きふとり",
        originals: [
            "着太り",
        ]
    },
    {
        normalized: "きまくれ",
        originals: [
            "気まぐれ",
        ]
    },
    {
        normalized: "きまりて",
        originals: [
            "決まり手",
        ]
    },
    {
        normalized: "きみかよ",
        originals: [
            "君が代",
        ]
    },
    {
        normalized: "きみとり",
        originals: [
            "黄緑",
        ]
    },
    {
        normalized: "きむすめ",
        originals: [
            "生娘",
        ]
    },
    {
        normalized: "きやくて",
        originals: [
            "逆手",
        ]
    },
    {
        normalized: "きやくま",
        originals: [
            "客間",
        ]
    },
    {
        normalized: "きやすと",
        originals: [
            "キャスト",
        ]
    },
    {
        normalized: "きやすめ",
        originals: [
            "気休め",
        ]
    },
    {
        normalized: "きやたつ",
        originals: [
            "脚立",
        ]
    },
    {
        normalized: "きやつか",
        originals: [
            "却下",
        ]
    },
    {
        normalized: "きやつち",
        originals: [
            "キャッチ",
        ]
    },
    {
        normalized: "きやつふ",
        originals: [
            "キャップ",
            "ギャップ",
        ]
    },
    {
        normalized: "きやひあ",
        originals: [
            "キャビア",
        ]
    },
    {
        normalized: "きやへつ",
        originals: [
            "キャベツ",
        ]
    },
    {
        normalized: "きやりあ",
        originals: [
            "キャリア",
        ]
    },
    {
        normalized: "きやんく",
        originals: [
            "ギャング",
        ]
    },
    {
        normalized: "きやんふ",
        originals: [
            "キャンプ",
        ]
    },
    {
        normalized: "きゆうか",
        originals: [
            "休暇",
        ]
    },
    {
        normalized: "きゆうき",
        originals: [
            "球技",
        ]
    },
    {
        normalized: "きゆうこ",
        originals: [
            "救護",
        ]
    },
    {
        normalized: "きゆうし",
        originals: [
            "休止",
            "急死",
            "球児",
            "給仕",
        ]
    },
    {
        normalized: "きゆうす",
        originals: [
            "急須",
        ]
    },
    {
        normalized: "きゆうち",
        originals: [
            "窮地",
        ]
    },
    {
        normalized: "きゆうひ",
        originals: [
            "牛皮",
        ]
    },
    {
        normalized: "きゆうふ",
        originals: [
            "給付",
            "休部",
        ]
    },
    {
        normalized: "きゆうほ",
        originals: [
            "急募",
            "牛歩",
        ]
    },
    {
        normalized: "きゆうむ",
        originals: [
            "急務",
        ]
    },
    {
        normalized: "きゆうゆ",
        originals: [
            "給油",
        ]
    },
    {
        normalized: "きゆうよ",
        originals: [
            "給与",
        ]
    },
    {
        normalized: "きゆうり",
        originals: [
            "きゅうり",
        ]
    },
    {
        normalized: "きようい",
        originals: [
            "胸囲",
            "脅威",
            "驚異",
        ]
    },
    {
        normalized: "きようか",
        originals: [
            "強化",
            "教科",
        ]
    },
    {
        normalized: "きようき",
        originals: [
            "凶器",
            "狂喜",
            "狂気",
            "競技",
            "行儀",
        ]
    },
    {
        normalized: "きようこ",
        originals: [
            "凝固",
        ]
    },
    {
        normalized: "きようさ",
        originals: [
            "ギョウザ",
        ]
    },
    {
        normalized: "きようし",
        originals: [
            "教師",
            "凝視",
            "行事",
        ]
    },
    {
        normalized: "きようそ",
        originals: [
            "教祖",
        ]
    },
    {
        normalized: "きようた",
        originals: [
            "強打",
        ]
    },
    {
        normalized: "きようと",
        originals: [
            "強度",
            "郷土",
        ]
    },
    {
        normalized: "きようふ",
        originals: [
            "恐怖",
            "胸部",
        ]
    },
    {
        normalized: "きようほ",
        originals: [
            "競歩",
        ]
    },
    {
        normalized: "きようみ",
        originals: [
            "興味",
        ]
    },
    {
        normalized: "きようむ",
        originals: [
            "業務",
        ]
    },
    {
        normalized: "きようゆ",
        originals: [
            "教諭",
        ]
    },
    {
        normalized: "きよかい",
        originals: [
            "魚介",
        ]
    },
    {
        normalized: "きよかく",
        originals: [
            "漁獲",
        ]
    },
    {
        normalized: "きよかん",
        originals: [
            "巨漢",
        ]
    },
    {
        normalized: "きよくち",
        originals: [
            "局地",
            "極地",
        ]
    },
    {
        normalized: "きよくと",
        originals: [
            "極度",
        ]
    },
    {
        normalized: "きよくふ",
        originals: [
            "局部",
        ]
    },
    {
        normalized: "きよくん",
        originals: [
            "魚群",
        ]
    },
    {
        normalized: "きよけん",
        originals: [
            "虚言",
        ]
    },
    {
        normalized: "きよこう",
        originals: [
            "漁港",
        ]
    },
    {
        normalized: "きよしき",
        originals: [
            "挙式",
        ]
    },
    {
        normalized: "きよしん",
        originals: [
            "巨人",
        ]
    },
    {
        normalized: "きよすく",
        originals: [
            "キヨスク",
        ]
    },
    {
        normalized: "きよせい",
        originals: [
            "虚勢",
        ]
    },
    {
        normalized: "きよせつ",
        originals: [
            "拒絶",
        ]
    },
    {
        normalized: "きよせん",
        originals: [
            "漁船",
        ]
    },
    {
        normalized: "きよそう",
        originals: [
            "虚像",
        ]
    },
    {
        normalized: "きよそん",
        originals: [
            "漁村",
        ]
    },
    {
        normalized: "きよたい",
        originals: [
            "巨体",
        ]
    },
    {
        normalized: "きよたく",
        originals: [
            "魚拓",
        ]
    },
    {
        normalized: "きよてん",
        originals: [
            "拠点",
        ]
    },
    {
        normalized: "きよとう",
        originals: [
            "挙動",
        ]
    },
    {
        normalized: "きよにく",
        originals: [
            "魚肉",
        ]
    },
    {
        normalized: "きよねん",
        originals: [
            "去年",
        ]
    },
    {
        normalized: "きよへい",
        originals: [
            "挙兵",
        ]
    },
    {
        normalized: "きよほう",
        originals: [
            "巨峰",
        ]
    },
    {
        normalized: "きよほく",
        originals: [
            "巨木",
        ]
    },
    {
        normalized: "きよみん",
        originals: [
            "漁民",
        ]
    },
    {
        normalized: "きよよう",
        originals: [
            "許容",
        ]
    },
    {
        normalized: "きよらい",
        originals: [
            "魚雷",
        ]
    },
    {
        normalized: "きよらん",
        originals: [
            "魚卵",
        ]
    },
    {
        normalized: "きよるい",
        originals: [
            "魚類",
        ]
    },
    {
        normalized: "きよろめ",
        originals: [
            "ぎょろ目",
        ]
    },
    {
        normalized: "きらめき",
        originals: [
            "きらめき",
        ]
    },
    {
        normalized: "きりあけ",
        originals: [
            "切り上げ",
        ]
    },
    {
        normalized: "きりうり",
        originals: [
            "切り売り",
        ]
    },
    {
        normalized: "きりかえ",
        originals: [
            "切り替え",
        ]
    },
    {
        normalized: "きりかふ",
        originals: [
            "切り株",
        ]
    },
    {
        normalized: "きりきす",
        originals: [
            "切り傷",
        ]
    },
    {
        normalized: "きりくす",
        originals: [
            "切りくず",
        ]
    },
    {
        normalized: "きりくち",
        originals: [
            "切り口",
        ]
    },
    {
        normalized: "きりこみ",
        originals: [
            "切り込み",
        ]
    },
    {
        normalized: "きりさけ",
        originals: [
            "切り下げ",
        ]
    },
    {
        normalized: "きりさめ",
        originals: [
            "霧雨",
        ]
    },
    {
        normalized: "きりしあ",
        originals: [
            "ギリシア",
        ]
    },
    {
        normalized: "きりすて",
        originals: [
            "切り捨て",
        ]
    },
    {
        normalized: "きりすと",
        originals: [
            "キリスト",
        ]
    },
    {
        normalized: "きりとり",
        originals: [
            "切り取り",
        ]
    },
    {
        normalized: "きりぬき",
        originals: [
            "切り抜き",
        ]
    },
    {
        normalized: "きりはな",
        originals: [
            "切り花",
        ]
    },
    {
        normalized: "きりふき",
        originals: [
            "霧吹き",
        ]
    },
    {
        normalized: "きりふた",
        originals: [
            "切り札",
        ]
    },
    {
        normalized: "きりほし",
        originals: [
            "切り干し",
        ]
    },
    {
        normalized: "きりもち",
        originals: [
            "切りもち",
        ]
    },
    {
        normalized: "きりよう",
        originals: [
            "器量",
            "技量",
        ]
    },
    {
        normalized: "きりよく",
        originals: [
            "気力",
        ]
    },
    {
        normalized: "きれあし",
        originals: [
            "切れ味",
        ]
    },
    {
        normalized: "きれこみ",
        originals: [
            "切れ込み",
        ]
    },
    {
        normalized: "きれはし",
        originals: [
            "切れ端",
        ]
    },
    {
        normalized: "きれもの",
        originals: [
            "切れ者",
        ]
    },
    {
        normalized: "きれもん",
        originals: [
            "切れ者",
        ]
    },
    {
        normalized: "きろちん",
        originals: [
            "ギロチン",
        ]
    },
    {
        normalized: "きんいつ",
        originals: [
            "均一",
        ]
    },
    {
        normalized: "きんいろ",
        originals: [
            "金色",
            "銀色",
        ]
    },
    {
        normalized: "きんうん",
        originals: [
            "金運",
        ]
    },
    {
        normalized: "きんえん",
        originals: [
            "禁煙",
        ]
    },
    {
        normalized: "きんかい",
        originals: [
            "金塊",
        ]
    },
    {
        normalized: "きんかく",
        originals: [
            "金額",
        ]
    },
    {
        normalized: "きんかみ",
        originals: [
            "銀紙",
        ]
    },
    {
        normalized: "きんかん",
        originals: [
            "きんかん",
            "近眼",
        ]
    },
    {
        normalized: "きんきよ",
        originals: [
            "金魚",
        ]
    },
    {
        normalized: "きんきん",
        originals: [
            "金銀",
        ]
    },
    {
        normalized: "きんけん",
        originals: [
            "金券",
        ]
    },
    {
        normalized: "きんこう",
        originals: [
            "近郊",
            "銀行",
        ]
    },
    {
        normalized: "きんして",
        originals: [
            "禁じ手",
        ]
    },
    {
        normalized: "きんしゆ",
        originals: [
            "禁酒",
        ]
    },
    {
        normalized: "きんしよ",
        originals: [
            "近所",
        ]
    },
    {
        normalized: "きんしん",
        originals: [
            "謹慎",
        ]
    },
    {
        normalized: "きんせい",
        originals: [
            "金星",
            "銀製",
        ]
    },
    {
        normalized: "きんせん",
        originals: [
            "金銭",
        ]
    },
    {
        normalized: "きんそく",
        originals: [
            "勤続",
            "金属",
        ]
    },
    {
        normalized: "きんたい",
        originals: [
            "近代",
        ]
    },
    {
        normalized: "きんたん",
        originals: [
            "禁断",
        ]
    },
    {
        normalized: "きんつは",
        originals: [
            "きんつば",
        ]
    },
    {
        normalized: "きんとう",
        originals: [
            "均等",
        ]
    },
    {
        normalized: "きんとれ",
        originals: [
            "筋トレ",
        ]
    },
    {
        normalized: "きんなん",
        originals: [
            "ぎんなん",
        ]
    },
    {
        normalized: "きんにく",
        originals: [
            "筋肉",
        ]
    },
    {
        normalized: "きんねん",
        originals: [
            "近年",
        ]
    },
    {
        normalized: "きんはく",
        originals: [
            "緊迫",
            "金箔",
        ]
    },
    {
        normalized: "きんはつ",
        originals: [
            "金髪",
        ]
    },
    {
        normalized: "きんひん",
        originals: [
            "金品",
        ]
    },
    {
        normalized: "きんふん",
        originals: [
            "金粉",
        ]
    },
    {
        normalized: "きんへん",
        originals: [
            "勤勉",
            "近辺",
        ]
    },
    {
        normalized: "きんほし",
        originals: [
            "金星",
        ]
    },
    {
        normalized: "きんゆう",
        originals: [
            "金融",
        ]
    },
    {
        normalized: "きんよう",
        originals: [
            "金曜",
        ]
    },
    {
        normalized: "きんよく",
        originals: [
            "禁欲",
        ]
    },
    {
        normalized: "きんりん",
        originals: [
            "近隣",
        ]
    },
    {
        normalized: "きんろう",
        originals: [
            "勤労",
        ]
    },
    {
        normalized: "くいかけ",
        originals: [
            "食いかけ",
        ]
    },
    {
        normalized: "くいこみ",
        originals: [
            "食い込み",
        ]
    },
    {
        normalized: "くいため",
        originals: [
            "食いだめ",
        ]
    },
    {
        normalized: "くいつき",
        originals: [
            "食い付き",
        ]
    },
    {
        normalized: "くいにけ",
        originals: [
            "食い逃げ",
        ]
    },
    {
        normalized: "くいもの",
        originals: [
            "食い物",
        ]
    },
    {
        normalized: "くうかい",
        originals: [
            "空海",
        ]
    },
    {
        normalized: "くうかん",
        originals: [
            "空間",
        ]
    },
    {
        normalized: "くうくん",
        originals: [
            "空軍",
        ]
    },
    {
        normalized: "くうこう",
        originals: [
            "空港",
        ]
    },
    {
        normalized: "くうしつ",
        originals: [
            "空室",
        ]
    },
    {
        normalized: "くうしや",
        originals: [
            "空車",
        ]
    },
    {
        normalized: "くうすう",
        originals: [
            "偶数",
        ]
    },
    {
        normalized: "くうせき",
        originals: [
            "空席",
        ]
    },
    {
        normalized: "くうせん",
        originals: [
            "偶然",
        ]
    },
    {
        normalized: "くうそう",
        originals: [
            "空想",
        ]
    },
    {
        normalized: "くうたら",
        originals: [
            "ぐうたら",
        ]
    },
    {
        normalized: "くうとう",
        originals: [
            "空洞",
        ]
    },
    {
        normalized: "くうはく",
        originals: [
            "空白",
            "空爆",
        ]
    },
    {
        normalized: "くうはつ",
        originals: [
            "偶発",
        ]
    },
    {
        normalized: "くうふく",
        originals: [
            "空腹",
        ]
    },
    {
        normalized: "くうらん",
        originals: [
            "空欄",
        ]
    },
    {
        normalized: "くうろん",
        originals: [
            "空論",
        ]
    },
    {
        normalized: "くきつけ",
        originals: [
            "くぎ付け",
        ]
    },
    {
        normalized: "くきぬき",
        originals: [
            "くぎ抜き",
        ]
    },
    {
        normalized: "くきよう",
        originals: [
            "苦境",
        ]
    },
    {
        normalized: "くさかり",
        originals: [
            "草刈り",
        ]
    },
    {
        normalized: "くさとり",
        originals: [
            "草取り",
        ]
    },
    {
        normalized: "くさはな",
        originals: [
            "草花",
        ]
    },
    {
        normalized: "くさむら",
        originals: [
            "草むら",
        ]
    },
    {
        normalized: "くさもち",
        originals: [
            "草もち",
        ]
    },
    {
        normalized: "くさわけ",
        originals: [
            "草分け",
        ]
    },
    {
        normalized: "くしうん",
        originals: [
            "くじ運",
        ]
    },
    {
        normalized: "くしかつ",
        originals: [
            "くしカツ",
        ]
    },
    {
        normalized: "くしひき",
        originals: [
            "くじ引き",
        ]
    },
    {
        normalized: "くしやき",
        originals: [
            "くし焼き",
        ]
    },
    {
        normalized: "くしやく",
        originals: [
            "くじゃく",
        ]
    },
    {
        normalized: "くしやみ",
        originals: [
            "くしゃみ",
        ]
    },
    {
        normalized: "くしよう",
        originals: [
            "苦笑",
            "苦情",
        ]
    },
    {
        normalized: "くすいれ",
        originals: [
            "くず入れ",
        ]
    },
    {
        normalized: "くすかこ",
        originals: [
            "くずかご",
        ]
    },
    {
        normalized: "くすくり",
        originals: [
            "くすぐり",
        ]
    },
    {
        normalized: "くすたま",
        originals: [
            "くす玉",
        ]
    },
    {
        normalized: "くすてつ",
        originals: [
            "くず鉄",
        ]
    },
    {
        normalized: "くすのき",
        originals: [
            "くすのき",
        ]
    },
    {
        normalized: "くすもち",
        originals: [
            "くずもち",
        ]
    },
    {
        normalized: "くすりや",
        originals: [
            "薬屋",
        ]
    },
    {
        normalized: "くせもの",
        originals: [
            "くせ者",
        ]
    },
    {
        normalized: "くたひれ",
        originals: [
            "くたびれ",
        ]
    },
    {
        normalized: "くたもの",
        originals: [
            "果物",
        ]
    },
    {
        normalized: "くちかす",
        originals: [
            "口数",
        ]
    },
    {
        normalized: "くちきき",
        originals: [
            "口利き",
        ]
    },
    {
        normalized: "くちくせ",
        originals: [
            "口癖",
        ]
    },
    {
        normalized: "くちこみ",
        originals: [
            "口コミ",
        ]
    },
    {
        normalized: "くちさき",
        originals: [
            "口先",
        ]
    },
    {
        normalized: "くちそえ",
        originals: [
            "口添え",
        ]
    },
    {
        normalized: "くちたし",
        originals: [
            "口出し",
        ]
    },
    {
        normalized: "くちつけ",
        originals: [
            "口付け",
        ]
    },
    {
        normalized: "くちとめ",
        originals: [
            "口止め",
        ]
    },
    {
        normalized: "くちはし",
        originals: [
            "くちばし",
        ]
    },
    {
        normalized: "くちひけ",
        originals: [
            "口ひげ",
        ]
    },
    {
        normalized: "くちひる",
        originals: [
            "唇",
        ]
    },
    {
        normalized: "くちふえ",
        originals: [
            "口笛",
        ]
    },
    {
        normalized: "くちへた",
        originals: [
            "口下手",
        ]
    },
    {
        normalized: "くちへに",
        originals: [
            "口紅",
        ]
    },
    {
        normalized: "くちまね",
        originals: [
            "口まね",
        ]
    },
    {
        normalized: "くちもと",
        originals: [
            "口もと",
        ]
    },
    {
        normalized: "くちよう",
        originals: [
            "区長",
            "口調",
        ]
    },
    {
        normalized: "くちよく",
        originals: [
            "愚直",
        ]
    },
    {
        normalized: "くつおと",
        originals: [
            "靴音",
        ]
    },
    {
        normalized: "くつした",
        originals: [
            "靴下",
        ]
    },
    {
        normalized: "くつしん",
        originals: [
            "屈伸",
        ]
    },
    {
        normalized: "くつすれ",
        originals: [
            "靴擦れ",
        ]
    },
    {
        normalized: "くつそこ",
        originals: [
            "靴底",
        ]
    },
    {
        normalized: "くつひも",
        originals: [
            "靴ひも",
        ]
    },
    {
        normalized: "くつへら",
        originals: [
            "靴べら",
        ]
    },
    {
        normalized: "くつろき",
        originals: [
            "くつろぎ",
        ]
    },
    {
        normalized: "くにへつ",
        originals: [
            "国別",
        ]
    },
    {
        normalized: "くひきり",
        originals: [
            "首切り",
        ]
    },
    {
        normalized: "くひすし",
        originals: [
            "首筋",
        ]
    },
    {
        normalized: "くひつり",
        originals: [
            "首つり",
        ]
    },
    {
        normalized: "くみあい",
        originals: [
            "組合",
        ]
    },
    {
        normalized: "くみたて",
        originals: [
            "くみたて",
        ]
    },
    {
        normalized: "くみわけ",
        originals: [
            "組み分け",
        ]
    },
    {
        normalized: "くもゆき",
        originals: [
            "雲行き",
        ]
    },
    {
        normalized: "くらうん",
        originals: [
            "クラウン",
        ]
    },
    {
        normalized: "くらかり",
        originals: [
            "暗がり",
        ]
    },
    {
        normalized: "くらたん",
        originals: [
            "グラタン",
        ]
    },
    {
        normalized: "くらひあ",
        originals: [
            "グラビア",
        ]
    },
    {
        normalized: "くらやみ",
        originals: [
            "暗やみ",
        ]
    },
    {
        normalized: "くりあけ",
        originals: [
            "繰り上げ",
        ]
    },
    {
        normalized: "くりおね",
        originals: [
            "クリオネ",
        ]
    },
    {
        normalized: "くりこし",
        originals: [
            "繰り越し",
        ]
    },
    {
        normalized: "くりさけ",
        originals: [
            "繰り下げ",
        ]
    },
    {
        normalized: "くりつく",
        originals: [
            "クリック",
        ]
    },
    {
        normalized: "くりつふ",
        originals: [
            "クリップ",
            "グリップ",
        ]
    },
    {
        normalized: "くるしみ",
        originals: [
            "苦しみ",
        ]
    },
    {
        normalized: "くるてん",
        originals: [
            "グルテン",
        ]
    },
    {
        normalized: "くるふし",
        originals: [
            "くるぶし",
        ]
    },
    {
        normalized: "くれない",
        originals: [
            "紅",
        ]
    },
    {
        normalized: "くれよん",
        originals: [
            "クレヨン",
        ]
    },
    {
        normalized: "くろうと",
        originals: [
            "玄人",
        ]
    },
    {
        normalized: "くろおひ",
        originals: [
            "黒帯",
        ]
    },
    {
        normalized: "くろかみ",
        originals: [
            "黒髪",
        ]
    },
    {
        normalized: "くろこけ",
        originals: [
            "黒焦げ",
        ]
    },
    {
        normalized: "くろしお",
        originals: [
            "黒潮",
        ]
    },
    {
        normalized: "くろしろ",
        originals: [
            "黒白",
        ]
    },
    {
        normalized: "くろねこ",
        originals: [
            "黒猫",
        ]
    },
    {
        normalized: "くろふね",
        originals: [
            "黒船",
        ]
    },
    {
        normalized: "くろほし",
        originals: [
            "黒星",
        ]
    },
    {
        normalized: "くろまく",
        originals: [
            "黒幕",
        ]
    },
    {
        normalized: "くろまめ",
        originals: [
            "黒豆",
        ]
    },
    {
        normalized: "くわたて",
        originals: [
            "企て",
        ]
    },
    {
        normalized: "くんかん",
        originals: [
            "軍艦",
        ]
    },
    {
        normalized: "くんしゆ",
        originals: [
            "君主",
        ]
    },
    {
        normalized: "くんしん",
        originals: [
            "軍人",
        ]
    },
    {
        normalized: "くんせい",
        originals: [
            "薫製",
        ]
    },
    {
        normalized: "くんたい",
        originals: [
            "軍隊",
        ]
    },
    {
        normalized: "くんたん",
        originals: [
            "軍団",
        ]
    },
    {
        normalized: "くんはい",
        originals: [
            "軍配",
        ]
    },
    {
        normalized: "くんふく",
        originals: [
            "軍服",
        ]
    },
    {
        normalized: "くんよみ",
        originals: [
            "訓読み",
        ]
    },
    {
        normalized: "くんれん",
        originals: [
            "訓練",
        ]
    },
    {
        normalized: "けいえい",
        originals: [
            "経営",
        ]
    },
    {
        normalized: "けいえん",
        originals: [
            "敬遠",
        ]
    },
    {
        normalized: "けいかい",
        originals: [
            "警戒",
        ]
    },
    {
        normalized: "けいかく",
        originals: [
            "計画",
        ]
    },
    {
        normalized: "けいかん",
        originals: [
            "景観",
            "警官",
        ]
    },
    {
        normalized: "けいけき",
        originals: [
            "迎撃",
        ]
    },
    {
        normalized: "けいけん",
        originals: [
            "経験",
            "軽減",
        ]
    },
    {
        normalized: "けいこう",
        originals: [
            "傾向",
            "蛍光",
        ]
    },
    {
        normalized: "けいこく",
        originals: [
            "渓谷",
            "警告",
        ]
    },
    {
        normalized: "けいこと",
        originals: [
            "芸事",
        ]
    },
    {
        normalized: "けいさい",
        originals: [
            "掲載",
            "経済",
        ]
    },
    {
        normalized: "けいさつ",
        originals: [
            "警察",
        ]
    },
    {
        normalized: "けいさん",
        originals: [
            "計算",
        ]
    },
    {
        normalized: "けいしき",
        originals: [
            "型式",
            "形式",
        ]
    },
    {
        normalized: "けいしや",
        originals: [
            "傾斜",
            "鶏舎",
            "芸者",
            "迎車",
        ]
    },
    {
        normalized: "けいせい",
        originals: [
            "形勢",
            "形成",
        ]
    },
    {
        normalized: "けいせき",
        originals: [
            "形跡",
        ]
    },
    {
        normalized: "けいせん",
        originals: [
            "罫線",
        ]
    },
    {
        normalized: "けいそう",
        originals: [
            "軽装",
        ]
    },
    {
        normalized: "けいそく",
        originals: [
            "計測",
            "継続",
        ]
    },
    {
        normalized: "けいそつ",
        originals: [
            "軽率",
        ]
    },
    {
        normalized: "けいたい",
        originals: [
            "形態",
            "携帯",
            "境内",
        ]
    },
    {
        normalized: "けいてき",
        originals: [
            "警笛",
        ]
    },
    {
        normalized: "けいとう",
        originals: [
            "傾倒",
            "系統",
        ]
    },
    {
        normalized: "けいにく",
        originals: [
            "鶏肉",
            "鯨肉",
        ]
    },
    {
        normalized: "けいにん",
        originals: [
            "芸人",
        ]
    },
    {
        normalized: "けいのう",
        originals: [
            "芸能",
        ]
    },
    {
        normalized: "けいはく",
        originals: [
            "軽薄",
        ]
    },
    {
        normalized: "けいはつ",
        originals: [
            "啓発",
            "刑罰",
        ]
    },
    {
        normalized: "けいはん",
        originals: [
            "京阪",
        ]
    },
    {
        normalized: "けいひん",
        originals: [
            "景品",
        ]
    },
    {
        normalized: "けいふう",
        originals: [
            "芸風",
        ]
    },
    {
        normalized: "けいへつ",
        originals: [
            "軽蔑",
        ]
    },
    {
        normalized: "けいほう",
        originals: [
            "刑法",
            "警報",
        ]
    },
    {
        normalized: "けいめい",
        originals: [
            "芸名",
        ]
    },
    {
        normalized: "けいやく",
        originals: [
            "契約",
        ]
    },
    {
        normalized: "けいらん",
        originals: [
            "鶏卵",
        ]
    },
    {
        normalized: "けいりん",
        originals: [
            "競輪",
        ]
    },
    {
        normalized: "けいれい",
        originals: [
            "敬礼",
        ]
    },
    {
        normalized: "けいれき",
        originals: [
            "経歴",
            "芸歴",
        ]
    },
    {
        normalized: "けいれつ",
        originals: [
            "系列",
        ]
    },
    {
        normalized: "けいれん",
        originals: [
            "けいれん",
        ]
    },
    {
        normalized: "けいろう",
        originals: [
            "敬老",
        ]
    },
    {
        normalized: "けきけん",
        originals: [
            "激減",
        ]
    },
    {
        normalized: "けきしん",
        originals: [
            "激震",
        ]
    },
    {
        normalized: "けきせん",
        originals: [
            "激戦",
        ]
    },
    {
        normalized: "けきたい",
        originals: [
            "撃退",
        ]
    },
    {
        normalized: "けきたん",
        originals: [
            "劇団",
        ]
    },
    {
        normalized: "けきちん",
        originals: [
            "撃沈",
        ]
    },
    {
        normalized: "けきつい",
        originals: [
            "撃墜",
        ]
    },
    {
        normalized: "けきつう",
        originals: [
            "激痛",
        ]
    },
    {
        normalized: "けきとう",
        originals: [
            "激闘",
            "激動",
        ]
    },
    {
        normalized: "けきとつ",
        originals: [
            "激突",
        ]
    },
    {
        normalized: "けきはく",
        originals: [
            "激白",
        ]
    },
    {
        normalized: "けきへん",
        originals: [
            "劇変",
            "激変",
        ]
    },
    {
        normalized: "けきやす",
        originals: [
            "激安",
        ]
    },
    {
        normalized: "けきらい",
        originals: [
            "毛嫌い",
        ]
    },
    {
        normalized: "けきれい",
        originals: [
            "激励",
        ]
    },
    {
        normalized: "けきろん",
        originals: [
            "激論",
        ]
    },
    {
        normalized: "けしいん",
        originals: [
            "消印",
        ]
    },
    {
        normalized: "けしゆく",
        originals: [
            "下宿",
        ]
    },
    {
        normalized: "けしゆん",
        originals: [
            "下旬",
        ]
    },
    {
        normalized: "けしよう",
        originals: [
            "化粧",
        ]
    },
    {
        normalized: "けたもの",
        originals: [
            "けだもの",
        ]
    },
    {
        normalized: "けつあつ",
        originals: [
            "血圧",
        ]
    },
    {
        normalized: "けついん",
        originals: [
            "欠員",
        ]
    },
    {
        normalized: "けつえき",
        originals: [
            "血液",
        ]
    },
    {
        normalized: "けつえん",
        originals: [
            "血縁",
        ]
    },
    {
        normalized: "けつかい",
        originals: [
            "決壊",
            "結界",
        ]
    },
    {
        normalized: "けつかく",
        originals: [
            "結核",
            "月額",
        ]
    },
    {
        normalized: "けつかん",
        originals: [
            "欠陥",
            "血管",
            "月刊",
            "月間",
        ]
    },
    {
        normalized: "けつきん",
        originals: [
            "欠勤",
        ]
    },
    {
        normalized: "けつけい",
        originals: [
            "月経",
        ]
    },
    {
        normalized: "けつこう",
        originals: [
            "欠航",
            "決行",
            "結構",
            "血行",
            "月光",
        ]
    },
    {
        normalized: "けつこん",
        originals: [
            "結婚",
            "血痕",
        ]
    },
    {
        normalized: "けつさい",
        originals: [
            "決済",
            "決裁",
        ]
    },
    {
        normalized: "けつさく",
        originals: [
            "傑作",
        ]
    },
    {
        normalized: "けつさん",
        originals: [
            "決算",
        ]
    },
    {
        normalized: "けつしや",
        originals: [
            "月謝",
        ]
    },
    {
        normalized: "けつしん",
        originals: [
            "決心",
        ]
    },
    {
        normalized: "けつせい",
        originals: [
            "結成",
        ]
    },
    {
        normalized: "けつせき",
        originals: [
            "欠席",
        ]
    },
    {
        normalized: "けつせん",
        originals: [
            "決戦",
        ]
    },
    {
        normalized: "けつそう",
        originals: [
            "血相",
        ]
    },
    {
        normalized: "けつそく",
        originals: [
            "結束",
            "血族",
        ]
    },
    {
        normalized: "けつそん",
        originals: [
            "欠損",
        ]
    },
    {
        normalized: "けつたく",
        originals: [
            "結託",
        ]
    },
    {
        normalized: "けつたん",
        originals: [
            "決断",
        ]
    },
    {
        normalized: "けつてい",
        originals: [
            "決定",
        ]
    },
    {
        normalized: "けつてん",
        originals: [
            "欠点",
        ]
    },
    {
        normalized: "けつとう",
        originals: [
            "決闘",
            "血統",
        ]
    },
    {
        normalized: "けつはく",
        originals: [
            "潔白",
        ]
    },
    {
        normalized: "けつはん",
        originals: [
            "欠番",
        ]
    },
    {
        normalized: "けつへき",
        originals: [
            "潔癖",
        ]
    },
    {
        normalized: "けつへつ",
        originals: [
            "決別",
        ]
    },
    {
        normalized: "けつへん",
        originals: [
            "血便",
        ]
    },
    {
        normalized: "けつほう",
        originals: [
            "月報",
        ]
    },
    {
        normalized: "けつまつ",
        originals: [
            "結末",
            "月末",
        ]
    },
    {
        normalized: "けつめん",
        originals: [
            "月面",
        ]
    },
    {
        normalized: "けつよう",
        originals: [
            "月曜",
        ]
    },
    {
        normalized: "けつらく",
        originals: [
            "欠落",
        ]
    },
    {
        normalized: "けつれい",
        originals: [
            "月齢",
        ]
    },
    {
        normalized: "けつれつ",
        originals: [
            "決裂",
        ]
    },
    {
        normalized: "けつろん",
        originals: [
            "結論",
        ]
    },
    {
        normalized: "けねてい",
        originals: [
            "ケネディ",
        ]
    },
    {
        normalized: "けひよう",
        originals: [
            "仮病",
        ]
    },
    {
        normalized: "けれんて",
        originals: [
            "ゲレンデ",
        ]
    },
    {
        normalized: "けんあく",
        originals: [
            "険悪",
        ]
    },
    {
        normalized: "けんあん",
        originals: [
            "原案",
        ]
    },
    {
        normalized: "けんいん",
        originals: [
            "牽引",
            "原因",
        ]
    },
    {
        normalized: "けんえい",
        originals: [
            "県営",
            "幻影",
        ]
    },
    {
        normalized: "けんえき",
        originals: [
            "検疫",
            "原液",
            "減益",
            "現役",
        ]
    },
    {
        normalized: "けんえつ",
        originals: [
            "検閲",
        ]
    },
    {
        normalized: "けんおん",
        originals: [
            "検温",
        ]
    },
    {
        normalized: "けんかい",
        originals: [
            "見解",
            "圏外",
            "限界",
        ]
    },
    {
        normalized: "けんかく",
        originals: [
            "見学",
            "幻覚",
            "減額",
        ]
    },
    {
        normalized: "けんかん",
        originals: [
            "玄関",
        ]
    },
    {
        normalized: "けんきよ",
        originals: [
            "検挙",
        ]
    },
    {
        normalized: "けんきん",
        originals: [
            "献金",
            "厳禁",
            "現金",
        ]
    },
    {
        normalized: "けんけい",
        originals: [
            "県警",
            "原型",
            "原形",
            "減刑",
        ]
    },
    {
        normalized: "けんけつ",
        originals: [
            "献血",
        ]
    },
    {
        normalized: "けんけん",
        originals: [
            "権限",
        ]
    },
    {
        normalized: "けんこう",
        originals: [
            "健康",
            "剣豪",
            "原稿",
            "現行",
            "元号",
        ]
    },
    {
        normalized: "けんこく",
        originals: [
            "建国",
            "原告",
        ]
    },
    {
        normalized: "けんこつ",
        originals: [
            "げんこつ",
        ]
    },
    {
        normalized: "けんさい",
        originals: [
            "健在",
            "建材",
            "現在",
        ]
    },
    {
        normalized: "けんさく",
        originals: [
            "検索",
            "原作",
        ]
    },
    {
        normalized: "けんさつ",
        originals: [
            "検察",
        ]
    },
    {
        normalized: "けんさん",
        originals: [
            "剣山",
            "原産",
        ]
    },
    {
        normalized: "けんしき",
        originals: [
            "見識",
        ]
    },
    {
        normalized: "けんしつ",
        originals: [
            "堅実",
            "現実",
        ]
    },
    {
        normalized: "けんしや",
        originals: [
            "賢者",
        ]
    },
    {
        normalized: "けんしゆ",
        originals: [
            "厳守",
        ]
    },
    {
        normalized: "けんしん",
        originals: [
            "検診",
            "検針",
            "献身",
        ]
    },
    {
        normalized: "けんすい",
        originals: [
            "懸垂",
        ]
    },
    {
        normalized: "けんすう",
        originals: [
            "件数",
        ]
    },
    {
        normalized: "けんすん",
        originals: [
            "原寸",
        ]
    },
    {
        normalized: "けんせい",
        originals: [
            "減税",
        ]
    },
    {
        normalized: "けんせき",
        originals: [
            "原石",
        ]
    },
    {
        normalized: "けんせつ",
        originals: [
            "建設",
        ]
    },
    {
        normalized: "けんせん",
        originals: [
            "厳選",
            "源泉",
        ]
    },
    {
        normalized: "けんそう",
        originals: [
            "建造",
            "幻想",
            "現像",
        ]
    },
    {
        normalized: "けんそく",
        originals: [
            "原則",
            "減速",
        ]
    },
    {
        normalized: "けんそん",
        originals: [
            "謙遜",
            "現存",
        ]
    },
    {
        normalized: "けんたい",
        originals: [
            "減退",
            "現代",
        ]
    },
    {
        normalized: "けんちく",
        originals: [
            "建築",
        ]
    },
    {
        normalized: "けんつき",
        originals: [
            "原付き",
        ]
    },
    {
        normalized: "けんてい",
        originals: [
            "検定",
            "限定",
        ]
    },
    {
        normalized: "けんてん",
        originals: [
            "原点",
            "減点",
        ]
    },
    {
        normalized: "けんとう",
        originals: [
            "健闘",
            "検討",
            "見当",
            "剣道",
            "県道",
            "言動",
        ]
    },
    {
        normalized: "けんない",
        originals: [
            "圏内",
        ]
    },
    {
        normalized: "けんにん",
        originals: [
            "兼任",
        ]
    },
    {
        normalized: "けんはく",
        originals: [
            "原爆",
        ]
    },
    {
        normalized: "けんはつ",
        originals: [
            "厳罰",
            "原発",
        ]
    },
    {
        normalized: "けんひん",
        originals: [
            "現品",
        ]
    },
    {
        normalized: "けんふつ",
        originals: [
            "見物",
            "現物",
        ]
    },
    {
        normalized: "けんふん",
        originals: [
            "見分",
            "見聞",
            "原文",
        ]
    },
    {
        normalized: "けんへん",
        originals: [
            "検便",
        ]
    },
    {
        normalized: "けんほう",
        originals: [
            "憲法",
        ]
    },
    {
        normalized: "けんほん",
        originals: [
            "原本",
        ]
    },
    {
        normalized: "けんまい",
        originals: [
            "玄米",
        ]
    },
    {
        normalized: "けんみん",
        originals: [
            "県民",
        ]
    },
    {
        normalized: "けんめい",
        originals: [
            "賢明",
        ]
    },
    {
        normalized: "けんめつ",
        originals: [
            "幻滅",
        ]
    },
    {
        normalized: "けんもん",
        originals: [
            "見聞",
            "検問",
        ]
    },
    {
        normalized: "けんやく",
        originals: [
            "倹約",
        ]
    },
    {
        normalized: "けんよう",
        originals: [
            "兼用",
        ]
    },
    {
        normalized: "けんりつ",
        originals: [
            "県立",
        ]
    },
    {
        normalized: "けんろん",
        originals: [
            "言論",
        ]
    },
    {
        normalized: "こいくち",
        originals: [
            "濃い口",
        ]
    },
    {
        normalized: "こいちや",
        originals: [
            "濃い茶",
        ]
    },
    {
        normalized: "こいなか",
        originals: [
            "恋仲",
        ]
    },
    {
        normalized: "こいひと",
        originals: [
            "恋人",
        ]
    },
    {
        normalized: "こいふみ",
        originals: [
            "恋文",
        ]
    },
    {
        normalized: "こうあつ",
        originals: [
            "高圧",
        ]
    },
    {
        normalized: "こうあん",
        originals: [
            "考案",
        ]
    },
    {
        normalized: "こういき",
        originals: [
            "広域",
        ]
    },
    {
        normalized: "こううん",
        originals: [
            "好運",
            "幸運",
        ]
    },
    {
        normalized: "こうえい",
        originals: [
            "光栄",
            "公営",
        ]
    },
    {
        normalized: "こうえん",
        originals: [
            "公園",
            "好演",
            "後援",
            "講演",
        ]
    },
    {
        normalized: "こうおん",
        originals: [
            "高温",
            "高音",
        ]
    },
    {
        normalized: "こうかい",
        originals: [
            "公開",
            "後悔",
            "航海",
            "公害",
            "校外",
            "郊外",
            "号外",
        ]
    },
    {
        normalized: "こうかく",
        originals: [
            "甲殻",
            "降格",
            "高額",
            "合格",
        ]
    },
    {
        normalized: "こうかん",
        originals: [
            "交換",
            "好感",
        ]
    },
    {
        normalized: "こうきよ",
        originals: [
            "皇居",
        ]
    },
    {
        normalized: "こうきん",
        originals: [
            "公金",
            "抗菌",
        ]
    },
    {
        normalized: "こうくう",
        originals: [
            "航空",
            "厚遇",
        ]
    },
    {
        normalized: "こうけい",
        originals: [
            "光景",
            "後継",
            "工芸",
            "合計",
        ]
    },
    {
        normalized: "こうけき",
        originals: [
            "攻撃",
        ]
    },
    {
        normalized: "こうけつ",
        originals: [
            "豪傑",
        ]
    },
    {
        normalized: "こうけん",
        originals: [
            "貢献",
            "公言",
            "高原",
        ]
    },
    {
        normalized: "こうこう",
        originals: [
            "口腔",
            "孝行",
            "後攻",
            "高校",
            "皇后",
        ]
    },
    {
        normalized: "こうこく",
        originals: [
            "広告",
        ]
    },
    {
        normalized: "こうこん",
        originals: [
            "合コン",
        ]
    },
    {
        normalized: "こうさい",
        originals: [
            "交際",
        ]
    },
    {
        normalized: "こうさく",
        originals: [
            "工作",
        ]
    },
    {
        normalized: "こうさつ",
        originals: [
            "絞殺",
            "考察",
        ]
    },
    {
        normalized: "こうさん",
        originals: [
            "降参",
        ]
    },
    {
        normalized: "こうしき",
        originals: [
            "公式",
            "硬式",
        ]
    },
    {
        normalized: "こうしつ",
        originals: [
            "皇室",
            "硬質",
            "口実",
        ]
    },
    {
        normalized: "こうしや",
        originals: [
            "後者",
            "校舎",
        ]
    },
    {
        normalized: "こうしゆ",
        originals: [
            "攻守",
        ]
    },
    {
        normalized: "こうしよ",
        originals: [
            "高所",
            "控除",
        ]
    },
    {
        normalized: "こうしん",
        originals: [
            "交信",
            "口唇",
            "更新",
            "行進",
        ]
    },
    {
        normalized: "こうすい",
        originals: [
            "香水",
            "硬水",
            "降水",
            "洪水",
        ]
    },
    {
        normalized: "こうせい",
        originals: [
            "公正",
            "更生",
            "後世",
            "攻勢",
            "更正",
            "構成",
            "合成",
        ]
    },
    {
        normalized: "こうせき",
        originals: [
            "功績",
            "鉱石",
        ]
    },
    {
        normalized: "こうせつ",
        originals: [
            "降雪",
            "豪雪",
        ]
    },
    {
        normalized: "こうせん",
        originals: [
            "光線",
            "高専",
        ]
    },
    {
        normalized: "こうそう",
        originals: [
            "抗争",
            "構想",
            "高僧",
            "高層",
            "構造",
        ]
    },
    {
        normalized: "こうそく",
        originals: [
            "光速",
            "拘束",
            "校則",
            "高速",
            "後続",
            "皇族",
        ]
    },
    {
        normalized: "こうそつ",
        originals: [
            "高卒",
        ]
    },
    {
        normalized: "こうたい",
        originals: [
            "交代",
            "交替",
            "後退",
            "抗体",
        ]
    },
    {
        normalized: "こうたく",
        originals: [
            "光沢",
        ]
    },
    {
        normalized: "こうたつ",
        originals: [
            "強奪",
        ]
    },
    {
        normalized: "こうちく",
        originals: [
            "構築",
        ]
    },
    {
        normalized: "こうちや",
        originals: [
            "紅茶",
        ]
    },
    {
        normalized: "こうちん",
        originals: [
            "工賃",
        ]
    },
    {
        normalized: "こうつう",
        originals: [
            "交通",
        ]
    },
    {
        normalized: "こうてい",
        originals: [
            "工程",
            "校庭",
            "皇帝",
            "肯定",
            "行程",
            "高低",
            "豪邸",
        ]
    },
    {
        normalized: "こうてつ",
        originals: [
            "更迭",
            "鋼鉄",
        ]
    },
    {
        normalized: "こうてん",
        originals: [
            "好転",
            "荒天",
            "香典",
        ]
    },
    {
        normalized: "こうとう",
        originals: [
            "口答",
            "口頭",
            "高騰",
            "行動",
            "講堂",
            "強盗",
            "合同",
        ]
    },
    {
        normalized: "こうとく",
        originals: [
            "講読",
            "購読",
        ]
    },
    {
        normalized: "こうない",
        originals: [
            "口内",
            "校内",
            "構内",
            "港内",
        ]
    },
    {
        normalized: "こうにん",
        originals: [
            "公認",
            "後任",
        ]
    },
    {
        normalized: "こうねつ",
        originals: [
            "光熱",
            "高熱",
        ]
    },
    {
        normalized: "こうのう",
        originals: [
            "効能",
        ]
    },
    {
        normalized: "こうはい",
        originals: [
            "交配",
            "後輩",
            "購買",
        ]
    },
    {
        normalized: "こうはく",
        originals: [
            "紅白",
        ]
    },
    {
        normalized: "こうはつ",
        originals: [
            "後発",
        ]
    },
    {
        normalized: "こうはん",
        originals: [
            "後半",
            "交番",
            "降板",
        ]
    },
    {
        normalized: "こうふう",
        originals: [
            "校風",
        ]
    },
    {
        normalized: "こうふく",
        originals: [
            "幸福",
            "降伏",
            "降服",
        ]
    },
    {
        normalized: "こうふつ",
        originals: [
            "好物",
            "鉱物",
        ]
    },
    {
        normalized: "こうふん",
        originals: [
            "興奮",
        ]
    },
    {
        normalized: "こうへい",
        originals: [
            "公平",
        ]
    },
    {
        normalized: "こうへん",
        originals: [
            "後編",
        ]
    },
    {
        normalized: "こうほう",
        originals: [
            "工法",
            "広報",
            "後方",
            "工房",
            "攻防",
            "合法",
        ]
    },
    {
        normalized: "こうまん",
        originals: [
            "高慢",
        ]
    },
    {
        normalized: "こうもく",
        originals: [
            "綱目",
            "項目",
        ]
    },
    {
        normalized: "こうもり",
        originals: [
            "こうもり",
        ]
    },
    {
        normalized: "こうもん",
        originals: [
            "校門",
            "肛門",
        ]
    },
    {
        normalized: "こうやく",
        originals: [
            "公約",
        ]
    },
    {
        normalized: "こうゆう",
        originals: [
            "交友",
            "交遊",
        ]
    },
    {
        normalized: "こうよう",
        originals: [
            "紅葉",
            "公用",
            "効用",
            "高揚",
        ]
    },
    {
        normalized: "こうよく",
        originals: [
            "強欲",
        ]
    },
    {
        normalized: "こうらく",
        originals: [
            "行楽",
        ]
    },
    {
        normalized: "こうりつ",
        originals: [
            "公立",
            "効率",
        ]
    },
    {
        normalized: "こうりよ",
        originals: [
            "考慮",
        ]
    },
    {
        normalized: "こうりん",
        originals: [
            "後輪",
            "降臨",
        ]
    },
    {
        normalized: "こうれい",
        originals: [
            "恒例",
            "高齢",
            "号令",
        ]
    },
    {
        normalized: "こうろう",
        originals: [
            "功労",
        ]
    },
    {
        normalized: "こうろん",
        originals: [
            "口論",
        ]
    },
    {
        normalized: "こうわん",
        originals: [
            "剛腕",
        ]
    },
    {
        normalized: "こえため",
        originals: [
            "肥だめ",
        ]
    },
    {
        normalized: "こおろき",
        originals: [
            "こおろぎ",
        ]
    },
    {
        normalized: "こからし",
        originals: [
            "木枯らし",
        ]
    },
    {
        normalized: "こきさみ",
        originals: [
            "小刻み",
        ]
    },
    {
        normalized: "こきつて",
        originals: [
            "小切手",
        ]
    },
    {
        normalized: "こきふり",
        originals: [
            "ごきぶり",
        ]
    },
    {
        normalized: "こきやく",
        originals: [
            "顧客",
        ]
    },
    {
        normalized: "こきゆう",
        originals: [
            "呼吸",
        ]
    },
    {
        normalized: "こきよう",
        originals: [
            "故郷",
        ]
    },
    {
        normalized: "こくあく",
        originals: [
            "極悪",
        ]
    },
    {
        normalized: "こくえい",
        originals: [
            "国営",
        ]
    },
    {
        normalized: "こくえき",
        originals: [
            "国益",
        ]
    },
    {
        normalized: "こくおう",
        originals: [
            "国王",
        ]
    },
    {
        normalized: "こくかい",
        originals: [
            "国外",
        ]
    },
    {
        normalized: "こくさい",
        originals: [
            "国際",
        ]
    },
    {
        normalized: "こくさく",
        originals: [
            "国策",
        ]
    },
    {
        normalized: "こくさん",
        originals: [
            "国産",
        ]
    },
    {
        normalized: "こくしよ",
        originals: [
            "酷暑",
        ]
    },
    {
        normalized: "こくしん",
        originals: [
            "黒人",
        ]
    },
    {
        normalized: "こくせい",
        originals: [
            "国政",
            "国税",
        ]
    },
    {
        normalized: "こくせき",
        originals: [
            "国籍",
        ]
    },
    {
        normalized: "こくそう",
        originals: [
            "国葬",
        ]
    },
    {
        normalized: "こくてつ",
        originals: [
            "国鉄",
        ]
    },
    {
        normalized: "こくとう",
        originals: [
            "黒糖",
            "国道",
            "極道",
        ]
    },
    {
        normalized: "こくない",
        originals: [
            "国内",
        ]
    },
    {
        normalized: "こくなん",
        originals: [
            "国難",
        ]
    },
    {
        normalized: "こくはく",
        originals: [
            "告白",
        ]
    },
    {
        normalized: "こくはつ",
        originals: [
            "告発",
        ]
    },
    {
        normalized: "こくはん",
        originals: [
            "黒板",
        ]
    },
    {
        normalized: "こくひん",
        originals: [
            "国賓",
            "極貧",
        ]
    },
    {
        normalized: "こくふく",
        originals: [
            "克服",
        ]
    },
    {
        normalized: "こくへつ",
        originals: [
            "告別",
        ]
    },
    {
        normalized: "こくほう",
        originals: [
            "国宝",
            "国防",
        ]
    },
    {
        normalized: "こくほそ",
        originals: [
            "極細",
        ]
    },
    {
        normalized: "こくみん",
        originals: [
            "国民",
        ]
    },
    {
        normalized: "こくめい",
        originals: [
            "国名",
        ]
    },
    {
        normalized: "こくもつ",
        originals: [
            "穀物",
        ]
    },
    {
        normalized: "こくらく",
        originals: [
            "極楽",
        ]
    },
    {
        normalized: "こくりつ",
        originals: [
            "国立",
        ]
    },
    {
        normalized: "こくるい",
        originals: [
            "穀類",
        ]
    },
    {
        normalized: "こくれん",
        originals: [
            "国連",
        ]
    },
    {
        normalized: "こけつき",
        originals: [
            "焦げ付き",
        ]
    },
    {
        normalized: "こころえ",
        originals: [
            "心得",
        ]
    },
    {
        normalized: "こころみ",
        originals: [
            "試み",
        ]
    },
    {
        normalized: "こさかな",
        originals: [
            "小魚",
        ]
    },
    {
        normalized: "こしあん",
        originals: [
            "こしあん",
        ]
    },
    {
        normalized: "こしかけ",
        originals: [
            "腰掛け",
        ]
    },
    {
        normalized: "こしつく",
        originals: [
            "ゴシック",
        ]
    },
    {
        normalized: "こしつけ",
        originals: [
            "こじつけ",
        ]
    },
    {
        normalized: "こしつふ",
        originals: [
            "ゴシップ",
        ]
    },
    {
        normalized: "こしぬけ",
        originals: [
            "腰抜け",
        ]
    },
    {
        normalized: "こしよう",
        originals: [
            "呼称",
            "故障",
            "こしょう",
            "胡椒",
            "古城",
        ]
    },
    {
        normalized: "こすもす",
        originals: [
            "コスモス",
        ]
    },
    {
        normalized: "こそたて",
        originals: [
            "子育て",
        ]
    },
    {
        normalized: "こたから",
        originals: [
            "子宝",
        ]
    },
    {
        normalized: "こたこた",
        originals: [
            "ごたごた",
        ]
    },
    {
        normalized: "こたわり",
        originals: [
            "こだわり",
        ]
    },
    {
        normalized: "こちよう",
        originals: [
            "誇張",
        ]
    },
    {
        normalized: "こつかい",
        originals: [
            "国会",
            "小遣い",
        ]
    },
    {
        normalized: "こつかく",
        originals: [
            "骨格",
        ]
    },
    {
        normalized: "こつかん",
        originals: [
            "極寒",
        ]
    },
    {
        normalized: "こつくり",
        originals: [
            "こっくり",
            "子作り",
        ]
    },
    {
        normalized: "こつけい",
        originals: [
            "滑稽",
        ]
    },
    {
        normalized: "こつこう",
        originals: [
            "国交",
        ]
    },
    {
        normalized: "こつすい",
        originals: [
            "骨髄",
        ]
    },
    {
        normalized: "こつせつ",
        originals: [
            "骨折",
        ]
    },
    {
        normalized: "こつつほ",
        originals: [
            "骨つぼ",
        ]
    },
    {
        normalized: "こつつみ",
        originals: [
            "小包",
        ]
    },
    {
        normalized: "こつとん",
        originals: [
            "コットン",
        ]
    },
    {
        normalized: "こつにく",
        originals: [
            "骨肉",
        ]
    },
    {
        normalized: "こつはん",
        originals: [
            "骨盤",
        ]
    },
    {
        normalized: "ことから",
        originals: [
            "事柄",
        ]
    },
    {
        normalized: "ことたま",
        originals: [
            "言霊",
        ]
    },
    {
        normalized: "ことなり",
        originals: [
            "異なり",
        ]
    },
    {
        normalized: "ことふき",
        originals: [
            "寿",
        ]
    },
    {
        normalized: "ことわさ",
        originals: [
            "ことわざ",
        ]
    },
    {
        normalized: "ことわり",
        originals: [
            "ことわり",
            "断り",
        ]
    },
    {
        normalized: "こないた",
        originals: [
            "こないだ",
        ]
    },
    {
        normalized: "こなこな",
        originals: [
            "粉粉",
        ]
    },
    {
        normalized: "こなゆき",
        originals: [
            "粉雪",
        ]
    },
    {
        normalized: "このころ",
        originals: [
            "このごろ",
        ]
    },
    {
        normalized: "こはしり",
        originals: [
            "小走り",
        ]
    },
    {
        normalized: "こはなれ",
        originals: [
            "子離れ",
        ]
    },
    {
        normalized: "こひつし",
        originals: [
            "子羊",
        ]
    },
    {
        normalized: "こふとり",
        originals: [
            "小太り",
        ]
    },
    {
        normalized: "こまかし",
        originals: [
            "ごまかし",
        ]
    },
    {
        normalized: "こまわり",
        originals: [
            "小回り",
        ]
    },
    {
        normalized: "こみつく",
        originals: [
            "コミック",
        ]
    },
    {
        normalized: "こみとり",
        originals: [
            "ごみ取り",
        ]
    },
    {
        normalized: "こみはこ",
        originals: [
            "ごみ箱",
        ]
    },
    {
        normalized: "こむすひ",
        originals: [
            "小結",
        ]
    },
    {
        normalized: "こむすめ",
        originals: [
            "小娘",
        ]
    },
    {
        normalized: "こめかみ",
        originals: [
            "こめかみ",
        ]
    },
    {
        normalized: "こめつふ",
        originals: [
            "米粒",
        ]
    },
    {
        normalized: "こめとき",
        originals: [
            "米とぎ",
        ]
    },
    {
        normalized: "こめぬか",
        originals: [
            "米ぬか",
        ]
    },
    {
        normalized: "こめひつ",
        originals: [
            "米びつ",
        ]
    },
    {
        normalized: "こめんと",
        originals: [
            "コメント",
        ]
    },
    {
        normalized: "こもれひ",
        originals: [
            "木漏れ日",
        ]
    },
    {
        normalized: "こらしめ",
        originals: [
            "懲らしめ",
        ]
    },
    {
        normalized: "こりおし",
        originals: [
            "ごり押し",
        ]
    },
    {
        normalized: "こりこり",
        originals: [
            "懲り懲り",
        ]
    },
    {
        normalized: "これしき",
        originals: [
            "これしき",
        ]
    },
    {
        normalized: "ころしや",
        originals: [
            "殺し屋",
        ]
    },
    {
        normalized: "ころつけ",
        originals: [
            "コロッケ",
        ]
    },
    {
        normalized: "こわもて",
        originals: [
            "こわもて",
        ]
    },
    {
        normalized: "こんいん",
        originals: [
            "婚姻",
        ]
    },
    {
        normalized: "こんかい",
        originals: [
            "今回",
        ]
    },
    {
        normalized: "こんきよ",
        originals: [
            "根拠",
        ]
    },
    {
        normalized: "こんけつ",
        originals: [
            "今月",
        ]
    },
    {
        normalized: "こんこう",
        originals: [
            "混合",
        ]
    },
    {
        normalized: "こんさい",
        originals: [
            "混在",
        ]
    },
    {
        normalized: "こんさつ",
        originals: [
            "混雑",
        ]
    },
    {
        normalized: "こんしき",
        originals: [
            "金色",
        ]
    },
    {
        normalized: "こんしん",
        originals: [
            "懇親",
        ]
    },
    {
        normalized: "こんすい",
        originals: [
            "昏睡",
        ]
    },
    {
        normalized: "こんせき",
        originals: [
            "痕跡",
        ]
    },
    {
        normalized: "こんせつ",
        originals: [
            "根絶",
        ]
    },
    {
        normalized: "こんせん",
        originals: [
            "混戦",
            "婚前",
        ]
    },
    {
        normalized: "こんそめ",
        originals: [
            "コンソメ",
        ]
    },
    {
        normalized: "こんたて",
        originals: [
            "献立",
        ]
    },
    {
        normalized: "こんたん",
        originals: [
            "魂胆",
            "懇談",
        ]
    },
    {
        normalized: "こんてい",
        originals: [
            "根底",
        ]
    },
    {
        normalized: "こんてな",
        originals: [
            "コンテナ",
        ]
    },
    {
        normalized: "こんとう",
        originals: [
            "混同",
        ]
    },
    {
        normalized: "こんとら",
        originals: [
            "ゴンドラ",
        ]
    },
    {
        normalized: "こんなん",
        originals: [
            "困難",
        ]
    },
    {
        normalized: "こんにち",
        originals: [
            "今日",
        ]
    },
    {
        normalized: "こんはす",
        originals: [
            "コンパス",
        ]
    },
    {
        normalized: "こんはん",
        originals: [
            "今晩",
        ]
    },
    {
        normalized: "こんひに",
        originals: [
            "コンビニ",
        ]
    },
    {
        normalized: "こんほう",
        originals: [
            "こん棒",
            "梱包",
        ]
    },
    {
        normalized: "こんほん",
        originals: [
            "根本",
        ]
    },
    {
        normalized: "こんまけ",
        originals: [
            "根負け",
        ]
    },
    {
        normalized: "こんやく",
        originals: [
            "婚約",
        ]
    },
    {
        normalized: "こんよく",
        originals: [
            "混浴",
        ]
    },
    {
        normalized: "こんらん",
        originals: [
            "混乱",
        ]
    },
    {
        normalized: "こんれい",
        originals: [
            "婚礼",
        ]
    },
    {
        normalized: "こんわく",
        originals: [
            "困惑",
        ]
    },
    {
        normalized: "さいあい",
        originals: [
            "最愛",
        ]
    },
    {
        normalized: "さいあく",
        originals: [
            "最悪",
            "罪悪",
        ]
    },
    {
        normalized: "さいえん",
        originals: [
            "再演",
        ]
    },
    {
        normalized: "さいかい",
        originals: [
            "再会",
            "再開",
            "災害",
            "財界",
        ]
    },
    {
        normalized: "さいかく",
        originals: [
            "在学",
        ]
    },
    {
        normalized: "さいきん",
        originals: [
            "最近",
            "細菌",
        ]
    },
    {
        normalized: "さいくる",
        originals: [
            "サイクル",
        ]
    },
    {
        normalized: "さいけつ",
        originals: [
            "採決",
            "採血",
            "裁決",
            "歳月",
        ]
    },
    {
        normalized: "さいけん",
        originals: [
            "債券",
            "債権",
            "再建",
            "再現",
            "財源",
        ]
    },
    {
        normalized: "さいこう",
        originals: [
            "最高",
        ]
    },
    {
        normalized: "さいころ",
        originals: [
            "さいころ",
        ]
    },
    {
        normalized: "さいこん",
        originals: [
            "再婚",
        ]
    },
    {
        normalized: "さいさん",
        originals: [
            "再三",
            "採算",
            "財産",
        ]
    },
    {
        normalized: "さいしつ",
        originals: [
            "祭日",
            "材質",
        ]
    },
    {
        normalized: "さいしゆ",
        originals: [
            "採取",
        ]
    },
    {
        normalized: "さいしよ",
        originals: [
            "最初",
            "才女",
        ]
    },
    {
        normalized: "さいしん",
        originals: [
            "再審",
            "再診",
            "最新",
        ]
    },
    {
        normalized: "さいすん",
        originals: [
            "採寸",
        ]
    },
    {
        normalized: "さいせい",
        originals: [
            "再生",
            "財政",
        ]
    },
    {
        normalized: "さいせき",
        originals: [
            "採石",
            "在席",
            "在籍",
        ]
    },
    {
        normalized: "さいせん",
        originals: [
            "再選",
            "最前",
            "最善",
        ]
    },
    {
        normalized: "さいそく",
        originals: [
            "催促",
        ]
    },
    {
        normalized: "さいたい",
        originals: [
            "最大",
        ]
    },
    {
        normalized: "さいたく",
        originals: [
            "在宅",
        ]
    },
    {
        normalized: "さいたん",
        originals: [
            "最短",
            "祭壇",
            "裁断",
            "財団",
        ]
    },
    {
        normalized: "さいてい",
        originals: [
            "最低",
        ]
    },
    {
        normalized: "さいてん",
        originals: [
            "採点",
            "祭典",
        ]
    },
    {
        normalized: "さいとく",
        originals: [
            "再読",
        ]
    },
    {
        normalized: "さいなん",
        originals: [
            "災難",
        ]
    },
    {
        normalized: "さいにち",
        originals: [
            "在日",
        ]
    },
    {
        normalized: "さいにん",
        originals: [
            "再任",
            "在任",
            "罪人",
        ]
    },
    {
        normalized: "さいねん",
        originals: [
            "再燃",
        ]
    },
    {
        normalized: "さいのう",
        originals: [
            "才能",
        ]
    },
    {
        normalized: "さいのめ",
        originals: [
            "さいの目",
        ]
    },
    {
        normalized: "さいはい",
        originals: [
            "采配",
            "栽培",
        ]
    },
    {
        normalized: "さいはつ",
        originals: [
            "再発",
            "財閥",
        ]
    },
    {
        normalized: "さいはて",
        originals: [
            "最果て",
        ]
    },
    {
        normalized: "さいはん",
        originals: [
            "再版",
            "再犯",
            "裁判",
        ]
    },
    {
        normalized: "さいへん",
        originals: [
            "再編",
        ]
    },
    {
        normalized: "さいほう",
        originals: [
            "裁縫",
            "細胞",
            "財宝",
        ]
    },
    {
        normalized: "さいみん",
        originals: [
            "催眠",
        ]
    },
    {
        normalized: "さいめい",
        originals: [
            "罪名",
        ]
    },
    {
        normalized: "さいもく",
        originals: [
            "材木",
        ]
    },
    {
        normalized: "さいやく",
        originals: [
            "災厄",
        ]
    },
    {
        normalized: "さいよう",
        originals: [
            "採用",
        ]
    },
    {
        normalized: "さいらい",
        originals: [
            "再来",
        ]
    },
    {
        normalized: "さいれん",
        originals: [
            "サイレン",
        ]
    },
    {
        normalized: "さいわい",
        originals: [
            "幸い",
        ]
    },
    {
        normalized: "さうんと",
        originals: [
            "サウンド",
        ]
    },
    {
        normalized: "さかいめ",
        originals: [
            "境目",
        ]
    },
    {
        normalized: "さかくら",
        originals: [
            "酒蔵",
        ]
    },
    {
        normalized: "さかさま",
        originals: [
            "逆さま",
        ]
    },
    {
        normalized: "さかすき",
        originals: [
            "杯",
        ]
    },
    {
        normalized: "さかたい",
        originals: [
            "酒代",
        ]
    },
    {
        normalized: "さかたち",
        originals: [
            "逆立ち",
        ]
    },
    {
        normalized: "さかなて",
        originals: [
            "逆なで",
        ]
    },
    {
        normalized: "さかなや",
        originals: [
            "魚屋",
        ]
    },
    {
        normalized: "さかひん",
        originals: [
            "酒瓶",
        ]
    },
    {
        normalized: "さかみち",
        originals: [
            "坂道",
        ]
    },
    {
        normalized: "さきかけ",
        originals: [
            "先駆け",
        ]
    },
    {
        normalized: "さきたち",
        originals: [
            "先立ち",
        ]
    },
    {
        normalized: "さきつほ",
        originals: [
            "先っぽ",
        ]
    },
    {
        normalized: "さきとり",
        originals: [
            "先取り",
        ]
    },
    {
        normalized: "さきほと",
        originals: [
            "先ほど",
        ]
    },
    {
        normalized: "さきゆう",
        originals: [
            "砂丘",
        ]
    },
    {
        normalized: "さきよう",
        originals: [
            "作業",
        ]
    },
    {
        normalized: "さくけん",
        originals: [
            "削減",
        ]
    },
    {
        normalized: "さくしつ",
        originals: [
            "昨日",
        ]
    },
    {
        normalized: "さくしや",
        originals: [
            "作者",
        ]
    },
    {
        normalized: "さくしゆ",
        originals: [
            "搾取",
        ]
    },
    {
        normalized: "さくしよ",
        originals: [
            "削除",
        ]
    },
    {
        normalized: "さくせい",
        originals: [
            "作成",
            "作製",
        ]
    },
    {
        normalized: "さくせす",
        originals: [
            "サクセス",
        ]
    },
    {
        normalized: "さくせん",
        originals: [
            "作戦",
        ]
    },
    {
        normalized: "さくねん",
        originals: [
            "昨年",
        ]
    },
    {
        normalized: "さくはん",
        originals: [
            "昨晩",
        ]
    },
    {
        normalized: "さくひん",
        originals: [
            "作品",
        ]
    },
    {
        normalized: "さくふん",
        originals: [
            "作文",
        ]
    },
    {
        normalized: "さくもつ",
        originals: [
            "作物",
        ]
    },
    {
        normalized: "さくらん",
        originals: [
            "錯乱",
        ]
    },
    {
        normalized: "さくれつ",
        originals: [
            "炸裂",
        ]
    },
    {
        normalized: "さけかす",
        originals: [
            "酒粕",
        ]
    },
    {
        normalized: "さけくせ",
        originals: [
            "酒癖",
        ]
    },
    {
        normalized: "さけすき",
        originals: [
            "酒好き",
        ]
    },
    {
        normalized: "さけのみ",
        originals: [
            "酒飲み",
        ]
    },
    {
        normalized: "ささくれ",
        originals: [
            "ささくれ",
        ]
    },
    {
        normalized: "ささなみ",
        originals: [
            "さざ波",
        ]
    },
    {
        normalized: "ささやき",
        originals: [
            "ささやき",
        ]
    },
    {
        normalized: "さしいれ",
        originals: [
            "差し入れ",
        ]
    },
    {
        normalized: "さしかえ",
        originals: [
            "差し替え",
        ]
    },
    {
        normalized: "さしかね",
        originals: [
            "差し金",
        ]
    },
    {
        normalized: "さしこみ",
        originals: [
            "差し込み",
        ]
    },
    {
        normalized: "さしたし",
        originals: [
            "差し出し",
        ]
    },
    {
        normalized: "さしとめ",
        originals: [
            "差し止め",
        ]
    },
    {
        normalized: "さしひき",
        originals: [
            "差し引き",
        ]
    },
    {
        normalized: "さしやめ",
        originals: [
            "差し止め",
        ]
    },
    {
        normalized: "さしよう",
        originals: [
            "詐称",
            "座礁",
        ]
    },
    {
        normalized: "さすかり",
        originals: [
            "授かり",
        ]
    },
    {
        normalized: "さすらい",
        originals: [
            "さすらい",
        ]
    },
    {
        normalized: "さそりさ",
        originals: [
            "さそり座",
        ]
    },
    {
        normalized: "さちよう",
        originals: [
            "座長",
        ]
    },
    {
        normalized: "さついれ",
        originals: [
            "札入れ",
        ]
    },
    {
        normalized: "さつえい",
        originals: [
            "撮影",
        ]
    },
    {
        normalized: "さつおん",
        originals: [
            "雑音",
        ]
    },
    {
        normalized: "さつかい",
        originals: [
            "殺害",
        ]
    },
    {
        normalized: "さつかく",
        originals: [
            "錯覚",
            "雑学",
        ]
    },
    {
        normalized: "さつきよ",
        originals: [
            "雑居",
        ]
    },
    {
        normalized: "さつきん",
        originals: [
            "殺菌",
            "雑菌",
        ]
    },
    {
        normalized: "さつくす",
        originals: [
            "サックス",
        ]
    },
    {
        normalized: "さつこく",
        originals: [
            "雑穀",
        ]
    },
    {
        normalized: "さつこん",
        originals: [
            "昨今",
        ]
    },
    {
        normalized: "さつしゆ",
        originals: [
            "雑種",
        ]
    },
    {
        normalized: "さつしん",
        originals: [
            "殺人",
        ]
    },
    {
        normalized: "さつすう",
        originals: [
            "冊数",
        ]
    },
    {
        normalized: "さつそう",
        originals: [
            "雑草",
        ]
    },
    {
        normalized: "さつたは",
        originals: [
            "札束",
        ]
    },
    {
        normalized: "さつたん",
        originals: [
            "雑談",
        ]
    },
    {
        normalized: "さつとう",
        originals: [
            "殺到",
            "雑踏",
        ]
    },
    {
        normalized: "さつねん",
        originals: [
            "雑念",
        ]
    },
    {
        normalized: "さつよう",
        originals: [
            "雑用",
        ]
    },
    {
        normalized: "さつりく",
        originals: [
            "殺戮",
        ]
    },
    {
        normalized: "さとあき",
        originals: [
            "聡明",
        ]
    },
    {
        normalized: "さといも",
        originals: [
            "里芋",
        ]
    },
    {
        normalized: "さとおや",
        originals: [
            "里親",
        ]
    },
    {
        normalized: "さはんな",
        originals: [
            "サバンナ",
        ]
    },
    {
        normalized: "さひとめ",
        originals: [
            "さび止め",
        ]
    },
    {
        normalized: "さふらん",
        originals: [
            "サフラン",
        ]
    },
    {
        normalized: "さほてん",
        originals: [
            "サボテン",
        ]
    },
    {
        normalized: "さみたれ",
        originals: [
            "五月雨",
        ]
    },
    {
        normalized: "さみつと",
        originals: [
            "サミット",
        ]
    },
    {
        normalized: "さむらい",
        originals: [
            "侍",
        ]
    },
    {
        normalized: "さよなら",
        originals: [
            "さよなら",
        ]
    },
    {
        normalized: "さらきん",
        originals: [
            "サラ金",
        ]
    },
    {
        normalized: "さりかに",
        originals: [
            "ざりがに",
        ]
    },
    {
        normalized: "さるそは",
        originals: [
            "ざるそば",
        ]
    },
    {
        normalized: "さるまね",
        originals: [
            "猿まね",
        ]
    },
    {
        normalized: "さわめき",
        originals: [
            "ざわめき",
        ]
    },
    {
        normalized: "さんいん",
        originals: [
            "山陰",
            "参院",
            "産院",
        ]
    },
    {
        normalized: "さんかい",
        originals: [
            "山海",
            "残骸",
        ]
    },
    {
        normalized: "さんかく",
        originals: [
            "三角",
            "残額",
        ]
    },
    {
        normalized: "さんかん",
        originals: [
            "参観",
        ]
    },
    {
        normalized: "さんきん",
        originals: [
            "残金",
        ]
    },
    {
        normalized: "さんけき",
        originals: [
            "惨劇",
        ]
    },
    {
        normalized: "さんけつ",
        originals: [
            "酸欠",
        ]
    },
    {
        normalized: "さんこう",
        originals: [
            "参考",
        ]
    },
    {
        normalized: "さんこく",
        originals: [
            "残酷",
        ]
    },
    {
        normalized: "さんさい",
        originals: [
            "山菜",
            "散財",
        ]
    },
    {
        normalized: "さんさく",
        originals: [
            "散策",
        ]
    },
    {
        normalized: "さんしよ",
        originals: [
            "残暑",
        ]
    },
    {
        normalized: "さんしん",
        originals: [
            "三振",
        ]
    },
    {
        normalized: "さんすい",
        originals: [
            "さんずい",
        ]
    },
    {
        normalized: "さんすう",
        originals: [
            "算数",
        ]
    },
    {
        normalized: "さんせい",
        originals: [
            "賛成",
            "酸性",
        ]
    },
    {
        normalized: "さんせき",
        originals: [
            "山積",
        ]
    },
    {
        normalized: "さんせつ",
        originals: [
            "残雪",
        ]
    },
    {
        normalized: "さんせん",
        originals: [
            "参戦",
        ]
    },
    {
        normalized: "さんそう",
        originals: [
            "山荘",
            "残像",
        ]
    },
    {
        normalized: "さんそく",
        originals: [
            "山賊",
        ]
    },
    {
        normalized: "さんそん",
        originals: [
            "山村",
        ]
    },
    {
        normalized: "さんたか",
        originals: [
            "残高",
        ]
    },
    {
        normalized: "さんたる",
        originals: [
            "サンダル",
        ]
    },
    {
        normalized: "さんたん",
        originals: [
            "散弾",
        ]
    },
    {
        normalized: "さんつけ",
        originals: [
            "さん付け",
        ]
    },
    {
        normalized: "さんてい",
        originals: [
            "暫定",
        ]
    },
    {
        normalized: "さんとう",
        originals: [
            "賛同",
        ]
    },
    {
        normalized: "さんはい",
        originals: [
            "参拝",
            "惨敗",
        ]
    },
    {
        normalized: "さんはし",
        originals: [
            "桟橋",
        ]
    },
    {
        normalized: "さんはつ",
        originals: [
            "散髪",
        ]
    },
    {
        normalized: "さんはん",
        originals: [
            "残飯",
        ]
    },
    {
        normalized: "さんふる",
        originals: [
            "サンプル",
        ]
    },
    {
        normalized: "さんらん",
        originals: [
            "散乱",
            "産卵",
        ]
    },
    {
        normalized: "さんりん",
        originals: [
            "山林",
        ]
    },
    {
        normalized: "さんるい",
        originals: [
            "三塁",
        ]
    },
    {
        normalized: "さんれつ",
        originals: [
            "参列",
        ]
    },
    {
        normalized: "しあかり",
        originals: [
            "仕上がり",
        ]
    },
    {
        normalized: "しあまり",
        originals: [
            "字余り",
        ]
    },
    {
        normalized: "しあわせ",
        originals: [
            "幸せ",
        ]
    },
    {
        normalized: "しいたけ",
        originals: [
            "しいたけ",
        ]
    },
    {
        normalized: "しえつと",
        originals: [
            "ジェット",
        ]
    },
    {
        normalized: "しおあし",
        originals: [
            "塩味",
        ]
    },
    {
        normalized: "しおかせ",
        originals: [
            "潮風",
        ]
    },
    {
        normalized: "しおから",
        originals: [
            "塩辛",
        ]
    },
    {
        normalized: "しおくり",
        originals: [
            "仕送り",
        ]
    },
    {
        normalized: "しおつけ",
        originals: [
            "塩漬け",
        ]
    },
    {
        normalized: "しおとき",
        originals: [
            "潮時",
        ]
    },
    {
        normalized: "しおみす",
        originals: [
            "塩水",
        ]
    },
    {
        normalized: "しおもみ",
        originals: [
            "塩もみ",
        ]
    },
    {
        normalized: "しおやき",
        originals: [
            "塩焼き",
        ]
    },
    {
        normalized: "しかえし",
        originals: [
            "仕返し",
        ]
    },
    {
        normalized: "しかはね",
        originals: [
            "しかばね",
        ]
    },
    {
        normalized: "しからみ",
        originals: [
            "しがらみ",
        ]
    },
    {
        normalized: "しききん",
        originals: [
            "敷金",
        ]
    },
    {
        normalized: "しきさい",
        originals: [
            "色彩",
        ]
    },
    {
        normalized: "しきしき",
        originals: [
            "直直",
        ]
    },
    {
        normalized: "しきしや",
        originals: [
            "識者",
        ]
    },
    {
        normalized: "しきたり",
        originals: [
            "しきたり",
        ]
    },
    {
        normalized: "しきてん",
        originals: [
            "式典",
            "直伝",
        ]
    },
    {
        normalized: "しきひつ",
        originals: [
            "直筆",
        ]
    },
    {
        normalized: "しきへつ",
        originals: [
            "識別",
        ]
    },
    {
        normalized: "しきもう",
        originals: [
            "色盲",
        ]
    },
    {
        normalized: "しきやく",
        originals: [
            "刺客",
            "自虐",
        ]
    },
    {
        normalized: "しきゆう",
        originals: [
            "四球",
            "子宮",
            "支給",
            "死球",
            "至急",
            "持久",
            "時給",
            "自給",
        ]
    },
    {
        normalized: "しきよう",
        originals: [
            "司教",
            "試供",
            "始業",
            "自供",
            "事業",
        ]
    },
    {
        normalized: "しきよく",
        originals: [
            "支局",
        ]
    },
    {
        normalized: "しくさく",
        originals: [
            "ジグザグ",
        ]
    },
    {
        normalized: "しくしり",
        originals: [
            "しくじり",
        ]
    },
    {
        normalized: "しくなる",
        originals: [
            "シグナル",
        ]
    },
    {
        normalized: "しけとし",
        originals: [
            "成年",
        ]
    },
    {
        normalized: "しことき",
        originals: [
            "仕事着",
        ]
    },
    {
        normalized: "しことは",
        originals: [
            "仕事場",
        ]
    },
    {
        normalized: "ししやく",
        originals: [
            "磁石",
        ]
    },
    {
        normalized: "ししやも",
        originals: [
            "シシャモ",
        ]
    },
    {
        normalized: "ししゆう",
        originals: [
            "刺繍",
            "詩集",
            "始終",
            "自習",
            "自重",
        ]
    },
    {
        normalized: "ししゆく",
        originals: [
            "自粛",
        ]
    },
    {
        normalized: "ししゆつ",
        originals: [
            "支出",
            "施術",
        ]
    },
    {
        normalized: "ししよう",
        originals: [
            "師匠",
            "支障",
            "死傷",
            "史上",
            "市場",
            "私情",
            "試乗",
            "事象",
            "自称",
            "事情",
        ]
    },
    {
        normalized: "ししよく",
        originals: [
            "試食",
            "辞職",
        ]
    },
    {
        normalized: "しすけさ",
        originals: [
            "静けさ",
        ]
    },
    {
        normalized: "しすてむ",
        originals: [
            "システム",
        ]
    },
    {
        normalized: "しすへり",
        originals: [
            "地滑り",
        ]
    },
    {
        normalized: "しすまり",
        originals: [
            "静まり",
        ]
    },
    {
        normalized: "したあこ",
        originals: [
            "下あご",
        ]
    },
    {
        normalized: "したあし",
        originals: [
            "下味",
        ]
    },
    {
        normalized: "したうけ",
        originals: [
            "下請",
        ]
    },
    {
        normalized: "したうち",
        originals: [
            "舌打ち",
        ]
    },
    {
        normalized: "したかき",
        originals: [
            "下書き",
        ]
    },
    {
        normalized: "したさき",
        originals: [
            "舌先",
        ]
    },
    {
        normalized: "したしき",
        originals: [
            "下敷き",
        ]
    },
    {
        normalized: "したしみ",
        originals: [
            "親しみ",
        ]
    },
    {
        normalized: "したつは",
        originals: [
            "下っ端",
        ]
    },
    {
        normalized: "したつみ",
        originals: [
            "下積み",
        ]
    },
    {
        normalized: "したてや",
        originals: [
            "仕立屋",
        ]
    },
    {
        normalized: "したとり",
        originals: [
            "下取り",
        ]
    },
    {
        normalized: "したぬり",
        originals: [
            "下塗り",
        ]
    },
    {
        normalized: "したはき",
        originals: [
            "下履き",
        ]
    },
    {
        normalized: "したはら",
        originals: [
            "下腹",
        ]
    },
    {
        normalized: "したまち",
        originals: [
            "下町",
        ]
    },
    {
        normalized: "したむき",
        originals: [
            "下向き",
        ]
    },
    {
        normalized: "しちいれ",
        originals: [
            "質入れ",
        ]
    },
    {
        normalized: "しちてん",
        originals: [
            "質店",
        ]
    },
    {
        normalized: "しちやく",
        originals: [
            "試着",
        ]
    },
    {
        normalized: "しちゆう",
        originals: [
            "支柱",
        ]
    },
    {
        normalized: "しちよう",
        originals: [
            "市長",
            "視聴",
            "試聴",
            "次長",
            "自重",
        ]
    },
    {
        normalized: "しついん",
        originals: [
            "実印",
        ]
    },
    {
        normalized: "しつえん",
        originals: [
            "実演",
        ]
    },
    {
        normalized: "しつおん",
        originals: [
            "室温",
        ]
    },
    {
        normalized: "しつかい",
        originals: [
            "室外",
            "実害",
        ]
    },
    {
        normalized: "しつかく",
        originals: [
            "失格",
        ]
    },
    {
        normalized: "しつかん",
        originals: [
            "疾患",
            "質感",
            "実感",
        ]
    },
    {
        normalized: "しつきん",
        originals: [
            "失禁",
        ]
    },
    {
        normalized: "しつくす",
        originals: [
            "シックス",
        ]
    },
    {
        normalized: "しつけい",
        originals: [
            "実兄",
            "実刑",
        ]
    },
    {
        normalized: "しつけつ",
        originals: [
            "失血",
        ]
    },
    {
        normalized: "しつけん",
        originals: [
            "失言",
            "湿原",
            "実権",
            "実験",
            "実現",
        ]
    },
    {
        normalized: "しつこう",
        originals: [
            "執行",
            "失効",
            "実効",
            "実行",
        ]
    },
    {
        normalized: "しつこく",
        originals: [
            "漆黒",
        ]
    },
    {
        normalized: "しつさい",
        originals: [
            "実際",
            "実在",
        ]
    },
    {
        normalized: "しつしつ",
        originals: [
            "実質",
        ]
    },
    {
        normalized: "しつしや",
        originals: [
            "実写",
        ]
    },
    {
        normalized: "しつしん",
        originals: [
            "失神",
            "湿疹",
        ]
    },
    {
        normalized: "しつせき",
        originals: [
            "叱責",
            "実積",
            "実績",
        ]
    },
    {
        normalized: "しつせん",
        originals: [
            "実戦",
            "実線",
            "実践",
        ]
    },
    {
        normalized: "しつそう",
        originals: [
            "失踪",
            "疾走",
        ]
    },
    {
        normalized: "しつそく",
        originals: [
            "失速",
            "実測",
        ]
    },
    {
        normalized: "しつそん",
        originals: [
            "実存",
        ]
    },
    {
        normalized: "しつたい",
        originals: [
            "失態",
            "実体",
            "実態",
        ]
    },
    {
        normalized: "しつつい",
        originals: [
            "失墜",
        ]
    },
    {
        normalized: "しつつき",
        originals: [
            "地続き",
        ]
    },
    {
        normalized: "しつてい",
        originals: [
            "実弟",
        ]
    },
    {
        normalized: "しつてん",
        originals: [
            "失点",
        ]
    },
    {
        normalized: "しつとう",
        originals: [
            "実働",
        ]
    },
    {
        normalized: "しつない",
        originals: [
            "室内",
        ]
    },
    {
        normalized: "しつねん",
        originals: [
            "失念",
        ]
    },
    {
        normalized: "しつはい",
        originals: [
            "失敗",
        ]
    },
    {
        normalized: "しつひつ",
        originals: [
            "執筆",
        ]
    },
    {
        normalized: "しつふつ",
        originals: [
            "実物",
        ]
    },
    {
        normalized: "しつふほ",
        originals: [
            "実父母",
        ]
    },
    {
        normalized: "しつへい",
        originals: [
            "疾病",
        ]
    },
    {
        normalized: "しつほう",
        originals: [
            "失望",
        ]
    },
    {
        normalized: "しつまい",
        originals: [
            "実妹",
        ]
    },
    {
        normalized: "しつめい",
        originals: [
            "失明",
            "実名",
        ]
    },
    {
        normalized: "しつもん",
        originals: [
            "質問",
        ]
    },
    {
        normalized: "しつよう",
        originals: [
            "実用",
        ]
    },
    {
        normalized: "しつれい",
        originals: [
            "失礼",
            "実例",
        ]
    },
    {
        normalized: "しつれん",
        originals: [
            "失恋",
        ]
    },
    {
        normalized: "しつろく",
        originals: [
            "実録",
        ]
    },
    {
        normalized: "しなうす",
        originals: [
            "品薄",
        ]
    },
    {
        normalized: "しなおし",
        originals: [
            "し直し",
        ]
    },
    {
        normalized: "しなかき",
        originals: [
            "品書き",
        ]
    },
    {
        normalized: "しなかす",
        originals: [
            "品数",
        ]
    },
    {
        normalized: "しなきれ",
        originals: [
            "品切れ",
        ]
    },
    {
        normalized: "しなもの",
        originals: [
            "品物",
        ]
    },
    {
        normalized: "しなりお",
        originals: [
            "シナリオ",
        ]
    },
    {
        normalized: "しにかお",
        originals: [
            "死に顔",
        ]
    },
    {
        normalized: "しにかみ",
        originals: [
            "死に神",
        ]
    },
    {
        normalized: "しにきわ",
        originals: [
            "死に際",
        ]
    },
    {
        normalized: "しにさま",
        originals: [
            "死にざま",
        ]
    },
    {
        normalized: "しはいぬ",
        originals: [
            "しば犬",
        ]
    },
    {
        normalized: "しはかり",
        originals: [
            "しば刈り",
            "芝刈り",
        ]
    },
    {
        normalized: "しはらい",
        originals: [
            "支払い",
        ]
    },
    {
        normalized: "しひひき",
        originals: [
            "地響き",
        ]
    },
    {
        normalized: "しひよう",
        originals: [
            "指標",
            "辞表",
            "持病",
        ]
    },
    {
        normalized: "しへりあ",
        originals: [
            "シベリア",
        ]
    },
    {
        normalized: "しまうま",
        originals: [
            "しま馬",
        ]
    },
    {
        normalized: "しまくに",
        originals: [
            "島国",
        ]
    },
    {
        normalized: "しまへひ",
        originals: [
            "しまへび",
        ]
    },
    {
        normalized: "しめきり",
        originals: [
            "締め切り",
            "閉め切り",
        ]
    },
    {
        normalized: "しめたし",
        originals: [
            "締め出し",
            "閉め出し",
        ]
    },
    {
        normalized: "しめつけ",
        originals: [
            "締め付け",
        ]
    },
    {
        normalized: "しめりけ",
        originals: [
            "湿り気",
        ]
    },
    {
        normalized: "しもつき",
        originals: [
            "霜月",
        ]
    },
    {
        normalized: "しもねた",
        originals: [
            "下ねた",
        ]
    },
    {
        normalized: "しもふり",
        originals: [
            "霜降り",
        ]
    },
    {
        normalized: "しもやけ",
        originals: [
            "霜焼け",
        ]
    },
    {
        normalized: "しやあく",
        originals: [
            "邪悪",
        ]
    },
    {
        normalized: "しやいん",
        originals: [
            "社員",
        ]
    },
    {
        normalized: "しやうん",
        originals: [
            "社運",
        ]
    },
    {
        normalized: "しやかい",
        originals: [
            "社会",
            "社外",
            "車外",
        ]
    },
    {
        normalized: "しやかん",
        originals: [
            "車間",
        ]
    },
    {
        normalized: "しやくち",
        originals: [
            "蛇口",
        ]
    },
    {
        normalized: "しやくや",
        originals: [
            "借家",
        ]
    },
    {
        normalized: "しやくん",
        originals: [
            "社訓",
        ]
    },
    {
        normalized: "しやけき",
        originals: [
            "射撃",
        ]
    },
    {
        normalized: "しやけん",
        originals: [
            "車検",
        ]
    },
    {
        normalized: "しやこう",
        originals: [
            "社交",
            "遮光",
        ]
    },
    {
        normalized: "しやさい",
        originals: [
            "車載",
            "謝罪",
        ]
    },
    {
        normalized: "しやさつ",
        originals: [
            "射殺",
        ]
    },
    {
        normalized: "しやしゆ",
        originals: [
            "車種",
        ]
    },
    {
        normalized: "しやしん",
        originals: [
            "写真",
            "邪心",
        ]
    },
    {
        normalized: "しやせい",
        originals: [
            "射精",
        ]
    },
    {
        normalized: "しやせつ",
        originals: [
            "社説",
        ]
    },
    {
        normalized: "しやせん",
        originals: [
            "斜線",
            "車線",
        ]
    },
    {
        normalized: "しやたい",
        originals: [
            "車体",
        ]
    },
    {
        normalized: "しやたく",
        originals: [
            "社宅",
        ]
    },
    {
        normalized: "しやたん",
        originals: [
            "遮断",
        ]
    },
    {
        normalized: "しやつし",
        originals: [
            "ジャッジ",
        ]
    },
    {
        normalized: "しやてき",
        originals: [
            "射的",
        ]
    },
    {
        normalized: "しやとう",
        originals: [
            "車道",
            "邪道",
        ]
    },
    {
        normalized: "しやとる",
        originals: [
            "シャトル",
        ]
    },
    {
        normalized: "しやない",
        originals: [
            "車内",
        ]
    },
    {
        normalized: "しやはん",
        originals: [
            "ジャパン",
        ]
    },
    {
        normalized: "しやふう",
        originals: [
            "社風",
        ]
    },
    {
        normalized: "しやふつ",
        originals: [
            "煮沸",
        ]
    },
    {
        normalized: "しやへり",
        originals: [
            "しゃべり",
        ]
    },
    {
        normalized: "しやへる",
        originals: [
            "シャベル",
        ]
    },
    {
        normalized: "しやめい",
        originals: [
            "社名",
        ]
    },
    {
        normalized: "しやめん",
        originals: [
            "斜面",
        ]
    },
    {
        normalized: "しやもし",
        originals: [
            "しゃもじ",
        ]
    },
    {
        normalized: "しやりん",
        originals: [
            "車輪",
        ]
    },
    {
        normalized: "しやれい",
        originals: [
            "謝礼",
        ]
    },
    {
        normalized: "しやれき",
        originals: [
            "社歴",
        ]
    },
    {
        normalized: "しやんふ",
        originals: [
            "ジャンプ",
        ]
    },
    {
        normalized: "しやんほ",
        originals: [
            "ジャンボ",
        ]
    },
    {
        normalized: "しやんる",
        originals: [
            "ジャンル",
        ]
    },
    {
        normalized: "しゆうい",
        originals: [
            "周囲",
            "獣医",
        ]
    },
    {
        normalized: "しゆうか",
        originals: [
            "集荷",
        ]
    },
    {
        normalized: "しゆうき",
        originals: [
            "周期",
            "秋季",
            "祝儀",
            "銃器",
        ]
    },
    {
        normalized: "しゆうし",
        originals: [
            "収支",
            "終始",
            "終止",
            "習字",
            "重視",
            "従事",
        ]
    },
    {
        normalized: "しゆうち",
        originals: [
            "周知",
        ]
    },
    {
        normalized: "しゆうと",
        originals: [
            "重度",
        ]
    },
    {
        normalized: "しゆうは",
        originals: [
            "周波",
        ]
    },
    {
        normalized: "しゆうゆ",
        originals: [
            "重油",
        ]
    },
    {
        normalized: "しゆうり",
        originals: [
            "修理",
        ]
    },
    {
        normalized: "しゆえい",
        originals: [
            "守衛",
        ]
    },
    {
        normalized: "しゆえん",
        originals: [
            "主演",
            "酒宴",
        ]
    },
    {
        normalized: "しゆかい",
        originals: [
            "樹海",
        ]
    },
    {
        normalized: "しゆかん",
        originals: [
            "主観",
        ]
    },
    {
        normalized: "しゆくか",
        originals: [
            "祝賀",
        ]
    },
    {
        normalized: "しゆくこ",
        originals: [
            "熟語",
        ]
    },
    {
        normalized: "しゆくし",
        originals: [
            "祝辞",
        ]
    },
    {
        normalized: "しゆくす",
        originals: [
            "縮図",
        ]
    },
    {
        normalized: "しゆくち",
        originals: [
            "熟知",
        ]
    },
    {
        normalized: "しゆくは",
        originals: [
            "宿場",
        ]
    },
    {
        normalized: "しゆくふ",
        originals: [
            "叔父",
        ]
    },
    {
        normalized: "しゆくほ",
        originals: [
            "叔母",
        ]
    },
    {
        normalized: "しゆけい",
        originals: [
            "手芸",
            "受刑",
        ]
    },
    {
        normalized: "しゆけん",
        originals: [
            "主権",
            "受検",
            "受験",
        ]
    },
    {
        normalized: "しゆこう",
        originals: [
            "趣向",
            "酒豪",
            "受講",
        ]
    },
    {
        normalized: "しゆさい",
        originals: [
            "主催",
            "主菜",
            "取材",
        ]
    },
    {
        normalized: "しゆしん",
        originals: [
            "主審",
            "主人",
            "受信",
            "受診",
        ]
    },
    {
        normalized: "しゆせい",
        originals: [
            "酒税",
            "受精",
        ]
    },
    {
        normalized: "しゆせき",
        originals: [
            "酒席",
            "首席",
        ]
    },
    {
        normalized: "しゆそう",
        originals: [
            "酒造",
        ]
    },
    {
        normalized: "しゆそく",
        originals: [
            "種族",
        ]
    },
    {
        normalized: "しゆたい",
        originals: [
            "主体",
            "主題",
        ]
    },
    {
        normalized: "しゆたく",
        originals: [
            "受託",
        ]
    },
    {
        normalized: "しゆたん",
        originals: [
            "手段",
        ]
    },
    {
        normalized: "しゆつか",
        originals: [
            "出火",
            "出荷",
        ]
    },
    {
        normalized: "しゆつけ",
        originals: [
            "出家",
        ]
    },
    {
        normalized: "しゆつこ",
        originals: [
            "出庫",
            "術後",
            "述語",
        ]
    },
    {
        normalized: "しゆつし",
        originals: [
            "出資",
        ]
    },
    {
        normalized: "しゆつせ",
        originals: [
            "出世",
        ]
    },
    {
        normalized: "しゆつは",
        originals: [
            "出馬",
        ]
    },
    {
        normalized: "しゆつひ",
        originals: [
            "出費",
        ]
    },
    {
        normalized: "しゆとう",
        originals: [
            "手刀",
            "主導",
            "手動",
            "受動",
        ]
    },
    {
        normalized: "しゆとく",
        originals: [
            "取得",
        ]
    },
    {
        normalized: "しゆなん",
        originals: [
            "受難",
        ]
    },
    {
        normalized: "しゆにあ",
        originals: [
            "ジュニア",
        ]
    },
    {
        normalized: "しゆにく",
        originals: [
            "朱肉",
        ]
    },
    {
        normalized: "しゆにん",
        originals: [
            "主任",
        ]
    },
    {
        normalized: "しゆのう",
        originals: [
            "首脳",
        ]
    },
    {
        normalized: "しゆはく",
        originals: [
            "呪縛",
        ]
    },
    {
        normalized: "しゆはん",
        originals: [
            "主犯",
        ]
    },
    {
        normalized: "しゆひん",
        originals: [
            "主賓",
        ]
    },
    {
        normalized: "しゆふん",
        originals: [
            "受粉",
        ]
    },
    {
        normalized: "しゆへつ",
        originals: [
            "種別",
        ]
    },
    {
        normalized: "しゆほう",
        originals: [
            "手法",
            "首謀",
        ]
    },
    {
        normalized: "しゆもく",
        originals: [
            "種目",
            "樹木",
        ]
    },
    {
        normalized: "しゆもん",
        originals: [
            "呪文",
        ]
    },
    {
        normalized: "しゆやく",
        originals: [
            "主役",
        ]
    },
    {
        normalized: "しゆよう",
        originals: [
            "腫瘍",
            "受容",
            "需要",
        ]
    },
    {
        normalized: "しゆよく",
        originals: [
            "主翼",
        ]
    },
    {
        normalized: "しゆらん",
        originals: [
            "酒乱",
        ]
    },
    {
        normalized: "しゆるい",
        originals: [
            "種類",
        ]
    },
    {
        normalized: "しゆれい",
        originals: [
            "樹齢",
        ]
    },
    {
        normalized: "しゆわん",
        originals: [
            "手腕",
        ]
    },
    {
        normalized: "しゆんい",
        originals: [
            "順位",
        ]
    },
    {
        normalized: "しゆんさ",
        originals: [
            "巡査",
        ]
    },
    {
        normalized: "しゆんし",
        originals: [
            "瞬時",
        ]
    },
    {
        normalized: "しゆんと",
        originals: [
            "純度",
        ]
    },
    {
        normalized: "しゆんひ",
        originals: [
            "準備",
        ]
    },
    {
        normalized: "しゆんろ",
        originals: [
            "順路",
        ]
    },
    {
        normalized: "しよいん",
        originals: [
            "署員",
        ]
    },
    {
        normalized: "しようい",
        originals: [
            "上位",
        ]
    },
    {
        normalized: "しようか",
        originals: [
            "昇華",
            "消化",
            "消火",
            "しょうが",
            "城下",
            "浄化",
        ]
    },
    {
        normalized: "しようき",
        originals: [
            "正気",
            "将棋",
            "上記",
            "蒸気",
            "定規",
        ]
    },
    {
        normalized: "しようけ",
        originals: [
            "上下",
        ]
    },
    {
        normalized: "しようこ",
        originals: [
            "証拠",
            "正午",
        ]
    },
    {
        normalized: "しようし",
        originals: [
            "焼死",
            "商事",
            "障子",
            "上司",
            "常時",
            "情事",
        ]
    },
    {
        normalized: "しようす",
        originals: [
            "上手",
        ]
    },
    {
        normalized: "しようそ",
        originals: [
            "勝訴",
        ]
    },
    {
        normalized: "しようち",
        originals: [
            "承知",
            "招致",
        ]
    },
    {
        normalized: "しようと",
        originals: [
            "譲渡",
        ]
    },
    {
        normalized: "しように",
        originals: [
            "小児",
        ]
    },
    {
        normalized: "しようは",
        originals: [
            "乗馬",
        ]
    },
    {
        normalized: "しようひ",
        originals: [
            "消費",
            "常備",
        ]
    },
    {
        normalized: "しようふ",
        originals: [
            "勝負",
            "丈夫",
            "上部",
        ]
    },
    {
        normalized: "しようみ",
        originals: [
            "正味",
            "賞味",
        ]
    },
    {
        normalized: "しようむ",
        originals: [
            "乗務",
            "常務",
        ]
    },
    {
        normalized: "しようゆ",
        originals: [
            "醤油",
        ]
    },
    {
        normalized: "しようよ",
        originals: [
            "賞与",
        ]
    },
    {
        normalized: "しようり",
        originals: [
            "勝利",
        ]
    },
    {
        normalized: "しようわ",
        originals: [
            "昭和",
        ]
    },
    {
        normalized: "しよおう",
        originals: [
            "女王",
        ]
    },
    {
        normalized: "しよかい",
        originals: [
            "初回",
            "除外",
        ]
    },
    {
        normalized: "しよきよ",
        originals: [
            "除去",
        ]
    },
    {
        normalized: "しよきん",
        originals: [
            "除菌",
        ]
    },
    {
        normalized: "しよくこ",
        originals: [
            "食後",
        ]
    },
    {
        normalized: "しよくし",
        originals: [
            "食事",
        ]
    },
    {
        normalized: "しよくは",
        originals: [
            "職場",
        ]
    },
    {
        normalized: "しよくひ",
        originals: [
            "食費",
        ]
    },
    {
        normalized: "しよくむ",
        originals: [
            "職務",
        ]
    },
    {
        normalized: "しよくん",
        originals: [
            "諸君",
        ]
    },
    {
        normalized: "しよけい",
        originals: [
            "処刑",
            "女系",
        ]
    },
    {
        normalized: "しよけん",
        originals: [
            "初見",
            "所見",
            "助言",
        ]
    },
    {
        normalized: "しよこう",
        originals: [
            "徐行",
        ]
    },
    {
        normalized: "しよこく",
        originals: [
            "諸国",
        ]
    },
    {
        normalized: "しよこん",
        originals: [
            "初婚",
        ]
    },
    {
        normalized: "しよさい",
        originals: [
            "書斎",
            "所在",
        ]
    },
    {
        normalized: "しよさん",
        originals: [
            "初産",
        ]
    },
    {
        normalized: "しよしき",
        originals: [
            "書式",
        ]
    },
    {
        normalized: "しよしつ",
        originals: [
            "除湿",
        ]
    },
    {
        normalized: "しよしゆ",
        originals: [
            "助手",
        ]
    },
    {
        normalized: "しよしよ",
        originals: [
            "処女",
        ]
    },
    {
        normalized: "しよしん",
        originals: [
            "初心",
            "初診",
        ]
    },
    {
        normalized: "しよせい",
        originals: [
            "助成",
            "女性",
        ]
    },
    {
        normalized: "しよせき",
        originals: [
            "書籍",
            "除籍",
        ]
    },
    {
        normalized: "しよせん",
        originals: [
            "初戦",
        ]
    },
    {
        normalized: "しよそう",
        originals: [
            "助走",
            "女装",
            "除草",
        ]
    },
    {
        normalized: "しよそく",
        originals: [
            "所属",
        ]
    },
    {
        normalized: "しよそん",
        originals: [
            "所存",
        ]
    },
    {
        normalized: "しよたい",
        originals: [
            "所帯",
            "書体",
            "初代",
        ]
    },
    {
        normalized: "しよたな",
        originals: [
            "書棚",
        ]
    },
    {
        normalized: "しよたん",
        originals: [
            "初段",
        ]
    },
    {
        normalized: "しよつき",
        originals: [
            "食器",
            "ジョッキ",
        ]
    },
    {
        normalized: "しよつく",
        originals: [
            "ショック",
        ]
    },
    {
        normalized: "しよつと",
        originals: [
            "ショット",
        ]
    },
    {
        normalized: "しよつふ",
        originals: [
            "ショップ",
        ]
    },
    {
        normalized: "しよてい",
        originals: [
            "女帝",
        ]
    },
    {
        normalized: "しよてん",
        originals: [
            "書店",
        ]
    },
    {
        normalized: "しよとう",
        originals: [
            "初冬",
            "諸島",
            "書道",
        ]
    },
    {
        normalized: "しよとく",
        originals: [
            "所得",
        ]
    },
    {
        normalized: "しよにち",
        originals: [
            "初日",
        ]
    },
    {
        normalized: "しよはつ",
        originals: [
            "処罰",
        ]
    },
    {
        normalized: "しよはん",
        originals: [
            "初版",
            "初犯",
            "ショパン",
            "序盤",
        ]
    },
    {
        normalized: "しよふん",
        originals: [
            "処分",
        ]
    },
    {
        normalized: "しよほう",
        originals: [
            "処方",
        ]
    },
    {
        normalized: "しよみん",
        originals: [
            "庶民",
        ]
    },
    {
        normalized: "しよめい",
        originals: [
            "書名",
            "署名",
            "除名",
        ]
    },
    {
        normalized: "しよめん",
        originals: [
            "書面",
        ]
    },
    {
        normalized: "しよもつ",
        originals: [
            "書物",
        ]
    },
    {
        normalized: "しよゆう",
        originals: [
            "所有",
            "女優",
        ]
    },
    {
        normalized: "しよよう",
        originals: [
            "所用",
            "所要",
        ]
    },
    {
        normalized: "しよるい",
        originals: [
            "書類",
        ]
    },
    {
        normalized: "しよれつ",
        originals: [
            "序列",
        ]
    },
    {
        normalized: "しよろう",
        originals: [
            "初老",
        ]
    },
    {
        normalized: "しらあえ",
        originals: [
            "白あえ",
        ]
    },
    {
        normalized: "しらうお",
        originals: [
            "白魚",
        ]
    },
    {
        normalized: "しらかゆ",
        originals: [
            "白がゆ",
        ]
    },
    {
        normalized: "しらたま",
        originals: [
            "白玉",
        ]
    },
    {
        normalized: "しらはた",
        originals: [
            "白旗",
        ]
    },
    {
        normalized: "しらほね",
        originals: [
            "白骨",
        ]
    },
    {
        normalized: "しらゆき",
        originals: [
            "白雪",
        ]
    },
    {
        normalized: "しりあい",
        originals: [
            "知り合い",
        ]
    },
    {
        normalized: "しりある",
        originals: [
            "シリアル",
        ]
    },
    {
        normalized: "しりかる",
        originals: [
            "しり軽",
        ]
    },
    {
        normalized: "しりこん",
        originals: [
            "シリコン",
        ]
    },
    {
        normalized: "しりとり",
        originals: [
            "しり取り",
        ]
    },
    {
        normalized: "しりひん",
        originals: [
            "じり貧",
        ]
    },
    {
        normalized: "しりもち",
        originals: [
            "しりもち",
        ]
    },
    {
        normalized: "しりよう",
        originals: [
            "資料",
            "飼料",
        ]
    },
    {
        normalized: "しりよく",
        originals: [
            "視力",
            "磁力",
        ]
    },
    {
        normalized: "しるもの",
        originals: [
            "汁物",
        ]
    },
    {
        normalized: "しれんま",
        originals: [
            "ジレンマ",
        ]
    },
    {
        normalized: "しろあと",
        originals: [
            "城跡",
        ]
    },
    {
        normalized: "しろあん",
        originals: [
            "白あん",
        ]
    },
    {
        normalized: "しろうと",
        originals: [
            "素人",
        ]
    },
    {
        normalized: "しろかね",
        originals: [
            "白金",
        ]
    },
    {
        normalized: "しろくま",
        originals: [
            "白くま",
        ]
    },
    {
        normalized: "しろくろ",
        originals: [
            "白黒",
        ]
    },
    {
        normalized: "しろした",
        originals: [
            "城下",
        ]
    },
    {
        normalized: "しろつふ",
        originals: [
            "シロップ",
        ]
    },
    {
        normalized: "しろねこ",
        originals: [
            "白猫",
        ]
    },
    {
        normalized: "しろはい",
        originals: [
            "白バイ",
        ]
    },
    {
        normalized: "しわよせ",
        originals: [
            "しわ寄せ",
        ]
    },
    {
        normalized: "しんあい",
        originals: [
            "親愛",
        ]
    },
    {
        normalized: "しんいり",
        originals: [
            "新入り",
        ]
    },
    {
        normalized: "しんいん",
        originals: [
            "人員",
        ]
    },
    {
        normalized: "しんえい",
        originals: [
            "陣営",
        ]
    },
    {
        normalized: "しんかい",
        originals: [
            "深海",
            "侵害",
        ]
    },
    {
        normalized: "しんかお",
        originals: [
            "新顔",
        ]
    },
    {
        normalized: "しんかく",
        originals: [
            "進学",
            "人格",
        ]
    },
    {
        normalized: "しんかた",
        originals: [
            "新型",
        ]
    },
    {
        normalized: "しんかつ",
        originals: [
            "進学",
        ]
    },
    {
        normalized: "しんかり",
        originals: [
            "しんがり",
        ]
    },
    {
        normalized: "しんかん",
        originals: [
            "新刊",
            "新館",
        ]
    },
    {
        normalized: "しんきよ",
        originals: [
            "新居",
        ]
    },
    {
        normalized: "しんきん",
        originals: [
            "親近",
        ]
    },
    {
        normalized: "しんくう",
        originals: [
            "真空",
        ]
    },
    {
        normalized: "しんくる",
        originals: [
            "シングル",
        ]
    },
    {
        normalized: "しんくろ",
        originals: [
            "シンクロ",
        ]
    },
    {
        normalized: "しんけい",
        originals: [
            "神経",
        ]
    },
    {
        normalized: "しんけき",
        originals: [
            "進撃",
        ]
    },
    {
        normalized: "しんけつ",
        originals: [
            "新月",
        ]
    },
    {
        normalized: "しんけん",
        originals: [
            "真剣",
            "親権",
            "震源",
            "人権",
        ]
    },
    {
        normalized: "しんこう",
        originals: [
            "侵攻",
            "信仰",
            "親交",
            "進行",
            "信号",
            "人口",
            "人工",
        ]
    },
    {
        normalized: "しんこく",
        originals: [
            "申告",
        ]
    },
    {
        normalized: "しんこつ",
        originals: [
            "人骨",
        ]
    },
    {
        normalized: "しんこん",
        originals: [
            "新婚",
        ]
    },
    {
        normalized: "しんさい",
        originals: [
            "震災",
            "人災",
            "人材",
        ]
    },
    {
        normalized: "しんさく",
        originals: [
            "新作",
        ]
    },
    {
        normalized: "しんさつ",
        originals: [
            "新札",
            "診察",
        ]
    },
    {
        normalized: "しんさん",
        originals: [
            "辛酸",
            "新参",
        ]
    },
    {
        normalized: "しんしつ",
        originals: [
            "寝室",
            "真実",
        ]
    },
    {
        normalized: "しんしや",
        originals: [
            "新車",
            "信者",
            "神社",
        ]
    },
    {
        normalized: "しんしゆ",
        originals: [
            "新種",
            "真珠",
            "人種",
        ]
    },
    {
        normalized: "しんしよ",
        originals: [
            "新書",
            "寝所",
        ]
    },
    {
        normalized: "しんしん",
        originals: [
            "心身",
            "新人",
            "人身",
        ]
    },
    {
        normalized: "しんすい",
        originals: [
            "心酔",
            "浸水",
            "真髄",
        ]
    },
    {
        normalized: "しんせい",
        originals: [
            "新星",
            "申請",
            "神聖",
            "人生",
        ]
    },
    {
        normalized: "しんせき",
        originals: [
            "親戚",
        ]
    },
    {
        normalized: "しんせつ",
        originals: [
            "新設",
            "新雪",
            "親切",
        ]
    },
    {
        normalized: "しんせん",
        originals: [
            "親善",
            "人前",
        ]
    },
    {
        normalized: "しんそう",
        originals: [
            "深層",
            "真相",
            "心臓",
            "人造",
            "腎臓",
        ]
    },
    {
        normalized: "しんそく",
        originals: [
            "親族",
        ]
    },
    {
        normalized: "しんそこ",
        originals: [
            "心底",
            "真底",
        ]
    },
    {
        normalized: "しんそつ",
        originals: [
            "新卒",
        ]
    },
    {
        normalized: "しんたい",
        originals: [
            "身体",
            "進退",
            "寝台",
            "人体",
        ]
    },
    {
        normalized: "しんたん",
        originals: [
            "診断",
        ]
    },
    {
        normalized: "しんちく",
        originals: [
            "新築",
        ]
    },
    {
        normalized: "しんちや",
        originals: [
            "新茶",
        ]
    },
    {
        normalized: "しんつう",
        originals: [
            "陣痛",
        ]
    },
    {
        normalized: "しんてい",
        originals: [
            "進呈",
        ]
    },
    {
        normalized: "しんてん",
        originals: [
            "進展",
            "神殿",
        ]
    },
    {
        normalized: "しんとう",
        originals: [
            "浸透",
            "振動",
            "神童",
            "人道",
        ]
    },
    {
        normalized: "しんとく",
        originals: [
            "人徳",
        ]
    },
    {
        normalized: "しんにく",
        originals: [
            "人肉",
        ]
    },
    {
        normalized: "しんにん",
        originals: [
            "新任",
        ]
    },
    {
        normalized: "しんねん",
        originals: [
            "信念",
            "新年",
        ]
    },
    {
        normalized: "しんはい",
        originals: [
            "心肺",
            "心配",
        ]
    },
    {
        normalized: "しんはく",
        originals: [
            "心拍",
        ]
    },
    {
        normalized: "しんはる",
        originals: [
            "シンバル",
        ]
    },
    {
        normalized: "しんはん",
        originals: [
            "新版",
            "審判",
        ]
    },
    {
        normalized: "しんひん",
        originals: [
            "新品",
        ]
    },
    {
        normalized: "しんふつ",
        originals: [
            "神仏",
            "人物",
        ]
    },
    {
        normalized: "しんふん",
        originals: [
            "新聞",
            "人糞",
        ]
    },
    {
        normalized: "しんへん",
        originals: [
            "身辺",
        ]
    },
    {
        normalized: "しんほう",
        originals: [
            "辛抱",
            "人望",
        ]
    },
    {
        normalized: "しんほく",
        originals: [
            "親睦",
        ]
    },
    {
        normalized: "しんほる",
        originals: [
            "シンボル",
        ]
    },
    {
        normalized: "しんまい",
        originals: [
            "新米",
        ]
    },
    {
        normalized: "しんみせ",
        originals: [
            "新店",
        ]
    },
    {
        normalized: "しんみつ",
        originals: [
            "親密",
        ]
    },
    {
        normalized: "しんめい",
        originals: [
            "人名",
            "人命",
        ]
    },
    {
        normalized: "しんもう",
        originals: [
            "人毛",
        ]
    },
    {
        normalized: "しんもん",
        originals: [
            "審問",
            "尋問",
        ]
    },
    {
        normalized: "しんやく",
        originals: [
            "新薬",
        ]
    },
    {
        normalized: "しんゆう",
        originals: [
            "親友",
        ]
    },
    {
        normalized: "しんよう",
        originals: [
            "信用",
        ]
    },
    {
        normalized: "しんらい",
        originals: [
            "信頼",
        ]
    },
    {
        normalized: "しんりき",
        originals: [
            "人力",
        ]
    },
    {
        normalized: "しんりん",
        originals: [
            "森林",
        ]
    },
    {
        normalized: "しんるい",
        originals: [
            "人類",
        ]
    },
    {
        normalized: "しんれい",
        originals: [
            "心霊",
        ]
    },
    {
        normalized: "しんろう",
        originals: [
            "新郎",
        ]
    },
    {
        normalized: "すいあつ",
        originals: [
            "水圧",
        ]
    },
    {
        normalized: "すいいき",
        originals: [
            "水域",
        ]
    },
    {
        normalized: "すいえい",
        originals: [
            "水泳",
        ]
    },
    {
        normalized: "すいおん",
        originals: [
            "水温",
        ]
    },
    {
        normalized: "すいから",
        originals: [
            "吸い殻",
        ]
    },
    {
        normalized: "すいけん",
        originals: [
            "水源",
        ]
    },
    {
        normalized: "すいこう",
        originals: [
            "遂行",
        ]
    },
    {
        normalized: "すいさい",
        originals: [
            "水彩",
        ]
    },
    {
        normalized: "すいしつ",
        originals: [
            "水質",
        ]
    },
    {
        normalized: "すいしや",
        originals: [
            "水車",
        ]
    },
    {
        normalized: "すいしよ",
        originals: [
            "随所",
        ]
    },
    {
        normalized: "すいしん",
        originals: [
            "推進",
        ]
    },
    {
        normalized: "すいせい",
        originals: [
            "彗星",
            "水性",
            "水星",
        ]
    },
    {
        normalized: "すいせん",
        originals: [
            "推薦",
            "水洗",
        ]
    },
    {
        normalized: "すいそう",
        originals: [
            "吹奏",
            "水槽",
            "膵臓",
        ]
    },
    {
        normalized: "すいそく",
        originals: [
            "推測",
        ]
    },
    {
        normalized: "すいたい",
        originals: [
            "衰退",
        ]
    },
    {
        normalized: "すいつち",
        originals: [
            "スイッチ",
        ]
    },
    {
        normalized: "すいてい",
        originals: [
            "推定",
        ]
    },
    {
        normalized: "すいてき",
        originals: [
            "水滴",
        ]
    },
    {
        normalized: "すいてん",
        originals: [
            "水田",
        ]
    },
    {
        normalized: "すいとう",
        originals: [
            "水筒",
            "水道",
        ]
    },
    {
        normalized: "すいとり",
        originals: [
            "吸い取り",
        ]
    },
    {
        normalized: "すいなん",
        originals: [
            "水難",
        ]
    },
    {
        normalized: "すいはく",
        originals: [
            "水爆",
        ]
    },
    {
        normalized: "すいはん",
        originals: [
            "炊飯",
        ]
    },
    {
        normalized: "すいふん",
        originals: [
            "水分",
        ]
    },
    {
        normalized: "すいへい",
        originals: [
            "水兵",
            "水平",
        ]
    },
    {
        normalized: "すいほつ",
        originals: [
            "水没",
        ]
    },
    {
        normalized: "すいみん",
        originals: [
            "睡眠",
        ]
    },
    {
        normalized: "すいめん",
        originals: [
            "水面",
        ]
    },
    {
        normalized: "すいもの",
        originals: [
            "吸い物",
        ]
    },
    {
        normalized: "すいもん",
        originals: [
            "水門",
        ]
    },
    {
        normalized: "すいよう",
        originals: [
            "水曜",
        ]
    },
    {
        normalized: "すいりく",
        originals: [
            "水陸",
        ]
    },
    {
        normalized: "すいろん",
        originals: [
            "推論",
        ]
    },
    {
        normalized: "すいんく",
        originals: [
            "スイング",
        ]
    },
    {
        normalized: "すうかく",
        originals: [
            "数学",
        ]
    },
    {
        normalized: "すうしき",
        originals: [
            "数式",
        ]
    },
    {
        normalized: "すうせん",
        originals: [
            "数千",
        ]
    },
    {
        normalized: "すえおき",
        originals: [
            "据え置き",
        ]
    },
    {
        normalized: "すえつこ",
        originals: [
            "末っ子",
        ]
    },
    {
        normalized: "すかうと",
        originals: [
            "スカウト",
        ]
    },
    {
        normalized: "すかたみ",
        originals: [
            "姿見",
        ]
    },
    {
        normalized: "すかんく",
        originals: [
            "スカンク",
        ]
    },
    {
        normalized: "すきつふ",
        originals: [
            "スキップ",
        ]
    },
    {
        normalized: "すきやき",
        originals: [
            "すき焼き",
        ]
    },
    {
        normalized: "すくらむ",
        originals: [
            "スクラム",
        ]
    },
    {
        normalized: "すけすけ",
        originals: [
            "すけすけ",
        ]
    },
    {
        normalized: "すけたち",
        originals: [
            "助太刀",
        ]
    },
    {
        normalized: "すけつち",
        originals: [
            "スケッチ",
        ]
    },
    {
        normalized: "すけつと",
        originals: [
            "助っ人",
        ]
    },
    {
        normalized: "すこうて",
        originals: [
            "すご腕",
        ]
    },
    {
        normalized: "すこつち",
        originals: [
            "スコッチ",
        ]
    },
    {
        normalized: "すこつふ",
        originals: [
            "スコップ",
        ]
    },
    {
        normalized: "すこもり",
        originals: [
            "巣ごもり",
        ]
    },
    {
        normalized: "すころく",
        originals: [
            "すごろく",
        ]
    },
    {
        normalized: "すしあい",
        originals: [
            "筋合い",
        ]
    },
    {
        normalized: "すしかき",
        originals: [
            "筋書き",
        ]
    },
    {
        normalized: "すしつめ",
        originals: [
            "すし詰め",
        ]
    },
    {
        normalized: "すしよう",
        originals: [
            "頭上",
        ]
    },
    {
        normalized: "すすむし",
        originals: [
            "鈴虫",
        ]
    },
    {
        normalized: "すすらん",
        originals: [
            "すずらん",
        ]
    },
    {
        normalized: "すそあけ",
        originals: [
            "すそ上げ",
        ]
    },
    {
        normalized: "すたいる",
        originals: [
            "スタイル",
        ]
    },
    {
        normalized: "すたしお",
        originals: [
            "スタジオ",
        ]
    },
    {
        normalized: "すたつふ",
        originals: [
            "スタッフ",
        ]
    },
    {
        normalized: "すたみな",
        originals: [
            "スタミナ",
        ]
    },
    {
        normalized: "すためん",
        originals: [
            "スタメン",
        ]
    },
    {
        normalized: "すたんす",
        originals: [
            "スタンス",
        ]
    },
    {
        normalized: "すたんと",
        originals: [
            "スタンド",
        ]
    },
    {
        normalized: "すたんふ",
        originals: [
            "スタンプ",
        ]
    },
    {
        normalized: "すつくり",
        originals: [
            "巣作り",
        ]
    },
    {
        normalized: "すつひん",
        originals: [
            "すっぴん",
        ]
    },
    {
        normalized: "すつほん",
        originals: [
            "すっぽん",
        ]
    },
    {
        normalized: "すていぬ",
        originals: [
            "捨て犬",
        ]
    },
    {
        normalized: "すてつき",
        originals: [
            "ステッキ",
        ]
    },
    {
        normalized: "すてつふ",
        originals: [
            "ステップ",
        ]
    },
    {
        normalized: "すててこ",
        originals: [
            "すててこ",
        ]
    },
    {
        normalized: "すてねこ",
        originals: [
            "捨て猫",
        ]
    },
    {
        normalized: "すてれお",
        originals: [
            "ステレオ",
        ]
    },
    {
        normalized: "すとおり",
        originals: [
            "素通り",
        ]
    },
    {
        normalized: "すとつく",
        originals: [
            "ストック",
        ]
    },
    {
        normalized: "すとつふ",
        originals: [
            "ストップ",
        ]
    },
    {
        normalized: "すとまり",
        originals: [
            "素泊まり",
        ]
    },
    {
        normalized: "すとれす",
        originals: [
            "ストレス",
        ]
    },
    {
        normalized: "すとろほ",
        originals: [
            "ストロボ",
        ]
    },
    {
        normalized: "すなきも",
        originals: [
            "砂肝",
        ]
    },
    {
        normalized: "すなつく",
        originals: [
            "スナック",
        ]
    },
    {
        normalized: "すなはま",
        originals: [
            "砂浜",
        ]
    },
    {
        normalized: "すなふろ",
        originals: [
            "砂ぶろ",
        ]
    },
    {
        normalized: "すなやま",
        originals: [
            "砂山",
        ]
    },
    {
        normalized: "すのもの",
        originals: [
            "酢の物",
        ]
    },
    {
        normalized: "すはいく",
        originals: [
            "スパイク",
        ]
    },
    {
        normalized: "すはいす",
        originals: [
            "スパイス",
        ]
    },
    {
        normalized: "すはつつ",
        originals: [
            "スパッツ",
        ]
    },
    {
        normalized: "すはるた",
        originals: [
            "スパルタ",
        ]
    },
    {
        normalized: "すひつつ",
        originals: [
            "スピッツ",
        ]
    },
    {
        normalized: "すひよう",
        originals: [
            "図表",
        ]
    },
    {
        normalized: "すふぬれ",
        originals: [
            "ずぶぬれ",
        ]
    },
    {
        normalized: "すへいん",
        originals: [
            "スペイン",
        ]
    },
    {
        normalized: "すへつく",
        originals: [
            "スペック",
        ]
    },
    {
        normalized: "すほいと",
        originals: [
            "スポイト",
        ]
    },
    {
        normalized: "すほつと",
        originals: [
            "スポット",
        ]
    },
    {
        normalized: "すほんし",
        originals: [
            "スポンジ",
        ]
    },
    {
        normalized: "すまいる",
        originals: [
            "スマイル",
        ]
    },
    {
        normalized: "すみこみ",
        originals: [
            "住み込み",
        ]
    },
    {
        normalized: "すみすみ",
        originals: [
            "隅隅",
        ]
    },
    {
        normalized: "すみつこ",
        originals: [
            "隅っこ",
        ]
    },
    {
        normalized: "すみやき",
        originals: [
            "炭焼き",
        ]
    },
    {
        normalized: "すもくり",
        originals: [
            "素潜り",
        ]
    },
    {
        normalized: "すもつく",
        originals: [
            "スモッグ",
        ]
    },
    {
        normalized: "すらいす",
        originals: [
            "スライス",
        ]
    },
    {
        normalized: "すらいと",
        originals: [
            "スライド",
        ]
    },
    {
        normalized: "すらんふ",
        originals: [
            "スランプ",
        ]
    },
    {
        normalized: "すりあし",
        originals: [
            "すり足",
        ]
    },
    {
        normalized: "すりかえ",
        originals: [
            "すり替え",
        ]
    },
    {
        normalized: "すりきす",
        originals: [
            "擦り傷",
        ]
    },
    {
        normalized: "すりきり",
        originals: [
            "擦り切り",
        ]
    },
    {
        normalized: "すりつと",
        originals: [
            "スリット",
        ]
    },
    {
        normalized: "すりつは",
        originals: [
            "スリッパ",
        ]
    },
    {
        normalized: "すりつふ",
        originals: [
            "スリップ",
        ]
    },
    {
        normalized: "すりはち",
        originals: [
            "すり鉢",
        ]
    },
    {
        normalized: "すろつと",
        originals: [
            "スロット",
        ]
    },
    {
        normalized: "すんせん",
        originals: [
            "寸前",
        ]
    },
    {
        normalized: "すんたん",
        originals: [
            "寸断",
        ]
    },
    {
        normalized: "すんほう",
        originals: [
            "寸法",
        ]
    },
    {
        normalized: "せいあく",
        originals: [
            "性悪",
        ]
    },
    {
        normalized: "せいあつ",
        originals: [
            "制圧",
        ]
    },
    {
        normalized: "せいいき",
        originals: [
            "聖域",
        ]
    },
    {
        normalized: "せいうち",
        originals: [
            "セイウチ",
        ]
    },
    {
        normalized: "せいえい",
        originals: [
            "精鋭",
        ]
    },
    {
        normalized: "せいえん",
        originals: [
            "声援",
        ]
    },
    {
        normalized: "せいかい",
        originals: [
            "政界",
            "正解",
        ]
    },
    {
        normalized: "せいかく",
        originals: [
            "性格",
            "正確",
            "税額",
        ]
    },
    {
        normalized: "せいかつ",
        originals: [
            "生活",
        ]
    },
    {
        normalized: "せいかん",
        originals: [
            "生還",
            "静観",
            "税関",
        ]
    },
    {
        normalized: "せいきよ",
        originals: [
            "逝去",
            "制御",
        ]
    },
    {
        normalized: "せいきん",
        originals: [
            "税金",
        ]
    },
    {
        normalized: "せいけい",
        originals: [
            "整形",
            "生計",
        ]
    },
    {
        normalized: "せいけつ",
        originals: [
            "清潔",
        ]
    },
    {
        normalized: "せいけん",
        originals: [
            "政権",
            "制限",
        ]
    },
    {
        normalized: "せいこう",
        originals: [
            "性交",
            "成功",
            "精巧",
        ]
    },
    {
        normalized: "せいこみ",
        originals: [
            "税込み",
        ]
    },
    {
        normalized: "せいさい",
        originals: [
            "制裁",
            "正妻",
        ]
    },
    {
        normalized: "せいさく",
        originals: [
            "制作",
            "政策",
            "製作",
        ]
    },
    {
        normalized: "せいさん",
        originals: [
            "清算",
            "生産",
            "精算",
        ]
    },
    {
        normalized: "せいしつ",
        originals: [
            "声質",
            "性質",
            "誠実",
        ]
    },
    {
        normalized: "せいしゆ",
        originals: [
            "清酒",
        ]
    },
    {
        normalized: "せいしよ",
        originals: [
            "聖書",
            "聖女",
        ]
    },
    {
        normalized: "せいしん",
        originals: [
            "精神",
            "成人",
        ]
    },
    {
        normalized: "せいすう",
        originals: [
            "整数",
        ]
    },
    {
        normalized: "せいせい",
        originals: [
            "精製",
            "税制",
        ]
    },
    {
        normalized: "せいせき",
        originals: [
            "成績",
        ]
    },
    {
        normalized: "せいせん",
        originals: [
            "生鮮",
            "生前",
        ]
    },
    {
        normalized: "せいそう",
        originals: [
            "正装",
            "清掃",
            "精巣",
            "製造",
        ]
    },
    {
        normalized: "せいそく",
        originals: [
            "生息",
        ]
    },
    {
        normalized: "せいそん",
        originals: [
            "生存",
        ]
    },
    {
        normalized: "せいたい",
        originals: [
            "声帯",
            "整体",
            "正体",
            "生体",
            "生態",
        ]
    },
    {
        normalized: "せいたく",
        originals: [
            "贅沢",
        ]
    },
    {
        normalized: "せいたん",
        originals: [
            "生誕",
        ]
    },
    {
        normalized: "せいてい",
        originals: [
            "制定",
        ]
    },
    {
        normalized: "せいてつ",
        originals: [
            "製鉄",
        ]
    },
    {
        normalized: "せいてん",
        originals: [
            "晴天",
            "青天",
        ]
    },
    {
        normalized: "せいとう",
        originals: [
            "政党",
            "正当",
            "正答",
            "正統",
        ]
    },
    {
        normalized: "せいとん",
        originals: [
            "整頓",
        ]
    },
    {
        normalized: "せいなん",
        originals: [
            "西南",
        ]
    },
    {
        normalized: "せいにく",
        originals: [
            "精肉",
        ]
    },
    {
        normalized: "せいぬき",
        originals: [
            "税抜き",
        ]
    },
    {
        normalized: "せいねん",
        originals: [
            "成年",
            "青年",
        ]
    },
    {
        normalized: "せいのう",
        originals: [
            "性能",
        ]
    },
    {
        normalized: "せいはい",
        originals: [
            "成敗",
        ]
    },
    {
        normalized: "せいはつ",
        originals: [
            "整髪",
        ]
    },
    {
        normalized: "せいひき",
        originals: [
            "税引き",
        ]
    },
    {
        normalized: "せいひん",
        originals: [
            "製品",
        ]
    },
    {
        normalized: "せいふう",
        originals: [
            "西風",
        ]
    },
    {
        normalized: "せいふく",
        originals: [
            "制服",
            "征服",
        ]
    },
    {
        normalized: "せいふつ",
        originals: [
            "生物",
        ]
    },
    {
        normalized: "せいふん",
        originals: [
            "成分",
        ]
    },
    {
        normalized: "せいへき",
        originals: [
            "性癖",
        ]
    },
    {
        normalized: "せいへつ",
        originals: [
            "性別",
        ]
    },
    {
        normalized: "せいほう",
        originals: [
            "製法",
            "税法",
        ]
    },
    {
        normalized: "せいほく",
        originals: [
            "西北",
        ]
    },
    {
        normalized: "せいほん",
        originals: [
            "製本",
        ]
    },
    {
        normalized: "せいまい",
        originals: [
            "精米",
        ]
    },
    {
        normalized: "せいみつ",
        originals: [
            "精密",
        ]
    },
    {
        normalized: "せいめい",
        originals: [
            "声明",
            "姓名",
            "生命",
        ]
    },
    {
        normalized: "せいめん",
        originals: [
            "製麺",
        ]
    },
    {
        normalized: "せいもん",
        originals: [
            "正門",
        ]
    },
    {
        normalized: "せいやく",
        originals: [
            "制約",
            "成約",
            "製薬",
            "誓約",
        ]
    },
    {
        normalized: "せいゆう",
        originals: [
            "声優",
        ]
    },
    {
        normalized: "せいよう",
        originals: [
            "西洋",
            "静養",
        ]
    },
    {
        normalized: "せいよく",
        originals: [
            "性欲",
        ]
    },
    {
        normalized: "せいりつ",
        originals: [
            "成立",
            "税率",
        ]
    },
    {
        normalized: "せいれい",
        originals: [
            "政令",
            "精霊",
        ]
    },
    {
        normalized: "せいれき",
        originals: [
            "西暦",
        ]
    },
    {
        normalized: "せいれつ",
        originals: [
            "整列",
        ]
    },
    {
        normalized: "せいろん",
        originals: [
            "正論",
        ]
    },
    {
        normalized: "せおよき",
        originals: [
            "背泳ぎ",
        ]
    },
    {
        normalized: "せかんと",
        originals: [
            "セカンド",
        ]
    },
    {
        normalized: "せきさい",
        originals: [
            "積載",
            "石材",
        ]
    },
    {
        normalized: "せきさん",
        originals: [
            "積算",
        ]
    },
    {
        normalized: "せきしよ",
        originals: [
            "関所",
        ]
    },
    {
        normalized: "せきすい",
        originals: [
            "脊髄",
        ]
    },
    {
        normalized: "せきせつ",
        originals: [
            "積雪",
        ]
    },
    {
        normalized: "せきそう",
        originals: [
            "石像",
            "石造",
        ]
    },
    {
        normalized: "せきたん",
        originals: [
            "石炭",
        ]
    },
    {
        normalized: "せきつい",
        originals: [
            "脊椎",
        ]
    },
    {
        normalized: "せきとう",
        originals: [
            "赤道",
        ]
    },
    {
        normalized: "せきとめ",
        originals: [
            "せき止め",
        ]
    },
    {
        normalized: "せきとり",
        originals: [
            "関取",
        ]
    },
    {
        normalized: "せきにん",
        originals: [
            "責任",
        ]
    },
    {
        normalized: "せきはい",
        originals: [
            "惜敗",
        ]
    },
    {
        normalized: "せきはん",
        originals: [
            "赤飯",
        ]
    },
    {
        normalized: "せきめん",
        originals: [
            "赤面",
        ]
    },
    {
        normalized: "せくはら",
        originals: [
            "セクハラ",
        ]
    },
    {
        normalized: "せしよう",
        originals: [
            "施錠",
        ]
    },
    {
        normalized: "せせらき",
        originals: [
            "せせらぎ",
        ]
    },
    {
        normalized: "せつえい",
        originals: [
            "設営",
        ]
    },
    {
        normalized: "せつえん",
        originals: [
            "絶縁",
        ]
    },
    {
        normalized: "せつかい",
        originals: [
            "切開",
            "石灰",
        ]
    },
    {
        normalized: "せつかち",
        originals: [
            "せっかち",
        ]
    },
    {
        normalized: "せつきん",
        originals: [
            "接近",
        ]
    },
    {
        normalized: "せつくす",
        originals: [
            "セックス",
        ]
    },
    {
        normalized: "せつけい",
        originals: [
            "設計",
            "絶景",
        ]
    },
    {
        normalized: "せつけん",
        originals: [
            "接見",
            "石鹸",
            "ゼッケン",
        ]
    },
    {
        normalized: "せつこう",
        originals: [
            "石膏",
            "絶交",
            "絶好",
        ]
    },
    {
        normalized: "せつこつ",
        originals: [
            "接骨",
        ]
    },
    {
        normalized: "せつさん",
        originals: [
            "絶賛",
        ]
    },
    {
        normalized: "せつしゆ",
        originals: [
            "摂取",
        ]
    },
    {
        normalized: "せつしよ",
        originals: [
            "切除",
        ]
    },
    {
        normalized: "せつすい",
        originals: [
            "節水",
        ]
    },
    {
        normalized: "せつせい",
        originals: [
            "節制",
            "絶世",
        ]
    },
    {
        normalized: "せつせん",
        originals: [
            "接戦",
        ]
    },
    {
        normalized: "せつそう",
        originals: [
            "節操",
        ]
    },
    {
        normalized: "せつそく",
        originals: [
            "接続",
        ]
    },
    {
        normalized: "せつたい",
        originals: [
            "接待",
            "絶対",
        ]
    },
    {
        normalized: "せつたん",
        originals: [
            "切断",
        ]
    },
    {
        normalized: "せつてい",
        originals: [
            "設定",
        ]
    },
    {
        normalized: "せつてん",
        originals: [
            "接点",
            "節電",
        ]
    },
    {
        normalized: "せつとう",
        originals: [
            "窃盗",
        ]
    },
    {
        normalized: "せつとく",
        originals: [
            "説得",
        ]
    },
    {
        normalized: "せつはく",
        originals: [
            "切迫",
        ]
    },
    {
        normalized: "せつはん",
        originals: [
            "折半",
            "絶版",
        ]
    },
    {
        normalized: "せつひん",
        originals: [
            "絶品",
        ]
    },
    {
        normalized: "せつふく",
        originals: [
            "切腹",
        ]
    },
    {
        normalized: "せつふん",
        originals: [
            "接吻",
            "節分",
        ]
    },
    {
        normalized: "せつへき",
        originals: [
            "絶壁",
        ]
    },
    {
        normalized: "せつほう",
        originals: [
            "切望",
            "絶望",
        ]
    },
    {
        normalized: "せつめい",
        originals: [
            "説明",
            "絶命",
        ]
    },
    {
        normalized: "せつめつ",
        originals: [
            "絶滅",
        ]
    },
    {
        normalized: "せつもん",
        originals: [
            "設問",
        ]
    },
    {
        normalized: "せつやく",
        originals: [
            "節約",
        ]
    },
    {
        normalized: "せつりつ",
        originals: [
            "設立",
        ]
    },
    {
        normalized: "せときわ",
        originals: [
            "瀬戸際",
        ]
    },
    {
        normalized: "せねこん",
        originals: [
            "ゼネコン",
        ]
    },
    {
        normalized: "せみふろ",
        originals: [
            "セミプロ",
        ]
    },
    {
        normalized: "せめんと",
        originals: [
            "セメント",
        ]
    },
    {
        normalized: "せもたれ",
        originals: [
            "背もたれ",
        ]
    },
    {
        normalized: "せらちん",
        originals: [
            "ゼラチン",
        ]
    },
    {
        normalized: "せれくと",
        originals: [
            "セレクト",
        ]
    },
    {
        normalized: "せんあく",
        originals: [
            "善悪",
        ]
    },
    {
        normalized: "せんいき",
        originals: [
            "全域",
        ]
    },
    {
        normalized: "せんいん",
        originals: [
            "船員",
            "全員",
        ]
    },
    {
        normalized: "せんかい",
        originals: [
            "全壊",
            "全快",
            "全開",
            "前回",
        ]
    },
    {
        normalized: "せんかく",
        originals: [
            "全角",
            "全額",
        ]
    },
    {
        normalized: "せんかん",
        originals: [
            "洗顔",
            "全巻",
        ]
    },
    {
        normalized: "せんきよ",
        originals: [
            "占拠",
            "選挙",
            "鮮魚",
        ]
    },
    {
        normalized: "せんきり",
        originals: [
            "せん切り",
        ]
    },
    {
        normalized: "せんくつ",
        originals: [
            "前屈",
        ]
    },
    {
        normalized: "せんけつ",
        originals: [
            "先月",
        ]
    },
    {
        normalized: "せんけん",
        originals: [
            "先見",
            "宣言",
            "全権",
            "全県",
        ]
    },
    {
        normalized: "せんこう",
        originals: [
            "先攻",
            "先行",
            "専攻",
            "線香",
            "選考",
            "全校",
            "前項",
        ]
    },
    {
        normalized: "せんこく",
        originals: [
            "宣告",
            "戦国",
            "全国",
        ]
    },
    {
        normalized: "せんさい",
        originals: [
            "繊細",
            "洗剤",
            "潜在",
            "前菜",
        ]
    },
    {
        normalized: "せんさく",
        originals: [
            "前作",
        ]
    },
    {
        normalized: "せんしつ",
        originals: [
            "船室",
            "先日",
            "全室",
            "前日",
        ]
    },
    {
        normalized: "せんしや",
        originals: [
            "戦車",
            "洗車",
            "全社",
            "前者",
        ]
    },
    {
        normalized: "せんしゆ",
        originals: [
            "先取",
            "船主",
            "選手",
        ]
    },
    {
        normalized: "せんしん",
        originals: [
            "先陣",
            "全身",
            "前身",
            "前進",
        ]
    },
    {
        normalized: "せんすい",
        originals: [
            "潜水",
        ]
    },
    {
        normalized: "せんせい",
        originals: [
            "先制",
            "先生",
            "全盛",
            "前世",
        ]
    },
    {
        normalized: "せんせん",
        originals: [
            "戦前",
            "前線",
            "善戦",
        ]
    },
    {
        normalized: "せんそう",
        originals: [
            "戦争",
            "前奏",
        ]
    },
    {
        normalized: "せんそく",
        originals: [
            "専属",
            "全速",
            "喘息",
        ]
    },
    {
        normalized: "せんそん",
        originals: [
            "全損",
        ]
    },
    {
        normalized: "せんたい",
        originals: [
            "戦隊",
            "船体",
            "先代",
        ]
    },
    {
        normalized: "せんたく",
        originals: [
            "洗濯",
            "選択",
        ]
    },
    {
        normalized: "せんたま",
        originals: [
            "善玉",
        ]
    },
    {
        normalized: "せんたん",
        originals: [
            "先端",
        ]
    },
    {
        normalized: "せんちや",
        originals: [
            "煎茶",
        ]
    },
    {
        normalized: "せんてい",
        originals: [
            "選定",
            "前提",
        ]
    },
    {
        normalized: "せんてん",
        originals: [
            "宣伝",
            "全店",
            "前転",
        ]
    },
    {
        normalized: "せんとう",
        originals: [
            "先頭",
            "戦闘",
            "銭湯",
            "先導",
            "船頭",
        ]
    },
    {
        normalized: "せんない",
        originals: [
            "船内",
        ]
    },
    {
        normalized: "せんにち",
        originals: [
            "全日",
        ]
    },
    {
        normalized: "せんにん",
        originals: [
            "仙人",
            "専任",
            "選任",
            "前任",
        ]
    },
    {
        normalized: "せんぬき",
        originals: [
            "栓抜き",
        ]
    },
    {
        normalized: "せんねん",
        originals: [
            "専念",
            "前年",
        ]
    },
    {
        normalized: "せんのう",
        originals: [
            "洗脳",
            "全能",
        ]
    },
    {
        normalized: "せんはい",
        originals: [
            "専売",
            "先輩",
            "全廃",
            "全敗",
        ]
    },
    {
        normalized: "せんはく",
        originals: [
            "船舶",
        ]
    },
    {
        normalized: "せんはつ",
        originals: [
            "選抜",
            "先発",
            "洗髪",
        ]
    },
    {
        normalized: "せんはん",
        originals: [
            "戦犯",
            "前半",
            "全般",
        ]
    },
    {
        normalized: "せんひき",
        originals: [
            "線引き",
        ]
    },
    {
        normalized: "せんひん",
        originals: [
            "全品",
        ]
    },
    {
        normalized: "せんふう",
        originals: [
            "旋風",
        ]
    },
    {
        normalized: "せんふく",
        originals: [
            "潜伏",
        ]
    },
    {
        normalized: "せんふん",
        originals: [
            "全文",
        ]
    },
    {
        normalized: "せんへい",
        originals: [
            "せんべい",
            "全米",
        ]
    },
    {
        normalized: "せんへつ",
        originals: [
            "選別",
            "餞別",
        ]
    },
    {
        normalized: "せんへん",
        originals: [
            "全編",
            "前編",
        ]
    },
    {
        normalized: "せんほう",
        originals: [
            "羨望",
            "先方",
            "戦法",
            "全貌",
            "前方",
        ]
    },
    {
        normalized: "せんほつ",
        originals: [
            "戦没",
        ]
    },
    {
        normalized: "せんまい",
        originals: [
            "洗米",
            "ぜんまい",
        ]
    },
    {
        normalized: "せんめつ",
        originals: [
            "全滅",
        ]
    },
    {
        normalized: "せんめん",
        originals: [
            "洗面",
            "前面",
        ]
    },
    {
        normalized: "せんもん",
        originals: [
            "専門",
            "全問",
        ]
    },
    {
        normalized: "せんやく",
        originals: [
            "先約",
        ]
    },
    {
        normalized: "せんゆう",
        originals: [
            "戦友",
        ]
    },
    {
        normalized: "せんよう",
        originals: [
            "専用",
            "全容",
        ]
    },
    {
        normalized: "せんらん",
        originals: [
            "戦乱",
        ]
    },
    {
        normalized: "せんりつ",
        originals: [
            "戦慄",
        ]
    },
    {
        normalized: "せんりん",
        originals: [
            "前輪",
        ]
    },
    {
        normalized: "せんれい",
        originals: [
            "洗礼",
            "前例",
        ]
    },
    {
        normalized: "せんれき",
        originals: [
            "戦歴",
            "前歴",
        ]
    },
    {
        normalized: "せんれつ",
        originals: [
            "前列",
        ]
    },
    {
        normalized: "せんれん",
        originals: [
            "洗練",
        ]
    },
    {
        normalized: "そういん",
        originals: [
            "総員",
            "増員",
        ]
    },
    {
        normalized: "そうおう",
        originals: [
            "相応",
        ]
    },
    {
        normalized: "そうおん",
        originals: [
            "騒音",
        ]
    },
    {
        normalized: "そうかい",
        originals: [
            "壮快",
            "爽快",
            "総会",
        ]
    },
    {
        normalized: "そうかく",
        originals: [
            "総額",
            "増額",
        ]
    },
    {
        normalized: "そうかん",
        originals: [
            "創刊",
            "送還",
            "増刊",
        ]
    },
    {
        normalized: "そうきん",
        originals: [
            "送金",
            "ぞうきん",
        ]
    },
    {
        normalized: "そうくう",
        originals: [
            "遭遇",
        ]
    },
    {
        normalized: "そうけい",
        originals: [
            "総計",
            "送迎",
            "造形",
        ]
    },
    {
        normalized: "そうけん",
        originals: [
            "送検",
            "草原",
            "増減",
        ]
    },
    {
        normalized: "そうこう",
        originals: [
            "走行",
            "総合",
        ]
    },
    {
        normalized: "そうさい",
        originals: [
            "相殺",
            "葬祭",
        ]
    },
    {
        normalized: "そうさく",
        originals: [
            "創作",
        ]
    },
    {
        normalized: "そうさつ",
        originals: [
            "相殺",
        ]
    },
    {
        normalized: "そうさん",
        originals: [
            "早産",
            "増産",
        ]
    },
    {
        normalized: "そうしき",
        originals: [
            "葬式",
        ]
    },
    {
        normalized: "そうしつ",
        originals: [
            "喪失",
        ]
    },
    {
        normalized: "そうしや",
        originals: [
            "走者",
        ]
    },
    {
        normalized: "そうしよ",
        originals: [
            "蔵書",
        ]
    },
    {
        normalized: "そうしん",
        originals: [
            "送信",
        ]
    },
    {
        normalized: "そうすい",
        originals: [
            "増水",
            "雑炊",
        ]
    },
    {
        normalized: "そうすう",
        originals: [
            "総数",
        ]
    },
    {
        normalized: "そうせい",
        originals: [
            "総勢",
            "増税",
        ]
    },
    {
        normalized: "そうせつ",
        originals: [
            "壮絶",
            "増設",
        ]
    },
    {
        normalized: "そうせん",
        originals: [
            "造船",
        ]
    },
    {
        normalized: "そうそう",
        originals: [
            "そうそう",
            "創造",
            "想像",
        ]
    },
    {
        normalized: "そうそく",
        originals: [
            "相続",
        ]
    },
    {
        normalized: "そうたい",
        originals: [
            "早退",
            "相対",
            "増大",
        ]
    },
    {
        normalized: "そうたち",
        originals: [
            "総立ち",
        ]
    },
    {
        normalized: "そうたつ",
        originals: [
            "争奪",
        ]
    },
    {
        normalized: "そうたん",
        originals: [
            "相談",
        ]
    },
    {
        normalized: "そうちく",
        originals: [
            "増築",
        ]
    },
    {
        normalized: "そうてい",
        originals: [
            "贈呈",
        ]
    },
    {
        normalized: "そうてん",
        originals: [
            "争点",
            "送電",
        ]
    },
    {
        normalized: "そうとう",
        originals: [
            "相当",
            "騒動",
        ]
    },
    {
        normalized: "そうなめ",
        originals: [
            "総なめ",
        ]
    },
    {
        normalized: "そうなん",
        originals: [
            "遭難",
        ]
    },
    {
        normalized: "そうはく",
        originals: [
            "蒼白",
        ]
    },
    {
        normalized: "そうふう",
        originals: [
            "送風",
        ]
    },
    {
        normalized: "そうふく",
        originals: [
            "増幅",
        ]
    },
    {
        normalized: "そうへつ",
        originals: [
            "送別",
        ]
    },
    {
        normalized: "そうほう",
        originals: [
            "双方",
        ]
    },
    {
        normalized: "そうめい",
        originals: [
            "聡明",
        ]
    },
    {
        normalized: "そうめん",
        originals: [
            "そうめん",
        ]
    },
    {
        normalized: "そうらん",
        originals: [
            "騒乱",
        ]
    },
    {
        normalized: "そうりつ",
        originals: [
            "創立",
        ]
    },
    {
        normalized: "そうりよ",
        originals: [
            "僧侶",
        ]
    },
    {
        normalized: "そうるい",
        originals: [
            "走塁",
        ]
    },
    {
        normalized: "そうわい",
        originals: [
            "贈賄",
        ]
    },
    {
        normalized: "そえもの",
        originals: [
            "添え物",
        ]
    },
    {
        normalized: "そくから",
        originals: [
            "続柄",
        ]
    },
    {
        normalized: "そくしつ",
        originals: [
            "側室",
            "即日",
        ]
    },
    {
        normalized: "そくしん",
        originals: [
            "促進",
        ]
    },
    {
        normalized: "そくせき",
        originals: [
            "即席",
            "足跡",
        ]
    },
    {
        normalized: "そくせつ",
        originals: [
            "俗説",
        ]
    },
    {
        normalized: "そくたつ",
        originals: [
            "速達",
        ]
    },
    {
        normalized: "そくたん",
        originals: [
            "即断",
        ]
    },
    {
        normalized: "そくてん",
        originals: [
            "側転",
        ]
    },
    {
        normalized: "そくとう",
        originals: [
            "即答",
            "続投",
        ]
    },
    {
        normalized: "そくとく",
        originals: [
            "速読",
        ]
    },
    {
        normalized: "そくはく",
        originals: [
            "束縛",
        ]
    },
    {
        normalized: "そくはつ",
        originals: [
            "続発",
        ]
    },
    {
        normalized: "そくふつ",
        originals: [
            "俗物",
        ]
    },
    {
        normalized: "そくへん",
        originals: [
            "続編",
        ]
    },
    {
        normalized: "そくほう",
        originals: [
            "速報",
            "続報",
        ]
    },
    {
        normalized: "そくめん",
        originals: [
            "側面",
        ]
    },
    {
        normalized: "そこあけ",
        originals: [
            "底上げ",
        ]
    },
    {
        normalized: "そこなし",
        originals: [
            "底なし",
        ]
    },
    {
        normalized: "そこぬけ",
        originals: [
            "底抜け",
        ]
    },
    {
        normalized: "そしやく",
        originals: [
            "咀嚼",
        ]
    },
    {
        normalized: "そしよう",
        originals: [
            "訴訟",
        ]
    },
    {
        normalized: "そしよく",
        originals: [
            "粗食",
        ]
    },
    {
        normalized: "そつえん",
        originals: [
            "卒園",
        ]
    },
    {
        normalized: "そつきん",
        originals: [
            "側近",
            "即金",
        ]
    },
    {
        normalized: "そつけつ",
        originals: [
            "即決",
        ]
    },
    {
        normalized: "そつこう",
        originals: [
            "側溝",
            "即効",
            "速効",
            "速攻",
            "続行",
        ]
    },
    {
        normalized: "そつこく",
        originals: [
            "即刻",
        ]
    },
    {
        normalized: "そつとう",
        originals: [
            "卒倒",
        ]
    },
    {
        normalized: "そつろん",
        originals: [
            "卒論",
        ]
    },
    {
        normalized: "そてくち",
        originals: [
            "そで口",
        ]
    },
    {
        normalized: "そとかへ",
        originals: [
            "外壁",
        ]
    },
    {
        normalized: "そとかわ",
        originals: [
            "外側",
        ]
    },
    {
        normalized: "そとつら",
        originals: [
            "外面",
        ]
    },
    {
        normalized: "そとほり",
        originals: [
            "外堀",
        ]
    },
    {
        normalized: "そとむき",
        originals: [
            "外向き",
        ]
    },
    {
        normalized: "そとわく",
        originals: [
            "外枠",
        ]
    },
    {
        normalized: "そはかす",
        originals: [
            "そばかす",
        ]
    },
    {
        normalized: "そはつゆ",
        originals: [
            "そばつゆ",
        ]
    },
    {
        normalized: "そふらの",
        originals: [
            "ソプラノ",
        ]
    },
    {
        normalized: "そむりえ",
        originals: [
            "ソムリエ",
        ]
    },
    {
        normalized: "そめもの",
        originals: [
            "染め物",
        ]
    },
    {
        normalized: "そもそも",
        originals: [
            "そもそも",
        ]
    },
    {
        normalized: "そよかせ",
        originals: [
            "そよ風",
        ]
    },
    {
        normalized: "そらいろ",
        originals: [
            "空色",
        ]
    },
    {
        normalized: "そらまめ",
        originals: [
            "空豆",
        ]
    },
    {
        normalized: "そらみみ",
        originals: [
            "空耳",
        ]
    },
    {
        normalized: "それそれ",
        originals: [
            "それぞれ",
        ]
    },
    {
        normalized: "そろはん",
        originals: [
            "そろばん",
        ]
    },
    {
        normalized: "そんかい",
        originals: [
            "損害",
        ]
    },
    {
        normalized: "そんけい",
        originals: [
            "尊敬",
        ]
    },
    {
        normalized: "そんけん",
        originals: [
            "尊厳",
        ]
    },
    {
        normalized: "そんしつ",
        originals: [
            "損失",
        ]
    },
    {
        normalized: "そんそく",
        originals: [
            "存続",
        ]
    },
    {
        normalized: "そんたく",
        originals: [
            "忖度",
        ]
    },
    {
        normalized: "そんとく",
        originals: [
            "損得",
        ]
    },
    {
        normalized: "そんほう",
        originals: [
            "存亡",
        ]
    },
    {
        normalized: "そんみん",
        originals: [
            "村民",
        ]
    },
    {
        normalized: "そんめい",
        originals: [
            "存命",
        ]
    },
    {
        normalized: "たいあつ",
        originals: [
            "耐圧",
        ]
    },
    {
        normalized: "たいあん",
        originals: [
            "大安",
            "代案",
        ]
    },
    {
        normalized: "たいいく",
        originals: [
            "体育",
        ]
    },
    {
        normalized: "たいいん",
        originals: [
            "退院",
            "隊員",
        ]
    },
    {
        normalized: "たいえき",
        originals: [
            "体液",
        ]
    },
    {
        normalized: "たいおう",
        originals: [
            "対応",
        ]
    },
    {
        normalized: "たいおん",
        originals: [
            "体温",
        ]
    },
    {
        normalized: "たいかい",
        originals: [
            "大会",
            "大海",
            "退会",
            "大概",
        ]
    },
    {
        normalized: "たいかく",
        originals: [
            "体格",
            "対角",
            "退学",
            "大学",
        ]
    },
    {
        normalized: "たいかん",
        originals: [
            "体感",
            "耐寒",
            "対岸",
            "大寒",
        ]
    },
    {
        normalized: "たいきち",
        originals: [
            "大吉",
        ]
    },
    {
        normalized: "たいきよ",
        originals: [
            "退去",
        ]
    },
    {
        normalized: "たいきん",
        originals: [
            "大金",
            "退勤",
            "代金",
        ]
    },
    {
        normalized: "たいくう",
        originals: [
            "待遇",
        ]
    },
    {
        normalized: "たいくつ",
        originals: [
            "退屈",
        ]
    },
    {
        normalized: "たいくん",
        originals: [
            "大群",
            "大軍",
        ]
    },
    {
        normalized: "たいけい",
        originals: [
            "体型",
            "体形",
            "体系",
            "台形",
        ]
    },
    {
        normalized: "たいけつ",
        originals: [
            "対決",
        ]
    },
    {
        normalized: "たいけん",
        originals: [
            "体験",
        ]
    },
    {
        normalized: "たいこう",
        originals: [
            "対向",
            "対抗",
            "代行",
        ]
    },
    {
        normalized: "たいこん",
        originals: [
            "大根",
        ]
    },
    {
        normalized: "たいさい",
        originals: [
            "大罪",
            "滞在",
            "題材",
        ]
    },
    {
        normalized: "たいさく",
        originals: [
            "大作",
            "対策",
        ]
    },
    {
        normalized: "たいさん",
        originals: [
            "退散",
        ]
    },
    {
        normalized: "たいしつ",
        originals: [
            "体質",
            "退室",
        ]
    },
    {
        normalized: "たいしや",
        originals: [
            "代謝",
            "退社",
            "台車",
            "大蛇",
        ]
    },
    {
        normalized: "たいしよ",
        originals: [
            "対処",
            "退所",
        ]
    },
    {
        normalized: "たいしん",
        originals: [
            "退陣",
            "大臣",
        ]
    },
    {
        normalized: "たいせい",
        originals: [
            "体制",
            "体勢",
            "態勢",
            "耐性",
        ]
    },
    {
        normalized: "たいせき",
        originals: [
            "体積",
            "退席",
        ]
    },
    {
        normalized: "たいせん",
        originals: [
            "大戦",
            "対戦",
        ]
    },
    {
        normalized: "たいそう",
        originals: [
            "体操",
            "代走",
        ]
    },
    {
        normalized: "たいそつ",
        originals: [
            "大卒",
        ]
    },
    {
        normalized: "たいたい",
        originals: [
            "代替",
            "大体",
            "だいだい",
        ]
    },
    {
        normalized: "たいたん",
        originals: [
            "対談",
            "退団",
        ]
    },
    {
        normalized: "たいてき",
        originals: [
            "大敵",
        ]
    },
    {
        normalized: "たいとう",
        originals: [
            "台頭",
            "胎動",
        ]
    },
    {
        normalized: "たいとる",
        originals: [
            "タイトル",
        ]
    },
    {
        normalized: "たいない",
        originals: [
            "胎内",
            "体内",
        ]
    },
    {
        normalized: "たいなし",
        originals: [
            "台なし",
        ]
    },
    {
        normalized: "たいにん",
        originals: [
            "退任",
        ]
    },
    {
        normalized: "たいねつ",
        originals: [
            "耐熱",
        ]
    },
    {
        normalized: "たいのう",
        originals: [
            "滞納",
            "大脳",
        ]
    },
    {
        normalized: "たいはい",
        originals: [
            "大敗",
        ]
    },
    {
        normalized: "たいはつ",
        originals: [
            "体罰",
        ]
    },
    {
        normalized: "たいはん",
        originals: [
            "大半",
            "胎盤",
        ]
    },
    {
        normalized: "たいひん",
        originals: [
            "代品",
        ]
    },
    {
        normalized: "たいふう",
        originals: [
            "台風",
        ]
    },
    {
        normalized: "たいふく",
        originals: [
            "大福",
        ]
    },
    {
        normalized: "たいふつ",
        originals: [
            "大仏",
        ]
    },
    {
        normalized: "たいへん",
        originals: [
            "代弁",
            "大便",
        ]
    },
    {
        normalized: "たいほう",
        originals: [
            "大砲",
            "待望",
        ]
    },
    {
        normalized: "たいほく",
        originals: [
            "大木",
        ]
    },
    {
        normalized: "たいほん",
        originals: [
            "台本",
        ]
    },
    {
        normalized: "たいまつ",
        originals: [
            "たいまつ",
        ]
    },
    {
        normalized: "たいまん",
        originals: [
            "怠慢",
        ]
    },
    {
        normalized: "たいめい",
        originals: [
            "題名",
        ]
    },
    {
        normalized: "たいめん",
        originals: [
            "体面",
            "対面",
        ]
    },
    {
        normalized: "たいもう",
        originals: [
            "体毛",
        ]
    },
    {
        normalized: "たいもく",
        originals: [
            "題目",
        ]
    },
    {
        normalized: "たいやき",
        originals: [
            "たい焼き",
        ]
    },
    {
        normalized: "たいやく",
        originals: [
            "大役",
            "代役",
        ]
    },
    {
        normalized: "たいやる",
        originals: [
            "ダイヤル",
        ]
    },
    {
        normalized: "たいよう",
        originals: [
            "太陽",
            "代用",
        ]
    },
    {
        normalized: "たいりく",
        originals: [
            "大陸",
        ]
    },
    {
        normalized: "たいりつ",
        originals: [
            "対立",
        ]
    },
    {
        normalized: "たいりん",
        originals: [
            "大輪",
        ]
    },
    {
        normalized: "たいれつ",
        originals: [
            "隊列",
        ]
    },
    {
        normalized: "たいわん",
        originals: [
            "台湾",
        ]
    },
    {
        normalized: "たかしお",
        originals: [
            "高潮",
        ]
    },
    {
        normalized: "たかたい",
        originals: [
            "高台",
        ]
    },
    {
        normalized: "たかとひ",
        originals: [
            "高跳び",
        ]
    },
    {
        normalized: "たかなみ",
        originals: [
            "高波",
        ]
    },
    {
        normalized: "たかまり",
        originals: [
            "高まり",
        ]
    },
    {
        normalized: "たきあい",
        originals: [
            "抱き合い",
        ]
    },
    {
        normalized: "たきこみ",
        originals: [
            "炊き込み",
        ]
    },
    {
        normalized: "たきたし",
        originals: [
            "炊き出し",
        ]
    },
    {
        normalized: "たきたて",
        originals: [
            "炊きたて",
        ]
    },
    {
        normalized: "たきつほ",
        originals: [
            "滝つぼ",
        ]
    },
    {
        normalized: "たきゆう",
        originals: [
            "打球",
        ]
    },
    {
        normalized: "たきよう",
        originals: [
            "妥協",
        ]
    },
    {
        normalized: "たくあん",
        originals: [
            "たくあん",
        ]
    },
    {
        normalized: "たくえつ",
        originals: [
            "卓越",
        ]
    },
    {
        normalized: "たくおん",
        originals: [
            "濁音",
        ]
    },
    {
        normalized: "たくてん",
        originals: [
            "濁点",
        ]
    },
    {
        normalized: "たくはい",
        originals: [
            "宅配",
        ]
    },
    {
        normalized: "たくわえ",
        originals: [
            "蓄え",
        ]
    },
    {
        normalized: "たくわん",
        originals: [
            "沢庵",
        ]
    },
    {
        normalized: "たけうま",
        originals: [
            "竹馬",
        ]
    },
    {
        normalized: "たけさお",
        originals: [
            "竹ざお",
        ]
    },
    {
        normalized: "たけなわ",
        originals: [
            "たけなわ",
        ]
    },
    {
        normalized: "たけのこ",
        originals: [
            "竹の子",
        ]
    },
    {
        normalized: "たけやふ",
        originals: [
            "竹やぶ",
        ]
    },
    {
        normalized: "たけやり",
        originals: [
            "竹やり",
        ]
    },
    {
        normalized: "たこあけ",
        originals: [
            "たこ上げ",
        ]
    },
    {
        normalized: "たこあし",
        originals: [
            "たこ足",
        ]
    },
    {
        normalized: "たこいと",
        originals: [
            "たこ糸",
        ]
    },
    {
        normalized: "たこやき",
        originals: [
            "たこ焼き",
        ]
    },
    {
        normalized: "たさいふ",
        originals: [
            "太宰府",
        ]
    },
    {
        normalized: "たしいれ",
        originals: [
            "出し入れ",
        ]
    },
    {
        normalized: "たしさん",
        originals: [
            "足し算",
        ]
    },
    {
        normalized: "たししる",
        originals: [
            "だし汁",
        ]
    },
    {
        normalized: "たしなみ",
        originals: [
            "たしなみ",
        ]
    },
    {
        normalized: "たしもの",
        originals: [
            "出し物",
        ]
    },
    {
        normalized: "たしやれ",
        originals: [
            "駄じゃれ",
        ]
    },
    {
        normalized: "たしゆう",
        originals: [
            "多重",
        ]
    },
    {
        normalized: "たしゆん",
        originals: [
            "打順",
        ]
    },
    {
        normalized: "たしよう",
        originals: [
            "多少",
        ]
    },
    {
        normalized: "たそかれ",
        originals: [
            "たそがれ",
        ]
    },
    {
        normalized: "たたいま",
        originals: [
            "ただ今",
        ]
    },
    {
        normalized: "たたかい",
        originals: [
            "たたかい",
            "戦い",
            "闘い",
        ]
    },
    {
        normalized: "たたこと",
        originals: [
            "ただ事",
        ]
    },
    {
        normalized: "たたつこ",
        originals: [
            "だだっ子",
        ]
    },
    {
        normalized: "たたのり",
        originals: [
            "ただ乗り",
        ]
    },
    {
        normalized: "たたみや",
        originals: [
            "畳屋",
        ]
    },
    {
        normalized: "たたもの",
        originals: [
            "ただ者",
        ]
    },
    {
        normalized: "たちあい",
        originals: [
            "立ち会い",
            "立ち合い",
        ]
    },
    {
        normalized: "たちあけ",
        originals: [
            "立ち上げ",
        ]
    },
    {
        normalized: "たちいり",
        originals: [
            "立ち入り",
        ]
    },
    {
        normalized: "たちうお",
        originals: [
            "たちうお",
        ]
    },
    {
        normalized: "たちうち",
        originals: [
            "太刀打ち",
        ]
    },
    {
        normalized: "たちかた",
        originals: [
            "立ち方",
        ]
    },
    {
        normalized: "たちきき",
        originals: [
            "立ち聞き",
        ]
    },
    {
        normalized: "たちくい",
        originals: [
            "立ち食い",
        ]
    },
    {
        normalized: "たちのき",
        originals: [
            "立ちのき",
        ]
    },
    {
        normalized: "たちよう",
        originals: [
            "だちょう",
        ]
    },
    {
        normalized: "たちよみ",
        originals: [
            "立ち読み",
        ]
    },
    {
        normalized: "たつかい",
        originals: [
            "奪回",
            "脱会",
        ]
    },
    {
        normalized: "たつくる",
        originals: [
            "タックル",
        ]
    },
    {
        normalized: "たつこく",
        originals: [
            "脱穀",
            "脱獄",
        ]
    },
    {
        normalized: "たつさら",
        originals: [
            "脱サラ",
        ]
    },
    {
        normalized: "たつしゆ",
        originals: [
            "ダッシュ",
            "奪取",
        ]
    },
    {
        normalized: "たつしん",
        originals: [
            "達人",
        ]
    },
    {
        normalized: "たつすい",
        originals: [
            "脱水",
        ]
    },
    {
        normalized: "たつせい",
        originals: [
            "達成",
            "脱税",
        ]
    },
    {
        normalized: "たつせん",
        originals: [
            "脱線",
        ]
    },
    {
        normalized: "たつそう",
        originals: [
            "脱走",
        ]
    },
    {
        normalized: "たつたい",
        originals: [
            "脱退",
        ]
    },
    {
        normalized: "たつひつ",
        originals: [
            "達筆",
        ]
    },
    {
        normalized: "たつふん",
        originals: [
            "脱糞",
        ]
    },
    {
        normalized: "たつほう",
        originals: [
            "脱帽",
        ]
    },
    {
        normalized: "たつまき",
        originals: [
            "竜巻",
        ]
    },
    {
        normalized: "たつもう",
        originals: [
            "脱毛",
        ]
    },
    {
        normalized: "たつらく",
        originals: [
            "脱落",
        ]
    },
    {
        normalized: "たつりん",
        originals: [
            "脱輪",
        ]
    },
    {
        normalized: "たてうり",
        originals: [
            "建て売り",
        ]
    },
    {
        normalized: "たてかえ",
        originals: [
            "建て替え",
            "立て替え",
        ]
    },
    {
        normalized: "たてかき",
        originals: [
            "縦書き",
        ]
    },
    {
        normalized: "たてかけ",
        originals: [
            "立て掛け",
        ]
    },
    {
        normalized: "たてかみ",
        originals: [
            "たてがみ",
        ]
    },
    {
        normalized: "たてせん",
        originals: [
            "縦線",
        ]
    },
    {
        normalized: "たてつけ",
        originals: [
            "建て付け",
            "立て付け",
        ]
    },
    {
        normalized: "たてふえ",
        originals: [
            "縦笛",
        ]
    },
    {
        normalized: "たてふた",
        originals: [
            "立て札",
        ]
    },
    {
        normalized: "たてまえ",
        originals: [
            "建て前",
        ]
    },
    {
        normalized: "たてまき",
        originals: [
            "だて巻き",
        ]
    },
    {
        normalized: "たてもの",
        originals: [
            "建物",
        ]
    },
    {
        normalized: "たてよこ",
        originals: [
            "縦横",
        ]
    },
    {
        normalized: "たなあけ",
        originals: [
            "棚上げ",
        ]
    },
    {
        normalized: "たなはた",
        originals: [
            "七夕",
        ]
    },
    {
        normalized: "たなほた",
        originals: [
            "棚ぼた",
        ]
    },
    {
        normalized: "たにそこ",
        originals: [
            "谷底",
        ]
    },
    {
        normalized: "たねうま",
        originals: [
            "種馬",
        ]
    },
    {
        normalized: "たねつけ",
        originals: [
            "種付け",
        ]
    },
    {
        normalized: "たねまき",
        originals: [
            "種まき",
        ]
    },
    {
        normalized: "たのしみ",
        originals: [
            "楽しみ",
        ]
    },
    {
        normalized: "たひさき",
        originals: [
            "旅先",
        ]
    },
    {
        normalized: "たひたち",
        originals: [
            "旅立ち",
        ]
    },
    {
        normalized: "たひにん",
        originals: [
            "旅人",
        ]
    },
    {
        normalized: "たひひと",
        originals: [
            "旅人",
        ]
    },
    {
        normalized: "たひんく",
        originals: [
            "ダビング",
        ]
    },
    {
        normalized: "たふるす",
        originals: [
            "ダブルス",
        ]
    },
    {
        normalized: "たへころ",
        originals: [
            "食べごろ",
        ]
    },
    {
        normalized: "たへもの",
        originals: [
            "食べ物",
        ]
    },
    {
        normalized: "たましい",
        originals: [
            "魂",
        ]
    },
    {
        normalized: "たまつき",
        originals: [
            "玉突き",
        ]
    },
    {
        normalized: "たまねき",
        originals: [
            "玉ねぎ",
        ]
    },
    {
        normalized: "たまのり",
        originals: [
            "玉乗り",
        ]
    },
    {
        normalized: "たまむし",
        originals: [
            "玉虫",
        ]
    },
    {
        normalized: "たまりは",
        originals: [
            "たまり場",
        ]
    },
    {
        normalized: "たみこえ",
        originals: [
            "だみ声",
        ]
    },
    {
        normalized: "ためいき",
        originals: [
            "ため息",
        ]
    },
    {
        normalized: "ためいけ",
        originals: [
            "ため池",
        ]
    },
    {
        normalized: "ためくち",
        originals: [
            "ため口",
        ]
    },
    {
        normalized: "ためらい",
        originals: [
            "ためらい",
        ]
    },
    {
        normalized: "たらつふ",
        originals: [
            "タラップ",
        ]
    },
    {
        normalized: "たりよう",
        originals: [
            "多量",
        ]
    },
    {
        normalized: "たれまく",
        originals: [
            "垂れ幕",
        ]
    },
    {
        normalized: "たれんと",
        originals: [
            "タレント",
        ]
    },
    {
        normalized: "たわこと",
        originals: [
            "たわ言",
        ]
    },
    {
        normalized: "たわむれ",
        originals: [
            "戯れ",
        ]
    },
    {
        normalized: "たんあつ",
        originals: [
            "弾圧",
        ]
    },
    {
        normalized: "たんいち",
        originals: [
            "単一",
        ]
    },
    {
        normalized: "たんいん",
        originals: [
            "団員",
        ]
    },
    {
        normalized: "たんかい",
        originals: [
            "団塊",
            "段階",
            "断崖",
        ]
    },
    {
        normalized: "たんかん",
        originals: [
            "弾丸",
        ]
    },
    {
        normalized: "たんけつ",
        originals: [
            "団結",
        ]
    },
    {
        normalized: "たんけん",
        originals: [
            "探検",
            "探険",
            "短剣",
        ]
    },
    {
        normalized: "たんこう",
        originals: [
            "炭鉱",
            "断交",
            "談合",
        ]
    },
    {
        normalized: "たんこふ",
        originals: [
            "たんこぶ",
        ]
    },
    {
        normalized: "たんさく",
        originals: [
            "探索",
            "短冊",
        ]
    },
    {
        normalized: "たんさん",
        originals: [
            "単三",
            "炭酸",
        ]
    },
    {
        normalized: "たんしき",
        originals: [
            "断食",
        ]
    },
    {
        normalized: "たんしや",
        originals: [
            "単車",
        ]
    },
    {
        normalized: "たんしよ",
        originals: [
            "短所",
            "男女",
        ]
    },
    {
        normalized: "たんしん",
        originals: [
            "単身",
            "短針",
        ]
    },
    {
        normalized: "たんすい",
        originals: [
            "淡水",
            "断水",
        ]
    },
    {
        normalized: "たんせい",
        originals: [
            "男声",
            "男性",
        ]
    },
    {
        normalized: "たんせき",
        originals: [
            "胆石",
        ]
    },
    {
        normalized: "たんせつ",
        originals: [
            "断絶",
        ]
    },
    {
        normalized: "たんせん",
        originals: [
            "断線",
        ]
    },
    {
        normalized: "たんそう",
        originals: [
            "断層",
            "男装",
        ]
    },
    {
        normalized: "たんそく",
        originals: [
            "短足",
        ]
    },
    {
        normalized: "たんたい",
        originals: [
            "単体",
            "短大",
            "団体",
        ]
    },
    {
        normalized: "たんてい",
        originals: [
            "探偵",
            "断定",
        ]
    },
    {
        normalized: "たんとう",
        originals: [
            "担当",
            "短刀",
            "暖冬",
        ]
    },
    {
        normalized: "たんとつ",
        originals: [
            "断トツ",
        ]
    },
    {
        normalized: "たんとり",
        originals: [
            "段取り",
        ]
    },
    {
        normalized: "たんねつ",
        originals: [
            "断熱",
        ]
    },
    {
        normalized: "たんねん",
        originals: [
            "断念",
        ]
    },
    {
        normalized: "たんのう",
        originals: [
            "堪能",
        ]
    },
    {
        normalized: "たんはく",
        originals: [
            "淡泊",
        ]
    },
    {
        normalized: "たんはつ",
        originals: [
            "短髪",
            "断髪",
        ]
    },
    {
        normalized: "たんはん",
        originals: [
            "短パン",
        ]
    },
    {
        normalized: "たんひん",
        originals: [
            "単品",
        ]
    },
    {
        normalized: "たんふん",
        originals: [
            "単文",
            "短文",
        ]
    },
    {
        normalized: "たんへる",
        originals: [
            "ダンベル",
        ]
    },
    {
        normalized: "たんへん",
        originals: [
            "短編",
        ]
    },
    {
        normalized: "たんほう",
        originals: [
            "暖房",
        ]
    },
    {
        normalized: "たんほほ",
        originals: [
            "たんぽぽ",
        ]
    },
    {
        normalized: "たんまつ",
        originals: [
            "端末",
        ]
    },
    {
        normalized: "たんまり",
        originals: [
            "だんまり",
        ]
    },
    {
        normalized: "たんめい",
        originals: [
            "短命",
        ]
    },
    {
        normalized: "たんめん",
        originals: [
            "タンメン",
            "断面",
        ]
    },
    {
        normalized: "たんゆう",
        originals: [
            "男優",
        ]
    },
    {
        normalized: "たんらく",
        originals: [
            "段落",
        ]
    },
    {
        normalized: "たんらん",
        originals: [
            "だんらん",
        ]
    },
    {
        normalized: "たんれん",
        originals: [
            "鍛錬",
        ]
    },
    {
        normalized: "ちえつく",
        originals: [
            "チェック",
        ]
    },
    {
        normalized: "ちえんし",
        originals: [
            "チェンジ",
        ]
    },
    {
        normalized: "ちかころ",
        originals: [
            "近ごろ",
        ]
    },
    {
        normalized: "ちかちか",
        originals: [
            "近近",
        ]
    },
    {
        normalized: "ちかつき",
        originals: [
            "近付き",
        ]
    },
    {
        normalized: "ちかみち",
        originals: [
            "近道",
        ]
    },
    {
        normalized: "ちきゆう",
        originals: [
            "地球",
        ]
    },
    {
        normalized: "ちくさい",
        originals: [
            "竹材",
        ]
    },
    {
        normalized: "ちくせき",
        originals: [
            "蓄積",
        ]
    },
    {
        normalized: "ちくてん",
        originals: [
            "蓄電",
        ]
    },
    {
        normalized: "ちくりん",
        originals: [
            "竹林",
        ]
    },
    {
        normalized: "ちけつと",
        originals: [
            "チケット",
        ]
    },
    {
        normalized: "ちしよう",
        originals: [
            "地上",
        ]
    },
    {
        normalized: "ちちおや",
        originals: [
            "父親",
        ]
    },
    {
        normalized: "ちちかた",
        originals: [
            "父方",
        ]
    },
    {
        normalized: "ちちはは",
        originals: [
            "父母",
        ]
    },
    {
        normalized: "ちちゆう",
        originals: [
            "地中",
        ]
    },
    {
        normalized: "ちつしよ",
        originals: [
            "秩序",
        ]
    },
    {
        normalized: "ちつそく",
        originals: [
            "窒息",
        ]
    },
    {
        normalized: "ちひよう",
        originals: [
            "地表",
        ]
    },
    {
        normalized: "ちへつと",
        originals: [
            "チベット",
        ]
    },
    {
        normalized: "ちまつり",
        originals: [
            "血祭り",
        ]
    },
    {
        normalized: "ちやいな",
        originals: [
            "チャイナ",
        ]
    },
    {
        normalized: "ちやいむ",
        originals: [
            "チャイム",
        ]
    },
    {
        normalized: "ちやいろ",
        originals: [
            "茶色",
        ]
    },
    {
        normalized: "ちやかい",
        originals: [
            "茶会",
        ]
    },
    {
        normalized: "ちやくい",
        originals: [
            "着衣",
        ]
    },
    {
        normalized: "ちやくち",
        originals: [
            "着地",
        ]
    },
    {
        normalized: "ちやこし",
        originals: [
            "茶こし",
        ]
    },
    {
        normalized: "ちやしつ",
        originals: [
            "茶室",
        ]
    },
    {
        normalized: "ちやしふ",
        originals: [
            "茶渋",
        ]
    },
    {
        normalized: "ちやそは",
        originals: [
            "茶そば",
        ]
    },
    {
        normalized: "ちやつか",
        originals: [
            "着火",
        ]
    },
    {
        normalized: "ちやつく",
        originals: [
            "チャック",
        ]
    },
    {
        normalized: "ちやつけ",
        originals: [
            "茶漬け",
        ]
    },
    {
        normalized: "ちやつみ",
        originals: [
            "茶摘み",
        ]
    },
    {
        normalized: "ちやのま",
        originals: [
            "茶の間",
        ]
    },
    {
        normalized: "ちやはん",
        originals: [
            "茶番",
        ]
    },
    {
        normalized: "ちやへる",
        originals: [
            "チャペル",
        ]
    },
    {
        normalized: "ちやわん",
        originals: [
            "茶わん",
        ]
    },
    {
        normalized: "ちやんこ",
        originals: [
            "ちゃんこ",
        ]
    },
    {
        normalized: "ちやんす",
        originals: [
            "チャンス",
        ]
    },
    {
        normalized: "ちゆうい",
        originals: [
            "注意",
        ]
    },
    {
        normalized: "ちゆうか",
        originals: [
            "中和",
            "中華",
        ]
    },
    {
        normalized: "ちゆうき",
        originals: [
            "忠義",
        ]
    },
    {
        normalized: "ちゆうこ",
        originals: [
            "中古",
        ]
    },
    {
        normalized: "ちゆうし",
        originals: [
            "中止",
            "注視",
        ]
    },
    {
        normalized: "ちゆうと",
        originals: [
            "中途",
        ]
    },
    {
        normalized: "ちゆうひ",
        originals: [
            "中火",
        ]
    },
    {
        normalized: "ちゆうふ",
        originals: [
            "中部",
        ]
    },
    {
        normalized: "ちゆうや",
        originals: [
            "昼夜",
        ]
    },
    {
        normalized: "ちゆうわ",
        originals: [
            "中和",
        ]
    },
    {
        normalized: "ちようか",
        originals: [
            "超過",
        ]
    },
    {
        normalized: "ちようき",
        originals: [
            "長期",
        ]
    },
    {
        normalized: "ちようさ",
        originals: [
            "調査",
        ]
    },
    {
        normalized: "ちようし",
        originals: [
            "調子",
            "弔事",
            "弔辞",
        ]
    },
    {
        normalized: "ちようほ",
        originals: [
            "帳簿",
        ]
    },
    {
        normalized: "ちようみ",
        originals: [
            "調味",
        ]
    },
    {
        normalized: "ちようり",
        originals: [
            "調理",
        ]
    },
    {
        normalized: "ちようわ",
        originals: [
            "調和",
        ]
    },
    {
        normalized: "ちよきん",
        originals: [
            "ちょきん",
            "貯金",
        ]
    },
    {
        normalized: "ちよくこ",
        originals: [
            "直後",
        ]
    },
    {
        normalized: "ちよくし",
        originals: [
            "直視",
        ]
    },
    {
        normalized: "ちよさく",
        originals: [
            "著作",
        ]
    },
    {
        normalized: "ちよしや",
        originals: [
            "著者",
        ]
    },
    {
        normalized: "ちよしよ",
        originals: [
            "著書",
        ]
    },
    {
        normalized: "ちよすい",
        originals: [
            "貯水",
        ]
    },
    {
        normalized: "ちよそう",
        originals: [
            "貯蔵",
        ]
    },
    {
        normalized: "ちよちく",
        originals: [
            "貯蓄",
        ]
    },
    {
        normalized: "ちよつか",
        originals: [
            "直下",
        ]
    },
    {
        normalized: "ちよつき",
        originals: [
            "チョッキ",
        ]
    },
    {
        normalized: "ちよつふ",
        originals: [
            "チョップ",
        ]
    },
    {
        normalized: "ちよんほ",
        originals: [
            "ちょんぼ",
        ]
    },
    {
        normalized: "ちりかみ",
        originals: [
            "ちり紙",
        ]
    },
    {
        normalized: "ちりとり",
        originals: [
            "ちり取り",
        ]
    },
    {
        normalized: "ちりめん",
        originals: [
            "ちりめん",
        ]
    },
    {
        normalized: "ちりよう",
        originals: [
            "治療",
        ]
    },
    {
        normalized: "ちりよく",
        originals: [
            "知力",
        ]
    },
    {
        normalized: "ちんあけ",
        originals: [
            "賃上げ",
        ]
    },
    {
        normalized: "ちんあつ",
        originals: [
            "鎮圧",
        ]
    },
    {
        normalized: "ちんきん",
        originals: [
            "賃金",
        ]
    },
    {
        normalized: "ちんこん",
        originals: [
            "鎮魂",
        ]
    },
    {
        normalized: "ちんしや",
        originals: [
            "陳謝",
        ]
    },
    {
        normalized: "ちんたい",
        originals: [
            "賃貸",
        ]
    },
    {
        normalized: "ちんつう",
        originals: [
            "鎮痛",
        ]
    },
    {
        normalized: "ちんてん",
        originals: [
            "沈殿",
        ]
    },
    {
        normalized: "ちんひら",
        originals: [
            "ちんぴら",
        ]
    },
    {
        normalized: "ちんひん",
        originals: [
            "珍品",
        ]
    },
    {
        normalized: "ちんほつ",
        originals: [
            "沈没",
        ]
    },
    {
        normalized: "ちんもく",
        originals: [
            "沈黙",
        ]
    },
    {
        normalized: "ちんれつ",
        originals: [
            "陳列",
        ]
    },
    {
        normalized: "ついけき",
        originals: [
            "追撃",
        ]
    },
    {
        normalized: "ついしん",
        originals: [
            "追伸",
        ]
    },
    {
        normalized: "ついせき",
        originals: [
            "追跡",
        ]
    },
    {
        normalized: "ついたち",
        originals: [
            "ついたち",
        ]
    },
    {
        normalized: "ついたて",
        originals: [
            "つい立て",
        ]
    },
    {
        normalized: "ついとう",
        originals: [
            "追悼",
        ]
    },
    {
        normalized: "ついとつ",
        originals: [
            "追突",
        ]
    },
    {
        normalized: "ついほう",
        originals: [
            "追放",
        ]
    },
    {
        normalized: "ついらく",
        originals: [
            "墜落",
        ]
    },
    {
        normalized: "つういん",
        originals: [
            "通院",
        ]
    },
    {
        normalized: "つうかい",
        originals: [
            "痛快",
        ]
    },
    {
        normalized: "つうかく",
        originals: [
            "痛覚",
            "通学",
        ]
    },
    {
        normalized: "つうかん",
        originals: [
            "痛感",
        ]
    },
    {
        normalized: "つうきん",
        originals: [
            "通勤",
        ]
    },
    {
        normalized: "つうこう",
        originals: [
            "通行",
        ]
    },
    {
        normalized: "つうこく",
        originals: [
            "通告",
        ]
    },
    {
        normalized: "つうこん",
        originals: [
            "痛恨",
        ]
    },
    {
        normalized: "つうさん",
        originals: [
            "通算",
        ]
    },
    {
        normalized: "つうしん",
        originals: [
            "通信",
        ]
    },
    {
        normalized: "つうたつ",
        originals: [
            "通達",
        ]
    },
    {
        normalized: "つうてん",
        originals: [
            "通電",
        ]
    },
    {
        normalized: "つうねん",
        originals: [
            "通年",
        ]
    },
    {
        normalized: "つうふう",
        originals: [
            "痛風",
            "通風",
        ]
    },
    {
        normalized: "つうほう",
        originals: [
            "通報",
        ]
    },
    {
        normalized: "つうやく",
        originals: [
            "通訳",
        ]
    },
    {
        normalized: "つうよう",
        originals: [
            "通用",
        ]
    },
    {
        normalized: "つかいて",
        originals: [
            "使い手",
        ]
    },
    {
        normalized: "つかれめ",
        originals: [
            "疲れ目",
        ]
    },
    {
        normalized: "つきあい",
        originals: [
            "付き合い",
        ]
    },
    {
        normalized: "つきそい",
        originals: [
            "付き添い",
        ]
    },
    {
        normalized: "つきたし",
        originals: [
            "継ぎ足し",
        ]
    },
    {
        normalized: "つきぬけ",
        originals: [
            "突き抜け",
        ]
    },
    {
        normalized: "つきはき",
        originals: [
            "継ぎはぎ",
        ]
    },
    {
        normalized: "つきへつ",
        originals: [
            "月別",
        ]
    },
    {
        normalized: "つきゆひ",
        originals: [
            "突き指",
        ]
    },
    {
        normalized: "つくたに",
        originals: [
            "つくだ煮",
        ]
    },
    {
        normalized: "つくない",
        originals: [
            "償い",
        ]
    },
    {
        normalized: "つけくち",
        originals: [
            "告げ口",
        ]
    },
    {
        normalized: "つけひけ",
        originals: [
            "付けひげ",
        ]
    },
    {
        normalized: "つけもの",
        originals: [
            "漬け物",
        ]
    },
    {
        normalized: "つしつま",
        originals: [
            "つじつま",
        ]
    },
    {
        normalized: "つつこみ",
        originals: [
            "突っ込み",
        ]
    },
    {
        normalized: "つなかり",
        originals: [
            "つながり",
        ]
    },
    {
        normalized: "つなひき",
        originals: [
            "綱引き",
        ]
    },
    {
        normalized: "つふあん",
        originals: [
            "粒あん",
        ]
    },
    {
        normalized: "つふやき",
        originals: [
            "つぶやき",
        ]
    },
    {
        normalized: "つほすう",
        originals: [
            "坪数",
        ]
    },
    {
        normalized: "つまさき",
        originals: [
            "つま先",
        ]
    },
    {
        normalized: "つますき",
        originals: [
            "つまずき",
        ]
    },
    {
        normalized: "つみあけ",
        originals: [
            "積み上げ",
        ]
    },
    {
        normalized: "つみこみ",
        originals: [
            "積み込み",
        ]
    },
    {
        normalized: "つみたて",
        originals: [
            "積み立て",
        ]
    },
    {
        normalized: "つめあと",
        originals: [
            "つめあと",
        ]
    },
    {
        normalized: "つめかえ",
        originals: [
            "詰め替え",
        ]
    },
    {
        normalized: "つめきり",
        originals: [
            "つめ切り",
        ]
    },
    {
        normalized: "つめこみ",
        originals: [
            "詰め込み",
        ]
    },
    {
        normalized: "つめもの",
        originals: [
            "詰め物",
        ]
    },
    {
        normalized: "つやけし",
        originals: [
            "つや消し",
        ]
    },
    {
        normalized: "つやたし",
        originals: [
            "つや出し",
        ]
    },
    {
        normalized: "つゆあけ",
        originals: [
            "梅雨明け",
        ]
    },
    {
        normalized: "つゆいり",
        originals: [
            "梅雨入り",
        ]
    },
    {
        normalized: "つゆとき",
        originals: [
            "梅雨時",
        ]
    },
    {
        normalized: "つゆはれ",
        originals: [
            "梅雨晴れ",
        ]
    },
    {
        normalized: "つよかり",
        originals: [
            "強がり",
        ]
    },
    {
        normalized: "つらなり",
        originals: [
            "連なり",
        ]
    },
    {
        normalized: "つりあい",
        originals: [
            "釣り合い",
        ]
    },
    {
        normalized: "つりいと",
        originals: [
            "釣り糸",
        ]
    },
    {
        normalized: "つりかわ",
        originals: [
            "つり革",
        ]
    },
    {
        normalized: "つりさお",
        originals: [
            "釣りざお",
        ]
    },
    {
        normalized: "つりせん",
        originals: [
            "釣り銭",
        ]
    },
    {
        normalized: "つりはし",
        originals: [
            "つり橋",
        ]
    },
    {
        normalized: "つりはり",
        originals: [
            "釣り針",
        ]
    },
    {
        normalized: "つりひと",
        originals: [
            "釣り人",
        ]
    },
    {
        normalized: "つりふね",
        originals: [
            "釣り船",
        ]
    },
    {
        normalized: "つりほり",
        originals: [
            "釣り堀",
        ]
    },
    {
        normalized: "つるはし",
        originals: [
            "つるはし",
        ]
    },
    {
        normalized: "てあたり",
        originals: [
            "手当たり",
        ]
    },
    {
        normalized: "てあらい",
        originals: [
            "手洗い",
        ]
    },
    {
        normalized: "てあわせ",
        originals: [
            "手合わせ",
        ]
    },
    {
        normalized: "ていあん",
        originals: [
            "提案",
        ]
    },
    {
        normalized: "ていいん",
        originals: [
            "定員",
        ]
    },
    {
        normalized: "ていえん",
        originals: [
            "庭園",
        ]
    },
    {
        normalized: "ていおう",
        originals: [
            "帝王",
        ]
    },
    {
        normalized: "ていおん",
        originals: [
            "低温",
            "低音",
        ]
    },
    {
        normalized: "ていかく",
        originals: [
            "低額",
            "停学",
            "定額",
        ]
    },
    {
        normalized: "ていけい",
        originals: [
            "定型",
            "定形",
            "提携",
        ]
    },
    {
        normalized: "ていけつ",
        originals: [
            "締結",
        ]
    },
    {
        normalized: "ていこう",
        originals: [
            "抵抗",
        ]
    },
    {
        normalized: "ていこく",
        originals: [
            "定刻",
            "帝国",
        ]
    },
    {
        normalized: "ていさい",
        originals: [
            "体裁",
        ]
    },
    {
        normalized: "ていさつ",
        originals: [
            "偵察",
        ]
    },
    {
        normalized: "ていしや",
        originals: [
            "停車",
        ]
    },
    {
        normalized: "ていしゆ",
        originals: [
            "亭主",
        ]
    },
    {
        normalized: "ていすい",
        originals: [
            "泥水",
            "泥酔",
        ]
    },
    {
        normalized: "ていすく",
        originals: [
            "ディスク",
        ]
    },
    {
        normalized: "ていすこ",
        originals: [
            "ディスコ",
        ]
    },
    {
        normalized: "ていせい",
        originals: [
            "訂正",
        ]
    },
    {
        normalized: "ていせん",
        originals: [
            "停戦",
        ]
    },
    {
        normalized: "ていそう",
        originals: [
            "貞操",
        ]
    },
    {
        normalized: "ていそく",
        originals: [
            "低速",
            "低俗",
        ]
    },
    {
        normalized: "ていたい",
        originals: [
            "停滞",
        ]
    },
    {
        normalized: "ていてん",
        originals: [
            "停電",
        ]
    },
    {
        normalized: "ていねん",
        originals: [
            "定年",
        ]
    },
    {
        normalized: "ていはく",
        originals: [
            "停泊",
        ]
    },
    {
        normalized: "ていはん",
        originals: [
            "定番",
        ]
    },
    {
        normalized: "ていへん",
        originals: [
            "底辺",
        ]
    },
    {
        normalized: "ていほう",
        originals: [
            "堤防",
        ]
    },
    {
        normalized: "ていめい",
        originals: [
            "低迷",
        ]
    },
    {
        normalized: "ていめん",
        originals: [
            "底面",
        ]
    },
    {
        normalized: "ていれい",
        originals: [
            "定例",
        ]
    },
    {
        normalized: "ておくれ",
        originals: [
            "手遅れ",
        ]
    },
    {
        normalized: "てかかみ",
        originals: [
            "手鏡",
        ]
    },
    {
        normalized: "てかかり",
        originals: [
            "手掛かり",
        ]
    },
    {
        normalized: "てかせき",
        originals: [
            "出稼ぎ",
        ]
    },
    {
        normalized: "てかたな",
        originals: [
            "手刀",
        ]
    },
    {
        normalized: "てきあい",
        originals: [
            "出来合い",
            "溺愛",
        ]
    },
    {
        normalized: "てきおう",
        originals: [
            "適応",
        ]
    },
    {
        normalized: "てきおん",
        originals: [
            "適温",
        ]
    },
    {
        normalized: "てきかく",
        originals: [
            "適格",
        ]
    },
    {
        normalized: "てきくん",
        originals: [
            "敵軍",
        ]
    },
    {
        normalized: "てきこう",
        originals: [
            "適合",
        ]
    },
    {
        normalized: "てきこと",
        originals: [
            "出来事",
        ]
    },
    {
        normalized: "てきさい",
        originals: [
            "適材",
        ]
    },
    {
        normalized: "てきさす",
        originals: [
            "テキサス",
        ]
    },
    {
        normalized: "てきしよ",
        originals: [
            "適所",
        ]
    },
    {
        normalized: "てきしん",
        originals: [
            "敵陣",
        ]
    },
    {
        normalized: "てきすと",
        originals: [
            "テキスト",
        ]
    },
    {
        normalized: "てきせい",
        originals: [
            "適性",
        ]
    },
    {
        normalized: "てきたい",
        originals: [
            "敵対",
        ]
    },
    {
        normalized: "てきたか",
        originals: [
            "出来高",
        ]
    },
    {
        normalized: "てきたて",
        originals: [
            "出来たて",
        ]
    },
    {
        normalized: "てきとう",
        originals: [
            "適当",
        ]
    },
    {
        normalized: "てきにん",
        originals: [
            "適任",
        ]
    },
    {
        normalized: "てきはえ",
        originals: [
            "出来栄え",
        ]
    },
    {
        normalized: "てきはつ",
        originals: [
            "摘発",
        ]
    },
    {
        normalized: "てきへい",
        originals: [
            "敵兵",
        ]
    },
    {
        normalized: "てきもの",
        originals: [
            "できもの",
        ]
    },
    {
        normalized: "てきやく",
        originals: [
            "適役",
        ]
    },
    {
        normalized: "てきよう",
        originals: [
            "適用",
        ]
    },
    {
        normalized: "てきれい",
        originals: [
            "適齢",
        ]
    },
    {
        normalized: "てこいれ",
        originals: [
            "てこ入れ",
        ]
    },
    {
        normalized: "てこころ",
        originals: [
            "手心",
        ]
    },
    {
        normalized: "てこたえ",
        originals: [
            "手ごたえ",
        ]
    },
    {
        normalized: "てこほこ",
        originals: [
            "凸凹",
        ]
    },
    {
        normalized: "てこほん",
        originals: [
            "デコポン",
        ]
    },
    {
        normalized: "てさいん",
        originals: [
            "デザイン",
        ]
    },
    {
        normalized: "てさくり",
        originals: [
            "手探り",
        ]
    },
    {
        normalized: "てさわり",
        originals: [
            "手触り",
        ]
    },
    {
        normalized: "てしかめ",
        originals: [
            "デジカメ",
        ]
    },
    {
        normalized: "てしたる",
        originals: [
            "デジタル",
        ]
    },
    {
        normalized: "てしへる",
        originals: [
            "デシベル",
        ]
    },
    {
        normalized: "てしやく",
        originals: [
            "手酌",
        ]
    },
    {
        normalized: "てしゆん",
        originals: [
            "手順",
        ]
    },
    {
        normalized: "てしよう",
        originals: [
            "手錠",
        ]
    },
    {
        normalized: "てたすけ",
        originals: [
            "手助け",
        ]
    },
    {
        normalized: "てたらめ",
        originals: [
            "でたらめ",
        ]
    },
    {
        normalized: "てちかい",
        originals: [
            "手違い",
        ]
    },
    {
        normalized: "てちよう",
        originals: [
            "手帳",
        ]
    },
    {
        normalized: "てつかい",
        originals: [
            "撤回",
        ]
    },
    {
        normalized: "てつかく",
        originals: [
            "適格",
            "哲学",
        ]
    },
    {
        normalized: "てつかみ",
        originals: [
            "手づかみ",
        ]
    },
    {
        normalized: "てつきよ",
        originals: [
            "撤去",
        ]
    },
    {
        normalized: "てつきん",
        originals: [
            "鉄琴",
            "鉄筋",
        ]
    },
    {
        normalized: "てつくり",
        originals: [
            "手作り",
        ]
    },
    {
        normalized: "てつこう",
        originals: [
            "鉄工",
            "鉄鉱",
            "鉄鋼",
        ]
    },
    {
        normalized: "てつこく",
        originals: [
            "敵国",
        ]
    },
    {
        normalized: "てつこつ",
        originals: [
            "鉄骨",
        ]
    },
    {
        normalized: "てつさい",
        originals: [
            "鉄材",
        ]
    },
    {
        normalized: "てつさく",
        originals: [
            "鉄柵",
        ]
    },
    {
        normalized: "てつさん",
        originals: [
            "デッサン",
        ]
    },
    {
        normalized: "てつしん",
        originals: [
            "鉄人",
        ]
    },
    {
        normalized: "てつせい",
        originals: [
            "鉄製",
        ]
    },
    {
        normalized: "てつそく",
        originals: [
            "鉄則",
        ]
    },
    {
        normalized: "てつたい",
        originals: [
            "撤退",
            "手伝い",
        ]
    },
    {
        normalized: "てつつき",
        originals: [
            "手続き",
        ]
    },
    {
        normalized: "てつてい",
        originals: [
            "徹底",
        ]
    },
    {
        normalized: "てつとう",
        originals: [
            "鉄塔",
            "鉄道",
        ]
    },
    {
        normalized: "てつはい",
        originals: [
            "撤廃",
        ]
    },
    {
        normalized: "てつはん",
        originals: [
            "鉄板",
        ]
    },
    {
        normalized: "てつふん",
        originals: [
            "鉄分",
        ]
    },
    {
        normalized: "てつへき",
        originals: [
            "鉄壁",
        ]
    },
    {
        normalized: "てつへん",
        originals: [
            "てっぺん",
        ]
    },
    {
        normalized: "てつほう",
        originals: [
            "鉄砲",
            "鉄棒",
        ]
    },
    {
        normalized: "てつまり",
        originals: [
            "手詰まり",
        ]
    },
    {
        normalized: "てつわん",
        originals: [
            "鉄腕",
        ]
    },
    {
        normalized: "てところ",
        originals: [
            "出所",
        ]
    },
    {
        normalized: "てなおし",
        originals: [
            "手直し",
            "出直し",
        ]
    },
    {
        normalized: "てなんと",
        originals: [
            "テナント",
        ]
    },
    {
        normalized: "てぬくい",
        originals: [
            "手ぬぐい",
        ]
    },
    {
        normalized: "てのうち",
        originals: [
            "手の内",
        ]
    },
    {
        normalized: "てのこう",
        originals: [
            "手の甲",
        ]
    },
    {
        normalized: "てのひら",
        originals: [
            "手の平",
        ]
    },
    {
        normalized: "てはいり",
        originals: [
            "出入り",
        ]
    },
    {
        normalized: "てはしめ",
        originals: [
            "手始め",
        ]
    },
    {
        normalized: "てはなし",
        originals: [
            "手放し",
        ]
    },
    {
        normalized: "てふくろ",
        originals: [
            "手袋",
        ]
    },
    {
        normalized: "てほとき",
        originals: [
            "手ほどき",
        ]
    },
    {
        normalized: "てまちん",
        originals: [
            "手間賃",
        ]
    },
    {
        normalized: "てまねき",
        originals: [
            "手招き",
        ]
    },
    {
        normalized: "てまひま",
        originals: [
            "手間暇",
        ]
    },
    {
        normalized: "てまわし",
        originals: [
            "手回し",
        ]
    },
    {
        normalized: "てみやけ",
        originals: [
            "手土産",
        ]
    },
    {
        normalized: "てむかえ",
        originals: [
            "出迎え",
        ]
    },
    {
        normalized: "てりやき",
        originals: [
            "照り焼き",
        ]
    },
    {
        normalized: "てれほん",
        originals: [
            "テレホン",
        ]
    },
    {
        normalized: "てろつふ",
        originals: [
            "テロップ",
        ]
    },
    {
        normalized: "てわたし",
        originals: [
            "手渡し",
        ]
    },
    {
        normalized: "てんあつ",
        originals: [
            "電圧",
        ]
    },
    {
        normalized: "てんいん",
        originals: [
            "店員",
            "転院",
        ]
    },
    {
        normalized: "てんえん",
        originals: [
            "田園",
        ]
    },
    {
        normalized: "てんかい",
        originals: [
            "展開",
        ]
    },
    {
        normalized: "てんかく",
        originals: [
            "田楽",
        ]
    },
    {
        normalized: "てんかす",
        originals: [
            "天かす",
        ]
    },
    {
        normalized: "てんかん",
        originals: [
            "転換",
        ]
    },
    {
        normalized: "てんきよ",
        originals: [
            "転居",
        ]
    },
    {
        normalized: "てんきん",
        originals: [
            "転勤",
        ]
    },
    {
        normalized: "てんくう",
        originals: [
            "天空",
        ]
    },
    {
        normalized: "てんけい",
        originals: [
            "典型",
        ]
    },
    {
        normalized: "てんけき",
        originals: [
            "電撃",
        ]
    },
    {
        normalized: "てんけん",
        originals: [
            "点検",
            "電源",
        ]
    },
    {
        normalized: "てんこう",
        originals: [
            "天候",
            "転校",
            "電光",
        ]
    },
    {
        normalized: "てんこく",
        originals: [
            "天国",
        ]
    },
    {
        normalized: "てんこん",
        originals: [
            "伝言",
        ]
    },
    {
        normalized: "てんさい",
        originals: [
            "天才",
            "天災",
            "転載",
        ]
    },
    {
        normalized: "てんさく",
        originals: [
            "添削",
        ]
    },
    {
        normalized: "てんしや",
        originals: [
            "転写",
            "電車",
        ]
    },
    {
        normalized: "てんしゆ",
        originals: [
            "店主",
            "伝授",
        ]
    },
    {
        normalized: "てんしん",
        originals: [
            "転身",
        ]
    },
    {
        normalized: "てんすう",
        originals: [
            "点数",
        ]
    },
    {
        normalized: "てんせい",
        originals: [
            "天性",
            "転生",
        ]
    },
    {
        normalized: "てんせつ",
        originals: [
            "伝説",
        ]
    },
    {
        normalized: "てんせん",
        originals: [
            "点線",
            "伝染",
            "電線",
        ]
    },
    {
        normalized: "てんそう",
        originals: [
            "転送",
        ]
    },
    {
        normalized: "てんたい",
        originals: [
            "天体",
        ]
    },
    {
        normalized: "てんたく",
        originals: [
            "電卓",
        ]
    },
    {
        normalized: "てんたつ",
        originals: [
            "伝達",
        ]
    },
    {
        normalized: "てんつゆ",
        originals: [
            "天つゆ",
        ]
    },
    {
        normalized: "てんてき",
        originals: [
            "点滴",
        ]
    },
    {
        normalized: "てんてつ",
        originals: [
            "電鉄",
        ]
    },
    {
        normalized: "てんとう",
        originals: [
            "店頭",
            "点灯",
            "転倒",
            "伝統",
            "電灯",
            "電動",
        ]
    },
    {
        normalized: "てんとり",
        originals: [
            "点取り",
        ]
    },
    {
        normalized: "てんとん",
        originals: [
            "天どん",
        ]
    },
    {
        normalized: "てんない",
        originals: [
            "店内",
        ]
    },
    {
        normalized: "てんによ",
        originals: [
            "天女",
        ]
    },
    {
        normalized: "てんねつ",
        originals: [
            "電熱",
        ]
    },
    {
        normalized: "てんねん",
        originals: [
            "天然",
        ]
    },
    {
        normalized: "てんのう",
        originals: [
            "天皇",
        ]
    },
    {
        normalized: "てんはい",
        originals: [
            "転売",
        ]
    },
    {
        normalized: "てんはつ",
        originals: [
            "天罰",
        ]
    },
    {
        normalized: "てんひき",
        originals: [
            "天引き",
        ]
    },
    {
        normalized: "てんひん",
        originals: [
            "天秤",
        ]
    },
    {
        normalized: "てんふく",
        originals: [
            "転覆",
        ]
    },
    {
        normalized: "てんふら",
        originals: [
            "テンプラ",
        ]
    },
    {
        normalized: "てんふん",
        originals: [
            "でんぷん",
        ]
    },
    {
        normalized: "てんほう",
        originals: [
            "展望",
            "電報",
        ]
    },
    {
        normalized: "てんまと",
        originals: [
            "天窓",
        ]
    },
    {
        normalized: "てんめつ",
        originals: [
            "点滅",
        ]
    },
    {
        normalized: "てんよう",
        originals: [
            "転用",
        ]
    },
    {
        normalized: "てんらい",
        originals: [
            "伝来",
        ]
    },
    {
        normalized: "てんらく",
        originals: [
            "転落",
        ]
    },
    {
        normalized: "てんらん",
        originals: [
            "展覧",
        ]
    },
    {
        normalized: "てんれい",
        originals: [
            "伝令",
        ]
    },
    {
        normalized: "とうあけ",
        originals: [
            "胴上げ",
        ]
    },
    {
        normalized: "とうあん",
        originals: [
            "答案",
        ]
    },
    {
        normalized: "とういつ",
        originals: [
            "統一",
        ]
    },
    {
        normalized: "とういん",
        originals: [
            "党員",
            "動員",
        ]
    },
    {
        normalized: "とうえい",
        originals: [
            "投影",
        ]
    },
    {
        normalized: "とうかい",
        originals: [
            "東海",
            "倒壊",
        ]
    },
    {
        normalized: "とうかく",
        originals: [
            "頭角",
            "同額",
        ]
    },
    {
        normalized: "とうかつ",
        originals: [
            "統括",
            "恫喝",
        ]
    },
    {
        normalized: "とうかん",
        originals: [
            "投函",
            "同感",
            "童顔",
        ]
    },
    {
        normalized: "とうきひ",
        originals: [
            "とうきび",
        ]
    },
    {
        normalized: "とうきよ",
        originals: [
            "同居",
        ]
    },
    {
        normalized: "とうくつ",
        originals: [
            "洞窟",
        ]
    },
    {
        normalized: "とうけい",
        originals: [
            "統計",
            "陶芸",
        ]
    },
    {
        normalized: "とうけつ",
        originals: [
            "凍結",
            "当月",
        ]
    },
    {
        normalized: "とうけん",
        originals: [
            "刀剣",
            "闘犬",
        ]
    },
    {
        normalized: "とうこう",
        originals: [
            "当校",
            "投稿",
            "投降",
            "登校",
            "統合",
            "動向",
            "同行",
            "瞳孔",
        ]
    },
    {
        normalized: "とうこく",
        originals: [
            "投獄",
        ]
    },
    {
        normalized: "とうこん",
        originals: [
            "闘魂",
        ]
    },
    {
        normalized: "とうさい",
        originals: [
            "東西",
            "同罪",
        ]
    },
    {
        normalized: "とうさく",
        originals: [
            "盗作",
        ]
    },
    {
        normalized: "とうさつ",
        originals: [
            "盗撮",
            "洞察",
        ]
    },
    {
        normalized: "とうさん",
        originals: [
            "倒産",
        ]
    },
    {
        normalized: "とうしき",
        originals: [
            "陶磁器",
        ]
    },
    {
        normalized: "とうしつ",
        originals: [
            "糖質",
            "当日",
            "同室",
            "同質",
            "同日",
        ]
    },
    {
        normalized: "とうしや",
        originals: [
            "当社",
        ]
    },
    {
        normalized: "とうしゆ",
        originals: [
            "党首",
            "投手",
            "同種",
        ]
    },
    {
        normalized: "とうしよ",
        originals: [
            "当初",
            "投書",
        ]
    },
    {
        normalized: "とうしん",
        originals: [
            "頭身",
            "童心",
        ]
    },
    {
        normalized: "とうすい",
        originals: [
            "陶酔",
        ]
    },
    {
        normalized: "とうすう",
        originals: [
            "同数",
        ]
    },
    {
        normalized: "とうせい",
        originals: [
            "統制",
            "同姓",
            "同性",
            "同棲",
        ]
    },
    {
        normalized: "とうせき",
        originals: [
            "透析",
            "同席",
        ]
    },
    {
        normalized: "とうせん",
        originals: [
            "当選",
            "導線",
            "同然",
        ]
    },
    {
        normalized: "とうそう",
        originals: [
            "逃走",
            "闘争",
            "同窓",
            "銅像",
        ]
    },
    {
        normalized: "とうそく",
        originals: [
            "盗賊",
            "同族",
        ]
    },
    {
        normalized: "とうたい",
        originals: [
            "灯台",
            "胴体",
        ]
    },
    {
        normalized: "とうたつ",
        originals: [
            "到達",
        ]
    },
    {
        normalized: "とうてい",
        originals: [
            "童貞",
            "道程",
        ]
    },
    {
        normalized: "とうてん",
        originals: [
            "当店",
            "動転",
            "同点",
        ]
    },
    {
        normalized: "とうとく",
        originals: [
            "道徳",
        ]
    },
    {
        normalized: "とうとり",
        originals: [
            "頭取",
        ]
    },
    {
        normalized: "とうない",
        originals: [
            "党内",
        ]
    },
    {
        normalized: "とうなん",
        originals: [
            "東南",
            "盗難",
        ]
    },
    {
        normalized: "とうねん",
        originals: [
            "同年",
        ]
    },
    {
        normalized: "とうはつ",
        originals: [
            "頭髪",
        ]
    },
    {
        normalized: "とうはん",
        originals: [
            "当番",
            "登板",
            "同伴",
        ]
    },
    {
        normalized: "とうひん",
        originals: [
            "盗品",
        ]
    },
    {
        normalized: "とうふう",
        originals: [
            "同封",
        ]
    },
    {
        normalized: "とうふつ",
        originals: [
            "動物",
        ]
    },
    {
        normalized: "とうふん",
        originals: [
            "等分",
            "糖分",
        ]
    },
    {
        normalized: "とうへん",
        originals: [
            "答弁",
        ]
    },
    {
        normalized: "とうほう",
        originals: [
            "当方",
            "東方",
            "逃亡",
        ]
    },
    {
        normalized: "とうほく",
        originals: [
            "東北",
            "倒木",
        ]
    },
    {
        normalized: "とうみん",
        originals: [
            "冬眠",
            "島民",
            "道民",
        ]
    },
    {
        normalized: "とうめい",
        originals: [
            "同名",
            "同盟",
        ]
    },
    {
        normalized: "とうめん",
        originals: [
            "当面",
        ]
    },
    {
        normalized: "とうやく",
        originals: [
            "投薬",
        ]
    },
    {
        normalized: "とうよう",
        originals: [
            "東洋",
            "登用",
            "盗用",
            "動揺",
            "童謡",
        ]
    },
    {
        normalized: "とうらい",
        originals: [
            "到来",
        ]
    },
    {
        normalized: "とうらく",
        originals: [
            "道楽",
        ]
    },
    {
        normalized: "とうらん",
        originals: [
            "動乱",
        ]
    },
    {
        normalized: "とうりつ",
        originals: [
            "倒立",
        ]
    },
    {
        normalized: "とうるい",
        originals: [
            "同類",
        ]
    },
    {
        normalized: "とうろく",
        originals: [
            "登録",
        ]
    },
    {
        normalized: "とうろん",
        originals: [
            "討論",
        ]
    },
    {
        normalized: "とおあさ",
        originals: [
            "遠浅",
        ]
    },
    {
        normalized: "とおほえ",
        originals: [
            "遠ぼえ",
        ]
    },
    {
        normalized: "とおりな",
        originals: [
            "通り名",
        ]
    },
    {
        normalized: "とおりま",
        originals: [
            "通り魔",
        ]
    },
    {
        normalized: "ときしる",
        originals: [
            "とぎ汁",
        ]
    },
    {
        normalized: "ときよう",
        originals: [
            "度胸",
            "読経",
        ]
    },
    {
        normalized: "とくかく",
        originals: [
            "独学",
        ]
    },
    {
        normalized: "とくけん",
        originals: [
            "独言",
        ]
    },
    {
        normalized: "とくさい",
        originals: [
            "独裁",
        ]
    },
    {
        normalized: "とくさく",
        originals: [
            "得策",
        ]
    },
    {
        normalized: "とくさつ",
        originals: [
            "特撮",
            "毒殺",
        ]
    },
    {
        normalized: "とくさん",
        originals: [
            "特産",
        ]
    },
    {
        normalized: "とくしつ",
        originals: [
            "特質",
        ]
    },
    {
        normalized: "とくしや",
        originals: [
            "読者",
        ]
    },
    {
        normalized: "とくしゆ",
        originals: [
            "特需",
        ]
    },
    {
        normalized: "とくしよ",
        originals: [
            "読書",
        ]
    },
    {
        normalized: "とくしん",
        originals: [
            "独身",
        ]
    },
    {
        normalized: "とくせい",
        originals: [
            "特性",
            "特製",
            "毒性",
        ]
    },
    {
        normalized: "とくせつ",
        originals: [
            "特設",
            "毒舌",
        ]
    },
    {
        normalized: "とくせん",
        originals: [
            "特選",
            "独占",
        ]
    },
    {
        normalized: "とくそう",
        originals: [
            "特捜",
            "毒草",
            "独奏",
            "独走",
        ]
    },
    {
        normalized: "とくそく",
        originals: [
            "督促",
        ]
    },
    {
        normalized: "とくたい",
        originals: [
            "特大",
        ]
    },
    {
        normalized: "とくたみ",
        originals: [
            "どくだみ",
        ]
    },
    {
        normalized: "とくたん",
        originals: [
            "特段",
            "独断",
        ]
    },
    {
        normalized: "とくてい",
        originals: [
            "特定",
        ]
    },
    {
        normalized: "とくてん",
        originals: [
            "得点",
            "特典",
        ]
    },
    {
        normalized: "とくはい",
        originals: [
            "特売",
        ]
    },
    {
        normalized: "とくはん",
        originals: [
            "特番",
        ]
    },
    {
        normalized: "とくふつ",
        originals: [
            "毒物",
        ]
    },
    {
        normalized: "とくへひ",
        originals: [
            "毒へび",
        ]
    },
    {
        normalized: "とくほう",
        originals: [
            "独房",
        ]
    },
    {
        normalized: "とくめい",
        originals: [
            "匿名",
        ]
    },
    {
        normalized: "とくやく",
        originals: [
            "特約",
            "毒薬",
        ]
    },
    {
        normalized: "とくれい",
        originals: [
            "特例",
        ]
    },
    {
        normalized: "とことん",
        originals: [
            "とことん",
        ]
    },
    {
        normalized: "とこなつ",
        originals: [
            "常夏",
        ]
    },
    {
        normalized: "とこのま",
        originals: [
            "床の間",
        ]
    },
    {
        normalized: "とさくさ",
        originals: [
            "どさくさ",
        ]
    },
    {
        normalized: "としあき",
        originals: [
            "聡明",
        ]
    },
    {
        normalized: "としあけ",
        originals: [
            "年明け",
        ]
    },
    {
        normalized: "としうえ",
        originals: [
            "年上",
        ]
    },
    {
        normalized: "としこし",
        originals: [
            "年越し",
        ]
    },
    {
        normalized: "としこみ",
        originals: [
            "とじ込み",
        ]
    },
    {
        normalized: "としころ",
        originals: [
            "年ごろ",
        ]
    },
    {
        normalized: "としした",
        originals: [
            "年下",
        ]
    },
    {
        normalized: "としつき",
        originals: [
            "年月",
        ]
    },
    {
        normalized: "としのせ",
        originals: [
            "年の瀬",
        ]
    },
    {
        normalized: "としまり",
        originals: [
            "戸締まり",
        ]
    },
    {
        normalized: "としよう",
        originals: [
            "途上",
            "土壌",
            "どじょう",
        ]
    },
    {
        normalized: "としより",
        originals: [
            "年寄り",
        ]
    },
    {
        normalized: "とたんは",
        originals: [
            "土壇場",
        ]
    },
    {
        normalized: "とちゆう",
        originals: [
            "途中",
        ]
    },
    {
        normalized: "とちよう",
        originals: [
            "都庁",
        ]
    },
    {
        normalized: "とつかい",
        originals: [
            "読解",
        ]
    },
    {
        normalized: "とつきよ",
        originals: [
            "特許",
        ]
    },
    {
        normalized: "とつきり",
        originals: [
            "どっきり",
        ]
    },
    {
        normalized: "とつくり",
        originals: [
            "とっくり",
            "徳利",
        ]
    },
    {
        normalized: "とつくん",
        originals: [
            "特訓",
        ]
    },
    {
        normalized: "とつけき",
        originals: [
            "突撃",
        ]
    },
    {
        normalized: "とつけん",
        originals: [
            "特権",
        ]
    },
    {
        normalized: "とつこう",
        originals: [
            "特攻",
        ]
    },
    {
        normalized: "とつしん",
        originals: [
            "突進",
        ]
    },
    {
        normalized: "とつはつ",
        originals: [
            "突発",
        ]
    },
    {
        normalized: "とつふう",
        originals: [
            "突風",
        ]
    },
    {
        normalized: "とつふす",
        originals: [
            "トップス",
        ]
    },
    {
        normalized: "ととけて",
        originals: [
            "届け出",
        ]
    },
    {
        normalized: "となかい",
        originals: [
            "トナカイ",
        ]
    },
    {
        normalized: "とひいし",
        originals: [
            "飛び石",
        ]
    },
    {
        normalized: "とひいり",
        originals: [
            "飛び入り",
        ]
    },
    {
        normalized: "とひうお",
        originals: [
            "とびうお",
        ]
    },
    {
        normalized: "とひおり",
        originals: [
            "飛び降り",
        ]
    },
    {
        normalized: "とひきり",
        originals: [
            "とびきり",
        ]
    },
    {
        normalized: "とひこみ",
        originals: [
            "飛び込み",
        ]
    },
    {
        normalized: "とひたし",
        originals: [
            "飛び出し",
        ]
    },
    {
        normalized: "とひつく",
        originals: [
            "トピック",
        ]
    },
    {
        normalized: "とひのり",
        originals: [
            "飛び乗り",
        ]
    },
    {
        normalized: "とひはこ",
        originals: [
            "跳び箱",
        ]
    },
    {
        normalized: "とひよう",
        originals: [
            "土俵",
        ]
    },
    {
        normalized: "とひらえ",
        originals: [
            "扉絵",
        ]
    },
    {
        normalized: "とまとい",
        originals: [
            "戸惑い",
        ]
    },
    {
        normalized: "とむらい",
        originals: [
            "弔い",
        ]
    },
    {
        normalized: "とめかね",
        originals: [
            "留め金",
        ]
    },
    {
        normalized: "ともくい",
        originals: [
            "共食い",
        ]
    },
    {
        normalized: "ともしひ",
        originals: [
            "ともし火",
        ]
    },
    {
        normalized: "ともたち",
        originals: [
            "友達",
        ]
    },
    {
        normalized: "ともひき",
        originals: [
            "友引",
        ]
    },
    {
        normalized: "とよめき",
        originals: [
            "どよめき",
        ]
    },
    {
        normalized: "とらいふ",
        originals: [
            "ドライブ",
        ]
    },
    {
        normalized: "とらうま",
        originals: [
            "トラウマ",
        ]
    },
    {
        normalized: "とらつく",
        originals: [
            "トラック",
        ]
    },
    {
        normalized: "とらねこ",
        originals: [
            "どら猫",
        ]
    },
    {
        normalized: "とらふく",
        originals: [
            "とらふぐ",
        ]
    },
    {
        normalized: "とらふる",
        originals: [
            "トラブル",
        ]
    },
    {
        normalized: "とらやき",
        originals: [
            "どら焼き",
        ]
    },
    {
        normalized: "とらわれ",
        originals: [
            "捕らわれ",
        ]
    },
    {
        normalized: "とらんく",
        originals: [
            "トランク",
        ]
    },
    {
        normalized: "とらんふ",
        originals: [
            "トランプ",
        ]
    },
    {
        normalized: "とりあい",
        originals: [
            "取り合い",
        ]
    },
    {
        normalized: "とりあけ",
        originals: [
            "取り上げ",
        ]
    },
    {
        normalized: "とりいれ",
        originals: [
            "取り入れ",
        ]
    },
    {
        normalized: "とりかえ",
        originals: [
            "取り替え",
        ]
    },
    {
        normalized: "とりかこ",
        originals: [
            "鳥かご",
        ]
    },
    {
        normalized: "とりきめ",
        originals: [
            "取り決め",
        ]
    },
    {
        normalized: "とりくみ",
        originals: [
            "取り組み",
        ]
    },
    {
        normalized: "とりけし",
        originals: [
            "取り消し",
        ]
    },
    {
        normalized: "とりこみ",
        originals: [
            "取り込み",
        ]
    },
    {
        normalized: "とりさけ",
        originals: [
            "取り下げ",
        ]
    },
    {
        normalized: "とりさら",
        originals: [
            "取り皿",
        ]
    },
    {
        normalized: "とりたし",
        originals: [
            "取り出し",
        ]
    },
    {
        normalized: "とりたて",
        originals: [
            "取り立て",
        ]
    },
    {
        normalized: "とりつく",
        originals: [
            "トリック",
        ]
    },
    {
        normalized: "とりつけ",
        originals: [
            "取り付け",
        ]
    },
    {
        normalized: "とりつふ",
        originals: [
            "トリップ",
        ]
    },
    {
        normalized: "とりにく",
        originals: [
            "鳥肉",
        ]
    },
    {
        normalized: "とりはた",
        originals: [
            "鳥肌",
        ]
    },
    {
        normalized: "とりひき",
        originals: [
            "取り引き",
        ]
    },
    {
        normalized: "とりふる",
        originals: [
            "ドリブル",
        ]
    },
    {
        normalized: "とりふん",
        originals: [
            "取り分",
        ]
    },
    {
        normalized: "とりまき",
        originals: [
            "取り巻き",
        ]
    },
    {
        normalized: "とりやめ",
        originals: [
            "取りやめ",
        ]
    },
    {
        normalized: "とりゆふ",
        originals: [
            "トリュフ",
        ]
    },
    {
        normalized: "とりよう",
        originals: [
            "塗料",
            "度量",
        ]
    },
    {
        normalized: "とりよく",
        originals: [
            "努力",
        ]
    },
    {
        normalized: "とりよせ",
        originals: [
            "取り寄せ",
        ]
    },
    {
        normalized: "とりんく",
        originals: [
            "ドリンク",
        ]
    },
    {
        normalized: "とろつこ",
        originals: [
            "トロッコ",
        ]
    },
    {
        normalized: "とろぬま",
        originals: [
            "泥沼",
        ]
    },
    {
        normalized: "とろほう",
        originals: [
            "泥棒",
        ]
    },
    {
        normalized: "とろみす",
        originals: [
            "泥水",
        ]
    },
    {
        normalized: "とろよけ",
        originals: [
            "泥よけ",
        ]
    },
    {
        normalized: "とろんこ",
        originals: [
            "泥んこ",
        ]
    },
    {
        normalized: "とわすれ",
        originals: [
            "度忘れ",
        ]
    },
    {
        normalized: "とんかち",
        originals: [
            "とんかち",
        ]
    },
    {
        normalized: "とんかつ",
        originals: [
            "豚カツ",
        ]
    },
    {
        normalized: "とんかん",
        originals: [
            "鈍感",
        ]
    },
    {
        normalized: "とんくり",
        originals: [
            "どんぐり",
        ]
    },
    {
        normalized: "とんこう",
        originals: [
            "鈍行",
        ]
    },
    {
        normalized: "とんしや",
        originals: [
            "豚舎",
        ]
    },
    {
        normalized: "とんしる",
        originals: [
            "豚汁",
        ]
    },
    {
        normalized: "とんすら",
        originals: [
            "とんずら",
        ]
    },
    {
        normalized: "とんそく",
        originals: [
            "豚足",
        ]
    },
    {
        normalized: "とんそこ",
        originals: [
            "どん底",
        ]
    },
    {
        normalized: "とんつう",
        originals: [
            "鈍痛",
        ]
    },
    {
        normalized: "とんてん",
        originals: [
            "曇天",
        ]
    },
    {
        normalized: "とんねる",
        originals: [
            "トンネル",
        ]
    },
    {
        normalized: "とんふり",
        originals: [
            "どんぶり",
        ]
    },
    {
        normalized: "とんまい",
        originals: [
            "ドンマイ",
        ]
    },
    {
        normalized: "とんよく",
        originals: [
            "貪欲",
        ]
    },
    {
        normalized: "ないえん",
        originals: [
            "内縁",
        ]
    },
    {
        normalized: "ないかく",
        originals: [
            "内閣",
        ]
    },
    {
        normalized: "ないきん",
        originals: [
            "内勤",
        ]
    },
    {
        normalized: "ないしよ",
        originals: [
            "内緒",
        ]
    },
    {
        normalized: "ないしん",
        originals: [
            "内心",
        ]
    },
    {
        normalized: "ないせい",
        originals: [
            "内政",
        ]
    },
    {
        normalized: "ないせん",
        originals: [
            "内戦",
            "内線",
        ]
    },
    {
        normalized: "ないそう",
        originals: [
            "内装",
            "内臓",
            "内蔵",
        ]
    },
    {
        normalized: "ないてい",
        originals: [
            "内定",
        ]
    },
    {
        normalized: "ないふく",
        originals: [
            "内服",
        ]
    },
    {
        normalized: "ないふん",
        originals: [
            "内紛",
        ]
    },
    {
        normalized: "ないへき",
        originals: [
            "内壁",
        ]
    },
    {
        normalized: "ないみつ",
        originals: [
            "内密",
        ]
    },
    {
        normalized: "ないめん",
        originals: [
            "内面",
        ]
    },
    {
        normalized: "ないよう",
        originals: [
            "内容",
        ]
    },
    {
        normalized: "ないらん",
        originals: [
            "内乱",
        ]
    },
    {
        normalized: "ないりく",
        originals: [
            "内陸",
        ]
    },
    {
        normalized: "ないろん",
        originals: [
            "ナイロン",
        ]
    },
    {
        normalized: "なかあめ",
        originals: [
            "長雨",
        ]
    },
    {
        normalized: "なかいき",
        originals: [
            "長生き",
        ]
    },
    {
        normalized: "なかかわ",
        originals: [
            "中側",
        ]
    },
    {
        normalized: "なかくつ",
        originals: [
            "長靴",
        ]
    },
    {
        normalized: "なかしは",
        originals: [
            "流し場",
        ]
    },
    {
        normalized: "なかしめ",
        originals: [
            "流し目",
        ]
    },
    {
        normalized: "なかそて",
        originals: [
            "長そで",
        ]
    },
    {
        normalized: "なかたひ",
        originals: [
            "長旅",
        ]
    },
    {
        normalized: "なかつき",
        originals: [
            "中継ぎ",
        ]
    },
    {
        normalized: "なかつり",
        originals: [
            "中づり",
        ]
    },
    {
        normalized: "なかにわ",
        originals: [
            "中庭",
        ]
    },
    {
        normalized: "なかねき",
        originals: [
            "長ねぎ",
        ]
    },
    {
        normalized: "なかねん",
        originals: [
            "長年",
        ]
    },
    {
        normalized: "なかもち",
        originals: [
            "長持",
            "長持ち",
        ]
    },
    {
        normalized: "なかゆひ",
        originals: [
            "中指",
        ]
    },
    {
        normalized: "なかよし",
        originals: [
            "仲よし",
        ]
    },
    {
        normalized: "なきかお",
        originals: [
            "泣き顔",
        ]
    },
    {
        normalized: "なきこえ",
        originals: [
            "泣き声",
            "鳴き声",
        ]
    },
    {
        normalized: "なきこと",
        originals: [
            "泣き言",
        ]
    },
    {
        normalized: "なきつら",
        originals: [
            "泣き面",
        ]
    },
    {
        normalized: "なきなた",
        originals: [
            "なぎなた",
        ]
    },
    {
        normalized: "なきへそ",
        originals: [
            "泣きべそ",
        ]
    },
    {
        normalized: "なきまね",
        originals: [
            "泣きまね",
        ]
    },
    {
        normalized: "なきむし",
        originals: [
            "泣き虫",
        ]
    },
    {
        normalized: "なくさめ",
        originals: [
            "慰め",
        ]
    },
    {
        normalized: "なけうり",
        originals: [
            "投げ売り",
        ]
    },
    {
        normalized: "なけなし",
        originals: [
            "なけなし",
        ]
    },
    {
        normalized: "なけなわ",
        originals: [
            "投げ縄",
        ]
    },
    {
        normalized: "なけやり",
        originals: [
            "投げやり",
        ]
    },
    {
        normalized: "なけわさ",
        originals: [
            "投げ技",
        ]
    },
    {
        normalized: "なこうと",
        originals: [
            "仲人",
        ]
    },
    {
        normalized: "なそなそ",
        originals: [
            "なぞなぞ",
        ]
    },
    {
        normalized: "なついん",
        originals: [
            "捺印",
        ]
    },
    {
        normalized: "なつかせ",
        originals: [
            "夏風邪",
        ]
    },
    {
        normalized: "なつそら",
        originals: [
            "夏空",
        ]
    },
    {
        normalized: "なつとう",
        originals: [
            "納豆",
        ]
    },
    {
        normalized: "なつとく",
        originals: [
            "納得",
        ]
    },
    {
        normalized: "なつはて",
        originals: [
            "夏ばて",
        ]
    },
    {
        normalized: "なつふく",
        originals: [
            "夏服",
        ]
    },
    {
        normalized: "なつもの",
        originals: [
            "夏物",
        ]
    },
    {
        normalized: "なつやせ",
        originals: [
            "夏やせ",
        ]
    },
    {
        normalized: "なてかた",
        originals: [
            "なで肩",
        ]
    },
    {
        normalized: "なてしこ",
        originals: [
            "なでしこ",
        ]
    },
    {
        normalized: "なないろ",
        originals: [
            "七色",
        ]
    },
    {
        normalized: "ななくさ",
        originals: [
            "七草",
        ]
    },
    {
        normalized: "なにいろ",
        originals: [
            "何色",
        ]
    },
    {
        normalized: "なにこと",
        originals: [
            "何事",
        ]
    },
    {
        normalized: "なにもの",
        originals: [
            "何者",
        ]
    },
    {
        normalized: "なのはな",
        originals: [
            "菜の花",
        ]
    },
    {
        normalized: "なふきん",
        originals: [
            "ナプキン",
        ]
    },
    {
        normalized: "なへしき",
        originals: [
            "なべ敷き",
        ]
    },
    {
        normalized: "なへそこ",
        originals: [
            "なべ底",
        ]
    },
    {
        normalized: "なへふた",
        originals: [
            "なべぶた",
        ]
    },
    {
        normalized: "なへもの",
        originals: [
            "なべ物",
        ]
    },
    {
        normalized: "なまくひ",
        originals: [
            "生首",
        ]
    },
    {
        normalized: "なまこみ",
        originals: [
            "生ごみ",
        ]
    },
    {
        normalized: "なまにえ",
        originals: [
            "生煮え",
        ]
    },
    {
        normalized: "なまもの",
        originals: [
            "生物",
        ]
    },
    {
        normalized: "なみおと",
        originals: [
            "波音",
        ]
    },
    {
        normalized: "なみため",
        originals: [
            "涙目",
        ]
    },
    {
        normalized: "なみのり",
        originals: [
            "波乗り",
        ]
    },
    {
        normalized: "なめくし",
        originals: [
            "なめくじ",
        ]
    },
    {
        normalized: "ならわし",
        originals: [
            "習わし",
        ]
    },
    {
        normalized: "なりきん",
        originals: [
            "成金",
        ]
    },
    {
        normalized: "なりもの",
        originals: [
            "鳴り物",
        ]
    },
    {
        normalized: "なりゆき",
        originals: [
            "成り行き",
        ]
    },
    {
        normalized: "なるかみ",
        originals: [
            "雷神",
        ]
    },
    {
        normalized: "なるほと",
        originals: [
            "なるほど",
        ]
    },
    {
        normalized: "なわとひ",
        originals: [
            "縄跳び",
        ]
    },
    {
        normalized: "なわはり",
        originals: [
            "縄張り",
        ]
    },
    {
        normalized: "なんかん",
        originals: [
            "難関",
        ]
    },
    {
        normalized: "なんきん",
        originals: [
            "軟禁",
        ]
    },
    {
        normalized: "なんくせ",
        originals: [
            "難癖",
        ]
    },
    {
        normalized: "なんこう",
        originals: [
            "難航",
        ]
    },
    {
        normalized: "なんこく",
        originals: [
            "南国",
        ]
    },
    {
        normalized: "なんこつ",
        originals: [
            "軟骨",
        ]
    },
    {
        normalized: "なんさん",
        originals: [
            "難産",
        ]
    },
    {
        normalized: "なんしき",
        originals: [
            "軟式",
        ]
    },
    {
        normalized: "なんしよ",
        originals: [
            "難所",
        ]
    },
    {
        normalized: "なんすい",
        originals: [
            "軟水",
        ]
    },
    {
        normalized: "なんせい",
        originals: [
            "南西",
        ]
    },
    {
        normalized: "なんたい",
        originals: [
            "難題",
        ]
    },
    {
        normalized: "なんたん",
        originals: [
            "南端",
        ]
    },
    {
        normalized: "なんてき",
        originals: [
            "難敵",
        ]
    },
    {
        normalized: "なんてん",
        originals: [
            "難点",
        ]
    },
    {
        normalized: "なんとう",
        originals: [
            "南東",
        ]
    },
    {
        normalized: "なんとき",
        originals: [
            "何時",
        ]
    },
    {
        normalized: "なんによ",
        originals: [
            "男女",
        ]
    },
    {
        normalized: "なんはん",
        originals: [
            "南蛮",
        ]
    },
    {
        normalized: "なんへい",
        originals: [
            "南米",
        ]
    },
    {
        normalized: "なんほく",
        originals: [
            "南北",
        ]
    },
    {
        normalized: "なんみん",
        originals: [
            "難民",
        ]
    },
    {
        normalized: "なんもん",
        originals: [
            "難問",
        ]
    },
    {
        normalized: "にいつま",
        originals: [
            "新妻",
        ]
    },
    {
        normalized: "におろし",
        originals: [
            "荷下ろし",
        ]
    },
    {
        normalized: "にきわい",
        originals: [
            "にぎわい",
        ]
    },
    {
        normalized: "にくかん",
        originals: [
            "肉眼",
        ]
    },
    {
        normalized: "にくしつ",
        originals: [
            "肉質",
        ]
    },
    {
        normalized: "にくしみ",
        originals: [
            "憎しみ",
        ]
    },
    {
        normalized: "にくしん",
        originals: [
            "肉親",
        ]
    },
    {
        normalized: "にくすれ",
        originals: [
            "煮崩れ",
            "荷崩れ",
        ]
    },
    {
        normalized: "にくせい",
        originals: [
            "肉声",
        ]
    },
    {
        normalized: "にくたい",
        originals: [
            "肉体",
        ]
    },
    {
        normalized: "にくつき",
        originals: [
            "肉付き",
        ]
    },
    {
        normalized: "にくつけ",
        originals: [
            "肉付け",
        ]
    },
    {
        normalized: "にくまん",
        originals: [
            "肉まん",
        ]
    },
    {
        normalized: "にくるい",
        originals: [
            "肉類",
        ]
    },
    {
        normalized: "にくるま",
        originals: [
            "荷車",
        ]
    },
    {
        normalized: "にけあし",
        originals: [
            "逃げ足",
        ]
    },
    {
        normalized: "にけみち",
        originals: [
            "逃げ道",
        ]
    },
    {
        normalized: "にここり",
        originals: [
            "煮こごり",
        ]
    },
    {
        normalized: "にこちん",
        originals: [
            "ニコチン",
        ]
    },
    {
        normalized: "にさかな",
        originals: [
            "煮魚",
        ]
    },
    {
        normalized: "にしかせ",
        originals: [
            "西風",
        ]
    },
    {
        normalized: "にしくち",
        originals: [
            "西口",
        ]
    },
    {
        normalized: "にしむき",
        originals: [
            "西向き",
        ]
    },
    {
        normalized: "にしゆう",
        originals: [
            "二十",
        ]
    },
    {
        normalized: "にせさつ",
        originals: [
            "偽札",
        ]
    },
    {
        normalized: "にせもの",
        originals: [
            "偽物",
            "偽者",
        ]
    },
    {
        normalized: "にたまこ",
        originals: [
            "煮卵",
        ]
    },
    {
        normalized: "にちきん",
        originals: [
            "日銀",
        ]
    },
    {
        normalized: "にちほつ",
        originals: [
            "日没",
        ]
    },
    {
        normalized: "にちよう",
        originals: [
            "日曜",
            "日用",
        ]
    },
    {
        normalized: "につかん",
        originals: [
            "日刊",
        ]
    },
    {
        normalized: "につきん",
        originals: [
            "日勤",
        ]
    },
    {
        normalized: "につけい",
        originals: [
            "日系",
        ]
    },
    {
        normalized: "につこう",
        originals: [
            "日光",
        ]
    },
    {
        normalized: "につさん",
        originals: [
            "日産",
        ]
    },
    {
        normalized: "につしや",
        originals: [
            "日射",
        ]
    },
    {
        normalized: "につすう",
        originals: [
            "日数",
        ]
    },
    {
        normalized: "につてい",
        originals: [
            "日程",
        ]
    },
    {
        normalized: "につとう",
        originals: [
            "日当",
        ]
    },
    {
        normalized: "につほう",
        originals: [
            "日報",
        ]
    },
    {
        normalized: "につほん",
        originals: [
            "日本",
        ]
    },
    {
        normalized: "にないて",
        originals: [
            "担い手",
        ]
    },
    {
        normalized: "にのうて",
        originals: [
            "二の腕",
        ]
    },
    {
        normalized: "にのつき",
        originals: [
            "二の次",
        ]
    },
    {
        normalized: "にのまい",
        originals: [
            "二の舞",
        ]
    },
    {
        normalized: "にまいめ",
        originals: [
            "二枚目",
        ]
    },
    {
        normalized: "にゆうか",
        originals: [
            "入荷",
        ]
    },
    {
        normalized: "にゆうこ",
        originals: [
            "入庫",
        ]
    },
    {
        normalized: "にゆうし",
        originals: [
            "乳歯",
            "入試",
            "乳児",
        ]
    },
    {
        normalized: "にゆうふ",
        originals: [
            "入部",
        ]
    },
    {
        normalized: "にようい",
        originals: [
            "尿意",
        ]
    },
    {
        normalized: "にようそ",
        originals: [
            "尿素",
        ]
    },
    {
        normalized: "にりゆう",
        originals: [
            "二流",
        ]
    },
    {
        normalized: "にわいし",
        originals: [
            "庭石",
        ]
    },
    {
        normalized: "にわくさ",
        originals: [
            "庭草",
        ]
    },
    {
        normalized: "にわさき",
        originals: [
            "庭先",
        ]
    },
    {
        normalized: "にわとり",
        originals: [
            "にわとり",
        ]
    },
    {
        normalized: "にんきよ",
        originals: [
            "人魚",
        ]
    },
    {
        normalized: "にんけん",
        originals: [
            "人間",
        ]
    },
    {
        normalized: "にんしき",
        originals: [
            "認識",
        ]
    },
    {
        normalized: "にんしや",
        originals: [
            "忍者",
        ]
    },
    {
        normalized: "にんしん",
        originals: [
            "妊娠",
            "にんじん",
        ]
    },
    {
        normalized: "にんすう",
        originals: [
            "人数",
        ]
    },
    {
        normalized: "にんそう",
        originals: [
            "人相",
        ]
    },
    {
        normalized: "にんたい",
        originals: [
            "忍耐",
        ]
    },
    {
        normalized: "にんてい",
        originals: [
            "認定",
        ]
    },
    {
        normalized: "にんとう",
        originals: [
            "人道",
        ]
    },
    {
        normalized: "にんにく",
        originals: [
            "にんにく",
        ]
    },
    {
        normalized: "にんほう",
        originals: [
            "忍法",
        ]
    },
    {
        normalized: "にんめい",
        originals: [
            "任命",
        ]
    },
    {
        normalized: "ぬいはり",
        originals: [
            "縫い針",
        ]
    },
    {
        normalized: "ぬいもの",
        originals: [
            "縫い物",
        ]
    },
    {
        normalized: "ぬかつけ",
        originals: [
            "ぬか漬け",
        ]
    },
    {
        normalized: "ぬかとこ",
        originals: [
            "ぬか床",
        ]
    },
    {
        normalized: "ぬかるみ",
        originals: [
            "ぬかるみ",
        ]
    },
    {
        normalized: "ぬきあし",
        originals: [
            "抜き足",
        ]
    },
    {
        normalized: "ぬきうち",
        originals: [
            "抜き打ち",
        ]
    },
    {
        normalized: "ぬきすて",
        originals: [
            "脱ぎ捨て",
        ]
    },
    {
        normalized: "ぬきとり",
        originals: [
            "抜き取り",
        ]
    },
    {
        normalized: "ぬくもり",
        originals: [
            "ぬくもり",
        ]
    },
    {
        normalized: "ぬけあな",
        originals: [
            "抜け穴",
        ]
    },
    {
        normalized: "ぬけおち",
        originals: [
            "抜け落ち",
        ]
    },
    {
        normalized: "ぬけかけ",
        originals: [
            "抜け駆け",
        ]
    },
    {
        normalized: "ぬけから",
        originals: [
            "抜け殻",
        ]
    },
    {
        normalized: "ぬけみち",
        originals: [
            "抜け道",
        ]
    },
    {
        normalized: "ぬすひと",
        originals: [
            "盗人",
        ]
    },
    {
        normalized: "ぬすみみ",
        originals: [
            "盗み見",
        ]
    },
    {
        normalized: "ぬりたて",
        originals: [
            "塗りたて",
        ]
    },
    {
        normalized: "ぬるまゆ",
        originals: [
            "ぬるま湯",
        ]
    },
    {
        normalized: "ぬれきぬ",
        originals: [
            "ぬれ衣",
        ]
    },
    {
        normalized: "ねあかり",
        originals: [
            "値上がり",
        ]
    },
    {
        normalized: "ねかえり",
        originals: [
            "寝返り",
        ]
    },
    {
        normalized: "ねきらい",
        originals: [
            "ねぎらい",
        ]
    },
    {
        normalized: "ねくすれ",
        originals: [
            "値崩れ",
        ]
    },
    {
        normalized: "ねくたい",
        originals: [
            "ネクタイ",
        ]
    },
    {
        normalized: "ねここち",
        originals: [
            "寝心地",
        ]
    },
    {
        normalized: "ねこした",
        originals: [
            "猫舌",
        ]
    },
    {
        normalized: "ねこはは",
        originals: [
            "猫ばば",
        ]
    },
    {
        normalized: "ねさかり",
        originals: [
            "値下がり",
        ]
    },
    {
        normalized: "ねしこみ",
        originals: [
            "ねじ込み",
        ]
    },
    {
        normalized: "ねすかた",
        originals: [
            "寝姿",
        ]
    },
    {
        normalized: "ねたやし",
        originals: [
            "根絶やし",
        ]
    },
    {
        normalized: "ねつあい",
        originals: [
            "熱愛",
        ]
    },
    {
        normalized: "ねつえん",
        originals: [
            "熱演",
        ]
    },
    {
        normalized: "ねつけつ",
        originals: [
            "熱血",
        ]
    },
    {
        normalized: "ねつせん",
        originals: [
            "熱戦",
        ]
    },
    {
        normalized: "ねつそう",
        originals: [
            "捏造",
        ]
    },
    {
        normalized: "ねつたい",
        originals: [
            "熱帯",
        ]
    },
    {
        normalized: "ねつとう",
        originals: [
            "熱湯",
        ]
    },
    {
        normalized: "ねつふう",
        originals: [
            "熱風",
        ]
    },
    {
        normalized: "ねつへん",
        originals: [
            "熱弁",
        ]
    },
    {
        normalized: "ねつほう",
        originals: [
            "熱望",
        ]
    },
    {
        normalized: "ねとまり",
        originals: [
            "寝泊まり",
        ]
    },
    {
        normalized: "ねはりけ",
        originals: [
            "粘り気",
        ]
    },
    {
        normalized: "ねふくろ",
        originals: [
            "寝袋",
        ]
    },
    {
        normalized: "ねまわし",
        originals: [
            "根回し",
        ]
    },
    {
        normalized: "ねらいめ",
        originals: [
            "ねらい目",
        ]
    },
    {
        normalized: "ねりもの",
        originals: [
            "練り物",
        ]
    },
    {
        normalized: "ねんえき",
        originals: [
            "粘液",
        ]
    },
    {
        normalized: "ねんおし",
        originals: [
            "念押し",
        ]
    },
    {
        normalized: "ねんかく",
        originals: [
            "年額",
        ]
    },
    {
        normalized: "ねんかん",
        originals: [
            "年間",
            "念願",
        ]
    },
    {
        normalized: "ねんきん",
        originals: [
            "年金",
        ]
    },
    {
        normalized: "ねんけつ",
        originals: [
            "年月",
        ]
    },
    {
        normalized: "ねんこう",
        originals: [
            "年号",
        ]
    },
    {
        normalized: "ねんしき",
        originals: [
            "年式",
        ]
    },
    {
        normalized: "ねんしや",
        originals: [
            "念写",
        ]
    },
    {
        normalized: "ねんしよ",
        originals: [
            "年初",
        ]
    },
    {
        normalized: "ねんすう",
        originals: [
            "年数",
        ]
    },
    {
        normalized: "ねんたい",
        originals: [
            "年代",
        ]
    },
    {
        normalized: "ねんとう",
        originals: [
            "念頭",
        ]
    },
    {
        normalized: "ねんない",
        originals: [
            "年内",
        ]
    },
    {
        normalized: "ねんはい",
        originals: [
            "年輩",
            "年配",
        ]
    },
    {
        normalized: "ねんふつ",
        originals: [
            "念仏",
        ]
    },
    {
        normalized: "ねんほう",
        originals: [
            "年俸",
        ]
    },
    {
        normalized: "ねんまく",
        originals: [
            "粘膜",
        ]
    },
    {
        normalized: "ねんまつ",
        originals: [
            "年末",
        ]
    },
    {
        normalized: "ねんりき",
        originals: [
            "念力",
        ]
    },
    {
        normalized: "ねんりつ",
        originals: [
            "年率",
        ]
    },
    {
        normalized: "ねんりん",
        originals: [
            "年輪",
        ]
    },
    {
        normalized: "ねんれい",
        originals: [
            "年齢",
        ]
    },
    {
        normalized: "のいちこ",
        originals: [
            "野いちご",
        ]
    },
    {
        normalized: "のうえん",
        originals: [
            "農園",
        ]
    },
    {
        normalized: "のうこう",
        originals: [
            "農耕",
        ]
    },
    {
        normalized: "のうこつ",
        originals: [
            "納骨",
        ]
    },
    {
        normalized: "のうこん",
        originals: [
            "濃紺",
        ]
    },
    {
        normalized: "のうさき",
        originals: [
            "野うさぎ",
        ]
    },
    {
        normalized: "のうさく",
        originals: [
            "農作",
        ]
    },
    {
        normalized: "のうしや",
        originals: [
            "納車",
        ]
    },
    {
        normalized: "のうせい",
        originals: [
            "納税",
        ]
    },
    {
        normalized: "のうそん",
        originals: [
            "農村",
        ]
    },
    {
        normalized: "のうひん",
        originals: [
            "納品",
        ]
    },
    {
        normalized: "のうみつ",
        originals: [
            "濃密",
        ]
    },
    {
        normalized: "のうみん",
        originals: [
            "農民",
        ]
    },
    {
        normalized: "のうめん",
        originals: [
            "能面",
        ]
    },
    {
        normalized: "のうやく",
        originals: [
            "農薬",
        ]
    },
    {
        normalized: "のうりつ",
        originals: [
            "能率",
        ]
    },
    {
        normalized: "のきした",
        originals: [
            "軒下",
        ]
    },
    {
        normalized: "のけもの",
        originals: [
            "のけ者",
        ]
    },
    {
        normalized: "のこきり",
        originals: [
            "のこぎり",
        ]
    },
    {
        normalized: "のこりか",
        originals: [
            "残り香",
        ]
    },
    {
        normalized: "のこりひ",
        originals: [
            "残り火",
        ]
    },
    {
        normalized: "のこりゆ",
        originals: [
            "残り湯",
        ]
    },
    {
        normalized: "のさらし",
        originals: [
            "野ざらし",
        ]
    },
    {
        normalized: "のしかみ",
        originals: [
            "のし紙",
        ]
    },
    {
        normalized: "のしゆく",
        originals: [
            "野宿",
        ]
    },
    {
        normalized: "のそきみ",
        originals: [
            "のぞき見",
        ]
    },
    {
        normalized: "のちのち",
        originals: [
            "後後",
        ]
    },
    {
        normalized: "のちほと",
        originals: [
            "後ほど",
        ]
    },
    {
        normalized: "のつとり",
        originals: [
            "乗っ取り",
        ]
    },
    {
        normalized: "のとこし",
        originals: [
            "のど越し",
        ]
    },
    {
        normalized: "のともと",
        originals: [
            "のど元",
        ]
    },
    {
        normalized: "のねすみ",
        originals: [
            "野ねずみ",
        ]
    },
    {
        normalized: "ののしり",
        originals: [
            "ののしり",
        ]
    },
    {
        normalized: "のはなし",
        originals: [
            "野放し",
        ]
    },
    {
        normalized: "のひのひ",
        originals: [
            "延び延び",
        ]
    },
    {
        normalized: "のひりつ",
        originals: [
            "伸び率",
        ]
    },
    {
        normalized: "のへほう",
        originals: [
            "延べ棒",
        ]
    },
    {
        normalized: "のみかい",
        originals: [
            "飲み会",
        ]
    },
    {
        normalized: "のみくい",
        originals: [
            "飲み食い",
        ]
    },
    {
        normalized: "のみくち",
        originals: [
            "飲み口",
        ]
    },
    {
        normalized: "のみこみ",
        originals: [
            "飲み込み",
        ]
    },
    {
        normalized: "のみしろ",
        originals: [
            "飲み代",
        ]
    },
    {
        normalized: "のみみす",
        originals: [
            "飲み水",
        ]
    },
    {
        normalized: "のみもの",
        originals: [
            "飲み物",
        ]
    },
    {
        normalized: "のらいぬ",
        originals: [
            "野良犬",
        ]
    },
    {
        normalized: "のらねこ",
        originals: [
            "野良猫",
        ]
    },
    {
        normalized: "のりあい",
        originals: [
            "乗り合い",
        ]
    },
    {
        normalized: "のりいれ",
        originals: [
            "乗り入れ",
        ]
    },
    {
        normalized: "のりおり",
        originals: [
            "乗り降り",
        ]
    },
    {
        normalized: "のりかえ",
        originals: [
            "乗り換え",
        ]
    },
    {
        normalized: "のりこし",
        originals: [
            "乗り越し",
        ]
    },
    {
        normalized: "のりつけ",
        originals: [
            "のり付け",
        ]
    },
    {
        normalized: "のりまき",
        originals: [
            "のり巻き",
        ]
    },
    {
        normalized: "のりもの",
        originals: [
            "乗り物",
        ]
    },
    {
        normalized: "のんへえ",
        originals: [
            "飲んべえ",
        ]
    },
    {
        normalized: "はいいろ",
        originals: [
            "灰色",
        ]
    },
    {
        normalized: "はいいん",
        originals: [
            "敗因",
        ]
    },
    {
        normalized: "はいえい",
        originals: [
            "背泳",
        ]
    },
    {
        normalized: "はいえな",
        originals: [
            "ハイエナ",
        ]
    },
    {
        normalized: "はいえん",
        originals: [
            "肺炎",
        ]
    },
    {
        normalized: "はいおく",
        originals: [
            "廃屋",
        ]
    },
    {
        normalized: "はいかい",
        originals: [
            "徘徊",
        ]
    },
    {
        normalized: "はいかく",
        originals: [
            "倍額",
        ]
    },
    {
        normalized: "はいから",
        originals: [
            "ハイカラ",
        ]
    },
    {
        normalized: "はいかん",
        originals: [
            "廃刊",
            "配管",
            "肺癌",
        ]
    },
    {
        normalized: "はいきよ",
        originals: [
            "廃墟",
        ]
    },
    {
        normalized: "はいきん",
        originals: [
            "ばい菌",
        ]
    },
    {
        normalized: "はいけい",
        originals: [
            "拝啓",
            "背景",
        ]
    },
    {
        normalized: "はいけん",
        originals: [
            "拝見",
        ]
    },
    {
        normalized: "はいこう",
        originals: [
            "廃校",
            "配合",
        ]
    },
    {
        normalized: "はいさい",
        originals: [
            "廃材",
        ]
    },
    {
        normalized: "はいさら",
        originals: [
            "灰皿",
        ]
    },
    {
        normalized: "はいしや",
        originals: [
            "廃車",
            "敗者",
            "配車",
        ]
    },
    {
        normalized: "はいしよ",
        originals: [
            "排除",
        ]
    },
    {
        normalized: "はいしん",
        originals: [
            "配信",
            "廃人",
        ]
    },
    {
        normalized: "はいすい",
        originals: [
            "排水",
        ]
    },
    {
        normalized: "はいすう",
        originals: [
            "倍数",
        ]
    },
    {
        normalized: "はいせつ",
        originals: [
            "排泄",
        ]
    },
    {
        normalized: "はいせん",
        originals: [
            "敗戦",
            "配線",
            "配膳",
        ]
    },
    {
        normalized: "はいそう",
        originals: [
            "配送",
            "倍増",
        ]
    },
    {
        normalized: "はいそく",
        originals: [
            "配属",
            "倍速",
        ]
    },
    {
        normalized: "はいたい",
        originals: [
            "敗退",
        ]
    },
    {
        normalized: "はいたつ",
        originals: [
            "配達",
        ]
    },
    {
        normalized: "はいてく",
        originals: [
            "ハイテク",
        ]
    },
    {
        normalized: "はいてん",
        originals: [
            "売店",
        ]
    },
    {
        normalized: "はいとう",
        originals: [
            "配当",
        ]
    },
    {
        normalized: "はいとく",
        originals: [
            "拝読",
        ]
    },
    {
        normalized: "はいはい",
        originals: [
            "はいはい",
            "売買",
        ]
    },
    {
        normalized: "はいはす",
        originals: [
            "バイパス",
        ]
    },
    {
        normalized: "はいはん",
        originals: [
            "廃盤",
        ]
    },
    {
        normalized: "はいひん",
        originals: [
            "廃品",
        ]
    },
    {
        normalized: "はいふん",
        originals: [
            "ハイフン",
            "配分",
        ]
    },
    {
        normalized: "はいへん",
        originals: [
            "排便",
        ]
    },
    {
        normalized: "はいほく",
        originals: [
            "敗北",
        ]
    },
    {
        normalized: "はいめい",
        originals: [
            "売名",
        ]
    },
    {
        normalized: "はいめん",
        originals: [
            "背面",
        ]
    },
    {
        normalized: "はいやく",
        originals: [
            "配役",
        ]
    },
    {
        normalized: "はいゆう",
        originals: [
            "俳優",
        ]
    },
    {
        normalized: "はいよう",
        originals: [
            "培養",
        ]
    },
    {
        normalized: "はいらん",
        originals: [
            "排卵",
        ]
    },
    {
        normalized: "はいりつ",
        originals: [
            "倍率",
        ]
    },
    {
        normalized: "はいりよ",
        originals: [
            "配慮",
        ]
    },
    {
        normalized: "はいれつ",
        originals: [
            "配列",
        ]
    },
    {
        normalized: "はえきわ",
        originals: [
            "生え際",
        ]
    },
    {
        normalized: "はえぬき",
        originals: [
            "生え抜き",
        ]
    },
    {
        normalized: "はかいし",
        originals: [
            "墓石",
        ]
    },
    {
        normalized: "はかんす",
        originals: [
            "バカンス",
        ]
    },
    {
        normalized: "はきしり",
        originals: [
            "歯ぎしり",
        ]
    },
    {
        normalized: "はきもの",
        originals: [
            "履き物",
        ]
    },
    {
        normalized: "はきゆう",
        originals: [
            "波及",
        ]
    },
    {
        normalized: "はきよく",
        originals: [
            "破局",
        ]
    },
    {
        normalized: "はくあい",
        originals: [
            "博愛",
        ]
    },
    {
        normalized: "はくえん",
        originals: [
            "白煙",
        ]
    },
    {
        normalized: "はくおん",
        originals: [
            "爆音",
        ]
    },
    {
        normalized: "はくかい",
        originals: [
            "迫害",
        ]
    },
    {
        normalized: "はくかく",
        originals: [
            "博学",
        ]
    },
    {
        normalized: "はくけき",
        originals: [
            "爆撃",
        ]
    },
    {
        normalized: "はくさい",
        originals: [
            "白菜",
        ]
    },
    {
        normalized: "はくしゆ",
        originals: [
            "拍手",
            "白寿",
            "麦酒",
        ]
    },
    {
        normalized: "はくしん",
        originals: [
            "迫真",
            "白人",
        ]
    },
    {
        normalized: "はくせい",
        originals: [
            "剥製",
        ]
    },
    {
        normalized: "はくせん",
        originals: [
            "白線",
        ]
    },
    {
        normalized: "はくたい",
        originals: [
            "莫大",
        ]
    },
    {
        normalized: "はくたく",
        originals: [
            "白濁",
        ]
    },
    {
        normalized: "はくたん",
        originals: [
            "爆弾",
        ]
    },
    {
        normalized: "はくちく",
        originals: [
            "爆竹",
        ]
    },
    {
        normalized: "はくてん",
        originals: [
            "バク転",
        ]
    },
    {
        normalized: "はくとう",
        originals: [
            "白桃",
        ]
    },
    {
        normalized: "はくねつ",
        originals: [
            "白熱",
        ]
    },
    {
        normalized: "はくはつ",
        originals: [
            "白髪",
            "爆発",
        ]
    },
    {
        normalized: "はくふう",
        originals: [
            "爆風",
        ]
    },
    {
        normalized: "はくまい",
        originals: [
            "白米",
        ]
    },
    {
        normalized: "はくまつ",
        originals: [
            "幕末",
        ]
    },
    {
        normalized: "はくめい",
        originals: [
            "薄命",
        ]
    },
    {
        normalized: "はくやく",
        originals: [
            "爆薬",
        ]
    },
    {
        normalized: "はくるま",
        originals: [
            "歯車",
        ]
    },
    {
        normalized: "はくれつ",
        originals: [
            "爆裂",
        ]
    },
    {
        normalized: "はけかく",
        originals: [
            "化学",
        ]
    },
    {
        normalized: "はけくち",
        originals: [
            "はけ口",
        ]
    },
    {
        normalized: "はけたか",
        originals: [
            "はげたか",
        ]
    },
    {
        normalized: "はけねこ",
        originals: [
            "化け猫",
        ]
    },
    {
        normalized: "はけまし",
        originals: [
            "励まし",
        ]
    },
    {
        normalized: "はけもの",
        originals: [
            "化け物",
        ]
    },
    {
        normalized: "はこいた",
        originals: [
            "羽子板",
        ]
    },
    {
        normalized: "はこいり",
        originals: [
            "箱入り",
        ]
    },
    {
        normalized: "はこたえ",
        originals: [
            "歯ごたえ",
        ]
    },
    {
        normalized: "はこつめ",
        originals: [
            "箱詰め",
        ]
    },
    {
        normalized: "はころも",
        originals: [
            "羽衣",
        ]
    },
    {
        normalized: "はさわり",
        originals: [
            "歯触り",
        ]
    },
    {
        normalized: "はしおき",
        originals: [
            "はし置き",
        ]
    },
    {
        normalized: "はしくれ",
        originals: [
            "端くれ",
        ]
    },
    {
        normalized: "はしつこ",
        originals: [
            "端っこ",
        ]
    },
    {
        normalized: "はしまり",
        originals: [
            "始まり",
        ]
    },
    {
        normalized: "はしやま",
        originals: [
            "パジャマ",
        ]
    },
    {
        normalized: "はしゆつ",
        originals: [
            "馬術",
        ]
    },
    {
        normalized: "はしよう",
        originals: [
            "芭蕉",
        ]
    },
    {
        normalized: "はしらい",
        originals: [
            "恥じらい",
        ]
    },
    {
        normalized: "はすたふ",
        originals: [
            "バスタブ",
        ]
    },
    {
        normalized: "はそこん",
        originals: [
            "パソコン",
        ]
    },
    {
        normalized: "はたあし",
        originals: [
            "ばた足",
        ]
    },
    {
        normalized: "はたあれ",
        originals: [
            "肌荒れ",
        ]
    },
    {
        normalized: "はたいろ",
        originals: [
            "肌色",
        ]
    },
    {
        normalized: "はたさく",
        originals: [
            "畑作",
        ]
    },
    {
        normalized: "はたさむ",
        originals: [
            "肌寒",
        ]
    },
    {
        normalized: "はたらき",
        originals: [
            "働き",
        ]
    },
    {
        normalized: "はちうえ",
        originals: [
            "鉢植え",
        ]
    },
    {
        normalized: "はちかい",
        originals: [
            "場違い",
        ]
    },
    {
        normalized: "はちのす",
        originals: [
            "はちの巣",
        ]
    },
    {
        normalized: "はちまき",
        originals: [
            "鉢巻き",
        ]
    },
    {
        normalized: "はちみつ",
        originals: [
            "はちみつ",
        ]
    },
    {
        normalized: "はちよう",
        originals: [
            "波長",
        ]
    },
    {
        normalized: "はつあん",
        originals: [
            "発案",
        ]
    },
    {
        normalized: "はついく",
        originals: [
            "発育",
        ]
    },
    {
        normalized: "はつおん",
        originals: [
            "発音",
        ]
    },
    {
        normalized: "はつかく",
        originals: [
            "発覚",
        ]
    },
    {
        normalized: "はつかん",
        originals: [
            "発刊",
            "発汗",
        ]
    },
    {
        normalized: "はつきん",
        originals: [
            "白金",
            "罰金",
        ]
    },
    {
        normalized: "はつくつ",
        originals: [
            "発掘",
        ]
    },
    {
        normalized: "はつけん",
        originals: [
            "発券",
            "発見",
            "発言",
        ]
    },
    {
        normalized: "はつこい",
        originals: [
            "初恋",
        ]
    },
    {
        normalized: "はつこう",
        originals: [
            "発光",
            "発行",
            "発酵",
        ]
    },
    {
        normalized: "はつこつ",
        originals: [
            "白骨",
        ]
    },
    {
        normalized: "はつさい",
        originals: [
            "伐採",
        ]
    },
    {
        normalized: "はつさん",
        originals: [
            "発散",
        ]
    },
    {
        normalized: "はつしも",
        originals: [
            "初霜",
        ]
    },
    {
        normalized: "はつしや",
        originals: [
            "発射",
        ]
    },
    {
        normalized: "はつしん",
        originals: [
            "発信",
            "発疹",
            "発進",
        ]
    },
    {
        normalized: "はつすい",
        originals: [
            "抜粋",
        ]
    },
    {
        normalized: "はつする",
        originals: [
            "ハッスル",
        ]
    },
    {
        normalized: "はつせい",
        originals: [
            "発声",
            "発生",
        ]
    },
    {
        normalized: "はつそう",
        originals: [
            "発想",
            "発送",
        ]
    },
    {
        normalized: "はつそく",
        originals: [
            "罰則",
        ]
    },
    {
        normalized: "はつたつ",
        originals: [
            "発達",
        ]
    },
    {
        normalized: "はつたり",
        originals: [
            "はったり",
        ]
    },
    {
        normalized: "はつてん",
        originals: [
            "発展",
            "発電",
        ]
    },
    {
        normalized: "はつとう",
        originals: [
            "発動",
        ]
    },
    {
        normalized: "はつねつ",
        originals: [
            "発熱",
        ]
    },
    {
        normalized: "はつのり",
        originals: [
            "初乗り",
        ]
    },
    {
        normalized: "はつはい",
        originals: [
            "発売",
        ]
    },
    {
        normalized: "はつはる",
        originals: [
            "初春",
        ]
    },
    {
        normalized: "はつほう",
        originals: [
            "発泡",
            "発砲",
        ]
    },
    {
        normalized: "はつほん",
        originals: [
            "抜本",
        ]
    },
    {
        normalized: "はつまこ",
        originals: [
            "初孫",
        ]
    },
    {
        normalized: "はつみみ",
        originals: [
            "初耳",
        ]
    },
    {
        normalized: "はつめい",
        originals: [
            "発明",
        ]
    },
    {
        normalized: "はつもう",
        originals: [
            "発毛",
        ]
    },
    {
        normalized: "はつもの",
        originals: [
            "初物",
        ]
    },
    {
        normalized: "はつゆき",
        originals: [
            "初雪",
        ]
    },
    {
        normalized: "はつゆめ",
        originals: [
            "初夢",
        ]
    },
    {
        normalized: "はつれい",
        originals: [
            "発令",
        ]
    },
    {
        normalized: "はとむき",
        originals: [
            "はと麦",
        ]
    },
    {
        normalized: "はとろん",
        originals: [
            "パトロン",
        ]
    },
    {
        normalized: "はないき",
        originals: [
            "鼻息",
        ]
    },
    {
        normalized: "はなうた",
        originals: [
            "鼻歌",
        ]
    },
    {
        normalized: "はなかこ",
        originals: [
            "花かご",
        ]
    },
    {
        normalized: "はなかせ",
        originals: [
            "鼻風邪",
        ]
    },
    {
        normalized: "はなかた",
        originals: [
            "花形",
        ]
    },
    {
        normalized: "はなかみ",
        originals: [
            "鼻紙",
        ]
    },
    {
        normalized: "はなから",
        originals: [
            "花柄",
        ]
    },
    {
        normalized: "はなくそ",
        originals: [
            "鼻くそ",
        ]
    },
    {
        normalized: "はなこえ",
        originals: [
            "鼻声",
        ]
    },
    {
        normalized: "はなさき",
        originals: [
            "鼻先",
        ]
    },
    {
        normalized: "はなして",
        originals: [
            "話し手",
        ]
    },
    {
        normalized: "はなすし",
        originals: [
            "鼻筋",
        ]
    },
    {
        normalized: "はなその",
        originals: [
            "花園",
        ]
    },
    {
        normalized: "はなたは",
        originals: [
            "花束",
        ]
    },
    {
        normalized: "はなひら",
        originals: [
            "花びら",
        ]
    },
    {
        normalized: "はなふた",
        originals: [
            "花札",
        ]
    },
    {
        normalized: "はなまる",
        originals: [
            "花丸",
        ]
    },
    {
        normalized: "はなみす",
        originals: [
            "鼻水",
        ]
    },
    {
        normalized: "はなみち",
        originals: [
            "花道",
        ]
    },
    {
        normalized: "はなむこ",
        originals: [
            "花婿",
        ]
    },
    {
        normalized: "はなよめ",
        originals: [
            "花嫁",
        ]
    },
    {
        normalized: "はならひ",
        originals: [
            "歯並び",
        ]
    },
    {
        normalized: "はにかみ",
        originals: [
            "はにかみ",
        ]
    },
    {
        normalized: "はにつく",
        originals: [
            "パニック",
        ]
    },
    {
        normalized: "はのらま",
        originals: [
            "パノラマ",
        ]
    },
    {
        normalized: "ははおや",
        originals: [
            "母親",
        ]
    },
    {
        normalized: "ははかた",
        originals: [
            "母方",
        ]
    },
    {
        normalized: "ははたき",
        originals: [
            "羽ばたき",
        ]
    },
    {
        normalized: "ははとひ",
        originals: [
            "幅跳び",
        ]
    },
    {
        normalized: "ははぬき",
        originals: [
            "ばば抜き",
        ]
    },
    {
        normalized: "ははよせ",
        originals: [
            "幅寄せ",
        ]
    },
    {
        normalized: "ははろあ",
        originals: [
            "ババロア",
        ]
    },
    {
        normalized: "はふりか",
        originals: [
            "パプリカ",
        ]
    },
    {
        normalized: "はまくり",
        originals: [
            "はまぐり",
        ]
    },
    {
        normalized: "はみかき",
        originals: [
            "歯磨き",
        ]
    },
    {
        normalized: "はみたし",
        originals: [
            "はみ出し",
        ]
    },
    {
        normalized: "はめこみ",
        originals: [
            "はめ込み",
        ]
    },
    {
        normalized: "はやあし",
        originals: [
            "早足",
        ]
    },
    {
        normalized: "はやうち",
        originals: [
            "早撃ち",
        ]
    },
    {
        normalized: "はやおき",
        originals: [
            "早起き",
        ]
    },
    {
        normalized: "はやくい",
        originals: [
            "早食い",
        ]
    },
    {
        normalized: "はやくち",
        originals: [
            "早口",
        ]
    },
    {
        normalized: "はやさき",
        originals: [
            "早咲き",
        ]
    },
    {
        normalized: "はやしに",
        originals: [
            "早死に",
        ]
    },
    {
        normalized: "はやはん",
        originals: [
            "早番",
        ]
    },
    {
        normalized: "はやふさ",
        originals: [
            "はやぶさ",
        ]
    },
    {
        normalized: "はやめし",
        originals: [
            "早飯",
        ]
    },
    {
        normalized: "はやわさ",
        originals: [
            "早業",
        ]
    },
    {
        normalized: "はらいせ",
        originals: [
            "腹いせ",
        ]
    },
    {
        normalized: "はらいた",
        originals: [
            "腹痛",
        ]
    },
    {
        normalized: "はらいろ",
        originals: [
            "ばら色",
        ]
    },
    {
        normalized: "はらけい",
        originals: [
            "腹芸",
        ]
    },
    {
        normalized: "はらすし",
        originals: [
            "ばらずし",
        ]
    },
    {
        normalized: "はらそる",
        originals: [
            "パラソル",
        ]
    },
    {
        normalized: "はらつは",
        originals: [
            "原っぱ",
        ]
    },
    {
        normalized: "はらにく",
        originals: [
            "ばら肉",
        ]
    },
    {
        normalized: "はらへこ",
        originals: [
            "腹ぺこ",
        ]
    },
    {
        normalized: "はらまき",
        originals: [
            "腹巻き",
            "ばらまき",
        ]
    },
    {
        normalized: "はらもち",
        originals: [
            "腹持ち",
        ]
    },
    {
        normalized: "はらわた",
        originals: [
            "はらわた",
        ]
    },
    {
        normalized: "はらんす",
        originals: [
            "バランス",
        ]
    },
    {
        normalized: "はりあい",
        originals: [
            "張り合い",
        ]
    },
    {
        normalized: "はりうむ",
        originals: [
            "バリウム",
        ]
    },
    {
        normalized: "はりかえ",
        originals: [
            "張り替え",
        ]
    },
    {
        normalized: "はりかね",
        originals: [
            "針金",
        ]
    },
    {
        normalized: "はりかみ",
        originals: [
            "張り紙",
        ]
    },
    {
        normalized: "はりかん",
        originals: [
            "バリカン",
        ]
    },
    {
        normalized: "はりこみ",
        originals: [
            "張り込み",
        ]
    },
    {
        normalized: "はりつけ",
        originals: [
            "はりつけ",
        ]
    },
    {
        normalized: "はりほて",
        originals: [
            "張りぼて",
        ]
    },
    {
        normalized: "はるあき",
        originals: [
            "春秋",
        ]
    },
    {
        normalized: "はるかせ",
        originals: [
            "春風",
        ]
    },
    {
        normalized: "はるさき",
        originals: [
            "春先",
        ]
    },
    {
        normalized: "はるさめ",
        originals: [
            "春雨",
        ]
    },
    {
        normalized: "はれつと",
        originals: [
            "パレット",
        ]
    },
    {
        normalized: "はわたり",
        originals: [
            "刃渡り",
        ]
    },
    {
        normalized: "はわふる",
        originals: [
            "パワフル",
        ]
    },
    {
        normalized: "はんえい",
        originals: [
            "反映",
            "繁栄",
        ]
    },
    {
        normalized: "はんえん",
        originals: [
            "半円",
        ]
    },
    {
        normalized: "はんかい",
        originals: [
            "半壊",
            "挽回",
        ]
    },
    {
        normalized: "はんかく",
        originals: [
            "半角",
            "半額",
        ]
    },
    {
        normalized: "はんかち",
        originals: [
            "ハンカチ",
        ]
    },
    {
        normalized: "はんかん",
        originals: [
            "反感",
        ]
    },
    {
        normalized: "はんきん",
        originals: [
            "板金",
        ]
    },
    {
        normalized: "はんくみ",
        originals: [
            "番組",
        ]
    },
    {
        normalized: "はんくる",
        originals: [
            "ハングル",
        ]
    },
    {
        normalized: "はんけい",
        originals: [
            "半径",
        ]
    },
    {
        normalized: "はんけき",
        originals: [
            "反撃",
        ]
    },
    {
        normalized: "はんけつ",
        originals: [
            "判決",
            "半月",
        ]
    },
    {
        normalized: "はんけん",
        originals: [
            "半減",
            "番犬",
        ]
    },
    {
        normalized: "はんこう",
        originals: [
            "反抗",
            "犯行",
            "番号",
        ]
    },
    {
        normalized: "はんこく",
        originals: [
            "バンコク",
        ]
    },
    {
        normalized: "はんこつ",
        originals: [
            "反骨",
        ]
    },
    {
        normalized: "はんこん",
        originals: [
            "晩婚",
        ]
    },
    {
        normalized: "はんさい",
        originals: [
            "犯罪",
            "万歳",
        ]
    },
    {
        normalized: "はんさく",
        originals: [
            "万策",
        ]
    },
    {
        normalized: "はんさん",
        originals: [
            "晩餐",
        ]
    },
    {
        normalized: "はんしや",
        originals: [
            "反射",
        ]
    },
    {
        normalized: "はんしん",
        originals: [
            "阪神",
            "半身",
        ]
    },
    {
        normalized: "はんすう",
        originals: [
            "半数",
        ]
    },
    {
        normalized: "はんせい",
        originals: [
            "反省",
            "万歳",
        ]
    },
    {
        normalized: "はんせん",
        originals: [
            "反戦",
            "帆船",
            "万全",
        ]
    },
    {
        normalized: "はんそう",
        originals: [
            "搬送",
            "伴奏",
        ]
    },
    {
        normalized: "はんそく",
        originals: [
            "反則",
        ]
    },
    {
        normalized: "はんそて",
        originals: [
            "半そで",
        ]
    },
    {
        normalized: "はんたい",
        originals: [
            "反対",
            "番台",
        ]
    },
    {
        normalized: "はんたん",
        originals: [
            "判断",
        ]
    },
    {
        normalized: "はんつき",
        originals: [
            "半月",
        ]
    },
    {
        normalized: "はんてい",
        originals: [
            "判定",
        ]
    },
    {
        normalized: "はんてん",
        originals: [
            "反転",
            "班点",
        ]
    },
    {
        normalized: "はんとう",
        originals: [
            "半島",
            "反動",
        ]
    },
    {
        normalized: "はんとし",
        originals: [
            "半年",
        ]
    },
    {
        normalized: "はんとる",
        originals: [
            "ハンドル",
        ]
    },
    {
        normalized: "はんにえ",
        originals: [
            "半煮え",
        ]
    },
    {
        normalized: "はんにち",
        originals: [
            "半日",
        ]
    },
    {
        normalized: "はんにん",
        originals: [
            "犯人",
            "万人",
            "番人",
        ]
    },
    {
        normalized: "はんねん",
        originals: [
            "晩年",
        ]
    },
    {
        normalized: "はんのう",
        originals: [
            "反応",
            "万能",
        ]
    },
    {
        normalized: "はんはい",
        originals: [
            "販売",
        ]
    },
    {
        normalized: "はんはく",
        originals: [
            "万博",
        ]
    },
    {
        normalized: "はんはつ",
        originals: [
            "反発",
        ]
    },
    {
        normalized: "はんはん",
        originals: [
            "半半",
        ]
    },
    {
        normalized: "はんふく",
        originals: [
            "反復",
        ]
    },
    {
        normalized: "はんふす",
        originals: [
            "パンプス",
        ]
    },
    {
        normalized: "はんふん",
        originals: [
            "半分",
        ]
    },
    {
        normalized: "はんへつ",
        originals: [
            "判別",
        ]
    },
    {
        normalized: "はんほう",
        originals: [
            "繁忙",
        ]
    },
    {
        normalized: "はんめい",
        originals: [
            "判明",
        ]
    },
    {
        normalized: "はんめし",
        originals: [
            "晩飯",
        ]
    },
    {
        normalized: "はんめん",
        originals: [
            "反面",
        ]
    },
    {
        normalized: "はんよう",
        originals: [
            "汎用",
        ]
    },
    {
        normalized: "はんらん",
        originals: [
            "反乱",
            "氾濫",
        ]
    },
    {
        normalized: "はんりよ",
        originals: [
            "伴侶",
        ]
    },
    {
        normalized: "はんれい",
        originals: [
            "凡例",
        ]
    },
    {
        normalized: "はんろん",
        originals: [
            "反論",
        ]
    },
    {
        normalized: "ひあそひ",
        originals: [
            "火遊び",
        ]
    },
    {
        normalized: "ひあたり",
        originals: [
            "日当たり",
        ]
    },
    {
        normalized: "ひあふり",
        originals: [
            "火あぶり",
        ]
    },
    {
        normalized: "ひえこみ",
        originals: [
            "冷え込み",
        ]
    },
    {
        normalized: "ひかえり",
        originals: [
            "日帰り",
        ]
    },
    {
        normalized: "ひかわり",
        originals: [
            "日替わり",
        ]
    },
    {
        normalized: "ひきあけ",
        originals: [
            "引き上げ",
            "引き揚げ",
        ]
    },
    {
        normalized: "ひきうけ",
        originals: [
            "引き受け",
        ]
    },
    {
        normalized: "ひきかえ",
        originals: [
            "引き替え",
        ]
    },
    {
        normalized: "ひきかね",
        originals: [
            "引き金",
        ]
    },
    {
        normalized: "ひききわ",
        originals: [
            "引き際",
        ]
    },
    {
        normalized: "ひきさけ",
        originals: [
            "引き下げ",
        ]
    },
    {
        normalized: "ひきさん",
        originals: [
            "引き算",
        ]
    },
    {
        normalized: "ひきしお",
        originals: [
            "引き潮",
        ]
    },
    {
        normalized: "ひきしめ",
        originals: [
            "引き締め",
        ]
    },
    {
        normalized: "ひきすり",
        originals: [
            "引きずり",
        ]
    },
    {
        normalized: "ひきたし",
        originals: [
            "引き出し",
        ]
    },
    {
        normalized: "ひきたて",
        originals: [
            "引き立て",
            "ひきたて",
        ]
    },
    {
        normalized: "ひきつき",
        originals: [
            "引き継ぎ",
        ]
    },
    {
        normalized: "ひきとり",
        originals: [
            "引き取り",
        ]
    },
    {
        normalized: "ひきにく",
        originals: [
            "ひき肉",
        ]
    },
    {
        normalized: "ひきにけ",
        originals: [
            "ひき逃げ",
        ]
    },
    {
        normalized: "ひきぬき",
        originals: [
            "引き抜き",
        ]
    },
    {
        normalized: "ひきやく",
        originals: [
            "飛脚",
        ]
    },
    {
        normalized: "ひきよう",
        originals: [
            "卑怯",
            "秘境",
        ]
    },
    {
        normalized: "ひきよせ",
        originals: [
            "引き寄せ",
        ]
    },
    {
        normalized: "ひきわけ",
        originals: [
            "引き分け",
        ]
    },
    {
        normalized: "ひくらし",
        originals: [
            "日暮らし",
        ]
    },
    {
        normalized: "ひくるす",
        originals: [
            "ピクルス",
        ]
    },
    {
        normalized: "ひけそり",
        originals: [
            "ひげそり",
        ]
    },
    {
        normalized: "ひけつら",
        originals: [
            "ひげ面",
        ]
    },
    {
        normalized: "ひさけり",
        originals: [
            "ひざげり",
        ]
    },
    {
        normalized: "ひしかけ",
        originals: [
            "ひじ掛け",
        ]
    },
    {
        normalized: "ひしかた",
        originals: [
            "ひし形",
        ]
    },
    {
        normalized: "ひしねす",
        originals: [
            "ビジネス",
        ]
    },
    {
        normalized: "ひしやく",
        originals: [
            "ひしゃく",
            "微弱",
        ]
    },
    {
        normalized: "ひしゆう",
        originals: [
            "比重",
        ]
    },
    {
        normalized: "ひしゆつ",
        originals: [
            "美術",
        ]
    },
    {
        normalized: "ひしよう",
        originals: [
            "非情",
            "微笑",
        ]
    },
    {
        normalized: "ひしよく",
        originals: [
            "美食",
        ]
    },
    {
        normalized: "ひしよん",
        originals: [
            "ビジョン",
        ]
    },
    {
        normalized: "ひすとる",
        originals: [
            "ピストル",
        ]
    },
    {
        normalized: "ひすとん",
        originals: [
            "ピストン",
        ]
    },
    {
        normalized: "ひたまり",
        originals: [
            "日だまり",
        ]
    },
    {
        normalized: "ひたみん",
        originals: [
            "ビタミン",
        ]
    },
    {
        normalized: "ひたりて",
        originals: [
            "左手",
        ]
    },
    {
        normalized: "ひつあつ",
        originals: [
            "筆圧",
        ]
    },
    {
        normalized: "ひつくり",
        originals: [
            "びっくり",
        ]
    },
    {
        normalized: "ひつけい",
        originals: [
            "必携",
        ]
    },
    {
        normalized: "ひつけん",
        originals: [
            "必見",
        ]
    },
    {
        normalized: "ひつこし",
        originals: [
            "引っ越し",
        ]
    },
    {
        normalized: "ひつこみ",
        originals: [
            "引っ込み",
        ]
    },
    {
        normalized: "ひつさつ",
        originals: [
            "必殺",
        ]
    },
    {
        normalized: "ひつしや",
        originals: [
            "筆者",
        ]
    },
    {
        normalized: "ひつしゆ",
        originals: [
            "必需",
        ]
    },
    {
        normalized: "ひつせき",
        originals: [
            "筆跡",
        ]
    },
    {
        normalized: "ひつせん",
        originals: [
            "必然",
        ]
    },
    {
        normalized: "ひつたん",
        originals: [
            "筆談",
        ]
    },
    {
        normalized: "ひつてき",
        originals: [
            "匹敵",
        ]
    },
    {
        normalized: "ひつとう",
        originals: [
            "筆頭",
        ]
    },
    {
        normalized: "ひつとく",
        originals: [
            "必読",
        ]
    },
    {
        normalized: "ひつはく",
        originals: [
            "逼迫",
        ]
    },
    {
        normalized: "ひつはり",
        originals: [
            "引っ張り",
        ]
    },
    {
        normalized: "ひつよう",
        originals: [
            "必要",
        ]
    },
    {
        normalized: "ひといき",
        originals: [
            "一息",
        ]
    },
    {
        normalized: "ひとかき",
        originals: [
            "人垣",
        ]
    },
    {
        normalized: "ひとかけ",
        originals: [
            "人影",
        ]
    },
    {
        normalized: "ひとから",
        originals: [
            "人柄",
        ]
    },
    {
        normalized: "ひとかわ",
        originals: [
            "一皮",
        ]
    },
    {
        normalized: "ひときき",
        originals: [
            "人聞き",
        ]
    },
    {
        normalized: "ひとくせ",
        originals: [
            "一癖",
        ]
    },
    {
        normalized: "ひとくち",
        originals: [
            "一口",
        ]
    },
    {
        normalized: "ひとこえ",
        originals: [
            "人声",
        ]
    },
    {
        normalized: "ひとこと",
        originals: [
            "一言",
            "ひと事",
        ]
    },
    {
        normalized: "ひとこみ",
        originals: [
            "人込み",
        ]
    },
    {
        normalized: "ひとさと",
        originals: [
            "人里",
        ]
    },
    {
        normalized: "ひとしち",
        originals: [
            "人質",
        ]
    },
    {
        normalized: "ひとすき",
        originals: [
            "人好き",
        ]
    },
    {
        normalized: "ひとすし",
        originals: [
            "一筋",
        ]
    },
    {
        normalized: "ひとたひ",
        originals: [
            "ひとたび",
        ]
    },
    {
        normalized: "ひとつて",
        originals: [
            "人づて",
        ]
    },
    {
        normalized: "ひとつま",
        originals: [
            "人妻",
        ]
    },
    {
        normalized: "ひととき",
        originals: [
            "一時",
        ]
    },
    {
        normalized: "ひとなみ",
        originals: [
            "人波",
        ]
    },
    {
        normalized: "ひとひと",
        originals: [
            "人人",
        ]
    },
    {
        normalized: "ひとふて",
        originals: [
            "一筆",
        ]
    },
    {
        normalized: "ひとまえ",
        originals: [
            "人前",
        ]
    },
    {
        normalized: "ひとまね",
        originals: [
            "人まね",
        ]
    },
    {
        normalized: "ひとりみ",
        originals: [
            "ひとり身",
        ]
    },
    {
        normalized: "ひなかた",
        originals: [
            "ひな形",
        ]
    },
    {
        normalized: "ひなたん",
        originals: [
            "ひな壇",
        ]
    },
    {
        normalized: "ひなとり",
        originals: [
            "ひな鳥",
        ]
    },
    {
        normalized: "ひのいり",
        originals: [
            "日の入り",
        ]
    },
    {
        normalized: "ひのきお",
        originals: [
            "ピノキオ",
        ]
    },
    {
        normalized: "ひのたま",
        originals: [
            "火の玉",
        ]
    },
    {
        normalized: "ひのまる",
        originals: [
            "日の丸",
        ]
    },
    {
        normalized: "ひのもと",
        originals: [
            "火の元",
        ]
    },
    {
        normalized: "ひはしら",
        originals: [
            "火柱",
        ]
    },
    {
        normalized: "ひひよう",
        originals: [
            "批評",
        ]
    },
    {
        normalized: "ひひわれ",
        originals: [
            "ひび割れ",
        ]
    },
    {
        normalized: "ひひんは",
        originals: [
            "ビビンバ",
        ]
    },
    {
        normalized: "ひふてき",
        originals: [
            "ビフテキ",
        ]
    },
    {
        normalized: "ひましん",
        originals: [
            "暇人",
        ]
    },
    {
        normalized: "ひまらや",
        originals: [
            "ヒマラヤ",
        ]
    },
    {
        normalized: "ひまわり",
        originals: [
            "ひまわり",
        ]
    },
    {
        normalized: "ひめくり",
        originals: [
            "日めくり",
        ]
    },
    {
        normalized: "ひめこと",
        originals: [
            "秘め事",
        ]
    },
    {
        normalized: "ひやあせ",
        originals: [
            "冷や汗",
        ]
    },
    {
        normalized: "ひやかし",
        originals: [
            "冷やかし",
        ]
    },
    {
        normalized: "ひやくや",
        originals: [
            "白夜",
        ]
    },
    {
        normalized: "ひやつか",
        originals: [
            "百科",
        ]
    },
    {
        normalized: "ひやとい",
        originals: [
            "日雇い",
        ]
    },
    {
        normalized: "ひやみす",
        originals: [
            "冷や水",
        ]
    },
    {
        normalized: "ひやむき",
        originals: [
            "冷や麦",
        ]
    },
    {
        normalized: "ひやめし",
        originals: [
            "冷や飯",
        ]
    },
    {
        normalized: "ひようか",
        originals: [
            "氷菓",
            "評価",
        ]
    },
    {
        normalized: "ひようき",
        originals: [
            "表記",
            "病気",
        ]
    },
    {
        normalized: "ひようこ",
        originals: [
            "標語",
            "病後",
        ]
    },
    {
        normalized: "ひようし",
        originals: [
            "拍子",
            "表紙",
            "標示",
            "表示",
            "病死",
        ]
    },
    {
        normalized: "ひようひ",
        originals: [
            "表皮",
        ]
    },
    {
        normalized: "ひようま",
        originals: [
            "病魔",
        ]
    },
    {
        normalized: "ひようり",
        originals: [
            "表裏",
        ]
    },
    {
        normalized: "ひらかな",
        originals: [
            "平仮名",
        ]
    },
    {
        normalized: "ひらにあ",
        originals: [
            "ピラニア",
        ]
    },
    {
        normalized: "ひらはら",
        originals: [
            "平原",
        ]
    },
    {
        normalized: "ひらはる",
        originals: [
            "平原",
        ]
    },
    {
        normalized: "ひらめき",
        originals: [
            "ひらめき",
        ]
    },
    {
        normalized: "ひらやす",
        originals: [
            "平安",
        ]
    },
    {
        normalized: "ひりおと",
        originals: [
            "ピリオド",
        ]
    },
    {
        normalized: "ひりよう",
        originals: [
            "肥料",
            "微量",
        ]
    },
    {
        normalized: "ひりよく",
        originals: [
            "非力",
            "微力",
        ]
    },
    {
        normalized: "ひるすき",
        originals: [
            "昼過ぎ",
        ]
    },
    {
        normalized: "ひるとき",
        originals: [
            "昼時",
        ]
    },
    {
        normalized: "ひるまえ",
        originals: [
            "昼前",
        ]
    },
    {
        normalized: "ひるめし",
        originals: [
            "昼飯",
        ]
    },
    {
        normalized: "ひろいん",
        originals: [
            "ヒロイン",
        ]
    },
    {
        normalized: "ひろかり",
        originals: [
            "広がり",
        ]
    },
    {
        normalized: "ひろよし",
        originals: [
            "博愛",
        ]
    },
    {
        normalized: "ひんかく",
        originals: [
            "品格",
        ]
    },
    {
        normalized: "ひんかん",
        originals: [
            "敏感",
        ]
    },
    {
        normalized: "ひんけつ",
        originals: [
            "貧血",
        ]
    },
    {
        normalized: "ひんこん",
        originals: [
            "貧困",
        ]
    },
    {
        normalized: "ひんしつ",
        originals: [
            "品質",
        ]
    },
    {
        normalized: "ひんしゆ",
        originals: [
            "品種",
        ]
    },
    {
        normalized: "ひんせん",
        originals: [
            "便箋",
        ]
    },
    {
        normalized: "ひんそう",
        originals: [
            "貧相",
        ]
    },
    {
        normalized: "ひんつめ",
        originals: [
            "瓶詰め",
        ]
    },
    {
        normalized: "ひんはつ",
        originals: [
            "頻発",
        ]
    },
    {
        normalized: "ひんほう",
        originals: [
            "貧乏",
        ]
    },
    {
        normalized: "ひんほけ",
        originals: [
            "ピンぼけ",
        ]
    },
    {
        normalized: "ひんほん",
        originals: [
            "ピンポン",
        ]
    },
    {
        normalized: "ひんめい",
        originals: [
            "品名",
        ]
    },
    {
        normalized: "ひんもく",
        originals: [
            "品目",
        ]
    },
    {
        normalized: "ひんわん",
        originals: [
            "敏腕",
        ]
    },
    {
        normalized: "ふあいと",
        originals: [
            "ファイト",
        ]
    },
    {
        normalized: "ふあいる",
        originals: [
            "ファイル",
        ]
    },
    {
        normalized: "ふあうる",
        originals: [
            "ファウル",
        ]
    },
    {
        normalized: "ふいつと",
        originals: [
            "フィット",
        ]
    },
    {
        normalized: "ふいるむ",
        originals: [
            "フィルム",
        ]
    },
    {
        normalized: "ふうあつ",
        originals: [
            "風圧",
        ]
    },
    {
        normalized: "ふういん",
        originals: [
            "封印",
        ]
    },
    {
        normalized: "ふうかく",
        originals: [
            "風格",
        ]
    },
    {
        normalized: "ふうきり",
        originals: [
            "封切り",
        ]
    },
    {
        normalized: "ふうけい",
        originals: [
            "風景",
        ]
    },
    {
        normalized: "ふうこう",
        originals: [
            "風向",
        ]
    },
    {
        normalized: "ふうしや",
        originals: [
            "風車",
        ]
    },
    {
        normalized: "ふうしよ",
        originals: [
            "封書",
        ]
    },
    {
        normalized: "ふうしん",
        originals: [
            "風疹",
        ]
    },
    {
        normalized: "ふうすい",
        originals: [
            "風水",
        ]
    },
    {
        normalized: "ふうせつ",
        originals: [
            "風雪",
        ]
    },
    {
        normalized: "ふうせん",
        originals: [
            "風船",
        ]
    },
    {
        normalized: "ふうそく",
        originals: [
            "風速",
            "風俗",
        ]
    },
    {
        normalized: "ふうとう",
        originals: [
            "封筒",
        ]
    },
    {
        normalized: "ふうほう",
        originals: [
            "風貌",
        ]
    },
    {
        normalized: "ふうりん",
        originals: [
            "風鈴",
        ]
    },
    {
        normalized: "ふえると",
        originals: [
            "フェルト",
        ]
    },
    {
        normalized: "ふえんす",
        originals: [
            "フェンス",
        ]
    },
    {
        normalized: "ふおるむ",
        originals: [
            "フォルム",
        ]
    },
    {
        normalized: "ふかいり",
        originals: [
            "深入り",
            "深いり",
        ]
    },
    {
        normalized: "ふかおい",
        originals: [
            "深追い",
        ]
    },
    {
        normalized: "ふかさけ",
        originals: [
            "深酒",
        ]
    },
    {
        normalized: "ふかしき",
        originals: [
            "不可思議",
        ]
    },
    {
        normalized: "ふかつめ",
        originals: [
            "深づめ",
        ]
    },
    {
        normalized: "ふかよみ",
        originals: [
            "深読み",
        ]
    },
    {
        normalized: "ふきかえ",
        originals: [
            "吹き替え",
            "ふき替え",
        ]
    },
    {
        normalized: "ふきぬけ",
        originals: [
            "吹き抜け",
        ]
    },
    {
        normalized: "ふきゆう",
        originals: [
            "不休",
            "普及",
        ]
    },
    {
        normalized: "ふきよう",
        originals: [
            "不況",
            "布教",
            "奉行",
        ]
    },
    {
        normalized: "ふくえき",
        originals: [
            "服役",
        ]
    },
    {
        normalized: "ふくえん",
        originals: [
            "復縁",
        ]
    },
    {
        normalized: "ふくけん",
        originals: [
            "復元",
        ]
    },
    {
        normalized: "ふくこう",
        originals: [
            "複合",
        ]
    },
    {
        normalized: "ふくさい",
        originals: [
            "副菜",
        ]
    },
    {
        normalized: "ふくさつ",
        originals: [
            "複雑",
        ]
    },
    {
        normalized: "ふくしや",
        originals: [
            "複写",
        ]
    },
    {
        normalized: "ふくすう",
        originals: [
            "複数",
        ]
    },
    {
        normalized: "ふくせい",
        originals: [
            "複製",
        ]
    },
    {
        normalized: "ふくせん",
        originals: [
            "伏線",
        ]
    },
    {
        normalized: "ふくそう",
        originals: [
            "服装",
        ]
    },
    {
        normalized: "ふくたい",
        originals: [
            "副題",
        ]
    },
    {
        normalized: "ふくつう",
        originals: [
            "腹痛",
        ]
    },
    {
        normalized: "ふくひき",
        originals: [
            "福引き",
        ]
    },
    {
        normalized: "ふくみみ",
        originals: [
            "福耳",
        ]
    },
    {
        normalized: "ふくめん",
        originals: [
            "覆面",
        ]
    },
    {
        normalized: "ふくやく",
        originals: [
            "服薬",
        ]
    },
    {
        normalized: "ふくよう",
        originals: [
            "服用",
        ]
    },
    {
        normalized: "ふくらみ",
        originals: [
            "膨らみ",
        ]
    },
    {
        normalized: "ふくろう",
        originals: [
            "ふくろう",
        ]
    },
    {
        normalized: "ふさかり",
        originals: [
            "ふさがり",
        ]
    },
    {
        normalized: "ふしあな",
        originals: [
            "節穴",
        ]
    },
    {
        normalized: "ふしつけ",
        originals: [
            "ぶしつけ",
        ]
    },
    {
        normalized: "ふしつほ",
        originals: [
            "ふじつぼ",
        ]
    },
    {
        normalized: "ふしゆう",
        originals: [
            "腐臭",
        ]
    },
    {
        normalized: "ふしゆつ",
        originals: [
            "武術",
        ]
    },
    {
        normalized: "ふしゆん",
        originals: [
            "不純",
        ]
    },
    {
        normalized: "ふしよう",
        originals: [
            "負傷",
            "浮上",
            "武将",
            "不精",
        ]
    },
    {
        normalized: "ふしよく",
        originals: [
            "腐食",
            "侮辱",
        ]
    },
    {
        normalized: "ふたにく",
        originals: [
            "豚肉",
        ]
    },
    {
        normalized: "ふたまた",
        originals: [
            "二また",
        ]
    },
    {
        normalized: "ふたまん",
        originals: [
            "豚まん",
        ]
    },
    {
        normalized: "ふちいし",
        originals: [
            "縁石",
        ]
    },
    {
        normalized: "ふちやく",
        originals: [
            "付着",
        ]
    },
    {
        normalized: "ふちよう",
        originals: [
            "不調",
            "部長",
        ]
    },
    {
        normalized: "ふつかつ",
        originals: [
            "復活",
        ]
    },
    {
        normalized: "ふつきん",
        originals: [
            "腹筋",
        ]
    },
    {
        normalized: "ふつけん",
        originals: [
            "物件",
        ]
    },
    {
        normalized: "ふつこう",
        originals: [
            "復興",
        ]
    },
    {
        normalized: "ふつこく",
        originals: [
            "復刻",
            "複刻",
        ]
    },
    {
        normalized: "ふつさん",
        originals: [
            "物産",
        ]
    },
    {
        normalized: "ふつしつ",
        originals: [
            "物質",
        ]
    },
    {
        normalized: "ふつしゆ",
        originals: [
            "プッシュ",
        ]
    },
    {
        normalized: "ふつそう",
        originals: [
            "仏像",
        ]
    },
    {
        normalized: "ふつたい",
        originals: [
            "物体",
        ]
    },
    {
        normalized: "ふつたん",
        originals: [
            "仏壇",
        ]
    },
    {
        normalized: "ふつてん",
        originals: [
            "沸点",
        ]
    },
    {
        normalized: "ふつとう",
        originals: [
            "沸騰",
        ]
    },
    {
        normalized: "ふつひん",
        originals: [
            "物品",
        ]
    },
    {
        normalized: "ふつめつ",
        originals: [
            "仏滅",
        ]
    },
    {
        normalized: "ふつよく",
        originals: [
            "物欲",
        ]
    },
    {
        normalized: "ふていれ",
        originals: [
            "筆入れ",
        ]
    },
    {
        normalized: "ふてさき",
        originals: [
            "筆先",
        ]
    },
    {
        normalized: "ふてはこ",
        originals: [
            "筆箱",
        ]
    },
    {
        normalized: "ふところ",
        originals: [
            "懐",
        ]
    },
    {
        normalized: "ふともも",
        originals: [
            "太もも",
        ]
    },
    {
        normalized: "ふなそこ",
        originals: [
            "船底",
        ]
    },
    {
        normalized: "ふなたひ",
        originals: [
            "船旅",
        ]
    },
    {
        normalized: "ふなちん",
        originals: [
            "船賃",
        ]
    },
    {
        normalized: "ふなつり",
        originals: [
            "船釣り",
        ]
    },
    {
        normalized: "ふなぬし",
        originals: [
            "船主",
        ]
    },
    {
        normalized: "ふなのり",
        originals: [
            "船乗り",
        ]
    },
    {
        normalized: "ふなはし",
        originals: [
            "船橋",
        ]
    },
    {
        normalized: "ふなひん",
        originals: [
            "船便",
        ]
    },
    {
        normalized: "ふなよい",
        originals: [
            "船酔い",
        ]
    },
    {
        normalized: "ふねつり",
        originals: [
            "船釣り",
        ]
    },
    {
        normalized: "ふはらい",
        originals: [
            "不払い",
        ]
    },
    {
        normalized: "ふひよう",
        originals: [
            "不評",
        ]
    },
    {
        normalized: "ふましめ",
        originals: [
            "不まじめ",
        ]
    },
    {
        normalized: "ふみきり",
        originals: [
            "踏切",
        ]
    },
    {
        normalized: "ふみこみ",
        originals: [
            "踏み込み",
        ]
    },
    {
        normalized: "ふゆそら",
        originals: [
            "冬空",
        ]
    },
    {
        normalized: "ふゆはれ",
        originals: [
            "冬晴れ",
        ]
    },
    {
        normalized: "ふゆふく",
        originals: [
            "冬服",
        ]
    },
    {
        normalized: "ふゆもの",
        originals: [
            "冬物",
        ]
    },
    {
        normalized: "ふらいす",
        originals: [
            "プライス",
        ]
    },
    {
        normalized: "ふらいと",
        originals: [
            "フライト",
            "プライド",
        ]
    },
    {
        normalized: "ふらうす",
        originals: [
            "ブラウス",
        ]
    },
    {
        normalized: "ふらしる",
        originals: [
            "ブラジル",
        ]
    },
    {
        normalized: "ふらすこ",
        originals: [
            "フラスコ",
        ]
    },
    {
        normalized: "ふらちな",
        originals: [
            "プラチナ",
        ]
    },
    {
        normalized: "ふらつく",
        originals: [
            "ブラック",
        ]
    },
    {
        normalized: "ふらんく",
        originals: [
            "フランク",
            "ブランク",
        ]
    },
    {
        normalized: "ふらんこ",
        originals: [
            "ぶらんこ",
        ]
    },
    {
        normalized: "ふらんす",
        originals: [
            "フランス",
        ]
    },
    {
        normalized: "ふらんち",
        originals: [
            "ブランチ",
        ]
    },
    {
        normalized: "ふらんと",
        originals: [
            "ブランド",
        ]
    },
    {
        normalized: "ふりかえ",
        originals: [
            "振り替え",
            "振替",
        ]
    },
    {
        normalized: "ふりかな",
        originals: [
            "振り仮名",
        ]
    },
    {
        normalized: "ふりこみ",
        originals: [
            "振り込み",
        ]
    },
    {
        normalized: "ふりそて",
        originals: [
            "振りそで",
        ]
    },
    {
        normalized: "ふりつけ",
        originals: [
            "振り付け",
        ]
    },
    {
        normalized: "ふりつし",
        originals: [
            "ブリッジ",
        ]
    },
    {
        normalized: "ふりよう",
        originals: [
            "不漁",
            "不良",
        ]
    },
    {
        normalized: "ふりよく",
        originals: [
            "浮力",
            "武力",
        ]
    },
    {
        normalized: "ふりわけ",
        originals: [
            "振り分け",
        ]
    },
    {
        normalized: "ふりんす",
        originals: [
            "プリンス",
        ]
    },
    {
        normalized: "ふりんと",
        originals: [
            "プリント",
        ]
    },
    {
        normalized: "ふるかふ",
        originals: [
            "古株",
        ]
    },
    {
        normalized: "ふるさと",
        originals: [
            "ふるさと",
        ]
    },
    {
        normalized: "ふるへん",
        originals: [
            "ブルペン",
        ]
    },
    {
        normalized: "ふるほん",
        originals: [
            "古本",
        ]
    },
    {
        normalized: "ふるまい",
        originals: [
            "振る舞い",
        ]
    },
    {
        normalized: "ふるもの",
        originals: [
            "古物",
        ]
    },
    {
        normalized: "ふれあい",
        originals: [
            "触れ合い",
        ]
    },
    {
        normalized: "ふれはふ",
        originals: [
            "プレハブ",
        ]
    },
    {
        normalized: "ふれんと",
        originals: [
            "フレンド",
            "ブレンド",
        ]
    },
    {
        normalized: "ふろおけ",
        originals: [
            "ふろおけ",
        ]
    },
    {
        normalized: "ふろかま",
        originals: [
            "ふろがま",
        ]
    },
    {
        normalized: "ふろしき",
        originals: [
            "ふろしき",
        ]
    },
    {
        normalized: "ふろせす",
        originals: [
            "プロセス",
        ]
    },
    {
        normalized: "ふろつく",
        originals: [
            "ブロック",
        ]
    },
    {
        normalized: "ふろはん",
        originals: [
            "プロパン",
        ]
    },
    {
        normalized: "ふろへら",
        originals: [
            "プロペラ",
        ]
    },
    {
        normalized: "ふろれす",
        originals: [
            "プロレス",
        ]
    },
    {
        normalized: "ふろんす",
        originals: [
            "ブロンズ",
        ]
    },
    {
        normalized: "ふろんと",
        originals: [
            "フロント",
            "ブロンド",
        ]
    },
    {
        normalized: "ふんいき",
        originals: [
            "雰囲気",
        ]
    },
    {
        normalized: "ふんかい",
        originals: [
            "分解",
        ]
    },
    {
        normalized: "ふんかく",
        originals: [
            "文学",
        ]
    },
    {
        normalized: "ふんかつ",
        originals: [
            "分割",
        ]
    },
    {
        normalized: "ふんけい",
        originals: [
            "文系",
            "文芸",
        ]
    },
    {
        normalized: "ふんけん",
        originals: [
            "文献",
        ]
    },
    {
        normalized: "ふんこう",
        originals: [
            "分校",
            "文豪",
        ]
    },
    {
        normalized: "ふんさい",
        originals: [
            "粉砕",
            "文才",
        ]
    },
    {
        normalized: "ふんさん",
        originals: [
            "分散",
        ]
    },
    {
        normalized: "ふんしつ",
        originals: [
            "紛失",
        ]
    },
    {
        normalized: "ふんしや",
        originals: [
            "噴射",
        ]
    },
    {
        normalized: "ふんしよ",
        originals: [
            "文書",
        ]
    },
    {
        normalized: "ふんしん",
        originals: [
            "粉塵",
            "分身",
        ]
    },
    {
        normalized: "ふんすい",
        originals: [
            "噴水",
        ]
    },
    {
        normalized: "ふんすう",
        originals: [
            "分数",
        ]
    },
    {
        normalized: "ふんせき",
        originals: [
            "分析",
        ]
    },
    {
        normalized: "ふんそう",
        originals: [
            "紛争",
        ]
    },
    {
        normalized: "ふんたん",
        originals: [
            "分担",
            "分断",
        ]
    },
    {
        normalized: "ふんちん",
        originals: [
            "文鎮",
        ]
    },
    {
        normalized: "ふんつう",
        originals: [
            "文通",
        ]
    },
    {
        normalized: "ふんとう",
        originals: [
            "奮闘",
        ]
    },
    {
        normalized: "ふんはい",
        originals: [
            "分配",
        ]
    },
    {
        normalized: "ふんはつ",
        originals: [
            "奮発",
        ]
    },
    {
        normalized: "ふんはり",
        originals: [
            "踏ん張り",
        ]
    },
    {
        normalized: "ふんひつ",
        originals: [
            "分泌",
        ]
    },
    {
        normalized: "ふんへつ",
        originals: [
            "分別",
        ]
    },
    {
        normalized: "ふんへん",
        originals: [
            "分娩",
        ]
    },
    {
        normalized: "ふんほう",
        originals: [
            "文法",
        ]
    },
    {
        normalized: "ふんまつ",
        originals: [
            "粉末",
            "文末",
        ]
    },
    {
        normalized: "ふんめい",
        originals: [
            "文明",
        ]
    },
    {
        normalized: "ふんめん",
        originals: [
            "文面",
        ]
    },
    {
        normalized: "ふんるい",
        originals: [
            "分類",
        ]
    },
    {
        normalized: "ふんれい",
        originals: [
            "文例",
        ]
    },
    {
        normalized: "ふんれつ",
        originals: [
            "分裂",
        ]
    },
    {
        normalized: "へあひん",
        originals: [
            "ヘアピン",
        ]
    },
    {
        normalized: "へいあん",
        originals: [
            "平安",
        ]
    },
    {
        normalized: "へいえき",
        originals: [
            "兵役",
        ]
    },
    {
        normalized: "へいおん",
        originals: [
            "平穏",
        ]
    },
    {
        normalized: "へいかい",
        originals: [
            "閉会",
            "弊害",
        ]
    },
    {
        normalized: "へいかん",
        originals: [
            "閉館",
        ]
    },
    {
        normalized: "へいきん",
        originals: [
            "平均",
        ]
    },
    {
        normalized: "へいくん",
        originals: [
            "米軍",
        ]
    },
    {
        normalized: "へいけい",
        originals: [
            "閉経",
        ]
    },
    {
        normalized: "へいけん",
        originals: [
            "平原",
        ]
    },
    {
        normalized: "へいこう",
        originals: [
            "並行",
            "平行",
            "閉口",
            "閉校",
        ]
    },
    {
        normalized: "へいこく",
        originals: [
            "米国",
        ]
    },
    {
        normalized: "へいしつ",
        originals: [
            "平日",
        ]
    },
    {
        normalized: "へいしや",
        originals: [
            "弊社",
        ]
    },
    {
        normalized: "へいしゆ",
        originals: [
            "米寿",
        ]
    },
    {
        normalized: "へいせい",
        originals: [
            "平成",
            "平静",
        ]
    },
    {
        normalized: "へいせつ",
        originals: [
            "併設",
        ]
    },
    {
        normalized: "へいそう",
        originals: [
            "並走",
        ]
    },
    {
        normalized: "へいそく",
        originals: [
            "閉塞",
        ]
    },
    {
        normalized: "へいたい",
        originals: [
            "兵隊",
        ]
    },
    {
        normalized: "へいてん",
        originals: [
            "閉店",
        ]
    },
    {
        normalized: "へいねつ",
        originals: [
            "平熱",
        ]
    },
    {
        normalized: "へいはん",
        originals: [
            "米飯",
        ]
    },
    {
        normalized: "へいほん",
        originals: [
            "平凡",
        ]
    },
    {
        normalized: "へいまく",
        originals: [
            "閉幕",
        ]
    },
    {
        normalized: "へいめん",
        originals: [
            "平面",
        ]
    },
    {
        normalized: "へいよう",
        originals: [
            "併用",
        ]
    },
    {
        normalized: "へいれつ",
        originals: [
            "並列",
        ]
    },
    {
        normalized: "へいんと",
        originals: [
            "ペイント",
        ]
    },
    {
        normalized: "へきめん",
        originals: [
            "壁面",
        ]
    },
    {
        normalized: "へくとる",
        originals: [
            "ベクトル",
        ]
    },
    {
        normalized: "へそのお",
        originals: [
            "へその緒",
        ]
    },
    {
        normalized: "へたくそ",
        originals: [
            "下手くそ",
        ]
    },
    {
        normalized: "へたたり",
        originals: [
            "隔たり",
        ]
    },
    {
        normalized: "へたほめ",
        originals: [
            "べた褒め",
        ]
    },
    {
        normalized: "へたほれ",
        originals: [
            "べたぼれ",
        ]
    },
    {
        normalized: "へつうり",
        originals: [
            "別売り",
        ]
    },
    {
        normalized: "へつかく",
        originals: [
            "別格",
        ]
    },
    {
        normalized: "へつきよ",
        originals: [
            "別居",
        ]
    },
    {
        normalized: "へつけん",
        originals: [
            "別件",
        ]
    },
    {
        normalized: "へつこう",
        originals: [
            "べっ甲",
        ]
    },
    {
        normalized: "へつさつ",
        originals: [
            "別冊",
        ]
    },
    {
        normalized: "へつしつ",
        originals: [
            "別室",
        ]
    },
    {
        normalized: "へつしん",
        originals: [
            "別人",
        ]
    },
    {
        normalized: "へつそう",
        originals: [
            "別荘",
        ]
    },
    {
        normalized: "へつたく",
        originals: [
            "別宅",
        ]
    },
    {
        normalized: "へつてい",
        originals: [
            "別邸",
        ]
    },
    {
        normalized: "へつひん",
        originals: [
            "べっぴん",
        ]
    },
    {
        normalized: "へつめい",
        originals: [
            "別名",
        ]
    },
    {
        normalized: "へつもの",
        originals: [
            "別物",
        ]
    },
    {
        normalized: "へてらん",
        originals: [
            "ベテラン",
        ]
    },
    {
        normalized: "へてんし",
        originals: [
            "ぺてん師",
        ]
    },
    {
        normalized: "へとなむ",
        originals: [
            "ベトナム",
        ]
    },
    {
        normalized: "へにいろ",
        originals: [
            "紅色",
        ]
    },
    {
        normalized: "へやわり",
        originals: [
            "部屋割り",
        ]
    },
    {
        normalized: "へらほう",
        originals: [
            "べらぼう",
        ]
    },
    {
        normalized: "へらんた",
        originals: [
            "ベランダ",
        ]
    },
    {
        normalized: "へりうむ",
        originals: [
            "ヘリウム",
        ]
    },
    {
        normalized: "へりかん",
        originals: [
            "ペリカン",
        ]
    },
    {
        normalized: "へるにあ",
        originals: [
            "ヘルニア",
        ]
    },
    {
        normalized: "へるへす",
        originals: [
            "ヘルペス",
        ]
    },
    {
        normalized: "へるりん",
        originals: [
            "ベルリン",
        ]
    },
    {
        normalized: "へんかく",
        originals: [
            "勉学",
        ]
    },
    {
        normalized: "へんかん",
        originals: [
            "変換",
            "返還",
        ]
    },
    {
        normalized: "へんきん",
        originals: [
            "返金",
            "ペンギン",
        ]
    },
    {
        normalized: "へんくつ",
        originals: [
            "偏屈",
        ]
    },
    {
        normalized: "へんけい",
        originals: [
            "変形",
        ]
    },
    {
        normalized: "へんけん",
        originals: [
            "偏見",
            "片言",
        ]
    },
    {
        normalized: "へんこう",
        originals: [
            "変更",
        ]
    },
    {
        normalized: "へんさい",
        originals: [
            "返済",
        ]
    },
    {
        normalized: "へんしよ",
        originals: [
            "便所",
        ]
    },
    {
        normalized: "へんしん",
        originals: [
            "変身",
            "返信",
            "変人",
        ]
    },
    {
        normalized: "へんせい",
        originals: [
            "編成",
        ]
    },
    {
        normalized: "へんそう",
        originals: [
            "変装",
        ]
    },
    {
        normalized: "へんそく",
        originals: [
            "変則",
        ]
    },
    {
        normalized: "へんたい",
        originals: [
            "変態",
        ]
    },
    {
        normalized: "へんつう",
        originals: [
            "便通",
        ]
    },
    {
        normalized: "へんとう",
        originals: [
            "返答",
            "変動",
            "弁当",
        ]
    },
    {
        normalized: "へんのう",
        originals: [
            "返納",
        ]
    },
    {
        normalized: "へんひん",
        originals: [
            "返品",
        ]
    },
    {
        normalized: "へんほう",
        originals: [
            "変貌",
        ]
    },
    {
        normalized: "へんめい",
        originals: [
            "弁明",
        ]
    },
    {
        normalized: "へんりん",
        originals: [
            "片鱗",
        ]
    },
    {
        normalized: "へんれい",
        originals: [
            "返礼",
        ]
    },
    {
        normalized: "へんれき",
        originals: [
            "遍歴",
        ]
    },
    {
        normalized: "へんろん",
        originals: [
            "弁論",
        ]
    },
    {
        normalized: "ほいすて",
        originals: [
            "ぽい捨て",
        ]
    },
    {
        normalized: "ほいつふ",
        originals: [
            "ホイップ",
        ]
    },
    {
        normalized: "ほいんと",
        originals: [
            "ポイント",
        ]
    },
    {
        normalized: "ほうあん",
        originals: [
            "法案",
        ]
    },
    {
        normalized: "ほういん",
        originals: [
            "暴飲",
        ]
    },
    {
        normalized: "ほうえい",
        originals: [
            "放映",
            "防衛",
        ]
    },
    {
        normalized: "ほうえき",
        originals: [
            "貿易",
        ]
    },
    {
        normalized: "ほうおん",
        originals: [
            "防音",
        ]
    },
    {
        normalized: "ほうかい",
        originals: [
            "崩壊",
            "妨害",
        ]
    },
    {
        normalized: "ほうかく",
        originals: [
            "方角",
            "邦楽",
        ]
    },
    {
        normalized: "ほうかん",
        originals: [
            "砲丸",
            "傍観",
            "防寒",
        ]
    },
    {
        normalized: "ほうきよ",
        originals: [
            "暴挙",
            "防御",
        ]
    },
    {
        normalized: "ほうくん",
        originals: [
            "暴君",
        ]
    },
    {
        normalized: "ほうけき",
        originals: [
            "砲撃",
        ]
    },
    {
        normalized: "ほうけん",
        originals: [
            "方言",
            "冒険",
            "暴言",
        ]
    },
    {
        normalized: "ほうこう",
        originals: [
            "方向",
            "芳香",
            "縫合",
            "暴行",
            "膀胱",
        ]
    },
    {
        normalized: "ほうこく",
        originals: [
            "報告",
        ]
    },
    {
        normalized: "ほうさい",
        originals: [
            "防災",
        ]
    },
    {
        normalized: "ほうさく",
        originals: [
            "豊作",
        ]
    },
    {
        normalized: "ほうしき",
        originals: [
            "方式",
        ]
    },
    {
        normalized: "ほうしつ",
        originals: [
            "某日",
        ]
    },
    {
        normalized: "ほうしや",
        originals: [
            "放射",
        ]
    },
    {
        normalized: "ほうしよ",
        originals: [
            "某所",
        ]
    },
    {
        normalized: "ほうしん",
        originals: [
            "放心",
            "方針",
            "法人",
            "邦人",
        ]
    },
    {
        normalized: "ほうすい",
        originals: [
            "放水",
            "防水",
        ]
    },
    {
        normalized: "ほうせい",
        originals: [
            "縫製",
        ]
    },
    {
        normalized: "ほうせき",
        originals: [
            "宝石",
        ]
    },
    {
        normalized: "ほうせん",
        originals: [
            "防戦",
        ]
    },
    {
        normalized: "ほうそう",
        originals: [
            "包装",
            "放送",
            "暴走",
        ]
    },
    {
        normalized: "ほうそく",
        originals: [
            "法則",
        ]
    },
    {
        normalized: "ほうたい",
        originals: [
            "包帯",
            "砲台",
            "膨大",
        ]
    },
    {
        normalized: "ほうたち",
        originals: [
            "棒立ち",
        ]
    },
    {
        normalized: "ほうたん",
        originals: [
            "砲弾",
            "防弾",
        ]
    },
    {
        normalized: "ほうてい",
        originals: [
            "法定",
            "法廷",
        ]
    },
    {
        normalized: "ほうてん",
        originals: [
            "放電",
        ]
    },
    {
        normalized: "ほうとう",
        originals: [
            "宝刀",
            "報道",
            "冒頭",
            "暴動",
        ]
    },
    {
        normalized: "ほうとく",
        originals: [
            "冒涜",
        ]
    },
    {
        normalized: "ほうにち",
        originals: [
            "訪日",
        ]
    },
    {
        normalized: "ほうにん",
        originals: [
            "放任",
        ]
    },
    {
        normalized: "ほうねつ",
        originals: [
            "放熱",
        ]
    },
    {
        normalized: "ほうはん",
        originals: [
            "防犯",
        ]
    },
    {
        normalized: "ほうふう",
        originals: [
            "暴風",
        ]
    },
    {
        normalized: "ほうふく",
        originals: [
            "報復",
        ]
    },
    {
        normalized: "ほうへき",
        originals: [
            "防壁",
        ]
    },
    {
        normalized: "ほうへん",
        originals: [
            "方便",
        ]
    },
    {
        normalized: "ほうほう",
        originals: [
            "方法",
        ]
    },
    {
        normalized: "ほうほく",
        originals: [
            "放牧",
        ]
    },
    {
        normalized: "ほうまん",
        originals: [
            "豊満",
        ]
    },
    {
        normalized: "ほうめい",
        originals: [
            "亡命",
        ]
    },
    {
        normalized: "ほうめん",
        originals: [
            "方面",
        ]
    },
    {
        normalized: "ほうもつ",
        originals: [
            "宝物",
        ]
    },
    {
        normalized: "ほうもん",
        originals: [
            "訪問",
        ]
    },
    {
        normalized: "ほうよう",
        originals: [
            "包容",
            "抱擁",
            "法要",
        ]
    },
    {
        normalized: "ほうよみ",
        originals: [
            "棒読み",
        ]
    },
    {
        normalized: "ほうらく",
        originals: [
            "崩落",
            "暴落",
        ]
    },
    {
        normalized: "ほうりつ",
        originals: [
            "法律",
        ]
    },
    {
        normalized: "ほうれい",
        originals: [
            "法令",
        ]
    },
    {
        normalized: "ほうろう",
        originals: [
            "放浪",
        ]
    },
    {
        normalized: "ほうろん",
        originals: [
            "暴論",
        ]
    },
    {
        normalized: "ほおすり",
        originals: [
            "ほおずり",
        ]
    },
    {
        normalized: "ほおつえ",
        originals: [
            "ほおづえ",
        ]
    },
    {
        normalized: "ほおほね",
        originals: [
            "ほお骨",
        ]
    },
    {
        normalized: "ほきゆう",
        originals: [
            "補給",
        ]
    },
    {
        normalized: "ほきよう",
        originals: [
            "補強",
        ]
    },
    {
        normalized: "ほくおう",
        originals: [
            "北欧",
        ]
    },
    {
        normalized: "ほくせい",
        originals: [
            "北西",
        ]
    },
    {
        normalized: "ほくそう",
        originals: [
            "牧草",
        ]
    },
    {
        normalized: "ほくとう",
        originals: [
            "北東",
            "木刀",
        ]
    },
    {
        normalized: "ほくへい",
        originals: [
            "北米",
        ]
    },
    {
        normalized: "ほくほく",
        originals: [
            "ほくほく",
        ]
    },
    {
        normalized: "ほくめつ",
        originals: [
            "撲滅",
        ]
    },
    {
        normalized: "ほくりく",
        originals: [
            "北陸",
        ]
    },
    {
        normalized: "ほけつと",
        originals: [
            "ポケット",
        ]
    },
    {
        normalized: "ほけへる",
        originals: [
            "ポケベル",
        ]
    },
    {
        normalized: "ほこさき",
        originals: [
            "矛先",
        ]
    },
    {
        normalized: "ほころひ",
        originals: [
            "ほころび",
        ]
    },
    {
        normalized: "ほしかき",
        originals: [
            "干しがき",
        ]
    },
    {
        normalized: "ほしくさ",
        originals: [
            "干し草",
        ]
    },
    {
        normalized: "ほしくす",
        originals: [
            "星くず",
        ]
    },
    {
        normalized: "ほしそら",
        originals: [
            "星空",
        ]
    },
    {
        normalized: "ほしもの",
        originals: [
            "干し物",
        ]
    },
    {
        normalized: "ほしやく",
        originals: [
            "保釈",
        ]
    },
    {
        normalized: "ほしゆう",
        originals: [
            "補修",
            "補習",
            "補充",
            "募集",
        ]
    },
    {
        normalized: "ほしよう",
        originals: [
            "保証",
            "保障",
            "補償",
        ]
    },
    {
        normalized: "ほしよく",
        originals: [
            "補色",
        ]
    },
    {
        normalized: "ほすてす",
        originals: [
            "ホステス",
        ]
    },
    {
        normalized: "ほすひす",
        originals: [
            "ホスピス",
        ]
    },
    {
        normalized: "ほそうて",
        originals: [
            "細腕",
        ]
    },
    {
        normalized: "ほそきり",
        originals: [
            "細切り",
        ]
    },
    {
        normalized: "ほたもち",
        originals: [
            "ぼたもち",
        ]
    },
    {
        normalized: "ほちよう",
        originals: [
            "歩調",
        ]
    },
    {
        normalized: "ほつくす",
        originals: [
            "ボックス",
        ]
    },
    {
        normalized: "ほつこく",
        originals: [
            "北国",
        ]
    },
    {
        normalized: "ほつそく",
        originals: [
            "発足",
        ]
    },
    {
        normalized: "ほつたん",
        originals: [
            "発端",
        ]
    },
    {
        normalized: "ほつとう",
        originals: [
            "没頭",
        ]
    },
    {
        normalized: "ほつねん",
        originals: [
            "没年",
        ]
    },
    {
        normalized: "ほつはつ",
        originals: [
            "勃発",
        ]
    },
    {
        normalized: "ほつふす",
        originals: [
            "ポップス",
        ]
    },
    {
        normalized: "ほつへた",
        originals: [
            "ほっぺた",
        ]
    },
    {
        normalized: "ほつほう",
        originals: [
            "北方",
        ]
    },
    {
        normalized: "ほつほつ",
        originals: [
            "ぽつぽつ",
        ]
    },
    {
        normalized: "ほつらく",
        originals: [
            "没落",
        ]
    },
    {
        normalized: "ほとほと",
        originals: [
            "ほどほど",
        ]
    },
    {
        normalized: "ほとほり",
        originals: [
            "ほとぼり",
        ]
    },
    {
        normalized: "ほとんと",
        originals: [
            "ほとんど",
        ]
    },
    {
        normalized: "ほにゆう",
        originals: [
            "哺乳",
            "母乳",
        ]
    },
    {
        normalized: "ほねおり",
        originals: [
            "骨折り",
        ]
    },
    {
        normalized: "ほねくみ",
        originals: [
            "骨組み",
        ]
    },
    {
        normalized: "ほねつき",
        originals: [
            "骨付き",
        ]
    },
    {
        normalized: "ほねぬき",
        originals: [
            "骨抜き",
        ]
    },
    {
        normalized: "ほほえみ",
        originals: [
            "ほほ笑み",
        ]
    },
    {
        normalized: "ほらあな",
        originals: [
            "洞穴",
        ]
    },
    {
        normalized: "ほりさけ",
        originals: [
            "掘り下げ",
        ]
    },
    {
        normalized: "ほるもん",
        originals: [
            "ホルモン",
        ]
    },
    {
        normalized: "ほろくそ",
        originals: [
            "ぼろくそ",
        ]
    },
    {
        normalized: "ほろよい",
        originals: [
            "ほろ酔い",
        ]
    },
    {
        normalized: "ほわいと",
        originals: [
            "ホワイト",
        ]
    },
    {
        normalized: "ほんかく",
        originals: [
            "本格",
        ]
    },
    {
        normalized: "ほんかん",
        originals: [
            "本館",
            "ポンカン",
        ]
    },
    {
        normalized: "ほんけん",
        originals: [
            "本件",
        ]
    },
    {
        normalized: "ほんこく",
        originals: [
            "本国",
        ]
    },
    {
        normalized: "ほんこし",
        originals: [
            "本腰",
        ]
    },
    {
        normalized: "ほんこつ",
        originals: [
            "ぽんこつ",
        ]
    },
    {
        normalized: "ほんこん",
        originals: [
            "香港",
        ]
    },
    {
        normalized: "ほんさい",
        originals: [
            "本妻",
            "盆栽",
        ]
    },
    {
        normalized: "ほんしつ",
        originals: [
            "本質",
            "本日",
        ]
    },
    {
        normalized: "ほんしや",
        originals: [
            "本社",
        ]
    },
    {
        normalized: "ほんしよ",
        originals: [
            "本書",
        ]
    },
    {
        normalized: "ほんしん",
        originals: [
            "本心",
            "凡人",
        ]
    },
    {
        normalized: "ほんすう",
        originals: [
            "本数",
        ]
    },
    {
        normalized: "ほんすし",
        originals: [
            "本筋",
        ]
    },
    {
        normalized: "ほんせき",
        originals: [
            "本籍",
        ]
    },
    {
        normalized: "ほんせん",
        originals: [
            "本線",
            "本選",
        ]
    },
    {
        normalized: "ほんそう",
        originals: [
            "奔走",
        ]
    },
    {
        normalized: "ほんたい",
        originals: [
            "本体",
            "本題",
        ]
    },
    {
        normalized: "ほんたな",
        originals: [
            "本棚",
        ]
    },
    {
        normalized: "ほんちよ",
        originals: [
            "ポンチョ",
        ]
    },
    {
        normalized: "ほんてん",
        originals: [
            "本店",
        ]
    },
    {
        normalized: "ほんとう",
        originals: [
            "本島",
            "本当",
            "本堂",
        ]
    },
    {
        normalized: "ほんにん",
        originals: [
            "本人",
        ]
    },
    {
        normalized: "ほんねん",
        originals: [
            "本年",
        ]
    },
    {
        normalized: "ほんのう",
        originals: [
            "本能",
            "煩悩",
        ]
    },
    {
        normalized: "ほんはこ",
        originals: [
            "本箱",
        ]
    },
    {
        normalized: "ほんはん",
        originals: [
            "本番",
        ]
    },
    {
        normalized: "ほんふん",
        originals: [
            "本分",
            "本文",
        ]
    },
    {
        normalized: "ほんへん",
        originals: [
            "本編",
        ]
    },
    {
        normalized: "ほんほん",
        originals: [
            "ぼんぼん",
        ]
    },
    {
        normalized: "ほんまつ",
        originals: [
            "本末",
        ]
    },
    {
        normalized: "ほんまる",
        originals: [
            "本丸",
        ]
    },
    {
        normalized: "ほんめい",
        originals: [
            "本命",
        ]
    },
    {
        normalized: "ほんもう",
        originals: [
            "本望",
        ]
    },
    {
        normalized: "ほんもの",
        originals: [
            "本物",
        ]
    },
    {
        normalized: "ほんやく",
        originals: [
            "翻訳",
        ]
    },
    {
        normalized: "ほんよみ",
        originals: [
            "本読み",
        ]
    },
    {
        normalized: "ほんらい",
        originals: [
            "本来",
        ]
    },
    {
        normalized: "ほんるい",
        originals: [
            "本塁",
        ]
    },
    {
        normalized: "ほんれい",
        originals: [
            "凡例",
        ]
    },
    {
        normalized: "まいあさ",
        originals: [
            "毎朝",
        ]
    },
    {
        normalized: "まいかい",
        originals: [
            "毎回",
        ]
    },
    {
        normalized: "まいけつ",
        originals: [
            "毎月",
        ]
    },
    {
        normalized: "まいこう",
        originals: [
            "毎号",
        ]
    },
    {
        normalized: "まいすう",
        originals: [
            "枚数",
        ]
    },
    {
        normalized: "まいそう",
        originals: [
            "埋葬",
            "埋蔵",
        ]
    },
    {
        normalized: "まいつき",
        originals: [
            "毎月",
        ]
    },
    {
        normalized: "まいとし",
        originals: [
            "毎年",
        ]
    },
    {
        normalized: "まいなす",
        originals: [
            "マイナス",
        ]
    },
    {
        normalized: "まいにち",
        originals: [
            "毎日",
        ]
    },
    {
        normalized: "まいねん",
        originals: [
            "毎年",
        ]
    },
    {
        normalized: "まいはん",
        originals: [
            "毎晩",
        ]
    },
    {
        normalized: "まいほつ",
        originals: [
            "埋没",
        ]
    },
    {
        normalized: "まうしろ",
        originals: [
            "真後ろ",
        ]
    },
    {
        normalized: "まうんと",
        originals: [
            "マウンド",
        ]
    },
    {
        normalized: "まえあし",
        originals: [
            "前足",
        ]
    },
    {
        normalized: "まえうり",
        originals: [
            "前売り",
        ]
    },
    {
        normalized: "まえおき",
        originals: [
            "前置き",
        ]
    },
    {
        normalized: "まえかき",
        originals: [
            "前書き",
        ]
    },
    {
        normalized: "まえかけ",
        originals: [
            "前掛け",
        ]
    },
    {
        normalized: "まえかた",
        originals: [
            "前方",
        ]
    },
    {
        normalized: "まえかみ",
        originals: [
            "前髪",
        ]
    },
    {
        normalized: "まえかり",
        originals: [
            "前借り",
        ]
    },
    {
        normalized: "まえきん",
        originals: [
            "前金",
        ]
    },
    {
        normalized: "まえふれ",
        originals: [
            "前触れ",
        ]
    },
    {
        normalized: "まかしん",
        originals: [
            "マガジン",
        ]
    },
    {
        normalized: "まかろに",
        originals: [
            "マカロニ",
        ]
    },
    {
        normalized: "まきかい",
        originals: [
            "巻き貝",
        ]
    },
    {
        normalized: "まきこみ",
        originals: [
            "巻き込み",
        ]
    },
    {
        normalized: "まきした",
        originals: [
            "巻き舌",
        ]
    },
    {
        normalized: "まきすし",
        originals: [
            "巻きずし",
        ]
    },
    {
        normalized: "まきそえ",
        originals: [
            "巻き添え",
        ]
    },
    {
        normalized: "まきゆう",
        originals: [
            "魔球",
        ]
    },
    {
        normalized: "まきわり",
        originals: [
            "まき割り",
        ]
    },
    {
        normalized: "まくあき",
        originals: [
            "幕開き",
        ]
    },
    {
        normalized: "まくあけ",
        originals: [
            "幕開け",
        ]
    },
    {
        normalized: "まくした",
        originals: [
            "幕下",
        ]
    },
    {
        normalized: "まくひき",
        originals: [
            "幕引き",
        ]
    },
    {
        normalized: "まけいぬ",
        originals: [
            "負け犬",
        ]
    },
    {
        normalized: "まけくみ",
        originals: [
            "負け組",
        ]
    },
    {
        normalized: "まけこし",
        originals: [
            "負け越し",
        ]
    },
    {
        normalized: "まこころ",
        originals: [
            "真心",
        ]
    },
    {
        normalized: "まこのて",
        originals: [
            "孫の手",
        ]
    },
    {
        normalized: "まさかり",
        originals: [
            "まさかり",
        ]
    },
    {
        normalized: "まさこん",
        originals: [
            "マザコン",
        ]
    },
    {
        normalized: "まさゆめ",
        originals: [
            "正夢",
        ]
    },
    {
        normalized: "ましつく",
        originals: [
            "マジック",
        ]
    },
    {
        normalized: "ましない",
        originals: [
            "まじない",
        ]
    },
    {
        normalized: "ましゆつ",
        originals: [
            "魔術",
        ]
    },
    {
        normalized: "ましよう",
        originals: [
            "魔性",
        ]
    },
    {
        normalized: "ましわり",
        originals: [
            "交わり",
        ]
    },
    {
        normalized: "ますから",
        originals: [
            "マスカラ",
        ]
    },
    {
        normalized: "ますこみ",
        originals: [
            "マスコミ",
        ]
    },
    {
        normalized: "ませこせ",
        originals: [
            "まぜこぜ",
        ]
    },
    {
        normalized: "ませもの",
        originals: [
            "混ぜ物",
        ]
    },
    {
        normalized: "またかし",
        originals: [
            "又貸し",
        ]
    },
    {
        normalized: "またきき",
        originals: [
            "又聞き",
        ]
    },
    {
        normalized: "またした",
        originals: [
            "また下",
        ]
    },
    {
        normalized: "またたき",
        originals: [
            "瞬き",
        ]
    },
    {
        normalized: "まちあい",
        originals: [
            "待合い",
        ]
    },
    {
        normalized: "まちかい",
        originals: [
            "間違い",
        ]
    },
    {
        normalized: "まちかえ",
        originals: [
            "間違え",
        ]
    },
    {
        normalized: "まちかと",
        originals: [
            "街角",
        ]
    },
    {
        normalized: "まちなみ",
        originals: [
            "町並み",
        ]
    },
    {
        normalized: "まちはり",
        originals: [
            "待ち針",
        ]
    },
    {
        normalized: "まちひと",
        originals: [
            "待ち人",
        ]
    },
    {
        normalized: "まちふせ",
        originals: [
            "待ち伏せ",
        ]
    },
    {
        normalized: "まつこう",
        originals: [
            "真っ向",
        ]
    },
    {
        normalized: "まつさお",
        originals: [
            "真っ青",
        ]
    },
    {
        normalized: "まつさき",
        originals: [
            "真っ先",
        ]
    },
    {
        normalized: "まつさつ",
        originals: [
            "抹殺",
        ]
    },
    {
        normalized: "まつしつ",
        originals: [
            "末日",
        ]
    },
    {
        normalized: "まつたけ",
        originals: [
            "まつたけ",
        ]
    },
    {
        normalized: "まつたん",
        originals: [
            "末端",
        ]
    },
    {
        normalized: "まつちや",
        originals: [
            "抹茶",
        ]
    },
    {
        normalized: "まつちよ",
        originals: [
            "マッチョ",
        ]
    },
    {
        normalized: "まとかわ",
        originals: [
            "窓側",
        ]
    },
    {
        normalized: "まときわ",
        originals: [
            "窓際",
        ]
    },
    {
        normalized: "まとくち",
        originals: [
            "窓口",
        ]
    },
    {
        normalized: "まとこし",
        originals: [
            "窓越し",
        ]
    },
    {
        normalized: "まとまり",
        originals: [
            "まとまり",
        ]
    },
    {
        normalized: "まとわく",
        originals: [
            "窓枠",
        ]
    },
    {
        normalized: "まとんな",
        originals: [
            "マドンナ",
        ]
    },
    {
        normalized: "まないた",
        originals: [
            "まな板",
        ]
    },
    {
        normalized: "まなさし",
        originals: [
            "まな差し",
        ]
    },
    {
        normalized: "まにあい",
        originals: [
            "間に合い",
        ]
    },
    {
        normalized: "まねきん",
        originals: [
            "マネキン",
        ]
    },
    {
        normalized: "まねこと",
        originals: [
            "まね事",
        ]
    },
    {
        normalized: "まはたき",
        originals: [
            "まばたき",
        ]
    },
    {
        normalized: "まほろし",
        originals: [
            "幻",
        ]
    },
    {
        normalized: "ままこと",
        originals: [
            "ままごと",
        ]
    },
    {
        normalized: "ままはは",
        originals: [
            "まま母",
        ]
    },
    {
        normalized: "まむかい",
        originals: [
            "真向かい",
        ]
    },
    {
        normalized: "まめまき",
        originals: [
            "豆まき",
        ]
    },
    {
        normalized: "まやかし",
        originals: [
            "まやかし",
        ]
    },
    {
        normalized: "まよいこ",
        originals: [
            "迷い子",
        ]
    },
    {
        normalized: "まらかす",
        originals: [
            "マラカス",
        ]
    },
    {
        normalized: "まらそん",
        originals: [
            "マラソン",
        ]
    },
    {
        normalized: "まりよく",
        originals: [
            "魔力",
        ]
    },
    {
        normalized: "まるかお",
        originals: [
            "丸顔",
        ]
    },
    {
        normalized: "まるかた",
        originals: [
            "丸形",
        ]
    },
    {
        normalized: "まるかり",
        originals: [
            "丸刈り",
        ]
    },
    {
        normalized: "まるこし",
        originals: [
            "丸腰",
        ]
    },
    {
        normalized: "まるたし",
        originals: [
            "丸出し",
        ]
    },
    {
        normalized: "まるなけ",
        originals: [
            "丸投げ",
        ]
    },
    {
        normalized: "まるまる",
        originals: [
            "まるまる",
        ]
    },
    {
        normalized: "まるみえ",
        originals: [
            "丸見え",
        ]
    },
    {
        normalized: "まるやき",
        originals: [
            "丸焼き",
        ]
    },
    {
        normalized: "まるやけ",
        originals: [
            "丸焼け",
        ]
    },
    {
        normalized: "まんいち",
        originals: [
            "万一",
        ]
    },
    {
        normalized: "まんいん",
        originals: [
            "満員",
        ]
    },
    {
        normalized: "まんえつ",
        originals: [
            "満悦",
        ]
    },
    {
        normalized: "まんえん",
        originals: [
            "蔓延",
        ]
    },
    {
        normalized: "まんかい",
        originals: [
            "満開",
        ]
    },
    {
        normalized: "まんかく",
        originals: [
            "満額",
        ]
    },
    {
        normalized: "まんきつ",
        originals: [
            "満喫",
        ]
    },
    {
        normalized: "まんけつ",
        originals: [
            "満月",
        ]
    },
    {
        normalized: "まんさい",
        originals: [
            "満載",
            "万歳",
            "漫才",
        ]
    },
    {
        normalized: "まんしつ",
        originals: [
            "満室",
        ]
    },
    {
        normalized: "まんしや",
        originals: [
            "満車",
        ]
    },
    {
        normalized: "まんしん",
        originals: [
            "慢心",
        ]
    },
    {
        normalized: "まんすい",
        originals: [
            "満水",
        ]
    },
    {
        normalized: "まんせい",
        originals: [
            "万歳",
        ]
    },
    {
        normalized: "まんせき",
        originals: [
            "満席",
        ]
    },
    {
        normalized: "まんそく",
        originals: [
            "満足",
        ]
    },
    {
        normalized: "まんたん",
        originals: [
            "満タン",
        ]
    },
    {
        normalized: "まんてん",
        originals: [
            "満天",
            "満点",
        ]
    },
    {
        normalized: "まんなか",
        originals: [
            "真ん中",
        ]
    },
    {
        normalized: "まんねり",
        originals: [
            "マンネリ",
        ]
    },
    {
        normalized: "まんねん",
        originals: [
            "万年",
        ]
    },
    {
        normalized: "まんのう",
        originals: [
            "万能",
        ]
    },
    {
        normalized: "まんはい",
        originals: [
            "満杯",
        ]
    },
    {
        normalized: "まんひき",
        originals: [
            "万引き",
        ]
    },
    {
        normalized: "まんふく",
        originals: [
            "満腹",
        ]
    },
    {
        normalized: "まんまえ",
        originals: [
            "真ん前",
        ]
    },
    {
        normalized: "まんまる",
        originals: [
            "真ん丸",
        ]
    },
    {
        normalized: "まんめん",
        originals: [
            "満面",
        ]
    },
    {
        normalized: "まんもす",
        originals: [
            "マンモス",
        ]
    },
    {
        normalized: "まんるい",
        originals: [
            "満塁",
        ]
    },
    {
        normalized: "みうこき",
        originals: [
            "身動き",
        ]
    },
    {
        normalized: "みえみえ",
        originals: [
            "見え見え",
        ]
    },
    {
        normalized: "みおくり",
        originals: [
            "見送り",
        ]
    },
    {
        normalized: "みおさめ",
        originals: [
            "見納め",
        ]
    },
    {
        normalized: "みおとし",
        originals: [
            "見落とし",
        ]
    },
    {
        normalized: "みおとり",
        originals: [
            "見劣り",
        ]
    },
    {
        normalized: "みおほえ",
        originals: [
            "見覚え",
        ]
    },
    {
        normalized: "みかえし",
        originals: [
            "見返し",
        ]
    },
    {
        normalized: "みかえり",
        originals: [
            "見返り",
        ]
    },
    {
        normalized: "みかつき",
        originals: [
            "三日月",
        ]
    },
    {
        normalized: "みかまえ",
        originals: [
            "身構え",
        ]
    },
    {
        normalized: "みかわり",
        originals: [
            "身代わり",
        ]
    },
    {
        normalized: "みきうえ",
        originals: [
            "右上",
        ]
    },
    {
        normalized: "みきうち",
        originals: [
            "右打ち",
        ]
    },
    {
        normalized: "みきうて",
        originals: [
            "右腕",
        ]
    },
    {
        normalized: "みきかわ",
        originals: [
            "右側",
        ]
    },
    {
        normalized: "みききき",
        originals: [
            "右利き",
        ]
    },
    {
        normalized: "みきした",
        originals: [
            "右下",
        ]
    },
    {
        normalized: "みきなけ",
        originals: [
            "右投げ",
        ]
    },
    {
        normalized: "みきはし",
        originals: [
            "右端",
        ]
    },
    {
        normalized: "みきまき",
        originals: [
            "右巻き",
        ]
    },
    {
        normalized: "みきわき",
        originals: [
            "右わき",
        ]
    },
    {
        normalized: "みきわめ",
        originals: [
            "見極め",
        ]
    },
    {
        normalized: "みくるみ",
        originals: [
            "身ぐるみ",
        ]
    },
    {
        normalized: "みくろん",
        originals: [
            "ミクロン",
        ]
    },
    {
        normalized: "みこたえ",
        originals: [
            "見ごたえ",
        ]
    },
    {
        normalized: "みころし",
        originals: [
            "見殺し",
        ]
    },
    {
        normalized: "みさいる",
        originals: [
            "ミサイル",
        ]
    },
    {
        normalized: "みしゆう",
        originals: [
            "未収",
        ]
    },
    {
        normalized: "みすあか",
        originals: [
            "水あか",
        ]
    },
    {
        normalized: "みすあけ",
        originals: [
            "水揚げ",
        ]
    },
    {
        normalized: "みすあひ",
        originals: [
            "水浴び",
        ]
    },
    {
        normalized: "みすあめ",
        originals: [
            "水あめ",
        ]
    },
    {
        normalized: "みすいろ",
        originals: [
            "水色",
        ]
    },
    {
        normalized: "みすうみ",
        originals: [
            "湖",
        ]
    },
    {
        normalized: "みすかき",
        originals: [
            "水かき",
        ]
    },
    {
        normalized: "みすかさ",
        originals: [
            "水かさ",
        ]
    },
    {
        normalized: "みすかめ",
        originals: [
            "水がめ",
        ]
    },
    {
        normalized: "みすから",
        originals: [
            "自ら",
        ]
    },
    {
        normalized: "みすきり",
        originals: [
            "水切り",
        ]
    },
    {
        normalized: "みすきわ",
        originals: [
            "水際",
        ]
    },
    {
        normalized: "みすくさ",
        originals: [
            "水草",
        ]
    },
    {
        normalized: "みすくみ",
        originals: [
            "水くみ",
        ]
    },
    {
        normalized: "みすさし",
        originals: [
            "水差し",
        ]
    },
    {
        normalized: "みすせめ",
        originals: [
            "水責め",
        ]
    },
    {
        normalized: "みすたき",
        originals: [
            "水炊き",
        ]
    },
    {
        normalized: "みすたま",
        originals: [
            "水玉",
        ]
    },
    {
        normalized: "みすとり",
        originals: [
            "水鳥",
        ]
    },
    {
        normalized: "みすのみ",
        originals: [
            "水飲み",
        ]
    },
    {
        normalized: "みすはけ",
        originals: [
            "水はけ",
        ]
    },
    {
        normalized: "みすひき",
        originals: [
            "水引",
        ]
    },
    {
        normalized: "みすふき",
        originals: [
            "水ぶき",
        ]
    },
    {
        normalized: "みすふろ",
        originals: [
            "水ぶろ",
        ]
    },
    {
        normalized: "みすまき",
        originals: [
            "水まき",
        ]
    },
    {
        normalized: "みすまし",
        originals: [
            "水増し",
        ]
    },
    {
        normalized: "みすむし",
        originals: [
            "水虫",
        ]
    },
    {
        normalized: "みすもれ",
        originals: [
            "水漏れ",
        ]
    },
    {
        normalized: "みすやり",
        originals: [
            "水やり",
        ]
    },
    {
        normalized: "みすわり",
        originals: [
            "水割り",
        ]
    },
    {
        normalized: "みせかけ",
        originals: [
            "見せ掛け",
        ]
    },
    {
        normalized: "みせさき",
        originals: [
            "店先",
        ]
    },
    {
        normalized: "みせしめ",
        originals: [
            "見せしめ",
        ]
    },
    {
        normalized: "みせはん",
        originals: [
            "店番",
        ]
    },
    {
        normalized: "みそおち",
        originals: [
            "みぞおち",
        ]
    },
    {
        normalized: "みたらし",
        originals: [
            "みたらし",
        ]
    },
    {
        normalized: "みちかけ",
        originals: [
            "満ち欠け",
        ]
    },
    {
        normalized: "みちくさ",
        originals: [
            "道草",
        ]
    },
    {
        normalized: "みちすし",
        originals: [
            "道筋",
        ]
    },
    {
        normalized: "みちつれ",
        originals: [
            "道連れ",
        ]
    },
    {
        normalized: "みちのり",
        originals: [
            "道程",
            "道のり",
        ]
    },
    {
        normalized: "みちはた",
        originals: [
            "道端",
        ]
    },
    {
        normalized: "みちひき",
        originals: [
            "導き",
        ]
    },
    {
        normalized: "みつあみ",
        originals: [
            "三つ編み",
        ]
    },
    {
        normalized: "みつかい",
        originals: [
            "密会",
        ]
    },
    {
        normalized: "みつくす",
        originals: [
            "ミックス",
        ]
    },
    {
        normalized: "みつこう",
        originals: [
            "密航",
        ]
    },
    {
        normalized: "みつこく",
        originals: [
            "密告",
        ]
    },
    {
        normalized: "みつしつ",
        originals: [
            "密室",
        ]
    },
    {
        normalized: "みつせつ",
        originals: [
            "密接",
        ]
    },
    {
        normalized: "みつそう",
        originals: [
            "密造",
        ]
    },
    {
        normalized: "みつたん",
        originals: [
            "密談",
        ]
    },
    {
        normalized: "みつはい",
        originals: [
            "密売",
        ]
    },
    {
        normalized: "みつはち",
        originals: [
            "みつばち",
        ]
    },
    {
        normalized: "みつふう",
        originals: [
            "密封",
        ]
    },
    {
        normalized: "みつへい",
        originals: [
            "密閉",
        ]
    },
    {
        normalized: "みつほし",
        originals: [
            "三つ星",
        ]
    },
    {
        normalized: "みつもり",
        originals: [
            "見積もり",
        ]
    },
    {
        normalized: "みつやく",
        originals: [
            "密約",
        ]
    },
    {
        normalized: "みてくれ",
        originals: [
            "見てくれ",
        ]
    },
    {
        normalized: "みとおし",
        originals: [
            "見通し",
        ]
    },
    {
        normalized: "みところ",
        originals: [
            "見どころ",
        ]
    },
    {
        normalized: "みなおし",
        originals: [
            "見直し",
        ]
    },
    {
        normalized: "みなつき",
        originals: [
            "水無月",
        ]
    },
    {
        normalized: "みなもと",
        originals: [
            "源",
        ]
    },
    {
        normalized: "みならい",
        originals: [
            "見習い",
        ]
    },
    {
        normalized: "みねらる",
        originals: [
            "ミネラル",
        ]
    },
    {
        normalized: "みのうえ",
        originals: [
            "身の上",
        ]
    },
    {
        normalized: "みのかし",
        originals: [
            "見逃し",
        ]
    },
    {
        normalized: "みのたけ",
        originals: [
            "身の丈",
        ]
    },
    {
        normalized: "みのほと",
        originals: [
            "身の程",
        ]
    },
    {
        normalized: "みのむし",
        originals: [
            "みの虫",
        ]
    },
    {
        normalized: "みはらい",
        originals: [
            "未払い",
        ]
    },
    {
        normalized: "みはらし",
        originals: [
            "見晴らし",
        ]
    },
    {
        normalized: "みひらき",
        originals: [
            "見開き",
        ]
    },
    {
        normalized: "みふるい",
        originals: [
            "身震い",
        ]
    },
    {
        normalized: "みまわり",
        originals: [
            "見回り",
        ]
    },
    {
        normalized: "みみあか",
        originals: [
            "耳あか",
        ]
    },
    {
        normalized: "みみかき",
        originals: [
            "耳かき",
        ]
    },
    {
        normalized: "みみくそ",
        originals: [
            "耳くそ",
        ]
    },
    {
        normalized: "みみすく",
        originals: [
            "みみずく",
        ]
    },
    {
        normalized: "みみせん",
        originals: [
            "耳栓",
        ]
    },
    {
        normalized: "みみたふ",
        originals: [
            "耳たぶ",
        ]
    },
    {
        normalized: "みみなり",
        originals: [
            "耳鳴り",
        ]
    },
    {
        normalized: "みみもと",
        originals: [
            "耳もと",
        ]
    },
    {
        normalized: "みようか",
        originals: [
            "みょうが",
        ]
    },
    {
        normalized: "みようし",
        originals: [
            "名字",
        ]
    },
    {
        normalized: "みらくる",
        originals: [
            "ミラクル",
        ]
    },
    {
        normalized: "みりおん",
        originals: [
            "ミリオン",
        ]
    },
    {
        normalized: "みりよく",
        originals: [
            "魅力",
        ]
    },
    {
        normalized: "みわたし",
        originals: [
            "見渡し",
        ]
    },
    {
        normalized: "みんえい",
        originals: [
            "民営",
        ]
    },
    {
        normalized: "みんかん",
        originals: [
            "民間",
        ]
    },
    {
        normalized: "みんけい",
        originals: [
            "民芸",
        ]
    },
    {
        normalized: "みんしゆ",
        originals: [
            "民主",
        ]
    },
    {
        normalized: "みんそく",
        originals: [
            "民俗",
            "民族",
        ]
    },
    {
        normalized: "みんほう",
        originals: [
            "民放",
        ]
    },
    {
        normalized: "みんよう",
        originals: [
            "民謡",
        ]
    },
    {
        normalized: "むきたし",
        originals: [
            "むき出し",
        ]
    },
    {
        normalized: "むきちや",
        originals: [
            "麦茶",
        ]
    },
    {
        normalized: "むきとろ",
        originals: [
            "麦とろ",
        ]
    },
    {
        normalized: "むきめし",
        originals: [
            "麦飯",
        ]
    },
    {
        normalized: "むきゆう",
        originals: [
            "無休",
            "無給",
        ]
    },
    {
        normalized: "むきわら",
        originals: [
            "麦わら",
        ]
    },
    {
        normalized: "むこいり",
        originals: [
            "婿入り",
        ]
    },
    {
        normalized: "むささひ",
        originals: [
            "むささび",
        ]
    },
    {
        normalized: "むしかこ",
        originals: [
            "虫かご",
        ]
    },
    {
        normalized: "むしくい",
        originals: [
            "虫食い",
        ]
    },
    {
        normalized: "むしけら",
        originals: [
            "虫けら",
        ]
    },
    {
        normalized: "むしふろ",
        originals: [
            "蒸しぶろ",
        ]
    },
    {
        normalized: "むしもの",
        originals: [
            "蒸し物",
        ]
    },
    {
        normalized: "むしやき",
        originals: [
            "蒸し焼き",
            "無邪気",
        ]
    },
    {
        normalized: "むしゆう",
        originals: [
            "無臭",
        ]
    },
    {
        normalized: "むしゆん",
        originals: [
            "矛盾",
        ]
    },
    {
        normalized: "むしよう",
        originals: [
            "無償",
            "無情",
        ]
    },
    {
        normalized: "むしよく",
        originals: [
            "無職",
            "無色",
        ]
    },
    {
        normalized: "むしよけ",
        originals: [
            "虫よけ",
        ]
    },
    {
        normalized: "むすひめ",
        originals: [
            "結び目",
        ]
    },
    {
        normalized: "むたあし",
        originals: [
            "無駄足",
        ]
    },
    {
        normalized: "むたくち",
        originals: [
            "無駄口",
        ]
    },
    {
        normalized: "むたほね",
        originals: [
            "無駄骨",
        ]
    },
    {
        normalized: "むととけ",
        originals: [
            "無届け",
        ]
    },
    {
        normalized: "むなくら",
        originals: [
            "胸ぐら",
        ]
    },
    {
        normalized: "むなもと",
        originals: [
            "胸元",
        ]
    },
    {
        normalized: "むねあて",
        originals: [
            "胸当て",
        ]
    },
    {
        normalized: "むねやけ",
        originals: [
            "胸焼け",
        ]
    },
    {
        normalized: "むらかり",
        originals: [
            "群がり",
        ]
    },
    {
        normalized: "むらさき",
        originals: [
            "紫",
            "むらさき",
        ]
    },
    {
        normalized: "むらひと",
        originals: [
            "村人",
        ]
    },
    {
        normalized: "むりよう",
        originals: [
            "無料",
        ]
    },
    {
        normalized: "むりよく",
        originals: [
            "無力",
        ]
    },
    {
        normalized: "めいあん",
        originals: [
            "名案",
        ]
    },
    {
        normalized: "めいうん",
        originals: [
            "命運",
        ]
    },
    {
        normalized: "めいえん",
        originals: [
            "名演",
        ]
    },
    {
        normalized: "めいから",
        originals: [
            "銘柄",
        ]
    },
    {
        normalized: "めいけん",
        originals: [
            "名犬",
            "名言",
            "明言",
        ]
    },
    {
        normalized: "めいさい",
        originals: [
            "迷彩",
        ]
    },
    {
        normalized: "めいさく",
        originals: [
            "名作",
        ]
    },
    {
        normalized: "めいさん",
        originals: [
            "名産",
        ]
    },
    {
        normalized: "めいしゆ",
        originals: [
            "名手",
        ]
    },
    {
        normalized: "めいしよ",
        originals: [
            "名所",
        ]
    },
    {
        normalized: "めいしん",
        originals: [
            "迷信",
            "名人",
        ]
    },
    {
        normalized: "めいせい",
        originals: [
            "名声",
        ]
    },
    {
        normalized: "めいそう",
        originals: [
            "瞑想",
            "迷走",
        ]
    },
    {
        normalized: "めいちよ",
        originals: [
            "名著",
        ]
    },
    {
        normalized: "めいてん",
        originals: [
            "名店",
        ]
    },
    {
        normalized: "めいとう",
        originals: [
            "名刀",
            "名湯",
        ]
    },
    {
        normalized: "めいにち",
        originals: [
            "命日",
        ]
    },
    {
        normalized: "めいひん",
        originals: [
            "名品",
        ]
    },
    {
        normalized: "めいふく",
        originals: [
            "冥福",
        ]
    },
    {
        normalized: "めいふつ",
        originals: [
            "名物",
        ]
    },
    {
        normalized: "めいめい",
        originals: [
            "命名",
        ]
    },
    {
        normalized: "めいもく",
        originals: [
            "名目",
        ]
    },
    {
        normalized: "めいもん",
        originals: [
            "名門",
        ]
    },
    {
        normalized: "めいゆう",
        originals: [
            "名優",
            "盟友",
        ]
    },
    {
        normalized: "めいれい",
        originals: [
            "命令",
        ]
    },
    {
        normalized: "めいわく",
        originals: [
            "迷惑",
        ]
    },
    {
        normalized: "めうつり",
        originals: [
            "目移り",
        ]
    },
    {
        normalized: "めかくし",
        originals: [
            "目隠し",
        ]
    },
    {
        normalized: "めかしら",
        originals: [
            "目頭",
        ]
    },
    {
        normalized: "めかほん",
        originals: [
            "メガホン",
        ]
    },
    {
        normalized: "めきしこ",
        originals: [
            "メキシコ",
        ]
    },
    {
        normalized: "めくしら",
        originals: [
            "目くじら",
        ]
    },
    {
        normalized: "めくすり",
        originals: [
            "目薬",
        ]
    },
    {
        normalized: "めくはり",
        originals: [
            "目配り",
        ]
    },
    {
        normalized: "めさまし",
        originals: [
            "目覚まし",
        ]
    },
    {
        normalized: "めさわり",
        originals: [
            "目障り",
        ]
    },
    {
        normalized: "めしつふ",
        originals: [
            "飯粒",
        ]
    },
    {
        normalized: "めしるし",
        originals: [
            "目印",
        ]
    },
    {
        normalized: "めすいぬ",
        originals: [
            "雌犬",
        ]
    },
    {
        normalized: "めつきん",
        originals: [
            "滅菌",
        ]
    },
    {
        normalized: "めつしゆ",
        originals: [
            "メッシュ",
        ]
    },
    {
        normalized: "めつほう",
        originals: [
            "滅亡",
        ]
    },
    {
        normalized: "めつまり",
        originals: [
            "目詰まり",
        ]
    },
    {
        normalized: "めていあ",
        originals: [
            "メディア",
        ]
    },
    {
        normalized: "めのたま",
        originals: [
            "目の玉",
        ]
    },
    {
        normalized: "めらにん",
        originals: [
            "メラニン",
        ]
    },
    {
        normalized: "めりつと",
        originals: [
            "メリット",
        ]
    },
    {
        normalized: "めりはり",
        originals: [
            "めりはり",
        ]
    },
    {
        normalized: "めるへん",
        originals: [
            "メルヘン",
        ]
    },
    {
        normalized: "めんえき",
        originals: [
            "免疫",
        ]
    },
    {
        normalized: "めんかい",
        originals: [
            "面会",
        ]
    },
    {
        normalized: "めんきよ",
        originals: [
            "免許",
        ]
    },
    {
        normalized: "めんくい",
        originals: [
            "面食い",
        ]
    },
    {
        normalized: "めんさい",
        originals: [
            "免罪",
        ]
    },
    {
        normalized: "めんしき",
        originals: [
            "面識",
        ]
    },
    {
        normalized: "めんしよ",
        originals: [
            "免除",
        ]
    },
    {
        normalized: "めんせい",
        originals: [
            "免税",
        ]
    },
    {
        normalized: "めんせき",
        originals: [
            "免責",
            "面積",
        ]
    },
    {
        normalized: "めんせつ",
        originals: [
            "面接",
        ]
    },
    {
        normalized: "めんたん",
        originals: [
            "面談",
        ]
    },
    {
        normalized: "めんとう",
        originals: [
            "面倒",
        ]
    },
    {
        normalized: "めんほう",
        originals: [
            "綿棒",
            "麺棒",
        ]
    },
    {
        normalized: "めんほく",
        originals: [
            "面目",
        ]
    },
    {
        normalized: "めんみつ",
        originals: [
            "綿密",
        ]
    },
    {
        normalized: "めんもく",
        originals: [
            "面目",
        ]
    },
    {
        normalized: "めんるい",
        originals: [
            "麺類",
        ]
    },
    {
        normalized: "もうけん",
        originals: [
            "猛犬",
        ]
    },
    {
        normalized: "もうこん",
        originals: [
            "毛根",
        ]
    },
    {
        normalized: "もうしこ",
        originals: [
            "申し子",
        ]
    },
    {
        normalized: "もうして",
        originals: [
            "申し出",
        ]
    },
    {
        normalized: "もうしよ",
        originals: [
            "猛暑",
        ]
    },
    {
        normalized: "もうしん",
        originals: [
            "猛進",
            "盲人",
        ]
    },
    {
        normalized: "もうそう",
        originals: [
            "妄想",
        ]
    },
    {
        normalized: "もうつい",
        originals: [
            "猛追",
        ]
    },
    {
        normalized: "もうてん",
        originals: [
            "盲点",
        ]
    },
    {
        normalized: "もうとく",
        originals: [
            "猛毒",
        ]
    },
    {
        normalized: "もうはつ",
        originals: [
            "毛髪",
        ]
    },
    {
        normalized: "もうひつ",
        originals: [
            "毛筆",
        ]
    },
    {
        normalized: "もうまく",
        originals: [
            "網膜",
        ]
    },
    {
        normalized: "もうもく",
        originals: [
            "盲目",
        ]
    },
    {
        normalized: "もえかす",
        originals: [
            "燃えかす",
        ]
    },
    {
        normalized: "もえから",
        originals: [
            "燃え殻",
        ]
    },
    {
        normalized: "もくきよ",
        originals: [
            "木魚",
        ]
    },
    {
        normalized: "もくけき",
        originals: [
            "目撃",
        ]
    },
    {
        normalized: "もくさい",
        originals: [
            "木材",
        ]
    },
    {
        normalized: "もくさつ",
        originals: [
            "黙殺",
        ]
    },
    {
        normalized: "もくせい",
        originals: [
            "木星",
            "木製",
        ]
    },
    {
        normalized: "もくせん",
        originals: [
            "目前",
        ]
    },
    {
        normalized: "もくそう",
        originals: [
            "木造",
        ]
    },
    {
        normalized: "もくそく",
        originals: [
            "目測",
        ]
    },
    {
        normalized: "もくたん",
        originals: [
            "木炭",
        ]
    },
    {
        normalized: "もくてき",
        originals: [
            "目的",
        ]
    },
    {
        normalized: "もくとう",
        originals: [
            "黙祷",
        ]
    },
    {
        normalized: "もくとく",
        originals: [
            "黙読",
        ]
    },
    {
        normalized: "もくにん",
        originals: [
            "黙認",
        ]
    },
    {
        normalized: "もくへん",
        originals: [
            "木片",
        ]
    },
    {
        normalized: "もくよう",
        originals: [
            "木曜",
        ]
    },
    {
        normalized: "もくろく",
        originals: [
            "目録",
        ]
    },
    {
        normalized: "もくろみ",
        originals: [
            "もくろみ",
        ]
    },
    {
        normalized: "もさいく",
        originals: [
            "モザイク",
        ]
    },
    {
        normalized: "もちあし",
        originals: [
            "持ち味",
        ]
    },
    {
        normalized: "もちいえ",
        originals: [
            "持ち家",
        ]
    },
    {
        normalized: "もちうた",
        originals: [
            "持ち歌",
        ]
    },
    {
        normalized: "もちけい",
        originals: [
            "持ち芸",
        ]
    },
    {
        normalized: "もちこし",
        originals: [
            "持ち越し",
        ]
    },
    {
        normalized: "もちこみ",
        originals: [
            "持ち込み",
        ]
    },
    {
        normalized: "もちこめ",
        originals: [
            "もち米",
        ]
    },
    {
        normalized: "もちたし",
        originals: [
            "持ち出し",
        ]
    },
    {
        normalized: "もちつき",
        originals: [
            "もちつき",
        ]
    },
    {
        normalized: "もちてん",
        originals: [
            "持ち点",
        ]
    },
    {
        normalized: "もちにけ",
        originals: [
            "持ち逃げ",
        ]
    },
    {
        normalized: "もちぬし",
        originals: [
            "持ち主",
        ]
    },
    {
        normalized: "もちふん",
        originals: [
            "持ち分",
        ]
    },
    {
        normalized: "もちまえ",
        originals: [
            "持ち前",
        ]
    },
    {
        normalized: "もちもの",
        originals: [
            "持ち物",
        ]
    },
    {
        normalized: "もちゆう",
        originals: [
            "喪中",
        ]
    },
    {
        normalized: "もつきん",
        originals: [
            "木琴",
        ]
    },
    {
        normalized: "もつこう",
        originals: [
            "木工",
        ]
    },
    {
        normalized: "もてなし",
        originals: [
            "もてなし",
        ]
    },
    {
        normalized: "もとしめ",
        originals: [
            "元締め",
        ]
    },
    {
        normalized: "もとせん",
        originals: [
            "元栓",
        ]
    },
    {
        normalized: "ものいい",
        originals: [
            "物言い",
        ]
    },
    {
        normalized: "ものいれ",
        originals: [
            "物入れ",
        ]
    },
    {
        normalized: "ものおき",
        originals: [
            "物置",
        ]
    },
    {
        normalized: "ものおと",
        originals: [
            "物音",
        ]
    },
    {
        normalized: "ものかき",
        originals: [
            "物書き",
        ]
    },
    {
        normalized: "ものかけ",
        originals: [
            "物陰",
        ]
    },
    {
        normalized: "ものくろ",
        originals: [
            "モノクロ",
        ]
    },
    {
        normalized: "ものこし",
        originals: [
            "物腰",
        ]
    },
    {
        normalized: "ものこと",
        originals: [
            "物事",
        ]
    },
    {
        normalized: "ものさし",
        originals: [
            "物差し",
            "物指し",
        ]
    },
    {
        normalized: "ものしり",
        originals: [
            "物知り",
        ]
    },
    {
        normalized: "ものとり",
        originals: [
            "物取り",
        ]
    },
    {
        normalized: "もののけ",
        originals: [
            "もののけ",
        ]
    },
    {
        normalized: "ものほし",
        originals: [
            "物干し",
        ]
    },
    {
        normalized: "ものまね",
        originals: [
            "物まね",
        ]
    },
    {
        normalized: "ものもち",
        originals: [
            "物持ち",
        ]
    },
    {
        normalized: "もはいる",
        originals: [
            "モバイル",
        ]
    },
    {
        normalized: "もみあい",
        originals: [
            "もみ合い",
        ]
    },
    {
        normalized: "もみあけ",
        originals: [
            "もみ上げ",
        ]
    },
    {
        normalized: "もめこと",
        originals: [
            "もめ事",
        ]
    },
    {
        normalized: "ももいろ",
        originals: [
            "桃色",
        ]
    },
    {
        normalized: "もやもや",
        originals: [
            "もやもや",
        ]
    },
    {
        normalized: "もよおし",
        originals: [
            "催し",
        ]
    },
    {
        normalized: "もりそは",
        originals: [
            "盛りそば",
        ]
    },
    {
        normalized: "もりつけ",
        originals: [
            "盛り付け",
        ]
    },
    {
        normalized: "もりつち",
        originals: [
            "盛り土",
        ]
    },
    {
        normalized: "もろつこ",
        originals: [
            "モロッコ",
        ]
    },
    {
        normalized: "もんけん",
        originals: [
            "門限",
        ]
    },
    {
        normalized: "もんこる",
        originals: [
            "モンゴル",
        ]
    },
    {
        normalized: "もんしん",
        originals: [
            "問診",
        ]
    },
    {
        normalized: "もんたい",
        originals: [
            "問題",
        ]
    },
    {
        normalized: "もんとう",
        originals: [
            "問答",
        ]
    },
    {
        normalized: "もんはん",
        originals: [
            "門番",
        ]
    },
    {
        normalized: "やおもて",
        originals: [
            "矢面",
        ]
    },
    {
        normalized: "やきあみ",
        originals: [
            "焼き網",
        ]
    },
    {
        normalized: "やきいも",
        originals: [
            "焼き芋",
        ]
    },
    {
        normalized: "やきいん",
        originals: [
            "焼き印",
        ]
    },
    {
        normalized: "やきそは",
        originals: [
            "焼きそば",
        ]
    },
    {
        normalized: "やきたて",
        originals: [
            "焼きたて",
        ]
    },
    {
        normalized: "やきとり",
        originals: [
            "焼き鳥",
        ]
    },
    {
        normalized: "やきにく",
        originals: [
            "焼き肉",
        ]
    },
    {
        normalized: "やきのり",
        originals: [
            "焼きのり",
        ]
    },
    {
        normalized: "やきふた",
        originals: [
            "焼き豚",
        ]
    },
    {
        normalized: "やきまし",
        originals: [
            "焼き増し",
        ]
    },
    {
        normalized: "やきめし",
        originals: [
            "焼き飯",
        ]
    },
    {
        normalized: "やきもち",
        originals: [
            "焼きもち",
        ]
    },
    {
        normalized: "やきもの",
        originals: [
            "焼き物",
        ]
    },
    {
        normalized: "やきゆう",
        originals: [
            "野球",
        ]
    },
    {
        normalized: "やくいん",
        originals: [
            "役員",
        ]
    },
    {
        normalized: "やくかい",
        originals: [
            "薬害",
        ]
    },
    {
        normalized: "やくかく",
        originals: [
            "薬学",
        ]
    },
    {
        normalized: "やくから",
        originals: [
            "役柄",
        ]
    },
    {
        normalized: "やくさい",
        originals: [
            "薬剤",
        ]
    },
    {
        normalized: "やくしや",
        originals: [
            "役者",
        ]
    },
    {
        normalized: "やくしよ",
        originals: [
            "役所",
        ]
    },
    {
        normalized: "やくしん",
        originals: [
            "躍進",
        ]
    },
    {
        normalized: "やくそう",
        originals: [
            "薬草",
        ]
    },
    {
        normalized: "やくそく",
        originals: [
            "約束",
        ]
    },
    {
        normalized: "やくてん",
        originals: [
            "薬店",
        ]
    },
    {
        normalized: "やくとう",
        originals: [
            "躍動",
        ]
    },
    {
        normalized: "やくとく",
        originals: [
            "役得",
        ]
    },
    {
        normalized: "やくとし",
        originals: [
            "厄年",
        ]
    },
    {
        normalized: "やくにん",
        originals: [
            "役人",
        ]
    },
    {
        normalized: "やくひん",
        originals: [
            "薬品",
        ]
    },
    {
        normalized: "やくふつ",
        originals: [
            "薬物",
        ]
    },
    {
        normalized: "やくふん",
        originals: [
            "訳文",
        ]
    },
    {
        normalized: "やくよう",
        originals: [
            "薬用",
        ]
    },
    {
        normalized: "やくよけ",
        originals: [
            "厄よけ",
        ]
    },
    {
        normalized: "やくわり",
        originals: [
            "役割",
        ]
    },
    {
        normalized: "やけあと",
        originals: [
            "焼け跡",
        ]
    },
    {
        normalized: "やけくそ",
        originals: [
            "やけくそ",
        ]
    },
    {
        normalized: "やけさけ",
        originals: [
            "やけ酒",
        ]
    },
    {
        normalized: "やしうま",
        originals: [
            "やじ馬",
        ]
    },
    {
        normalized: "やしゆう",
        originals: [
            "野獣",
        ]
    },
    {
        normalized: "やしよく",
        originals: [
            "夜食",
        ]
    },
    {
        normalized: "やしるし",
        originals: [
            "矢印",
        ]
    },
    {
        normalized: "やすうり",
        originals: [
            "安売り",
        ]
    },
    {
        normalized: "やすもの",
        originals: [
            "安物",
        ]
    },
    {
        normalized: "やすらき",
        originals: [
            "安らぎ",
        ]
    },
    {
        normalized: "やちよう",
        originals: [
            "野鳥",
        ]
    },
    {
        normalized: "やつかい",
        originals: [
            "厄介",
        ]
    },
    {
        normalized: "やつさき",
        originals: [
            "八つ裂き",
        ]
    },
    {
        normalized: "やとかり",
        originals: [
            "やどかり",
        ]
    },
    {
        normalized: "やとぬし",
        originals: [
            "宿主",
        ]
    },
    {
        normalized: "やとわれ",
        originals: [
            "雇われ",
        ]
    },
    {
        normalized: "やねうら",
        originals: [
            "屋根裏",
        ]
    },
    {
        normalized: "やふさめ",
        originals: [
            "やぶさめ",
        ]
    },
    {
        normalized: "やまいも",
        originals: [
            "山芋",
        ]
    },
    {
        normalized: "やまおく",
        originals: [
            "山奥",
        ]
    },
    {
        normalized: "やまかた",
        originals: [
            "山形",
        ]
    },
    {
        normalized: "やまかわ",
        originals: [
            "山側",
        ]
    },
    {
        normalized: "やまこえ",
        originals: [
            "山越え",
        ]
    },
    {
        normalized: "やまさと",
        originals: [
            "山里",
        ]
    },
    {
        normalized: "やまつみ",
        originals: [
            "山積み",
        ]
    },
    {
        normalized: "やまてら",
        originals: [
            "山寺",
        ]
    },
    {
        normalized: "やまなり",
        originals: [
            "山なり",
        ]
    },
    {
        normalized: "やまねこ",
        originals: [
            "山猫",
        ]
    },
    {
        normalized: "やまひこ",
        originals: [
            "山びこ",
        ]
    },
    {
        normalized: "やまみち",
        originals: [
            "山道",
        ]
    },
    {
        normalized: "やまもり",
        originals: [
            "山盛り",
        ]
    },
    {
        normalized: "やまわけ",
        originals: [
            "山分け",
        ]
    },
    {
        normalized: "やみつき",
        originals: [
            "病み付き",
        ]
    },
    {
        normalized: "やりかい",
        originals: [
            "やりがい",
        ]
    },
    {
        normalized: "やりくち",
        originals: [
            "やり口",
        ]
    },
    {
        normalized: "やりくり",
        originals: [
            "やり繰り",
        ]
    },
    {
        normalized: "やりとり",
        originals: [
            "やり取り",
        ]
    },
    {
        normalized: "やりなけ",
        originals: [
            "やり投げ",
        ]
    },
    {
        normalized: "やわはた",
        originals: [
            "柔肌",
        ]
    },
    {
        normalized: "やんちや",
        originals: [
            "やんちゃ",
        ]
    },
    {
        normalized: "ゆあかり",
        originals: [
            "湯上がり",
        ]
    },
    {
        normalized: "ゆいいつ",
        originals: [
            "唯一",
        ]
    },
    {
        normalized: "ゆいこん",
        originals: [
            "遺言",
        ]
    },
    {
        normalized: "ゆいのう",
        originals: [
            "結納",
        ]
    },
    {
        normalized: "ゆううつ",
        originals: [
            "憂鬱",
        ]
    },
    {
        normalized: "ゆうえい",
        originals: [
            "遊泳",
        ]
    },
    {
        normalized: "ゆうえき",
        originals: [
            "有益",
        ]
    },
    {
        normalized: "ゆうえつ",
        originals: [
            "優越",
        ]
    },
    {
        normalized: "ゆうかい",
        originals: [
            "誘拐",
        ]
    },
    {
        normalized: "ゆうかお",
        originals: [
            "夕顔",
        ]
    },
    {
        normalized: "ゆうかた",
        originals: [
            "夕方",
        ]
    },
    {
        normalized: "ゆうかん",
        originals: [
            "夕刊",
        ]
    },
    {
        normalized: "ゆうきり",
        originals: [
            "夕霧",
        ]
    },
    {
        normalized: "ゆうくう",
        originals: [
            "優遇",
        ]
    },
    {
        normalized: "ゆうくれ",
        originals: [
            "夕暮れ",
        ]
    },
    {
        normalized: "ゆうけん",
        originals: [
            "有限",
        ]
    },
    {
        normalized: "ゆうこう",
        originals: [
            "友好",
            "融合",
        ]
    },
    {
        normalized: "ゆうこく",
        originals: [
            "夕刻",
        ]
    },
    {
        normalized: "ゆうさい",
        originals: [
            "有罪",
        ]
    },
    {
        normalized: "ゆうしき",
        originals: [
            "有識",
        ]
    },
    {
        normalized: "ゆうしや",
        originals: [
            "勇者",
        ]
    },
    {
        normalized: "ゆうしん",
        originals: [
            "友人",
        ]
    },
    {
        normalized: "ゆうすう",
        originals: [
            "融通",
        ]
    },
    {
        normalized: "ゆうせい",
        originals: [
            "優勢",
            "郵政",
        ]
    },
    {
        normalized: "ゆうせん",
        originals: [
            "優先",
            "有線",
        ]
    },
    {
        normalized: "ゆうそう",
        originals: [
            "郵送",
        ]
    },
    {
        normalized: "ゆうそら",
        originals: [
            "夕空",
        ]
    },
    {
        normalized: "ゆうたい",
        originals: [
            "優待",
        ]
    },
    {
        normalized: "ゆうたち",
        originals: [
            "夕立",
        ]
    },
    {
        normalized: "ゆうてん",
        originals: [
            "融点",
        ]
    },
    {
        normalized: "ゆうとう",
        originals: [
            "誘導",
        ]
    },
    {
        normalized: "ゆうとく",
        originals: [
            "有毒",
        ]
    },
    {
        normalized: "ゆうのう",
        originals: [
            "有能",
        ]
    },
    {
        normalized: "ゆうはつ",
        originals: [
            "誘発",
        ]
    },
    {
        normalized: "ゆうはん",
        originals: [
            "夕飯",
        ]
    },
    {
        normalized: "ゆうひん",
        originals: [
            "郵便",
        ]
    },
    {
        normalized: "ゆうへん",
        originals: [
            "雄弁",
        ]
    },
    {
        normalized: "ゆうほう",
        originals: [
            "有望",
        ]
    },
    {
        normalized: "ゆうほく",
        originals: [
            "遊牧",
        ]
    },
    {
        normalized: "ゆうめし",
        originals: [
            "夕飯",
        ]
    },
    {
        normalized: "ゆうもう",
        originals: [
            "勇猛",
        ]
    },
    {
        normalized: "ゆうやけ",
        originals: [
            "夕焼け",
        ]
    },
    {
        normalized: "ゆうやみ",
        originals: [
            "夕やみ",
        ]
    },
    {
        normalized: "ゆうらん",
        originals: [
            "遊覧",
        ]
    },
    {
        normalized: "ゆうりよ",
        originals: [
            "憂慮",
        ]
    },
    {
        normalized: "ゆうれい",
        originals: [
            "幽霊",
        ]
    },
    {
        normalized: "ゆうれつ",
        originals: [
            "優劣",
        ]
    },
    {
        normalized: "ゆうわく",
        originals: [
            "誘惑",
        ]
    },
    {
        normalized: "ゆかいた",
        originals: [
            "床板",
        ]
    },
    {
        normalized: "ゆかした",
        originals: [
            "床下",
        ]
    },
    {
        normalized: "ゆきかき",
        originals: [
            "雪かき",
        ]
    },
    {
        normalized: "ゆきかた",
        originals: [
            "行き方",
        ]
    },
    {
        normalized: "ゆきくに",
        originals: [
            "雪国",
        ]
    },
    {
        normalized: "ゆきさき",
        originals: [
            "行き先",
        ]
    },
    {
        normalized: "ゆきとけ",
        originals: [
            "雪解け",
        ]
    },
    {
        normalized: "ゆきなけ",
        originals: [
            "雪投げ",
        ]
    },
    {
        normalized: "ゆきみち",
        originals: [
            "雪道",
        ]
    },
    {
        normalized: "ゆきやま",
        originals: [
            "雪山",
        ]
    },
    {
        normalized: "ゆきよけ",
        originals: [
            "雪よけ",
        ]
    },
    {
        normalized: "ゆくさき",
        originals: [
            "行く先",
        ]
    },
    {
        normalized: "ゆくすえ",
        originals: [
            "行く末",
        ]
    },
    {
        normalized: "ゆけむり",
        originals: [
            "湯煙",
        ]
    },
    {
        normalized: "ゆさまし",
        originals: [
            "湯冷まし",
        ]
    },
    {
        normalized: "ゆしゆつ",
        originals: [
            "輸出",
        ]
    },
    {
        normalized: "ゆちやく",
        originals: [
            "癒着",
        ]
    },
    {
        normalized: "ゆとおし",
        originals: [
            "湯通し",
        ]
    },
    {
        normalized: "ゆにつと",
        originals: [
            "ユニット",
        ]
    },
    {
        normalized: "ゆにゆう",
        originals: [
            "輸入",
        ]
    },
    {
        normalized: "ゆひきり",
        originals: [
            "指切り",
        ]
    },
    {
        normalized: "ゆひさき",
        originals: [
            "指先",
        ]
    },
    {
        normalized: "ゆひふえ",
        originals: [
            "指笛",
        ]
    },
    {
        normalized: "ゆみなり",
        originals: [
            "弓なり",
        ]
    },
    {
        normalized: "ゆりかこ",
        originals: [
            "揺りかご",
        ]
    },
    {
        normalized: "ゆわかし",
        originals: [
            "湯沸かし",
        ]
    },
    {
        normalized: "よあそひ",
        originals: [
            "夜遊び",
        ]
    },
    {
        normalized: "よいとめ",
        originals: [
            "酔い止め",
        ]
    },
    {
        normalized: "よいとれ",
        originals: [
            "酔いどれ",
        ]
    },
    {
        normalized: "よういく",
        originals: [
            "養育",
        ]
    },
    {
        normalized: "よういん",
        originals: [
            "要員",
            "要因",
        ]
    },
    {
        normalized: "ようえき",
        originals: [
            "溶液",
        ]
    },
    {
        normalized: "ようえん",
        originals: [
            "妖艶",
        ]
    },
    {
        normalized: "ようかい",
        originals: [
            "妖怪",
        ]
    },
    {
        normalized: "ようかく",
        originals: [
            "洋楽",
        ]
    },
    {
        normalized: "ようかん",
        originals: [
            "洋館",
            "ようかん",
            "溶岩",
        ]
    },
    {
        normalized: "ようけい",
        originals: [
            "養鶏",
        ]
    },
    {
        normalized: "ようけん",
        originals: [
            "用件",
            "要件",
        ]
    },
    {
        normalized: "ようこう",
        originals: [
            "陽光",
        ]
    },
    {
        normalized: "ようさい",
        originals: [
            "洋裁",
        ]
    },
    {
        normalized: "ようしき",
        originals: [
            "様式",
            "洋式",
        ]
    },
    {
        normalized: "ようしつ",
        originals: [
            "洋室",
        ]
    },
    {
        normalized: "ようしや",
        originals: [
            "容赦",
        ]
    },
    {
        normalized: "ようしゆ",
        originals: [
            "洋酒",
        ]
    },
    {
        normalized: "ようしよ",
        originals: [
            "洋書",
            "要所",
            "幼女",
        ]
    },
    {
        normalized: "ようしん",
        originals: [
            "用心",
        ]
    },
    {
        normalized: "ようすい",
        originals: [
            "用水",
            "羊水",
        ]
    },
    {
        normalized: "ようすみ",
        originals: [
            "用済み",
        ]
    },
    {
        normalized: "ようせい",
        originals: [
            "妖精",
            "要請",
            "陽性",
        ]
    },
    {
        normalized: "ようせき",
        originals: [
            "容積",
        ]
    },
    {
        normalized: "ようせつ",
        originals: [
            "溶接",
        ]
    },
    {
        normalized: "ようそう",
        originals: [
            "洋装",
        ]
    },
    {
        normalized: "ようたい",
        originals: [
            "容態",
        ]
    },
    {
        normalized: "ようたし",
        originals: [
            "用足し",
        ]
    },
    {
        normalized: "ようつう",
        originals: [
            "腰痛",
        ]
    },
    {
        normalized: "ようてん",
        originals: [
            "要点",
        ]
    },
    {
        normalized: "ようとん",
        originals: [
            "養豚",
        ]
    },
    {
        normalized: "ようなし",
        originals: [
            "洋なし",
        ]
    },
    {
        normalized: "ようにん",
        originals: [
            "容認",
        ]
    },
    {
        normalized: "ようひん",
        originals: [
            "用品",
        ]
    },
    {
        normalized: "ようふう",
        originals: [
            "洋風",
        ]
    },
    {
        normalized: "ようふく",
        originals: [
            "洋服",
        ]
    },
    {
        normalized: "ようふほ",
        originals: [
            "養父母",
        ]
    },
    {
        normalized: "ようふん",
        originals: [
            "養分",
        ]
    },
    {
        normalized: "ようほう",
        originals: [
            "用法",
            "容貌",
            "要望",
        ]
    },
    {
        normalized: "ようもう",
        originals: [
            "羊毛",
        ]
    },
    {
        normalized: "ようやく",
        originals: [
            "要約",
        ]
    },
    {
        normalized: "よきよう",
        originals: [
            "余興",
        ]
    },
    {
        normalized: "よくあさ",
        originals: [
            "翌朝",
        ]
    },
    {
        normalized: "よくあつ",
        originals: [
            "抑圧",
        ]
    },
    {
        normalized: "よくけつ",
        originals: [
            "翌月",
        ]
    },
    {
        normalized: "よくしつ",
        originals: [
            "浴室",
            "翌日",
        ]
    },
    {
        normalized: "よくせい",
        originals: [
            "抑制",
        ]
    },
    {
        normalized: "よくそう",
        originals: [
            "浴槽",
        ]
    },
    {
        normalized: "よくとし",
        originals: [
            "翌年",
        ]
    },
    {
        normalized: "よくねん",
        originals: [
            "翌年",
        ]
    },
    {
        normalized: "よくほう",
        originals: [
            "欲望",
        ]
    },
    {
        normalized: "よくよう",
        originals: [
            "抑揚",
        ]
    },
    {
        normalized: "よこかお",
        originals: [
            "横顔",
        ]
    },
    {
        normalized: "よこかき",
        originals: [
            "横書き",
        ]
    },
    {
        normalized: "よこしま",
        originals: [
            "よこしま",
            "横じま",
        ]
    },
    {
        normalized: "よこつな",
        originals: [
            "横綱",
        ]
    },
    {
        normalized: "よことり",
        originals: [
            "横取り",
        ]
    },
    {
        normalized: "よこはい",
        originals: [
            "横ばい",
        ]
    },
    {
        normalized: "よこはは",
        originals: [
            "横幅",
        ]
    },
    {
        normalized: "よこむき",
        originals: [
            "横向き",
        ]
    },
    {
        normalized: "よこやり",
        originals: [
            "横やり",
        ]
    },
    {
        normalized: "よこゆれ",
        originals: [
            "横揺れ",
        ]
    },
    {
        normalized: "よさくら",
        originals: [
            "夜桜",
        ]
    },
    {
        normalized: "よしゆう",
        originals: [
            "予習",
        ]
    },
    {
        normalized: "よしよう",
        originals: [
            "余剰",
        ]
    },
    {
        normalized: "よせかき",
        originals: [
            "寄せ書き",
        ]
    },
    {
        normalized: "よせなへ",
        originals: [
            "寄せなべ",
        ]
    },
    {
        normalized: "よそいき",
        originals: [
            "よそ行き",
        ]
    },
    {
        normalized: "よそおい",
        originals: [
            "装い",
        ]
    },
    {
        normalized: "よそこと",
        originals: [
            "よそ事",
        ]
    },
    {
        normalized: "よそもの",
        originals: [
            "よそ者",
        ]
    },
    {
        normalized: "よそゆき",
        originals: [
            "よそ行き",
        ]
    },
    {
        normalized: "よちよう",
        originals: [
            "予兆",
        ]
    },
    {
        normalized: "よなおし",
        originals: [
            "世直し",
        ]
    },
    {
        normalized: "よのなか",
        originals: [
            "世の中",
        ]
    },
    {
        normalized: "よひかけ",
        originals: [
            "呼び掛け",
        ]
    },
    {
        normalized: "よひこえ",
        originals: [
            "呼び声",
        ]
    },
    {
        normalized: "よひすて",
        originals: [
            "呼び捨て",
        ]
    },
    {
        normalized: "よひたし",
        originals: [
            "呼び出し",
        ]
    },
    {
        normalized: "よひりん",
        originals: [
            "呼び鈴",
        ]
    },
    {
        normalized: "よふかし",
        originals: [
            "夜更かし",
        ]
    },
    {
        normalized: "よまわり",
        originals: [
            "夜回り",
        ]
    },
    {
        normalized: "よみかき",
        originals: [
            "読み書き",
        ]
    },
    {
        normalized: "よみかけ",
        originals: [
            "読みかけ",
        ]
    },
    {
        normalized: "よみかな",
        originals: [
            "読み仮名",
        ]
    },
    {
        normalized: "よみきり",
        originals: [
            "読み切り",
        ]
    },
    {
        normalized: "よみもの",
        originals: [
            "読み物",
        ]
    },
    {
        normalized: "よめいり",
        originals: [
            "嫁入り",
        ]
    },
    {
        normalized: "よりきり",
        originals: [
            "寄り切り",
        ]
    },
    {
        normalized: "よりみち",
        originals: [
            "寄り道",
        ]
    },
    {
        normalized: "よりよく",
        originals: [
            "余力",
        ]
    },
    {
        normalized: "よるかた",
        originals: [
            "夜型",
        ]
    },
    {
        normalized: "よろこひ",
        originals: [
            "喜び",
        ]
    },
    {
        normalized: "よわこし",
        originals: [
            "弱腰",
        ]
    },
    {
        normalized: "よわたり",
        originals: [
            "世渡り",
        ]
    },
    {
        normalized: "よわむし",
        originals: [
            "弱虫",
        ]
    },
    {
        normalized: "らいいん",
        originals: [
            "来院",
        ]
    },
    {
        normalized: "らいえん",
        originals: [
            "来園",
        ]
    },
    {
        normalized: "らいおん",
        originals: [
            "ライオン",
        ]
    },
    {
        normalized: "らいかん",
        originals: [
            "来館",
        ]
    },
    {
        normalized: "らいけつ",
        originals: [
            "来月",
        ]
    },
    {
        normalized: "らいこう",
        originals: [
            "来校",
            "来航",
        ]
    },
    {
        normalized: "らいしや",
        originals: [
            "来社",
        ]
    },
    {
        normalized: "らいしん",
        originals: [
            "雷神",
        ]
    },
    {
        normalized: "らいてん",
        originals: [
            "来店",
        ]
    },
    {
        normalized: "らいにち",
        originals: [
            "来日",
        ]
    },
    {
        normalized: "らいねん",
        originals: [
            "来年",
        ]
    },
    {
        normalized: "らいはい",
        originals: [
            "礼拝",
        ]
    },
    {
        normalized: "らいはる",
        originals: [
            "来春",
            "ライバル",
        ]
    },
    {
        normalized: "らいほう",
        originals: [
            "来訪",
        ]
    },
    {
        normalized: "らうんし",
        originals: [
            "ラウンジ",
        ]
    },
    {
        normalized: "らうんと",
        originals: [
            "ラウンド",
        ]
    },
    {
        normalized: "らくえん",
        originals: [
            "楽園",
        ]
    },
    {
        normalized: "らくかき",
        originals: [
            "楽書き",
            "落書き",
        ]
    },
    {
        normalized: "らくさつ",
        originals: [
            "落札",
        ]
    },
    {
        normalized: "らくせき",
        originals: [
            "落石",
        ]
    },
    {
        normalized: "らくせつ",
        originals: [
            "落雪",
        ]
    },
    {
        normalized: "らくせん",
        originals: [
            "落選",
        ]
    },
    {
        normalized: "らくたい",
        originals: [
            "落第",
        ]
    },
    {
        normalized: "らくたん",
        originals: [
            "落胆",
        ]
    },
    {
        normalized: "らくてん",
        originals: [
            "楽天",
        ]
    },
    {
        normalized: "らくのう",
        originals: [
            "酪農",
        ]
    },
    {
        normalized: "らくらい",
        originals: [
            "落雷",
        ]
    },
    {
        normalized: "らくろす",
        originals: [
            "ラクロス",
        ]
    },
    {
        normalized: "らけつと",
        originals: [
            "ラケット",
        ]
    },
    {
        normalized: "らしかせ",
        originals: [
            "ラジカセ",
        ]
    },
    {
        normalized: "らしこん",
        originals: [
            "ラジコン",
        ]
    },
    {
        normalized: "らつかん",
        originals: [
            "楽観",
        ]
    },
    {
        normalized: "らつしゆ",
        originals: [
            "ラッシュ",
        ]
    },
    {
        normalized: "らんおう",
        originals: [
            "卵黄",
        ]
    },
    {
        normalized: "らんかん",
        originals: [
            "欄干",
        ]
    },
    {
        normalized: "らんさつ",
        originals: [
            "乱雑",
        ]
    },
    {
        normalized: "らんしや",
        originals: [
            "乱射",
        ]
    },
    {
        normalized: "らんそう",
        originals: [
            "卵巣",
        ]
    },
    {
        normalized: "らんたむ",
        originals: [
            "ランダム",
        ]
    },
    {
        normalized: "らんたん",
        originals: [
            "ランタン",
        ]
    },
    {
        normalized: "らんとう",
        originals: [
            "乱闘",
        ]
    },
    {
        normalized: "らんはく",
        originals: [
            "卵白",
        ]
    },
    {
        normalized: "らんはつ",
        originals: [
            "乱発",
        ]
    },
    {
        normalized: "らんほう",
        originals: [
            "乱暴",
        ]
    },
    {
        normalized: "らんよう",
        originals: [
            "乱用",
        ]
    },
    {
        normalized: "りきかく",
        originals: [
            "力学",
        ]
    },
    {
        normalized: "りきかつ",
        originals: [
            "力学",
        ]
    },
    {
        normalized: "りきさく",
        originals: [
            "力作",
        ]
    },
    {
        normalized: "りきせつ",
        originals: [
            "力説",
        ]
    },
    {
        normalized: "りくくん",
        originals: [
            "陸軍",
        ]
    },
    {
        normalized: "りくそう",
        originals: [
            "陸送",
        ]
    },
    {
        normalized: "りしゆう",
        originals: [
            "履修",
        ]
    },
    {
        normalized: "りしよく",
        originals: [
            "離職",
        ]
    },
    {
        normalized: "りすとら",
        originals: [
            "リストラ",
        ]
    },
    {
        normalized: "りせつと",
        originals: [
            "リセット",
        ]
    },
    {
        normalized: "りたいあ",
        originals: [
            "リタイア",
        ]
    },
    {
        normalized: "りつけん",
        originals: [
            "立件",
        ]
    },
    {
        normalized: "りつたい",
        originals: [
            "立体",
        ]
    },
    {
        normalized: "りつとう",
        originals: [
            "立冬",
        ]
    },
    {
        normalized: "りつとる",
        originals: [
            "リットル",
        ]
    },
    {
        normalized: "りつほう",
        originals: [
            "立法",
        ]
    },
    {
        normalized: "りにゆう",
        originals: [
            "離乳",
        ]
    },
    {
        normalized: "りはひり",
        originals: [
            "リハビリ",
        ]
    },
    {
        normalized: "りひんく",
        originals: [
            "リビング",
        ]
    },
    {
        normalized: "りへんし",
        originals: [
            "リベンジ",
        ]
    },
    {
        normalized: "りまわり",
        originals: [
            "利回り",
        ]
    },
    {
        normalized: "りみつと",
        originals: [
            "リミット",
        ]
    },
    {
        normalized: "りむしん",
        originals: [
            "リムジン",
        ]
    },
    {
        normalized: "りもこん",
        originals: [
            "リモコン",
        ]
    },
    {
        normalized: "りやくこ",
        originals: [
            "略語",
        ]
    },
    {
        normalized: "りゆうい",
        originals: [
            "留意",
        ]
    },
    {
        normalized: "りゆうき",
        originals: [
            "流儀",
        ]
    },
    {
        normalized: "りゆうし",
        originals: [
            "粒子",
        ]
    },
    {
        normalized: "りゆつく",
        originals: [
            "リュック",
        ]
    },
    {
        normalized: "りようけ",
        originals: [
            "両家",
            "良家",
        ]
    },
    {
        normalized: "りようし",
        originals: [
            "漁師",
            "猟師",
        ]
    },
    {
        normalized: "りようち",
        originals: [
            "領地",
        ]
    },
    {
        normalized: "りようて",
        originals: [
            "両手",
        ]
    },
    {
        normalized: "りようと",
        originals: [
            "領土",
        ]
    },
    {
        normalized: "りようは",
        originals: [
            "両刃",
        ]
    },
    {
        normalized: "りようほ",
        originals: [
            "寮母",
        ]
    },
    {
        normalized: "りようめ",
        originals: [
            "両目",
        ]
    },
    {
        normalized: "りようり",
        originals: [
            "料理",
        ]
    },
    {
        normalized: "りよかん",
        originals: [
            "旅館",
        ]
    },
    {
        normalized: "りよくち",
        originals: [
            "緑地",
        ]
    },
    {
        normalized: "りよけん",
        originals: [
            "旅券",
        ]
    },
    {
        normalized: "りよこう",
        originals: [
            "旅行",
        ]
    },
    {
        normalized: "りよしん",
        originals: [
            "旅人",
        ]
    },
    {
        normalized: "りんかく",
        originals: [
            "輪郭",
        ]
    },
    {
        normalized: "りんけつ",
        originals: [
            "臨月",
        ]
    },
    {
        normalized: "りんけん",
        originals: [
            "隣県",
        ]
    },
    {
        normalized: "りんこく",
        originals: [
            "隣国",
        ]
    },
    {
        normalized: "りんしん",
        originals: [
            "隣人",
        ]
    },
    {
        normalized: "りんせき",
        originals: [
            "隣席",
        ]
    },
    {
        normalized: "りんせつ",
        originals: [
            "隣接",
        ]
    },
    {
        normalized: "りんとう",
        originals: [
            "林道",
        ]
    },
    {
        normalized: "るいけい",
        originals: [
            "累計",
        ]
    },
    {
        normalized: "るいしん",
        originals: [
            "塁審",
        ]
    },
    {
        normalized: "るいせき",
        originals: [
            "累積",
        ]
    },
    {
        normalized: "るいせん",
        originals: [
            "涙腺",
        ]
    },
    {
        normalized: "るつくす",
        originals: [
            "ルックス",
        ]
    },
    {
        normalized: "れいおん",
        originals: [
            "冷温",
        ]
    },
    {
        normalized: "れいかい",
        originals: [
            "例外",
        ]
    },
    {
        normalized: "れいかん",
        originals: [
            "冷汗",
            "霊感",
        ]
    },
    {
        normalized: "れいきん",
        originals: [
            "礼金",
        ]
    },
    {
        normalized: "れいくう",
        originals: [
            "冷遇",
        ]
    },
    {
        normalized: "れいこく",
        originals: [
            "冷酷",
        ]
    },
    {
        normalized: "れいしゆ",
        originals: [
            "冷酒",
        ]
    },
    {
        normalized: "れいすい",
        originals: [
            "冷水",
        ]
    },
    {
        normalized: "れいせい",
        originals: [
            "冷製",
            "冷静",
        ]
    },
    {
        normalized: "れいせん",
        originals: [
            "冷戦",
        ]
    },
    {
        normalized: "れいそう",
        originals: [
            "冷蔵",
        ]
    },
    {
        normalized: "れいたい",
        originals: [
            "例題",
        ]
    },
    {
        normalized: "れいとう",
        originals: [
            "冷凍",
        ]
    },
    {
        normalized: "れいねん",
        originals: [
            "例年",
        ]
    },
    {
        normalized: "れいはい",
        originals: [
            "礼拝",
        ]
    },
    {
        normalized: "れいふう",
        originals: [
            "冷風",
        ]
    },
    {
        normalized: "れいふん",
        originals: [
            "例文",
        ]
    },
    {
        normalized: "れいほう",
        originals: [
            "冷房",
        ]
    },
    {
        normalized: "れいめん",
        originals: [
            "冷麺",
        ]
    },
    {
        normalized: "れきせん",
        originals: [
            "歴戦",
        ]
    },
    {
        normalized: "れきたい",
        originals: [
            "歴代",
        ]
    },
    {
        normalized: "れつしや",
        originals: [
            "列車",
        ]
    },
    {
        normalized: "れつすん",
        originals: [
            "レッスン",
        ]
    },
    {
        normalized: "れつせい",
        originals: [
            "劣勢",
        ]
    },
    {
        normalized: "れつてる",
        originals: [
            "レッテル",
        ]
    },
    {
        normalized: "れつとう",
        originals: [
            "列島",
        ]
    },
    {
        normalized: "れとると",
        originals: [
            "レトルト",
        ]
    },
    {
        normalized: "れふりか",
        originals: [
            "レプリカ",
        ]
    },
    {
        normalized: "れんあい",
        originals: [
            "恋愛",
        ]
    },
    {
        normalized: "れんけい",
        originals: [
            "連携",
        ]
    },
    {
        normalized: "れんけつ",
        originals: [
            "連結",
        ]
    },
    {
        normalized: "れんこう",
        originals: [
            "連行",
        ]
    },
    {
        normalized: "れんこん",
        originals: [
            "れんこん",
        ]
    },
    {
        normalized: "れんさい",
        originals: [
            "連載",
        ]
    },
    {
        normalized: "れんしつ",
        originals: [
            "連日",
        ]
    },
    {
        normalized: "れんしや",
        originals: [
            "連写",
            "連射",
        ]
    },
    {
        normalized: "れんせん",
        originals: [
            "連戦",
        ]
    },
    {
        normalized: "れんそう",
        originals: [
            "連想",
        ]
    },
    {
        normalized: "れんそく",
        originals: [
            "連続",
        ]
    },
    {
        normalized: "れんたい",
        originals: [
            "連帯",
        ]
    },
    {
        normalized: "れんたる",
        originals: [
            "レンタル",
        ]
    },
    {
        normalized: "れんたん",
        originals: [
            "練炭",
        ]
    },
    {
        normalized: "れんとう",
        originals: [
            "連投",
            "連動",
        ]
    },
    {
        normalized: "れんはい",
        originals: [
            "連敗",
        ]
    },
    {
        normalized: "れんはつ",
        originals: [
            "連発",
        ]
    },
    {
        normalized: "れんはん",
        originals: [
            "連番",
        ]
    },
    {
        normalized: "れんほう",
        originals: [
            "連邦",
        ]
    },
    {
        normalized: "れんめい",
        originals: [
            "連名",
            "連盟",
        ]
    },
    {
        normalized: "れんらく",
        originals: [
            "連絡",
        ]
    },
    {
        normalized: "れんりつ",
        originals: [
            "連立",
        ]
    },
    {
        normalized: "ろうえい",
        originals: [
            "漏洩",
        ]
    },
    {
        normalized: "ろうかん",
        originals: [
            "老眼",
        ]
    },
    {
        normalized: "ろうこく",
        originals: [
            "牢獄",
        ]
    },
    {
        normalized: "ろうさい",
        originals: [
            "労災",
        ]
    },
    {
        normalized: "ろうしよ",
        originals: [
            "老女",
        ]
    },
    {
        normalized: "ろうしん",
        originals: [
            "老人",
        ]
    },
    {
        normalized: "ろうすい",
        originals: [
            "漏水",
            "老衰",
        ]
    },
    {
        normalized: "ろうせつ",
        originals: [
            "漏洩",
        ]
    },
    {
        normalized: "ろうそく",
        originals: [
            "蝋燭",
        ]
    },
    {
        normalized: "ろうたい",
        originals: [
            "老体",
        ]
    },
    {
        normalized: "ろうてん",
        originals: [
            "漏電",
        ]
    },
    {
        normalized: "ろうとう",
        originals: [
            "労働",
        ]
    },
    {
        normalized: "ろうとく",
        originals: [
            "朗読",
        ]
    },
    {
        normalized: "ろうにん",
        originals: [
            "浪人",
        ]
    },
    {
        normalized: "ろうねん",
        originals: [
            "老年",
        ]
    },
    {
        normalized: "ろうへい",
        originals: [
            "老兵",
        ]
    },
    {
        normalized: "ろうほう",
        originals: [
            "朗報",
        ]
    },
    {
        normalized: "ろうれい",
        originals: [
            "老齢",
        ]
    },
    {
        normalized: "ろくおん",
        originals: [
            "録音",
        ]
    },
    {
        normalized: "ろけつと",
        originals: [
            "ロケット",
        ]
    },
    {
        normalized: "ろしゆつ",
        originals: [
            "露出",
        ]
    },
    {
        normalized: "ろしよう",
        originals: [
            "路上",
        ]
    },
    {
        normalized: "ろつこつ",
        originals: [
            "肋骨",
        ]
    },
    {
        normalized: "ろほつと",
        originals: [
            "ロボット",
        ]
    },
    {
        normalized: "ろまんす",
        originals: [
            "ロマンス",
        ]
    },
    {
        normalized: "ろりこん",
        originals: [
            "ロリコン",
        ]
    },
    {
        normalized: "ろんそう",
        originals: [
            "論争",
        ]
    },
    {
        normalized: "ろんてん",
        originals: [
            "論点",
        ]
    },
    {
        normalized: "ろんとん",
        originals: [
            "ロンドン",
        ]
    },
    {
        normalized: "ろんふん",
        originals: [
            "論文",
        ]
    },
    {
        normalized: "わいると",
        originals: [
            "ワイルド",
        ]
    },
    {
        normalized: "わかくさ",
        originals: [
            "若草",
        ]
    },
    {
        normalized: "わかさき",
        originals: [
            "わかさぎ",
        ]
    },
    {
        normalized: "わかそう",
        originals: [
            "若僧",
            "若造",
        ]
    },
    {
        normalized: "わかつま",
        originals: [
            "若妻",
        ]
    },
    {
        normalized: "わかとり",
        originals: [
            "若鳥",
            "若鶏",
        ]
    },
    {
        normalized: "わかはけ",
        originals: [
            "若はげ",
        ]
    },
    {
        normalized: "わかまま",
        originals: [
            "わがまま",
        ]
    },
    {
        normalized: "わかもの",
        originals: [
            "若者",
        ]
    },
    {
        normalized: "わかれめ",
        originals: [
            "分かれ目",
            "別れ目",
        ]
    },
    {
        normalized: "わきはら",
        originals: [
            "わき腹",
        ]
    },
    {
        normalized: "わきみす",
        originals: [
            "わき水",
        ]
    },
    {
        normalized: "わきみち",
        originals: [
            "わき道",
        ]
    },
    {
        normalized: "わきやく",
        originals: [
            "わき役",
        ]
    },
    {
        normalized: "わきゆう",
        originals: [
            "和牛",
        ]
    },
    {
        normalized: "わくくみ",
        originals: [
            "枠組み",
        ]
    },
    {
        normalized: "わくせい",
        originals: [
            "惑星",
        ]
    },
    {
        normalized: "わくちん",
        originals: [
            "ワクチン",
        ]
    },
    {
        normalized: "わけあり",
        originals: [
            "訳あり",
        ]
    },
    {
        normalized: "わけまえ",
        originals: [
            "分け前",
        ]
    },
    {
        normalized: "わこうと",
        originals: [
            "若人",
        ]
    },
    {
        normalized: "わさわい",
        originals: [
            "災い",
        ]
    },
    {
        normalized: "わしゆつ",
        originals: [
            "話術",
        ]
    },
    {
        normalized: "わしよく",
        originals: [
            "和食",
        ]
    },
    {
        normalized: "わたあめ",
        originals: [
            "綿あめ",
        ]
    },
    {
        normalized: "わたくし",
        originals: [
            "私",
        ]
    },
    {
        normalized: "わつくす",
        originals: [
            "ワックス",
        ]
    },
    {
        normalized: "わつふる",
        originals: [
            "ワッフル",
        ]
    },
    {
        normalized: "わつへん",
        originals: [
            "ワッペン",
        ]
    },
    {
        normalized: "わにかわ",
        originals: [
            "わに皮",
        ]
    },
    {
        normalized: "わらしへ",
        originals: [
            "わらしべ",
        ]
    },
    {
        normalized: "わりあい",
        originals: [
            "割合",
        ]
    },
    {
        normalized: "わりあて",
        originals: [
            "割り当て",
        ]
    },
    {
        normalized: "わりかん",
        originals: [
            "割り勘",
        ]
    },
    {
        normalized: "わりこみ",
        originals: [
            "割り込み",
        ]
    },
    {
        normalized: "わりさん",
        originals: [
            "割り算",
        ]
    },
    {
        normalized: "わりはし",
        originals: [
            "割りばし",
        ]
    },
    {
        normalized: "わりひき",
        originals: [
            "割引",
        ]
    },
    {
        normalized: "わりふり",
        originals: [
            "割り振り",
        ]
    },
    {
        normalized: "わりまし",
        originals: [
            "割り増し",
        ]
    },
    {
        normalized: "わるくち",
        originals: [
            "悪口",
        ]
    },
    {
        normalized: "わるのり",
        originals: [
            "悪乗り",
        ]
    },
    {
        normalized: "わるもの",
        originals: [
            "悪者",
        ]
    },
    {
        normalized: "わるよい",
        originals: [
            "悪酔い",
        ]
    },
    {
        normalized: "われもの",
        originals: [
            "割れ物",
        ]
    },
    {
        normalized: "わんかん",
        originals: [
            "湾岸",
        ]
    },
    {
        normalized: "わんたん",
        originals: [
            "ワンタン",
        ]
    },
    {
        normalized: "わんわん",
        originals: [
            "わんわん",
        ]
    },
    {
        normalized: "あおもり",
        originals: ["青森"]
    },
    {
        normalized: "ふくしま",
        originals: ["福島"]
    },
    {
        normalized: "さいたま",
        originals: ["埼玉"]
    },
    {
        normalized: "かなかわ",
        originals: ["神奈川"]
    },
    {
        normalized: "にいかた",
        originals: ["新潟"]
    },
    {
        normalized: "いしかわ",
        originals: ["石川"]
    },
    {
        normalized: "やまなし",
        originals: ["山梨"]
    },
    {
        normalized: "しすおか",
        originals: ["静岡"]
    },
    {
        normalized: "きようと",
        originals: ["京都"]
    },
    {
        normalized: "おおさか",
        originals: ["大阪"]
    },
    {
        normalized: "ひようこ",
        originals: ["兵庫"]
    },
    {
        normalized: "わかやま",
        originals: ["和歌山"]
    },
    {
        normalized: "とつとり",
        originals: ["鳥取"]
    },
    {
        normalized: "おかやま",
        originals: ["岡山"]
    },
    {
        normalized: "ひろしま",
        originals: ["広島"]
    },
    {
        normalized: "やまくち",
        originals: ["山口"]
    },
    {
        normalized: "とくしま",
        originals: ["徳島"]
    },
    {
        normalized: "ふくおか",
        originals: ["福岡"]
    },
    {
        normalized: "なかさき",
        originals: ["長崎"]
    },
    {
        normalized: "くまもと",
        originals: ["熊本"]
    },
    {
        normalized: "おおいた",
        originals: ["大分"]
    },
    {
        normalized: "みやさき",
        originals: ["宮崎"]
    },
    {
        normalized: "かこしま",
        originals: ["鹿児島"]
    },
    {
        normalized: "さつほろ",
        originals: ["札幌"]
    },
    {
        normalized: "もりおか",
        originals: ["盛岡"]
    },
    {
        normalized: "せんたい",
        originals: ["仙台"]
    },
    {
        normalized: "よこはま",
        originals: ["横浜"]
    },
    {
        normalized: "かなさわ",
        originals: ["金沢"]
    },
];
