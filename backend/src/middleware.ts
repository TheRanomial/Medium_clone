/*import { verify } from "hono/jwt";

export function initMiddleware(app) {
  app.use("/api/v1/blofg/*", async (c, next) => {
    const jwt = c.req.header("Authorization");

    if (!jwt) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }

    const token = jwt.split(" ")[1];
    const payload = await verify(token, c.env?.JWT_SECRET);

    if (!payload) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }

    c.set("userId", payload.id as string);

    await next();
  });
}*/
