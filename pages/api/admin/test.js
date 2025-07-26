// pages/api/admin/test.js
import { authorize } from "@/lib/authMiddleware";

export default function handler(req, res) {
  try {
    const user = authorize(req, ["admin", "superadmin"]);
    return res.status(200).json({
      message: `Hello ${user.role}, access granted.`,
      user,
    });
  } catch (err) {
    return res.status(403).json({ message: err.message });
  }
}
