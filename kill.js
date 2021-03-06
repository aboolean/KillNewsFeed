function blockAndDisplay() {
	// remove news feed
    var feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream]');
    var message = $('<h1>')
            .attr('id', 'distracted')
            .text("Don't get distracted by Facebook!")
            .css('font-size', '30px')
            .css('font-family', "'Helvetica Neue', Helvetica, Arial, 'lucida grande', tahoma, verdana, arial, sans-serif")
            .css('position', 'relative')
            .css('top', '75px');
        $('[data-location=maincolumn]').append(message);

    feed.children().remove();
    $('.ticker_stream').remove();
    $('.ego_column').remove();
    $('#pagelet_games_rhc').remove();
    $('#pagelet_trending_tags_and_topics').remove();
    $('#pagelet_canvas_nav_content').remove();

    // remove chat sidebar
    $('#pagelet_sidebar, .fbChatSidebar').hide();

    // clear right col card
    $('#pagelet_rhc_footer').siblings().hide();

    // remove select components of left sidebar
    $('#pinnedNav').siblings('.homeSideNav').hide();
}

$(document).ready(blockAndDisplay);