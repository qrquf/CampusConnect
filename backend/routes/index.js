const express = require('express');
const admin= require('./adminroute.js');
const student = require('./studentroutes.js');
const teacher = require('./teacherroute.js');
const course = require('./courseroute.js');
const assignment = require('./assignmentroute.js');
const chapterLecture = require('./chapterAndLectureroute.js');
const router = express.Router();
const quiz = require('./quizroute.js');
router.use('/quiz', quiz);
router.use('/students', student);
router.use('/teachers', teacher);
router.use('/course', course);
router.use('/assignment', assignment);
router.use('/chapterLecture', chapterLecture);
router.use('/admin',admin);
module.exports = router;