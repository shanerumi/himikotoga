function sbmt(){
    var fname = document.myform.fname.value;
    var lname = document.myform.lname.value;
    var contact = document.myform.contact.value;
    var address = document.myform.address.value;

    document.getElementById("flname").innerHTML = fname + " " + lname;
    document.getElementById("con").innerHTML = contact;
    document.getElementById("address").innerHTML = address;
}

function clr(){
    document.getElementById("myform").reset();
    document.getElementById("flname").innerHTML = "";
    document.getElementById("con").innerHTML = "";
}