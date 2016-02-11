(function(jQuery) {
    var LOADING_AD_POSITION_THRESHOLD = 300;
    var RELOADING_AD_POSITION_THRESHOLD = 150;

    if (typeof(jQuery) === 'undefined') {
        throw new Error('jQuery is not defined');
    }

    jQuery(function() {
        new ResizeSensor(jQuery('body'), function() {
            Waypoint.refreshAll()
        });
    });

    /**
     * @param {jQuery} $element
     */
    function init($element) {
        if (!$element) {
            throw new Error('Element is not defined');
        }

        new Waypoint({
            element: $element[0],
            handler: function(direction) {
                if (direction === 'down') {
                    $element.trigger('load-ad');
                }
            },
            offset: window.innerHeight + LOADING_AD_POSITION_THRESHOLD
        });

        new Waypoint({
            element: $element[0],
            handler: function(direction) {
                if (direction === 'up') {
                    $element.trigger('reload-ad');
                }
            },
            offset: -250 - RELOADING_AD_POSITION_THRESHOLD
        });
    }

    var AdRefresher = {
        init: init
    };

    // make available to common module loader
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = AdRefresher;
    } else {
        window.AdRefresher = AdRefresher;
    }
})(jQuery);
