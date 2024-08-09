const { models, model, Schema,Types, default:mongoose } = require('mongoose');
const userSchema = Schema({
    name:String,
    email:String,
    password:String,
    verified:Boolean,
    verification_token:String,
    bio:String,
})

const commentSchema = Schema({
    user:Types.ObjectId,
    task:Types.ObjectId,
    comment:String,
})

const taskSchema = Schema({
    title:String,
    description:String,
    deadline:Date,
    user:Types.ObjectId,
    status:String,
    file:String,
    note:String,
    comments:[commentSchema]
})

const eventSchema = Schema({
    title:String,
    description:String,
    note:String,
    datetime:Date,
    invitees: [Types.ObjectId],
    project:Types.ObjectId
})

const projectSchema = Schema({
    user:Types.ObjectId,
    title:String,
    description:String,
    startdate:Date,
    enddate:Date,
    team: [userSchema],
    tasks:[taskSchema],
    status:String,
    events:[eventSchema],
})


const User = models.User || model('User', userSchema);
const Task = models.Task || model('Task', taskSchema);
const Event = models.Event || model('Event', eventSchema);
const Project = models.Project || model('Project', projectSchema);

module.exports = {User,Project,Task,Event}