function myBMI(){
 let Weight= parseInt(document.getElementById('w').value)   
 let Height= parseInt(document.getElementById("h").value); 
let bmi=Weight / (Height/100) ^ 2;
alert(bmi);

// if (gender="Male"){

//     let IdealBMI=0.5 * Weight/(Height/100) ^ 2 + 11.5
// } 
// else{IdealBMI=0.5 * Weight/(Height/100) ^ 2 + 0.03 * Age + 11};


document.getElementById("Body").innerHTML=bmi.value;
//document.getElementByName("Ideal").innerHTML=bmi;
}
