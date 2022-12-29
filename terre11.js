// 24 to 12:


const input = process.argv[2];
let hours = input.slice(0,2);
const colon = input.charAt(2);
const minutes = input.slice(3);

if(hours.length == 2 && minutes.length == 2){
    if(minutes >= 0 && minutes < 60){
        if(hours == 0){
            hours = 12;
            console.log(hours + colon + minutes + "AM");
        }else if(hours > 0 && hours < 12){
            console.log(input + "AM");
        }else if(hours == 12){
            hours = 12;
            console.log(hours + colon + minutes + "PM")
        }else if(hours > 12 && hours < 24){
            let counter = 1;
            for(i = 13; i < 24; i++){
                if(i == hours){
                    hours = counter;
                    console.log(hours + colon + minutes + "PM");
                    break;
                }
                counter++;
            }
        }else{
            console.log("Erreur! Format de l'heure incorecte.");
        }
    }else{
        console.log("Erreur! Format de l'heure incorecte.");
    }
}else{
    console.log("Erreur! Format de l'heure incorecte.");
}
