// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName (){};

    getId (){};

    getEmail (){};

    getRole (){};
};

const Tim = new Employee ("Tim", 1, "tim@gmail.com");

console.log(Tim);
module.exports = Employee;