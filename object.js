const student = {
    fullName: "Prabhakar Kumar",
    marks: 94.4,
    printName(){
        console.log("Student Name is", this.fullName)
    },
    printMarks: function(){
        console.log("Marks =", this.marks)     // this.marks == student.marks
    }
}

const diwakar = {
    fullName: 'Diwakar Kumar'
}

diwakar.__proto__ = student;