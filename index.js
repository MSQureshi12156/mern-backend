const express = require("express");
const cors = require("cors");
const connectDb = require("./Connection/dbconnection");

const Teacher = require("./.vscode/model/teacherSchema");


const app = express();

connectDb
app.use(cors());
app.use(express.json());
// app.use("/create",router)
const PORT =5001;
app.get("/teacher", async(req, res)=>{
    try {
        const TeacherData = await Teacher.find({});
        res.status(200).send({message:"Get all data successfully", data:TeacherData})
    } catch (error) {
        res.status(500).send({error})
    }

});
  app.post("/create", async(req, res)=>{
    try {
        const payload = req.body;
        const teacher = new Teacher(payload);
        const TeacherData = await teacher.save();
        res.status(201).send({message:"Data Create successfully", data:TeacherData})
    } catch (error) {
        res.status(500).send({message:error})
    }

});
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
