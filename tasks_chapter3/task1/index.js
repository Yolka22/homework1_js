function range_sum(leftBorder,rightBorder) {
    let sum = 0;

    for(;leftBorder<=rightBorder;leftBorder++){
        sum+=leftBorder;
    }
    return sum;
}

alert(range_sum(5,10));