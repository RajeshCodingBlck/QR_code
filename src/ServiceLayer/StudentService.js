const StudentRepo= require("../RepositoryLayer/Student");

class student{

    constructor(name, password){
        this.name=name;
        this.password=password;
    }

}

class studentService{

    constructor(){
      this.StudentRepo= new StudentRepo();
    }
    
   async addStudent(student){
    console.log("Service Layer");
        await this.StudentRepo.addStudent(student);
    }

    async getAllStudent(){

       await  this.StudentRepo.getAllstudent();
    }

    

}


module.exports= {
    student,
    studentService  
}
