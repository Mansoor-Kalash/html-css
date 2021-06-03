var w = " Welcom to the club ";

var score = " who scoref the most goals?  /n 1. Pogpa.    /n 2. Bruno.    /n 3. Cavani";
var r = "Correct answer";
var f = " Wrong answer";
var s = " Enter your name ";
var h = "Enter your answer by number";
var name;
alert(w);
alert(score);

var ans= prompt(h);
if (ans <1 )
{
  alert ("youre answer is out of arrange");
 ans= prompt(h);
 console.log(ans);
}
else if (ans >3 )
{
  alert ("youre answer is out of arrange");
 ans= prompt(h);
 console.log(ans);
}
else if ( ans == 2)
{
  alert(r);
}
else
{
  alert(f);
}


name= prompt(s);
alert("Youer name in the bottom of the page");
document.write("<p style='hight: 50px ; background: #3b5998;color: white; '> " + name + "</p>" );


