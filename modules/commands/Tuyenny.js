
module.exports.config = {
	name: "Tuyển ny",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "AnhSiu", 
	description: "",
	commandCategory: "noprefix",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
var { threadID, messageID } = event;
	if (event.body.indexOf("Tuyển ny")==0 || (event.body.indexOf("tuyển ny")==0)){
		var msg = {
				body: ["DỊCH VỤ CHO THUÊ BẠN Gái🥰 ( Giá ưu đãi ngày Tết )\nCó nhiều gói khác nhau cho các bạn lựa chọn\n- Gói Bạn Bè: 200.000 vnđ ( đi chơi đơn giản)\n- Gói Hẹn Hò: 300.000 vnđ ( nắm tay dạo phố)\n- Gói Lãng Mạn: 500.000 vnđ ( ăn tối nơi đông người + chạm môi nhẹ + đăng ảnh Facebook)\n- Gói Ăn Tối cùng Gia Đình: 700.000 vnđ ( 750.000 nếu phải chơi với trẻ nhỏ đi kèm )\n- Gói Siêu Lãng Mạn: 1.700.000 vnđ ( tất cả các options ở trên + hôn kiểu Pháp + hôn kiểu Eskimo )\nYêu cầu:\n- Chỉ nhận khách hàng Nam từ 14 -17 tuổi tuỳ theo nhan sắc mà có sale chút\n- Khách hàng tự giữ mình, quá trớn không ai giữ dùm\nCam kết:\n - Làm việc hết mình, nghiêm túc\n- Bảo mật thông tin khách hàng\n🚫NOTE: HỌC SINH GIẢM 15% . HỘ NGHÈO GIẢM 30%\nĐặc Biệt:  FREE cho ai có ý định yêu nghiêm túc, tiến đến đám cưới trong tương lai =))"],
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
