# Ad Refresher library

Proudly developed by Stavanger Aftenblad team in Cracow.

It allows you to load element content, when user scrolls down and is close to display element.

Additional event is emitted, when user scrolls up - it allows you to refresh element content.

## Usage

Remember! Dist versions does not contain jQuery, but it is required!

```
  var $element = $(this);

  $ad.on('load-ad', function() {
    // your callback for loading element, i.e.
    loadContent($element);
  });
  
  $ad.on('reload-ad', function() {
    // your callback for reloading element, i.e.
    reloadContent($element);
  });

  AdRefresher.init($element);
```

## Development

```
git clone https://github.com/aftenbladet/ad_refresher.git
cd ad_refresher
npm install
bower install
```

Fill in your changes. And prepare dist:

```
gulp prepare-dist
```

And make a PR :)
