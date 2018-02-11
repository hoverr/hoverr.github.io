var skin = 'Snapgram';
var buildItem = function(id, type, length, src, preview, link, linkText, seen, time){
	return {
		"id": id,
		"type": type,
		"length": length,
		"src": src,
		"preview": preview,
		"link": link,
		"linkText": linkText,
		"seen": seen,
		"time": time
	};
},
skins = {
	'Snapgram': {
		'avatars': true,
		'list': false,
		'autoFullScreen': false,
		'cubeEffect': true
	}
},
storiesObject = [{
	id: "alexanderwangny",
	photo: "https://instagram.fblr2-1.fna.fbcdn.net/vp/f5ca2a52fb702ab7e60465c0969862d4/5B0AFD7F/t51.2885-15/s320x320/e35/c0.43.1080.1080/27577212_581355785534942_3702931587826974720_n.jpg",
	name: "alexanderwangny",
	lastUpdated: 1518310019,
	items: [
		buildItem("alexanderwangny-1", "photo", 5, "https://instagram.fblr2-1.fna.fbcdn.net/vp/b6d557a8662a69880f70ea43e33337c3/5A8347FC/t51.2885-15/e15/27580584_535823146799636_3525666699699290112_n.jpg", "https://instagram.fblr2-1.fna.fbcdn.net/vp/f3b7df7fc57ad30471b2961f8f896e79/5A83040F/t51.2885-15/s320x320/e15/27581284_1794206660610937_5113039865876840448_n.jpg", '', false, false, 1518210087),
		buildItem("alexanderwangny-2", "photo", 5, "https://instagram.fblr2-1.fna.fbcdn.net/vp/15ac96c7147d79aef475bb0272398799/5A82DEA8/t51.2885-15/e15/27581284_1794206660610937_5113039865876840448_n.jpg", "https://instagram.fblr2-1.fna.fbcdn.net/vp/0c807ba74607d00aee9af180a429f522/5A82F15E/t51.2885-15/s320x320/e15/27580584_535823146799636_3525666699699290112_n.jpg", '', false, false, 1518268459)
	]
},{
	id: "ad1",
	photo: "https://instagram.fblr2-1.fna.fbcdn.net/vp/1aea88a33325a11807bf1e38bb51b1c2/5B00E904/t51.2885-19/10570122_688728767849397_1124059754_a.jpg",
	name: "Levis",
	lastUpdated: 1518180224,
	items: [
		buildItem("ad1-1", "video", 5, "ad/levis.mp4", "ad/levis-cover.png", 'https://www.instagram.com/levis_in/', 'Visit Link', false, 1518101351),
	]
},{
	id: "amfar",
	photo: "https://instagram.fblr2-1.fna.fbcdn.net/vp/4ae48301120ee06fea168e9b84a5e93c/5B01004F/t51.2885-15/s240x240/e35/c0.134.1080.1080/27576836_326064494565825_2319500305135304704_n.jpg",
	name: "amfar",
	lastUpdated: 1518180224,
	items: [
		buildItem("amfar-2", "video", 5, "https://instagram.fblr2-1.fna.fbcdn.net/vp/95c4a5f2ad56351620f80a5d1dd1c3d8/5A835C17/t50.2886-16/27298729_406067846503297_4586628178495143936_n.mp4", "https://instagram.fblr2-1.fna.fbcdn.net/vp/00d07e07dd6a97c025f6999758f146c8/5A828C1E/t51.2885-15/s640x640/e15/c0.90.720.720/27880989_212900209263636_7575252231927103488_n.jpg", '', false, false, 1518180224),
		buildItem("amfar-1", "photo", 5, "https://instagram.fblr2-1.fna.fbcdn.net/vp/772e6761e6fd8f644de27b5635acb035/5B04990C/t51.2885-15/e35/27879050_192091048191410_3506157850139295744_n.jpg", "https://instagram.fblr2-1.fna.fbcdn.net/vp/dc2c45af3c8178b3e8468cdef984d908/5B127956/t51.2885-15/s240x240/e35/27879050_192091048191410_3506157850139295744_n.jpg", '', false, false, 1518116692),
	]
},{
	id: "selenagomez",
	photo: "https://instagram.fblr2-1.fna.fbcdn.net/vp/2f03109621a0aac0076406e355e371b6/5B08EA42/t51.2885-15/s320x320/e35/c0.118.1080.1080/27576312_372805236526329_4988798582401269760_n.jpg",
	name: "selenagomez",
	lastUpdated: 1518011652,
	items: [
		buildItem("selenagomez-2", "photo", 5, "https://instagram.fblr2-1.fna.fbcdn.net/vp/44c2882f841da06afa8c45d4146ae31f/5B1590EB/t51.2885-15/e35/26871134_1545276015591527_4328811406364246016_n.jpg", "https://instagram.fblr2-1.fna.fbcdn.net/vp/f9effed16645b6cb5dcfb205d0906d41/5B060B19/t51.2885-15/s320x320/e35/c0.121.1080.1080/26871134_1545276015591527_4328811406364246016_n.jpg", '', false, false, 1518008684),
		buildItem("selenagomez-1", "video", 5, "https://instagram.fblr2-1.fna.fbcdn.net/vp/fa129e6f4daf97f543320bc6034ba858/5A83221E/t50.2886-16/27678411_1620413694708859_5048607170229174272_n.mp4", "https://instagram.fblr2-1.fna.fbcdn.net/vp/b367859bc5d065d3023dc7f9149ee0c1/5A827455/t51.2885-15/e15/26866074_885246061636548_2943187525688098816_n.jpg", '', false, false, 1517954106),
	]
},{
	id: "ad2",
	photo: "https://instagram.fblr2-1.fna.fbcdn.net/vp/4881854b4e40cda96c9458f122fca74c/5B0950EF/t51.2885-19/10903771_788989217848179_1256536106_a.jpg",
	name: "Calm",
	lastUpdated: 1518011652,
	items: [
		buildItem("ad1-1", "video", 5, "ad/calm.mp4", "ad/calm-cover.png", 'https://www.instagram.com/calm/', 'Visit Link', false, 1518011652),
	]
},{
	id: "nyavgjoe",
	photo: "https://instagram.fblr2-1.fna.fbcdn.net/vp/96f20b6e633751bf79b6b462ceafaba8/5B239EBF/t51.2885-15/e35/26865133_184016818868808_1841348738602237952_n.jpg",
	name: "nyavgjoe",
	lastUpdated: 1518011652,
	items: [
		buildItem("nyavgjoe-2", "photo", 5, "https://instagram.fblr2-1.fna.fbcdn.net/vp/c6e69b1bd3f72dc9d8e0089e9a076ada/5B044AAE/t51.2885-15/e35/26868530_196260547787592_655140009090744320_n.jpg", "https://instagram.fblr2-1.fna.fbcdn.net/vp/ef09b710fbdbd22761b9fdc2b368fe4c/5B01B101/t51.2885-15/s320x320/e35/c135.0.810.810/26868530_196260547787592_655140009090744320_n.jpg", '', false, false, 1517884639),
		buildItem("nyavgjoe-1", "photo", 5, "https://instagram.fblr2-1.fna.fbcdn.net/vp/57b0020a7eec15ad65ad1758a34f15c0/5B1B5BE6/t51.2885-15/s640x640/sh0.08/e35/26870767_205725023314386_387025159514488832_n.jpg", "https://instagram.fblr2-1.fna.fbcdn.net/vp/364ae3d3971f3bfa345965e559d8971b/5B1ECC72/t51.2885-15/s240x240/e35/26870767_205725023314386_387025159514488832_n.jpg", '', false, false, 1517857383),
	]
}],

initDemo = function(){
	var stories = new Zuck('stories', {
		backNative: true,
        previousTap: true,
		autoFullScreen: skins[skin]['autoFullScreen'],
		skin: skin,
		avatars: skins[skin]['avatars'],
		list: skins[skin]['list'],
        cubeEffect: skins[skin]['cubeEffect'],
		localStorage: true,
		stories: storiesObject
	})
};
initDemo();
