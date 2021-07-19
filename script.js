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
  let d = yearBorn.getDay(); //gets the day the user was born
  console.log(d); // for testing
  let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var genders = document.querySelector('input[name="gender"]:checked');
  if(genders == null) {
      alert("Select gender")
  }
   function Aname() {
    
       console.log(genders);
       genders.forEach(gender => {
           if (gender.checked) {
               console.log(You checked: ${gender.value});
               console.log(gender.value);
               console.log(gender);
           }
       });
   }
  if (genders.value === "female") {
      document.querySelector(".any").innerHTML = "Your Akan name is" + female[d];
      // document.querySelector(".text").innerHTML = "Your birth day is" + weekDays[validate()];
      // console.log("Your Akan name is" + femaleNames[validate()]);
  }
  else if (genders.value === "male") {
      document.querySelector(".any").innerHTML = "Your Akan name is" + male[d];
      // document.querySelector(".text").innerHTML = "Your birth day is" + weekDays[validate()];
      // console.log("Your Akan name is" + maleNames[validate()]);
      validate();
  }
}