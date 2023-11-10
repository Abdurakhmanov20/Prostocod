// Создайте объект car с свойствами brand, model и year, и методом start, который выводит в консоль сообщение "Автомобиль {brand} {model} {year} года выпуска заведен".
const car = {
    brand: "bmw",
    model: "e34",
    year: 2004,
    start : function(){
        return `Автомобиль, ${this.brand} ${this.model} ${this.year} года выпуска заведена`
    },
};
console.log(car.start());

// Создайте объект user с свойствами name, age и методом greet, который выводит в консоль сообщение "Привет, меня зовут {name}, мне {age} лет".
const user = {
    name: "Adam",
    age: "20",
    greet : function(){
        return `Привет, меня зовут ${this.name}, мне ${this.age} лет`
    },
};
console.log(user.greet());

// Создайте объект calculator с методами add, minus, multiply и divide, которые принимают два числа в качестве аргументов и выполняют соответствующую математическую операцию, возвращая результат.

const calculator = {
    oneChislo: 4,
    twoChislo: 5,
    add : function(){
        return this.oneChislo + this.twoChislo
    },
    minus : function(){
        return this.oneChislo - this.twoChislo
    },
    multiply : function(){
        return this.oneChislo * this.twoChislo
    },
    divide : function(){
        return this.oneChislo / this.twoChislo
    }
};
console.log(calculator.add());
console.log(calculator.minus());
console.log(calculator.multiply());
console.log(calculator.divide());

// Создайте объект book с свойствами title, author и year, и методом getInfo, который выводит в консоль информацию о книге в формате "Название: {title}, Автор: {author}, Год издания: {year}".
const book = {
    title:"Белоснежная долина",
    author:"Изабелла Роудс",
    year:2003,
    getInfo : function(){
        return `Название:${this.title}, Автор:${this.author}, Год издания:${this.year}`
    }
};
console.log(book.getInfo());

// Массивы

// Создайте массив с числами (не менее 10) и выведите его длину

let arr = new Array(1,2,3,4,5,6,7,8,9,10);
console.log(arr);

// Создайте два новых массива на основании предыдущего, содержащий только чётные и нечётные числа соответственно

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [evenNumbers, oddNumbers] = numbers.reduce(
  (acc, val) => {
    acc[val % 2].push(val);
    return acc;
  },
  [[], []]
);
console.log(evenNumbers);  
console.log(oddNumbers); 


// Создайте массив содержащий объекты user, со свойствами age, number, city

const users = ["age", "number", "city"];
console.log(users);

// Добавьте новый элемент в конец массива и выведите обновленный массив.
let users2 = ['age', 'number', 'city'];
users2.push('name')
console.log(users2);

// Удалите первый элемент из массива и выведите обновленный массив.

let users3 = ['age', 'number', 'city'];
users3.pop(0)
console.log(users3);

// Используя метод join(), объедините все элементы массива в одну строку, разделенную запятой.

const grape = ['col', 'Volum', 'Spectr']
const myVar = grape.join(',');
console.log(myVar);

// 7. Проверьте, содержит ли массив определенный элемент, и выведите соответствующее сообщение.

// НЕ СМОГ РЕШИТЬ