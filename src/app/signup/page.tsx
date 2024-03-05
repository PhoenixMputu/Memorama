'use client';
import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { useForm, SubmitHandler } from 'react-hook-form';

import { FcGoogle } from 'react-icons/fc';

import { User } from '../utils/types';

const Signup = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Head>
        <title>Memorama - Inscription</title>
        <meta
          name="description"
          content="Inscrivez-vous à Memorama, la plateforme innovante pour la publication, la lecture et la vérification de mémoires et de rapports de stage. Accédez à votre compte et profitez de nos fonctionnalités avancées pour gérer vos documents académiques en toute sécurité."
        />
      </Head>
      <main className="bg-white w-full h-screen flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 w-11/12 md:w-[400px] flex flex-col justify-center gap-y-4"
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-sm text-shark-950 text-normal font-normal font-heebo">Bienvenu(e)</h3>
            <h1 className="text-shark-950 text-2xl font-medium font-heebo">Inscrivez-vous</h1>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastname" className="text-base font-heebo">
              Nom
            </label>
            <input
              type="text"
              id="lastname"
              autoComplete="on"
              placeholder="Doe"
              {...register('lastname', {
                required: true,
                minLength: 3,
                pattern: /^[a-zA-Z]+$/i
              })}
              required
              className={`p-1.5 outline outline-1 font-heebo outline-shark-400 rounded-md text-shark-950 ${errors.lastname ? 'focus:outline-red-500' : 'focus:outline-shark-950'}`}
              aria-invalid={errors.lastname ? 'true' : 'false'}
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{'Le nom ne doit pas avoir des chiffres, ni des lettres'}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="firstname" className="text-base font-heebo">
              Prénom
            </label>
            <input
              type="text"
              id="firstname"
              autoComplete="on"
              placeholder="John"
              {...register('firstname', {
                required: true,
                minLength: 3,
                pattern: /^[a-zA-Z]+$/i
              })}
              required
              className={`p-1.5 outline outline-1 font-heebo outline-shark-400 rounded-md text-shark-950 ${errors.firstname ? 'focus:outline-red-500' : 'focus:outline-shark-950'}`}
              aria-invalid={errors.firstname ? 'true' : 'false'}
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm">{'Le Prénom ne doit pas avoir des chiffres, ni des lettres'}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-base font-heebo">
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="on"
              placeholder="johndoe@gmail.com"
              {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
              })}
              required
              className={`p-1.5 outline outline-1 font-heebo outline-shark-400 rounded-md text-shark-950 ${errors.email ? 'focus:outline-red-500' : 'focus:outline-shark-950'}`}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <p className="text-red-500 text-sm">{"L'adresse email doit avoir un @"}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-base font-heebo">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              autoComplete="on"
              placeholder="*********"
              {...register('password', {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i
              })}
              required
              className={`p-1.5 outline outline-1 font-heebo outline-shark-400 rounded-md text-shark-950 ${errors.password ? 'focus:outline-red-500' : 'focus:outline-shark-950'}`}
              aria-invalid={errors.password ? 'true' : 'false'}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {'Le mot de passe doit avoir au moins 8 caractères, une majuscule, un chiffre et un caractère spéciale'}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-base font-heebo">
              Confirmation du mot de passe
            </label>
            <input
              type="password"
              id="confirmPassword"
              autoComplete="on"
              placeholder="*********"
              {...register('confirmPassword', {
                required: true,
                minLength: 8
              })}
              required
              className={`p-1.5 outline outline-1 font-heebo outline-shark-400 rounded-md text-shark-950 ${getValues('password') !== getValues('confirmPassword') ? 'focus:outline-red-500' : 'focus:outline-shark-950'}`}
              aria-invalid={getValues('password') !== getValues('confirmPassword') ? 'true' : 'false'}
            />
            {getValues('password') !== getValues('confirmPassword') && (
              <p className="text-red-500 text-sm">
                {'Les mots de passe ne sont pas identique'}
              </p>
            )}
          </div>
          <div className="flex flex-col font-heebo justify-center items-center gap-2.5">
            <button
              type="submit"
              className={
                'flex justify-center font-heebo items-center w-full py-2 text-center text-white text-base font-medium bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-lg'
              }
            >
              {"S'inscrire"}
            </button>
            <button
              type="button"
              className="w-full flex justify-center font-heebo items-center gap-2 py-2 text-center text-shark-950 text-base font-medium rounded-lg border border-shark-500 hover:border-shark-600"
            >
              <FcGoogle size={24} />
              {'Continuer avec Google'}
            </button>
            <p className="text-base font-heebo">
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
