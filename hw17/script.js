const Person = function (pName,pAge){
    this.name = pName;
    this.age = pAge;
}

const Person1 = new Person('Max',16);
const Person2 = new Person('Julia',24);
const Person3 = new Person('Victor',38);
const Person4 = new Person('Jane',42);

function display(){
    console.log(this.name, this.age);
}
display.call(Person1);
display.call(Person2);
display.call(Person3);
display.call(Person4);

const Car = function (cModel,cColor,cNumber,cYear){
    this.model = cModel;
    this.color = cColor;
    this.number = cNumber;
    this.year = cYear;
}

const Car1 = new Car('audi','red',4732,2021);
const Car2 = new Car('bmw','black',2325,2022);
const Car3 = new Car('toyota','white',2304,2015);

if(new Person(age) < 18){
    console.log('Цій людині зе немає 18 років.');
}