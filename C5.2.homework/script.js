const parser = new DOMParser();
const XML_STRING = `
<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>`

const xmlDOM = parser.parseFromString(XML_STRING, "text/xml");

const listNode = xmlDOM.querySelector("list");
const students = listNode.querySelectorAll("student");
const first_student = students[0];
const second_student = students[1];
const first_student_name = first_student.querySelector("name").querySelector("first").textContent + " " +
    first_student.querySelector("name").querySelector("second").textContent;
const second_student_name = second_student.querySelector("name").querySelector("first").textContent + " " +
    second_student.querySelector("name").querySelector("second").textContent;
const first_student_lang = first_student.querySelector("name").getAttribute("lang");
const second_student_lang = second_student.querySelector("name").getAttribute("lang");
const first_student_age = first_student.querySelector("age").textContent;
const second_student_age = second_student.querySelector("age").textContent;
const first_student_prof = first_student.querySelector("prof").textContent;
const second_student_prof = second_student.querySelector("prof").textContent;


const js_obj = {
    list: [
        {name: first_student_name, age: first_student_age, prof: first_student_prof, lang: first_student_lang},
        {name: second_student_name, age: second_student_age, prof: second_student_prof, lang: second_student_lang}
    ],
}

console.group("Задание 1")
console.log("строка XML: ", XML_STRING);
console.log("JavaScript объект на выходе: ", js_obj);
console.groupEnd();


// Задание 2

let JSON_STRING = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`


const json = JSON.parse(JSON_STRING);
const list = json.list;

const result = {
    list: [
        {name: list[0].name, age: list[0].age, prof: list[0].prof,},
        {name: list[1].name, age: list[1].age, prof: list[1].prof,},
    ]
}

console.group("Задание 2")
console.log("строка JSON: ", JSON_STRING);
console.log("JavaScript объект на выходе: ", result);
console.groupEnd();

