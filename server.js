const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect frontend folder
app.use(express.static(path.join(__dirname, "../public")));

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.judicialresearchforum26@gmail.com,
      pass: process.env.bdtj giif ukcd khb
    }
  });

  const mailOptions = {
    from: process.env.judicialresearchforum26@gmail.com,
    to: process.env.judicialresearchforum26@gmail.com,
    replyTo: email,
    subject: "New Contact Message from Judicial Law Firm Website",
    html: `
      <h2>New Contact Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Message sent successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error sending message");
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});