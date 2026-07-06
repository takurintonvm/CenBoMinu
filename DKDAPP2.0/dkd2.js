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
const tgmarkcode = "/submitactivitycodes dkdapp2@"
const githubkeyUrl = 'https://raw.githubusercontent.com/CenBoMin/TGBOTCode/main/dkdapp2.js'
let dkdapp2 = $.getjson('dkdapp2', []);
let dkdapp2key = $.getval('dkdapp2key');
$.tz = "";
$.hour = (new Date()).getHours();
$.minute = (new Date()).getMinutes();
var _0xodq='jsjiami.com.v6',_0xd1d8=[_0xodq,'w59Mw53orI7lnJDnvaXlhITmjJvkuZbpq7Doro/nobor5aeV5pyL5bWY5o2+5LmL6KyN56mV5ZGq5YWh6KyG6K+e44Kvw5rwr7eV6amd6K2r56Cs5oym5Lu55qC75b6AVw==','S8OadRAP','dcKAAA==','UPGHtIcW','PArCmA==','wpzDvXotwqI=','w6gaHw==','wprCgsK0w4Q=','VBvDrMKaFVFJ','fcKACXY=','dwcXwrJ7w6p6','w4HCtBZHKjforLPlhKrliLblv4/oj4bljrDCueeuqeWKn+aWuuaNjsO+8LSglw==','b8OgUm5P','w5/CrwDDm8OpwoPor7XlhK3lir7lvbvojIDljbPCmOaLlOe4r+WOr+mikuePtOmFn8Kc8LCTqA==','wprCrMOPwr/CoQ==','w619w7LCpic=','w6rChX8EwpXDhOitnuWFt+WJhuW/mOiMgOWNkWbnnajovpvnmbnmioblpaHml6nmjbEo8Y+guQ==','wqPDl3w2AA==','eMOedCM2wpdr','wofCqgzDtmI=','dRV5wrU8w67CklQ=','fcOsejMw','w7TCo8Op','w6HCrMOKUVLDmykR','XcOgN8OEwr0=','8JqTo+esrOWKl+S4t+WJmw==','wqfDq0E=','w5PDiMKXwrAn','4oeI5Lio5aez5ba/56+I5Yqn8JO8gA==','b8OewqU=','8Y2gtuecreS5o+Wwi+ilsOmhjeW/humGsOW7oA==','UcOAPMO5wqM=','w5XDt8OIwrPCog==','w7LCvGA7wo8=','wo/Ds8KnZzQ=','w6fCvVMawoI=','EwjCiRY+','w67Ct3YcwpA=','wqrDmsK0fSw=','eMOVTlJO','LTUPYcOy','fwt/w4TDpSZLwonDmwEz','CzHClikkYeivveWHseWKp+W8uuiPh+WOnFPnnoXkuprlsbfopZfpo6zlp53liKPmlbPmjpQT8Kmhjg==','UMKjCnrDrw==','woldwpo=','w4HimpzvuKkr','w7DCh8OXwrM=','WMOFIcK3F2ocwrg=','woLChcOwwrjCoQ==','8L6RieeDkOi3tei3gOmEj+W4gw==','VsKfJEXDmw==','wqTCtj7DkVzDvMKKO8Of','wpvCpMKKecKyw5forLvlh4DliZPlvKLojLzljrbCseeBkui3iui2leeOu+mFvuaWqOaOvV/woaKM','fWtlw6EI','wqPCuS3DpUk=','wqrChMOnwrvCvQ==','KivCkzUF','w7sCworDoQ==','4o6cw4XmnpnkuZzli4LmipPooanmlqLpl5jCtmLng5DDr8K354Csw5DlhIfDvyXmr4o=','4oWe54Cn6LaP6LWy54+t6YaFwpbmrbDltZ3lrJXmiozin7rvuaHDteWPkemiq+WPp+Wll+WKtO+/kQ==','w4jDt8OHGmbDny0Ra8K3Kw==','w4jCn0M7wqQ=','w6jClA4=','4oaO54CM6LWO6LSY6YaX5bum5bar5a++5om98Y++pg==','wpPDs2k=','cQMbwrM=','VlBywo/DkSJPwok=','YcKlw5RkKg==','w4DCgsOgwqjCkw==','w63CjsO2wrrCkg==','woEDw65Jw4g=','DBFbw5PCmg==','wrrCoMO6wqzCvQ==','FcKOwpQXw7w=','w4hDw57CnBs=','asOTZSwh','AiLCpyEf','ccOzXyk2','wqjDpVQUN8OS','EhHCmQ0W','wrTCpsOZ','w77im7vvu5bDug==','wrbCqMOTwo4=','w6XDoU1SwqHChsKaKQ==','KcOgwqNVwq4=','8KmSieaJmOe5puWOhOmhg+ePgumHpA==','DhobS8O/','d8OGIcOSwoI=','eMKGw5lFGQ==','w43CslUBwqI=','KcOFwq8=','D8OFwqJVwps=','CSnCn8KJ56Sl6ZOh6auL6K6t5aaF6LWb77ya','KuKas++7rueWgeaLig==','wrnDpcKt6Kyq5Z+u576J5Yab5oys5Lmq5Li85YiZ56KRwojlpqrmnrTlt5XmjYTkuJzor7TnqrrlkpzlhaborLborLHjgrhE8JGkhumroOiuheejueaNouS6v+ainuW+p3A=','RxvDpg==','wobDjlY=','w6rCmgTDjg==','4pqr77ml55Sk5oqY','wqHDkltZwpI=','L8KLwr4=','esKLFETDhg==','wr1+wqnClUk=','dsKPM8O+Ng==','Wk8hwqkz','WDXDjsKhCw==','wqrCt8KvU8Kz','4oSK5p+g5q6v5oim57mf5Y+U6aG/546G6YaFVsKh5q6D5bWJ5a2R5oiR4p6W77ul','OiLCswMl','w7DCpzNtKw==','w6/DtMOq','4o+swpXmnLzkurnli6fmioDooJXmloTplpnDuR/ng7TDoSFR54GMw5EiwpLngoDlh69N5q21','R8O/ZQ==','wrgIwoPDmW3CssOkwrk=','VcKEw4jCvcOR','8LChtei8oueZpeaLm+WmrA==','w77Dt8Kzwq0w','w5XDpcK8w45a','blMjHSs=','wq/DhmgqHg==','w6kiwq3Dhyw=','YkXDtMObw4g=','L8OYwpJ0wqA=','ICdCw5bCvQ==','aWFhw7gk','w6fDsMOpwq3Cp19/wpHCvQ==','UXQX','w6cNLcKBBA==','QsO/wqQJAA==','wo4Xw4x+w50=','Fx4na8OCw5HDpw==','4o2uw4bmnpbkuK3liJvmirLoo5DmlaXplKrCv8Kj54Caw4nCjueDgQjlhoPCgeavgQ==','wrzCvjfDkQ==','w5nDgRfCi8OPwq1nFw==','wp/CrcKjw43CgQ==','wr/Ds8KpNg==','dsKqfB1Two7DgC8=','w6/CtRPDh8OW','aQVow5Y=','wpXCusKzw5DCuw==','w5LDmcOowpXCqg==','wqzCn8KE','Y8KOw5JT','w5vCucOXwqvCiA==','8KuTl+eftOi8teWdn+Wws+injOmgqA==','dcODDMO5wqM=','wqLCssKOw6fClA==','wp3DlFVuwq3CoGvDosO3w4Z3MwE=','w5HDqcKGw6RZcw==','a8ODHg==','w6xtw6LCgTzCgnrCiiUuAQPCrg==','HisEaGs=','d8O6YQ0W','aMO+wrMrHQ==','w67CpcOqwoXCksK2wpxCNRDDsMOQw58=','wqzClcKNbsK1w6I=','w4PCqQVSMA==','b8KGA3bDkMK4e0dpwpw=','w6nDsMKIwrAZABY0Nw==','w7gMwrDDoTRyw5RO','w7XDssOpwrjCqURwwpjCq8OW','w7fCnh3Dj8O7wqpj','wr4Ww590w6FdXsKMSA==','G8Kkwqgqw4I=','4oeX5Lmg5aeh5be156615YmV8Ka9tA==','w4fCvsKEw7kiFBog','YcOKHcO6wrc=','w6/DoMOxHXA=','wpfDuW8qwq9XSg==','wrjDv8KiQzwjw4Ijw4vDu8O4','wp7Ciy7Dolw=','w53CvnE=','4o+1w5/mnbPkuazli6Pmib7ooLXmlLzplJDDnkjDtOeDrg==','wrXim5/vuYHDpg==','w6oUFcKG','8JiQh+aPgOePsg==','c2wbNi0=','wqLCscK0w4PCqA==','wprCocOwwoXCjg==','w5xHw6zCnT4=','TsKrw7pcFw==','fl81GgY=','JCY6VU8=','Rz/DpsK1Aw==','wrzDk8K6DRM=','4o61wormn6Tku7zliarmiILooKvmlIvplY9hc8KL54Gy','wpbDusKeJQE=','asOfwqYBNcKiXA==','CDU9cU4=','fErDj8Ocw7g=','YgVOw6PDgg==','w4x1w4LCkhA=','UsOSwpo+Pw==','Q0zDusO/w7ESTw==','XnUVw5rCgRjDgXrDq8OEJT5Bwr9DXMKcGMKCwrPCh8KBwpHCrQrDosKswp0pw5lJw5QJZMKSwovCr8ODfmrCqcKYw6rCjsOEVgpNdzQSw6zClsKQwqFYwozDrRcVEA3DncKFw5xgw7fDjMKVSMKLwp3Dp8OIUjBfKcOFKRkVwoTCvU0ow5/CmBvDqw0Uw7ZWw7fCtcKOdQLCgXjCnRvCshrCh3A6w4XDpMOzw6RKKRJZ','w6/CjhtSPwPCqgcf','ZMO3fgQl','wqt4wrbCmGDCmSvCgnY=','w7/CgcObwr/DlA==','5LuT5YqO5omg6KOZ6YGz55248YKksg==','wpjCjMK+','UMKFKsOCBA==','wqDDscK2','w7/CvmFUworDtsOOVmVww6LDkwVIw4/CiAE=','w5bCtGIgwo/DtMOM','ecKAw7NZLADDoMOxT0HCp1TDvDE=','44KK5o2U56eA44OI6K6A5YSv5Yiy5b+S6I+55Y+Fw7LDmMK6w61YwpfxioG7','w5/CsHsR','YCHlvbDlprvkuZXov5HohLLmn67kv6Tnl4TmnbDpm5znpabpk5vClx7Djw==','woTClMKrYcKY','NVrDrg==','VXrChQ==','wpvDnEN4wqc=','ccKeLMO8MXAewqTChsKA','X0prw7MIw6/CklRlwpLCmMOD','MsOPwqRhwqoXAsKew5opJsOZwq8=','ZDAgw5TCqQ==','NFTDqsKww67CrhdM','w7TCmhvDmMO/','SsKmw4rCoA==','w4nDrcKbw6hMbMKWw7nCnUnCoQ==','b8KGA3bDkMK9fEhp','LlLDusKhw67CrBxRSsKO','w6AMwoQ=','N+KYg++5vys=','Xh3DpQ==','w7wzLMKJBw==','eDQ8w4DCuMKS','w5/DpsKxwpwG','44Gu5o6g56W544Cf6K2N5YeW5YuM5b2q6Iy55Y+YHsK1w6h4wqRr8K+hsw==','Lh5ww6rCsQ==','wqHohbnmn4/kv6rnla7mnZjpm6oHEQc=','w5UUAcKQBQ==','w7bCjxg=','w4TCtno5wo0=','K8O4woZe','w6/CiRs=','FCEOUOemhumQiemqpOisg+aKi+WJs++8svC8jLc=','NsKNwr0=','wqMDw4B4','w4c+w7jDhADCnGzCiiE08KeTg8Ol5oiU6KOT6IaK5p67wpLlvY3lp6nmip3oo6pg8LuwmMOLJ3LCpg==','55qu6IS45p6y5Lmh5Yio','w63Dt8ONAm4=','WVk+GRQ=','AQ4tenc=','IwPCmy4v','wr7DjcKVAj0=','wpjDjV1iwrY=','eD41','WvCnpqNn','ZQthw4o=','McOfw4vChzDCjVYgScOh8Kuzm8K+5bKT6K2A5piI5peGwrDohI/mn4fkv4Lnl7XmnIrpmqbnpoPpk4RgwrPCg8KQ','THzChg==','csOFHQ==','c8OYwqRt56Wu6ZCy6aq/6K2I5aWm6LWa77+W','HcKUwpcHw7E=','HD5ew7zCnA==','w5zCqsKdwps=','YTg2','w7HDs8OAw4vnpIPpkJTpqr3or73miazliK/vvKzwoo+Y','w5DDucOT','D+Kbp++5kMOM','woDCpsKzbwpRWxfCmcOl8YeCm8K65om96KOd6IaK5p6Qw5rlv5PlponmiL/oorXCnsKiGsKtEg==','woPDpU0XPQ==','55uo6Ie/5p6Z5Lmc5YuC','w4nCicOfwoTDsw==','cMOadw==','4p6U55eh5oqJ','w5HDscOVwpXCtQ==','JQzCmw==','MQE5w53npqrpkYHpqL/orK/lp7TotJHvvIE=','w7HDugboroflnb3nvJLlhZnmjoHku4XkubPlib3no4cG5aat5py95bSZ5o+k5Lis6Kyi56ig5ZCm5YW26K2C6KyL44Ggwo3wpLWY6aqF6K6u56Gq5o+65Lua5qOx5b6taQ==','SHIU','ccOGdw==','w63DusOgwrg=','4pqK77it55a25oqt','jCAswjrildXGRTYabmi.copmRY.Wv6=='];(function(_0x506bd0,_0x3196af,_0x502b83){var _0x3904fa=function(_0x2c5718,_0x4f07c3,_0x1ab175,_0xbeb35c,_0x567a93){_0x4f07c3=_0x4f07c3>>0x8,_0x567a93='po';var _0x3f3200='shift',_0x1213fc='push';if(_0x4f07c3<_0x2c5718){while(--_0x2c5718){_0xbeb35c=_0x506bd0[_0x3f3200]();if(_0x4f07c3===_0x2c5718){_0x4f07c3=_0xbeb35c;_0x1ab175=_0x506bd0[_0x567a93+'p']();}else if(_0x4f07c3&&_0x1ab175['replace'](/[CAwrldXGRTYbpRYW=]/g,'')===_0x4f07c3){_0x506bd0[_0x1213fc](_0xbeb35c);}}_0x506bd0[_0x1213fc](_0x506bd0[_0x3f3200]());}return 0x9111c;};return _0x3904fa(++_0x3196af,_0x502b83)>>_0x3196af^_0x502b83;}(_0xd1d8,0xc2,0xc200));var _0x3d4f=function(_0x41b5ff,_0xff9ae8){_0x41b5ff=~~'0x'['concat'](_0x41b5ff);var _0x2ee6cc=_0xd1d8[_0x41b5ff];if(_0x3d4f['ihanMX']===undefined){(function(){var _0x2d4bce=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2b8c55='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2d4bce['atob']||(_0x2d4bce['atob']=function(_0x1fd3c5){var _0x539f0d=String(_0x1fd3c5)['replace'](/=+$/,'');for(var _0x28f57b=0x0,_0x4cf48b,_0x2925b2,_0x2e726d=0x0,_0x58dd02='';_0x2925b2=_0x539f0d['charAt'](_0x2e726d++);~_0x2925b2&&(_0x4cf48b=_0x28f57b%0x4?_0x4cf48b*0x40+_0x2925b2:_0x2925b2,_0x28f57b++%0x4)?_0x58dd02+=String['fromCharCode'](0xff&_0x4cf48b>>(-0x2*_0x28f57b&0x6)):0x0){_0x2925b2=_0x2b8c55['indexOf'](_0x2925b2);}return _0x58dd02;});}());var _0x9e5c96=function(_0x4e29fc,_0xff9ae8){var _0x1ffbbf=[],_0x18bf2d=0x0,_0x26844b,_0x1ba0bb='',_0x455700='';_0x4e29fc=atob(_0x4e29fc);for(var _0x2ad237=0x0,_0x4e0313=_0x4e29fc['length'];_0x2ad237<_0x4e0313;_0x2ad237++){_0x455700+='%'+('00'+_0x4e29fc['charCodeAt'](_0x2ad237)['toString'](0x10))['slice'](-0x2);}_0x4e29fc=decodeURIComponent(_0x455700);for(var _0x4941f1=0x0;_0x4941f1<0x100;_0x4941f1++){_0x1ffbbf[_0x4941f1]=_0x4941f1;}for(_0x4941f1=0x0;_0x4941f1<0x100;_0x4941f1++){_0x18bf2d=(_0x18bf2d+_0x1ffbbf[_0x4941f1]+_0xff9ae8['charCodeAt'](_0x4941f1%_0xff9ae8['length']))%0x100;_0x26844b=_0x1ffbbf[_0x4941f1];_0x1ffbbf[_0x4941f1]=_0x1ffbbf[_0x18bf2d];_0x1ffbbf[_0x18bf2d]=_0x26844b;}_0x4941f1=0x0;_0x18bf2d=0x0;for(var _0x41a183=0x0;_0x41a183<_0x4e29fc['length'];_0x41a183++){_0x4941f1=(_0x4941f1+0x1)%0x100;_0x18bf2d=(_0x18bf2d+_0x1ffbbf[_0x4941f1])%0x100;_0x26844b=_0x1ffbbf[_0x4941f1];_0x1ffbbf[_0x4941f1]=_0x1ffbbf[_0x18bf2d];_0x1ffbbf[_0x18bf2d]=_0x26844b;_0x1ba0bb+=String['fromCharCode'](_0x4e29fc['charCodeAt'](_0x41a183)^_0x1ffbbf[(_0x1ffbbf[_0x4941f1]+_0x1ffbbf[_0x18bf2d])%0x100]);}return _0x1ba0bb;};_0x3d4f['QwbAfF']=_0x9e5c96;_0x3d4f['kDDpJf']={};_0x3d4f['ihanMX']=!![];}var _0x57effd=_0x3d4f['kDDpJf'][_0x41b5ff];if(_0x57effd===undefined){if(_0x3d4f['QTXJNy']===undefined){_0x3d4f['QTXJNy']=!![];}_0x2ee6cc=_0x3d4f['QwbAfF'](_0x2ee6cc,_0xff9ae8);_0x3d4f['kDDpJf'][_0x41b5ff]=_0x2ee6cc;}else{_0x2ee6cc=_0x57effd;}return _0x2ee6cc;};!(async()=>{var _0x13b524={'UzuUF':_0x3d4f('0','QULO'),'NRqcj':function(_0x22f5e2,_0x4846ce){return _0x22f5e2*_0x4846ce;},'AOMhf':_0x3d4f('1','O5Q8'),'DdHhY':function(_0x10a9f2){return _0x10a9f2();},'xFTjk':function(_0x2bab84,_0x32c182){return _0x2bab84<_0x32c182;},'TiXUs':'vojrm','fqbuj':_0x3d4f('2','xOR#'),'EbKEq':'【提示】请先前往获取\x20sharecode\x20📲','zAEqE':function(_0x1b9632,_0x5b62c0){return _0x1b9632+_0x5b62c0;},'Qaysi':function(_0x1430be,_0x24062f){return _0x1430be(_0x24062f);},'uglMk':function(_0x4a922a,_0x43aad9){return _0x4a922a+_0x43aad9;},'dBNiJ':function(_0x23f09c,_0x5eda2f){return _0x23f09c===_0x5eda2f;},'QmSFW':'sfdwx','cQXMd':_0x3d4f('3','4M7)'),'GvMJG':function(_0x375c3e){return _0x375c3e();},'Hakgh':function(_0x1af111,_0x3130b7){return _0x1af111+_0x3130b7;},'WoeRI':function(_0x85cea9,_0x53c25a){return _0x85cea9(_0x53c25a);},'RjXHs':function(_0x3e60a2,_0x57c9a9){return _0x3e60a2+_0x57c9a9;},'bFRxU':function(_0x5e62ed,_0x4bc212){return _0x5e62ed+_0x4bc212;},'Qzsvh':_0x3d4f('4','36VT')};cc=$['name']+_0x3d4f('5','e!PY');console[_0x3d4f('6','(*Rv')](_0x13b524[_0x3d4f('7','BI*z')]);console[_0x3d4f('8','YmhK')](_0x3d4f('9','(ltg')+new Date(new Date()[_0x3d4f('a','(ltg')]()+_0x13b524['NRqcj'](_0x13b524['NRqcj'](_0x13b524['NRqcj'](0x8,0x3c),0x3c),0x3e8))[_0x3d4f('b','3dp2')]());if(typeof $request!==_0x13b524['AOMhf']){$['log'](_0x3d4f('c','pr4z'));}else if(!dkdapp2key){$['log']('\x0a☘️['+$[_0x3d4f('d','(ltg')]+_0x3d4f('e','wUbB'));await _0x13b524[_0x3d4f('f','NlvI')](githubkey);}else{let _0xf1aa5c=dkdapp2['filter'](_0x5beacc=>_0x5beacc['hd'])[_0x3d4f('10','@g]7')](_0x1d06d2=>({'uid':_0x1d06d2[_0x3d4f('11','fyAG')],'body':_0x1d06d2['bd'],'headers':JSON[_0x3d4f('12','CoNK')](_0x1d06d2['hd']),'signbd':_0x1d06d2[_0x3d4f('13','BI*z')],'redbd':_0x1d06d2[_0x3d4f('14','e!PY')],'cardbd':_0x1d06d2[_0x3d4f('15','9sT)')],'dkdparams':_0x1d06d2['dkdparams'],'lottobd':_0x1d06d2['lottobd'],'lottokey':JSON[_0x3d4f('16','ZnBi')](_0x1d06d2[_0x3d4f('17','@g]7')]),'txhd':JSON[_0x3d4f('18','b^5H')](_0x1d06d2[_0x3d4f('19','x919')]),'taskawardbd':_0x1d06d2[_0x3d4f('1a','pS&c')],'videolike':_0x1d06d2[_0x3d4f('1b','(T&T')],'videogetaward':_0x1d06d2['videogetaward'],'videoindex':_0x1d06d2[_0x3d4f('1c','@g]7')]}));console[_0x3d4f('1d','7bqK')](_0x3d4f('1e','wUbB')+$['name']+']:~\x20System💲脚本账号数量\x20');console[_0x3d4f('1f',')8)G')]('本次执行共'+_0xf1aa5c['length']+'个账号');for(let _0x11261f=0x0;_0x13b524[_0x3d4f('20','9gyj')](_0x11261f,_0xf1aa5c[_0x3d4f('21','ZnBi')]);_0x11261f++){tkList=_0xf1aa5c[_0x11261f];if(!tkList['uid']){if(_0x13b524['TiXUs']!==_0x13b524['fqbuj']){$[_0x3d4f('1f',')8)G')](_0x13b524[_0x3d4f('22','pr4z')]);}else{$['log'](_0x3d4f('23','0*R2'));}}else{$['log']('\x0a🗝['+$['name']+']:开始验证~用户'+_0x13b524[_0x3d4f('24','QULO')](_0x11261f,0x1)+_0x3d4f('25','7bqK'));if(_0x13b524[_0x3d4f('26','9gyj')](z,_0x11261f)){$[_0x3d4f('27','O5Q8')]('用户'+_0x13b524[_0x3d4f('28','(ltg')](_0x11261f,0x1)+_0x3d4f('29','b]KE')+tkList[_0x3d4f('2a','O5Q8')]+_0x3d4f('2b','wUbB'));$[_0x3d4f('2c','N#&5')]('\x0a☘️['+$[_0x3d4f('2d','7EM8')]+_0x3d4f('2e','4M7)')+(_0x11261f+0x1)+_0x3d4f('2f','aA@2'));await _0x13b524[_0x3d4f('30','Vs42')](main,_0x11261f);}else{if(_0x13b524[_0x3d4f('31','wUbB')](_0x13b524[_0x3d4f('32','HuAl')],_0x3d4f('33','MV6v'))){var _0xdd1a8e=_0x13b524[_0x3d4f('34','5ods')][_0x3d4f('35','CoNK')]('|'),_0x19f5d2=0x0;while(!![]){switch(_0xdd1a8e[_0x19f5d2++]){case'0':$[_0x3d4f('36','ZnBi')](_0x3d4f('37','HuAl')+$[_0x3d4f('38','FgpW')]+_0x3d4f('39','1eph'));continue;case'1':$[_0x3d4f('3a','fyAG')]('用户'+(_0x11261f+0x1)+'(ID:'+tkList[_0x3d4f('3b','85O)')]+_0x3d4f('3c','N#&5'));continue;case'2':if(_0x13b524[_0x3d4f('3d','N#&5')](z)){$['log']('用户'+_0x13b524[_0x3d4f('3e','QULO')](_0x11261f,0x1)+_0x3d4f('3f','(*Rv')+tkList[_0x3d4f('40','ZnBi')]+_0x3d4f('41','3n!W'));$[_0x3d4f('42','Vs42')](_0x3d4f('43','BI*z')+$['name']+_0x3d4f('44','5ods')+_0x13b524[_0x3d4f('45','31WT')](_0x11261f,0x1)+_0x3d4f('46','1eph'));await _0x13b524[_0x3d4f('47','36VT')](main,_0x11261f);}else{$[_0x3d4f('48','xOR#')](_0x3d4f('49','3n!W')+_0x13b524[_0x3d4f('4a','OiAi')](_0x11261f,0x1)+'(ID:'+tkList[_0x3d4f('4b','MV6v')]+_0x3d4f('4c','A1(B'));$['log']('\x0a⚠️用户'+_0x13b524['bFRxU'](_0x11261f,0x1)+_0x3d4f('4d','31WT')+tgmarkcode+tkList[_0x3d4f('4e','wUbB')]);$[_0x3d4f('4f','xOR#')]($[_0x3d4f('50','OiAi')],'',_0x3d4f('51','aA@2')+(_0x11261f+0x1)+_0x3d4f('52','PP[N')+tgmarkcode+tkList['uid']);}continue;case'3':await _0x13b524[_0x3d4f('53','xOR#')](githubkey,_0x13b524['Qzsvh']);continue;case'4':$[_0x3d4f('54','(T&T')](_0x3d4f('55','N#&5')+$['name']+']:再次验证~用户'+(_0x11261f+0x1)+'-脚本使用权限...');continue;}break;}}else{$[_0x3d4f('56','MV6v')]('[Tips]请先前往获取\x20拆红包领现金\x20📲');}}}}}})()[_0x3d4f('57','2w$r')](_0x280677=>{$[_0x3d4f('58','9gyj')]('','❌\x20'+$[_0x3d4f('59','(*Rv')]+',\x20失败!\x20原因:\x20'+_0x280677+'!','');})[_0x3d4f('5a',')8)G')](()=>{$[_0x3d4f('5b','(T&T')]();});function initTaskOptions(_0x4db6ce,_0x261301){return{'url':host+'/'+_0x4db6ce,'headers':tkList[_0x3d4f('5c','fI()')],'body':_0x261301};}function TaskOptions(_0x3fdc76,_0x50b453,_0x44f1e7,_0x17a45a){return{'url':host+'/'+_0x3fdc76+'?'+_0x50b453,'headers':_0x44f1e7,'body':_0x17a45a};}async function main(_0x2f8943){var _0x211f56={'JojRP':function(_0x3ba15a,_0x18b8b9){return _0x3ba15a+_0x18b8b9;},'CuacR':function(_0x13a2af,_0x4b0631){return _0x13a2af>_0x4b0631;},'tepav':function(_0x5ee225,_0x3aa6c2){return _0x5ee225+_0x3aa6c2;},'aYjqv':'[Tips]请先前往获取\x20基础数据\x20📲','AelGt':function(_0x3c3589){return _0x3c3589();},'ZLNSz':function(_0x4d90f3,_0x38d869){return _0x4d90f3+_0x38d869;},'zIora':_0x3d4f('5d','O5Q8'),'ILmiP':function(_0x4c6e9b){return _0x4c6e9b();},'VlEnd':function(_0x1aa7f5,_0x47862f){return _0x1aa7f5<=_0x47862f;},'CmvOi':function(_0x2744c2,_0x2b727b){return _0x2744c2==_0x2b727b;},'fDeUq':function(_0x56e7e2,_0x42f56e){return _0x56e7e2!==_0x42f56e;},'SELoH':_0x3d4f('5e','eU&L'),'OpCVd':function(_0x36bba8,_0x3019fc){return _0x36bba8<=_0x3019fc;},'UDbta':function(_0x33aa5b,_0x45ac2c){return _0x33aa5b<_0x45ac2c;},'rMYPf':'XhftR','zNllR':function(_0x1914d7,_0x29e939){return _0x1914d7(_0x29e939);},'pDpIP':'[Tips]请先前往获取\x20点赞赚现金数据\x20📲','lJkRe':function(_0x46bac0,_0x2530d0){return _0x46bac0+_0x2530d0;},'XNnHn':function(_0x5231ef,_0x320730){return _0x5231ef<=_0x320730;},'uBxZo':function(_0x4e12a8,_0x6c6398){return _0x4e12a8==_0x6c6398;},'LaCTG':function(_0x11fecf,_0x1451fe){return _0x11fecf==_0x1451fe;},'biDGf':function(_0xde23ae,_0x1c50a7){return _0xde23ae==_0x1c50a7;},'OlNZJ':function(_0x2ab3b4,_0xa293b3){return _0x2ab3b4<=_0xa293b3;},'RGXxH':function(_0x1c1864,_0x23396f){return _0x1c1864<=_0x23396f;},'vfung':function(_0x3cde45,_0x2e2ce1){return _0x3cde45==_0x2e2ce1;},'mFOkp':function(_0x539273,_0x1e7d96){return _0x539273<=_0x1e7d96;},'olSil':'[Tips]请先前往获取\x20打卡拿现金数据\x20📲','BtfTA':function(_0x59ffce){return _0x59ffce();},'pjXEE':function(_0x1929b3,_0x269fd2){return _0x1929b3==_0x269fd2;},'dsItG':function(_0x208ead,_0x311f50){return _0x208ead<=_0x311f50;},'uifsV':'KuyBA','UEMPJ':_0x3d4f('5f','b^5H'),'cdsWy':_0x3d4f('60','3n!W'),'XLTlq':_0x3d4f('61','4M7)'),'jGLZr':function(_0x239749){return _0x239749();},'kZjyu':function(_0xab4880,_0x2d8ca6){return _0xab4880+_0x2d8ca6;},'SWDOj':function(_0x2a85fd,_0x132244){return _0x2a85fd==_0x132244;},'hiTMw':function(_0x5a7e29,_0x4f6384){return _0x5a7e29==_0x4f6384;},'SHSmu':function(_0x29b5e6,_0x4c23bb){return _0x29b5e6<=_0x4c23bb;},'eANRj':function(_0xe2be19,_0x516710){return _0xe2be19==_0x516710;},'dBNZK':function(_0x389ca2,_0x501157){return _0x389ca2<=_0x501157;},'HgjAA':function(_0x5866cd,_0x23abbc){return _0x5866cd<=_0x23abbc;},'jrZsk':function(_0x2c01dc,_0x1a81c9){return _0x2c01dc==_0x1a81c9;},'ytuRh':function(_0x456424,_0x51ab36){return _0x456424===_0x51ab36;},'oNEnn':'txwMI','ANfmM':function(_0x148885){return _0x148885();},'cxUbh':_0x3d4f('62','(ltg'),'kNzlL':function(_0x83fe99,_0x58bbd3){return _0x83fe99+_0x58bbd3;},'QBeHl':function(_0x5aae77){return _0x5aae77();},'CuYKu':function(_0x1b857e,_0xd81195){return _0x1b857e+_0xd81195;},'ULQXR':function(_0x4b7aeb,_0x137948){return _0x4b7aeb/_0x137948;},'VQWFY':function(_0x30f92f,_0x315d9b){return _0x30f92f*_0x315d9b;},'NHzTK':function(_0x52aeed,_0x33621f){return _0x52aeed===_0x33621f;},'kOqOP':_0x3d4f('63','31WT'),'UxvBK':function(_0x250c09,_0x3ad2dc){return _0x250c09+_0x3ad2dc;},'YIzei':function(_0x807939,_0x3a9631){return _0x807939==_0x3a9631;},'AFrgt':_0x3d4f('64','xOR#'),'RqBtu':function(_0x511def,_0x5e3715){return _0x511def==_0x5e3715;},'ffdmp':_0x3d4f('65','zH(5'),'FTALD':'[Tips]请先前往获取\x20看视频领金币奖励数据\x20📲','LTtVo':function(_0x1b7188){return _0x1b7188();}};var _0x130ca5=new Date()['getHours']();var _0x51ff34=new Date()['getMinutes']();console['log']('\x0a☘️['+$['name']+_0x3d4f('66','e!PY')+_0x211f56['tepav'](_0x2f8943,0x1)+'💲用户信息');!tkList['body']?$[_0x3d4f('58','9gyj')](_0x211f56[_0x3d4f('67','xOR#')]):await _0x211f56['AelGt'](userInfomation);console[_0x3d4f('68','Uh!h')]('\x0a☘️['+$['name']+_0x3d4f('69','Vs42')+_0x211f56[_0x3d4f('6a','85O)')](_0x2f8943,0x1)+_0x3d4f('6b','ZnBi'));await signinfo();if(todaycode==0x0){!tkList['signbd']?$[_0x3d4f('6c','31WT')](_0x211f56['zIora']):await _0x211f56[_0x3d4f('6d','pr4z')](signstart);}else{$['log'](_0x3d4f('6e','N#&5'));}console[_0x3d4f('6f','b]KE')]('\x0a☘️['+$['name']+']:~\x20User'+_0x211f56['ZLNSz'](_0x2f8943,0x1)+_0x3d4f('70','31WT'));if(_0x130ca5==0x0&&_0x211f56[_0x3d4f('71','85O)')](_0x51ff34,0x19)||_0x130ca5==0x1&&_0x211f56[_0x3d4f('72','OiAi')](_0x51ff34,0x19)||_0x211f56[_0x3d4f('73','(ltg')](_0x130ca5,0x2)&&_0x211f56['VlEnd'](_0x51ff34,0x19)||_0x211f56[_0x3d4f('74','YmhK')](_0x130ca5,0x3)&&_0x211f56[_0x3d4f('75','(ltg')](_0x51ff34,0x19)||_0x211f56[_0x3d4f('76','MV6v')](_0x130ca5,0x4)&&_0x211f56[_0x3d4f('77','mCUv')](_0x51ff34,0x19)){if(_0x211f56[_0x3d4f('78','YmhK')](_0x211f56[_0x3d4f('79','eU&L')],_0x211f56[_0x3d4f('7a','0*R2')])){return![];}else{!tkList[_0x3d4f('7b','FgpW')][0x0]?$['log'](_0x3d4f('7c','MV6v')):await _0x211f56[_0x3d4f('7d','(T&T')](videoGoodAward);}}else{console[_0x3d4f('7e','PP[N')]('⏰\x20本任务执行时间:0点~4点,共5次');}console[_0x3d4f('6c','31WT')](_0x3d4f('7f','31WT')+$[_0x3d4f('80','36VT')]+_0x3d4f('81','BI*z')+_0x211f56[_0x3d4f('82','3n!W')](_0x2f8943,0x1)+_0x3d4f('83','b^5H'));if(_0x211f56['CmvOi'](_0x130ca5,0x0)&&_0x211f56[_0x3d4f('84','(T&T')](_0x51ff34,0x19)){if(!tkList[_0x3d4f('85','zH(5')]){$['log'](_0x3d4f('86','NlvI'));}else{for(let _0x559e62=0x0;_0x211f56[_0x3d4f('87','e!PY')](_0x559e62,0x5);_0x559e62++){if(_0x3d4f('88','zH(5')!==_0x211f56[_0x3d4f('89','3n!W')]){await _0x211f56[_0x3d4f('8a','MV6v')](videolike1,_0x559e62);await $[_0x3d4f('8b','7bqK')](0x7d0);await videolike2(_0x559e62);}else{console['log'](_0x3d4f('8c','1eph'));}}console['log'](_0x3d4f('8d','YmhK'));!tkList[_0x3d4f('8e','Vs42')][0x1]?$[_0x3d4f('8','YmhK')](_0x211f56[_0x3d4f('8f','mCUv')]):await likeAward();}}else{console[_0x3d4f('90','b^5H')](_0x3d4f('91','xOR#'));}console[_0x3d4f('92','2w$r')]('\x0a☘️['+$[_0x3d4f('93','fI()')]+_0x3d4f('94','FgpW')+_0x211f56[_0x3d4f('95','3dp2')](_0x2f8943,0x1)+'💲打卡拿现金');if(_0x130ca5==0x0&&_0x211f56['OpCVd'](_0x51ff34,0x19)||_0x130ca5==0x1&&_0x211f56[_0x3d4f('96','Uh!h')](_0x51ff34,0x19)||_0x130ca5==0x2&&_0x51ff34<=0x19||_0x211f56[_0x3d4f('97','Uh!h')](_0x130ca5,0x3)&&_0x211f56['XNnHn'](_0x51ff34,0x19)||_0x211f56[_0x3d4f('98','7EM8')](_0x130ca5,0x4)&&_0x211f56[_0x3d4f('99','QULO')](_0x51ff34,0x19)||_0x211f56[_0x3d4f('9a','3n!W')](_0x130ca5,0x5)&&_0x211f56[_0x3d4f('9b','N#&5')](_0x51ff34,0x19)||_0x211f56['biDGf'](_0x130ca5,0x6)&&_0x211f56[_0x3d4f('9c','4M7)')](_0x51ff34,0x19)||_0x211f56[_0x3d4f('9d','xOR#')](_0x130ca5,0x7)&&_0x211f56[_0x3d4f('9e','MV6v')](_0x51ff34,0x19)||_0x211f56['vfung'](_0x130ca5,0x8)&&_0x211f56['mFOkp'](_0x51ff34,0x19)||_0x130ca5==0x9&&_0x211f56[_0x3d4f('9f','xOR#')](_0x51ff34,0x19)){!tkList[_0x3d4f('a0','31WT')][0x0]?$['log'](_0x211f56['olSil']):await _0x211f56[_0x3d4f('a1','MV6v')](cardtask);}else{console['log']('⏰\x20本任务执行时间:0点~9点,共10次');}console[_0x3d4f('a2','3n!W')](_0x3d4f('a3','(*Rv')+$[_0x3d4f('a4','3n!W')]+_0x3d4f('a5','mCUv')+_0x211f56[_0x3d4f('a6','9sT)')](_0x2f8943,0x1)+_0x3d4f('a7','@g]7'));if(_0x211f56[_0x3d4f('a8','0*R2')](_0x130ca5,0x0)&&_0x51ff34<=0x19||_0x130ca5==0xa&&_0x211f56['mFOkp'](_0x51ff34,0x19)||_0x211f56[_0x3d4f('a9','85O)')](_0x130ca5,0x16)&&_0x211f56['dsItG'](_0x51ff34,0x19)){if(!tkList['videolike']){if(_0x211f56[_0x3d4f('aa','3dp2')]===_0x211f56[_0x3d4f('ab','mCUv')]){$[_0x3d4f('54','(T&T')](_0x211f56['UEMPJ']);}else{$[_0x3d4f('ac','9sT)')]('❌用户'+_0x211f56[_0x3d4f('ad','9sT)')](_0x2f8943,0x1)+'(ID:'+tkList[_0x3d4f('3b','85O)')]+_0x3d4f('ae','fyAG'));$['log'](_0x3d4f('af','fyAG')+(_0x2f8943+0x1)+_0x3d4f('b0','OiAi')+tgmarkcode+tkList[_0x3d4f('b1',')8)G')]);$[_0x3d4f('b2','CoNK')]($[_0x3d4f('b3','b^5H')],'',_0x3d4f('b4','FgpW')+_0x211f56[_0x3d4f('b5','CoNK')](_0x2f8943,0x1)+':~\x20请在群内提交验证码,如果已提交请稍后再试试。\x0a🔺验证码提交格式:'+tgmarkcode+tkList[_0x3d4f('b6','N#&5')]);}}else{if(_0x211f56[_0x3d4f('b7','(T&T')]===_0x211f56[_0x3d4f('b8','PP[N')]){$[_0x3d4f('27','O5Q8')](e);return![];}else{var _0x142850='7|1|8|9|5|4|0|3|2|10|6'[_0x3d4f('b9','BI*z')]('|'),_0x36dfd7=0x0;while(!![]){switch(_0x142850[_0x36dfd7++]){case'0':await redTask12();continue;case'1':await redTask2();continue;case'2':await _0x211f56[_0x3d4f('ba','A1(B')](redTask16);continue;case'3':await _0x211f56[_0x3d4f('bb',')8)G')](redTask14);continue;case'4':await redTask10();continue;case'5':await _0x211f56[_0x3d4f('bc','NlvI')](redTask8);continue;case'6':console['log'](_0x3d4f('bd','Uh!h'));continue;case'7':await _0x211f56[_0x3d4f('be','MV6v')](redTask0);continue;case'8':await _0x211f56[_0x3d4f('bf','O5Q8')](redTask4);continue;case'9':await redTask6();continue;case'10':await _0x211f56['jGLZr'](redTask18);continue;}break;}}}}else{console[_0x3d4f('c0','OiAi')](_0x3d4f('c1','xOR#'));}console[_0x3d4f('c2','eU&L')]('\x0a☘️['+$['name']+_0x3d4f('c3','PP[N')+_0x211f56[_0x3d4f('c4','x919')](_0x2f8943,0x1)+_0x3d4f('c5','yKge'));if(_0x130ca5==0x0&&_0x211f56['dsItG'](_0x51ff34,0x19)||_0x211f56['pjXEE'](_0x130ca5,0x1)&&_0x211f56[_0x3d4f('c6','pr4z')](_0x51ff34,0x19)||_0x130ca5==0x2&&_0x51ff34<=0x19||_0x211f56['SWDOj'](_0x130ca5,0x3)&&_0x211f56['dsItG'](_0x51ff34,0x19)||_0x211f56[_0x3d4f('c7','pS&c')](_0x130ca5,0x4)&&_0x211f56[_0x3d4f('c8','wUbB')](_0x51ff34,0x19)||_0x211f56['eANRj'](_0x130ca5,0x5)&&_0x211f56[_0x3d4f('c9','31WT')](_0x51ff34,0x19)||_0x211f56[_0x3d4f('ca','7bqK')](_0x130ca5,0x6)&&_0x211f56[_0x3d4f('cb','aA@2')](_0x51ff34,0x19)||_0x211f56[_0x3d4f('cc','9sT)')](_0x130ca5,0x7)&&_0x51ff34<=0x19){if(_0x211f56['ytuRh'](_0x3d4f('cd','QULO'),_0x211f56['oNEnn'])){await _0x211f56[_0x3d4f('ce','e!PY')](lottoInfo);!tkList[_0x3d4f('cf','OiAi')]?$[_0x3d4f('d0','wUbB')](_0x211f56[_0x3d4f('d1','9gyj')]):await _0x211f56[_0x3d4f('d2','b]KE')](lottoTask);}else{if(_0x211f56[_0x3d4f('d3','7EM8')](ll[_0x3d4f('d4','0*R2')](id),-0x1)){return!![];}}}else{console[_0x3d4f('1f',')8)G')](_0x3d4f('d5','36VT'));}console['log']('\x0a☘️['+$[_0x3d4f('d6','zH(5')]+_0x3d4f('d7','b^5H')+_0x211f56[_0x3d4f('d8','(*Rv')](_0x2f8943,0x1)+'💲小说时段奖励');!tkList[_0x3d4f('d9','5ods')]?$['log'](_0x211f56['aYjqv']):await timeTask();console['log']('\x0a☘️['+$['name']+_0x3d4f('da','eU&L')+_0x211f56[_0x3d4f('db','b^5H')](_0x2f8943,0x1)+'💲开小视频页面宝箱');!tkList[_0x3d4f('dc','FgpW')]?$[_0x3d4f('42','Vs42')](_0x211f56[_0x3d4f('dd','(*Rv')]):await _0x211f56[_0x3d4f('de','OiAi')](boxTask);console[_0x3d4f('df','NlvI')]('\x0a☘️['+$[_0x3d4f('e0','3dp2')]+']:~\x20User'+_0x211f56[_0x3d4f('e1','Uh!h')](_0x2f8943,0x1)+_0x3d4f('e2','MV6v'));let _0x49ab56=Math[_0x3d4f('e3','85O)')](_0x211f56['ULQXR'](_0x211f56[_0x3d4f('e4','(*Rv')](tkList[_0x3d4f('e5','CoNK')][_0x3d4f('e6','pS&c')],0x2),0x18));let _0x5bb213=tkList['videoindex']||0x0;let _0x5441aa=parseInt(_0x5bb213,0xa);console[_0x3d4f('e7','85O)')]('→有'+tkList[_0x3d4f('e8','4M7)')]['length']+'个视频请求,每次执行任务'+_0x49ab56+'次');for(let _0xa46808=0x0;_0xa46808<0x9;_0xa46808++){if(_0x211f56[_0x3d4f('e9','HuAl')](_0x211f56[_0x3d4f('ea','xOR#')],_0x211f56[_0x3d4f('eb','b]KE')])){_0x5441aa=_0x211f56['UxvBK'](_0x5441aa,0x1);let _0x3d8cd6=_0x5441aa;const _0xa2bd4e=tkList[_0x3d4f('ec','Uh!h')][_0x3d4f('ed','NlvI')];if(_0x211f56[_0x3d4f('ee','O5Q8')](_0x3d8cd6,_0xa2bd4e)){let _0xa68392=_0x2f8943;let _0x485be9='-1';dkdapp2[_0xa68392][_0x3d4f('ef','(T&T')]=_0x485be9;$['setdata'](JSON[_0x3d4f('f0','pr4z')](dkdapp2,null,0x2),_0x211f56['AFrgt']);break;}else{await awardTypeCheck(_0x3d8cd6);let _0x299b94=_0x3d8cd6[_0x3d4f('f1','7bqK')]();let _0xa68392=_0x2f8943;dkdapp2[_0xa68392][_0x3d4f('f2','OiAi')]=_0x299b94;$[_0x3d4f('f3','b^5H')](JSON[_0x3d4f('f4','7EM8')](dkdapp2,null,0x2),_0x211f56[_0x3d4f('f5','N#&5')]);}}else{$['log'](_0x3d4f('f6','9sT)'));}}console[_0x3d4f('58','9gyj')]('☘️['+$['name']+_0x3d4f('f7','pr4z')+(_0x2f8943+0x1)+'💲领取看视频领金币');if(_0x211f56['RqBtu'](_0x130ca5,0xa)&&_0x51ff34<=0x19){if(_0x211f56[_0x3d4f('f8','85O)')]===_0x3d4f('f9','Vs42')){return{'url':host+'/'+url,'headers':tkList[_0x3d4f('fa','2w$r')],'body':body};}else{!tkList[_0x3d4f('fb','YmhK')][0x1]?$['log'](_0x211f56['FTALD']):await _0x211f56[_0x3d4f('fc','zH(5')](wtVideoAward);}}else{console[_0x3d4f('fd','(ltg')](_0x3d4f('fe','BI*z'));}console['log'](_0x3d4f('ff','yKge')+$[_0x3d4f('100','9gyj')]+']:~\x20User'+(_0x2f8943+0x1)+_0x3d4f('101','xOR#'));console['log']('🔨\x20测试自动提现功能中...');await _0x211f56['zNllR'](showmsg2,_0x2f8943);}function z(){var _0x17ad38={'BhNnU':'[Tips]请先前往获取\x20点赞赚现金数据\x20📲','FCjym':function(_0x5d766a,_0x59e23c){return _0x5d766a!==_0x59e23c;},'CDEjX':'idTQF','uMdNz':function(_0x2d7968,_0x32365f){return _0x2d7968===_0x32365f;},'Elina':_0x3d4f('102','wUbB'),'KfSjX':function(_0x4adabb,_0x4668e5){return _0x4adabb>_0x4668e5;},'hKkyw':function(_0x4ef408,_0x53470c){return _0x4ef408(_0x53470c);},'XVCMn':function(_0x4fa44f,_0x3feccd){return _0x4fa44f===_0x3feccd;},'VhQFq':_0x3d4f('103','(*Rv'),'ioBLF':'MtLTD'};const _0x5012d4=_0x17ad38['hKkyw'](decodeURIComponent,Base64['decode'](dkdapp2key));function _0x3b03dd(_0x59cb77){var _0x408f46={'tEDio':_0x17ad38[_0x3d4f('104','3n!W')]};if(_0x17ad38[_0x3d4f('105','4M7)')](_0x17ad38[_0x3d4f('106','3dp2')],_0x17ad38[_0x3d4f('107','wUbB')])){$[_0x3d4f('42','Vs42')](_0x408f46[_0x3d4f('108','HuAl')]);}else{try{if(_0x17ad38[_0x3d4f('109',')8)G')](_0x17ad38['Elina'],_0x3d4f('10a','5ods'))){console['log'](_0x3d4f('10b','9sT)'));}else{if(_0x17ad38[_0x3d4f('10c','5ods')](_0x5012d4[_0x3d4f('10d','b]KE')](_0x59cb77),-0x1)){return!![];}}}catch(_0x1a14cc){$['log'](_0x1a14cc);return![];}}}if(_0x17ad38['hKkyw'](_0x3b03dd,tkList['uid'])){if(_0x17ad38[_0x3d4f('10e','HuAl')](_0x17ad38[_0x3d4f('10f','aA@2')],_0x17ad38[_0x3d4f('110','FgpW')])){return!![];}else{return!![];}}else{if(_0x17ad38['FCjym'](_0x3d4f('111','4M7)'),_0x3d4f('112','b]KE'))){return![];}else{try{if(_0x17ad38['KfSjX'](_0x5012d4[_0x3d4f('113','aA@2')](id),-0x1)){return!![];}}catch(_0x42b773){$['log'](_0x42b773);return![];}}}};_0xodq='jsjiami.com.v6';
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
                console.log(`→看视频${res+1}失败❌\n${resp.body}n`);
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
