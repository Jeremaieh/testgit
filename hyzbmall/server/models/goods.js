//加载mongoose模块
var mongoose = require('mongoose'); 
//Schema表模型   获取mongoose的Schema
var Schema = mongoose.Schema;
//定义商品模型
var produtSchema = new Schema({
	"productId":{type:String},
	"productName":String,
	"salePrice":Number,
	"checked":String,
	"productNum":Number,
	"productImage":String,
	"productType":String
});
//把mongoose的 model中 goods模块暴露出来
module.exports = mongoose.model('Good',produtSchema);