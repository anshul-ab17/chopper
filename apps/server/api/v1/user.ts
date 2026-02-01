import { Hono } from "hono";

const user = new Hono();

user.get("/", (c) => c.text("user root"));
user.get("/:id", (c) => c.text(`user ${c.req.param("id")}`));

export default user;

