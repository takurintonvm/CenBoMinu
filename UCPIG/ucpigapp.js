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
var _0xodr='jsjiami.com.v6',_0x2fa5=[_0xodr,'w4zwrYWONg==','wqHDiB8f','F0wO','4oWT5p2z5q6R5omj6KGg5YWi','Ki/Dv8Otwo/DrA==','YFROYlfCiA==','wrQ2w5Q=','BsKreMKIwqI=','w5TCm8OSw43DtA==','w7TCuFNQw4g=','wqMuwos=','ZfGGp4/CpA==','w51Pw7HDqQ==','VMOqw6LDqw4=','U2otwp0=','w5zCmG/CqeempumQqumpo+itheaLqOWIjO+9sfC3nLE=','w59Bw7s=','OfC0hpbDsw==','wqbDh3NxHcOZV8K9wr0i8Y2gp8KX5oua6KGi6IWB5pyDSOW+t+WlpuaJgOighWPwu5Gtw57CmRXCjw==','wozCukJGTw==','55qb6ISm5pyg5LmW5Yi9','wo7Cvmk=','AMOqZsO756eO6ZCY6aqn6K645aSO6LSa77+h','w6jChnA=','w4Xwr4SxwpI=','wrDClT7ChQ==','PcKmLEwldiAKw5hg8JCAgsOO5bKl6K6m5pq45paqw5johpnmn5DkvbDnlpXmnI/pmpPnp6vpk4lFJMOUaA==','flttw4TDsg==','w5dQIw==','B8KrYcOA','wpDoh6vmnbrkvannlJPmn5PpmqsKwp8n','YlpsclA=','wqIww7nCoA==','wqvCnTc=','JQteJeenu+mRhemoseiuiOaKiuWIg++8uvC7r6E=','wq0ww5c=','w5TxgqWFwrs=','dMOqZsO7RcOEWA1aUvGHkZlr5oqG6KKN6Ian5p6qw6vlvZflpLXmiqjooqnCgE1nBgc=','w4jCqh3CiMKY','GcKxSMKawqQ=','e8Ovw4LDtMKd','b8OtOGB6','HMKRwrs=','W3R9w4MX','BcKXwrg=','b3DDr8Kq56Sj6ZCh6am66K2V5aeU6Lat77yU','KiXDtg==','w4jCmDI=','KznDtg==','w6QYw5DDvw==','4pq477qM55SF5ous','w7fCjMO86K+R5Z6H57+Q5YS85o2Q5Lmz6aij6K6056GAJeWlj+acrOW0nuaNnOS6sOivhOerneWQguWFguiuquiumeOApMOJ8LOFrOmqt+isp+ehhOaPsuS5peajjOW/nsOT','4oSv5rSa6K6X57mF5p6Uw4jopq3poY/lpIblir3ltpHpoLDljpPwoY2L','UMOPw7TDi8KR','ch9awrw=','NcOTw6PDgho5w4M=','BMOzPAk=','SsOSTsKkwqLCruiusuWEn+WIpuW8teiOm+WPpwIbw5DDmS198YGQgg==','wpDDtULDjxQ=','wp3Dm1fDhDE=','DcKvb8OKPMOB','eSlkwp/Dng==','wpbCnRrChcKg','wpLCk2k0NsOvQg==','ZVFg','w59YNHJv','UMKPwrc=','Q8OxH2tx','wonCj8Kb','w5NLMGFrwqLCiWtMw79sM8Kkw61zCMKFUGEfd8Ko','wpDCmGghY8OBSMKgwq4q','wqjDkxsKw5ljw6tHw5Q0SsK+wrI=','HsOVw7fDiho5w5sOf8OLw5HCl1fDqcOUwo9UJ3Rral0vYsOzFsObImNFw47DnnQ7wrbDn2ZKwq7DtsKKwqEnw59ow6/CtXBWw7VawobCvcO5w619woXDhMOoUcKcFV02wpcqL3A7wrTDqmjDuw/DqwxLwppow4wqw4gDw5Zfe2vDgHLDjMOEKsKJwrjDo8OMw6JCYcO5TnLDkixGw4jDoRplP8O9wpAQw519dBXCg8OlY2PDmcOHw49bw5teSsKew6jDlSbCpDvCmsK6E8ObwqpNAcOzfsOpMMKKwpMowrtEdxxLNVk=','E8KiIcOGNg==','wqBRwoJiL8Om6K2M5YWi5Yqy5b+v6Iym5Y2Uw6/ml47lhKLlr4bDrcOuWx9cfVXxhbOl','MsKeZcOVK8O56K+N5YWM5Ym45b6J6I+P5Y+QROetguS4t+Wmp+S5nuWJruaWjuaOlsKa8J6Rrw==','wr1JU8OXK3LorqTlhqDli6zlvoPojorljKLDq+esuuS5seWnvuS5veWJreaVmeaNmybwubOL','M8O4woM6woc=','w68swpTDoF8=','fcOtRcKCwqk=','wrF2Tw==','IfC9ka59','w6jDllDCsw==','8JSwm+adq+itg+WGneWsuuaWiemEqw==','w70XwrDDrVY=','wqY/wpUyCcOIw55Y','AsOZw4PDig4=','8KugiOaWu+WyrOeNnOaIhOa5m+eapeWEieWtuA==','YMKfw5HDlMOIRcK/w7LCqxJIaA==','wqPDhhU=','wq8+w51h','w7TDk8KIwonCs8K1wqzDvw==','KcOTFRw7','8Luhm+a3tuitl+aLsuiikuils+mgleS6ueWKnA==','w4vCoiPCrMKz','BsKXwrgPw4UJHSvCqz8=','w6YWw5o=','a8OpBMKVDg==','w4AJwrbDr00=','wrLCmzQ=','w4fxg7OrfQ==','c8KTw7DCgcKLw5TCnMKW','8Luhm+a3tuitl+mgk+WMiOils+mgleWklOWKjA==','IMKydcOxAA==','wopKwoVUEw==','KFxuEmQYC3rDpXc=','w59Lw7LDqxzDnQ==','w6NEw73DgiI=','WcOWAsKcLg==','wrR3TMK2wqhnaw==','Z8O1w4zDjxk=','wrLCu1RYTw==','wp/DgygTwoY=','4oSp5rW06K6R57uC5p6EwqLopaDpo5XlpbjliLzlt7Hpo5bljJHwv66W','YF5H','w6jxi4C5ag==','w5dDw4PCusObwq9efw==','8LCDo+WEgeWsi+i9pOaOkOS5keeNrumGgQ==','HlsKw49heMKPw7xGw5DCvsK3','MsKeZcOVK8O56K+N5YWM5Ym45b6J6I+P5Y+QROWEreWuquWHn+aPh8KswpHCl8ORbcO48LSgig==','ScOow4HDky47wokw','DsKveMOoMcOKT3BQeg==','woY+w6pPXw==','wpcywpbCo8OZ','acO9JMKaAw==','AcKGf8Ka','wrsnRMKHDVw2wpo=','8LegkuaNoeeNmQ==','WsO1w5jDtC8rwoIhBsOWBg==','wpbCpsK1VsOcKeitjuWHiOWKmuW8r+iPguWOlynmjJ3njIDml4PkuZTlrolQwr9jwqQWKfCWsLE=','CMOoJhwFNXxRw55iT8ORwo3Cil05ecKIw6DCkiA=','wqkrw4R0XylvdkBSworCilnCuGYKw7/DscO/NsOKFGxWDg==','wozDk8OEwosywoLCtjRNNSE2woY2w4zCqAPDuMKIRsKhwqYJZcK7DxoNbDE=','wqXChsKoVsOcTsKWwq/CpcOOAm9uwqTDhMKEw7l2RsKjacK9HCNIwrfDlDhPw4gmTcKsw5/CksKMEsOsw4gAaMK6w4XDjXceUzYeHhA7wrTDv8KWcUrCpcKOBzDCvcKJw4s7w6dRJkc=','wqvClyPCicKUagrDlA==','NMOfw7nDlRc5','wrd7YsOXfcKGA8KxIjYgw5MrOsKtw5A/CkbCjRRXwpQ8w4lOOQrCjBhVNsOvT8K0w7rCssOGdsOqw5jDosOTJcK7wpfDhMKCYlPDssK1HMKZw4xmw7EELMOxeSYODcOtD8KwbcOqwofCgMKxWMOMw7Vmw7oLwoFrw6xlw43Dri7CuMKpGgAyVGHCuMKzwrc5wrbCqmTCvcOTXlosd8Kywp3DtlbCo8OhIcKrNl/Cow==','w7ZhDzjChTnDjMKNw6Y=','NHUYw4ZE','wp/CjQvCkMKJ','woIHwqjCmsOn','OcOXASYD','R8KxdcK+','X8OBw6c=','XMKaYsKoZg==','OVB+I2IUGQ==','aBF7wrbDl3A7UCsmw4XCv0Ft','wrbDhgQ2wro=','w7nCmA3CosKs','QsOiw5I=','w4R9BBLCgg==','EkULw4Ni','UQvlvKDlp47kuKjovp3ohqfmnaXkv6XnlrTmnbjpm4LnprDpkYTCg8O1Kw==','wqHCncK7','4py855eW5our','wojCq8KsbMOZ','w4g4Jg==','B8K3w4vCu+emmemTq+mpt+iuguWlmOi2l++9vg==','w75mNFtu','U8K0LOitkuWdsOe8gOWGv+aPlOS6keS6m+WLkeegh0jlp6zmnqvltbzmjbXkuavorInnq7XlkrTlhonorYjorbrjg7o58Lq0j+mpv+ius+egteaOgOS6oeagjOW+osKF','FcO1Ng==','RMKjfw==','ZnzDoBY=','EcO2eeivkeWclue/oeWHl+aOq+S4qemooOisvuehsMK45ae/5p6X5bWz5oy75LqD6KyY56u05ZGz5Yah6K+96K2C44CWwoHwrpaW6aul6K2356Gw5o2/5Lqi5qCM5b63wok=','wrrDgBY=','wqc2w5xwSWE=','BMKrfA==','wpxGw6M=','wq7ClSHCk8KW','w5jCiTV+WsO+wpxB','ZMKOw5vDmsORQcK0','NiPDtsOrwozDpcKEw7DCkMO6eQ==','w7NmDDzClDHDkMKMw6Brwq5n','wrAjPAjCtlEBAsOHw7M=','w5jCsirCgMKxKcOlw57CnMOw','MMOVw6TDjQMnw5Y=','w6rDmFo=','RbjsUjiami.com.SlvxL6hCRAnRhrZlu=='];(function(_0x28fc7d,_0x230ad1,_0x47690c){var _0x23235b=function(_0x4ebdce,_0xcf3014,_0x1f09a0,_0x147784,_0x6df34a){_0xcf3014=_0xcf3014>>0x8,_0x6df34a='po';var _0xaeb2c1='shift',_0x318c33='push';if(_0xcf3014<_0x4ebdce){while(--_0x4ebdce){_0x147784=_0x28fc7d[_0xaeb2c1]();if(_0xcf3014===_0x4ebdce){_0xcf3014=_0x147784;_0x1f09a0=_0x28fc7d[_0x6df34a+'p']();}else if(_0xcf3014&&_0x1f09a0['replace'](/[RbUSlxLhCRAnRhrZlu=]/g,'')===_0xcf3014){_0x28fc7d[_0x318c33](_0x147784);}}_0x28fc7d[_0x318c33](_0x28fc7d[_0xaeb2c1]());}return 0x9007c;};return _0x23235b(++_0x230ad1,_0x47690c)>>_0x230ad1^_0x47690c;}(_0x2fa5,0x82,0x8200));var _0x543a=function(_0x2d29bf,_0x5e3b26){_0x2d29bf=~~'0x'['concat'](_0x2d29bf);var _0x3aec9c=_0x2fa5[_0x2d29bf];if(_0x543a['kBwwPU']===undefined){(function(){var _0x2d9ff9=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3e99c5='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2d9ff9['atob']||(_0x2d9ff9['atob']=function(_0x2851e6){var _0x558be8=String(_0x2851e6)['replace'](/=+$/,'');for(var _0x387e77=0x0,_0x55350,_0x2bfb1f,_0xdaa558=0x0,_0x1c655e='';_0x2bfb1f=_0x558be8['charAt'](_0xdaa558++);~_0x2bfb1f&&(_0x55350=_0x387e77%0x4?_0x55350*0x40+_0x2bfb1f:_0x2bfb1f,_0x387e77++%0x4)?_0x1c655e+=String['fromCharCode'](0xff&_0x55350>>(-0x2*_0x387e77&0x6)):0x0){_0x2bfb1f=_0x3e99c5['indexOf'](_0x2bfb1f);}return _0x1c655e;});}());var _0x4bcf1c=function(_0x553999,_0x5e3b26){var _0x4cbf37=[],_0x5b9297=0x0,_0x432d65,_0x38860c='',_0x41f014='';_0x553999=atob(_0x553999);for(var _0x2a10a2=0x0,_0x38a8b6=_0x553999['length'];_0x2a10a2<_0x38a8b6;_0x2a10a2++){_0x41f014+='%'+('00'+_0x553999['charCodeAt'](_0x2a10a2)['toString'](0x10))['slice'](-0x2);}_0x553999=decodeURIComponent(_0x41f014);for(var _0x52a930=0x0;_0x52a930<0x100;_0x52a930++){_0x4cbf37[_0x52a930]=_0x52a930;}for(_0x52a930=0x0;_0x52a930<0x100;_0x52a930++){_0x5b9297=(_0x5b9297+_0x4cbf37[_0x52a930]+_0x5e3b26['charCodeAt'](_0x52a930%_0x5e3b26['length']))%0x100;_0x432d65=_0x4cbf37[_0x52a930];_0x4cbf37[_0x52a930]=_0x4cbf37[_0x5b9297];_0x4cbf37[_0x5b9297]=_0x432d65;}_0x52a930=0x0;_0x5b9297=0x0;for(var _0x20f1c3=0x0;_0x20f1c3<_0x553999['length'];_0x20f1c3++){_0x52a930=(_0x52a930+0x1)%0x100;_0x5b9297=(_0x5b9297+_0x4cbf37[_0x52a930])%0x100;_0x432d65=_0x4cbf37[_0x52a930];_0x4cbf37[_0x52a930]=_0x4cbf37[_0x5b9297];_0x4cbf37[_0x5b9297]=_0x432d65;_0x38860c+=String['fromCharCode'](_0x553999['charCodeAt'](_0x20f1c3)^_0x4cbf37[(_0x4cbf37[_0x52a930]+_0x4cbf37[_0x5b9297])%0x100]);}return _0x38860c;};_0x543a['uGRhot']=_0x4bcf1c;_0x543a['jQrdtS']={};_0x543a['kBwwPU']=!![];}var _0x517873=_0x543a['jQrdtS'][_0x2d29bf];if(_0x517873===undefined){if(_0x543a['kCetNj']===undefined){_0x543a['kCetNj']=!![];}_0x3aec9c=_0x543a['uGRhot'](_0x3aec9c,_0x5e3b26);_0x543a['jQrdtS'][_0x2d29bf]=_0x3aec9c;}else{_0x3aec9c=_0x517873;}return _0x3aec9c;};const hostcoral2=_0x543a('0','HEL4');const hostucwallet='https://ucwallet.uc.cn/';const hostcoraltask=_0x543a('1','19Fz');const tgmarkcode=_0x543a('2','QA&B');const githubkeyUrl=_0x543a('3','$XA%');let ucpigapp=$['getjson'](_0x543a('4','!#cs'),[]);let ucpigappkey=$[_0x543a('5','B]dO')]('ucpigappkey');!(async()=>{var _0x36331c={'EYpJv':function(_0x40a547,_0x3fbf59){return _0x40a547+_0x3fbf59;},'uJzsp':_0x543a('6','s@YP'),'yovLO':function(_0x3ac2f0,_0x5515bf){return _0x3ac2f0!==_0x5515bf;},'WCCGr':_0x543a('7','$cC&'),'GroOa':function(_0x109c85,_0x45b3d9){return _0x109c85!==_0x45b3d9;},'gjWde':_0x543a('8','^o(K'),'kYKQJ':function(_0x1e9138){return _0x1e9138();},'vEvla':function(_0x466d47,_0x4fb7f2){return _0x466d47<_0x4fb7f2;},'iLjwp':'[Tips]请先前往获取\x20用户基础数据Uid\x20📲','pQDYw':_0x543a('9','!#cs'),'xMJKg':function(_0x498ee2,_0x37b671){return _0x498ee2+_0x37b671;},'vVZev':function(_0x4e1118,_0x3adb93){return _0x4e1118(_0x3adb93);},'zgWpO':function(_0x578112,_0x3981f4){return _0x578112+_0x3981f4;},'nkLws':function(_0x31ae69,_0x1e7ded){return _0x31ae69+_0x1e7ded;},'fqSmF':function(_0x3fb946,_0x167803){return _0x3fb946+_0x167803;},'UFLUC':function(_0x4593b7,_0xb8db55){return _0x4593b7!==_0xb8db55;},'TbENS':_0x543a('a','Xz4F'),'DeaFD':_0x543a('b','HEL4'),'RJztK':function(_0x3b2bf9,_0x20d872){return _0x3b2bf9+_0x20d872;},'TsQco':function(_0x53f9a1,_0x118194){return _0x53f9a1+_0x118194;}};cc=$[_0x543a('c','8[YI')]+'任务执行通知🔔';console[_0x543a('d','6fqO')](_0x36331c[_0x543a('e','8[YI')]);console['log']('Now\x20login(UTC+8):'+new Date(new Date()[_0x543a('f','WDnQ')]())[_0x543a('10','*T6@')]());if(_0x36331c[_0x543a('11','RRdP')](typeof $request,_0x36331c[_0x543a('12','C$yt')])){$[_0x543a('13','rhLV')]('[Tips]请先前往获取cookie📲');}else if(!ucpigappkey){if(_0x36331c[_0x543a('14','$cC&')](_0x543a('15','^o(K'),_0x36331c['gjWde'])){$['log']('\x0a🤖['+$['name']+_0x543a('16','Z0P!'));await _0x36331c['kYKQJ'](githubkey);}else{$[_0x543a('17','$XA%')](_0x543a('18','7!fg')+_0x36331c[_0x543a('19','$XA%')](i,0x1)+'(ID:'+tkList[_0x543a('1a','s@YP')]+_0x543a('1b','rhLV'));$['log']('\x0a⚠️用户'+_0x36331c[_0x543a('1c','hb!S')](i,0x1)+_0x543a('1d','e(v&')+tgmarkcode+tkList[_0x543a('1e','HEL4')]);$[_0x543a('1f','8[YI')]($[_0x543a('20','8[UU')],'','⚠️用户'+(i+0x1)+_0x543a('21','eOky')+tgmarkcode+tkList[_0x543a('22','RRdP')]);}}else{let _0x2d4bbc=ucpigapp[_0x543a('23','19Fz')](_0x3f4e00=>_0x3f4e00['hd'])[_0x543a('24','e(v&')](_0x2d3d83=>({'uid':_0x2d3d83[_0x543a('25','fv#4')],'headers':JSON[_0x543a('26','!#cs')](_0x2d3d83['hd']),'exchangebody':_0x2d3d83[_0x543a('27','t8]F')],'txmoneybody':_0x2d3d83[_0x543a('28','Kdeb')],'pigawardurl':_0x2d3d83[_0x543a('29',']r2M')],'pigawardbody':_0x2d3d83[_0x543a('2a','$cC&')],'videotask1':_0x2d3d83[_0x543a('2b','8uVa')],'videotask2':_0x2d3d83[_0x543a('2c','C$yt')],'videoaward':_0x2d3d83['videoaward'],'coinurl':_0x2d3d83[_0x543a('2d','B]dO')]}));console[_0x543a('2e','ow(k')](_0x543a('2f','8uVa')+$[_0x543a('30','RRdP')]+']:~\x20System💲脚本账号数量\x20');console[_0x543a('31','^o(K')](_0x543a('32','19Fz')+_0x2d4bbc[_0x543a('33',']r2M')]+'个账号');for(let _0x4f6326=0x0;_0x36331c['vEvla'](_0x4f6326,_0x2d4bbc[_0x543a('34','Z0P!')]);_0x4f6326++){tkList=_0x2d4bbc[_0x4f6326];if(!tkList[_0x543a('35','19Fz')]){$['log'](_0x36331c[_0x543a('36','SiB9')]);}else{if(_0x36331c[_0x543a('37','EJiT')](_0x36331c['pQDYw'],_0x36331c[_0x543a('38','@KO^')])){return!![];}else{$[_0x543a('39','Xz4F')](_0x543a('3a','SiB9')+$[_0x543a('3b','PIyv')]+']:开始验证~用户'+_0x36331c['xMJKg'](_0x4f6326,0x1)+'-脚本使用权限...');if(_0x36331c['vVZev'](z,_0x4f6326)){$['log']('用户'+_0x36331c[_0x543a('3c','rhLV')](_0x4f6326,0x1)+_0x543a('3d','^o(K')+tkList['uid']+_0x543a('3e','*I$)'));$[_0x543a('3f','PIyv')](_0x543a('40','6fqO')+$['name']+_0x543a('41','E$]n')+_0x36331c[_0x543a('42','#[HO')](_0x4f6326,0x1)+_0x543a('43','X%O^'));await main(_0x4f6326);}else{$[_0x543a('44','#[HO')]('用户'+(_0x4f6326+0x1)+'(ID:'+tkList['uid']+_0x543a('45','8[YI'));$[_0x543a('46','@KO^')](_0x543a('47','Xz4F')+$[_0x543a('48','!#cs')]+_0x543a('49','HEL4'));await githubkey(_0x543a('4a','X%O^'));$[_0x543a('4b','hb!S')]('\x0a🗝['+$[_0x543a('4c','e(v&')]+']:再次验证~用户'+(_0x4f6326+0x1)+_0x543a('4d','t8]F'));if(z()){$[_0x543a('4b','hb!S')]('用户'+_0x36331c[_0x543a('4e','Z0P!')](_0x4f6326,0x1)+_0x543a('4f',')zH[')+tkList[_0x543a('50','!#cs')]+_0x543a('51','Z0P!'));$[_0x543a('52','19Fz')](_0x543a('53','!#cs')+$['name']+_0x543a('54','8[YI')+_0x36331c[_0x543a('55','C$yt')](_0x4f6326,0x1)+'的脚本任务');await _0x36331c[_0x543a('56','SiB9')](main,_0x4f6326);}else{if(_0x36331c[_0x543a('57','vrHP')](_0x36331c['TbENS'],_0x36331c[_0x543a('58','eOky')])){$[_0x543a('59','7!fg')]('❌用户'+_0x36331c[_0x543a('5a','AsL3')](_0x4f6326,0x1)+_0x543a('4f',')zH[')+tkList[_0x543a('5b','7!fg')]+_0x543a('5c',']r2M'));$[_0x543a('5d',']r2M')]('\x0a⚠️用户'+_0x36331c['RJztK'](_0x4f6326,0x1)+':~\x20请在群内提交互助码,如果已提交请稍后再试试。\x0a🔺验证码提交格式:'+tgmarkcode+tkList[_0x543a('5e','t8]F')]);$[_0x543a('5f',']r2M')]($[_0x543a('60',')zH[')],'',_0x543a('61','NU8s')+_0x36331c['TsQco'](_0x4f6326,0x1)+_0x543a('62','$XA%')+tgmarkcode+tkList[_0x543a('22','RRdP')]);}else{console['log'](_0x543a('63','s@YP'));}}}}}}}})()[_0x543a('64','6fqO')](_0x27a64f=>{$[_0x543a('d','6fqO')]('','❌\x20'+$[_0x543a('65','*T6@')]+',\x20失败!\x20原因:\x20'+_0x27a64f+'!','');})[_0x543a('66','B]dO')](()=>{$[_0x543a('67','HEL4')]();});function z(){var _0x57689a={'dgpcw':_0x543a('68','cUsE'),'ZSQdi':_0x543a('69','*I$)'),'HiIeS':function(_0x32dd51,_0x177d82){return _0x32dd51>_0x177d82;},'hyFMO':function(_0x133bcf,_0x1fc1a3){return _0x133bcf(_0x1fc1a3);}};const _0xf693c8=_0x57689a[_0x543a('6a','*I$)')](decodeURIComponent,Base64[_0x543a('6b','e(v&')](ucpigappkey));function _0x50d5d8(_0x3c57ad){try{if(_0x57689a['ZSQdi']===_0x543a('6c','*T6@')){if(_0x57689a[_0x543a('6d','!#cs')](_0xf693c8[_0x543a('6e','E$]n')](_0x3c57ad),-0x1)){return!![];}}else{$[_0x543a('6f','AsL3')](_0x57689a[_0x543a('70','hb!S')]);}}catch(_0xd3ae){$[_0x543a('71','aThW')](_0xd3ae);return![];}}if(_0x57689a[_0x543a('72','eOky')](_0x50d5d8,tkList['uid'])){return!![];}else{return![];}}function initTaskOptions(_0x29883e,_0x35222b){return{'url':''+_0x29883e,'headers':{'Accept':_0x543a('73','QA&B'),'Origin':_0x543a('74','hb!S'),'Connection':_0x543a('75','E$]n'),'Accept-Encoding':_0x543a('76','RRdP'),'User-Agent':_0x543a('77','B]dO'),'Accept-Language':_0x543a('78','e(v&')},'body':_0x35222b};}async function main(_0x2bceda){var _0x3bbdc9={'hlBnz':function(_0xa6039f,_0x277117){return _0xa6039f>_0x277117;},'sYAUZ':function(_0x8bc249){return _0x8bc249();},'QcNix':function(_0x47007f,_0x3d8121){return _0x47007f+_0x3d8121;},'IXHJZ':_0x543a('79','5fpv'),'eSbFO':function(_0x2e8a65){return _0x2e8a65();},'IOGpM':function(_0x5e1b35,_0x2c8499){return _0x5e1b35+_0x2c8499;},'eymIm':_0x543a('7a','e(v&'),'ZSDgZ':_0x543a('7b','Swc5'),'NGGWA':function(_0x4b8613){return _0x4b8613();},'IxyTX':function(_0x28b910,_0x290b63){return _0x28b910===_0x290b63;},'mRxFG':_0x543a('7c','&L]*'),'qOnFO':_0x543a('7d','DsER'),'anXxV':function(_0x4210b7,_0x11285c){return _0x4210b7<_0x11285c;},'PjaNJ':function(_0x1b339e,_0xb84f22){return _0x1b339e(_0xb84f22);},'PjZis':_0x543a('7e','cUsE'),'GaZKs':function(_0x3d19d9,_0x392c1f){return _0x3d19d9==_0x392c1f;},'XszjS':function(_0x424693,_0xe0c838){return _0x424693==_0xe0c838;},'XGdhW':function(_0x495a1b,_0x1343ad){return _0x495a1b==_0x1343ad;}};console[_0x543a('7f','RHv!')](_0x543a('80','eOky')+$[_0x543a('81','ow(k')]+']:~\x20User'+(_0x2bceda+0x1)+_0x543a('82','vrHP'));await _0x3bbdc9[_0x543a('83','DsER')](getUserInfo);console[_0x543a('3f','PIyv')]('\x0a🐷['+$['name']+_0x543a('84','5fpv')+_0x3bbdc9[_0x543a('85','B]dO')](_0x2bceda,0x1)+_0x543a('86','B]dO'));!tkList[_0x543a('87','Kdeb')]?$[_0x543a('39','Xz4F')](_0x3bbdc9['IXHJZ']):await _0x3bbdc9['eSbFO'](pigAward);;console[_0x543a('88','RRdP')]('\x0a🐷['+$[_0x543a('89','19Fz')]+_0x543a('8a','2YqD')+_0x3bbdc9[_0x543a('8b','HEL4')](_0x2bceda,0x1)+_0x543a('8c','EJiT'));!tkList['videotask1']?$[_0x543a('31','^o(K')](_0x3bbdc9[_0x543a('8d','C$yt')]):await _0x3bbdc9['eSbFO'](videoTaskTest1);!tkList[_0x543a('8e','7!fg')]?$[_0x543a('8f',')zH[')](_0x3bbdc9[_0x543a('90','euEy')]):await _0x3bbdc9[_0x543a('91','DsER')](videoTaskTest2);console[_0x543a('92','!#cs')](_0x543a('93','$XA%')+$['name']+_0x543a('94','vrHP')+(_0x2bceda+0x1)+_0x543a('95','EJiT'));await videoAwardTest();if(_0x3bbdc9[_0x543a('96','e(v&')](awardstate,0x2)){if(_0x3bbdc9['mRxFG']!==_0x3bbdc9[_0x543a('97','5fpv')]){for(var _0x1ab57d=0x0;_0x3bbdc9['anXxV'](_0x1ab57d,tkList[_0x543a('98','WDnQ')][_0x543a('99','PIyv')]);_0x1ab57d++){await _0x3bbdc9[_0x543a('9a','PIyv')](videoAward,_0x1ab57d);}}else{if(_0x3bbdc9[_0x543a('9b','euEy')](ll[_0x543a('9c','RHv!')](id),-0x1)){return!![];}}}else{if(_0x3bbdc9[_0x543a('9d','rhLV')](_0x3bbdc9[_0x543a('9e','#[HO')],_0x3bbdc9[_0x543a('9f','RRdP')])){console['log'](_0x543a('a0','hb!S'));}else{$['log']('','❌\x20'+$['name']+',\x20失败!\x20原因:\x20'+e+'!','');}}console[_0x543a('a1','Z0P!')](_0x543a('a2','#[HO')+$['name']+_0x543a('a3',')zH[')+(_0x2bceda+0x1)+_0x543a('a4','s@YP'));!tkList[_0x543a('a5','^o(K')]?$[_0x543a('d','6fqO')](_0x543a('a6','e(v&')):await exchangeMoney();var _0x23e819=new Date()[_0x543a('a7','rhLV')]();var _0x1ab57d=new Date()[_0x543a('a8','e(v&')]();if(_0x3bbdc9[_0x543a('a9','19Fz')](_0x23e819,0x12)||_0x3bbdc9['XszjS'](_0x23e819,0x13)||_0x23e819==0x14||_0x3bbdc9[_0x543a('aa','Xz4F')](_0x23e819,0x15)||_0x3bbdc9['XGdhW'](_0x23e819,0x16)||_0x3bbdc9[_0x543a('ab','euEy')](_0x23e819,0x17)){console['log']('\x0a🐷['+$[_0x543a('ac','SiB9')]+_0x543a('ad','Swc5')+(_0x2bceda+0x1)+_0x543a('ae','QA&B'));!tkList[_0x543a('af','rhLV')]?$[_0x543a('44','#[HO')](_0x543a('b0','$XA%')):await txMoney(_0x2bceda);}};_0xodr='jsjiami.com.v6';
//============================
//+++++++++ 任务函数 ++++++++++
//============================

async function txMoney(i) {
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
              case "OK":
              $.log(`→User${i+1}成功提现到支付宝🎉`)
              $.msg($.name, '', `User${i+1}成功提现到支付宝🎉`);
                break;
              case "EXCHANGE:NOT_ENOUGH_BALANCE":
              $.log(`→余额不足,明天再来🎉`)
                break;
              case "EXCHANGE:INVALID_USER":
                $.log(`[Tips]User${i+1}请先前往获取 提现支付宝cookie📲`)
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
