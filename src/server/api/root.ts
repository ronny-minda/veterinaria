import { exampleRouter } from "~/server/api/routers/example";
import { productos } from "~/server/api/routers/productos";
import { user } from "~/server/api/routers/user";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  productos,
  user,
});

// export type definition of API
export type AppRouter = typeof appRouter;
