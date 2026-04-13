async function displayTable(selectedMajor) {
    var responce = await fetch("cit5students.json");

    if(responce.ok) {
        var templateScript = document.getElementById("tblTemplate").innerHTML;

        var template = Handlebars.compile(templateScript);

        var context = responce.filter(function(stu, selectedMajor) {
            return stu.major == selectedMajor;
        });

        var compTemplate = template({student : context});

        document.getElementById("out").innerHTML = compTemplate;
    }
    else {
        document.getElementById("out").innerHTML = "Error in fetthing 'cit5students.json'."
    }
}

window.onload = function () {
    document.getElementById("busmajor").onclick = function() { displayTable("BUS") };
    document.getElementById("citmajor").onclick = function() { displayTable("CIT") };
}
