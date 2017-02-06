$(function() {
    // Open/Close select
    $('.take .choose-wallet').on('click', function() {
        event.preventDefault();
        $('.take .choose-wallet-open').toggle();
    })
    $('.give .choose-wallet').on('click', function() {
        event.preventDefault();
        $('.give .choose-wallet-open').toggle();
    })
    $('.choose-send').on('click', function() {
        event.preventDefault();
        $('.choose-send-open').toggle();
    })
    $('.give .choose-value').on('click', function() {
        event.preventDefault();
        $('.give .choose-value-open').toggle();
    })
    $('.take .choose-value').on('click', function() {
        event.preventDefault();
        $('.take .choose-value-open').toggle();
    })
    // Choose logic 
    $('.give .choose-wallet-open li').on('click', function() {
        event.preventDefault();
        var value = $(this).text();
        var theClass = $(this).find('span').attr('id');
        var classInner = $('.give .choose-wallet span').attr('id', theClass);
        $('.give a .item-wallet').text(value);
        $('.give .choose-wallet-open').hide();
    })
    $('.take .choose-wallet-open li').on('click', function() {
        event.preventDefault();
        var value = $(this).text();
        var theClass = $(this).find('span').attr('id');
        var classInner = $('.take .choose-wallet span').attr('id', theClass);
        $('.take a .item-wallet').text(value);
        $('.take .choose-wallet-open').hide();
    })
    $('.take .choose-value-open li').on('click', function() {
        event.preventDefault();
        var value = $(this).text();
        $('.take .choose-value').text(value);
        $('.take .choose-value-open').hide();
    })
    $('.give .choose-value-open li').on('click', function() {
        event.preventDefault();
        var value = $(this).text();
        $('.give .choose-value').text(value);
        $('.give .choose-value-open').hide();
    })
    $('.choose-send-open li').on('click', function() {
        event.preventDefault();
        var value = $(this).text();
        $('.choose-send').text(value);
        $('.choose-send-open').hide();
    })
    // show responsive menu
     $('.respons-menu-button').on('click', function() {
        $('.respons-menu-wrap').toggle();
    })
      $('.top-button_support,.top-button_setting').on('click', function() {
        $('.respons-menu-wrap').hide();
    })
});
