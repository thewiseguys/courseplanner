'use strict';

import mongoose from 'mongoose';
var Schema  = mongoose.Schema;

var SyllabusSchema = new mongoose.Schema({
    academy: String,
    year : String,
    title: String,
    education: String,
    lecturer:String,
    objectives:String,
    iconurl:String,
    owner:{
    type:Schema.ObjectId,
    ref:'User'
   },
    weekplans:[{
      week: String,
      summary:String,
      topics:String,
      literature:String,
      videos:String,
      assignments:String,
      teaser:String
    }]
});

export default mongoose.model('Syllabus', SyllabusSchema);
