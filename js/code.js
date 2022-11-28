//Fetching the data
fetch("../data/data.json")
.then((res)=>{
    return res.json();
})

//Explains the data I'm returning
.then((data)=>{
    console.table(data.results);
})

// console.log(data.results);
the((data)=>{
let results = data;
console.log(results);
})

.catch(()=>{
    console.log("Please try again later");
})