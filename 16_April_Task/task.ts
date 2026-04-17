/**
 * ============================================================================
 * TypeScript Access Modifiers Exercise: Public, Private, Protected
 * ============================================================================
 *
 * This exercise demonstrates the three access modifiers in TypeScript:
 * - public: Accessible everywhere (class, subclass, outside class)
 * - private: Accessible only within the same class
 * - protected: Accessible within the class and subclasses (inherited classes)
 *
 * ============================================================================
 */

// ============================================================================
// SECTION 1: Basic Examples of Access Modifiers
// ============================================================================

/**
 * Example 1: Vehicle Class with Different Access Modifiers
 */
class Vehicle {
  // PUBLIC - Accessible from anywhere
  public brand: string;
  public model: string;

  // PRIVATE - Accessible only within this class
  private engineType: string;
  private vin: string; // Vehicle Identification Number

  // PROTECTED - Accessible in this class and inherited classes
  protected mileage: number;
  protected lastServiceDate: Date;

  constructor(brand: string, model: string, engineType: string, vin: string) {
    this.brand = brand;
    this.model = model;
    this.engineType = engineType;
    this.vin = vin;
    this.mileage = 0;
    this.lastServiceDate = new Date();
  }

  // PUBLIC METHOD - Accessible from anywhere
  public displayInfo(): string {
    return `${this.brand} ${this.model}`;
  }

  // PRIVATE METHOD - Accessible only within this class
  private getEngineSpecifications(): string {
    return `Engine: ${this.engineType}, VIN: ${this.vin}`;
  }

  // PROTECTED METHOD - Accessible in this class and inherited classes
  protected updateMileage(miles: number): void {
    this.mileage += miles;
  }

  // PUBLIC METHOD that uses PRIVATE data (works fine)
  public startEngine(): void {
    console.log(`Starting ${this.engineType} engine...`);
    // Can access private engineType within the class
  }

  // PUBLIC METHOD that calls PRIVATE method
  public getFullInfo(): string {
    // Can call private method within the class
    return `${this.displayInfo()} - ${this.getEngineSpecifications()}`;
  }

  // PUBLIC METHOD that accesses PROTECTED data
  public getMileage(): number {
    return this.mileage;
  }
}

console.log("\n=== SECTION 1: Vehicle Class Access Modifiers ===\n");

const myVehicle = new Vehicle("Toyota", "Camry", "V6", "12345XYZ");

// ✅ PUBLIC - Can access from outside
console.log("1. PUBLIC Access:");
console.log(`   Brand: ${myVehicle.brand}`);
console.log(`   Model: ${myVehicle.model}`);
console.log(`   Display: ${myVehicle.displayInfo()}`);

// ❌ PRIVATE - Cannot access from outside (TypeScript error)
// console.log(myVehicle.engineType); // ERROR: Property 'engineType' is private
// console.log(myVehicle.getEngineSpecifications()); // ERROR: Method is private

// ❌ PROTECTED - Cannot access from outside (TypeScript error)
// console.log(myVehicle.mileage); // ERROR: Property 'mileage' is protected
// console.log(myVehicle.updateMileage(100)); // ERROR: Method is protected

console.log("\n2. PRIVATE Access (via public method):");
console.log(`   Full Info: ${myVehicle.getFullInfo()}`);

console.log("\n3. PROTECTED Access (via public method):");
console.log(`   Mileage: ${myVehicle.getMileage()} miles`);

// ============================================================================
// SECTION 2: Inheritance - How PROTECTED Works with Subclasses
// ============================================================================

/**
 * Example 2: Car Class inherits from Vehicle
 * Demonstrates how PROTECTED is accessible in child classes
 */
class Car extends Vehicle {
  // New public properties specific to cars
  public numberOfDoors: number;

  constructor(
    brand: string,
    model: string,
    engineType: string,
    vin: string,
    numberOfDoors: number,
  ) {
    super(brand, model, engineType, vin);
    this.numberOfDoors = numberOfDoors;
  }

  // METHOD that uses PROTECTED properties from parent class
  public drive(distance: number): void {
    // ✅ Can access protected property from parent class
    this.updateMileage(distance);
    console.log(
      `Driving ${distance} miles. Total mileage: ${this.mileage} miles`,
    );
  }

  // METHOD that accesses PROTECTED property directly
  public getMaintenanceStatus(): string {
    // ✅ Can directly access protected property
    const dayssinceService = Math.floor(
      (new Date().getTime() - this.lastServiceDate.getTime()) /
        (1000 * 3600 * 24),
    );
    return `Last service: ${dayssinceService} days ago`;
  }

