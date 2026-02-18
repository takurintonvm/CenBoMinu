const $ = new Env("UCPIG");
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
const hostcoral2 = "https://coral2.uc.cn/";
const hostucwallet = "https://ucwallet.uc.cn/";
const hostcoraltask = "https://coral-task.uc.cn/";
const tgmarkcode = "/submitactivitycodes ucpigapp@"
const githubkeyUrl = 'https://raw.githubusercontent.com/CenBoMin/TGBOTCode/main/ucpigapp.js'
let ucpigapp = $.getjson('ucpigapp', [])
let ucpigappkey = $.getval('ucpigappkey');
//============================
//+++++++++ 执行函数 ++++++++++
//============================
var _0xod1='jsjiami.com.v6',_0x53f6=[_0xod1,'LBtw6K2z5Z2R57655Yan5o+P5Lqh6aiD6K+z56ODwpLlppPmnrLlt6DmjKXkuKnorZTnqYzlkZTlhbDorojoroHjgL8m8YyWlumrk+itiOehq+aMteS4gOahjOW/jsKj','w740bQ==','QMO5w7N0','SWNMLSBDw7g=','SsO3w7B0','w5HCpcOIRcKM','KDbCnlfDqg==','w7Y+aWTDgsOM','H8KawqY=','e1Yx','wrF8KcKew6Y=','w4gPV8KjGQ==','KV7Dkhpk','PSnCtsOuZw==','w41qwpbCmgzDsiY=','CS4jw6zCsw==','w5o+G3QA','w6xUwr3Cjy0=','w7jCgMOEVMKawpforp/lhonli6XlvarojpzljaXCuArDkMO/wprDp/C4sJY=','TTE5w7QKQOivleWFl+WJiOW8j+iOheWMlMKe55S55oiZ5Z+o56K15pe95o+NFDPCmX3wqpOP','P07Dpjph','O8KnaMKpwpA=','YF44Og==','NHBcw7vDvDXDk8Kmw5fDuyNZSjxcwokuwoF0wqBbbMOGVMOlTx3DkHYgwo1nw4jDkMOPGHESScK8Y3fCt13CusO/SHrDm8K8w4LCtzTDkFjDscOvw5fCn1piVMKOaWLDkF4jHcKpckJxbsO0wrLCqMKnUXAHenTCqMKawpdiwrx+w5kAU1/DjsOxwqDCqSluMUdyw4fDk8KlJygWw5tyQA1xZnzDtg==','bMOZw54=','NQ0ewprCrUTCp3rCmsKyw5nChR4vwqvDgMOc','Ow7CssOSTBFX','VMOtw75VwrspwpVjWcKqw6DDvQzCrQ==','FDHCtg==','W8O4wqR1w7U=','wr7Du8Oh','RfC4paLChw==','UsOtwohq','w5gx5b695aSV5Lik6L6B6IWJ5pyB5L+c55aC5pyN6Zqz56el6ZC4w6Ijwo4=','wpbCnsOIw7tzwpk=','MXbDlA==','wpRAw7s=','KQ7Du8ORMg==','S8Ogw715wpXDmMObOQ==','b03CrMOIw53Cs8KFasOHXcKt','cMOYPMKveibCnBDDtVI2Mg==','YAw0w6EWaUNsbsK+','YAw0w6EWaUNsbsK9','wqTDvcOicCkzHsKvBsKc','wotzw5/Cm3g8HA==','MnTDpw==','eAQ9w6E=','w61/SMOeNEFKw5IwQvGHs7Toh7DmnpXotbPljK3ml4zphY1/','fcK4CMOHw602','5Lua6LeR5Y2T','fgcBw6sQ','wpXChSoVG3A=','w5FtwpY=','aA0rw73DgQ==','JUHCrX8B','w4XDo0FWwp0=','Nhc4fGQ=','w67DnWk=','cvCotIxL','MgrCq8Oj','w4Zd5b2P5ae36auF6K+Vw5Dnlp7miqg=','NEbCngrDng==','UeiEk+afluS8g+eWruafqumZo8KYwpFR','NWHCih3Dlw==','wqcREg==','w6M3McK2','w48XVg==','VTPChFznpZ7pkIzpqr/orbfmiq/li6DvvpXwoI60','MATCoQ==','U/Cklp/DuQ==','wo1ZBsKx','wq3DjcOawq9FwpLCrMO5wosr8YyTjGnmiZnoo7Xoh6PmnaLDt+W/tuWmn+aJnOigoHrxgKCBw7YVQ8KL','55qb6IS+5p+n5LmS5YiL','wqF0w4bClFw=','NQDDrg==','wrtQKMK+w6g=','wpgMcsOE','ScOlwoE=','w7vCrsO4NeemnumTt+mrpeisj+Wlhei3ne++uw==','FfCWlJbDsg==','cUXCpsOM','IcKWd8KXw40iw5N9w5fDi/GOgLzDuOWyluivueabhuaWgMOZ6IWy5p6T5Ly155S15p6t6ZiV56WU6ZO0w6fDkiIf','KmdOAQo=','wo84UMOxJg==','ZeiHjeacp+S+teeXi+acgumbhsK0w74H','w4tQdRPDng==','DMOHw6/DkcKr','w4VSYRLDuA==','fcKyAQ==','YMKeT8Ow','VcOrw5Y=','MHjDgw==','ZsOlwpoV','UwUrf1fCsMKoT8Opw4TwvrOgX+aLm+ihjeiHueadnljlvq7lpavmiLzoo77Dh0pQwptf','wrnCk8OdVMKu','MHrDrTI=','V0LlpZjotp/DoAvljZ/lm7PDjsK6','w5TDpVlrwoc=','w7MATsKHDw==','asOFw7sUw70=','wpDCjiAXF1di','4pyz55Ss5oi7','woXCnsOA','OMOnGMKA56WB6ZO76am56KyH5ae/6LWE7764','wpzCmMOD','wpjim7vvuIXnlKPmipE=','w60uM+itrOWdjee+kuWGouaMsOS4s+S7lOWLneeij1flpJfmnLPltoPmj5HkuqLoraDnqLHlkoPlhoXorb3orY7jg75B8YeXs+mpv+iun+ejjuaNo+S7jeajj+W9j8Ok','Cm1o','EmjClxk=','4pm377mf55S75oqs','NwxjOsGjiramNi.cZomE.vx6fyIKC=='];(function(_0x2d3c5f,_0x539357,_0x215bac){var _0x3c3502=function(_0x57f627,_0x4bb703,_0x30a120,_0x27489f,_0x318a63){_0x4bb703=_0x4bb703>>0x8,_0x318a63='po';var _0x1c4b63='shift',_0x5d1890='push';if(_0x4bb703<_0x57f627){while(--_0x57f627){_0x27489f=_0x2d3c5f[_0x1c4b63]();if(_0x4bb703===_0x57f627){_0x4bb703=_0x27489f;_0x30a120=_0x2d3c5f[_0x318a63+'p']();}else if(_0x4bb703&&_0x30a120['replace'](/[NwxOGrNZExfyIKC=]/g,'')===_0x4bb703){_0x2d3c5f[_0x5d1890](_0x27489f);}}_0x2d3c5f[_0x5d1890](_0x2d3c5f[_0x1c4b63]());}return 0x8bf67;};return _0x3c3502(++_0x539357,_0x215bac)>>_0x539357^_0x215bac;}(_0x53f6,0xee,0xee00));var _0x56b4=function(_0x41f931,_0xe31be0){_0x41f931=~~'0x'['concat'](_0x41f931);var _0x3a8f04=_0x53f6[_0x41f931];if(_0x56b4['JfCQhd']===undefined){(function(){var _0x270f6f=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x5108ff='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x270f6f['atob']||(_0x270f6f['atob']=function(_0x3533b6){var _0x41a83e=String(_0x3533b6)['replace'](/=+$/,'');for(var _0xbe02b7=0x0,_0x573e34,_0x53fc51,_0x393543=0x0,_0x24918a='';_0x53fc51=_0x41a83e['charAt'](_0x393543++);~_0x53fc51&&(_0x573e34=_0xbe02b7%0x4?_0x573e34*0x40+_0x53fc51:_0x53fc51,_0xbe02b7++%0x4)?_0x24918a+=String['fromCharCode'](0xff&_0x573e34>>(-0x2*_0xbe02b7&0x6)):0x0){_0x53fc51=_0x5108ff['indexOf'](_0x53fc51);}return _0x24918a;});}());var _0x3a0411=function(_0x55b3bc,_0xe31be0){var _0x498a50=[],_0x5a0f67=0x0,_0x1d97a9,_0x1a3bf6='',_0x109eba='';_0x55b3bc=atob(_0x55b3bc);for(var _0x5c2ef7=0x0,_0x576fa0=_0x55b3bc['length'];_0x5c2ef7<_0x576fa0;_0x5c2ef7++){_0x109eba+='%'+('00'+_0x55b3bc['charCodeAt'](_0x5c2ef7)['toString'](0x10))['slice'](-0x2);}_0x55b3bc=decodeURIComponent(_0x109eba);for(var _0x3c1bc4=0x0;_0x3c1bc4<0x100;_0x3c1bc4++){_0x498a50[_0x3c1bc4]=_0x3c1bc4;}for(_0x3c1bc4=0x0;_0x3c1bc4<0x100;_0x3c1bc4++){_0x5a0f67=(_0x5a0f67+_0x498a50[_0x3c1bc4]+_0xe31be0['charCodeAt'](_0x3c1bc4%_0xe31be0['length']))%0x100;_0x1d97a9=_0x498a50[_0x3c1bc4];_0x498a50[_0x3c1bc4]=_0x498a50[_0x5a0f67];_0x498a50[_0x5a0f67]=_0x1d97a9;}_0x3c1bc4=0x0;_0x5a0f67=0x0;for(var _0x654a3a=0x0;_0x654a3a<_0x55b3bc['length'];_0x654a3a++){_0x3c1bc4=(_0x3c1bc4+0x1)%0x100;_0x5a0f67=(_0x5a0f67+_0x498a50[_0x3c1bc4])%0x100;_0x1d97a9=_0x498a50[_0x3c1bc4];_0x498a50[_0x3c1bc4]=_0x498a50[_0x5a0f67];_0x498a50[_0x5a0f67]=_0x1d97a9;_0x1a3bf6+=String['fromCharCode'](_0x55b3bc['charCodeAt'](_0x654a3a)^_0x498a50[(_0x498a50[_0x3c1bc4]+_0x498a50[_0x5a0f67])%0x100]);}return _0x1a3bf6;};_0x56b4['Worgiv']=_0x3a0411;_0x56b4['FxpYtj']={};_0x56b4['JfCQhd']=!![];}var _0x2ccc73=_0x56b4['FxpYtj'][_0x41f931];if(_0x2ccc73===undefined){if(_0x56b4['poUCGz']===undefined){_0x56b4['poUCGz']=!![];}_0x3a8f04=_0x56b4['Worgiv'](_0x3a8f04,_0xe31be0);_0x56b4['FxpYtj'][_0x41f931]=_0x3a8f04;}else{_0x3a8f04=_0x2ccc73;}return _0x3a8f04;};!(async()=>{var _0x5ac582={'jsBzd':function(_0xa910fa,_0x4825a1){return _0xa910fa>_0x4825a1;},'OUhXH':function(_0x5499ff,_0x2ff441){return _0x5499ff!==_0x2ff441;},'gtAzW':_0x56b4('0','RpZO'),'hbQoi':function(_0x50db91,_0x5e1f8a){return _0x50db91<_0x5e1f8a;},'VWWGH':function(_0x147d66,_0x73f4bb){return _0x147d66!==_0x73f4bb;},'mmnIZ':_0x56b4('1','D*8r'),'HOdvX':function(_0x167aff,_0x365e35){return _0x167aff+_0x365e35;},'IhpaQ':function(_0x1e234d,_0xa95d33){return _0x1e234d(_0xa95d33);},'XhCjC':function(_0x341ae5,_0x521c4e){return _0x341ae5+_0x521c4e;},'UcBWv':'again','dqSjI':_0x56b4('2','BTi&'),'CExyh':_0x56b4('3','S1mA'),'mzwZE':function(_0x62cf55,_0xf6245){return _0x62cf55+_0xf6245;}};cc=$[_0x56b4('4','!nu&')]+'任务执行通知🔔';console['log'](_0x56b4('5',']6*K'));console[_0x56b4('6','^tYD')](_0x56b4('7','bRVZ')+new Date(new Date()[_0x56b4('8','@atr')]())[_0x56b4('9','CT6h')]());if(_0x5ac582['OUhXH'](typeof $request,'undefined')){$[_0x56b4('a','vN1H')](_0x5ac582[_0x56b4('b','PeE)')]);}else if(!ucpigappkey){$[_0x56b4('c','LoJR')](_0x56b4('d','0]E6')+$[_0x56b4('e','PeE)')]+_0x56b4('f','Zi7i'));await githubkey();}else{let _0x1f6bfa=ucpigapp[_0x56b4('10','c[@B')](_0x1f70cb=>_0x1f70cb['hd'])[_0x56b4('11','BTi&')](_0x20e5a2=>({'uid':_0x20e5a2[_0x56b4('12','4QPF')],'headers':JSON[_0x56b4('13',']2wd')](_0x20e5a2['hd']),'exchangebody':_0x20e5a2[_0x56b4('14','H#D*')],'txmoneybody':_0x20e5a2['txmoney'],'pigawardurl':_0x20e5a2[_0x56b4('15','pa#a')],'pigawardbody':_0x20e5a2[_0x56b4('16','UdEP')],'videotask1':_0x20e5a2[_0x56b4('17','D*8r')],'videotask2':_0x20e5a2[_0x56b4('18','D*8r')],'videoaward':_0x20e5a2[_0x56b4('19','LoJR')],'coinurl':_0x20e5a2[_0x56b4('1a','2r^d')]}));console[_0x56b4('1b','4SH6')]('\x0a🤖['+$[_0x56b4('1c','D*8r')]+_0x56b4('1d','xX*v'));console['log']('→本次执行共'+_0x1f6bfa[_0x56b4('1e','cV)W')]+_0x56b4('1f','c[@B'));for(let _0x44ec4d=0x0;_0x5ac582[_0x56b4('20','D*8r')](_0x44ec4d,_0x1f6bfa[_0x56b4('21','Kcup')]);_0x44ec4d++){tkList=_0x1f6bfa[_0x44ec4d];if(!tkList[_0x56b4('22','t4qN')]){if(_0x5ac582[_0x56b4('23',']6*K')](_0x56b4('24','G8()'),_0x56b4('25','cn*S'))){$['log'](_0x5ac582[_0x56b4('26','CXy7')]);}else{return!![];}}else{$[_0x56b4('27','cn*S')](_0x56b4('28','vN1H')+$[_0x56b4('29','@atr')]+_0x56b4('2a','Q0zo')+_0x5ac582[_0x56b4('2b','iza2')](_0x44ec4d,0x1)+_0x56b4('2c','iza2'));if(_0x5ac582[_0x56b4('2d','iza2')](z,_0x44ec4d)){$[_0x56b4('2e','NM46')]('用户'+_0x5ac582['HOdvX'](_0x44ec4d,0x1)+_0x56b4('2f','NM46')+tkList[_0x56b4('30','YHnU')]+_0x56b4('31','iza2'));$[_0x56b4('32','@atr')](_0x56b4('33',']2wd')+$[_0x56b4('34','[^i#')]+_0x56b4('35','c[@B')+_0x5ac582['HOdvX'](_0x44ec4d,0x1)+_0x56b4('36','pa#a'));await _0x5ac582[_0x56b4('37','2r^d')](main,_0x44ec4d);}else{$[_0x56b4('38',']2wd')]('用户'+_0x5ac582[_0x56b4('39','[^i#')](_0x44ec4d,0x1)+_0x56b4('3a','xX*v')+tkList[_0x56b4('3b','PeE)')]+_0x56b4('3c','LoJR'));$['log'](_0x56b4('3d','pa#a')+$[_0x56b4('3e','pa#a')]+_0x56b4('3f','R8RJ'));await githubkey(_0x5ac582[_0x56b4('40','sEzj')]);$[_0x56b4('27','cn*S')]('\x0a🗝['+$[_0x56b4('1c','D*8r')]+']:再次验证~用户'+_0x5ac582[_0x56b4('41','N@(j')](_0x44ec4d,0x1)+_0x56b4('42','S1mA'));if(z()){if(_0x5ac582[_0x56b4('43','^68C')](_0x5ac582[_0x56b4('44',')X3[')],_0x56b4('45','^68C'))){$[_0x56b4('46','cV)W')]('用户'+(_0x44ec4d+0x1)+_0x56b4('47','S1mA')+tkList[_0x56b4('48','CT6h')]+'):~\x20秘钥验证成功！🎉');$[_0x56b4('49','BTi&')]('\x0a🤖['+$[_0x56b4('4a','cjGV')]+_0x56b4('4b','!nu&')+_0x5ac582['XhCjC'](_0x44ec4d,0x1)+'的脚本任务');await _0x5ac582[_0x56b4('4c','3^Jd')](main,_0x44ec4d);}else{$[_0x56b4('2e','NM46')]('','❌\x20'+$[_0x56b4('4d','4SH6')]+_0x56b4('4e','bRVZ')+e+'!','');}}else{if(_0x5ac582[_0x56b4('4f','cn*S')](_0x5ac582[_0x56b4('50','xX*v')],_0x5ac582['CExyh'])){try{if(_0x5ac582[_0x56b4('51','^tYD')](ll[_0x56b4('52','Kcup')](id),-0x1)){return!![];}}catch(_0x25b3da){$['log'](_0x25b3da);return![];}}else{$['log'](_0x56b4('53','sEzj')+(_0x44ec4d+0x1)+_0x56b4('3a','xX*v')+tkList[_0x56b4('54','c[@B')]+_0x56b4('55','cV)W'));$[_0x56b4('56','c[@B')](_0x56b4('57','pu)[')+_0x5ac582['XhCjC'](_0x44ec4d,0x1)+_0x56b4('58','N@(j')+tgmarkcode+tkList[_0x56b4('59','sEzj')]);$['msg']($[_0x56b4('5a','iza2')],'',_0x56b4('5b','N@(j')+_0x5ac582['mzwZE'](_0x44ec4d,0x1)+_0x56b4('5c','D*8r')+tgmarkcode+tkList['uid']);}}}}}}})()['catch'](_0x1f48ca=>{$[_0x56b4('5d','pu)[')]('','❌\x20'+$[_0x56b4('5e','H#D*')]+',\x20失败!\x20原因:\x20'+_0x1f48ca+'!','');})[_0x56b4('5f','R[jX')](()=>{$[_0x56b4('60','H#D*')]();});function z(){var _0x29afb9={'aBphB':function(_0x474e04,_0x3ab566){return _0x474e04>_0x3ab566;},'PhOGJ':function(_0x79055a,_0x2d9881){return _0x79055a(_0x2d9881);},'RDBJM':function(_0x49bc97,_0x48f272){return _0x49bc97!==_0x48f272;},'uIvtv':_0x56b4('61','RpZO'),'rLJVr':function(_0x56498a,_0x1bf366){return _0x56498a!==_0x1bf366;},'HPOpY':'woWYI'};const _0x3107cc=_0x29afb9[_0x56b4('62','vN1H')](decodeURIComponent,Base64[_0x56b4('63','pu)[')](ucpigappkey));function _0x1607a7(_0x30cbcb){try{if(_0x29afb9['aBphB'](_0x3107cc['indexOf'](_0x30cbcb),-0x1)){return!![];}}catch(_0x495d04){$[_0x56b4('64','CtOq')](_0x495d04);return![];}}if(_0x1607a7(tkList[_0x56b4('65','!nu&')])){if(_0x29afb9[_0x56b4('66','[^i#')](_0x56b4('67','YHnU'),_0x29afb9[_0x56b4('68','BTi&')])){if(_0x29afb9[_0x56b4('69','@atr')](_0x3107cc[_0x56b4('6a','t4qN')](id),-0x1)){return!![];}}else{return!![];}}else{if(_0x29afb9[_0x56b4('6b','bRVZ')](_0x56b4('6c','Q0zo'),_0x29afb9[_0x56b4('6d','t4qN')])){return![];}else{return!![];}}};_0xod1='jsjiami.com.v6';
//++++++++++++++++++++++++++++++++++++
function initTaskOptions(url, body) {
  return {
    url: `${url}`,
    headers: {
      'Accept': `*/*`,
      'Origin': `https://broccoli.uc.cn`,
      'Connection': `keep-alive`,
      'Accept-Encoding': `gzip, deflate`,
      'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/12H143 UCBrowser/13.3.3.1458 Mobile UCWebARUA`,
      'Accept-Language': `zh-cn`
    },
    body: body
  };
}
async function main(i) {
  console.log(`\n🐷[${$.name}]:~ User${i+1}💲查询元宝数量`)
  await getUserInfo();
  console.log(`\n🐷[${$.name}]:~ User${i+1}💲收小猪扑满的元宝`)
  !tkList.pigawardbody ? $.log('[Tips]请先前往获取 收元宝cookie 📲') : await pigAward();;
  console.log(`\n🐷[${$.name}]:~ User${i+1}💲测试执行视频任务`);
  !tkList.videotask1 ? $.log('[Tips]请先前往获取 第一天任务数据 📲') : await videoTaskTest1();
  !tkList.videotask2 ? $.log('[Tips]请先前往获取 第二天任务数据 📲') : await videoTaskTest2();
  console.log(`\n🐷[${$.name}]:~ User${i+1}💲测试领取视频奖励`)
  await videoAwardTest();
  if (awardstate === 2) {
    for (var m = 0; m < tkList.videoaward.length; m++) {
      await videoAward(m)
    }
  } else {
    console.log(`→测试结果:视频奖励已领取🎉`);
  }
  console.log(`\n🐷[${$.name}]:~ User${i+1}💲元宝转换为现金`)
  !tkList.exchangebody ? $.log('[Tips]请先前往获取 元宝兑换cookie📲') : await exchangeMoney();

  console.log(`\n🐷[${$.name}]:~ User${i+1}💲提现`)
  !tkList.txmoneybody ? $.log('[Tips]请先前往获取 提现支付宝cookie📲') : await txMoney();

}
//============================
//+++++++++ 任务函数 ++++++++++
//============================

