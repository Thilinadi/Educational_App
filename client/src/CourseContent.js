import React, { useState } from 'react';
import axios from 'axios';

const CourseContent = () => {
  const [loading, setLoading] = useState(false);

  const handleDownloadPdf = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/location', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'courseContent.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <form className='form'>
      <h1>MSC Course Content</h1>
      <button onClick={handleDownloadPdf} disabled={loading} className='btn'>
        {loading ? 'Loading...' : 'Download PDF'}
      </button>
      </form>
    </div>
  );
};

export default CourseContent;
