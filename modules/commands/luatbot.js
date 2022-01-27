
module.exports.config = {
	name: "RuleBot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "PetterSever", 
	description: "",
	commandCategory: "luật",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
var { threadID, messageID } = event;
	if (event.body.indexOf("Rule using bot")==0 || (event.body.indexOf("rule using bot")==0)){
		var msg = {
				body: ["Khi Dùng Chat Bot Người Dùng Cần Lưu Ý Một Số Điều Dưới Đây\n❯ SourceCode ChatBot Made By Miraiteam & mod by P-SeverTeam\n❯ Người Dùng Tránh Việc Spam Bot Quá 20 Lần/Ngày Nếu Spam Bot 20 Lần/Ngày Đồng Nghĩa Bạn Sẽ Bị Ban Trong 24h "],
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
