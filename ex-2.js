let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100,
};

// Start coding here

// ให้เขียนโปรแกรมรวม Object studentProfile และ studentScores เข้าด้วยกัน โดยใช้ Spread Operator
let newStudentProfile = {
  ...studentProfile,
  scores: { ...studentProfile.scores, ...studentScores },
};

console.log(newStudentProfile);
