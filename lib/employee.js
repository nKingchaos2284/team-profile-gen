class Employee {
  constructor(name, id, email){
      this.name = name;
      this.id = id;
      this.email = email;
      this.class = "Employee";
  }
  getName(){
      return this.name;
  }
  getId(){
      return this.id;
  }
  getEmail(){
      return this.email;
  }
  getRole(){
      return this.class;
  }
}

module.exports = Employee;

// name
// id
// email 
// getName()
// getId()
// getEmail()
// getRole() "Returns Employee"