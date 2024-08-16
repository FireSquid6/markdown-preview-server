import { Elysia } from "elysia"
import { cors } from "@elysiajs/cors"
import { Logestic } from "logestic"
import { staticPlugin } from "@elysiajs/static"


// TODO - import everything as a text file from public
// that way it can be built into a binary

export const app = new Elysia()
  .use(cors())
  .use(Logestic.preset("fancy"))
  .use(staticPlugin({
    assets: "public",
    prefix: "/",
  }))
