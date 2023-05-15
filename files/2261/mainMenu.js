$(document).ready(function () {
    //$( ".accordion" ).accordion({ active: 1 });
    $('#menu li ul').css('display', 'none');
    $('#menu li ul.firstevent').css('display', 'block');
    var url = document.location.toString();
    var hash = url.substring(url.indexOf('#'));
    $(hash).find('#submenu').css('display', 'block');

    $('#menu li #spanarrow').addClass('spanarrowdown');

    $('#menu li').click(function () {
        $('#menu li #submenu').css('display', 'none');
        $('#menu li div.selected').removeClass('selected');

        $(this).find('div.accord-tab').addClass('selected');
        $(this).find('#submenu').css('display', 'block');

        $('#menu li #spanarrow.spanarrowup').addClass('spanarrowdown');
        $('#menu li #spanarrow.spanarrowup').removeClass('spanarrowup');
        $(this).find('#spanarrow.spanarrowdown').addClass('spanarrowup');
        $(this).find('#spanarrow.spanarrowdown').removeClass('spanarrowdown');
    });

    $('#submenu li').click(function () {
        $('#submenu li #submenuinner').css('display', 'none');
        $('#submenu li div.accord-tab-inner selected').removeClass('selected');

        $(this).find('div.accord-tab-inner').addClass('selected');
        $(this).find('#submenuinner').css('display', 'block');
    });

    $('a.expand').click(function () {
        $('#div_name2').show();
        return false;
    });

    $('#div_name2').mouseleave(function () {
        $('#div_name2').hide();
    });
    var lastSelected = $('#navigation_menu li[class="selected"]');
    $('#navigation_menu li a').click(function (event) {
        $("#navigation_menu li").removeClass('selected');
        $("#navigation_menu li > div").hide();

        $(this).parent().addClass('selected');
        $(this).parent().find("div:first").show();
        event.stopPropagation();

        $("html").click(function () {
            $("#navigation_menu li").removeClass('selected');
            $("#navigation_menu li > div").hide();
            $(lastSelected).addClass('selected');
        });
    });
});
