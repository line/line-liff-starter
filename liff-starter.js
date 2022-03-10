window.onload = function (e) {

    liff.init(function () {

        getP();

    });

};

function getP(){

    var tipe = getParameterByName('type')

    if (!tipe) {

        document.getElementById('textx').addEventListener('click', function () {

            liff.sendMessages([{

                type: 'text',

                text: atob('bGluZTovL2FwcC8xNjM2MzYxMTc5LU45ZG5ScFlnP3R5cGU9Zm90ZXh0JnRleHQ9VFJJTyUyMFBFS09LJTIwQk9UUwoKdHlwZSA9PiBmb3RleHQKdGV4dCA9PiB5b3VyIHRleHQ=')

            }]).then(function () {

                liff.closeWindow();

            });

        });

        document.getElementById('imagex').addEventListener('click', function () {

            liff.sendMessages([{

                type: 'text',

                text: atob('bGluZTovL2FwcC8xNjM2MzYxMTc5LU45ZG5ScFlnP3R5cGU9Zm9pbWFnZSZpbWc9aHR0cHM6Ly9pLmliYi5jby9UcjFtallILzE1NDU5NDY0NzQ0NzQuanBnCgp0eXBlID0+IGZvaW1hZ2UgaW1hZ2UKaW1nID0+IExpbmsgKG11c3QgYmUgSFRUUFMp')

            }]).then(function () {

                liff.closeWindow();

            });

        });

        document.getElementById('videox').addEventListener('click', function () {

            liff.sendMessages([{

                type: 'text',

                text: atob('bGluZTovL2FwcC8xNjM2MzYxMTc5LU45ZG5ScFlnP3R5cGU9dmlkZW8mb2N1PWh0dHBzOi8vdGlueXVybC5jb20veThvZzNvcjUmcGl1PWh0dHBzOi8vaS5pYmIuY28vVHIxbWpZSC8xNTQ1OTQ2NDc0NDc0LmpwZwoKdHlwZSA9PiB2aWRlbwpvY3UgPT4gdmlkZW8gdXJsCnBpdSA9PiBwcmV2aWV3IGltYWdl')

            }]).then(function () {

                liff.closeWindow();

            });

        });

        document.getElementById('audiox').addEventListener('click', function () {

            liff.sendMessages([{

                type: 'text',

                text: atob('bGluZTovL2FwcC8xNjM2MzYxMTc5LU45ZG5ScFlnP3R5cGU9YXVkaW8mbGluaz1odHRwczovL3BsYXRlbGV0cy5mdW4vcHVibGljL3NvdW5kcy9tdXNpYy5tcDMKCmxpbmsgLSBtdXN0IGJlIEhUVFBT')

            }]).then(function () {

                liff.closeWindow();

            });

        });

        document.getElementById('stickerx').addEventListener('click', function () {

            liff.sendMessages([{

                type: 'text',

                text: atob('Tm8gQW5pbWF0aW9uOgpsaW5lOi8vYXBwLzE2MzYzNjExNzktTjlkblJwWWc/dHlwZT1zdGlja2VyJnN0az1ub2FuaW0mc2lkPTE4NDIzMzYzJnBrZz0xNTA5MjAyCgpXaXRoIEFuaW1hdGlvbjoKbGluZTovL2FwcC8xNjM2MzYxMTc5LU45ZG5ScFlnP3R5cGU9c3RpY2tlciZzdGs9YW5pbSZzaWQ9MTM0MzcyODEmcGtnPTEzMzM4MDI=')

            }]).then(function () {

                liff.closeWindow();

            });

        });

    } else {

        makeText();

        makeImage();

        makeVideo();

        makeAudio();

        makeSticker();

        textFooter();

        imageFooter();

        meProfile();

        Profil_e();

        flexText();

        bigImage();

    }

    }

function getParameterByName(name, url) {

    if (!url) url = window.location.href;

    name = name.replace(/[\[\]]/g, '\\$&');

    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),

        results = regex.exec(url);

    if (!results) return null;

    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, ' '));

}

function getProfile(){

    liff.getProfile().then(function (profile) {

        document.getElementById('userid').textContent = 'Hai  ' + profile.displayName;

        document.getElementById('main').src = profile.pictureUrl;        

        document.getElementById('close').addEventListener('click', function () {

            liff.closeWindow();

        });

    });

}

