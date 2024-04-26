

// class student{

//     constructor(name, Branch, rollnumber){
//         this.name=name;
//         this.Branch=Branch;
//         this.rollnumber=rollnumber;
//     }

//     addStudent(student){
//         console.log("student is added");
//         arr.add(student);
//     }

//    removeStudent(){

//        arr.indexOf
//    }


// }

class StudentRepo{

    constructor(){

        this.arr=[];
    }
   
    addStudent(student){
       console.log("Repo Layer");
        this.arr.push(student);
        console.log(this.getAllstudent());
    }

    getAllstudent(){
        return this.arr;
    }

    


}

module.exports=StudentRepo;

