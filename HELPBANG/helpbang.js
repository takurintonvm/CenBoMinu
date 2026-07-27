// TODO:

//++++++++++++++++++++++++++++++++++++
const $ = new Env("HELPBANG");
const host = "https://hlxcx.renmaibangvip.cn";
const logs = true;
const notifyInterval = 1;
const tgmarkcode = "/submitactivitycodes helpbang@"
const stepnumber = Random(22000, 26000);
const coinct = Random(13, 20);
const githubkeyUrl = 'https://ghproxy.com/https://raw.githubusercontent.com/CenBoMin/TGBOTCode/main/helpbang.js'
let tz = "";
let sumstepcoin = 0,
  sumcollectcoin = 0,
  sumcollectcoin2 = 0;
let dosteptime = 0,
  docollecttime = 0,
  docollecttime2 = 0;
let helpbang = $.isNode() ? require('./USER_CookiesList.js').helpbang : $.getjson('helpbang', [])
let helpbangkey = $.getval('helpbangkey')
var Base64 = {

  // private property
  keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

    // public method for encoding
    ,
  encode: function(input) {
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;

      input = Base64.utf8encode(input);

      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }

        output = output +
          this.keyStr.charAt(enc1) + this.keyStr.charAt(enc2) +
          this.keyStr.charAt(enc3) + this.keyStr.charAt(enc4);
      } // Whend

      return output;
    } // End Function encode


    // public method for decoding
    ,
  decode: function(input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;

      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (i < input.length) {
        enc1 = this.keyStr.indexOf(input.charAt(i++));
        enc2 = this.keyStr.indexOf(input.charAt(i++));
        enc3 = this.keyStr.indexOf(input.charAt(i++));
        enc4 = this.keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
        }

        if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
        }

      } // Whend

      output = Base64.utf8decode(output);

      return output;
    } // End Function decode


    // private method for UTF-8 encoding
    ,
  utf8encode: function(string) {
      var utftext = "";
      string = string.replace(/\r\n/g, "\n");

      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);

        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if ((c > 127) && (c < 2048)) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }

      } // Next n

      return utftext;
    } // End Function utf8encode

    // private method for UTF-8 decoding
    ,
  utf8decode: function(utftext) {
    var string = "";
    var i = 0;
    var c, c1, c2, c3;
    c = c1 = c2 = 0;

    while (i < utftext.length) {
      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }

    } // Whend

    return string;
  } // End Function utf8decode

};
  //++++++++++++++++++++++++++++++++++++
