tapcite-display-controller
==========================
```

<!--  Include latest version -->
<script src="//cdn.tapcite.com/tapcite-display-controller.min.js" type="text/javascript"></script>

<!--  Or include specific version -->
<script src="//cdn.tapcite.com/tapcite-display-controller-1.0.2.min.js" type="text/javascript"></script>

Tapcite.on('tapcite:play',function() {
    console.debug('play!'); //content is now visible
});
Tapcite.on('tapcite:stop',function() {
    console.debug('stop!'); //content is not visible anymore
});
Tapcite.on('test event',function() {
    console.debug('test event'); //custom event  'test event' received
});
Tapcite.on('tapcite:qrcode',function(data) {
    console.debug('qrcode received');
    console.debug(data);
    /*
    {
        domain: "yourdomain.tapcite.com",
        fullURL: "http://yourdomain.tapcite.com/c/1717",
        qr: "data:image/png;base64,...",
        str: "1717",
        url: "http://yourdomain.tapcite.com/c/1717"
    }
    */
});

/**
 * Send text to current mobile view
 *
 * Can be use in mobile vies with text like this:
 * {{name | Fallback text}}
 */
Tapcite.text('name','My text');

/**
 * Send data with value
 * Data can be used in any view in mobile.
 * Data will be sent also with form to serve (webhook, email)
 *
 * Can be use in mobile vies with text like this:
 * {{data.deep2.sub.val | Fallback text}}
 */
Tapcite.data('deep2.sub.val','myvalue'); //send data to mobile controller

/**
 * Send data as object to mobile controller.
 * Data can be used in any view in mobile.
 * Data will be sent also with form to serve (webhook, email)
 *
 * Can be use in mobile vies with text like this:
 * {{data.myobject.scores | Fallback text}}
 */
Tapcite.data('myobject',{
    scores: 10,
    ranking: 1
});

/**
 * Move user to next view.
 * Target view must be connected to current view.
 * Target value can be id or name of target.
 * Empty or null will go to random target
 */
Tapcite.go('target_id');
Tapcite.go('Target name');
Tapcite.go();//random
```