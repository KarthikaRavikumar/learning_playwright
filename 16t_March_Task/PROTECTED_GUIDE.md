# TypeScript Access Modifiers: Protected in Different Files/Exports

## Overview

This document explains what happens when you use `protected` members across different files and modules in TypeScript.

---

## Key Concept: Protected Scope

### Definition

**Protected** members are accessible **within the class and its subclasses**, but **NOT accessible from outside the class hierarchy**.

### The Critical Rule

```
Protected members are BOUND to the CLASS HIERARCHY, NOT to the file or module!
```

---

## Scenario 1: Protected in Same File (Already Works)

```typescript
// File: vehicle.ts

class Vehicle {
  protected mileage: number = 0;

  protected updateMileage(miles: number): void {
    this.mileage += miles;
  }
}

class Car extends Vehicle {
  public drive(distance: number): void {
    this.updateMileage(distance); // ✅ Works - Car is subclass of Vehicle
    console.log(this.mileage); // ✅ Works - accessing protected in subclass
  }
}

const car = new Car();
// car.mileage; // ❌ ERROR - Cannot access from outside
// car.updateMileage(10); // ❌ ERROR - Cannot access from outside
```

---

## Scenario 2: Protected in Different File - Direct Import

### File 1: `base.ts`

```typescript
export class Animal {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  protected sleep(): void {
    console.log(`${this.name} is sleeping...`);
  }
}
```

### File 2: `dog.ts`

```typescript
import { Animal } from "./base";

export class Dog extends Animal {
  public bark(): void {
    console.log(`${this.name} is barking!`); // ✅ Can access protected 'name'
    this.sleep(); // ✅ Can access protected method 'sleep'
  }
}
```

### File 3: `main.ts`

```typescript
import { Animal } from "./base";
import { Dog } from "./dog";

const dog = new Dog("Buddy", 3);
dog.bark(); // ✅ Works

// dog.name; // ❌ ERROR: Property 'name' is protected
// dog.sleep(); // ❌ ERROR: Property 'sleep' is protected and cannot be accessed from outside the class
```

### Result

✅ **Protected works across files when you have inheritance**

- `Dog` can access `Animal`'s protected members
- Outside code cannot access them directly

---

## Scenario 3: Protected - What Happens When NOT in Inheritance Chain

### File 1: `vehicle.ts`

```typescript
export class Vehicle {
  protected mileage: number = 0;

  protected updateMileage(miles: number): void {
    this.mileage += miles;
  }
}
```

### File 2: `unrelated.ts`

```typescript
import { Vehicle } from "./vehicle";

export class UnrelatedClass {
  public someMethod(vehicle: Vehicle): void {
    // vehicle.mileage; // ❌ ERROR: Property 'mileage' is protected
    // vehicle.updateMileage(100); // ❌ ERROR: Cannot access from outside
  }
}
```

### Result

❌ **Cannot access protected members from unrelated classes**

- Even though both are in different files
- Even though both can be imported
- Protected access is tied to class hierarchy, not modules

---

## Scenario 4: Exporting Protected Members (Via Public Methods)

### Best Practice Approach

#### File 1: `account.ts`

```typescript
export class BankAccount {
  private balance: number;
  protected interestRate: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
    this.interestRate = 0.02;
  }

  // ✅ Public interface to access protected data
  public getInterestRate(): number {
    return this.interestRate;
  }

  protected applyInterest(): void {
    this.balance *= 1 + this.interestRate;
  }
}
```

#### File 2: `savings-account.ts`

```typescript
import { BankAccount } from "./account";

export class SavingsAccount extends BankAccount {
  public applyMonthlyInterest(): void {
    this.applyInterest(); // ✅ Can access protected method
  }

  public showInterestRate(): number {
    return this.interestRate; // ✅ Can access protected property
  }
}
```

#### File 3: `main.ts`

```typescript
import { BankAccount } from "./account";
import { SavingsAccount } from "./savings-account";

const account = new BankAccount(1000);
console.log(account.getInterestRate()); // ✅ Works - public method

const savings = new SavingsAccount(5000);
console.log(savings.showInterestRate()); // ✅ Works - public method in subclass
```

### Result

✅ **Export protected data through public methods**

- Protected remains protected
- Controlled access from outside
- Clear API contract

---

## Scenario 5: Protected Property with No Getter/Setter

What if you need to use a protected property from a different file but the parent class doesn't expose it?

### File 1: `base.ts`

```typescript
export class Base {
  protected config: object = {};
}
```

### File 2: `child.ts`

