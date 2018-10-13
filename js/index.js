// 购物车下拉
$('.car').hover(function () {
    $('.car-content').stop().slideDown(300);
}, function () {
    $('.car-content').stop().slideUp(300);
})

// nav导航下拉菜单
$(function () {
    var $tabli = $('.main-nav>.tab>li:lt(8)');
    // console.log($tabli);
    var $contentul = $('.nav-content ul');
    // console.log($contentul)
    $tabli.hover(function () {
        var index = $(this).index();
        $('.nav-content').stop(true).slideDown(300);
        $contentul.eq(index).show().siblings().hide();
    }, function () {
        $('.nav-content').stop(true).slideUp(300);

    });
    $('.nav-content').hover(function () {
        $(this).stop(true).show();
    }, function () {
        $(this).stop().slideUp(300);
    })
})

// 侧边栏
$(function () {
    var index;
    $('.side-nav .side-tab li').hover(function () {
        index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.side-nav .side-content').stop(true).show();
        $('.side-nav .side-content div').eq(index).show().siblings().hide();
    }, function () {
        $('.side-nav .side-content').hide();

    })
    $('.side-nav .side-content').hover(function () {;
        $(this).stop(true).show();


    }, function () {
        $(this).stop(true).hide();
    })

});
//  轮播脚本1

var mySwiper1 = new Swiper('#swiper1', {
    direction: 'horizontal',
    loop: true,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',

    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    autoplay: true,
    autoplay: {
        disableOnInteraction: false,
    },
    touchRatio: 0.5,

})
// 轮播脚本2-秒杀区块      
var mySwiper2 = new Swiper('#swiper2', {
    direction: 'horizontal',


    // 如果需要分页器


    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',

    },
    effect: 'slide',
    fadeEffect: {
        crossFade: true,
    },

    touchRatio: 0.5,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,

})

// 倒计时模块 
var setTimer = null;
var chazhi = 0;
//差值计算
//例子(模拟)
chazhi = 135 * 86400000;
//真实时间(注意月份需减掉1，否则时间会计算错误)
//chazhi = (new Date(year,month-1,day,hour,minute,second)) - (new Date()); //计算剩余的毫秒数
chazhi = (new Date(2018, 9 - 1, 20, 0, 0, 0)) - (new Date());


//执行函数部分
countFunc(chazhi);
setTimer = setInterval(function () {
    chazhi = chazhi - 1000;
    countFunc(chazhi);
}, 1000);

function countFunc(leftTime) {
    if (leftTime >= 0) {
        var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
        var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
        var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟 
        var seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数 
        days = checkTime(days);
        hours = checkTime(hours);
        minutes = checkTime(minutes);
        seconds = checkTime(seconds);
        $(".hh").html(hours);
        $(".mm").html(minutes);
        $(".ss").html(seconds);
    } else {
        clearInterval(setTimer);
        $(".hh").html("00");
        $(".mm").html("00");
        $(".ss").html("00");
    }
}

function checkTime(i) { //将0-9的数字前面加上0，例1变为01 
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
// tab选项卡家电
$(function () {
    var $tabs = $('.appliances .Tab li');
    var $contents = $('.appliances .Content ul');
    console.log($contents)
    $tabs.mouseenter(function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $contents.eq(index).addClass('active').siblings().removeClass('active');
    });
})
// tab选项卡智能
$(function () {
    var $tabs = $('.capacity .Tab li');
    var $contents = $('.capacity .Content ul');
    console.log($contents)
    $tabs.mouseenter(function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $contents.eq(index).addClass('active').siblings().removeClass('active');
    });
});
// tab选项卡搭配
$(function () {
    var $tabs = $('.match .Tab li');
    var $contents = $('.match .Content ul');
    console.log($contents)
    $tabs.mouseenter(function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $contents.eq(index).addClass('active').siblings().removeClass('active');
    });
})
// tab选项卡配件
$(function () {
    var $tabs = $('.parts .Tab li');
    var $contents = $('.parts .Content ul');
    console.log($contents)
    $tabs.mouseenter(function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $contents.eq(index).addClass('active').siblings().removeClass('active');
    });
})
// tab选项卡周边
$(function () {
    var $tabs = $('.ambitus .Tab li');
    var $contents = $('.ambitus .Content ul');
    console.log($contents)
    $tabs.mouseenter(function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $contents.eq(index).addClass('active').siblings().removeClass('active');
    });
})
// 轮播脚本3
var mySwiper3 = new Swiper('#swiper3', {
    direction: 'horizontal',


    // 如果需要分页器


    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar3',

    },
    effect: 'slide',
    fadeEffect: {
        crossFade: true,
    },

    touchRatio: 0.5,
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 20,

})
//   轮播脚本4
var mySwiper4 = new Swiper('#swiper4', {
    direction: 'horizontal',
    loop: true,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination4',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    loop: false,
    noSwiping: true,
})
//   轮播脚本5
var mySwiper5 = new Swiper('#swiper5', {
    direction: 'horizontal',
    loop: true,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination5',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    loop: false,
    noSwiping: true,
})
//   轮播脚本6
var mySwiper6 = new Swiper('#swiper6', {
    direction: 'horizontal',
    loop: true,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination6',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    loop: false,
    noSwiping: true,
})
//   轮播脚本7
var mySwiper6 = new Swiper('#swiper7', {
    direction: 'horizontal',
    loop: true,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination7',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    loop: false,
    noSwiping: true,
})