
import {Employee,cadre,tax,benefits,bonus,reimbursement} from "./employee.js";

function getEmployeeInformation(inputSalary) {
    Employee.salary = inputSalary;
    console.log('Cadre: ' + cadre());
    console.log('Tax: ' + tax());
    console.log('Benefits: ' + benefits());
    console.log('Bonus: ' + bonus());
    console.log('Reimbursement Eligibility: ' + reimbursement() + '\n');
  }
  
  getEmployeeInformation(500);
  getEmployeeInformation(54000);
  getEmployeeInformation(120000);