

//-> functional base
function Student(imageUrl, studentName, studentPath) {
  // console.log(this);    // -> object
  // console.log(self);    // -> window
  this.imageUrl = imageUrl;
  this.studentName = studentName;
  this.studentPath = studentPath;
  // console.log(this); 
}

const std = new Student("url", "Caglar", "Fullstack");
const std2 = new Student("url", "Mirza", "AWS");

// console.log(std);
// console.log(std2);
