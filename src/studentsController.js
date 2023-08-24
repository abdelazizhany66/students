const studentRepo = require('../util/studentRepo')

exports.getStudents = async(req,res)=>{
    const students = await studentRepo.find()
    if(!students){
        throw new Error('No users')
    }
    res.status(200)
    .json({
        status:'success',
        result: students.length,
        students
    })
}
exports.getOneStudent= async (req,res)=>{
    const {id}= req.params
    const student = await studentRepo.findById(id)
    if(!student){
        res.status(404)
        throw new Error ('This does not have a student')
    }
    res.status(202)
    .json({
        student
    })
}
exports.createStudent = async(req,res)=>{
    const {name, email, age}= req.body
    const student = await studentRepo.insert(name,email,age)
    res.status(201)
    .json({
        status:'success',
        student
    })
}
exports.updateStudent = async(req,res)=>{
    const {id} = req.params
    const {email,name,age}= req.body
    const student = await studentRepo.update(email,name,age,id)
    if(!student){
        throw new Error( 'This does not have a student')
    }
    res.status(204)
    .json({
        message:'success',
        student
    })
}
exports.deleteStudent = async(req,res)=>{
    const {id} = req.params
    await studentRepo.delete(id)
    if(!student){
        throw new Error( 'This does not have a student')
    }
    res.status(205)
    .json({
        message:'success'
    })
}