/**___________________Chapter 14 to 16_______________________ */
/**___________________Arrays_______________________ */

// Q1 1.  Declare an empty array using JS literal notation to store
// student names in future.
var studentName = [];

// Qustion2
/** */
// var stdName = new Array();

// Q3
// var stringArray = ["Hello Worls"];

// Q4
// var numberArray = [1, 2];

// Q5
// var booleanArray = [true, false];

// Q6
// var mixArray = ["Hello Worls", 4, 5, 6, true, false];

// Q7
// var qualificationInPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.phil", "PHD"];

// for (var i = 0; i < qualificationInPakistan.length; i++) {
//   document.write(`${i + 1}) ${qualificationInPakistan[i]} "<br>"`);
// }

// Q8
// var stdName = ["Yassar", "Ali", "Essa"];
// var stdScore = [320, 230, 480];
// var totalStdMarks = 500;

// var percentage1 = `Score of ${stdName[0]} is ${stdScore[0]} ${(stdScore[0] / totalStdMarks) * 100}%`;
// var percentage2 = `Score of ${stdName[1]} is ${stdScore[1]} ${(stdScore[1] / totalStdMarks) * 100}%`;
// var percentage3 = `Score of ${stdName[2]} is ${stdScore[2]} ${(stdScore[2] / totalStdMarks) * 100}%`;
// document.write(`${percentage1}  <br> ${percentage2} <br> ${percentage3}`);

// Q9
// var colorNames = ["Red", "White", "Crimson"];
// document.write(colorNames + "<br>");

// var unshift = prompt("enter a color name to add at the begining of list");
// colorNames.unshift(unshift);
// document.write(colorNames + "<br>");
// /**--------------------- */
// var push = prompt("enter a color name to add at the end of list");
// colorNames.push(push);
// document.write(colorNames + "<br>");
// /**---------------------- */
// var unshift1 = prompt("add two more at the begining of list enter first color name");
// var unshift2 = prompt("second color name");
// colorNames.unshift(unshift1);
// colorNames.unshift(unshift2);
// document.write(colorNames + "<br>");
// /**---------------------- */

// colorNames.shift();
// document.write(colorNames + "<br>");

// // -----------
// colorNames.pop();
// document.write(colorNames + "<br>");

// var addGivenIndex = +prompt("which index number do you want to add color name enter a number rang 1 to 5 ");
// var addGivenColorName = prompt("enter color name ");
// colorNames.splice(addGivenIndex, 0, addGivenColorName);
// document.write(colorNames + "<br>");
// // ------------------------

// var deleteGivenIndex = +prompt("which index do you want to  delete color range 1 to 5 ");
// var deleteGivenColorRange = +prompt("how many color do you want to delete range 1 to 3");
// colorNames.splice(deleteGivenIndex, deleteGivenColorRange);
// document.write(colorNames + "<br>");

// Q10
// var studentScore = [320, 230, 480, 120];
// document.write(`Scores Of Student : ${studentScore}<br>`);
// document.write(`Ordered Scores of Student: ${studentScore.sort()}`);

// Q11
// var cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// document.write(`Cities list: <br> ${cityNames} <br>`);
// document.write(`Selected list: <br> ${cityNames.slice(2, 4)}`);

// // Q12
// var arr = ["This", "is", "my", "cat"];
// document.write(`Array: <br> ${arr} <br><br>`);
// document.write(`String: <br> ${arr.join(" ")}`);
// Q13
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// for (var i = 0; i < devices.length; i++) {
//   document.write(`Out: <br> ${devices[i]} <br>`);
// }

// document.write(devices + "<br>");

// document.write(`Out: <br> ${devices.shift()} <br>`);
// document.write(`Out: <br> ${devices.shift()} <br>`);
// document.write(`Out: <br> ${devices.shift()} <br>`);
// document.write(`Out: <br> ${devices.shift()} <br>`);

// Q14
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write(devices + "<br>");
// document.write(`Out: <br> ${devices.pop()} <br>`);
// document.write(`Out: <br> ${devices.pop()} <br>`);
// document.write(`Out: <br> ${devices.pop()} <br>`);
// document.write(`Out: <br> ${devices.pop()} <br>`);

/**------------Chapter 17 to 20 */
// Q1
// var emptyMultiDArray = [[], [], []];
// Q2
//

// Q3
// for (var i = 1; i <= 10; i++) {
//   document.write(i + "<br>");
// }

// Q3
// var tableNumber = +prompt("Enter a number to show its multiplication table");
// var lengthTableNumber = +prompt("Enter length multiplication table");

// for (var i = 1; i <= lengthTableNumber; i++) {
//   document.write(`${tableNumber}  X  ${i}  =  ${i * tableNumber} <br> `);
// }

// Q5
// fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//   document.write(`${fruits[i]} <br>`);
// }
// for (var i = 0; i < fruits.length; i++) {
//   document.write(`Element at index ${i} is ${fruits[i]} <br>`);
// }

// Q6
// document.write(`<h2>Counting:</h2>: <br>`);
// for (var i = 0; i <= 15; i++) {
//   document.write(`${i},`);
// }

// document.write(`<h2>Reverse counting:</h2>: <br>`);
// for (var i = 10; i > 0; --i) {
//   document.write(`${i},`);
// }

// document.write(`<h2>Even:</h2>: <br>`);

// for (var i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     document.write(`${i},`);
//   }
// }

// document.write(`<h2>Odd:</h2>: <br>`);

// for (var i = 0; i <= 20; i++) {
//   if (i % 2 == 1) {
//     document.write(`${i},`);
//   }
// }

// document.write(`<h2>Series:</h2>: <br>`);

// for (var i = 2; i <= 20; i++) {
//   if (i % 2 == 0) {
//     document.write(`${i}k,`);
//   }
// }
// Q7
// var userinput = prompt("Welcome to Qayyam Bakery What do you want to order sir/ma'am?");
// var cookies = ["cake", "apple pie", "cookie", "chips", "patties"];

// for (var i = 0; i < cookies.length; i++) {
//   if (cookies.includes(userinput)) {
//     document.write(`${userinput} is available at index ${cookies.indexOf(userinput)} in our bakery`);
//     break;
//   } else if (userinput !== cookies.length) {
//     document.write(`we are sorry ${userinput} is not available in our bakery`);
//     break;
//   }
// }

// Q8
// var items = [24, 53, 78, 91, 12];
// document.write(`Array items: ${items} <br>`);
// document.write(`The largest number is: ${Math.max(...items)}`);

// Q9
// document.write(`Array items: ${items} <br>`);
// document.write(`The smalest number is: ${Math.min(...items)}`);
// Q10
for (var i = 1; i <= 20; i++) {
  document.write(`${5 * i},`);
}
