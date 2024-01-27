// proje aks 1
function send1(){
var x = document.getElementById('img1').src;
document.getElementById('mimi').src = x
}

function send2(){
    var x = document.getElementById('img2').src;
    document.getElementById('mimi').src = x
    }

    function send3(){
        var x = document.getElementById('img3').src;
        document.getElementById('mimi').src = x
        }

        function send4(){
            var x = document.getElementById('img4').src;
            document.getElementById('mimi').src = x
            }
        




//proje jadval 3 
function listi() {

    document.getElementById('dor').innerHTML=`سلام به اینجا خوش اومدی <br>چه خبر ؟`
    document.getElementById('dor').style = "margin-right: 20px;  border-style: groove; border-width: 3px; width: 600px; height: 200px;  background-color: burlywood; box-shadow: 2px 2px 10px 10px burlywood ; ";

}
function jadvali(p) {
    document.getElementById('dor').innerHTML=`سلام به اینجا خوش اومدی <br>چه خبر ؟`
    document.getElementById('dor').style = "margin-right: 20px;   border-style: groove; border-width: 3px; width: 200px; height: 200px; ;background-color: burlywood;  box-shadow: 2px 2px 10px 10px burlywood ;  ";
    // tamrin
    var x =document.getElementById(p)
    document.getElementById('dor').src=x
    //.
}

