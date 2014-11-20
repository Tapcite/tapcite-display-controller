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
```