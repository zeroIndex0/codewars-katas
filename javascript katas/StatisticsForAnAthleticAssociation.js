// Statistics for an Athletic Association
// https://www.codewars.com/kata/statistics-for-an-athletic-association

/*

You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners
 come to compete. Each time you get a string of all race results of every team who has run. 
 For example here is a string showing the individual results of a team of 5 runners:

"01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for 
    seconds) are positive or null integer (represented as strings) with one or two digits. 
    There are no traps in this format.

To compare the results of the teams you are asked for giving three statistics; range, average 
and median.

Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value 
is 3, and the highest is 9, so the range is 9 − 3 = 6.

Mean or Average : To calculate mean, add together all of the numbers in a set and then divide
the sum by the total count of numbers.

Median : In statistics, the median is the number separating the higher half of a data sample 
from the lower half. The median of a finite list of numbers can be found by arranging all the 
observations from lowest value to highest value and picking the middle one (e.g., the median 
    of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an 
    even number of observations, then there is no single middle value; the median is then 
    defined to be the mean of the two middle values 
    (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

Your task is to return a string giving these 3 values. For the example given above, the 
string result will be

"Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

of the form:

"Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"

where hh, mm, ss are integers (represented by strings) with each 2 digits.

Remarks:

    if a result in seconds is ab.xy... it will be given truncated as ab.

    if the given string is "" you will return ""

*/




// function stat(strg) {
//     if(strg === "") return "";
//     let splitInput = strg.split(',');
//     let splitData = [];
//     console.log(splitInput);
//     for(let i = 0; i < splitInput.length; i++) {
//         splitInput[i] = splitInput[i].replace(/^\s/, '');  //remove leading whitespace
//         splitInput[i] = splitInput[i].replace(/^0/, '');   //remove leading zeros
//         console.log(splitInput[i]);
//         splitData[i] = splitInput[i].split('|');
//     }


//     //If the string is empty then return an empty string


//     //sort the array first thing
//     splitData.sort();
//     console.log(splitData);



//     //Range ------------------------------------------------------------------------------
//     //I have to find the lowest and highest values and subtract them
//     //thats going to be a little rough, damn
//     //how would i find the lowest and highest vaules?????
//     //I need to boil this down, how do you subtract time?
//     //highest - lowest
//     //I should start from the right and then go left
//     //2|17|17 - 01|15|59 = 1|1|42
//     //   1|2|-42 = 1|1|18
//     let subsection = 2;
//     let hours = 0;
//     let minutes = 0;
//     let seconds = 0;
//     let borrow = 0;
//     let carry = 0;
//     let rangeString = "";
//     let meanString = "";
//     let medianString = "";

//     console.log(splitData[0]);                   
//     console.log(splitData[splitData.length - 1]);
//     for(let i = subsection; i >= 0; i--) {
//         console.log(splitData[0][i]);
//         console.log(splitData[splitData.length - 1][i]);
//         if(i === 2) {
//             seconds = splitData[splitData.length - 1][i] - splitData[0][i];
//             if(seconds < 0) {
//                 seconds += 60;
//                 borrow = 1;
//             }
//         } else if(i === 1) {
//             minutes = splitData[splitData.length - 1][i] - splitData[0][i];
//             if(borrow === 1) {
//                 minutes -= 1;
//             }
//         } else if(i === 0) {
//             hours = splitData[splitData.length - 1][i] - splitData[0][i];
//         }

//         rangeString = hours + "|" + minutes + "|" + seconds;

//         console.log(hours);
//         console.log(minutes);
//         console.log(seconds);
//         console.log(rangeString);


//         // hours = splitData[splitData.length - 1][0] - splitData[0][0];
//         // mintues = splitData[splitData.length - 1][1] - splitData[0][1];
//         // seconds = splitData[splitData.length - 1][2] - splitData[0][2];
//         // if(mintues < 0) {
//         //     mintues += 60;
//         //     carry = 1;
//         // }
//     }
//     //END RANGE ------------------------------------------------------------------


