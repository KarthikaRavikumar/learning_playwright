Extending Interfaces for Inheritance in TypeScript

1. Basic Interface Extension
typescript// Base interface
interface Animal {
  name: string;
  age: number;
}

// Extended interface — inherits name & age
interface Dog extends Animal {
  breed: string;
  bark(): void;
}

const dog: Dog = {
  name: "Rex",
  age: 3,
  breed: "Labrador",
  bark() {
    console.log("Woof!");
  }
};

2. Single Inheritance
typescript// Base
interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

// Extends Person
interface Employee extends Person {
  employeeId: string;
  department: string;
  salary: number;
  joiningDate: Date;
}

// Extends Employee further
interface Manager extends Employee {
  teamSize: number;
  managedDepartments: string[];
  approve(requestId: string): boolean;
}

// Usage
const manager: Manager = {
  // From Person
  id: 1,
  firstName: "Alice",
  lastName: "Smith",
  email: "alice@company.com",

  // From Employee
  employeeId: "EMP-101",
  department: "Engineering",
  salary: 90000,
  joiningDate: new Date("2020-01-15"),

  // From Manager
  teamSize: 10,
  managedDepartments: ["Frontend", "Backend"],
  approve(requestId) {
    console.log(`Approved: ${requestId}`);
    return true;
  }
};

3. Multiple Interface Extension
A single interface can extend multiple interfaces at once:
typescriptinterface Flyable {
  fly(): void;
  altitude: number;
}

interface Swimmable {
  swim(): void;
  depth: number;
}

interface Walkable {
  walk(): void;
  speed: number;
}

// Extends all three
interface Duck extends Flyable, Swimmable, Walkable {
  name: string;
  quack(): void;
}

const duck: Duck = {
  name: "Donald",
  altitude: 100,
  depth: 5,
  speed: 10,
  fly()   { console.log("Flying!"); },
  swim()  { console.log("Swimming!"); },
  walk()  { console.log("Walking!"); },
  quack() { console.log("Quack!"); }
};

4. Real-World User Hierarchy
typescript// ─── Level 1: Base ───────────────────────────────
interface BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

// ─── Level 2: User ───────────────────────────────
interface User extends BaseEntity {
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
}

// ─── Level 3: Roles ──────────────────────────────
interface Customer extends User {
  loyaltyPoints: number;
  subscription: "free" | "basic" | "premium";
  orders: string[];
}

interface Staff extends User {
  employeeId: string;
  department: string;
  salary: number;
}

// ─── Level 4: Specializations ────────────────────
interface Admin extends Staff {
  accessLevel: 1 | 2 | 3;
  canDeleteUsers: boolean;
  canManageRoles: boolean;
}

interface SupportAgent extends Staff {
  ticketsResolved: number;
  rating: number;
  assignTicket(ticketId: string): void;
}

// Usage
const admin: Admin = {
  // BaseEntity
  id: 1,
  createdAt: new Date(),
  updatedAt: new Date(),

  // User
  firstName: "Alice",
  lastName: "Smith",
  email: "alice@company.com",
  isActive: true,

  // Staff
  employeeId: "EMP-001",
  department: "IT",
  salary: 95000,

  // Admin
  accessLevel: 3,
  canDeleteUsers: true,
  canManageRoles: true
};

5. Extending with Optional Properties
typescriptinterface Vehicle {
  make: string;
  model: string;
  year: number;
}

interface Car extends Vehicle {
  doors: number;
  fuelType: "petrol" | "diesel" | "electric";
  trunkCapacity?: number;     // optional
}

interface ElectricCar extends Car {
  batteryCapacity: number;    // kWh
  chargingTime: number;       // hours
  range: number;              // km
  chargingPort?: string;      // optional
}

const tesla: ElectricCar = {
  make: "Tesla",
  model: "Model 3",
  year: 2023,
  doors: 4,
  fuelType: "electric",
  batteryCapacity: 82,
  chargingTime: 8,
  range: 560
};

6. Extending with Method Overriding (Signature Change)
typescriptinterface Logger {
  log(message: string): void;
}

interface AdvancedLogger extends Logger {
  log(message: string, level?: "info" | "warn" | "error"): void;  // extended signature
  logToFile(message: string, filePath: string): void;
  clearLogs(): void;
}

class AppLogger implements AdvancedLogger {
  log(message: string, level: "info" | "warn" | "error" = "info") {
    console.log(`[${level.toUpperCase()}] ${message}`);
  }

  logToFile(message: string, filePath: string) {
    console.log(`Writing "${message}" to ${filePath}`);
  }

  clearLogs() {
    console.log("Logs cleared.");
  }
}

const logger = new AppLogger();
logger.log("Server started");              // [INFO] Server started
logger.log("Low memory", "warn");         // [WARN] Low memory
logger.log("Crash!", "error");            // [ERROR] Crash!

7. Interface Extension with Generics
typescript// Generic base response
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// Extended with pagination
interface PaginatedResponse<T> extends ApiResponse<T[]> {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

// Extended with error info
interface ErrorResponse extends ApiResponse<null> {
  errorCode: string;
  errors: string[];
}

// Usage
const userList: PaginatedResponse<User> = {
  success: true,
  message: "Users fetched",
  data: [],           // User[]
  page: 1,
  pageSize: 10,
  total: 100,
  totalPages: 10
};

const errorRes: ErrorResponse = {
  success: false,
  message: "Validation failed",
  data: null,
  errorCode: "VALIDATION_ERR",
  errors: ["Email is required", "Password too short"]
};

8. Merging Interfaces (Declaration Merging)
TypeScript automatically merges interfaces with the same name:
typescriptinterface Config {
  host: string;
  port: number;
}

// Same name — gets MERGED automatically
interface Config {
  timeout: number;
  retries: number;
}

// Final Config has all 4 properties
const config: Config = {
  host: "localhost",
  port: 3000,
  timeout: 5000,
  retries: 3
};

Summary
Single Extension      →  interface B extends A { }
Multiple Extension    →  interface D extends A, B, C { }
Multi-level Chain     →  Base → User → Staff → Admin
Declaration Merging   →  Same interface name = auto merged
Generic Extension     →  interface Paginated<T> extends Response<T[]>
FeatureSyntaxSingle extendinterface B extends AMultiple extendinterface D extends A, B, COptional in extendedproperty?: typeReadonly in extendedreadonly property: typeGeneric extensioninterface B<T> extends A<T>Declaration mergingSame interface name declared twice