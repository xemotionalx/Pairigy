const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Project = require('../../models/Project');
const User = require('../../models/User');

// @route   GET api/profile/me 
// @desc    get current user's projects that they're the owner of
// @access  private
router.get('/me', auth, async (req, res) => {
    try {
        const project = await Project.find({ owner: req.user.id })
            .populate('team.user', ['name', 'avatar']);

        // if no profile then return 400 message 
        if (!project) {
            return res.status(400).json({ msg: 'there are no projects for this user' });
        }
        // if project res.json will  send project
        res.json(project);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

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
            check('description', 'description is required')
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
            projectId,
            name,
            description,
            website,
            status,
            team
        } = req.body;

        // Build project object
        const projectFields = {};
        projectFields.owner = req.user.id;
        if (projectId) projectFields.id = projectId;
        if (name) projectFields.name = name;
        if (description) projectFields.description = description;
        if (website) projectFields.website = website;
        if (status) projectFields.status = status;
        if (team) projectFields.team = team;
        
        try {
           let project = await Project.findOne({ _id: projectId });

            if (project) {
                // Update
                project = await Project.findOneAndUpdate(
                    { _id: projectId },
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


// @route   GET api/project/user/:user_id
// @desc    Get array of all projects that the user is part of by user ID
// @access  public

router.get('/user/:user_id', async (req, res) => {
    try {

        const project = await Project.find({ 'team.user' : { $lte: req.params.user_id } })
        .populate('team.user', ['name', 'avatar']);

        if (!project) return res.status(400).json({ msg: 'project not found' });
        res.json(project);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'project not found' });

        }
        res.status(500).send('Server Error');
    }
});

// @route   GET api/project/:project_id
// @desc    Get a single project by its id
// @access  public

router.get('/:project_id', async (req, res) => {
    try {

        const project = await Project.findById(req.params.project_id)
        .populate('team.user', ['name', 'avatar']);

        if (!project) return res.status(400).json({ msg: 'project not found' });

        res.json(project);

    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'project not found' });

        }
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/project/:project_id
// @desc    Delete a single project by its id
// @access  private
router.delete('/:project_id', auth, async (req, res) => {
    try {
      // Remove project
      await Project.findOneAndRemove({ _id: req.params.project_id });
     
      res.json({ msg: 'Project deleted' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


module.exports = router;