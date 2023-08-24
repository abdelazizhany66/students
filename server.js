const pool = require('./src/pool')
const app = require('./app') 
const port = 3004

pool.connect({
    host : 'localhost',
    port: 5432,
    database:'students',
    user:'postgres',
    password:'1102000'
})
.then(
    ()=>{  
    app.listen(port,()=>{
    console.log(`SERVER IS RUNNING IN PORT ${port}`)
    console.log('database is connected')
})}
).catch((err)=>console.error(err))
