var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone ={
    title: 'Article-one | krishnasri dontha',
    heading: "Article-one",
    date: 'aug  14, 2017',
    star:`
                                        <p>
                                             this is my  1 first content article.
                                          </p>
                                          <p>
                                         this is my 2 second content article.
                                        </p>`
};

function createTemplate(data) = {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var star = dta.star; 
    
var htmltemplate = `
<html>
    <head>
        <title>
        $ <title>
        </title>
               <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
               <div>
              <a href="/">home</a>
                    </div>
                     <hr/>
                         <h3>
                         $ {heading}
                      </h3>
                          <div>
                        $ {date}
                           </div>
                                  <div>
                                        $ {star}   
                                 </div>
         </div>
    </body>
    </head>
</html>
`;
return htmltemplate;
}
app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-1', function(req,res){
  res.send(createTemplate(articleone));
});

app.get('/article-one', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
