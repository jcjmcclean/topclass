angular
	.module('topClass.directive', [])
	.directive('topClass', topClass);

function topClass($window) {
	return {
		restrict: "A",
		link: function (scope, element, attrs) {
			var topClass = attrs.topClass,
				parent = element.parent(),
				topPadding = parseInt(attrs.topPadding, 10),
				offsetTop;

			angular.element($window).on('scroll', function () {
				// dynamic page layout so have to recalculate every time;
				// take offset of parent because after the element gets fixed
				// it now has a different offset from the top
				offsetTop = parent.prop('offsetTop');

				if ($window.pageYOffset + topPadding >= offsetTop) {
					element.addClass(topClass);
				}
				else {
					element.removeClass(topClass);
				}
			});
		}
	};
}