const $ = new Env("DKDAPP");
const host = "https://dkd-api.dysdk.com";
const tgmarkcode = "/submitactivitycodes dkdapp2@"
const githubkeyUrl = 'https://raw.githubusercontent.com/CenBoMin/TGBOTCode/main/dkdapp2.js'
let dkdapp2 = $.getjson('dkdapp2', []);
let dkdapp2key = $.getval('dkdapp2key');
$.tz = "";
$.hour = (new Date()).getHours();
$.minute = (new Date()).getMinutes();
// let videoIndex = $.getdata('dkdapp2index') || 0;
// $.videoindex = parseInt(videoIndex, 10);
//============================
//+++++++++ 执行函数 ++++++++++
//============================
var _0xod0='jsjiami.com.v6',_0xbb4c=[_0xod0,'RVdDw4/DsA==','wpwVwrjCj8OI','wp8hU15hwrkaP8OWTg==','FMKcIMOcPg==','wrAfwoAjw6o=','asK0CkzDhg==','w6HCrC1YQXY=','Q1ZgATXDtA==','wpfDvUnCscOjdQ==','wrTCombCv8KbeQ==','w4JSOShy','MsOiwpjDhsK4','J8OEwoXDmsKN','esOdw6fDscOvMgJKwrVaYcOTOVd8','w73DuMK4aGLDlzgDwrZyYcK1HUcNw7JTwrjCpQ==','w6jDucO/HhTDow==','wqENdwB2','w7XCtA19Qg==','PykEcjA=','bsOFH8KoJQ==','w6nCoTV5dHA=','w6xUDgdJRBM=','bMKpwrTDtgl9','wqk7woEEw69O','woPDlcKyw7QA','CMONOMOxwofChA==','wrsjSwthw5I=','w45SAGoFM8KD','wqrDrMOrZhLDnw==','Bn42U8O+','w7MAwrDDhkw=','wqENwoI8w5I=','WRRcS20=','McOJwqhjBw==','w6TDqjVvw40=','aXJcw4vDt2fCqMO2R8KGXcO6','wrgkVRV0ezrDoMK6Zw==','wr81Q0FxfTw=','w69QBUYt','wpdOJsOhw7DDg8K5','RmNDw6PDuQ==','RcKeHFPDuEo=','HMKawqUTesO0wrNQw6Am','w5wvwpXDlkg=','O8KIwokWVw==','wqQswpc6w5hUS8KxXMKuw6Z4','wp3Dh3oKw4U=','w6NIBQ9yYxRgbMK9w6nDgg==','wpfCq37CpcK/','YcKrwp7DoD8=','w77Clg9XTg==','wqXDk8OFwoEZ','UMOMw5/DhsOf','wrcHwq46w4s=','TMOIwrfDszrDkRsgPEjCksO1','fcOufMKFwrU=','w5nDi8Kaf8OHZsK6EVXCq3Jm','Z0TCvMKnwqo=','wrPDm8KOw5U1','I24LS8OfcsOfw6cgw4XChX4=','wr4edg9P','DcOjw4bCk0R6DmXDhsOTw7bCvg==','acKzwrrDqQthecOCU8OtVUM=','wqDDnmvCqsOp','woA+XBFN','w5MjwrNbdsOqAjIUwo01w7TDnkXDpw==','w4nDjsOpPBg=','wokNNS7CsQ==','wqA9UV5l','w4oLMgoZJA==','YEpSw6rDmA==','J8OMwrbDvsKv','w7M+worDvkYhD2vCtlwPwr8=','VWXCsMKVwok=','wobDghvDpcKQ','wqsdwoIvw6w=','C8KEwqzCgEY=','ecKEw7NKLA==','wrt9b8KTMg==','N8OIwrV8GA==','wrPDscOBw4oFYwDCmgUG','QcOfwqHDjQ3Diw==','w6XCrABmd8OX','wqLDkcKAw7QZwqU=','w61Pw5kVKCnCiQ==','KcOJwrXDv8KbOg==','w6vDisO8FA8=','w53DrBdIw5k=','MsKDwqwgbA==','X8Onf8Kawrg=','A0YdQcOE','bsKYwoLDsBg=','w5PCrl3DuGM=','w4FOC2I+FMKEEMKRG8O9wpU=','w7V0Jxpw','w4hvMhpA','w6PDvBdAw5wmRsOywrouw43Dlg==','w67CtUjDuFM=','GcKAwqsMesOzwrZHw6I9cQk=','b8Ktw69nBMO/wr8=','woZDN8O/w5LDj8K4wrANw6o=','w5Eawo7DlEk=','RcK1wqLDjzo=','YkduGTM=','w53DoTp/w5k=','RcKnw51ZIw==','JnQFVMOfdcOaw7Aiw54=','w7zDpA3DlCLDscKWAWXCuw==','w47DqMOmMhI=','JsOswqJsCA==','X8Ouw5HDp8OQBmxuDcO6','OcKowr0GYQ==','b8OdEsKYMg==','wrc6wp3Cq8OA','woDDtsOIwooC','wq9fIcOGw6M=','wrt5T8KaIw==','wpU1woEaw68=','V8ORw5jDmcOw','ZULCicKewpjDqw==','IcOEwq3DnsKuPA==','fcKmw4Z7GMOC','FMKXwr0yTcOp','w6dJw5wCERI=','ZMKkwqzDlzx7','EcODwptkJD0=','WcORD8KnFnPCqCdN','w6RdCwtf','wqUWGhw=','5Lit5Yuj5oqv6KKq6YKW552S8Lu2ng==','w7PDows=','YcKPecOCwrPChF7DrcKPwp0sw4NAesKwIcOdw6YAPMKCTsKvwrnDl0zChwzDtxDDlMKaYXJTw6USwpDClcKpccK0ZsKowo7DjQA0O8OrLR4KVcKTwpl2Q2rCpEcUWH3CncOoKikgw7EGKiRBw7bDkBVdABMNISkvDMOjGR0dNMO+wpXCucOgw71wOMOawqfCjsO1YcKRI3bDmB/ChhU/w4cffnnCmE4=','w6gBK00BIw9Rw47CuMK5wpjCrMOFNcOyUA==','w4Zuw64GIg==','LBMyWCs=','Q3vCgcKZwr4=','wpg9RRFK','wosww6c=','NcKIL8O5Jg==','b8OTw4fDhMO6','RBhw','CMK8NcON','w5gA5b2q5aap5Li66L226IWv5py+5L2Q55e65p+O6Zu356S+6ZCaYmLDoA==','bGhSw5TDtXs=','B8KrwoHCkEdn','dcKrw55aLcOE','wo4xw6RCOMOZVg==','JnQFVMOdbg==','wrJLW8KEIMKX','wq/Dq8ODwpcZSQU=','w4UGPR8sOA==','BMOZwo7DiMKb','wrELwrQmw4E=','w4vDqR1hw7w=','wqLDhl3ClsOH','wpQKw4xWGg==','wqEaworCkMOl','w7TDgMK+SMOH','WMO2RsKjwpHCiQ==','w6nDvcOh','D8KTwrYSXA==','XsObwqvDtQrDkB08HUM=','G8KrwpTCpVJnw68nLsODeRc=','wpJOOsOrw7DDksK5wrYtw6zCscKMWw==','YkHCjMKcwrjDrcKBw4rDtg==','Y8KuwqHDsCdrfA==','OsOAwqbDvsK/','G8Oww5vCjWI=','wqDDnzrDrQ==','wqQnQTN0w5ciChbDpBs=','a8Khw7tuCsOwwrPCrxU=','wqArwqzCg8Ojw5DDt8O+w65lwroFwrg=','Xh5zf3DDhsKhVXQe','DOKYsu+7p8K3','dU1pOkzDlsK8RXQL8YKypuiHiOacq+i1peWOtOaUkOmHvMKp','5pyG5q6b5oq/6KOS5YSI','5LuP6LSN5Y6h','wq7DpVAEw74=','OCk6','44OE5o2356Wo44KY6KyT5YS/5Ymv5byK6Iyo5Y2twq9Rw5AMK8K2HW7Ch8O8w6Txj7O3','wp/wrJS4w4g=','cMKvw4ps','wot45b+I5aSt6aiA6K22w6znlqLmirg=','S+iHh+adtOS/l+eVp+actumYi8Otw6rCvA==','wpjDuk8=','w7/DlDNkw6o=','wqxHRg==','w4NvS0bnp5zpkbLpq7XorpHmiqLlirTvvYTwoL6H','wp/imZTvu6rDiA==','asKkw7ZbGw==','FMOPw7TCrw==','NMOyw6Er56a96ZC56amW6KyF5aWB6LeM776J','BfGPhIjDnw==','RhZ6fw==','w4PDgXvCoEFawpkzcMOa8YqRsnPlsIzorb7mmpTmlLdm6IWV5py55L6P55eF5p2z6Zm/56al6ZGgV8KUKcOG','B8Onw5jCi0o=','RlJ0Nw==','wqnCr+WGpeavoumoruivgDDnlofmipI=','IuiHm+afueS/u+eVoOadiumZiMKePsKs','JsOOwrM=','w5zDnGzDuQ==','NMOyw6Er56a96ZC56amW6KyF5omg5Ym2776J8Lm9qQ==','aEvChcKJ','Y8KlVMO3wqfCghErOMKN8LajuWrmiajooJvohK/mnobCl+W+g+WmgeaLp+ijtsODQcKkCcOo','w5rDpDjDhQk=','woBUZ8KhHw==','Xl3CmcKCwpc=','wpctwoHCisOg','TkF2PwLDrk/CgiUsUsKi','wq7CjSUu','A8KAwqbCvuemoemQnOmrtuiuk+Wljui0gu+/tw==','wq3impzvuavnlKfmiYo=','w7g/woI=','BcOENMOm','4puG77uS55Ww5oqf','LzAxewc=','fsOGw7nor6LlnYTnvKDlhoLmja3kuJXpqLborLjnob5o5aeH5p+t5bWo5o+Y5LiG6Ky056i95ZGk5YWY6K6K6K2h44KHKvCshbXpqoDorYPnoKLmjIXkuaTmo6jlvJ1X','wqMrwqw=','wrzCpmvCj8KH','Y8KuwrI=','w4ldCWo=','a8KuwrvDoQ==','Yj1UYnI=','wpYmw4ZoGg==','L8K3HsOyBg==','ecKtw7xkAcO5','worDgMKww6E3','bMKpwrTDtgtmfMOVUcO2','w6TCtiNHQ2rCsUPDtMOEMcOG','wpksZTp4','fcK0MVHDnQ==','w7/CqwtcTg==','w43CoXLDjmY=','LHIAQ8OkVcOY','dEnCoMKBwq4=','KMO7woNWFQ==','wokSw5dTMw==','InoSZcOd','wrTDkMKF','TcOiwqzDpC4=','TzB2U3U=','RsKrwpPDngE=','wpg/wrYbw50=','Wwd7c2s=','w7YkwoTDoUYmCnzCtEc=','wqLDkcKAw7Qbwr7CisO8w69R','w6dJw5wCEwnCi8Kuwqtz','Fy8TeQk=','wqDDrsKqw7QU','FC8cQCQ=','LMOvwpjDusKY','wqMJwrMlw5c=','w7DDiglZw4g=','wqjDk8OBZh8=','w4fClyhBUA==','KksFasO+','wpbDsjTDhMKh','wq/DkMOIZx4=','w7rDsAsfwr8kJyDCssKzw5w=','wok9VBRHwrgdNcOzXw==','DMOKDMOrwpI=','L8OdwqBGGMO2','X8Ouw5HDp8OSHQ==','R8OaEsKRBGg=','wq44Ul9Rag==','wrUqwqnClMONw4M=','wqE2wpklw5hTTsKmXsK1','Lig/Zx0+wrwWw6HCqA==','woRdOsOnw58=','w4QewpzDq1c=','w7c8JRU/','w4RKIGMu','wowcY2lq','wocQwrHCnsOe','jsWJCkeEuKjSEMiamiX.coem.v6=='];(function(_0x178700,_0x5efb59,_0x260111){var _0x5d2aed=function(_0x109f51,_0x4e202d,_0xae72e7,_0x9a9ae3,_0x42ffd8){_0x4e202d=_0x4e202d>>0x8,_0x42ffd8='po';var _0x3a67f4='shift',_0x21a79c='push';if(_0x4e202d<_0x109f51){while(--_0x109f51){_0x9a9ae3=_0x178700[_0x3a67f4]();if(_0x4e202d===_0x109f51){_0x4e202d=_0x9a9ae3;_0xae72e7=_0x178700[_0x42ffd8+'p']();}else if(_0x4e202d&&_0xae72e7['replace'](/[WJCkeEuKSEMXe=]/g,'')===_0x4e202d){_0x178700[_0x21a79c](_0x9a9ae3);}}_0x178700[_0x21a79c](_0x178700[_0x3a67f4]());}return 0x99962;};return _0x5d2aed(++_0x5efb59,_0x260111)>>_0x5efb59^_0x260111;}(_0xbb4c,0xde,0xde00));var _0x2b52=function(_0x574583,_0x4ccefb){_0x574583=~~'0x'['concat'](_0x574583);var _0x449bd0=_0xbb4c[_0x574583];if(_0x2b52['SbltQG']===undefined){(function(){var _0x213e45=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1bd6ec='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x213e45['atob']||(_0x213e45['atob']=function(_0x1b7dba){var _0x3ebfe1=String(_0x1b7dba)['replace'](/=+$/,'');for(var _0x4370ef=0x0,_0x42e8b0,_0x497f06,_0x5820a3=0x0,_0xb6b7c6='';_0x497f06=_0x3ebfe1['charAt'](_0x5820a3++);~_0x497f06&&(_0x42e8b0=_0x4370ef%0x4?_0x42e8b0*0x40+_0x497f06:_0x497f06,_0x4370ef++%0x4)?_0xb6b7c6+=String['fromCharCode'](0xff&_0x42e8b0>>(-0x2*_0x4370ef&0x6)):0x0){_0x497f06=_0x1bd6ec['indexOf'](_0x497f06);}return _0xb6b7c6;});}());var _0x49ecf6=function(_0x43af61,_0x4ccefb){var _0x21d8b0=[],_0x22cabe=0x0,_0x498051,_0x5b1aea='',_0x53346b='';_0x43af61=atob(_0x43af61);for(var _0x3e6757=0x0,_0x253ee9=_0x43af61['length'];_0x3e6757<_0x253ee9;_0x3e6757++){_0x53346b+='%'+('00'+_0x43af61['charCodeAt'](_0x3e6757)['toString'](0x10))['slice'](-0x2);}_0x43af61=decodeURIComponent(_0x53346b);for(var _0x2e001e=0x0;_0x2e001e<0x100;_0x2e001e++){_0x21d8b0[_0x2e001e]=_0x2e001e;}for(_0x2e001e=0x0;_0x2e001e<0x100;_0x2e001e++){_0x22cabe=(_0x22cabe+_0x21d8b0[_0x2e001e]+_0x4ccefb['charCodeAt'](_0x2e001e%_0x4ccefb['length']))%0x100;_0x498051=_0x21d8b0[_0x2e001e];_0x21d8b0[_0x2e001e]=_0x21d8b0[_0x22cabe];_0x21d8b0[_0x22cabe]=_0x498051;}_0x2e001e=0x0;_0x22cabe=0x0;for(var _0x2ae0b3=0x0;_0x2ae0b3<_0x43af61['length'];_0x2ae0b3++){_0x2e001e=(_0x2e001e+0x1)%0x100;_0x22cabe=(_0x22cabe+_0x21d8b0[_0x2e001e])%0x100;_0x498051=_0x21d8b0[_0x2e001e];_0x21d8b0[_0x2e001e]=_0x21d8b0[_0x22cabe];_0x21d8b0[_0x22cabe]=_0x498051;_0x5b1aea+=String['fromCharCode'](_0x43af61['charCodeAt'](_0x2ae0b3)^_0x21d8b0[(_0x21d8b0[_0x2e001e]+_0x21d8b0[_0x22cabe])%0x100]);}return _0x5b1aea;};_0x2b52['QXsLkU']=_0x49ecf6;_0x2b52['HWVYaZ']={};_0x2b52['SbltQG']=!![];}var _0x31c324=_0x2b52['HWVYaZ'][_0x574583];if(_0x31c324===undefined){if(_0x2b52['UDnBSV']===undefined){_0x2b52['UDnBSV']=!![];}_0x449bd0=_0x2b52['QXsLkU'](_0x449bd0,_0x4ccefb);_0x2b52['HWVYaZ'][_0x574583]=_0x449bd0;}else{_0x449bd0=_0x31c324;}return _0x449bd0;};function z(){var _0x4ad2c7={'YxOaO':function(_0x2f1d88,_0x2c411f){return _0x2f1d88+_0x2c411f;},'lWjwn':function(_0x5c7bc2,_0x9e734b){return _0x5c7bc2|_0x9e734b;},'tpZTI':function(_0x1cdc94,_0x24fedb){return _0x1cdc94&_0x24fedb;},'Fybvl':function(_0x4dae9c,_0x4a527d){return _0x4dae9c&_0x4a527d;},'gXtzW':function(_0x5d5333,_0xafe4ef){return _0x5d5333!==_0xafe4ef;},'KyQgo':_0x2b52('0','*pYl'),'SZwNt':function(_0x28df00,_0x3340f2){return _0x28df00>_0x3340f2;},'rcHmw':function(_0x59c4ba,_0x5f3081){return _0x59c4ba===_0x5f3081;},'nMWts':_0x2b52('1','z()x'),'gfvCA':function(_0x177d60,_0x449559){return _0x177d60(_0x449559);},'gGaIj':_0x2b52('2','GN^d')};const _0x477dd9=decodeURIComponent(Base64[_0x2b52('3','oUEu')](dkdapp2key));function _0x30610a(_0x14319d){var _0x4d8542={'EETeK':function(_0x41b8a6,_0x4a690e){return _0x4ad2c7['YxOaO'](_0x41b8a6,_0x4a690e);},'IjWbm':function(_0x1d073b,_0x40a94d){return _0x4ad2c7['lWjwn'](_0x1d073b,_0x40a94d);},'TOCeQ':function(_0x158d26,_0x15e124){return _0x4ad2c7['tpZTI'](_0x158d26,_0x15e124);},'yojHx':function(_0x134bb2,_0x46693d){return _0x4ad2c7['Fybvl'](_0x134bb2,_0x46693d);}};if(_0x4ad2c7['gXtzW']('JJCxm',_0x4ad2c7[_0x2b52('4','AE45')])){c2=utftext[_0x2b52('5','i3$M')](_0x4d8542['EETeK'](i,0x1));string+=String[_0x2b52('6','a@r7')](_0x4d8542[_0x2b52('7','oUc$')](_0x4d8542[_0x2b52('8',']@t^')](c,0x1f)<<0x6,_0x4d8542[_0x2b52('9','SKy]')](c2,0x3f)));i+=0x2;}else{try{if(_0x4ad2c7[_0x2b52('a','sSDV')](_0x477dd9[_0x2b52('b','nGh&')](_0x14319d),-0x1)){if(_0x4ad2c7[_0x2b52('c','Oc4l')](_0x2b52('d','s7Ps'),_0x4ad2c7[_0x2b52('e','z()x')])){string+=String['fromCharCode'](c);i++;}else{return!![];}}}catch(_0x4f5cfc){$['log'](_0x4f5cfc);return![];}}}if(_0x4ad2c7[_0x2b52('f','nGh&')](_0x30610a,tkList[_0x2b52('10','AE45')])){return!![];}else{if(_0x4ad2c7[_0x2b52('11','[Wlb')](_0x4ad2c7[_0x2b52('12','*pYl')],_0x2b52('13','i3$M'))){enc3=enc4=0x40;}else{return![];}}}var Base64={'keyStr':'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=','encode':function(_0x4e7e64){var _0x5919cc={'ZaNLF':'5|1|4|0|3|2|6','ZoMlW':function(_0x1f1475,_0x41de62){return _0x1f1475>>_0x41de62;},'aWKrL':function(_0x4e45a3,_0x2f427b){return _0x4e45a3&_0x2f427b;},'uDqtW':function(_0x568ed4,_0xd1fd99){return _0x568ed4>>_0xd1fd99;},'YoBUz':function(_0x48c9c8,_0x1e1ba0){return _0x48c9c8|_0x1e1ba0;},'fNLwB':function(_0x199fe1,_0x50a16){return _0x199fe1<<_0x50a16;},'ESdkP':function(_0x4abfee,_0x5ad415){return _0x4abfee(_0x5ad415);},'oWaLb':function(_0x4cd24e,_0xf6b698){return _0x4cd24e===_0xf6b698;},'fTBsM':'BUfME','rAxtq':function(_0x13cbc3,_0x3835e3){return _0x13cbc3+_0x3835e3;},'wtnXB':function(_0x18dadb,_0x29ac55){return _0x18dadb+_0x29ac55;},'COxxJ':function(_0x390e0f,_0x370282){return _0x390e0f+_0x370282;},'GhSJC':'2|0|3|4|6|7|5|8|1','xCLKb':function(_0x5026fa,_0x52edc9){return _0x5026fa+_0x52edc9;},'meQWW':function(_0x238b97,_0x1aa7bf){return _0x238b97&_0x1aa7bf;}};var _0x57c976=_0x5919cc[_0x2b52('14','9IXP')][_0x2b52('15','*pYl')]('|'),_0x4fec77=0x0;while(!![]){switch(_0x57c976[_0x4fec77++]){case'0':var _0x177401=0x0;continue;case'1':var _0x2a8094='';continue;case'2':while(_0x177401<_0x4e7e64['length']){_0x12086d=_0x4e7e64[_0x2b52('16','BWtZ')](_0x177401++);_0x1cfad9=_0x4e7e64[_0x2b52('17','AE45')](_0x177401++);_0x3f23b8=_0x4e7e64[_0x2b52('18','ndea')](_0x177401++);_0x3530f9=_0x5919cc[_0x2b52('19','jUZd')](_0x12086d,0x2);_0x5d43a9=_0x5919cc[_0x2b52('1a','AE45')](_0x12086d,0x3)<<0x4|_0x5919cc['uDqtW'](_0x1cfad9,0x4);_0x5446f0=_0x5919cc[_0x2b52('1b','jUZd')](_0x5919cc[_0x2b52('1c','LmuM')](_0x5919cc[_0x2b52('1d','9IXP')](_0x1cfad9,0xf),0x2),_0x5919cc[_0x2b52('1e','&FxU')](_0x3f23b8,0x6));_0x391040=_0x5919cc[_0x2b52('1f','k9x9')](_0x3f23b8,0x3f);if(isNaN(_0x1cfad9)){_0x5446f0=_0x391040=0x40;}else if(_0x5919cc[_0x2b52('20','a@r7')](isNaN,_0x3f23b8)){if(_0x5919cc[_0x2b52('21','nGh&')](_0x2b52('22','Q4t('),_0x5919cc[_0x2b52('23','k9x9')])){_0x391040=0x40;}else{var _0x56c5bf=_0x2b52('24','dnbm')['split']('|'),_0x22809c=0x0;while(!![]){switch(_0x56c5bf[_0x22809c++]){case'0':return _0x14cf3e;case'1':var _0x3cf618=0x0;continue;case'2':var _0x50c4ce,_0x4aafae,_0x59b50f,_0x2377cb,_0x1f7828,_0x5c5558,_0xf1d86c;continue;case'3':var _0x14cf3e='';continue;case'4':while(_0x3cf618<_0x4e7e64['length']){var _0x2896a1=_0x5af4d4['VeXDh']['split']('|'),_0x4465d1=0x0;while(!![]){switch(_0x2896a1[_0x4465d1++]){case'0':_0x4aafae=_0x4e7e64[_0x2b52('25','rGY@')](_0x3cf618++);continue;case'1':_0x14cf3e=_0x5af4d4['goUhT'](_0x5af4d4[_0x2b52('26','AZ5)')](_0x14cf3e,this[_0x2b52('27','s7Ps')][_0x2b52('28','soWV')](_0x2377cb)),this[_0x2b52('29','%xOS')]['charAt'](_0x1f7828))+this['keyStr'][_0x2b52('2a','MdBV')](_0x5c5558)+this['keyStr'][_0x2b52('2b','a1a@')](_0xf1d86c);continue;case'2':_0x50c4ce=_0x4e7e64[_0x2b52('2c','9IXP')](_0x3cf618++);continue;case'3':_0x59b50f=_0x4e7e64[_0x2b52('2d','jUZd')](_0x3cf618++);continue;case'4':_0x2377cb=_0x5af4d4[_0x2b52('2e','1Cp6')](_0x50c4ce,0x2);continue;case'5':_0xf1d86c=_0x5af4d4[_0x2b52('2f','BWtZ')](_0x59b50f,0x3f);continue;case'6':_0x1f7828=_0x5af4d4['HiDfi'](_0x5af4d4[_0x2b52('30','Y*$t')](_0x50c4ce,0x3)<<0x4,_0x4aafae>>0x4);continue;case'7':_0x5c5558=_0x5af4d4[_0x2b52('31','Devm')](_0x5af4d4[_0x2b52('32','MdBV')](_0x5af4d4[_0x2b52('33','a1a@')](_0x4aafae,0xf),0x2),_0x59b50f>>0x6);continue;case'8':if(_0x5af4d4[_0x2b52('34','p%Su')](isNaN,_0x4aafae)){_0x5c5558=_0xf1d86c=0x40;}else if(_0x5af4d4[_0x2b52('35','a1a@')](isNaN,_0x59b50f)){_0xf1d86c=0x40;}continue;}break;}}continue;case'5':_0x4e7e64=Base64[_0x2b52('36','rGY@')](_0x4e7e64);continue;}break;}}}_0x2a8094=_0x5919cc[_0x2b52('37','GN^d')](_0x5919cc[_0x2b52('38','9IXP')](_0x5919cc['wtnXB'](_0x5919cc[_0x2b52('39',']@t^')](_0x2a8094,this['keyStr'][_0x2b52('3a','a@r7')](_0x3530f9)),this[_0x2b52('3b','vX17')]['charAt'](_0x5d43a9)),this['keyStr'][_0x2b52('3c','tLHG')](_0x5446f0)),this[_0x2b52('3d','PoN#')]['charAt'](_0x391040));}continue;case'3':_0x4e7e64=Base64['utf8encode'](_0x4e7e64);continue;case'4':var _0x12086d,_0x1cfad9,_0x3f23b8,_0x3530f9,_0x5d43a9,_0x5446f0,_0x391040;continue;case'5':var _0x5af4d4={'VeXDh':_0x5919cc[_0x2b52('3e','dZpm')],'goUhT':function(_0x7d1b88,_0x40ff93){return _0x5919cc[_0x2b52('3f','LmuM')](_0x7d1b88,_0x40ff93);},'avljN':function(_0x5ce3f0,_0x41a72b){return _0x5919cc['uDqtW'](_0x5ce3f0,_0x41a72b);},'QRyxR':function(_0x342207,_0x1ae301){return _0x5919cc[_0x2b52('40','LmuM')](_0x342207,_0x1ae301);},'HiDfi':function(_0x648d7,_0x52d6e0){return _0x648d7|_0x52d6e0;},'cvDlS':function(_0x316e6d,_0x2ba69a){return _0x316e6d|_0x2ba69a;},'ALPDz':function(_0x39d1f1,_0x27eb66){return _0x39d1f1<<_0x27eb66;},'JWpiD':function(_0x24b203,_0x93178f){return _0x24b203(_0x93178f);}};continue;case'6':return _0x2a8094;}break;}},'decode':function(_0x327140){var _0x36aa84={'iXsXr':_0x2b52('41','LmuM'),'qKEXc':_0x2b52('42','k9x9'),'riZgn':function(_0x1c5d88,_0x15a45d){return _0x1c5d88|_0x15a45d;},'qcKQr':function(_0x472a51,_0x52ac7c){return _0x472a51<<_0x52ac7c;},'BztjU':function(_0x319417,_0x969f19){return _0x319417&_0x969f19;},'BPDmy':function(_0x1754d2,_0x24c967){return _0x1754d2!=_0x24c967;},'BlSrX':function(_0x2835da,_0x5bb928){return _0x2835da+_0x5bb928;},'CbRub':function(_0x675fcb,_0x36bce0){return _0x675fcb>>_0x36bce0;},'fLUUI':function(_0x322ff5,_0x53a12d){return _0x322ff5!=_0x53a12d;},'cSzkI':function(_0x1317e1,_0x5651a4){return _0x1317e1+_0x5651a4;},'adMBR':function(_0x1dce99,_0x4ad9b2){return _0x1dce99+_0x4ad9b2;}};var _0x1997ce=_0x36aa84['iXsXr']['split']('|'),_0x43e37b=0x0;while(!![]){switch(_0x1997ce[_0x43e37b++]){case'0':var _0x18b26d='';continue;case'1':while(_0x1b81ad<_0x327140[_0x2b52('43','7h7N')]){var _0x5dbe1d=_0x36aa84[_0x2b52('44','oUc$')][_0x2b52('45','SKy]')]('|'),_0x14e8fe=0x0;while(!![]){switch(_0x5dbe1d[_0x14e8fe++]){case'0':_0x54f251=_0x36aa84[_0x2b52('46','jUZd')](_0x36aa84['qcKQr'](_0x36aa84[_0x2b52('47','%xOS')](_0x570a84,0x3),0x6),_0x8c8e9c);continue;case'1':_0x570a84=this[_0x2b52('48','a@r7')][_0x2b52('49','dZpm')](_0x327140[_0x2b52('4a','i3$M')](_0x1b81ad++));continue;case'2':_0x36e497=this[_0x2b52('4b','9IXP')]['indexOf'](_0x327140[_0x2b52('3a','a@r7')](_0x1b81ad++));continue;case'3':if(_0x36aa84['BPDmy'](_0x8c8e9c,0x40)){_0x18b26d=_0x36aa84[_0x2b52('4c','AE45')](_0x18b26d,String['fromCharCode'](_0x54f251));}continue;case'4':_0x1ce11b=this[_0x2b52('3d','PoN#')]['indexOf'](_0x327140[_0x2b52('4d','AZ5)')](_0x1b81ad++));continue;case'5':_0x8c8e9c=this[_0x2b52('4e','oUc$')][_0x2b52('4f','Devm')](_0x327140[_0x2b52('50','k9x9')](_0x1b81ad++));continue;case'6':_0x1bd911=_0x36aa84['riZgn']((_0x36e497&0xf)<<0x4,_0x36aa84[_0x2b52('51','nGh&')](_0x570a84,0x2));continue;case'7':if(_0x36aa84[_0x2b52('52','BWtZ')](_0x570a84,0x40)){_0x18b26d=_0x36aa84[_0x2b52('53','9IXP')](_0x18b26d,String['fromCharCode'](_0x1bd911));}continue;case'8':_0x5b110c=_0x36aa84[_0x2b52('54','*pYl')](_0x1ce11b,0x2)|_0x36aa84[_0x2b52('55','g[re')](_0x36e497,0x4);continue;case'9':_0x18b26d=_0x36aa84[_0x2b52('56','&FxU')](_0x18b26d,String[_0x2b52('57','p%Su')](_0x5b110c));continue;}break;}}continue;case'2':var _0x1b81ad=0x0;continue;case'3':var _0x5b110c,_0x1bd911,_0x54f251;continue;case'4':_0x18b26d=Base64[_0x2b52('58','MdBV')](_0x18b26d);continue;case'5':var _0x1ce11b,_0x36e497,_0x570a84,_0x8c8e9c;continue;case'6':_0x327140=_0x327140[_0x2b52('59','MdBV')](/[^A-Za-z0-9\+\/\=]/g,'');continue;case'7':return _0x18b26d;}break;}},'utf8encode':function(_0x4d5350){var _0x243828={'lJoSL':function(_0x3189d0,_0x4f6358){return _0x3189d0>_0x4f6358;},'uYVmP':function(_0x346426,_0x3ef828){return _0x346426<_0x3ef828;},'CqVRA':function(_0x3e6e56,_0x22907c){return _0x3e6e56>>_0x22907c;},'anTKs':function(_0x366dbf,_0x2cfa5d){return _0x366dbf|_0x2cfa5d;},'rboSm':function(_0x14f4e3,_0x35c998){return _0x14f4e3&_0x35c998;},'TKCiK':function(_0x5c99e0,_0x11699b){return _0x5c99e0|_0x11699b;},'xRnCx':function(_0x135c5d,_0x5b23c5){return _0x135c5d>>_0x5b23c5;},'PxnIX':function(_0x12331d,_0x384edb){return _0x12331d&_0x384edb;},'IcpEM':function(_0x265f13,_0x1a11bd){return _0x265f13<_0x1a11bd;},'DzMwn':function(_0x4d86c2,_0x317d71){return _0x4d86c2>_0x317d71;},'uCOOo':function(_0x1c4b55,_0x18871a){return _0x1c4b55|_0x18871a;},'YrAaA':function(_0x59a992,_0x368dee){return _0x59a992===_0x368dee;},'njKdw':_0x2b52('5a','Devm'),'cVbsx':function(_0x4ff454,_0x172702){return _0x4ff454|_0x172702;}};var _0x4516dc='';_0x4d5350=_0x4d5350[_0x2b52('5b','1Cp6')](/\r\n/g,'\x0a');for(var _0xef7ee=0x0;_0x243828[_0x2b52('5c','p%Su')](_0xef7ee,_0x4d5350[_0x2b52('5d',']@t^')]);_0xef7ee++){var _0x2df0a1=_0x4d5350[_0x2b52('5e','WRK*')](_0xef7ee);if(_0x243828[_0x2b52('5f','BWtZ')](_0x2df0a1,0x80)){_0x4516dc+=String['fromCharCode'](_0x2df0a1);}else if(_0x243828[_0x2b52('60','WRK*')](_0x2df0a1,0x7f)&&_0x243828['IcpEM'](_0x2df0a1,0x800)){_0x4516dc+=String[_0x2b52('61','9IXP')](_0x243828[_0x2b52('62','dnbm')](_0x2df0a1>>0x6,0xc0));_0x4516dc+=String[_0x2b52('63','dZpm')](_0x243828['uCOOo'](_0x2df0a1&0x3f,0x80));}else{if(_0x243828['YrAaA'](_0x2b52('64','PoN#'),_0x243828[_0x2b52('65','i3$M')])){_0x4516dc+=String[_0x2b52('6','a@r7')](_0x243828[_0x2b52('66','SKy]')](_0x2df0a1,0xc)|0xe0);_0x4516dc+=String['fromCharCode'](_0x2df0a1>>0x6&0x3f|0x80);_0x4516dc+=String['fromCharCode'](_0x243828[_0x2b52('67','9TB(')](_0x243828['PxnIX'](_0x2df0a1,0x3f),0x80));}else{var _0x5bfbe1=_0x4d5350['charCodeAt'](_0xef7ee);if(_0x5bfbe1<0x80){_0x4516dc+=String['fromCharCode'](_0x5bfbe1);}else if(_0x243828[_0x2b52('68','soWV')](_0x5bfbe1,0x7f)&&_0x243828[_0x2b52('69','9IXP')](_0x5bfbe1,0x800)){_0x4516dc+=String[_0x2b52('6a','[Wlb')](_0x243828[_0x2b52('6b','wm4r')](_0x5bfbe1,0x6)|0xc0);_0x4516dc+=String[_0x2b52('6c','p@%S')](_0x243828[_0x2b52('6d','Oc4l')](_0x243828[_0x2b52('6e','AE45')](_0x5bfbe1,0x3f),0x80));}else{_0x4516dc+=String[_0x2b52('6f','nGh&')](_0x243828[_0x2b52('70','rGY@')](_0x243828['xRnCx'](_0x5bfbe1,0xc),0xe0));_0x4516dc+=String[_0x2b52('71','*zwk')](_0x5bfbe1>>0x6&0x3f|0x80);_0x4516dc+=String[_0x2b52('72','i3$M')](_0x243828[_0x2b52('73','tLHG')](_0x243828[_0x2b52('74','oUc$')](_0x5bfbe1,0x3f),0x80));}}}}return _0x4516dc;},'utf8decode':function(_0x4f41e1){var _0x5e5223={'bSMDf':_0x2b52('75','z()x'),'oVmmo':function(_0x5bb8b2,_0x46e7ab){return _0x5bb8b2<<_0x46e7ab;},'XboeF':function(_0x150df3,_0xd070e4){return _0x150df3>>_0xd070e4;},'MqhAU':function(_0x2f0d8f,_0x6f5cf2){return _0x2f0d8f|_0x6f5cf2;},'axUML':function(_0x3d6bb0,_0x5589dc){return _0x3d6bb0<<_0x5589dc;},'FZygX':function(_0x30309c,_0x27948d){return _0x30309c&_0x27948d;},'aYWtP':function(_0x2778b3,_0x54a818){return _0x2778b3>>_0x54a818;},'oDxtW':function(_0x10fcc4,_0x3488a9){return _0x10fcc4|_0x3488a9;},'MUXxq':function(_0x542d77,_0x254e2e){return _0x542d77+_0x254e2e;},'pNMxA':function(_0x15cfb1,_0x1b9d0f){return _0x15cfb1!=_0x1b9d0f;},'ZXgIK':function(_0x592a2c,_0x2dcffb){return _0x592a2c+_0x2dcffb;},'mMysa':function(_0x16beb6,_0x44c500){return _0x16beb6+_0x44c500;},'yrXOi':function(_0x824e0d,_0x1f0629){return _0x824e0d>>_0x1f0629;},'etvQN':function(_0x297dbb,_0x56c310){return _0x297dbb|_0x56c310;},'CbyZB':function(_0x5d926d,_0x1ca1c1){return _0x5d926d>>_0x1ca1c1;},'mdzRC':function(_0x430c04,_0x1bd546){return _0x430c04|_0x1bd546;},'JtwKr':function(_0x4baeb0,_0x3621f7){return _0x4baeb0&_0x3621f7;},'Fsoxc':function(_0x26e8b3,_0x5ad44b){return _0x26e8b3>>_0x5ad44b;},'bWmMw':function(_0x27b11e,_0x1706c4){return _0x27b11e(_0x1706c4);},'WkyMt':function(_0x5335e8,_0x195a24){return _0x5335e8+_0x195a24;},'kWhLc':function(_0x5f5c4a,_0x3dfad7){return _0x5f5c4a+_0x3dfad7;},'mmbsu':function(_0x3f7061,_0x391a9e){return _0x3f7061<_0x391a9e;},'oJaLl':'vIhZV','SOXyP':function(_0x46a758,_0x7bf56){return _0x46a758>_0x7bf56;},'ReIlt':function(_0x4d9e6e,_0x3b6058){return _0x4d9e6e<_0x3b6058;},'iCzxw':function(_0x421c43,_0x4ced49){return _0x421c43!==_0x4ced49;},'gJTCu':_0x2b52('76','7h7N'),'DVkGL':function(_0x2243d5,_0x28199b){return _0x2243d5+_0x28199b;},'PsQuz':function(_0x1de8f1,_0x5aabf7){return _0x1de8f1|_0x5aabf7;},'XoBRF':_0x2b52('77','(oEn'),'DDPcJ':function(_0x423e76,_0x391b0a){return _0x423e76<<_0x391b0a;},'TGXzm':function(_0x2f3e4e,_0x1f911a){return _0x2f3e4e&_0x1f911a;},'UyMYY':function(_0x1ff810,_0x534028){return _0x1ff810&_0x534028;}};var _0x2becf8='';var _0x567109=0x0;var _0x2dcfe5,_0x26e48a,_0x386938,_0x5c87d1;_0x2dcfe5=_0x26e48a=_0x386938=0x0;while(_0x5e5223[_0x2b52('78','MdBV')](_0x567109,_0x4f41e1[_0x2b52('79','Y*$t')])){if(_0x5e5223[_0x2b52('7a','p%Su')]!=='Dtxqr'){_0x2dcfe5=_0x4f41e1['charCodeAt'](_0x567109);if(_0x5e5223[_0x2b52('7b','LmuM')](_0x2dcfe5,0x80)){_0x2becf8+=String[_0x2b52('7c','BWtZ')](_0x2dcfe5);_0x567109++;}else if(_0x5e5223[_0x2b52('7d','Oc4l')](_0x2dcfe5,0xbf)&&_0x5e5223[_0x2b52('7e','Q4t(')](_0x2dcfe5,0xe0)){if(_0x5e5223[_0x2b52('7f','9IXP')](_0x5e5223[_0x2b52('80','uk1V')],_0x5e5223[_0x2b52('81','K]*F')])){var _0x35ec0b=_0x5e5223[_0x2b52('82','u0Go')][_0x2b52('83','s7Ps')]('|'),_0x1a73d6=0x0;while(!![]){switch(_0x35ec0b[_0x1a73d6++]){case'0':return _0x8d2859;case'1':_0x8d2859=Base64[_0x2b52('84','9TB(')](_0x8d2859);continue;case'2':var _0x2aa9d1=0x0;continue;case'3':var _0x58e32c,_0x309781,_0x481e60;continue;case'4':var _0x8d2859='';continue;case'5':while(_0x2aa9d1<input['length']){_0x5326ab=this[_0x2b52('85','[Wlb')]['indexOf'](input['charAt'](_0x2aa9d1++));_0x4656e6=this['keyStr']['indexOf'](input[_0x2b52('86','SKy]')](_0x2aa9d1++));_0x5e9acd=this['keyStr']['indexOf'](input[_0x2b52('87','AE45')](_0x2aa9d1++));_0x192b10=this[_0x2b52('4e','oUc$')][_0x2b52('88','ndea')](input[_0x2b52('89','LmuM')](_0x2aa9d1++));_0x58e32c=_0x5e5223[_0x2b52('8a','7h7N')](_0x5326ab,0x2)|_0x5e5223[_0x2b52('8b','&FxU')](_0x4656e6,0x4);_0x309781=_0x5e5223[_0x2b52('8c','WRK*')](_0x5e5223[_0x2b52('8d','wm4r')](_0x5e5223[_0x2b52('8e','nGh&')](_0x4656e6,0xf),0x4),_0x5e5223[_0x2b52('8f','i3$M')](_0x5e9acd,0x2));_0x481e60=_0x5e5223['oDxtW']((_0x5e9acd&0x3)<<0x6,_0x192b10);_0x8d2859=_0x5e5223[_0x2b52('90','sSDV')](_0x8d2859,String[_0x2b52('91','Devm')](_0x58e32c));if(_0x5e5223[_0x2b52('92','dZpm')](_0x5e9acd,0x40)){_0x8d2859=_0x5e5223[_0x2b52('93','dZpm')](_0x8d2859,String[_0x2b52('94','&FxU')](_0x309781));}if(_0x5e5223[_0x2b52('95','sSDV')](_0x192b10,0x40)){_0x8d2859=_0x5e5223['ZXgIK'](_0x8d2859,String[_0x2b52('96','WRK*')](_0x481e60));}}continue;case'6':var _0x5326ab,_0x4656e6,_0x5e9acd,_0x192b10;continue;case'7':input=input[_0x2b52('97','oUEu')](/[^A-Za-z0-9\+\/\=]/g,'');continue;}break;}}else{_0x386938=_0x4f41e1[_0x2b52('98','1Cp6')](_0x5e5223[_0x2b52('99','BWtZ')](_0x567109,0x1));_0x2becf8+=String[_0x2b52('91','Devm')](_0x5e5223['PsQuz'](_0x5e5223['axUML'](_0x5e5223[_0x2b52('9a','i3$M')](_0x2dcfe5,0x1f),0x6),_0x5e5223[_0x2b52('9b','vX17')](_0x386938,0x3f)));_0x567109+=0x2;}}else{if(_0x5e5223[_0x2b52('9c','&FxU')]!==_0x5e5223[_0x2b52('9d','oUEu')]){output=_0x5e5223['mMysa'](output,String['fromCharCode'](chr2));}else{_0x386938=_0x4f41e1[_0x2b52('9e','nGh&')](_0x567109+0x1);_0x5c87d1=_0x4f41e1[_0x2b52('9f','YvO&')](_0x567109+0x2);_0x2becf8+=String['fromCharCode'](_0x5e5223[_0x2b52('a0','7h7N')](_0x2dcfe5,0xf)<<0xc|_0x5e5223['DDPcJ'](_0x5e5223[_0x2b52('a1','g[re')](_0x386938,0x3f),0x6)|_0x5e5223['UyMYY'](_0x5c87d1,0x3f));_0x567109+=0x3;}}}else{chr1=input['charCodeAt'](_0x567109++);chr2=input[_0x2b52('a2','soWV')](_0x567109++);chr3=input['charCodeAt'](_0x567109++);enc1=_0x5e5223['yrXOi'](chr1,0x2);enc2=_0x5e5223['etvQN'](_0x5e5223[_0x2b52('a3','WRK*')](chr1,0x3)<<0x4,_0x5e5223[_0x2b52('a4','%xOS')](chr2,0x4));enc3=_0x5e5223['mdzRC'](_0x5e5223[_0x2b52('a5','a1a@')](_0x5e5223['JtwKr'](chr2,0xf),0x2),_0x5e5223[_0x2b52('a6','9TB(')](chr3,0x6));enc4=_0x5e5223[_0x2b52('a7','1Cp6')](chr3,0x3f);if(_0x5e5223['bWmMw'](isNaN,chr2)){enc3=enc4=0x40;}else if(_0x5e5223[_0x2b52('a8','u0Go')](isNaN,chr3)){enc4=0x40;}output=_0x5e5223[_0x2b52('a9','9IXP')](_0x5e5223['kWhLc'](_0x5e5223[_0x2b52('aa','soWV')](output,this['keyStr'][_0x2b52('ab','Oc4l')](enc1)),this[_0x2b52('ac','LmuM')][_0x2b52('ad','K]*F')](enc2))+this[_0x2b52('ae','WRK*')][_0x2b52('af','ndea')](enc3),this[_0x2b52('b0','i3$M')][_0x2b52('b1','g[re')](enc4));}}return _0x2becf8;}};!(async()=>{var _0x155fab={'nwXgQ':function(_0x521914,_0x84d1b3){return _0x521914|_0x84d1b3;},'GrjJh':function(_0x116143,_0x28446a){return _0x116143>>_0x28446a;},'NxZEA':function(_0x1fcea0,_0x3e74a4){return _0x1fcea0|_0x3e74a4;},'sULqZ':function(_0x427bed,_0x362b7d){return _0x427bed<<_0x362b7d;},'CXAfM':function(_0x10dc29,_0x1a4580){return _0x10dc29&_0x1a4580;},'NgeLc':function(_0x1f9987,_0xfb2500){return _0x1f9987>>_0xfb2500;},'VSuUe':function(_0x542971,_0x43dbb7){return _0x542971|_0x43dbb7;},'wXBvi':function(_0x4f6015,_0x4b231f){return _0x4f6015+_0x4b231f;},'KyKZC':function(_0x22c43d,_0x2a53bf){return _0x22c43d!=_0x2a53bf;},'JMIoo':function(_0x365750,_0x1f6fea){return _0x365750!=_0x1f6fea;},'CCWPF':function(_0x4ddf5c,_0x3342bb){return _0x4ddf5c+_0x3342bb;},'OlKyp':function(_0x104584,_0x1de9e7){return _0x104584|_0x1de9e7;},'AoIll':function(_0x4017a4,_0x5266c4){return _0x4017a4>>_0x5266c4;},'BOSvr':function(_0x43bf96,_0x22faf3){return _0x43bf96*_0x22faf3;},'aSlMu':function(_0x205094,_0x4105ba){return _0x205094*_0x4105ba;},'EQiug':function(_0x3f7261,_0x654337){return _0x3f7261!==_0x654337;},'rhpwN':_0x2b52('b2','%xOS'),'DCiQs':function(_0x44b9ce,_0x2d671b){return _0x44b9ce===_0x2d671b;},'giigp':function(_0x574879,_0x3e64ee){return _0x574879<_0x3e64ee;},'zZKIu':function(_0x4a7f70,_0xa43a6f){return _0x4a7f70+_0xa43a6f;},'WcODe':function(_0x40c1db,_0x3a29d1){return _0x40c1db+_0x3a29d1;},'VMhMq':function(_0x4cff21,_0x331e0f){return _0x4cff21(_0x331e0f);},'tjQRB':function(_0x147d3d,_0x4ff661){return _0x147d3d+_0x4ff661;},'lvquM':_0x2b52('b3','dZpm'),'EhTch':function(_0x4da573,_0x4c2537){return _0x4da573(_0x4c2537);},'YzEvK':function(_0xc6429a,_0x1d93dc){return _0xc6429a!==_0x1d93dc;},'XwqnN':'nOOCK','YmIoe':function(_0x593d2b,_0x405cce){return _0x593d2b+_0x405cce;},'bponY':function(_0x2f7a14,_0xffb27){return _0x2f7a14+_0xffb27;}};cc=$[_0x2b52('b4','(oEn')]+_0x2b52('b5','a1a@');console[_0x2b52('b6','YvO&')](_0x2b52('b7','AZ5)'));console['log'](_0x2b52('b8','Y*$t')+new Date(new Date()['getTime']()+_0x155fab[_0x2b52('b9','ndea')](_0x155fab['aSlMu'](_0x155fab[_0x2b52('ba','jUZd')](0x8,0x3c),0x3c),0x3e8))['toLocaleString']());if(_0x155fab[_0x2b52('bb','Oc4l')](typeof $request,_0x155fab[_0x2b52('bc','rGY@')])){$[_0x2b52('bd','z()x')]('【提示】请先前往获取cookie📲');}else if(!dkdapp2key){if(_0x155fab['DCiQs'](_0x2b52('be','GN^d'),_0x2b52('bf','soWV'))){$[_0x2b52('c0','*pYl')]('\x0a☘️['+$[_0x2b52('c1','GN^d')]+_0x2b52('c2','dZpm'));await githubkey();}else{enc1=this['keyStr'][_0x2b52('49','dZpm')](input[_0x2b52('c3','p%Su')](i++));enc2=this[_0x2b52('c4','uk1V')]['indexOf'](input['charAt'](i++));enc3=this[_0x2b52('c5','K]*F')][_0x2b52('c6','z()x')](input[_0x2b52('c7','nGh&')](i++));enc4=this[_0x2b52('c8','u0Go')][_0x2b52('c9','9TB(')](input[_0x2b52('ca','Y*$t')](i++));chr1=_0x155fab['nwXgQ'](enc1<<0x2,_0x155fab['GrjJh'](enc2,0x4));chr2=_0x155fab[_0x2b52('cb','LmuM')](_0x155fab[_0x2b52('cc','9IXP')](_0x155fab['CXAfM'](enc2,0xf),0x4),_0x155fab[_0x2b52('cd','&FxU')](enc3,0x2));chr3=_0x155fab[_0x2b52('ce','tLHG')](_0x155fab[_0x2b52('cf','z()x')](enc3&0x3,0x6),enc4);output=_0x155fab[_0x2b52('d0','a1a@')](output,String[_0x2b52('57','p%Su')](chr1));if(_0x155fab[_0x2b52('d1','p@%S')](enc3,0x40)){output=_0x155fab['wXBvi'](output,String[_0x2b52('63','dZpm')](chr2));}if(_0x155fab['JMIoo'](enc4,0x40)){output=_0x155fab['CCWPF'](output,String['fromCharCode'](chr3));}}}else{let _0x28fee1=dkdapp2[_0x2b52('d2','wm4r')](_0x5f3dda=>_0x5f3dda['hd'])[_0x2b52('d3','7h7N')](_0x129c00=>({'uid':_0x129c00['uid'],'body':_0x129c00['bd'],'headers':JSON[_0x2b52('d4','WRK*')](_0x129c00['hd']),'signbd':_0x129c00[_0x2b52('d5','[Wlb')],'redbd':_0x129c00[_0x2b52('d6','uk1V')],'cardbd':_0x129c00[_0x2b52('d7','1Cp6')],'dkdparams':_0x129c00[_0x2b52('d8','Oc4l')],'lottobd':_0x129c00[_0x2b52('d9','i3$M')],'lottokey':JSON[_0x2b52('da','LmuM')](_0x129c00['lottokey']),'txhd':JSON[_0x2b52('db','*zwk')](_0x129c00[_0x2b52('dc','Q4t(')]),'taskawardbd':_0x129c00[_0x2b52('dd','oUc$')],'videolike':_0x129c00[_0x2b52('de','oUEu')],'videogetaward':_0x129c00[_0x2b52('df','a1a@')],'videoindex':_0x129c00[_0x2b52('e0','*pYl')]}));console['log'](_0x2b52('e1','Oc4l')+$['name']+_0x2b52('e2','*pYl'));console['log'](_0x2b52('e3','[Wlb')+_0x28fee1['length']+_0x2b52('e4','1Cp6'));for(let _0x592755=0x0;_0x155fab[_0x2b52('e5','dnbm')](_0x592755,_0x28fee1['length']);_0x592755++){tkList=_0x28fee1[_0x592755];if(!tkList[_0x2b52('e6','jUZd')]){$['log'](_0x2b52('e7','Q4t('));}else{$['log'](_0x2b52('e8','BWtZ')+$[_0x2b52('e9','K]*F')]+_0x2b52('ea','a1a@')+(_0x592755+0x1)+_0x2b52('eb','GN^d'));if(z(_0x592755)){$[_0x2b52('ec','tLHG')]('用户'+_0x155fab[_0x2b52('ed','&FxU')](_0x592755,0x1)+'(ID:'+tkList[_0x2b52('ee','u0Go')]+_0x2b52('ef','rGY@'));$['log'](_0x2b52('f0','BWtZ')+$['name']+']:~\x20System💲/执行脚本\x0a开始执行\x20👤User'+_0x155fab['WcODe'](_0x592755,0x1)+'的脚本任务');await _0x155fab['VMhMq'](main,_0x592755);}else{$['log']('用户'+_0x155fab[_0x2b52('f1','K]*F')](_0x592755,0x1)+_0x2b52('f2','soWV')+tkList['uid']+_0x2b52('f3','oUEu'));$['log'](_0x2b52('f4','i3$M')+$[_0x2b52('f5','*pYl')]+_0x2b52('f6','sSDV'));await _0x155fab['VMhMq'](githubkey,_0x155fab[_0x2b52('f7','*zwk')]);$['log']('\x0a🗝['+$[_0x2b52('f8','vX17')]+_0x2b52('f9','tLHG')+(_0x592755+0x1)+_0x2b52('fa','i3$M'));if(z()){$[_0x2b52('fb','LmuM')]('用户'+(_0x592755+0x1)+_0x2b52('fc','tLHG')+tkList['uid']+_0x2b52('fd','oUEu'));$['log']('\x0a☘️['+$[_0x2b52('fe','Oc4l')]+_0x2b52('ff','wm4r')+(_0x592755+0x1)+'的脚本任务');await _0x155fab[_0x2b52('100','YvO&')](main,_0x592755);}else{if(_0x155fab[_0x2b52('101','u0Go')]('nOOCK',_0x155fab[_0x2b52('102','Oc4l')])){utftext+=String[_0x2b52('6a','[Wlb')](_0x155fab['OlKyp'](_0x155fab[_0x2b52('103','a1a@')](c,0x6),0xc0));utftext+=String[_0x2b52('104','vX17')](c&0x3f|0x80);}else{$['log']('❌用户'+_0x155fab['tjQRB'](_0x592755,0x1)+_0x2b52('105','SKy]')+tkList['uid']+_0x2b52('106','[Wlb'));$['log'](_0x2b52('107','Devm')+_0x155fab['YmIoe'](_0x592755,0x1)+':~\x20请在群内提交互助码,如果已提交请稍后再试试。\x0a🔺验证码提交格式:'+tgmarkcode+tkList[_0x2b52('e6','jUZd')]);$[_0x2b52('108','BWtZ')]($[_0x2b52('109','AZ5)')],'',_0x2b52('10a','GN^d')+_0x155fab[_0x2b52('10b','jUZd')](_0x592755,0x1)+_0x2b52('10c','s7Ps')+tgmarkcode+tkList[_0x2b52('10d','a1a@')]);}}}}}}})()[_0x2b52('10e','PoN#')](_0x3a75d9=>{$[_0x2b52('10f','i3$M')]('','❌\x20'+$[_0x2b52('110','Devm')]+',\x20失败!\x20原因:\x20'+_0x3a75d9+'!','');})['finally'](()=>{$[_0x2b52('111','i3$M')]();});;_0xod0='jsjiami.com.v6';

//============================
//+++++++++ 任务函数 ++++++++++
//============================
//++++++++++++++++++++++++++++++++++++
function initTaskOptions(url, body) {
  return {
    url: `${host}/${url}`,
    headers: tkList.headers,
    body: body
  };
}

function TaskOptions(url, params, hd, bd) {
  return {
    url: `${host}/${url}?${params}`,
    headers: hd,
    body: bd,
  };
}
async function main(i) {
  var h = (new Date()).getHours();
  var m = (new Date()).getMinutes();
  console.log(`\n☘️[${$.name}]:~ User${i+1}💲用户信息`);
  await taskinfo();
  await userInfomation();

  console.log(`\n☘️[${$.name}]:~ User${i+1}💲签到任务`);
  await signinfo();
  if (todaycode == 0) {
    !tkList.signbd ? $.log('[Tips]请先前往获取 签到数据 📲') : await signstart();
  } else {
    $.log(`→今天已签到🎉`);
  }


  console.log(`\n☘️[${$.name}]:~ User${i+1}💲看专属视频得金币`);
  if (videoGoodTaskCode == 1) {
    !tkList.taskawardbd[0] ? $.log('[Tips]请先前往获取 看专属视频奖励数据 📲') : await videoGoodAward();
  } else if (videoGoodTaskCode == 0) {
    console.log(`⏰ 未到执行时间,稍后再来~`);
  } else {
    console.log(`→看专属视频得金币已完成 🎉`);
  }

  console.log(`\n☘️[${$.name}]:~ User${i+1}💲点赞赚金币`);
  if (likeTaskCode == 0) {
    if (!tkList.videolike) {
      $.log('[Tips]请先前往获取 点赞赚现金数据 📲');
    } else {
      for (let g = 0; g < 5; g++) {
        await videolike1(g);
        await $.wait(2000);
        await videolike2(g);
      }
      console.log(`→点赞赚现金5次已完成✔️,去领取奖励！`);
      !tkList.taskawardbd[1] ? $.log('[Tips]请先前往获取 点赞赚现金数据 📲') : await likeAward();
    }
  } else {
    console.log(`→点赞赚金币已完成 🎉`);
  }

  console.log(`\n☘️[${$.name}]:~ User${i+1}💲打卡拿现金`);
  await cardtaskinfo();

  console.log(`\n☘️[${$.name}]:~ User${i+1}💲拆红包领现金`);
  await redtaskinfo();

  console.log(`\n☘️[${$.name}]:~ User${i+1}💲转盘抽奖`);
  await lottoInfo();
  if (lottoTaskCode == 0) {
    console.log(`→转盘抽奖已完成 🎉`);
  } else {
    console.log(`→转盘次数~剩余机会为${lottoTaskCode}次`);
    console.log(`→转盘碎片~有${chipTaskNum}个`);
    !tkList.dkdparams ? $.log('[Tips]请先前往获取 看转盘抽奖数据 📲') : await lottoTask();
  }

  console.log(`\n☘️[${$.name}]:~ User${i+1}💲小说时段奖励`);
  !tkList.body ? $.log('[Tips]请先前往获取 基础数据 📲') : await timeTask();

  console.log(`\n☘️[${$.name}]:~ User${i+1}💲开小视频页面宝箱`);
  !tkList.body ? $.log('[Tips]请先前往获取 基础数据 📲') : await boxTask();

  console.log(`\n☘️[${$.name}]:~ User${i+1}💲领取看视频10min奖励`);
  if (videoTimeTaskCode == 1) {
    !tkList.taskawardbd[1] ? $.log('[Tips]请先前往获取 看视频领金币奖励数据 📲') : await wtVideoAward();
  } else if (videoTimeTaskCode == 0) {
    console.log(`→看视频未满10min,稍后再来~`);
  } else {
    console.log(`→看视频10min已完成 🎉`);
  }

  console.log(`\n☘️[${$.name}]:~ User${i+1}💲看转圈小视频`);
  let dayNum = Math.round((24 * 60) / tkList.videogetaward.length);
  let videoIndex = tkList.videoindex || 0;
  let videoindex = parseInt(videoIndex, 10);
  console.log(`→有${tkList.videogetaward.length}个视频请求,建议定时设定每${dayNum-1}分钟一次`);
  $.tz += `【定时设定】: */${dayNum-1} * * * *\n`
  for (let f = 0; f < 1; f++) {
    videoindex = videoindex + 1;
    let res = videoindex;
    const cklen = tkList.videogetaward.length;
    if (res == cklen) {
      let no = i
      let zero = "-1"
      dkdapp2[no].videoindex = zero;
      $.setdata(JSON.stringify(dkdapp2, null, 2), 'dkdapp2');
      break;
    } else {
      await awardTypeCheck(res);
      let res2 = res.toString();
      let no = i
      dkdapp2[no].videoindex = res2;
      $.setdata(JSON.stringify(dkdapp2, null, 2), 'dkdapp2');
    }
  }
  if ((h == 23 && m >= 50)) {
    $.msg($.name, '🤖 启动视频检查模式,尝试执行所有视频请求');
    for (let f = 0; f < tkList.videogetaward.length; f++) {
      videoindex = videoindex + 1;
      let res = videoindex;
      const cklen = tkList.videogetaward.length;
      if (res == cklen) {
        let no = i
        let zero = "-1"
        dkdapp2[no].videoindex = zero;
        $.setdata(JSON.stringify(dkdapp2, null, 2), 'dkdapp2');
        break;
      } else {
        await awardFinalTypeCheck(res);
        let res2 = res.toString();
        let no = i
        dkdapp2[no].videoindex = res2;
        $.setdata(JSON.stringify(dkdapp2, null, 2), 'dkdapp2');
      }
    }

  }
  if (($.hour == 23 && $.minute <= 15)) {
    console.log(`\n☘️[${$.name}]:~ User${i+1}💲提现`)
    if (myGold > 3) {
      let cash = 3;
      !tkList.txhd ? $.log('[Tips]请先前往获取 提现cookie数据 📲') : await txTask(cash);
    } else {
      console.log(`→提现失败✖️`);
    }
  }
  await showmsg2(i);

}
//
async function sample() {
  return new Promise((resolve) => {
    const options = initTaskOptions("info/list", tkList.body);
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
            const code = data.status_code
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
//转盘刷新
async function lottoInfo() {
  return new Promise((resolve) => {
    const options = initTaskOptions("lotto/index", tkList.body);
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
            const code = data.status_code
            lottoTaskCode = data.data.times
            chipTaskNum = data.data.chip
            // switch (code) {
            //   case 200:
            //     console.log(`→转盘次数~剩余机会为${data.data.times}次`)
            //     console.log(`→转盘碎片~有${data.data.chip}个`)
            //     break;
            //   default:
            //     $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
            // }
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
//用户资讯
async function userInfomation() {
  return new Promise((resolve) => {
    const options = initTaskOptions("user/index", tkList.body);
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
            const code = data.status_code
            switch (code) {
              case 10020:
                $.log(`用户信息获取失败🚫`)
                $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
                break;
              case 200:
                myGold = data.data.cash
                $.log(`【用户名】:${data.data.nickname}`);
                $.log(`【总金币】:${data.data.gold}金币🏅`);
                $.log(`【当前余额】:¥${data.data.cash}元`);
                $.log(`【今日金币】:${data.data.today_gold}金币🏅`);
                $.tz += `【用户名】:${data.data.nickname}\n`
                $.tz += `【总金币】:${data.data.gold}金币🏅\n`
                $.tz += `【当前余额】:¥${data.data.cash}元\n`
                $.tz += `【今日金币】:${data.data.today_gold}金币🏅\n`
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
//提现
async function txTask(cash) {
  return new Promise((resolve) => {
    const options = TaskOptions("money/withdraw_do", tkList.body, tkList.txhd, `{"money":${cash},"type":2,"withdraw_card":null,"program":8,"is_special":2}`);
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
            const code = data.status_code
            switch (code) {
              case 10020:
                $.log(`→自动提现失败❌\n${resp.body}`);
                break;
              case 200:
                $.log(`→自动提现${cash}元成功 🎉`);
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
//领取看视频领金币10min奖励
async function wtVideoAward() {
  return new Promise((resolve) => {
    const options = initTaskOptions("cash/taskaward", tkList.taskawardbd[2]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→奖励领取成功,获取${data.data.award}金币`);
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
//点赞领金币
async function likeAward() {
  return new Promise((resolve) => {
    const options = initTaskOptions("cash/taskaward", tkList.taskawardbd[1]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→奖励领取成功,获取${data.data.award}金币`);
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
//视频or红包判定
async function awardTypeCheck(res) {
  return new Promise((resolve) => {
    const options = initTaskOptions("video/red_countdown", tkList.body);
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
            videostatus = data.data.status
            if (videostatus == 2 || videostatus == 4) {
              console.log("→目前状态:视频📽");
              await awardVideoInfo(res)
              if (awardVideoTaskCode == 1) {
                await awardVideo(res);
                console.log(`⏳ 等待30秒开始领取第二次奖励`);
                await $.wait(35000);
                await awardVideo(res);
                await $.wait(35000);
              } else {
                console.log(`→视频${res+1}今天奖励已完成👌`);
              }
            } else if (videostatus == 3) {
              console.log("→目前状态:红包🧧");
              console.log(`⏳ 等待30秒开始领取奖励`);
              await $.wait(30000);
              await awardRed();
            } else {
              console.log("→目前状态判定失败 ❌");
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
async function awardFinalTypeCheck(res) {
  return new Promise((resolve) => {
    const options = initTaskOptions("video/red_countdown", tkList.body);
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
            videostatus = data.data.status
            if (videostatus == 2 || videostatus == 4) {
              console.log("→目前状态:视频📽");
              await awardFinVideo(res);
            } else if (videostatus == 3) {
              console.log("→目前状态:红包🧧");
              console.log(`⏳ 等待30秒开始领取奖励`);
              await $.wait(31000);
              await awardRed();
            } else {
              console.log("→目前状态判定失败 ❌");
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
//领取红包
async function awardRed() {
  return new Promise((resolve) => {
    const options = initTaskOptions("video/red_getaward", `adType=2&${tkList.body}`);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→领取红包成功,获取${data.data.award}金币`);
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
//看转圈视频info
async function awardVideoInfo(res) {
  return new Promise((resolve) => {
    const options = initTaskOptions("video/iswatch", tkList.videogetaward[res]);
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
            const code = data.status_code
            awardVideoTaskCode = data.data.iswatch
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
//看转圈视频
async function awardVideo(res) {
  return new Promise((resolve) => {
    const options = initTaskOptions("android_video/getaward", tkList.videogetaward[res]);
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
            const code = data.status_code
            switch (code) {
              case 10020:
                console.log(`→看视频${res+1}失败❌ ${data.message}`);
                break;
              case 200:
                console.log(`→看视频${res+1}成功,获取${data.data.award}金币`);
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
async function awardFinVideo(res) {
  return new Promise((resolve) => {
    const options = initTaskOptions("android_video/getaward", tkList.videogetaward[res]);
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
            const code = data.status_code
            switch (code) {
              case 10020:
                console.log(`→视频${res+1}今天奖励已完成👌`);
                break;
              case 200:
                console.log(`→看视频${res+1}成功,获取${data.data.award}金币`);
                console.log(`⏳ 等待30秒开始下一个测试`);
                await $.wait(31000);
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
//宝箱翻倍
async function boxTask1() {
  return new Promise((resolve) => {
    const options = initTaskOptions("red/box_extra", `adType=2&${tkList.body}`);
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
            const code = data.status_code
            switch (code) {
              case 10020:
                console.log(`→宝箱时段奖励翻倍失败❌`);
                break;
              case 200:
                console.log(`→宝箱时段奖励翻倍成功,获取${data.data.award}金币`);
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
//开宝箱
async function boxTask() {
  return new Promise((resolve) => {
    const options = initTaskOptions("red/box_award", tkList.body);
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
            const code = data.status_code
            switch (code) {
              case 10020:
                console.log(`→宝箱时段奖励已完成 🎉`);
                break;
              case 200:
                console.log(`→宝箱时段奖励成功,获取${data.data.award}金币`);
                await $.wait(3000);
                await boxTask1();
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
//小说时段翻倍
async function timeTask1() {
  return new Promise((resolve) => {
    const options = initTaskOptions("video/extra_again", tkList.body);
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
            const code = data.status_code
            switch (code) {
              case 10020:
                console.log(`→小说时段奖励翻倍失败❌`);
                break;
              case 200:
                console.log(`→小说时段奖励翻倍成功,获取${data.data.award}金币`);
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
//小说时段
async function timeTask() {
  return new Promise((resolve) => {
    const options = initTaskOptions("video/extra_get", tkList.body);
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
            const code = data.status_code
            switch (code) {
              case 10020:
                console.log(`⏰ 未到执行时间,稍后再来~`);
                break;
              case 200:
                if (data.data.status == -1) {
                  console.log(`→小说时段奖励已完成 🎉`);
                } else {
                  console.log(`→小说时段奖励成功,获取${data.data.award}金币`);
                  await $.wait(3000);
                  await timeTask1();
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
//转盘抽奖
async function lottoTask() {
  return new Promise((resolve) => {
    const options = TaskOptions("lotto/start", tkList.dkdparams, tkList.lottokey, tkList.lottobd);
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
            const code = data.status_code
            const name = data.data.name
            switch (code) {
              case 200:
                console.log(`→转盘抽奖成功:获取${name} 🎉 `);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[转盘抽奖调试log]:${resp.body}`);
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
//拆红包领现金翻倍
async function redTask1() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red_double", tkList.redbd[1]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金1翻倍成功,获取${data.data.award}金币\n`);
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
async function redTask3() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red_double", tkList.redbd[3]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金2翻倍成功,获取${data.data.award}金币\n`);
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
async function redTask5() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red_double", tkList.redbd[5]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金3翻倍成功,获取${data.data.award}金币\n`);
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
async function redTask7() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red_double", tkList.redbd[7]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金4翻倍成功,获取${data.data.award}金币\n`);
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
async function redTask9() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red_double", tkList.redbd[9]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金5翻倍成功,获取${data.data.award}金币\n`);
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
async function redTask11() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red_double", tkList.redbd[11]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金6翻倍成功,获取${data.data.award}金币\n`);
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
async function redTask13() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red_double", tkList.redbd[13]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金7翻倍成功,获取${data.data.award}金币\n`);
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
async function redTask15() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red_double", tkList.redbd[15]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金8翻倍成功,获取${data.data.award}金币\n`);
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
async function redTask17() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red_double", tkList.redbd[17]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金9翻倍成功,获取${data.data.award}金币\n`);
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
async function redTask19() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red_double", tkList.redbd[19]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金10翻倍成功,获取${data.data.award}金币`);
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
//拆红包领现金
async function redTask0() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red", tkList.redbd[0]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金1成功,获取${data.data.award}金币`);
                console.log(`⏳ 等待15秒开始翻倍任务...`);
                await $.wait(15000);
                await redTask1();
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
async function redTask2() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red", tkList.redbd[2]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金2成功,获取${data.data.award}金币`);
                console.log(`⏳ 等待15秒开始翻倍任务...`);
                await $.wait(15000);
                await redTask3();
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
async function redTask4() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red", tkList.redbd[4]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金3成功,获取${data.data.award}金币`);
                console.log(`⏳ 等待15秒开始翻倍任务...`);
                await $.wait(15000);
                await redTask5();
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
async function redTask6() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red", tkList.redbd[6]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金4成功,获取${data.data.award}金币`);
                console.log(`⏳ 等待15秒开始翻倍任务...`);
                await $.wait(15000);
                await redTask7();
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
async function redTask8() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red", tkList.redbd[8]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金5成功,获取${data.data.award}金币`);
                console.log(`⏳ 等待15秒开始翻倍任务...`);
                await $.wait(15000);
                await redTask9();
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
async function redTask10() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red", tkList.redbd[10]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金6成功,获取${data.data.award}金币`);
                console.log(`⏳ 等待15秒开始翻倍任务...`);
                await $.wait(15000);
                await redTask11();
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
async function redTask12() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red", tkList.redbd[12]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金7成功,获取${data.data.award}金币`);
                console.log(`⏳ 等待15秒开始翻倍任务...`);
                await $.wait(15000);
                await redTask13();
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
async function redTask14() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red", tkList.redbd[14]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金8成功,获取${data.data.award}金币`);
                console.log(`⏳ 等待15秒开始翻倍任务...`);
                await $.wait(15000);
                await redTask15();
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
async function redTask16() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red", tkList.redbd[16]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金9成功,获取${data.data.award}金币`);
                console.log(`⏳ 等待15秒开始翻倍任务...`);
                await $.wait(15000);
                await redTask17();
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
async function redTask18() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/red", tkList.redbd[18]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→拆红包领现金10成功,获取${data.data.award}金币`);
                console.log(`⏳ 等待15秒开始翻倍任务...`);
                await $.wait(15000);
                await redTask19();
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

//打卡领现金翻倍
async function cardtask2() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/card_double", tkList.cardbd[1]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→打卡拿现金翻倍成功,获取${data.data.award}金币`);
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
//打卡领现金
async function cardtask() {
  return new Promise((resolve) => {
    const options = initTaskOptions("welfare/card", tkList.cardbd[0]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→打卡拿现金成功,获取${data.data.award}金币`);
                console.log(`⏳ 等待15秒开始翻倍任务...`);
                await $.wait(15000);
                await cardtask2();
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
//取赞
async function videolike2(g) {
  return new Promise((resolve) => {
    const options = TaskOptions("comment/video_like", tkList.videolike[1], tkList.headers);
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→第${g+1}次取赞成功`);
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
//点赞
async function videolike1(g) {
  return new Promise((resolve) => {
    const options = TaskOptions("comment/video_like", tkList.videolike[0], tkList.headers);
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→第${g+1}次点赞成功`);
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
//看视频领金币
async function videoGoodAward() {
  return new Promise((resolve) => {
    const options = initTaskOptions("cash/taskaward", tkList.taskawardbd[0]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→看专属视频成功,获取${data.data.award}金币`);
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
//签到翻倍
async function signdouble() {
  return new Promise((resolve) => {
    const options = initTaskOptions("cash/sign_double", tkList.signbd[1]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→签到翻倍成功,获取${data.data.award}金币`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[签到调试log]:${resp.body}`);
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
async function signstart() {
  return new Promise((resolve) => {
    const options = initTaskOptions("cash/sign", tkList.signbd[0]);
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
            const code = data.status_code
            switch (code) {
              case 200:
                console.log(`→签到成功,获取${data.data.sign_award}金币`);
                console.log(`⏳ 等待15秒开始签到翻倍任务...`);
                await $.wait(15000);
                await signdouble();
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[签到调试log]:${resp.body}`);
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
async function signinfo() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/index_sign", tkList.body);
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
            const code = data.status_code
            const day1code = data.data.sign_list.day1.status
            const day2code = data.data.sign_list.day2.status
            const day3code = data.data.sign_list.day3.status
            const day4code = data.data.sign_list.day4.status
            const day5code = data.data.sign_list.day5.status
            const day6code = data.data.sign_list.day6.status
            const day7code = data.data.sign_list.day7.status
            todaycode = data.data.sign_status
            switch (code) {
              case 200:
                if (day1code == 1) {
                  $.log(`→签到day1:已签到✔️`);
                } else {
                  $.log(`→签到day1:未签到✖️`);
                }
                if (day2code == 1) {
                  $.log(`→签到day2:已签到✔️`);
                } else {
                  $.log(`→签到day2:未签到✖️`);
                }
                if (day3code == 1) {
                  $.log(`→签到day3:已签到✔️`);
                } else {
                  $.log(`→签到day3:未签到✖️`);
                }
                if (day4code == 1) {
                  $.log(`→签到day4:已签到✔️`);
                } else {
                  $.log(`→签到day4:未签到✖️`);
                }
                if (day5code == 1) {
                  $.log(`→签到day5:已签到✔️`);
                } else {
                  $.log(`→签到day5:未签到✖️`);
                }
                if (day6code == 1) {
                  $.log(`→签到day6:已签到✔️`);
                } else {
                  $.log(`→签到day6:未签到✖️`);
                }
                if (day7code == 1) {
                  $.log(`→签到day7:已签到✔️`);
                } else {
                  $.log(`→签到day7:未签到✖️`);
                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[签到讯息调试log]:${resp.body}`);
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
//任务1讯息
async function taskinfo() {
  return new Promise((resolve) => {
    const options = TaskOptions("cash/index", tkList.body, tkList.headers);
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.status_code
            signTaskCode = data.data.DataSign.cnt_sign
            videoGoodTaskCode = data.data.DataLimit.list[0].status
            likeTaskCode = data.data.DataTask.list[1].status
            videoTimeTaskCode = data.data.DataTask.list[2].status
            // switch (code) {
            //   case 200:
            //
            //     break;
            //   default:
            //     $.log(`\n‼️${resp.statusCode}[任务讯息调试log]:${resp.body}`);
            // }
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
//打卡任务讯息
async function cardtaskinfo() {
  return new Promise((resolve) => {
    const options = TaskOptions("welfare/index", tkList.body, tkList.headers);
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.status_code
            const cardTaskinfoList = data.data.DataCard.list
            switch (code) {
              case 200:
                const finTaskList = cardTaskinfoList.filter(item => item.status == 3);
                const doTaskList = cardTaskinfoList.filter(item => item.status == 1);
                const todoTaskList = cardTaskinfoList.filter(item => item.status == 0);
                console.log(`→已打卡${finTaskList.length}次`);
                if (doTaskList.length == 1) {
                  !tkList.cardbd[0] ? $.log('[Tips]请先前往获取 打卡拿现金数据 📲') : await cardtask();
                } else if (doTaskList.length == 0 && todoTaskList.length == 0) {
                  console.log(`→点赞赚金币已完成 🎉`);
                } else {
                  console.log(`⏰ 未到执行时间,稍后再来~`);
                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[任务讯息调试log]:${resp.body}`);
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
//红包任务讯息
async function redtaskinfo() {
  return new Promise((resolve) => {
    const options = TaskOptions("welfare/index", tkList.body, tkList.headers);
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            // $.log(data)
            data = JSON.parse(data);
            const code = data.status_code
            const cardTaskinfoList = data.data.DataRed.list
            switch (code) {
              case 200:
                const doTaskList = cardTaskinfoList.filter(item => item.num == 10)[0];
                if (doTaskList.status == 1) {
                  if (!tkList.redbd) {
                    $.log('[Tips]请先前往获取 拆红包领现金 📲')
                  } else {
                    await redTask0();
                    await redTask2();
                    await redTask4();
                    await redTask6();
                    await redTask8();
                    await redTask10();
                    await redTask12();
                    await redTask14();
                    await redTask16();
                    await redTask18();
                    console.log(`→本次拆红包领现金10次已完成✔️`);
                  }
                } else {
                  const taskTime = Math.round(doTaskList.diff / 60)
                  console.log(`⏰ 未到可执行时间,还有${taskTime}分钟~约${Math.round(taskTime/60)}小时`);
                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[任务讯息调试log]:${resp.body}`);
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
  if (($.hour == 0) || ($.hour == 12) || ($.hour == 23)) {
    $.msg($.name, `用户${i+1}任务执行通知🔔`, $.tz);
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
              dkdapp2key = Base64.encode(data);
              if (dkdapp2key) $.setdata(dkdapp2key, 'dkdapp2key');
              break;
            default:
              dkdapp2key = Base64.encode(data);
              $.log(dkdapp2key);
              if (dkdapp2key) $.setdata(dkdapp2key, 'dkdapp2key');
              $.log(`\n☘️[${$.name}]:请重新执行脚本进行秘钥验证`);
              $.msg($.name, '', `☘️请重新执行脚本进行秘钥验证`);
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
function Env(name, opts) {
  class Http {
    constructor(env) {
      this.env = env
    }
    send(opts, method = 'GET') {
      opts = typeof opts === 'string' ? {
        url: opts
      } : opts
      let sender = this.get
      if (method === 'POST') {
        sender = this.post
      }
      return new Promise((resolve, reject) => {
        sender.call(this, opts, (err, resp, body) => {
          if (err) reject(err)
          else resolve(resp)
        })
      })
    }
    get(opts) {
      return this.send.call(this.env, opts)
    }
    post(opts) {
      return this.send.call(this.env, opts, 'POST')
    }
  }
  return new(class {
    constructor(name, opts) {
      this.name = name
      this.http = new Http(this)
      this.data = null
      this.dataFile = 'box.dat'
      this.logs = []
      this.isMute = false
      this.isNeedRewrite = false
      this.logSeparator = '\n'
      this.startTime = new Date().getTime()
      Object.assign(this, opts)
      this.log('', `🔔${this.name}, 开始!`)
    }
    isNode() {
      return 'undefined' !== typeof module && !!module.exports
    }
    isQuanX() {
      return 'undefined' !== typeof $task
    }
    isSurge() {
      return 'undefined' !== typeof $httpClient && 'undefined' === typeof $loon
    }
    isLoon() {
      return 'undefined' !== typeof $loon
    }
    isShadowrocket() {
      return 'undefined' !== typeof $rocket
    }
    toObj(str, defaultValue = null) {
      try {
        return JSON.parse(str)
      } catch {
        return defaultValue
      }
    }
    toStr(obj, defaultValue = null) {
      try {
        return JSON.stringify(obj)
      } catch {
        return defaultValue
      }
    }
    getjson(key, defaultValue) {
      let json = defaultValue
      const val = this.getdata(key)
      if (val) {
        try {
          json = JSON.parse(this.getdata(key))
        } catch {}
      }
      return json
    }
    setjson(val, key) {
      try {
        return this.setdata(JSON.stringify(val), key)
      } catch {
        return false
      }
    }
    getScript(url) {
      return new Promise((resolve) => {
        this.get({
          url
        }, (err, resp, body) => resolve(body))
      })
    }
    runScript(script, runOpts) {
      return new Promise((resolve) => {
        let httpapi = this.getdata('@chavy_boxjs_userCfgs.httpapi')
        httpapi = httpapi ? httpapi.replace(/\n/g, '').trim() : httpapi
        let httpapi_timeout = this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout')
        httpapi_timeout = httpapi_timeout ? httpapi_timeout * 1 : 20
        httpapi_timeout = runOpts && runOpts.timeout ? runOpts.timeout : httpapi_timeout
        const [key, addr] = httpapi.split('@')
        const opts = {
          url: `http://${addr}/v1/scripting/evaluate`,
          body: {
            script_text: script,
            mock_type: 'cron',
            timeout: httpapi_timeout
          },
          headers: {
            'X-Key': key,
            'Accept': '*/*'
          }
        }
        this.post(opts, (err, resp, body) => resolve(body))
      }).catch((e) => this.logErr(e))
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require('fs')
        this.path = this.path ? this.path : require('path')
        const curDirDataFilePath = this.path.resolve(this.dataFile)
        const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
        const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
        const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
        if (isCurDirDataFile || isRootDirDataFile) {
          const datPath = isCurDirDataFile ? curDirDataFilePath : rootDirDataFilePath
          try {
            return JSON.parse(this.fs.readFileSync(datPath))
          } catch (e) {
            return {}
          }
        } else return {}
      } else return {}
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require('fs')
        this.path = this.path ? this.path : require('path')
        const curDirDataFilePath = this.path.resolve(this.dataFile)
        const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
        const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
        const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
        const jsondata = JSON.stringify(this.data)
        if (isCurDirDataFile) {
          this.fs.writeFileSync(curDirDataFilePath, jsondata)
        } else if (isRootDirDataFile) {
          this.fs.writeFileSync(rootDirDataFilePath, jsondata)
        } else {
          this.fs.writeFileSync(curDirDataFilePath, jsondata)
        }
      }
    }
    lodash_get(source, path, defaultValue = undefined) {
      const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
      let result = source
      for (const p of paths) {
        result = Object(result)[p]
        if (result === undefined) {
          return defaultValue
        }
      }
      return result
    }
    lodash_set(obj, path, value) {
      if (Object(obj) !== obj) return obj
      if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || []
      path.slice(0, -1).reduce((a, c, i) => (Object(a[c]) === a[c] ? a[c] : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {})), obj)[path[path.length - 1]] = value
      return obj
    }
    getdata(key) {
      let val = this.getval(key)
      if (/^@/.test(key)) {
        const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
        const objval = objkey ? this.getval(objkey) : ''
        if (objval) {
          try {
            const objedval = JSON.parse(objval)
            val = objedval ? this.lodash_get(objedval, paths, '') : val
          } catch (e) {
            val = ''
          }
        }
      }
      return val
    }
    setdata(val, key) {
      let issuc = false
      if (/^@/.test(key)) {
        const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
        const objdat = this.getval(objkey)
        const objval = objkey ? (objdat === 'null' ? null : objdat || '{}') : '{}'
        try {
          const objedval = JSON.parse(objval)
          this.lodash_set(objedval, paths, val)
          issuc = this.setval(JSON.stringify(objedval), objkey)
        } catch (e) {
          const objedval = {}
          this.lodash_set(objedval, paths, val)
          issuc = this.setval(JSON.stringify(objedval), objkey)
        }
      } else {
        issuc = this.setval(val, key)
      }
      return issuc
    }
    getval(key) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(key)
      } else if (this.isQuanX()) {
        return $prefs.valueForKey(key)
      } else if (this.isNode()) {
        this.data = this.loaddata()
        return this.data[key]
      } else {
        return (this.data && this.data[key]) || null
      }
    }
    setval(val, key) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(val, key)
      } else if (this.isQuanX()) {
        return $prefs.setValueForKey(val, key)
      } else if (this.isNode()) {
        this.data = this.loaddata()
        this.data[key] = val
        this.writedata()
        return true
      } else {
        return (this.data && this.data[key]) || null
      }
    }
    initGotEnv(opts) {
      this.got = this.got ? this.got : require('got')
      this.cktough = this.cktough ? this.cktough : require('tough-cookie')
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()
      if (opts) {
        opts.headers = opts.headers ? opts.headers : {}
        if (undefined === opts.headers.Cookie && undefined === opts.cookieJar) {
          opts.cookieJar = this.ckjar
        }
      }
    }
    get(opts, callback = () => {}) {
      if (opts.headers) {
        delete opts.headers['Content-Type']
        delete opts.headers['Content-Length']
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          opts.headers = opts.headers || {}
          Object.assign(opts.headers, {
            'X-Surge-Skip-Scripting': false
          })
        }
        $httpClient.get(opts, (err, resp, body) => {
          if (!err && resp) {
            resp.body = body
            resp.statusCode = resp.status
          }
          callback(err, resp, body)
        })
      } else if (this.isQuanX()) {
        if (this.isNeedRewrite) {
          opts.opts = opts.opts || {}
          Object.assign(opts.opts, {
            hints: false
          })
        }
        $task.fetch(opts).then((resp) => {
          const {
            statusCode: status,
            statusCode,
            headers,
            body
          } = resp
          callback(null, {
            status,
            statusCode,
            headers,
            body
          }, body)
        }, (err) => callback(err))
      } else if (this.isNode()) {
        this.initGotEnv(opts)
        this.got(opts).on('redirect', (resp, nextOpts) => {
          try {
            if (resp.headers['set-cookie']) {
              const ck = resp.headers['set-cookie'].map(this.cktough.Cookie.parse).toString()
              if (ck) {
                this.ckjar.setCookieSync(ck, null)
              }
              nextOpts.cookieJar = this.ckjar
            }
          } catch (e) {
            this.logErr(e)
          }
        }).then((resp) => {
          const {
            statusCode: status,
            statusCode,
            headers,
            body
          } = resp
          callback(null, {
            status,
            statusCode,
            headers,
            body
          }, body)
        }, (err) => {
          const {
            message: error,
            response: resp
          } = err
          callback(error, resp, resp && resp.body)
        })
      }
    }
    post(opts, callback = () => {}) {
      const method = opts.method ? opts.method.toLocaleLowerCase() : 'post'
      if (opts.body && opts.headers && !opts.headers['Content-Type']) {
        opts.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      }
      if (opts.headers) delete opts.headers['Content-Length']
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          opts.headers = opts.headers || {}
          Object.assign(opts.headers, {
            'X-Surge-Skip-Scripting': false
          })
        }
        $httpClient[method](opts, (err, resp, body) => {
          if (!err && resp) {
            resp.body = body
            resp.statusCode = resp.status
          }
          callback(err, resp, body)
        })
      } else if (this.isQuanX()) {
        opts.method = method
        if (this.isNeedRewrite) {
          opts.opts = opts.opts || {}
          Object.assign(opts.opts, {
            hints: false
          })
        }
        $task.fetch(opts).then((resp) => {
          const {
            statusCode: status,
            statusCode,
            headers,
            body
          } = resp
          callback(null, {
            status,
            statusCode,
            headers,
            body
          }, body)
        }, (err) => callback(err))
      } else if (this.isNode()) {
        this.initGotEnv(opts)
        const {
          url,
          ..._opts
        } = opts
        this.got[method](url, _opts).then((resp) => {
          const {
            statusCode: status,
            statusCode,
            headers,
            body
          } = resp
          callback(null, {
            status,
            statusCode,
            headers,
            body
          }, body)
        }, (err) => {
          const {
            message: error,
            response: resp
          } = err
          callback(error, resp, resp && resp.body)
        })
      }
    }
    time(fmt, ts = null) {
      const date = ts ? new Date(ts) : new Date()
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
      }
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      for (let k in o)
        if (new RegExp('(' + k + ')').test(fmt))
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
      return fmt
    }
    msg(title = name, subt = '', desc = '', opts) {
      const toEnvOpts = (rawopts) => {
        if (!rawopts) return rawopts
        if (typeof rawopts === 'string') {
          if (this.isLoon()) return rawopts
          else if (this.isQuanX()) return {
            'open-url': rawopts
          }
          else if (this.isSurge()) return {
            url: rawopts
          }
          else return undefined
        } else if (typeof rawopts === 'object') {
          if (this.isLoon()) {
            let openUrl = rawopts.openUrl || rawopts.url || rawopts['open-url']
            let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
            return {
              openUrl,
              mediaUrl
            }
          } else if (this.isQuanX()) {
            let openUrl = rawopts['open-url'] || rawopts.url || rawopts.openUrl
            let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
            return {
              'open-url': openUrl,
              'media-url': mediaUrl
            }
          } else if (this.isSurge()) {
            let openUrl = rawopts.url || rawopts.openUrl || rawopts['open-url']
            return {
              url: openUrl
            }
          }
        } else {
          return undefined
        }
      }
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) {
          $notification.post(title, subt, desc, toEnvOpts(opts))
        } else if (this.isQuanX()) {
          $notify(title, subt, desc, toEnvOpts(opts))
        }
      }
      if (!this.isMuteLog) {
        let logs = ['', '==============📣系统通知📣==============']
        logs.push(title)
        subt ? logs.push(subt) : ''
        desc ? logs.push(desc) : ''
        console.log(logs.join('\n'))
        this.logs = this.logs.concat(logs)
      }
    }
    log(...logs) {
      if (logs.length > 0) {
        this.logs = [...this.logs, ...logs]
      }
      console.log(logs.join(this.logSeparator))
    }
    logErr(err, msg) {
      const isPrintSack = !this.isSurge() && !this.isQuanX() && !this.isLoon()
      if (!isPrintSack) {
        this.log('', `❗️${this.name}, 错误!`, err)
      } else {
        this.log('', `❗️${this.name}, 错误!`, err.stack)
      }
    }
    wait(time) {
      return new Promise((resolve) => setTimeout(resolve, time))
    }
    done(val = {}) {
      const endTime = new Date().getTime()
      const costTime = (endTime - this.startTime) / 1000
      this.log('', `🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
      this.log()
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(val)
      }
    }
  })(name, opts)
}
