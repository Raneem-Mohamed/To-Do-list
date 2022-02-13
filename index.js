const fs =require('fs');
const { title } = require('process');
const {creat} = require('./fun');
console.log(fun);
 

const [,,command]=process.argv;



if(command === "creat"){
    const [,,,title]=process.argv;
    creat(title);
}


const list =()  => {
    const data = JSON.parse(fs.readFileSync('./data.json', {encoding:'utf-8'})); 
    console.log(data);
}

if(command === "list"){
   list();
}

const delet =(ID)=>{
    const data = JSON.parse(fs.readFileSync('./data.json', {encoding:'utf-8'}));
    const newData = data.filter((elem) => elem.ID != ID)
    if (newData.length < data.length){
        fs.writeFileSync('./data.json', JSON.stringify(newData));
        console.log(newData);}
        else{console.log("not found")}
    }
    
    if(command === "delet"){
     const [,,,ID]=process.argv;
     delet(ID)
      }


const edit =(newtitle,ID)=>{
    const data = JSON.parse(fs.readFileSync('./data.json', {encoding:'utf-8'}));
    const edit = data.find((elem)=> +elem.ID == +ID)
    if(edit){
        edit.title=newtitle;
        fs.writeFileSync('./data.json', JSON.stringify(data));
    }
    else{console.log("can't edit")}
    
}
if(command === "edit"){
    const [,,,newtitle,ID]=process.argv;
    edit(newtitle,ID);

}
    
    