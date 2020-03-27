
function gethls(url,videotag) {

    if (Hls.isSupported()) {
        var video = document.getElementById(videotag);

        var hls = new Hls();
        // bind them together
        hls.attachMedia(video);
        console.log("made it here");
        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
            console.log("video and playhls.js are now bound together !");
            console.log(hls.loadSource(url));

            hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                console.log("manifest loaded, found " + data.levels.length + " quality level");
            });
        });
    }

}

/*
                var video2 = document.getElementById('video2');
                var hls2 = new Hls();
                // bind them together
                hls2.attachMedia(video2);
                console.log("made it here");
                hls2.on(Hls.Events.MEDIA_ATTACHED, function () {
                    console.log("video and playhls.js are now bound together !");
                    console.log(hls2.loadSource("http://stream1.rtkit.com:1935/rtk3stream/rtk3.stream/playlist.m3u8"));

                    hls2.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                        console.log("manifest loaded, found " + data.levels.length + " quality level");
                    });
                });

                */




//"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"