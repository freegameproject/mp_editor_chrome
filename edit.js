/* core */

/* g tools
 /*
 */
var g = {
    //get ua
    getUa: function () {
        return navigator.userAgent;
    },
    //添加css到header
    addCSS: function (cssUrl) {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = cssUrl;
        document.getElementsByTagName("head")[0].appendChild(link);
    },
    //得到css属性
    getCSS: function (obj, name) {
        if (obj.currentStyle) {
            return obj.currentStyle[name];//IE下获取非行间样式
        } else {
            return getComputedStyle(obj, false)[name];//FF、Chorme下获取费行间样式
        }
    },
    //得到text
    getTxt: function (obj) {
        return obj.innerText;
    },
    //设置text
    setText: function (obj, text) {
        obj.innerText = text;
    },
    //得到html
    getTxt: function (obj) {
        return obj.innerHTML;
    },
    //设置html
    setText: function (obj, html) {
        obj.innerHTML = html;
    }
}

var _select = function (s) {
    var arr = [];

    function push() {
        for (i = 0; i < elements.length; i++) {
            arr.push(elements[i]);
        }
    }

    if (s.indexOf('#') != -1) {
        //id
        var id = s.replace('#', '');
        var element = document.getElementById(id);
        console.log("id:" + id + ":" + element);

        arr.push(element);

    } else if (s.indexOf('.') != -1) {
        //class
        var className = s.replace('.', '');
        var elements = document.getElementsByClassName(className);
        push();
    } else {
        //tag
        tagName = s;
        var elements = document.getElementsByTagName(tagName);
        push();
    }


    return arr;
    /*
     var objs = document.querySelectorAll(s);

     for (i = 0; i < objs.length; i++) {
     arr.push(objs[i]);
     }
     return arr;
     */
}


var _make_element = function (s) {
    var elements = [];
    var tagName = s.split(".")[0].split("#")[0];
    var element = document.createElement(tagName);
    var id = "";
    if (s.split("#").length > 1) {
        id = s.split("#")[1].split(".")[0];
        element.setAttribute("id", id);
    }
    var classNames = s.replace("#" + id, "").replace(tagName, "").replace(/\./g, " ").replace(" ", "");

    if (classNames.length > 0) {
        element.setAttribute("class", classNames);
    }

    elements.push(element);
    return elements;
}

var G = function (objs) {
    this.objs = objs;
}
G.prototype = {
    set: function (set) {
        console.log(this.objs);
        this.objs.map(function (obj) {
            console.log("set obj:" + obj);
            set(obj);
        });


        return this;
    },
    setget: function (set, get, n, v) {
        console.log("v:" + v);
        if (v === undefined) {
            var arr = [];
            this.objs.map(function (obj) {
                arr.push(get(obj));
            });
            if (arr.length === 1) {
                return arr[0];
            } else {
                return arr;
            }
        } else {
            this.objs.map(function (obj) {
                set(obj);
            });
            return this;
        }
    },
    html: function (v) {
        return this.setget(function (obj) {
            obj.innerHTML = v;
        }, function (obj) {
            return obj.innerHTML;
        }, null, v);
    },
    text: function (v) {
        return this.setget(function (obj) {
            obj.innerText = v;
        }, function (obj) {
            return obj.innerText;
        }, null, v);
    },
    val: function (v) {
        return this.setget(function (obj) {
            obj.value = v;
        }, function (obj) {
            return obj.value;
        }, null, v);
    },

    css: function (n, v) {
        return this.setget(function (obj) {
            obj.style[n] = v;
        }, function (obj) {
            if (obj.currentStyle) {
                return obj.currentStyle[n];//IE下获取非行间样式
            } else {
                return getComputedStyle(obj, false)[n];//FF、Chorme下获取费行间样式
            }
        }, n, v);
    },
    attr: function (n, v) {
        return this.setget(function (obj) {
            obj.setAttribute(n, v);
        }, function (obj) {
            return obj.getAttribute(n);
        }, n, v);
    },

    toBottom: function () {
        this.objs[0].scrollTop = 0;
    },
    click: function (fn) {
        var $this = this;
        return this.setget(function (obj) {
            obj.onclick = function () {
                fn($this);
            }
        }, function (obj) {
            return obj.onclick;
        }, null, fn);
    },
    style: function (v) {
        return this.set(function (obj) {
            obj.setAttribute("style", v);
        });
    },
    appendTo: function (g) {
        return this.set(function (obj) {
            g.objs[0].appendChild(obj);
            //set
        });
    },
    addHtml: function (html) {
        return this.set(function (obj) {
            obj.innerHTML += html;
        });
    },
    selectIframeBody: function () {
        var objs = [];
        objs.push(this.objs[0].contentDocument.body);
        return new G(objs);
    },
    size:function(){
        return this.objs.length;
    },
    selectElements:function(queryText){
        var objs = [];
        var elements=this.objs[0].contentDocument.querySelectorAll(queryText);
        for(i=0;i<elements.length;i++){
            objs.push(elements[i]);

        }
        return new G(objs);
    },


}

