/* This is your JavaScript file. You will use this file to create actions in your HTML pages */

// question form
function changehtml() {
    var x = document.forms["qform"]["firstandlastname"].value;
    var y = document.forms["qform"]["email"].value;
    var z = document.forms["qform"]["question"].value;
    // if the user hasn't filled in all fields, the form won't submit and shows that they have to fill in all fields
    if (x === "" || z === "") {
        document.getElementById("question_submit").innerHTML = "Please fill in all fields.";
    }
    // to validate email
    else if (!y.includes("@")) {
        document.getElementById("question_submit").innerHTML = "Please enter a valid email address.";
   }
    // to check that user has filled in all fields
    else if (x!="" & z!="") {
        document.getElementById("question_submit").innerHTML = "Thank you for  your query, we'll get back to you soon :)";
    }
}

// registration form
function regof() {
    var x = document.forms["rform"]["firstandlastname"].value;
    var y = document.forms["rform"]["email"].value;
    var z = document.forms["rform"]["number"].value;
    var p = document.forms["rform"]["password"].value;
    // if the user hasn't filled in all fields, the form won't submit and shows that they have to fill in all fields
    if (x === "" || p === "") {
        document.getElementById("registration_submit").innerHTML = "Please fill in all fields.";
    }
    // to validate email
    else if (!y.includes("@")) {
        document.getElementById("registration_submit").innerHTML = "Please enter a valid email address.";
      }
    // to validate phone number
    else if (z.length < 7) {
        document.getElementById("registration_submit").innerHTML = "Please enter a valid phone number.";
      }
    // to validate password (at least 5 characters)
    else if (p.length < 5) {
        document.getElementById("registration_submit").innerHTML = "Please enter a password with at least 5 characters.";
      }
    // to check that user has filled in all fields
    else if (x!="") {
        document.getElementById("registration_submit").innerHTML = "Thank you for registering with us :)";
    }
  
}

