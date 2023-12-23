import { kafka } from './client.js';

const init = async () => {
	// initialized producer for kafka
	const producer = kafka.producer();

	console.log('Producer connecting...');
	await producer.connect();
	console.log('Producer connected successfully!');

	const topic = 'rider-updates';
	// creating array of message object with partition, key and value
	const messages = [
		{
			partition: 0,
			key: 'location-updates',
			value: JSON.stringify({ name: 'Zuber', location: 'SOUTH' }),
		},
	];

	// sending message to kafka server with topic 'rider-updates'
	await producer.send({ topic, messages });

	await producer.disconnect();
	console.log('Producer Disconnected!');
};

init();