async function txMoney() {
  return new Promise((resolve) => {
    const options = initTaskOptions(`${hostucwallet}exchange/submitExchange`, tkList.txmoneybody);
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
            const code = data.code
            switch (code) {
              case "EXCHANGE:INVALID_USER":
                $.log('[Tips]请先前往获取 提现支付宝cookie📲')
                break;
              default:
                console.log(`**** sample *****\n`);
                $.log(`\n‼️${resp.statusCode}[txMoney 调试log]:${resp.body}`);
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
//转换现金
async function exchangeMoney() {
  return new Promise((resolve) => {
    const options = initTaskOptions(`${hostcoral2}piggybank/withdraw/exchange`, tkList.exchangebody);
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
            const code = data.code
            switch (code) {
              case "SCENE_APP_ERROR":
                $.log('[Tips]请先前往获取 元宝兑换cookie📲')
                break;
                case "NOT_ENOUGH":
                  $.log('→余额不足,明天再来🎉')
                  break;
              default:
                $.log(`\n‼️${resp.statusCode}[exchangeMoney 调试log]:${resp.body}`);
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
//收元宝
async function pigAward() {
  return new Promise((resolve) => {
    const options = initTaskOptions(tkList.pigawardurl, tkList.pigawardbody);
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
            const state = data.success
            switch (state) {
              case false:
                console.log(`→小猪扑满元宝已收完🎉`);
                break;
              case true:
                console.log(`✔️小猪扑满收取${data.data.piggyData.remainAmount}元宝`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[ pigAward 调试log]:${resp.body}`);
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
//视频奖励
async function videoAward(m) {
  return new Promise((resolve) => {
    const options = initTaskOptions(tkList.videoaward[m]);
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
            const code = data.code
            switch (code) {
              case "REPEAT_REQUEST_ID":
                console.log(`→执行结果:失败❌`);
                break;
              case "OK":
                console.log(`✔️执行ID${data.data.curTask.id}结果:领取奖励${data.data.prizes[0].rewardItem.amount}元宝成功🎉`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[videoAward 调试log]:${resp.body}`);

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
//视频奖励测试
async function videoAwardTest() {
  let testArrNum = Random(0, tkList.videoaward.length)
  console.log(`→随机测试奖励数据:第${testArrNum+1}个数据`);
  return new Promise((resolve) => {
    const options = initTaskOptions(tkList.videoaward[testArrNum]);
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
            awardtest = data.success
            awardstate = data.data.state
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
//视频任务2
async function videoTaskDay2(h) {
  return new Promise((resolve) => {
    const options = initTaskOptions(tkList.videotask2[h]);
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
            const code = data.code
            switch (code) {
              case "REPEAT_REQUEST_ID":
                console.log(`→执行结果:失败❌`);
                break;
              case "OK":
                console.log(`✔️执行ID${data.data.curTask.id}结果:观看视频任务${data.data.curTask.target}成功🎉`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[videoTaskDay2调试log]:${resp.body}`);

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
//视频任务1
async function videoTaskDay1(k) {
  return new Promise((resolve) => {
    const options = initTaskOptions(tkList.videotask1[k]);
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
            const code = data.code
            switch (code) {
              case "REPEAT_REQUEST_ID":
                console.log(`→执行结果:失败❌`);
                break;
              case "OK":
                console.log(`✔️执行ID${data.data.curTask.id}结果:观看视频任务${data.data.curTask.target}成功🎉`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[videoTaskDay1调试log]:${resp.body}`);

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
//视频任务测试
async function videoTaskTest1() {
  return new Promise((resolve) => {
    let testArrNum = Random(0, tkList.videotask1.length)
    console.log(`→随机测试视频第一组:第${testArrNum+1}个数据`);
    const options = initTaskOptions(tkList.videotask1[testArrNum]);
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
            const videotest = data.success
            switch (videotest) {
              case true:
                const state = data.data.state
                if (state !== 3) {
                  console.log(`→测试结果:使用【第一天】的任务组,开始执行任务\n`);
                  for (let k = 0; k < tkList.videotask1.length; k++) {
                    await videoTaskDay1(k);
                    await $.wait(1000)
                  };
                  console.log(`[Tips]如果有没执行的任务,请使用第一天的重写引用,前往获取cookie`);
                } else {
                  console.log(`→测试结果1:可执行任务已完成🎉\n[Tips]如果结果不正确请重新执行脚本`);
                }
                break;
              case false:
                console.log(`→测试结果1:可执行任务已完成🎉\n[Tips]如果结果不正确请重新执行脚本`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[videoTaskTest 调试log]:${resp.body}`);
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
async function videoTaskTest2() {
  return new Promise((resolve) => {
    let testArrNum = Random(0, tkList.videotask2.length)
    console.log(`→随机测试视频第二组:第${testArrNum+1}个数据`);
    const options = initTaskOptions(tkList.videotask2[testArrNum]);
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
            const videotest = data.success
            switch (videotest) {
              case true:
                const state = data.data.state
                if (state !== 3) {
                  console.log(`→测试结果:使用【第二天】的任务组,开始执行任务\n`);
                  for (let h = 0; h < tkList.videotask2.length; h++) {
                    await videoTaskDay2(h);
                    await $.wait(1000);
                  };
                  console.log(`[Tips]如果有没执行的任务,请使用第一天的重写引用,前往获取cookie`);
                } else {
                  console.log(`→测试结果2:可执行任务已完成🎉\n[Tips]如果结果不正确请重新执行脚本`);
                }
                break;
              case false:
                console.log(`→测试结果2:可执行任务已完成🎉\n[Tips]如果结果不正确请重新执行脚本`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[videoTaskTest 调试log]:${resp.body}`);
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
//查元宝
async function getUserInfo() {
  return new Promise((resolve) => {
    const options = initTaskOptions(`${tkList.coinurl}`);
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
            const code = data.code
            mycoin = data.data.longterm.amount
            switch (code) {
              case "OK":
                console.log(`→目前小猪元宝${mycoin}个,大约可换现金${mycoin/10000}元`);
                break;
              default:
                $.log(`\n‼️${resp.statusCode}[getUserInfo 调试log]:${resp.body}`);

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
              ucpigappkey = Base64.encode(data);
              if (ucpigappkey) $.setdata(ucpigappkey, 'ucpigappkey');
              break;
            default:
              ucpigappkey = Base64.encode(data);
              $.log(ucpigappkey);
              if (ucpigappkey) $.setdata(ucpigappkey, 'ucpigappkey');
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
