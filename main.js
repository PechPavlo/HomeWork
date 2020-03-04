"use strict";

// task 0

let weekDay = +prompt ("Tape the number of weekday from 0 - Sunday to 6 - Saturday ",0)
switch (weekDay) {
    case 0:
        alert ("Timetable for Sunday..." );
        break;
     case 1:
        alert ("Timetable for Monday..." );
        break;    
    case 2:
            alert ("Timetable for Tuesday... " );
            break; 
    case 3:
            alert ("Timetable for Wednesday... " );
            break;
    case 4:
            alert ("Timetable for Thursday... " );
            break;
    case 5:
            alert ("Timetable for Friday ..." );
            break;
    case 6:
            alert ("Timetable for Saturday... " );
            break;
    default:
        alert (`You need some REST!!!
          :)`);
        break;
    }

// task 1

let townCode = +prompt ('Введите код города',0);
let oneMinuteCost ;
let tenMinutesCost ;
let town;

if (townCode == 905) { town = "Москва" , oneMinuteCost = 4.15;
        
}

if (townCode == 194) { town = "Ростов" , oneMinuteCost = 1.98;
        
}
if (townCode == 491) { town = "Краснодар" , oneMinuteCost = 2.69;
        
}
if (townCode == 800) { town = "Киров" , oneMinuteCost = 5;
        
}    
tenMinutesCost = oneMinuteCost * 10;

alert (`Десять минут разговора с городом ${town} стоит ${tenMinutesCost} р.`);

