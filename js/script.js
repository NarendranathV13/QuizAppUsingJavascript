const q1 = document.getElementsByName("flexRadioDefault");
const q2 = document.getElementsByName("flexRadioDefault11");
const q3 = document.getElementsByName("flexRadioDefault21");
const q4 = document.getElementsByName("flexRadioDefault31");
const q5 = document.getElementsByName("flexRadioDefault41");



// function call() {
//   const arr = [q1, q2, q3, q4, q5];
//   for (const q of arr) {
//     validate1(q);
//   }
// }

// let count = 0;

// function validate1(val) {
//   var result = val;
  
//   console.log(val);
//   for (i = 0; i < result.length; i++) {
//     if (result[i].checked) {
//       if (result[i].value == 'True') {
//         result[i].nextElementSibling.style.color = "green";
//         count += 1;
//       } else {
//         for (k = 0; k < q1.length; k++) {
//           result[k].disabled = true;
//         }
//         result[i].nextElementSibling.style.color = "red";
//         var parent=result[i].
//         console.log(parent);
//         var child=parent.children('.correct').last();
//         console.log(child);
//         child.text("wrong");

//       }
//     }
//   }
// }

function call(){
const arr=[q1,q2,q3,q4,q5];
for (const q of arr) 
{
    validate1(q,parent1);
}
}
var count = 0;
function validate1(val,prt){
    var result = val;
  
    console.log(val);
    for (i = 0; i < result.length; i++) {
        if (result[i].checked) {

            if (result[i].value == 'True') {

                result[i].nextElementSibling.style.color = "green";
                count += 1;

            }
            else {
                for (k = 0; k < q1.length; k++) {
                    result[k].disabled = 'true';
                }
                result[i].nextElementSibling.style.color = "red";

            }
        }
    }
}


function validate2() {
    var result = q2;
    for (i = 0; i < result.length; i++) {
        if (result[i].checked) {

            if (result[i].value == 'True') {
                count += 1;
                result[i].nextElementSibling.style.color = "green";

            }
            else {
                for (k = 0; k < q1.length; k++) {
                    result[k].disabled = 'true';
                }
                result[i].nextElementSibling.style.color = "red";
                document.getElementById("correct2").innerHTML = "Correct answer is 'Japan'";

            }
        }
    }
}
function validate3() {
    var result = q3;
    for (i = 0; i < result.length; i++) {
        if (result[i].checked) {

            if (result[i].value == 'True') {
                count += 1;
                result[i].nextElementSibling.style.color = "green";

            }
            else {
                for (k = 0; k < q1.length; k++) {
                    result[k].disabled = 'true';
                }
                result[i].nextElementSibling.style.color = "red";
                document.getElementById("correct3").innerHTML = "Correct answer is 'Colombia, Germany, India, Portugal, South Africa'";

            }
        }
    }
}

function validate4() {
    var result = q4;
    for (i = 0; i < result.length; i++) {
        if (result[i].checked) {

            if (result[i].value == 'True') {
                count += 1;
                result[i].nextElementSibling.style.color = "green";

            }
            else {
                for (k = 0; k < q1.length; k++) {
                    result[k].disabled = 'true';
                }
                result[i].nextElementSibling.style.color = "red";
                document.getElementById("correct4").innerHTML = "Correct answer is 'Charles Richter'";

            }
        }
    }
}

function validate5() {
    var result = q5;
    for (i = 0; i < result.length; i++) {
        if (result[i].checked) {

            if (result[i].value == 'True') {
                count += 1;
                result[i].nextElementSibling.style.color = "green";

            }
            else {
                for (k = 0; k < q1.length; k++) {
                    result[k].disabled = 'true';
                }
                result[i].nextElementSibling.style.color = "red";
                document.getElementById("correct5").innerHTML = "Correct answer is 'sulphur'";

            }
        }
    }
}

 function score(){
     document.getElementById("score").innerHTML = "Your Score is "+count+" out of 5";
 }