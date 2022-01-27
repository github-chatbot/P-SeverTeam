
module.exports.config = {
	name: "RuleBox",
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
	if (event.body.indexOf("Rule of group")==0 || (event.body.indexOf("rule of group")==0)){
		var msg = {
				body: ["Quy Tắc Các Thành Viên Cần Lưu Ý:\n❯ Tôn trọng các thành viên khác trong Nhóm – Group.\n❯ Nghiêm cấm mọi hành vi phá hoại Nhóm – Group dưới mọi hình thức.\n❯ Hành vi coi thường, lăng mạ, vu khống thành viên khác đồng nghĩa với việc sẽ bị xoá ra khỏi group!\n❯ Khi tham gia làm thành viên, bạn bắt buộc đọc và đồng ý với mọi quy định của Group.\n❯ Không được gây sự, cãi nhau, chửi nhau gây mất trật tự nhóm.\n❯ Các thành viên tham gia phải tự chịu trách nhiệm về thông tin mình đưa ra, thông tin được lấy từ nơi khác cần phải có trích dẫn rõ nguồn. Các bài viết (post) hay bình luận (comment), phải viết bằng tiếng Việt có dấu, không dùng ngôn ngữ, ký hiệu để viết bài. Không post các nội dung (bài viết, hình ảnh, âm thanh, video, link kèm theo…) liên quan đến đồi truỵ, khoả thân, 18+, các bài viết có nội dung phản động, các bài viết vi phạm thuần phong mỹ tục Việt Nam."],
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
