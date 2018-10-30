# Ad Refresher library

Proudly developed by Stavanger Aftenblad team in Cracow.

It allows you to load element content, when user scrolls down and is close to display element.

Additional event is emitted, when user scrolls up - it allows you to refresh element content.

## Usage

`$element` should be a DOM Element or a jQuery object.

```
  var $element = $(this); // or document.getElementById('elementId');

  $ad.on('load-ad', function() {
    // your callback for loading element, i.e.
    loadContent($element);
  });
  
  $ad.on('reload-ad', function() {
    // your callback for reloading element, i.e.
    reloadContent($element);
  });
  
  // default options
  var options = {
    loadingThreshold: 300,
    reloadingThreshold: 150,
    useReloading: true        // if set to false, it will disable reload event
  }

  // second parameter is optional
  AdRefresher.init($element, options);
```

## Development

```
git clone https://github.com/aftenbladet/ad_refresher.git
cd ad_refresher
npm install
```

Fill in your changes. And prepare dist:

```
gulp prepare-dist
```

And make a PR :)
