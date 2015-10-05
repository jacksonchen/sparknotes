$('div.clearfix.interior div.col-1-3').waitUntilExists(function() {
  $('div.clearfix.interior div.col-1-3').remove();
});

$('div.clearfix.interior > div.col-mid').waitUntilExists(function() {
  $('div.clearfix.interior > div.col-mid').toggleClass("col-mid col-2-3");
  $('div.col-2-3 div.textbooks').waitUntilExists(function() {
    console.log("dicks")
    $('div.col-2-3 div.textbooks').remove();
  });
  var tooltipArr = $('div.clearfix.interior div.col-2-3 div.white-background.content div.tooltip.dark-grey-background');
  for(var i = 0; i < tooltipArr.length; i++) {
    $(tooltipArr[i]).toggleClass("dark-grey-background light-grey-background").stop(true).hide();
  }
});

$(document).ready(function() {
  $('div.clearfix.center div.next-title').width($('div.col-2-3').width() - 2 * $('a.left.arrow-nav').width() - 24);
})

$(window).resize(function() {
  $('div.clearfix.center div.next-title').width($('div.col-2-3').width() - 2 * $('a.left.arrow-nav').width() - 24);
})
