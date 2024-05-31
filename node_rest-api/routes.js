const express = require("express");
const Router =express.Router();
const controller = require('/home/deq/Desktop/node_rest-api/controller.js')
/*
Router.get('/', (req,res) => {
    res.send("Using api route")
});
*/
Router.get('/', controller.getStudents); //skipping cllback

module.exports =Router;