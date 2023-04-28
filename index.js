// const nodemailer = require('nodemailer');

// let mailTransporter = nodemailer.createTransport({
//     service:"gmail",
//     auth: {
//         user: "bestse97@gmail.com",
//         pass:"tzkujbibxxlbxhle"
//     }
// })

// let details  ={
//     from:"bestse97@gmail.com",
//     to:"hbthilinadilshan123@gmail.com",
//     subject:"SE Assignemt",
//     text:"This is the assignemtn purpose"
// }

// mailTransporter.sendMail(details,(err)=>{
//     if(err){
//         console.log("There has an error",err)
//     }else{
//         console.log("Send email successfully")
//     }
// })

const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.json());

app.post('/send-email', (req, res) => {
  const { sender, recipient, subject, message } = req.body;

  const mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bestse97@gmail.com',
      pass: 'tzkujbibxxlbxhle',
    },
  });

  const mailDetails = {
    from: sender,
    to: recipient,
    subject: subject,
    text: message,
  };

  mailTransporter.sendMail(mailDetails, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});


//pdf document
const pdfDoc = require('pdfkit');

const fs=require('fs');

app.get('/Location',(req,res)=>{
const doc = new pdfDoc();

doc.pipe(fs.createWriteStream('output.pdf'));

// Embed a font, set the font size, and render some text
doc
  .fontSize(25)
  .text('Some text with an embedded font!', 100, 100);

// Add another page
doc
  .addPage()
  .fontSize(25)
  .text('Here is some vector graphics...', 100, 100);

 // Draw a triangle
doc
.save()
.moveTo(100, 150)
.lineTo(100, 250)
.lineTo(200, 250)
.fill('#FF3300');

// Apply some transforms and render an SVG path with the 'even-odd' fill rule
doc
  .scale(0.6)
  .translate(470, -380)
  .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
  .fill('red', 'even-odd')
  .restore();

// Add some text with annotations
doc
  .addPage()
  .fillColor('blue')
  .text('Here is a link!', 100, 100)
  .underline(100, 100, 160, 27, { color: '#0000FF' })
  .link(100, 100, 160, 27, 'http://google.com/');

// Finalize PDF file
doc.end();

res.setHeader('Content-Type', 'application/pdf');
res.sendFile('output.pdf', { root: __dirname });
})


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
