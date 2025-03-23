import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

import { createAdminiClient } from "@/lib/appwrite";
import { sessionMiddleware } from "@/lib/session-middleware";

const app = new Hono().get(
  "/",
  sessionMiddleware,
  zValidator("query", z.object({ workspaceId: z.string() })),
  async (c) => {
    const { user } = await createAdminiClient();
  }
);

export default app;
