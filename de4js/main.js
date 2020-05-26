function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" })}
function loadJS(scriptURL){!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=scriptURL,(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}()}
function isInView(e){if(0!=e.length){var n=$(window),t=n.scrollTop(),i=n.height(),o=t+i,h=$(e),r=h.offset().top,f=h.height(),c=r+f;return r>=t&&r<o||c>t&&c<=o||f>i&&r<=t&&c>=o}}
$(document).ready(function() {
/*Accordion*/
$(".accordion > li:eq(0) h3").addClass("active").next().slideDown(),$(".accordion h3").click(function(i){var s=$(this).closest("li").find("div");$(this).closest(".accordion").find("div").not(s).slideUp(),$(this).hasClass("active")?$(this).removeClass("active"):($(this).closest(".accordion").find("h3.active").removeClass("active"),$(this).addClass("active")),s.stop(!1,!0).slideToggle(),i.preventDefault()});
/*Copy to Clipboard*/
jQuery.fn.selectText=function(){this.find('input').each(function(){if($(this).prev().length==0||!$(this).prev().hasClass('p_copy')){$('<p class="p_copy" style="position: absolute; z-index: -1;"></p>').insertBefore($(this))}
$(this).prev().html($(this).val())});var doc=document;var element=this[0];console.log(this,element);if(doc.body.createTextRange){var range=document.body.createTextRange();range.moveToElementText(element);range.select();document.execCommand('copy')}else if(window.getSelection){var selection=window.getSelection();var range=document.createRange();range.selectNodeContents(element);selection.removeAllRanges();selection.addRange(range);document.execCommand('copy')}}
$('pre, code, mark, .mark, kbd').on('click', function(e){var selector = $(this);$(selector).selectText();e.preventDefault();alert("Copied !");popup('AdsenseAd', '<div class="adsense adsense--square"><ins data-ad-client="ca-pub-4929576968958668" data-ad-slot="9401575390"></ins></div>')});
$('.post-body img').each(function(){var alt=$(this).attr('alt');$(this).after('<span class="breadcrumbs">'+alt+'</span>')});
$('pre, code, mark, .mark, kbd').attr('no-attribution','');
// Highlighter
for(var pres=document.querySelectorAll("pre,code,kbd,blockquote,td,mark,span.mark"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);
loadJS('https://raw.githack.com/softwebtuts/jsUnpackerFiles/master/highlight.min.js');
/*Responsive - LazyLoad Iframe*/
$(window).on("resize scroll",function(){
$("iframe[original]").each(function(){isInView($(this))&&($(this).attr("src",$(this).attr("original")),$(this).removeAttr("original"))});
$('.youtube[data-embed]').each(function(){var ytiframe = 'https://www.youtube.com/embed/'+$(this).attr('data-embed');$(this).after("<iframe allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen='' frameborder='0' src='"+ytiframe+"' width='560' height='315'></iframe>");$(this).remove()});
});
var $iframes=$("iframe");$iframes.each(function(){$(this).data("ratio",this.height/this.width).removeAttr("width").removeAttr("height")}),$(window).resize(function(){$iframes.each(function(){var i=$(this).parent().width();$(this).width(i).height(i*$(this).data("ratio"))})}).resize();
/*Download File*/
$(document).ready(function(){$("a[download]").each(function(a){var t=10,o=$(this).attr("href"),l=$(this).attr("fileName"),n=$(this).attr("fileSize"),i="id-"+(a+1),s="<div class='download-section' id='"+i+"'><div class='column-8 fileInfo'><div><strong>File Name : </strong>"+l+"</div><small><strong>File Size : </strong>"+n+"</small></div><div class='btnarea column-4'><button class='btn' style='width:100%;display:block;margin:auto'>Download File</button></div><div class='bar'></div><div class='info column-12'>Your download will automatically start in <mark style='background:var(--color);color:var(--background)'>"+t+"</mark> second after clicking the download button given above.</div></div>";$(this).after(s),$(this).remove(),$("#"+i+" .btn").click(function(){document.documentElement.style.setProperty("--prograssTime","15s"),$("#"+i+" .bar").addClass("active");var a=setInterval(function(){t<=0?(clearInterval(a),$("#"+i+" .btnarea").html("<a href='"+o+"' target='_blank'><button class='btn' style='width:100%;display:block;margin:auto'>Download</button></a>"),window.location.href=o):$("#"+i+" .btnarea").html("<span>Your download will start in <strong>"+t+"</strong> seconds</span>"),t-=1},1e3)})})});
/*Jump To Section*/
$(document).ready(function(){if($(".post-body h2").length>4){var t=$(".post-body h2"),e=0;$(".post-body h2:first").before('<div class="SpecialRead"><h2>Jump To Section:</h2><p>Want to read Something Special? Jump To The Required Section By Clicking on the links Provided below.</p><ul class="jumpToSectionWrap"></ul></div>'),$(t).each(function(t){e++,$(this).attr("id","section"+e),$(".jumpToSectionWrap").append('<li><a href="#section'+e+'" class="jumpToSection" rel="nofollow">'+$(this).html().replace(/(\?|:|!)/g," ")+"</a></li>"),$(this).attr("href","#")})}});
/*Computer Code Section*/
$(document).ready(function(){$('pre:has(code), .mac-window').each(function(){var $this = $(this);$this.before('<div class="pre-window pre-mac"><div class="pre-title-bar"><div class="pre-close"></div><div class="pre-minimize"></div><div class="pre-zoom"></div></div></div>')})});
/*Jquery Tabs*/
$(document).ready(function(){$("#tabs-nav li:first-child").addClass("active"),$(".tab-content").hide(),$(".tab-content:first").show(),$("#tabs-nav li").click(function(){$("#tabs-nav li").removeClass("active"),$(this).addClass("active"),$(".tab-content").hide();var t=$(this).find("a").attr("href");return $(t).fadeIn(),!1})});
!function(e){e.fn.niceSelect=function(t){function s(t){t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class")||"").addClass(t.attr("disabled")?"disabled":"").attr("tabindex",t.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var s=t.next(),n=t.find("option"),i=t.find("option:selected");s.find(".current").html(i.data("display")||i.text()),n.each(function(t){var n=e(this),i=n.data("display");s.find("ul").append(e("<li></li>").attr("data-value",n.val()).attr("data-display",i||null).addClass("option"+(n.is(":selected")?" selected":"")+(n.is(":disabled")?" disabled":"")).html(n.text()))})}if("string"==typeof t)return"update"==t?this.each(function(){var t=e(this),n=e(this).next(".nice-select"),i=n.hasClass("open");n.length&&(n.remove(),s(t),i&&t.next().trigger("click"))}):"destroy"==t?(this.each(function(){var t=e(this),s=e(this).next(".nice-select");s.length&&(s.remove(),t.css("display",""))}),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+t+'" does not exist.'),this;this.hide(),this.each(function(){var t=e(this);t.next().hasClass("nice-select")||s(t)}),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",function(t){var s=e(this);e(".nice-select").not(s).removeClass("open"),s.toggleClass("open"),s.hasClass("open")?(s.find(".option"),s.find(".focus").removeClass("focus"),s.find(".selected").addClass("focus")):s.focus()}),e(document).on("click.nice_select",function(t){0===e(t.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")}),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(t){var s=e(this),n=s.closest(".nice-select");n.find(".selected").removeClass("selected"),s.addClass("selected");var i=s.data("display")||s.text();n.find(".current").text(i),n.prev("select").val(s.data("value")).trigger("change")}),e(document).on("keydown.nice_select",".nice-select",function(t){var s=e(this),n=e(s.find(".focus")||s.find(".list .option.selected"));if(32==t.keyCode||13==t.keyCode)return s.hasClass("open")?n.trigger("click"):s.trigger("click"),!1;if(40==t.keyCode){if(s.hasClass("open")){var i=n.nextAll(".option:not(.disabled)").first();i.length>0&&(s.find(".focus").removeClass("focus"),i.addClass("focus"))}else s.trigger("click");return!1}if(38==t.keyCode){if(s.hasClass("open")){var l=n.prevAll(".option:not(.disabled)").first();l.length>0&&(s.find(".focus").removeClass("focus"),l.addClass("focus"))}else s.trigger("click");return!1}if(27==t.keyCode)s.hasClass("open")&&s.trigger("click");else if(9==t.keyCode&&s.hasClass("open"))return!1});var n=document.createElement("a").style;return n.cssText="pointer-events:auto","auto"!==n.pointerEvents&&e("html").addClass("no-csspointerevents"),this}}(jQuery);
$(function(){
$("select").niceSelect();
$('.tooltip').append("<span class='tooltip-child'></span>");$('.tooltip:not([tooltip-position])').attr('tooltip-position','bottom');$(".tooltip").mouseenter(function(){$(this).find('span.tooltip-child').empty().append($(this).attr('tooltip'))});
}());
