const $ = new Env("ELONGCASH");
var taskcodeNum = $.getdata('elongcashBuyNum') || 1;
var setTaskId = $.getdata('elongcashTaskGid') || 4;
let elongcash = $.isNode() ? require('./USER_CookiesList.js').elongcash :  $.getjson('elongcash', []);
let elongcashkey = $.getval('elongcashkey');
var _0xodJ='jsjiami.com.v6',_0x2cb8=[_0xodJ,'w68HNRoRw7HCnzg=','8LOyiueXkeaIlei3meishQ==','w55Xwp4=','wqnwpJK7cQ==','UcOVES4=','OiVXXcKsL0/DoQ==','8K6jmOeWlOaIvOS4n+WLsQ==','woZ8w6URw6E=','8YKyhsK7','w6fCjMOJYw==','w6kuJMKvw5k=','8LCjsOWyt+eOsuaIsOa4mQ==','w6wBw4pSEw==','w7nwv5KHVg==','EHjCg8KP','8JChruevhuWKleS5juWLjA==','RsOnFQ4/','4oWO56yp5Ymc5Lia5Ymj5beb5a+75ou18JC9oQ==','w4UYw74=','woTwqKGVwpg=','8JGRv+inpemgluS7jeWLqA==','wrkFOcOvBA==','OWdewodp','XMK0w5nDl8O2AiQPU8Oj','wotADFDDvXvDpsKcG8Kj','C15nEMKj','w77DiX8nw7TDk8OmwovDjsKrwpMl','w7DCrsO0TkA=','OnHDu8OZwpc=','G8K4AWXCkQ==','w7Bswp9Yw5c=','CsKUWHPCtQ==','UcO2wr4=','4oaq6KSL6aKy5Lm85YqX5ba75a695omm8L+fqw==','w6DCvnEDwos=','w4rCgMO0Y3o=','wqVbL0TDpg==','CVxCMsKr','woQFMGXDqA==','wpjDi8OIw6E=','U2fDiWbCjw==','w5tQHWvCtw==','w5BUXF7Ch2jCscKFb8KrNsOqwrbCv3ohw6YjcA==','f3XCkl9K','X3DCtmt3','AW1GEMK6NEvDoTM4ScKi','F3fCisKPwqdpCA==','AsKIXh1bVA==','bMKJacOJcQ==','CwXCnRhA','N3PDhcOrwoE=','wqRiGVvDug==','w5DCqXobwqs=','XsK/TMOqdSFQBMOCDcO4wr4=','w4vDgkEGw48=','woXDp8K3w7J4w4cgwpvClHcIRQ==','wpYMKF3DuwU=','Ql/CvHR1E8Oh','HcK9V3vCjlo=','w6U6HsKQw5wb','EkBfwoxjYAA=','wr3DiMOFw5bDpg==','dPGKgIRS','ewYMVEx9PMOm','wqPwoqKrSQ==','8YayhOWlheWuvOS5i+WLkg==','w71QCEI8','PxXCvA5Z','F3xuKMKq','w7Arb8Kcwpg=','w4R5DFYX','wq8rDMOoNA==','w4dvA2sd','wrHDjcKGw4LDsQ==','wrQ4Gn7DnA==','CHlfwrNX','EcKvZyly','UcK1csKsdA==','w7DCoEc+wqc=','wqlOw6sCw7YuNsOdDcO3','wpNtw4QEw7c=','w7Zcw68fwqo=','N8Kcwq3Dnkw=','w5YFw6JIJQ==','NCbCv1wa','w6jCtVIEwqfDkA==','wpApJcOSAnY=','w4ofw7hgwpLCrA==','OXPCmVLChMO8','XcKNX8KZYgE=','w7/CrcK3wrnDij0=','N0dwwopz','WsOOwrB6MQ==','w4QGw7F/wqY=','wprDm8KH','FGvChUJfCsObwpc=','w54nDcKJw6E=','8KeBkuWKluWLtOa1keivtTE=','wrNtw54Tw5Y=','wrIdF8OxJQ==','LSLCoyNr','4oat566i5YqI5Lme5YiU5baf5a+M5om68Jusng==','4pye5Yq/5Ym75aSw6LeVwq4=','w6IwAA==','w5Ejw5XDvQ==','HXlPJMK4','w4rCnMKuwo3Dmw==','FV7ChUPCnQ==','w4FAw508wrbDpg==','Z1XDucKlwoU=','wprDo8KSw7R9','LXHCp8K5wpg=','wpDDncKyw5bDsw==','wq9vIFfDsw==','VsKsTsOi','SsKWCBA7Tgg=','SypYw7HDsw==','wqrDt8KFw57DkA==','Pl5MwoZy','NsKswrnDm3JM','wrU5CMKEwrpmEQ==','RSdmw67DqsKeZQ==','wr8/DcKTwoNd','wroONsOgMA==','w4ZKwox4w64=','JFzDjMOhwqs=','VQJMw5zDpQ==','FA7DknjCqA==','wrNtw4Qnw4I=','NGTCj2zCs8Omw5LClh7DoMOJwrI=','wqDDpMObfiY=','wpDDu8KPw61N','w67CrsKCwo7DmA==','wrHDjcOXXSI=','wq7DsMK2w4jDrgxcw7ALwpEDe8K1w5NEwoPDgwnDv0LCu316QE3DmxTCn8Olbg7Ch8OrNcOJYTQHwqRqCUbDsTLCmy4FwofDv8Oiw6NOwoY=','FsKhQnnCvBQAwo8HGCfDsRFPwq7CqcKawrvCnTbDlmsbwrzDpFLDpcKjGQHDscKhw5hfU0Yfwq/DjxcmWcOOPlFsT8OAb8KuwqzDjUVLw4HDiAbDj8KswpJTOsKjblvDlV90FAo=','DMK6Q2fCqw==','LV3DnA==','Omx4wq1eaSE5ej/DnMOKw61nw4nDgWDDjMK+Ij4pfmXDixIiVHfCkmh2OcOlwrASw6dhwofCn8KKOMOSw4s0fznCvMK6w7nCnMO7wo3CksKowpjDjcK0wrFbw6nCj8KNSiI=','EG9Twptt','w5oIM8Ktw7k=','w53DlsKVw6nCpXATNT7CjcK/w44L','wo4ZPWfDuw==','w7bDmkEHw44=','woxvGEPDgQ==','wqrDocKsw5/DqV4=','MX7CgXPCs8Ohw5fCgRzDuw==','w7/CrcK3wrnDiCbCmnfDtC8=','w50vw4fCh1U=','IU/ClnXCsw==','Km3Cl8KEwoY=','TMKFw47DkcO2','w6AWw4F0wrY=','wrzDl8K3wpnCuw==','wos/OcK7wpU=','wpnDhMOBagQ=','KVAr','4p6355Wk5omr','NCbCsA==','wopWw7cK56az6ZGj6aqn6K2T5aap6LSs776J','w4RPFg==','a+KZgO+4sOeVh+aIrQ==','R3nCjkls','Z8K3w6Dorb/lnK7nvprlhY3mjqvkuoHku4jliYrnoJs15aWC5p6y5bW+5oyc5LqR6K2956i+5ZKw5YWW6K+c6K+144GYwqvwsKeX6aqV6K2j56CF5o+25Lm/5qO+5b6ueA==','TcKNX8KZRhZ1w4fChQ==','P2XChw==','wp3DocOYaA==','4pm877mY55WE5ouW','w6cDw65xwoY=','w5XDlMKB6K2i5Z68576o5Yam5o6Z5Lqs6am96K2N56KzEuWkvuafl+W0quaOuuS7kOiumeeri+WTm+WGieisi+isuOOCshHwlKa86am/6K2V56Gl5o+H5Lq35qOw5b2zw4o=','wq8/DcKTwqdKGMKBWg==','acK2UMKcRA==','AmDCrXPCkw==','woTDj8OYw4bDoH4=','VcKAR8K4Vwc=','FcKwT1rCu1w=','L8KfAXDCuS0=','wp1cCxrDm3rDocKWPsKy','wq9lw50xw50=','DyvCjQFk','eC3Dix48BcKJwpnDocO+TMKbAcKMQQ==','CF5XwoBv','w7TDnn4tw4PDkw==','w7HDlXQvw4/DtMOh','wqXDrMKjw4rDnEI=','woFGCUfDhlvDpA==','wqlOw6sCw7Q1','QFTCoUJ5Lg==','wq/DqsKmw53DpXkV','woVeHlPDsQc=','wpQHNWvDtzjCgw==','w6MgScK7wooh','YsK9Bzs7','IkbDuMOcwpE=','O8K7wq/DpUVWwqkJZjXCh38=','ScKWw6nDt8Ov','w4LDtEEaw58=','wpDDhsKPwpPCjGfDqnYDwpHCvcKv','w5kww5fDtSLCkFTCrsO0ccOqEg==','wovDlsKUw7p5','LsKCLGnCiw==','wrXDjsOTw5DDlQ==','W8OrwrZcE8KxwozCj8KBw5Vpw58=','MyrCpFI1w5HDmA==','NDvCsgYww5fDnsKnwrPDig==','w68Aw5J4wpQ=','Py7DlGrChg==','w5sSw6l+wrLCu8KX','blLDu8KqwroV','woHDo8OXw5HDgA==','w4c+w69Wwoc=','B8KSUAJZSHBOAMKfwoPDkw==','asKtw43DqMOF','Ox7Cv0k5','w4TCg2gwwp4=','4oS66Kem6aOg5Lu55Ymi5baf5a+U5omR8YOMjw==','c00HOWk=','Jz/CvxVb','ZEXDusKgwo0VT8O3wrXDmmQu','w747CsKuw68=','ImskLSU=','w68pw5HChE/DnAvCvMKHw4XDs3E=','QnE/JXI=','w7oVw7hfLg==','UMKIABw3','w4XDvMKCcVrCksOswq0XMMOhUsOJY2zDlQs=','esKCfcKkaA==','wqfDssKbw5Bw','S8KYw4HDn8OY','TsK3SsKoVg==','SlkcE21m','wp4BMHzDjBjCgSdNOA==','w6nCscKww7PDrifCnX3DkT4=','csKPHzss','w4IBw49QwpY=','MELDh8O4wo8=','NRzDq0TCtw==','w5FVKkgFw7Y=','w5DClMOew4rCuMOk','wp3DkcKZwq3Cu30=','wqJfGlDDvw==','UlHDmVjCpQ==','wp5ENFLDlQ==','HMKxXEzCjg==','w6VELWAo','wpJkw6AUw4Q=','w7M1w4jCk3o=','XMOcHTk0en3DtMOYw7E=','R1XDoVrCjcOLw4kmw54X','WcKuw5fDiMO2BSEYUcO4DAs=','YV/DtMK/wo0SSsOgwrfDgQ==','S8KBOT4B','TUPCt3xONMOmbcOgezvDqw==','bG3DmmzCtw==','BlIEDBM=','w4ofw7hgwpDCt8KWB1LCvw==','NcKEwrPDolU=','wr1mOlPDmg==','44C05o+t56a644C56Ky55Yes5Yug5b+D6Iyo5Y61wqrCqzlEw4cS8KCStg==','X8K1VMKpcg==','44O/5o2656ab44KE6K2j5YWE5Ymu5b+J6I6/5YynwqzDgVbDnTnCvQkbCsKjw7XwnpCs','ZkjDpV3Cmg==','C8KjBmjCjA==','K14hPw==','wrgSw5ljw6jDnhrDmsKPZhPDvTcwDDdfw4XDsFRVHCjCtUbDhF3DsW0gGnjDgTTCnSQvw4Vzw4MbVw3DqygmwqfCpcOtEsOSw5rCsMOzH8KcRMOrw59dPF5LYcKYB8Krw5hSw6XDjMOEDQt4BsKiwoF2EDBfZMO6X8KvwqXCocOjFcKIw7LCujF2cD1pfGXDt2VYMiZCw7lCwoHCicKjCUvCn3PCmg==','L13DjA==','woTDsMKsw4tSw4Ik','w5cDw4VFCMKnR8O3w4t9w7rDu0jDtQ==','CsK5wqTDoU4=','wqzDh8KXworCoQ==','w6XCuMOlS3s=','w4lKw5k=','w4Uew6ZHKMKuSsOgw5tmw6zDtw==','wq7DssK2w7tD','IRjDk2bCpzgHPsOqwoU3Ag==','PcKNCXTCoQ==','EsK6UQ==','wqLwl5GDWQ==','JzDClgc=','WcKgV8K6dQ==','CynCjg5B','MnPCnMKDwoU=','GsKER33Cmg==','w77Dknw+w5LDiQ==','w5AEw6hYDsKlRMO2w70=','w6wnTw==','MvGMgJHDnA==','w7bDmn0v','fsOCElUQeB0sEEbwnLKJ6Iac5p6/6LSP5YyH5paP6YadTA==','5p6e5qyZ5oqe6KGu5Yes','L1fDhcO2wo8S','5Lqp6Le25Y+c','Sxx0w5rDkw==','C3pHGsKNNA==','NlctKAxsw7zDgcKH','TfCltaFQ','YeiHreadjOS9veeXkOacmumaqMOxw5tx','H8KxwrXDpE0=','w5XCgXk6wr8=','wohHw64bw7M=','wphHI1TDmQ==','VlDCqsOQ','PnnChw==','w4zwvpOww6M=','FGvChUJZAMONwpHCt8Ov8KCxlRrmipfooLjoh5DmnJ7Ck+W+huWmpOaImeijuXzwsqC5w6oxJ3k=','LcKmwo7DvmE=','55i26ISn5p2n5LuB5Yul','ZEkXAU0=','Z03DvcKnwoM=','U2d/w5M=','wprDg8OF','w5RTLy7npZfpk5LpqanoroPlpL3otanvvJw=','fsOCElUQeB0sEEbwnLKJwqnlso7or7zmmITmlY8s6IW25p++5Lyi55SM5p2V6ZuS56eM6ZO9wpx1wrhQ','H8KyV2DCoQ==','w6A+CsKm','w4XCgeWGneatq+mou+itusO555eR5oq6','w57ohprmnpnkvbLnlYLmnq3pmoTDvwxi','SVzDj8K+wr4=','JWdcEcKy','w4cYw5Z/wpE=','VsK0bsKcWw==','BABGwrE=','SMOaQU/np4LpkoXpqp3or73miZPlia/vv6bwsq2f','F0Fc','woPxhIKWXQ==','55mO6IS85p6m5LqL5YiU','w4BJCUXCig==','LMKHUQti','RcKKAxgAaQ8qNkRqXg==','w6vDqVEAw48=','WMKXUcKGYB17w5HCo03DicKH','b8OAGQ85','w7nCicOSw7XChw==','w5U6fcKzwq4=','HijDhWHCsg==','EnbCiQ==','TcKkRw==','w4ESEwLnpabpkrHpqI7orLjlpavot7LvvIM=','LSDCsw==','wovDgcO5w4LDtQ==','W8KeH+iumOWcsue+hOWGlOaPrOS7p+S5ouWJjueit8O65aWw5pyR5baQ5o2v5LuP6K2C56u75ZC55YeL6K206Kys44O5CPGBlbnpqoPor6TnoK/mj7fkuo7moKrlvp7CqA==','DXHCj8KYwrpFAVfCjg==','wqdVw60=','4pu977uG55eo5oq/','QlcqI3g=','w7zDusOi6K2P5Z61576S5Ye25oyP5LuX6aiz6K6n56CWw7blpL/mnr/ltZ/mjbDku4LoraXnqaDlk5PlhpXor4bor7PjgK7Cv/CjporpqIjor4znobvmjL7kuLnmoaDlvrIi','wqLDl8ObZiU=','Qk/Dr0XCjcOMw4wxw5wMwq3CoQ==','w4ZEw4owwro=','w7TDlHc=','woHDi8OMw7A=','w6XCuUU2wr/Djng=','LUs4Kho1wrzCisKaEcKBD8KtH0JbXiBM','w6cyQcK5w6d1wqbCtTETXntRE8OAwpLCsQ==','w5cnw5nDvATCikY=','wodGD03DmRDChsOfwqNuSinCrloLYMKxw45/w40OTU3DssOiaS9/STM=','AwBewoV0QQFfUBrDug==','w6HCmcOQdl/Do8Ksw7bCoMOPKH5LTxvDg8K2w6PCtsKzw6UHwpXCtCgcw49Xw5bDvEwKAsOtfsOVAi3ClsKvwqfDnyzDssOiSMKjw4N9PsK7fA55EcKmFA==','T1jDr8KkwqIRT8Kqw4PCmzBrwo5xTMOhB8K8wp0lwr0Uw6XCpcKdIWw1ZcKiw4XCknbDhcKUGjPCv0Vvwq5lLMKWQcKLNsKQworCp8OUFCrDuMKxIAs0S8KhXHpNGcKCw7PCi8OYwoVDTBNRw5QYwrsubWbDlMKQw415wppww53DlsKbw7YWw77DpsKCE8OCw7zDtsK7w6scbsOdwo3CuwrCoS/CiksRw7HCh3A5w4LCgEo5wqbDqcKXwp4EK1PCp3XDrwbDn8OhKsKZw49qSCERA8KFwoPDmsOnS8OyOcK4LDHDkcKrwp09YsKKN0RHK8OFwrBIU8ONK8OJw48kw4xnJjrDr8OYQMOjwqJqEDc=','w7ogBcKqwqU=','wq3DhyE2woHDh8KwwoXCucK4w4U8w599woQ=','wqfDgMKUwq3Cnw==','w6EmWMKEwoo=','UsKDW8KKcQ==','N/C5g6tq','SF0fEQ==','OjDsjiNAaWmige.ncohmItA.vg6h=='];(function(_0x24e449,_0x29c38e,_0x3be3aa){var _0x582b0b=function(_0x2a5b63,_0x5a571c,_0x437c5e,_0x43bd50,_0x35c3b5){_0x5a571c=_0x5a571c>>0x8,_0x35c3b5='po';var _0x2f8ccd='shift',_0x580fde='push';if(_0x5a571c<_0x2a5b63){while(--_0x2a5b63){_0x43bd50=_0x24e449[_0x2f8ccd]();if(_0x5a571c===_0x2a5b63){_0x5a571c=_0x43bd50;_0x437c5e=_0x24e449[_0x35c3b5+'p']();}else if(_0x5a571c&&_0x437c5e['replace'](/[ODNAWgenhItAgh=]/g,'')===_0x5a571c){_0x24e449[_0x580fde](_0x43bd50);}}_0x24e449[_0x580fde](_0x24e449[_0x2f8ccd]());}return 0x92951;};return _0x582b0b(++_0x29c38e,_0x3be3aa)>>_0x29c38e^_0x3be3aa;}(_0x2cb8,0x86,0x8600));var _0x2491=function(_0x4c4547,_0x29404f){_0x4c4547=~~'0x'['concat'](_0x4c4547);var _0x482ac6=_0x2cb8[_0x4c4547];if(_0x2491['fGGzPf']===undefined){(function(){var _0x2ba3d2=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x133a5e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2ba3d2['atob']||(_0x2ba3d2['atob']=function(_0x2068c3){var _0x6a86d1=String(_0x2068c3)['replace'](/=+$/,'');for(var _0x3bb539=0x0,_0x44c8dd,_0x30b7ae,_0x5b750a=0x0,_0x4fe6c9='';_0x30b7ae=_0x6a86d1['charAt'](_0x5b750a++);~_0x30b7ae&&(_0x44c8dd=_0x3bb539%0x4?_0x44c8dd*0x40+_0x30b7ae:_0x30b7ae,_0x3bb539++%0x4)?_0x4fe6c9+=String['fromCharCode'](0xff&_0x44c8dd>>(-0x2*_0x3bb539&0x6)):0x0){_0x30b7ae=_0x133a5e['indexOf'](_0x30b7ae);}return _0x4fe6c9;});}());var _0x3268b4=function(_0x952da,_0x29404f){var _0x36320d=[],_0x35019a=0x0,_0x25ddc4,_0x11b75b='',_0x51b166='';_0x952da=atob(_0x952da);for(var _0x10a38d=0x0,_0x1d29dd=_0x952da['length'];_0x10a38d<_0x1d29dd;_0x10a38d++){_0x51b166+='%'+('00'+_0x952da['charCodeAt'](_0x10a38d)['toString'](0x10))['slice'](-0x2);}_0x952da=decodeURIComponent(_0x51b166);for(var _0x5d5531=0x0;_0x5d5531<0x100;_0x5d5531++){_0x36320d[_0x5d5531]=_0x5d5531;}for(_0x5d5531=0x0;_0x5d5531<0x100;_0x5d5531++){_0x35019a=(_0x35019a+_0x36320d[_0x5d5531]+_0x29404f['charCodeAt'](_0x5d5531%_0x29404f['length']))%0x100;_0x25ddc4=_0x36320d[_0x5d5531];_0x36320d[_0x5d5531]=_0x36320d[_0x35019a];_0x36320d[_0x35019a]=_0x25ddc4;}_0x5d5531=0x0;_0x35019a=0x0;for(var _0x5cc717=0x0;_0x5cc717<_0x952da['length'];_0x5cc717++){_0x5d5531=(_0x5d5531+0x1)%0x100;_0x35019a=(_0x35019a+_0x36320d[_0x5d5531])%0x100;_0x25ddc4=_0x36320d[_0x5d5531];_0x36320d[_0x5d5531]=_0x36320d[_0x35019a];_0x36320d[_0x35019a]=_0x25ddc4;_0x11b75b+=String['fromCharCode'](_0x952da['charCodeAt'](_0x5cc717)^_0x36320d[(_0x36320d[_0x5d5531]+_0x36320d[_0x35019a])%0x100]);}return _0x11b75b;};_0x2491['fXsdZY']=_0x3268b4;_0x2491['DPDnAO']={};_0x2491['fGGzPf']=!![];}var _0x246cea=_0x2491['DPDnAO'][_0x4c4547];if(_0x246cea===undefined){if(_0x2491['rpPJeN']===undefined){_0x2491['rpPJeN']=!![];}_0x482ac6=_0x2491['fXsdZY'](_0x482ac6,_0x29404f);_0x2491['DPDnAO'][_0x4c4547]=_0x482ac6;}else{_0x482ac6=_0x246cea;}return _0x482ac6;};const host=_0x2491('0','JtGx');const notifyInterval=0x1;const tgmarkcode='/submitactivitycodes\x20elongcash@';const githubkeyUrl=_0x2491('1','!RY$');const taskChannel='26170';let tz='';let todaytimems=Math[_0x2491('2','!RY$')](Date[_0x2491('3','g3L%')]());const nowmouth=formatDateTime(todaytimems);var h='';var m='';var Base64={'keyStr':_0x2491('4','3&cA'),'encode':function(_0x5b52da){var _0x263ef2={'naQMy':function(_0x57272b,_0x47a953){return _0x57272b+_0x47a953;},'jYgbq':function(_0x4a610c,_0x3e58ad){return _0x4a610c<_0x3e58ad;},'TtynY':function(_0x191c95,_0x427600){return _0x191c95>>_0x427600;},'sYvtC':function(_0x38ad79,_0x14ae1d){return _0x38ad79|_0x14ae1d;},'zOEup':function(_0xb21a63,_0x22a800){return _0xb21a63&_0x22a800;},'IaXfe':function(_0x54ed65,_0x212a28){return _0x54ed65&_0x212a28;},'JcWgt':function(_0x913c68,_0x427131){return _0x913c68(_0x427131);},'WhUZW':function(_0x46c23f,_0x5d3067){return _0x46c23f===_0x5d3067;},'jDtgn':_0x2491('5','3&cA'),'WSnwg':function(_0x3e1d91,_0x484229){return _0x3e1d91(_0x484229);},'oqGsL':_0x2491('6','zlK)'),'wTofT':'ggCRS','PvMrc':function(_0x5d73cd,_0x5e32bb){return _0x5d73cd+_0x5e32bb;},'HuaaK':function(_0x3f39dd,_0x3d71a6){return _0x3f39dd+_0x3d71a6;}};var _0x35e264=_0x2491('7','pmr9')[_0x2491('8','jz7E')]('|'),_0x257a7f=0x0;while(!![]){switch(_0x35e264[_0x257a7f++]){case'0':var _0x518d51=0x0;continue;case'1':var _0x29b4e2,_0x3d96cd,_0x2748d8,_0x151473,_0x410d01,_0x3073c2,_0x5df4f2;continue;case'2':var _0x5a893a={'lHVXa':function(_0x4ca60a,_0x5094b2){return _0x263ef2[_0x2491('9','Yyq2')](_0x4ca60a,_0x5094b2);},'NtwcU':function(_0x54d979,_0x48750d){return _0x54d979+_0x48750d;}};continue;case'3':while(_0x263ef2[_0x2491('a','yYja')](_0x518d51,_0x5b52da[_0x2491('b','JtGx')])){_0x29b4e2=_0x5b52da[_0x2491('c','Ucxa')](_0x518d51++);_0x3d96cd=_0x5b52da['charCodeAt'](_0x518d51++);_0x2748d8=_0x5b52da[_0x2491('d','Cwpy')](_0x518d51++);_0x151473=_0x263ef2[_0x2491('e','GDd]')](_0x29b4e2,0x2);_0x410d01=_0x263ef2[_0x2491('f','Ucxa')]((_0x29b4e2&0x3)<<0x4,_0x263ef2[_0x2491('10','GRUk')](_0x3d96cd,0x4));_0x3073c2=_0x263ef2[_0x2491('11','Guey')](_0x263ef2['zOEup'](_0x3d96cd,0xf)<<0x2,_0x2748d8>>0x6);_0x5df4f2=_0x263ef2[_0x2491('12','HdHS')](_0x2748d8,0x3f);if(_0x263ef2[_0x2491('13','6u@R')](isNaN,_0x3d96cd)){if(_0x263ef2[_0x2491('14','WzjD')](_0x263ef2[_0x2491('15','s1bD')],_0x263ef2[_0x2491('15','s1bD')])){_0x3073c2=_0x5df4f2=0x40;}else{$[_0x2491('16','sQa%')](_0x2491('17','HZB4')+(_0x518d51+0x1)+'(ID:'+tkList[_0x2491('18','CIY&')]+_0x2491('19','18&K'));$[_0x2491('1a','SAbp')](_0x2491('1b','lUX!')+_0x5a893a[_0x2491('1c','TEF#')](_0x518d51,0x1)+_0x2491('1d','R^b9')+tgmarkcode+tkList[_0x2491('1e','mGmo')]);$[_0x2491('1f','Ucxa')]($[_0x2491('20','s1bD')],'',_0x2491('21','WzjD')+_0x5a893a[_0x2491('22','HdHS')](_0x518d51,0x1)+_0x2491('23','pmr9')+tgmarkcode+tkList[_0x2491('24','WzjD')]);}}else if(_0x263ef2[_0x2491('25','mGmo')](isNaN,_0x2748d8)){if(_0x263ef2['oqGsL']===_0x263ef2['wTofT']){$['done']();}else{_0x5df4f2=0x40;}}_0xe2871b=_0x263ef2[_0x2491('26','Ucxa')](_0x263ef2['HuaaK'](_0xe2871b,this[_0x2491('27','pmr9')]['charAt'](_0x151473))+this[_0x2491('28','mGmo')]['charAt'](_0x410d01),this['keyStr']['charAt'](_0x3073c2))+this[_0x2491('29','!RY$')][_0x2491('2a','tkr@')](_0x5df4f2);}continue;case'4':var _0xe2871b='';continue;case'5':return _0xe2871b;case'6':_0x5b52da=Base64[_0x2491('2b','F6XX')](_0x5b52da);continue;}break;}},'decode':function(_0x2ee29d){var _0x56817e={'AEkNx':function(_0x4818ba,_0x28c374){return _0x4818ba|_0x28c374;},'utcMl':function(_0x16589a,_0x1ba5ac){return _0x16589a<<_0x1ba5ac;},'atSMj':function(_0x3fe131,_0x3b7324){return _0x3fe131>>_0x3b7324;},'JSTCR':function(_0x1c3cd9,_0x1b5cc0){return _0x1c3cd9&_0x1b5cc0;},'pEUYN':function(_0x3294c4,_0x494cfb){return _0x3294c4|_0x494cfb;},'hCLeB':function(_0x5d5134,_0x5e8eca){return _0x5d5134!=_0x5e8eca;},'aPLiW':'vJQRZ','ZOQPh':function(_0x42c519,_0x38cd8c){return _0x42c519+_0x38cd8c;},'buLks':function(_0x1a148a,_0x4b104f){return _0x1a148a===_0x4b104f;},'gnNrl':_0x2491('2c','26)2'),'tQLhC':_0x2491('2d','Nv#4'),'ZdrEA':function(_0x240aa0,_0x5188fe){return _0x240aa0+_0x5188fe;}};var _0x421e32=_0x2491('2e','Nv#4')[_0x2491('2f','3&cA')]('|'),_0x13ebcf=0x0;while(!![]){switch(_0x421e32[_0x13ebcf++]){case'0':var _0x1a9214,_0x59a915,_0x313591;continue;case'1':var _0x3c8a8f='';continue;case'2':while(_0x2a7f1e<_0x2ee29d[_0x2491('30','Yyq2')]){_0x45d374=this['keyStr'][_0x2491('31','Yyq2')](_0x2ee29d[_0x2491('32','JtGx')](_0x2a7f1e++));_0x81292d=this['keyStr'][_0x2491('33','F6XX')](_0x2ee29d[_0x2491('34','26)2')](_0x2a7f1e++));_0x3db558=this[_0x2491('35','TEF#')][_0x2491('36','JtGx')](_0x2ee29d[_0x2491('37','yYja')](_0x2a7f1e++));_0x5816d5=this['keyStr'][_0x2491('38','jz7E')](_0x2ee29d[_0x2491('39','Dc1K')](_0x2a7f1e++));_0x1a9214=_0x56817e[_0x2491('3a','ROo[')](_0x56817e['utcMl'](_0x45d374,0x2),_0x56817e['atSMj'](_0x81292d,0x4));_0x59a915=_0x56817e['utcMl'](_0x56817e['JSTCR'](_0x81292d,0xf),0x4)|_0x56817e[_0x2491('3b','g3L%')](_0x3db558,0x2);_0x313591=_0x56817e['pEUYN'](_0x56817e['utcMl'](_0x56817e['JSTCR'](_0x3db558,0x3),0x6),_0x5816d5);_0x3c8a8f=_0x3c8a8f+String[_0x2491('3c','R^b9')](_0x1a9214);if(_0x56817e['hCLeB'](_0x3db558,0x40)){if(_0x56817e['aPLiW']===_0x2491('3d','Guey')){_0x3c8a8f=_0x56817e[_0x2491('3e','Yyq2')](_0x3c8a8f,String[_0x2491('3f','6u@R')](_0x59a915));}else{utftext+=String[_0x2491('40','Oez5')](c);}}if(_0x56817e[_0x2491('41','n7j3')](_0x5816d5,0x40)){if(_0x56817e[_0x2491('42','tkr@')](_0x56817e['gnNrl'],_0x56817e['tQLhC'])){return!![];}else{_0x3c8a8f=_0x56817e[_0x2491('43','pmr9')](_0x3c8a8f,String[_0x2491('44','mCK8')](_0x313591));}}}continue;case'3':_0x2ee29d=_0x2ee29d[_0x2491('45','CIY&')](/[^A-Za-z0-9\+\/\=]/g,'');continue;case'4':_0x3c8a8f=Base64[_0x2491('46','CIY&')](_0x3c8a8f);continue;case'5':return _0x3c8a8f;case'6':var _0x45d374,_0x81292d,_0x3db558,_0x5816d5;continue;case'7':var _0x2a7f1e=0x0;continue;}break;}},'utf8encode':function(_0x13d1c6){var _0x12408f={'jQniL':function(_0x4d9e96,_0x4efe2b){return _0x4d9e96<_0x4efe2b;},'nIvDT':function(_0x404ac2,_0x3ce1b4){return _0x404ac2<_0x3ce1b4;},'vqoIL':function(_0x3b8db1,_0x155376){return _0x3b8db1>_0x155376;},'UquMp':function(_0x351205,_0x5e7247){return _0x351205|_0x5e7247;},'SLhHQ':function(_0x4a3763,_0xbb2702){return _0x4a3763&_0xbb2702;},'zQkwm':_0x2491('47','HdHS'),'GSCgM':_0x2491('48','irNs'),'nnDwQ':function(_0x10f908,_0x422f09){return _0x10f908>>_0x422f09;},'pdmmG':function(_0x233749,_0xf93ce6){return _0x233749&_0xf93ce6;},'gThwL':function(_0x1d3574,_0x47c04b){return _0x1d3574>>_0x47c04b;},'dMMQk':function(_0x522844,_0x54754a){return _0x522844|_0x54754a;}};var _0x3cb66b='';_0x13d1c6=_0x13d1c6[_0x2491('49','HdHS')](/\r\n/g,'\x0a');for(var _0x49f753=0x0;_0x12408f['jQniL'](_0x49f753,_0x13d1c6[_0x2491('4a','ybLL')]);_0x49f753++){var _0x455d21=_0x13d1c6['charCodeAt'](_0x49f753);if(_0x12408f[_0x2491('4b','pmr9')](_0x455d21,0x80)){_0x3cb66b+=String['fromCharCode'](_0x455d21);}else if(_0x12408f['vqoIL'](_0x455d21,0x7f)&&_0x12408f[_0x2491('4c','HdHS')](_0x455d21,0x800)){_0x3cb66b+=String[_0x2491('4d','lUX!')](_0x12408f[_0x2491('4e','Guey')](_0x455d21>>0x6,0xc0));_0x3cb66b+=String['fromCharCode'](_0x12408f['SLhHQ'](_0x455d21,0x3f)|0x80);}else{if(_0x12408f[_0x2491('4f','CIY&')]===_0x12408f[_0x2491('50','i@jT')]){console['log'](_0x2491('51','SAbp'));}else{_0x3cb66b+=String[_0x2491('3c','R^b9')](_0x12408f[_0x2491('52','OGa6')](_0x12408f[_0x2491('53','Nv#4')](_0x455d21,0xc),0xe0));_0x3cb66b+=String[_0x2491('54','ybLL')](_0x12408f[_0x2491('55','zlK)')](_0x12408f[_0x2491('56','sQa%')](_0x455d21,0x6),0x3f)|0x80);_0x3cb66b+=String[_0x2491('57','GDd]')](_0x12408f[_0x2491('58','OGa6')](_0x455d21&0x3f,0x80));}}}return _0x3cb66b;},'utf8decode':function(_0x3f657c){var _0x47d9b9={'rxFxt':function(_0x365c6c,_0x5c4bee){return _0x365c6c<_0x5c4bee;},'DgCOK':function(_0x30224e,_0x47105f){return _0x30224e+_0x47105f;},'EyeHT':function(_0x4ac8d6,_0x24277e){return _0x4ac8d6&_0x24277e;},'tDyzm':function(_0x4d0040,_0x64e41f){return _0x4d0040<<_0x64e41f;},'pRtCu':function(_0x33a5c7,_0x83ac21){return _0x33a5c7<_0x83ac21;},'EJAZl':_0x2491('59','18&K'),'aeEqH':function(_0xdc033b,_0x4430a8){return _0xdc033b>_0x4430a8;},'hyUKB':function(_0x50463f,_0x56dbfd){return _0x50463f+_0x56dbfd;},'HPZDy':function(_0x515090,_0x245b45){return _0x515090|_0x245b45;},'hMsjS':function(_0xf33b19,_0x7ff0de){return _0xf33b19<<_0x7ff0de;},'CmHVz':function(_0x1cfa86,_0x230688){return _0x1cfa86&_0x230688;},'UNWqd':function(_0x15ab9b,_0x104ccd){return _0x15ab9b<<_0x104ccd;}};var _0x1b5833='0|1|4|5|2|6|3'[_0x2491('5a','ROo[')]('|'),_0x12c9f8=0x0;while(!![]){switch(_0x1b5833[_0x12c9f8++]){case'0':var _0x5173ee={'QwsNo':function(_0x516bd8,_0x21cd59){return _0x47d9b9['rxFxt'](_0x516bd8,_0x21cd59);},'kvVBE':_0x2491('5b','s1bD'),'WZoLa':function(_0xd4da76,_0x284cac){return _0x47d9b9[_0x2491('5c','mGmo')](_0xd4da76,_0x284cac);},'rvWOS':function(_0x2ed672,_0x5511b3){return _0x47d9b9[_0x2491('5d','n7j3')](_0x2ed672,_0x5511b3);},'WyfZl':function(_0x509b2d,_0x161fa3){return _0x509b2d|_0x161fa3;},'JwwrA':function(_0x1c5721,_0x581280){return _0x1c5721<<_0x581280;},'vlYpk':function(_0xf73c0d,_0x225efb){return _0x47d9b9['EyeHT'](_0xf73c0d,_0x225efb);},'bdjEA':function(_0x67a7eb,_0x2eb165){return _0x67a7eb(_0x2eb165);},'XBjdq':function(_0x1e9787,_0x245594){return _0x47d9b9[_0x2491('5e','Guey')](_0x1e9787,_0x245594);},'znvzv':function(_0x119136,_0x3258eb){return _0x119136>>_0x3258eb;}};continue;case'1':var _0x3690ad='';continue;case'2':_0x4ce690=_0x5c7f8c=_0x357bf1=0x0;continue;case'3':return _0x3690ad;case'4':var _0x5ac67b=0x0;continue;case'5':var _0x4ce690,_0x5c7f8c,_0x357bf1,_0xa5c206;continue;case'6':while(_0x47d9b9[_0x2491('5f','mGmo')](_0x5ac67b,_0x3f657c[_0x2491('60','OGa6')])){_0x4ce690=_0x3f657c[_0x2491('61','jz7E')](_0x5ac67b);if(_0x47d9b9['pRtCu'](_0x4ce690,0x80)){if(_0x47d9b9['EJAZl']!==_0x47d9b9['EJAZl']){var _0x48dfda='';var _0x54d809,_0x3a550f,_0x408df3,_0x4a010d,_0x64fc7f,_0x116c93,_0x168238;var _0x121d08=0x0;input=Base64[_0x2491('62','Cwpy')](input);while(_0x5173ee[_0x2491('63','ROo[')](_0x121d08,input['length'])){var _0xcdb9cd=_0x5173ee[_0x2491('64','HdHS')][_0x2491('65','g3L%')]('|'),_0x4a7099=0x0;while(!![]){switch(_0xcdb9cd[_0x4a7099++]){case'0':_0x408df3=input['charCodeAt'](_0x121d08++);continue;case'1':_0x48dfda=_0x5173ee['WZoLa'](_0x5173ee[_0x2491('66','irNs')](_0x48dfda,this[_0x2491('27','pmr9')][_0x2491('67','1KJz')](_0x4a010d))+this['keyStr'][_0x2491('32','JtGx')](_0x64fc7f)+this[_0x2491('68','hy%D')]['charAt'](_0x116c93),this[_0x2491('69','6u@R')]['charAt'](_0x168238));continue;case'2':_0x116c93=_0x5173ee['WyfZl'](_0x5173ee[_0x2491('6a','F6XX')](_0x5173ee[_0x2491('6b','#S(^')](_0x3a550f,0xf),0x2),_0x408df3>>0x6);continue;case'3':_0x168238=_0x5173ee[_0x2491('6c','F6XX')](_0x408df3,0x3f);continue;case'4':if(_0x5173ee[_0x2491('6d','!RY$')](isNaN,_0x3a550f)){_0x116c93=_0x168238=0x40;}else if(isNaN(_0x408df3)){_0x168238=0x40;}continue;case'5':_0x64fc7f=_0x5173ee[_0x2491('6e','1KJz')](_0x5173ee[_0x2491('6f','26)2')](_0x5173ee['vlYpk'](_0x54d809,0x3),0x4),_0x5173ee[_0x2491('70','GDd]')](_0x3a550f,0x4));continue;case'6':_0x54d809=input[_0x2491('71','W#EI')](_0x121d08++);continue;case'7':_0x3a550f=input[_0x2491('72','#S(^')](_0x121d08++);continue;case'8':_0x4a010d=_0x54d809>>0x2;continue;}break;}}return _0x48dfda;}else{_0x3690ad+=String[_0x2491('73','Guey')](_0x4ce690);_0x5ac67b++;}}else if(_0x47d9b9['aeEqH'](_0x4ce690,0xbf)&&_0x4ce690<0xe0){_0x357bf1=_0x3f657c[_0x2491('74','ybLL')](_0x47d9b9[_0x2491('75','ROo[')](_0x5ac67b,0x1));_0x3690ad+=String[_0x2491('76','TEF#')](_0x47d9b9[_0x2491('77','#S(^')](_0x47d9b9['hMsjS'](_0x4ce690&0x1f,0x6),_0x47d9b9[_0x2491('78','sQa%')](_0x357bf1,0x3f)));_0x5ac67b+=0x2;}else{_0x357bf1=_0x3f657c['charCodeAt'](_0x5ac67b+0x1);_0xa5c206=_0x3f657c[_0x2491('79','HdHS')](_0x5ac67b+0x2);_0x3690ad+=String[_0x2491('54','ybLL')](_0x47d9b9[_0x2491('7a','R^b9')](_0x4ce690&0xf,0xc)|_0x47d9b9[_0x2491('7b','F6XX')](_0x47d9b9['CmHVz'](_0x357bf1,0x3f),0x6)|_0xa5c206&0x3f);_0x5ac67b+=0x3;}}continue;}break;}}};!(async()=>{var _0x5d9e82={'Mgndx':function(_0x220fc1,_0x501fb9){return _0x220fc1>>_0x501fb9;},'PteDN':function(_0x1e78f8,_0x4a5a23){return _0x1e78f8|_0x4a5a23;},'qzivY':function(_0x4960d9,_0x344c39){return _0x4960d9&_0x344c39;},'dQqtU':_0x2491('7c','#S(^'),'sRAJx':function(_0x5044aa,_0x203951){return _0x5044aa&_0x203951;},'QWnkO':function(_0x13b4b1,_0x47c280){return _0x13b4b1+_0x47c280;},'WpdiH':'undefined','gEiQV':function(_0x377edf){return _0x377edf();},'BxulK':function(_0x38c500,_0x5e32ae){return _0x38c500!==_0x5e32ae;},'LjriZ':_0x2491('7d','mGmo'),'gUvQA':function(_0x560624,_0x11a767){return _0x560624<_0x11a767;},'mLElW':_0x2491('7e','pmr9'),'yweiU':function(_0x9cf579,_0x288454){return _0x9cf579+_0x288454;},'VQRml':'XTWZt','poNvg':function(_0x11f2b3,_0x22929d){return _0x11f2b3+_0x22929d;},'ezhjM':_0x2491('7f','#S(^'),'ZnrrB':function(_0x277233,_0x4c9849){return _0x277233+_0x4c9849;},'KkZsp':function(_0x30b863){return _0x30b863();},'noOmB':'FpSat','WHUNu':function(_0x5711fb,_0x8f9b0b){return _0x5711fb+_0x8f9b0b;},'hixGI':function(_0x4af280,_0x560c97){return _0x4af280(_0x560c97);},'UrUze':_0x2491('80','tkr@'),'jNsck':function(_0x34cae1,_0x5786d3){return _0x34cae1+_0x5786d3;},'dkXWa':function(_0x1946bf,_0x5c77b0){return _0x1946bf+_0x5c77b0;}};cc=$[_0x2491('81','sQa%')]+'任务执行通知🔔';console['log'](_0x2491('82','C36@'));console[_0x2491('83','g3L%')]('Now\x20login(UTC+8):'+new Date(new Date()[_0x2491('84','n7j3')]())[_0x2491('85','18&K')]());if(typeof $request!==_0x5d9e82[_0x2491('86','R^b9')]){if(_0x2491('87','6u@R')!==_0x2491('88','S!zR')){$[_0x2491('89','xoan')]('【提示】请先前往获取cookie📲');}else{utftext+=String[_0x2491('8a','18&K')](_0x5d9e82[_0x2491('8b','n7j3')](c,0x6)|0xc0);utftext+=String[_0x2491('8c','irNs')](_0x5d9e82['PteDN'](_0x5d9e82[_0x2491('8d','tkr@')](c,0x3f),0x80));}}else if(!elongcashkey){$[_0x2491('8e','!RY$')](_0x2491('8f','SAbp')+$[_0x2491('90','Nv#4')]+']:开始下载脚本使用权限秘钥...');await _0x5d9e82[_0x2491('91','mGmo')](githubkey);}else{if(_0x5d9e82[_0x2491('92','Nv#4')](_0x5d9e82['LjriZ'],_0x5d9e82[_0x2491('93','GRUk')])){$['log'](_0x5d9e82[_0x2491('94','!RY$')]);}else{let _0xcc0986=elongcash[_0x2491('95','Yyq2')](_0xd4444d=>_0xd4444d['hd'])['map'](_0x39a26f=>({'uid':_0x39a26f['uid'],'sharecode':_0x39a26f[_0x2491('96','18&K')],'headers':JSON['parse'](_0x39a26f['hd'])}));console[_0x2491('97','Dc1K')](_0x2491('98',']Tzz')+$[_0x2491('99','Yyq2')]+_0x2491('9a','ROo['));console[_0x2491('8e','!RY$')](_0x2491('9b','C36@')+_0xcc0986[_0x2491('9c','g3L%')]+_0x2491('9d','i@jT'));for(let _0x25a20b=0x0;_0x5d9e82[_0x2491('9e','J5NS')](_0x25a20b,_0xcc0986[_0x2491('9f','EXL6')]);_0x25a20b++){tkList=_0xcc0986[_0x25a20b];if(!tkList[_0x2491('a0','sQa%')]){$['log'](_0x5d9e82['mLElW']);}else{$['log'](_0x2491('a1','irNs')+$['name']+']:开始验证~用户'+_0x5d9e82['yweiU'](_0x25a20b,0x1)+_0x2491('a2','tkr@'));if(z(_0x25a20b)){if(_0x5d9e82[_0x2491('a3','R^b9')](_0x5d9e82[_0x2491('a4','i@jT')],_0x2491('a5','26)2'))){$['log']('用户'+_0x5d9e82[_0x2491('a6','F6XX')](_0x25a20b,0x1)+_0x2491('a7','GRUk')+tkList['uid']+'):~\x20秘钥验证成功！🎉');$[_0x2491('a8','Ucxa')](_0x2491('a9','JtGx')+$['name']+_0x2491('aa','Nv#4')+_0x5d9e82[_0x2491('ab','R^b9')](_0x25a20b,0x1)+_0x2491('ac','1KJz'));await main(_0x25a20b);}else{$['log'](e);return![];}}else{if(_0x2491('ad','OGa6')!==_0x5d9e82[_0x2491('ae','ybLL')]){return!![];}else{$['log']('用户'+_0x5d9e82['ZnrrB'](_0x25a20b,0x1)+_0x2491('af','3&cA')+tkList[_0x2491('b0','pmr9')]+_0x2491('b1','jz7E'));$['log']('\x0a🗝['+$['name']+_0x2491('b2','ROo['));await githubkey(_0x2491('b3','!RY$'));$[_0x2491('16','sQa%')]('\x0a🗝['+$[_0x2491('b4','zlK)')]+_0x2491('b5','Yyq2')+(_0x25a20b+0x1)+_0x2491('b6','s1bD'));if(_0x5d9e82[_0x2491('b7','ybLL')](z)){if(_0x5d9e82[_0x2491('b8','EXL6')](_0x5d9e82[_0x2491('b9','HdHS')],_0x2491('ba','mGmo'))){$['log']('用户'+(_0x25a20b+0x1)+_0x2491('bb','J5NS')+tkList['uid']+_0x2491('bc','lUX!'));$[_0x2491('bd','3&cA')](_0x2491('be','S!zR')+$['name']+']:~\x20System💲/执行脚本\x0a开始执行\x20User'+_0x5d9e82['WHUNu'](_0x25a20b,0x1)+_0x2491('bf','26)2'));await _0x5d9e82[_0x2491('c0','SAbp')](main,_0x25a20b);}else{utftext+=String['fromCharCode'](_0x5d9e82[_0x2491('c1','lUX!')](c,0xc)|0xe0);utftext+=String[_0x2491('c2','ROo[')](_0x5d9e82['PteDN'](_0x5d9e82[_0x2491('c3','Yyq2')](_0x5d9e82['Mgndx'](c,0x6),0x3f),0x80));utftext+=String[_0x2491('c4','mGmo')](_0x5d9e82[_0x2491('c5','W#EI')](c&0x3f,0x80));}}else{if(_0x5d9e82[_0x2491('c6','hy%D')](_0x5d9e82[_0x2491('c7','Dc1K')],_0x2491('c8','irNs'))){$[_0x2491('c9','GRUk')]('❌用户'+_0x5d9e82['jNsck'](_0x25a20b,0x1)+'(ID:'+tkList[_0x2491('ca',']Tzz')]+_0x2491('cb','F6XX'));$[_0x2491('cc','CIY&')]('\x0a⚠️用户'+_0x5d9e82[_0x2491('cd','pmr9')](_0x25a20b,0x1)+_0x2491('ce','lUX!')+tgmarkcode+tkList[_0x2491('cf','GRUk')]);$[_0x2491('d0','26)2')]($['name'],'',_0x2491('d1','R^b9')+_0x5d9e82[_0x2491('d2','OGa6')](_0x25a20b,0x1)+_0x2491('d3','JtGx')+tgmarkcode+tkList['sharecode']);}else{output=_0x5d9e82[_0x2491('d4','s1bD')](output,String[_0x2491('d5','#S(^')](chr2));}}}}}}}}})()[_0x2491('d6','xoan')](_0x582f50=>{$[_0x2491('d7','Yyq2')]('','❌\x20'+$[_0x2491('d8','pmr9')]+',\x20失败!\x20原因:\x20'+_0x582f50+'!','');})[_0x2491('d9','i@jT')](()=>{$['done']();});function initTaskOptions(_0x3313ae,_0x5f80d2){return{'url':host+'/'+_0x3313ae,'headers':{'Accept':'application/json,\x20text/plain,\x20*/*','Origin':_0x2491('da','sQa%'),'Accept-Encoding':_0x2491('db','Dc1K'),'Cookie':tkList[_0x2491('dc','Oez5')],'Content-Type':_0x2491('dd','yYja'),'Host':_0x2491('de','3&cA'),'Referer':_0x2491('df','S!zR'),'Connection':'keep-alive','User-Agent':_0x2491('e0','ybLL'),'Accept-Language':_0x2491('e1','Dc1K')},'body':_0x5f80d2};}async function main(_0x1e0439){var _0x2468b4={'lANmZ':function(_0x51b62d,_0x4526bc){return _0x51b62d+_0x4526bc;},'yCPHl':function(_0x5294eb,_0x304848){return _0x5294eb|_0x304848;},'PSFEN':function(_0x1a859d,_0x42e515){return _0x1a859d<<_0x42e515;},'WOagi':function(_0x300e01,_0x2169a4){return _0x300e01&_0x2169a4;},'BTfzJ':function(_0x3611a5,_0x4544c4){return _0x3611a5<<_0x4544c4;},'tAnzz':function(_0x4bb3c5,_0xd739e6){return _0x4bb3c5&_0xd739e6;},'wZINA':_0x2491('e2','Yyq2'),'ylakg':function(_0x4badc9,_0x1eeba1){return _0x4badc9<_0x1eeba1;},'TDJNG':function(_0x3c85c9,_0x2e692e){return _0x3c85c9|_0x2e692e;},'SyQLx':function(_0x5ee78b,_0x3f188f){return _0x5ee78b+_0x3f188f;},'dQFMK':function(_0x71b869,_0x219805){return _0x71b869>>_0x219805;},'JYsnc':function(_0x5332bd,_0x23c9b5){return _0x5332bd|_0x23c9b5;},'gWiKa':function(_0x46bca4,_0x4b45ad){return _0x46bca4>>_0x4b45ad;},'mtfxq':function(_0x47090e,_0x42ec35){return _0x47090e!=_0x42ec35;},'oPLGW':'5|2|1|0|6|3|7|8|4','xrCvr':function(_0x674ec9,_0x505362){return _0x674ec9|_0x505362;},'LiKch':function(_0x119f44,_0x30b53a){return _0x119f44<<_0x30b53a;},'YKNtB':function(_0x481a38,_0x2e2bab){return _0x481a38&_0x2e2bab;},'jUmVJ':function(_0x5dc938,_0x8969d0){return _0x5dc938+_0x8969d0;},'uikbN':function(_0x2441f9,_0x2524c7){return _0x2441f9+_0x2524c7;},'mqhmu':function(_0x53dd76,_0x5092cf){return _0x53dd76&_0x5092cf;},'gqClq':function(_0xf816b5,_0x3dc428){return _0xf816b5+_0x3dc428;},'LZoaT':function(_0x20743c){return _0x20743c();},'OmCxx':function(_0x11bf08){return _0x11bf08();},'GbYHl':function(_0x49f78,_0x51fa57){return _0x49f78!==_0x51fa57;},'BIenr':'tEqsE','cnZTX':function(_0x1b3a9d,_0x58cce2){return _0x1b3a9d===_0x58cce2;},'CmPeV':_0x2491('e3','6u@R'),'nCkOR':function(_0x31c7ca,_0x29d3f3){return _0x31c7ca-_0x29d3f3;},'RbdCr':'→视频任务判定失效❌','vDGlS':function(_0x121430,_0x596864){return _0x121430==_0x596864;},'pcGUS':function(_0x36c64f,_0x47593d){return _0x36c64f<=_0x47593d;},'TgPiB':function(_0x4b738a,_0x26624c){return _0x4b738a<=_0x26624c;},'uRHQY':function(_0x2467dc,_0xc721d1){return _0x2467dc<=_0xc721d1;},'wIDzl':function(_0x61a57d,_0x2db919){return _0x61a57d<=_0x2db919;},'IQKpS':function(_0x44dfb7,_0x30fa7d){return _0x44dfb7==_0x30fa7d;},'pOXFh':'sWdZL','PxjJI':function(_0x305313,_0x3f95b1){return _0x305313+_0x3f95b1;},'yKTcc':function(_0x59b14a,_0x3836f8){return _0x59b14a(_0x3836f8);},'AJMBP':_0x2491('e4','Dc1K'),'dsXAa':_0x2491('e5','mGmo'),'zffYA':function(_0x52a170,_0x4c5ac5){return _0x52a170+_0x4c5ac5;},'VYxFP':function(_0x5ee29e){return _0x5ee29e();}};console['log'](_0x2491('e6','mCK8')+$[_0x2491('e7','OGa6')]+_0x2491('e8','1KJz')+(_0x1e0439+0x1)+_0x2491('e9','C36@'));await userAccount();console[_0x2491('ea','C36@')](_0x2491('eb','18&K')+$[_0x2491('ec','W#EI')]+_0x2491('ed','EXL6')+_0x2468b4['gqClq'](_0x1e0439,0x1)+_0x2491('ee','irNs'));await _0x2468b4[_0x2491('ef','26)2')](userTaskList);console['log'](_0x2491('f0','6u@R')+$[_0x2491('f1','S!zR')]+']:~\x20User'+_0x2468b4[_0x2491('f2','zlK)')](_0x1e0439,0x1)+_0x2491('f3','Oez5'));await _0x2468b4[_0x2491('f4','18&K')](pigInfo);console['log'](_0x2491('f5','s1bD')+$[_0x2491('f6','GRUk')]+']:~\x20User'+(_0x1e0439+0x1)+_0x2491('f7','Guey'));if(taskSignState){if(_0x2468b4['GbYHl'](_0x2491('f8','W#EI'),'ySiEH')){enc4=0x40;}else{console['log'](_0x2491('f9','WzjD'));}}else{await _0x2468b4['OmCxx'](runsign);}console[_0x2491('fa','HdHS')](_0x2491('fb','zlK)')+$['name']+']:~\x20User'+(_0x1e0439+0x1)+_0x2491('fc',']Tzz'));if(taskVideoStateCheck){if(taskVideoState){if(_0x2468b4[_0x2491('fd','HZB4')]!==_0x2468b4[_0x2491('fe','3&cA')]){c2=utftext[_0x2491('ff','Guey')](_0x2468b4['lANmZ'](_0x1e0439,0x1));c3=utftext[_0x2491('100','F6XX')](_0x2468b4[_0x2491('101','EXL6')](_0x1e0439,0x2));string+=String[_0x2491('102','Yyq2')](_0x2468b4[_0x2491('103','S!zR')](_0x2468b4[_0x2491('104','g3L%')](_0x2468b4['PSFEN'](_0x2468b4[_0x2491('105','tkr@')](c,0xf),0xc),_0x2468b4[_0x2491('106','C36@')](_0x2468b4[_0x2491('107','!RY$')](c2,0x3f),0x6)),c3&0x3f));_0x1e0439+=0x3;}else{console[_0x2491('108','mCK8')](_0x2491('109',']Tzz'));}}else{if(_0x2468b4[_0x2491('10a','i@jT')](_0x2468b4[_0x2491('10b','S!zR')],_0x2468b4[_0x2491('10c','yYja')])){const _0x1f4790=_0x2468b4[_0x2491('10d','EXL6')](0xa,taskVideoTimes);for(let _0x1e0439=0x0;_0x2468b4[_0x2491('10e','jz7E')](_0x1e0439,_0x1f4790);_0x1e0439++){await runvideo(_0x1e0439);await $[_0x2491('10f','pmr9')](0xbb8);}}else{var _0x10b8d8=_0x2468b4[_0x2491('110','#S(^')][_0x2491('111','SAbp')]('|'),_0x20ba31=0x0;while(!![]){switch(_0x10b8d8[_0x20ba31++]){case'0':_0x1e7f8a=Base64['utf8decode'](_0x1e7f8a);continue;case'1':var _0xf5eef6,_0xbb14db,_0x3ee8c6;continue;case'2':while(_0x2468b4['ylakg'](_0xaeabce,input['length'])){var _0x2984f6=_0x2491('112','F6XX')['split']('|'),_0x496c37=0x0;while(!![]){switch(_0x2984f6[_0x496c37++]){case'0':_0x3ee8c6=_0x2468b4[_0x2491('113','TEF#')](_0x2468b4[_0x2491('114','TEF#')](_0x26e32b,0x3)<<0x6,_0x4fe93b);continue;case'1':_0x16c478=this[_0x2491('28','mGmo')][_0x2491('33','F6XX')](input[_0x2491('67','1KJz')](_0xaeabce++));continue;case'2':_0x1e7f8a=_0x2468b4['SyQLx'](_0x1e7f8a,String[_0x2491('115','EXL6')](_0xf5eef6));continue;case'3':_0x4fe93b=this['keyStr'][_0x2491('116','GRUk')](input[_0x2491('117','lUX!')](_0xaeabce++));continue;case'4':_0xbb14db=_0x2468b4[_0x2491('118',']Tzz')](_0x2468b4[_0x2491('119','Nv#4')](_0x2468b4[_0x2491('11a','g3L%')](_0x16c478,0xf),0x4),_0x2468b4['dQFMK'](_0x26e32b,0x2));continue;case'5':_0xf5eef6=_0x2468b4['JYsnc'](_0x2468b4[_0x2491('11b','yYja')](_0x36bed7,0x2),_0x2468b4['gWiKa'](_0x16c478,0x4));continue;case'6':if(_0x2468b4['mtfxq'](_0x4fe93b,0x40)){_0x1e7f8a=_0x2468b4[_0x2491('11c','i@jT')](_0x1e7f8a,String[_0x2491('11d',']Tzz')](_0x3ee8c6));}continue;case'7':if(_0x2468b4['mtfxq'](_0x26e32b,0x40)){_0x1e7f8a=_0x2468b4[_0x2491('11e','Yyq2')](_0x1e7f8a,String[_0x2491('11f','n7j3')](_0xbb14db));}continue;case'8':_0x36bed7=this[_0x2491('120','jz7E')][_0x2491('121','TEF#')](input[_0x2491('122','!RY$')](_0xaeabce++));continue;case'9':_0x26e32b=this[_0x2491('123','zlK)')][_0x2491('124','3&cA')](input['charAt'](_0xaeabce++));continue;}break;}}continue;case'3':return _0x1e7f8a;case'4':input=input['replace'](/[^A-Za-z0-9\+\/\=]/g,'');continue;case'5':var _0x1e7f8a='';continue;case'6':var _0x36bed7,_0x16c478,_0x26e32b,_0x4fe93b;continue;case'7':var _0xaeabce=0x0;continue;}break;}}}}else{console[_0x2491('1a','SAbp')](_0x2468b4[_0x2491('125','pmr9')]);}console['log'](_0x2491('126','!RY$')+$['name']+_0x2491('127','OGa6')+(_0x1e0439+0x1)+'💲金币气泡');await goldList();console['log'](_0x2491('128','HdHS')+$['name']+']:~\x20User'+(_0x1e0439+0x1)+_0x2491('129','yYja'));await guessTaskinfo();await _0x2468b4[_0x2491('12a','1KJz')](guessWaitTaskinfo);await guessResultList(taskcodeNum);if(_0x2468b4['vDGlS'](h,0x3)&&m<=0xf||_0x2468b4[_0x2491('12b','Nv#4')](h,0x0)&&_0x2468b4[_0x2491('12c','EXL6')](m,0xf)||h==0x8&&_0x2468b4[_0x2491('12d','Dc1K')](m,0xf)||_0x2468b4[_0x2491('12e','1KJz')](h,0xc)&&_0x2468b4[_0x2491('12f','HZB4')](m,0xf)||h==0x11&&_0x2468b4[_0x2491('130','1KJz')](m,0xf)||h==0x14&&_0x2468b4[_0x2491('131','JtGx')](m,0xf)||_0x2468b4[_0x2491('132','jz7E')](h,0x17)&&_0x2468b4['wIDzl'](m,0xf)){if(_0x2491('133','3&cA')!==_0x2468b4[_0x2491('134','lUX!')]){var _0x2a313f=_0x2468b4[_0x2491('135','mGmo')][_0x2491('136','i@jT')]('|'),_0x9fc21a=0x0;while(!![]){switch(_0x2a313f[_0x9fc21a++]){case'0':enc1=chr1>>0x2;continue;case'1':chr3=input[_0x2491('137','26)2')](_0x1e0439++);continue;case'2':chr2=input['charCodeAt'](_0x1e0439++);continue;case'3':enc3=_0x2468b4['xrCvr'](_0x2468b4['LiKch'](_0x2468b4[_0x2491('138','26)2')](chr2,0xf),0x2),chr3>>0x6);continue;case'4':output=_0x2468b4[_0x2491('139','xoan')](_0x2468b4[_0x2491('13a','R^b9')](_0x2468b4[_0x2491('13b','18&K')](_0x2468b4[_0x2491('13c','CIY&')](output,this[_0x2491('13d','i@jT')]['charAt'](enc1)),this[_0x2491('13e','HZB4')][_0x2491('13f','HdHS')](enc2)),this[_0x2491('140','Ucxa')][_0x2491('141','mGmo')](enc3)),this['keyStr'][_0x2491('142','Cwpy')](enc4));continue;case'5':chr1=input[_0x2491('ff','Guey')](_0x1e0439++);continue;case'6':enc2=_0x2468b4[_0x2491('143','3&cA')](_0x2468b4['YKNtB'](chr1,0x3),0x4)|_0x2468b4[_0x2491('144','mCK8')](chr2,0x4);continue;case'7':enc4=_0x2468b4[_0x2491('145','HdHS')](chr3,0x3f);continue;case'8':if(isNaN(chr2)){enc3=enc4=0x40;}else if(isNaN(chr3)){enc4=0x40;}continue;}break;}}else{console[_0x2491('146','6u@R')](_0x2491('a9','JtGx')+$['name']+_0x2491('147','Nv#4')+_0x2468b4[_0x2491('148','zlK)')](_0x1e0439,0x1)+_0x2491('149','lUX!'));await _0x2468b4[_0x2491('14a','26)2')](githubkey,'again');await sharecheck();if(_0x2468b4[_0x2491('14b','HZB4')](sharecode,0x0)){await runshare();}else{if(_0x2468b4['AJMBP']===_0x2468b4[_0x2491('14c','Nv#4')]){console['log'](_0x2491('14d','Guey'));}else{console[_0x2491('146','6u@R')](_0x2491('14e','Ucxa'));}}}}console[_0x2491('14f','zlK)')]('\x0a🐲['+$[_0x2491('150','Oez5')]+']:~\x20User'+_0x2468b4[_0x2491('151','EXL6')](_0x1e0439,0x1)+'💲夺宝任务\x20');await _0x2468b4[_0x2491('152','Cwpy')](guessFinishList);}function z(){var _0x38ed3d={'BMbPH':function(_0x41e978,_0x5d9c8a){return _0x41e978>_0x5d9c8a;},'eblhK':function(_0x455fe8,_0x89e39){return _0x455fe8<<_0x89e39;},'sAYGV':function(_0xeeb684,_0xbe1610){return _0xeeb684>>_0xbe1610;},'NUnhz':function(_0x76ae72,_0x477413){return _0x76ae72<<_0x477413;},'LcUXL':function(_0x4efb40,_0x2d053c){return _0x4efb40+_0x2d053c;},'yvJkF':function(_0x365e30,_0x356b15){return _0x365e30!=_0x356b15;},'ShISG':function(_0x1c7ee5,_0x1dc352){return _0x1c7ee5===_0x1dc352;},'VYpnn':'LtXkW','GGMuM':_0x2491('153','Ucxa'),'gcZza':function(_0x4a8898,_0x2a6c0e){return _0x4a8898===_0x2a6c0e;},'lsGfM':'sWfwm','RUjRa':function(_0x1f6853,_0x50413e){return _0x1f6853!==_0x50413e;},'rkTES':'YcNnt'};const _0x5b4e57=decodeURIComponent(Base64[_0x2491('154','xoan')](elongcashkey));function _0x1baefc(_0x11a0e9){var _0x5813ea={'ABjaF':function(_0x28d886,_0x153b15){return _0x38ed3d[_0x2491('155','ybLL')](_0x28d886,_0x153b15);},'sJuzH':function(_0x510ffb,_0x55ee07){return _0x38ed3d['sAYGV'](_0x510ffb,_0x55ee07);},'truZs':function(_0x5d68f0,_0x436330){return _0x5d68f0|_0x436330;},'gngpP':function(_0x32279f,_0x28fa12){return _0x38ed3d['NUnhz'](_0x32279f,_0x28fa12);},'yKNWw':function(_0x535f25,_0x9bfc55){return _0x38ed3d['LcUXL'](_0x535f25,_0x9bfc55);},'SdnsL':function(_0x3f088c,_0x440a62){return _0x38ed3d[_0x2491('156','n7j3')](_0x3f088c,_0x440a62);},'snWrv':function(_0x4984db,_0x46dfcc){return _0x4984db+_0x46dfcc;}};try{if(_0x38ed3d[_0x2491('157','GRUk')](_0x38ed3d[_0x2491('158','JtGx')],_0x38ed3d[_0x2491('159','F6XX')])){$['log']('','❌\x20'+$[_0x2491('15a',']Tzz')]+',\x20失败!\x20原因:\x20'+e+'!','');}else{if(_0x38ed3d['BMbPH'](_0x5b4e57[_0x2491('15b','ROo[')](_0x11a0e9),-0x1)){if(_0x38ed3d[_0x2491('15c','J5NS')](_0x38ed3d[_0x2491('15d','JtGx')],_0x2491('15e','3&cA'))){enc1=this[_0x2491('13e','HZB4')]['indexOf'](input['charAt'](i++));enc2=this[_0x2491('15f','R^b9')][_0x2491('160','WzjD')](input[_0x2491('37','yYja')](i++));enc3=this['keyStr'][_0x2491('161','J5NS')](input[_0x2491('162','WzjD')](i++));enc4=this['keyStr'][_0x2491('33','F6XX')](input['charAt'](i++));chr1=_0x5813ea[_0x2491('163','HZB4')](enc1,0x2)|_0x5813ea['sJuzH'](enc2,0x4);chr2=_0x5813ea[_0x2491('164','C36@')](_0x5813ea[_0x2491('165','g3L%')](enc2&0xf,0x4),enc3>>0x2);chr3=_0x5813ea[_0x2491('164','C36@')](_0x5813ea['gngpP'](enc3&0x3,0x6),enc4);output=_0x5813ea[_0x2491('166','J5NS')](output,String['fromCharCode'](chr1));if(_0x5813ea[_0x2491('167','irNs')](enc3,0x40)){output=_0x5813ea[_0x2491('168','26)2')](output,String[_0x2491('169','Ucxa')](chr2));}if(_0x5813ea[_0x2491('16a','s1bD')](enc4,0x40)){output=_0x5813ea[_0x2491('16b','n7j3')](output,String[_0x2491('40','Oez5')](chr3));}}else{return!![];}}}}catch(_0x4e9d7a){if(_0x38ed3d['RUjRa'](_0x38ed3d[_0x2491('16c','Cwpy')],_0x38ed3d['rkTES'])){try{if(_0x38ed3d[_0x2491('16d','s1bD')](_0x5b4e57[_0x2491('33','F6XX')](_0x11a0e9),-0x1)){return!![];}}catch(_0x3dbbe8){$['log'](_0x3dbbe8);return![];}}else{$['log'](_0x4e9d7a);return![];}}}if(_0x1baefc(tkList['sharecode'])){return!![];}else{return![];}};_0xodJ='jsjiami.com.v6';
//============================
//+++++++++ 函数部分 ++++++++++
//============================
async function surprisedTask(SurprisedId, SurprisedNumber) {
  return new Promise((resolve) => {
    const options = initTaskOptions("receive-prize", `{"periodNumber":"${SurprisedNumber}","treasureId":"${SurprisedId}","mobile":"","contactsName":"","idCardNo":"","address":"","cityName":"","activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":"0"}`);
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
            const code = data.businesscode
            switch (code) {
              case 0:
                console.log("\n🎁 成功领取夺宝任务奖励!!!");
                $.msg(cc, '', "🎁 成功领取夺宝任务奖励!!!10秒内送到...");
                break;
              case 8:
                console.log("\n🎁 你的奖励掉在路上了...稍后再试!!!");
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function guessFinishList() {
  return new Promise((resolve) => {
    const options = initTaskOptions(`my-hunt/period/list/paging?pageIndex=1&pageSize=10&month=${nowmouth}&lotteryStatus=2&activityCode=treasure`);
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
            if (!data.body.elements) {
              console.log("\n👵目前你还没有中过奖,多扶老奶奶过马路在试试👴");
            } else {
              const taskidArr = data.body.elements
              SurprisedId = taskidArr[0].treasureId
              SurprisedNumber = taskidArr[0].periodNumber
              const taskStateCode = taskidArr[0].state
              switch (taskStateCode) {
                case 4:
                  console.log("\n→有未领取的夺宝任务,开始领取奖励");
                  await surprisedTask(SurprisedId, SurprisedNumber);
                  break;
                case 5:
                  console.log("\n→没有未领取的夺宝任务");
                  break;
                default:
                  console.log(`**** guessFinishList ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
                  $.log(`\n‼️${resp.statusCode}[调试log]:${resp.body}`);
              }
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
//++++++++++++++++++++++++++++++++++++
async function guessTaskinfo() {
  return new Promise((resolve) => {
    const options = initTaskOptions("period/list/paging?pageIndex=1&pageSize=10&searchType=2&activityCode=treasure");
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
            const code = data.businesscode
            const taskidArr = data.body.elements
            switch (code) {
              case 0:
                const cashTaskFilter = taskidArr.filter(name => name.treasureName.indexOf("现金") > 1)[0];
                cashTaskName = cashTaskFilter.treasureName
                cashTaskValue = cashTaskFilter.treasureValue
                break;
              default:
                console.log(`**** guessTask ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function guessWaitTaskinfo() {
  return new Promise((resolve) => {
    const options = initTaskOptions(`my-hunt/period/list/paging?pageIndex=1&pageSize=10&month=${nowmouth}&lotteryStatus=1&activityCode=treasure`);
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
            const code = data.businesscode
            const taskidArr = data.body.elements
            switch (code) {
              case 0:
                const cashTaskFilter = taskidArr.filter(name => name.treasureName)[0];
                cashWaitTaskName = cashTaskFilter.treasureName
                break;
              default:
                console.log(`**** guessTask ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function guessResultList(taskcodeNum) {
  return new Promise((resolve) => {
    const options = initTaskOptions(`my-hunt/period/list/paging?pageIndex=1&pageSize=10&month=${nowmouth}&lotteryStatus=1&activityCode=treasure`);
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
            const code = data.businesscode
            const taskidArr = data.body.elements
            const taskcoin = cashTaskValue * taskcodeNum
            switch (code) {
              case 0:
                if (taskidArr === null && mycoin >= taskcoin) {
                  console.log("→还未参与任何夺宝任务");
                  await guessTask();
                } else if (taskidArr !== null) {
                  taskidArr.forEach(task => console.log(`→已报名夺宝任务${task.treasureName}${task.periodNumber}场次`))
                  await guessTask();
                } else {
                  console.log(`→账户余额不够参与${cashTaskName}夺宝任务❌`);
                }
                break;
              default:
                console.log(`**** guessResultList ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function guessTask() {
  return new Promise((resolve) => {
    const options = initTaskOptions("period/list/paging?pageIndex=1&pageSize=10&searchType=2&activityCode=treasure");
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
            const code = data.businesscode
            const taskidArr = data.body.elements
            switch (code) {
              case 0:
                console.log("→可参加的夺宝任务清单:");
                taskidArr.forEach(info => console.log(`[ID${info.treasureId}]${info.treasureName}:第${info.periodNumber}场`));
                const cashTaskFilter = taskidArr.filter(name => name.treasureId == setTaskId)[0];
                if (cashTaskFilter == undefined) {
                  $.msg(cc, `⚠️夺宝任务ID${setTaskId}无法执行`,`🤳请到BOXJS修改任务ID\n`);
                }else {
                  //任务场次
                  cashTaskNumber = cashTaskFilter.periodNumber
                  //任务id
                  tasktreasureId = cashTaskFilter.treasureId
                  //任务名
                  guessTaskName = cashTaskFilter.treasureName
                  //花费金币
                  guessTaskValue = cashTaskFilter.treasureValue
                  await runguess(taskcodeNum, guessTaskName, guessTaskValue, cashTaskNumber);
                }
                break;
              default:
                console.log(`**** guessTask ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function guessTaskList() {
  return new Promise((resolve) => {
    const options = initTaskOptions("period/list/paging?pageIndex=1&pageSize=10&searchType=2&activityCode=treasure");
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
            const code = data.businesscode
            const taskidArr = data.body.elements
            switch (code) {
              case 0:
                console.log("→可参加的夺宝任务清单:");
                taskidArr.forEach(info => console.log(`[ID${info.treasureId}]${info.treasureName}:第${info.periodNumber}场`));
                break;
              default:
                console.log(`**** guessTask ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function runguess(taskcodeNum, guessTaskName, guessTaskValue, cashTaskNumber) {
  return new Promise((resolve) => {
    const options = initTaskOptions("exchange-coupon-code", `{"buyCount":${taskcodeNum},"periodNumber":${cashTaskNumber},"treasureId":${tasktreasureId},"activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
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
            const code = data.businesscode
            switch (code) {
              case 1008:
              console.log(`\n\n⚠️${guessTaskName}夺宝码已达上限,如需更换任务,请到BOXJS修改任务ID`);
              $.msg(cc, '', `⚠️夺宝任务${guessTaskName}${cashTaskNumber}场夺宝码已达上限\n🥡如需更换任务,请到BOXJS修改任务ID`);
                break;
              case 1007:
                console.log(`\n🔐请先成功解锁未解锁夺宝任务,手动参加夺宝解锁活动`);
                break;
              case 0:
                console.log(`→ 成功报名夺宝任务${guessTaskName}${cashTaskNumber}场`);
                $.msg(cc, '', `📍成功报名夺宝任务${guessTaskName}${cashTaskNumber}场`);
                break;
              default:
                console.log(`**** runguess ****\nBusinesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function txcash() {
  return new Promise((resolve) => {
    const options = initTaskOptions("common/withdrawal/apply", `{"amount":0.3,"activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
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
            const code = data.businesscode
            switch (code) {
              case 0:
                console.log("→成功提现0.3元");
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function runPigCoin(pigValue) {
  return new Promise((resolve) => {
    const options = initTaskOptions("main-page/receive-gold", `{"treasureValue":${pigValue},"frontType":1,"activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
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
            const code = data.businesscode
            switch (code) {
              case 0:
                console.log(`→成功收取小猪扑满${pigValue}金币`);
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function pigInfo() {
  return new Promise((resolve) => {
    const options = initTaskOptions("main-page?activityCode=treasure");
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
            const code = data.businesscode
            pigValue = data.body.piggyBankValue
            switch (code) {
              case 0:
                if (pigValue === 0) {
                  console.log(`→小猪扑满没有金币,今天已收完 🎉`);
                } else {
                  console.log(`→小猪扑满有${pigValue}金币,开始收取金币`);
                  await runPigCoin(pigValue);
                }

                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function rungold(rewardId, i) {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/gold-collection", `{"rewardId":"${rewardId}","activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
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
            const code = data.businesscode
            switch (code) {
              case 0:
                console.log(`→收取第${i+1}个气泡成功🎉`);
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function goldList() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/gold/list?activityCode=treasure");
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败，请检查自身设备网络情况");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            const code = data.businesscode
            switch (code) {
              case 0:
                data.body.forEach((info) => console.log(`→${info.remark}:${info.rewardId}`));
                rewardIdList = data.body.map(id => id.rewardId);
                if (rewardIdList.length !== 0) {
                  console.log(`→小计:共有${rewardIdList.length}个任务金币未收取`);
                  for (let i = 0; i < rewardIdList.length; i++) {
                    let rewardId = rewardIdList[i]
                    console.log(rewardId);
                    await rungold(rewardId, i);
                    await $.wait(2000);
                  }
                } else {
                  console.log(`→没有任务金币可收取 🎉`);
                }
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function runvideo(i) {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/receive-reward", `{"taskCode":"10004","activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
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
            const code = data.businesscode
            switch (code) {
              case 100:
                console.log(`🗣${data.retdesc}`);
                break;
              case 0:
                $.log(`→领取视频第${i+1}次奖励:${data.body.treasureValue}金币`)
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function runsign() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/receive-reward", `{"taskCode":"10000","activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
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
            const code = data.businesscode
            switch (code) {
              case 100:
                console.log(`🗣${data.retdesc}`);
                break;
              case 0:
                $.log(`→领取签到奖励:${data.body.treasureValue}金币`)
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function sharecheck() {
  let sharecodeGroup = Base64.decode(elongcashkey);
  let sharecodeGroupList = JSON.parse(sharecodeGroup);
  let randomid = Random(0, sharecodeGroupList.length - 1);
  let userCodeList = sharecodeGroupList[randomid].code;
  let userCodeLength = userCodeList.length;
  let randomcode = Random(0, userCodeLength - 1);
  shareRandomId = sharecodeGroupList[randomid].code[randomcode];
  return new Promise((resolve) => {
    const options = initTaskOptions("task/receive-reward", `{"fromUnionId":"${shareRandomId}","taskCode":"10001","helpPreValid":1,"activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
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
            sharecode = data.businesscode
            switch (sharecode) {
              case 2:
                console.log("→你的账号已黑号,不能提现可以玩夺宝~");
                break;
              case 6:
                console.log("→你的账号已黑号,不能提现可以玩夺宝~");
                break;
              case 101:
                console.log("→亲,请不要助力自己欧~~");
                break;
              case 102:
                console.log("→今天助力次数已经用完~~");
                break;
              case 100:
                console.log("→七天只可以助力同一个号两次呢~");
                break;
              case 0:
                console.log("→可以助力,开始尝试助力~");
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function runshare() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task/receive-reward", `{"fromUnionId":"${shareRandomId}","taskCode":"10001","activityCode":"treasure","tcMemberId":"","platFrom":1,"channel":${taskChannel}}`);
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
            console.log(`🃏互助码${randomid}号的第${randomcode+1}码`);
            console.log(shareRandomId);
            code = data.businesscode
            switch (code) {
              case 2:
                console.log("→你的账号已黑号,不能提现可以玩夺宝~");
                break;
              case 6:
                console.log("→你的账号已黑号,不能提现可以玩夺宝~");
                break;
              case 101:
                console.log("→亲,请不要助力自己欧~~");
                break;
              case 102:
                console.log("→今天助力次数已经用完~~");
                break;
              case 100:
                console.log("→七天只可以助力同一个号两次呢~");
                break;
              case 0:
                console.log("👏 助力成功");
                break;
              default:
                console.log(`Businesscode:${data.businesscode}\nMessages:${data.retdesc}`);
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
async function userAccount() {
  return new Promise((resolve) => {
    const options = initTaskOptions("account?activityCode=treasure");
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
            mycoin = data.body.accountAmount
            // for (let body of Object.keys(data.body)) {
            //   console.log(`${body}:${data.body[body]}`);
            // }
            $.log(`→你的助力码为:${data.body.unionId}\n→目前金币${data.body.accountAmount},约${data.body.canWithdrawalAmount}元,好友助力${data.body.riskLevel}位`)
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
async function userTaskList() {
  return new Promise((resolve) => {
    const options = initTaskOptions("task?activityCode=treasure");
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
            taskinfoList = data.body
            taskinfoList.forEach((task) => console.log(`→任务ID${task.taskCode}-${task.taskTitle}:${task.state ? "任务结束\n🔚" : "任务未完成\n🔜"}任务情况:${task.completedTimes}/${task.dayLimit}${task.unit}\n`));
            //签到任务状态
            taskSignState = taskinfoList.filter(state => state.taskCode == 10000)[0].state
            if (!taskinfoList[3]) {
              taskVideoStateCheck = false;
            } else {
              taskVideoStateCheck = true;
              //视频任务状态
              taskVideoState = taskinfoList.filter(state => state.taskCode == 10004)[0].state
              //视频任务次数
              taskVideoTimes = taskinfoList.filter(state => state.taskCode == 10004)[0].completedTimes
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
              elongcashkey = Base64.encode(data);
              if (elongcashkey) $.setdata(elongcashkey, 'elongcashkey');
              break;
            default:
              elongcashkey = Base64.encode(data);
              $.log(elongcashkey);
              if (elongcashkey) $.setdata(elongcashkey, 'elongcashkey');
              $.log(`\n🐲[${$.name}]:请重新执行脚本进行秘钥验证`);
              $.msg($.name, '', `🐲请重新执行脚本进行秘钥验证`);
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
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    isShadowrocket() {
      return "undefined" != typeof $rocket
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient[s](t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: i,
          ...r
        } = t;
        this.got[s](i, r).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date;
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
