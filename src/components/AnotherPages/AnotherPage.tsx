import React from 'react';

const AnotherPage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <img
        src="https://media.tenor.com/-c0MyfC865cAAAAi/cat.gif" // Replace this URL with the actual image URL
        alt="Placeholder"
        style={{ width: '200px', height: 'auto', marginBottom: '20px' }}
      />
      <p>eh, maaf banget ya meii pas call aku nggak kedengeran. pasti kamu bete deh, aku jadi nggak enak. tapi jangan khawatir, aku bakal lebih dengerin kamu ke depannya! 😅
aku tahu kerjaan kamu lagi sibuk banget, tapi kamu tuh keren banget bisa tetap bertahan. semangat terus ya! kalo capek, jangan lupa istirahat, sama kalo ada apa-apa aku ada kok buat kamu. 😊.</p>
    </div>
  );
};

export default AnotherPage;
