//Album write a function called make_Album() that builds a object describig a music album the 
//function should take in artist name and an album title ,and it should return a object .
//containing these two peice of information .use the function to make three dictionaries
//representing different album .print each return value to show that objct are the storing 
//album information correctly.ad an optional parameter to make _album()that allows you to store
//the number of tracks on the album .if the calling line includes a value for the number of tracks
//and that value to the album 's object.make at least one new function called that includes
//the number of tracks on an album.//
function make_Album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_Album('Artist', 'album title1');
console.log(album1);
var album2 = make_Album('Artist', 'album title2');
console.log(album2);
var album3 = make_Album('Artist', 'album title3');
console.log(album3);
