import React from 'react';

const ConfirmEmail = () => {
  return (
    <main className="bg-white w-full h-screen flex flex-col justify-center items-center">
      <form className="p-4 w-11/12 md:w-[400px] flex flex-col justify-center gap-y-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-shark-950 text-2xl font-medium font-heebo">Confirmez votre email</h1>
          <p className="text-gray-600">
            Veuillez saisir le code de vérification envoyé à votre adresse e-mail pour confirmer votre compte.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="code" className="text-base">
            Code de confirmation
          </label>
          <input
            type="number"
            name="code"
            id="code"
            autoComplete="on"
            required
            className="p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-center items-center gap-2.5">
            <button
              type="submit"
              className={
                'flex justify-center items-center w-full py-2 text-center text-white text-base font-medium bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-lg'
              }
            >
              {'Confirmer l\'email'}
            </button>
            <button
                type="button"
                className="w-full flex justify-center font-heebo items-center gap-2 py-2 text-center text-shark-950 text-base font-medium rounded-lg border border-shark-500 hover:border-gray-700"
              >
                {'Renvoyer le code de confirmation'}
              </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default ConfirmEmail;
