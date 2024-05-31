//const getStudents =(req,res)=>{console.log("getting students");};
const pool = require('./db');

const getStudents =(req,res) =>{
   pool.query('SELECT * FROM student',(error, results)=>{
    if(error) throw error;
    res.status(200).jason(results.rows);
   } )
};
module.exports ={
    getStudents,
}