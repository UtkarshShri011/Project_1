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
      pool.query('INSERT INTO student VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',['5','harshita','k','1234567890','HP','India'],(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
       })
});

app.delete('/api/delstudent/:id',(req,res)=>{ 
    const stu_id = req.params.id;

    pool.query(
        'DELETE FROM student WHERE stu_id = $1 RETURNING *',
        [stu_id],
        (error, results) => {
            if (error) {
                console.error('Error executing query', error.stack);
                res.status(500).send('Error executing query');
            } else if (results.rowCount === 0) {
                res.status(404).send('Student not found');
            } else {
                res.status(200).json(results.rows[0]); // Send back the deleted row
            }
        }
    );
});


app.listen(PORT, () => console.log('Server is started at the Port 3000'));
