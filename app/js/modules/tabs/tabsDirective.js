'use strict';
/**
 * Flowmap directive
 * @author  Andreas Møller
 * 2014
 */
var Swiper = require('swiper');
module.exports = function () {
  return {
    templateUrl : '/templates/tabs.html',
      transclude : true,
      restrict: 'E',
      scope : {
         active : '='
      },
      link: link
  };

  function link (scope, element) {
    var tabsSwiper;
    //set class names used by swiper
    element.addClass('swiper-container');
    element.find('tab').addClass('swiper-slide');

    tabsSwiper = new Swiper(element[0], {
      //Your options here:
      mode:'horizontal',
      preventLinksPropagation : true,
      preventLinks : true,
      simulateTouch : true
      //etc..
    });

    tabsSwiper.on('onSlideChangeEnd', function (swiper) {
      scope.$apply(function () {
        scope.active = swiper.activeIndex;
      });
    });
  }
};
