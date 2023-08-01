var root: any = document.querySelector("#root");

root.innerHTML = "<h1>Hello Rikkei!!!</h1>";

enum Sex {
  MALE,
  FEMALE,
}

interface student {
  name: string;
  age: number;
  sex: Sex;
}

let students: student[] = [
  { name: "Võ Tấn Gia Huy", age: 20, sex: Sex.MALE },
  { name: "Thái Thị Nhàn", age: 90, sex: Sex.FEMALE },
  { name: "Siêu nhân Gao", age: 30, sex: Sex.MALE },
];

function SieuNhanBienHinh(students: student[]): void {
  let List: any = document.querySelector("tbody");
  students.forEach((student, index) => {
    List.innerHTML += `
        <tr>
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td>${student.sex === Sex.MALE ? "Male" : "Female"}</td>
           <td>
            <button onclick="handleUpdate(${index})">Edit</button>
          </td>
        </tr>
    `;
  });
}

function handleSubmit(event: any) {
  event.preventDefault();
  const name = (document.querySelector("#name") as HTMLInputElement).value;
  const age = parseInt(
    (document.querySelector("#age") as HTMLInputElement).value
  );
  const sex =
    (document.querySelector("#sex") as HTMLInputElement).value == "Male"
      ? Sex.MALE
      : Sex.FEMALE;
  const newStudent: student = {
    name,
    age,
    sex,
  };

  students.push(newStudent);
  let List: any = document.querySelector("tbody");
  List.innerHTML = "";
  SieuNhanBienHinh(students);
}

let editedStudent: number | null = null;
function handleUpdate(index: number) {
  editedStudent = index;
  let updateStudent = students[index];
  if (updateStudent) {
    (document.querySelector("#edit-name") as HTMLInputElement).value =
      updateStudent.name;
    (document.querySelector("#edit-age") as HTMLInputElement).value = String(
      updateStudent.age
    );
    (document.querySelector("#edit-sex") as HTMLSelectElement).value =
      updateStudent.sex === Sex.MALE ? "Male" : "Female";
  }
}

function handleUpdateSubmit(event: any) {
  event.preventDefault();
  if (editedStudent != null) {
    let updateName = (document.querySelector("#edit-name") as HTMLInputElement)
      .value;
    let updateAge = (document.querySelector("#edit-age") as HTMLInputElement)
      .value;
    let updateSex =
      (document.querySelector("#edit-sex") as HTMLInputElement).value == "Male"
        ? Sex.MALE
        : Sex.FEMALE;
    students[editedStudent] = {
      name: updateName,
      age: parseInt(updateAge),
      sex: updateSex,
    };
    let studentList: any = document.querySelector("tbody");
    studentList.innerHTML = "";
    SieuNhanBienHinh(students);
  }
}

function sortByName() {
  students.sort((a, b) => a.name.localeCompare(b.name));
  let studentList: any = document.querySelector("tbody");
  studentList.innerHTML = "";
  SieuNhanBienHinh(students);
}

function sortByAge() {
  students.sort((a, b) => a.age - b.age);
  let studentList: any = document.querySelector("tbody");
  studentList.innerHTML = "";
  SieuNhanBienHinh(students);
}

function sortBySex() {
  students.sort((a, b) => a.sex - b.sex);
  let studentList: any = document.querySelector("tbody");
  studentList.innerHTML = "";
  SieuNhanBienHinh(students);
}

document
  .getElementById("student-form")
  .addEventListener("submit", handleSubmit);

SieuNhanBienHinh(students);
