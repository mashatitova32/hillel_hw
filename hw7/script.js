let action = prompt('add, sub, mult, div');
let oneNum = prompt('One number');
let twoNum = prompt('Two number');

switch (action){
    case 'add':
        alert(`${oneNum} + ${twoNum} = ${parseInt(oneNum) + parseInt(twoNum)}`);
    break;
    case 'sub':
        alert(`${oneNum} - ${twoNum} = ${oneNum - twoNum}`);
        break;
    case 'mult':
        alert(`${oneNum} * ${twoNum} = ${oneNum * twoNum}`);
        break;
    case 'div':
        alert(`${oneNum} / ${twoNum} = ${oneNum / twoNum}`);
        break;
}

