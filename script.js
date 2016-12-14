function menuFunction() {
    document.getElementById("myMenu").classList.toggle("show");
}
function validate_form() {
    var w = document.forms["form"]["name"].value;
    var x = document.forms["form"]["email"].value;
    var successmsg = 'Thank you for submitting the form.';
    if (w == "" || w == null) {
        alert("Please enter your Name.");
        return false;
    }
    else if (x == "" || x == null) {
        alert("Please enter your Email.");
        return false;
    }
    return (true);
}