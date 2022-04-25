import express from 'express';
import { consumerRun } from  './kafka/index.js'
import { connect } from './database/index.js';
import routes from './modules/users/routes/index.js';

const app = express();
app.use(routes);

await connect();
await consumerRun().then(() => console.log('Listening on users topic')).catch(console.error);

app.listen(9000, () => console.log('Consumer on port 9000'));
