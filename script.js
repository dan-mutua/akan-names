function validate() {
  var date = document.ggetElementsByClassName("date").value;
  console.log(date);
  var month = document.getElementsByClassName("month").value;
  console.log(month);
  var year = document.getElementsByClassName("year").value;
  console.log(year);
  var year = document.getElementsByClassName("gender").value;
  console.log(gender);
}

  if (date == " " || month == " " || year == " " || gender == " ") {
      return false;
  } else {
      var CC = year.slice(2);
      var YY = year.slice(-2);
      alert("CC" + CC + "YY" + YY)
      let fullBirthday = year + "-" + month + "-" + date;
      let dayvalue = new Date(fullBirthday);
      console.log(dayvalue);
      let dayOfTheWeek = dayvalue.getDay();

      return dayOfTheWeek;
  }

  function myAkanName() {
    let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  }
