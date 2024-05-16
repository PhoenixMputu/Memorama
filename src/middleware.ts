import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const loggedInRoutes = ['/account'];
const loggedOutRoutes = [
  '/signin',
  '/signup',
  '/confirm-email',
  '/forget-password',
  '/new-password',
  '/send-email-success'
];

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get('auth-cookie');
  
  if (token?.value && loggedOutRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

if (!token?.value && loggedInRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}
