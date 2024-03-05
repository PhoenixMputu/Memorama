import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { IoEyeOutline } from 'react-icons/io5';

import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {
  return (
    <div>
      <Head>
        <title>Memorama - Signin</title>
        <meta
          name="description"
          content="Connectez-vous à Memorama, la plateforme innovante pour la publication, la lecture et la vérification de mémoires et de rapports de stage. Accédez à votre compte et profitez de nos fonctionnalités avancées pour gérer vos documents académiques en toute sécurité."
        />
      </Head>
      <main className="bg-white w-full h-screen flex flex-col justify-center items-center">
        <form className="p-4 w-11/12 md:w-[400px] flex flex-col justify-center gap-y-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-shark-950 text-normal font-normal font-heebo">Content de vous revoir</h3>
            <h1 className="text-shark-950 text-2xl font-medium font-heebo">Connectez-vous</h1>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="on"
              placeholder="johndoe@gmail.com"
              required
              className="p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="password" className="text-base">
                Mot de passe
              </label>
              <Link href="/forgetPassword" className="text-blue-500 hover:text-blue-700">
                Mot de passe oublié
              </Link>
            </div>
            <div className="h-11 flex flex-row justify-between items-center border border-slate-500 rounded-lg py-1 px-2">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                className="outline-none w-11/12"
                required
              />
              <IoEyeOutline />
            </div>
            <div className="flex flex-col justify-center items-center gap-2.5">
              <button
                type="submit"
                className={
                  'flex justify-center items-center w-full py-2 text-center text-white text-base font-medium bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-lg'
                }
              >
                Se connecter
              </button>
              <button
                type="button"
                className="w-full flex justify-center items-center gap-2 py-2 text-center text-shark-950 text-base font-medium rounded-lg border border-shark-500 hover:border-shark-600"
              >
                <FcGoogle size={24} />
                {'Continuer avec Google'}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
