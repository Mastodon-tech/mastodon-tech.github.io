!function(t,e){"object"==typeof exports?module.exports=e(t):"function"==typeof define&&define.amd?define([],e):t.LazyLoad=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";function e(t,e){this.settings=s(r,e||{}),this.images=t||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}"function"==typeof define&&define.amd&&(t=window);const r={src:"data-src",srcset:"data-srcset",selector:".lazyload",root:null,rootMargin:"0px",threshold:0},s=function(){let t={},e=!1,r=0,o=arguments.length;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],r++);r<o;r++)!function(r){for(let o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e&&"[object Object]"===Object.prototype.toString.call(r[o])?t[o]=s(!0,t[o],r[o]):t[o]=r[o])}(arguments[r]);return t};if(e.prototype={init:function(){if(!t.IntersectionObserver)return void this.loadImages();let e=this,r={root:this.settings.root,rootMargin:this.settings.rootMargin,threshold:[this.settings.threshold]};this.observer=new IntersectionObserver(function(t){Array.prototype.forEach.call(t,function(t){if(t.isIntersecting){e.observer.unobserve(t.target);let r=t.target.getAttribute(e.settings.src),s=t.target.getAttribute(e.settings.srcset);"img"===t.target.tagName.toLowerCase()?(r&&(t.target.src=r),s&&(t.target.srcset=s)):t.target.style.backgroundImage="url("+r+")"}})},r),Array.prototype.forEach.call(this.images,function(t){e.observer.observe(t)})},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let t=this;Array.prototype.forEach.call(this.images,function(e){let r=e.getAttribute(t.settings.src),s=e.getAttribute(t.settings.srcset);"img"===e.tagName.toLowerCase()?(r&&(e.src=r),s&&(e.srcset=s)):e.style.backgroundImage="url('"+r+"')"})},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},t.lazyload=function(t,r){return new e(t,r)},t.jQuery){const r=t.jQuery;r.fn.lazyload=function(t){return(t=t||{}).attribute=t.attribute||"data-src",new e(r.makeArray(this),t),this}}return e});
!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

//------------ Device Image with loader init
function imgPreloader(){
    if($('.modify-img').length > 0) {

        // window min width 1401 -- large screen
        var window_width = $(window).width();
        if (1400 < window_width) {
            $('.modify-img').each(function () {
                var large = $(this).attr('data-image-large');
                $(this).attr('data-src', large);
            });
            console.log('large');
        }
        // window max-width 1400 -- standard screen
        if (1400 >= window_width && 992 <= window_width) {
            $('.modify-img').each(function () {
                var standard = $(this).attr('data-image-standard');
                $(this).attr('data-src', standard);
            });
            console.log('standard');
        }
        // window max-width 991 -- mobile device
        if (991 >= window_width) {
            $('.modify-img').each(function () {
                var small = $(this).attr('data-image-small');
                $(this).attr('data-src', small);
            });
            console.log('small');
        }

        $(".modify-img").lazyload();

        $('.modify-img').each(function () {
            if ($(this).visible(true)) {
                $(this).delay(100).queue(function () {
                    $(this).on('load', function () {
                        $(this).parent('.Loader').addClass('loaded')
                    }).each(function () {
                        if (this.complete) $(this).load();
                    });
                    $(this).dequeue();
                });
            }
        });


        get_halff = $(window).height() / 1.2;
        $(window).scroll(function () {
            var w_scroll = $(window).scrollTop();
            $('.modify-img').each(function () {
                if (w_scroll > $(this).offset().top - get_halff) {
                    $(this).each(function () {
                        $(this).one('load', function () {
                            $(this).parent('.Loader').addClass('loaded')
                        }).each(function () {
                            if (this.complete) $(this).load();
                        });
                    });
                }

            });
        })

    }

} imgPreloader()

