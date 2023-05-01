var myhttp = new XMLHttpRequest;
var allPosts =[];
var navbarEl = document.getElementById("navbarEl");
var menu = document.getElementById("menu");


// navbar scroll
window.addEventListener('scroll',function(){
    if(window.scrollY<= 7 ){
        navbarEl.style.backgroundColor="transparent";
        navbarEl.style.paddingTop= "3rem";
    }
    else if(window.scrollY >7){
        navbarEl.style.backgroundColor="hsl(204deg 17.86% 10.98%)";
        navbarEl.style.paddingTop= "1.5rem";
    }
    
})




myhttp.open('GET', 'https://api.themoviedb.org/3/trending/movie/day?api_key=be65d7b3d46dfba9302541c949513d31');
myhttp.send();



myhttp.addEventListener('readystatechange',function(){
   if(myhttp.readyState == 4 && myhttp.status ==200){
        allPosts=JSON.parse(myhttp.response).results;
        display();
   }
})

var cartoona=``;

function display(){
   for(var i=0 ; i<4 ; i++)
   {
    cartoona+=`
    <div class="col-lg-3 col-md-6 col-sm-6 mb-5">
         <img class="w-100 hove-me" src="https://image.tmdb.org/t/p/w500${allPosts[i].poster_path}" />
            <div class="inner d-flex justify-content-between">
                <div class="itemInner">
                    <h3>${allPosts[i].title}</h3>
                    <p class="HD">HD</p>
                                
                </div>
                            
                <div class="itemInner">
                    <p class="text-end text-yellow">2023</p>
                        <span>
                        <i class="fa-regular fa-clock iconUP"></i><span class="smspan">${allPosts[i].vote_count} min</span>
                        <i class="fa-solid fa-star iconUP"></i><span class="smspan">${allPosts[i].vote_average}</span>
                        </span>
                </div>
        </div>
     </div>
    `
   }
   document.getElementById("koop1").innerHTML=cartoona;
  if(i==4 || i==12 || i==16){
    cartoona=``;
  }
  
   for(var i=4 ; i<12 ; i++)
   {
    cartoona+=
    `<div class="col-lg-3 col-md-6 col-sm-6 mb-5">
    <img class="w-100 hove-me" src="https://image.tmdb.org/t/p/w500${allPosts[i].poster_path}" />
       <div class="inner d-flex justify-content-between">
           <div class="itemInner">
               <h3>${allPosts[i].title}</h3>
               <p class="HD">HD</p>
                           
           </div>
                       
           <div class="itemInner">
               <p class="text-end text-yellow">2023</p>
                   <span>
                   <i class="fa-regular fa-clock iconUP"></i><span class="smspan">${allPosts[i].vote_count} min</span>
                   <i class="fa-solid fa-star iconUP"></i><span class="smspan">${allPosts[i].vote_average}</span>
                   </span>
           </div>
   </div>
</div>
    `
   }
   document.getElementById("koop2").innerHTML=cartoona;
   if(i==12){
    cartoona=``;
   }
   for(var i=12 ; i<16 ; i++)
   {
    cartoona+=`
    <div class="col-lg-3 col-md-6 col-sm-6 mb-5">
         <img class="w-100 hove-me" src="https://image.tmdb.org/t/p/w500${allPosts[i].poster_path}" />
            <div class="inner d-flex justify-content-between">
                <div class="itemInner">
                    <h3>${allPosts[i].title}</h3>
                    <p class="HD">HD</p>
                                
                </div>
                            
                <div class="itemInner">
                    <p class="text-end text-yellow">2023</p>
                        <span>
                        <i class="fa-regular fa-clock iconUP"></i><span class="smspan">${allPosts[i].vote_count} min</span>
                        <i class="fa-solid fa-star iconUP"></i><span class="smspan">${allPosts[i].vote_average}</span>
                        </span>
                </div>
        </div>
     </div>
    `
   }
   document.getElementById("koop3").innerHTML=cartoona;
  
   if(i==16){
    cartoona=``;
   }
   for(var i=16 ; i<20 ; i++)
   {
    cartoona+=`
    <div class="col-lg-3 col-md-6 col-sm-6 mb-5">
         <img class="w-100 hove-me" src="https://image.tmdb.org/t/p/w500${allPosts[i].poster_path}" />
            <div class="inner d-flex justify-content-between">
                <div class="itemInner">
                    <h3>${allPosts[i].title}</h3>
                    <p class="HD">HD</p>
                                
                </div>
                            
                <div class="itemInner">
                    <p class="text-end text-yellow">2023</p>
                        <span>
                        <i class="fa-regular fa-clock iconUP"></i><span class="smspan">${allPosts[i].vote_count} min</span>
                        <i class="fa-solid fa-star iconUP"></i><span class="smspan">${allPosts[i].vote_average}</span>
                        </span>
                </div>
        </div>
     </div>
    `
   }
//    document.getElementById("koop4").innerHTML=cartoona;
   console.log(document.getElementById("koop4"))
  
}
