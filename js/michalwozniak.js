/**
 * Created by michal on 2/25/2015.
 */

// get day for time tile


function CurrentTimeData()
{
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var date = d.getDate();
    var day = weekday[d.getDay()];
    //document.getElementById("date").innerHTML = date;
    //document.getElementById("day").innerHTML = day;
    $("#date").html(date);
    $("#day").html(day);
}

function CurrentWeatherImg(condition)
{
    switch (condition)
    {
        case "thunderstorms":break;
        case "showers":break;
        case "snow":break;
        case "thunderstorms":break;
        case "thunderstorms":break;
        case "thunderstorms":break;
        case "thunderstorms":break;
        case "thunderstorms":break;

    }
}

function showDialog(id) {
    var dialog = $(id).data('dialog');
    dialog.open();
}


//from http://metroui.org.ua/templates/start-screen.html
$(function () {
    $.StartScreen();

    var tiles = $(".tile, .tile-small, .tile-square, .tile-wide, .tile-large, .tile-big, .tile-super");

    $.each(tiles, function () {
        var tile = $(this);
        setTimeout(function () {
            tile.css({
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)",
                "-webkit-transition": ".3s",
                "transition": ".3s"
            });
        }, Math.floor(Math.random() * 500));
    });

    $(".tile-group").animate({
        left: 0
    });
});
function showEmail() {
    var charm = $("#charmEmail");

    if (charm.data('hidden') == undefined) {
        charm.data('hidden', true);
    }

    if (!charm.data('hidden')) {

        charm.animate({
            right: -300
        });

        charm.data('hidden', true);
        ContactSuccessRemove();
    } else {
        charm.animate({
            right: 0
        });
        charm.data('hidden', false);
    }
}

(function ($) {
    $.StartScreen = function () {
        var plugin = this;
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

        plugin.init = function () {
            setTilesAreaSize();
            if (width > 640) addMouseWheel();
        };

        var setTilesAreaSize = function () {
            var groups = $(".tile-group");
            var tileAreaWidth = 80;
            $.each(groups, function (i, t) {
                if (width <= 640) {
                    tileAreaWidth = width;
                } else {
                    tileAreaWidth += $(t).outerWidth() + 80;
                }
            });
            $(".tile-area").css({
                width: tileAreaWidth
            });
        };

        var addMouseWheel = function () {
            $("body").mousewheel(function (event, delta, deltaX, deltaY) {
                var page = $(document);
                var scroll_value = delta * 50;
                page.scrollLeft(page.scrollLeft() - scroll_value);
                return false;
            });
        };

        plugin.init();
    }
})(jQuery);
$(function () {
    var current_tile_area_scheme = localStorage.getItem('tile-area-scheme') || "tile-area-scheme-dark";
    $(".tile-area").removeClass(function (index, css) {
        return (css.match(/(^|\s)tile-area-scheme-\S+/g) || []).join(' ');
    }).addClass(current_tile_area_scheme);

    $(".schemeButtons .button").hover(
        function () {
            var b = $(this);
            var scheme = "tile-area-scheme-" + b.data('scheme');
            $(".tile-area").removeClass(function (index, css) {
                return (css.match(/(^|\s)tile-area-scheme-\S+/g) || []).join(' ');
            }).addClass(scheme);
        },
        function () {
            $(".tile-area").removeClass(function (index, css) {
                return (css.match(/(^|\s)tile-area-scheme-\S+/g) || []).join(' ');
            }).addClass(current_tile_area_scheme);
        }
    );

    $(".schemeButtons .button").on("click", function () {
        var b = $(this);
        var scheme = "tile-area-scheme-" + b.data('scheme');

        $(".tile-area").removeClass(function (index, css) {
            return (css.match(/(^|\s)tile-area-scheme-\S+/g) || []).join(' ');
        }).addClass(scheme);

        current_tile_area_scheme = scheme;
        localStorage.setItem('tile-area-scheme', scheme);

        showSettings();
    });
});

//
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}


//http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
//simple email that test for this basic setup user@domain.tld
function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function ContactSuccessRemove()
{
    clearValidationCSS();
    $("#buttonReset").click(); //reset all the inputs
}

function clearValidationCSS()
{
    $("div.input-control").removeClass('success'); //remvoe the success css
}


//menu tile get resized
function smallerTile()
{
    $('.menu').removeClass('tile').addClass('tile-small');
}
function biggerTile()
{
    $('.menu').removeClass('tile-small').addClass('tile');
}

function handleMatchMedia(mediaQuery) {
    if (mediaQuery.matches) {
        smallerTile();

    } else {
        biggerTile();
    }
}