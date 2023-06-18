function IsLeapYear(year){
    if(year % 4 == 0 && year % 100 != 0){
        return true;
    }else return false;
}

alert(IsLeapYear(2020));