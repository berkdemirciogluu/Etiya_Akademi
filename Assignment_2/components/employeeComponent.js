import DependencyContainer from "../iocContainers/container.js";
import Employee from "../models/employee.js";

const service = DependencyContainer.addEmployeeService();

console.log(service.getAll());
service.add(new Employee(7, 'Ayşe', 'Demircioglu', 'Ankara', 22, 4000));
service.add(new Employee(10, 'Ahmet', 'Demircioglu', 'Ankara', 22, 4000));
service.add(new Employee(11, 'Mehmet', 'Demircioglu', 'Ankara', 22, 4000));
service.add(new Employee(12, 'Fatma', 'Demircioglu', 'Ankara', 22, 4000));
console.log(service.getAll());
console.log(service.getById(12))
console.log(service.getById(13))
service.delete(11)
service.delete(12)
service.update(new Employee(7, 'Kaan', 'Demircioglu', 'Ankara', 22, 4000))
console.log(service.getAll());
