/*jshint browser: true*/
/*global $: true*/
'use strict';
$(function() {

  var $itemItems = $('.item-list li');
  var $categoryItems = $('.category li');
  var $legendItems = $('.legend li');

  var $clearButtons = $('.filter-clear');

  var $sidebar = $('.sidebar');
  var $menuButton = $('.dash-button-wrapper');
  var isOpen = false;

  var changeActiveItem = function(items, theClass, $context) {
    items.removeClass(theClass);
    $context.addClass(theClass);
  };

  var clearFilters = function($context) {
    $context.addClass('hide');
    var $listItems = $context.parent().find('li');
    $listItems.removeClass('active');
  };

  var showClearButton = function($context) {
    $context.parent().parent().find('.filter-clear').removeClass('hide');
  };

  var filterItems = function() {
    var $categories = $('.sidebar .active').map(function(i, item) {return $(item).data('category');});
    $itemItems.addClass('hide');
    $itemItems.filter('.' + $categories.get().join('.')).removeClass('hide');
  };

  var catItemsClick = function() {
    changeActiveItem($categoryItems, 'active', $(this));
    filterItems();
  };

  var legendItemsClick = function() {
    changeActiveItem($legendItems, 'active', $(this));
    showClearButton($(this));
    filterItems();
  };

  var clearButtonsClick = function() {
    clearFilters($(this));
    filterItems();
  };

  var menuButtonClick = function() {
    if (!isOpen) {
      isOpen = true;
      $sidebar.addClass('open');
    }
    else {
      isOpen = false;
      $sidebar.removeClass('open');
    }
  };

  $categoryItems.on('click', catItemsClick);
  $legendItems.on('click', legendItemsClick);
  $clearButtons.on('click', clearButtonsClick);
  $menuButton.on('click', menuButtonClick);

});
