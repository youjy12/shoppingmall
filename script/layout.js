let warp = document.querySelector('#wrap');
let t_btn = document.querySelector('#menu');
let x_btn = document.querySelector('.x_box');

t_btn.addEventListener('click',()=>{
  warp.classList.add('wrap_pos');
});
x_btn.addEventListener('click',()=>{
  warp.classList.remove('wrap_pos');
});

let s_gnb = document.querySelectorAll('.s_gnb > li > a');
let sub = document.querySelectorAll('.s_gnb > li > .sub');

for(let i=0;i<s_gnb.length;i++){
  s_gnb[i].addEventListener('click', (e)=>{
    e.preventDefault();

    for(let j=0;j<=sub.length;j++){
      sub[j].style.display='none';
      sub[i].style.display='block';

      // s_gnb[j].classList.remove('act');
      // s_gnb[i].classList.add('act');
    }
  });
}