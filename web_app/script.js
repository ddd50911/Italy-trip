const itineraryData = [
    { date: "2026-04-02", activity: "SQ879 + SQ356 17:45 台北出發", location: "飛行中" },
    { date: "2026-04-03", activity: "06:30 抵達米蘭", location: "米蘭" },
    { date: "2026-04-04", activity: "探索米蘭", location: "米蘭" },
    { date: "2026-04-05", activity: "06:20-08:52 米蘭前往提拉諾 (Tirano)\n10:06-12:35 提拉諾前往聖莫里茲 (St. Moritz)", location: "聖莫里茲", accommodation: "Chesa Languard" },
    { date: "2026-04-06", activity: "16:16-18:39 聖莫里茲返回提拉諾\n19:08-21:40 提拉諾返回米蘭", location: "米蘭" },
    { date: "2026-04-07", activity: "一日遊：八選一 (建議前六個)", location: "米蘭" },
    { date: "2026-04-08", activity: "一日遊：八選一 (建議前六個)", location: "米蘭" },
    { date: "2026-04-09", activity: "7:15-9:42 米蘭前往威尼斯 (Venezia S.Lucia)\n18:18-20:45 威尼斯返回米蘭", location: "威尼斯" },
    { date: "2026-04-10", activity: "一日遊：八選一 (建議前六個)", location: "米蘭" },
    { date: "2026-04-11", activity: "一日遊：八選一 (建議前六個)", location: "米蘭" },
    { date: "2026-04-12", activity: "一日遊：八選一 (建議前六個)", location: "米蘭" },
    { date: "2026-04-13", activity: "一日遊：八選一 (建議前六個)", location: "米蘭" },
    { date: "2026-04-14", activity: "托斯卡尼 (Tuscany) 或 羅馬+佛羅倫斯", location: "待定" },
    { date: "2026-04-15", activity: "托斯卡尼 (Tuscany) 或 羅馬+佛羅倫斯", location: "待定" },
    { date: "2026-04-16", activity: "托斯卡尼 (Tuscany) 或 羅馬+佛羅倫斯", location: "待定" },
    { date: "2026-04-17", activity: "Outlet 購物", location: "米蘭" },
    { date: "2026-04-18", activity: "SQ355+SQ871 12:30 米蘭出發", location: "飛行中" },
    { date: "2026-04-19", activity: "14:55 抵達台北", location: "甜蜜的家" }
];

