function ISDoubleNumber(UserNumber) {
    return (UserNumber % 2) == 0 ? true:false;
}

let UserNumber = prompt("enter number",'');

alert(`are ${UserNumber} double number? ${ISDoubleNumber(UserNumber)}`);