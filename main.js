"use strict";

// task smile from class_work

// without repeat
let smile = ":)";
let smileEmpty ="";

for (let num2 = 0; num2 < 5; num2++) {
    console.log(smileEmpty = smileEmpty + smile );
};

// with repeat

for (let num2 = 0; num2 <= 5; num2++) {
    console.log(smile.repeat (num2) );
};

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




// task 2

let $min = +prompt ('Tape minutes from 0 to 59',0);

if ($min <= 15) {
       alert ("It's a first quarter"); 
}
if ($min <= 30 && $min > 15) {
        alert ("It's a second quarter"); 
 }
 if ($min <= 45 && $min > 30) {
        alert ("It's a third quarter"); 
 }
 if ($min <= 59 && $min > 45) {
        alert ("It's a fourth quarter"); 
 }



//  task 3

let $num = +prompt ('Введите номер сезона 1-4' , 0);
let $result ;
switch ($num) {
        case 1:
                $result = 'зима';
                break;
        case 2:
                $result = 'весна';
                break;
        case 3:
                $result = 'лето';
                break;
         case 4:
                $result = 'осень';
                break;
        default:
                $result = 'Вам пора в отпуск :)';
                break;
}
console.log ($result);
alert ($result);



// task 4

let height = 23;
let width = 10;
let sRectangle = +height * +width;
console.log(sRectangle);
 
const pi = 3.14
let heightC = 10;
let dC = 4;
let vC = heightC * pi * dC**2 / 4;
console.log(`vC= ${vC}`);

let nTriangle = 3;
let mTriangle = 4;
let kTriangle = Math.sqrt(nTriangle **2 + mTriangle **2);
console.log(`kTriangle= ${kTriangle}`);

let nFib = 12;
let el12 = Math.round (Math.pow((1 + Math.sqrt(5) ) / 2, nFib) / Math.sqrt(5));
console.log(`F${nFib}= ${el12}`);

let sIpot = 2000000;
let pYear = 10;
let nYear = 5;
let perepl = 0;
/*  в условии не сказано как выплачивается кредит
я взял за основу, что тело разделено на количество лет и выплачивается один раз в год
 */
for (let ostIpot = 0; ostIpot < nYear; ostIpot++) {
        perepl = perepl + 0.01 * pYear * (sIpot - ostIpot*(sIpot / nYear));
}
console.log(perepl);



// task 5

let someNumber = 45;

while (someNumber <= 67) {
        console.log(someNumber);
        someNumber = someNumber + 1;
}

let someNumber1 = 45 ;

while (someNumber1 <= 670) {
        if (someNumber1%10 == 0) {
                console.log(someNumber1);
        }
        someNumber1 = someNumber1 + 1;
}


for (let someNumber2 = 45; someNumber2 <= 67; someNumber2++) {
        console.log(someNumber2);
}

for (let someNumber2 = 45; someNumber2 <= 670; someNumber2++) {
        if (someNumber2%10 == 0) {
                console.log(someNumber2);
        };
}

// task 6

let naturNumberEven = +prompt(`Tape natural number`, 0);
let sumNaturEven = 0;

for (let sumTemp = 0; sumTemp <= naturNumberEven; sumTemp++) {
        if (sumTemp%2 == 0) {
                sumNaturEven = sumNaturEven + sumTemp;
        };
        
}
console.log(sumNaturEven);
alert(`SUM of even numbers is = ${sumNaturEven}`);


// task 7

let calcNumX = 0;
let calcNumY = 0;
let calcSign = '+';
let calcResultZ = 0;

