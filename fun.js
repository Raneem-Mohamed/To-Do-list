const creat = (title) => {
    const data = JSON.parse(fs.readFileSync('./data.json', {encoding:'utf-8'}));
    if(data.length==0){   
    fs.writeFileSync('./data.json', JSON.stringify([{title ,ID:1}]));
    } else {
        const newid = data[data.length-1].ID+1;
        data.push({title ,ID:newid});
        fs.writeFileSync('./data.json', JSON.stringify(data));     
    }
    console.log(data);
}


module.exports={
creat 
};