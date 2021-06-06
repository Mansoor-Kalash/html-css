// var w = " Welcom to the club ";

var score = " Choose one of them /n 1. Pogpa.    /n 2. Bruno.    /n 3. Cavani";
// var r = "Correct answer";
// var f = " Wrong answer";
// var s = " Enter your name ";
// var h = "Enter your answer by name";
var name;

// alert(w);

alert(score);
name = prompt(score);
while (name !== "pogba" && name !== "cavani" && name !== "bruno"  )
{

  ans= prompt(score);

}




// var ans= prompt(h);
// if (ans <1 )
// {
//   alert ("youre answer is out of arrange");
//  ans= prompt(h);
//  console.log(ans);
// }
// else if (ans >3 )
// {
//   alert ("youre answer is out of arrange");
//  ans= prompt(h);
//  console.log(ans);
// }
// else if ( ans == 2)
// {
//   alert(r);
// }
// else
// {
//   alert(f);
// }

var numStars;
numStars = prompt("Rate the Web Site from 1 to 5");

while (numStars !== "1" && numStars !== "2" && numStars !== "3" && numStars !== "4" && numStars !== "5"  )
{

  numStars = prompt("Rate the Web Site from 1 to 5");

}

for (i=1; i <= numStars; i++)
{
  document.write("<img src='https://lh3.googleusercontent.com/proxy/sNL8YMoIu0VAepdqsvTr4no30ZoKqNcAzCh_9irNyPA_IW4VlI0CDMrgYooEJ6gh_88tBFuzM0uDLAcggJccb3zsEgrfvPw' height='200' width='200'>");
  
}


for (i= numStars; i<5 ; i++)
{
  document.write("<img  width: 200px; height: 200px;src='https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-commonly-used-free-stars-clipart-png-image_2395198.jpg' height='200' width='200'>");
  
}


// alert("Youer name in the bottom of the page");
// document.write("<p style='hight: 50px ; background: #3b5998;color: white; '> " + name + "</p>" );


