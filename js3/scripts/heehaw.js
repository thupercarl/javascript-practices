/*
    Author: Jake Donaldson
    Date  : 4/15/21
    File  : heehaw.js
 */

    function heehaw() {
    let limit = document.getElementById("inputnumber").value;
    let printIt = document.getElementsByTagName("P")[0];
    let printOut = "";

    //console.log(limit);

    for (let i = 1; i <= limit; i++) {

        //define variables in order to test for whole numbers
        let hee = i / 3;
        let haw = i / 5;
        let rOne = (hee - Math.floor(hee)) !== 0;//using inversions here to prevent type-coercion
        let rTwo = (haw - Math.floor(haw)) !== 0;//...


        //console.log(i+", "+hee+", "+haw+", "+rOne+", "+rTwo);//each variable

        /*
            INVERTED IF BLOCK

            true refers to real numbers that have decimal places (non-whole numbers)
            false refers to integer values (whole numbers)
         */

        if(!rOne && !rTwo) {//print hee haw
            //console.log("Hee Haw!");
            printOut = printOut + "Hee Haw! <br>";
        }
        else if(!rOne) {//print hee
            //console.log("Hee!");
            printOut = printOut + "Hee! <br>";
        }
        else if(!rTwo) {//print haw
            //console.log("Haw!");
            printOut = printOut + "Haw! <br>";
        }
        else {//print number
            //console.log(i);
            printOut = printOut + i + "<br>";
        }
    }
    //testing string concatenation
    //console.log("*******************************************************************");
    //console.log(printOut);

    //print the data to the page
    printIt.innerHTML = printOut;
}