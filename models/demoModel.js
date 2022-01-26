const mongoose = require("mongoose");

const fileSchema = {}

const InvoiceFile = mongoose.model("Information_records", fileSchema);



module.exports = InvoiceFile;