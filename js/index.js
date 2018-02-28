$('#sb_carousel').on('slide.bs.carousel', function(event) {
    $("#sb_count").text((event.to + 1) + '/9')
    $('#sb_caption').text(event.relatedTarget.innerText)
})
