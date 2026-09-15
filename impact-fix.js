(function(){
  const css=`
  .vw-heart-target.hit{animation:impactHeart .78s cubic-bezier(.16,.86,.2,1) forwards!important}
  .vw-impact-heart{opacity:0;transform:translate(1450px,205px) scale(.05);transform-origin:0 0;filter:drop-shadow(0 0 18px #fff) drop-shadow(0 0 55px #ff3e9f)}
  .vw-impact-heart.show{animation:impactHeartIn .72s cubic-bezier(.16,.9,.2,1) forwards}
  .vw-impact-star{opacity:0;transform-origin:1450px 205px}
  .vw-impact-star.show{animation:impactStar .9s ease-out forwards}
  .vw-impact-mini{position:absolute;z-index:25;left:calc(90.6% - 12px);top:22.8%;color:#ffb9d8;font-weight:700;line-height:1;text-shadow:0 0 12px #ff4da5;pointer-events:none;opacity:0;animation:miniHeart 1.55s cubic-bezier(.12,.78,.2,1) forwards}
  @keyframes impactHeart{0%{transform:scale(1);opacity:1}20%{transform:scale(1.2);opacity:1}45%{transform:scale(1.34);opacity:1}72%{transform:scale(1.1);opacity:1}100%{transform:scale(1.02);opacity:.92}}
  @keyframes impactHeartIn{0%{opacity:0;transform:translate(1450px,205px) scale(.05)}28%{opacity:1;transform:translate(1450px,205px) scale(1.18)}55%{opacity:1;transform:translate(1450px,205px) scale(.94)}100%{opacity:1;transform:translate(1450px,205px) scale(1)}}
  @keyframes impactStar{0%{opacity:0;transform:scale(.1)}18%{opacity:1}100%{opacity:0;transform:scale(3)}}
  @keyframes miniHeart{0%{opacity:0;transform:translate(0,0) scale(.2) rotate(0)}12%{opacity:1}100%{opacity:0;transform:translate(var(--x),var(--y)) scale(1.05) rotate(var(--r))}}
  `;
  const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
  const watch=new MutationObserver(()=>{
    const wrap=document.getElementById('vedaWelcome');
    if(!wrap)return;
    watch.disconnect();
    const svg=wrap.querySelector('.vw-art');
    const target=wrap.querySelector('#vwHeartTarget');
    if(!svg||!target)return;
    const ns='http://www.w3.org/2000/svg';
    const burst=document.createElementNS(ns,'g');burst.classList.add('vw-impact-star');burst.innerHTML='<circle cx="1450" cy="205" r="118" fill="none" stroke="#ff6eae" stroke-width="7" opacity=".7"/><circle cx="1450" cy="205" r="150" fill="none" stroke="#fff" stroke-width="2" opacity=".8"/>';svg.appendChild(burst);
    const heart=document.createElementNS(ns,'path');heart.classList.add('vw-impact-heart');heart.setAttribute('d','M0 92C-15 78-104 39-104-15C-104-67-43-82 0-34C43-82 104-67 104-15C104 39 15 78 0 92Z');svg.appendChild(heart);
    const fire=()=>{
      target.classList.add('hit');burst.classList.add('show');heart.classList.add('show');
      for(let i=0;i<32;i++){
        const h=document.createElement('span');h.className='vw-impact-mini';h.textContent=i%5===0?'✦':'♥';
        h.style.setProperty('--x',((Math.random()-.5)*560)+'px');h.style.setProperty('--y',((Math.random()-.5)*430)+'px');h.style.setProperty('--r',((Math.random()-.5)*80)+'deg');h.style.fontSize=(14+Math.random()*30)+'px';h.style.animationDelay=(Math.random()*.2)+'s';wrap.appendChild(h);setTimeout(()=>h.remove(),1900);
      }
    };
    setTimeout(fire,3650);
  });
  watch.observe(document.body,{childList:true,subtree:true});
})();
