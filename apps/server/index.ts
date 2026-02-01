import { Hono } from "hono";
import v1 from "./api/v1"
const app = new Hono();
 
app.get('/', c => c.text('OK'));

app.route('/api/v1',v1);

export default app;

// Bun.serve({
//     fetch:app.fetch,
//     port: 3000
// })  
// -> manuel export default app




