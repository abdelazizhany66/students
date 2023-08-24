const pool = require('../src/pool')

class studentRepo{
 static async find(){
   const { rows } = await pool.query(`SELECT * FROM students`)
   return rows
 }
 static async findById(id){
  const { rows } = await pool.query(`
  SELECT * FROM students WHERE id=$1 `,[id]
  )
  return rows
 }
 static async insert(name,email,age){
  const { rows } = await pool.query(`
  INSERT INTO students(name,email,age) VALUES($1,$2,$3) RETURNING * `, [name,email,age])
  return rows
 }
 static async update(name, email, age,id){
  const { rows } = await pool.query(
    `UPDATE students SET name= $1, email=$2, age=$3 WHERE id= $4 RETURNING * `,
    [name, email, age,id])
  return rows
 }
 static async delete(id){
  const { rows } = await pool.query(`
    DELETE FROM students WHERE id= $1 
  `,[id])
  return rows
 }
}


module.exports = studentRepo