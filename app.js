const express = require('express');
let fs = require('fs');
const app = express();


console.log(express)

app.listen(3000, function() {
    console.log("El servidor esta corriendo");
    console.log("http://localhost:3000")
})