  // METHOD that tries to access PRIVATE properties (will fail)
  public tryAccessPrivate(): void {
    // ❌ Cannot access private properties from parent class
    // console.log(this.engineType); // ERROR: Property 'engineType' is private
    // console.log(this.vin); // ERROR: Property 'vin' is private
    console.log("Private properties are NOT accessible in child classes!");
  }
}

console.log("\n=== SECTION 2: Inheritance & PROTECTED Access ===\n");

const myCar = new Car("Honda", "Civic", "I4", "98765ABC", 4);

console.log("1. PUBLIC properties (inherited):");
console.log(`   Brand: ${myCar.brand}`);
console.log(`   Model: ${myCar.model}`);
console.log(`   Doors: ${myCar.numberOfDoors}`);

console.log("\n2. PROTECTED properties access via child class methods:");
myCar.drive(150);
console.log(`   ${myCar.getMaintenanceStatus()}`);

console.log("\n3. Attempting to access PRIVATE properties from child class:");
myCar.tryAccessPrivate();

// ============================================================================
// SECTION 3: What Happens with PROTECTED in Different Modules/Exports
// ============================================================================

/**
 * Example 3: Demonstrating Protected Behavior
 *
 * IMPORTANT: Protected members are ONLY accessible to:
 * 1. The class that defines them
 * 2. Classes that inherit from it (subclasses)
 *
 * Protected does NOT allow access from:
 * - Outside the class hierarchy
 * - Different classes (not in inheritance chain)
 * - Different modules/files (unless exported as part of a subclass)
 */

class Motorcycle extends Vehicle {
  public engineSize: number; // in cc

  constructor(
    brand: string,
    model: string,
    engineType: string,
    vin: string,
    engineSize: number,
  ) {
    super(brand, model, engineType, vin);
    this.engineSize = engineSize;
  }

  // ✅ Can access protected properties of parent class
  public performMaintenance(): void {
    this.lastServiceDate = new Date();
    console.log(`Motorcycle serviced. Mileage: ${this.mileage} miles`);
  }
}

console.log("\n=== SECTION 3: PROTECTED in Inheritance ===\n");

const myMotorcycle = new Motorcycle(
  "Harley-Davidson",
  "Street 750",
  "V2",
  "HD123",
  750,
);

console.log("1. Motorcycle can access PROTECTED properties:");
myMotorcycle.performMaintenance();

console.log("\n2. Trying to access PROTECTED directly from outside:");
// ❌ Cannot do this:
// console.log(myMotorcycle.mileage); // ERROR: Property 'mileage' is protected
// console.log(myMotorcycle.lastServiceDate); // ERROR: Property 'lastServiceDate' is protected
console.log(
  "   ❌ Cannot access protected properties directly from outside the class hierarchy",
);

// ============================================================================
// SECTION 4: Complex Example - Bank Account System
// ============================================================================

/**
 * Example 4: BankAccount class showing real-world usage of access modifiers
 */
class BankAccount {
  public accountNumber: string; // Public - visible to everyone
  public accountHolder: string; // Public - visible to everyone

  private balance: number; // Private - only the bank can see actual balance
  private pin: string; // Private - sensitive information
  private transactionHistory: string[] = []; // Private - internal tracking

  protected interestRate: number; // Protected - accessible to subclasses
  protected accountCreatedDate: Date; // Protected - accessible to subclasses

  constructor(
    accountNumber: string,
    accountHolder: string,
    initialBalance: number,
    pin: string,
  ) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
    this.pin = pin;
    this.interestRate = 0.02; // 2% interest
    this.accountCreatedDate = new Date();
    this.transactionHistory.push(
      `Account created with balance: $${initialBalance}`,
    );
  }

  // PUBLIC - Anyone can check balance (with PIN verification)
  public checkBalance(enteredPin: string): number | string {
    if (!this.verifyPin(enteredPin)) {
      return "❌ Incorrect PIN!";
    }
    return this.balance;
  }

  // PUBLIC - Anyone can withdraw (with PIN verification)
  public withdraw(amount: number, enteredPin: string): string {
    if (!this.verifyPin(enteredPin)) {
      return "❌ Incorrect PIN!";
    }
    if (amount > this.balance) {
      return "❌ Insufficient funds!";
    }
    this.balance -= amount;
    this.transactionHistory.push(`Withdrawal: -$${amount}`);
    return `✅ Withdrew $${amount}. New balance: $${this.balance}`;
  }

  // PUBLIC - Anyone can deposit
  public deposit(amount: number): string {
    this.balance += amount;
    this.transactionHistory.push(`Deposit: +$${amount}`);
    return `✅ Deposited $${amount}. New balance: $${this.balance}`;
  }

  // PRIVATE - Only the bank can verify PIN
  private verifyPin(enteredPin: string): boolean {
    return enteredPin === this.pin;
  }

  // PRIVATE - Only the bank can access transaction history
  private getTransactionHistory(): string[] {
    return this.transactionHistory;
  }

  // PUBLIC - Can get limited transaction info (after PIN verification)
  public getRecentTransactions(
    enteredPin: string,
    count: number = 5,
  ): string[] | string {
    if (!this.verifyPin(enteredPin)) {
      return "❌ Incorrect PIN!";
    }
    return this.transactionHistory.slice(-count);
  }
}

