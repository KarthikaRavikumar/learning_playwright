Implement interfaces in classes

1. Basic Implementation
   typescriptinterface Greetable {
   name: string;
   greet(): string;
   }

class Person implements Greetable {
name: string;

constructor(name: string) {
this.name = name;
}

greet(): string {
return `Hello, my name is ${this.name}`;
}
}

const p = new Person("Alice");
console.log(p.greet()); // Hello, my name is Alice

2. Implementing Multiple Interfaces
   typescriptinterface Printable {
   print(): void;
   }

interface Saveable {
save(): void;
}

interface Deletable {
delete(): void;
}

// Class implements all three interfaces
class Document implements Printable, Saveable, Deletable {
constructor(private title: string, private content: string) {}

print(): void {
console.log(`Printing: ${this.title}`);
console.log(`Content : ${this.content}`);
}

save(): void {
console.log(`Saving "${this.title}" to database...`);
}

delete(): void {
console.log(`Deleting "${this.title}"...`);
}
}

const doc = new Document("Report", "Q4 earnings summary");
doc.print(); // Printing: Report
doc.save(); // Saving "Report" to database...
doc.delete(); // Deleting "Report"...

3. Interface with Access Modifiers in Class
   typescriptinterface BankAccountInterface {
   owner: string;
   deposit(amount: number): void;
   withdraw(amount: number): void;
   getBalance(): number;
   }

class BankAccount implements BankAccountInterface {
owner: string;
private balance: number; // private — not in interface
private transactions: number[]; // extra class property

constructor(owner: string, initialBalance: number) {
this.owner = owner;
this.balance = initialBalance;
this.transactions = [];
}

deposit(amount: number): void {
if (amount <= 0) throw new Error("Amount must be positive");
this.balance += amount;
this.transactions.push(amount);
console.log(`Deposited $${amount}. Balance: $${this.balance}`);
}

withdraw(amount: number): void {
if (amount > this.balance) throw new Error("Insufficient funds");
this.balance -= amount;
this.transactions.push(-amount);
console.log(`Withdrew $${amount}. Balance: $${this.balance}`);
}

getBalance(): number {
return this.balance;
}

// Extra method not in interface
getTransactionHistory(): number[] {
return this.transactions;
}
}

const account = new BankAccount("Alice", 1000);
account.deposit(500); // Deposited $500. Balance: $1500
account.withdraw(200); // Withdrew $200. Balance: $1300
console.log(account.getBalance()); // 1300

4. Real-World: Shape Classes
   typescriptinterface Shape {
   color: string;
   area(): number;
   perimeter(): number;
   describe(): string;
   }

class Circle implements Shape {
color: string;

constructor(color: string, private radius: number) {
this.color = color;
}

area(): number {
return Math.PI \* this.radius \*\* 2;
}

perimeter(): number {
return 2 _ Math.PI _ this.radius;
}

describe(): string {
return `${this.color} Circle | Area: ${this.area().toFixed(2)} | Perimeter: ${this.perimeter().toFixed(2)}`;
}
}

class Rectangle implements Shape {
color: string;

constructor(
color: string,
private width: number,
private height: number
) {
this.color = color;
}

area(): number {
return this.width \* this.height;
}

perimeter(): number {
return 2 \* (this.width + this.height);
}

describe(): string {
return `${this.color} Rectangle | Area: ${this.area()} | Perimeter: ${this.perimeter()}`;
}
}

class Triangle implements Shape {
color: string;

constructor(
color: string,
private base: number,
private height: number,
private sideA: number,
private sideB: number
) {
this.color = color;
}

area(): number {
return 0.5 _ this.base _ this.height;
}

perimeter(): number {
return this.base + this.sideA + this.sideB;
}

describe(): string {
return `${this.color} Triangle | Area: ${this.area()} | Perimeter: ${this.perimeter()}`;
}
}

// Polymorphism — same interface, different behavior
const shapes: Shape[] = [
new Circle("Red", 5),
new Rectangle("Blue", 4, 6),
new Triangle("Green", 3, 4, 5, 6)
];

shapes.forEach(shape => console.log(shape.describe()));

// Red Circle | Area: 78.54 | Perimeter: 31.42
// Blue Rectangle| Area: 24 | Perimeter: 20
// Green Triangle| Area: 6 | Perimeter: 14

5. Interface + Class Inheritance Together
   typescript// Interfaces
   interface Authenticatable {
   login(email: string, password: string): boolean;
   logout(): void;
   }

interface Authorizable {
hasPermission(permission: string): boolean;
grantPermission(permission: string): void;
revokePermission(permission: string): void;
}