//     let temp17 = 17;
//     let temp59 = 12;
//     let sum = 0;
//     //let carry = 0;
//     console.log(temp17-temp59);
//     if(temp17-temp59 < 0) {
//         sum = temp17-temp59 + 60;
//         carry = 1;
//     } else {
//         sum = temp17-temp59;
//         carry = 0;
//     }
//     console.log(sum, carry);
//     //the above is wrong, wow, a bit harder than expected
//     //i guess it should be 1|1|18
//     //so 17 - 59 = 18

//     //now do this for each section.  You shouldnt have to worry about negative numbers
//     //in the last iteration since it will be the last one
//     //END RANGE NOTES-------------------------------------------




//     //Mean or Average
//     console.log(splitData[0][0]);
//     //for the addition: if sum / 60 > 1 then floor the value and add it to a carry variable
//     console.log(152 / 60);
//     console.log(152 % 60); //remaining mintues
//     let flooredValue =152 / 60;
//     console.log(Math.floor(flooredValue));
//     //then subtract 60 * flooredValue from total to get the remainder
//     //actually, just % that shit on 60 to get the remainder... duh
//     //repeat process twice


//     hours = 0;
//     minutes = 0;
//     seconds = 0;
//     carry = 0;

//     for(let i = 0; i < splitData.length; i++) {
//         hours += Number(splitData[i][0]);
//         minutes += Number(splitData[i][1]);
//         seconds += Number(splitData[i][2]);
//     }

//         // if(seconds > 60 ) {
//         //     // let temp = seconds;
//         //     console.log(Math.floor(seconds / 60));
//         //     carry = Math.floor(seconds / 60);
//         //     seconds = seconds % 60;
//         //     console.log(seconds);
//         // }

//         // hours = hours / splitData.length;
//         // carry = hours - Math.floor(hours);
//         // hours = Math.floor(hours);
//         // console.log(carry);
//         // console.log(minutes);
//         // if(minutes > 60 ) {
//         //     carry = Math.floor(minutes / 60);
//         //     minutes = minutes % 60;
//         //     minutes += carry;
//         //     console.log(carry);
//         // }
//         // // seconds += carry;
//         // console.log(carry);


//         //hours = 3600 seconds
//         //mintues = 60 seonds
//         console.log(hours);
//         console.log(minutes);
//         console.log(seconds);
//         //8778.14 total seonds after / by 7



//     //END MEAN OR AVERAGE



//     console.log(splitData);
//     //so with them split up like this i would have to do two joins to get the back together
//     //but i feel like there has to be a better way to pull them apart?
//     //i digress, i can add each indicy and if the second and thrid index ( 1 - 2 )
//     // is over 60 then add to the next one in proper order, so maybe its best to work backwards
//     //


//     //Median:
//     //so you will have to get the middle value.  Ezpz if its an odd number
//     //if the length is even you will have to add the two middle numbers
//     //first off, how do we get the middle two numbers if the length is even?
//     //grab the index at / 2 and / 2 - 1
//     console.log(splitData.length / 2);
//     console.log(splitData[splitData.length / 2 - 1]);
//     console.log(splitData[splitData.length / 2]);
//     //then we add these two together and then divide by 2
//     //which now opens up another whole can of worms as how do we divde by two?
//     //
//     console.log(49 / 2);
//     console.log(54 / 2);
//     //   2|24|57

//     //worst case =  1|59|59  +  2|58|58
//     //seconds    =  7199 + 10738
//     //raw        =  3|117|117
//     //           =  will first have to add from right to left carrying correctly
//     //           =  x|xx|57 + 1 mintue carry
//     //           =  x|58|57 + 1 hour carry
//     //           =  4|58|57
//     //           =  divide by 2
//     //           =  2|29|28.5
//     //           =  Will i have to leave in the decimal at the end?
//     //           =  The description says to leave off the trailing decimals at the end of seconds
//     //this will have to work from right to left, for sure this time


