(function (window) {
var myhtm = '<div  class=%22mainbtn%22 tabindex=%221%22>X   <div class=%22cir%22>   <a id=%22one%22 class=%22mainbtn fa fa-whatsapp%22 style=%22left:30%;bottom:55%;%22><p>WhatsApp</p></a>   <a id=%22two%22 class=%22mainbtn fa fa-twitter-square%22 style=%22left:5%;bottom:10%;%22><p>Twitter</p></a>   <a id=%22three%22 class=%22mainbtn fa fa-google-plus%22  style=%22left:-15%;bottom:-40%;%22><p>Google</p></a>   <a id=%22four%22 class=%22mainbtn fa fa-user-circle %22 style=%22left:80%;bottom:90%;%22><p>contact</p></a>   </div> </div> <div id=%22bkg%22 class=%22cont%22> <div id=%22mid%22 class=%22mid%22> </div> </div>';
var styd = "\n.protec {} \n.cont {\nposition: absolute; \nwidth: 100%; \nheight: 100%; \ntop: 0px; \nleft: 0px; \nbackground: rgba(0,0,0,0.5); \npadding: 0; \nmargin: 0px; \ndisplay: none;}\n.mid {\nwidth: 95%; \nheight: 80%; \nbackground: white; \nborder-radius: 10px; \nalign-self: center; \ndisplay: inline-flex; \nposition: sticky; \nleft: 2%; \nright: 2%; \n}";
var btnstyd = "\n.mainbtn{\ncolor:#222;\nz-index:1000; \nposition:absolute; \nwidth:45px; \nheight:45px; \nbottom:10%; \nfloat:right; \nright:5%; \ndisplay: table-cell; \nvertical-align: middle; \nbackground-color:#00affd; \ntext-align: center; \nbox-shadow:1px 2px 10px #555; \nborder-radius:100%; \ncolor:#fff; \ntransition: all 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550); \ncursor:pointer; }\n.mainbtn{\nline-height:45px !important;\n}\n.mainbtn:hover > .cir { \nopacity:1; \nwidth:100px; \nheight:100px; \ntransform-style: preserve-3d; }\n.cir > a > p{ \nopacity:0; \nposition: relative; \nfloat: right; \nleft: -58px; \n/* width: 50px; */ \nline-height: normal; \ntop: -60px; \npadding: 2px 10px; \nheight: 20px; \nborder-radius: 3px; \nbackground: #9E9E9E; \nbox-shadow:1px 2px 10px #555; \n}\n.mainbtn:hover > p{\nopacity:1;\n}\n.cir{ \nz-index:2; \nopacity:0; \nposition:absolute; \nright:50%; \nbottom:50%; \nwidth:10px; \nheight:10px; \nborder-radius:100%; \ntransition: all 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550); \n}\n\*{\noutline:none;\n}";
var ttt = {};

ttt.htm = function htmlr() {
	var nwht = myhtm.replace(/%22/gi, '"');
document.getElementsByTagName('body')[0].innerHTML += nwht;
};

ttt.stt = function styler() {
var chk = document.querySelector('style');
if (chk == null) {
var cs = document.createElement('style');
document.getElementsByTagName("header")[0].appendChild(cs);
document.getElementsByTagName("style")[0].innerText += styd + btnstyd;
}else{
document.getElementsByTagName("style")[0].innerText += styd + btnstyd;
};

};


ttt.mak = function makd() {
	var n = document.querySelectorAll('div#myth');
	if (n.length == 0 || n.length == null) {
	var cdiv = document.createElement("div");
	cdiv.style = "background: rgba(255, 255, 255, 0.9); position: absolute; top: 0px; width: 100%; height: 100px; display: block; z-index: 999; color: red; overflow: auto; border: 3px solid red;";
	cdiv.style.resize = "both";
	cdiv.id = "myth";
var bdy = document.getElementsByTagName("body");
	bdy[0].appendChild(cdiv);
		} else {
			document.getElementById("myth").remove();
		}
	};
ttt.allz = function allz(x) {
var webs = ["xvideos", "pornhub", "xhamster", "xnxx", "instagram"];
var x = window.location.hostname.replace(/(^\w+\.)?(.+)(\..+)/gi, "$2");
var x2 = document.title.search(/xhamster/gi);
	if (x == "xvideos"){
		var s = document.getElementsByClassName("seek-thumb")[0].style.backgroundImage;
var ss = s.replace(/url\(\"|\"\)/gi, "");
var imgg = document.createElement("img");
imgg.style = "position: absolute; top: 0px; max-width: 100%; max-height: 100%; display: block; resize: both;";
imgg.id = "myimg";
imgg.src = ss;
document.getElementById("myth").appendChild(imgg); 
	} else if (x == "pornhub") {
		var s = document.getElementsByClassName("mhp1138_image")[1].src;
for (var i = 0; i < 7; i++) {
	var sd = ")S" + i;
	var ss = s.replace(/\)s./gi, sd);
	var mimg = document.createElement("img");
	mimg.style = "float: left; clear: right; max-width: 100%; max-height: 100%; display: block; margin-right: 10px; margin-bottom: 10px;";
	mimg.id = "myimg" + i;
	mimg.src = ss;
  mimg.alt = "img" + i;
	document.getElementById("myth").appendChild(mimg);	
};	
	} else if (x == "xnxx") {
var s = document.getElementsByClassName("seek-thumb")[0].style.backgroundImage;
var ss = s.replace(/url\(\"|\"\)/gi, "");
var imgg = document.createElement("img");
imgg.style = "position: absolute; top: 0px; max-width: 100%; max-height: 100%; display: block; resize: both;";
imgg.id = "myimg";
imgg.src = ss;
document.getElementById("myth").appendChild(imgg);
	} else if (x == "instagram") {
		var imagl = document.getElementsByClassName("FFVAD");
var inst = document.querySelectorAll('.myimgah');
var i;
function count() {
if (inst.length == 0) {
i = 0;
return i;
} else {
i = n.length;
return i;
} 
};

var loop = function(){
for (var i = 0; i < imagl.length; i++) {
var tst = document.getElementsByClassName("FFVAD")[i].srcset;
var ss = tst.replace(/.+750w.|\s1080w/gi, "");
var z = document.createElement("img");
	z.style = "width: 90px; height: 90px;";
	z.src = ss;
	z.id = "imgz" + i;
	z.setAttribute("class", "myimgah");
var o = document.createElement("a");
	o.style = "margin: 40px;";
	o.href = ss;
	o.id = "link" + i;
	o.innerText = "IMAGE" + i;
	o.setAttribute("target", "_blank");
	o.setAttribute("class", "myimgahhref");
	o.appendChild(z);
	document.getElementById("myth").appendChild(o);

};
var fak = document.getElementsByClassName("myimgah");
var fakl = document.getElementsByClassName("myimgahhref");
for (var fk = 0; fk < fak.length; fk++) {
var dak = fak[fk].src.length;
	if (dak > 300) {
	document.getElementsByClassName("myimgah")[fk].style = "display: none;";
	document.getElementsByClassName("myimgahhref")[fk].style = "display: none;";
	};
	};
};
count();
loop();
		
	} else if (x == "xhamster" || x2 > 0) {
		var s = document.getElementsByClassName("sprite")[0].style.backgroundImage;
var ss = s.replace(/url\(\"|\"\)/gi, "");
var imgg = document.createElement("img");
imgg.style = "position: absolute; top: 0px; width: 600%; height: 100%; display: block; resize: both;";
imgg.id = "myimg";
imgg.src = ss;
document.getElementById("myth").appendChild(imgg);
		
	} else if (x == "cloudvideo") {
		var ss = document.querySelector("video").getAttribute("poster");
var imgg = document.createElement("img");
imgg.style = "position: absolute; top: 0px; max-width: 100%; max-height: 100%; display: block; resize: both;";
imgg.id = "myimg";
imgg.src = ss;
document.getElementById("myth").appendChild(imgg);
		
	}
	

};
ttt.ccc = function clrr(t){
var clr = document.querySelectorAll("#myth");
for (var i = 0; i < clr.length; i++) {
clr[i].style.display = t;
}


};




window.ttt = ttt;
})(window);

ttt.mak();
ttt.allz("x");


// function btns(){ 	document.querySelector(".cir>#one").setAttribute("onclick", "allz('xn')"); document.querySelector(".cir>#two").setAttribute("onclick", "clrr('none')");"; 	 	 }; 	btns();
