const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route   POST api/project
// @desc    create or update a project
// @access  private
router.post(
    '/',
    [
        auth,
        [
            check('name', 'name is required')
                .not()
                .isEmpty(),
            check('description', 'description are required')
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
            name,
            description,
            website,
            status,
            role_1,
            role_2,
            role_3,
            role_4,
            role_5,
            role_6
        } = req.body;

        // Build proflie objevt
        const projectFields = {};
        projectFields.owner = req.user.id;
        if (name) projectFields.name = name;
        if (description) projectFields.description = description;
        if (website) projectFields.website = website;
        if (status) projectFields.status = status;

        // Build social object 
        projectFields.project = {}
        if (role_1) projectFields.social.role_1 = role_1;
        if (role_2) projectFields.social.role_2 = role_2;
        if (role_3) projectFields.social.role_3 = role_3;
        if (role_4) projectFields.social.role_4 = role_4;
        if (role_5) projectFields.social.role_5 = role_5;
        if (role_6) projectFields.social.role_6 = role_6;

        try {
            let project = await Project.findOne({ owner: req.user.id });

            if (project) {
                // Update
                project = await Project.findOneAndUpdate(
                    { owner: req.user.id },
                    { $set: projectFields },
                    { new: true, upsert: true }
                );
                return res.json(Project);
            }
            // Create
            project = new Project(projectFields);

            await project.save();
            res.json(project);

        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server Error')
        }
    }
);