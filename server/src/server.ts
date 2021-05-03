import app from './app'

import {API_PORT} from "./config.json"

app.listen(API_PORT, () => {
    console.log(`Calculator API is ready at ${API_PORT}`);
});