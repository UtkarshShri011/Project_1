//This is for the Setting the  server

const express = require("express");
const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password:'utkarsh',
    host: 'localhost',
    database:"school",
    port:'5432'
});


const app =  express();
const PORT = 3000;
app.use(express.json()); //middleware

//Routes
app.get('/', (req, res) => {res.send('Hello World')});
// what is call back functions ?
app.get('/people',(req,res) =>{res.send( "People Were Here")});


app.get('/api/student',(req,res) => {   
     pool.query('SELECT * FROM student',(error, results)=>{
    if(error) throw error;
    res.status(200).json(results.rows);
   } )
});


app.get('/api/teacher',(req,res) => {   
    pool.query('SELECT * FROM faculty',(error, results)=>{
   if(error) throw error;
   res.status(200).json(results.rows);
  } )
});

app.post('/api/addstudent',(req,res) => {
      pool.query('INSERT INTO student VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',['4','harshit','S','1234567890','UP','India'],(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
       })
});


app.listen(PORT, () => console.log('Server is started at the Port 3000'));
