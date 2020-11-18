$(document).ready(() => {

    $('.portfolio-item').on('click',function(e) {
        e.stopPropagation();
        createPopup($(this));
    });

});

createPopup = (item) => {
    if (!item) {
        return;
    }
    const container = $('<div>', {'class': 'popup-container'});
    const src = item.data('src');
    const img = $('<img>', {'class': 'popup-img', 'src': src});
    container.append(img);
    $('body').append(container);
    setTimeout(() => {
        container.addClass('ready');
    });

    img.on('click', () => {
        container.removeClass('ready');
        setTimeout(() => {
            container.remove();
        }, 250);
    });
}
