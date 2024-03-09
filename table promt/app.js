var table = prompt("Write Any NUmber What You Want A Table")
if(isNaN(table)){
    alert("Error: Please Write Only Number")
    reload();
} else{
    console.log("Multiplication Table for " + table + " :");
    document.write("<center><h2>")
    document.write("Multiplication Table for " + table + " :");
    document.write("</h2></center>")
for (var i = 1; i <= 10; i++) {
    console.log( table + " x " + i + " = " + (table * i));
    document.write("<center><b>")
    document.write( table + " x " + i + " = " + (table * i));
    document.write("</center></b>")
}
}