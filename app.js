
var z = confirm("Do you like watching anime?");
if(z == true){
var age = prompt("whats your age?");

console.log(age);
if (age >= 18 && age <= 35) {
    alert('welcome to the site');
} else if (age < 18 || age > 35) {
    alert('sorry your not allowed');
} else {
    alert('please input a number');
}


}else{
    alert("Believe me, you will change your mind about anime, try again !");
}


var favAnime = prompt("I can suggest an anime for you to watch . What is your type like from these ,{ Action , History , Military , Psychological");

if(favAnime === 'Action' ){
  var animeAction = prompt('please only write dragon ball/one piece/death note/one punch man');
   while (animeAction !== 'dragon ball' && animeAction !== 'one piece' && animeAction !== 'death note' && animeAction !== 'one punch man') {
      favAnime = prompt('please only write dragon ball/one piece/death note/one punch man');
   }
   favAnime = animeAction ;
}
 else if(favAnime === 'History'){
    var animeHistory = prompt('please only write Baccano/Dororo/Gintama/Samurai Champloo');
    while (animeHistory !== 'Baccano' && animeHistory !== 'Dororo' && animeHistory !== 'Gintama' && animeHistory !== 'Samurai Champloo') {
        favAnime = prompt('please only write Baccano/Dororo/Gintama/Samurai Champloo');
        
    }

    favAnime = animeHistory ;
}
/*else if (favAnime === Military){
    while (favAnime !== 'dragon ball' && favAnime !== 'one piece' && favAnime !== 'death note' && favAnime !== 'one punch man') {
        favAnime = prompt('please only write dragon ball/one piece/death note/one punch man');
        
    }
}else if(favAnime === Psychological){
    while (favAnime !== 'dragon ball' && favAnime !== 'one piece' && favAnime !== 'death note' && favAnime !== 'one punch man') {
        favAnime = prompt('please only write dragon ball/one piece/death note/one punch man');
        
    }
}*/

var numberOfAnime = prompt('how many screen want to accsess?');

var series = '';
var result = '';

if (favAnime === 'dragon ball') {
    painting = '<img width= "350px" src="/images/Action/dragon.jpg"/> ';
} else if (favAnime == 'one piece') {
    painting = '<img width= "350px" src="/images/Action/onePiece.jpg"/> ';
}else if(favAnime == 'death note'){
    painting = '<img width="250px" src="/images/Action/death.jpg"/> ';
}else if(favAnime == 'one punch man'){
    painting = '<img width="250px" src="/images/Action/onePunch.jpg"/> ';
}else if (favAnime == 'Baccano') {
    painting = '<img width="250px" src="/images/History/Baccano.jpg"/>  ';
}else if(favAnime == 'Dororo'){
    painting = '<img width="250px" src="/images/History/Dororo.jpg"/> ';
}else if(favAnime == 'Gintama'){
    painting = '<img width="250px" src="/images/History/Gintama.jpg"/> ';
}else if(favAnime == 'Samurai Champloo'){
    painting = '<img width="250px" src="/images/History/Samurai Champloo.jpg"/> ';
}


console.log(painting);

for (var i = 0; i < numberOfAnime; i++) {
    result += painting;
}

console.log(result);

document.write(result);
















