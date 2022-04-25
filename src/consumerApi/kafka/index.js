import { Kafka, logLevel } from 'kafkajs';
import { createUserService } from '../modules/users/useCases/createUserUseCase.js'

const kafka = new Kafka({
  clientId: 'consumer-users',
  brokers: ['localhost:9092'],
  logLevel: logLevel.ERROR,
});

const consumer = kafka.consumer({ groupId: 'users-group' });

export async function consumerRun() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'users', fromBeginning: false });
  await consumer.run({
    eachMessage: async ({
      topic,
      partition,
      message: { offset, timestamp, key, value }
    }) => {
      const prefix = `${topic}[${partition} | ${offset}] / ${timestamp}`;
      const message =`${prefix} - ${key} # ${value}`; 
      consumer.pause([{ topic: 'users' }])
      let userCreated = await createUserService(message, JSON.parse(value.toString()))
      console.log(offset)
    }
   
  });
  setInterval(() => consumer.resume([{ topic: 'users' }]), 30000)
}