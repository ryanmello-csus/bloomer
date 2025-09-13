import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  // This middleware function runs in Edge Runtime
  // It should not import or use Prisma directly
  
  // You can add custom logic here if needed
  // For example, redirect users based on authentication status
  
  return NextResponse.next()
})

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
}
