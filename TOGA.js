function aw(){
    var clr = document.frm.clr.value;
    var clrs = document.frm.clrs.value;

if (clr=="RED"&&clrs=="RED"||clr=="RED"&&clrs=="RED"){
    document.write("RED");
}
else if (clr=="RED"&&clrs=="BLUE"||clr=="BLUE"&&clrs=="RED"){
    document.write("PURPLE");
}
}