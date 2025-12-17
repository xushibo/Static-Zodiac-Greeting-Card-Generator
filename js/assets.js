// 数据资源库 - 每年更新此文件以适配新的生肖
const assets = {
    // 图片数量配置 - 每年更新
    images: {
        backgrounds: 3, // 背景图片数量
        decorations: 4, // 装饰元素数量
        zodiac: {
            rat: 3,      // 鼠
            ox: 0,       // 牛
            tiger: 0,    // 虎
            rabbit: 0,   // 兔
            dragon: 0,   // 龙
            snake: 0,    // 蛇
            horse: 0,    // 马
            goat: 0,     // 羊
            monkey: 0,   // 猴
            rooster: 0,  // 鸡
            dog: 0,      // 狗
            pig: 0       // 猪
        }
    },
    
    // 祝福语文案 - 每年更新
    wishes: {
        general: [
            "新春快乐，万事如意",
            "恭喜发财，身体健康",
            "阖家幸福，事业顺利",
            "岁岁平安，年年有余",
            "福星高照，心想事成"
        ],
        zodiac: {
            rat: ["鼠你最棒", "鼠来宝到", "机智如鼠"],      // 鼠
            ox: ["牛气冲天", "力挽狂牛", "勤劳致富"],      // 牛
            tiger: ["虎虎生威", "如虎添翼", "龙腾虎跃"],    // 虎
            rabbit: ["兔飞猛进", "扬眉兔气", "前兔似锦"],   // 兔
            dragon: ["龙马精神", "望子成龙", "龙行天下"],   // 龙
            snake: ["蛇来运转", "金蛇献瑞", "灵蛇之珠"],    // 蛇
            horse: ["马到成功", "一马当先", "龙马精神"],    // 马
            goat: ["羊羊得意", "喜气洋洋", "三阳开泰"],     // 羊
            monkey: ["猴赛雷", "聪明伶俐", "猢狲王孙"],     // 猴
            rooster: ["闻鸡起舞", "金鸡报晓", "鸡年大吉"],  // 鸡
            dog: ["旺旺旺", "忠义双全", "狗年来福"],        // 狗
            pig: ["猪事顺利", "肥猪拱门", "金猪送福"]       // 猪
        }
    },
    
    // CDN图片资源链接
    cdnImages: {
        backgrounds: [
            "https://images.unsplash.com/photo-1595687385190-0ea83a3c7e10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1595687385190-0ea83a3c7e10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1595687385190-0ea83a3c7e10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        ],
        decorations: [
            "https://cdn.pixabay.com/photo/2013/07/12/12/54/chinese-lanterns-146637_1280.png",
            "https://cdn.pixabay.com/photo/2013/07/12/12/54/chinese-lanterns-146637_1280.png",
            "https://cdn.pixabay.com/photo/2013/07/12/12/54/chinese-lanterns-146637_1280.png",
            "https://cdn.pixabay.com/photo/2013/07/12/12/54/chinese-lanterns-146637_1280.png"
        ],
        zodiac: {
            rat: [
                "https://cdn.pixabay.com/photo/2013/07/12/12/54/chinese-lanterns-146637_1280.png",
                "https://cdn.pixabay.com/photo/2013/07/12/12/54/chinese-lanterns-146637_1280.png",
                "https://cdn.pixabay.com/photo/2013/07/12/12/54/chinese-lanterns-146637_1280.png"
            ]
        }
    }
};

// 当前年份生肖映射
const zodiacAnimals = {
    2020: "rat",      // 鼠
    2021: "ox",       // 牛
    2022: "tiger",    // 虎
    2023: "rabbit",   // 兔
    2024: "dragon",   // 龙
    2025: "snake",    // 蛇
    2026: "horse",    // 马
    2027: "goat",     // 羊
    2028: "monkey",   // 猴
    2029: "rooster",  // 鸡
    2030: "dog",      // 狗
    2031: "pig"       // 猪
};