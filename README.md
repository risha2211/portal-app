# 🔐 Authentication System with Role-Based Access and OTP Verification  
This is a backend-only authentication system built with Next.js API routes, MongoDB, and Nodemailer. It enables secure user onboarding and access control through the following core features:

**Email-based OTP verification** : On registration, users receive a one-time password (OTP) on their email to verify their account.

**JWT authentication**: Upon successful login, a JSON Web Token is issued to maintain session security.

**Role-based access control**: Users are assigned roles (superadmin, admin, or student) that govern their access level within the system.

Clean project structure: API routes are separated by functionality, and MongoDB operations are handled via Mongoose models.

The project is modular, scalable, and ready to be integrated with a frontend or extended into a full-stack application. OTP expiry and additional security measures (e.g., rate limiting and logging) are planned for future updates.

Create `.env.local`:

```env
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_app_password
JWT_SECRET=your_secret_key
```
