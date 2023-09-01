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
    makeGrid(n);
    
}
 const cont = document.querySelector(".container");/*main container to hold everything for styling purpose*/
  
  
 let removeElement = 0;/*Constant key to tracks whether first element exists*/
function makeGrid(noOfDiv){  /* to make grid*/
    
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
        /*to remove the first grid if 
and only it exists*/
        if(removeElement>0){
            cont.removeChild(cont.children[1]);
        }
        ++removeElement;
    }
    else{
       cont.removeChild(cont.lastChild);
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
 
/*styling purposes*/