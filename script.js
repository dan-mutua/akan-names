function validate() {
  let name = document.querySelector(".name").value;
  let date = document.querySelector(".date").value;
  let month = document.querySelector(".month").value;
  let year = document.querySelector(".year").value;
  console.log(year);
  
}

  if  (date == "" || month == "" || year == "" || gender == "") {
      alert("kindly input all the fields");
  }else {
    var CC = year.slice(2);
     var YY = year.slice(-2);
     let fullBirthday = year + "-" + month + "-" + date;
     alert("CC" + CC + "YY" + YY)
     let dayvalue = new Date(fullBirthday);
     console.log(dayvalue);
     let day = dayvalue.getDay();

     return (day);
  }
