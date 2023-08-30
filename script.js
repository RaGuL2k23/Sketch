let noOfDiv = 16;
 
const grid = document.createElement("div")
grid.className= 'grid';
for(let i = 0; i <noOfDiv ; i++){
    const column = document.createElement("div");
    column.className= 'column';
4
    for(let j=0;j < noOfDiv ; j++){
        const row = document.createElement("div");
        row.className = 'row';
        column.appendChild(row);
    }
    grid.appendChild(column);
}
document.body.appendChild(grid);
let color='';
function getColor(){
      color = document.getElementById("input1").value
        
    }
     
const rows = document.querySelectorAll(".row");
rows.forEach(rows => {
   
   rows.addEventListener('mouseover',(e)=> {
   e.target.style.cssText=`background-color:${color}`})
});
 
