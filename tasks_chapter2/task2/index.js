const AZN = 0.8;
const EUR = 1.1;
const UAN = 1.2;

function conversion(value)
{ 
    let amount = document.getElementById("input_amount").value;
    let converted = undefined;
    
    switch (value) {
        case "AZN":
            converted = amount*AZN;
            break;
    
        case "EUR":
            converted = amount*EUR;
            break;

        case "UAN":
            converted = amount*UAN;
            break;

        default:
            break;
    }

    document.getElementById("result_of_convert").textContent=`${converted} ${value}`;
}