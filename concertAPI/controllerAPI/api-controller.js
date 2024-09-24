var dbcon = require("../crowdfunding_db");

var connection = dbcon.getconnection();

connection.connect();

var express = require('express');

var router = express.Router();

router.get("/FUNDRAISER", (req, res) => {
	connection.query(`SELECT f.*, c.NAME as category_name 
    FROM FUNDRAISER f
    JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
    WHERE f.active = 1;`, (err, records, fields) => {
		if (err) {
			console.error("Error while retrieve the data");
		} else {
			res.send(records);
		}
	})
})

router.get("/CATEGORY", (req, res) => {
	connection.query( "select * from CATEGORY", (err, records, fields) => {
		if (err) {
			console.error("Error while retrieve the data");
		} else {
			res.send(records);
		}
	})
})

// router.get("/:id", (req, res) => {
// 	connection.query("select * from FUNDRAISER where FUNDRAISER_ID=" + req.params.id, (err, records, fields) => {
// 		if (err) {
// 			console.error("Error while retrieve the data");
// 		} else {
// 			res.send(records);
// 		}
// 	})
// })



module.exports = router;
