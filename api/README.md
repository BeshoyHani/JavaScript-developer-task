API Created with Node.js, Express.js and TypeScript
## Scripts
| Command  | Action |
| ------------- | ------------- |
| `npm run start`  | build and start the Node.js server om port 3000 |
| `npm run start:dev`  | start the Node.js server without building \*for development purpose only\*|
| `npm run build`  | build the code and generate js code inside `dist` folder|

## Endpoints
| Action  | Method | Route | Parameters |
| ------------- | ------------- | ------------- | ------------- |
| Fetch questions  |`GET` | `/quiz/words` | None |
| Get the user rank  | `POST` | `/quiz/rank` | `score` <br> *must be provided in the request body*  |
> Any parameters must be in json format