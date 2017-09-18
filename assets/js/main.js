// versión jQuery
// var table = $('<table></table>').addClass('table');
// var div = $('<div></div>').addClass('div');
// var arrImg = [
//     ["3", "1", "0", "2"],
//     ["0", "2", "3", "1"]
// ];
var arrImg = [
    "assets/img/img0.jpg",
    "assets/img/img1.jpg",
    "assets/img/img2.jpg",
    "assets/img/img3.jpg",   
]
// for (i = 0; i < 2; i++) {
//     var tr = $('<tr></tr>');
//     for (j = 0; j < 4; j++) {
//         var img = $('<td></td>').addClass('td').append("<img src= 'assets/img/img" + arrImg[i][j] + ".jpg'>").append(div);
//         tr.append(img);
//     }
//     table.append(tr);
// }
// $('body').append(table);


var cardOpen = "";
var imgOpen= ""; //contador
var contadorAciertos = 0;
var cardOk = 0;

$(function() {
    
    for (var j = 0; j< 2 ; j++) {
        /*recorrer elementos*/
        $.each(arrImg, function(i, val) {
            $('#tarjetas').append("<div id=cards" + j + i + "><img src=" + val + " />");
        });
    }
        $("#tarjetas" + " div").click(play);
    });
    
    
    // voltear tarjetas
    
    function play(){
        var id = $(this).attr("id");
        if ($("#" + id + " img").is(":hidden")) {
            $("#tarjetas" + " div").off("click", play);
            $("#" + id + " img").slideDown('slow');
            if (imgOpen == "") {
                cardOpen = id;
                imgOpen = $("#" + id + " img").attr("src");
                setTimeout(function() {
                    $("#tarjetas" + " div").on("click", play)
                }, 100);
            } else {
                recentCard = $("#" + id + " img").attr("src");
                if (imgOpen != recentCard) {
                    setTimeout(function() {
                        $("#" + id + " img").slideUp('slow');
                        $("#" + cardOpen + " img").slideUp('slow');
                        cardOpen = "";
                        imgOpen = "";
                    }, 100);
                } else {
                    $("#" + id + " img").parent().css("visibility", "hidden");
                    $("#" + cardOpen + " img").parent().css("visibility", "hidden");
                    cardOk++;
                    cardOpen = "";
                    imgOpen = "";
                }
                setTimeout(function() {
                    $("#tarjetas" + " div").on("click", play)
                }, 100);
            }
        }
    }
    

