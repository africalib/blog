$(document).ready(function () {
    setTimeout(function () {
        $('.comment').each(function(){
            if (!$(this).find('.utterances').attr('style')) {
                $(this).find('.error').removeClass('d-none');
                $(this).find('.utterances').remove();
            }
        });
    }, 5000);
});