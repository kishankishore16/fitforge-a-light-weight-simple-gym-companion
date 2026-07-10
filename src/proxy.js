import { NextResponse } from 'next/server';

export function proxy(request) {
  const token = request.cookies.get('fitforge-token');
  const { pathname } = request.nextUrl;

  const protectedPaths = ['/dashboard', '/tracker'];
  const authPaths = ['/login', '/signup'];

  const isProtected = protectedPaths.some(p => pathname.startsWith(p));
  const isAuthPage = authPaths.some(p => pathname.startsWith(p));

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/tracker/:path*', '/login', '/signup']
};
