const connection = require("../../connection/db");

exports.getProfile = function(req, res, next) {
  let id = 1;
  let query = "select * from tbl_user where tbl_user.id = ?";
  connection.query(query, [id], (err, row) => {
    res.json(row[0]);
  });
};
