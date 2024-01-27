
// function for inputs write
// when people onkeydown in input , sey a error

// input text (1)
function filter_inputs1(myEventInput1) {
    console.log(myEventInput1);

    var fn_onkeydown_1 = myEventInput1.keyCode;
    if (fn_onkeydown_1 > 95 && fn_onkeydown_1 < 106) {

        $('.error').fadeIn(500).html(` لطفا از اعداد استفاده نکنید `);
        // document.getElementById('error').innerHTML=`لطفا از اعداد استفاده نکنید `
        $('#texti').addClass('jq-add-input1');
        myEventInput1.preventDefault();

        setTimeout(() => {
            $('.error').fadeOut(500);
            // document.getElementById('error').innerHTML=''
            $('#texti').removeClass('jq-add-input1');
        }, 3000);

    } else if (fn_onkeydown_1 > 47 && fn_onkeydown_1 < 58) {

        $('.error').fadeIn(500).html(` لطفا از اعداد استفاده نکنید `);
        $('#texti').addClass('jq-add-input1');
        myEventInput1.preventDefault();

        setTimeout(() => {
            $('.error').fadeOut(500);
            $('#texti').removeClass('jq-add-input1');
        }, 3000);

    } else {
        $('.error').fadeOut(500);
        $('#texti').removeClass('jq-add-input1');
    }
}


// input tel (3)
function filter_inputs3(myEventInput3) {
    console.log(myEventInput3);

    var fn_onkeydown_3 = myEventInput3.keyCode;
    if (fn_onkeydown_3 > 95 && fn_onkeydown_3 < 106 || fn_onkeydown_3 == 8 || fn_onkeydown_3 == 9 || fn_onkeydown_3 == 17 || fn_onkeydown_3 == 67 || fn_onkeydown_3 == 65 || fn_onkeydown_3 == 88 || fn_onkeydown_3 == 90 || fn_onkeydown_3 == 86 ) {
        $('.error').fadeOut(500);
        $('#teli').removeClass('jq-add-input1');

    } else if (fn_onkeydown_3 > 47 && fn_onkeydown_3 < 58 || fn_onkeydown_3 == 8 || fn_onkeydown_3 == 9 || fn_onkeydown_3 == 17 || fn_onkeydown_3 == 67 || fn_onkeydown_3 == 65 || fn_onkeydown_3 == 88 || fn_onkeydown_3 == 90 || fn_onkeydown_3 == 86 ) {
        $('.error').fadeOut(500);
        $('#teli').removeClass('jq-add-input1');
    } else {

        myEventInput3.preventDefault();
        $('.error').fadeIn(500).html(' لطفا فقط از اعداد استفاده کنید  ');
        $('#teli').addClass('jq-add-input1');

        setTimeout(() => {
            $('.error').fadeOut(500);
            $('#teli').removeClass('jq-add-input1');
        }, 3000);
    }
}

