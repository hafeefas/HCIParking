//import Satellite2 from ""./Satellite2.jpeg"

//the table to be displayed on the main page
var mMap = document.createElement('table');
mMap.style.borderCollapse = 'collapse';
mMap.style.borderSpacing = '0';
//mMap.style.backgroundImage = Satellite2; // Replace with your image URL

// body of the table
var tbody = document.createElement('tbody');

for (var row = 1; row <= 6; row++) {
  var tr = document.createElement('tr');

  for (var col = 1; col <= 18; col++) {
    var td = document.createElement('td');
    td.style.border = '1px solid black';
    td.style.fontFamily = 'Arial, sans-serif';
    td.style.fontSize = '14px';
    td.style.overflow = 'hidden';
    td.style.padding = '10px 5px';
    td.style.wordBreak = 'normal';
    td.style.textAlign = 'left';
    td.style.verticalAlign = 'top';

    // numbering the first and last rows
    if (row === 1) {
      td.appendChild(document.createTextNode(col));
    }
    if (row === 6) {
      td.appendChild(document.createTextNode(col + 18));
    }

    tr.appendChild(td);
  }

  tbody.appendChild(tr);

}


mMap.appendChild(tbody);


document.body.appendChild(mMap);

export default mMap;
