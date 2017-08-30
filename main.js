// versión jQuery


var table = $('<table></table>').addClass('table')
var celdas = 3;
for (i = 0; i < celdas; i++) {
    var tr = $('<tr></tr>');
    for (j = 0; j < celdas; j++) {
        var td = $('<td></td>').addClass('td').append("<img src= 'img/img" + j + ".jpg'>");
        tr.prepend(td);
    }
    table.prepend(tr);
}

$('body').prepend(table);



// var x;
// x= $('#id');

// x.html('<p>hola</p>');
// console.log(x.text());
// console.log($('#id').text());