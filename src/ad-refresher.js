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
     * @param {object} options
     */
    function init($element, options) {
        if (!$element) {
            throw new Error('Element is not defined');
        }

        options = options || {};
        options.loadingThreshold = options.loadingThreshold || LOADING_AD_POSITION_THRESHOLD;
        options.reloadingThreshold = options.reloadingThreshold || RELOADING_AD_POSITION_THRESHOLD;

        new Waypoint({
            element: $element[0],
            handler: function(direction) {
                if (direction === 'down') {
                    $element.trigger('load-ad');
                }
            },
            offset: window.innerHeight + options.loadingThreshold
        });

        new Waypoint({
            element: $element[0],
            handler: function(direction) {
                if (direction === 'up') {
                    $element.trigger('reload-ad');
                }
            },
            offset: -250 - options.reloadingThreshold
        });
    }

    function refresh() {
        setTimeout(function() {
            Waypoint.refreshAll();
        }, 0);
    }

    var AdRefresher = {
        init: init,
        refresh: refresh
    };

    // make available to common module loader
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = AdRefresher;
    } else {
        window.AdRefresher = AdRefresher;
    }
})(jQuery);
