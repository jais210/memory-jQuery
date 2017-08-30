// versión jQuery
var table = $('<table></table>').addClass('table');
var div = $('<div></div>').addClass('div');
var arrImg = [
    ["3", "1", "0", "2"],
    ["0", "2", "3", "1"]
];
for (i = 0; i < 2; i++) {
    var tr = $('<tr></tr>');
    for (j = 0; j < 4; j++) {
        var td = $('<td></td>').addClass('td').append("<img src= 'img/img" + arrImg[i][j] + ".jpg'>").append(div);
        tr.append(td);
    }
    table.append(tr);
}
$('body').append(table);
// primero 
$('.td').click(function() {

})
if (arrImg[i][j] === arrImg[i][j]) {
    $()
}


// var x;
// x= $('#id');

// x.html('<p>hola</p>');
// console.log(x.text());
// console.log($('#id').text());