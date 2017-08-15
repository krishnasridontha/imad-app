var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
 'article-one' :{
    title: 'Article one | krishnasri dontha',
    heading: 'Article one',
    date: 'aug  14, 2017',
    star:`
                                        <p>
                                             this is my  1 first content article.
                                          </p>
                                          <p>
                                         this is my 2 second content article.
                                        </p>`
},
 'article-two' :{
    title: 'Article one | krishnasri dontha',
    heading: 'Article one',
    date: 'aug  7, 2010',
    star:`
                                        <p>
                                             this is my  1 first content article.
                                          </p>
                                          <p>
                                         this is my 2 second content article.
                                        </p>`
    
},
 'article-three' :{
    title: 'Article one | krishnasri dontha',
    heading: 'Article one',
    date: 'aug  10, 2019',
    star:`
                                        <p>
                                             this is my  1 first content article.
                                          </p>
                                          <p>
                                         this is my 2 second content article.
                                        </p>`
},
};
function createTemplate(data)  {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var star = data.star; 
    
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

app.get('/:articleName', function(req,res){
    //articleName == article-one;
    // articls[articleName]== {} content for object article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080;
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
