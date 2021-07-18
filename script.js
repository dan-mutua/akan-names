function validate() {
  var name = document.getElementsByClassName("name").value;
  var date = document.ggetElementsByClassName("date").value;
  console.log(date);
  var month = document.getElementsByClassName("month").value;
  console.log(month);
  var year = document.getElementsByClassName("year").value;
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
