const path = require('path');

exports.getFinancePage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/taichinh.html'));
};
