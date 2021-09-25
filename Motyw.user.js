// ==UserScript==
// @name         Motyw
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Motyw NI
// @author       Response
// @match        http*://*.margonem.pl/*
// @match        http*://*.margonem.com/*
// @exclude      http*://margonem.*/*
// @exclude      http*://www.margonem.*/*
// @exclude      http*://new.margonem.*/*
// @exclude      http*://forum.margonem.*/*
// @exclude      http*://commons.margonem.*/*
// @exclude      http*://dev-commons.margonem.*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

// 24.09.2021 - rozpoczęcie prac
// dodano: prawy panel, belka góra dół
// 25.09.2021
// dodano: chat, przestawienie i zmiana kolorów buttonów, zmiana grafiki dolnej belki funkcyjnej

(function() {
    'use strict';




    $('head').append('<style>.button.green, .widget-button.green { background: #090909 }</style>');
    $('head').append('<style>.button.green, .widget-button.green { box-shadow: inset 0 0 1px 1px #114d89 }</style>');
    $('head').append('<style>.button.green::before, .widget-button.green::before { box-shadow: inset 0 0 1px 1px rgb(9 9 9) }</style>');
    $('head').append('<style>.widget-button { border-radius: 1px }</style>');
    $('head').append('<style>.bottom-panel { background: url(https://i.imgur.com/eFQ6kEa.png) -6px -73px no-repeat; }</style>');
    $('head').append('<style>.layer.interface-layer .main-column.right-column { background-image: url(https://i.imgur.com/crZAVdq.jpg); }</style>');
    $('head').append('<style>.layer.interface-layer .main-column.right-column .border { background-image: url(https://i.imgur.com/crZAVdq.jpg); }</style>');
    $('head').append('<style>.layer.interface-layer .main-column.left-column .border { background: url(https://i.imgur.com/crZAVdq.jpg)-240px 0, right: -6px ; }</style>');
    $(".layer.interface-layer .main-column.left-column .border").css({"background": "url(https://i.imgur.com/crZAVdq.jpg)-240px 0", "right": "-6px"});
    $('head').append('<style>.layer.interface-layer .positioner.top .bg { background-image: url(https://i.imgur.com/esb1WEG.jpg); }</style>');
    $('head').append('<style>.layer.interface-layer .positioner.bottom .bg { background-image: url(https://i.imgur.com/esb1WEG.jpg); }</style>');
    $('head').append('<style>.game-window-positioner .character_wrapper .equipment-wrapper { background-image: url(https://i.imgur.com/ielw4IK.png); }</style>');
    $('head').append('<style>.game-window-positioner .inventory_wrapper .bags-navigation { background-image: url(https://i.imgur.com/ielw4IK.png); }</style>');
    $('head').append('<style>.game-window-positioner .inventory_wrapper .inventory-grid-bg { background-image: url(https://i.imgur.com/ielw4IK.png); }</style>');
    $('head').append('<style>.game-window-positioner .character_wrapper .stats-wrapper { background-image: url(https://i.imgur.com/j8lcs7z.png); }</style>');
    $(".main-buttons-container.top-left").css({"top": "8px"});
    $(".main-buttons-container.top-right").css({"top": "8px"});
    $(".main-buttons-container.bottom-left").css({"bottom": "4px"});
    $(".main-buttons-container.bottom-right").css({"bottom": "4px"});
    $('head').append('<style>.left-column .inner-wrapper .chat-tpl .chat-pannel { border-image: url(https://i.imgur.com/7nzO6of.png)0 111 0 104 round round, border-style: solid, border-width: 0 111px 0 104px, width: calc(100% - 220px), height: 100%, background: url(https://i.imgur.com/SBaViff.png)repeat }</style>');
    $(".left-column .inner-wrapper .chat-tpl .chat-pannel").css({"border-image": "url(https://i.imgur.com/7nzO6of.png)0 111 0 104 round round", "border-style": "solid", "border-width": "0 111px 0 104px", "width": "calc(100% - 220px)", "height": "100%", "background": "url(https://i.imgur.com/SBaViff.png)repeat"});
    $('head').append('<style>.left-column .inner-wrapper .chat-tpl .input-wrapper { border-image: url(https://i.imgur.com/Bc6UEqy.png)0 111 0 104 fill repeat round, border-style: solid, border-width: 0 111px 0 104px, width: calc(100% - 220px), height: 38px, position: absolute, bottom: 0, text-align: center }</style>');
    $(".left-column .inner-wrapper .chat-tpl .input-wrapper").css({"border-image": "url(https://i.imgur.com/Bc6UEqy.png)0 111 0 104 fill repeat round", "border-style": "solid", "border-width": "0 111px 0 104px", "width": "calc(100% - 220px)", "height": "38px", "border-style": "solid", "position": "absolute", "bottom": "0", "text-align": "center"});
    $('head').append('<style>.left-column .inner-wrapper .chat-tpl .messages-wrapper .under-tab-decor { border-image: url(https://i.imgur.com/zE6MK6s.png)14 111 0 104 fill repeat round, border-style: solid, border-width: 14px 111px 0 104px, width: calc(100% - 220px), height: 28px, position: absolute, left: -5px }</style>');
    $(".left-column .inner-wrapper .chat-tpl .messages-wrapper .under-tab-decor").css({"border-image": "url(https://i.imgur.com/zE6MK6s.png)14 111 0 104 fill repeat round", "border-style": "solid", "border-width": "14px 111px 0 104px", "width": "calc(100% - 220px)", "height": "28px", "border-style": "solid", "position": "absolute", "left": "-5px"});
    $('head').append('<style>.left-column .inner-wrapper .chat-tpl .tabs-pannel { border-image-source: url(https://i.imgur.com/PkezFzu.png), border-image-slice: 15 15 15 15 fill, border-image-width: 10px 10px 10px 10px, border-image-outset: 0, border-image-repeat: round round, width: calc(100% - 8px), position: absolute, top: -1px, left: 0px }</style>');
    $(".left-column .inner-wrapper .chat-tpl .tabs-pannel").css({"border-image-source": "url(https://i.imgur.com/PkezFzu.png)", "border-image-slice": "15 15 15 15 fill", "border-image- width": "10px 10px 10px 10px", "border-image-outset": "0", "border-image-repeat": "round round", "width": "calc(100% - 220px)", "position": "absolute", "top": "-1px", "left": "0"});
    $(".left-column### .inner-wrapper .chat-tpl .right-tabs-wrapper .tab, .left-column .inner-wrapper .chat-tpl .tabs-wrapper .tab").css({"background": "url(https://i.imgur.com/qFe765q.png)-36px -36px", "width": "35px", "height": "35px", "position": "relative", "float": "left", "bottom": "0", "cursor": "url(https://infinity.margonem.pl/img/gui/cursor/5.png)4 0" });
    $('head').append('<style>.layer.interface-layer .positioner.top .hud-container { background-image: url(https://i.imgur.com/ql78c2u.png); }</style>');
    $(".layer.interface-layer .positioner.top .hud-container").css({"background": "url(https://i.imgur.com/ql78c2u.png)"});





























})();