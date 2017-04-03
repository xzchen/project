var brandList = document.querySelector('.brand-list');
var brandListArr = {
		img:['https://img.alicdn.com/i2/2/TB1T0E_IXXXXXbBaXXXwu0bFXXX.png_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB17PY_JVXXXXbcaXXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1VIRxKpXXXXbxXXXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1puarIXXXXXXsaXXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1yOx4JFXXXXaEXXXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1RgC1JVXXXXXcXpXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1XtYuKFXXXXa.XpXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB16CePIVXXXXadXFXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1SeA5JFXXXXaxXXXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB13PqeIVXXXXaHapXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1AZbCJVXXXXXtXFXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1edYQHpXXXXXRXFXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1hWa4JVXXXXaxaXXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1sOn8IVXXXXXkapXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1bKIvJVXXXXaJXVXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB11ta.KpXXXXaJXXXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1ew3MIVXXXXbHXFXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1oGgrIpXXXXbAXXXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1aX3uIVXXXXc_XFXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1GWDpKXXXXXb.XXXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1_b2JHpXXXXcHXVXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1sjHNHpXXXXaRXVXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1OEoaNpXXXXXfXFXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1I0PuHFXXXXbxXVXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/T2pmgpXHFXXXXXXXXX-1916644637.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1eWlgKFXXXXXaXXXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1A2k6PVXXXXb4XFXXXXXXXXXX-1000-500.png_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB10ADaNVXXXXXJXXXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1iwigMVXXXXbyXpXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1O6gxOXXXXXaLaXXXwu0bFXXX.png_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1vjsLHpXXXXa3XpXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1eE10KVXXXXcKXpXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB10C13IFXXXXcEXXXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1tBlBMXXXXXXaXFXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1Y5.AIVXXXXaIaXXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1hlLRHpXXXXbCXpXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB13aXANXXXXXXdXVXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1OgkMIVXXXXaKXFXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1IFDPHpXXXXcYXpXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/T197bcFGddXXay58nI-400-200.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1tvjpHVXXXXXkXpXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1UJIfJXXXXXctaXXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1Jr1gIFXXXXaEXpXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1F__uKXXXXXXfXpXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1U.nrKpXXXXcxXpXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1fOt_KFXXXXaQXFXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1Odx6OXXXXXXSXVXXSutbFXXX.jpg_100x150q100.jpg_.webp','https://img.alicdn.com/i2/2/TB1t_zQHpXXXXX8XFXXSutbFXXX.jpg_100x150q100.jpg_.webp'],
		text:['关注人数166','关注人数11.3万','关注人数43.5万','优惠券 ￥150','优惠券 150￥','关注人数8888','关注人数2.7万','优惠券 ￥50','优惠券 ￥50','优惠券 ￥70','关注人数10.1万','关注人数3.1万','关注人数21.5万','优惠券 ￥100','优惠券 ￥100','关注人数3.2万','优惠券 ￥100','优惠券80￥','关注人数2.1万','优惠券 ￥10','关注人数37.4万','关注人数81.0万','优惠券 ￥100','优惠券 ￥30','关注人数 1.5万','优惠券 ￥5','关注人数 19.9万','优惠券 ￥10','优惠券 ￥10','关注人数 69.1万','关注人数 46.5万','','优惠券 ￥10','优惠券 ￥100','关注人数 1.5万','优惠券 ￥100','优惠券 ￥50','关注人数 7.2万','优惠券 ￥100','优惠券 ￥15','关注人数 8156','关注人数 15.9万','优惠券 ￥20','优惠券 ￥30','优惠券 ￥100','优惠券 ￥30','关注人数 15.2万','关注人数 1.3万'],
		href:['https://store.taobao.com/shop/view_shop.htm?pvid=b75407c5-779b-4cf2-9ee1-1ebe171767df&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=196993935&abtest=_AB-LR1315-PR1315&brandId=29527&scm=1007.13029.30626.100200300000000&pos=1','https://store.taobao.com/shop/view_shop.htm?pvid=a13f8063-43af-477e-b7ff-e036ba047189&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=710962071&abtest=_AB-LR1315-PR1315&brandId=4313760&scm=1007.13029.30626.100200300000000&pos=2','https://store.taobao.com/shop/view_shop.htm?pvid=a13f8063-43af-477e-b7ff-e036ba047189&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=710962071&abtest=_AB-LR1315-PR1315&brandId=29875&scm=1007.13029.30626.100200300000000&pos=3','https://septwolves.tmall.com/shop/view_shop.htm?pvid=a13f8063-43af-477e-b7ff-e036ba047189&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=96700915&abtest=_AB-LR1315-PR1315&brandId=29519&scm=1007.13029.30626.100200300000000&pos=4','https://store.taobao.com/shop/view_shop.htm?pvid=b6921d20-358a-43f2-8d60-44cf3cbd3ed4&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=398604319&abtest=_AB-LR1315-PR1315&brandId=115307&scm=1007.13029.30626.100200300000000&pos=5','https://yiguoshengxian.tmall.com/shop/view_shop.htm?pvid=b6921d20-358a-43f2-8d60-44cf3cbd3ed4&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=1795616675&abtest=_AB-LR1315-PR1315&brandId=274838064&scm=1007.13029.30626.100200300000000&pos=6','https://store.taobao.com/shop/view_shop.htm?pvid=b6921d20-358a-43f2-8d60-44cf3cbd3ed4&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=1638195672&abtest=_AB-LR1315-PR1315&brandId=3731790&scm=1007.13029.30626.100200300000000&pos=7','https://store.taobao.com/shop/view_shop.htm?pvid=b6921d20-358a-43f2-8d60-44cf3cbd3ed4&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=1115154404&abtest=_AB-LR1315-PR1315&brandId=20324&scm=1007.13029.30626.100200300000000&pos=8','https://store.taobao.com/shop/view_shop.htm?pvid=b6921d20-358a-43f2-8d60-44cf3cbd3ed4&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=2641615859&abtest=_AB-LR1315-PR1315&brandId=4330069&scm=1007.13029.30626.100200300000000&pos=9','https://store.taobao.com/shop/view_shop.htm?pvid=b6921d20-358a-43f2-8d60-44cf3cbd3ed4&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=642320867&abtest=_AB-LR1315-PR1315&brandId=45448&scm=1007.13029.30626.100200300000000&pos=10','https://meadjohnson.tmall.com/shop/view_shop.htm?pvid=408088f5-349b-4938-b413-276b5546d4c0&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=1659070416&abtest=_AB-LR1315-PR1315&brandId=20314&scm=1007.13029.30626.100200300000000&pos=11','https://junlebao.tmall.com/shop/view_shop.htm?pvid=408088f5-349b-4938-b413-276b5546d4c0&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=2058238458&abtest=_AB-LR1315-PR1315&brandId=11830443&scm=1007.13029.30626.100200300000000&pos=12','https://store.taobao.com/shop/view_shop.htm?pvid=408088f5-349b-4938-b413-276b5546d4c0&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=451135386&abtest=_AB-LR1315-PR1315&brandId=4256930&scm=1007.13029.30626.100200300000000&pos=13','https://store.taobao.com/shop/view_shop.htm?pvid=408088f5-349b-4938-b413-276b5546d4c0&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=95656259&abtest=_AB-LR1315-PR1315&brandId=20313&scm=1007.13029.30626.100200300000000&pos=14','http://store.taobao.com/shop/view_shop.htm?pvid=408088f5-349b-4938-b413-276b5546d4c0&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=446338500&abtest=_AB-LR1315-PR1315&brandId=20579&scm=1007.13029.30626.100200300000000&pos=15','http://store.taobao.com/shop/view_shop.htm?pvid=408088f5-349b-4938-b413-276b5546d4c0&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=2677542111&abtest=_AB-LR1315-PR1315&brandId=4347044&scm=1007.13029.30626.100200300000000&pos=16','https://store.taobao.com/shop/view_shop.htm?pvid=408088f5-349b-4938-b413-276b5546d4c0&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=272205633&abtest=_AB-LR1315-PR1315&brandId=29895&scm=1007.13029.30626.100200300000000&pos=17','https://store.taobao.com/shop/view_shop.htm?pvid=408088f5-349b-4938-b413-276b5546d4c0&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=356060330&abtest=_AB-LR1315-PR1315&brandId=29896&scm=1007.13029.30626.100200300000000&pos=18','https://store.taobao.com/shop/view_shop.htm?pvid=408088f5-349b-4938-b413-276b5546d4c0&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=821690375&abtest=_AB-LR1315-PR1315&brandId=134437850&scm=1007.13029.30626.100200300000000&pos=19','https://store.taobao.com/shop/view_shop.htm?pvid=408088f5-349b-4938-b413-276b5546d4c0&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=880734502&abtest=_AB-LR1315-PR1315&brandId=147280915&scm=1007.13029.30626.100200300000000&pos=20','https://store.taobao.com/shop/view_shop.htm?pvid=408088f5-349b-4938-b413-276b5546d4c0&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=2228361831&abtest=_AB-LR1315-PR1315&brandId=84669&scm=1007.13029.30626.100200300000000&pos=21','https://store.taobao.com/shop/view_shop.htm?pvid=408088f5-349b-4938-b413-276b5546d4c0&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=420567757&abtest=_AB-LR1315-PR1315&brandId=29902&scm=1007.13029.30626.100200300000000&pos=22','https://store.taobao.com/shop/view_shop.htm?pvid=408088f5-349b-4938-b413-276b5546d4c0&abbucket=_AB-M1315_B10&acm=09042.1003.1.1200415&user_number_id=913217145&abtest=_AB-LR1315-PR1315&brandId=119622290&scm=1007.13029.30626.100200300000000&pos=23','https://store.taobao.com/shop/view_shop.htm?user_number_id=1770955031&abtest=_AB-LR1315-PR1315&pvid=bfa1f2d8-0701-4772-82b8-c2f19a099dbb&pos=92&abbucket=_AB-M1315_B10&brandId=3670389&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=1916644637&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=1&abbucket=_AB-M1315_B10&brandId=31232339&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=628189716&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=2&abbucket=_AB-M1315_B10&brandId=11714362&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=411832242&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=3&abbucket=_AB-M1315_B10&brandId=9416851&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=372448381&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=4&abbucket=_AB-M1315_B10&brandId=103301&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=2057428013&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=6&abbucket=_AB-M1315_B10&brandId=325786043&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=373327370&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=7&abbucket=_AB-M1315_B10&brandId=44602&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=917264765&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=8&abbucket=_AB-M1315_B10&brandId=3322567&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=2468841947&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=10&abbucket=_AB-M1315_B10&brandId=3459747&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=2121300288&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=11&abbucket=_AB-M1315_B10&brandId=93097&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=2129855716&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=15&abbucket=_AB-M1315_B10&brandId=4535636&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=1103226398&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=16&abbucket=_AB-M1315_B10&brandId=20086&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=1646318507&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=17&abbucket=_AB-M1315_B10&brandId=4012412&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=2815462940&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=18&abbucket=_AB-M1315_B10&brandId=19348918&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=859494695&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=19&abbucket=_AB-M1315_B10&brandId=109662167&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=1756950524&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=20&abbucket=_AB-M1315_B10&brandId=3890466&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=2760596042&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=21&abbucket=_AB-M1315_B10&brandId=20009&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=2226443848&abtest=_AB-LR1315-PR1315&pvid=9ece7cf2-3c22-497c-9e11-37ade27ea9fa&pos=22&abbucket=_AB-M1315_B10&brandId=20138&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=1787605898&abtest=_AB-LR1315-PR1315&pvid=0ba73b39-87d5-4acb-9092-bf40dce2b349&pos=23&abbucket=_AB-M1315_B10&brandId=5764853&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=619123122&abtest=_AB-LR1315-PR1315&pvid=0ba73b39-87d5-4acb-9092-bf40dce2b349&pos=24&abbucket=_AB-M1315_B10&brandId=193900792&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','//store.taobao.com/shop/view_shop.htm?user_number_id=834335716&abtest=_AB-LR1315-PR1315&pvid=0ba73b39-87d5-4acb-9092-bf40dce2b349&pos=25&abbucket=_AB-M1315_B10&brandId=84471&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=1737762401&abtest=_AB-LR1315-PR1315&pvid=0ba73b39-87d5-4acb-9092-bf40dce2b349&pos=26&abbucket=_AB-M1315_B10&brandId=55160656&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=2815374617&abtest=_AB-LR1315-PR1315&pvid=0ba73b39-87d5-4acb-9092-bf40dce2b349&pos=27&abbucket=_AB-M1315_B10&brandId=156585626&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=2991086957&abtest=_AB-LR1315-PR1315&pvid=0ba73b39-87d5-4acb-9092-bf40dce2b349&pos=28&abbucket=_AB-M1315_B10&brandId=55656&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000','https://store.taobao.com/shop/view_shop.htm?user_number_id=2436848051&abtest=_AB-LR1315-PR1315&pvid=0ba73b39-87d5-4acb-9092-bf40dce2b349&pos=29&abbucket=_AB-M1315_B10&brandId=104356443&acm=09042.1003.1.1200415&scm=1007.13029.56634.100200300000000']
	};

