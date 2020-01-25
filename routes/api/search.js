const express = require('express');
const router = express.Router();
const Profile = require('../../models/Profile');
const auth = require('../../middleware/auth');

const { check, validationResult } = require('express-validator');


const User = require('../../models/User');





router.get('/', auth, async (req, res) => {

    try {
        const profile = await (await User.findOne({ name: req.query.name }));

        console.log(profile);


        // if no profile then return 400 message 
        if (!profile) {
            return res.status(400).json({ msg: 'there is no profile for this user' });
        }



        res.json(profile);


    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});



module.exports = router;