// Base class
class BaseUser {
constructor(
public id: number,
public name: string,
public email: string
) {}

getInfo(): string {
return `[${this.id}] ${this.name} (${this.email})`;
}
}

// Extended class implementing interfaces
class AdminUser extends BaseUser implements Authenticatable, Authorizable {
private permissions: Set<string> = new Set();
private isLoggedIn: boolean = false;

constructor(id: number, name: string, email: string) {
super(id, name, email);
// Default admin permissions
this.permissions.add("read");
this.permissions.add("write");
this.permissions.add("delete");
}

// Authenticatable
login(email: string, password: string): boolean {
if (email === this.email && password === "admin123") {
this.isLoggedIn = true;
console.log(`${this.name} logged in.`);
return true;
}
console.log("Invalid credentials.");
return false;
}

logout(): void {
this.isLoggedIn = false;
console.log(`${this.name} logged out.`);
}

// Authorizable
hasPermission(permission: string): boolean {
return this.permissions.has(permission);
}

grantPermission(permission: string): void {
this.permissions.add(permission);
console.log(`Granted "${permission}" to ${this.name}`);
}

revokePermission(permission: string): void {
this.permissions.delete(permission);
console.log(`Revoked "${permission}" from ${this.name}`);
}
}

const admin = new AdminUser(1, "Alice", "alice@company.com");
admin.login("alice@company.com", "admin123"); // Alice logged in.
console.log(admin.hasPermission("delete")); // true
admin.revokePermission("delete"); // Revoked "delete"
console.log(admin.hasPermission("delete")); // false
admin.grantPermission("superAdmin"); // Granted "superAdmin"
admin.logout(); // Alice logged out.

6. Generic Interface in Class
   typescriptinterface Repository<T> {
   findById(id: number): T | undefined;
   findAll(): T[];
   create(item: T): T;
   update(id: number, item: Partial<T>): T | undefined;
   delete(id: number): boolean;
   }

interface User {
id: number;
name: string;
email: string;
}

class UserRepository implements Repository<User> {
private users: User[] = [];

findById(id: number): User | undefined {
return this.users.find(u => u.id === id);
}

findAll(): User[] {
return this.users;
}

create(user: User): User {
this.users.push(user);
console.log(`Created user: ${user.name}`);
return user;
}

update(id: number, changes: Partial<User>): User | undefined {
const index = this.users.findIndex(u => u.id === id);
if (index === -1) return undefined;
this.users[index] = { ...this.users[index], ...changes };
return this.users[index];
}

delete(id: number): boolean {
const index = this.users.findIndex(u => u.id === id);
if (index === -1) return false;
this.users.splice(index, 1);
return true;
}
}

// Usage
const repo = new UserRepository();
repo.create({ id: 1, name: "Alice", email: "alice@example.com" });
repo.create({ id: 2, name: "Bob", email: "bob@example.com" });

console.log(repo.findAll());
console.log(repo.findById(1));

repo.update(1, { name: "Alice Updated" });
console.log(repo.findById(1));

repo.delete(2);
console.log(repo.findAll());

7. Abstract Class vs Interface in Class
   typescriptinterface Drawable {
   draw(): void;
   }

// Abstract class — partial implementation
abstract class UIComponent implements Drawable {
constructor(protected id: string, protected visible: boolean = true) {}

// Concrete method — shared by all
toggle(): void {
this.visible = !this.visible;
console.log(`${this.id} is now ${this.visible ? "visible" : "hidden"}`);
}

// Abstract — must be implemented by subclass
abstract draw(): void;
}

class Button extends UIComponent {
constructor(id: string, private label: string) {
super(id);
}

draw(): void {
console.log(`[Button#${this.id}] "${this.label}" — visible: ${this.visible}`);
}
}

class TextInput extends UIComponent {
constructor(id: string, private placeholder: string) {
super(id);
}

draw(): void {
console.log(`[Input#${this.id}] placeholder: "${this.placeholder}" — visible: ${this.visible}`);
}
}

const btn = new Button("btn-1", "Submit");
const input = new TextInput("inp-1", "Enter email...");

btn.draw(); // [Button#btn-1] "Submit" — visible: true
input.draw(); // [Input#inp-1] placeholder: "Enter email..." — visible: true

btn.toggle(); // btn-1 is now hidden
btn.draw(); // [Button#btn-1] "Submit" — visible: false

Summary
interface → defines WHAT a class must do
class → defines HOW it does it
implements → links a class to an interface contract
ConceptSyntaxSingle interfaceclass A implements IMultiple interfacesclass A implements I1, I2, I3Class + inheritanceclass B extends A implements IGeneric interfaceclass Repo implements Repository<User>Abstract + interfaceabstract class A implements I
