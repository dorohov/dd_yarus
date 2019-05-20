!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Cocoen=e()}}(function(){return function e(t,n,i){function s(o,a){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!a&&l)return l(o,!0);if(r)return r(o,!0);var d=new Error("Cannot find module '"+o+"'");throw d.code="MODULE_NOT_FOUND",d}var h=n[o]={exports:{}};t[o][0].call(h.exports,function(e){var n=t[o][1][e];return s(n?n:e)},h,h.exports,e,t,n,i)}return n[o].exports}for(var r="function"==typeof require&&require,o=0;o<i.length;o++)s(i[o]);return s}({1:[function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,n){i(this,e),this.options=s({},e.defaults,n),this.element=t||document.querySelector(".cocoen"),this.init()}return r(e,[{key:"init",value:function(){this.createElements(),this.addEventListeners(),this.dimensions()}},{key:"createElements",value:function(){var e=document.createElement("span");e.className=this.options.dragElementSelector.replace(".",""),this.element.appendChild(e);var t=document.createElement("div"),n=this.element.querySelector("img:first-child");t.appendChild(n.cloneNode(!0)),n.parentNode.replaceChild(t,n),this.dragElement=this.element.querySelector(this.options.dragElementSelector),this.beforeElement=this.element.querySelector("div:first-child"),this.beforeImage=this.beforeElement.querySelector("img")}},{key:"addEventListeners",value:function(){this.element.addEventListener("click",this.onTap.bind(this)),this.element.addEventListener("mousemove",this.onDrag.bind(this)),this.element.addEventListener("touchmove",this.onDrag.bind(this)),this.dragElement.addEventListener("mousedown",this.onDragStart.bind(this)),this.dragElement.addEventListener("touchstart",this.onDragStart.bind(this)),window.addEventListener("mouseup",this.onDragEnd.bind(this)),window.addEventListener("resize",this.dimensions.bind(this))}},{key:"dimensions",value:function(){this.elementWidth=parseInt(window.getComputedStyle(this.element).width,10),this.elementOffsetLeft=this.element.getBoundingClientRect().left+document.body.scrollLeft,this.beforeImage.style.width=this.elementWidth+"px",this.dragElementWidth=parseInt(window.getComputedStyle(this.dragElement).width,10),this.minLeftPos=this.elementOffsetLeft+10,this.maxLeftPos=this.elementOffsetLeft+this.elementWidth-this.dragElementWidth-10}},{key:"onTap",value:function(e){e.preventDefault(),this.leftPos=e.pageX?e.pageX:e.touches[0].pageX,this.requestDrag()}},{key:"onDragStart",value:function(e){e.preventDefault();var t=e.pageX?e.pageX:e.touches[0].pageX,n=this.dragElement.getBoundingClientRect().left+document.body.scrollLeft;this.posX=n+this.dragElementWidth-t,this.isDragging=!0}},{key:"onDragEnd",value:function(e){e.preventDefault(),this.isDragging=!1}},{key:"onDrag",value:function(e){e.preventDefault(),this.isDragging&&(this.moveX=e.pageX?e.pageX:e.touches[0].pageX,this.leftPos=this.moveX+this.posX-this.dragElementWidth,this.requestDrag())}},{key:"drag",value:function(){this.leftPos<this.minLeftPos?this.leftPos=this.minLeftPos:this.leftPos>this.maxLeftPos&&(this.leftPos=this.maxLeftPos);var e=this.leftPos+this.dragElementWidth/2-this.elementOffsetLeft;e/=this.elementWidth;var t=100*e+"%";this.dragElement.style.left=t,this.beforeElement.style.width=t,this.options.dragCallback&&this.options.dragCallback(e)}},{key:"requestDrag",value:function(){window.requestAnimationFrame(this.drag.bind(this))}}]),e}();o.defaults={dragElementSelector:".cocoen-drag",dragCallback:null},t.exports=o},{}]},{},[1])(1)});
!function r(n,e,t){function o(i,f){if(!e[i]){if(!n[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var s=e[i]={exports:{}};n[i][0].call(s.exports,function(r){var e=n[i][1][r];return o(e?e:r)},s,s.exports,r,n,e,t)}return e[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({1:[function(r,n,e){"use strict";!function(r,n){r&&n&&(r.fn.cocoen=function(e){function t(){return new n(this,r.extend({},n.defaults,e))}return this.each(t)})}(window.jQuery,window.Cocoen)},{}]},{},[1]);
(function($) {
    "use strict"
    $(function() {

        startAnimation()
        $(document).scroll(function() {
            startAnimation()
        })

        function startAnimation() {
            var animation_element = $('.__dd__anim')

            animation_element.each(function() {

                var a_e_transition = $(this).data('animtransition')
                var a_e_animation = $(this).data('animtype')
                var a_e_delay = $(this).data('animdelay')

                $(this).css({
                    "transition": a_e_transition + 's all ease',
                    "-webkit-animation-delay": a_e_delay + 's',
                    "-moz-animation-delay": a_e_delay + 's',
                    "-o-animation-delay": a_e_delay + 's',
                    "animation-delay": a_e_delay + 's'
                })

                var top_of_element = $(this).offset().top;
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();

                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                    $(this)
                        .addClass('animated')
                        .addClass('__dd__is--show')
                        .addClass(a_e_animation)
                } else {
                    $(this)
                        .removeClass('animated')
                        .removeClass('__dd__is--show')
                        .removeClass(a_e_animation)
                }
            })
        }
    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {
        $('.__dd__block-two__ba__block').cocoen();
    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW0uanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBzdGFydEFuaW1hdGlvbigpXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRpb25fZWxlbWVudCA9ICQoJy5fX2RkX19hbmltJylcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbl9lbGVtZW50LmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGFfZV90cmFuc2l0aW9uID0gJCh0aGlzKS5kYXRhKCdhbmltdHJhbnNpdGlvbicpXHJcbiAgICAgICAgICAgICAgICB2YXIgYV9lX2FuaW1hdGlvbiA9ICQodGhpcykuZGF0YSgnYW5pbXR5cGUnKVxyXG4gICAgICAgICAgICAgICAgdmFyIGFfZV9kZWxheSA9ICQodGhpcykuZGF0YSgnYW5pbWRlbGF5JylcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6IGFfZV90cmFuc2l0aW9uICsgJ3MgYWxsIGVhc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLXdlYmtpdC1hbmltYXRpb24tZGVsYXlcIjogYV9lX2RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLW1vei1hbmltYXRpb24tZGVsYXlcIjogYV9lX2RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLW8tYW5pbWF0aW9uLWRlbGF5XCI6IGFfZV9kZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICBcImFuaW1hdGlvbi1kZWxheVwiOiBhX2VfZGVsYXkgKyAncydcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRvcF9vZl9lbGVtZW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm90dG9tX29mX2VsZW1lbnQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBib3R0b21fb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmlubmVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9wX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKGJvdHRvbV9vZl9zY3JlZW4gPiB0b3Bfb2ZfZWxlbWVudCkgJiYgKHRvcF9vZl9zY3JlZW4gPCBib3R0b21fb2ZfZWxlbWVudCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhbmltYXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnX19kZF9faXMtLXNob3cnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYV9lX2FuaW1hdGlvbilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdfX2RkX19pcy0tc2hvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhhX2VfYW5pbWF0aW9uKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5fX2RkX19ibG9jay10d29fX2JhX19ibG9jaycpLmNvY29lbigpO1xyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
