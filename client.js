import { Kafka } from 'kafkajs';

const clientId = 'kafka-js-app';
const brokers = ['localhost:9092']; // you can add more brokers in the array

const kafka = new Kafka({ clientId, brokers });

export { kafka };
