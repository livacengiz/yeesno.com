function makeurl() {
    var e = $("#question").val(),
        a = convertToSlug(e);
    document.getElementById("quesform").action = "/" + a + ".com"
}

function switchLang(e) {
    var a = $("#noValue").val();
    console.log(a), "en" == e ? ($("#yes").val("Yes"), $("#no").val("No"), $("<span id='yesValue'>Yes</span>").replaceAll("#yesValue"), $("<span id='noValue'>No</span>").replaceAll("#noValue"),$("#send").val("Create")) : 

                    ($("#yes").val("Evet"), $("#no").val("Hayır"), $("<span id='yesValue'>Evet</span>").replaceAll("#yesValue"), $("<span id='noValue'>Hayır</span>").replaceAll("#noValue"), $("#send").val("Oluştur"))
}
var convertToSlug = function(e) {
    var a = {
        "çÇ": "c",
        "ğĞ": "g",
        "şŞ": "s",
        "üÜ": "u",
        "ıİ": "i",
        "öÖ": "o"
    };
    for (var l in a) e = e.replace(new RegExp("[" + l + "]", "g"), a[l]);
    return e.replace(/[^-a-zA-Z0-9\s]+/gi, "").replace(/\s/gi, "").replace(/[-]+/gi, "").toLowerCase()
};