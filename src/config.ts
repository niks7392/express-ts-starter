import { config } from "dotenv"
config();

export default {
    PORT : process.env.PORT || 1337,
    HOST : process.env.HOST||'http://localhost:1337'
}