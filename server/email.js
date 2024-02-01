const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const usuario  = req.body;
    console.log(usuario)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '20212734@aloe.ulima.edu.pe',
      pass: 'nsee lhch qvpc bybz'
    }
  });


  const mailOptions = {
    from: '20212734@aloe.ulima.edu.pe',
    to: usuario.correo,
    subject: 'Recuperar contraseña',
    text: `Contraseña: ${usuario.password}`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent', info });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));