```typescript
import { Base } from "./base";

export class Child extends Base {
  // Option 1: Create a public getter ✅
  public getConfig(): object {
    return this.config;
  }

  // Option 2: Create a public setter ✅
  public updateConfig(newConfig: object): void {
    this.config = newConfig;
  }
}
```

### Result

✅ **Create public accessors for protected properties**

- Maintain encapsulation
- Provide controlled access
- Allow flexibility in implementation

---

## Summary Table: Protected Access Rules

| Scenario                        | Can Access | Why                                                            |
| ------------------------------- | ---------- | -------------------------------------------------------------- |
| Same class, same file           | ✅ Yes     | Definition site                                                |
| Subclass, same file             | ✅ Yes     | Is in inheritance chain                                        |
| Subclass, different file        | ✅ Yes     | Is in inheritance chain (inheritance doesn't care about files) |
| Unrelated class, same file      | ❌ No      | Not in inheritance chain                                       |
| Unrelated class, different file | ❌ No      | Not in inheritance chain                                       |
| Exported public method          | ✅ Yes     | Method is public, not protected                                |

---

## Best Practices

### 1. Use Protected for Class Hierarchies

```typescript
// ✅ Good
class Database {
  protected connection: Connection;
  protected query(sql: string) {}
}

class MysqlDatabase extends Database {
  // Can use protected members
}
```

### 2. Export via Public Methods

```typescript
// ✅ Good
class MyClass {
  protected data: string;

  public getData(): string {
    return this.data;
  }
}
```

### 3. Don't Try to Access Protected from Outside

```typescript
// ❌ Bad
class MyClass {
  protected secret: string;
}

const obj = new MyClass();
// obj.secret; // ERROR!
```

### 4. For Sharing with Unrelated Classes, Use Public

```typescript
// ✅ Good - if multiple unrelated classes need access
class Config {
  public setting: string;
}

// ❌ Wrong - trying to use protected for unrelated classes
class Config {
  protected setting: string; // Won't work!
}
```

---

## Real-World Example: Plugin Architecture

```typescript
// framework.ts
export abstract class PluginBase {
  protected logger: Logger;
  protected config: PluginConfig;

  constructor(config: PluginConfig) {
    this.config = config;
    this.logger = new Logger();
  }

  protected log(message: string): void {
    this.logger.info(message);
  }

  abstract initialize(): void;
}

// my-plugin.ts
import { PluginBase } from "./framework";

export class MyPlugin extends PluginBase {
  initialize(): void {
    this.log("Plugin initialized"); // ✅ Can use protected
    console.log(this.config); // ✅ Can use protected
  }
}

// main.ts
import { MyPlugin } from "./my-plugin";

const plugin = new MyPlugin({
  /* ... */
});
// plugin.log('test'); // ❌ ERROR - protected
// plugin.logger.info('test'); // ❌ ERROR - protected
plugin.initialize(); // ✅ OK - public method
```

---

## Key Takeaway

**Protected is NOT about modules or files - it's about class inheritance!**

- Protected members are accessible in the **inheritance chain**
- Protected members are NOT accessible outside the **class hierarchy**
- Use public methods to expose protected functionality across modules
- Protected provides better encapsulation than public for internal implementation
- Protected allows flexibility for subclasses to customize behavior

---

## Visual Diagram

```
┌─────────────────────────────────────────────────────────┐
│         CLASS HIERARCHY (Protected Scope)               │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────────────┐                              │
│  │   Parent Class       │                              │
│  │  protected member    │◄─── Access only within      │
│  │  private member      │     inheritance chain       │
│  └──────────────────────┘                              │
│           △                                             │
│           │                                             │
│           │ (extends)                                  │
│           │                                             │
│  ┌──────────────────────┐                              │
│  │   Child Class        │                              │
│  │  ✅ Can access       │                              │
│  │     protected member │                              │
│  │  ❌ Cannot access    │                              │
│  │     private member   │                              │
│  └──────────────────────┘                              │
│                                                          │
└─────────────────────────────────────────────────────────┘
         ▼
   [Outside Code]
   ❌ Cannot access protected
   ❌ Cannot access private
   ✅ Can access public
```

---

## Testing Protected Behavior

You can verify this behavior by running the `task.ts` file:

```bash
# Compile
tsc task.ts --ignoreConfig --target ES2020 --outDir ./output

# Run
node output/task.js
```

The output shows all the examples and demonstrates that:

1. Protected works with subclasses ✅
2. Protected fails when accessed from outside ❌
3. Protected respects class hierarchy, not file boundaries ✅
