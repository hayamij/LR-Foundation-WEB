const path = require('path');

exports.getContactPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/lienhe.html'));
};
