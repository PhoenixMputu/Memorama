'use client';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import Link from 'next/link';

import { useForm, SubmitHandler } from 'react-hook-form';
import Loader from '../components/Loader';

import { User } from '../utils/types';

const Signup = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const token = searchParams.get('token');
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    setIsLoading(true);
    if (data.password !== data.confirmPassword) return;

    axios
      .post(
        `${process.env.apiUrl}/auth/reset-password`,
        {
          token: token,
          email: email,
          password: data.password
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then((response) => {
        const token = response.data.token;
        const email = response.data.user.email;
        setIsLoading(false);
        router.push('/confirm-email?email=' + email + '&token=' + token);
      })
      .catch((error) => {
        console.log(error);

        if (error.code === 'ERR_BAD_REQUEST') {
          toast.error(error?.response?.data?.message || error?.message, {
            duration: 5000
          });
        } else if (error.code === 'ERR_NETWORK') {
          toast.error('Pas de connexion internet', {
            duration: 5000
          });
        } else {
          toast.error(error.message, {
            duration: 5000
          });
        }
        setIsLoading(false);
      });
  };

  return (
    <main className="bg-white w-full h-screen flex flex-col justify-center items-center">
      <Toaster richColors position="top-center" expand={false} />
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 w-11/12 md:w-[400px] flex flex-col justify-center gap-y-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm text-shark-950 text-normal font-normal font-heebo">Récuperez votre compte</h3>
          <h1 className="text-shark-950 text-2xl font-medium font-heebo">Nouveau mot de passe</h1>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-base font-heebo">
            Nouveau mot de passe
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
            <p className="text-red-500 text-sm">{'Les mots de passe ne sont pas identique'}</p>
          )}
        </div>
        <div className="flex flex-col font-heebo justify-center items-center gap-2.5">
          <button
            type="submit"
            className={
              isLoading
                ? 'flex justify-center font-heebo items-center w-full py-2 text-center text-white text-base font-medium bg-blue-100 rounded-lg'
                : 'flex justify-center font-heebo items-center w-full py-2 text-center text-white text-base font-medium bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-lg'
            }
          >
            {isLoading ? <Loader color="blue" size={24} /> : 'Changer le mot de passe'}
          </button>
          <p className="text-base font-heebo">
            {"J'ai déjà un compte ?"}{' '}
            <Link href={'/signin'} className="text-blue-500 hover:text-blue-700">
              Se connecter
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Signup;
