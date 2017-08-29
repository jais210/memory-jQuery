// $(".juego").click(function(m) {
//     var images = m.target.src;
//     $(".conejo").append("#conejo")
// })

// var table = document.createElement('table').addClass('table');
// 	for(i=0;i<3;i++){
// 		var tr= document.createElement('tr').addClass('tr');

// 		for(j=0;j<3;j++){
// 			var td= document.createElement('td').addClass('td');
// 			tr.appendChild(td);
// 		}
// 		table.appendChild(tr);		
// 	}
// $('.tab').append(table);

// versión jQuery

// var table = $('<table></table>').addClass('table')
// 	for(i=0;i<3;i++){
// 			var tr = $('<tr></tr>').addClass('tr').text(i);	
// 		for(j=0;j<3;j++){
// 			var td = $('<td></td>').addClass('td').text(j);
// 			tr.append(td);
// 		}
// 	    table.append(tr);
// 	}

// $('.tab').append(table);



// var x;
// x= $('#id');

// x.html('<p>hola</p>');
// console.log(x.text());
// console.log($('#id').text());


  var tabla   = document.createElement(table);
  tabla.className('table');
  var tblBody = document.createElement("tbody");
 
  // Crea las celdas
  for (var i = 0; i < 2; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");
 
    for (var j = 0; j < 2; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
 
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }
 
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");