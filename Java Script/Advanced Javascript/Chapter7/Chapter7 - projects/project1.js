//Employee tracking app

class Employee {
    constructor(firstName, lastName, years) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.years = years;
    }


}

let em1 = new Employee("john", "Smith", 45);
let em2 = new Employee("james", "small", 45);
let ems = [em1, em2];
// console.log(ems);

Employee.prototype.details = function() {
    return this.firstName + " " + this.lastName + " has worked at the company for " + this.years + " years";
}

ems.forEach((Employee) => {

    console.log(Employee.details());

});