// }


//I think all return values have to have a leading zero on the start, 
//so it would be best to add leading zeros first than remove them and then adding them?






//Start over!
function stat(strg) {
    if(strg === "") return "";
    let splitInput       = strg.split(',');
    let splitData        = [];
    let subsection       = 2;
    let secondsInAnHour  = 3600;
    let secondsInAMinute = 60;
    console.log(splitInput);
    for(let i = 0; i < splitInput.length; i++) {
        splitInput[i] = splitInput[i].replace(/^\s/, '');  //remove leading whitespace
        splitInput[i] = splitInput[i].replace(/^0/, '');   //remove leading zeros
        console.log(splitInput[i]);
        splitData[i] = splitInput[i].split('|');
    }
    splitData.sort(function(a,b) {
        let aTotal = 0;
        let bTotal = 0;
        for(let i = 0; i < a.length; i++) {
            aTotal += a[i];
            bTotal += b[i];
        }
        console.log(a[0]);
        return aTotal - bTotal;
    });
    
    //I need to convert the time into seconds
    //I need a way to convert seconds back into hours and mintues


    //Range:--------------------------------------------------------------------------------
    //subtract smallest from the largest
    let rangeSum   = 0;
    let rangeTemp  = 0;
    let rangeCarry = 0;
    console.log(splitData);
    // console.log(splitData[splitData.length -1], splitData[0]);
    for(let i = subsection; i >= 0; i--) {
        if(i === 2) {
            rangeTemp = splitData[splitData.length - 1][i] - splitData[0][i];
            if(rangeTemp < 0) {
                rangeTemp += 60;
                rangeCarry = 1;
            }
            rangeSum += rangeTemp;
        } else if(i === 1) {
            rangeTemp = splitData[splitData.length - 1][i] - splitData[0][i];
            if(rangeCarry === 1) {
                rangeTemp -= 1;
                rangeCarry = 0;
            }
            if(rangeTemp < 0) {
                rangeTemp += 60;
                rangeCarry = 1;
            }
            rangeSum += rangeTemp * secondsInAMinute;
        } else {
            rangeTemp = splitData[splitData.length - 1][i] - splitData[0][i];
            if(rangeCarry === 1) {
                rangeTemp -= 1;
            }
            rangeSum += rangeTemp * secondsInAnHour;
            rangeTemp = 0;
        }
        console.log(rangeSum);
    }




    //Average: ---------------------------------------------------------------------------
    let averageHours   = 0;
    let averageMinutes = 0;
    let averageSeconds = 0;
    let averageSum     = 0;
    let averageTemp    = 0;
    for(let i = 0; i < splitData.length; i++) {
            averageHours += Number(splitData[i][0]);
            averageMinutes += Number(splitData[i][1]);
            averageSeconds += Number(splitData[i][2]);
    }
    console.log(averageHours, averageMinutes, averageSeconds);
    //SECONDS
    if(averageSeconds > 60) {
        averageTemp = Math.floor(averageSeconds / secondsInAMinute);
        averageSeconds -= (averageTemp * secondsInAMinute);
        console.log(averageSeconds)
        // averageSeconds =  (averageSeconds - averageTemp);
        // averageSeconds = Math.floor(averageSeconds * secondsInAMinute);
        averageSum += averageSeconds;
        console.log(averageTemp);
        console.log(averageSeconds);
        console.log(averageSum);
    } else {
        averageSum += averageSeconds;
    }

    //MINUTES
    averageMinutes += averageTemp;
    if(averageMinutes > 60) {
        console.log(averageMinutes);
        averageTemp = Math.floor(averageMinutes / secondsInAMinute);
        console.log(averageTemp);
        averageMinutes -= (averageTemp * secondsInAMinute);
        console.log(averageMinutes);
        // averageMinutes =  (averageMinutes - averageTemp);
        // averageMinutes = Math.floor(averageMinutes * secondsInAMinute);
        averageSum += (averageMinutes * secondsInAMinute);
        console.log(averageTemp);
        console.log(averageMinutes);
        console.log(averageSum);

    } else {
        averageSum += averageMinutes * secondsInAMinute;
        averageTemp = 0;
        console.log(averageSum);
    }

    //HOURS
    averageHours += averageTemp;
    averageSum += (averageHours * secondsInAnHour);
    
    //TOTAL AVERAGE
    averageSum /= splitData.length;
    console.log(averageSum);



    //Median: --------------------------------------------------------------------------
    let medianHours   = 0;
    let medianMinutes = 0;
    let medianSeconds = 0;
    let medianSum     = 0;
    let medianTemp    = 0;
    console.log(Math.floor((splitData.length ) / 2));
    if(splitData.length % 2 === 1) {
        for(let i = 0; i <= subsection; i++) {
            console.log(splitData[(splitData.length - 1) / 2][i]);
            if(i === 0) {
                medianSum += Number(splitData[(splitData.length - 1) / 2][i]) * secondsInAnHour;
            } else if (i === 1) {
                medianSum += Number(splitData[(splitData.length - 1) / 2][i]) * secondsInAMinute;
            } else {
                medianSum += Number(splitData[(splitData.length - 1) / 2][i]);
            }
        }
        console.log(medianSum);
    } else {
        //grab the two middle values: length / 2 && (length / 2) - 1 
        for(let i = 0; i < 2; i++) {
            medianHours += Number(splitData[(splitData.length / 2) - i][0]);
            medianMinutes += Number(splitData[(splitData.length / 2) - i][1]);
            medianSeconds += Number(splitData[(splitData.length / 2) - i][2]);
    }
    console.log(medianHours, medianMinutes, medianSeconds);
        //add them together
        if(medianSeconds > 60) {
            medianTemp = Math.floor(medianSeconds / secondsInAMinute);
            medianSeconds -= (medianTemp * secondsInAMinute);
            console.log(medianSeconds);
            medianSum += medianSeconds;
            console.log(medianTemp);
            console.log(medianSeconds);
            console.log(medianSum);
        } else {
            medianSum += medianSeconds;
        }
    
        //MINUTES
        medianMinutes += medianTemp;
        console.log(medianMinutes);
        if(medianMinutes > 60) {
            console.log(medianMinutes);
            medianTemp = Math.floor(medianMinutes / secondsInAMinute);
            console.log(medianTemp);
            medianMinutes -= (medianTemp * secondsInAMinute);
            console.log(medianMinutes);
            medianSum += (medianMinutes * secondsInAMinute);
            console.log(medianTemp);
            console.log(medianMinutes);
            console.log(medianSum);
    
        } else {
            medianSum += medianMinutes * secondsInAMinute;
            medianTemp = 0;
            console.log(medianSum);
        }
    
        //HOURS
        medianHours += medianTemp;
        medianSum += (medianHours * secondsInAnHour);
        
        //TOTAL AVERAGE
        medianSum /= 2;
        console.log(medianSum);
    }


    //convert everything back to hours minutes and seconds!
    console.log(rangeSum);
    console.log(averageSum);
    console.log(medianSum);



    //converback to what i want
    function hourMinuteSecond(time) {
        let hours   = 0;
        let minutes = 0;
        let seconds = 0;
        let temp    = 0;
        let secondsInAnHour  = 3600;
        let secondsInAMinute = 60;
        //grab the hours
        hours = Math.floor(time / secondsInAnHour);
        time = time - hours * secondsInAnHour
        console.log(hours);
        console.log(time);
        //grab the mintues
        minutes = Math.floor(time / secondsInAMinute);
        time = time - minutes * secondsInAMinute;
        console.log(minutes);
        console.log(time);
        //grab the seonds
        seconds = Math.floor(time);
        console.log(seconds);

        if(hours < 10) {
            hours = "0" + hours.toString();
        } else {
            hours = hours.toString();
        }
        console.log(hours);

        if(minutes < 10) {
            minutes = "0" + minutes.toString();
        } else {
            minutes = minutes.toString();
        }
        if(seconds < 10) {
            seconds = "0" + seconds.toString();
        } else {
            seconds = seconds.toString();
        }


        return hours + "|" + minutes + "|" + seconds;
    }

    let range = hourMinuteSecond(rangeSum);
    console.log(range);

    let average = hourMinuteSecond(averageSum);
    console.log(average);

    let median = hourMinuteSecond(medianSum);
    console.log(median);

    return "Range: " + range + " Average: " + average + " Median: " + median;

}













