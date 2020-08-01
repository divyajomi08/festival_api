const express = require('express');
const Festival =require('../models/festival');

exports.getfestival=(req,res)=>{
     Festival.find().then((doc)=>{res.json(doc);}).catch((error)=>{res.send(error);});};
exports.postfestival=(req,res)=>{
        const fest=new Festival ({
            _country : req.body._country,
            _title : req.body._title,
            _description : req.body._description,
            _date : req.body._date,
            _month : req.body._month
        });
        fest
        .save()
        .then((doc)=>{
            res.json(doc);
            })
        .catch((error)=>{
            res.send(error);
            });
    };    
// exports.putstudent=(req,res)=>{
//     Student
//     .update({_name : req.body._name},{$set : {_age : req.body._age}})
//     .then((doc)=>{res.json({_name : req.body._name,_age:req.body._age});})
//     .catch((error)=>{res.send(error);});
//     };
// exports.deletestudent=(req,res)=>{
//     Student
//     .remove({_name : req.body._name})
//     .then((doc)=>{res.send("successfully deleted");})
//     .catch((error)=>{res.send(error);});   
//     };    
