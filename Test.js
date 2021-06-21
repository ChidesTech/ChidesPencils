alert("yes")

fetch("https://chidespencils.herokuapp.com/api/drawings")
.then(res=> res.json())
.then(data=> console.log(data))
.catch(err=>console.log(err))