const $ = new Env("WLKDAPP");
const host = "https://wlkdapi.zhongchuanjukan.com";
const tgmarkcode = "/submitactivitycodes wlkdapp@"
const githubkeyUrl = 'https://ghproxy.com/https://raw.githubusercontent.com/CenBoMin/TGBOTCode/main/wlkdapp.js'
let wlkdapp = $.isNode() ? require('./v2pcookie') : $.getjson('wlkdapp', []);
console.log(typeof wlkdapp);
let wlkdappkey = $.getval('wlkdappkey');
const notify = $.isNode() ? require('./sendNotify') : '';
$.tz = "";
$.hour = (new Date()).getHours();
$.minute = (new Date()).getMinutes();
//============================
//+++++++++ 执行函数 ++++++++++
//============================
var _0xodL='jsjiami.com.v6',_0x48b3=[_0xodL,'HsKqL8K4w700wr8vwq4=','OhjCosOHw4Y=','44CQ5o+Q56a+44OD6K6H5Yes5Yic5b2U6Iyz5Y+4NnlcVsKlwq/DhcKTwq4SbfCes5k=','wr3DpCVnDw==','dsKaKMOawqw=','w6d6F2Ag','w6PDlgAg','5Lu15Yqz5oqd6KCB6YC755yv8Y+WrA==','f3jDlw==','w7EKGA==','wrUlw6B6wrtAw4gXIMOCdsOwR8OXwqJowpM=','w5B+esONwpw=','RsKLwpjChcOw','w45/wpccw5M=','VyEeJxw=','wqvDgDZ6LQ==','ccKCaMOIwqE=','44CP5o2956Wy44GZ6K+W5Yal5YqT5b+P6Iyw5Y6QUcOna8KfQcOd8KayrQ==','UsOcwqM=','AuODn++5pcKv','wrhAOQvCksOo','wrcww5XCvQg=','YXLDkcOSw43DosKzXMK4DsO5wr0h','ccKFWMOIwpw=','IMOnABgjQ3AHw6E2aCdE','KX8dwpkrQzHDlMKVFxMqdsOg','T1MAwofCgw==','wovCjSjDlMOTwpTCkQ==','wpTCtx8Sw5rDtcKU','wpd3wp8=','wrbjgKLvuK3DvQ==','wpclw7A=','DMKVDyvCqMKX','wo/CvRglw4g=','w4gcB08r','wovCsBk=','ScKzwqDDgcKg','NMKERsKUwofDqX3DpG/Dozxb','WPGCt7TCog==','w4F25bye5aac6auj6K+yVueUsuaIoQ==','NsONwqUOwpo=','d2HDs8Ouw4s=','wpTCii4=','w7TDigA0','Tw1/','PDl0','eOOAo++4lcK+','55qH6IaN5p+d5LuP5Yiy','BhTCog==','S8OawqA=','HcKMwovCoOeniumThempueivguWntei1n+++rg==','bG/Dow==','wqfwspWzQQ==','w4t0wqAc','Ti3DjsKWw5/DqcK0RMK0EPC8ga1q5bKR6K2q5puw5pWswoLohKnmn6/kvYbnloTmnr3pmZrnpr/pkYbCqcKuw53Cnw==','IBwcDGA=','S3fDs8KdJg==','HnF9','BBrCqFs=','WcOz5YWm5q6N6amf6K+/V+eWqOaKiQ==','wovCviYLw74=','w5bohILmn5Tkvpvnl6PmnJ/pmJM9wrpo','wq/CsA3Dt8Od','dDoEDjk=','SMK5JXY=','dsO+wpU=','C+ODme+4pcOg','QRPCvDo=','Z15lEkrCqsOvwqsYw4rwtrKtwoDmi4PooqrohoHmnITCheW/kuWnneaJkOijkMKKwrvDrcKnIw==','wpYcw4vCnz8=','55m86Ie/5p2l5Lmd5YiX','w7lQUsOMwqg=','wrjCtMKfwrjDqQ==','wqs+w4A=','LsKEw6ZZ','w7zDnsK5w5bnpYXpkprpq5rorYflpavot77vvKI=','HxTCnQ==','IWfClGJu','SGA66KyS5Z6A57265YSr5o2V5Luv5LmR5Yqz56KxA+WmtuacjuW2iOaMmeS6jOispeeoleWQr+WHnOisr+ithuOAlsOa8Kq1kOmpoOismeehmuaMoOS7seahuuW9tsOP','HVnCnw==','w49OK3A=','4puw77mZ55S75oi+','VkbDnMKlGQ==','G8O+KOivpOWdsue+geWGieaMvOS6l+mqo+ivvuehhMK75aWQ5p6d5ba05o6A5Lqz6K+k56i55ZGl5YWg6K2X6KyA44Crwp7wupSd6aiE6Ky856GD5o+N5Lq85qGh5b2Ewqw=','RGzCmA==','ZjASKzc=','TMOQ5aWQ6LWpw73Dn+WMtOWYuQfCkg==','S8KIwohAw7bCkcOi','RcOvZnY=','ZsKPWsOowoo=','IcKpOsKRw7Y=','wp99wpvCi8KvOQ==','w5jDncOK','TsK2wq7CqcOAYsON','PsKPPMK3w6I=','RWDCnAZX','ccOMJS0=','w5TDheWluOi2g8KXw5bljarlmJojwqo=','8KOXt8OY6aq/6K+9dAjCoMKz','XmLCu8Kmw78=','QMKXwqhpw7Q=','dMONV3czVnjChV1MSyzDs8OvMHFoLyRWXsKPw6PDoRvCpcKtRsKlw417JX1rc8O0w43Dh3MUwq8JZQjCj0/DkgNVw5jDmVBmw6cfw4Z0V14yAC7Dn8Ozw5V3d8KeO8KbE8KDwo4b','a8O+wps9bcOwbMOodMOow47DvsOwcjksBXXCk8Krw5ECw5TDmWrCoEEXw7zDlSh3Hm8KUjJ4dQDCjlJDwok4w7HDosKawo1dw7jDu8OFWSDDksKnbUfDn2DCj8O/w77CkH4gw73Ck2Q3w69RPQ==','QMKmacO/wrxCwq/ClBdnTMOXw6MjOcK2OcOow4vCmEMcwpFZWCpNwrUfw4zDsBZTYl7DiMK7wpcuSsOOMsOow6QDE2VpG2EZZCDDgEllw487w6cgeFILw67DpQ==','bXrCmz9iwqXCpMOdcww=','wqQ5w4bCvC7DgcOwVH7Cig==','wpcpw4INwo0=','csKpwrjCtcOO','PsKVfMKuwp4=','fcKEwpHDicK6','ZsKRIMOUwpU=','JlsDwpkt','wqw0w57CnRnDnA==','w7YABkYsw5s=','RMKwwqvCvsO5WQ==','bcKow5swY8Ox','wpgiw7YowpZb','LcORfTQQwpHDqjPCtzoB','DRgpTinCr8KtwqNFw5vCkGPCmsOYw5XDpxw=','CMK2HsKRw54=','M3MXwpswag==','a0TCiMK7w6w=','w7UiejIXfE4=','XcObwqUrRcO3','wq4/w4PCqxXDocOy','wpHCiy3Dg8OOwrnCkw==','Mz5ye8KEw48=','aMOywohnw6fDmQ==','aMKKTsOewoFLwo4=','w4TDgSwjcA==','dGrDgcKRMQ==','JlnCvF5b','S1HCiCVl','w7nDnSgGVg==','G8KrJ8K3w5Q=','w4dRwqM+cQ==','dgzDhX3CtA==','B8K2PMKYw78=','ZnLDq8K/M8OMMMKmw4dBcm8=','w41dMVAy','w7o+cTosW0loVXnDimY=','JQNkSsKf','PDN9bsKxw5M=','WsO7wrw0SA==','NxozPVM=','w74NHmcbw4bDusK/ODE=','a8K4wrnDmMKn','ZMKQHcKxw44=','YMO/wpBGw5LDnw==','wphwwpnClsKKKA==','dMOIMRtVwp8=','TsKJwodTw5vCiQ==','Lw8mB1Mz','ZcKlw4MRVsO3','w5coHEc2','Z8KhworDnsKQUU3DpcO/wo8=','w69Ywq4rw58=','w7lcUMOOwpk=','ZmPDlsKOw6nDvsKkX8K1GA==','UwfDtkIEw48mO3x/w7BDUmVMcMOxXHA=','ZVHDqcKxCQ==','J8KHAAHCpg==','U8KLNcO0wpI=','bcKBRMOcwo1s','C8OcwoQTwoI=','ZcKlw4MRVMOsWcOKwqvCmg==','wp1qwpfCicKINCJhw5cpw40O','wqIww4Y5wpE=','w4bDosOiQDc=','wo9BDxfCuA==','wpI3w5/CgDk=','w6vDhQIoVMK1wrhOUkfCiAc=','TcKVHsOAwrk=','w4UCchAg','w4NnwqIUw7Ihwr8Gw5YKw5tt','w5Z2wqMgbw==','dcOuwrZGw7Q=','C8K4RcK+wos=','wqrDugN8Bg==','FGx1wojDq8K2w4/DtwjCrH7DlQ==','w5c4awYc','w7x/wqwew6g=','diEKISs=','C8KVGB/CqMKN','QsOoaWEbUQ==','w7Znwq8iaMOR','JwI+JmY1','bsKoIcKMw4c=','wqQ5w4bCvCzDmg==','w7twwpg2Tg==','wqROARrClA==','BsKALTzCmw==','IhgwOWQpwoHCiivCvsO3IQ==','bcO4wpnDh10=','ZcOlwrt5w6Y=','WMOBwqs0R8OrecOzWcOkw57Dsg==','d8OBwogSSw==','ZzkZNxo=','FljCl15/VS3DqMO6wpTCtcOh','asKBU8Oowo12','I8KAcMKowrw=','wojCjTrDv8O8','w4vCmXnDmsKHworDh8KGLMO2w4E=','IyZ/YMKx','fAjDvF7Cgy/CggDCl8O4','aGDClSBiwqLCocOKcRcpwoU=','wpVLwpfCosKa','PgdGZMKC','SwZfQWE=','wpt9HxXCow==','w6lZNFIj','w4R6wro1Vw==','dMKhwpjDtcKZ','KUzCj1t6','w78kfyUsXEx/V2I=','CG4BwoQq','W2HDgsOxw7k=','Fg9hQ8KS','Yxx3dlI=','woXDuyhKKg==','wrXDrSBrGXtU','QcKOwoE=','jHKsRVjiawmiMSRP.gcTAohzbmz.v6=='];(function(_0x532a7e,_0x30287a,_0x517eed){var _0x53f3bc=function(_0x12699c,_0x21e3c,_0xe74e13,_0x23a71d,_0x346355){_0x21e3c=_0x21e3c>>0x8,_0x346355='po';var _0x3dbe32='shift',_0x16f42e='push';if(_0x21e3c<_0x12699c){while(--_0x12699c){_0x23a71d=_0x532a7e[_0x3dbe32]();if(_0x21e3c===_0x12699c){_0x21e3c=_0x23a71d;_0xe74e13=_0x532a7e[_0x346355+'p']();}else if(_0x21e3c&&_0xe74e13['replace'](/[HKRVwMSRPgTAhzbz=]/g,'')===_0x21e3c){_0x532a7e[_0x16f42e](_0x23a71d);}}_0x532a7e[_0x16f42e](_0x532a7e[_0x3dbe32]());}return 0x98f68;};return _0x53f3bc(++_0x30287a,_0x517eed)>>_0x30287a^_0x517eed;}(_0x48b3,0x65,0x6500));var _0x651d=function(_0x721dd,_0x1fb0c0){_0x721dd=~~'0x'['concat'](_0x721dd);var _0x5cfb98=_0x48b3[_0x721dd];if(_0x651d['YxnCcK']===undefined){(function(){var _0x5d337d=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x9741b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5d337d['atob']||(_0x5d337d['atob']=function(_0x322361){var _0x32c29d=String(_0x322361)['replace'](/=+$/,'');for(var _0x1aedd4=0x0,_0x2f80ed,_0x1938a5,_0x15cf89=0x0,_0x3bf960='';_0x1938a5=_0x32c29d['charAt'](_0x15cf89++);~_0x1938a5&&(_0x2f80ed=_0x1aedd4%0x4?_0x2f80ed*0x40+_0x1938a5:_0x1938a5,_0x1aedd4++%0x4)?_0x3bf960+=String['fromCharCode'](0xff&_0x2f80ed>>(-0x2*_0x1aedd4&0x6)):0x0){_0x1938a5=_0x9741b['indexOf'](_0x1938a5);}return _0x3bf960;});}());var _0x78786d=function(_0x1aa31b,_0x1fb0c0){var _0xbc10e6=[],_0x484903=0x0,_0xab2b3b,_0x52f155='',_0x2a7524='';_0x1aa31b=atob(_0x1aa31b);for(var _0x3ccda5=0x0,_0x2eac72=_0x1aa31b['length'];_0x3ccda5<_0x2eac72;_0x3ccda5++){_0x2a7524+='%'+('00'+_0x1aa31b['charCodeAt'](_0x3ccda5)['toString'](0x10))['slice'](-0x2);}_0x1aa31b=decodeURIComponent(_0x2a7524);for(var _0x8470a4=0x0;_0x8470a4<0x100;_0x8470a4++){_0xbc10e6[_0x8470a4]=_0x8470a4;}for(_0x8470a4=0x0;_0x8470a4<0x100;_0x8470a4++){_0x484903=(_0x484903+_0xbc10e6[_0x8470a4]+_0x1fb0c0['charCodeAt'](_0x8470a4%_0x1fb0c0['length']))%0x100;_0xab2b3b=_0xbc10e6[_0x8470a4];_0xbc10e6[_0x8470a4]=_0xbc10e6[_0x484903];_0xbc10e6[_0x484903]=_0xab2b3b;}_0x8470a4=0x0;_0x484903=0x0;for(var _0x15d52d=0x0;_0x15d52d<_0x1aa31b['length'];_0x15d52d++){_0x8470a4=(_0x8470a4+0x1)%0x100;_0x484903=(_0x484903+_0xbc10e6[_0x8470a4])%0x100;_0xab2b3b=_0xbc10e6[_0x8470a4];_0xbc10e6[_0x8470a4]=_0xbc10e6[_0x484903];_0xbc10e6[_0x484903]=_0xab2b3b;_0x52f155+=String['fromCharCode'](_0x1aa31b['charCodeAt'](_0x15d52d)^_0xbc10e6[(_0xbc10e6[_0x8470a4]+_0xbc10e6[_0x484903])%0x100]);}return _0x52f155;};_0x651d['CYgWQn']=_0x78786d;_0x651d['aBSQeG']={};_0x651d['YxnCcK']=!![];}var _0x18cc47=_0x651d['aBSQeG'][_0x721dd];if(_0x18cc47===undefined){if(_0x651d['EVyDKa']===undefined){_0x651d['EVyDKa']=!![];}_0x5cfb98=_0x651d['CYgWQn'](_0x5cfb98,_0x1fb0c0);_0x651d['aBSQeG'][_0x721dd]=_0x5cfb98;}else{_0x5cfb98=_0x18cc47;}return _0x5cfb98;};let shareCodeList=[_0x651d('0','uYm0'),_0x651d('1','2QZN')];var Base64={'keyStr':_0x651d('2','$7AY'),'encode':function(_0xd93050){var _0x124381={'tBPlS':function(_0x1bf21d,_0x57af39){return _0x1bf21d<_0x57af39;},'bszDO':function(_0x1fbf46,_0x100482){return _0x1fbf46|_0x100482;},'mYlOp':function(_0x1a9639,_0x1a4099){return _0x1a9639<<_0x1a4099;},'lcUWZ':function(_0x1e5159,_0x2b8610){return _0x1e5159&_0x2b8610;},'Uqryv':function(_0x5ab670,_0x4c4ffe){return _0x5ab670>>_0x4c4ffe;},'bpyFh':function(_0x181980,_0x2ac100){return _0x181980(_0x2ac100);},'yMzei':function(_0x313e3e,_0x29605d){return _0x313e3e+_0x29605d;}};var _0x1cf4b5='';var _0x5d1985,_0x33cc86,_0x41313b,_0x1c7aad,_0x50d3ba,_0x25d68e,_0x3aa48a;var _0x1e10a4=0x0;_0xd93050=Base64['utf8encode'](_0xd93050);while(_0x124381['tBPlS'](_0x1e10a4,_0xd93050['length'])){_0x5d1985=_0xd93050['charCodeAt'](_0x1e10a4++);_0x33cc86=_0xd93050[_0x651d('3','wjaj')](_0x1e10a4++);_0x41313b=_0xd93050[_0x651d('4','NeJB')](_0x1e10a4++);_0x1c7aad=_0x5d1985>>0x2;_0x50d3ba=_0x124381['bszDO'](_0x124381['mYlOp'](_0x124381[_0x651d('5','IZ!F')](_0x5d1985,0x3),0x4),_0x124381[_0x651d('6','hfy9')](_0x33cc86,0x4));_0x25d68e=_0x124381['bszDO'](_0x124381['lcUWZ'](_0x33cc86,0xf)<<0x2,_0x41313b>>0x6);_0x3aa48a=_0x124381[_0x651d('7','mt5o')](_0x41313b,0x3f);if(_0x124381['bpyFh'](isNaN,_0x33cc86)){_0x25d68e=_0x3aa48a=0x40;}else if(_0x124381['bpyFh'](isNaN,_0x41313b)){_0x3aa48a=0x40;}_0x1cf4b5=_0x124381[_0x651d('8','CEjp')](_0x124381[_0x651d('9','n&(E')](_0x124381[_0x651d('a','5j2%')](_0x1cf4b5+this[_0x651d('b','NeJB')]['charAt'](_0x1c7aad),this['keyStr']['charAt'](_0x50d3ba)),this[_0x651d('c','muN*')][_0x651d('d','hfy9')](_0x25d68e)),this[_0x651d('e','ETy$')][_0x651d('f','IZ!F')](_0x3aa48a));}return _0x1cf4b5;},'decode':function(_0x562796){var _0x4adea0={'uUwCZ':_0x651d('10','8*Af'),'VhlEc':function(_0xc0952d,_0x598f80){return _0xc0952d<_0x598f80;},'dHxmL':_0x651d('11','S%!V'),'oqRtt':function(_0x5e1888,_0x4bacb0){return _0x5e1888>>_0x4bacb0;},'exXBV':function(_0x146cf9,_0x249e72){return _0x146cf9(_0x249e72);},'lrwEd':function(_0x12ece7,_0x434ff8){return _0x12ece7+_0x434ff8;},'JMcRn':function(_0x1e2d2d,_0x28ae30){return _0x1e2d2d|_0x28ae30;},'ECrhD':function(_0x250c60,_0x305989){return _0x250c60&_0x305989;},'gsmCP':function(_0x1b1231,_0x389394){return _0x1b1231!==_0x389394;},'mIqZI':_0x651d('12','859e'),'VsDmg':function(_0xf86a2a,_0x21fca8){return _0xf86a2a|_0x21fca8;},'IvAfg':function(_0x40a6fd,_0x5d0462){return _0x40a6fd<<_0x5d0462;},'tjECA':function(_0x12eec0,_0x34be7c){return _0x12eec0>>_0x34be7c;},'poljO':function(_0x443e2f,_0x576d93){return _0x443e2f|_0x576d93;},'ZSuOm':function(_0x48d922,_0x1e0f7c){return _0x48d922<<_0x1e0f7c;},'ilXQt':function(_0x340b3e,_0x24abf7){return _0x340b3e&_0x24abf7;}};var _0xe500d0='';var _0x37ac1f,_0x1de4b5,_0x123a12;var _0xba9b4,_0x2c453f,_0x2c87f9,_0x46cacf;var _0x8e6ab2=0x0;_0x562796=_0x562796['replace'](/[^A-Za-z0-9\+\/\=]/g,'');while(_0x8e6ab2<_0x562796[_0x651d('13','5j2%')]){if(_0x4adea0['gsmCP'](_0x4adea0['mIqZI'],_0x651d('14','w5]E'))){_0xba9b4=this['keyStr'][_0x651d('15','zSZ)')](_0x562796[_0x651d('16','2QZN')](_0x8e6ab2++));_0x2c453f=this['keyStr'][_0x651d('17','NeJB')](_0x562796['charAt'](_0x8e6ab2++));_0x2c87f9=this[_0x651d('b','NeJB')][_0x651d('18','Lxl#')](_0x562796[_0x651d('19','WfzF')](_0x8e6ab2++));_0x46cacf=this[_0x651d('1a','fpSj')][_0x651d('1b','$7AY')](_0x562796['charAt'](_0x8e6ab2++));_0x37ac1f=_0x4adea0['VsDmg'](_0x4adea0[_0x651d('1c','jS@d')](_0xba9b4,0x2),_0x4adea0[_0x651d('1d','N@Ez')](_0x2c453f,0x4));_0x1de4b5=_0x4adea0[_0x651d('1e','vnE@')](_0x4adea0[_0x651d('1f','wjaj')](_0x2c453f,0xf)<<0x4,_0x4adea0[_0x651d('20','jS@d')](_0x2c87f9,0x2));_0x123a12=_0x4adea0[_0x651d('21','859e')](_0x4adea0[_0x651d('22','9n13')](_0x4adea0[_0x651d('23','j%3M')](_0x2c87f9,0x3),0x6),_0x46cacf);_0xe500d0=_0x4adea0[_0x651d('24','859e')](_0xe500d0,String['fromCharCode'](_0x37ac1f));if(_0x2c87f9!=0x40){_0xe500d0=_0xe500d0+String[_0x651d('25','N@Ez')](_0x1de4b5);}if(_0x46cacf!=0x40){_0xe500d0=_0x4adea0[_0x651d('26','LAKQ')](_0xe500d0,String[_0x651d('27','zSZ)')](_0x123a12));}}else{var _0x56be0b=_0x4adea0[_0x651d('28','WfzF')]['split']('|'),_0x2723ea=0x0;while(!![]){switch(_0x56be0b[_0x2723ea++]){case'0':while(_0x4adea0['VhlEc'](_0x365b11,_0x562796[_0x651d('29','WfzF')])){var _0x54221c=_0x4adea0[_0x651d('2a','2QZN')][_0x651d('2b','$ovE')]('|'),_0xc16800=0x0;while(!![]){switch(_0x54221c[_0xc16800++]){case'0':_0x43c464=_0x562796[_0x651d('2c','muN*')](_0x365b11++);continue;case'1':_0x45186e=_0x4adea0[_0x651d('2d','CEjp')](_0x66a54d,0x2);continue;case'2':_0x51fe1d=_0x562796['charCodeAt'](_0x365b11++);continue;case'3':if(_0x4adea0['exXBV'](isNaN,_0x51fe1d)){_0x3b67db=_0x36db21=0x40;}else if(_0x4adea0['exXBV'](isNaN,_0x43c464)){_0x36db21=0x40;}continue;case'4':_0x150adb=_0x4adea0['lrwEd'](_0x4adea0['lrwEd'](_0x4adea0[_0x651d('2e','t&GL')](_0x4adea0['lrwEd'](_0x150adb,this['keyStr'][_0x651d('2f','fpSj')](_0x45186e)),this['keyStr'][_0x651d('30','1Njr')](_0x251b02)),this[_0x651d('31','8*Af')][_0x651d('32','jO^!')](_0x3b67db)),this[_0x651d('33','$ovE')][_0x651d('34','ETy$')](_0x36db21));continue;case'5':_0x36db21=_0x43c464&0x3f;continue;case'6':_0x3b67db=_0x4adea0[_0x651d('35','muN*')](_0x4adea0['ECrhD'](_0x51fe1d,0xf)<<0x2,_0x4adea0['oqRtt'](_0x43c464,0x6));continue;case'7':_0x66a54d=_0x562796[_0x651d('36','CEjp')](_0x365b11++);continue;case'8':_0x251b02=_0x4adea0[_0x651d('37','JS0g')](_0x4adea0[_0x651d('38','F(^^')](_0x66a54d,0x3)<<0x4,_0x4adea0['oqRtt'](_0x51fe1d,0x4));continue;}break;}}continue;case'1':var _0x365b11=0x0;continue;case'2':var _0x150adb='';continue;case'3':return _0x150adb;case'4':_0x562796=Base64[_0x651d('39','Mzk^')](_0x562796);continue;case'5':var _0x66a54d,_0x51fe1d,_0x43c464,_0x45186e,_0x251b02,_0x3b67db,_0x36db21;continue;}break;}}}_0xe500d0=Base64['utf8decode'](_0xe500d0);return _0xe500d0;},'utf8encode':function(_0xb3a031){var _0x3770a7={'pJWOK':_0x651d('3a','jQm&'),'fJKxm':function(_0x3597fe,_0x132995){return _0x3597fe<<_0x132995;},'frNGR':function(_0x12c4bf,_0x457635){return _0x12c4bf|_0x457635;},'zgTec':function(_0x472557,_0x142a93){return _0x472557<<_0x142a93;},'fpLpG':function(_0x4fd359,_0x58a9e7){return _0x4fd359!=_0x58a9e7;},'RIDqE':function(_0x1a7d80,_0x5700da){return _0x1a7d80|_0x5700da;},'fEQlq':function(_0x21fa2d,_0x28e8e4){return _0x21fa2d<<_0x28e8e4;},'YNlGO':function(_0x1e5259,_0xc2b22e){return _0x1e5259&_0xc2b22e;},'frJMu':function(_0x51f903,_0x423e9c){return _0x51f903>>_0x423e9c;},'BNqhq':function(_0x28c1cc,_0x2a73f7){return _0x28c1cc+_0x2a73f7;},'IrLKO':function(_0x5c13a3,_0x4f853a){return _0x5c13a3!=_0x4f853a;},'LWoEn':function(_0x103275,_0x5848fd){return _0x103275<_0x5848fd;},'YzQcF':function(_0xd8e50a,_0x1f7c6d){return _0xd8e50a>_0x1f7c6d;},'kVLZu':function(_0x5058fb,_0x53e81a){return _0x5058fb<_0x53e81a;},'RPijz':function(_0x572289,_0x4fc936){return _0x572289!==_0x4fc936;},'QhZhO':_0x651d('3b','N@Ez'),'UfxNT':_0x651d('3c','soBb'),'KtuQs':function(_0x256637,_0x48cd3f){return _0x256637|_0x48cd3f;},'vyGrg':function(_0x49226e,_0xa010ed){return _0x49226e>>_0xa010ed;},'YjagY':function(_0x1d97b6,_0x522b1c){return _0x1d97b6&_0x522b1c;}};var _0xc70030='';_0xb3a031=_0xb3a031['replace'](/\r\n/g,'\x0a');for(var _0x3aa19d=0x0;_0x3770a7[_0x651d('3d','n&(E')](_0x3aa19d,_0xb3a031[_0x651d('3e','$7AY')]);_0x3aa19d++){if('wzYcK'!==_0x651d('3f','#S3G')){var _0x4aa54=_0xb3a031[_0x651d('40','ETy$')](_0x3aa19d);if(_0x4aa54<0x80){_0xc70030+=String[_0x651d('41','1Njr')](_0x4aa54);}else if(_0x3770a7[_0x651d('42','IZ!F')](_0x4aa54,0x7f)&&_0x3770a7[_0x651d('43','6ro@')](_0x4aa54,0x800)){if(_0x3770a7['RPijz'](_0x3770a7[_0x651d('44','87zA')],_0x3770a7[_0x651d('45','NeJB')])){_0xc70030+=String[_0x651d('46','jS@d')](_0x3770a7['RIDqE'](_0x4aa54>>0x6,0xc0));_0xc70030+=String['fromCharCode'](_0x3770a7[_0x651d('47','n&(E')](_0x3770a7[_0x651d('48','zSZ)')](_0x4aa54,0x3f),0x80));}else{enc3=enc4=0x40;}}else{_0xc70030+=String[_0x651d('49','JS0g')](_0x3770a7[_0x651d('4a','9n13')](_0x3770a7[_0x651d('4b','fpSj')](_0x4aa54,0xc),0xe0));_0xc70030+=String['fromCharCode'](_0x3770a7[_0x651d('4c','mt5o')](_0x3770a7[_0x651d('4d','22pW')](_0x4aa54,0x6),0x3f)|0x80);_0xc70030+=String[_0x651d('4e','W]L7')](_0x3770a7[_0x651d('4f','zSZ)')](_0x3770a7[_0x651d('50','JS0g')](_0x4aa54,0x3f),0x80));}}else{var _0x13fd68=_0x3770a7['pJWOK'][_0x651d('51','P5#t')]('|'),_0x12aadb=0x0;while(!![]){switch(_0x13fd68[_0x12aadb++]){case'0':enc4=this[_0x651d('52','soBb')]['indexOf'](input[_0x651d('53','uYm0')](i++));continue;case'1':enc3=this[_0x651d('54','9n13')]['indexOf'](input[_0x651d('55','$ovE')](i++));continue;case'2':chr1=_0x3770a7[_0x651d('56','t&GL')](enc1,0x2)|enc2>>0x4;continue;case'3':enc2=this[_0x651d('e','ETy$')]['indexOf'](input[_0x651d('57','NeJB')](i++));continue;case'4':chr3=_0x3770a7[_0x651d('58','9n13')](_0x3770a7[_0x651d('59','87zA')](enc3&0x3,0x6),enc4);continue;case'5':if(_0x3770a7[_0x651d('5a','soBb')](enc4,0x40)){output=output+String[_0x651d('5b','$ovE')](chr3);}continue;case'6':chr2=_0x3770a7[_0x651d('47','n&(E')](_0x3770a7['fEQlq'](_0x3770a7[_0x651d('5c','(a^5')](enc2,0xf),0x4),_0x3770a7[_0x651d('5d','fpSj')](enc3,0x2));continue;case'7':output=_0x3770a7['BNqhq'](output,String[_0x651d('5e','2QZN')](chr1));continue;case'8':if(_0x3770a7[_0x651d('5f','2QZN')](enc3,0x40)){output=_0x3770a7[_0x651d('60','Bpzn')](output,String[_0x651d('61','vnE@')](chr2));}continue;case'9':enc1=this[_0x651d('62','$7AY')]['indexOf'](input['charAt'](i++));continue;}break;}}}return _0xc70030;},'utf8decode':function(_0x5ebded){var _0x53aab0={'YtqjT':function(_0x21ac42,_0x317d1d){return _0x21ac42<_0x317d1d;},'nSoFQ':function(_0x1c414,_0x27c810){return _0x1c414>_0x27c810;},'nQUmG':function(_0x43977d,_0x37056a){return _0x43977d<_0x37056a;},'JJOuG':function(_0xe9f561,_0x1819a6){return _0xe9f561===_0x1819a6;},'qbDsx':_0x651d('63','mt5o'),'ETJjT':function(_0x3f1ab6,_0x1022a7){return _0x3f1ab6+_0x1022a7;},'HvrGu':function(_0x4d66d1,_0x11d4af){return _0x4d66d1|_0x11d4af;},'YxlDK':function(_0x587cbf,_0xf116d9){return _0x587cbf&_0xf116d9;},'lvHMk':function(_0x319006,_0x93dcbd){return _0x319006===_0x93dcbd;},'YfwhF':_0x651d('64','Lxl#'),'Wxxxn':function(_0x46f97,_0x33abbf){return _0x46f97+_0x33abbf;},'FYrJW':function(_0x53e961,_0x3f52a2){return _0x53e961<<_0x3f52a2;}};var _0x5a93db=_0x651d('65','Lxl#')[_0x651d('66','WfzF')]('|'),_0xb43da=0x0;while(!![]){switch(_0x5a93db[_0xb43da++]){case'0':var _0x556854=0x0;continue;case'1':var _0x579d21,_0x218683,_0x2cb88a,_0x28c059;continue;case'2':_0x579d21=_0x218683=_0x2cb88a=0x0;continue;case'3':var _0x51c9e0='';continue;case'4':return _0x51c9e0;case'5':while(_0x53aab0['YtqjT'](_0x556854,_0x5ebded['length'])){_0x579d21=_0x5ebded[_0x651d('67','j%3M')](_0x556854);if(_0x579d21<0x80){_0x51c9e0+=String[_0x651d('68','wjaj')](_0x579d21);_0x556854++;}else if(_0x53aab0[_0x651d('69','1Njr')](_0x579d21,0xbf)&&_0x53aab0[_0x651d('6a','WfzF')](_0x579d21,0xe0)){if(_0x53aab0['JJOuG']('VdZtT',_0x53aab0[_0x651d('6b','S%!V')])){return![];}else{_0x2cb88a=_0x5ebded[_0x651d('4','NeJB')](_0x53aab0[_0x651d('6c','87zA')](_0x556854,0x1));_0x51c9e0+=String[_0x651d('61','vnE@')](_0x53aab0[_0x651d('6d','LAKQ')](_0x53aab0[_0x651d('6e','9n13')](_0x579d21,0x1f)<<0x6,_0x2cb88a&0x3f));_0x556854+=0x2;}}else{if(_0x53aab0['lvHMk'](_0x651d('6f','CEjp'),_0x53aab0[_0x651d('70','vnE@')])){_0x2cb88a=_0x5ebded[_0x651d('71','zSZ)')](_0x53aab0['Wxxxn'](_0x556854,0x1));_0x28c059=_0x5ebded[_0x651d('2c','muN*')](_0x53aab0[_0x651d('72','5j2%')](_0x556854,0x2));_0x51c9e0+=String[_0x651d('41','1Njr')](_0x53aab0['HvrGu'](_0x53aab0[_0x651d('73','Mzk^')]((_0x579d21&0xf)<<0xc,_0x53aab0[_0x651d('74','WfzF')](_0x53aab0[_0x651d('75','S%!V')](_0x2cb88a,0x3f),0x6)),_0x53aab0[_0x651d('76','22pW')](_0x28c059,0x3f)));_0x556854+=0x3;}else{try{if(ll[_0x651d('77','22pW')](id)>-0x1){return!![];}}catch(_0x454dff){$[_0x651d('78','jO^!')](_0x454dff);return![];}}}}continue;}break;}}};!(async()=>{var _0x1fdd86={'BQaqy':'\x0a*\x20Author:CenBoMin\x0a*\x20Github:github.com/CenBoMin/GithubSync\x0a*\x20Telegram:https://t.me/CbScript\x0a*\x20Updatetime:2021.06.26\x0a','laXkA':function(_0x1684e5,_0x367977){return _0x1684e5+_0x367977;},'aSRIH':function(_0x3e69f7,_0x2e8b70){return _0x3e69f7*_0x2e8b70;},'kjZeb':function(_0x4127aa,_0x2b28ab){return _0x4127aa*_0x2b28ab;},'RpxoC':_0x651d('79','859e'),'wCrtL':function(_0x3a5d9c,_0x36a284){return _0x3a5d9c!==_0x36a284;},'hbfEw':_0x651d('7a','phzp'),'UyxZs':'IXfMq','MzKms':_0x651d('7b','N@Ez'),'dvCXG':function(_0x1ea92f,_0x5945fe){return _0x1ea92f(_0x5945fe);},'KwwOV':_0x651d('7c','22pW'),'WUDQk':function(_0x52866b){return _0x52866b();},'QMlQR':function(_0x4f89f7,_0x776d8d){return _0x4f89f7+_0x776d8d;},'EOpju':function(_0x39fcfc,_0x4a2a53){return _0x39fcfc!==_0x4a2a53;},'mPXNt':_0x651d('7d','n&(E'),'dYAuG':_0x651d('7e','LAKQ'),'VFXwi':function(_0x82cfc4,_0x25fb62){return _0x82cfc4+_0x25fb62;}};cc=$[_0x651d('7f','jS@d')]+_0x651d('80','wjaj');console[_0x651d('81','Mzk^')](_0x1fdd86['BQaqy']);console[_0x651d('82','muN*')](_0x651d('83','IZ!F')+new Date(_0x1fdd86[_0x651d('84','F(^^')](new Date()['getTime'](),_0x1fdd86[_0x651d('85','hfy9')](_0x1fdd86[_0x651d('86','JS0g')](0x8,0x3c)*0x3c,0x3e8)))['toLocaleString']());if(typeof $request!==_0x1fdd86[_0x651d('87','P5#t')]){if(_0x1fdd86[_0x651d('88','22pW')](_0x651d('89','$7AY'),'GMbuX')){$['log'](_0x651d('8a','8*Af'));}else{return!![];}}else if(!wlkdappkey){$[_0x651d('8b','2QZN')](_0x651d('8c','t&GL')+$['name']+']:开始下载脚本使用权限秘钥...');await githubkey();}else{let _0x27912f=wlkdapp[_0x651d('8d','87zA')](_0x55ac4c=>_0x55ac4c['hd'])['map'](_0x461d73=>({'uid':_0x461d73['uid'],'body':_0x461d73['bd'],'headers':JSON[_0x651d('8e','NeJB')](_0x461d73['hd']),'readArtlistbd':_0x461d73[_0x651d('8f','Mzk^')],'readArtlisthd':JSON[_0x651d('90','$7AY')](_0x461d73[_0x651d('91','CWcp')]),'videoArtlistbd':_0x461d73[_0x651d('92','5j2%')],'videoArtlisthd':JSON[_0x651d('93','3SzM')](_0x461d73['videoArtlisthd']),'sharebd':_0x461d73[_0x651d('94','Lxl#')],'sharehd':JSON['parse'](_0x461d73[_0x651d('95','E)AY')])}));console[_0x651d('96','1Njr')](_0x651d('97','F(^^')+$['name']+']:~\x20System💲脚本账号数量\x20');console[_0x651d('98','IZ!F')]('本次执行共'+_0x27912f['length']+'个账号');for(let _0x1153fe=0x0;_0x1153fe<_0x27912f[_0x651d('99','soBb')];_0x1153fe++){tkList=_0x27912f[_0x1153fe];if(!tkList['uid']){if(_0x1fdd86[_0x651d('9a','E)AY')]!==_0x1fdd86[_0x651d('9b','muN*')]){$[_0x651d('9c','E)AY')](_0x1fdd86[_0x651d('9d','CEjp')]);}else{utftext+=String[_0x651d('9e','mt5o')](c);}}else{$['log'](_0x651d('9f','mt5o')+$['name']+_0x651d('a0','zSZ)')+_0x1fdd86[_0x651d('a1','#S3G')](_0x1153fe,0x1)+'-脚本使用权限...');if(_0x1fdd86[_0x651d('a2','Mzk^')](z,_0x1153fe)){$[_0x651d('a3','Lxl#')]('用户'+(_0x1153fe+0x1)+_0x651d('a4','22pW')+tkList[_0x651d('a5','S%!V')]+'):~\x20秘钥验证成功！🎉');$[_0x651d('a6','WfzF')](_0x651d('a7','W]L7')+$['name']+']:~\x20System💲/执行脚本\x0a开始执行\x20👤User'+(_0x1153fe+0x1)+_0x651d('a8','fpSj'));await main(_0x1153fe);}else{$[_0x651d('a9','jQm&')]('用户'+(_0x1153fe+0x1)+'(ID:'+tkList[_0x651d('aa','2QZN')]+_0x651d('ab','(a^5'));$[_0x651d('ac','N@Ez')](_0x651d('ad','6ro@')+$[_0x651d('ae','JS0g')]+_0x651d('af','Mzk^'));await _0x1fdd86[_0x651d('b0','$ovE')](githubkey,_0x1fdd86[_0x651d('b1','N@Ez')]);$[_0x651d('b2','W]L7')]('\x0a🗝['+$[_0x651d('b3','jQm&')]+_0x651d('b4','CEjp')+_0x1fdd86[_0x651d('b5','E)AY')](_0x1153fe,0x1)+_0x651d('b6','1Njr'));if(_0x1fdd86[_0x651d('b7','Lxl#')](z)){$['log']('用户'+_0x1fdd86[_0x651d('b8','Bpzn')](_0x1153fe,0x1)+_0x651d('b9','soBb')+tkList[_0x651d('ba','fpSj')]+'):~\x20秘钥验证成功！🎉');$['log'](_0x651d('bb','$7AY')+$[_0x651d('bc','kXEP')]+_0x651d('bd','S%!V')+_0x1fdd86[_0x651d('be','NeJB')](_0x1153fe,0x1)+_0x651d('bf','Lxl#'));await _0x1fdd86['dvCXG'](main,_0x1153fe);}else{if(_0x1fdd86[_0x651d('c0','F(^^')](_0x1fdd86[_0x651d('c1','d$9u')],_0x1fdd86['dYAuG'])){$[_0x651d('c2','NeJB')]('❌用户'+(_0x1153fe+0x1)+_0x651d('c3','ETy$')+tkList['uid']+_0x651d('c4','d$9u'));$[_0x651d('c5','phzp')]('\x0a⚠️用户'+_0x1fdd86[_0x651d('c6','vnE@')](_0x1153fe,0x1)+_0x651d('c7','W]L7')+tgmarkcode+tkList['uid']);$[_0x651d('c8','vnE@')]($[_0x651d('c9','LAKQ')],'',_0x651d('ca','WfzF')+_0x1fdd86[_0x651d('cb','N@Ez')](_0x1153fe,0x1)+_0x651d('cc','uYm0')+tgmarkcode+tkList[_0x651d('cd','w5]E')]);}else{$['log'](e);return![];}}}}}}})()[_0x651d('ce','P5#t')](_0x29f085=>{$['log']('','❌\x20'+$['name']+_0x651d('cf','soBb')+_0x29f085+'!','');})[_0x651d('d0','jO^!')](()=>{$[_0x651d('d1','uYm0')]();});function z(){var _0x5cf67a={'UKwjy':function(_0x23711c,_0x7ef698){return _0x23711c===_0x7ef698;},'KrfKv':_0x651d('d2','$7AY'),'vMhkg':function(_0x222991,_0x5d2ab6){return _0x222991(_0x5d2ab6);},'ogGUk':function(_0xe328ca,_0x98d616){return _0xe328ca===_0x98d616;},'mvNHn':_0x651d('d3','859e')};const _0x165ddb=_0x5cf67a['vMhkg'](decodeURIComponent,Base64[_0x651d('d4','1Njr')](wlkdappkey));const _0x321275=tkList[_0x651d('d5','6ro@')]['replace'](/UM_distinctid=/,'');function _0x5b0376(_0x1f5358){try{if(_0x165ddb[_0x651d('d6','hfy9')](_0x1f5358)>-0x1){return!![];}}catch(_0x1b8d6d){if(_0x5cf67a[_0x651d('d7','859e')](_0x5cf67a[_0x651d('d8','wjaj')],_0x5cf67a['KrfKv'])){$[_0x651d('ac','N@Ez')](_0x1b8d6d);return![];}else{$[_0x651d('a9','jQm&')]('','❌\x20'+$[_0x651d('d9','8*Af')]+_0x651d('da','Lxl#')+_0x1b8d6d+'!','');}}}console['log'](_0x651d('db','vnE@')+_0x321275);if(_0x5b0376(_0x321275)){if(_0x5cf67a[_0x651d('dc','w5]E')](_0x5cf67a[_0x651d('dd','jO^!')],_0x5cf67a['mvNHn'])){return!![];}else{enc4=0x40;}}else{return![];}};_0xodL='jsjiami.com.v6';
//++++++++++++++++++++++++++++++++++++
function initTaskOptions(url, body) {
  return {
    url: `${host}/${url}`,
    headers: tkList.headers,
    body: body
  };
}
function TaskOptions(url, hd, body) {
  return {
    url: `${host}/${url}`,
    headers: hd,
    body: body
  };
}
async function main(i) {
  var h = (new Date()).getHours();
  var m = (new Date()).getMinutes();
  //更新token
  await login();
  console.log(`\n〽️[${$.name}]:~ User${i+1}💲用户信息`)
  await getTodayDetail();
  !tkList.txhd ? $.log('[Tips]请先前往获取 提现cookie数据 📲') : await txTask();
  console.log(`\n〽️[${$.name}]:~ User${i+1}💲签到`)
  await signTask();
  console.log(`\n〽️[${$.name}]:~ User${i+1}💲随机宝箱`)
  await boxList();
  console.log(`\n〽️[${$.name}]:~ User${i+1}💲分享任务`)
  await shareTaskRun();
  console.log(`\n〽️[${$.name}]:~ User${i+1}💲阅读文章`)
  await readArtList();
  console.log(`\n〽️[${$.name}]:~ User${i+1}💲看视频`)
  await videoArtList();
  console.log(`\n〽️[${$.name}]:~ User${i+1}💲领取奖励清单`)
  await taskAwardList();
  await hottaskList();
  console.log(`\n〽️[${$.name}]:~ User${i+1}💲提现`)
  await txTaskRun();

  //助力分享测试
  // await shareFriendsTask();

  //更换cookie的token
  const taskBody = JSON.parse(tkList.body)
  taskBody.token = token
  wlkdapp[i].bd = JSON.stringify(taskBody);
  $.setdata(wlkdapp, 'wlkdapp');

  //通知
  await showmsg2(i);

}

