const express = require("express");
const Teacher = require("../.vscode/model/teacherSchema");

const router = express.Router();

router.get("/teacher", async(req, res)=>{
    try {
        const TeacherData = await Teacher.find({});
        res.status(200).send({message:"Get all data successfully", data:TeacherData})
    } catch (error) {
        res.status(500).send({error})
    }

});
router.post("/create", async(req, res)=>{
    try {
        const payload = req.body;
        const teacher = new Teacher(payload);
        const TeacherData = await teacher.save();
        res.status(201).send({message:"Data Create successfully", data:TeacherData})
    } catch (error) {
        res.status(500).send({error})
    }

});


module.exports = router;