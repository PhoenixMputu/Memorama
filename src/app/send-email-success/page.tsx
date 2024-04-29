import React from 'react';

const PasswordResetEmailSentPage: React.FC = () => {
  return (
    <main className="bg-white w-full h-screen flex flex-col justify-center items-center">
      <div className="p-4 w-11/12 md:w-[400px] flex flex-col justify-center gap-y-4">
        <h1 className="text-shark-950 text-2xl font-medium font-heebo">E-mail envoyé !</h1>
        <p className="text-gray-700 mb-4 text-justify">Un e-mail de réinitialisation de mot de passe a été envoyé à votre adresse e-mail. Veuillez vérifier votre boîte de réception et suivre les instructions.</p>
      </div>
    </main>
  );
};

export default PasswordResetEmailSentPage;
