function comparison(leftNumber,rigtNumber) {
    
    if(leftNumber===rigtNumber){
        return 0;
    }
    return leftNumber>rigtNumber? 1 : -1;
}

alert(comparison(1,3));