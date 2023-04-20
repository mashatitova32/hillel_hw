function removeElement(arr, item){
    return arr.filter(el => el !== item);
}

console.log(removeElement([1, 2, 3, 4, 5, 6, 7], 5));