import { app } from "@/index"


// TODO - take command line args for specific port
app.listen(4100, () => {
  console.log("Server is running on port 4100")
})
