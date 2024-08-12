const express= require('express');
const bcrypt = require('bcryptjs');
const router= express.Router();

const Admin = require('../models/adminModel.js');
const { ConnectionStates } = require('mongoose');

/*
//register admin 
router.post("/register", async (req, res) => {

    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    // Adding admin to database
    try {
        const existingAdmin = await Admin.findOne({ email });

        if (existingAdmin) {
            return res.status(400).json({ message: "Admin Already Exists!" });
        }

        const newAdmin = new Admin({ name, email, password: hashedPassword });
        newAdmin.save();
        res.status(200).send('Admin Registered successfully!');
    }
    catch (error) {
        return res.status(400).json({ message: error });
    }
});

// Admin Login 
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingAdmin = await Admin.findOne({ email });

        if (!existingAdmin) {
            return res.status(404).json({ message: "Admin Doesn't Exist!" });
        }

        const passwordMatch = await bcrypt.compare(password, existingAdmin.password);

        if (!passwordMatch) {

            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const CurrentAdmin = {
            name: existingAdmin.name,
            email: existingAdmin.email,
            isAdmin: existingAdmin.isAdmin,
            _id: existingAdmin._id
        };

        res.status(200).send(CurrentAdmin);

    }
    catch (error) {
        res.status(400).json(error);
    }
});

*/
// Verify Admin
router.post("/verifyAdmin",async(req,res)=>{
    const {email,password} = req.body;
    
    // console.log(req.body);

    // Fetching admin info from the database
    try{
        const existingUser = await Admin.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "User Doesn't Exist!" });
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if (!passwordMatch) {

            return res.status(400).json({ message: "Invalid Credentials" });
        }

        result= await Admin.find({email});
        return res.status(200).send(result);
    }
    catch(error){
        return res.status(400).json({ message:error});
    }
});


module.exports = router;