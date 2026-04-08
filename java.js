const button=
document.getElementById("Toggle");
button.addEventListener("click",function(){
    document.body.classList.toggle("dark");
});
const LIKE=
document.getElementById("Like");
 if(localStorage.getItem("Liked")==="yes"){
    LIKE.classList.add("Liked");
    LIKE.textContent="LIKED";
 }
LIKE.addEventListener("click",function(){
    LIKE.classList.toggle("Liked");
   if(LIKE.classList.contains("Liked")){
    localStorage.setItem("Liked","yes");
    LIKE.textContent="LIKED";
   } else{
    localStorage.removeItem("Liked");
    LIKE.textContent="👍LIKE";

   }
});
