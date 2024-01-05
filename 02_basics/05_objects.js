const course = {
    coursename : "Java Script in hindi",
    price : "99",
    courseInstructor : "Rishiji"
}
//  console.log(course["courseInstructor"]);

//👉 if i used courseInstructor manytime then course["courseInstructor"] is not a good way to use Here is good way const {properties} = object_name
 const {courseInstructor} = course;
 console.log(courseInstructor)

 //   we can also ➡️ destructure means change the name like Instructor instead of courseInstructor
const {courseInstructor:instructor} = course; 
 console.log(instructor)




// node 02_basics/05_objects.js