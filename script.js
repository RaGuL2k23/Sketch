let exisistingGrid=null;
let rows = [];
let color='';
let pressed = false; /*to track pressing and hovering  */
let blackTracker = 1;
let chooseColor = 0;
let callFunction=0;/* to avoid recursioin between colorRow() and randomColor() */

function colorRow() {        /* add event listenter's to row divs */ // must run atleast one time
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
            e.target.style.cssText=`background-color:${color}`;
            if(chooseColor>0){ randomColor();}/*to make random color by calling again and again*/;
        }
        })
     });
      
} 
randomColor = ()=>{
    blackTracker++; //post increment as function will be called once we click random and color is generated;
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    if(blackTracker%10 == 0) { color = 'black';}/*produce black color for every ten blocks */
    else {color = `RGB(${r},${g},${b})`;  }
    chooseColor=1;/* refer line 22 */
    if (callFunction == 0) {
        colorRow();
        callFunction=1;
    }
    
}
   
function getColor(){
    chooseColor=0;/* If assigned 0 will not trigger random color */ 
    callFunction == 0;
    color = document.getElementById("input1").value;
    if (callFunction == 0) {
        colorRow();
        callFunction=1;
    }
    
  }
function call(){
    let n =prompt("enter no b/w 1 to 100");
    makeGrid(n);
    
}
 const cont = document.querySelector(".container");/*main container to hold everything for styling purpose*/
  
  
 let removeElement = 0;/*Constant key to tracks whether first element exists*/
function makeGrid(noOfDiv){  /* to make grid*/
if(noOfDiv>100){
   prompt("greater than 100");
   return '';
}
    const grid = document.createElement("div")
    grid.className= 'grid';
    for(let i = 0; i <noOfDiv ; i++){
        let  column = document.createElement("div");
        column.className= 'column';
    
        for(let j=0;j < noOfDiv ; j++){
             let row = document.createElement("div");
             if(j%10==0){}
             row.className = 'row';
             rows.push(row);
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
    
}


/*styling purposes*/