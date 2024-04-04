'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Toaster, toast } from 'sonner';
import { useForm, SubmitHandler } from 'react-hook-form';
import Loader from '../components/Loader';
import { User } from '../utils/types';
import axios from 'axios';

const ForgetPassword = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
        toast.error(error?.response?.data || error?.message || 'Il y a eu une erreur', {
          duration: 5000
        });
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Toaster richColors position="top-center" expand={false} />
      <main className="bg-white w-full h-screen flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 w-11/12 md:w-[400px] flex flex-col justify-center gap-y-4"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-shark-950 text-2xl font-medium font-heebo">Mot de passe oublié ?</h1>
            <p className="text-gray-600">Récupérez votre compte en saisissant votre email</p>
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
            <div className="flex flex-col justify-center items-center gap-2.5">
              <button
                type="submit"
                className={
                  isLoading
                    ? 'flex justify-center font-heebo items-center w-full py-2 text-center text-white text-base font-medium bg-blue-100 rounded-lg'
                    : 'flex justify-center font-heebo items-center w-full py-2 text-center text-white text-base font-medium bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-lg'
                }
              >
                {isLoading ? <Loader color="blue" size={24} /> : 'Récuperer mon compte'}
              </button>
              <p className="text-base font-heebo">
                {"J'ai mon mot de passe ?"}{' '}
                <Link href={'/signin'} className="text-blue-500 hover:text-blue-600 active:text-blue-700">
                  Se connecter
                </Link>
              </p>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ForgetPassword;
