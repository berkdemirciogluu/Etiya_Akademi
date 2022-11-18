import DependencyContainer from "../iocContainers/container.js";
import Customer from "../models/customer.js";

const service = DependencyContainer.addCustomerService();

console.log(service.getAll());
service.add(new Customer(7, 'Ayşe', 'Demircioglu', 'Ankara', 22,"12345"));
service.add(new Customer(10, 'Ahmet', 'Demircioglu', 'Ankara', 22, "12345"));
service.add(new Customer(11, 'Mehmet', 'Demircioglu', 'Ankara', 22, "12345"));
service.add(new Customer(12, 'Fatma', 'Demircioglu', 'Ankara', 22, "12345"));
console.log(service.getAll());
console.log(service.getById(12))
console.log(service.getById(13))
service.delete(11)
service.delete(12)
service.update(new Customer(7, 'Kaan', 'Demircioglu', 'Ankara', 22, "12345"))
console.log(service.getAll());