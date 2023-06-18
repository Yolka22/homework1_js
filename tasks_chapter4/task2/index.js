function show_time(){

    for (let i = 0; i < 3; i++) {
        if(arguments[i]==null){
            arguments[i]="00";
        }
      }

   return `${arguments[0]}:${arguments[1]}:${arguments[2]}`
}

alert(show_time(12,4));