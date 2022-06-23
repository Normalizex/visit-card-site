queueMicrotask(() => {
    new Termynal('#termynal');
});


$('.page__terminal').removeClass('hide');
const renderHome = () => {
    $('.page__terminal').addClass('animate_content');
    $('.page__description').fadeOut(100).delay(2800).fadeIn();

    setTimeout(() => {
        $('.page__terminal').addClass('hide');
    }, 1500);

    setTimeout(() => {
        $('.page__home').addClass('animate_content');
        $('.page__home').removeClass('hide');
    }, 200);
};

const renderTimeout = setTimeout(renderHome, 11 * 1000);
$('.skip').on('click', () => {
    clearTimeout(renderTimeout);
    renderHome();
});