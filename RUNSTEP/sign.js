'use strict';
!function(target, b) {
  /**
   * @return {undefined}
   */
  function init() {
    /**
     * @param {!Array} events
     * @param {?} fn
     * @param {boolean} useCapture
     * @return {undefined}
     */
    function on(events, fn, useCapture) {
      /** @type {number} */
      var i = 0;
      for (; i < events.length; i++) {
        document.addEventListener(events[i], fn, useCapture);
      }
    }
    /**
     * @param {!Object} t
     * @param {string} p
     * @return {?}
     */
    function find(t, p) {
      var prefix;
      var k;
      var id = p[0].toUpperCase() + p.slice(1);
      /** @type {number} */
      var i = 0;
      for (; i < VENDOR_PREFIXES.length;) {
        if (prefix = VENDOR_PREFIXES[i], k = prefix ? prefix + id : p, k in t) {
          return t[k];
        }
        i++;
      }
      return void 0;
    }
    var promise;
    var req;
    /** @type {string} */
    var body = "1.2.33";
    var script = target._page_type ? target._page_type : 0;
    var pullDownIsPulled = target._tt_config;
    var status = {
      FAIL : 0,
      UNUSE : 1,
      SUCCESS : 2
    };
    /** @type {string} */
    var key = "";
    /** @type {string} */
    var tmp = "";
    /** @type {number} */
    var error = 20;
    /** @type {null} */
    var s = null;
    /** @type {string} */
    var ref = "";
    /** @type {string} */
    var msg = "";
    /** @type {string} */
    var user = "";
    /** @type {string} */
    var id = "";
    /** @type {string} */
    var html = "";
    /** @type {string} */
    var version = "";
    /** @type {string} */
    var width = "";
    /** @type {string} */
    var appId = "";
    /** @type {string} */
    var name = "";
    /** @type {string} */
    var language = "";
    /** @type {string} */
    var last = "";
    /** @type {string} */
    var selectedOptionText = "";
    /** @type {string} */
    var sourceName = "";
    /** @type {string} */
    var type = document.getElementById("_tt_real_page_url") ? document.getElementById("_tt_real_page_url").getAttribute("href") : "";
    /** @type {number} */
    var exitCode = status.UNUSE;
    /** @type {number} */
    var statusNodeId = status.UNUSE;
    /** @type {number} */
    var statusValue = status.UNUSE;
    /** @type {number} */
    var state = status.SUCCESS;
    /** @type {number} */
    var text = status.UNUSE;
    var $ = {
      combineData : function() {
        var labels = {};
        /** @type {!Array<?>} */
        var properties = Array.prototype.slice.call(arguments);
        /** @type {number} */
        var j = 0;
        for (; j < properties.length; j++) {
          var i;
          for (i in properties[j]) {
            if (labels[i] && properties[j][i]) {
              labels[i] = properties[j][i];
            }
            if (!(labels[i] || void 0 === properties[j][i] || null === properties[j][i])) {
              labels[i] = properties[j][i];
            }
          }
        }
        return labels;
      },
      getOS : function() {
        /** @type {string} */
        var ua = navigator.userAgent;
        var device = {
          android : ua.match(/(Android)\s+([\d.]+)/),
          ipad : ua.match(/(iPad).*OS\s([\d_]+)/),
          iphone : ua.match(/(iPhone\sOS)\s([\d_]+)/)
        };
        /** @type {string} */
        var system = "";
        return device.android ? system = "android" : (device.ipad || device.iphone) && (system = "ios"), system;
      },
      isAwemeCompatible : function() {
        /** @type {boolean} */
        var e = false;
        try {
          e = $.isAweme() && "ios" == $.getOS() && parseInt(version.replace(/\./g, "")) < 182;
        } catch (t) {
        }
        return e;
      },
      isLiveCompatible : function() {
        /** @type {boolean} */
        var e = false;
        try {
          e = $.isLive() && "ios" == $.getOS() && parseInt(version.replace(/\./g, "")) < 420;
        } catch (t) {
        }
        return e;
      },
      isVideoArticleCompatible : function() {
        /** @type {boolean} */
        var e = false;
        try {
          e = $.isVideoArticle() && "ios" == $.getOS() && parseInt(version.replace(/\./g, "")) <= 794 && parseInt(version.replace(/\./g, "")) >= 779;
        } catch (t) {
        }
        return e;
      },
      isSuperCompatible : function() {
        /** @type {boolean} */
        var e = false;
        try {
          /** @type {boolean} */
          e = "1319" == appId && "android" == $.getOS() && parseInt(version.replace(/\./g, "")) <= 274 && parseInt(version.replace(/\./g, "")) >= 244;
        } catch (t) {
        }
        return e;
      },
      isArray : function(obj) {
        return "[object Array]" === Object.prototype.toString.call(obj);
      },
      isObject : function(obj) {
        return "[object Object]" === Object.prototype.toString.call(obj);
      },
      isExternal : function() {
        /** @type {boolean} */
        var 0 = !$.isToutiao() && /(UCBrowser|baiduboxapp|baidubrowser|MQQBrowser|QQ|MicroMessenger|Weibo|Opera|Firefox|MSIE|360SE|MetaSr|TheWorld|Firefox|LBBROWSER|Chrome|Safari)(\s|\/|_)(\S)/i.test(navigator.userAgent);
        return 0;
      },
      isToutiao : function() {
        /** @type {boolean} */
        var e = "http://nativeapp.toutiao.com" == document.referrer || /(NewsSocial|Explore|NewsArticle|NewsInHouse|joke_essay|Joke|VideoInHouse|VideoArticle|live_stream|aweme|open_news|TTAD|douyin_lite)(\s|\/|_)(\S)/i.test(navigator.userAgent);
        return e;
      },
      isMainToutiao : function() {
        return /(NewsArticle)(\s|\/|_)(\S)/i.test(navigator.userAgent);
      },
      isTTAD : function() {
        return /(TTAD)(\s|\/|_)(\S)/i.test(navigator.userAgent);
      },
      isVideoArticle : function() {
        return /(VideoArticle)(\s|\/|_)(\S)/i.test(navigator.userAgent);
      },
      isLive : function() {
        return /(live_stream)(\s|\/|_)(\S)/i.test(navigator.userAgent);
      },
      isAweme : function() {
        return /(aweme)(\s|\/|_)(\S)/i.test(navigator.userAgent);
      },
      isJoke : function() {
        return /(joke_essay|Joke)(\s|\/|_)(\S)/i.test(navigator.userAgent);
      },
      getDefer : function() {
        var result = {};
        /** @type {!Promise} */
        var source = new Promise(function(resolve, reject) {
          result.resolve = resolve;
          result.reject = reject;
        });
        return result.promise = source, result;
      },
      getLocationParam : function(name) {
        var $ = {
          QueryString : function(params) {
            /** @type {string} */
            var url = window.location.href;
            /** @type {!RegExp} */
            var val = new RegExp("[&?]{1}" + params + "=([^&?|^#?]*)", "ig");
            return url.match(val) ? decodeURI(url.match(val)[0].substr(params.length + 2)) : (url = document.referrer, url.match(val) ? decodeURI(url.match(val)[0].substr(params.length + 2)) : "");
          }
        };
        return $.QueryString(name);
      },
      queryToJson : function(url) {
        var name;
        var value;
        var val;
        var tupledArg;
        var componentsStr = url.substr(url.lastIndexOf("?") + 1);
        var authors = componentsStr.split("&");
        var aLen = authors.length;
        var result = {};
        /** @type {number} */
        var i = 0;
        for (; aLen > i; i++) {
          if (authors[i]) {
            tupledArg = authors[i].split("=");
            name = tupledArg[0];
            value = tupledArg[1];
            val = result[name];
            if ("undefined" == typeof val) {
              result[name] = value;
            } else {
              if (this.isArray(val)) {
                val.push(value);
              } else {
                /** @type {!Array} */
                result[name] = [val, value];
              }
            }
          }
        }
        return result;
      },
      getSdkPath : function() {
        /** @type {string} */
        var baseUrl = "";
        /** @type {string} */
        var filterValue = "";
        /** @type {!Array} */
        var query = ["s0.", "s1.", "s2.", "s3."];
        /** @type {number} */
        var queryLen = query.length;
        if (script) {
          /** @type {string} */
          baseUrl = script.src;
        } else {
          /** @type {!NodeList<Element>} */
          var Scripts = document.getElementsByTagName("script");
          /** @type {number} */
          var element = Scripts.length || 0;
          /** @type {number} */
          var filter = 0;
          for (; element > filter; filter++) {
            var src = Scripts[filter].src;
            if (-1 !== src.indexOf("toutiao-track-log")) {
              baseUrl = src;
            }
          }
        }
        /** @type {number} */
        filter = 0;
        for (; queryLen > filter; filter++) {
          if (-1 !== baseUrl.indexOf(query[filter])) {
            filterValue = query[filter];
          }
        }
        return filterValue;
      },
      jsonToQuery : function(json) {
        /** @type {!Array} */
        var drilldownLevelLabels = [];
        json = json || {};
        /** @type {!RegExp} */
        var reKeyword = /^(?:string|boolean|number)/i;
        var key;
        for (key in json) {
          if (json.hasOwnProperty(key) && reKeyword.test(typeof json[key])) {
            drilldownLevelLabels.push(key + "=" + json[key]);
          }
        }
        return drilldownLevelLabels.join("&");
      },
      extend : function(destination, source) {
        var prop;
        for (prop in source) {
          destination[prop] = source[prop];
        }
      },
      getAdId : function() {
        var e = $.getLocationParam("_tt_ad_id") || $.getLocationParam("ad_id") || $.getLocationParam("aid");
        return e;
      },
      getReqId : function() {
        return $.getLocationParam("req_id") || "";
      },
      getCid : function() {
        return $.getLocationParam("cid") || "";
      },
      getWebUrlInfo : function() {
        var individualMD5;
        var template = window.decodeURIComponent($.getLocationParam("_toutiao_params") || $.getLocationParam("_toutiao_recommend") || "");
        try {
          /** @type {*} */
          individualMD5 = JSON.parse(template);
        } catch (n) {
        }
        return individualMD5;
      },
      encodeParams : function(params) {
        /** @type {!Array} */
        var drilldownLevelLabels = [];
        params = params || {};
        /** @type {!RegExp} */
        var reKeyword = /^(?:string|boolean|number)/i;
        var i;
        for (i in params) {
          if (params.hasOwnProperty(i) && reKeyword.test(typeof params[i])) {
            /** @type {string} */
            var appId = decodeURIComponent(params[i]);
            drilldownLevelLabels.push(encodeURIComponent(i) + "=" + encodeURIComponent(appId));
          }
        }
        return drilldownLevelLabels.join("&");
      },
      jsonp : function(options) {
        if (options = options || {}, !options.url || !options.callback) {
          throw new Error("\u9359\u509b\u669f\u6d93\u5d85\u608e\u5a09\ufffd");
        }
        /** @type {string} */
        var shouldHydrateName = ("jsonp_" + Math.random()).replace(".", "");
        /** @type {!Element} */
        var n = document.getElementsByTagName("head")[0];
        /** @type {string} */
        options.data[options.callback] = shouldHydrateName;
        var packageFilename = this.encodeParams(options.data);
        /** @type {!Element} */
        var s = document.createElement("script");
        n.appendChild(s);
        /**
         * @param {?} Widget
         * @return {undefined}
         */
        window[shouldHydrateName] = function(Widget) {
          n.removeChild(s);
          clearTimeout(s.timer);
          /** @type {null} */
          window[shouldHydrateName] = null;
          if (options.success) {
            options.success(Widget);
          }
        };
        /** @type {string} */
        s.src = options.url + "?" + packageFilename;
        if (options.time) {
          /** @type {number} */
          s.timer = setTimeout(function() {
            /** @type {null} */
            window[shouldHydrateName] = null;
            n.removeChild(s);
            if (options.fail) {
              options.fail({
                message : "\u74d2\u546e\u6902"
              });
            }
          }, options.time);
        }
      },
      syncGet : function(url, callback) {
        var cb = callback || 0;
        var http = this;
        /** @type {!XMLHttpRequest} */
        var client = new XMLHttpRequest;
        client.open("GET", url.url, false);
        /** @type {boolean} */
        client.withCredentials = true;
        /**
         * @return {undefined}
         */
        client.onreadystatechange = function() {
          if (4 === client.readyState && 200 !== client.status && 1 > cb) {
            cb++;
            http.syncGet(url, cb);
          }
        };
        client.send(null);
      },
      retry : function(funcDeferred, options) {
        /**
         * @return {undefined}
         */
        function retry() {
          funcDeferred(function(calc_width) {
            if (calc_width && options > legendwidth) {
              legendwidth++;
              retry();
            }
          });
        }
        options = options || 1;
        /** @type {number} */
        var legendwidth = 0;
        retry();
      },
      imageGet : function(req) {
        req = req || {};
        /** @type {!Image} */
        var img = new Image;
        var baseUrl = req.protocol || window.location.protocol;
        img.src = baseUrl + req.url;
      },
      addLoadEvent : function(loadChartbeat) {
        /** @type {(function((Event|null)): ?|null)} */
        var oldonload = window.onload;
        window.onload = "function" != typeof window.onload ? loadChartbeat : function() {
          oldonload();
          loadChartbeat();
        };
      },
      getSiteId : function() {
        /** @type {string} */
        var stubBase = window.location.pathname;
        /** @type {!RegExp} */
        var regJsonFormat = /\d+/g;
        /** @type {!Array} */
        var BROWSER_ENGINES = stubBase.match(regJsonFormat) || [];
        return BROWSER_ENGINES[0] || "";
      },
      setToSessionStorage : function(e, key) {
        /** @type {(Storage|null)} */
        var storage = window.sessionStorage;
        storage.setItem(e, key);
      },
      getFromSessionStorage : function(e) {
        /** @type {(Storage|null)} */
        var ss = window.sessionStorage;
        return ss.getItem(e);
      },
      isTetris : function() {
        return ["ad.toutiao.com", "www.toutiaopage.com", "www.chengzijianzhan.com"].indexOf(window.location.hostname) > -1;
      },
      getClickId : function() {
        return this.getFromSessionStorage("_sdk_clickId") ? this.getFromSessionStorage("_sdk_clickId") : (this.setToSessionStorage("_sdk_clickId", this.getLocationParam("clickid") || ""), this.getLocationParam("clickid"));
      },
      _parseUmengData : function(data) {
        var that = {
          value : name || $.getCid()
        };
        var self = that.extra = {
          sdk_version : $.getSdkPath() + body + (this.isTTAD() ? ".t" : ""),
          site_id : sourceName,
          options : {},
          log_extra : s || $.getFromSessionStorage("umeng_log_extra") || "{}",
          convert_id : data.convert_id || language || 0
        };
        var i;
        for (i in data) {
          if ("target" === i) {
            $.extend(self, this._getPosition(data[i]));
          } else {
            if ("page_url" === i) {
              /** @type {string} */
              self[i] = decodeURIComponent(data[i]) || decodeURIComponent(target.location.href);
            } else {
              if ("page_type" === i) {
                self[i] = data[i] || script;
              } else {
                if ("track_data" === i) {
                  /** @type {*} */
                  var mapLayerCollection = JSON.parse(target.decodeURIComponent(data[i]));
                  /** @type {!Array} */
                  var pipelets = ["page_url", "page_type", "event_type", "event_value", "xpath", "os", "select_content"];
                  pipelets.forEach(function(i) {
                    var value = mapLayerCollection[0][i];
                    self[i] = value || 0 === value ? value : "";
                  });
                } else {
                  self[i] = data[i];
                }
              }
            }
          }
        }
        try {
          /** @type {*} */
          self.options = JSON.parse(data.options || "{}");
        } catch (u) {
          self.options.other = data.options;
        }
        return self.options = JSON.stringify(self.options), "xpath" === data.event_type && (self.dom_md5 = tmp), self.log_extra = s || $.getFromSessionStorage("umeng_log_extra") || "{}", self.tt_bridge = 1e3 + 100 * exitCode + 10 * statusNodeId + text, self.tt_env = 1e3 + 100 * exitCode + 10 * statusValue + state, that;
      },
      _sendUmengEvent : function(preventPushState, id, commands) {
        /** @type {boolean} */
        var o = "android" === $.getOS();
        /** @type {number} */
        var baseName = 1;
        /** @type {string} */
        var th_field = "";
        /** @type {string} */
        th_field = $.isJoke() || o || $.isLive() || $.isAweme() ? "log_event" : "custom_event";
        /** @type {string} */
        var value = "bytedance://" + th_field + "?category=umeng&tag=" + preventPushState + "&label=" + id;
        var notKeyPress = $.isMainToutiao() && "6.6.7" == version;
        if (notKeyPress && (value = value + "&realtime_report=" + baseName), commands) {
          var name;
          for (name in commands) {
            var r = commands[name];
            if ("extra" === name && "object" == typeof r) {
              if (o) {
                /** @type {string} */
                value = value + ("&extra=" + encodeURIComponent(JSON.stringify(r)));
              } else {
                var data = r;
                /** @type {string} */
                var s = "";
                var i;
                for (i in data) {
                  /** @type {string} */
                  s = s + ("object" == typeof data[i] ? "&" + i + "=" + encodeURIComponent(JSON.stringify(data[i])) : "&" + i + "=" + encodeURIComponent(data[i]));
                }
                /** @type {string} */
                value = value + s;
              }
            } else {
              /** @type {string} */
              value = value + ("&" + name + "=" + encodeURIComponent(r));
            }
          }
        }
        try {
          window.webkit.messageHandlers.observe.postMessage(value);
        } catch (g) {
          console.log(value);
        }
        if ($.isVideoArticleCompatible()) {
          try {
            window.webkit.messageHandlers.consoleLog.postMessage(value);
          } catch (g) {
          }
        }
      },
      _sendConvertEvent : function(clientAddress, state, value) {
        /** @type {number} */
        var cacheKillerVersion = ("ios" === $.getOS(), 1);
        /** @type {string} */
        var r = "log_event";
        var i = $.isMainToutiao() && "6.6.7" == version;
        if (i) {
          /** @type {string} */
          url = url + "&realtime_report=" + cacheKillerVersion;
        }
        /** @type {string} */
        var url = "bytedance://" + r + "?category=umeng&tag=" + clientAddress + "&label=" + state;
        if (value) {
          var property;
          for (property in value) {
            var object = value[property];
            if ("extra" === property && "object" == typeof object) {
              var items = object;
              /** @type {string} */
              var newTerm = "";
              var i;
              for (i in items) {
                /** @type {string} */
                newTerm = newTerm + ("object" == typeof items[i] ? "&" + i + "=" + encodeURIComponent(JSON.stringify(items[i])) : "&" + i + "=" + encodeURIComponent(items[i]));
              }
              /** @type {string} */
              url = url + newTerm;
            } else {
              /** @type {string} */
              url = url + ("&" + property + "=" + encodeURIComponent(object));
            }
          }
        }
        try {
          window.webkit.messageHandlers.observe.postMessage(url);
        } catch (l) {
          console.log(url);
        }
        if ($.isSuperCompatible()) {
          /** @type {!Element} */
          var iframe = document.createElement("iframe");
          /** @type {string} */
          iframe.style.width = "1px";
          /** @type {string} */
          iframe.style.height = "1px";
          /** @type {string} */
          iframe.style.display = "none";
          /** @type {string} */
          iframe.style.position = "absolute";
          /** @type {string} */
          iframe.src = url;
          document.documentElement.appendChild(iframe);
          setTimeout(function() {
            document.documentElement.removeChild(iframe);
          }, 100);
        }
      }
    };
    var log = {
      getChildrenIndex : function(node) {
        if (node.sourceIndex) {
          return node.sourceIndex - node.parentNode.sourceIndex - 1;
        }
        /** @type {number} */
        var t = 0;
        for (; node = node.previousElementSibling;) {
          t++;
        }
        return t;
      },
      getXPath : function(element) {
        /** @type {string} */
        var xpath = "";
        for (; element.length;) {
          var el = Array.prototype.pop.apply(element);
          if (el && el.tagName && "body" != el.tagName.toLowerCase() && "html" != el.tagName.toLowerCase()) {
            var _headingPrefix = "function" == typeof el.getAttribute ? el.getAttribute("id") : "";
            /** @type {string} */
            xpath = xpath + (el.tagName.toLowerCase() + this.getChildrenIndex(el) + (_headingPrefix ? "#" + _headingPrefix : "") + (0 == element.length ? "" : ">"));
          }
        }
        return xpath;
      },
      getElementByAttr : function(t, e) {
        if ("string" == typeof t && (t = document.getElementById(t)), t || (t = document), t.querySelectorAll) {
          var separateCaches = t.querySelectorAll("[" + e + "]");
          return separateCaches = Array.prototype.slice.call(separateCaches);
        }
        var basicStrArray = t.getElementsByTagName("*");
        var l = basicStrArray.length;
        /** @type {number} */
        var i = 0;
        /** @type {!Array} */
        var jisps = [];
        for (; l > i; i++) {
          var s = basicStrArray[i];
          if (s.getAttribute(e)) {
            jisps.push(s);
          }
        }
        return jisps;
      },
      getPerformanceObj : function() {
        if (!window.performance) {
          return "";
        }
        /** @type {(PerformanceTiming|null)} */
        var t = performance.timing;
        return t;
      },
      getDomCount : function() {
        return document.getElementsByTagName("*").length;
      },
      getElementParentsAndSelf : function(value) {
        var result = this.getElementParents(value);
        return result.unshift(value), result;
      },
      getElementParents : function(obj) {
        /** @type {!Array} */
        var errorsMetaArray = [];
        for (; obj;) {
          obj = obj.parentNode;
          if (obj) {
            errorsMetaArray.push(obj);
          }
        }
        return errorsMetaArray;
      },
      delegate : function(e, type, obj, t) {
        /**
         * @param {!Object} event
         * @return {undefined}
         */
        function listener(event) {
          /** @type {!RegExp} */
          var r = /^\[(.*)\]$/;
          var e = window.event ? window.event : event;
          var pixels = e.target || e.srcElement;
          if (r.test(obj)) {
            var amount = obj.match(r)[1];
            var item = log.getElementByAttr(e, amount);
            var p = pixels;
            for (; p;) {
              if (RPGUI.inElement(p, item)) {
                t.call(pixels, e);
                break;
              }
              p = p.parentNode;
            }
          }
        }
        if ("string" == typeof e && (e = document.getElementById(e)), e || (e = document), obj && "function" == typeof t) {
          var RPGUI = this;
          /** @type {function(!Object): undefined} */
          e[type] = listener;
        }
      },
      inElement : function(e, n) {
        var length = n.length;
        /** @type {number} */
        var i = 0;
        for (; length > i; i++) {
          if (e == n[i]) {
            return true;
          }
        }
        return false;
      }
    };
    !function(window) {
      /**
       * @param {number} a
       * @param {number} b
       * @return {?}
       */
      function fn(a, b) {
        /** @type {number} */
        var nextByte = (65535 & a) + (65535 & b);
        /** @type {number} */
        var charCode = (a >> 16) + (b >> 16) + (nextByte >> 16);
        return charCode << 16 | 65535 & nextByte;
      }
      /**
       * @param {number} k
       * @param {number} d
       * @return {?}
       */
      function get(k, d) {
        return k << d | k >>> 32 - d;
      }
      /**
       * @param {number} v
       * @param {number} x
       * @param {number} key
       * @param {number} url
       * @param {number} i
       * @param {number} name
       * @return {?}
       */
      function o(v, x, key, url, i, name) {
        return fn(get(fn(fn(x, v), fn(url, name)), i), key);
      }
      /**
       * @param {number} e
       * @param {number} b
       * @param {number} c
       * @param {number} d
       * @param {undefined} a
       * @param {number} i
       * @param {number} v
       * @return {?}
       */
      function m(e, b, c, d, a, i, v) {
        return o(b & c | ~b & d, e, b, a, i, v);
      }
      /**
       * @param {number} b
       * @param {number} a
       * @param {number} c
       * @param {number} d
       * @param {undefined} v
       * @param {number} i
       * @param {number} query
       * @return {?}
       */
      function l(b, a, c, d, v, i, query) {
        return o(a & d | c & ~d, b, a, v, i, query);
      }
      /**
       * @param {number} d
       * @param {number} k
       * @param {number} n
       * @param {number} l
       * @param {undefined} a
       * @param {number} s
       * @param {number} b
       * @return {?}
       */
      function j(d, k, n, l, a, s, b) {
        return o(k ^ n ^ l, d, k, a, s, b);
      }
      /**
       * @param {number} e
       * @param {number} c
       * @param {number} d
       * @param {number} a
       * @param {undefined} b
       * @param {number} r
       * @param {number} s
       * @return {?}
       */
      function k(e, c, d, a, b, r, s) {
        return o(d ^ (c | ~a), e, c, b, r, s);
      }
      /**
       * @param {!Object} g
       * @param {number} value
       * @return {?}
       */
      function callback(g, value) {
        g[value >> 5] |= 128 << value % 32;
        /** @type {number} */
        g[(value + 64 >>> 9 << 4) + 14] = value;
        var i;
        var y;
        var val;
        var w;
        var n;
        /** @type {number} */
        var b = 1732584193;
        /** @type {number} */
        var c = -271733879;
        /** @type {number} */
        var d = -1732584194;
        /** @type {number} */
        var e = 271733878;
        /** @type {number} */
        i = 0;
        for (; i < g.length; i = i + 16) {
          y = b;
          val = c;
          w = d;
          n = e;
          b = m(b, c, d, e, g[i], 7, -680876936);
          e = m(e, b, c, d, g[i + 1], 12, -389564586);
          d = m(d, e, b, c, g[i + 2], 17, 606105819);
          c = m(c, d, e, b, g[i + 3], 22, -1044525330);
          b = m(b, c, d, e, g[i + 4], 7, -176418897);
          e = m(e, b, c, d, g[i + 5], 12, 1200080426);
          d = m(d, e, b, c, g[i + 6], 17, -1473231341);
          c = m(c, d, e, b, g[i + 7], 22, -45705983);
          b = m(b, c, d, e, g[i + 8], 7, 1770035416);
          e = m(e, b, c, d, g[i + 9], 12, -1958414417);
          d = m(d, e, b, c, g[i + 10], 17, -42063);
          c = m(c, d, e, b, g[i + 11], 22, -1990404162);
          b = m(b, c, d, e, g[i + 12], 7, 1804603682);
          e = m(e, b, c, d, g[i + 13], 12, -40341101);
          d = m(d, e, b, c, g[i + 14], 17, -1502002290);
          c = m(c, d, e, b, g[i + 15], 22, 1236535329);
          b = l(b, c, d, e, g[i + 1], 5, -165796510);
          e = l(e, b, c, d, g[i + 6], 9, -1069501632);
          d = l(d, e, b, c, g[i + 11], 14, 643717713);
          c = l(c, d, e, b, g[i], 20, -373897302);
          b = l(b, c, d, e, g[i + 5], 5, -701558691);
          e = l(e, b, c, d, g[i + 10], 9, 38016083);
          d = l(d, e, b, c, g[i + 15], 14, -660478335);
          c = l(c, d, e, b, g[i + 4], 20, -405537848);
          b = l(b, c, d, e, g[i + 9], 5, 568446438);
          e = l(e, b, c, d, g[i + 14], 9, -1019803690);
          d = l(d, e, b, c, g[i + 3], 14, -187363961);
          c = l(c, d, e, b, g[i + 8], 20, 1163531501);
          b = l(b, c, d, e, g[i + 13], 5, -1444681467);
          e = l(e, b, c, d, g[i + 2], 9, -51403784);
          d = l(d, e, b, c, g[i + 7], 14, 1735328473);
          c = l(c, d, e, b, g[i + 12], 20, -1926607734);
          b = j(b, c, d, e, g[i + 5], 4, -378558);
          e = j(e, b, c, d, g[i + 8], 11, -2022574463);
          d = j(d, e, b, c, g[i + 11], 16, 1839030562);
          c = j(c, d, e, b, g[i + 14], 23, -35309556);
          b = j(b, c, d, e, g[i + 1], 4, -1530992060);
          e = j(e, b, c, d, g[i + 4], 11, 1272893353);
          d = j(d, e, b, c, g[i + 7], 16, -155497632);
          c = j(c, d, e, b, g[i + 10], 23, -1094730640);
          b = j(b, c, d, e, g[i + 13], 4, 681279174);
          e = j(e, b, c, d, g[i], 11, -358537222);
          d = j(d, e, b, c, g[i + 3], 16, -722521979);
          c = j(c, d, e, b, g[i + 6], 23, 76029189);
          b = j(b, c, d, e, g[i + 9], 4, -640364487);
          e = j(e, b, c, d, g[i + 12], 11, -421815835);
          d = j(d, e, b, c, g[i + 15], 16, 530742520);
          c = j(c, d, e, b, g[i + 2], 23, -995338651);
          b = k(b, c, d, e, g[i], 6, -198630844);
          e = k(e, b, c, d, g[i + 7], 10, 1126891415);
          d = k(d, e, b, c, g[i + 14], 15, -1416354905);
          c = k(c, d, e, b, g[i + 5], 21, -57434055);
          b = k(b, c, d, e, g[i + 12], 6, 1700485571);
          e = k(e, b, c, d, g[i + 3], 10, -1894986606);
          d = k(d, e, b, c, g[i + 10], 15, -1051523);
          c = k(c, d, e, b, g[i + 1], 21, -2054922799);
          b = k(b, c, d, e, g[i + 8], 6, 1873313359);
          e = k(e, b, c, d, g[i + 15], 10, -30611744);
          d = k(d, e, b, c, g[i + 6], 15, -1560198380);
          c = k(c, d, e, b, g[i + 13], 21, 1309151649);
          b = k(b, c, d, e, g[i + 4], 6, -145523070);
          e = k(e, b, c, d, g[i + 11], 10, -1120210379);
          d = k(d, e, b, c, g[i + 2], 15, 718787259);
          c = k(c, d, e, b, g[i + 9], 21, -343485551);
          b = fn(b, y);
          c = fn(c, val);
          d = fn(d, w);
          e = fn(e, n);
        }
        return [b, c, d, e];
      }
      /**
       * @param {!Object} input
       * @return {?}
       */
      function save(input) {
        var i;
        /** @type {string} */
        var res_str = "";
        /** @type {number} */
        var startMonth = 32 * input.length;
        /** @type {number} */
        i = 0;
        for (; startMonth > i; i = i + 8) {
          /** @type {string} */
          res_str = res_str + String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
        }
        return res_str;
      }
      /**
       * @param {string} t
       * @return {?}
       */
      function $(t) {
        var i;
        /** @type {!Array} */
        var a = [];
        a[(t.length >> 2) - 1] = void 0;
        /** @type {number} */
        i = 0;
        for (; i < a.length; i = i + 1) {
          /** @type {number} */
          a[i] = 0;
        }
        /** @type {number} */
        var length = 8 * t.length;
        /** @type {number} */
        i = 0;
        for (; length > i; i = i + 8) {
          a[i >> 5] |= (255 & t.charCodeAt(i / 8)) << i % 32;
        }
        return a;
      }
      /**
       * @param {string} day
       * @return {?}
       */
      function add(day) {
        return save(callback($(day), 8 * day.length));
      }
      /**
       * @param {string} e
       * @param {string} i
       * @return {?}
       */
      function cb(e, i) {
        var j;
        var b;
        var result = $(e);
        /** @type {!Array} */
        var normals = [];
        /** @type {!Array} */
        var a = [];
        normals[15] = a[15] = void 0;
        if (result.length > 16) {
          result = callback(result, 8 * e.length);
        }
        /** @type {number} */
        j = 0;
        for (; 16 > j; j = j + 1) {
          /** @type {number} */
          normals[j] = 909522486 ^ result[j];
          /** @type {number} */
          a[j] = 1549556828 ^ result[j];
        }
        return b = callback(normals.concat($(i)), 512 + 8 * i.length), save(callback(a.concat(b), 640));
      }
      /**
       * @param {string} resolved
       * @return {?}
       */
      function resolve(resolved) {
        var f;
        var e;
        /** @type {string} */
        var a = "0123456789abcdef";
        /** @type {string} */
        var value = "";
        /** @type {number} */
        e = 0;
        for (; e < resolved.length; e = e + 1) {
          f = resolved.charCodeAt(e);
          /** @type {string} */
          value = value + (a.charAt(f >>> 4 & 15) + a.charAt(15 & f));
        }
        return value;
      }
      /**
       * @param {?} name
       * @return {?}
       */
      function f(name) {
        return unescape(encodeURIComponent(name));
      }
      /**
       * @param {?} s
       * @return {?}
       */
      function log(s) {
        return add(f(s));
      }
      /**
       * @param {?} text
       * @return {?}
       */
      function text(text) {
        return resolve(log(text));
      }
      /**
       * @param {?} name
       * @param {?} object
       * @return {?}
       */
      function done(name, object) {
        return cb(f(name), f(object));
      }
      /**
       * @param {?} options
       * @param {?} value
       * @return {?}
       */
      function removeClass(options, value) {
        return resolve(done(options, value));
      }
      /**
       * @param {?} name
       * @param {?} node
       * @param {?} value
       * @return {?}
       */
      function exports(name, node, value) {
        return node ? value ? done(node, name) : removeClass(node, name) : value ? log(name) : text(name);
      }
      /** @type {function(?, ?, ?): ?} */
      window.md5 = exports;
    }(this);
    var root = {
      getPrefix : function(url) {
        /** @type {string} */
        var deepestPrefix = "";
        try {
          deepestPrefix = url.split("_")[0];
        } catch (n) {
        }
        return deepestPrefix;
      },
      traversal : function(el, options, fn, data, callback) {
        if (el && 1 === el.nodeType && !(fn >= data)) {
          /** @type {string} */
          var result = "";
          var prefix = this.getPrefix(options);
          callback(options);
          var o;
          /** @type {number} */
          var k = 0;
          var t = el.childNodes;
          /** @type {number} */
          var suffix = 0;
          for (; k < t.length; k++) {
            o = t[k];
            if (o && 1 === o.nodeType) {
              /** @type {string} */
              result = prefix + "," + suffix + "_" + o.tagName;
              this.traversal(o, result, fn + 1, data, callback);
              ++suffix;
            }
          }
        }
      }
    };
    /** @type {!Array} */
    VENDOR_PREFIXES = ["", "webkit", "Moz", "MS", "ms", "o"];
    var result;
    /** @type {!Window} */
    var global = window;
    /** @type {boolean} */
    var M = void 0 !== find(global, "PointerEvent");
    /** @type {boolean} */
    var isBrowser = "ontouchstart" in global;
    !function(b) {
      /** @type {string} */
      b[b.Default = 0] = "Default";
      /** @type {string} */
      b[b.Start = 1] = "Start";
      /** @type {string} */
      b[b.Move = 2] = "Move";
      /** @type {string} */
      b[b.End = 4] = "End";
      /** @type {string} */
      b[b.Cancle = 8] = "Cancle";
    }(result || (result = {}));
    var event = {
      pointer : {
        events : ["pointerdown", "pointermove", "pointerup", "pointercancel"],
        handler : function(event) {
          var eventStr = event.type;
          var params = {
            status : result.Default,
            timestamp : Date.now(),
            position : [event.clientX, event.clientY]
          };
          return eventStr !== this.events[0] || 0 !== event.button && "touch" !== event.pointerType ? eventStr === this.events[1] ? params.status = result.Move : eventStr === this.events[2] ? params.status = result.End : eventStr === this.events[3] && (params.status = result.Cancle) : params.status = result.Start, params;
        }
      },
      touch : {
        events : ["touchstart", "touchmove", "touchend", "touchcancel"],
        handler : function(options) {
          var event = options.type;
          if (1 !== options.changedTouches.length) {
            return null;
          }
          var params = {
            status : result.Default,
            timestamp : Date.now(),
            position : [options.changedTouches[0].clientX, options.changedTouches[0].clientY]
          };
          return event === this.events[0] ? params.status = result.Start : event === this.events[1] ? params.status = result.Move : event === this.events[2] ? params.status = result.End : event === this.events[3] && (params.status = result.Cancle), params.status === result.Default ? null : params;
        }
      },
      mouse : {
        events : ["mousedown", "mousemove", "mouseup"],
        handler : function(options) {
          var event = options.type;
          var params = {
            status : result.Default,
            timestamp : Date.now(),
            position : [options.clientX, options.clientY]
          };
          return event === this.events[0] && 0 === options.button ? params.status = result.Start : event === this.events[1] ? params.status = result.Move : event === this.events[2] && (params.status = result.End), params.status & result.Move && 1 !== options.which && (params.status = result.End), params.status === result.Default ? null : params;
        }
      }
    };
    if ("MSPointerEvent" in global && !("PointerEvent" in global)) {
      /** @type {!Array} */
      event.pointer.events = ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerCancel"];
    }
    var options = {
      interval : 300,
      time : 250,
      threshold : 9,
      posThreshold : 10
    };
    var events = {};
    /**
     * @param {!Function} element
     * @param {boolean} listener
     * @return {undefined}
     */
    events.addClickEvent = function(element, listener) {
      /**
       * @param {string} name
       * @return {?}
       */
      var render = function(name) {
        var state;
        var startTime;
        var _pos;
        var from;
        return function(data) {
          var e = event[name].handler(data);
          if (null !== e) {
            if (e.status & result.Start) {
              return state = result.Start, startTime = e.timestamp, _pos = e.position, void(from = data.target);
            }
            if (e.status & result.End) {
              if (state & result.Start && e.timestamp - startTime < options.time && Math.sqrt(Math.pow(e.position[0] - _pos[0], 2) + Math.pow(e.position[1] - _pos[1], 2)) < options.threshold) {
                element(data);
              }
            } else {
              if (e.status & result.Move && state & result.Start) {
                return;
              }
            }
          }
          /** @type {number} */
          state = 0;
          /** @type {number} */
          startTime = 0;
          /** @type {!Array} */
          _pos = [0, 0];
          /** @type {null} */
          from = null;
        };
      };
      if (M) {
        on(event.pointer.events, render("pointer"), listener);
      } else {
        if (isBrowser) {
          on(event.touch.events, render("touch"), listener);
        } else {
          on(event.mouse.events, render("mouse"), listener);
        }
      }
    };
    !function test(t, n, r) {
      /**
       * @param {string} o
       * @param {?} s
       * @return {?}
       */
      function s(o, s) {
        if (!n[o]) {
          if (!t[o]) {
            var i = "function" == typeof require && require;
            if (!s && i) {
              return i(o, true);
            }
            if (a) {
              return a(o, true);
            }
            /** @type {!Error} */
            var f = new Error("Cannot find module '" + o + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var u = n[o] = {
            exports : {}
          };
          t[o][0].call(u.exports, function(e) {
            var n = t[o][1][e];
            return s(n ? n : e);
          }, u, u.exports, test, t, n, r);
        }
        return n[o].exports;
      }
      var a = "function" == typeof require && require;
      /** @type {number} */
      var o = 0;
      for (; o < r.length; o++) {
        s(r[o]);
      }
      return s;
    }({
      1 : [function(require, module) {
        /**
         * @return {undefined}
         */
        function noop() {
        }
        /**
         * @param {!Object} promise
         * @return {?}
         */
        function getThen(promise) {
          try {
            return promise.then;
          } catch (x) {
            return val = x, tree;
          }
        }
        /**
         * @param {?} fn
         * @param {?} a
         * @return {?}
         */
        function tryCallOne(fn, a) {
          try {
            return fn(a);
          } catch (x) {
            return val = x, tree;
          }
        }
        /**
         * @param {!Function} callback
         * @param {!Function} type
         * @param {!Function} deps
         * @return {?}
         */
        function fn(callback, type, deps) {
          try {
            callback(type, deps);
          } catch (x) {
            return val = x, tree;
          }
        }
        /**
         * @param {!Function} a
         * @return {undefined}
         */
        function Promise(a) {
          if ("object" != typeof this) {
            throw new TypeError("Promises must be constructed via new");
          }
          if ("function" != typeof a) {
            throw new TypeError("not a function");
          }
          /** @type {number} */
          this._37 = 0;
          /** @type {null} */
          this._12 = null;
          /** @type {!Array} */
          this._59 = [];
          if (a !== noop) {
            handler(a, this);
          }
        }
        /**
         * @param {string} self
         * @param {!Function} onFulfilled
         * @param {!Function} onRejected
         * @return {?}
         */
        function safeThen(self, onFulfilled, onRejected) {
          return new self.constructor(function(success, wrapped) {
            var promise = new Promise(noop);
            promise.then(success, wrapped);
            handle(self, new Handler(onFulfilled, onRejected, promise));
          });
        }
        /**
         * @param {string} self
         * @param {!Object} deferred
         * @return {?}
         */
        function handle(self, deferred) {
          for (; 3 === self._37;) {
            self = self._12;
          }
          return 0 === self._37 ? void self._59.push(deferred) : void asap(function() {
            var cb = 1 === self._37 ? deferred.onFulfilled : deferred.onRejected;
            if (null === cb) {
              return void(1 === self._37 ? resolve(deferred.promise, self._12) : reject(deferred.promise, self._12));
            }
            var ret = tryCallOne(cb, self._12);
            if (ret === tree) {
              reject(deferred.promise, val);
            } else {
              resolve(deferred.promise, ret);
            }
          });
        }
        /**
         * @param {!Object} self
         * @param {string} value
         * @return {?}
         */
        function resolve(self, value) {
          if (value === self) {
            return reject(self, new TypeError("A promise cannot be resolved with itself."));
          }
          if (value && ("object" == typeof value || "function" == typeof value)) {
            var then = getThen(value);
            if (then === tree) {
              return reject(self, val);
            }
            if (then === self.then && value instanceof Promise) {
              return self._37 = 3, self._12 = value, void finale(self);
            }
            if ("function" == typeof then) {
              return void handler(then.bind(value), self);
            }
          }
          /** @type {number} */
          self._37 = 1;
          /** @type {string} */
          self._12 = value;
          finale(self);
        }
        /**
         * @param {!Object} self
         * @param {!Object} newValue
         * @return {undefined}
         */
        function reject(self, newValue) {
          /** @type {number} */
          self._37 = 2;
          /** @type {!Object} */
          self._12 = newValue;
          finale(self);
        }
        /**
         * @param {!Function} self
         * @return {undefined}
         */
        function finale(self) {
          /** @type {number} */
          var i = 0;
          for (; i < self._59.length; i++) {
            handle(self, self._59[i]);
          }
          /** @type {null} */
          self._59 = null;
        }
        /**
         * @param {!Function} a
         * @param {!Function} b
         * @param {!Promise} p
         * @return {undefined}
         */
        function Handler(a, b, p) {
          /** @type {(!Function|null)} */
          this.onFulfilled = "function" == typeof a ? a : null;
          /** @type {(!Function|null)} */
          this.onRejected = "function" == typeof b ? b : null;
          /** @type {!Promise} */
          this.promise = p;
        }
        /**
         * @param {!Function} name
         * @param {!Object} promise
         * @return {undefined}
         */
        function handler(name, promise) {
          /** @type {boolean} */
          var cEscape = false;
          var el = fn(name, function(link) {
            if (!cEscape) {
              /** @type {boolean} */
              cEscape = true;
              resolve(promise, link);
            }
          }, function(val) {
            if (!cEscape) {
              /** @type {boolean} */
              cEscape = true;
              reject(promise, val);
            }
          });
          if (!(cEscape || el !== tree)) {
            /** @type {boolean} */
            cEscape = true;
            reject(promise, val);
          }
        }
        var asap = require("asap/raw");
        /** @type {null} */
        var val = null;
        var tree = {};
        /** @type {function(!Function): undefined} */
        module.exports = Promise;
        /** @type {function(): undefined} */
        Promise._99 = noop;
        /**
         * @param {!Function} onFulfilled
         * @param {!Function} onRejected
         * @return {?}
         */
        Promise.prototype.then = function(onFulfilled, onRejected) {
          if (this.constructor !== Promise) {
            return safeThen(this, onFulfilled, onRejected);
          }
          var prom = new Promise(noop);
          return handle(this, new Handler(onFulfilled, onRejected, prom)), prom;
        };
      }, {
        "asap/raw" : 4
      }],
      2 : [function(injector, module) {
        /**
         * @param {?} value
         * @return {?}
         */
        function valuePromise(value) {
          var p = new Promise(Promise._99);
          return p._37 = 1, p._12 = value, p;
        }
        var Promise = injector("./core.js");
        module.exports = Promise;
        var FALSE = valuePromise(true);
        var NULL = valuePromise(false);
        var UNDEFINED = valuePromise(null);
        var ZERO = valuePromise(void 0);
        var TRUE = valuePromise(0);
        var EMPTYSTRING = valuePromise("");
        /**
         * @param {?} value
         * @return {?}
         */
        Promise.resolve = function(value) {
          if (value instanceof Promise) {
            return value;
          }
          if (null === value) {
            return UNDEFINED;
          }
          if (void 0 === value) {
            return ZERO;
          }
          if (value === true) {
            return FALSE;
          }
          if (value === false) {
            return NULL;
          }
          if (0 === value) {
            return TRUE;
          }
          if ("" === value) {
            return EMPTYSTRING;
          }
          if ("object" == typeof value || "function" == typeof value) {
            try {
              var then = value.then;
              if ("function" == typeof then) {
                return new Promise(then.bind(value));
              }
            } catch (formatedList) {
              return new Promise(function(canCreateDiscussions, resolve) {
                resolve(formatedList);
              });
            }
          }
          return valuePromise(value);
        };
        /**
         * @param {!Array} obj
         * @return {?}
         */
        Promise.all = function(obj) {
          /** @type {!Array<?>} */
          var attr = Array.prototype.slice.call(obj);
          return new Promise(function(fn, reject) {
            /**
             * @param {number} a
             * @param {!Object} val
             * @return {?}
             */
            function resolve(a, val) {
              if (val && ("object" == typeof val || "function" == typeof val)) {
                if (val instanceof Promise && val.then === Promise.prototype.then) {
                  for (; 3 === val._37;) {
                    val = val._12;
                  }
                  return 1 === val._37 ? resolve(a, val._12) : (2 === val._37 && reject(val._12), void val.then(function(y) {
                    resolve(a, y);
                  }, reject));
                }
                var then = val.then;
                if ("function" == typeof then) {
                  var nextPromise = new Promise(then.bind(val));
                  return void nextPromise.then(function(y) {
                    resolve(a, y);
                  }, reject);
                }
              }
              /** @type {!Object} */
              attr[a] = val;
              if (0 === --space) {
                fn(attr);
              }
            }
            if (0 === attr.length) {
              return fn([]);
            }
            /** @type {number} */
            var space = attr.length;
            /** @type {number} */
            var i = 0;
            for (; i < attr.length; i++) {
              resolve(i, attr[i]);
            }
          });
        };
        /**
         * @param {?} data
         * @return {?}
         */
        Promise.reject = function(data) {
          return new Promise(function(canCreateDiscussions, iter) {
            iter(data);
          });
        };
        /**
         * @param {!Array} answerPs
         * @return {?}
         */
        Promise.race = function(answerPs) {
          return new Promise(function(initCb, throwException) {
            answerPs.forEach(function(e) {
              Promise.resolve(e).then(initCb, throwException);
            });
          });
        };
        /**
         * @param {!Function} onSettled
         * @return {?}
         */
        Promise.prototype["catch"] = function(onSettled) {
          return this.then(null, onSettled);
        };
      }, {
        "./core.js" : 1
      }],
      3 : [function(require, module) {
        /**
         * @return {undefined}
         */
        function throwFirstError() {
          if (s.length) {
            throw s.shift();
          }
        }
        /**
         * @param {string} task
         * @return {undefined}
         */
        function asap(task) {
          var rawTask;
          rawTask = modes.length ? modes.pop() : new RawTask;
          /** @type {string} */
          rawTask.task = task;
          rawAsap(rawTask);
        }
        /**
         * @return {undefined}
         */
        function RawTask() {
          /** @type {null} */
          this.task = null;
        }
        var rawAsap = require("./raw");
        /** @type {!Array} */
        var modes = [];
        /** @type {!Array} */
        var s = [];
        var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);
        /** @type {function(string): undefined} */
        module.exports = asap;
        /**
         * @return {undefined}
         */
        RawTask.prototype.call = function() {
          try {
            this.task.call();
          } catch (error) {
            if (asap.onerror) {
              asap.onerror(error);
            } else {
              s.push(error);
              requestErrorThrow();
            }
          } finally {
            /** @type {null} */
            this.task = null;
            modes[modes.length] = this;
          }
        };
      }, {
        "./raw" : 4
      }],
      4 : [function(canCreateDiscussions, module) {
        (function(scope) {
          /**
           * @param {?} task
           * @return {undefined}
           */
          function rawAsap(task) {
            if (!queue.length) {
              requestFlush();
              /** @type {boolean} */
              r = true;
            }
            queue[queue.length] = task;
          }
          /**
           * @return {undefined}
           */
          function err() {
            for (; index < queue.length;) {
              var i = index;
              if (index = index + 1, queue[i].call(), index > object_end_index) {
                /** @type {number} */
                var i = 0;
                /** @type {number} */
                var size = queue.length - index;
                for (; size > i; i++) {
                  queue[i] = queue[i + index];
                }
                queue.length -= index;
                /** @type {number} */
                index = 0;
              }
            }
            /** @type {number} */
            queue.length = 0;
            /** @type {number} */
            index = 0;
            /** @type {boolean} */
            r = false;
          }
          /**
           * @param {!Function} e
           * @return {?}
           */
          function c(e) {
            /** @type {number} */
            var l = 1;
            var b = new i(e);
            /** @type {!Text} */
            var button = document.createTextNode("");
            return b.observe(button, {
              characterData : true
            }), function() {
              /** @type {number} */
              l = -l;
              /** @type {number} */
              button.data = l;
            };
          }
          /**
           * @param {!Function} callback
           * @return {?}
           */
          function makeRequestCallFromTimer(callback) {
            return function() {
              /**
               * @return {undefined}
               */
              function handleTimer() {
                clearTimeout(timeoutHandle);
                clearInterval(intervalHandle);
                callback();
              }
              /** @type {number} */
              var timeoutHandle = setTimeout(handleTimer, 0);
              /** @type {number} */
              var intervalHandle = setInterval(handleTimer, 50);
            };
          }
          /** @type {function(?): undefined} */
          module.exports = rawAsap;
          var requestFlush;
          /** @type {!Array} */
          var queue = [];
          /** @type {boolean} */
          var r = false;
          /** @type {number} */
          var index = 0;
          /** @type {number} */
          var object_end_index = 1024;
          var i = scope.MutationObserver || scope.WebKitMutationObserver;
          requestFlush = "function" == typeof i ? c(err) : makeRequestCallFromTimer(err);
          rawAsap.requestFlush = requestFlush;
          /** @type {function(!Function): ?} */
          rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}],
      5 : [function() {
        if ("function" != typeof Promise.prototype.done) {
          /**
           * @return {undefined}
           */
          Promise.prototype.done = function() {
            /** @type {!Promise<?>} */
            var loadPropPromise = arguments.length ? this.then.apply(this, arguments) : this;
            loadPropPromise.then(null, function(canCreateDiscussions) {
              setTimeout(function() {
                throw canCreateDiscussions;
              }, 0);
            });
          };
        }
      }, {}],
      6 : [function(require) {
        require("asap");
        if ("undefined" == typeof Promise) {
          Promise = require("./lib/core.js");
          require("./lib/es6-extensions.js");
        }
        require("./polyfill-done.js");
      }, {
        "./lib/core.js" : 1,
        "./lib/es6-extensions.js" : 2,
        "./polyfill-done.js" : 5,
        asap : 3
      }]
    }, {}, [6]);
    sourceName = script ? $.getSiteId() : "";
    target._taq = {
      push : function(data) {
        var THREAD_STARTED = data.useHttp || false;
        var value = data.extra || {};
        var file = {};
        if (!data.event_type) {
          return void console.log("event_type is null");
        }
        if (data.convert_id) {
          language = data.convert_id;
        }
        /**
         * @param {!Object} data
         * @return {?}
         */
        var transform = function(data) {
          var defaultData = {};
          if (!$.isObject(data)) {
            return JSON.stringify({
              clickid : $.getClickId()
            });
          }
          var key;
          for (key in data) {
            if (data.hasOwnProperty(key)) {
              defaultData[key] = data[key];
            }
          }
          return defaultData.clickid = $.getClickId(), JSON.stringify(defaultData);
        };
        /**
         * @return {undefined}
         */
        var write = function() {
          file = _taq._assembleData(data);
          /** @type {string} */
          file.report_event_from = "jssdk";
          file.ad_extra_data = transform(value);
          if (data.convert_id) {
            file.convert_id = data.convert_id;
          }
          _taq._send_log(file, THREAD_STARTED);
        };
        if (promise && req) {
          Promise.all([promise, req]).then(function() {
            write();
          }, function() {
            write();
          });
        } else {
          write();
        }
        try {
          /** @type {!Array} */
          var flashFixDomains = ["www.chengzijianzhan.com", "ad.toutiao.com"];
          if (-1 !== flashFixDomains.indexOf(location.host)) {
            /** @type {string} */
            var jsonp_url = "https://www.chengzijianzhan.com/tetris/landing_page/analysis?clickid=" + window.__CLICKID + "&event_type=convert_first&t=" + new Date;
            /** @type {!Element} */
            var script = document.createElement("script");
            /** @type {string} */
            script.src = jsonp_url;
            document.getElementsByTagName("head")[0].appendChild(script);
          }
        } catch (conv_reverse_sort) {
          console.log(conv_reverse_sort);
        }
      },
      _get_basedata : function(e) {
        /**
         * @return {?}
         */
        var loadChunk = function() {
          var value = _taq._assembleBaseData();
          return value.report_event_from = "jssdk", value.ad_extra_data = JSON.stringify({
            clickid : $.getClickId()
          }), "function" == typeof e && e(value), Promise.resolve(value);
        };
        return promise && req ? Promise.all([promise, req]).then(function() {
          return loadChunk();
        }).catch(function() {
          return loadChunk();
        }) : loadChunk();
      },
      get_query : function(name) {
        var hiddenNode = {};
        return name.event_type ? hiddenNode = this._assembleData(name) : void console.log("event_type is null");
      },
      get_query_promise : function(data, callback) {
        return data.event_type ? promise && req ? Promise.all([promise, req]).then(function() {
          return "function" == typeof callback && callback(_taq._assembleData(data)), Promise.resolve(_taq._assembleData(data));
        }).catch(function() {
          return "function" == typeof callback && callback(_taq._assembleData(data)), Promise.resolve(_taq._assembleData(data));
        }) : ("function" == typeof callback && callback(_taq._assembleData(data)), Promise.resolve(_taq._assembleData(data))) : void console.log("event_type is null");
      },
      getCommonData : function() {
        return {
          req_id : ref,
          ad_id : last,
          cid : name,
          device_id : msg,
          user_id : user
        };
      },
      getFromTTBridge : function(info, cb) {
        if ("adInfo" == info) {
          /** @type {number} */
          exitCode = status.FAIL;
        } else {
          if ("appInfo" == info) {
            /** @type {number} */
            statusNodeId = status.FAIL;
          }
        }
        try {
          $.retry(function(stepCallback) {
            if ("function" == typeof ToutiaoJSBridge.call) {
              ToutiaoJSBridge.call(info, {}, function(fallbackReleases) {
                if ("adInfo" == info) {
                  /** @type {number} */
                  exitCode = status.SUCCESS;
                } else {
                  if ("appInfo" == info) {
                    /** @type {number} */
                    statusNodeId = status.SUCCESS;
                  }
                }
                stepCallback();
                cb(fallbackReleases);
              });
            }
            setTimeout(function() {
              if (exitCode == status.FAIL || statusNodeId == status.FAIL) {
                stepCallback(new Error("jsbridge timeout error"));
              }
            }, 400);
          }, 1);
        } catch (conv_reverse_sort) {
          console.log(conv_reverse_sort);
        }
      },
      _send_http_log : function(request) {
        /** @type {string} */
        var portalSelfUrl = "https://isub.snssdk.com/2/wap/landing_tetris_log/";
        /** @type {string} */
        request.source = "webunion";
        /** @type {string} */
        request.sdk_version = $.getSdkPath() + body;
        /** @type {string} */
        portalSelfUrl = portalSelfUrl + ("?" + $.jsonToQuery(request));
        try {
          $.syncGet({
            url : portalSelfUrl
          });
        } catch (n) {
        }
      },
      _send_log : function(value, type) {
        var n = $.isAwemeCompatible();
        var readable = $.isLiveCompatible();
        if (type === true && this._send_http_log(value), $.isToutiao()) {
          if (n || readable) {
            this._send_http_log(value);
          }
          var test = $._parseUmengData(value);
          return $.isTTAD() ? void $._sendConvertEvent("embeded_ad", "convert", test) : void $._sendUmengEvent("embeded_ad", "convert", test);
        }
        this._send_http_log(value);
      },
      _assembleData : function(data) {
        var options = {};
        var result = {};
        var self = {};
        /** @type {string} */
        var th_field = "";
        var _this = this;
        var name;
        for (name in data) {
          if ("target" == name) {
            var navCommonStyle = _this._getPosition(data[name]);
            $.extend(options, navCommonStyle);
          } else {
            options[name] = data[name];
          }
        }
        try {
          /** @type {*} */
          result = JSON.parse(data.options || "{}");
        } catch (f) {
          console.log("options \u8e47\u5474\u300f\u6d93\u7bd4SON\u93cd\u714e\u7d21\u701b\u6943\ue0c1\u6d93\ufffd");
          result.other = data.options;
        }
        return "performance" === data.event_type && (result.performance = log.getPerformanceObj()), "xpath" === data.event_type && (result.dom_md5 = tmp), options.options = result, options.log_extra = s || $.getFromSessionStorage("umeng_log_extra") || "{}", options.os = $.getOS(), options.page_url = type || decodeURIComponent(target.location.href), options.page_type = options.page_type || script, $.extend(self, _this._getDeviceInfo()), $.extend(self, _this._getPageInfo()), th_field = window.encodeURIComponent(JSON.stringify([options])),
        $.extend(self, {
          track_data : th_field
        }), state = $.isExternal() ? status.FAIL : status.SUCCESS, self.tt_bridge = 1e3 + 100 * exitCode + 10 * statusNodeId + text, self.tt_env = 1e3 + 100 * exitCode + 10 * statusValue + state, self.app_id = appId, self;
      },
      _assembleBaseData : function() {
        var data = {
          log_extra : s || $.getFromSessionStorage("umeng_log_extra") || "{}",
          os : $.getOS(),
          page_url : type || decodeURIComponent(target.location.href),
          page_type : script,
          tt_bridge : 1e3 + 100 * exitCode + 10 * statusNodeId + text,
          tt_env : 1e3 + 100 * exitCode + 10 * statusValue + state,
          app_id : appId
        };
        return $.extend(data, this._getDeviceInfo()), $.extend(data, this._getPageInfo()), data;
      },
      _getPageInfo : function() {
        var data = {};
        var cid = $.getFromSessionStorage("umeng_cid");
        return data.req_id = ref || $.getReqId() || $.getFromSessionStorage("umeng_req_id") || "", data.cid = name || $.getCid() || "", "" === data.cid && cid && (data.cid = cid, statusValue = status.SUCCESS), data.site_id = sourceName, data.ad_id = $.getAdId(), data;
      },
      _getDeviceInfo : function() {
        var params = {};
        return params.device_id = msg || $.getFromSessionStorage("umeng_device_id") || "", params.user_id = user, params.uid = id || $.getFromSessionStorage("umeng_uid") || "", params.ut = html || $.getFromSessionStorage("umeng_ut") || "", params.app_version = version, params.version_code = width, params;
      },
      _getPosition : function(e) {
        if (e) {
          /** @type {number} */
          var fps = target.innerWidth || b.body.clientWidth;
          var offsetX = e.offsetLeft;
          var offsetY = e.offsetHeight;
          /** @type {number} */
          var resolution = 320;
          var node = log.getElementParentsAndSelf(e);
          var result = {
            ox : offsetX,
            oy : offsetY,
            tx : ~~(offsetX * resolution / fps),
            ty : ~~(offsetY * resolution / fps),
            xpath : log.getXPath(node)
          };
          return result;
        }
      }
    };
    var that = {
      initFlags : function() {
        /** @type {number} */
        exitCode = status.FAIL;
        /** @type {number} */
        statusNodeId = status.FAIL;
      },
      initMd5 : function() {
        root.traversal(b.body, "0_body", 0, error, function(padded) {
          key = key + padded;
        });
        tmp = md5(key);
      },
      bindEvent : function() {
        var e = this;
        events.addClickEvent(function(n) {
          var a = n.target;
          var app = a;
          for (; a != b;) {
            if ("function" == typeof a.hasAttribute && a.hasAttribute("tt-data-click")) {
              e._sendTargetMsg(a);
            }
            a = a.parentNode;
          }
          if (a == b && !pullDownIsPulled) {
            var data = {};
            data.target = app;
            /** @type {string} */
            data.event_type = "xpath";
            /** @type {string} */
            data.page_url = type || decodeURIComponent(location.href);
            data.page_type = script;
            data.convert_id = language;
            _taq.push(data);
          }
        }, true);
        document.addEventListener("beforecopy", function(anno) {
          var screenSmallerThanEditor = $.isAwemeCompatible();
          var adjustHeight = $.isLiveCompatible();
          var val = document.getSelection().toString();
          var y = val.length;
          if ("android" === $.getOS() || !$.isToutiao() || screenSmallerThanEditor || adjustHeight) {
            /** @type {string} */
            val = encodeURIComponent(val);
          }
          /** @type {(EventTarget|null)} */
          var id = anno.target;
          if (!pullDownIsPulled && y > 0 && 200 > y) {
            var data = {};
            /** @type {(EventTarget|null)} */
            data.target = id;
            data.select_content = val;
            /** @type {string} */
            data.event_type = "xpath";
            /** @type {string} */
            data.page_url = type || decodeURIComponent(location.href);
            data.page_type = script;
            data.convert_id = language;
            _taq.push(data);
          }
        }, true);
      },
      getInfoFromUrl : function() {
        var options = $.getWebUrlInfo();
        return options ? (statusValue = status.SUCCESS, last = $.getAdId() || "", ref = options.req_id || "", language = options.convert_id || "", name = options.cid || "", id = options.uid || "", html = options.ut || "", msg = options.device_id || "", s = options.log_extra || "", $.setToSessionStorage("umeng_ad_id", last), $.setToSessionStorage("umeng_req_id", ref), $.setToSessionStorage("umeng_cid", name), $.setToSessionStorage("umeng_uid", id), $.setToSessionStorage("umeng_ut", html), $.setToSessionStorage("umeng_device_id",
        msg), $.setToSessionStorage("umeng_log_extra", s), {
          ad_id : last,
          req_id : ref,
          cid : name,
          user_id : id,
          device_id : msg,
          log_extra : s
        }) : false;
      },
      initFromSessionStorage : function() {
        var deferred = $.getDefer();
        var self = $.getDefer();
        var res = this;
        return "ad" === $.getFromSessionStorage("_tt_ad_info_success") ? (ref = ref || $.getFromSessionStorage("_tt_req_id"), name = name || $.getFromSessionStorage("_tt_cid"), language = language || $.getFromSessionStorage("_tt_convert_id"), s = s || $.getFromSessionStorage("_tt_log_extra"), exitCode = status.UNUSE, text = status.SUCCESS, deferred.resolve({
          req_id : ref,
          cid : name,
          convert_id : language,
          log_extra : s
        })) : (_taq.getFromTTBridge("adInfo", function(options) {
          var props;
          options = options || {};
          if ("string" == typeof options) {
            /** @type {*} */
            options = JSON.parse(options);
          }
          name = options.cid || options.ad_id || "";
          /** @type {*} */
          props = JSON.parse(options.log_extra || "{}");
          ref = props.req_id || "";
          language = props.convert_id || "";
          s = options.log_extra || "{}";
          if (options.code && -1 === options.code) {
            res._sendJsBError("adInfo", "", options.extra_info);
          } else {
            $.setToSessionStorage("_tt_ad_info_success", "ad");
            $.setToSessionStorage("_tt_cid", name);
            $.setToSessionStorage("_tt_req_id", ref);
            $.setToSessionStorage("_tt_convert_id", language);
            $.setToSessionStorage("_tt_log_extra", s);
          }
          deferred.resolve({
            req_id : ref,
            cid : name,
            convert_id : language,
            log_extra : s
          });
        }), setTimeout(function() {
          deferred.reject({
            req_id : ref,
            cid : name,
            convert_id : language,
            log_extra : s
          });
        }, 1e3)), "app" === $.getFromSessionStorage("_tt_app_info_success") ? (msg = msg || $.getFromSessionStorage("_tt_device_id"), user = user || $.getFromSessionStorage("_tt_user_id"), version = version || $.getFromSessionStorage("_tt_app_version"), width = width || $.getFromSessionStorage("_tt_version_code"), appId = appId || $.getFromSessionStorage("_tt_app_id"), statusNodeId = status.UNUSE, self.resolve({
          device_id : msg,
          user_id : user,
          app_version : version,
          version_code : width,
          app_id : appId
        })) : (_taq.getFromTTBridge("appInfo", function(data) {
          data = data || {};
          msg = data.device_id || "";
          user = data.user_id || "";
          version = data.appVersion || "";
          width = data.versionCode || "";
          appId = data.aid || "";
          selectedOptionText = data.netType || "";
          if (!$.isTetris() || data.device_id || data.user_id) {
            $.setToSessionStorage("_tt_app_info_success", "app");
            $.setToSessionStorage("_tt_device_id", msg);
            $.setToSessionStorage("_tt_user_id", user);
            $.setToSessionStorage("_tt_app_version", version);
            $.setToSessionStorage("_tt_version_code", width);
            $.setToSessionStorage("_tt_app_id", appId);
          } else {
            res._sendJsBError("appInfo");
          }
          self.resolve({
            device_id : msg,
            user_id : user,
            app_version : version,
            version_code : width,
            app_id : appId
          });
        }), setTimeout(function() {
          self.reject({
            device_id : msg,
            user_id : user,
            app_version : version,
            version_code : width,
            app_id : appId
          });
        }, 1e3)), promise = deferred.promise, req = self.promise, promise.then(null, function() {
        }), req.then(null, function() {
        }), {
          adInfo : deferred.promise,
          appInfo : self.promise
        };
      },
      _sendTargetMsg : function(elem) {
        var data = {};
        /** @type {string} */
        data.page_url = type || decodeURIComponent(target.location.href);
        data.page_type = script;
        data.event_type = elem.getAttribute("tt-data-eventtype") || "";
        data.convert_id = elem.getAttribute("tt-data-convertid") || "";
        data.event_value = elem.getAttribute("tt-data-eventvalue") || "";
        /** @type {!Element} */
        data.target = elem;
        data.options = elem.getAttribute("tt-data-options") || "";
        _taq.push(data);
      },
      _sendJsBError : function(accountInfo, method, taskName) {
        /** @type {string} */
        var portalSelfUrl = "//isub.snssdk.com/2/wap/landing_tetris_log/metrics/sdk";
        var hostingTestCommon = this;
        target._taq._get_basedata(function(asset) {
          if ("adInfo" !== accountInfo || !asset.cid || "{}" === asset.log_extra) {
            /** @type {*} */
            var options = JSON.parse(JSON.stringify(asset));
            portalSelfUrl = portalSelfUrl + ("?jsb=" + accountInfo);
            if (method) {
              /** @type {string} */
              portalSelfUrl = portalSelfUrl + "&clickid=1";
              /** @type {string} */
              options.clickid = method;
            }
            if (taskName) {
              /** @type {string} */
              portalSelfUrl = portalSelfUrl + "&extra_info=1";
              options.extra_info = taskName;
            }
            portalSelfUrl = portalSelfUrl + ("&" + hostingTestCommon._generateErrorParams(options));
            $.imageGet({
              protocol : "https:",
              url : portalSelfUrl
            });
          }
        });
      },
      _generateErrorParams : function(source) {
        /** @type {*} */
        var obj = JSON.parse(JSON.stringify(source));
        var result = {};
        /** @type {!Array} */
        var keys = ["app_id", "page_type", "app_version", "os"];
        /** @type {number} */
        var i = 0;
        for (; i < keys.length; i++) {
          if (obj.hasOwnProperty(keys[i])) {
            result[keys[i]] = source[keys[i]];
            delete obj[keys[i]];
          }
        }
        return result.extra = encodeURIComponent(JSON.stringify(obj)), $.jsonToQuery(result);
      }
    };
    if (target._taq.getCommonDataPromise = function() {
      var parseTemplet = this._getPageInfo();
      var navCommonStyle = that.getInfoFromUrl();
      if (navCommonStyle) {
        return $.combineData(parseTemplet, navCommonStyle);
      }
      if ($.isToutiao()) {
        var navCommonStyle = that.initFromSessionStorage();
        return $.combineData(parseTemplet, navCommonStyle);
      }
      return $.combineData(parseTemplet, {
        req_id : ref,
        cid : name,
        user_id : id,
        device_id : msg,
        log_extra : s
      });
    }, that.initMd5(), !that.getInfoFromUrl() && $.isToutiao()) {
      var _this = that.initFromSessionStorage();
      var item = $.getClickId();
      _this.adInfo.then(function(thisItemModel) {
        if (item && !thisItemModel.cid) {
          that._sendJsBError("adInfo", item);
        }
      }, function() {
        if (item) {
          that._sendJsBError("adInfo", item);
        }
      });
    }
    that.bindEvent();
    if (!window._tt_config) {
      _taq.push({
        event_type : "xpath"
      });
    }
  }
  /**
   * @param {string} src
   * @param {!Function} callback
   * @return {undefined}
   */
  function create_script_elem(src, callback) {
    /** @type {!Element} */
    var scriptElem = document.createElement("script");
    /** @type {string} */
    scriptElem.src = src;
    callback = callback || function() {
    };
    /** @type {function(): undefined} */
    scriptElem.onload = scriptElem.onreadystatechange = function() {
      if (!(this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState)) {
        callback();
        /** @type {null} */
        this.onload = this.onreadystatechange = null;
        this.parentNode.removeChild(this);
      }
    };
    document.getElementsByTagName("head")[0].appendChild(scriptElem);
  }
  if (!target._taq) {
    /** @type {(HTMLScriptElement|null)} */
    var script = document.currentScript;
    /** @type {!Array} */
    target._taq = [];
    create_script_elem("https://s3.pstatp.com/inapp/toutiao.js", function() {
      init();
      /** @type {boolean} */
      var e = /(NewsArticle)(\s|\/|_)(\S)/i.test(navigator.userAgent);
      /** @type {boolean} */
      var boolToParent = ["ad.toutiao.com", "www.toutiaopage.com", "www.chengzijianzhan.com"].indexOf(location.hostname) > -1;
      if (!boolToParent && e && !function(doc) {
        /** @type {!Element} */
        var node = doc.createElement("script");
        /** @type {number} */
        node.async = 1;
        /** @type {string} */
        node.src = "https://sf3-ttcdn-tos.pstatp.com/obj/union-fe/landing_monitor.js";
        /** @type {!Element} */
        var wafCss = doc.getElementsByTagName("script")[0];
        wafCss.parentNode.insertBefore(node, wafCss);
      }(document), "undefined" == typeof window._page_type) {
        /** @type {boolean} */
        var e = /(open_news)(\s|\/|_)(\S)/i.test(navigator.userAgent);
        if (!boolToParent && e) {
          !function() {
            /** @type {!Element} */
            var node = document.createElement("script");
            /** @type {boolean} */
            node.async = true;
            /** @type {string} */
            node.src = "https://s3.pstatp.com/bytecom/resource/tetris/h5-insight-sdk-1.2.0.iife.js";
            /** @type {!Element} */
            var wafCss = document.getElementsByTagName("script")[0];
            wafCss.parentNode.insertBefore(node, wafCss);
          }();
        }
      }
    });
  }
}(window, document);
