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

const sessionStatus = true;

export async function middleware(request: NextRequest) {

  if (sessionStatus && loggedOutRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.rewrite(new URL('/', request.url));
  }

  if (!sessionStatus && loggedInRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.rewrite(new URL('/', request.url));
  }
}
