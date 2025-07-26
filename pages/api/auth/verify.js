import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found" });
    if (user.verified) return res.status(400).json({ message: "User already verified" });
    if (user.otp !== otp) return res.status(400).json({ message: "Incorrect OTP" });

    user.verified = true;
    user.otp = null;
    await user.save();

    return res.status(200).json({ message: "Account verified successfully!" });
  } catch (error) {
    console.error("OTP Verification error:", error);
    return res.status(500).json({ message: "Server error" });
  }
}
