import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: [
      "/api/assistant/create",
      "/api/thread",
      "/api/message/create",
      "/api/message/list",
      "/api/run/create",
      "/api/run/retrieve",
      "/api/challenge-users",
      "/api/openai",
      "/api/send-notifications",
    ],
  });
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};