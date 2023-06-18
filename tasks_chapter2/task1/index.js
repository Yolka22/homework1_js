function CalcPercent(TotalPrice) {
    if (TotalPrice>500) {
        return 0.07;
    }else if(TotalPrice>300){
        return 0.05;
    }else if(TotalPrice>200){
        return 0.03;
    }else return 0;
}

let price = prompt("Enter Price",'');
alert(price-price*CalcPercent(price));