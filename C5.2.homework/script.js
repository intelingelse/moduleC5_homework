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

// Константы действительно в JavaScript часто именуют с помощью UPPER_CASE
// Лучше всего именовать переменные единообразно. В JavaScript, обычно, принято использовать camelCase
// В JavaScript не принято широко использовать так называемый snake case с использованием подчёркивания
// Подробнее об этом можно почитать здесь: https://www.w3schools.com/js/js_conventions.asp
const listNode = xmlDOM.querySelector("list");
const students = listNode.querySelectorAll("student");
const firstStudent = students[0];
const secondStudent = students[1];
const firstStudentName = firstStudent.querySelector("name").querySelector("first").textContent + " " +
    firstStudent.querySelector("name").querySelector("second").textContent;
const secondStudent_name = secondStudent.querySelector("name").querySelector("first").textContent + " " +
    secondStudent.querySelector("name").querySelector("second").textContent;
const firstStudentLang = firstStudent.querySelector("name").getAttribute("lang");
const secondStudentLang = secondStudent.querySelector("name").getAttribute("lang");
const firstStudentAge = firstStudent.querySelector("age").textContent;
const secondStudentAge = secondStudent.querySelector("age").textContent;
const firstStudentProf = firstStudent.querySelector("prof").textContent;
const secondStudentProf = secondStudent.querySelector("prof").textContent;


const jsObj = {
    list: [
        {name: firstStudentName, age: firstStudentAge, prof: firstStudentProf, lang: firstStudentLang},
        {name: secondStudent_name, age: secondStudentAge, prof: secondStudentProf, lang: secondStudentLang}
    ],
}

console.group("Задание 1")
console.log("строка XML: ", XML_STRING);
console.log("JavaScript объект на выходе: ", jsObj);
console.groupEnd();


// Задание 2
// так как эта переменная содержит только исходные данные и никак дальше не используется, то можно сделать её const
const JSON_STRING = `{
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

