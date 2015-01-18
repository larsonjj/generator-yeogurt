/*global $: true*/
/*global prettyPrint: true*/
$(function() {
  'use strict';
  prettyPrint();
  var $button = $( '.api-nav-toggle' );
  $button.on('click', function() {
    $(this).toggleClass( 'active' );
    $(' .navigation ').toggleClass('open');
  });
});
