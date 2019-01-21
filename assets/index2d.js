window.onload = function () {
    var audio = document.getElementById("audio");
    var musiImg = document.getElementById("musi");
    document.getElementById("musi").onclick = function () {
        if (audio.paused) {
            audio.play();
            musiBackground(musiImg, "url(../images/pasue.png)");
        }
        else {
            audio.pause();
            musiBackground(musiImg, "url(../images/music.png)");
        }
    };

    setInterval("judgeShowOrHide()", 3500);
};

window.onresize = function () {
    client("Dream");   
};

function client(ID) {
    var clid = document.getElementById(ID);
    if (document.compatMode === "CSS1Compat") {
        clid.style.width = document.documentElement.clientWidth + "px";
        clid.style.height = document.documentElement.clientHeight + "px";
    }
    else if (document.compatMode === "BackCompat")  {
        clid.style.width = document.body.clientWidth + "px";
        clid.style.height = document.body.clientHeight + "px";
    }
}

$('html').on('touchstart', function () {
    audio.play();
});

var FuiCall = document.getElementById("fui-call");
FuiCall.onclick = function () {
    FuiCall.style.display = "none";
    var Waifu1 = document.getElementById("waifu");
    setTimeout(function () {
        Waifu1.style.display = "block";
    }, 700); 
};

function judgeShowOrHide() {
    if ($("#waifu").is(':hidden')) {
        document.getElementById("fui-call").style.display = "block";
    } else return;
}

function show_date_time() {
    window.setTimeout("show_date_time()", 1e3);
    var BirthDay = new Date("2018/6/6 00:00:00"),  
        today = new Date,
        timeold = today.getTime() - BirthDay.getTime(),
        msPerDay = 864e5,
        e_daysold = timeold / msPerDay,
        daysold = Math.floor(e_daysold),
        e_hrsold = 24 * (e_daysold - daysold),
        hrsold = Math.floor(e_hrsold),
        e_minsold = 60 * (e_hrsold - hrsold),
        minsold = Math.floor(60 * (e_hrsold - hrsold)),
        seconds = Math.floor(60 * (e_minsold - minsold));
    htime.innerHTML = daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
}
show_date_time();

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
        normal_title = document.title;
        document.title = '等你 ~ ~ 快回来吧';
    } else document.title = normal_title;
});

function musiBackground(ID, Src) {
    ID.style.background = Src;
    ID.style.height = "20px";
    ID.style.width = "20px";
    ID.style.cursor = "pointer";
    ID.style.backgroundRepeat = "no-repeat";
    ID.style.backgroundPosition = "center center";
    ID.style.backgroundSize = "15px";
    ID.style.margin = "5px 0px";
}