function makeText(){

    var tipe = getParameterByName('type');

    if (tipe === 'text') {

        liff.sendMessages([{

            type: 'text',

            text: getParameterByName('text')

        }]).then(function () {

            liff.closeWindow();

        });

    }

}

function makeImage(){

    var tipe = getParameterByName('type');

    if (tipe === 'image') {

        liff.sendMessages([{

            type: 'image',

            originalContentUrl: getParameterByName('img'),

            previewImageUrl: getParameterByName('img')

        }]).then(function () {

            liff.closeWindow();

        });

    }

}

function makeVideo(){

    var tipe = getParameterByName('type');

    if (tipe === 'video') {

        liff.sendMessages([{

            type: 'video',

            originalContentUrl: getParameterByName('ocu'),

            previewImageUrl: getParameterByName('piu')

        }]).then(function () {

            liff.closeWindow();

        });

    }

}

function makeAudio(){

    var tipe = getParameterByName('type');

    if (tipe === 'audio') {

        liff.sendMessages([{

            type: 'audio',

            originalContentUrl: getParameterByName('link'),

            duration: 60000

        }]).then(function () {

            liff.closeWindow();

        });

    }

}

function makeSticker(){

    var tipe = getParameterByName('type');

    if (tipe === 'sticker') {

        var stk = getParameterByName('stk');

        var sid = getParameterByName('sid');

        var pkg = getParameterByName('pkg');

        var ep = '';

        if (stk === 'anim') {

            ep = "/IOS/sticker_animation@2x.png";

        } else {

            ep = "/IOS/sticker@2x.png";

        }

        liff.sendMessages([{

          type: "template",

          altText: "Sticker",

          template: {

             type: "image_carousel",

             columns: [{

                 imageUrl: "https://stickershop.line-scdn.net/stickershop/v1/sticker/"+sid+ep,

                 action: {

                     type: "uri",

                     uri: "line://shop/sticker/detail/"+pkg}}

                          ]

                        }

        }]).then(function () {

            liff.closeWindow();

        });

    }

}

function textFooter(){

    var tipe = getParameterByName('type');

    liff.getProfile().then(function (prof) {

        var teks = getParameterByName('text');

        if (tipe === 'fotext') {

            liff.sendMessages([{

                type: 'text',

                text: getParameterByName('text'),

                sentBy: {

                    label: prof.displayName,

                    iconUrl: prof.pictureUrl,

                    linkUrl: "line://app/1581589150-le0GNepN?type=fotext&text="+encodeURI(teks)}

            }]).then(function () {

                liff.closeWindow();

            });

        }

    });

}

function imageFooter(){

    var tipe = getParameterByName('type');

    liff.getProfile().then(function (prof) {

        if (tipe === 'foimage') {

            liff.sendMessages([{

                type: 'image',

                originalContentUrl: getParameterByName('img'),

                previewImageUrl: getParameterByName('img'),

                sentBy: {

                    label: prof.displayName,

                    iconUrl: prof.pictureUrl,

                    linkUrl: "line://app/1581589150-le0GNepN?type=foimage&img="+getParameterByName('img')}

            }]).then(function () {

                liff.closeWindow();

            });

        }

    });

}

function meProfile(){

    var tipe = getParameterByName('type');

    liff.getProfile().then(function (prof) {

        var stat = prof.statusMessage;

        if (stat == null) {

            var stat = " - ";

        }

        if (stat.length > 60) {

            var stat = "Status Message is too long! Max 60 words";

        }

        if (tipe === 'profile') {

            liff.sendMessages([{

                type: "template",

                altText: "Profile "+prof.displayName,

                template: {

                    type: "buttons",

                    thumbnailImageUrl: prof.pictureUrl,

                    imageAspectRatio: "square",

                    imageSize: "cover",

                    title: prof.displayName,

                    text: stat,

                    actions: [

                        {

                            type:"uri",

                            label:"Me",

                            uri:"line://app/1581589150-le0GNepN?type=profile"

                        }

                    ]

                }

            }]).then(function () {

                liff.closeWindow();

            });

        }

    });

}
