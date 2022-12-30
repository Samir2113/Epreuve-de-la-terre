// 12 to 24:


const input = process.argv[2];

let hours = input.slice(0,2);
const colon = input.slice(2,3);
const minutes = input.slice(3,5);
let meridiem = input.slice(5).toUpperCase();


if(input.length == 7 && colon == ":"){
    if(meridiem == "AM" || meridiem == "PM"){
        if(minutes >= 0 && minutes < 60){
            if(hours > 0 && hours <= 12){
                if(hours == 12 ){
                    if(meridiem == "AM"){
                        hours = "00";
                        console.log(hours + colon + minutes);
                    }else if(meridiem == "PM"){
                        console.log(hours + colon + minutes);
                    }
                }else{
                    if(meridiem == "AM"){
                        console.log(hours + colon + minutes);
                    }else if(meridiem == "PM"){
                        counter = 13;
                        for(i = 1; i < 12; i++){
                            if(hours == i){
                                hours = counter;
                                console.log(hours + colon + minutes);
                                break;
                            }
                            counter++;
                        }
                    }else{
                        console.log("Erreur!");
                    }
                }
            }else{
                console.log("Erreur! Format de l'heure incorrect");
            }
        }else{
            console.log("Erreur! Format de l'heure incorrect");
        }
    }else{
        console.log("Erreur! Format de l'heure incorrect");    
    }
}else{
    console.log("Erreur! Format de l'heure incorrect");
}