import DependencyContainer from "../iocContainers/container.js";
import User from "../models/user.js";

const userService = DependencyContainer.addUserService();

console.log(userService.getAll());
userService.add(new User(7, 'Ayşe', 'Demircioglu', 'Ankara', 22));
userService.add(new User(10, 'Ahmet', 'Demircioglu', 'Ankara', 22));
userService.add(new User(11, 'Mehmet', 'Demircioglu', 'Ankara', 22));
userService.add(new User(12, 'Fatma', 'Demircioglu', 'Ankara', 22));
console.log(userService.getAll());
console.log(userService.getById(12))
console.log(userService.getById(13))
userService.delete(11)
userService.delete(12)
userService.update(new User(7, 'Kaan', 'Demircioglu', 'Ankara', 22))
console.log(userService.getAll());
