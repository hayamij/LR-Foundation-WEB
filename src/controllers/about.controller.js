const path = require('path');

exports.getAboutPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/about.html'));
};

exports.getVisionPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/about.html'));
};

exports.getTeamPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/about.html'));
};
