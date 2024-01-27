// In the name of GOD
// All KeyCode in js 
// http://gcctech.org/csc/javascript/javascript_keycodes.htm

// ***1*** Go show error msg Down the cart html, When people type the text on inputs
$(".otp-inputbar").keypress(function (e) {
    // console.log(e.which);
    // console.log(e.keyCode);

    // 48 => 0 on keypress but isn't that on keydown & keyup
    // 57 => 9 on keypress but isn't that on keydown & keyup
    // Because we say in down...
    // 48=>0 & 57=>9 just on keypress 
    // 48=>0 & 57=>9 also numpad1=>97 & numpad9=>105 on keydown and keyup
    if (e.keyCode != 8 && e.keyCode != 0 && (e.keyCode < 48 || e.keyCode > 57)) {
        $("#errmsg").html("کاربر گرامی ، لطفا فقط از اعداد استفاده کنید").show().fadeOut(3600);
        return false; // Do not continue
    }
});

// Here is for check the value on inputs that is full Or not
$(".otp-inputbar").on(" keyup", function (e) {
    // 1 keyup : When keyboard type was UP
    // 2 keydown : When keyboard type was down
    // 3 keypress : When keyboard type was press


    // ***2*** Go check the value,When it was true OR it has any value on inputs
    if ($(this).val()) {
        $(this).next().focus();
    }

    // ***3*** Go check the input, when people type the BACKSPACE 
    var KeyID = e.keyCode;
    // console.log(e.keyCode);
    switch (KeyID) {
        case 8: // backspace
            $(this).val("");
            $(this).prev().focus();
            break;

            default:
            break;
    }

});