//brandList下换一批的JS 。先写a的DOM
var a = document.createElement('a');
a.innerText = '换一批';
a.style.background = 'red';
a.style.display = 'block';
a.style.width = '100%';
a.style.height = '100%';
a.style.cursor = 'pointer';
a.style.lineHeight = '108px';
//每次触发事件就获得当前所有brandlist下所渲染的第一DOM是所有list的第几位
function getIndex () {
	var imgSrc = brandList.getElementsByTagName('img')[0].src;
	var index = brandListArr.img.indexOf(imgSrc);
	return index;
}
//根据所得index来渲染DOM（根据innerWidth来决定一次切换会渲染的是多少个15还是23个4*4 和 4*6 -1）
function renderBrandList(length) {
	var index = getIndex();
	index += length;
	index = index >= 45?0:index;
	for (var i = 0; i < length; i++) {
		if ((i+index) > (brandListArr.img.length - 1)) {
			console.log("dayu")
			index = 0 - i;
		}
		brandList.getElementsByTagName('li')[i].innerHTML = '<img src=' + brandListArr.img[i+index] + '><div class="brand-mask"><i></i><p>' + brandListArr.text[i+index] + '</p><a href="' + brandListArr.href[i+index] + '">点击进入</a>';
	} 
}
!function ()  {
	for (var i = 0; i < 23; i++) {
		brandList.getElementsByTagName('li')[i].innerHTML = '<img src=' + brandListArr.img[i] + '><div class="brand-mask"><i></i><p>' + brandListArr.text[i] + '</p><a href="' + brandListArr.href[i] + '">点击进入</a>'}
}()
//resize事件 改变几个DOM的class 改变了它们的尺寸。
window.onresize = function () {
	if(window.innerWidth <= 1210) {
		document.getElementById('footer').className = "footer w1210";
		brandList.getElementsByTagName('li')[15].innerHTML = '';
		brandList.getElementsByTagName('li')[15].appendChild(a);
		a.onclick = function () {
			renderBrandList(15)
		}
	}
	else if (window.innerWidth <= 1260){
		document.getElementById('footer').className = "footer";
		document.getElementsByTagName("body")[0].className = "w990";
		brandList.getElementsByTagName('li')[15].innerHTML = '';
		brandList.getElementsByTagName('li')[15].appendChild(a);
		a.onclick = function () {
			renderBrandList(15)
		}
	}
	else {
		document.getElementById('footer').className = "footer";
		document.getElementsByTagName("body")[0].className = "w1230";
		
		var index = getIndex();
		brandList.getElementsByTagName('li')[15].innerHTML = '<img src=' + brandListArr.img[index+15] + '>' + '<div class="brand-mask"><i></i><p>' + brandListArr.text[index+15] + '</p><a href=' + brandListArr.href[index+15] + '>点击进入</a></div>';
		brandList.getElementsByTagName('li')[23].innerHTML = '';
		brandList.getElementsByTagName('li')[23].appendChild(a);
		a.onclick = function () {
			renderBrandList(23)
		}
	}
	if (window.innerWidth >= 1360 && (document.body.scrollTop || document.documentElement.scrollTop) >= 600) {
		document.querySelector(".anchor-bar").style.display = "block";
	}
	else {
		document.querySelector(".anchor-bar").style.display = "none";
	}
}
window.onresize()

