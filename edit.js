/* inject the cp pan */

var edit = document.getElementById("ueditor_0");

var edit_for_mp_wx_bzy = document.createElement("div");
edit_for_mp_wx_bzy.setAttribute("id", "edit_for_mp_wx_bzy");
edit_for_mp_wx_bzy.setAttribute("style", "position: fixed;width: 100%;left: 0;right: 0;bottom: 0;margin: auto;height: 150px;background: rgba(0,0,0,0.8);");
document.body.appendChild(edit_for_mp_wx_bzy);





/* add guanzhu */
var btn_guanzhu=document.createElement("button");
btn_guanzhu.onclick=function(){
    edit.contentDocument.body.innerHTML+='<section style="border: 0px rgb(95, 156, 239); vertical-align: top; margin: 0.8em 0px; font-size: 1em; font-family: inherit; text-decoration: inherit; color: rgb(95, 156, 239); box-sizing: border-box; padding: 0px;" ><section style="width: 100%; border-top-width: 2px; border-top-style: solid; border-color: rgb(95, 156, 239); border-bottom-width: 2px; border-bottom-style: solid; box-sizing: border-box;" ><section style="width: 12px; height: 12px; margin: -7px 0px 5px 30%; border-left-width: 2px; border-left-style: solid; border-color: rgb(95, 156, 239); border-top-width: 2px; border-top-style: solid; -webkit-transform: rotate(45deg); box-sizing: border-box; background-color: rgb(255, 255, 255);" ><br></section><section style="text-align: center; width: 100%; margin: -0.5em 0px 0.1em; box-sizing: border-box;" ><section style="display: inline-block; vertical-align: top; box-sizing: border-box;" ><section  style="box-sizing: border-box;">点击上方<span style="color: rgb(249, 110, 87); font-size: 1.2em; box-sizing: border-box;" >“name”</span>可以订阅哦</section></section></section></section><section style="width: 0px; height: 0px; clear: both;"></section></section>';
    edit.contentDocument.body.innerHTML+="<p><br></p>";
}
btn_guanzhu.innerText = "加关注";

btn_guanzhu.setAttribute("style","background:#fff");
edit_for_mp_wx_bzy.appendChild(btn_guanzhu);


/* add info */
var btn_info=document.createElement("button");
btn_info.setAttribute("style","background:#fff");
btn_info.innerText = "加介绍";

btn_info.onclick=function(){
    edit.contentDocument.body.innerHTML+="<p><br></p>";
    edit.contentDocument.body.innerHTML+='<section  style="font-size: 1em; white-space: normal; margin: 0px; padding: 0px; border: 0px currentcolor; text-align: justify; line-height: 1.4; box-sizing: border-box;"><section  style="border-color: rgb(95, 156, 239); padding: 0px 8px; color: rgb(95, 156, 239); font-family: inherit; font-size: 1.5em; text-decoration: inherit; border-left-width: 3px; border-left-style: solid; box-sizing: border-box;"><section  style="color: rgb(51, 51, 51); line-height: 1.4; padding-left: 3px; font-family: inherit; font-size: 0.65em; text-decoration: inherit; margin-top: 5px; box-sizing: border-box;"><section  style="box-sizing: border-box;">infoinfoinfo</section></section></section></section>';
    edit.contentDocument.body.innerHTML+="<p><br></p>";

}
edit_for_mp_wx_bzy.appendChild(btn_info);

/* add title btn */
var btn_title1 = document.createElement("button");

btn_title1.setAttribute("style","background:#fff");

btn_title1.innerText = "加标题";

btn_title1.onclick = function () {
    console.log(edit);
    edit.contentDocument.body.innerHTML+="<p><br></p>";
    edit.contentDocument.body.innerHTML+='<section style="border: none rgb(82, 76, 75); margin: 1.5em 0px; font-size: 75%; font-family: inherit; text-align: center; text-decoration: inherit; color: rgb(82, 76, 75); box-sizing: border-box; padding: 0px;" ><section style="width: 100%; box-sizing: border-box;" ><section style="width: 100%; float: left; border-color: rgb(82, 76, 75); box-sizing: border-box;" ><section style="float: left; width: 5%; height: 2.22em; margin-top: -0.12em; border-top-width: 2px; border-top-style: solid; border-color: rgb(82, 76, 75); border-bottom-width: 2px; border-bottom-style: solid; border-left-width: 2px; border-left-style: solid; box-sizing: border-box;" ></section><section style="float: left; height: 2em; width: 90%; border-color: rgb(82, 76, 75); box-sizing: border-box;" ><section style="width: 100%; height: 1em; margin-top: -1em; border-top-width: 2px; border-top-style: solid; border-color: rgb(82, 76, 75); border-left-width: 2px; border-left-style: solid; border-right-width: 2px; border-right-style: solid; box-sizing: border-box;" ></section><section style="width: 100%; height: 1em; margin-top: 2em; border-bottom-width: 2px; border-bottom-style: solid; border-color: rgb(82, 76, 75); border-left-width: 2px; border-left-style: solid; border-right-width: 2px; border-right-style: solid; box-sizing: border-box;" ></section></section><section style="float: left; width: 5%; height: 2.22em; margin-top: -0.12em; border-top-width: 2px; border-top-style: solid; border-color: rgb(82, 76, 75); border-bottom-width: 2px; border-bottom-style: solid; border-right-width: 2px; border-right-style: solid; box-sizing: border-box;" ></section><section style="clear: both; box-sizing: border-box;" ></section></section><section style="width: 96%; float: left; height: 3em; margin-left: 2%; margin-top: -2.6em; line-height: 3em; border: 2px solid rgb(82, 76, 75); overflow: hidden; box-sizing: border-box;" ><section  style="box-sizing: border-box;"><strong><span style="font-size: 14px; line-height: 24px; text-align: center; color: rgb(147, 137, 83);">​title</span></strong></section></section></section><section style="width: 0px; height: 0px; clear: both;"></section></section>';
    edit.contentDocument.body.innerHTML+="<p><br></p>";
}

edit_for_mp_wx_bzy.appendChild(btn_title1);