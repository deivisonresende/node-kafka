import express, { Router } from 'express';
import { getProducer } from '../producer/kafka/index.js';
import { sendMessage } from './service/sendMessages.js';

const server = express();
const routes = Router();

server.use(express.json());

const producer = getProducer({
  clientId: 'producer-users',
  brokers: ['localhost:9092'],
  retry: {
    initialRetryTime: 100,
    retries: 3
  }
});

server.use((req, res, next) => {
  req['producer'] = producer 
  return next();
});

server.use(routes);

(async()=> await producer.connect().catch(console.error))()

routes.post('/', sendMessage);

server.listen(3333, () => console.log('Producer on port 3333'));
