let answer = '';
let age = prompt('Enter your year of birth');
let city = prompt('What city do you live in?');
let sport = prompt('What is your favourite sport?');

let get_current_age = function(date) {
    return new Date().getFullYear() - date;
};
alert(get_current_age(age));

if(age === null){
    alert('Шкода, що Ви не захотіли ввести свій рік народження.')
} else if(city === null){
    alert('Шкода, що Ви не захотіли ввести свіє місто.')
}else if(sport === null){
    alert('Шкода, що Ви не захотіли ввести свій улюблений вид спортую')
}