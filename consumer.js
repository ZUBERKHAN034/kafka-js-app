import { kafka } from './client.js';

const init = async () => {
	// initialized consumer for kafka
	const consumer = kafka.consumer({ groupId: 'test-group' });

	console.log('Consumer connecting...');
	await consumer.connect();
	console.log('Consumer connected successfully!');

	await consumer.subscribe({ topic: 'rider-updates', fromBeginning: true });

	await consumer.run({
		eachMessage: async ({ topic, partition, message }) => {
			const log = JSON.stringify(
				{ topic, partition, message: message.value.toString() },
				null,
				2
			);

			console.log(log);
		},
	});
};

init();
