Define interfaces for user data

1. Basic User Interface
   typescriptinterface User {
   id: number;
   username: string;
   email: string;
   password: string;
   }

2. Detailed User Profile
   typescriptinterface Address {
   street: string;
   city: string;
   state: string;
   country: string;
   zipCode: string;
   }

interface UserProfile {
id: number;
firstName: string;
lastName: string;
email: string;
phone?: string; // optional
dateOfBirth?: Date; // optional
avatar?: string; // optional profile picture URL
address?: Address; // optional nested interface
}

3. User Roles & Permissions
   typescripttype UserRole = "admin" | "moderator" | "editor" | "viewer";

interface Permission {
canRead: boolean;
canWrite: boolean;
canDelete: boolean;
canManageUsers: boolean;
}

interface UserWithRole {
id: number;
username: string;
email: string;
role: UserRole;
permissions: Permission;
}

4. Authentication User Data
   typescriptinterface LoginCredentials {
   email: string;
   password: string;
   }

interface AuthToken {
accessToken: string;
refreshToken: string;
expiresIn: number; // seconds
}

interface AuthUser {
id: number;
email: string;
username: string;
token: AuthToken;
isVerified: boolean;
lastLogin: Date;
}

5. User Registration Data
   typescriptinterface RegisterUser {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
   confirmPassword: string;
   phone?: string;
   agreeToTerms: boolean;
   }

6. Extending Interfaces (Inheritance)
   typescript// Base user
   interface BaseUser {
   id: number;
   email: string;
   createdAt: Date;
   updatedAt: Date;
   }

// Extends base with profile info
interface UserProfile extends BaseUser {
firstName: string;
lastName: string;
avatar?: string;
bio?: string;
}

// Extends profile with role
interface AdminUser extends UserProfile {
role: "admin";
canManageUsers: boolean;
canManageContent: boolean;
}

// Extends profile with preferences
interface CustomerUser extends UserProfile {
role: "customer";
loyaltyPoints: number;
subscriptionPlan: "free" | "basic" | "premium";
}

7. API Response Wrapper
   typescriptinterface ApiResponse<T> {
   success: boolean;
   data: T;
   message: string;
   statusCode: number;
   }

interface PaginatedResponse<T> {
data: T[];
total: number;
page: number;
pageSize: number;
totalPages: number;
}

// Usage
type UserResponse = ApiResponse<UserProfile>;
type UsersListResponse = ApiResponse<PaginatedResponse<UserProfile>>;

8. Full Real-World Example
   typescripttype UserRole = "admin" | "editor" | "viewer";
   type UserStatus = "active" | "inactive" | "banned" | "pending";

interface Address {
street: string;
city: string;
state: string;
country: string;
zipCode: string;
}

interface SocialLinks {
twitter?: string;
linkedin?: string;
github?: string;
website?: string;
}

interface UserPreferences {
theme: "light" | "dark";
language: string;
notifications: boolean;
newsletter: boolean;
}

interface User {
id: number;
firstName: string;
lastName: string;
email: string;
phone?: string;
role: UserRole;
status: UserStatus;
address?: Address;
socialLinks?: SocialLinks;
preferences: UserPreferences;
createdAt: Date;
updatedAt: Date;

// Computed / derived
readonly fullName: string; // readonly — cannot be set externally
}

// Usage
const user: User = {
id: 1,
firstName: "Alice",
lastName: "Smith",
email: "alice@example.com",
role: "admin",
status: "active",
preferences: {
theme: "dark",
language: "en",
notifications: true,
newsletter: false,
},
createdAt: new Date(),
updatedAt: new Date(),
fullName: "Alice Smith",
};

Summary of Best Practices
PracticeExampleUse readonly for IDsreadonly id: numberUse ? for optional fieldsphone?: stringUse type for fixed valuestype Role = "admin" | "user"Use generics for API responsesApiResponse<T>Split large interfacesAddress, Preferences separatelyExtend base interfacesAdminUser extends BaseUser
