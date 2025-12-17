// 获取当前年份的生肖
function getCurrentZodiac() {
    const currentYear = new Date().getFullYear();
    // 根据中国农历新年日期调整年份
    // 注意：这是一个简化版的计算，实际的农历新年日期每年都不同
    // 在实际应用中可能需要更精确的计算方法
    return zodiacAnimals[currentYear] || "dragon"; // 默认为龙年
}

// 生成随机整数
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 获取随机背景图片
function getRandomBackground() {
    // 检查是否有CDN资源
    if (assets.cdnImages && assets.cdnImages.backgrounds.length > 0) {
        const bgIndex = getRandomInt(0, assets.cdnImages.backgrounds.length - 1);
        return assets.cdnImages.backgrounds[bgIndex];
    } else {
        // 回退到本地资源
        const bgNum = getRandomInt(1, assets.images.backgrounds);
        return `assets/images/backgrounds/${bgNum}.jpg`;
    }
}

// 获取随机装饰图片
function getRandomDecoration() {
    // 检查是否有CDN资源
    if (assets.cdnImages && assets.cdnImages.decorations.length > 0) {
        const decIndex = getRandomInt(0, assets.cdnImages.decorations.length - 1);
        return assets.cdnImages.decorations[decIndex];
    } else {
        // 回退到本地资源
        const decNum = getRandomInt(1, assets.images.decorations);
        return `assets/images/decorations/${decNum}.png`;
    }
}

// 获取随机生肖图片
function getRandomZodiacImage(zodiac) {
    // 检查是否有CDN资源
    if (assets.cdnImages && 
        assets.cdnImages.zodiac && 
        assets.cdnImages.zodiac[zodiac] && 
        assets.cdnImages.zodiac[zodiac].length > 0) {
        const imageIndex = getRandomInt(0, assets.cdnImages.zodiac[zodiac].length - 1);
        return assets.cdnImages.zodiac[zodiac][imageIndex];
    } else {
        // 回退到本地资源
        const imageCount = assets.images.zodiac[zodiac];
        if (imageCount > 0) {
            const imgNum = getRandomInt(1, imageCount);
            return `assets/images/zodiac/${zodiac}/${imgNum}.png`;
        }
        return ''; // 如果没有图片则返回空字符串
    }
}

// 获取随机祝福语
function getRandomWish(zodiac) {
    // 获取通用祝福语
    const generalWishes = assets.wishes.general;
    const generalWish = generalWishes[getRandomInt(0, generalWishes.length - 1)];
    
    // 获取生肖专属祝福语
    const zodiacWishes = assets.wishes.zodiac[zodiac];
    const zodiacWish = zodiacWishes[getRandomInt(0, zodiacWishes.length - 1)];
    
    return {
        general: generalWish,
        zodiac: zodiacWish
    };
}

// 创建贺卡元素
function createCardElement(src, className, alt) {
    const img = document.createElement('img');
    img.src = src;
    img.className = className;
    img.alt = alt;
    return img;
}

// 生成贺卡
function generateGreetingCard() {
    const zodiac = getCurrentZodiac();
    const wishes = getRandomWish(zodiac);
    
    // 获取贺卡容器
    const cardContainer = document.getElementById('greetingCard');
    
    // 清空容器
    cardContainer.innerHTML = '';
    
    // 设置背景
    cardContainer.style.backgroundImage = `url('${getRandomBackground()}')`;
    
    // 创建卡片内容容器
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    
    // 添加装饰元素
    const decorations = [
        { className: 'decoration top-left', alt: '装饰' },
        { className: 'decoration top-right', alt: '装饰' },
        { className: 'decoration bottom-left', alt: '装饰' },
        { className: 'decoration bottom-right', alt: '装饰' }
    ];
    
    decorations.forEach(decoration => {
        const decImg = createCardElement(getRandomDecoration(), decoration.className, decoration.alt);
        cardContent.appendChild(decImg);
    });
    
    // 添加生肖主图
    const zodiacImagePath = getRandomZodiacImage(zodiac);
    if (zodiacImagePath) {
        const zodiacImg = createCardElement(zodiacImagePath, 'zodiac-image', `${zodiac}年`);
        cardContent.appendChild(zodiacImg);
    }
    
    // 添加祝福语
    const wishText = document.createElement('div');
    wishText.className = 'wish-text';
    wishText.textContent = wishes.general;
    cardContent.appendChild(wishText);
    
    const zodiacWishText = document.createElement('div');
    zodiacWishText.className = 'zodiac-wish';
    zodiacWishText.textContent = wishes.zodiac;
    cardContent.appendChild(zodiacWishText);
    
    // 将内容添加到贺卡容器
    cardContainer.appendChild(cardContent);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 绑定"换一张祝福"按钮事件
    const generateBtn = document.getElementById('generateBtn');
    generateBtn.addEventListener('click', generateGreetingCard);
    
    // 首次生成贺卡
    generateGreetingCard();
});