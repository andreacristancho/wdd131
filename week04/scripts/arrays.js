//  arrays.js



const steps = ["one", "two", "three"];
function listTemplate(step) {
  return  `<li>${step}</li>`;     //the html string made from step
}
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join();// set the innerHTML


//Activity 2 - Map #
//Declare an array with letter grades in it: ['A', 'B', 'A']
//Write a function that will take one letter grade, and return the appropriate gpa points for that grade. IE if we send in 'A' it should return 4.
//Use map and our conversion function to convert the array in step 1 to gpa points.


const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);


//reduce is useful when we need to compress an array into a single value. It is most often used when the array 
//has at least one value that can be mathematically flattened

//Using the function from the previous activity, convert an array of grades into an array of gpaPoints.
//Using reduce calculate the GPA from the array of gpaPoints.

const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;


// example 2
// this is the same thing as above, but with an arrow function
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;



//Activity 4 - Filter #
//filter is similar to map in that it returns a new array of elements. The elements in the calling array will be included in the new array if they pass a test that you include in the callback you pass in.

//Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']
//Using filter keep only the fruits that are longer than 6 characters.


const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});

//same thing with an arrow function
const shortWords = words.filter((word) => word.length < 6);



//Activity 5 - indexOf #
//indexOf returns the first index at which a given element can be found in the array, or -1 if it is not present.

//Declare an array with the following value: [12, 34, 21, 54]
//Declare a luckyNumber variable with the value 21;
//Use indexOf to see if the luckyNumber is in the Array.

// improved luckyNumber
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);




