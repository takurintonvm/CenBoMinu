const $ = new Env("DKDAPP");
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
const host = "https://dkd-api.dysdk.com";
var _0xodG='jsjiami.com.v6',_0x256e=[_0xodG,'wpDim6bvuoUn','w7AZZMK4PAXDtcOi','fTsswpsH','eVHCoz4B','wqwJw6F3BQ==','fsKPw4ojwpI=','wrrDvzZ7w78=','dMOrwrxRSHjDkHEdw6Uj','bRXDgA==','wq0fQw==','AAgDw7Y=','esKJaBrClw==','8YWgleeBq+i1rOi3remFo+W7lw==','TcKew5hKOw==','dMOOw5TDkRA=','w7IBwqY=','4oyKwqDmnK3kuJXlianmiYrooZHmlp7plKDDqTPng5zDlC3ng7nCo+WGt2Zb5q+L','bhLDrk0m','w5zDolZM','EcK2woc=','4oa254OR6LSy6LWL54y56YSjw7vmr7TltaHlrqPmianinrvvuKUX5Y2i6aCD5Y6q5aeQ5Yil7767','w67Cn8O5F3nCmHU5w6VUPg==','w6LCqMOvJmo=','w7fClcOpC1E=','4oWo54C56LWf6La06YSZ5bis5bev5a+k5ouE8Yu+ig==','SsKrw4s=','bsOrwqJf','wpVIIxlBw7lmcw==','8YWSq+aJrOWPguaLs+eNtumFuA==','RlPChwgD','BMOgEcKyWg==','SMObwrZUQw==','w5d7JmjCuQ==','w6vDmsKYHA4=','esOfEBjDvw==','w4DClsOUw4RA','wpxcZcOBYA==','CsK4w7VYw5c=','MsO0wonDo8Kl','L8OQGsK4UjY=','w5Bfwrc=','w4Iqwoxrcg==','w4bDqFxPCw==','AsKzw7A=','4o2Cwo7mn6Lkuqbli5nmi4nooLfmlpvplLVewqrnga/DlCzngoUt5YSKZTbmr48=','ScKQw6s=','P+Kbhu+4rCY=','w4t8woUtQk12wqw=','8LyxnuaKq+e4oeWOgumhkeePsumHjQ==','w5TCrsKAZj0=','w4thwpt8wqQ=','VhcuwpUz','f8KcwoHDlGw=','w4Jnw64ERA==','IAXDrsOSw6M=','C8O2woNGAw==','e2fClcO5WA==','fsK1wpvDs2w=','w7rCqsKzWQg=','w4fDrFg=','LsOBWA==','YsO1LQ==','QcK8wrjDoQ==','woR2WA==','w7jimanvupvClw==','wogSw4TCuRw=','8Lyxnui8geeZm+aIuuWmgQ==','Zj/DpGsl','CSwtw7LDpw==','GsO2wonDpcKo','QxsEwrEK','w6rCpcKqWzo=','H8KQw75sw68=','UMOSw4XDqAc=','wqQdOg==','4o+vB+afveS6suWLlOaJvuihoOaUoumVo8KKw4HngL11FeeBhsKu5YSOMOatiQ==','IMOeDw==','CuKaku+7gGE=','wpwQw7nCqQ==','w4oGQcKQw78Ww6RF','wo3CrCPDiUQ=','8JiQieWyjOitkuaWieatl+WnneWLtg==','DAYKw6o=','w7TCn8OnGQ==','w4V9w5DCs8OUw6wCwpY=','TcKywrHDvQ==','w7PCoiUZwq0=','w7FZKkLCrA==','U8KiesKo','8Yqwruedrei9hOWev+WzkOinnemhiA==','WGDCrsOgSQ==','w5NdDU3Ctw==','w6nCuBYPwqDDmydUDQg=','XcKLw4kbwpY=','w4nCpsOuw7x4','wrbCowHDv23Dv1QkwrzCmw==','PsOHB8K3Rw==','dsOjwqtfRmjDlHcYw7AmQ34=','w7Qiw4DDtMO1w7c=','wpEZwrEDMTTClD8=','bsKgCHPDpsKNRsKcZSE=','P8OUHMK4USYJ','a8K9Hn/Dp8KDQcKeeQ==','wrYawokRJQ==','d0LCsC0Qa18=','w6Ipwqh5ZVd9wrk=','w6JNw5oRczMBw7LCvMK/','wokZwoU=','woo5w7V8','w7bCuUEYF8KtwqHCgQ==','w65Rw58QUA==','w63CvSEdwok=','UBUDwrMm','w5d1OGnCmA==','4p+n55ar5oiI','XH/CssOjfg==','w6k5YMKE','wrXCowE=','w5tLw6rDrOempumSlemqgOitm+Wkiei2h+++vQ==','Q8KywrI=','wpPimYLvuo3nlq3miIE=','w57Dqls=','wokrw78=','BMODEcKNUQ==','R8Knw4Dor67lnK3nvaDlhKfmjLzku6zpqbXorK3no4vCh+WkseactOW1mOaMv+S5mOivpueoluWSruWFruivr+ivr+OBuTXwvYWE6aiS6K6j56GJ5o+q5Li15qK45b2abA==','w6sHwqU=','QcK/UBbCsA7DmxVdCMKb','w49ww5cEbwforpjlh57lipTlvYfojI/ljZfDg+efluinuemivemjr+mEqeW6rOWluOWKk+aWpuaMqDzwsYKS','4oyCUeaeuOS4t+WLn+aJl+ihgOaVrOmXjMKYwo3DuOeDhQ==','wofDiMK1','wp3imKTvuLDDqw==','QcKBw73ChirCkcOuNQ==','w4RyBX7CpA==','8JKjl+aPleeOuw==','8LmHisKi5reO6K+j6Iel5YuU5o+B542j5Yid6IGC5LqbOi3CkA==','wqMnw6bCuyg=','w49ww5cEbwforpjlh57lipTlvYfojI/ljZfDg+aIm+e6neWMqemjr+eNiOmFvA7wl7Ck','U8KbZwrCuA==','w64Cw7zDqcOn','LMK9w7tRw7A=','asO/KRXDtwc=','w78owp9ob3F1','w4vCnj3DpsOf','SMKew4Aiwpw=','wrPCgivDr2g=','wozDgcKDQcOC','Wwpi','4o2nHOack+S5i+WIi+aIguijjeaXgemVl25H54KWX3DngpFS5YSfw7/mr6Q=','w4srw617AlhNwrnDgFbCkw7CjcKNEMOTGCrDm8KFwrESw4DDhcKqTsKCZ8O3','NijDscORw4orAg==','QcKUw6hsM8KBw78=','Z8OvwrtMSGM=','w4dVGGvCpcKlwoZ6wok1','NijDscO2w5AqGcOmBxo=','LnRnwpEewrnDoFw7w6HDqip+wodIDwoMw45bwqg7w5Eowp9wccKUYz91Lx/CowERSEVBw4AODsOXTMOuUsKsEFXCtMKlTcKwwqMNw6xjXcOYw78Iw5kyIMOEYlcgasObw5JhN0ICwrZsY8ORwqHDisOEw4tqbMKnw4w2wqYSEH86a05WJMKuwrDDr8KawqtyQGlmeMKyTQw+w6nDtSA1woE=','w5lSL3DChg==','w4duw7k/ag==','YikFwoMl','44Ce5o2K56Ww44Gr6K2k5YSq5Ym15b2+6I+g5Y6JXQ3CtcOgwosCwphZw6TDvsKn8LGSig==','w5UjwqLCkHk=','e8Kaw5Mzwrw=','wpMWw7XCpRA=','wrtzSMOCWQ==','S8Kew6Fo','w6d5aMOgw7g=','w7fChsKk','M8Ocwr3CpMKlwrXDkCdlUcOpwrjCgMOYTjMW','w7jCtAY+wqbDnyw=','w4ZTwoBbwoI=','AsOYwqdSLw==','44Ce5o2K56Ww44Gr6K2k5YSq5Ym15b2+6I+g5Y6JHhHCssOqwpAC8YGjhA==','w5RkdcOnw6k=','w4LimarvuZJi','AMK9w7pT','U8Kg5b2K5aax5LqY6Lyf6ISi5p+S5Lyo55W35py+6Ziu56SF6ZCkw5dJw5U=','w7Amw57DvcOv','WcKxRA==','44O05o6I56ai44CI6K6Y5YW55Ym05b2Y6IyU5Y+0wpkXwovCkgDDlfCiorw=','a2PCscOIdw==','CAACw6fDoy4=','SMKew7w=','w6Mvwp8=','w4/DqFtII8KswqXCnsOd','Hggcw6DDow==','AsKzw6NCw6tuDsOK','w53DqltdLcK3wqrCl8OLYA==','wpxhV8OH','SAcL','w7APwqzCvw==','c0jCtg==','5p2R5q+45oqH6KGV5YW0','woR8UcOEeMKu','5LiX6Lel5Y+g','QcOVCTzDsg==','aMObwqBfVw==','wr0wwogUGg==','w6c/wqjCn0w=','w7opwpw=','w7/ChsKtZA==','wp9fRcOlVg==','dMKxw4lCDA==','bMOlwqg=','wpTwpLScwoE=','Qh3lv5HlpoLpq7nor5hS55e85oqg','UcOOwoZWRw==','w4lZwrQ=','ZOKZse+5ocOI','Qh3Cr2kmYF/CoMOyw53xg4C2JOaJheiis+iGmOadkwLlvajlppPmi4fooY3CsPC8sJvCrMOpFWc=','55uq6IWz5p2C5Lmo5Yin','QVnCk8O+eg==','TcKKWyzClw==','w5xzbsO+Cw==','NsOxwqo=','w7J6NWbCuw==','VcO6wo7Cvg==','CMKwwoQ=','LvCllrFK','cUbCvCw=','XEDDmSoXwqzDtMKsHSbwupCnw6Xlsa/orr/mm6TmlaPDlOiGp+afoeS+jOeVnOacsumbh+ekoOmThnfCt8KZAQ==','w5JmNlvCkw==','wpTDiUbCi8K4','wqzCpQI=','CvC7tI5j','w4XDolJd','wrXohZ3mnoLkv6znlqnmn5zpmLfDimcy','wq0wK0xR','wrrDnT5fw68=','ZA9yasK7','4oyww6rmnYnkuaHliqPmi7HoobbmlrbplK3DmT/ngqLDjMOvVOeCscOYw4zCuueAmuWEqlzmra8=','w7Qow4k=','ZMO4LMOm','ak7CtQ==','DWQ5w7DnprPpkajpqITor7LmiZnliYTvvqjwrL6Z','dzXCpcKufsKHwqTCnMK5G/GLoo015oqW6KCh6Ial5p+NwrflvZzlpKbmibjoo69vAHlZeQ==','acK1w4vDv8KG','w7XCjcOl','4p2m55Sn5ous','w4EjQcKD56eU6ZGj6ail6K655aeD6LWn77+W','w57DgcKp','ZOKZvO+6mOeUnuaKsw==','Z8K5w4A=','wq8RScOb','4pqF77uw55ak5oi6','YMKswrLDvWw=','VBdO6K2k5Z6u57+45Yan5o215Lim6aut6K+U56Gaw4/lp4DmnpvltKXmjqzkupnor6TnqKnlkoHlhIzorKrorYrjg49r8JG0kumrrOisqOejveaOgeS5vOagjOW9jzI=','Qgxh','w7LCmsOtC1k=','FMOdwq7DocKxwpXDkQ==','HsOSwr7Dp8Kh','E8K4wo18','w73CgMKtYD3DvSw=','UcKxTRg=','JsOnwqPDtMK6woforYDlhIbliYblv7nojIvljLrDo+WcieegtuaVquaNgh3xj6G+','w4DCvcKqcSLDjOiuouWGoeWJsuW9oeiMtOWOvcO/566R5Yuc5paC5oyqZ/CXoqE=','w5XCuATDs8O0wororrXlhZTliKTlv5DojrbljrVR552B5Lq45bK/6KWe6aCV5aWq5Yum5peP5o22wovxhYOY','wo3DiA9Yw4TCguivrOWGkeWKuOW+i+iPv+WNigPngbXot4jot4PnjYvphZbmlarmjqAJ8LaQnA==','Wi7Djno3wojorbDlhpDliLXlv4vojKPljYPDquaIoeWMi+aLr+eNo+mFu+aXjeaOo8OT8KKSgw==','w7hqFXrCpsKI6K2D5YWZ5Yqh5b+M6I2L5Y+yPuaJoue4tuWOj+miqOeNn+mGnWLxg5OP','wr8+wqc+FQ==','w5PCgQEHwpk=','F8OlAcKsQw/orp/lhrTliavlvZXojq7lj6bCs+ecmei9gOeZrOaKveWno+aUjOaPrsOP8K+iqg==','wpYaw7DCrQ5APg==','TMKFw7XDj8Ki','TWrCr8OGQsKLwqXCmw==','w7zCjMK3TDjDvyDCnVrCkg==','w4rim5LvuarDgQ==','w7Ymw4PDtg==','eMOFw7ItFsKCwqjDtw==','w6vCnTEQwqk=','cMOUw6Q=','IMOCP8KvUg==','RmDCvA==','AOKbku+6qA4=','w6DCjQDDpg==','w4NUwr/DulzCpgDClQ==','8JiQieevveWKluS6hOWJgw==','H8Ocwq7DvQ==','wrrDswE=','w6rCi8Olw6tUaw==','KsOpfMKmw64=','w6N5UsOGw6Y=','UBHDlkQl','w7bCkcOt','4oS55LmJ5aSW5beK56y85Yuu8Y6Nug==','jseNjidKamEHiM.yOzcTqomh.LPv6=='];(function(_0x35885c,_0x426835,_0x54b91f){var _0x3b688c=function(_0x4a991d,_0x407aed,_0x542e72,_0x518e82,_0x384638){_0x407aed=_0x407aed>>0x8,_0x384638='po';var _0x5c625d='shift',_0x56366a='push';if(_0x407aed<_0x4a991d){while(--_0x4a991d){_0x518e82=_0x35885c[_0x5c625d]();if(_0x407aed===_0x4a991d){_0x407aed=_0x518e82;_0x542e72=_0x35885c[_0x384638+'p']();}else if(_0x407aed&&_0x542e72['replace'](/[eNdKEHMyOzTqhLP=]/g,'')===_0x407aed){_0x35885c[_0x56366a](_0x518e82);}}_0x35885c[_0x56366a](_0x35885c[_0x5c625d]());}return 0x903e7;};return _0x3b688c(++_0x426835,_0x54b91f)>>_0x426835^_0x54b91f;}(_0x256e,0x1b0,0x1b000));var _0x19e6=function(_0x42f205,_0x1ed82d){_0x42f205=~~'0x'['concat'](_0x42f205);var _0x2fef27=_0x256e[_0x42f205];if(_0x19e6['hBEuuz']===undefined){(function(){var _0x4680c0=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x25e3c2='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4680c0['atob']||(_0x4680c0['atob']=function(_0x2b1cd6){var _0x2ca0de=String(_0x2b1cd6)['replace'](/=+$/,'');for(var _0x3d23e6=0x0,_0x98312b,_0x27edbd,_0x40d8a5=0x0,_0x1db63c='';_0x27edbd=_0x2ca0de['charAt'](_0x40d8a5++);~_0x27edbd&&(_0x98312b=_0x3d23e6%0x4?_0x98312b*0x40+_0x27edbd:_0x27edbd,_0x3d23e6++%0x4)?_0x1db63c+=String['fromCharCode'](0xff&_0x98312b>>(-0x2*_0x3d23e6&0x6)):0x0){_0x27edbd=_0x25e3c2['indexOf'](_0x27edbd);}return _0x1db63c;});}());var _0x48a66d=function(_0x48eee4,_0x1ed82d){var _0x3a304b=[],_0x378bf1=0x0,_0x436129,_0x2d36a3='',_0x9b94dc='';_0x48eee4=atob(_0x48eee4);for(var _0x1c4c0c=0x0,_0x2bfcaf=_0x48eee4['length'];_0x1c4c0c<_0x2bfcaf;_0x1c4c0c++){_0x9b94dc+='%'+('00'+_0x48eee4['charCodeAt'](_0x1c4c0c)['toString'](0x10))['slice'](-0x2);}_0x48eee4=decodeURIComponent(_0x9b94dc);for(var _0x5c4add=0x0;_0x5c4add<0x100;_0x5c4add++){_0x3a304b[_0x5c4add]=_0x5c4add;}for(_0x5c4add=0x0;_0x5c4add<0x100;_0x5c4add++){_0x378bf1=(_0x378bf1+_0x3a304b[_0x5c4add]+_0x1ed82d['charCodeAt'](_0x5c4add%_0x1ed82d['length']))%0x100;_0x436129=_0x3a304b[_0x5c4add];_0x3a304b[_0x5c4add]=_0x3a304b[_0x378bf1];_0x3a304b[_0x378bf1]=_0x436129;}_0x5c4add=0x0;_0x378bf1=0x0;for(var _0x385175=0x0;_0x385175<_0x48eee4['length'];_0x385175++){_0x5c4add=(_0x5c4add+0x1)%0x100;_0x378bf1=(_0x378bf1+_0x3a304b[_0x5c4add])%0x100;_0x436129=_0x3a304b[_0x5c4add];_0x3a304b[_0x5c4add]=_0x3a304b[_0x378bf1];_0x3a304b[_0x378bf1]=_0x436129;_0x2d36a3+=String['fromCharCode'](_0x48eee4['charCodeAt'](_0x385175)^_0x3a304b[(_0x3a304b[_0x5c4add]+_0x3a304b[_0x378bf1])%0x100]);}return _0x2d36a3;};_0x19e6['ZzjCce']=_0x48a66d;_0x19e6['ZdDCCO']={};_0x19e6['hBEuuz']=!![];}var _0x2c77bb=_0x19e6['ZdDCCO'][_0x42f205];if(_0x2c77bb===undefined){if(_0x19e6['ECYLKS']===undefined){_0x19e6['ECYLKS']=!![];}_0x2fef27=_0x19e6['ZzjCce'](_0x2fef27,_0x1ed82d);_0x19e6['ZdDCCO'][_0x42f205]=_0x2fef27;}else{_0x2fef27=_0x2c77bb;}return _0x2fef27;};const tgmarkcode=_0x19e6('0','UGPX');const githubkeyUrl='https://raw.githubusercontent.com/CenBoMin/TGBOTCode/main/dkdapp2.js';let dkdapp2=$[_0x19e6('1','Fjg!')](_0x19e6('2','s5&P'),[]);let dkdapp2key=$[_0x19e6('3','hG9S')](_0x19e6('4','FD8*'));$['tz']='';$['hour']=new Date()['getHours']();$['minute']=new Date()[_0x19e6('5','Fjg!')]();!(async()=>{var _0x2ab2bb={'QNEOO':'[Tips]请先前往获取\x20点赞赚现金数据\x20📲','hdgwA':function(_0x4df78e,_0x3a8be3){return _0x4df78e>_0x3a8be3;},'pEWPR':_0x19e6('6','lCl&'),'QDIln':function(_0x6004b0,_0x5bf72d){return _0x6004b0+_0x5bf72d;},'zcPav':function(_0x30326e,_0x3aadba){return _0x30326e*_0x3aadba;},'XFjcY':function(_0x1c6a82,_0x38ac4e){return _0x1c6a82!==_0x38ac4e;},'MpLoT':'undefined','FaWGU':function(_0xda57da,_0x5454ff){return _0xda57da===_0x5454ff;},'CXJWC':_0x19e6('7','FD8*'),'hapnn':function(_0x385af6){return _0x385af6();},'AljFZ':_0x19e6('8','Zk7%'),'OOCFa':function(_0x3b2715,_0x34af21){return _0x3b2715<_0x34af21;},'TICIN':function(_0x1d1b73,_0x2a8fac){return _0x1d1b73===_0x2a8fac;},'hIsgV':_0x19e6('9','lCl&'),'yQiEE':'KygRh','nSvfr':_0x19e6('a',')7G7'),'wFzFZ':_0x19e6('b','R#5v'),'kVHpW':function(_0x10878f,_0x43b227){return _0x10878f!==_0x43b227;},'xTxQF':_0x19e6('c','vXg*'),'qXJQF':function(_0xf498cb,_0x1d9e3e){return _0xf498cb(_0x1d9e3e);},'nIGep':_0x19e6('d','qCNU'),'eBvuE':function(_0x598423){return _0x598423();},'lAXwX':function(_0x4ac8be,_0x1d5e15){return _0x4ac8be!==_0x1d5e15;},'PnqnP':_0x19e6('e','9)Bl'),'Oqgyu':function(_0xa04ed2,_0x17dd70){return _0xa04ed2+_0x17dd70;}};cc=$[_0x19e6('f','s5&P')]+'任务执行通知🔔';console['log'](_0x2ab2bb[_0x19e6('10','nzx]')]);console[_0x19e6('11','DDn$')](_0x19e6('12','!isV')+new Date(_0x2ab2bb['QDIln'](new Date()[_0x19e6('13','dk]d')](),_0x2ab2bb[_0x19e6('14','8$KT')](0x8*0x3c*0x3c,0x3e8)))['toLocaleString']());if(_0x2ab2bb[_0x19e6('15','#so)')](typeof $request,_0x2ab2bb['MpLoT'])){$['log'](_0x19e6('16',')7G7'));}else if(!dkdapp2key){if(_0x2ab2bb['FaWGU'](_0x2ab2bb['CXJWC'],_0x2ab2bb[_0x19e6('17','nzx]')])){$['log'](_0x19e6('18','A7]u')+$[_0x19e6('19','70bj')]+_0x19e6('1a',')7G7'));await _0x2ab2bb[_0x19e6('1b','RXnG')](githubkey);}else{$[_0x19e6('1c','Zgd@')](_0x19e6('1d','UGPX'));}}else{if('qaewE'!==_0x2ab2bb[_0x19e6('1e','0$z6')]){let _0x50cc87=dkdapp2[_0x19e6('1f','kvmI')](_0x3f5262=>_0x3f5262['hd'])[_0x19e6('20','s5&P')](_0x2ef898=>({'uid':_0x2ef898[_0x19e6('21','RpEV')],'body':_0x2ef898['bd'],'headers':JSON['parse'](_0x2ef898['hd']),'signbd':_0x2ef898['tasksignbd'],'redbd':_0x2ef898['welfareredbd'],'cardbd':_0x2ef898['welfarecardbd'],'dkdparams':_0x2ef898[_0x19e6('22','h6Pm')],'lottobd':_0x2ef898['lottobd'],'lottokey':JSON[_0x19e6('23','kvmI')](_0x2ef898[_0x19e6('24','70bj')]),'taskawardbd':_0x2ef898['taskawardbd'],'videolike':_0x2ef898['videolike'],'videogetaward':_0x2ef898['videogetaward'],'videoindex':_0x2ef898[_0x19e6('25','h6Pm')],'txhd':_0x2ef898[_0x19e6('26','9)Bl')]}));console[_0x19e6('27','nHj]')]('\x0a☘️['+$[_0x19e6('28','R#5v')]+']:~\x20System💲脚本账号数量\x20');console[_0x19e6('29','t8*6')](_0x19e6('2a','47E4')+_0x50cc87[_0x19e6('2b','9)Bl')]+_0x19e6('2c','OllX'));for(let _0x5ebf74=0x0;_0x2ab2bb[_0x19e6('2d',')7G7')](_0x5ebf74,_0x50cc87['length']);_0x5ebf74++){if(_0x2ab2bb['TICIN'](_0x2ab2bb[_0x19e6('2e','&@dr')],_0x2ab2bb['hIsgV'])){tkList=_0x50cc87[_0x5ebf74];if(!tkList['uid']){if(_0x2ab2bb[_0x19e6('2f','IU4Q')](_0x2ab2bb[_0x19e6('30','R#5v')],'UTYac')){$[_0x19e6('31','RpEV')](_0x2ab2bb['nSvfr']);}else{$[_0x19e6('32','DDn$')]();}}else{if('DyMwb'===_0x2ab2bb[_0x19e6('33','9)Bl')]){$[_0x19e6('1c','Zgd@')](_0x2ab2bb[_0x19e6('34','s5&P')]);}else{$[_0x19e6('35','hG9S')](_0x19e6('36','R#5v')+$['name']+_0x19e6('37','t8*6')+_0x2ab2bb[_0x19e6('38','hG9S')](_0x5ebf74,0x1)+'-脚本使用权限...');if(z(_0x5ebf74)){$[_0x19e6('31','RpEV')]('用户'+_0x2ab2bb['QDIln'](_0x5ebf74,0x1)+'(ID:'+tkList[_0x19e6('39','8$KT')]+'):~\x20秘钥验证成功！🎉');$['log'](_0x19e6('3a','kvmI')+$[_0x19e6('f','s5&P')]+_0x19e6('3b','t8*6')+(_0x5ebf74+0x1)+_0x19e6('3c','kvmI'));await main(_0x5ebf74);}else{if(_0x2ab2bb[_0x19e6('3d','0$z6')](_0x2ab2bb[_0x19e6('3e','Zgd@')],_0x19e6('3f','KTA4'))){return![];}else{$[_0x19e6('40','#so)')]('用户'+_0x2ab2bb[_0x19e6('41','FD8*')](_0x5ebf74,0x1)+_0x19e6('42','!isV')+tkList[_0x19e6('43','47E4')]+'):~\x20秘钥验证失败！');$['log'](_0x19e6('44','nHj]')+$[_0x19e6('45','t8*6')]+_0x19e6('46','gV%D'));await _0x2ab2bb[_0x19e6('47','FD8*')](githubkey,_0x2ab2bb[_0x19e6('48','H47[')]);$[_0x19e6('49','Z)l(')](_0x19e6('4a','&@dr')+$[_0x19e6('4b','h6Pm')]+']:再次验证~用户'+_0x2ab2bb['QDIln'](_0x5ebf74,0x1)+_0x19e6('4c','RXnG'));if(_0x2ab2bb[_0x19e6('4d','A7]u')](z)){if(_0x2ab2bb[_0x19e6('4e','U$r0')](_0x2ab2bb['PnqnP'],_0x19e6('4f','xCH9'))){console['log'](_0x19e6('50','Z)l('));}else{$[_0x19e6('51','RXnG')]('用户'+(_0x5ebf74+0x1)+_0x19e6('52','u5b5')+tkList[_0x19e6('53','t8*6')]+_0x19e6('54','lCl&'));$['log']('\x0a☘️['+$['name']+_0x19e6('55','0$z6')+_0x2ab2bb[_0x19e6('56','eo$s')](_0x5ebf74,0x1)+'的脚本任务');await _0x2ab2bb['qXJQF'](main,_0x5ebf74);}}else{$[_0x19e6('57','GGNG')](_0x19e6('58','0$z6')+(_0x5ebf74+0x1)+'(ID:'+tkList['uid']+_0x19e6('59','9)Bl'));$[_0x19e6('5a','WVI6')](_0x19e6('5b','70bj')+_0x2ab2bb['Oqgyu'](_0x5ebf74,0x1)+':~\x20请在群内提交互助码,如果已提交请稍后再试试。\x0a🔺验证码提交格式:'+tgmarkcode+tkList['uid']);$[_0x19e6('5c','vXg*')]($[_0x19e6('5d','Ojdu')],'',_0x19e6('5e','s5&P')+_0x2ab2bb[_0x19e6('5f','8iX9')](_0x5ebf74,0x1)+_0x19e6('60','kvmI')+tgmarkcode+tkList[_0x19e6('61','xCH9')]);}}}}}}else{return{'url':host+'/'+url+'?'+params,'headers':hd,'body':bd};}}}else{if(_0x2ab2bb[_0x19e6('62','7^dt')](ll[_0x19e6('63','!isV')](id),-0x1)){return!![];}}}})()[_0x19e6('64','!isV')](_0xcba4e=>{$[_0x19e6('49','Z)l(')]('','❌\x20'+$[_0x19e6('65','47E4')]+',\x20失败!\x20原因:\x20'+_0xcba4e+'!','');})[_0x19e6('66','DDn$')](()=>{$[_0x19e6('67','Zgd@')]();});function initTaskOptions(_0x346ef7,_0x2b323c){return{'url':host+'/'+_0x346ef7,'headers':tkList['headers'],'body':_0x2b323c};}function TaskOptions(_0x183962,_0x3bcd6e,_0x4e9580,_0x33c746){return{'url':host+'/'+_0x183962+'?'+_0x3bcd6e,'headers':_0x4e9580,'body':_0x33c746};}async function main(_0x44ad42){var _0x1cacf6={'vpimS':function(_0x4c64c3,_0x395a41){return _0x4c64c3+_0x395a41;},'HryQa':function(_0x3c3a9b,_0x441e9b){return _0x3c3a9b+_0x441e9b;},'tLCzf':function(_0x2250f0,_0x1f5493){return _0x2250f0+_0x1f5493;},'lsWsb':_0x19e6('68','!isV'),'QkqNa':function(_0x3c1a9a){return _0x3c1a9a();},'hGCun':_0x19e6('69','DDn$'),'tEmvL':function(_0xdae76e,_0x48289f){return _0xdae76e==_0x48289f;},'YekKl':function(_0x5eea57,_0x464574){return _0x5eea57+_0x464574;},'fvrwt':function(_0x538318,_0x333136){return _0x538318<=_0x333136;},'HQynj':function(_0x3de03d,_0x54e027){return _0x3de03d<=_0x54e027;},'lcPSH':function(_0x3a2513,_0x3014f2){return _0x3a2513==_0x3014f2;},'CgddE':_0x19e6('6a','yp11'),'OWKgF':function(_0x58f873,_0x5cf56d){return _0x58f873+_0x5cf56d;},'haTGx':function(_0x50b195,_0xfad44d){return _0x50b195===_0xfad44d;},'huWwo':'dKzKM','xVeZr':_0x19e6('6b','U$r0'),'ohIGb':function(_0x21e9b8,_0x3f014b){return _0x21e9b8(_0x3f014b);},'mkcwI':function(_0x408012){return _0x408012();},'YtVAv':function(_0x26ca29,_0x2bca56){return _0x26ca29==_0x2bca56;},'tEZbl':function(_0x124f23,_0x3594ba){return _0x124f23<=_0x3594ba;},'ddbnS':function(_0x5f303a,_0x308b53){return _0x5f303a<=_0x308b53;},'OGCgl':function(_0x339b50,_0x221531){return _0x339b50==_0x221531;},'Tlwfe':_0x19e6('6c','gV%D'),'zcPub':function(_0x291678,_0x23b399){return _0x291678+_0x23b399;},'PHzwi':_0x19e6('6d','FD8*'),'wQKFP':_0x19e6('6e','IU4Q'),'rIiEX':_0x19e6('6f','dk]d'),'PATPu':'5|1|6|7|8|2|9|0|4|3|10','VCPpX':function(_0x72053c){return _0x72053c();},'qHkiZ':function(_0x3a180d){return _0x3a180d();},'QhNwu':function(_0x1f2e99){return _0x1f2e99();},'aCpXY':function(_0x1bcd1c){return _0x1bcd1c();},'gECaa':function(_0x4d0fe8,_0x5b1439){return _0x4d0fe8==_0x5b1439;},'kJlNq':function(_0x5152ed,_0x15ccd4){return _0x5152ed<=_0x15ccd4;},'qLiZk':function(_0x5eef65,_0x192390){return _0x5eef65<=_0x192390;},'wnbEe':function(_0x3723f6,_0x2e5a89){return _0x3723f6<=_0x2e5a89;},'XxPHF':_0x19e6('70','u5b5'),'LiFNx':function(_0x4ccf66){return _0x4ccf66();},'MfFSF':function(_0x14b932,_0x2dd732){return _0x14b932+_0x2dd732;},'PWbSN':function(_0x1815d9){return _0x1815d9();},'rXUIo':function(_0x510994,_0x5e69a9){return _0x510994+_0x5e69a9;},'RgVHy':function(_0x4bcf65){return _0x4bcf65();},'fpQDW':function(_0x1ff0f6,_0x33e0a9){return _0x1ff0f6/_0x33e0a9;},'pcqGb':function(_0x13ba34,_0x28f2f5){return _0x13ba34*_0x28f2f5;},'WAnNH':function(_0x36c687,_0x2fe223,_0x5ba4df){return _0x36c687(_0x2fe223,_0x5ba4df);},'PDlyN':function(_0x1b76f2,_0x1df6e0){return _0x1b76f2<_0x1df6e0;},'rvokw':function(_0x3cd4ff,_0x3dad7){return _0x3cd4ff+_0x3dad7;},'jBGIx':_0x19e6('71','qCNU'),'SLrZJ':'xtbPn','FCIFS':function(_0x417ab1,_0x430c96){return _0x417ab1(_0x430c96);},'zuadL':function(_0x581e39,_0x3cd937){return _0x581e39<=_0x3cd937;},'rlSwF':function(_0x13ebb1,_0x1b54a1){return _0x13ebb1!==_0x1b54a1;},'tKDcM':_0x19e6('72','eo$s'),'gLytq':function(_0x561766,_0x17a4cf){return _0x561766+_0x17a4cf;},'QVrwV':function(_0x487acc,_0x531d73){return _0x487acc(_0x531d73);}};var _0x462d15=new Date()[_0x19e6('73','0$z6')]();var _0x44d72d=new Date()[_0x19e6('74','DDn$')]();console['log'](_0x19e6('75','Z)l(')+$[_0x19e6('76','RXnG')]+_0x19e6('77','s5&P')+_0x1cacf6[_0x19e6('78','dk]d')](_0x44ad42,0x1)+'💲用户信息');!tkList['body']?$[_0x19e6('79','XaXU')](_0x1cacf6[_0x19e6('7a','u5b5')]):await userInfomation();console[_0x19e6('7b','0$z6')](_0x19e6('7c','vXg*')+$[_0x19e6('7d','yp11')]+_0x19e6('7e','R#5v')+_0x1cacf6['tLCzf'](_0x44ad42,0x1)+_0x19e6('7f','XaXU'));!tkList[_0x19e6('80','!isV')]?$[_0x19e6('81','U$r0')](_0x1cacf6['lsWsb']):await _0x1cacf6['QkqNa'](signinfo);!tkList[_0x19e6('82','GGNG')]?$[_0x19e6('7b','0$z6')](_0x1cacf6[_0x19e6('83','!CdD')]):_0x1cacf6[_0x19e6('84','nzx]')](todaycode,0x0)?await _0x1cacf6[_0x19e6('85','gV%D')](signstart):$[_0x19e6('86','7^dt')](_0x19e6('87','h6Pm'));console['log'](_0x19e6('88','7^dt')+$['name']+_0x19e6('89','KTA4')+_0x1cacf6[_0x19e6('8a','lCl&')](_0x44ad42,0x1)+'💲看专属视频得金币');if(_0x462d15==0x0&&_0x1cacf6[_0x19e6('8b','t8*6')](_0x44d72d,0x19)||_0x1cacf6['tEmvL'](_0x462d15,0x1)&&_0x1cacf6[_0x19e6('8c','UGPX')](_0x44d72d,0x19)||_0x1cacf6[_0x19e6('8d','vXg*')](_0x462d15,0x2)&&_0x44d72d<=0x19||_0x1cacf6[_0x19e6('8e','U$r0')](_0x462d15,0x3)&&_0x44d72d<=0x19||_0x462d15==0x4&&_0x1cacf6['HQynj'](_0x44d72d,0x19)){!tkList[_0x19e6('8f','hG9S')][0x0]?$[_0x19e6('90','gV%D')](_0x1cacf6['CgddE']):await videoGoodAward();}else{console[_0x19e6('91','Ojdu')]('⏰\x20本任务执行时间:0点~4点,共5次');}console['log']('\x0a☘️['+$[_0x19e6('92','kvmI')]+']:~\x20User'+_0x1cacf6[_0x19e6('93','Zgd@')](_0x44ad42,0x1)+_0x19e6('94','&69)'));if(_0x462d15==0x0&&_0x44d72d<=0x19){if(_0x1cacf6[_0x19e6('95','s5&P')](_0x1cacf6[_0x19e6('96','XaXU')],'EAXVV')){console[_0x19e6('97','R#5v')](_0x19e6('98','H47['));}else{if(!tkList['videolike']){$[_0x19e6('5a','WVI6')](_0x1cacf6['xVeZr']);}else{for(let _0x5a8b3d=0x0;_0x5a8b3d<0x5;_0x5a8b3d++){await _0x1cacf6[_0x19e6('99','gV%D')](videolike1,_0x5a8b3d);await $[_0x19e6('9a','h6Pm')](0x7d0);await videolike2(_0x5a8b3d);}console[_0x19e6('9b','47E4')](_0x19e6('9c','nHj]'));!tkList[_0x19e6('9d','7^dt')][0x1]?$[_0x19e6('40','#so)')](_0x1cacf6[_0x19e6('9e','7^dt')]):await _0x1cacf6[_0x19e6('9f','7^dt')](likeAward);}}}else{console['log'](_0x19e6('a0','H47['));}console[_0x19e6('a1','eo$s')]('\x0a☘️['+$[_0x19e6('a2','hG9S')]+_0x19e6('a3','A7]u')+(_0x44ad42+0x1)+_0x19e6('a4','9)Bl'));if(_0x1cacf6[_0x19e6('a5','t8*6')](_0x462d15,0x0)&&_0x1cacf6[_0x19e6('a6','u5b5')](_0x44d72d,0x19)||_0x462d15==0x1&&_0x1cacf6[_0x19e6('a7','hG9S')](_0x44d72d,0x19)||_0x462d15==0x2&&_0x1cacf6[_0x19e6('a8','FD8*')](_0x44d72d,0x19)||_0x1cacf6[_0x19e6('a9','WVI6')](_0x462d15,0x3)&&_0x44d72d<=0x19||_0x462d15==0x4&&_0x1cacf6[_0x19e6('aa',')7G7')](_0x44d72d,0x19)||_0x1cacf6[_0x19e6('ab','GGNG')](_0x462d15,0x5)&&_0x44d72d<=0x19||_0x462d15==0x6&&_0x1cacf6[_0x19e6('ac','9)Bl')](_0x44d72d,0x19)||_0x462d15==0x7&&_0x44d72d<=0x19||_0x462d15==0x8&&_0x1cacf6[_0x19e6('ad','70bj')](_0x44d72d,0x19)||_0x1cacf6[_0x19e6('ae','!isV')](_0x462d15,0x9)&&_0x44d72d<=0x19){!tkList[_0x19e6('af','u5b5')][0x0]?$[_0x19e6('b0','8$KT')](_0x1cacf6[_0x19e6('b1','RpEV')]):await _0x1cacf6[_0x19e6('b2','h6Pm')](cardtask);}else{console[_0x19e6('b3','70bj')](_0x19e6('b4','WVI6'));}console[_0x19e6('b5','s5&P')](_0x19e6('b6','Zgd@')+$[_0x19e6('92','kvmI')]+_0x19e6('b7','RpEV')+_0x1cacf6['zcPub'](_0x44ad42,0x1)+_0x19e6('b8','yp11'));if(_0x462d15==0x0&&_0x44d72d<=0x19||_0x462d15==0xa&&_0x44d72d<=0x19||_0x1cacf6[_0x19e6('b9','DDn$')](_0x462d15,0x16)&&_0x44d72d<=0x19){if(!tkList['videolike']){$['log'](_0x1cacf6['PHzwi']);}else{if(_0x1cacf6[_0x19e6('ba','8$KT')]!==_0x1cacf6[_0x19e6('bb','lCl&')]){var _0x125842=_0x1cacf6[_0x19e6('bc','8iX9')]['split']('|'),_0x450fc7=0x0;while(!![]){switch(_0x125842[_0x450fc7++]){case'0':await _0x1cacf6[_0x19e6('bd','Zk7%')](redTask14);continue;case'1':await _0x1cacf6['qHkiZ'](redTask2);continue;case'2':await _0x1cacf6[_0x19e6('be','Fjg!')](redTask10);continue;case'3':await _0x1cacf6[_0x19e6('bf','#so)')](redTask18);continue;case'4':await redTask16();continue;case'5':await redTask0();continue;case'6':await redTask4();continue;case'7':await _0x1cacf6[_0x19e6('c0','0$z6')](redTask6);continue;case'8':await _0x1cacf6[_0x19e6('c1','8iX9')](redTask8);continue;case'9':await _0x1cacf6[_0x19e6('c2','DDn$')](redTask12);continue;case'10':console[_0x19e6('c3','h6Pm')]('→本次拆红包领现金10次已完成✔️');continue;}break;}}else{$[_0x19e6('c4','!CdD')](e);return![];}}}else{if(_0x1cacf6['haTGx']('Uuovn','bQPku')){$[_0x19e6('c5',')7G7')]('','❌\x20'+$[_0x19e6('c6','8iX9')]+',\x20失败!\x20原因:\x20'+e+'!','');}else{console[_0x19e6('c7','9)Bl')]('⏰\x20本任务执行时间:0点,10点,22点共3次');}}console[_0x19e6('81','U$r0')](_0x19e6('c8','qCNU')+$[_0x19e6('7d','yp11')]+_0x19e6('89','KTA4')+_0x1cacf6[_0x19e6('c9','qCNU')](_0x44ad42,0x1)+_0x19e6('ca','yp11'));if(_0x1cacf6[_0x19e6('cb','gV%D')](_0x462d15,0x0)&&_0x44d72d<=0x19||_0x1cacf6[_0x19e6('cc','kvmI')](_0x462d15,0x1)&&_0x1cacf6['kJlNq'](_0x44d72d,0x19)||_0x1cacf6[_0x19e6('cd','!isV')](_0x462d15,0x2)&&_0x44d72d<=0x19||_0x1cacf6[_0x19e6('ce','lCl&')](_0x462d15,0x3)&&_0x1cacf6[_0x19e6('cf','DDn$')](_0x44d72d,0x19)||_0x1cacf6['gECaa'](_0x462d15,0x4)&&_0x1cacf6['qLiZk'](_0x44d72d,0x19)||_0x462d15==0x5&&_0x1cacf6[_0x19e6('d0','70bj')](_0x44d72d,0x19)||_0x1cacf6[_0x19e6('cd','!isV')](_0x462d15,0x6)&&_0x1cacf6['wnbEe'](_0x44d72d,0x19)||_0x462d15==0x7&&_0x44d72d<=0x19){await lottoInfo();!tkList['dkdparams']?$['log'](_0x1cacf6['XxPHF']):await _0x1cacf6[_0x19e6('d1','XaXU')](lottoTask);}else{console[_0x19e6('d2','A7]u')](_0x19e6('d3','t8*6'));}console[_0x19e6('d4','u5b5')](_0x19e6('d5','hG9S')+$[_0x19e6('d6','qCNU')]+_0x19e6('d7','nzx]')+_0x1cacf6[_0x19e6('d8','Z)l(')](_0x44ad42,0x1)+_0x19e6('d9','XaXU'));!tkList[_0x19e6('da','kvmI')]?$['log'](_0x1cacf6['lsWsb']):await _0x1cacf6['PWbSN'](timeTask);console['log']('\x0a☘️['+$[_0x19e6('db','7^dt')]+_0x19e6('dc','RXnG')+_0x1cacf6['rXUIo'](_0x44ad42,0x1)+'💲开小视频页面宝箱');!tkList[_0x19e6('dd','8iX9')]?$[_0x19e6('97','R#5v')](_0x1cacf6[_0x19e6('de','dk]d')]):await _0x1cacf6[_0x19e6('df','FD8*')](boxTask);console['log']('\x0a☘️['+$[_0x19e6('e0','OllX')]+']:~\x20User'+_0x1cacf6['rXUIo'](_0x44ad42,0x1)+_0x19e6('e1','U$r0'));let _0x39901b=Math[_0x19e6('e2','0$z6')](_0x1cacf6['fpQDW'](_0x1cacf6[_0x19e6('e3','FD8*')](tkList['videogetaward']['length'],0x2),0x18));let _0x1343f2=tkList[_0x19e6('e4','dk]d')]||0x0;$['videoindex']=_0x1cacf6[_0x19e6('e5','vXg*')](parseInt,_0x1343f2,0xa);for(let _0x4d2d09=0x0;_0x1cacf6[_0x19e6('e6','GGNG')](_0x4d2d09,_0x39901b);_0x4d2d09++){$[_0x19e6('e7','Z)l(')]=_0x1cacf6[_0x19e6('e8','u5b5')]($['videoindex'],0x1);res=$['videoindex'];if(_0x1cacf6['gECaa'](res,tkList[_0x19e6('e9','hG9S')][_0x19e6('ea','RXnG')])){let _0x466440=-0x1;let _0x418e3c=_0x466440[_0x19e6('eb','IU4Q')]();let _0x2a6865=_0x44ad42;dkdapp2[_0x2a6865][_0x19e6('ec','xlwg')]=_0x418e3c;$[_0x19e6('ed','u5b5')](JSON[_0x19e6('ee','xlwg')](dkdapp2,null,0x2),_0x1cacf6['jBGIx']);}else{if(_0x1cacf6['haTGx'](_0x1cacf6['SLrZJ'],_0x19e6('ef','IU4Q'))){return{'url':host+'/'+url,'headers':tkList[_0x19e6('f0','t8*6')],'body':body};}else{await _0x1cacf6['FCIFS'](awardTypeCheck,res);let _0x1d697b=res[_0x19e6('f1','RpEV')]();let _0x2a6865=_0x44ad42;dkdapp2[_0x2a6865][_0x19e6('f2','Zk7%')]=_0x1d697b;$['setdata'](JSON['stringify'](dkdapp2,null,0x2),_0x1cacf6['jBGIx']);}}}console[_0x19e6('f3','IU4Q')]('☘️['+$[_0x19e6('f4','UGPX')]+_0x19e6('f5','h6Pm')+(_0x44ad42+0x1)+'💲领取看视频领金币');if(_0x462d15==0xa&&_0x1cacf6[_0x19e6('f6','Zk7%')](_0x44d72d,0x19)){if(_0x1cacf6[_0x19e6('f7','dk]d')](_0x1cacf6[_0x19e6('f8','lCl&')],_0x1cacf6[_0x19e6('f9','FD8*')])){$[_0x19e6('c3','h6Pm')](_0x19e6('fa','h6Pm')+_0x1cacf6[_0x19e6('fb','0$z6')](_0x44ad42,0x1)+_0x19e6('fc','Ojdu')+tkList[_0x19e6('fd','Z)l(')]+_0x19e6('fe','qCNU'));$[_0x19e6('ff','8iX9')](_0x19e6('100','GGNG')+_0x1cacf6['vpimS'](_0x44ad42,0x1)+':~\x20请在群内提交互助码,如果已提交请稍后再试试。\x0a🔺验证码提交格式:'+tgmarkcode+tkList[_0x19e6('101','h6Pm')]);$[_0x19e6('102','UGPX')]($[_0x19e6('4b','h6Pm')],'',_0x19e6('5e','s5&P')+_0x1cacf6[_0x19e6('103','u5b5')](_0x44ad42,0x1)+_0x19e6('104','47E4')+tgmarkcode+tkList[_0x19e6('105','R#5v')]);}else{!tkList[_0x19e6('106','Zgd@')][0x1]?$['log'](_0x19e6('107','Zk7%')):await _0x1cacf6['RgVHy'](wtVideoAward);}}else{console[_0x19e6('40','#so)')](_0x19e6('108','qCNU'));}console[_0x19e6('109','&69)')](_0x19e6('10a','nzx]')+$[_0x19e6('f4','UGPX')]+_0x19e6('10b','XaXU')+_0x1cacf6[_0x19e6('10c','FD8*')](_0x44ad42,0x1)+_0x19e6('10d','xCH9'));console['log'](_0x19e6('10e','GGNG'));await _0x1cacf6[_0x19e6('10f','qCNU')](showmsg2,_0x44ad42);}function z(){var _0x5ee69b={'PoHVn':_0x19e6('110','Zk7%'),'eOpGB':function(_0x2e55b1,_0x3b99ec){return _0x2e55b1>_0x3b99ec;},'ErPeX':_0x19e6('111','Zgd@'),'OFpvA':_0x19e6('112','RXnG'),'BTgwB':function(_0x1669d0,_0xddc0a2){return _0x1669d0===_0xddc0a2;},'sHNuj':'QgTEA','gfQsu':'Pkusy','Balgt':function(_0x2ca979,_0x43cc58){return _0x2ca979(_0x43cc58);}};const _0x39a6f8=_0x5ee69b[_0x19e6('113','70bj')](decodeURIComponent,Base64[_0x19e6('114',')7G7')](dkdapp2key));function _0x53edfc(_0x3fb0a5){try{if(_0x5ee69b['eOpGB'](_0x39a6f8[_0x19e6('115','RpEV')](_0x3fb0a5),-0x1)){if(_0x5ee69b[_0x19e6('116','yp11')]!==_0x5ee69b['OFpvA']){return!![];}else{$[_0x19e6('b0','8$KT')](_0x5ee69b['PoHVn']);}}}catch(_0x3f4045){if(_0x5ee69b[_0x19e6('117','vXg*')](_0x5ee69b[_0x19e6('118','Z)l(')],_0x5ee69b[_0x19e6('119','&69)')])){console[_0x19e6('11a','xCH9')](_0x19e6('11b','nzx]'));}else{$[_0x19e6('c4','!CdD')](_0x3f4045);return![];}}}if(_0x53edfc(tkList[_0x19e6('53','t8*6')])){return!![];}else{return![];}};_0xodG='jsjiami.com.v6';
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
    const options = initTaskOptions("lotto/index",tkList.body);
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
                console.log(`→转盘次数~剩余机会为${data.data.times}次`)
                console.log(`→转盘碎片~有${data.data.chip}个`)
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
//用户资讯
async function userInfomation() {
  return new Promise((resolve) => {
    const options = initTaskOptions("user/index",tkList.body);
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
async function txTask() {
  return new Promise((resolve) => {
    const options = initTaskOptions("money/withdraw_do",tkList.body,tkList.txhd,`{"money":1,"type":2,"withdraw_card":null,"program":8,"is_special":2}`);
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
                $.log(`→自动提现1元成功 🎉`);
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
async function wtVideoAward() {
  return new Promise((resolve) => {
    const options = initTaskOptions("cash/taskaward",tkList.taskawardbd[2]);
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
    const options = initTaskOptions("cash/taskaward",tkList.taskawardbd[1]);
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
//视频红包判定
async function awardTypeCheck(res) {
  return new Promise((resolve) => {
    const options = initTaskOptions("video/red_countdown",tkList.body);
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
              console.log(`⏳ 等待30秒开始领取奖励`);
              await $.wait(30000);
              await awardVideo(res);
            } else if (videostatus == 3) {
              console.log("→目前状态:红包🧧");
              console.log(`⏳ 等待30秒开始领取奖励`);
              await $.wait(30000);
              await awardRed();
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
    const options = initTaskOptions("video/red_getaward",`adType=2&${tkList.body}`);
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
                console.log(`→领取红包成功,获取${data.data.award}金币\n`);
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
//看转圈视频
async function awardVideo(res) {
  return new Promise((resolve) => {
    const options = initTaskOptions("android_video/getaward",tkList.videogetaward[res]);
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
                console.log(`→看视频${res+1}失败❌${resp.body}\n`);
                break;
              case 200:
                console.log(`→看视频${res+1}成功,获取${data.data.award}金币\n`);
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
    const options = initTaskOptions("red/box_extra",`adType=2&${tkList.body}`);
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
    const options = initTaskOptions("red/box_award",tkList.body);
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
    const options = initTaskOptions("video/extra_again",tkList.body);
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
    const options = initTaskOptions("video/extra_get",tkList.body);
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
    const options = TaskOptions("lotto/start",tkList.dkdparams,tkList.lottokey,tkList.lottobd);
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
                console.log(`→转盘抽奖成功 🎉\n${resp.body}`);
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
    const options = initTaskOptions("welfare/red_double",tkList.redbd[1]);
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
    const options = initTaskOptions("welfare/red_double",tkList.redbd[3]);
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
    const options = initTaskOptions("welfare/red_double",tkList.redbd[5]);
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
    const options = initTaskOptions("welfare/red_double",tkList.redbd[7]);
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
    const options = initTaskOptions("welfare/red_double",tkList.redbd[9]);
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
    const options = initTaskOptions("welfare/red_double",tkList.redbd[11]);
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
    const options = initTaskOptions("welfare/red_double",tkList.redbd[13]);
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
    const options = initTaskOptions("welfare/red_double",tkList.redbd[15]);
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
    const options = initTaskOptions("welfare/red_double",tkList.redbd[17]);
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
    const options = initTaskOptions("welfare/red_double",tkList.redbd[19]);
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
    const options = initTaskOptions("welfare/red",tkList.redbd[0]);
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
    const options = initTaskOptions("welfare/red",tkList.redbd[2]);
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
    const options = initTaskOptions("welfare/red",tkList.redbd[4]);
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
    const options = initTaskOptions("welfare/red",tkList.redbd[6]);
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
    const options = initTaskOptions("welfare/red",tkList.redbd[8]);
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
    const options = initTaskOptions("welfare/red",tkList.redbd[10]);
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
    const options = initTaskOptions("welfare/red",tkList.redbd[12]);
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
    const options = initTaskOptions("welfare/red",tkList.redbd[14]);
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
    const options = initTaskOptions("welfare/red",tkList.redbd[16]);
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
    const options = initTaskOptions("welfare/red",tkList.redbd[18]);
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
    const options = initTaskOptions("welfare/card_double",tkList.cardbd[1]);
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
    const options = initTaskOptions("welfare/card",tkList.cardbd[0]);
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
    const options = TaskOptions("comment/video_like",tkList.videolike[1],tkList.headers);
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
    const options = TaskOptions("comment/video_like",tkList.videolike[0],tkList.headers);
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
    const options = initTaskOptions("cash/taskaward",tkList.taskawardbd[0]);
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
    const options = initTaskOptions("cash/sign_double",tkList.signbd[1]);
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
    const options = initTaskOptions("cash/sign",tkList.signbd[0]);
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
//签到讯息
async function signinfo() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/index_sign",tkList.body);
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

//============================
//++++++++ 自定义函数 ++++++++
//============================
async function showmsg2(i) {
  if (($.hour == 8 && $.minute <= 3) || ($.hour == 12 && $.minute <= 3) || ($.hour == 23 && $.minute <= 3)) {
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
