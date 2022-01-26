const express = require("express")
const router = express.Router();

const InvoiceFile = require('../models/demoModel');


// router.route('/create').post((req, res) => {
//     const filename = req.body.filename;
//     const size = req.body.size;
//     const date = req.body.date;
 
//     const newFile = new InvoiceFile({
//          filename,
//          size,
//          date,
      
//     });
//    newFile.save();

// });

router.route('/files').get((req, res ) => {
     InvoiceFile.find()
     .then(foundFile => res.json(foundFile))
})

module.exports = router;
