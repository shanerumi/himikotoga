function ou(){
    var name = document.frm.n.value;
    var cys = document.frm.cys.value;
    var grade = document.frm.grade.value;

    document.getElementById("o1").innerHTML = "Name: " + name;
    document.getElementById("o2").innerHTML = "CYS: " + cys;
    document.getElementById("o3").innerHTML = "Grade: " + grade;

    if(grade<=3.00&&grade>=1.00){
    document.getElementById("o4").innerHTML = "Remarks: Passed";
    }
    else{
        document.getElementById("o5").innerHTML = "Remarks: Failed";
    }
}