window.onload = function () {
	//搜索框的 下input的plachholder处理
	var mallQuery = document.getElementById("mall-query")
	var mallQueryLabel = document.getElementById("mall-query-label")
	var mallQuery2 = document.getElementById("mall-query2")
	var mallQueryLabel2 = document.getElementById("mall-query-label2")
	
	mallQuery.onfocus = function () {
		var value = mallQuery.value.trim();
		if (value === "") {
			mallQueryLabel.style.visibility = "visible";
		}
		mallQuery.onkeydown = function (ev) {
			ev = ev || window.event;
			var keyCode = ev.keyCode || ev.which || ev.charCode;
			var value = mallQuery.value;
			var valueTrim = value.trim();
			if ((keyCode === 8 && value === "") || value.trim() === "") {
				mallQueryLabel.style.visibility = "hidden";
			}
		}
	}
	mallQuery.onblur = function () {
		var value = mallQuery.value.trim();
		if (value === "") {
			mallQueryLabel.style.visibility = "visible";
		}
	}

	mallQuery2.onfocus = function () {
		var value = mallQuery2.value.trim();
		if (value === "") {
			mallQueryLabel2.style.visibility = "visible";
		}
		mallQuery2.onkeydown = function (ev) {
			ev = ev || window.event;
			var keyCode = ev.keyCode || ev.which || ev.charCode;
			var value = mallQuery2.value;
			var valueTrim = value.trim();
			if ((keyCode === 8 && value === "") || value.trim() === "") {
				mallQueryLabel2.style.visibility = "hidden";
			}
		}
	}
	mallQuery2.onblur = function () {
		var value = mallQuery2.value.trim();
		if (value === "") {
			mallQueryLabel2.style.visibility = "visible";
		}
	}

	// bannerSliders切换选项卡
	function selectBanner() {
		var banner = document.getElementById("banner");
		var bannerSliders = document.getElementById("banner-sliders").getElementsByTagName('li');;
		var bannerImgs = document.getElementById("banner-imgs").getElementsByTagName("li");
		var count = 1;   //用来做选项卡切换的index

		for (var i = 0; i < bannerSliders.length; i++) {
			bannerSliders[i].index = i;
			bannerSliders[i].onmouseover = function () {
				bannerSlider(this.index)
			}
			function bannerSlider(currentIndex) {
				for (var i = 0; i < bannerSliders.length; i++) {
					bannerSliders[i].className = "";
				}
				bannerSliders[currentIndex].className = "selected";
				for (var j = 0; j < bannerImgs.length; j++) {
					bannerImgs[j].style.zIndex = 0;
				}
				bannerImgs[currentIndex].style.zIndex = 1;
				switch (currentIndex) {
					case 0:
						banner.style.backgroundColor="#1069f0";
						break;
					case 1:
						banner.style.backgroundColor="#ff5e9b";
						break;
					case 3:
						banner.style.backgroundColor="#e8e8e8";
						break;
					case 2:
						banner.style.backgroundColor="#fdaf00";
						break;
					case 4:
						banner.style.backgroundColor="#ff493b";
						break;
					case 5:
						banner.style.backgroundColor="#ffc702";
						break;
				}
				count = currentIndex + 1;
			}
		}
		setInterval(function () {
			if (count === bannerSliders.length) {
				count = 0;
			}
			bannerSlider(count);
		}, 5000)
	}
	selectBanner()

	// 直播入口小图（li）hover切换大图（li）和自滚动字幕
	var smList = document.getElementById('sm-list');
	var lgLists = document.getElementById('lg-list').getElementsByTagName('li');
	var smLists = document.getElementById('sm-list').getElementsByTagName('li');
	var previous = document.getElementById('previous-mask');
	var next = document.getElementById('next-mask');
	var forecastText = document.getElementById('forecast-text');
	var timer = null;
	next.onclick = function () {
		clearInterval(timer)
		this.style.zIndex = 0;
		timer = setInterval(function(){
			//设定每次移动数值41。因为有margin-left：-4px;
			smList.style.left = smList.offsetLeft - 37 +"px";
			if (smList.offsetLeft <= -492) {
				smList.style.left = -492 + "px";
				clearInterval(timer);
				previous.style.zIndex = 1;
			}
		},30)
	}
	previous.onclick = function () {
		clearInterval(timer)
		this.style.zIndex = 0;
		timer = setInterval(function(){
			smList.style.left = smList.offsetLeft + 45 +"px";
			if (smList.offsetLeft >= 0) {
				smList.style.left = 0 + "px";
				clearInterval(timer);
				next.style.zIndex = 1;
			}
		},30)
	}
	for (var i = 0; i < smLists.length; i++) {
		smLists[i].index = i;
		smLists[i].onmouseover = function () {
			for (var i = 0; i < smLists.length; i++) {
				smLists[i].getElementsByTagName('img')[1].style.display="none";
				lgLists[i].style.zIndex = 0;
			}
			this.getElementsByTagName('img')[1].style.display="block";
			lgLists[this.index].style.zIndex = 1;
		}
	}

	setInterval(function(){
		var count = 0;
		var speed = -4;
		if (forecastText.offsetTop <= -40) {
			speed = -speed;
			forecastText.style.top = -40 + "px";
		}
		var scrollTimer = setInterval(function(){
			forecastText.style.top = forecastText.offsetTop + speed +"px" 
			count++
			if (count === 10) {
				clearInterval(scrollTimer);
				forecastText.style.top = 0;
			}
		},30)
	},3000)

	// anchor字幕滚动
	var anchorBannerText = document.querySelectorAll(".anchor-banner-text");
	var li = [];
	for (var i =0; i < anchorBannerText.length; i++) {
		anchorLi = anchorBannerText[i].getElementsByTagName('li');
		li = li.concat(anchorLi)
	}
	
	for (var i = 0; i < li.length; i++) {
		li[i][0].style.marginTop = 0;
		scrollText(i);
		function scrollText(i) {
			var condition = 1;
			setInterval(function () {
				// 每两次之后换方向移动。一次上/下移动30px
				scrollSpeed = condition / 2 > 1?3:-3;
				var num = 0;
				var textScrollTimer = setInterval(function(){
					if (num == 10) {
						clearInterval(textScrollTimer);

					}
					else {
						num++
						li[i][0].style.marginTop = parseInt(li[i][0].style.marginTop) + scrollSpeed + "px"
						var temp = li[i][0].innerText;
						li[i][0].innerText = li[i][2].innerText;
						li[i][2].innerText = temp;
					}
				},30)
				condition++;
				condition = condition == 5?1:condition;
			},5000)
		}
	}
}

