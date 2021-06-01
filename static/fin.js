let all = document.querySelector('.allrounder');

let arr = ["Youtuber", "Freelancer", "Developer","Blogger", "Designer"];
let index=0,j=0,k=0,i=1;
setInterval(() =>{
    if(index<arr.length){
        if(j<=arr[index].length){
            all.innerHTML=arr[index].slice(k,j);
            j++;
        }
        else if (j>arr[index].length && i<arr[index].length){
            all.innerHTML=arr[index].slice(k,-i);
            i++;
            
        }
        else{
            index++;
            i=1;
            k=0;
            j=1;

        }
    }
    else{
        index=0;
    }
  

},200);


window.onscroll=function(){
    myFunction();
}
var navbar=document.getElementById('navbar');


var sticky=navbar.offsetTop;
function myFunction(){
    if(window.pageYOffset >=sticky){
        navbar.classList.add("sticky");
 
  
    }
    else{
        navbar.classList.remove("sticky");

    }
}
let button2=document.getElementById('btn2');
let button1=document.getElementById('btn1');
let sc=document.querySelector('.scroller');
button2.addEventListener('click',()=>{
    button2.style.backgroundColor="red";
    button2.style.boxShadow="none";
    button1.style.backgroundColor="black";
  

   
  

        sc.classList.add("scrollfor");

  

  
});
button1.addEventListener('click',()=>{
    button1.style.backgroundColor="red";
    button1.style.boxShadow="none";
    button2.style.backgroundColor="black";
  

 
   
    sc.classList.add("scrollbac");
});
// let icons=document.querySelector('.icon');
// console.log(icons);
// icons.addEventListener('mouseover',()=>{

//           icons.style.backgroundColor="red";
//            icons.style.boxShadow="10px 15px 10px #3c3737";
//            icons.style.transform="scale(1.10)";
        
    
// });