const dayTripOptions = [
    {
        id: "bergamo",
        title: "貝加莫 (Bergamo)",
        image: "assets/bergamo.png",
        description: `
            <p><strong>貝加莫 (Bergamo)</strong> 是一座擁有雙重面貌的城市：山丘上的<strong>上城 (Città Alta)</strong> 保留著中世紀的風貌，被威尼斯城牆環繞；山下的<strong>下城 (Città Bassa)</strong> 則充滿現代活力。</p>
            <ul>
                <li><strong>交通：</strong>從米蘭中央車站搭乘火車約 48-50 分鐘即可抵達。</li>
                <li><strong>亮點：</strong>
                    <ul>
                        <li>乘坐纜車前往上城，俯瞰波河平原美景。</li>
                        <li>漫步於舊廣場 (Piazza Vecchia)，參觀聖母聖殿 (Basilica di Santa Maria Maggiore)。</li>
                        <li>沿著古老的威尼斯城牆散步，享受午後陽光。</li>
                    </ul>
                </li>
                <li><strong>美食：</strong>別忘了品嚐當地的 Polenta e Osei (一種甜點) 和 Casoncelli (貝加莫餃子)。</li>
            </ul>
        `
    },
    {
        id: "como",
        title: "科莫湖 (Lake Como)",
        image: "assets/como.png",
        description: `
            <p><strong>科莫湖 (Lake Como)</strong> 是義大利最著名的湖泊之一，以其壯麗的阿爾卑斯山景緻和豪華別墅而聞名。這裡是遠離城市喧囂、享受寧靜的絕佳去處。</p>
            <ul>
                <li><strong>交通：</strong>從米蘭 Cadorna 或中央車站搭乘火車約 30-60 分鐘。</li>
                <li><strong>亮點：：</strong>
                    <ul>
                        <li>搭乘遊船遊覽湖上風光，欣賞貝拉焦 (Bellagio) 和瓦倫納 (Varenna) 等如畫的小鎮。</li>
                        <li>參觀科莫大教堂 (Duomo di Como)。</li>
                        <li>乘坐纜車前往 Brunate，飽覽湖光山色。</li>
                    </ul>
                </li>
            </ul>
        `
    },
    {
        id: "brescia",
        title: "布雷西亞 (Brescia)",
        image: "assets/brescia.png",
        description: `
            <p><strong>布雷西亞 (Brescia)</strong> 擁有義大利北部最大的羅馬遺址區，是一座歷史底蘊深厚的城市，也是重要的工業中心。</p>
            <ul>
                <li><strong>交通：：</strong>從米蘭搭乘高鐵約 36 分鐘，區間車約 1 小時。</li>
                <li><strong>亮點：：</strong>
                    <ul>
                        <li>參觀羅馬廣場 (Piazza del Foro) 和卡比托利歐神廟 (Capitolium)。</li>
                        <li>探索聖朱利亞博物館 (Santa Giulia Museum)，這是聯合國教科文組織世界遺產。</li>
                        <li>登上布雷西亞城堡 (Brescia Castle) 眺望城市全景。</li>
                    </ul>
                </li>
            </ul>
        `
    },
    {
        id: "genova",
        title: "熱那亞 (Genova)",
        image: "assets/genova.png",
        description: `
            <p><strong>熱那亞 (Genova)</strong> 是義大利最大的海港，擁有迷宮般的窄巷 (Caruggi) 和宏偉的宮殿。這裡是哥倫布的故鄉，也是青醬 (Pesto) 的發源地。</p>
            <ul>
                <li><strong>交通：：</strong>從米蘭搭乘 IC 火車約 1 小時 30 分鐘。</li>
                <li><strong>亮點：：</strong>
                    <ul>
                        <li>探索羅利宮殿體系 (Palazzi dei Rolli)，這些被列為世界遺產的豪宅。</li>
                        <li>參觀歐洲最大的水族館之一——熱那亞水族館。</li>
                        <li>在舊港 (Porto Antico) 漫步，感受海洋氣息。</li>
                    </ul>
                </li>
                <li><strong>美食：：</strong>務必嘗試正宗的熱那亞青醬義大利麵和佛卡夏 (Focaccia)。</li>
            </ul>
        `
    },
    {
        id: "torino",
        title: "都靈 (Torino)",
        image: "assets/torino.png",
        description: `
            <p><strong>都靈 (Torino)</strong> 是義大利統一後的第一個首都，以優雅的巴洛克建築、林蔭大道和壯麗的阿爾卑斯山背景而聞名。這裡也是菲亞特汽車和 Lavazza 咖啡的故鄉。</p>
            <ul>
                <li><strong>交通：：</strong>從米蘭搭乘高鐵僅需 1 小時。</li>
                <li><strong>亮點：：</strong>
                    <ul>
                        <li>參觀國家電影博物館，位於地標建築安托內利尖塔 (Mole Antonelliana) 內。</li>
                        <li>探索富麗堂皇的皇宮 (Royal Palace) 和埃及博物館 (Egyptian Museum)。</li>
                        <li>在歷史悠久的咖啡館享用 Bicerin (一種巧克力咖啡飲品)。</li>
                    </ul>
                </li>
            </ul>
        `
    },
    {
        id: "bologna",
        title: "博洛尼亞 (Bologna)",
        image: "assets/bologna.png",
        description: `
            <p><strong>博洛尼亞 (Bologna)</strong> 被稱為「胖子之都」(La Grassa)，是義大利的美食中心。它還擁有世界上最古老的大學和獨特的紅色屋頂景觀。</p>
            <ul>
                <li><strong>交通：：</strong>從米蘭搭乘高鐵約 1 小時。</li>
                <li><strong>亮點：：</strong>
                    <ul>
                        <li>登上阿西內利塔 (Asinelli Tower)，俯瞰紅色城市。</li>
                        <li>漫步於馬喬列廣場 (Piazza Maggiore) 和海神噴泉。</li>
                        <li>探索無盡的拱廊 (Porticoes)，總長超過 40 公里。</li>
                    </ul>
                </li>
                <li><strong>美食：：</strong>肉醬義大利麵 (Tagliatelle al Ragù) 是必吃美食。</li>
            </ul>
        `
    },
    {
        id: "cremona",
        title: "克雷莫納 (Cremona)",
        image: "assets/cremona.png",
        description: `
            <p><strong>克雷莫納 (Cremona)</strong> 是世界著名的小提琴之都，斯特拉迪瓦里 (Stradivari) 等製琴大師皆誕生於此。</p>
            <ul>
                <li><strong>交通：：</strong>從米蘭搭乘火車約 1 小時 10 分鐘。</li>
                <li><strong>亮點：：</strong>
                    <ul>
                        <li>參觀小提琴博物館 (Violin Museum)，欣賞價值連城的名琴。</li>
                        <li>攀登義大利最高的磚砌鐘樓——托拉佐鐘樓 (Torrazzo)。</li>
                        <li>在主教堂廣場 (Piazza del Comune) 欣賞中世紀建築。</li>
                    </ul>
                </li>
            </ul>
        `
    },
    {
        id: "pavia",
        title: "帕維亞 (Pavia)",
        image: "assets/pavia.png",
        description: `
            <p><strong>帕維亞 (Pavia)</strong> 曾是倫巴第王國的首都，擁有一座歷史悠久的大學和著名的修道院。</p>
            <ul>
                <li><strong>交通：：</strong>從米蘭搭乘火車約 30 分鐘。</li>
                <li><strong>亮點：：</strong>
                    <ul>
                        <li>參觀著名的帕維亞修道院 (Certosa di Pavia)，這是文藝復興建築的傑作（位於市區以北）。</li>
                        <li>走過提契諾河上的廊橋 (Ponte Coperto)。</li>
                        <li>探索帕維亞大學的古老校園。</li>
                    </ul>
                </li>
            </ul>
        `
    },
    {
        id: "verona",
        title: "維羅納 (Verona)",
        image: "assets/verona.png",
        description: `
            <p><strong>維羅納 (Verona)</strong> 是羅密歐與茱麗葉的故鄉，以其保存完好的羅馬圓形競技場而聞名，是一座充滿浪漫氣息的城市。</p>
            <ul>
                <li><strong>交通：：</strong>從米蘭搭乘高鐵約 1 小時 13 分鐘。</li>
                <li><strong>亮點：：</strong>
                    <ul>
                        <li>參觀維羅納圓形競技場 (Arena di Verona)，如果季節合適，還能欣賞歌劇。</li>
                        <li>在茱麗葉之家 (Juliet's House) 尋找陽台和雕像。</li>
                        <li>漫步於百草廣場 (Piazza delle Erbe) 和領主廣場。</li>
                    </ul>
                </li>
            </ul>
        `
    }
];

