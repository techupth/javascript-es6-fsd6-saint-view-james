let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];

// Start coding here
/* Property ของ Object newStudentProfile จะต้องมี Property ของ studentProfile ทั้งหมด
ใน Property hobbies ของ Object newStudentProfile จะมี Value ของ Array additionalHobbies เพิ่มเข้าไปด้วยโดยใช้ Spread Operator */
let newStudentProfile = {
  ...studentProfile,
  hobbies: [...studentProfile.hobbies, ...additionalHobbies],
};
console.log(newStudentProfile);
