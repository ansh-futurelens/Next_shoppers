import { NextResponse } from 'next/server';
const privateRoutes = ['/dashboard'];
import Cookies from 'js-cookie';
export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const token = Cookies.get('shoppersToken');
  console.log("Token Cokkiess--",token)
  console.log("All cokkiess--",req.cookies)
  console.log(" Cookies--",Cookies)
  if (privateRoutes.includes(path) && !token) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
