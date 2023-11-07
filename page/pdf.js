function createPDF() {

    if (document.getElementById("name").value == "" && document.getElementById("date").value == "" &&
        document.getElementById("address").value == "" && document.getElementById("street").value == "" &&
        document.getElementById("postcode").value == "") {
        alert("Please enter the fields");
    }

    else {
        var doc = new jsPDF()
        var title1 = "Name: "
        var title2 = "Date: "
        var title3 = "Address: "
        var title4 = "Street: "
        var title5 = "Postcode: "


        doc.text(title1 + document.getElementById("name").value, 10, 10)
        doc.text(title2 + document.getElementById("date").value, 10, 20)
        doc.text(title3 + document.getElementById("address").value, 10, 30)
        doc.text(title4 + document.getElementById("street").value, 10, 40)
        doc.text(title5 + document.getElementById("postcode").value, 10, 50)

        doc.save("member.pdf");
    }
}