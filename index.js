const SlackBot = require('slackbots');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const bot = new SlackBot({
	token: `${process.env.BOT_TOKEN}`,
	name: 'testbot',
});

bot.on('start', () => {
	const params = {
		icon_emoji: ':robot_face:',
	};

	bot.postMessageToChannel('random', 'Hi I am testbot (classic)', params);
});

bot.on('error', (err) => {
	console.log('Error captured by testbot', err);
});
