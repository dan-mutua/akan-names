let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var genderF;
var genderM;
let d;
function collectInputs() {
    let name = document.querySelector(".name").value;
    console.log(name);
    let date = document.querySelector(".date").value;
    console.log(date);
    let month = document.querySelector(".month").value;
    console.log(month);
    let year = document.querySelector(".year").value;
    console.log(year);
    let fullBirthDay = year + "-" + month + "-" + date;
    let yearBorn = new Date(fullBirthDay);
    d = yearBorn.getDay(); 
    console.log(d); 
    genderM = document.getElementById("male");
    genderF = document.getElementById("female");
    console.log(genderF.checked);
    console.log(genderM.checked);
}
function Aname() {
    if (genderM.checked) {
        console.log(genderM)
        alert("Your Akan name is " + male[d]);
       
    } else {
        if (genderF.checked) {
            console.log(genderF)
            alert("Your Akan name is " + female[d]);
           
        }
    }
}
function validate() {
    collectInputs()
    if (genderM.checked == false && genderF.checked == false) {
        alert("Select gender");
    } else {
        Aname();
    }
}