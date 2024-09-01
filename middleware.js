import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    //console.log(req.nextUrl.pathname);
    //console.log(req.nextauth.token);

    //  if (
    //    req.nextUrl.pathname.startsWith("/reward-store") &&
    //    req.nextauth.token.role != "Admin"
    // ) {
    //   return NextResponse.rewrite(new URL("/Denied", req.url));
    // }
    // if (req.nextUrl.pathname.startsWith("/dashboard") && !req.nextauth.token){
    //   return NextResponse.rewrite(new URL("/", req.url));
    // }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/(reward-store|trpc)(.*)","/(api|trpc)(.*)"] };
