var students = ["ishal","hirra","safa","rafia"];
let searchstudents = students.find(findishal)
 students.splice(0,1,... ["zahid", "anwar",]);
console.log(searchstudents);
function findishal(std){
   if(std == "ishal") return true;
    else return false;
 } 

/*var students = ["ishal","hirra","safa","rafia"];
//student[5] = "mariyam";
students.sort();
students.splice(0,1,... ["zahid", "anwar",]);
console.log(...students);
function findishal(std){
 if(std == "ishal") return true;
 else return false;
}*/