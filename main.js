var images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
];
var names = ["Family Book", "Prakash Rochlani", "Vivaan Rochlani", "Vyana Rochlani", "Aashna Rochlani"];

var i = 0;
function next(){
    if (i>4){
        i=0;
    }
    document.getElementById("family_member_image").src = images[i];
    document.getElementById("family_member_name").innerHTML = names[i];
    i++;
}