// hiring form
function hiref() {
    var x = document.forms["hform"]["email"].value;
    var y = document.forms["hform"]["password"].value;
    var z = document.forms["hform"]["type"].value;
    var c = document.forms["hform"]["day"].value;
    var a = document.forms["hform"]["datefield"].value;
    var b = document.forms["hform"]["pickup"].value;
    //variables for each type of bike and per day or half day
    var mbh = 70;
    var mbf = 90;
    var ebh = 70;
    var ebf = 90;
    var rbh = 50;
    var rbf = 70;
    var osh = 40;
    var osf = 60;
    var esh = 30;
    var esf = 50;
    var msh = 50;
    var msf = 70;
    // if the user hasn't filled in all fields, the form won't submit and shows that they have to fill in all fields
    if (x === "" || y === "" || a === "") {
        document.getElementById("hire_submit").innerHTML = "Please fill in all fields.";
    }
    // to check that user has filled in selection fields
    else if (z == "select_typ" || b == "select_loc" || c == "select_day") {
        document.getElementById("hire_submit").innerHTML = "Please fill in all fields.";
   }
    // to validate email    
   else if (!x.includes("@")) {
        document.getElementById("hire_submit").innerHTML = "Please enter a valid email address.";
   }
    // to validate password (at least 5 characters)    
   else if (y.length < 5) {
        document.getElementById("hire_submit").innerHTML = "Please enter a password with at least 5 characters.";
   }
    // 
   else if (x!="" & y!="" & a!="") {
        document.getElementById("hire_submit").innerHTML = "Thank you for hiring with us, you'll recieve your confirmation soon :)";
    // check to see if the user picks half day or full day
    if (c == "half") {
        if (z == "mountain_bike") {
            var deposit1 = mbh*0.50;
            document.getElementById("payment_desc1").innerHTML = "Rental Fee: ";
            document.getElementById("payment1").innerHTML = mbh;
            document.getElementById("payment_desc2").innerHTML = "Refundable Deposit: ";
            document.getElementById("payment2").innerHTML = deposit1;
        }
        if (z == "electric_bike") {
            var deposit2 = ebh*0.50;
            document.getElementById("payment_desc1").innerHTML = "Rental Fee: ";
            document.getElementById("payment1").innerHTML = ebh;
            document.getElementById("payment_desc2").innerHTML = "Refundable Deposit: ";
            document.getElementById("payment2").innerHTML = deposit2;
        }
        if (z == "road_bike") {
            var deposit3 = rbh*0.50;
            document.getElementById("payment_desc1").innerHTML = "Rental Fee: ";
            document.getElementById("payment1").innerHTML = rbh;
            document.getElementById("payment_desc2").innerHTML = "Refundable Deposit: ";
            document.getElementById("payment2").innerHTML = deposit3;
        }
        if (z == "offroad_scooter") {
            var deposit = mbh*0.50;
            document.getElementById("payment_desc1").innerHTML = "Rental Fee: ";
            document.getElementById("payment1").innerHTML = osh;
            document.getElementById("payment_desc2").innerHTML = "Refundable Deposit: ";
            document.getElementById("payment2").innerHTML = deposit;
        }
        if (z == "electric_scooter") {
            var deposit = mbh*0.50;
            document.getElementById("payment_desc1").innerHTML = "Rental Fee: ";
            document.getElementById("payment1").innerHTML = esh;
            document.getElementById("payment_desc2").innerHTML = "Refundable Deposit: ";
            document.getElementById("payment2").innerHTML = deposit;
        }
        if (z == "monster_scooter") {
            var deposit = mbh*0.50;
            document.getElementById("payment_desc1").innerHTML = "Rental Fee: ";
            document.getElementById("payment1").innerHTML = msh;
            document.getElementById("payment_desc2").innerHTML = "Refundable Deposit: ";
            document.getElementById("payment2").innerHTML = deposit;
        }
    }
    else if(c == "full") {
        if (z == "mountain_bike") {
            var deposit1 = mbf*0.50;
            document.getElementById("payment_desc1").innerHTML = "Rental Fee: ";
            document.getElementById("payment1").innerHTML = mbf;
            document.getElementById("payment_desc2").innerHTML = "Refundable Deposit: ";
            document.getElementById("payment2").innerHTML = deposit1;
        }
        if (z == "electric_bike") {
            var deposit2 = ebf*0.50;
            document.getElementById("payment_desc1").innerHTML = "Rental Fee: ";
            document.getElementById("payment1").innerHTML = ebf;
            document.getElementById("payment_desc2").innerHTML = "Refundable Deposit: ";
            document.getElementById("payment2").innerHTML = deposit2;
        }
        if (z == "road_bike") {
            var deposit3 = rbf*0.50;
            document.getElementById("payment_desc1").innerHTML = "Rental Fee: ";
            document.getElementById("payment1").innerHTML = rbf;
            document.getElementById("payment_desc2").innerHTML = "Refundable Deposit: ";
            document.getElementById("payment2").innerHTML = deposit3;
        }
        if (z == "offroad_scooter") {
            var deposit = osf*0.50;
            document.getElementById("payment_desc1").innerHTML = "Rental Fee: ";
            document.getElementById("payment1").innerHTML = osf;
            document.getElementById("payment_desc2").innerHTML = "Refundable Deposit: ";
            document.getElementById("payment2").innerHTML = deposit;
        }
        if (z == "electric_scooter") {
            var deposit = esf*0.50;
            document.getElementById("payment_desc1").innerHTML = "Rental Fee: ";
            document.getElementById("payment1").innerHTML = esf;
            document.getElementById("payment_desc2").innerHTML = "Refundable Deposit: ";
            document.getElementById("payment2").innerHTML = deposit;
        }
        if (z == "monster_scooter") {
            var deposit = msf*0.50;
            document.getElementById("payment_desc1").innerHTML = "Rental Fee: ";
            document.getElementById("payment1").innerHTML = msf;
            document.getElementById("payment_desc2").innerHTML = "Refundable Deposit: ";
            document.getElementById("payment2").innerHTML = deposit;
        }
    }
    } 
}