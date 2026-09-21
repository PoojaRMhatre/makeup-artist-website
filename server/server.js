const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 5000;

// ==========================================
// MIDDLEWARE
// ==========================================

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// ==========================================
// TEST HOME ROUTE
// ==========================================

app.get("/", (req, res) => {
  res.send("Appointment Booking API is Running Successfully!");
});

// ==========================================
// TEST API ROUTE
// ==========================================

app.get("/api/appointment", (req, res) => {
  res.json({
    success: true,
    message: "Appointment API is working",
  });
});

// ==========================================
// SMTP CONFIGURATION
// ==========================================

console.log("SMTP_USER:", process.env.SMTP_USER);
console.log(
  "SMTP_PASS:",
  process.env.SMTP_PASS ? "Loaded Successfully" : "Missing"
);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ==========================================
// VERIFY SMTP
// ==========================================

transporter.verify((error, success) => {
  if (error) {
    console.log("❌ SMTP ERROR:");
    console.log(error);
  } else {
    console.log("✅ SMTP SERVER READY");
  }
});

// ==========================================
// APPOINTMENT POST ROUTE
// ==========================================

app.post("/api/appointment", async (req, res) => {
  console.log("");
  console.log("========================================");
  console.log("📩 APPOINTMENT REQUEST RECEIVED");
  console.log("========================================");
  console.log(req.body);
  console.log("========================================");

  try {
    const {
      name,
      email,
      phone,
      service,
      date,
      message,
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !service || !date) {
      console.log("❌ Required appointment fields are missing");

      return res.status(400).json({
        success: false,
        message: "Please fill all required appointment fields.",
      });
    }

    console.log("👤 Name:", name);
    console.log("📧 Email:", email);
    console.log("📱 Phone:", phone);
    console.log("💄 Service:", service);
    console.log("📅 Date:", date);
    console.log("📝 Message:", message);

    // ======================================
    // EMAIL
    // ======================================

    const mailOptions = {
      from: `"Makeup Appointment" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Makeup Appointment - ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">

          <h2 style="color: #8c6d89;">
            New Makeup Appointment
          </h2>

          <hr />

          <p>
            <strong>Full Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Phone:</strong>
            ${phone}
          </p>

          <p>
            <strong>Service:</strong>
            ${service}
          </p>

          <p>
            <strong>Appointment Date:</strong>
            ${date}
          </p>

          <p>
            <strong>Message:</strong>
            ${message || "No message provided"}
          </p>

          <hr />

          <p>
            This appointment was submitted from your makeup artist website.
          </p>

        </div>
      `,
    };

    console.log("📤 Sending appointment email...");

    await transporter.sendMail(mailOptions);

    console.log("========================================");
    console.log("✅ APPOINTMENT EMAIL SENT SUCCESSFULLY");
    console.log("========================================");

    res.status(200).json({
      success: true,
      message: "Appointment booked successfully!",
    });

  } catch (error) {
    console.log("========================================");
    console.error("❌ EMAIL ERROR");
    console.error(error);
    console.log("========================================");

    res.status(500).json({
      success: false,
      message: "Failed to send appointment email.",
      error: error.message,
    });
  }
});

// ==========================================
// START SERVER
// ==========================================

app.get("/test-email", async (req, res) => {
  try {
    const info = await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: process.env.EMAIL_TO,
  subject: "SMTP Test Email",
  text: "Testing Gmail SMTP from Makeup Artist Website",
});

console.log("✅ TEST EMAIL SENT");
console.log("Message ID:", info.messageId);
console.log("Response:", info.response);
console.log("Accepted:", info.accepted);
console.log("Rejected:", info.rejected);

res.json({
  success: true,
  message: "Test email sent successfully",
});
  } catch (error) {
    console.error("❌ TEST EMAIL ERROR");
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log("");
  console.log("========================================");
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("========================================");
});

