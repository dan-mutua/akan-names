let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var genderF;
var genderM;
let d;
function validate() {
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
   d = yearBorn.getDay(); //gets the day the user was born
  console.log(d); // for testing
  
   genderM = document.getElementById("male").value;
   genderF = document.getElementById("female").value;
   console.log(genderF);
   console.log(genderM);
  if (genderM.checked == false && genderF.checked == false) {
    alert("Select gender");
}    
}
  
  function Aname() {
      validate();
    if (genderM == "male") {
        console.log(genderM)
      alert("Your Akan name is "  + male[d]);
      // document.querySelector(".text").innerHTML = "Your birth day is" + weekDays[validate()];
      // console.log("Your Akan name is" + femaleNames[validate()]);
    } else {
        if (genderF == "female") {
        console.log(genderF)
      alert("Your Akan name is "  + female[d]);
      // document.querySelector(".text").innerHTML = "Your birth day is" + weekDays[validate()];
      // console.log("Your Akan name is" + maleNames[validate()]);
    }
}
  }


