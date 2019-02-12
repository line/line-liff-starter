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

                text: atob('You've successfully sent a message! Hooray!')

            }]).then(function () {

                liff.closeWindow();

            });

        });

        document.getElementById('imagex').addEventListener('click', function () {

            liff.sendMessages([{

                type: 'text',

                text: atob('You've successfully sent a message! Hooray!')

            }]).then(function () {

                liff.closeWindow();

            });

        });

        document.getElementById('videox').addEventListener('click', function () {

            liff.sendMessages([{

                type: 'text',

                text: atob('You've successfully sent a message! Hooray!')

            }]).then(function () {

                liff.closeWindow();

            });

        });

        document.getElementById('audiox').addEventListener('click', function () {

            liff.sendMessages([{

                type: 'text',

                text: atob('You've successfully sent a message! Hooray!')

            }]).then(function () {

                liff.closeWindow();

            });

        });

        document.getElementById('stickerx').addEventListener('click', function () {

            liff.sendMessages([{

                type: 'text',

                text: atob('You've successfully sent a message! Hooray!=')

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

                    linkUrl: "line://app/1636361179-N9dnRpYg?type=fotext&text="+encodeURI(teks)}

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

                    linkUrl: "line://app/1636361179-N9dnRpYg?type=foimage&img="+getParameterByName('img')}

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
