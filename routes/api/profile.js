const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const mongoose = require('mongoose');

const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   GET api/profile/me 
// @desc    get current user's profile
// @access  private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id })
            .populate('user', ['name', 'avatar']);

        // if no profile then return 400 message 
        if (!profile) {
            return res.status(400).json({ msg: 'there is no profile for this user' });
        }
        // if profile res.json will  send profile
        res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});


// @route   POST api/profile
// @desc    create or update a user profile
// @access  private
router.post(
    '/',
    [
        auth,
        [
            check('status', 'status is required')
                .not()
                .isEmpty(),
            check('skills', 'skills are required')
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        // if errors return response of 400
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            status,
            website,
            location,
            skills,
            bio,
            twitter,
            facebook,
            linkedin,
            instagram,
            github,
            dribbble
        } = req.body;

        // Build proflie objevt
        const profileFields = {};
        profileFields.user = req.user.id;
        if (status) profileFields.status = status;
        if (website) profileFields.website = website;
        if (location) profileFields.location = location;
        if (bio) profileFields.bio = bio;
        if (skills) {
            profileFields.skills = skills.split(',').map(skill => skill.trim());
        }

        // Build social object 
        profileFields.social = {}
        if (twitter) profileFields.social.twitter = twitter;
        if (facebook) profileFields.social.facebook = facebook;
        if (linkedin) profileFields.social.linkedin = linkedin;
        if (instagram) profileFields.social.instagram = instagram;
        if (github) profileFields.social.github = github;
        if (dribbble) profileFields.social.dribbble = dribbble;

        try {
            let profile = await Profile.findOne({ user: req.user.id });

            if (profile) {
                // Update
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true, upsert: true }
                );
                return res.json(Profile);
            }
            // Create
            profile = new Profile(profileFields);

            await profile.save();
            res.json(profile);

        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server Error')
        }
    }
);

// @route   GET api/profile
// @desc    Get all profiles
// @access  public

router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  public

router.get('/user/:user_id', async (req, res) => {
    try {

        console.log(req.params)
        let id;
        if (typeof req.params.user_id === "string") {
            id = mongoose.Types.ObjectId(req.params.user_id);
        } else {

            id = req.params.user_id;
        }

        const profile = await Profile.findOne({ user: id }).populate('user',
            ['name', 'avatar']);

        if (!profile) return res.status(400).json({ msg: 'Profile not found' });
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' });

        }
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/profile
// @desc    Delete profile, user & posts
// @access  public

router.delete('/', auth, async (req, res) => {
    try {
        // @todo - remove users posts

        // Remove profile
        await Profile.findOneAndRemove({ user: req.user.id });
        // Remove User
        await User.findOneAndRemove({ _id: req.user.id });

        res.json({ msg: 'User deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;