//============================
//+++++++++ 任务函数 ++++++++++
//============================
//
async function sample() {
  return new Promise((resolve) => {
    const options = initTaskOptions("info/list",tkList.body);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//分享助力测试
async function shareFriendsTask() {
  // tkList.sharehd.Cookie = "UM_distinctid=17a48ecaa106a7-0423fc164665ba8-3c176950-5a900-17a48ecaa1172c"
  let newShareHd = tkList.sharehd
  return new Promise((resolve) => {
    const options = TaskOptions("share/info",newShareHd,tkList.sharebd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                console.log(`→[${data.profitPopUps[0].type}]助力分享文章成功 🎉`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//提现https://wlkdapi.zhongchuanjukan.com/withdraw/wx
async function txTaskRun() {
  return new Promise((resolve) => {
    const body = JSON.parse(tkList.body);
    body.profit = 50000
    txTaskbd = JSON.stringify(body);
    const options = initTaskOptions("withdraw/wx",txTaskbd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 0:
                console.log(`→${data.msg_desc} 🎉`);
                break;
              case 1:
                console.log(`→${data.msg_desc}`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//奖励任务领取
async function runAward() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/inread/account",`{"token": "${token}","taskid":${taskID},"sysname":"wlkd"}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                console.log(`→${tasktitle}奖励领取成功,得到${data.profit} 🎉 \n`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function taskAwardList() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/inread/info",`{"token": "${token}","sysname":"wlkd"}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
               const taskList = data.readTaskData;
               const taskIDList = taskList.map(item => item.taskid);
               const taskNameList = taskList.map(item => item.title);
               const taskText = taskList.map(item => item.buttonText);
               const taskStatus = taskList.map(item => item.taskStatus);
               for (let i = 0; i < taskIDList.length; i++) {
                 if (taskStatus[i] == 1) {
                   console.log(`[${taskNameList[i]}]:${taskText[i]}`);
                   taskID = taskIDList[i]
                   tasktitle = taskNameList[i]
                   await runAward();
                 } else {
                   console.log(`[${taskNameList[i]}]:${taskText[i]}`);
                 }
               }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//******分享测试*******
async function shareTaskRun() {
  return new Promise((resolve) => {
    const options = TaskOptions("share/info",tkList.sharehd,tkList.sharebd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                console.log(`→[${data.profitPopUps[0].type}]分享文章成功 🎉`);

                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//火爆奖励领取
async function hotTaskRun() {
  return new Promise((resolve) => {
    const options = initTaskOptions("hottask/profit",hotTaskbd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
              console.log(`→${tasktitle}奖励领取成功,得到${data.profit} 🎉 \n`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function hottaskList() {
  return new Promise((resolve) => {
    const options = initTaskOptions("hottask/info",tkList.body);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
              hottaskList = data.taskList
              const titleList = hottaskList.map(item => item.task_title)
              const btnstateList = hottaskList.map(item => item.task_btn_desc)
              const tasktypeList = hottaskList.map(item => item.task_type)
              const taskstateList = hottaskList.map(item => item.task_btn_onclick)
              for (let i = 0; i < taskstateList.length; i++) {
                if (taskstateList[i] == "toProfit") {
                  console.log(`[${titleList[i]}]:${btnstateList[i]}`);
                  tasktitle = titleList[i];
                  const body = JSON.parse(tkList.body);
                  body.act_type = `${tasktypeList[i]}`
                  hotTaskbd = JSON.stringify(body);
                  await hotTaskRun();
                }else {
                  console.log(`[${titleList[i]}]:${btnstateList[i]}`);
                }
              }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//宝箱奖励
async function boxTaskRun() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/box/profit",boxTaskbd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                console.log(`→随机宝箱领取成功,得到${data.profit}红豆 🎉 `);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function boxList() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/box/init",tkList.body);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                const box_status = data.timebox.box_status
                const taskbox1 = data.taskboxs[0].box_status
                const taskbox2 = data.taskboxs[1].box_status
                const taskbox3 = data.taskboxs[2].box_status
                const count_down = data.timebox.count_down
                if (box_status == 1) {
                  console.log(`→可领取随机宝箱奖励!🙋`);
                  const body = JSON.parse(tkList.body);
                  body.box_code = "timebox"
                  boxTaskbd = JSON.stringify(body);
                  await boxTaskRun();
                }else if (taskbox1 == 1) {
                  console.log(`→可领取166宝箱奖励！🙋`);
                  const body = JSON.parse(tkList.body);
                  body.box_code = "taskbox_one"
                  boxTaskbd = JSON.stringify(body);
                  await boxTaskRun();
                }else if (taskbox2 == 1) {
                  console.log(`→可领取288宝箱奖励！🙋`);
                  const body = JSON.parse(tkList.body);
                  body.box_code = "taskbox_three"
                  boxTaskbd = JSON.stringify(body);
                  await boxTaskRun();
                }else if (taskbox3 == 1) {
                  console.log(`→可领取368宝箱奖励！🙋`);
                  const body = JSON.parse(tkList.body);
                  body.box_code = "taskbox_five"
                  boxTaskbd = JSON.stringify(body);
                  await boxTaskRun();
                }else {
                  console.log(`→${data.taskbox_desc}\n→随机宝箱还需等待${Math.round(count_down/60)}分,约${Math.round(count_down/60/60)}小时`);
                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//看视频
async function videoArtList() {
  return new Promise((resolve) => {
    const options = TaskOptions("article/list",tkList.videoArtlisthd,tkList.videoArtlistbd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                const artlist = data.artlist;
                const artIDList = artlist.map(item => item.artId);
                const artNameList = artlist.map(item => item.artTitle);
                for (let i = 1; i < artIDList.length; i++) {
                  const name = artNameList[i]
                  $.log(`\n[视频]:${name}\n[Wait]30sec...开始看第${i}个视频`);
                  const body = JSON.parse(tkList.body);
                  body.artClassify = 1
                  body.artId = artIDList[i]
                  videoTaskbd = JSON.stringify(body);
                  await $.wait(30000)
                  await videoTaskRun();
                }

                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function videoTaskRun() {
  return new Promise((resolve) => {
    const options = initTaskOptions("article/read",videoTaskbd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 0:
                console.log(data.msg_desc);
                break;
              case 1:
                console.log(`→看视频成功,得到${data.profit}红豆 🎉 `);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//阅读文章
async function readArtList() {
  return new Promise((resolve) => {
    const options = TaskOptions("article/list",tkList.readArtlisthd,tkList.readArtlistbd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                const artlist = data.artlist;
                const artIDList = artlist.map(item => item.artId);
                const artNameList = artlist.map(item => item.artTitle);
                for (let i = 1; i < artIDList.length; i++) {
                  const name = artNameList[i]
                  $.log(`\n[阅读]:${name}\n[Wait]30sec...开始看第${i}篇文章`);
                  const body = JSON.parse(tkList.body);
                  body.artClassify = 0
                  body.artId = artIDList[i]
                  readTaskbd = JSON.stringify(body);
                  await $.wait(30000)
                  await readTaskRun();
                }

                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function readTaskRun() {
  return new Promise((resolve) => {
    const options = initTaskOptions("article/read",readTaskbd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 0:
                console.log(data.msg_desc);
                break;
              case 1:
                console.log(`→阅读成功,得到${data.profit}红豆 🎉 `);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//账户总计
async function getTodayDetail() {
  return new Promise((resolve) => {
    const options = initTaskOptions("account/getTodayDetail",tkList.body);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
              console.log(`[用户名]:${user_name}`);
              console.log(`[今日总计]:${data.todayReward}红豆`);
              console.log(`[账户总计]:${data.balance}红豆,约${data.balance_m}元`);
              $.tz += `[用户名]:${user_name}\n`;
              $.tz += `[今日总计]:${data.todayReward}红豆\n`;
              $.tz += `[账户总计]:${data.balance}红豆,约${data.balance_m}元\n`;
              break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//签到
async function signTask() {
  return new Promise((resolve) => {
    const options = initTaskOptions("usersign/info",`{"token": "${token}","sysname": "wlkd"}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                const signstatus = data.signstatus
                if (signstatus == 1) {
                  console.log(`→${data.signbutton},目前签到${data.signdays}天`);
                }else {
                  console.log(`→${data.signbutton},目前签到${data.signdays}天`);
                  await usersign();
                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function usersign() {
  return new Promise((resolve) => {
    const options = initTaskOptions("usersign/sign",`{"token": "${token}","sysname": "wlkd"}`);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.ret_code
            switch (code) {
              case 1:
                console.log(`→签到成功,得到${data.profit}红豆 🎉 `);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//token刷新
async function login() {
  return new Promise((resolve) => {
    const options = initTaskOptions("login/appOpen",tkList.body);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            token = data.token
            user_name = data.user_name
            const code = data.ret_code
            switch (code) {
              case 1:
                console.log(`🔄 更新token:\n${token}`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[刷新cookie调试log]:${resp.body}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}


//============================
//++++++++ 自定义函数 ++++++++
//============================
async function showmsg2(i) {
   if ($.isNode()) {
     if (($.hour == 9) || ($.hour == 12) || ($.hour == 17) || ($.hour == 23)) {
       notify.sendNotify(`${$.name}\n用户${i+1}任务执行通知🔔`, $.tz)
        }
   } else {
     if (($.hour == 9) || ($.hour == 12) || ($.hour == 17) || ($.hour == 23)) {
       $.msg($.name,`用户${i+1}任务执行通知🔔`, $.tz);
        }
   }
}
async function showmsg1(i) {
   if ($.isNode()) {
       notify.sendNotify(`${$.name}\n用户${i+1}任务执行通知🔔`, $.tz)
   } else {
       $.msg($.name,`用户${i+1}任务执行通知🔔`, $.tz);
   }
}
function formatDateTime(inputTime) {
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + m;
};
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`⛔️服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
async function githubkey(keystate) {
  return new Promise((resolve) => {
    let url = {
      url: `${githubkeyUrl}`,
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          switch (keystate) {
            case "again":
              wlkdappkey = Base64.encode(data);
              if (wlkdappkey) $.setdata(wlkdappkey, 'wlkdappkey');
              break;
            default:
              wlkdappkey = Base64.encode(data);
              $.log(wlkdappkey);
              if (wlkdappkey) $.setdata(wlkdappkey, 'wlkdappkey');
              $.log(`\n〽️[${$.name}]:请重新执行脚本进行秘钥验证`);
              $.msg($.name, '', `〽️请重新执行脚本进行秘钥验证`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
function Random(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
//============================
//+++++++++ 环境函数 ++++++++++
//============================
function Env(name,opts){class Http{constructor(env){this.env=env}
send(opts,method='GET'){opts=typeof opts==='string'?{url:opts}:opts
let sender=this.get
if(method==='POST'){sender=this.post}
return new Promise((resolve,reject)=>{sender.call(this,opts,(err,resp,body)=>{if(err)reject(err)
else resolve(resp)})})}
get(opts){return this.send.call(this.env,opts)}
post(opts){return this.send.call(this.env,opts,'POST')}}
return new(class{constructor(name,opts){this.name=name
this.http=new Http(this)
this.data=null
this.dataFile='box.dat'
this.logs=[]
this.isMute=false
this.isNeedRewrite=false
this.logSeparator='\n'
this.startTime=new Date().getTime()
Object.assign(this,opts)
this.log('',`🔔${this.name}, 开始!`)}
isNode(){return'undefined'!==typeof module&&!!module.exports}
isQuanX(){return'undefined'!==typeof $task}
isSurge(){return'undefined'!==typeof $httpClient&&'undefined'===typeof $loon}
isLoon(){return'undefined'!==typeof $loon}
isShadowrocket(){return'undefined'!==typeof $rocket}
toObj(str,defaultValue=null){try{return JSON.parse(str)}catch{return defaultValue}}
toStr(obj,defaultValue=null){try{return JSON.stringify(obj)}catch{return defaultValue}}
getjson(key,defaultValue){let json=defaultValue
const val=this.getdata(key)
if(val){try{json=JSON.parse(this.getdata(key))}catch{}}
return json}
setjson(val,key){try{return this.setdata(JSON.stringify(val),key)}catch{return false}}
getScript(url){return new Promise((resolve)=>{this.get({url},(err,resp,body)=>resolve(body))})}
runScript(script,runOpts){return new Promise((resolve)=>{let httpapi=this.getdata('@chavy_boxjs_userCfgs.httpapi')
httpapi=httpapi?httpapi.replace(/\n/g,'').trim():httpapi
let httpapi_timeout=this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout')
httpapi_timeout=httpapi_timeout?httpapi_timeout*1:20
httpapi_timeout=runOpts&&runOpts.timeout?runOpts.timeout:httpapi_timeout
const[key,addr]=httpapi.split('@')
const opts={url:`http://${addr}/v1/scripting/evaluate`,body:{script_text:script,mock_type:'cron',timeout:httpapi_timeout},headers:{'X-Key':key,'Accept':'*/*'}}
this.post(opts,(err,resp,body)=>resolve(body))}).catch((e)=>this.logErr(e))}
loaddata(){if(this.isNode()){this.fs=this.fs?this.fs:require('fs')
this.path=this.path?this.path:require('path')
const curDirDataFilePath=this.path.resolve(this.dataFile)
const rootDirDataFilePath=this.path.resolve(process.cwd(),this.dataFile)
const isCurDirDataFile=this.fs.existsSync(curDirDataFilePath)
const isRootDirDataFile=!isCurDirDataFile&&this.fs.existsSync(rootDirDataFilePath)
if(isCurDirDataFile||isRootDirDataFile){const datPath=isCurDirDataFile?curDirDataFilePath:rootDirDataFilePath
try{return JSON.parse(this.fs.readFileSync(datPath))}catch(e){return{}}}else return{}}else return{}}
writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require('fs')
this.path=this.path?this.path:require('path')
const curDirDataFilePath=this.path.resolve(this.dataFile)
const rootDirDataFilePath=this.path.resolve(process.cwd(),this.dataFile)
const isCurDirDataFile=this.fs.existsSync(curDirDataFilePath)
const isRootDirDataFile=!isCurDirDataFile&&this.fs.existsSync(rootDirDataFilePath)
const jsondata=JSON.stringify(this.data)
if(isCurDirDataFile){this.fs.writeFileSync(curDirDataFilePath,jsondata)}else if(isRootDirDataFile){this.fs.writeFileSync(rootDirDataFilePath,jsondata)}else{this.fs.writeFileSync(curDirDataFilePath,jsondata)}}}
lodash_get(source,path,defaultValue=undefined){const paths=path.replace(/\[(\d+)\]/g,'.$1').split('.')
let result=source
for(const p of paths){result=Object(result)[p]
if(result===undefined){return defaultValue}}
return result}
lodash_set(obj,path,value){if(Object(obj)!==obj)return obj
if(!Array.isArray(path))path=path.toString().match(/[^.[\]]+/g)||[]
path.slice(0,-1).reduce((a,c,i)=>(Object(a[c])===a[c]?a[c]:(a[c]=Math.abs(path[i+1])>>0===+path[i+1]?[]:{})),obj)[path[path.length-1]]=value
return obj}
getdata(key){let val=this.getval(key)
if(/^@/.test(key)){const[,objkey,paths]=/^@(.*?)\.(.*?)$/.exec(key)
const objval=objkey?this.getval(objkey):''
if(objval){try{const objedval=JSON.parse(objval)
val=objedval?this.lodash_get(objedval,paths,''):val}catch(e){val=''}}}
return val}
setdata(val,key){let issuc=false
if(/^@/.test(key)){const[,objkey,paths]=/^@(.*?)\.(.*?)$/.exec(key)
const objdat=this.getval(objkey)
const objval=objkey?(objdat==='null'?null:objdat||'{}'):'{}'
try{const objedval=JSON.parse(objval)
this.lodash_set(objedval,paths,val)
issuc=this.setval(JSON.stringify(objedval),objkey)}catch(e){const objedval={}
this.lodash_set(objedval,paths,val)
issuc=this.setval(JSON.stringify(objedval),objkey)}}else{issuc=this.setval(val,key)}
return issuc}
getval(key){if(this.isSurge()||this.isLoon()){return $persistentStore.read(key)}else if(this.isQuanX()){return $prefs.valueForKey(key)}else if(this.isNode()){this.data=this.loaddata()
return this.data[key]}else{return(this.data&&this.data[key])||null}}
setval(val,key){if(this.isSurge()||this.isLoon()){return $persistentStore.write(val,key)}else if(this.isQuanX()){return $prefs.setValueForKey(val,key)}else if(this.isNode()){this.data=this.loaddata()
this.data[key]=val
this.writedata()
return true}else{return(this.data&&this.data[key])||null}}
initGotEnv(opts){this.got=this.got?this.got:require('got')
this.cktough=this.cktough?this.cktough:require('tough-cookie')
this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar()
if(opts){opts.headers=opts.headers?opts.headers:{}
if(undefined===opts.headers.Cookie&&undefined===opts.cookieJar){opts.cookieJar=this.ckjar}}}
get(opts,callback=()=>{}){if(opts.headers){delete opts.headers['Content-Type']
delete opts.headers['Content-Length']}
if(this.isSurge()||this.isLoon()){if(this.isSurge()&&this.isNeedRewrite){opts.headers=opts.headers||{}
Object.assign(opts.headers,{'X-Surge-Skip-Scripting':false})}
$httpClient.get(opts,(err,resp,body)=>{if(!err&&resp){resp.body=body
resp.statusCode=resp.status}
callback(err,resp,body)})}else if(this.isQuanX()){if(this.isNeedRewrite){opts.opts=opts.opts||{}
Object.assign(opts.opts,{hints:false})}
$task.fetch(opts).then((resp)=>{const{statusCode:status,statusCode,headers,body}=resp
callback(null,{status,statusCode,headers,body},body)},(err)=>callback(err))}else if(this.isNode()){this.initGotEnv(opts)
this.got(opts).on('redirect',(resp,nextOpts)=>{try{if(resp.headers['set-cookie']){const ck=resp.headers['set-cookie'].map(this.cktough.Cookie.parse).toString()
if(ck){this.ckjar.setCookieSync(ck,null)}
nextOpts.cookieJar=this.ckjar}}catch(e){this.logErr(e)}}).then((resp)=>{const{statusCode:status,statusCode,headers,body}=resp
callback(null,{status,statusCode,headers,body},body)},(err)=>{const{message:error,response:resp}=err
callback(error,resp,resp&&resp.body)})}}
post(opts,callback=()=>{}){const method=opts.method?opts.method.toLocaleLowerCase():'post'
if(opts.body&&opts.headers&&!opts.headers['Content-Type']){opts.headers['Content-Type']='application/x-www-form-urlencoded'}
if(opts.headers)delete opts.headers['Content-Length']
if(this.isSurge()||this.isLoon()){if(this.isSurge()&&this.isNeedRewrite){opts.headers=opts.headers||{}
Object.assign(opts.headers,{'X-Surge-Skip-Scripting':false})}
$httpClient[method](opts,(err,resp,body)=>{if(!err&&resp){resp.body=body
resp.statusCode=resp.status}
callback(err,resp,body)})}else if(this.isQuanX()){opts.method=method
if(this.isNeedRewrite){opts.opts=opts.opts||{}
Object.assign(opts.opts,{hints:false})}
$task.fetch(opts).then((resp)=>{const{statusCode:status,statusCode,headers,body}=resp
callback(null,{status,statusCode,headers,body},body)},(err)=>callback(err))}else if(this.isNode()){this.initGotEnv(opts)
const{url,..._opts}=opts
this.got[method](url,_opts).then((resp)=>{const{statusCode:status,statusCode,headers,body}=resp
callback(null,{status,statusCode,headers,body},body)},(err)=>{const{message:error,response:resp}=err
callback(error,resp,resp&&resp.body)})}}
time(fmt,ts=null){const date=ts?new Date(ts):new Date()
let o={'M+':date.getMonth()+1,'d+':date.getDate(),'H+':date.getHours(),'m+':date.getMinutes(),'s+':date.getSeconds(),'q+':Math.floor((date.getMonth()+3)/3),'S':date.getMilliseconds()}
if(/(y+)/.test(fmt))fmt=fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length))
for(let k in o)
if(new RegExp('('+k+')').test(fmt))
fmt=fmt.replace(RegExp.$1,RegExp.$1.length==1?o[k]:('00'+o[k]).substr((''+o[k]).length))
return fmt}
msg(title=name,subt='',desc='',opts){const toEnvOpts=(rawopts)=>{if(!rawopts)return rawopts
if(typeof rawopts==='string'){if(this.isLoon())return rawopts
else if(this.isQuanX())return{'open-url':rawopts}
else if(this.isSurge())return{url:rawopts}
else return undefined}else if(typeof rawopts==='object'){if(this.isLoon()){let openUrl=rawopts.openUrl||rawopts.url||rawopts['open-url']
let mediaUrl=rawopts.mediaUrl||rawopts['media-url']
return{openUrl,mediaUrl}}else if(this.isQuanX()){let openUrl=rawopts['open-url']||rawopts.url||rawopts.openUrl
let mediaUrl=rawopts['media-url']||rawopts.mediaUrl
return{'open-url':openUrl,'media-url':mediaUrl}}else if(this.isSurge()){let openUrl=rawopts.url||rawopts.openUrl||rawopts['open-url']
return{url:openUrl}}}else{return undefined}}
if(!this.isMute){if(this.isSurge()||this.isLoon()){$notification.post(title,subt,desc,toEnvOpts(opts))}else if(this.isQuanX()){$notify(title,subt,desc,toEnvOpts(opts))}}
if(!this.isMuteLog){let logs=['','==============📣系统通知📣==============']
logs.push(title)
subt?logs.push(subt):''
desc?logs.push(desc):''
console.log(logs.join('\n'))
this.logs=this.logs.concat(logs)}}
log(...logs){if(logs.length>0){this.logs=[...this.logs,...logs]}
console.log(logs.join(this.logSeparator))}
logErr(err,msg){const isPrintSack=!this.isSurge()&&!this.isQuanX()&&!this.isLoon()
if(!isPrintSack){this.log('',`❗️${this.name}, 错误!`,err)}else{this.log('',`❗️${this.name}, 错误!`,err.stack)}}
wait(time){return new Promise((resolve)=>setTimeout(resolve,time))}
done(val={}){const endTime=new Date().getTime()
const costTime=(endTime-this.startTime)/1000
this.log('',`🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
this.log()
if(this.isSurge()||this.isQuanX()||this.isLoon()){$done(val)}}})(name,opts)}
