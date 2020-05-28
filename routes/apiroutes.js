const router = require("express").Router();
const db = require("../models/book.js")
router.get("/api/all",function(req,res){
    db.find({}).then(function(records){
        console.log("records", records)
        res.json(records)
    })

});

router.post("/api/book",function(req,res){
    db.create(req.body).then(function(records){
        console.log("records", records)
        res.json(records)
    })
.catch(function(error){
    console.log(error.code)
    if(error.code == 11000){
        res.json({status:"Book already saved."})
    }
    else{
    res.json(error)
    }
})
});

router.put("/api/book/:id",function(req,res){
    db.findOneAndUpdate({id:req.params.id},req.body).then(function(records){
        console.log("records", records)
        res.json(records)
    })

})






module.exports = router;