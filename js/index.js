$('#sb_carousel').on('slide.bs.carousel', function(event) {
    $("#sb_count").text((event.to + 1) + '/8')
    $('#sb_caption').text(event.relatedTarget.innerText)
});

$("#sb_carousel").on("swiperight", function() {
    console.log("Swiping right");
    $("#sb_carousel").carousel('prev');
});

$("#sb_carousel").on("swipeleft", function() {
    console.log("Swiping left");
    $("#sb_carousel").carousel('next');
});
