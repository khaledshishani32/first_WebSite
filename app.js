
var checkAsk = confirm("Do you like watching anime?"); // change z name !! 
if (checkAsk == true) {


    var age = prompt("whats your age?");
    function getAge(userAge) {

        console.log(age);
        if (userAge >= 18 && userAge <= 35) {
            alert('welcome to the site');
        } else if (userAge < 18 || userAge > 35) {
            alert('sorry your not allowed');
        } else {
            alert('please input a number');
        }



    }


} else {
    alert("Believe me, you will change your mind about anime, try again !");
}


var favAnime = prompt("I can suggest an anime for you to watch . What is your type like from these , { Action , History }");
var getFavAnime = function () {
    if (favAnime === 'Action') {
        var animeAction = prompt('please only write dragon ball/one piece/death note/one punch man');
        while (animeAction !== 'dragon ball' && animeAction !== 'one piece' && animeAction !== 'death note' && animeAction !== 'one punch man') {
            favAnime = prompt('please only write dragon ball/one piece/death note/one punch man');
        }
        favAnime = animeAction;
    }
    else if (favAnime === 'History') {
        var animeHistory = prompt('please only write Baccano/Dororo/Gintama/Samurai Champloo');
        while (animeHistory !== 'Baccano' && animeHistory !== 'Dororo' && animeHistory !== 'Gintama' && animeHistory !== 'Samurai Champloo') {
            favAnime = prompt('please only write Baccano/Dororo/Gintama/Samurai Champloo');

        }

        favAnime = animeHistory;
    }


    var numberOfAnime = prompt('how many screen want to accsess?');

    var series = '';
    var result = '';


    if (favAnime === 'dragon ball') {
        series = '<div><img  src="https://m.media-amazon.com/images/M/MV5BMjRlYTYyMDUtOGY5MC00MmFiLTljOTMtM2QzOWZjMWViN2FiL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY1200_CR123,0,630,1200_AL_.jpg"/> </div>  ';
    } else if (favAnime == 'one piece') {
        series = '<div><img  src="https://static1.srcdn.com/wordpress/wp-content/uploads/2017/06/One-Piece-Straw-Hat-Crew-Timeskip.jpg"/> </div> ';
    } else if (favAnime == 'death note') {
        series = ' <div> <img  src="https://cdn.ida2at.com/media/2020/03/Death-Note2.jpg"/> </div> ';
    } else if (favAnime == 'one punch man') {
        series = ' <div><img  src="https://sm.ign.com/ign_nordic/review/o/one-punch-/one-punch-man-season-2-review_vsz3.jpg"/></div> ';
    } else if (favAnime == 'Baccano') {
        series = '<div> <img  src="https://www.animeuploader.com/wp-content/uploads/2020/02/2c38079c67587399f91586e08aea54f0.jpg"/> </div> ';
    } else if (favAnime == 'Dororo') {
        series = '<div><img  src="https://lh3.googleusercontent.com/proxy/ARiN5F-YTxbFnDPolJj_N0oVgL9EgLw_6JyaCW3VsQg600u7S-_VXockogvQQB0hbszjguSFYqCtz5QRawlDa0_AU3LoDMd5M8Uirtpvk99Lr6cthEOqG2Bme4mvrt9YkIs6ooVpHSw"/> </div>';
    } else if (favAnime == 'Gintama') {
        series = '<div><img  src="https://an-master.net/wp-content/uploads/2020/12/gintama_the_final_anime_movie.jpg"/> </div>';
    } else if (favAnime == 'Samurai Champloo') {
        series = '<div><img  src="https://i.ytimg.com/vi/Eq6EYcpWB_c/maxresdefault.jpg"/> </div>';
    }


    console.log(series);

    for (var i = 0; i < numberOfAnime; i++) {
        result += series;
    }

    console.log(result);

    return result;


}


document.write(getFavAnime());










