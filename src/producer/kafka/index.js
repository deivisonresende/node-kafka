import { Kafka } from 'kafkajs';

export const getProducer = config => {
  const kafka = new Kafka(config);

 return kafka.producer();
};

