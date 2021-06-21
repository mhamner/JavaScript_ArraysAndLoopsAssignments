//Javascript arrays and loops assignments

//Assignment:  Create 5 consts  name, age, city, state, and employer.  
//Use concatenation to write the following to the console:  "(name) is (age) years old and lives in (city), (state).  They work at (employer)."  
//Use the array.join() method to do this.

const name = 'Mark'
const age = '46'
const city = 'Louisville'
const state = 'KY'
const employer = 'Waystar'

var arraryMessage = [name, ' is ', age, ' years old and lives in ', city, ',' ,state, '.  They work at ', employer, '.'];
console.log(arraryMessage.join(""));

//Assignment:  Create an array of Restaurant objects.
// ○ Each object should have an id, a restaurantName, an address, which includes city, state, and zip, a foodType, and a yelpRating.
// ○ You should have 5 restaurants in your array
// ○ Write the array out to the console. 

const restaurants = [
    {
        id: 1,
        restaurantName: 'El Nopal',
        address: '5 First Street',
        city: 'Louisville',
        state: 'KY',
        zip: '40241',
        foodType: 'Mexican',
        yelpRating: '4.5'
    },
    {
        id: 2,
        restaurantName: 'Chuys',
        address: '12 St. Matthews Drive',
        city: 'Louisville',
        state: 'KY',
        zip: '40242',
        foodType: 'Mexican',
        yelpRating: '4.9'
    },
    {
        id: 3,
        restaurantName: 'Shogun',
        address: '5 Street Walmart is on',
        city: 'Louisville',
        state: 'KY',
        zip: '40241',
        foodType: 'Japanese Hibachi',
        yelpRating: '3.9'
    },
    {
        id: 4,
        restaurantName: 'Martins BBQ',
        address: '1 Indian Lake Drive',
        city: 'Louisville',
        state: 'KY',
        zip: '40241',
        foodType: 'BBQ',
        yelpRating: '4.7'
    },
    {
        id: 5,
        restaurantName: 'Raisin Canes',
        address: '1245 Westport Road',
        city: 'Louisville',
        state: 'KY',
        zip: '40241',
        foodType: 'Chicken',
        yelpRating: '4.0'
    }
];
console.log(restaurants);

//Assignment:  Using Javascript code, convert the array of Restaurant objects to just created to JSON.
restaurantsJSON = JSON.stringify(restaurants);
console.log(restaurantsJSON);

//Assignment:  Loop through the array of Restaurant objects and write the following to the console:  "(Restaurant Name) is located in (city) and serves (food type).  
//It has an average rating of (Yelp rating) on Yelp!"
restaurants.forEach(function(restaurant)
{
    var arrayForMessage = [restaurant.restaurantName, ' is located in ', restaurant.city, ' and serves ', restaurant.foodType, '.  It has an average rating of ', restaurant.yelpRating, 
    ' on Yelp!'];
    console.log(arrayForMessage.join(""));
});

//Assignment:  Create a new array of Students.  Each student object should have a first name, a last name, a current year (freshman, sophomore, junior, senior), 
//and a GPA (make up a number between 0.0 and 4.0).  The array should contain 10 students.  Write the array to the console.  
//Then filter the array for only students with a GPA greater than or equal to 3.5.  Write the resulting filtered array to the console.
const students = 
[
    {
        firstName: 'Bob',
        lastName: 'Smith',
        currentYear: 'Freshman',
        GPA: '3.95'
    },
    {
        firstName: 'Jennnifer',
        lastName: 'Smith',
        currentYear: 'Sophmore',
        GPA: '4.0'
    },
    {
        firstName: 'Timmy',
        lastName: 'Nelson',
        currentYear: 'Sophmore',
        GPA: '3.12'
    },
    {
        firstName: 'Sanjya',
        lastName: 'Gupta',
        currentYear: 'Junior',
        GPA: '3.87'
    },
    {
        firstName: 'Alyssa',
        lastName: 'Jones',
        currentYear: 'Senior',
        GPA: '4.0'
    },
    {
        firstName: 'Michael',
        lastName: 'Lawson',
        currentYear: 'Senior',
        GPA: '3.0'
    },
    {
        firstName: 'Bhaskar',
        lastName: 'Patel',
        currentYear: 'Junior',
        GPA: '3.7'
    },
    {
        firstName: 'Ray',
        lastName: 'Reynolds',
        currentYear: 'Sophmore',
        GPA: '2.91'
    },
    {
        firstName: 'Frank',
        lastName: 'Todd',
        currentYear: 'Junior',
        GPA: '3.4'
    }
]

console.log(students);

const studentsFiltered = students.filter(function(student)
{
    return student.GPA >= 3.5;
});

console.log(studentsFiltered);