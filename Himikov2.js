function ou(){
    var name = document.frm.n.value;
    var cys = document.frm.cys.value;
    var grade = parseFloat(document.frm.grade.value);

    document.getElementById("o1").innerHTML = "Name: " + name;
    document.getElementById("o2").innerHTML = "CYS: " + cys;
    document.getElementById("o3").innerHTML = "Grade: " + grade;

    if (grade >= 98 && grade <= 100) {
        document.getElementById("o4").innerHTML = "Remarks: With Highest Honor";
    }
    else if (grade >= 95 && grade <=97) {
        document.getElementById("o5").innerHTML = "Remarks: With High Honor";
    }
    else if (grade >= 90 && grade <=94) {
        document.getElementById("o6").innerHTML = "Remarks: With Honor";
    }
    else if (grade >= 85 && grade <=89) {
        document.getElementById("o7").innerHTML = "Remarks: Satisfactory";
    }
    else if (grade >= 80 && grade <=84) {
        document.getElementById("o8").innerHTML = "Remarks: Very Good";
    }
    else if (grade >= 75 && grade <=79) {
        document.getElementById("o10").innerHTML = "Remarks: Skill Issue";
    }
    else if (grade >= 70 && grade <=74) {
        document.getElementById("o11").innerHTML = "Remarks: Bawi kana lang next life";
    }
    else if(grade<=69){
        document.getElementById("o12").innerHTML = "Remarks: HANAP KANA BAGONG BAHAY AT BAGONG PAMILYA";
    }
    else{
        document.getElementById("o12").innerHTML = "Remarks: BANGIS MO NAMAN LAGPAS 100 GRADE MO? LUPET";
}
}