while (calcSign !=0 ) {
        
         calcNumX = +prompt(`Tape first number`,0);
         calcNumY = +prompt(`Tape second number`,0);
         calcSign = prompt(`Tape operation sign
        
        ( if you want to stop, tape - 0 or nothing )`,0);
                
        switch (calcSign) {
                case '+' :
                        calcResultZ = calcNumX + calcNumY;
                        alert(`calculation result
                        ${calcNumX} + ${calcNumY} = ${calcResultZ}`);
                        break;
                case '-' :
                        calcResultZ = calcNumX - calcNumY;
                        alert(`calculation result
                        ${calcNumX} - ${calcNumY} = ${calcResultZ}`);
                        break;
                case '*' :
                        calcResultZ = calcNumX * calcNumY;
                        alert(`calculation result
                        ${calcNumX} * ${calcNumY} = ${calcResultZ}`);
                         break;
                case '/' :
                        if (calcNumY != 0 ) {
                        calcResultZ = calcNumX / calcNumY;
                        alert(`calculation result
                       ${calcNumX} / ${calcNumY} = ${calcResultZ}`);
                       break;
                        }
                        alert(`cannot be divided by zero`);
                        break; 
                 case '0' :
                        break;
                default:
                        alert(`please tape another sign!`);
                        break;
                };
 }alert(`Thank you!
 See you later!!!`);
           
 

 // task 8

let naturNumberOdd = 255;
let sumNaturOdd = 0;

for (let sumTemp = 0; sumTemp <= naturNumberOdd; sumTemp++) {
        if (sumTemp%2 > 0) {
                sumNaturOdd = sumNaturOdd + sumTemp;
        };
        
}
console.log(sumNaturOdd);
alert(`SUM of odd numbers is = ${sumNaturOdd}`);



// task 9

let multiTable = 3

for (let multiTemp = 1; multiTemp <= 9; multiTemp++) {
        console.log(`${multiTable} * ${multiTemp} = ${multiTemp * multiTable}`);
};



// task 10

let ahyNumber = +prompt ("Tape any integer from 1 and higher",1);
let sumAnyNumber = 0;

for (let anyNumberTemp = 1; anyNumberTemp <= ahyNumber; anyNumberTemp++) {
        sumAnyNumber = sumAnyNumber + anyNumberTemp;
} alert (`Sum every number from 1 to ${ahyNumber} = ${sumAnyNumber}`);



// task 11

for (let tryCounter = 3; tryCounter > 0; tryCounter--) {
        let riddleAnswer = prompt (`Что ездит по городу с рогами ? 

        у Вас есть ${tryCounter} попытки, 
        если не знаете пишите "Сдаюсь"`,0);

        switch (riddleAnswer) {
                case "Сдаюсь":
                        alert(`правильный ответ "Тролейбус"`);
                        tryCounter = 0;
                        break;
                 case "Тролейбус":
                        alert(`Правильно!`);
                        tryCounter = 0;  
                        break;
                        
                default:
                        if (tryCounter > 1) { 
                                alert(`Подумай ещё!`);
        }
        }
        
} alert("Конец!");


// task 12

let naturNumberOddFirst = +prompt(`tape first number`,0);
let naturNumberOddLast = +prompt(`tape last number`,0);
let sumNaturOdd1 = 0;

for (let sumTemp = naturNumberOddFirst; sumTemp <= naturNumberOddLast; sumTemp++) {
        if (sumTemp%2 > 0) {
                sumNaturOdd1 = sumNaturOdd1 + sumTemp;
        };
        
}
console.log(`SUM of odd numbers from ${naturNumberOddFirst} to ${naturNumberOddLast} is = ${sumNaturOdd1}`);
alert(`SUM of odd numbers from ${naturNumberOddFirst} to ${naturNumberOddLast} is = ${sumNaturOdd1}`);


// task 13

let factorInteger = +prompt (`Tape any integer`,0);
let factorialFrom = 1
for (let factorialTemp = factorInteger; factorialTemp > 0; factorialTemp--) {
        factorialFrom = factorialFrom * factorialTemp;
        
} alert(`Factorial from ${factorInteger} = ${factorialFrom}`);


// task 14 

let twoToPower = 1;
let powerForTwo = 10;

for (let powerTemp = 1; powerTemp <= powerForTwo; powerTemp++) {
        twoToPower = twoToPower * 2;
        console.log(twoToPower);
}

// THE END !!!