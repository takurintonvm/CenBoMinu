const $=new Env("UCPIG");var Base64={keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64.utf8encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+
this.keyStr.charAt(enc1)+this.keyStr.charAt(enc2)+
this.keyStr.charAt(enc3)+this.keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this.keyStr.indexOf(input.charAt(i++));enc2=this.keyStr.indexOf(input.charAt(i++));enc3=this.keyStr.indexOf(input.charAt(i++));enc4=this.keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2);}
if(enc4!=64){output=output+String.fromCharCode(chr3);}}
output=Base64.utf8decode(output);return output;},utf8encode:function(string){var utftext="";string=string.replace(/\r\n/g,"\n");for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},utf8decode:function(utftext){var string="";var i=0;var c,c1,c2,c3;c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}};const hostcoral2="https://coral2.uc.cn/";const hostucwallet="https://ucwallet.uc.cn/";const hostcoraltask="https://coral-task.uc.cn/";const tgmarkcode="/submitactivitycodes ucpigapp@"
const githubkeyUrl='https://raw.githubusercontent.com/CenBoMin/TGBOTCode/main/ucpigapp.js'
let ucpigapp=$.getjson('ucpigapp',[]);let ucpigappkey=$.getval('ucpigappkey');var _0xodI='jsjiami.com.v6',_0x3a8e=[_0xodI,'w57DteW/g+WljeS5rei+ueiEqOadhOS9teeUouacqOmZpuemlOmTj8OAMsKD','ZCrDlHYWwp8=','wpgWOw==','U8Ozw5zCuR0=','worCuMKSwpAzw4NR','wo7CqcKYwp4qw4daKCIEJw==','VMOfEVppecK8OMO7FsORYg==','wqpqcsOpKyhaZAbCjA==','w7lFwqdFw5bDrMO+','BvGEt6vDkQ==','dcOYwpHCvsK5IC/Cu8KtMvGKsprohqPmnJDot4fljrXml6zphI/Cjg==','wpLCr8KY','4oez5p+e5q2j5ouJ6KOy5YSj','wqDDvy9Jwq3CoA==','TSzDiGkR','wqDDtSY=','bsOUXsOnwok=','CPCvpaVZ','w5pG5byc5aW16aiP6KyCMOeUkeaKhw==','wrDCjEHDkMO3','wrPohrjmnrHkvofnlonmnKfpmInCrcK4wps=','w7cVTQ==','ZizCo8OiwpM=','wpHDrMOWNQ==','PsOQfQ==','woHCpcK+w7fnprXpkKPpqpfor4Hmi4/li6Pvv6vxhZ60','w6TDqlXDqg==','dsO4a2TCgMK7FMOsworCu/CtsIoa5oub6KK16IaN5pyxcuW9hOWmpOaLq+igicON8K2Su2nDg3jDlg==','wrfCrnTDl8OH','dB8dWyo=','fl06wqJz','wph6wqIbw6w=','w4U2G8OT','DcKMCBvnp4bpkr3pqYLorp3lpqjotZzvvrQ=','eMO8w6EAwoo=','VBjDrhs2','QPCplowP','w5fCseWGteaurumpj+itgMOf55SQ5oq3','w63ohpzmnozkvJDnlqTmn4rpmoRJMH8=','w6wTdcONw7M=','wrvDsyRHwqs=','X8KLworDt8KY','RMKNwog=','w6/CssOG','w6Zsw5A=','VPCwp41i','w7vDpUw+','bwsLw6F5BsKlF8O8w5jxg4KLwq/miI/ooY7ohIDmnJPDo+W8k+Wmo+aJl+ihlsOaw7soKMOm','w6DCvsOkQ18=','55qg6Ias5p2a5LuA5Yq/','wr7CgMKdwrvDmw==','bSLDmw==','4p+W55SC5ou5','w5nCsMOKU18=','w7RKUsK2','w47Dj8KOw5bnpZPpkKbpqLPorLHlprLotqDvvbY=','NOKYi++5nueUneaLug==','wr0CPOitieWeq+e9p+WHi+aPqeS4lOS4v+WKvueilMOI5aeA5p2S5ba25o6K5LuK6K+C56m25ZK85YaN6K6I6KyL44CKW/Cypa7pqJ/or7bno4Dmjbzkuq/morHlvJs8','ScOFEQ==','wqEECuivpuWdree+m+WFi+aNnOS7oemoo+ivneejnBTlp7/mn47ltqrmjbTku7XorKDnqrTlkbzlh7DorYDorazjg7MF8L+HiemprOivuOehveaMmOS5i+ajsuW9ssK3','ex50','wqEVJsKCw5I=','w6bDpF8=','R8OXAlh2','w6MTcsOb','YMKGTz7CvQ==','w5jDoHg+wrA=','QMOTFVR6fQ==','WB/DjQ0l','EAAyEGU=','w7rCjU/CscKy','w5HDn1HDv8Kww5zorZblhbDli43lvoPojKPljql6b8KfEcO2w5Pwn5KU','Hw0DDlE=','wpFnT8OpAQ==','VMOgw6g=','wr/Cqws=','w4hCQSpvw6fDiSQ/GcOERwDCn8OfwodGOzE9MnA=','w6wZecOOwq7CoiJQw4bDiA==','VUscwrEGX8KyBsO/w5nCkE3DpQ==','wovDmGwPO8Or6Ky65YSV5YmU5b+Y6I+W5Y64w43nrYXkupPlp6nkuoPliIzmlbvmjIod8LaSnQ==','WhnDlTkHX+ithuWFleWIp+W9sOiPguWMt3PlhZ/lrKjlhYLmjKnDsVXDl2ESw4XwsaC+','VSN5RBZn6K6a5YWr5YmG5b++6I2T5YyKwp3mj7Dnjonml7vkuqvlraB7HsOEw7BUcfGNopY=','G8K5LA==','M/C7kKHDsw==','JDk8MQ==','w6UqVsOGw5s=','wovCmsKX','wonxjKO0w50=','wpDCocKSwpo=','wqPDusKBw58Iw5VNPg==','8JegoOaWmOWzheeNkuaLgea4o+eZvuWEqeWvmA==','SMOZEQ==','GcKRdMO6Eg==','w7bCtMOF','bCLDlWc=','TFjCisKxwpHDhzML','MhorMkE=','TsK5wprDp2Q=','W10zwoxL','wrbDr8OECsOjw73CtRR1Yw==','bizDnw==','wpvDksOJH8O/w5TorKPlhK/liZPlv5Hoj7Hlj7Yl562k5Lqh5aW05Lmi5Yua5peg5o2tcPCxgqY=','w6fwoKGowrI=','TG82AxrCp8KTwpA=','M8O7YzLDhQ==','8JWRkOa2pOiti+mhrOWOj+immumhnuWmnuWLrg==','wrg6BcKRw6g=','wpN0UsOPCA==','fTov','woIWMsKkw5w=','JMKkwrnCsA==','ecKEwpk=','CsKow5DDquemoOmQtempjuisu+Wlm+i1oO+9tQ==','wonDkzk=','w6HimprvuYjnlaLmiaU=','wqDCpcKC6K+j5Zyd572A5YW25oyS5Lqn5LmH5Yq256OYaeWlpuafhuW2s+aPmOS6kOitiuerm+WRguWHsuivreivkeOArR/xjoeA6aq36K2l56Kj5oyK5Lm85qG15byUw70=','w6oPew==','JcOYdDE=','4puB77u955Wq5oqZ','woTDkMOp6KyC5Zyg57+D5YWh5o6p5Li86amC6K6t56G6w4/lpITmnKHltYfmjbDku4/or57nqIjlk6XlhKborL7orJHjg7NB8Km3memqpOitoOegteaPheS7keahh+W+vzc=','S8Ktw7A=','VcO7w4rCrxfDscK1wpsYIQ==','w4zCsELCksKqwow=','wqXDnFLDjAs=','w48WWFwr','ahh+UQ==','4oas5raP6K2B57uN5p2vw4noppjpoYjlpavli6Tlto/porLljpfwmr2u','wrzDo2I=','wrPwtoKlVA==','MMOdwrZc','PMOIPMKOw6shw6RA','KhbDqcOfw5o=','w6IEf8OWw6LCrSlcw5LDgnPDrA==','ZSrDviUi','w7EpWMO4w6k=','w7zDqMKBwp97','SsK6wqXDuMKP','woXCrcK6wpDDrg==','wpDxiaKVTw==','SsOXG14=','wr/CgGzDhcOo','McO0aB3DtA==','wqXDomEaLsOfwqM4fQ==','RRnDnngi','LMKCIsONw5nDmOitr+WEmOWKkOW8kOiNvuWOuMO655Sc5om35Z2K56O65paq5oyswp4HE8Kk8KiygQ==','VsODGW1u','JHLCmcOgIg==','wr7DrWga','5LuC5Yix5omx6KOk6YOG55yu8LW1gw==','MsOTwrw=','bR7DpCQc','w4xZUg==','HDvDpMKZw77CpgjDtMKBS0PDhcKTwpJuaBs=','S8OTw4TCuAs=','H8KsJ8OYw4I=','w5bCjE3Cm8Kk','FsKYag==','w7PDnFAawoM=','wrBscQ==','VcO/cQ==','ffGKhZ3Dpg==','LHuDqqjsjWialmi.cFomLLq.kGEvV6=='];(function(_0x1013f0,_0x3f3edd,_0x4a5795){var _0x25c698=function(_0x15ed64,_0x4c2aa2,_0x3121e8,_0x5db4e9,_0x374d9a){_0x4c2aa2=_0x4c2aa2>>0x8,_0x374d9a='po';var _0x503567='shift',_0x172d73='push';if(_0x4c2aa2<_0x15ed64){while(--_0x15ed64){_0x5db4e9=_0x1013f0[_0x503567]();if(_0x4c2aa2===_0x15ed64){_0x4c2aa2=_0x5db4e9;_0x3121e8=_0x1013f0[_0x374d9a+'p']();}else if(_0x4c2aa2&&_0x3121e8['replace'](/[LHuDqqWlFLLqkGEV=]/g,'')===_0x4c2aa2){_0x1013f0[_0x172d73](_0x5db4e9);}}_0x1013f0[_0x172d73](_0x1013f0[_0x503567]());}return 0x8ed79;};return _0x25c698(++_0x3f3edd,_0x4a5795)>>_0x3f3edd^_0x4a5795;}(_0x3a8e,0x8e,0x8e00));var _0x5183=function(_0x56ff46,_0x372d8e){_0x56ff46=~~'0x'['concat'](_0x56ff46);var _0x3b3636=_0x3a8e[_0x56ff46];if(_0x5183['DpBgHZ']===undefined){(function(){var _0x3c9143=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x300d6a='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3c9143['atob']||(_0x3c9143['atob']=function(_0x143ca6){var _0x5be4af=String(_0x143ca6)['replace'](/=+$/,'');for(var _0x2c4771=0x0,_0x483de1,_0x13d768,_0x306dd9=0x0,_0x5e26e9='';_0x13d768=_0x5be4af['charAt'](_0x306dd9++);~_0x13d768&&(_0x483de1=_0x2c4771%0x4?_0x483de1*0x40+_0x13d768:_0x13d768,_0x2c4771++%0x4)?_0x5e26e9+=String['fromCharCode'](0xff&_0x483de1>>(-0x2*_0x2c4771&0x6)):0x0){_0x13d768=_0x300d6a['indexOf'](_0x13d768);}return _0x5e26e9;});}());var _0x1a7eec=function(_0x266cf3,_0x372d8e){var _0x4d7646=[],_0x1f0635=0x0,_0x1d100a,_0x51c210='',_0x5ad871='';_0x266cf3=atob(_0x266cf3);for(var _0x2e2173=0x0,_0x3435e8=_0x266cf3['length'];_0x2e2173<_0x3435e8;_0x2e2173++){_0x5ad871+='%'+('00'+_0x266cf3['charCodeAt'](_0x2e2173)['toString'](0x10))['slice'](-0x2);}_0x266cf3=decodeURIComponent(_0x5ad871);for(var _0x3ba3a7=0x0;_0x3ba3a7<0x100;_0x3ba3a7++){_0x4d7646[_0x3ba3a7]=_0x3ba3a7;}for(_0x3ba3a7=0x0;_0x3ba3a7<0x100;_0x3ba3a7++){_0x1f0635=(_0x1f0635+_0x4d7646[_0x3ba3a7]+_0x372d8e['charCodeAt'](_0x3ba3a7%_0x372d8e['length']))%0x100;_0x1d100a=_0x4d7646[_0x3ba3a7];_0x4d7646[_0x3ba3a7]=_0x4d7646[_0x1f0635];_0x4d7646[_0x1f0635]=_0x1d100a;}_0x3ba3a7=0x0;_0x1f0635=0x0;for(var _0x3a0e0e=0x0;_0x3a0e0e<_0x266cf3['length'];_0x3a0e0e++){_0x3ba3a7=(_0x3ba3a7+0x1)%0x100;_0x1f0635=(_0x1f0635+_0x4d7646[_0x3ba3a7])%0x100;_0x1d100a=_0x4d7646[_0x3ba3a7];_0x4d7646[_0x3ba3a7]=_0x4d7646[_0x1f0635];_0x4d7646[_0x1f0635]=_0x1d100a;_0x51c210+=String['fromCharCode'](_0x266cf3['charCodeAt'](_0x3a0e0e)^_0x4d7646[(_0x4d7646[_0x3ba3a7]+_0x4d7646[_0x1f0635])%0x100]);}return _0x51c210;};_0x5183['BZHASt']=_0x1a7eec;_0x5183['ldndXK']={};_0x5183['DpBgHZ']=!![];}var _0x1adfe6=_0x5183['ldndXK'][_0x56ff46];if(_0x1adfe6===undefined){if(_0x5183['ujjaCs']===undefined){_0x5183['ujjaCs']=!![];}_0x3b3636=_0x5183['BZHASt'](_0x3b3636,_0x372d8e);_0x5183['ldndXK'][_0x56ff46]=_0x3b3636;}else{_0x3b3636=_0x1adfe6;}return _0x3b3636;};!(async()=>{var _0x41f7d5={'LjykY':function(_0x1d2ea3,_0x3cea97){return _0x1d2ea3>_0x3cea97;},'lSXmh':'\x0a*\x20Author:CenBoMin\x0a*\x20Github:github.com/CenBoMin/GithubSync\x0a*\x20Telegram:https://t.me/CbScript\x0a*\x20Updatetime:2021.06.01\x0a','hAjrs':function(_0x37c19,_0x40fa7f){return _0x37c19!==_0x40fa7f;},'PJwZV':_0x5183('0','49HP'),'hzleh':'WzKpa','fXqAv':'[Tips]请先前往获取cookie📲','JwllC':function(_0x45679a){return _0x45679a();},'Oopkb':function(_0x2142c7,_0x23adfd){return _0x2142c7!==_0x23adfd;},'OBdmG':_0x5183('1','5SZb'),'WDHOU':_0x5183('2','8lj$'),'wNWsW':function(_0x1156d7,_0x18f65d){return _0x1156d7+_0x18f65d;},'plbtg':function(_0x2e3301,_0x1d72a8){return _0x2e3301(_0x1d72a8);},'eJUxe':function(_0x592cde,_0x17d9bb){return _0x592cde===_0x17d9bb;},'LlOcY':_0x5183('3','Ah)O'),'YumMP':function(_0xbf6b90,_0xfe08f7){return _0xbf6b90(_0xfe08f7);},'UURRB':'again','zeFWj':function(_0x490de7,_0x457b87){return _0x490de7+_0x457b87;},'koisp':function(_0x33d977,_0x300a56){return _0x33d977===_0x300a56;},'wieir':_0x5183('4','SS79'),'CkhGj':function(_0x5327f8,_0xdc5e25){return _0x5327f8+_0xdc5e25;},'otRne':function(_0x4a18b8,_0x713563){return _0x4a18b8+_0x713563;}};cc=$[_0x5183('5','49HP')]+_0x5183('6','w[xw');console[_0x5183('7','IFjh')](_0x41f7d5[_0x5183('8','wo9S')]);console[_0x5183('9','#6ON')](_0x5183('a','$WXa')+new Date(new Date()['getTime']())['toLocaleString']());if(_0x41f7d5[_0x5183('b','EU9H')](typeof $request,_0x41f7d5['PJwZV'])){if(_0x41f7d5[_0x5183('c','8lj$')]!==_0x5183('d','zOd6')){$[_0x5183('e','JosC')](_0x41f7d5[_0x5183('f','k[#D')]);}else{$[_0x5183('10',')YBy')]('[Tips]请先前往获取\x20用户基础数据Uid\x20📲');}}else if(!ucpigappkey){$[_0x5183('11','w[xw')](_0x5183('12','8lj$')+$['name']+_0x5183('13','6jhE'));await _0x41f7d5['JwllC'](githubkey);}else{let _0x32329a=ucpigapp[_0x5183('14','5SZb')](_0x2ca5b2=>_0x2ca5b2['hd'])['map'](_0x1e8c13=>({'uid':_0x1e8c13[_0x5183('15','cMaa')],'headers':JSON[_0x5183('16','EU9H')](_0x1e8c13['hd']),'exchangebody':_0x1e8c13['exchange'],'txmoneybody':_0x1e8c13[_0x5183('17','4f33')],'pigawardurl':_0x1e8c13[_0x5183('18','4f33')],'pigawardbody':_0x1e8c13[_0x5183('19','Ah)O')],'videotask1':_0x1e8c13['videotask1'],'videotask2':_0x1e8c13[_0x5183('1a',')YBy')],'videoaward':_0x1e8c13['videoaward'],'coinurl':_0x1e8c13[_0x5183('1b','4Dwf')]}));console['log'](_0x5183('1c','kbAd')+$['name']+_0x5183('1d','S5u('));console[_0x5183('1e','4f33')](_0x5183('1f','vDOh')+_0x32329a[_0x5183('20','lsUx')]+'个账号');for(let _0xee9b4d=0x0;_0xee9b4d<_0x32329a['length'];_0xee9b4d++){if(_0x41f7d5[_0x5183('21','5SZb')](_0x41f7d5['OBdmG'],'lATrv')){tkList=_0x32329a[_0xee9b4d];if(!tkList['uid']){$[_0x5183('22','lsUx')](_0x41f7d5[_0x5183('23','w[xw')]);}else{$['log'](_0x5183('24','5SZb')+$['name']+_0x5183('25','KAG)')+_0x41f7d5[_0x5183('26','BH#W')](_0xee9b4d,0x1)+_0x5183('27','xA8@'));if(_0x41f7d5['plbtg'](z,_0xee9b4d)){$[_0x5183('28','VCJ%')]('用户'+_0x41f7d5[_0x5183('29','JHg0')](_0xee9b4d,0x1)+_0x5183('2a','ene3')+tkList[_0x5183('2b','B%bz')]+_0x5183('2c','EgK$'));$['log']('\x0a🤖['+$[_0x5183('2d','yv6K')]+_0x5183('2e','qMhk')+_0x41f7d5['wNWsW'](_0xee9b4d,0x1)+'的脚本任务');await _0x41f7d5[_0x5183('2f','BH#W')](main,_0xee9b4d);}else{if(_0x41f7d5[_0x5183('30','a[K3')](_0x41f7d5[_0x5183('31','$F*G')],_0x5183('32','^TF&'))){$['log']('用户'+_0x41f7d5['wNWsW'](_0xee9b4d,0x1)+_0x5183('33','cMaa')+tkList['uid']+_0x5183('34','Ah)O'));$['log'](_0x5183('24','5SZb')+$['name']+']:~\x20System💲/尝试更新~脚本使用权限秘钥...\x20');await _0x41f7d5[_0x5183('35','ra*!')](githubkey,_0x41f7d5[_0x5183('36','wo9S')]);$['log'](_0x5183('37','MCfs')+$['name']+_0x5183('38','yv6K')+_0x41f7d5['zeFWj'](_0xee9b4d,0x1)+_0x5183('39','#IFw'));if(z()){if(_0x41f7d5[_0x5183('3a','KAG)')](_0x41f7d5[_0x5183('3b','lsUx')],_0x41f7d5[_0x5183('3c','S5u(')])){$[_0x5183('3d','S5u(')]('用户'+(_0xee9b4d+0x1)+'(ID:'+tkList[_0x5183('3e','5xbS')]+'):~\x20秘钥验证成功！🎉');$[_0x5183('3f','sEO2')](_0x5183('40','IFjh')+$[_0x5183('41','k[#D')]+_0x5183('42','$F*G')+_0x41f7d5[_0x5183('43','5xbS')](_0xee9b4d,0x1)+_0x5183('44','Ah)O'));await _0x41f7d5[_0x5183('45','Ufwa')](main,_0xee9b4d);}else{return!![];}}else{$[_0x5183('46','wo9S')](_0x5183('47','4Dwf')+_0x41f7d5[_0x5183('48','5xbS')](_0xee9b4d,0x1)+_0x5183('49',')YBy')+tkList['uid']+_0x5183('4a','Ufwa'));$['log'](_0x5183('4b','Uhe4')+(_0xee9b4d+0x1)+_0x5183('4c','KAG)')+tgmarkcode+tkList['uid']);$[_0x5183('4d','Ah)O')]($['name'],'','⚠️用户'+_0x41f7d5['otRne'](_0xee9b4d,0x1)+_0x5183('4e','VCJ%')+tgmarkcode+tkList[_0x5183('4f','DiC*')]);}}else{try{if(_0x41f7d5[_0x5183('50','cMaa')](ll['indexOf'](id),-0x1)){return!![];}}catch(_0x537e86){$[_0x5183('51','yv6K')](_0x537e86);return![];}}}}}else{$['log']('','❌\x20'+$['name']+',\x20失败!\x20原因:\x20'+e+'!','');}}}})()[_0x5183('52','Ah)O')](_0x2152de=>{$['log']('','❌\x20'+$['name']+',\x20失败!\x20原因:\x20'+_0x2152de+'!','');})['finally'](()=>{$[_0x5183('53','KAG)')]();});function z(){var _0x54ff8c={'YRqDQ':function(_0x5adea6,_0x443f07){return _0x5adea6!==_0x443f07;},'ZXcDl':_0x5183('54','qMhk'),'drNpc':function(_0x5b0da0,_0x65638f){return _0x5b0da0>_0x65638f;},'eQqfN':'UURZX','MdYeE':function(_0x33b98b,_0x22d5de){return _0x33b98b(_0x22d5de);}};const _0x5dc0c4=_0x54ff8c[_0x5183('55','k[#D')](decodeURIComponent,Base64[_0x5183('56','Ah)O')](ucpigappkey));function _0x4f8d36(_0x551aca){if(_0x54ff8c[_0x5183('57','wo9S')](_0x54ff8c[_0x5183('58','MCfs')],_0x54ff8c[_0x5183('59','zOd6')])){$['log'](_0x5183('5a','yv6K'));}else{try{if(_0x54ff8c['drNpc'](_0x5dc0c4['indexOf'](_0x551aca),-0x1)){return!![];}}catch(_0x361bff){if(_0x54ff8c['eQqfN']!==_0x5183('5b','MCfs')){return![];}else{$[_0x5183('51','yv6K')](_0x361bff);return![];}}}}if(_0x54ff8c[_0x5183('5c',')YBy')](_0x4f8d36,tkList[_0x5183('5d','ra*!')])){return!![];}else{return![];}}function initTaskOptions(_0xf44915,_0x2f517c){return{'url':''+_0xf44915,'headers':{'Accept':_0x5183('5e','k[#D'),'Origin':_0x5183('5f','#6ON'),'Connection':_0x5183('60','KAG)'),'Accept-Encoding':_0x5183('61','$F*G'),'User-Agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_1\x20like\x20Mac\x20OS\x20X;\x20zh-CN)\x20AppleWebKit/537.51.1\x20(KHTML,\x20like\x20Gecko)\x20Mobile/12H143\x20UCBrowser/13.3.3.1458\x20Mobile\x20UCWebARUA','Accept-Language':'zh-cn'},'body':_0x2f517c};}async function main(_0x124503){var _0x131a24={'oimMW':function(_0x35e2f0,_0x18ea16){return _0x35e2f0+_0x18ea16;},'dLEPJ':function(_0x297cb7,_0x2aa5a3){return _0x297cb7+_0x2aa5a3;},'bVJxX':function(_0x34c9b3,_0x14351a){return _0x34c9b3+_0x14351a;},'cfydN':function(_0x48768b){return _0x48768b();},'xBzfH':function(_0x13a007,_0x24ff7e){return _0x13a007+_0x24ff7e;},'BTgmP':_0x5183('62','49HP'),'ilFMa':function(_0x2f737f){return _0x2f737f();},'UEZxc':function(_0x17092b){return _0x17092b();},'ZzZaS':function(_0x23f8ff,_0x1b9f22){return _0x23f8ff===_0x1b9f22;},'OwDCL':function(_0x31a850,_0x2d1c7a){return _0x31a850!==_0x2d1c7a;},'VAXqC':'rtzCC','zMqIy':function(_0x3eabca,_0x354578){return _0x3eabca(_0x354578);},'uQBGp':'TlrMn','dgBlV':_0x5183('63','wo9S'),'vUDFj':function(_0x631d58){return _0x631d58();},'BFHjs':function(_0x7ba0b1,_0x1db333){return _0x7ba0b1==_0x1db333;},'bXJfe':function(_0x458fc5,_0x18a591){return _0x458fc5==_0x18a591;},'bfLTa':_0x5183('64','DiC*')};console[_0x5183('65','8lj$')](_0x5183('66','w[xw')+$[_0x5183('67','MCfs')]+']:~\x20User'+_0x131a24[_0x5183('68','KAG)')](_0x124503,0x1)+'💲查询元宝数量');await getUserInfo();console[_0x5183('69','Ufwa')](_0x5183('6a','6jhE')+$[_0x5183('6b','4f33')]+_0x5183('6c','4f33')+(_0x124503+0x1)+_0x5183('6d','EU9H'));!tkList['pigawardbody']?$[_0x5183('6e','Ah)O')]('[Tips]请先前往获取\x20收元宝cookie\x20📲'):await _0x131a24[_0x5183('6f','JosC')](pigAward);;console[_0x5183('70','5xbS')]('\x0a🐷['+$[_0x5183('71','5SZb')]+_0x5183('72','JHg0')+_0x131a24[_0x5183('73','MCfs')](_0x124503,0x1)+'💲测试执行视频任务');!tkList['videotask1']?$[_0x5183('65','8lj$')](_0x131a24[_0x5183('74','kbAd')]):await _0x131a24[_0x5183('75','$F*G')](videoTaskTest1);!tkList[_0x5183('76','#IFw')]?$[_0x5183('77','5SZb')](_0x5183('78','#IFw')):await videoTaskTest2();console['log'](_0x5183('79','cMaa')+$[_0x5183('6b','4f33')]+_0x5183('7a','a[K3')+_0x131a24[_0x5183('7b','B%bz')](_0x124503,0x1)+_0x5183('7c','S5u('));await _0x131a24[_0x5183('7d','cMaa')](videoAwardTest);if(_0x131a24['ZzZaS'](awardstate,0x2)){if(_0x131a24[_0x5183('7e',')YBy')](_0x131a24['VAXqC'],_0x131a24['VAXqC'])){$[_0x5183('7f','a[K3')]('❌用户'+_0x131a24[_0x5183('80','cMaa')](_0x124503,0x1)+_0x5183('81','kbAd')+tkList[_0x5183('82','kbAd')]+_0x5183('83','EU9H'));$[_0x5183('84','Wn3w')](_0x5183('85','pFD#')+_0x131a24['dLEPJ'](_0x124503,0x1)+_0x5183('86','5xbS')+tgmarkcode+tkList['uid']);$[_0x5183('87','KAG)')]($[_0x5183('88','B%bz')],'',_0x5183('89','vDOh')+(_0x124503+0x1)+_0x5183('8a','VH06')+tgmarkcode+tkList[_0x5183('8b','8whV')]);}else{for(var _0x4af059=0x0;_0x4af059<tkList[_0x5183('8c','EU9H')][_0x5183('8d','zOd6')];_0x4af059++){await _0x131a24['zMqIy'](videoAward,_0x4af059);}}}else{if(_0x131a24[_0x5183('8e','8)Ar')]!==_0x5183('8f','VCJ%')){$[_0x5183('90','DiC*')]();}else{console['log'](_0x5183('91','8whV'));}}console[_0x5183('92','49HP')](_0x5183('93','ene3')+$[_0x5183('94','IFjh')]+_0x5183('95','vDOh')+_0x131a24[_0x5183('96','$WXa')](_0x124503,0x1)+'💲元宝转换为现金');!tkList[_0x5183('97','KAG)')]?$[_0x5183('7f','a[K3')](_0x131a24[_0x5183('98','wo9S')]):await _0x131a24[_0x5183('99','KAG)')](exchangeMoney);var _0x394129='';var _0x4af059='';if(_0x131a24[_0x5183('9a','VH06')](_0x394129,0x12)||_0x394129==0x13||_0x394129==0x14||_0x394129==0x15||_0x131a24[_0x5183('9b','S5u(')](_0x394129,0x16)||_0x131a24[_0x5183('9c','Ufwa')](_0x394129,0x17)){console[_0x5183('46','wo9S')](_0x5183('9d','5xbS')+$[_0x5183('9e','Ah)O')]+']:~\x20User'+_0x131a24[_0x5183('9f','BH#W')](_0x124503,0x1)+'💲提现');!tkList['txmoneybody']?$[_0x5183('28','VCJ%')](_0x131a24['bfLTa']):await _0x131a24[_0x5183('a0','B%bz')](txMoney,_0x124503);}};_0xodI='jsjiami.com.v6';async function txMoney(i){return new Promise((resolve)=>{const options=initTaskOptions(`${hostucwallet}exchange/submitExchange`,tkList.txmoneybody);$.post(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const code=data.code
switch(code){case"OK":$.log(`→User${i+1}成功提现到支付宝🎉`)
$.msg($.name,'',`User${i+1}成功提现到支付宝🎉`);break;case"EXCHANGE:NOT_ENOUGH_BALANCE":$.log(`→余额不足,明天再来🎉`)
break;case"EXCHANGE:INVALID_USER":$.log(`[Tips]User${i+1}请先前往获取 提现支付宝cookie📲`)
break;default:console.log(`**** sample *****\n`);$.log(`\n‼️${resp.statusCode}[txMoney 调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function exchangeMoney(){return new Promise((resolve)=>{const options=initTaskOptions(`${hostcoral2}piggybank/withdraw/exchange`,tkList.exchangebody);$.post(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const code=data.code
switch(code){case"SCENE_APP_ERROR":$.log('[Tips]请先前往获取 元宝兑换cookie📲')
break;case"NOT_ENOUGH":$.log('→余额不足,明天再来🎉')
break;default:$.log(`\n‼️${resp.statusCode}[exchangeMoney 调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function pigAward(){return new Promise((resolve)=>{const options=initTaskOptions(tkList.pigawardurl,tkList.pigawardbody);$.post(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const state=data.success
switch(state){case false:console.log(`→小猪扑满元宝已收完🎉`);break;case true:console.log(`✔️小猪扑满收取${data.data.piggyData.remainAmount}元宝`);break;default:$.log(`\n‼️${resp.statusCode}[ pigAward 调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function videoAward(m){return new Promise((resolve)=>{const options=initTaskOptions(tkList.videoaward[m]);$.get(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const code=data.code
switch(code){case"REPEAT_REQUEST_ID":console.log(`→执行结果:失败❌`);break;case"OK":console.log(`✔️执行ID${data.data.curTask.id}结果:领取奖励${data.data.prizes[0].rewardItem.amount}元宝成功🎉`);break;default:$.log(`\n‼️${resp.statusCode}[videoAward 调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function videoAwardTest(){let testArrNum=Random(0,tkList.videoaward.length)
console.log(`→随机测试奖励数据:第${testArrNum+1}个数据`);return new Promise((resolve)=>{const options=initTaskOptions(tkList.videoaward[testArrNum]);$.get(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);awardtest=data.success
awardstate=data.data.state}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function videoTaskDay2(h){return new Promise((resolve)=>{const options=initTaskOptions(tkList.videotask2[h]);$.get(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const code=data.code
switch(code){case"REPEAT_REQUEST_ID":console.log(`→执行结果:失败❌`);break;case"OK":console.log(`✔️执行ID${data.data.curTask.id}结果:观看视频任务${data.data.curTask.target}成功🎉`);break;default:$.log(`\n‼️${resp.statusCode}[videoTaskDay2调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function videoTaskDay1(k){return new Promise((resolve)=>{const options=initTaskOptions(tkList.videotask1[k]);$.get(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const code=data.code
switch(code){case"REPEAT_REQUEST_ID":console.log(`→执行结果:失败❌`);break;case"OK":console.log(`✔️执行ID${data.data.curTask.id}结果:观看视频任务${data.data.curTask.target}成功🎉`);break;default:$.log(`\n‼️${resp.statusCode}[videoTaskDay1调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function videoTaskTest1(){return new Promise((resolve)=>{let testArrNum=Random(0,tkList.videotask1.length)
console.log(`→随机测试视频第一组:第${testArrNum+1}个数据`);const options=initTaskOptions(tkList.videotask1[testArrNum]);$.get(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const videotest=data.success
switch(videotest){case true:const state=data.data.state
if(state!==3){console.log(`→测试结果:使用【第一天】的任务组,开始执行任务\n`);for(let k=0;k<tkList.videotask1.length;k++){await videoTaskDay1(k);await $.wait(1000)};console.log(`[Tips]如果有没执行的任务,请使用第一天的重写引用,前往获取cookie`);}else{console.log(`→测试结果1:可执行任务已完成🎉\n[Tips]如果结果不正确请重新执行脚本`);}
break;case false:console.log(`→测试结果1:可执行任务已完成🎉\n[Tips]如果结果不正确请重新执行脚本`);break;default:$.log(`\n‼️${resp.statusCode}[videoTaskTest 调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function videoTaskTest2(){return new Promise((resolve)=>{let testArrNum=Random(0,tkList.videotask2.length)
console.log(`→随机测试视频第二组:第${testArrNum+1}个数据`);const options=initTaskOptions(tkList.videotask2[testArrNum]);$.get(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const videotest=data.success
switch(videotest){case true:const state=data.data.state
if(state!==3){console.log(`→测试结果:使用【第二天】的任务组,开始执行任务\n`);for(let h=0;h<tkList.videotask2.length;h++){await videoTaskDay2(h);await $.wait(1000);};console.log(`[Tips]如果有没执行的任务,请使用第一天的重写引用,前往获取cookie`);}else{console.log(`→测试结果2:可执行任务已完成🎉\n[Tips]如果结果不正确请重新执行脚本`);}
break;case false:console.log(`→测试结果2:可执行任务已完成🎉\n[Tips]如果结果不正确请重新执行脚本`);break;default:$.log(`\n‼️${resp.statusCode}[videoTaskTest 调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
async function getUserInfo(){return new Promise((resolve)=>{const options=initTaskOptions(`${tkList.coinurl}`);$.get(options,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败，请检查自身设备网络情况");console.log(JSON.stringify(err));$.logErr(err);}else{if(safeGet(data)){data=JSON.parse(data);const code=data.code
mycoin=data.data.longterm.amount
switch(code){case"OK":console.log(`→目前小猪元宝${mycoin}个,大约可换现金${mycoin/10000}元`);break;default:$.log(`\n‼️${resp.statusCode}[getUserInfo 调试log]:${resp.body}`);}}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
function formatDateTime(inputTime){var date=new Date(inputTime);var y=date.getFullYear();var m=date.getMonth()+1;m=m<10?('0'+m):m;var d=date.getDate();d=d<10?('0'+d):d;var h=date.getHours();h=h<10?('0'+h):h;var minute=date.getMinutes();var second=date.getSeconds();minute=minute<10?('0'+minute):minute;second=second<10?('0'+second):second;return y+m;};function safeGet(data){try{if(typeof JSON.parse(data)=="object"){return true;}}catch(e){console.log(e);console.log(`⛔️服务器访问数据为空，请检查自身设备网络情况`);return false;}}
async function githubkey(keystate){return new Promise((resolve)=>{let url={url:`${githubkeyUrl}`,};$.get(url,async(err,resp,data)=>{try{if(err){console.log("⛔️API查询请求失败❌ ‼️‼️");console.log(JSON.stringify(err));$.logErr(err);}else{switch(keystate){case"again":ucpigappkey=Base64.encode(data);if(ucpigappkey)$.setdata(ucpigappkey,'ucpigappkey');break;default:ucpigappkey=Base64.encode(data);$.log(ucpigappkey);if(ucpigappkey)$.setdata(ucpigappkey,'ucpigappkey');$.log(`\n🤖[${$.name}]:请重新执行脚本进行秘钥验证`);$.msg($.name,'',`🤖请重新执行脚本进行秘钥验证`);}}}catch(e){$.logErr(e,resp);}finally{resolve();}});});}
function Random(min,max){return Math.round(Math.random()*(max-min))+min;}
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
