var root = document.querySelector("#root");
root.innerHTML = "<h1>Hello Rikkei!!!</h1>";
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
})(Sex || (Sex = {}));
var students = [
    { name: "Võ Tấn Gia Huy", age: 20, sex: Sex.MALE },
    { name: "Thái Thị Nhàn", age: 90, sex: Sex.FEMALE },
    { name: "Siêu nhân Gao", age: 30, sex: Sex.MALE },
];
function SieuNhanBienHinh(students) {
    var List = document.querySelector("tbody");
    students.forEach(function (student, index) {
        List.innerHTML += "\n        <tr>\n          <td>".concat(student.name, "</td>\n          <td>").concat(student.age, "</td>\n          <td>").concat(student.sex === Sex.MALE ? "Male" : "Female", "</td>\n           <td>\n            <button onclick=\"handleUpdate(").concat(index, ")\">Edit</button>\n          </td>\n        </tr>\n    ");
    });
}
function handleSubmit(event) {
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var age = parseInt(document.querySelector("#age").value);
    var sex = document.querySelector("#sex").value == "Male"
        ? Sex.MALE
        : Sex.FEMALE;
    var newStudent = {
        name: name,
        age: age,
        sex: sex,
    };
    students.push(newStudent);
    var List = document.querySelector("tbody");
    List.innerHTML = "";
    SieuNhanBienHinh(students);
}
var editedStudent = null;
function handleUpdate(index) {
    editedStudent = index;
    var updateStudent = students[index];
    if (updateStudent) {
        document.querySelector("#edit-name").value =
            updateStudent.name;
        document.querySelector("#edit-age").value = String(updateStudent.age);
        document.querySelector("#edit-sex").value =
            updateStudent.sex === Sex.MALE ? "Male" : "Female";
    }
}
function handleUpdateSubmit(event) {
    event.preventDefault();
    if (editedStudent != null) {
        var updateName = document.querySelector("#edit-name")
            .value;
        var updateAge = document.querySelector("#edit-age")
            .value;
        var updateSex = document.querySelector("#edit-sex").value == "Male"
            ? Sex.MALE
            : Sex.FEMALE;
        students[editedStudent] = {
            name: updateName,
            age: parseInt(updateAge),
            sex: updateSex,
        };
        var studentList = document.querySelector("tbody");
        studentList.innerHTML = "";
        SieuNhanBienHinh(students);
    }
}
function sortByName() {
    students.sort(function (a, b) { return a.name.localeCompare(b.name); });
    var studentList = document.querySelector("tbody");
    studentList.innerHTML = "";
    SieuNhanBienHinh(students);
}
function sortByAge() {
    students.sort(function (a, b) { return a.age - b.age; });
    var studentList = document.querySelector("tbody");
    studentList.innerHTML = "";
    SieuNhanBienHinh(students);
}
function sortBySex() {
    students.sort(function (a, b) { return a.sex - b.sex; });
    var studentList = document.querySelector("tbody");
    studentList.innerHTML = "";
    SieuNhanBienHinh(students);
}
document
    .getElementById("student-form")
    .addEventListener("submit", handleSubmit);
SieuNhanBienHinh(students);
