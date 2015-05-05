var config = require("./../conf/config.js");

var redis = require('redis');
//var client = redis.createClient(config.redisConfig.port,config.redisConfig.host);
var client = redis.createClient();
var data=[{
	"name":"rohan",
	"lname":"bhanderi"
},{
	"name":"luke",
	"lname":"skywalker"
}];

exports.populateCache = function(){
	//Store data on redis
	client.set('cache', JSON.stringify(data),function(err,reply){
		if(err){
			console.log(err);
		} else {
			console.log("Cache populated..");
		}
	});
};

var getCache = function(cb){
	client.get('cache', function(err,data){
		if(err){
			console.log(err);
			cb(err,data);
		} else {
			console.log("Cache populated..");
			cb(null,JSON.parse(data));
		}
	});
};

exports.getCachedData = function(req,res){
	getCache(function(err,data){
		if(err){
			console.log(err);
			res.status(500).json({status:500, message: err, data:data});
		} else {
			res.status(200).json({status:200, message: "Successfull", data:data});
		}
	});
};