var _ = function (s) {
    return new G(_select(s));
}

_.new = function (s) {
    return new G(_make_element(s));
}

_.ajax=function(){

}




_.require = function (url) {
    if (url.indexOf(".css") != -1) {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = cssUrl;

        document.getElementsByTagName("head")[0].appendChild(link);
    } else if (url.indexOf(".js") != -1) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = cssUrl;

        document.getElementsByTagName("head")[0].appendChild(script);
    }
}


/*  */
var mpedit = _("#ueditor_0");


/* guanzhu */
if (_("body").attr("bzy") != 1) {
    _.new("div#edit_for_mp_wx_bzy").style("z-index:999;position: fixed;width: 100%;left: 0;right: 0;bottom: 0;margin: auto;height: 150px;background: rgba(0,0,0,0.8);").appendTo(_("body"));
    _.new("button").style("background:#fff").text("加关注").click(function ($this) {
        mpedit.selectIframeBody().html('<section style="border: 0px rgb(95, 156, 239); vertical-align: top; margin: 0.8em 0px; font-size: 1em; font-family: inherit; text-decoration: inherit; color: rgb(95, 156, 239); box-sizing: border-box; padding: 0px;" ><section style="width: 100%; border-top-width: 2px; border-top-style: solid; border-color: rgb(95, 156, 239); border-bottom-width: 2px; border-bottom-style: solid; box-sizing: border-box;" ><section style="width: 12px; height: 12px; margin: -7px 0px 5px 30%; border-left-width: 2px; border-left-style: solid; border-color: rgb(95, 156, 239); border-top-width: 2px; border-top-style: solid; -webkit-transform: rotate(45deg); box-sizing: border-box; background-color: rgb(255, 255, 255);" ><br></section><section style="text-align: center; width: 100%; margin: -0.5em 0px 0.1em; box-sizing: border-box;" ><section style="display: inline-block; vertical-align: top; box-sizing: border-box;" ><section  style="box-sizing: border-box;">点击上方<span style="color: rgb(249, 110, 87); font-size: 1.2em; box-sizing: border-box;" >“name”</span>可以订阅哦</section></section></section></section><section style="width: 0px; height: 0px; clear: both;"></section></section><p><br></p>');
    }).appendTo(_("#edit_for_mp_wx_bzy"));


    /* add info */
    _.new("button").style("background:#fff").text("加介绍").click(function ($this) {
        mpedit.selectIframeBody().addHtml('<p><br></p><section  style="font-size: 1em; white-space: normal; margin: 0px; padding: 0px; border: 0px currentcolor; text-align: justify; line-height: 1.4; box-sizing: border-box;"><section  style="border-color: rgb(95, 156, 239); padding: 0px 8px; color: rgb(95, 156, 239); font-family: inherit; font-size: 1.5em; text-decoration: inherit; border-left-width: 3px; border-left-style: solid; box-sizing: border-box;"><section  style="color: rgb(51, 51, 51); line-height: 1.4; padding-left: 3px; font-family: inherit; font-size: 0.65em; text-decoration: inherit; margin-top: 5px; box-sizing: border-box;"><section  style="box-sizing: border-box;">infoinfoinfo</section></section></section></section><p><br></p>');
    }).appendTo(_("#edit_for_mp_wx_bzy"));

    /* add title */
    _.new("button").style("background:#fff").text("加标题").click(function ($this) {
        mpedit.selectIframeBody().addHtml('<p><br></p><section style="border: none rgb(82, 76, 75); margin: 1.5em 0px; font-size: 75%; font-family: inherit; text-align: center; text-decoration: inherit; color: rgb(82, 76, 75); box-sizing: border-box; padding: 0px;" ><section style="width: 100%; box-sizing: border-box;" ><section style="width: 100%; float: left; border-color: rgb(82, 76, 75); box-sizing: border-box;" ><section style="float: left; width: 5%; height: 2.22em; margin-top: -0.12em; border-top-width: 2px; border-top-style: solid; border-color: rgb(82, 76, 75); border-bottom-width: 2px; border-bottom-style: solid; border-left-width: 2px; border-left-style: solid; box-sizing: border-box;" ></section><section style="float: left; height: 2em; width: 90%; border-color: rgb(82, 76, 75); box-sizing: border-box;" ><section style="width: 100%; height: 1em; margin-top: -1em; border-top-width: 2px; border-top-style: solid; border-color: rgb(82, 76, 75); border-left-width: 2px; border-left-style: solid; border-right-width: 2px; border-right-style: solid; box-sizing: border-box;" ></section><section style="width: 100%; height: 1em; margin-top: 2em; border-bottom-width: 2px; border-bottom-style: solid; border-color: rgb(82, 76, 75); border-left-width: 2px; border-left-style: solid; border-right-width: 2px; border-right-style: solid; box-sizing: border-box;" ></section></section><section style="float: left; width: 5%; height: 2.22em; margin-top: -0.12em; border-top-width: 2px; border-top-style: solid; border-color: rgb(82, 76, 75); border-bottom-width: 2px; border-bottom-style: solid; border-right-width: 2px; border-right-style: solid; box-sizing: border-box;" ></section><section style="clear: both; box-sizing: border-box;" ></section></section><section style="width: 96%; float: left; height: 3em; margin-left: 2%; margin-top: -2.6em; line-height: 3em; border: 2px solid rgb(82, 76, 75); overflow: hidden; box-sizing: border-box;" ><section  style="box-sizing: border-box;"><strong><span style="font-size: 14px; line-height: 24px; text-align: center; color: rgb(147, 137, 83);">​title</span></strong></section></section></section><section style="width: 0px; height: 0px; clear: both;"></section></section><p><br></p>');
    }).appendTo(_("#edit_for_mp_wx_bzy"));

    /* add title */
    _.new("button").style("background:#fff").text("加标题 （序列）").click(function ($this) {

        var count=mpedit.selectElements('.wxqq-bg').size();

        count+=1;

        mpedit.selectIframeBody().addHtml('<p><br></p><section style="margin: 0.8em 0px 0.5em;"><section class="wxqq-bg" style="border-radius: 2em; width: 2.5em; height: 2.5em; text-align: center; vertical-align: top; display: inline-block; background-color: rgb(235, 35, 0);"><section style="width: 100%; display: table;"><section style="color: rgb(255, 255, 255); line-height: 1.3em; font-family: inherit; font-size: 2em; font-style: normal; font-weight: bolder; vertical-align: middle; display: table-cell;">'+count+'</section></section></section><section style="padding-top: 0.3em; margin-left: 0.7em; display: inline-block;"><section class="wxqq-color" style="color: rgb(235, 35, 0); line-height: 1.4em; font-family: inherit; font-size: 1.5em; font-style: normal;">标题</section></section></section><p><br></p>');

        ueditor_0.contentDocument.body.scrollTop=ueditor_0.contentDocument.body.clientHeight;
    }).appendTo(_("#edit_for_mp_wx_bzy"));

    //ueditor_0.contentDocument.body.getElementsByTagName("iframe")

    _.new("textarea#mp_bzy_video").style("background:#fff;width:500px;height:80px").appendTo(_("#edit_for_mp_wx_bzy"));
    _.new("button").style("background:#fff").text("加标video").click(function ($this) {
        var video=_("#mp_bzy_video").val();
        video=video.replace("video_iframe","");
        mpedit.selectIframeBody().addHtml('<p>'+video+'</p>');
        ueditor_0.contentDocument.body.scrollTop=ueditor_0.contentDocument.body.clientHeight;
        _("#mp_bzy_video").text("");
    }).appendTo(_("#edit_for_mp_wx_bzy"));

    _("body").attr("bzy", 1);
}