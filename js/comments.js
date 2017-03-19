/**
 * Created by przekot on 19.03.2017.
 */

/* just simple counter for the first comment */

document.addEventListener('DOMContentLoaded', function () {

    var likes = document.querySelectorAll('.count');
    var count = 2;
    likes[0].innerHTML = count;

        likes[0].addEventListener('click', function (e) {
            e.preventDefault();
            count++;
            likes[0].innerHTML = count;
        });

});