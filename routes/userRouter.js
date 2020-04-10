var express = require('express');
const path = require('path');
const User = require(path.join("..", "models", "User.js"))
const ProfilePic = require(path.join("..", "models", "ProfilePic.js"))
const jwt = require('jsonwebtoken');
const formidable = require('formidable');
const verifyToken = require(path.join("..", "jwt", "verifyToken.js"));
const bcrypt = require('bcryptjs');

var fs = require("fs")

var router = express.Router();

router.post("/login", (req, res)=>{
    const givenUser = req.body.user;

    User.getUserByUserName(givenUser.username, (err, usr)=>{
        if(err) throw err;
        if((usr != null) && ( bcrypt.compareSync(givenUser.password, usr.password))){
            jwt.sign({username : usr.username, img : usr.img}, "secret_key", {expiresIn: '1h'}, (err, token)=>{
                if(err) throw err;
                return res.status(200).json({
                    token
                });
            });
        }else{
            return res.status(400).json({});
        }
    });
});

router.post("/logout", (req, res)=>{
  //nothing to do here... its on the client to delete the token
    return res.sendStatus(201);
});

router.post("/register", (req, res)=>{
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
      if (err) {
        throw err
      }
      newuser = fields;
      newuser["friends"] = []
      newuser["achievements"] = []
      newuser["games"] = []
      newuser["friendrequests"] = []
      newuser["password"] = bcrypt.hashSync(newuser["password"], 10)

      if(files && files['file']){
        img = fs.readFileSync(files['file'].path) 
        type = files['file'].type;
        ProfilePic.addImage(img, type, id =>{
          newuser['img'] = id;

          User.addUser(newuser, (err, nuser)=>{
            if(err) return res.status(400).json(err);
            else return res.sendStatus(200).json({});
          })
        })
      }else{
        User.addUser(newuser, (err, nuser)=>{
          if(err) return res.status(400).json(err);
          else return res.sendStatus(200).json({});
        })
      }
    })
});

router.get("/userdetails", verifyToken,  (req, res) => {
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    var {img, firstname, lastname, username, email , facebook , twitter, summary} = user;
    return res.status(200).json({firstname, lastname, username, img, email , facebook , twitter, summary});
  });
});

router.get("/friends/:username", verifyToken, (req, res)=>{
  User.getUserByUserName(req.params.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    var {img, firstname, lastname, username, email , facebook , twitter, summary} = user;
    return res.status(200).json({img, firstname, lastname, username, email , facebook , twitter, summary});
  });
});

router.get("/friendslist", verifyToken, (req, res)=>{
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    var {friends} = user;
    return res.status(200).json(friends);
  });
});

router.get("/friendrequests", verifyToken, (req, res)=>{
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    var {friendrequests} = user;
    return res.status(200).json(friendrequests);
  });
});

router.post("/sendrequest", verifyToken, (req, res) =>{
  if(!req.body.username) return res.sendStatus(405);
  User.getUserByUserName(req.body.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    user["friendrequests"].push(req.user.username);
    user.markModified("friendrequests");
    user.save(err=>console.log(err));
    return res.status(200).json({});
  });
});

router.post("/addfriend", verifyToken, (req, res) =>{
  if(!req.body.username) return res.sendStatus(405);
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    user["friends"].push(req.body.username);
    user.markModified("friends");
    user.save(err=>console.log(err));
    return res.status(200).json({});
  });
});

router.post("/addfacebook", verifyToken, (req, res) => {
  if(!req.body.link) return res.sendStatus(405);
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    user["facebook"] = req.body.link;
    user.markModified("facebook");
    user.save(err=>console.log(err));
    return res.status(200).json({});
  });
});

router.post("/addtwitter", verifyToken, (req, res) => {
  if(!req.body.link) return res.sendStatus(405);
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    user["twitter"] = req.body.link;
    user.markModified("twitter");
    user.save(err=>console.log(err));
    return res.status(200).json({});
  });
});

router.post("/addsummary", verifyToken, (req, res) => {
  if(!req.body.text) return res.sendStatus(405);
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    user["summary"] = req.body.text;
    user.markModified("summary");
    user.save(err=>console.log(err));
    return res.status(200).json({});
  });
});



module.exports = router;