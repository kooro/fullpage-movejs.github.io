$(function() {

    $('.con').fullpage({
        verticalCentered: false,
        anchors: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', ],
        navigation: true,
        navigationTooltips: ['首页', '视觉', '交互', '皮肤', '功能', '代办邮件', '联系人邮件', '科技', '连接易信'],
        afterLoad: function(anchorLink, index) {
            switch (index) {
                case 1:
                    move('.s1-logo').set('margin-top', '20px').duration('1s').end();
                    move('.s1-slogan').scale('1').end(function() {
                        move('.s1-title').set('opacity', 1).end();
                    });
                    move('.bg-11').set('bottom', 0).end();
                    move('.bg-12').set('bottom', '100px').duration('1s').end();
                    move('.bg-13').set('bottom', 0).end();
                    break;
                case 2:
                    move('.s2 .center').scaleX('1').set('opacity', '1').duration('1s').end(function() {
                        move('.s2 p').set('opacity', '1').end();
                    });
                    move('.bg-21').set('left', '50%').end();
                    move('.bg-22').set('right', '50%').end();
                    move('.bg-23').set('bottom', '200px').end();
                    break;
                case 3:
                    move('.s3 .center').scaleX('1').set('opacity', '1').duration('1s').end();
                    move('.s3 p').set('left', '50%').end();
                    move('.bg-31').set('opacity', '1').end();
                    move('.bg-32').set('opacity', '1').end();
                    move('.bg-33').set('right', '50%').end();
                    break;
                case 4:
                    move('.s4 .center').scaleX('1').set('opacity', '1').duration('1s').end(function() {
                        move('.s4 .center p').set('opacity', '1').end();
                    });
                    move('.bg-41').set('bottom', '125px').duration('1s').end();
                    move('.bg-42').set('bottom', '175px').duration('1.5s').end();
                    move('.bg-43').set('bottom', '235px').duration('1s').end();
                    break;
                case 5:
                    move('.s5 .center').scaleX('1').set('opacity', '1').duration('1s').end();
                    move('.bg-51').set('margin-left', '-500px').set('opacity', '1').duration('1s').end();
                    move('.bg-52').set('margin-left', '-200px').set('opacity', '1').duration('1s').end();
                    move('.bg-53').set('margin-left', '100px').set('opacity', '1').duration('1s').end();
                    move('.bg-54').set('margin-left', '400px').set('opacity', '1').duration('1s').end();
                    break;
                case 6:
                    move('.s6 .center').scaleX('1').set('opacity', '1').duration('1s').end();
                    move('.s6 p').set('right', '50%').end();
                    move('.bg-61').set('top', '0').end();
                    move('.bg-62').set('left', '50%').end();
                    break;
                case 7:
                    move('.s7 .center').scaleX('1').set('opacity', '1').duration('1s').end();
                    move('.bg-71').set('bottom', '240px').duration('.8s').end();
                    move('.bg-72').set('bottom', '35%').end();
                    move('.s7 p').set('bottom', '35%').end();
                    break;
                case 8:
                    move('.s8 .center').scaleX('1').set('opacity', '1').duration('1s').end(function() {
                        move('.s8 p').set('opacity', '1').end();
                    });
                    move('.bg-82').set('bottom', '230px').set('margin-left', '-240px').set('opacity', 1).duration('1s').end();
                    move('.bg-83').set('bottom', '360px').set('margin-left', '-394px').set('opacity', 1).duration('1s').end();
                    move('.bg-84').set('bottom', '400px').set('margin-left', '-480px').set('opacity', 1).duration('1s').end();
                    break;
                case 9:
                    move('.s9 .center').scaleX('1').set('opacity', '1').duration('1s').end();
                    move('.bg-91').set('margin-left', '-550px').end();
                    move('.bg-92').set('opacity', '1').end();
                    move('.bg-93').set('margin-right', '-550px').end();
                    break;
                case 10:
                    move('.s10 h1').scaleX('1').set('opacity', '1').end(function() {
                        move('.s10 .center span').set('margin-top', '100px').set('opacity', '1').duration('1s').end();
                    });
                    move('.s10 p').scaleX('1').set('opacity', '1').end();
                    break;
                default:
                    break;
            }
        },
        onLeave: function(index, nexIndex, direction) {
            switch (index) {
                case 1:
                    move('.s1-logo').set('margin-top', 0).end();
                    move('.s1-slogan').scale('0').end();
                    move('.s1-title').set('opacity', 0).end();
                    move('.bg-11').set('bottom', '-400px').end();
                    move('.bg-12').set('bottom', '-400px').end();
                    move('.bg-13').set('bottom', '-400px').end();
                case 2:
                    move('.s2 .center').scaleX('.1').set('opacity', '0').end();
                    move('.s2 p').set('opacity', '0').end();
                    move('.bg-21').set('left', '-30%').end();
                    move('.bg-22').set('right', '-30%').end();
                    move('.bg-23').set('bottom', '-400px').end();
                    break;
                case 3:
                    move('.s3 .center').scaleX('.1').set('opacity', '0').end();
                    move('.s3 p').set('left', '-50%').end();
                    move('.bg-31').set('opacity', '0').end();
                    move('.bg-32').set('opacity', '0').end();
                    move('.bg-33').set('right', '-50%').end();
                    break;
                case 4:
                    move('.s4 .center').scaleX('.1').set('opacity', '0').duration('1s').end();
                    move('.bg-41').set('bottom', '-450px').end();
                    move('.bg-42').set('bottom', '-450px').end();
                    move('.bg-43').set('bottom', '-450px').end();
                    break;
                case 5:
                    move('.s5 .center').scaleX('.1').set('opacity', '0').duration('1s').end();
                    move('.bg-51').set('margin-left', '-1500px').set('opacity', '0').duration('1s').end();
                    move('.bg-52').set('margin-left', '-1200px').set('opacity', '0').duration('1s').end();
                    move('.bg-53').set('margin-left', '1100px').set('opacity', '0').duration('1s').end();
                    move('.bg-54').set('margin-left', '1400px').set('opacity', '0').duration('1s').end();
                    break;
                case 6:
                    move('.s6 .center').scaleX('.1').set('opacity', '0').duration('1s').end();
                    move('.s6 p').set('right', '0').end();
                    move('.bg-61').set('top', '-545px').end();
                    move('.bg-62').set('left', '-150px').end();
                    break;
                case 7:
                    move('.s7 .center').scaleX('.1').set('opacity', '0').duration('1s').end();
                    move('.bg-71').set('bottom', '-240px').duration('.8s').end();
                    move('.bg-72').set('bottom', '-240px').end();
                    move('.s7 p').set('bottom', '-240px').end();
                    break;
                case 8:
                    move('.s8 .center').scaleX('.1').set('opacity', '0').duration('1s').end(function() {
                        move('.s8 p').set('opacity', '0').end();
                    });
                    move('.bg-82').set('bottom', '130px').set('margin-left', '-140px').set('opacity', 0).end();
                    move('.bg-83').set('bottom', '260px').set('margin-left', '-295px').set('opacity', 0).end();
                    move('.bg-84').set('bottom', '300px').set('margin-left', '-380px').set('opacity', 0).end();
                    break;
                case 9:
                    move('.s9 .center').scaleX('.1').set('opacity', '0').duration('1s').end();
                    move('.bg-91').set('margin-left', '-1550px').end();
                    move('.bg-92').set('opacity', '0').end();
                    move('.bg-93').set('margin-right', '-1550px').end();
                    break;
                case 10:
                    move('.s10 h1').scaleX('.1').set('opacity', '0').end();
                    move('.s10 .center span').set('margin-top', '300px').set('opacity', '0').end();
                    move('.s10 p').scaleX('.1').set('opacity', '0').end();
                    break;
                default:
                    break;
            }
        }
    });
})
