import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
  return (
    <div>
      <Head>
        <title>Memorama - Signin</title>
        <meta
          name="description"
          content="Inscrivez-vous à Memorama, la plateforme innovante pour la publication, la lecture et la vérification de mémoires et de rapports de stage. Accédez à votre compte et profitez de nos fonctionnalités avancées pour gérer vos documents académiques en toute sécurité."
        />
      </Head>
      <main className="bg-white w-full h-screen flex flex-col justify-center items-center">
        <form className="p-4 w-11/12 md:w-[400px] flex flex-col justify-center gap-y-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-shark-950 text-normal font-normal font-heebo">Bienvenu(e)</h3>
            <h1 className="text-shark-950 text-2xl font-medium font-heebo">Inscrivez-vous</h1>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastname" className="text-base">
              Nom
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              autoComplete="on"
              placeholder="Doe"
              required
              className="p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="firstname" className="text-base">
              Prénom
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              autoComplete="on"
              placeholder="John"
              required
              className="p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950"
            />
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
            <label htmlFor="password" className="text-base">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="on"
              placeholder="*********"
              required
              className="p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-base">
              Confirmé le mot de passe
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              autoComplete="on"
              placeholder="*********"
              required
              className="p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2.5">
            <button
              type="submit"
              className={
                'flex justify-center items-center w-full py-2 text-center text-white text-base font-medium bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-lg'
              }
            >
              {"S'inscrire"}
            </button>
            <button
              type="button"
              className="w-full flex justify-center items-center gap-2 py-2 text-center text-shark-950 text-base font-medium rounded-lg border border-shark-500 hover:border-shark-600"
            >
              <FcGoogle size={24} />
              {'Continuer avec Google'}
            </button>
            <p className="text-base">
              {"J'ai déjà un compte ?"}{' '}
              <Link href={'/signin'} className="text-blue-500 hover:text-blue-600 active:text-blue-700">
                Se connecter
              </Link>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Signup;
