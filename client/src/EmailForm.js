import React, { useState } from 'react';
import axios from 'axios';

function EmailForm() {
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/send-email', {
        sender,
        recipient,
        subject,
        message,
      });

      console.log(res.data);
      alert('Email sent successfully!');
    } catch (err) {
      console.error(err);
      alert('Error sending email. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
       <h1>Send Email</h1> 
      <label>
        Sender:
        <input
          type="email"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          required
          className='email-input'
        />
      </label>
      <br />
      <label>
        Recipient:
        <input
          type="email"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
          className='email-input'
        />
      </label>
      <br />
      <label>
        Subject:
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className='email-input'
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className='email-input'
        />
      </label>
      <br />
      <button type="submit" className='btn'>Send Email</button>
    </form>
    
  );
}

export default EmailForm;
