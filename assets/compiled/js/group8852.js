window.Collection={gridItem:".js-grid-item",blockGrid:".js-block-grid",groupItemInfo:".js-group-item-info",gridItemPhoto:".js-grid-item-photogallery"},Collection.startBinding=function(){$(Collection.gridItem+","+Collection.blockGrid+","+Collection.gridItemPhoto).unbind("click"),$(Collection.gridItem+","+Collection.blockGrid+","+Collection.gridItemPhoto).on("click",function(i){i.preventDefault();var e=$(this).data("linktype");if(5==e||6==e)return!1;if(21==e)window.open($(this).data("url"));else{var t=$(this),o=t.attr("data-link"),n=t.attr("data-url");"_blank"===o?window.open(n,"_blank"):location.href=n}}),$(Collection.groupItemInfo).unbind("click"),$(Collection.groupItemInfo).on("click",function(i){var e=$(this).data("linktype");if(5==e||6==e)return!1;21==e?window.open($(this).data("url")):window.location=$(this).data("url")})},Collection.startBindingPhoto=function(){$(Collection.gridItemPhoto).unbind("click"),$(Collection.gridItemPhoto).on("click",function(i){i.preventDefault();var e=$(this).data("linktype");if(5==e||6==e)return!1;if(21==e)window.open($(this).data("url"));else{var t=$(this),o=t.attr("data-link"),n=t.attr("data-url");"_blank"===o?window.open(n,"_blank"):location.href=n}})},Collection.groupLayoutFullImageSlider=function(){var i,e,t,o,n,l="fade";i=1e3*parseInt($(".js-group-data-holder").attr("data-slideshowspeed")),l="fade"==$(".js-group-data-holder").attr("data-slideshowtransition")?"fade":"slide",e="yes"==$(".js-group-data-holder").attr("data-slideshowautoplay"),1==$(".js-group-data-holder").attr("data-navigation")?(t=!0,o='<svg viewBox="0 0 256 512"><use xlink:href="#chevronl-left-pixpa-icon" width="256" height="512"></use></svg>',n='<svg viewBox="0 0 256 512"><use xlink:href="#chevronl-right-pixpa-icon" width="256" height="512"></use></svg>'):2==$(".js-group-data-holder").attr("data-navigation")?(t=!0,o='<div class="navigation_style-arrow left"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 615 95" style="enable-background:new 0 0 615 95;" xml:space="preserve"><g><polygon points="60.7,84.1 15.7,51.1 60.2,12.1 60.7,44.1 602,44.1 602,55.1 60.7,55.1  "/></g></svg></div>',n='<div class="navigation_style-arrow right"><div class="slider-count-wrapper"><div class="current-slide"></div><div class="total-slide"></div><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 615 95" style="enable-background:new 0 0 615 95;" xml:space="preserve"><g><polygon points="557,12.1 602,45.1 557.5,84.1 557,52.1 15.7,52.1 15.7,41.1 557,41.1  "/></g></svg></div></div>'):3==$(".js-group-data-holder").attr("data-navigation")?(t=!1,o='<div class="navigation_style-arrow left"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 615 95" style="enable-background:new 0 0 615 95;" xml:space="preserve"><g><polygon points="60.7,84.1 15.7,51.1 60.2,12.1 60.7,44.1 602,44.1 602,55.1 60.7,55.1  "/></g></svg></div>',n='<div class="slider-count-wrapper"><div class="current-slide"></div><span>/</span><div class="total-slide"></div></div> <div class="navigation_style-arrow right"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 615 95" style="enable-background:new 0 0 615 95;" xml:space="preserve"><g><polygon points="557,12.1 602,45.1 557.5,84.1 557,52.1 15.7,52.1 15.7,41.1 557,41.1  "/></g></svg></div>'):t=!1,console.log("nextarrow"+t);var r=window.innerHeight;$(".group_lgslider_container, .group_lgslider-items").css({height:r+"px"});var a=$(".group_lgslider_grid").lightSlider({item:1,autoWidth:!1,slideMove:1,slideMargin:0,addClass:"",mode:l,useCSS:!0,cssEasing:"ease",easing:"linear",speed:400,auto:e,pauseOnHover:!1,loop:!0,slideEndAnimation:!0,pause:i,keyPress:!0,controls:t,prevHtml:o,nextHtml:n,rtl:!1,adaptiveHeight:!1,vertical:!1,verticalHeight:500,vThumbWidth:100,thumbItem:0,pager:!0,gallery:!1,galleryMargin:0,thumbMargin:0,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(i,e){},onBeforeSlide:function(i,e){},onAfterSlide:function(i){},onBeforeNextSlide:function(i){},onBeforePrevSlide:function(i){},onSliderLoad:function(i,e,t){$(".group_lgslider_grid").removeClass("cS-hidden")}});$(".total-slide").text(a.getTotalSlideCount()),$(".group_lgslider_container .lSAction > .lSPrev, .group_lgslider_container .navigation_container_bottom > .lSPrev").unbind("click"),$(".group_lgslider_container .lSAction > .lSPrev, .group_lgslider_container .navigation_container_bottom > .lSPrev").click(function(){a.goToPrevSlide()}),$(".group_lgslider_container .lSAction > .lSNext,.group_lgslider_container .navigation_container_bottom > .lSNext").unbind("click"),$(".group_lgslider_container .lSAction > .lSNext, .group_lgslider_container .navigation_container_bottom > .lSNext").click(function(){a.goToNextSlide()})};
