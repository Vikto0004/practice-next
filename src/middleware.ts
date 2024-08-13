import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function isStartsWith(request: NextRequest, path: string): boolean {
  return request.nextUrl.pathname.startsWith(path);
}

export const middleware = (request: NextRequest) => {
  const token = request.cookies.get('token')?.value;

  if (token && isStartsWith(request, '/login')) {
    return NextResponse.redirect(new URL('/contacts', request.url));
  }

  if (token && isStartsWith(request, '/register')) {
    return NextResponse.redirect(new URL('/contacts', request.url));
  }

  if (!token && isStartsWith(request, '/contacts')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/contacts', '/login', '/register'],
};
