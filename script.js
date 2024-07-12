$(document).ready(function() {
    $('.filters button').click(function() {
        var filter = $(this).attr('data-filter');

        $('.filters button').removeClass('active-filter');
        $(this).addClass('active-filter');

        if (filter === 'all') {
            $('.gallery .image').show().addClass('show');
        } else {
            $('.gallery .image').hide().removeClass('show');
            $('.gallery .' + filter).show().addClass('show');
        }
    });

    $('.gallery img').click(function() {
        var src = $(this).attr('src');
        $('.lightbox').show();
        $('.lightbox-image').attr('src', src);
    });

    $('.lightbox .close').click(function() {
        $('.lightbox').hide();
    });
});
