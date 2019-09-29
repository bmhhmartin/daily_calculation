function convert() {

                var far = temp.value;
                var cel;
                if (far == 0) {
                    alert('Please enter Farenhite')
                    return false;
                }
                cel = (5 / 9) * (far - 32);
                alert('Result is ' + cel + ' degree celcius');


            }
            //Farenhite to celcius//

            function year() {
                var yr = in_yr.value;
                if (yr == 0) {
                    alert('Please enter Year')
                    return false;
                }

                if ((yr % 4 == 0 && yr % 100 !== 0) || (yr % 400 == 0)) {
                    alert(yr + ' ' + ': ' + 'is Leap Year');
                } else {
                    alert(yr + ' ' + ': ' + 'is not Leap Year');
                }
            }
            //Check leap year//

            $(document).ready(function() {
                $("#calculate").click(function() {
                    var mdate = $("#birth_date").val().toString();
                    var yearThen = parseInt(mdate.substring(0, 4), 10);
                    var monthThen = parseInt(mdate.substring(5, 7), 10);
                    var dayThen = parseInt(mdate.substring(8, 10), 10);

                    var today = new Date();
                    var birthday = new Date(yearThen, monthThen - 1, dayThen);

                    var differenceInMilisecond = today.valueOf() - birthday.valueOf();

                    var year_age = Math.floor(differenceInMilisecond / 31536000000);
                    var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

                    if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
                        alert("Happy B'day!!!");
                    }

                    var month_age = Math.floor(day_age / 30);

                    day_age = day_age % 30;

                    if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
                        alert("Please enter your birthday");
                    } else {
                        alert("You are " + year_age + " years " + month_age + " months " + day_age + " days old");
                    }
                });
            });
            //Check your age//



















            function calcBMI(){
              var comment;
              var height = document.getElementById("height").value;
              var weight = document.getElementById("weight").value;
              var result = weight / (height*height) * 10000;
              if (result < 18.5){
                  comment = "You are underweight."
                  }
              else if(result >= 18.5 && result < 25){
                  comment = "You are at a healthy weight."
              }
              else if(result > 25 && result <= 29.99){
                  comment = "You are overweight."
              }
              else{
                  comment = "You are So Fatty Person."
              }

              alert("Your BMI is " + result.toFixed(1) +' And '+' '+ comment);


            };

            /**BMI is ends**/
