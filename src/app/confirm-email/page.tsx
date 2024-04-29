'use client';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import Loader from '../components/Loader';
import axios from 'axios';
import { Toaster, toast } from 'sonner';

interface IFormInput {
  code: number | string;
}

const ConfirmEmail = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSecondLoading, setIsSecondLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const token = searchParams.get('token');
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>();

  const handleClick = () => {
    setIsSecondLoading(true);
    axios
      .post(
        `${process.env.apiUrl}/auth/resend-email`,
        {
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(() => {
        toast.success('Email envoyé avec success', {
          duration: 5000
        });
        setIsSecondLoading(false);
      })
      .catch((error) => {
        toast.error(error?.response?.data || error?.message || 'Il y a eu une erreur', {
          duration: 5000
        });
        setIsSecondLoading(false);
      });
  }

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setIsLoading(true);

    axios
      .post(
        `${process.env.apiUrl}/auth/confirm-email`,
        {
          email: email,
          code: data.code.toString(),
          token: token
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
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
    <main className="bg-white w-full h-screen flex flex-col justify-center items-center">
      <Toaster richColors position="top-center" expand={false} />
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 w-11/12 md:w-[400px] flex flex-col justify-center gap-y-4">
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
            type="text"
            id="code"
            autoComplete="on"
            {...register('code', {
              required: true,
              maxLength: 5,
              minLength: 5
            })}
            required
            className="p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950"
          />
          {errors.code && <p className="text-red-500 text-sm">{'Veuillez saisir le code à 5 chiffres'}</p>}
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
              {isLoading ? <Loader color="blue" size={24} /> : "Confirmer l'email"}
            </button>
            <button
              type="button"
              onClick={handleClick}
              className="w-full flex justify-center font-heebo items-center gap-2 py-2 text-center text-shark-950 text-base font-medium rounded-lg border border-shark-500 hover:border-gray-700"
            >
              {isSecondLoading ? <Loader color="blue" size={24} /> : 'Renvoyer le code de confirmation'}
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default ConfirmEmail;
