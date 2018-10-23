(function() {
    function init(element, options) {
        var LOADING_AD_POSITION_THRESHOLD = 300;
        var RELOADING_AD_POSITION_THRESHOLD = 150;
        var lastY = 0;
        var lastRatio = 0;

        if (!element) {
            throw new Error('Element is not defined');
        }

        if (element[0] instanceof Element) {
            element = element[0];
        }

        options = options || {};
        options.loadingThreshold = options.loadingThreshold || LOADING_AD_POSITION_THRESHOLD;
        options.reloadingThreshold = options.reloadingThreshold || RELOADING_AD_POSITION_THRESHOLD;

        var loader = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.intersectionRatio > 0) {
                    entry.target.dispatchEvent(new Event('load-ad'));
                }
            });
        }, {
            rootMargin: '0px 0px ' + options.loadingThreshold + 'px 0px'
        });
        var reloader = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                var currentY = entry.boundingClientRect.y;
                var currentRatio = entry.intersectionRatio;
                if (entry.isIntersecting && currentRatio >= lastRatio && currentY > lastY) {
                    entry.target.dispatchEvent(new Event('reload-ad'));
                }
                lastY = currentY;
                lastRatio = currentRatio;
            });
        }, {
            rootMargin: options.reloadingThreshold + 'px 0px 00px 0px'
        });
        loader.observe(element);
        reloader.observe(element);
    }

    var AdRefresher = {
        init: init,
        refresh: function() {
            //kept for backwards compatibility
        }
    };

    // make available to common module loader
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = AdRefresher;
    } else {
        window.AdRefresher = AdRefresher;
    }
})();
