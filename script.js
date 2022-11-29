document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
  t.style.left = n.clientX + "px", 
t.style.top = n.clientY + "px", 
e.style.left = n.clientX + "px", 
e.style.top = n.clientY + "px", 
i.style.left = n.clientX + "px", 
i.style.top = n.clientY + "px"
});
var t = document.getElementById("curseur"),
  e = document.getElementById("curseur2");
function n(t) {
  e.classList.add("survol")
}
function s(t) {
  e.classList.remove("survol")
}
s();
for (var r = document.querySelectorAll(".lien-survol"), a = r.length - 1; a >= 0; a--) {
  o(r[a])
}
function o(t) {
  t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}

$('.curseur-section').on('mouseover', function(event) {				
$('body').addClass('bars');
});
$('.curseur-section').on('mouseout', function(event) {		
$('body').removeClass('bars');
});