'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';
import { Toaster, toast } from 'sonner';
import { useForm, SubmitHandler } from 'react-hook-form';
import Loader from '../components/Loader';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { User } from '../utils/types';
import axios from 'axios';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassord, setShowPassord] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    setIsLoading(true);
    axios
      .post(`${process.env.apiUrl}/auth/signin`, {
        email: data.email,
        password: data.password
      })
      .then(() => {
        setIsLoading(false);
        router.push('/');
      })
      .catch((error) => {
        toast.error(error?.response?.data || error?.message || "Il y a eu une erreur", {
          duration: 5000
        });
        setIsLoading(false);
      });
  };

  const authWithGoogle = () => {
    window.open(`${process.env.apiUrl}/auth/google-auth`, '_self');
  };

  return (
    <div>
      <Head>
        <title>Memorama - Connexion</title>
        <meta
          name="description"
          content="Connectez-vous à Memorama, la plateforme innovante pour la publication, la lecture et la vérification de mémoires et de rapports de stage. Accédez à votre compte et profitez de nos fonctionnalités avancées pour gérer vos documents académiques en toute sécurité."
        />
      </Head>
      <Toaster richColors position="top-center" expand={false} />
      <main className="bg-white w-full h-screen flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 w-11/12 md:w-[400px] flex flex-col justify-center gap-y-4"
        >
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
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="password" className="text-base">
                Mot de passe
              </label>
              <Link href="/forgetPassword" className="text-blue-500 hover:text-blue-700">
                Mot de passe oublié
              </Link>
            </div>
            <div
              className={`flex flex-row justify-between items-center p-1.5 outline outline-1 font-heebo outline-shark-400 rounded-md text-shark-950 ${errors.password ? 'focus:outline-red-500' : 'focus:outline-shark-950'}`}
            >
              <input
                type={showPassord ? 'text' : 'password'}
                id="password"
                autoComplete="on"
                placeholder="*********"
                {...register('password', {
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i
                })}
                required
                className="outline-none border-none w-4/5"
                aria-invalid={errors.password ? 'true' : 'false'}
              />
              {showPassord ? (
                <IoEyeOutline onClick={() => setShowPassord(!showPassord)} />
              ) : (
                <IoEyeOffOutline onClick={() => setShowPassord(!showPassord)} />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">
                {'Le mot de passe doit avoir au moins 8 caractères, une majuscule, un chiffre et un caractère spéciale'}
              </p>
            )}
            <div className="flex flex-col justify-center items-center gap-2.5">
              <button
                type="submit"
                className={
                  isLoading
                    ? 'flex justify-center font-heebo items-center w-full py-2 text-center text-white text-base font-medium bg-blue-100 rounded-lg'
                    : 'flex justify-center font-heebo items-center w-full py-2 text-center text-white text-base font-medium bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-lg'
                }
              >
                {isLoading ? <Loader color="blue" size={24} /> : 'Se connecter'}
              </button>
              <button
                type="button"
                onClick={authWithGoogle}
                className="w-full flex justify-center font-heebo items-center gap-2 py-2 text-center text-shark-950 text-base font-medium rounded-lg border border-shark-500 hover:border-gray-700"
              >
                <FcGoogle size={24} />
                {'Continuer avec Google'}
              </button>
              <p className="text-base font-heebo">
                {"Je n'ai pas de compte ?"}{' '}
                <Link href={'/signup'} className="text-blue-500 hover:text-blue-600 active:text-blue-700">
                  Créer un compte
                </Link>
              </p>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