var headerBar = document.getElementById('header-bar');
var anchorBar = document.getElementById('anchor-bar');
window.onscroll = function () {
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if (scrollTop < 600) {
		anchorBar.style.display = "none";
	}
	else {
		if (window.innerWidth >= 1360) {
			anchorBar.style.display = "block";
		}
	}
	if (scrollTop >= 789) {
		//不然就遮住了顶部啊。。
		headerBar.display = "fixed";
		headerBar.style.top = 0 + "px";
	}
	else {
		headerBar.display = "none";
		headerBar.style.top = -150 + "px";
	}
}
var aa = anchorBar.getElementsByTagName('a');
for (var i = 0; i < aa.length; i++) {
	//点击左侧锚链接，滚到到它所对应的位置。（JS运动，不会直接跳转到）
	aa[i].onclick = function () {
		var index = this.href.indexOf("#")
		var targetId = this.href.slice(this.href.indexOf("#") + 1);
		var targetDom = document.getElementById(targetId);
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		var targetTop = targetDom.offsetTop - 35;
		speed3 = (targetTop - scrollTop) / 10;   //运动次数固定，根据不同距离计算speed
		var timm = setInterval(function () {
			scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			if (Math.abs(targetTop - scrollTop) < Math.abs(speed3)) {
				clearInterval(timm);
			}
			else {
				var z = scrollTop + speed3;
				window.scrollTo(0, z);
			}
		},30)
		return false;
	}
}

// TODO
// 翻牌效果

// Q1 .anchor-bar 自滚动active状态。。？。。
// Q2出现滚动条后左右移动。。右边间距问题？
