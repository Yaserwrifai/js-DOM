/*-
Epic 2: DOM Manipulation
Manipulate the document structure is one of the most common things you'll want to do when writing web pages and apps. There are 3 parts of a website that you can access from JavaScript (window, navigator, and document) represented in JavaScript by objects. Here you can find the documentation for it.

The next exercises will focus only on how to access the Document Object and add, change, or remove elements and attributes.

DOM manipulation exercises*/
//--------------------------------------------------------------------------
/*-Exercise 1
    Now let's add content to an HTML document instead of writing to the console.
     Write a function called addBands myBandList) that will list your favorite bands. 
     Start with an empty HTML page that contains a level 1 heading "My Favorite Bands"
      and an empty unordered list with ID band-list.
    
Your function should use the JavaScript DOM to create list items and add them to 
the unordered list, with one list item for each string in array myBandList.
    
For example, if I call:
    
addBands(['Dire Straits', 'Kansas', 'Steely Dan']);
    
The function will add three list items to the unordered list.
    */
/*
console.log(" ---------------------------------------------------------");
console.log(" part dom Ex1");
var arr = ['Dire Straits', 'Kansas', 'Steely Dan'];

function addBands(arr) {
    var ul = document.getElementById("band-list");
    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(arr[i]));
        ul.appendChild(li);
    }
    console.log(ul);
}
addBands(['Dire Straits', 'Kansas', 'Steely Dan']);

*/
/*------------------------------------------
Exercise 2
Write a function called addMultTable(rows, cols) that will create a multiplication table like this. Start with an empty HTML page that only contains a level 1 heading.

Your function should use the JavaScript DOM to insert an HTML table after the heading.

For example, if I call:

addMultTable(4, 8);

It will create an HTML table with 4 rows and 8 columns, and append it after the level 1 heading.
-*/
console.log(" ---------------------------------------------------------");
console.log(" part dom Ex1");

function generate_table(rowT, colsT) {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    // creating all cells
    for (let i = 0; i < rowT; i++) {
        // creates a table row
        const row = document.createElement("tr");

        for (let j = 0; j < colsT; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            const cell = document.createElement("td");
            const cellText = document.createTextNode("cell in row " + i + ", column " + j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
}