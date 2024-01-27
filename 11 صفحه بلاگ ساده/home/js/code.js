
function sendX() {
    setTimeout( showSendX  ,2000);
    $('.grid-container').addClass('animate');
}
function showSendX(){
    $('.grid-item').toggleClass($('.grid-item').css({ "width": "1070px" , "height":"200px" }));
    $('.grid-container').removeClass('animate');
   
}





function sendY() {
    setTimeout(  showSendY ,2000);
    $('.grid-container').addClass('animate');
}
function  showSendY(){
    $('.grid-item').toggleClass($('.grid-item').css({ "width": "300px" , "height":"300px" }));
    $('.grid-container').removeClass('animate');
}