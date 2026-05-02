import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    const token = request.cookies.get("token")?.value;

    console.log("MIDDLEWARE TOKEN:", token);

    if (!token) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    return NextResponse.next();
    // const isLogin = false;

    // if (!isLogin) {
    //     return NextResponse.redirect(new URL("/auth/login", request.url));
    // }

    // return NextResponse.next();

    // return NextResponse.redirect(new URL("/", request.url));
    // return NextResponse.next();
}

export const config = {
    matcher: ["/produk", "/about"],
};