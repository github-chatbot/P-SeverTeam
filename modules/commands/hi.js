
module.exports.config = {
name: "hi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "P-SeverTeam",
	description: "hi",
	commandCategory: "NoPrefix",
	usages: "noprefix",
	cooldowns: 5,
	dependencies: {
        "fs-extra": ""
    }
};
module.exports.handleEvent = async({ api, event, Users }) => {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID, senderID } = event;
	var tag = (await Users.getData(senderID)).name;
	let output = "Xin Chào ";
	let varinput = [ "hi", "hello", "Hello", "Hi", "2", "Xin Chào","xin chào", "Hai","hai", "Lô", "lô", "Hăi","hăi","hê lô", "Hê lô", "Hyy", "hyy" ];
	for (const input of varinput) {
		if (event.body.indexOf(input)==0 && event.body.length == input.length) {
		return api.sendMessage({body: output + tag + " Chúc bạn có một ngày tốt lành",
		mentions:[{
			tag: tag,
			id: senderID
		}]}, threadID, messageID);
		}
	}
	}
	module.exports.run = function({}) {
}
