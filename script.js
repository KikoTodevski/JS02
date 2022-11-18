// //Objects

// var car = new Object();

// //New object constructor
// car.model = "Fiat Lancia";
// car.year = 1994;
// car.color = "Grey";

// //Accessing object properties
// console.log(car);
// console.log(car.model);
// console.log(car.year);

// // console.log(car [model]);

// //Object litteral
// var user = {
//     firstName: "Kristijan",
//     lastName: "Todevski",
//     favoriteNumber: 4
// };

// console.log(user);

// //Create an object called Course that will hold: CourseName, CourseTeacher, CourseSpan, 

// //Create an object called Course teacher, that will hold: TeacherName, Teacher E-mail,

// //Then output in the console:

// //I'm currently studying COURSE NAME for COURSE SPAN days, and my teacher is TEACHER NAME. You can reach him at TEACHER EMAIL.

// var Course = {
//     CourseName: "JavaScript",
//     CourseTeacher: "Mario",
//     CourseSpan: "365"
// };
// console.log(Course);

// var CourseTeacher = {
//     TeacherName: "Mario",
//     TeacherEmail: "mariopetkovski@yahoo.com"
// };
// console.log(CourseTeacher);

// console.log("I'm currently studying " + " " + Course.CourseName + " " + "for" + " " + Course.CourseSpan + " " + "days, and my teacher is" + " " + CourseTeacher.TeacherName + "." + " " + "You can reach him at" + " " + CourseTeacher.TeacherEmail + ".");

// var movie = {
//     title: "His Girl Friday",
//     releaseDate: 1940,
//     genre: "Comedy"
// };

// var { title: movieTitle, genre } = movie;

// console.log(movie);
// console.log(movieTitle);

// //Create an object called actor, that will hold ACTOR FIRST NAME, ACTOR LAST NAME, OSCAR WINS

// //Create an object called movie, that will hold MOVIE NAME, RELEASE DATE

// //Output : 

// //"ACTOR FIRST NAME ACTOR LAST NAME, stars in the movie MOVIE NAME, released in RELEASE DATE, and the movie went on to win OSCAR WINS oscars."

// var actor = {
//     actorFirstName: "Kristijan",
//     actorLastName: "Todevski",
//     oscarWins: "2"
// };

// var movie = {
//     movieName: "Punisher",
//     releaseDate: "20.10.2020"
// };

// console.log(actor.actorFirstName + " " + actor.actorLastName + "," + " " + "stars in the movie" + " " + movie.movieName + "," + " " + "released in" + " " + movie.releaseDate + "," + " " + "and the movie went on to win" + " " + actor.oscarWins + " " + "oscars.");

//Arrays

var colors = [
    "red", "green", "blue"
];

console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

console.log(colors.length);

var [firstColor, ,thirdColor] = colors;

console.log(firstColor);
console.log(thirdColor);

var newColors = [
    "cyan", "magenta", "yellow", "carbon"
];


// var combinedArray = colors.concat(newColors);
var combinedArray = [...colors, ...newColors];

console.log(combinedArray);

newColors.push("brown");
newColors.unshift("black");

console.log(colors);
console.log(newColors);

console.log(colors.pop());


