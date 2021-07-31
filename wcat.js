let fs = require("fs");


let inputArr = process.argv.slice(2);
let slashed_inputs = [];
let filespatharray = [];
for (let i = 0; i < inputArr.length; i++){
    if (inputArr[i].charAt(0) == '-') {
        slashed_inputs.push(inputArr[i]);
    }
    else {
        filespatharray.push(inputArr[i]);
    }
    
}


for (let i = 0; i < filespatharray.length; i++){
    if (fs.existsSync(filespatharray[i]) == false) {
        console.log(i, " PATH DOES NOT EXISTS");
        return;
    }
}
    


let total_content = "";
for (let i = 0; i < filespatharray.length; i++) {
    let filepath = filespatharray[i];
    let filecontent = fs.readFileSync(filepath);
    total_content = total_content + filecontent  ;
    
}

let organised_array = total_content.split("\r\n");


//implementation of -s command
if (slashed_inputs.includes("-s") == true) {
    
    console.log("\n\n************** IMPLEMENTATION OF -s COMMAND ******************\n\n")

    for (let i = 1; i <= organised_array.length; i++) {
        if (organised_array[i] == '' && organised_array[i - 1] == '') {
            organised_array[i] = null;
        }
        else if (organised_array[i] == '' && organised_array[i - 1] == null) {
            organised_array[i] = null;
        }
    }


    let null_removed_Array = [];
    for (let i = 0; i < organised_array.length; i++) {
        if (organised_array[i] != null) {
            null_removed_Array.push(organised_array[i]);
        }
    }
    organised_array = null_removed_Array;
    console.log(null_removed_Array.join("\n"));
   
} 




//implementation of -n command

if (slashed_inputs.includes("-n") == true) {
    if ((slashed_inputs.indexOf("-n") < slashed_inputs.indexOf("-b")) || slashed_inputs.indexOf("-b") == -1 ) {
        console.log("\n\n************** IMPLEMENTATION OF -n COMMAND ******************\n\n")

        let ncommandarray = organised_array;
        for (let i = 0; i < ncommandarray.length; i++) {
            ncommandarray[i] = (i + 1) + "). " + ncommandarray[i];
        }
        console.log(ncommandarray.join("\n"));
    }

}





// implementation of -b command 

if (slashed_inputs.includes("-b") == true) {
    if ((slashed_inputs.indexOf("-b") < slashed_inputs.indexOf("-n")) || slashed_inputs.indexOf("-n") == -1) {
        console.log("\n\n************** IMPLEMENTATION OF -b COMMAND ******************\n\n")

        let bcommandarray = organised_array;
        let count = 0;
        for (let i = 0; i < bcommandarray.length; i++) {
            if (bcommandarray[i] != '') {
                bcommandarray[i] = count + 1 + "). " + bcommandarray[i];
                count++;
            }
        }
        console.log(bcommandarray.join("\n"));
    }
}


console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~THANKS FOR BEING HERE !! 😋😋 HAVE A NICE DAY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");




