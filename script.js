let exisistingGrid=null;
let rows = [];
let color='';
let pressed = false;
function getColor(){
    color = document.getElementById("input1").value
      return color;
  }
function call(){
    let n =prompt("enter no b/w 1 to 100");
    grid(n);
    
}
 const cont = document.createElement("div");
 cont.className = 'container';
 document.body.append(cont);
 
function grid(noOfDiv){
    const grid = document.createElement("div")
    grid.className= 'grid';
    for(let i = 0; i <noOfDiv ; i++){
        let  column = document.createElement("div");
        column.className= 'column';
    
        for(let j=0;j < noOfDiv ; j++){
             let row = document.createElement("div");
            row.className = 'row';
            rows.push(row);
            console.log(row);
            column.appendChild(row);
        }
        grid.appendChild(column);
    }   
    if(exisistingGrid===null){
        cont.appendChild(grid);
        exisistingGrid = true;
    }
    else{
       cont.removeChild(cont.firstChild);
       cont.appendChild(grid);
        exisistingGrid=null;
    }
    rows.forEach(rows => {

        rows.addEventListener('mousedown', (e) => {
            e.target.style.cssText=`background-color:${color}`
            pressed=true;
        })

        rows.addEventListener('mouseup', () => {
            pressed=false;
        })
       
        rows.addEventListener('mouseover',(e)=> {
        if(pressed){
            e.target.style.cssText=`background-color:${color}`
        }
        })
     });
    
}
 



 

     console.log(rows)
      
   