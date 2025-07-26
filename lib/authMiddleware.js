// lib/authMiddleware.js
import jwt from "jsonwebtoken";

export function authenticate(req) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Missing or invalid token");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded; // contains user's id, email, role
  } catch (err) {
    throw new Error("Invalid token");
  }
}

export function authorize(req, allowedRoles) {
  const user = authenticate(req);
  if (!allowedRoles.includes(user.role)) {
    throw new Error("Unauthorized");
  }
  return user;
}
