const express = require('express');
const app = express();
const router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/script', express.static(__dirname + "/script"));

var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    console.log(Date.now(), 'middle');
    next();
};

app.use(requestTime);

const server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

app.use(express.static('youtube_mobile'));
app.use(express.static('public'));
