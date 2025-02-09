const KEY = '96b947a45d33d7dc1c49af3203966408'
// bu mening kalitim. Agar o'zingiz olsangiz va ishlamasa buni ishlating.
// Agar ishlamay qolsa unda 1 soatda so'rovlar soni limitdan oshib ketgan bo'ladi.
// Aloqa: Telegram => @akror_web

// my keys
// cd894f226099e03bd00257ed781081da
// 189c6d85c1fb4a0b888ca3ad0abc62bb

// https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=cd894f226099e03bd00257ed781081da;

const getData = async (link) => {
    loaderFunc(true)
    const res = await fetch(link);
    loaderFunc(false)
    const data = await res.json();
    return data;
}