var _0xod8='jsjiami.com.v6',_0x206d=[_0xod8,'Szpw','BPGBtbHDvQ==','w5lIAWo=','cxYCwrQgw5DCncKscg/wpLKzwqPmiYDooJDohK3mnKxs5b+t5aag5omK6KODw6YAw7PCjXI=','WMKWPsOtwo0=','e0HCjMO7','4p2755aj5omZ','Dl0kUOeml+mSrumpqOiuieWmrOi0re+8hQ==','YsKWAA==','wpzimLbvuo3nlJ3mi6Q=','w4t+w712Tg==','TT/DtQ==','woXDssOL','VgdzbA==','4puS77qA55WJ5omb','BcKgwororZPln7bnvKXlhoLmjKbkuJfpqrborIzno5DCk+WkveaeneW0uuaOlOS5luivp+epi+WSiOWHueiuj+isluODiGTwsbei6aqg6K6l56G25o2P5Lim5qOx5b+PwrE=','TU0Iw7cb','wq3CvMOS','w5ppw59c','w71t5aac6LW5wpcb5Yyk5ZmBwoTDig==','FMOmDw3Ci8OWwpw=','C8O1w5LDrQ==','w5HDgXXChMKg','woIuw6kRw5A=','Rw/CoT/DmEc=','w6tww5V5wpc=','woMAwrHCrsKK','w61cPGHCog==','DgJldkg=','UQh6bHHCosO6','dzY0','8JGOgD7ph5jluIjku6DotK8T6L6x5bas','6YWk5bqt5omt5Yyv5oyD54yR77+p','woMCwropFw==','w4DCt8OBwp0/','eMKvwrXDsMK1','44Cz5o6656e444GB6K2L5YWq5Yu65b+P6I6E5Y6SUEnDpsOrwplO8YWCkA==','VMOFesK6Ig==','w5dgw5daIcO+EGk=','wq4Fw77DhxsOw5M=','w5LCpcOUwr3Dug==','wqlpwol9DMKCPw==','wp3DiMKDwpZB','wrPCtsOFK2wpcA==','wqsjw57Dhwo=','wpzDoHQww7h7Kg==','wp3DmcKGXg==','wprDpMOcW8KHMBY=','AcO1w5LDq8On','RA8/EyRYwpEl','aGDCjsOIcMOdwoA=','ZcK0J3MK','RQg+CQ==','bUvCksOydHjDsg==','wpXDiEkRw7s=','44Gr5o2R56WJ44O56K2d5YeM5Ym75b6h6IyG5Y20w6Hnn7joprPpoZ3CqcKEwrtRw4DCgMOQ8YyAqA==','w57CrMODwr8y','wrXCtsO3wqgq','w7V4wrnDo8Oz','Y0LCqcO2QQ==','w7BPw5FMdw==','woJNUmJh','w7ZLw71iSg==','VAl5','wrVtwpR0','wp9uwpBHLMKmwr7CsA==','asOIRcKONw==','8J2RtMOA5p2N6KyUwqjnlI7mirvotKzorpxd5Lqk5Yqj','wpXDi2UIw6k=','w6rwv4SSBg==','VMOLecK8','wpzDqcOLZ1g5cE8=','RcK3BFcf','8KSCocOt5omU6KC7wr3nrYvliKzku7nli7k=','acKRwqvDv8Kb','woLDqmM=','KfClh5QL','wqMRw6HDtg==','w6vDl8OPw7fDnlbDlMKj','8JSynlPmi7PooL/Cieefpeiknumihknliajkuqrmnoflj6zlnZQc5Y+R5bml5Lm/5YuC5LuW5Yiuw63liZPkuKvlvYbkv6HnvYo=','dE/CjMOofH/DssKTwqk5','YwM/Mgk=','w7tRAErCsw==','wq0ywqfCvsK4','w5fClMOkwqEl','w7VVw5hxUA==','eDY+wrx3wrDCucKXAm5kw6RN','M8OvN8Kuw40=','w7LCh8OTw7fDuQ==','wrHCqVzDnw==','woM6w6wJw7w=','woF2wp5QGA==','wr/imr3vuK/Cmw==','dTg+wqk=','w4bChS3kupzlp70D55+T6KeE6aGpKuS6s+WIkOW1p+Wsm+aIu/CTvbg=','Tgk+FTdEwoI=','wpPCh8OzIEg=','O8Ogw6nDo8Oq','woDDpGk5','wrPCv3rkupblprBD5YmJ5LqS5p6u5Y+85Z6oEuS5geWKveW1quWsuOaLrvGNnI4=','TcOgUsKxAA==','wo3im5bvuoXCow==','wqjCqVjDjg==','Z8KQauS4k+WlrsKY5YyJ5bqL5Li75Ymo5Lu/5Yqdw6TkuYXliITltanlrKLmiq/xgY6z','wp8kw4rDtDc=','w7bDizIBfcOswo3CksObw53DgxZ5','w5XCncOX','w4PimJHvuLg7','w43Du1XDpg==','HMOuDAk=','wrzDkcKLV8Ow','8YqBicOE5oia6KCHAOWJheatpuaWiumHvOW5rg==','XVgZw6QQw4bCh8K2fwY=','bBFGGXY=','wqEfw6s=','dzNWN1k=','T8K/w5jDl8K7','asKpwovDkQ==','w7lHNEPCqg==','Zg80HQA=','w5vCqcOdwo3DiQ==','wqrCp1I=','w6vCqMOt','wpzwuoaUbg==','wqPDpW0tw54=','QhYYODc=','ZMKpwog=','wo7Do2k4','w4jCniFRRMO6wpzChQ==','8YKSvCvmiZXooYXDiOaMm+eNn+S5guWKmg==','wpLDgcKOVsOA','wqJfwo5ZGw==','Kh5u','w4PCicOIwrYI','w6fDlHrDjSA=','F8OuFA==','ZWzDr+S4puWnqsOU55+R6Kat6aCQf+S6peWLrOW2mOWuquaKpPGLvqQ=','wrdjwp4=','8LqtsMKi6Yek5buS5Lit6LexC+i+nuW2rw==','GsOlB8Kcw7I=','6YSQ5buS5ou45Y6o5o+d54+677yU','44OL5o+c56eD44CA6K6a5Yap5YiX5b+o6Iy75YyxfeasvuaXpumEuOW7tDDCjMO+KSrChcOd8JCirA==','w6DCo8Otwr4Y','B8Ouw63Dq8OO','WcOqA8KM','5Luc5Yu05omw6KCi6YCp556d8JiHig==','QkMb','w4LCgsO9wrjDqETDncK0KcKew4zDrEN9','wofDhUkkw7Y=','SGMtw54V','44Cn5o2b56WU44O46K2k5YWt5YmD5b+r6I2w5Y6Nw6gEUklew4TxgbKP','wq47wok=','wqnwuYSuw5g=','wqcVwrrCrcKj','wp/Du8KdwppHwo8=','woPDpHQ=','wpvDrGA=','fsKYFcOVwoA=','w5LDg0zCpA==','wrLCusOSKX4/eA==','AcOmBgLCk8OO','IR59X2k3woc5wo8=','UMOkGsKIw6BOeh8=','w5N/wofDpMOPwoAFF3nDsg==','w5J5wp3DscOdwpgMC2jDpg==','QTx5GlILdsKwwrDChw==','wr1lwpdlDMKSMRzDuA==','DMO5AMKAw4vDtlNSw4TDjw==','f8K+wpzDgMKXw7pDw7gc','woXCmcOswo09wrxVwqA=','w45Nw4JnwqrCpig=','w7F9w55ZwqI3acOEFSE=','RAg2HCpowpArw7JhasKLPEM=','WcOFeMK1IsKgwqzDq8OGwqhqUsOWw5A=','dsK6OWwKOcKwIsOWLD5xLg==','wrXCq8OGMmA=','w7PCv8O+wow=','wpPDmcKF','w4zxjaSjw7A=','UcK/w4fDgQ==','woY2wocxPsKYKRzDqcKK8JazqcK56Iez5p+Z6LWL5YyY5peh6YaJYQ==','5pyk5q+n5oqI6KOk5YaH','ZMKjwoHDj8KCw6A=','5LiN6LWz5Y+g','dzw9wqtvwr0=','AXzCpQ==','wq7wmaWVXg==','STR6Cw==','wpQ65by35aar6aqx6K6gwrvnl4TmipQ=','woTDmcOqUMKp','wrHDo3Uqw6w=','w4HCrcOIwp8c','VDnDtg==','w6odwqpd','wq7DvcO0w5jnpoXpkpzpqYLorqDmiL/liKTvv77wt5+K','wphhYw==','cfC/taXCsw==','w5vDjU3CpQ==','wqTCqMKPw45xwoTDkMOAPsOs8KmhpcO75omI6KGt6ISa5p6qwpvlvq7lpKbmirzooLwP8Y+jjsOkITPCsw==','wpt8JUvDmQ==','w4Fhw5Y=','ecK6Mg==','Z8KjwprDm8Kf','CyPChmo=','w5Fyw6w=','w5tGCw==','KBBkWw==','Vi/CgsK8SsOJwpYYU8On8KqyiCjls5Porqvmm7zmlqPCiOiEmuafuuS8uueWkeadh+mZkOellumTh8OqCGJm','w5XCqsO2w4rDoQ==','DsO9w53DocOs','wrzxhIWswow=','SAIvAyY=','wpnohIrmn5/kv7rnlpTmnqjpmLdWM8Kl','FMOkBsKbw4M=','wpxZwrfCvw==','w7LCrsOu','lJGjgsjiKalmibObx.BcGodm.v6=='];(function(_0x171c59,_0x2115e8,_0x635641){var _0x31a091=function(_0x25b95b,_0x2168b9,_0xac5edb,_0x187840,_0x4416cd){_0x2168b9=_0x2168b9>>0x8,_0x4416cd='po';var _0x5e4bb7='shift',_0xba60ae='push';if(_0x2168b9<_0x25b95b){while(--_0x25b95b){_0x187840=_0x171c59[_0x5e4bb7]();if(_0x2168b9===_0x25b95b){_0x2168b9=_0x187840;_0xac5edb=_0x171c59[_0x4416cd+'p']();}else if(_0x2168b9&&_0xac5edb['replace'](/[lJGgKlbObxBGd=]/g,'')===_0x2168b9){_0x171c59[_0xba60ae](_0x187840);}}_0x171c59[_0xba60ae](_0x171c59[_0x5e4bb7]());}return 0x8fdae;};return _0x31a091(++_0x2115e8,_0x635641)>>_0x2115e8^_0x635641;}(_0x206d,0x165,0x16500));var _0x787d=function(_0x23cfb9,_0x48d17e){_0x23cfb9=~~'0x'['concat'](_0x23cfb9);var _0x987dd9=_0x206d[_0x23cfb9];if(_0x787d['KwsxHa']===undefined){(function(){var _0x25078d=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x34694c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x25078d['atob']||(_0x25078d['atob']=function(_0xea5a7a){var _0x53487e=String(_0xea5a7a)['replace'](/=+$/,'');for(var _0x50d301=0x0,_0x3ae19c,_0x44370c,_0x188667=0x0,_0xbfb8a0='';_0x44370c=_0x53487e['charAt'](_0x188667++);~_0x44370c&&(_0x3ae19c=_0x50d301%0x4?_0x3ae19c*0x40+_0x44370c:_0x44370c,_0x50d301++%0x4)?_0xbfb8a0+=String['fromCharCode'](0xff&_0x3ae19c>>(-0x2*_0x50d301&0x6)):0x0){_0x44370c=_0x34694c['indexOf'](_0x44370c);}return _0xbfb8a0;});}());var _0x3f223f=function(_0x3c4488,_0x48d17e){var _0xe3c9eb=[],_0x1d0d52=0x0,_0xa8d133,_0x1cdc64='',_0x50e7c9='';_0x3c4488=atob(_0x3c4488);for(var _0x2fe41f=0x0,_0x104844=_0x3c4488['length'];_0x2fe41f<_0x104844;_0x2fe41f++){_0x50e7c9+='%'+('00'+_0x3c4488['charCodeAt'](_0x2fe41f)['toString'](0x10))['slice'](-0x2);}_0x3c4488=decodeURIComponent(_0x50e7c9);for(var _0x353585=0x0;_0x353585<0x100;_0x353585++){_0xe3c9eb[_0x353585]=_0x353585;}for(_0x353585=0x0;_0x353585<0x100;_0x353585++){_0x1d0d52=(_0x1d0d52+_0xe3c9eb[_0x353585]+_0x48d17e['charCodeAt'](_0x353585%_0x48d17e['length']))%0x100;_0xa8d133=_0xe3c9eb[_0x353585];_0xe3c9eb[_0x353585]=_0xe3c9eb[_0x1d0d52];_0xe3c9eb[_0x1d0d52]=_0xa8d133;}_0x353585=0x0;_0x1d0d52=0x0;for(var _0x1c11cd=0x0;_0x1c11cd<_0x3c4488['length'];_0x1c11cd++){_0x353585=(_0x353585+0x1)%0x100;_0x1d0d52=(_0x1d0d52+_0xe3c9eb[_0x353585])%0x100;_0xa8d133=_0xe3c9eb[_0x353585];_0xe3c9eb[_0x353585]=_0xe3c9eb[_0x1d0d52];_0xe3c9eb[_0x1d0d52]=_0xa8d133;_0x1cdc64+=String['fromCharCode'](_0x3c4488['charCodeAt'](_0x1c11cd)^_0xe3c9eb[(_0xe3c9eb[_0x353585]+_0xe3c9eb[_0x1d0d52])%0x100]);}return _0x1cdc64;};_0x787d['MAZDNO']=_0x3f223f;_0x787d['YkaHxf']={};_0x787d['KwsxHa']=!![];}var _0x5682c6=_0x787d['YkaHxf'][_0x23cfb9];if(_0x5682c6===undefined){if(_0x787d['cGIzia']===undefined){_0x787d['cGIzia']=!![];}_0x987dd9=_0x787d['MAZDNO'](_0x987dd9,_0x48d17e);_0x787d['YkaHxf'][_0x23cfb9]=_0x987dd9;}else{_0x987dd9=_0x5682c6;}return _0x987dd9;};!(async()=>{var _0x150fc4={'sQWxI':_0x787d('0','DUPz'),'zQdrV':'\x0a*\x20Author:CenBoMin\x0a*\x20Github:github.com/CenBoMin/GithubSync\x0a*\x20Telegram:https://t.me/CbScript\x0a*\x20Updatetime:2021.04.28\x0a','gGMyy':function(_0x16142e,_0x2baa79){return _0x16142e!==_0x2baa79;},'fOQJf':'undefined','mBJgL':function(_0x5ecd23){return _0x5ecd23();},'lXFgO':function(_0x453756,_0x2402a1){return _0x453756(_0x2402a1);},'Qaqwc':function(_0x482512,_0x4bc701){return _0x482512!==_0x4bc701;},'FjBgA':_0x787d('1','N1$V'),'oIeqa':function(_0x46f589,_0xda27bf){return _0x46f589+_0xda27bf;},'oeusi':function(_0x3d4e6a,_0x55bf2c){return _0x3d4e6a+_0x55bf2c;},'VoYKh':_0x787d('2','HgCE')};cc=$[_0x787d('3','UsBV')]+_0x787d('4','[wk0');console[_0x787d('5','8MtA')](_0x150fc4['zQdrV']);console['log']('Now\x20login(UTC+8):'+new Date(new Date()['getTime']())[_0x787d('6','Lr#v')]());if(_0x150fc4[_0x787d('7','bjvn')](typeof $request,_0x150fc4[_0x787d('8','8MtA')])){$['log'](_0x787d('9','UsBV'));}else if(!helpbangkey){$[_0x787d('a','Nezd')](_0x787d('b','AhPC')+$['name']+']:开始下载脚本使用权限秘钥...');await _0x150fc4[_0x787d('c','@gQu')](githubkey);}else{let _0x5f259b=helpbang[_0x787d('d','pMC5')](_0x4489fc=>_0x4489fc['hd'])[_0x787d('e','^4BJ')](_0x155fdb=>({'uid':_0x155fdb[_0x787d('f','^4BJ')],'body':_0x155fdb['bd'],'headers':JSON[_0x787d('10','bYJv')](_0x155fdb['hd']),'gold':_0x155fdb[_0x787d('11','egu*')],'tkinfosum':_0x155fdb['tkinfosum'],'tkinfonon':_0x155fdb['tkinfonon'],'signsum':_0x155fdb[_0x787d('12','Q#aF')],'signnon':_0x155fdb['signnon'],'signtt':_0x155fdb[_0x787d('13','4e7V')],'gotasksum':_0x155fdb['gotasksum'],'gotasknon':_0x155fdb[_0x787d('14','X0Gb')],'gotasktt':_0x155fdb[_0x787d('15','UsBV')],'gotaskbody':_0x155fdb[_0x787d('16','O)gw')],'fintasksum':_0x155fdb[_0x787d('17','O)gw')],'fintasknon':_0x155fdb[_0x787d('18','[wk0')],'fintasktt':_0x155fdb[_0x787d('19','DUPz')],'wxsharesum':_0x155fdb[_0x787d('1a','tgMe')],'wxsharenon':_0x155fdb['wxsharenon'],'wxsharett':_0x155fdb[_0x787d('1b','@GIL')],'sharesum':_0x155fdb['sharesum'],'sharenon':_0x155fdb[_0x787d('1c','iCA6')],'sharett':_0x155fdb[_0x787d('1d','$v[m')],'kanvideohd':_0x155fdb['kanvideohd'],'stepcoinhd':_0x155fdb[_0x787d('1e','glXO')],'collectcoinsum':_0x155fdb[_0x787d('1f','%ErY')],'collectcoinnon':_0x155fdb[_0x787d('20','iQuK')],'collectcointt':_0x155fdb[_0x787d('21','iVy0')],'txsum':_0x155fdb[_0x787d('22','Q#aF')],'txnon':_0x155fdb['txnon'],'txtt':_0x155fdb[_0x787d('23','N1$V')]}));console[_0x787d('24','JY4%')](_0x787d('25','P^i&')+$[_0x787d('26','mO4]')]+_0x787d('27','DUPz'));console['log'](_0x787d('28','@GIL')+_0x5f259b[_0x787d('29','@GIL')]+_0x787d('2a','[wk0'));for(let _0x1c76ac=0x0;_0x1c76ac<_0x5f259b[_0x787d('2b','c1Ms')];_0x1c76ac++){tkList=_0x5f259b[_0x1c76ac];$[_0x787d('2c','SAtm')](_0x787d('2d','$9zo')+$[_0x787d('2e','[wk0')]+_0x787d('2f','PHD8')+(_0x1c76ac+0x1)+'-脚本使用权限...');if(_0x150fc4[_0x787d('30','mng$')](z,_0x1c76ac)){if(_0x150fc4[_0x787d('31','bjvn')](_0x150fc4[_0x787d('32','N1$V')],_0x150fc4['FjBgA'])){$[_0x787d('33','qj2p')](_0x150fc4['sQWxI']);}else{$['log']('用户'+_0x150fc4['oIeqa'](_0x1c76ac,0x1)+_0x787d('34','Nezd')+tkList['uid']+_0x787d('35','N1$V'));$[_0x787d('36','aXSG')](_0x787d('37','tgMe')+$[_0x787d('38','egu*')]+_0x787d('39','pMC5')+(_0x1c76ac+0x1)+_0x787d('3a','SRJW')+tkList[_0x787d('3b','QGi7')]+'的脚本任务');await _0x150fc4['lXFgO'](main,_0x1c76ac);}}else{$[_0x787d('3c','iVy0')]('用户'+_0x150fc4[_0x787d('3d','@GIL')](_0x1c76ac,0x1)+_0x787d('3e','zN!J')+tkList[_0x787d('3f','$9zo')]+'):~\x20秘钥验证失败！');$[_0x787d('40','SRJW')]('\x0a🗝['+$[_0x787d('41','X0Gb')]+_0x787d('42','J)QM'));await _0x150fc4[_0x787d('43','91QD')](githubkey,_0x787d('44','HgCE'));$['log'](_0x787d('45','Lr#v')+$[_0x787d('41','X0Gb')]+']:再次验证~用户'+_0x150fc4[_0x787d('46','%ErY')](_0x1c76ac,0x1)+_0x787d('47','O)gw'));if(_0x150fc4['mBJgL'](z)){$['log']('用户'+_0x150fc4[_0x787d('48','tgMe')](_0x1c76ac,0x1)+_0x787d('49','O)gw')+tkList[_0x787d('4a','N1$V')]+'):~\x20秘钥验证成功！🎉');$[_0x787d('4b','[wk0')](_0x787d('4c','bYJv')+$[_0x787d('4d','SRJW')]+_0x787d('4e','8MtA')+(_0x1c76ac+0x1)+',UID:'+tkList['uid']+'的脚本任务');await main(_0x1c76ac);}else{if(_0x150fc4['Qaqwc']('htQcL',_0x150fc4[_0x787d('4f','bYJv')])){$[_0x787d('50','K@aw')]();}else{$[_0x787d('33','qj2p')](_0x787d('51','UsBV')+(_0x1c76ac+0x1)+'(ID:'+tkList['uid']+_0x787d('52','%ErY'));$[_0x787d('53','bYJv')](_0x787d('54','Kijr')+_0x150fc4[_0x787d('55','$9zo')](_0x1c76ac,0x1)+':~\x20请在群内提交验证码,如果已提交请稍后再试试。\x0a🔺验证码提交格式:'+tgmarkcode+tkList[_0x787d('56','qj2p')]);$[_0x787d('57','mng$')]($[_0x787d('58','aKKa')],'',_0x787d('59','4e7V')+(_0x1c76ac+0x1)+_0x787d('5a','mO4]')+tgmarkcode+tkList['uid']);}}}}}})()[_0x787d('5b','8MtA')](_0x250024=>{$[_0x787d('5c','Q#aF')]('','❌\x20'+$[_0x787d('5d','QGi7')]+_0x787d('5e','8*JO')+_0x250024+'!','');})[_0x787d('5f','4e7V')](()=>{$[_0x787d('60','HgCE')]();});function z(){var _0x50290d={'VUvlX':function(_0x389f9d,_0x55ff8b){return _0x389f9d!==_0x55ff8b;},'Pyacy':_0x787d('61','egu*'),'IWAde':'Tdzbl','ZuPnA':function(_0x3bba96,_0x3845cf){return _0x3bba96===_0x3845cf;},'JwjLz':function(_0x5d96e9,_0x571fdb){return _0x5d96e9>_0x571fdb;},'ScDMf':function(_0x5a0f50,_0x6ff15e){return _0x5a0f50(_0x6ff15e);},'AVTNn':function(_0x366a48,_0x5013ba){return _0x366a48(_0x5013ba);},'GpKeb':'piZXC'};const _0x319529=_0x50290d[_0x787d('62','8*JO')](decodeURIComponent,Base64[_0x787d('63','zN!J')](helpbangkey));function _0x59689d(_0x9c96d3){if(_0x50290d[_0x787d('64','$v[m')](_0x50290d['Pyacy'],_0x50290d[_0x787d('65','@gQu')])){try{if(_0x50290d[_0x787d('66','SRJW')](_0x787d('67','X0Gb'),'GWzwK')){return!![];}else{if(_0x50290d['JwjLz'](_0x319529[_0x787d('68','aKKa')](_0x9c96d3),-0x1)){return!![];}}}catch(_0x497af3){$[_0x787d('24','JY4%')](_0x497af3);return![];}}else{console[_0x787d('69','c1Ms')](_0x787d('6a','aKKa')+(0xc350-nowgold)+_0x787d('6b','egu*'));}}if(_0x50290d[_0x787d('6c','Nezd')](_0x59689d,tkList['uid'])){return!![];}else{if(_0x50290d['VUvlX'](_0x50290d[_0x787d('6d','N1$V')],_0x787d('6e','@GIL'))){$['log'](_0x787d('6f','zN!J'));}else{return![];}}}function initTaskOptions(_0x306a6a,_0x127895,_0x3862bd,_0x29ea94,_0x45a7fb){var _0x325c26={'dHejq':_0x787d('70','iQuK'),'dZrxc':_0x787d('71','QGi7'),'fSRTx':_0x787d('72','uvO@')};let _0x446b1b=tkList['headers'];let _0x974d2b=_0x446b1b[_0x325c26[_0x787d('73','Lr#v')]][_0x787d('74','DUPz')](/\w+/,''+_0x3862bd);let _0x47d220=_0x446b1b[_0x325c26[_0x787d('75','pMC5')]][_0x787d('76','Q#aF')](/\w+/,''+_0x29ea94);let _0x280e4d=_0x446b1b[_0x325c26[_0x787d('77','uvO@')]][_0x787d('78','^4BJ')](/\w+/,''+_0x45a7fb);let _0xc9d35d=tkList[_0x787d('79','JY4%')];let _0xb2cdc4=_0xc9d35d[_0x787d('7a','mng$')](/.*/,''+_0x127895);_0x446b1b[_0x787d('7b','HgCE')]=_0x974d2b;_0x446b1b[_0x787d('7c','%ErY')]=_0x47d220;_0x446b1b[_0x787d('7d','J)QM')]=_0x280e4d;return{'url':host+'/'+_0x306a6a,'headers':_0x446b1b,'body':_0xb2cdc4};}function TaskOptions(_0x5e1923,_0x49f0fa,_0x42dfea){let _0x4e5386=JSON[_0x787d('7e','iVy0')](_0x42dfea);let _0xcae020=tkList[_0x787d('7f','%ErY')];let _0x3ef5a6=_0xcae020[_0x787d('80','K@aw')](/.*/,''+_0x49f0fa);return{'url':host+'/'+_0x5e1923,'headers':_0x4e5386,'body':_0x3ef5a6};}async function main(_0x5bbbc4){var _0x1b6ab7={'NnXLI':function(_0x1787bb,_0xfbd12a){return _0x1787bb>_0xfbd12a;},'PbQWp':function(_0x587e46,_0x205da0){return _0x587e46+_0x205da0;},'uIaUf':function(_0x1571d9){return _0x1571d9();},'aWDWm':function(_0x403473){return _0x403473();},'Tfwtp':function(_0xacea0e,_0x350391){return _0xacea0e+_0x350391;},'LxlEP':_0x787d('81','bjvn'),'geWtW':_0x787d('82','tgMe'),'PSnYx':_0x787d('83','N1$V'),'QNPtw':function(_0x46c17c,_0xdd7f6){return _0x46c17c!=_0xdd7f6;},'AhnmO':function(_0x1e1ede,_0x4ec49f){return _0x1e1ede===_0x4ec49f;},'HnDFg':'XIbPY','pqNEb':function(_0x29d8fe,_0x2d7144){return _0x29d8fe<_0x2d7144;},'KucZW':function(_0x1226cb,_0x162115){return _0x1226cb(_0x162115);},'mwlqa':function(_0x4d088e,_0x2aa49d){return _0x4d088e!==_0x2aa49d;},'RwAUJ':'ogrMQ','ZzgAu':_0x787d('84','iCA6'),'RTFgE':function(_0x3290c2,_0x35e954){return _0x3290c2==_0x35e954;},'TzUkh':function(_0x26be9f){return _0x26be9f();},'wJFhG':function(_0x37f973){return _0x37f973();},'CgipQ':function(_0x3d126e,_0xce9a72){return _0x3d126e+_0xce9a72;},'KDQwE':_0x787d('85','O)gw'),'PfAYj':'【提示】请先前往获取[步数金币]cookie📲','mDlZB':_0x787d('86','J)QM'),'yLTlt':_0x787d('87','$9zo'),'eqBHx':function(_0x5d7843){return _0x5d7843();},'tcvvK':function(_0x55fdec,_0x190989){return _0x55fdec+_0x190989;},'SPGPY':_0x787d('88','aXSG'),'DNBNU':_0x787d('89','$9zo'),'adttX':function(_0x58a8a9,_0x1fb78d){return _0x58a8a9-_0x1fb78d;}};console[_0x787d('8a','aKKa')]('\x0a🤖['+$[_0x787d('8b','DUPz')]+_0x787d('8c','Nezd')+_0x1b6ab7[_0x787d('8d','iQuK')](_0x5bbbc4,0x1)+_0x787d('8e','@GIL'));await userinfo2();await _0x1b6ab7[_0x787d('8f','bjvn')](taskinfo);console['log'](_0x787d('90','bjvn')+$[_0x787d('91','iQuK')]+_0x787d('92','Q#aF')+_0x1b6ab7[_0x787d('93','iVy0')](_0x5bbbc4,0x1)+_0x787d('94','SAtm'));await _0x1b6ab7[_0x787d('95','@GIL')](signtask);console[_0x787d('96','^4BJ')](_0x787d('97','zN!J')+$[_0x787d('98','uvO@')]+_0x787d('99','Lr#v')+_0x1b6ab7['Tfwtp'](_0x5bbbc4,0x1)+_0x787d('9a','8MtA'));for(let _0x43369d=0x0;_0x43369d<0x4;_0x43369d++){switch(_0x43369d){case 0x1:if(!tkList[_0x787d('9b','K@aw')]){if(_0x787d('9c','%ErY')!==_0x1b6ab7[_0x787d('9d','SRJW')]){$[_0x787d('36','aXSG')](_0x1b6ab7[_0x787d('9e','@gQu')]);}else{$['log']('【提示】请先前往获取[看视频]cookie📲');}}else{if(_0x1b6ab7[_0x787d('9f','N1$V')]===_0x1b6ab7['PSnYx']){if(_0x1b6ab7[_0x787d('a0','$9zo')](taskinfoList[_0x43369d][_0x787d('a1','c1Ms')],0x6)){if(_0x1b6ab7['AhnmO'](_0x1b6ab7[_0x787d('a2','tgMe')],'XIbPY')){for(let _0x5bbbc4=0x0;_0x1b6ab7['pqNEb'](_0x5bbbc4,0x6);_0x5bbbc4++){await _0x1b6ab7[_0x787d('a3','91QD')](WatchVideo,_0x5bbbc4);await $[_0x787d('a4','P^i&')](0x1388);}}else{return!![];}}else{if(_0x1b6ab7['mwlqa'](_0x1b6ab7[_0x787d('a5','8*JO')],_0x1b6ab7[_0x787d('a6','DUPz')])){console[_0x787d('8a','aKKa')](_0x787d('a7','egu*')+$[_0x787d('a8','c1Ms')]+_0x787d('a9','7xmp'));}else{return![];}}}else{if(ll[_0x787d('aa','%ErY')](id)>-0x1){return!![];}}}break;case 0x2:_0x1b6ab7[_0x787d('ab','Q#aF')](taskinfoList[_0x43369d]['completeCount'],0x0)?await _0x1b6ab7[_0x787d('ac','HgCE')](sharewx):console['log']('\x0a☑️['+$[_0x787d('ad','^4BJ')]+_0x787d('ae','^4BJ'));break;case 0x3:taskinfoList[_0x43369d]['completeCount']==0x0?await _0x1b6ab7[_0x787d('af','iQuK')](completetask):console['log'](_0x787d('b0','N1$V')+$[_0x787d('b1','P^i&')]+_0x787d('b2','iQuK'));break;default:_0x1b6ab7[_0x787d('b3','uvO@')](taskinfoList[_0x43369d][_0x787d('b4','jckS')],0x0)?await sharewxgroup():console[_0x787d('b5','91QD')](_0x787d('b6','PHD8')+$[_0x787d('b7','AhPC')]+']:~今天[分享微信群]任务已完成🎉');break;}};console['log']('\x0a🤖['+$[_0x787d('b8','4e7V')]+']:~\x20User'+_0x1b6ab7[_0x787d('b9','JY4%')](_0x5bbbc4,0x1)+_0x787d('ba','UxAf'));if(!tkList[_0x787d('bb','8MtA')]){if(_0x1b6ab7['KDQwE']===_0x1b6ab7[_0x787d('bc','[wk0')]){$[_0x787d('bd','uvO@')](_0x1b6ab7[_0x787d('be','[wk0')]);}else{let _0x352acb=JSON[_0x787d('bf','mO4]')](hd);let _0x3f2413=tkList[_0x787d('c0','@GIL')];let _0x20396b=_0x3f2413[_0x787d('74','DUPz')](/.*/,''+body);return{'url':host+'/'+url,'headers':_0x352acb,'body':_0x20396b};}}else{await steptocoin();if(_0x1b6ab7[_0x787d('c1','SRJW')](sumstepcoin,0x0)){if(_0x1b6ab7[_0x787d('c2','%ErY')](_0x1b6ab7[_0x787d('c3','Lr#v')],_0x1b6ab7['yLTlt'])){try{if(_0x1b6ab7['NnXLI'](ll['indexOf'](id),-0x1)){return!![];}}catch(_0x2e6948){$[_0x787d('c4','P^i&')](_0x2e6948);return![];}}else{console[_0x787d('c5','N1$V')]('\x0a🧮[本次步数金币小计]:共获取'+sumstepcoin+'金币');}}else{}}console[_0x787d('2c','SAtm')](_0x787d('c6','Kijr')+$[_0x787d('a8','c1Ms')]+']:~\x20User'+_0x1b6ab7[_0x787d('c7','bjvn')](_0x5bbbc4,0x1)+'💲/执行\x20刷气泡金币');await _0x1b6ab7[_0x787d('c8','%ErY')](collectCoin1);await $['wait'](0x1388);await collectCoin2();console[_0x787d('c9','@GIL')](_0x787d('c6','Kijr')+$[_0x787d('ca','bjvn')]+_0x787d('cb','jckS')+_0x1b6ab7['tcvvK'](_0x5bbbc4,0x1)+_0x787d('cc','aXSG'));if(nowgold>0xc350){if(_0x1b6ab7[_0x787d('cd','JY4%')](_0x787d('ce','DUPz'),_0x1b6ab7['SPGPY'])){await applyWithdraw();}else{$[_0x787d('cf','X0Gb')]('','❌\x20'+$['name']+',\x20失败!\x20原因:\x20'+e+'!','');}}else{if(_0x1b6ab7[_0x787d('d0','N1$V')]!==_0x1b6ab7[_0x787d('d1','AhPC')]){console[_0x787d('d2','tgMe')]('\x0a☑️['+$['name']+_0x787d('d3','qj2p'));}else{console[_0x787d('d4','DUPz')](_0x787d('d5','Kijr')+_0x1b6ab7[_0x787d('d6','tgMe')](0xc350,nowgold)+_0x787d('d7','Q#aF'));}}};_0xod8='jsjiami.com.v6';
//===================================
//++++++++++++++++++++++++++++++++++++
//applyWithdraw
async function applyWithdraw() {
  return new Promise((resolve) => {
    const options = initTaskOptions("user/applyWithdraw", `{"applyAmount":500,"uniqueId":"${tkList.uid}"}`, tkList.txnon, tkList.txsum, tkList.txtt);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == false) $.log(data)
            // $.log(data)
            data = JSON.parse(data);
            txcode = data.head.code
            txmsg = data.head.msg
            switch (txcode) {
              case 200:
                console.log(`✔️提现5元执行成功🎉`)
                break;
              case 112:
                console.log(`→⚠️${txmsg}`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[提现]:${resp.body}`);

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
//collectCoin
async function collectCoin1() {
  return new Promise((resolve) => {
    const options = initTaskOptions("user/collectCoin", `{"coinCount":${coinct},"collectCoinType":1,"uniqueId":"${tkList.uid}"}`, tkList.collectcoinnon, tkList.collectcoinsum, tkList.collectcointt);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == false) $.log(data)
            data = JSON.parse(data);
            collectckcode = data.head.code
            coint = Random(15, 20)
            switch (collectckcode) {
              case 200:
                // if (typeof addtaskcoin == "undefined") {
                  // docollecttime++;
                  console.log(`✔️[气泡金币]执行成功！你的奖励:${coint}金币,已入账。`)
                  // console.log(`✔️[气泡金币${docollecttime}]执行成功！你的奖励:${coint}金币,已入账。`)
                  // sumcollectcoin += coint
                  // await $.wait(5000);
                  // await collectCoin1();
                // } else {
                //   coin7 = data.data.coinInfo.coinBalance + addtaskcoin
                //   console.log(`✔️[气泡金币]执行成功！你的奖励:${coin7-coin5}金币,已入账。`)
                // }
                break;
              case 110:
                $.log('【提示】请先前往获取[气泡金币]cookie📲')
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[气泡金币]:${resp.body}`);
              case 115:
                console.log(`\n☑️[${$.name}]:~今天[气泡金币]任务已完成🎉`)
                break;
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
async function collectCoin2() {
  return new Promise((resolve) => {
    const options = initTaskOptions("user/collectCoin", `{"coinCount":${coinct},"collectCoinType":2,"uniqueId":"${tkList.uid}"}`, tkList.collectcoinnon, tkList.collectcoinsum, tkList.collectcointt);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == false) $.log(data)
            data = JSON.parse(data);
            stepcode = data.head.code
            coint = Random(13, 20)
            switch (stepcode) {
              case 200:
                if (typeof addtaskcoin == "undefined") {
                  // docollecttime2++
                  console.log(`✔️[气泡金币翻倍]执行成功！你的奖励:${coint}金币,已入账。`)
                  // console.log(`✔️[气泡金币翻倍${docollecttime2}]执行成功！你的奖励:${coint}金币,已入账。`)
                  // sumcollectcoin2 += coint
                  // await $.wait(3000);
                  // await collectCoin2();
                } else {
                  coin9 = data.data.coinInfo.coinBalance + addtaskcoin
                  console.log(`✔️[气泡金币翻倍]执行成功！你的奖励:20金币,已入账。`)
                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[气泡金币翻倍]:${resp.body}`);
                break;
              case 115:
                console.log(`\n☑️[${$.name}]:~今天[气泡金币翻倍]任务已完成🎉`)
                break;
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
//steptocoin
async function steptocoin() {
  let stepcoin = Random(13, 20)
  return new Promise((resolve) => {
    const options = TaskOptions("user/exchangeStepToCoin", `{"curStepCount":${stepnumber},"exchangeCoin":${stepcoin},"uniqueId":"${tkList.uid}"}`, tkList.stepcoinhd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == false) $.log(data)
            data = JSON.parse(data);
            steprpcode = data.head.code
            switch (steprpcode) {
              case 200:
                dosteptime++
                console.log(`✔️[步数金币${dosteptime}]执行成功！你的奖励:${stepcoin}金币,已入账。`)
                sumstepcoin += stepcoin
                await $.wait(5000);
                await steptocoin();
                break;
              case 110:
                $.log('【提示】请先前往获取[步数金币]cookie📲')
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[步数金币]:${resp.body}`);
              case 114:
                console.log(`\n☑️[${$.name}]:~今天[步数金币]任务已完成🎉`)
                break;
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
//WatchVideo
async function WatchVideo(i) {
  return new Promise((resolve) => {
    const options = TaskOptions("user/completeWatchVideoTask", `{"uniqueId":"${tkList.uid}"}`, tkList.kanvideohd);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == false) $.log(data)
            data = JSON.parse(data);
            rpcode = data.head.code
            switch (rpcode) {
              case 200:
                if (typeof addtaskcoin == "undefined") {
                  const coinvideo = data.data.coinInfo.coinBalance - nowgold
                  console.log(`✔️[看视频${i+1}]执行成功！你的奖励:60金币,已入账。`)
                } else {
                  console.log(`✔️[看视频${i+1}]执行成功！你的奖励:60金币,已入账。`);
                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[看视频]:${resp.body}`);
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
//sharewxgroup
async function sharewxgroup() {
  return new Promise((resolve) => {
    const options = initTaskOptions("user/completeShareWxGroupTask", `{"uniqueId":"${tkList.uid}"}`, tkList.sharenon, tkList.sharesum, tkList.sharett);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == false) $.log(data)
            data = JSON.parse(data);
            rpcode = data.head.code
            switch (rpcode) {
              case 200:
                if (typeof addtaskcoin == "undefined") {
                  const coinwxgroup = data.data.coinInfo.coinBalance - nowgold
                  console.log(`✔️[分享微信群]执行成功！你的奖励:${coinwxgroup}金币,已入账。`)
                } else {
                  coin3 = data.data.coinInfo.coinBalance + addtaskcoin
                  console.log(`✔️今天[分享微信群]任务完成！你的奖励:${coin3-coin2}金币,已入账。`);
                }
                break;
              case 110:
                $.log('【提示】请先前往获取[分享微信群]cookie📲')
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[分享微信群]:${resp.body}`);
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
//sharewx
async function sharewx() {
  return new Promise((resolve) => {
    const options = initTaskOptions("user/completeShareWxCircleTask", `{"uniqueId":"${tkList.uid}"}`, tkList.wxsharenon, tkList.wxsharesum, tkList.wxsharett);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == false) $.log(data)
            data = JSON.parse(data);
            switch (rpcode) {
              case 200:
                if (typeof addtaskcoin == "undefined") {
                  const coinwxgroup = data.data.coinInfo.coinBalance - nowgold
                  console.log(`✔️[分享朋友圈]执行成功！你的奖励:100金币,已入账。`)
                } else {
                  coin2 = data.data.coinInfo.coinBalance + addtaskcoin
                  console.log(`✔️[分享朋友圈]任务完成！你的奖励:100金币,已入账。`);
                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[分享朋友圈]:${resp.body}`);
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
//completetask
async function completetask() {
  return new Promise((resolve) => {
    const options = initTaskOptions("user/completeMutualAidTask", `{"uniqueId":"${tkList.uid}"}`, tkList.fintasknon, tkList.fintasksum, tkList.fintasktt);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == false) $.log(data)
            data = JSON.parse(data);
            taskcode = data.head.code
            switch (taskcode) {
              case 200:
                if (typeof addtaskcoin == "undefined") {
                  const coin = data.data.coinInfo.coinBalance - nowgold
                  console.log(`✔️[发布互助1单]执行成功！你的奖励:${coin}金币,已入账。`)
                } else {
                  coin1 = data.data.coinInfo.coinBalance + addtaskcoin
                  console.log(`✔️[发布互助1单]任务完成！你的奖励:110金币,已入账。`);
                }
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[发布互助1单]:${resp.body}`);
              case 119:
                console.log(`\n☑️[${$.name}]:~今天[发布互助1单]任务已完成🎉`);
                break;
              case 110:
                $.log('【提示】请先前往获取[发布互助1单]cookie📲')
                break;
              case 120:
                console.log(`❗️今天尚未发布1单互助任务...尝试发布5000金币任务。`);
                await addtask();
                break;
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
//addTask
async function addtask() {
  return new Promise((resolve) => {
    const options = initTaskOptions("benefit/addTask", tkList.gotaskbody, tkList.gotasknon, tkList.gotasksum, tkList.gotasktt);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == false) $.log(data)
            data = JSON.parse(data);
            addtaskcode = data.head.code
            switch (addtaskcode) {
              case 110:
                $.log('【提示】请先发布任务获取cookie📲')
                break;
              default:
                taskid = data.data.taskId
                addtaskcoin = data.data.coinBalance
                console.log(`发布ID${taskid}互助任务,花费5000金币,发布任务结束后返回金币。`);
                await $.wait(1000)
                await completetask();
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
//signInWatchVideo
async function signtask() {
  return new Promise((resolve) => {
    const options = initTaskOptions("user/signInWatchVideo", `{"coinCount":100,"uniqueId":"${tkList.uid}"}`, tkList.signnon, tkList.signsum, tkList.signtt);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == false) $.log(data)
            data = JSON.parse(data);
            signtaskcode = data.head.code
            switch (signtaskcode) {
              case 200:
                signcoin = data.data.coinInfo.coinBalance - nowgold
                console.log(`✔️[签到]任务完成!你的奖励:${signcoin}金币,已入账。`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[签到]:${resp.body}`);
              case 107:
                console.log(`\n☑️[${$.name}]:~今天[签到]任务已完成🎉`);
                break;
              case 110:
                $.log('【提示】请先前往获取[签到]cookie📲')
                break;
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
//TaskConfigInfo
async function taskinfo() {
  return new Promise((resolve) => {
    const options = initTaskOptions("reward/getRewardTaskConfigInfo_V5", `{"uniqueId":"${tkList.uid}"}`, tkList.tkinfonon, tkList.tkinfosum);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == false) $.log(data)
            data = JSON.parse(data);
            taskinfoList = data.data.rewardTaskInfo
            taskinfoList.forEach(tk => console.log(`[${tk.taskTitle}]:每日执行${tk.taskCompleteNum}次,领取${tk.taskRewardInitAmount * tk.taskCompleteNum}金币`))
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
//getUserInfo
async function userinfo2() {
  return new Promise((resolve) => {
    let options = {
      url: `https://hlxcx.renmaibangvip.cn/user/getUserInfo`,
      body: `${tkList.body}`,
      headers: tkList.headers,
    }
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`⛔️API查询请求失败,请检查网络设置‼️‼️ \n ${JSON.stringify(err)}`);
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            userinfoList = data.data.userInfo
            nowgold = userinfoList.coinBalance
            goldbalance = userinfoList.curDayCoinBalance
            userinfocode = data.head.code
            console.log(`今天用户[${userinfoList.nickName}]获取${userinfoList.curDayCoinBalance}金币(包含发布任务返回金币,实际收益可能为${userinfoList.curDayCoinBalance-5000}金币),目前账户金币为${userinfoList.coinBalance},约${Math.round(userinfoList.coinBalance/1000)/10}元,截止到今日共获取${Math.round(userinfoList.historyCoin/1000)/10}元`)

          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}

function userinfo(userbody, userkey) {
  return new Promise((resolve) => {
    let options = {
      url: `https://hlxcx.renmaibangvip.cn/user/getUserInfo`,
      body: userbody,
      headers: JSON.parse(userkey),
    }
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`⛔️API查询请求失败,请检查网络设置‼️‼️ \n ${JSON.stringify(err)}`);
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            userId = data.data.userInfo.uniqueId
            gold = data.data.userInfo.coinBalance
          }
        }
      } catch (e) {
        $.log(`=================\nurl: ${options.url}\ndata: ${resp && resp.body}`);
        $.logErr(e, resp);
      } finally {
        resolve([userId, gold])
      }
    })
  })
}

//++++++++++++++++++++++++++++++++++++
async function showmsg1() {
  if (notifyInterval != 1) {
    console.log(cc + '\n' + tz);
  }

  if (notifyInterval == 1) {
    $.msg(cc, '\n', tz);
  }
}

function calarrno(l, n) {
  let status = 1;
  let no = l;
  for (let i = 0, len = no; i < len; i++) {
    let ac = helpbang[i] || {};
    if (ac.uid) {
      if (ac.uid == n) {
        no = i;
        status = 0;
        break;
      }
    } else if (no == len) {
      no = i;
    }
  }
  let valarr = [no, status]
  return no
}

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

function unique(arr) {
  return Array.from(new Set(arr))
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
          if (logs == false) $.log(data)
          switch (keystate) {
            case "again":
              helpbangkey = Base64.encode(data);
              $.log(helpbangkey);
              if (helpbangkey) $.setdata(helpbangkey, 'helpbangkey');
              $.log(`\n🤖[${$.name}]:下载完成!~脚本使用权限秘钥已更新`);
              break;
            default:
              helpbangkey = Base64.encode(data);
              console.log(helpbangkey);
              if (helpbangkey) $.setdata(helpbangkey, 'helpbangkey');
              $.log(`\n🤖[${$.name}]:请重新执行脚本进行秘钥验证`);
              $.msg($.name, '', `🤖请重新执行脚本进行秘钥验证`);
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
      path
        .slice(0, -1)
        .reduce((a, c, i) => (Object(a[c]) === a[c] ? a[c] : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {})), obj)[
          path[path.length - 1]
        ] = value
      return obj
    }

    getdata(key) {
      let val = this.getval(key)
      // 如果以 @
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
        $task.fetch(opts).then(
          (resp) => {
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
          },
          (err) => callback(err)
        )
      } else if (this.isNode()) {
        this.initGotEnv(opts)
        this.got(opts)
          .on('redirect', (resp, nextOpts) => {
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
            // this.ckjar.setCookieSync(resp.headers['set-cookie'].map(Cookie.parse).toString())
          })
          .then(
            (resp) => {
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
            },
            (err) => {
              const {
                message: error,
                response: resp
              } = err
              callback(error, resp, resp && resp.body)
            }
          )
      }
    }

    post(opts, callback = () => {}) {
      const method = opts.method ? opts.method.toLocaleLowerCase() : 'post'
      // 如果指定了请求体, 但没指定`Content-Type`, 则自动生成
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
        $task.fetch(opts).then(
          (resp) => {
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
          },
          (err) => callback(err)
        )
      } else if (this.isNode()) {
        this.initGotEnv(opts)
        const {
          url,
          ..._opts
        } = opts
        this.got[method](url, _opts).then(
          (resp) => {
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
          },
          (err) => {
            const {
              message: error,
              response: resp
            } = err
            callback(error, resp, resp && resp.body)
          }
        )
      }
    }
    /**
     *
     * 示例:$.time('yyyy-MM-dd qq HH:mm:ss.S')
     *    :$.time('yyyyMMddHHmmssS')
     *    y:年 M:月 d:日 q:季 H:时 m:分 s:秒 S:毫秒
     *    其中y可选0-4位占位符、S可选0-1位占位符，其余可选0-2位占位符
     * @param {string} fmt 格式化参数
     * @param {number} 可选: 根据指定时间戳返回格式化日期
     *
     */
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

    /**
     * 系统通知
     *
     * > 通知参数: 同时支持 QuanX 和 Loon 两种格式, EnvJs根据运行环境自动转换, Surge 环境不支持多媒体通知
     *
     * 示例:
     * $.msg(title, subt, desc, 'twitter://')
     * $.msg(title, subt, desc, { 'open-url': 'twitter://', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
     * $.msg(title, subt, desc, { 'open-url': 'https://bing.com', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
     *
     * @param {*} title 标题
     * @param {*} subt 副标题
     * @param {*} desc 通知详情
     * @param {*} opts 通知参数
     *
     */
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