/**
 * Example 5: SavingsAccount inherits from BankAccount
 * Shows how PROTECTED properties are used in subclasses
 */
class SavingsAccount extends BankAccount {
  private minimumBalance: number;

  constructor(
    accountNumber: string,
    accountHolder: string,
    initialBalance: number,
    pin: string,
  ) {
    super(accountNumber, accountHolder, initialBalance, pin);
    this.minimumBalance = 100; // Must maintain $100 minimum
  }

  // ✅ Can access PROTECTED properties from parent
  public applyMonthlyInterest(): void {
    // Using protected property 'interestRate' from parent class
    const interest = 0; // Would be calculated using this.interestRate
    console.log(
      `Interest applied at rate: ${(this.interestRate * 100).toFixed(1)}% (Account created: ${this.accountCreatedDate.toLocaleDateString()})`,
    );
  }

  // ❌ Cannot access PRIVATE properties from parent
  public tryAccessPrivate(): void {
    // console.log(this.balance); // ERROR: Property 'balance' is private
    // console.log(this.pin); // ERROR: Property 'pin' is private
    // console.log(this.transactionHistory); // ERROR: Property 'transactionHistory' is private
    console.log(
      "Cannot access PRIVATE properties from parent class in subclass!",
    );
  }
}

console.log("\n=== SECTION 4: Real-World Example - Bank Account ===\n");

const myAccount = new BankAccount("ACC123456", "John Doe", 1000, "1234");

console.log("1. PUBLIC properties:");
console.log(`   Account Number: ${myAccount.accountNumber}`);
console.log(`   Account Holder: ${myAccount.accountHolder}`);

console.log("\n2. PUBLIC methods with PRIVATE data access:");
console.log(`   Balance (correct PIN): ${myAccount.checkBalance("1234")}`);
console.log(`   Balance (wrong PIN): ${myAccount.checkBalance("0000")}`);

console.log("\n3. Transactions:");
console.log(`   ${myAccount.deposit(500)}`);
console.log(`   ${myAccount.withdraw(200, "1234")}`);
console.log(
  `   Recent transactions:\n`,
  myAccount.getRecentTransactions("1234", 3),
);

console.log("\n4. SavingsAccount with PROTECTED access:");
const savingsAccount = new SavingsAccount(
  "SAV789012",
  "Jane Doe",
  5000,
  "5678",
);
savingsAccount.applyMonthlyInterest();
savingsAccount.tryAccessPrivate();

// ============================================================================
// SECTION 5: Summary Table and Key Takeaways
// ============================================================================

console.log("\n=== SECTION 5: Access Modifiers Summary Table ===\n");

const summaryTable = `
┌─────────────┬──────────────┬────────────────┬──────────────────┐
│ Modifier    │ Same Class   │ Subclass       │ Outside Class    │
├─────────────┼──────────────┼────────────────┼──────────────────┤
│ public      │ ✅ Yes       │ ✅ Yes         │ ✅ Yes           │
│ protected   │ ✅ Yes       │ ✅ Yes         │ ❌ No            │
│ private     │ ✅ Yes       │ ❌ No          │ ❌ No            │
└─────────────┴──────────────┴────────────────┴──────────────────┘
`;

console.log(summaryTable);

console.log("\n=== KEY TAKEAWAYS ===\n");

console.log(`
1. PUBLIC (Default):
   - Accessible everywhere
   - No restrictions
   - Use for API contracts and external interfaces
   - Example: brand, model in Vehicle class

2. PRIVATE:
   - Accessible ONLY within the same class
   - NOT accessible in subclasses
   - NOT accessible from outside the class
   - Use for sensitive data and internal implementation
   - Example: pin, balance in BankAccount class

3. PROTECTED:
   - Accessible within the class AND its subclasses
   - NOT accessible from outside the class hierarchy
   - Great for sharing internal data with child classes
   - NOT accessible from different modules unless exported via subclass
   - Example: mileage, interestRate in Vehicle/BankAccount classes

4. PROTECTED ACROSS DIFFERENT FILES/MODULES:
   - Protected members are PART OF THE CLASS DEFINITION
   - When you export a class, protected members are available to:
     ✅ Subclasses in the same file
     ✅ Subclasses in different files (if they import and extend the class)
     ❌ Unrelated classes in different files
   - Protected provides better encapsulation than public
   - Protected provides more flexibility than private
`);

console.log("\n=== END OF EXERCISE ===\n");
