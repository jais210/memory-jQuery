// versión jQuery

var table = $('<table></table>').addClass('table')

for (i = 0; i < 3; i++) {
    var tr = $('<tr></tr>').addClass('tr').text(i);
        for (j = 0; j < 3; j++) {
        var td = $('<td></td>').addClass('td').text(j);
    tr.append(td);
    }
table.append(tr);
}

$('body').append(table);



// var x;
// x= $('#id');

// x.html('<p>hola</p>');
// console.log(x.text());
// console.log($('#id').text());