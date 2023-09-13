// Задание 1
console.log("\n   Задание 1");

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
    }

// Вариант 1
console.log("\nВариант 1. Все значения объекта numbers >= 3:");
for (const key in numbers) {
    if (numbers[key] >= 3) {
        console.log(numbers[key]);
    }
}

// Вариант 2
console.log("\nВариант 2. Все значения объекта numbers >= 3:");
Object.values(numbers).forEach(elem => { if (elem >= 3) console.log(elem);});

// Задание 2
console.log("\n   Задание 2");

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
            likes: 10,
            dislikes: 2, // вывести это число
        },
        },
        {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
            likes: 3,
            dislikes: 1,
        },
        },
    ],
};

console.log("\nАвтор post:");
console.log(post.author);
console.log("Некоторые данные коментариев:");
console.log(`Коментарий 0 rating dislikes: ${post.comments[0].rating.dislikes}`);
console.log(`Коментарий 1 userId: ${post.comments[1].userId}`);
console.log(`Коментарий 1 text: ${post.comments[1].text}`);

// Задание 3
console.log("\n   Задание 3");

const products = [
    {
    id: 3,
    price: 200,
    },
    {
    id: 4,
    price: 900,
    },
    {
    id: 1,
    price: 1000,
    },
];

products.forEach(element => element.price = element.price * 0.85);
console.log(products);

// Задание 4
console.log("\n   Задание 4");

const productsList = [
    {
    id: 3,
    price: 127,
    photos: [
        "1.jpg",
        "2.jpg",
    ],
    },
    {
    id: 5,
    price: 499,
    photos: [],
    },
    {
    id: 10,
    price: 26,
    photos: [
        "3.jpg",
    ],
    },
    {
    id: 8,
    price: 78,
    },
];

console.log("\nПродуктовые карточки содержат хотя бы одно фото:");
console.log(productsList.filter((el) => {
    if (el.hasOwnProperty('photos') && (el.photos.length > 0)){
    return el;}
}));

console.log("\nСортировка массива объектов productsList по возрастанию price:");
console.log(productsList.sort((firstElem, secondElem) => firstElem.price - secondElem.price));

// Задание 5
console.log("\n   Задание 5");

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// Вариант 1
console.log("\nВариант 1");
const objDays = {};
for (let i = 0; i < en.length; i++) {
    objDays[en[i]] = ru[i];    
}
console.log(objDays);

// Вариант 2
console.log("\nВариант 2");
const DaysWeek = en.reduce((acc, el, i) => {
    acc[el] = ru[i];
    return acc;
}, {});
console.log(DaysWeek);