function stat(strg) {
    if(strg === "") return "";
    let splitInput       = strg.split(',');
    let splitData        = [];
    let subsection       = 2;
    let secondsInAnHour  = 3600;
    let secondsInAMinute = 60;
    for(let i = 0; i < splitInput.length; i++) {
        splitInput[i] = splitInput[i].replace(/^\s/, '');  //remove leading whitespace
        splitInput[i] = splitInput[i].replace(/^0/, '');   //remove leading zeros
        splitData[i] = splitInput[i].split('|');
    }
    splitData.sort(function(a,b) {
        let aTotal = 0;
        let bTotal = 0;
        for(let i = 0; i < a.length; i++) {
            aTotal += a[i];
            bTotal += b[i];
        }
        return aTotal - bTotal;
    });

    //Range:--------------------------------------------------------------------------------
    let rangeSum   = 0;
    let rangeTemp  = 0;
    let rangeCarry = 0;
    for(let i = subsection; i >= 0; i--) {
        if(i === 2) {
            rangeTemp = splitData[splitData.length - 1][i] - splitData[0][i];
            if(rangeTemp < 0) {
                rangeTemp += 60;
                rangeCarry = 1;
            }
            rangeSum += rangeTemp;
        } else if(i === 1) {
            rangeTemp = splitData[splitData.length - 1][i] - splitData[0][i];
            if(rangeCarry === 1) {
                rangeTemp -= 1;
                rangeCarry = 0;
            }
            if(rangeTemp < 0) {
                rangeTemp += 60;
                rangeCarry = 1;
            }
            rangeSum += rangeTemp * secondsInAMinute;
        } else {
            rangeTemp = splitData[splitData.length - 1][i] - splitData[0][i];
            if(rangeCarry === 1) {
                rangeTemp -= 1;
            }
            rangeSum += rangeTemp * secondsInAnHour;
            rangeTemp = 0;
        }
    }

    //Average: ---------------------------------------------------------------------------
    let averageHours   = 0;
    let averageMinutes = 0;
    let averageSeconds = 0;
    let averageSum     = 0;
    let averageTemp    = 0;  //temp is used as a carry value
    for(let i = 0; i < splitData.length; i++) {
            averageHours += Number(splitData[i][0]);
            averageMinutes += Number(splitData[i][1]);
            averageSeconds += Number(splitData[i][2]);
    }
    //SECONDS
    if(averageSeconds > 60) {
        averageTemp = Math.floor(averageSeconds / secondsInAMinute);
        averageSeconds -= (averageTemp * secondsInAMinute);
        averageSum += averageSeconds;
    } else {
        averageSum += averageSeconds;
    }

    //MINUTES
    averageMinutes += averageTemp;
    if(averageMinutes > 60) {
        averageTemp = Math.floor(averageMinutes / secondsInAMinute);
        averageMinutes -= (averageTemp * secondsInAMinute);
        averageSum += (averageMinutes * secondsInAMinute);
    } else {
        averageSum += averageMinutes * secondsInAMinute;
        averageTemp = 0;
    }
    //HOURS
    averageHours += averageTemp;
    averageSum += (averageHours * secondsInAnHour);
    //TOTAL AVERAGE
    averageSum /= splitData.length;

    //Median: --------------------------------------------------------------------------
    let medianHours   = 0;
    let medianMinutes = 0;
    let medianSeconds = 0;
    let medianSum     = 0;
    let medianTemp    = 0;  //temp is used as a carry value
    if(splitData.length % 2 === 1) {
        for(let i = 0; i <= subsection; i++) {
            if(i === 0) {
                medianSum += Number(splitData[(splitData.length - 1) / 2][i]) * secondsInAnHour;
            } else if (i === 1) {
                medianSum += Number(splitData[(splitData.length - 1) / 2][i]) * secondsInAMinute;
            } else {
                medianSum += Number(splitData[(splitData.length - 1) / 2][i]);
            }
        }
    } else {
        //grab the two middle values: length / 2 && (length / 2) - 1 
        for(let i = 0; i < 2; i++) {
            medianHours += Number(splitData[(splitData.length / 2) - i][0]);
            medianMinutes += Number(splitData[(splitData.length / 2) - i][1]);
            medianSeconds += Number(splitData[(splitData.length / 2) - i][2]);
    }
        //add them together
        if(medianSeconds > 60) {
            medianTemp = Math.floor(medianSeconds / secondsInAMinute);
            medianSeconds -= (medianTemp * secondsInAMinute);
            medianSum += medianSeconds;
        } else {
            medianSum += medianSeconds;
        }
    
        //MINUTES
        medianMinutes += medianTemp;
        if(medianMinutes > 60) {
            medianTemp = Math.floor(medianMinutes / secondsInAMinute);
            medianMinutes -= (medianTemp * secondsInAMinute);
            medianSum += (medianMinutes * secondsInAMinute);
        } else {
            medianSum += medianMinutes * secondsInAMinute;
            medianTemp = 0;
        }
        //HOURS
        medianHours += medianTemp;
        medianSum += (medianHours * secondsInAnHour);
        //TOTAL MEDIAN
        medianSum /= 2;
    }

    //convert back
    function hourMinuteSecond(time) {
        let hours   = 0;
        let minutes = 0;
        let seconds = 0;
        let secondsInAnHour  = 3600;
        let secondsInAMinute = 60;
        hours = Math.floor(time / secondsInAnHour);
        time = time - hours * secondsInAnHour
        minutes = Math.floor(time / secondsInAMinute);
        time = time - minutes * secondsInAMinute;
        seconds = Math.floor(time);
        if(hours < 10) {
            hours = "0" + hours.toString();
        } else {
            hours = hours.toString();
        }
        if(minutes < 10) {
            minutes = "0" + minutes.toString();
        } else {
            minutes = minutes.toString();
        }
        if(seconds < 10) {
            seconds = "0" + seconds.toString();
        } else {
            seconds = seconds.toString();
        }
        return hours + "|" + minutes + "|" + seconds;
    }

    let range = hourMinuteSecond(rangeSum);
    let average = hourMinuteSecond(averageSum);
    let median = hourMinuteSecond(medianSum);
    return "Range: " + range + " Average: " + average + " Median: " + median;
}


//TEST CASES:
// console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"));//"Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")
// console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"));//"Range: 00|31|17 Average: 02|26|18 Median: 02|22|00")
// console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00")); 
// console.log(stat("1|47|16, 12|20|14, 01|15|59, 2|32|34, 1|19|34, 1|26|37, 13|19|34, 12|17|48, 11|15|17, 2|17|17"));//Range: 12|03|35 Average: 05|59|13 Median: 02|24|55
console.log(stat("1|22|34, 02|15|59, 2|32|34, 00|17|20"));//Range: 02|15|14 Average: 01|37|06 Median: 01|49|16