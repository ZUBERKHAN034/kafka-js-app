import { kafka } from './client.js';

const init = async () => {
	// initialized admin for kafka
	const admin = kafka.admin();

	console.log('Admin Connecting...');
	await admin.connect();
	console.log('Admin Connected Successfully!');

	// created 1 topic [rider-updates] with 2 partitions [0, 1]
	const topics = [{ topic: 'rider-updates', numPartitions: 2 }]; // you can add more topics in the array

	await admin.createTopics({ topics });
	console.log('Topic created successfully!');

	await admin.disconnect();
	console.log('Admin Disconnected!');
};

init();
