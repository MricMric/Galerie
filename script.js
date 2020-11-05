window.onload = function (){

 

    var body = document.getElementsByTagName("body")[0];

   

    var div = document.createElement("div");

    div.setAttribute('class', 'table-responsive-sm');

    var tbl = document.createElement("table");

    tbl.setAttribute('class', 'table table-dark');

    var tblBody = document.createElement("tbody");

    

    image = ["valou.jpeg", "jojo.jpg", "moi.jpg"]

 

    for (var i = 0; i < 1; i++) {

 

        var row = document.createElement("tr");

   

      for (var j = 0; j < 3; j++) {

 

        var cell = document.createElement("td");

        var cellText = document.createElement("img");

        cellText.setAttribute('src', 'images/' + image[j]);

        cellText.setAttribute('class', 'images');

        cellText.setAttribute('width', '400px');

        cell.appendChild(cellText);

        row.appendChild(cell);

      }

   

      tblBody.appendChild(row);

    }

   

    tbl.appendChild(tblBody);

    

    div.appendChild(tbl);

 

    body.appendChild(div);

 

    tbl.setAttribute("border", "2");

  }