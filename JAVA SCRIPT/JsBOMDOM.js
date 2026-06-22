console.log("Hello world")

// targeting elements within the body:

document.body.firstElementChild
document.body.firestElementChild.children
document.body.firstElementChild.childNodes
document.body.firstElementChild.children[3].nextElementSibling
document.body.firstElementChild.children[3].previousElementSibling
document.body.firstElementChild.children[3].parentElement

let table = document.querySelector("table")

table.rows
table.cell
table.rows[1].rowIndex
tabl.rows[1].cells[0]
table.caption
table.tFoot
table.tHead
table.tBodies
// table bodies serial no like
table.tbodies[0]
// then the body rows and all 
table.tbodies[0].rows
// targeting cells
table.rows[0].cells
// row index in the thead/tbody part 
table.rows[0].sectionRowIndex
// cell index
table.rows[1].cells[0].cellIndex

 /*index part can be easily remembered :

 rowIndex         → poore table me row number
 sectionRowIndex  → apne thead/tbody me row number
 cellIndex        → apni row me column number
 
*/
