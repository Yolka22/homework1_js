function greatest_common_divisior(a,b){


    while (a != 0 & b != 0){
        if(a > b){
            a = a%b;
        }else{
            b = b%a;
        }
    }

    return a+b;
}



console.log(greatest_common_divisior(16,80));