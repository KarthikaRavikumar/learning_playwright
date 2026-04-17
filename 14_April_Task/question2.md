Create interfaces with optional properties

Interfaces with Optional Properties in TypeScript
Optional properties are marked with ? — they may or may not be present in the object.

1. Basic Optional Properties
   typescriptinterface User {
   id: number; // required
   username: string; // required
   email: string; // required
   phone?: string; // optional
   avatar?: string; // optional
   bio?: string; // optional
   }

// ✅ Valid — only required fields
const user1: User = {
id: 1,
username: "alice",
email: "alice@example.com"
};

// ✅ Valid — with some optional fields
const user2: User = {
id: 2,
username: "bob",
email: "bob@example.com",
phone: "+1234567890",
bio: "Hello, I'm Bob!"
};

2. User Profile with Optional Properties
   typescriptinterface Address {
   street: string;
   city: string;
   state?: string; // optional
   country: string;
   zipCode?: string; // optional
   }

interface SocialLinks {
twitter?: string;
linkedin?: string;
github?: string;
instagram?: string;
website?: string;
}

interface UserProfile {
// Required
id: number;
firstName: string;
lastName: string;
email: string;

// Optional
middleName?: string;
dateOfBirth?: Date;
phone?: string;
avatar?: string;
bio?: string;
address?: Address; // entire nested object optional
socialLinks?: SocialLinks;
}

// Minimal valid object
const minimalUser: UserProfile = {
id: 1,
firstName: "Alice",
lastName: "Smith",
email: "alice@example.com"
};

// Full valid object
const fullUser: UserProfile = {
id: 2,
firstName: "Bob",
middleName: "James",
lastName: "Brown",
email: "bob@example.com",
phone: "+9876543210",
bio: "Software Developer",
address: {
street: "123 Main St",
city: "New York",
country: "USA",
zipCode: "10001"
},
socialLinks: {
github: "https://github.com/bob",
linkedin: "https://linkedin.com/in/bob"
}
};

3. Accessing Optional Properties Safely
   typescriptinterface Product {
   id: number;
   name: string;
   price: number;
   discount?: number;
   description?: string;
   tags?: string[];
   }

const product: Product = {
id: 101,
name: "Laptop",
price: 1200
};

// ✅ Optional chaining — safe access
console.log(product.discount); // undefined (no error)
console.log(product.tags?.length); // undefined (no error)

// ✅ Nullish coalescing — default fallback
const discount = product.discount ?? 0;
console.log(discount); // 0

// ✅ Check before using
if (product.description) {
console.log(product.description.toUpperCase());
}

// ✅ Default value with OR operator
const desc = product.description || "No description available";

4. Optional Properties in Functions
   typescriptinterface SearchOptions {
   query: string; // required
   page?: number; // optional — default to 1
   pageSize?: number; // optional — default to 10
   sortBy?: string; // optional
   sortOrder?: "asc" | "desc"; // optional
   filters?: {
   category?: string;
   minPrice?: number;
   maxPrice?: number;
   inStock?: boolean;
   };
   }

function searchProducts(options: SearchOptions): void {
const page = options.page ?? 1;
const pageSize = options.pageSize ?? 10;
const sortOrder = options.sortOrder ?? "asc";

console.log(`Searching: "${options.query}"`);
console.log(`Page: ${page}, Size: ${pageSize}`);
console.log(`Sort: ${options.sortBy ?? "default"} (${sortOrder})`);

if (options.filters?.category) {
console.log(`Category: ${options.filters.category}`);
}
if (options.filters?.minPrice !== undefined) {
console.log(`Min Price: $${options.filters.minPrice}`);
}
}

// Call with only required field
searchProducts({ query: "laptop" });

// Call with optional fields
searchProducts({
query: "phone",
page: 2,
pageSize: 20,
sortBy: "price",
sortOrder: "desc",
filters: {
category: "electronics",
minPrice: 500,
inStock: true
}
});

5. Optional vs Required — Registration Form Example
   typescriptinterface RegistrationForm {
   // Required fields
   username: string;
   email: string;
   password: string;
   confirmPassword: string;
   agreeToTerms: boolean;

// Optional fields
firstName?: string;
lastName?: string;
phone?: string;
referralCode?: string;
profilePicture?: string;
newsletter?: boolean; // defaults to false if absent
}

function register(form: RegistrationForm): void {
// Required fields — always available
console.log(`Username : ${form.username}`);
console.log(`Email    : ${form.email}`);

// Optional fields — check before use
if (form.firstName && form.lastName) {
console.log(`Name: ${form.firstName} ${form.lastName}`);
}

if (form.referralCode) {
console.log(`Referral Code: ${form.referralCode}`);
}

const newsletter = form.newsletter ?? false;
console.log(`Newsletter: ${newsletter}`);
}

// Minimal registration
register({
username: "alice99",
email: "alice@example.com",
password: "Pass@123",
confirmPassword: "Pass@123",
agreeToTerms: true
});

6. Combining Optional with Readonly
   typescriptinterface Order {
   readonly orderId: string; // required + readonly
   readonly createdAt: Date; // required + readonly

product: string; // required
quantity: number; // required

discount?: number; // optional
giftWrap?: boolean; // optional
deliveryNote?: string; // optional
updatedAt?: Date; // optional — set only on update
}

const order: Order = {
orderId: "ORD-001",
createdAt: new Date(),
product: "Headphones",
quantity: 2,
giftWrap: true
};

// order.orderId = "ORD-002"; ❌ Error: readonly
order.deliveryNote = "Leave at door"; // ✅ optional but writable

7. Utility Types with Optional Properties
   TypeScript has built-in utilities to make properties optional or required:
   typescriptinterface User {
   id: number;
   name: string;
   email: string;
   phone: string;
   }

// ✅ Partial<T> — makes ALL properties optional
type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; phone?: string }

// ✅ Required<T> — makes ALL properties required
type RequiredUser = Required<PartialUser>;
// { id: number; name: string; email: string; phone: string }

// ✅ Pick<T> — pick specific properties
type UserPreview = Pick<User, "id" | "name">;
// { id: number; name: string }

// ✅ Omit<T> — omit specific properties
type PublicUser = Omit<User, "phone">;
// { id: number; name: string; email: string }

// Usage example — update function needs only changed fields
function updateUser(id: number, changes: Partial<User>): void {
console.log(`Updating user ${id}`, changes);
}

updateUser(1, { name: "New Name" }); // ✅ only name
updateUser(2, { email: "new@email.com" }); // ✅ only email

Summary
SyntaxMeaningname: stringRequired — must always be providedname?: stringOptional — can be omitted (value is string | undefined)readonly name: stringRequired + cannot be changedPartial<T>Makes all fields of T optionalRequired<T>Makes all fields of T requiredname ?? "default"Fallback if value is null or undefinedobj.name?.method()Safe access on optional nested fields
