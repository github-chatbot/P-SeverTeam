module.exports.config = {
	name: "rdi",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "PetterSever",
	description: "Games",
	commandCategory: "games",
	usages: "rdi 500",
	cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Currencies }) {
            let { threadID, messageID, senderID } = event;
            const cointt = `100$`;
            const slotItems = ["🚀","⏳","👓","🔦","💡","🕯️","🥽","🎲","🔥","🔔","🏺"];
			let money = (await Currencies.getData(event.senderID)).money;
			var coin = args.join(" ");
	
			if (!coin) return api.sendMessage(`Bạn chưa nhập số tiền đặt cược!`, threadID, messageID);
			let win = false;
			if (isNaN(coin)|| coin.indexOf("-") !== -1) return api.sendMessage(`Số tiền đặt cược của bạn không phải là một con số, vui lòng xem lại cách sử dụng tại ${prefix}help baucuaca`, threadID, messageID);
			if (!coin) return api.sendMessage("Chưa nhập số tiền đặt cược!", threadID, messageID);
			if (coin > money) return api.sendMessage(`Số tiền của bạn không đủ`, threadID, messageID);
			if (coin < 100) return api.sendMessage(`Số tiền đặt cược của bạn quá nhỏ, tối thiểu là ${cointt}!`, threadID, messageID);
			let number = [];
			for (i = 0; i < 3; i++) number[i] = Math.floor(Math.random() * slotItems.length);
			if (number[0] == number[1] && number[1] == number[2]) {
				money *= 9;
				win = true;
			}
				else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
					money *= 2;
					win = true;
				}
				(win) ? api.sendMessage(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\nBạn đã thắng\nNhận được ${coin} dollar.`, threadID, () => Currencies.increaseMoney(senderID, parseInt(coin)), messageID) : api.sendMessage(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}|\nBạn đã thua\nSố tiền ${coin} dollar sẽ mất!.`, threadID, () => Currencies.decreaseMoney(senderID, parseInt(coin)), messageID);
}