const formatDate = (dateString, format = 'short') => {
    const date = new Date(dateString);
    if (format === 'day') return date.getDate();
    if (format === 'month') return (date.getMonth() + 1) + '月';
    return date.toLocaleDateString('zh-TW');
};

const getAccommodation = (item) => {
    if (item.accommodation) return item.accommodation;
    if (item.location === "Flight" || item.location === "Home" || item.location === "飛行中" || item.location === "甜蜜的家") return null;
    // Default rule: Home in Milan
    return "米蘭住宿 (Home in Milan)";
};

// Modal Logic
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
// const modalDescription = document.getElementById('modal-description'); // This variable is no longer used
const closeModal = document.querySelector('.close-modal');

// Open Modal Function
function openModal(id) {
    const data = dayTripOptions.find(option => option.id === id);
    if (!data) return;

    document.getElementById("modal-title").innerText = data.title;
    document.getElementById("modal-body").innerHTML = data.description;

    // Set Image
    const modalImage = document.getElementById("modal-image");
    if (modalImage) {
        modalImage.src = data.image;
        modalImage.alt = data.title;
    }

    const modal = document.getElementById("modal-overlay");
    modal.classList.add("active");
}

const closeModalHandler = () => {
    modalOverlay.classList.remove('active');
};

closeModal.addEventListener('click', closeModalHandler);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModalHandler();
});

document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('itinerary-list');
    const optionsContainer = document.getElementById('options-list');

    // Render Itinerary
    itineraryData.forEach((item, index) => {
        const accommodation = getAccommodation(item);
        const div = document.createElement('div');
        div.className = 'timeline-item fade-in-up';
        div.style.animationDelay = `${index * 0.1}s`;

        const accommodationHtml = accommodation
            ? `<div class="accommodation">${accommodation}</div>`
            : '';

        div.innerHTML = `
            <div class="date-box">
                <span class="day-num">${formatDate(item.date, 'day')}</span>
                <span class="month">${formatDate(item.date, 'month')}</span>
            </div>
            <div class="content-box">
                <h4>${item.location}</h4>
                <p style="white-space: pre-line">${item.activity}</p>
                ${accommodationHtml}
            </div>
        `;
        timelineContainer.appendChild(div);
    });

    // Render Options
    dayTripOptions.forEach(option => {
        const div = document.createElement('div');
        div.className = 'option-item';
        div.textContent = option.title; // Use option.title instead of option.nameZh
        div.addEventListener('click', () => openModal(option.id)); // Pass option.id
        optionsContainer.appendChild(div);
    });
});
