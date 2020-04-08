const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  img : {data : Buffer, contentType : String}
});

var Image = (module.exports = mongoose.model("ProfilePic", ImageSchema));


//source : https://gist.github.com/aheckmann/2408370
module.exports.addImage = (image, type, callback) => {
  var i = new Image;
  i.img.data = image;
  i.img.type = type;
  i.save((err, img)  => {
    if (err) throw err;
    callback(img["_id"]);
  });
};

module.exports.getImageById = (id, callback) =>{
  Image.findById(id, callback);
}
