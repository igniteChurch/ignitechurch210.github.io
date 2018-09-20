// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        btn1.addEventListener("click", butn1, false);
        btn2.addEventListener("click", butn2, false);
        btn3.addEventListener("click", butn3, false);
        btn4.addEventListener("click", butn4, false);
        btn6.addEventListener("click", butn6, false);
        btn7.addEventListener("click", butn7, false);
        btn8.addEventListener("click", butn8, false);

        smsBtn.addEventListener("click", smsBtnF, false);
        ofBtn.addEventListener("click", ofBtnF, false);

        pg4_1.addEventListener("click", pfg4_1, false);
        pg4_2.addEventListener("click", pfg4_2, false);
        pg4_3.addEventListener("click", pfg4_3, false);
        pg4_4.addEventListener("click", pfg4_4, false);
        pg4_5.addEventListener("click", pfg4_5, false);
        pg4_6.addEventListener("click", pfg4_6, false);

        ftn1.addEventListener("click", futn1, false);
        ftn2.addEventListener("click", futn2, false);
        ftn3.addEventListener("click", futn3, false);
        ftn4.addEventListener("click", futn4, false);

    };

    var dM = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("monLet").innerHTML = months[dM.getMonth()];

    var dDL = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("dayLet").innerHTML = days[dDL.getDay()];

    var dDN = new Date();
    document.getElementById("dayNum").innerHTML = dDN.getDate();

    $(document).ready(function () {
        $(this).scrollTop(0);
        $("#mainLogo").fadeIn(1000);
        $("#mainLogo").delay(1500).fadeOut(500);
        $("#mainLogo").delay(1400, showT);
    });

    function showT() {
        $(document).ready(function () {
            $("#footer").fadeIn(400);
            $("#coBlack1").fadeIn(400);
            $("#Page1").fadeIn(400);
            $("#caption").fadeIn(400);
            
        });
    }


    function butn1(imageUrl) {
        var target = "_self";
        var options = "location=no,footer=yes,hardwareback=yes,useWideViewPort=yes,zoom=no,closebuttoncaption=Done,footercolor=#f37025,closebuttoncolor=#ffffff";
        var ref = cordova.InAppBrowser.open('https://www.bible.com/bible/1/JHN.1.KJV', target, options);
    }

    function butn2() {
        $("#coBlack1").hide();
        $("#Page1").hide();
        $("#coBlack2").show();
        $("#Page2").show();

    }

    function smsBtnF() {       
      window.location='sms:2108388957;?&body=Name:%0a';
    }

    function ofBtnF() {
        var target = "_self";
        var options = "location=no,footer=yes,hardwareback=yes,useWideViewPort=yes,zoom=no,closebuttoncaption=Done,footercolor=#f37025,closebuttoncolor=#ffffff";
        var ref = cordova.InAppBrowser.open('https://ignitechurch3.wixsite.com/events/form', target, options);
    }

    function butn3() {
        $("#coBlack1").hide();
        $("#Page1").hide();
        $("#coBlack3").show();
        $("#Page3").show();

    }

    function butn4() {
        $("#coBlack1").hide();
        $("#Page1").hide();
        $("#coBlack4").show();
        $("#Page4").show();

    }

    function pfg4_1(imageUrl) {
        var target = "_self";
        var options = "location=no,footer=yes,hardwareback=yes,useWideViewPort=yes,zoom=no,closebuttoncaption=Done,footercolor=#f37025,closebuttoncolor=#ffffff";
        var ref = cordova.InAppBrowser.open('http://www.kvmv.org/listen.php', target, options);
    }

    function pfg4_2(imageUrl) {
        var target = "_self";
        var options = "location=no,footer=yes,hardwareback=yes,useWideViewPort=yes,zoom=no,closebuttoncaption=Done,footercolor=#f37025,closebuttoncolor=#ffffff";
        var ref = cordova.InAppBrowser.open('https://radiovida.com/', target, options);
    }

    function pfg4_3(imageUrl) {
        var target = "_self";
        var options = "location=no,footer=yes,hardwareback=yes,useWideViewPort=yes,zoom=no,closebuttoncaption=Done,footercolor=#f37025,closebuttoncolor=#ffffff";
        var ref = cordova.InAppBrowser.open('https://tunein.com/radio/913-K-LOVE-Radio-KZLV-s26792/', target, options);
    }

    function pfg4_4(imageUrl) {
        var target = "_self";
        var options = "location=no,footer=yes,hardwareback=yes,useWideViewPort=yes,zoom=no,closebuttoncaption=Done,footercolor=#f37025,closebuttoncolor=#ffffff";
        var ref = cordova.InAppBrowser.open('https://onlineradiobox.com/us/kftg/?cs=us.kftg&played=1', target, options);
    }

    function pfg4_5(imageUrl) {
        var target = "_self";
        var options = "location=no,footer=yes,hardwareback=yes,useWideViewPort=yes,zoom=no,closebuttoncaption=Done,footercolor=#f37025,closebuttoncolor=#ffffff";
        var ref = cordova.InAppBrowser.open('http://www.christiannetcast.com/listen/player.asp?station=kbnj-fm', target, options);
    }

    function pfg4_6(imageUrl) {
        var target = "_self";
        var options = "location=no,footer=yes,hardwareback=yes,useWideViewPort=yes,zoom=no,closebuttoncaption=Done,footercolor=#f37025,closebuttoncolor=#ffffff";
        var ref = cordova.InAppBrowser.open('http://player.listenlive.co/56811', target, options);
    }

    function butn6(imageUrl) {
        var target = "_self";
        var options = "location=no,footer=yes,hardwareback=yes,useWideViewPort=yes,zoom=no,closebuttoncaption=Done,footercolor=#f37025,closebuttoncolor=#ffffff";
        var ref = cordova.InAppBrowser.open('https://ignitechurch3.wixsite.com/events', target, options);
    }

    function butn7() {
        $("#coBlack1").hide();
        $("#Page1").hide();
        $("#aboutIC").show();
    }

    function butn8() {
        var target = "_self";
        var options = "location=no,footer=yes,hardwareback=yes,useWideViewPort=yes,zoom=no,closebuttoncaption=Done,footercolor=#f37025,closebuttoncolor=#ffffff";
        var ref = cordova.InAppBrowser.open('https://www.facebook.com/IgniteChurch210/videos/232376207609558/', target, options);
    }

    function futn1() {
        navigator.app.exitApp();
    }

    function futn2() {
        $("#coBlack2").hide();
        $("#Page2").hide();
        $("#coBlack3").hide();
        $("#Page3").hide();
        $("#coBlack4").hide();
        $("#Page4").hide();
        $("#coBlack6").hide();
        $("#Page6").hide();
        $("#aboutIC").hide();
        $("#coBlack1").show();
        $("#Page1").show();
    }
    
    function futn3() {
        window.location = 'tel:2108388957';
    }

    function futn4() {
        window.location = 'geo:29.423056, -98.542877?q=706 Southwest 24th Street, San Antonio, TX';
    }

     function onPause() {
            // TODO: This application has been suspended. Save application state here.
     };

     function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
     };

 } )();
