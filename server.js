// function requireHTTPS(req, res, next) {
//     // The 'x-forwarded-proto' check is for Heroku
//     if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//         return res.redirect('https://' + req.get('host') + req.url);
//     }
//     next();
// }

// blog-frontend
const express = require('express');
const path = require('path');

const app = express();
// app.use(requireHTTPS);

app.use(express.static(__dirname + '/dist/BlogFrontend'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/BlogFrontend/index.html' ) ) 
});

app.listen(process.env.PORT || 8080);