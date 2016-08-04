/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */
 var mongoose = require('mongoose');
'use strict';
import User from '../api/user/user.model';
import Syllabus from '../api/syllabus/syllabus.model';


Syllabus.find({}).remove()
  .then(() => {
    Syllabus.create({
    _id: "57a22fe2cb5ffc372e85c686",
    academy: "Academy",
    year : 2016,
    title: "Title",
    education: "Education",
    lecturer:"Lecturer",
    objectives:"Objectives",
    iconurl:"Icon Url",
    owner:'569e69cc1ab998358d37667e',

    weekplans:[{
      week: 4,
      summary:"summary",
      topics:"topics",
      literature:"literature",
      videos:"videos",
      assignments:"assignments",
      teaser:"teaser"
    },{
      week: 5,
      summary:"summary",
      topics:"topics",
      literature:"literature",
      videos:"videos",
      assignments:"assignments",
      teaser:"teaser"
    }]
})
    .then(() => {
      console.log('finished populating users');
    });
  });


User.find({}).remove()
  .then(() => {
    User.create({
      _id:'569e69cc1ab998358d37667e',
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      _id:'569e69cc1ab998358d37667d',
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
