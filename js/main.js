
// MY OWN SEARCH CODE

let $field = $('#search-box');
let $imgs = $('a');


$field.keyup(function () {
    var $search = $field.val().toLowerCase();        //preparing case insensitive entry
    $imgs.parent().show();                           //upon empty input - all images are shown
    $imgs.attr('data-lightbox', 'gallery');          //returning lightbox image grouping
    $imgs.each(function () {                        //for each anchor
        let caption = $(this).attr("data-title");    //data-title = caption
        let result = caption.toLowerCase().indexOf($search);     //iterate the search value to the lowercase values of the caption
        if (result == -1) {                                     //if no results
            $imgs.filter(this).parent().hide();                  //hide the .image wrapper (and contents)
            $imgs.filter(this).attr('data-lightbox', '');        //remove the lightbox grouping
        }
    });
});
