const form=document.getElementById('unlockForm');
const password=document.getElementById('password');
const error=document.getElementById('error');
const gate=document.getElementById('gate');
const site=document.getElementById('site');
const wishButton=document.getElementById('wishButton');
const wishMessage=document.getElementById('wishMessage');

function buildWelcome(){
  if(document.getElementById('vedaWelcome'))return;
  const style=document.createElement('style');
  style.textContent=`
#vedaWelcome{position:fixed;inset:0;z-index:9999;overflow:hidden;background:radial-gradient(circle at 80% 18%,rgba(255,83,166,.22),transparent 25%),radial-gradient(circle at 18% 78%,rgba(184,43,118,.22),transparent 34%),linear-gradient(135deg,#10030c 0%,#350b27 52%,#080207 100%);color:#fff7fb;opacity:0;animation:vwIn .7s ease forwards}
.vw-stars{position:absolute;inset:0;opacity:.22;background-image:radial-gradient(#fff 1px,transparent 1px);background-size:44px 44px;animation:vwStars 18s linear infinite}
.vw-glow{position:absolute;right:3%;top:4%;width:48vw;height:48vw;border-radius:50%;background:rgba(255,60,153,.16);filter:blur(85px);animation:vwGlow 5s ease-in-out infinite}
.vw-content{position:relative;width:100%;height:100%;min-height:100vh}
.vw-kicker{position:absolute;left:7vw;top:10vh;font:600 10px 'DM Sans',sans-serif;letter-spacing:.38em;text-transform:uppercase;color:#f3c6d9;opacity:0;animation:vwRise .8s .15s forwards}
.vw-title{position:absolute;left:5.5vw;top:18vh;width:58vw;margin:0;text-align:left;font:500 clamp(58px,8vw,112px)/.84 'Cormorant Garamond',serif;opacity:0;animation:vwTitle 1s .28s forwards}
.vw-title em{color:#ff9fc9;font-style:italic}
.vw-title .vw-love{display:inline-block;width:.72em;height:.72em;vertical-align:.02em;filter:drop-shadow(0 0 12px rgba(255,102,180,.75))}
.vw-sub{position:absolute;left:7vw;top:43vh;font:400 clamp(17px,2.1vw,24px)/1.4 'Cormorant Garamond',serif;color:#ead5df;opacity:0;animation:vwRise .8s .65s forwards}
.vw-date{position:absolute;left:7vw;top:51vh;font:600 10px 'DM Sans',sans-serif;letter-spacing:.3em;color:#d9aabd;opacity:0;animation:vwRise .8s .9s forwards}
.vw-wishes{position:absolute;left:7vw;top:62vh;display:flex;gap:9px;flex-wrap:wrap;max-width:58%;opacity:0;animation:wishesIn .8s 4.45s forwards}
.vw-wish{padding:8px 13px;border:1px solid rgba(255,188,218,.28);border-radius:999px;background:rgba(255,139,191,.07);color:#f7d3e2;font:500 9px 'DM Sans';letter-spacing:.1em;text-transform:uppercase}
.vw-enter{position:absolute;left:7vw;top:73vh;border:1px solid rgba(255,184,215,.7);border-radius:999px;padding:14px 29px;background:rgba(255,151,198,.13);color:#fff1f7;font:600 11px 'DM Sans';letter-spacing:.1em;cursor:pointer;opacity:0;pointer-events:none;transition:.3s;box-shadow:0 0 35px rgba(255,102,178,.16)}
.vw-enter.ready{opacity:1;pointer-events:auto;animation:buttonPulse 2s infinite}.vw-enter:hover{transform:translateY(-3px) scale(1.04);background:rgba(255,151,198,.24)}
.vw-art{position:absolute;inset:0;width:100%;height:100%;z-index:5;pointer-events:none;overflow:visible}
.vw-heart-target{transform-origin:1450px 205px;filter:drop-shadow(0 0 12px rgba(255,255,255,.95)) drop-shadow(0 0 34px rgba(255,75,160,.85));animation:targetFloat 2.8s ease-in-out infinite}
.vw-heart-target.hit{animation:heartBlast .58s cubic-bezier(.2,.8,.2,1) forwards}
.vw-heart-glow{opacity:.48;filter:blur(7px)}
.vw-heart-after{opacity:0;filter:drop-shadow(0 0 8px rgba(255,255,255,.95)) drop-shadow(0 0 24px rgba(255,74,160,.9));pointer-events:none}
.vw-heart-target.hit ~ .vw-heart-after{animation:heartAfterIn .8s .3s cubic-bezier(.2,.8,.2,1) forwards}
.vw-arrow-scene{opacity:1;transition:opacity .25s ease}.vw-arrow-scene.fade{opacity:0}
.vw-arrow-trail{fill:none;stroke:url(#arrowGradient);stroke-width:3;stroke-linecap:round;pathLength:1;stroke-dasharray:1;stroke-dashoffset:1;filter:url(#arrowGlow);animation:drawTrail 1.55s 2.05s cubic-bezier(.45,0,.18,1) forwards}
.vw-arrow-trail-soft{fill:none;stroke:#ff7eb4;stroke-width:10;stroke-linecap:round;opacity:.18;filter:url(#arrowBlur);pathLength:1;stroke-dasharray:1;stroke-dashoffset:1;animation:drawTrail 1.55s 2.05s cubic-bezier(.45,0,.18,1) forwards}
.vw-arrow-body{fill:none;stroke:#fff7fb;stroke-width:4;stroke-linecap:round;filter:url(#arrowGlow)}
.vw-arrow-head{fill:#fff;stroke:#ffb7d4;stroke-width:2;filter:url(#arrowGlow)}
.vw-arrow-feather{fill:none;stroke:#ffb0d0;stroke-width:3;stroke-linecap:round}
.vw-arrow-ribbon{fill:none;stroke:#ff73ad;stroke-width:2;stroke-linecap:round;opacity:.7}
.vw-impact{opacity:0;transform-origin:1450px 205px}
.vw-heart-target.hit + .vw-impact{animation:impactFlash .7s ease-out forwards}
.vw-ring{fill:none;stroke:#fff;stroke-width:3;opacity:0;transform-origin:1450px 205px}
.vw-heart-target.hit ~ .vw-impact .vw-ring{animation:ringBurst .9s ease-out forwards}
.vw-particle{position:absolute;z-index:20;color:#ffb4d3;pointer-events:none;opacity:0;animation:particleBurst 1.7s ease-out forwards}
.vw-heart{position:absolute;color:#ffb6d5;pointer-events:none;text-shadow:0 0 18px rgba(255,120,185,.8);animation:vwFloat linear forwards}
.vw-out{animation:vwOut .8s ease forwards!important}
@keyframes vwIn{to{opacity:1}}@keyframes vwStars{to{background-position:44px 44px}}@keyframes vwGlow{0%,100%{opacity:.5;transform:scale(.92)}50%{opacity:1;transform:scale(1.08)}}@keyframes vwRise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}@keyframes vwTitle{from{opacity:0;transform:translateY(24px);filter:blur(6px)}to{opacity:1;transform:none;filter:none}}@keyframes targetFloat{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-9px) rotate(2deg)}}@keyframes heartBlast{0%{transform:scale(1);opacity:1}25%{transform:scale(1.14);opacity:1}55%{transform:scale(1.28);opacity:.95}100%{transform:scale(.02);opacity:0}}@keyframes heartAfterIn{0%{opacity:0;transform:translate(1450px,205px) scale(.08)}35%{opacity:1;transform:translate(1450px,205px) scale(.78)}65%{opacity:1;transform:translate(1450px,205px) scale(.62)}100%{opacity:1;transform:translate(1450px,205px) scale(.66)}}@keyframes drawTrail{0%{stroke-dashoffset:1;opacity:0}10%{opacity:1}100%{stroke-dashoffset:0;opacity:1}}@keyframes impactFlash{0%{opacity:0}15%{opacity:1}100%{opacity:0}}@keyframes ringBurst{0%{opacity:.9;transform:scale(.15)}100%{opacity:0;transform:scale(2.7)}}@keyframes particleBurst{0%{opacity:0;transform:translate(0,0) scale(.2)}12%{opacity:1}100%{opacity:0;transform:translate(var(--x),var(--y)) scale(1.25) rotate(240deg)}}@keyframes wishesIn{from{opacity:0;transform:translateY(15px)}to{opacity:1;transform:none}}@keyframes buttonPulse{0%,100%{box-shadow:0 0 30px rgba(255,102,178,.12)}50%{box-shadow:0 0 60px rgba(255,102,178,.3)}}@keyframes vwFloat{from{transform:translateY(20vh) scale(.6);opacity:0}15%{opacity:.8}to{transform:translateY(-90vh) scale(1.25) rotate(25deg);opacity:0}}@keyframes vwOut{to{opacity:0;transform:scale(1.04);filter:blur(8px);visibility:hidden}}
@media(max-width:700px){.vw-kicker,.vw-sub,.vw-date,.vw-title,.vw-wishes,.vw-enter{left:7vw}.vw-kicker{top:8vh}.vw-title{top:14vh;width:82vw;font-size:clamp(50px,13vw,78px)}.vw-sub{top:35vh}.vw-date{top:42vh}.vw-wishes{top:65vh;max-width:88%}.vw-enter{top:80vh}}
@media(prefers-reduced-motion:reduce){#vedaWelcome *{animation-duration:.01ms!important;animation-iteration-count:1!important}}
`;
  document.head.appendChild(style);

  const wrap=document.createElement('section');
  wrap.id='vedaWelcome';
  wrap.setAttribute('aria-label','Veda birthday cinematic welcome');
  wrap.innerHTML=`
  <div class="vw-stars"></div><div class="vw-glow"></div><div class="vw-content">
    <div class="vw-kicker">A LITTLE WORLD MADE FOR YOU</div>
    <h1 class="vw-title">Welcome,<br><em>my Veda. <svg class="vw-love" viewBox="0 0 100 90" aria-hidden="true"><path d="M50 84C43 77 8 57 8 30C8 9 34 2 50 20C66 2 92 9 92 30C92 57 57 77 50 84Z" fill="#fff"/></svg></em></h1>
    <div class="vw-sub">Some moments are too beautiful to rush.</div><div class="vw-date">08 · OCTOBER · 2001</div>
    <svg class="vw-art" viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true"><defs>
      <linearGradient id="arrowGradient" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff79b4"/><stop offset=".5" stop-color="#ffd4e7"/><stop offset="1" stop-color="#fff"/></linearGradient>
      <filter id="arrowGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="arrowBlur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="7"/></filter>
      <path id="arrowPath" d="M90 720 C280 790 470 690 650 575 C880 430 1120 330 1450 205"/>
    </defs>
    <g class="vw-arrow-scene"><use href="#arrowPath" class="vw-arrow-trail-soft"/><use href="#arrowPath" class="vw-arrow-trail"/>
      <path class="vw-arrow-head" d="M-20 -10 L25 0 L-20 10 L-8 0 Z"><animateMotion dur="1.55s" begin="2.05s" fill="freeze" rotate="auto"><mpath href="#arrowPath"/></animateMotion></path>
      <path class="vw-arrow-body" d="M-95 0 L0 0"><animateMotion dur="1.55s" begin="2.05s" fill="freeze" rotate="auto"><mpath href="#arrowPath"/></animateMotion></path>
      <path class="vw-arrow-feather" d="M-70 -1 Q-90 -22 -112 -25 M-62 1 Q-82 23 -105 27"><animateMotion dur="1.55s" begin="2.05s" fill="freeze" rotate="auto"><mpath href="#arrowPath"/></animateMotion></path>
      <path class="vw-arrow-ribbon" d="M-88 0 Q-118 -16 -142 -6 M-88 0 Q-118 16 -142 6"><animateMotion dur="1.55s" begin="2.05s" fill="freeze" rotate="auto"><mpath href="#arrowPath"/></animateMotion></path>
    </g>
    <g class="vw-heart-target" id="vwHeartTarget" transform="translate(1450 205)"><path class="vw-heart-glow" d="M0 105C-16 89-94 47-94-10C-94-55-39-72 0-31C39-72 94-55 94-10C94 47 16 89 0 105Z" fill="#ff8ab8"/><path d="M0 105C-16 89-94 47-94-10C-94-55-39-72 0-31C39-72 94-55 94-10C94 47 16 89 0 105Z" fill="#fff"/><path d="M-42-25C-18-51 4-50 25-35" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity=".8"/></g>
    <g class="vw-heart-after" aria-hidden="true"><path d="M0 68C-11 57-61 32-61-7C-61-37-25-49 0-22C25-49 61-37 61-7C61 32 11 57 0 68Z" fill="#fff"/><path d="M-27-16C-13-31 2-31 14-22" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".85"/></g>
    <g class="vw-impact"><circle class="vw-ring" cx="1450" cy="205" r="58"/><circle class="vw-ring" cx="1450" cy="205" r="82"/></g>
    </svg>
    <div class="vw-wishes"><span class="vw-wish">more love</span><span class="vw-wish">more happiness</span><span class="vw-wish">more dreams</span><span class="vw-wish">more adventures</span><span class="vw-wish">beautiful moments</span></div>
    <button class="vw-enter" type="button">Enter your little universe ♥</button>
  </div>`;
  document.body.appendChild(wrap);

  const heart=wrap.querySelector('#vwHeartTarget');
  const arrowScene=wrap.querySelector('.vw-arrow-scene');
  const enter=wrap.querySelector('.vw-enter');
  setTimeout(()=>{
    heart.classList.add('hit');arrowScene.classList.add('fade');
    for(let i=0;i<70;i++){
      const p=document.createElement('span');p.className='vw-particle';p.textContent=i%7===0?'✦':(i%3===0?'♥':'•');
      p.style.left='calc(90.6% - 10px)';p.style.top='22.8%';p.style.setProperty('--x',((Math.random()-.5)*620)+'px');p.style.setProperty('--y',((Math.random()-.5)*500)+'px');p.style.animationDelay=(Math.random()*.18)+'s';p.style.fontSize=(9+Math.random()*27)+'px';wrap.appendChild(p);setTimeout(()=>p.remove(),2100);
    }
    wrap.querySelector('.vw-sub').textContent='May every wish find its way to you. ♥';
  },3650);
  setTimeout(()=>enter.classList.add('ready'),4650);
  enter.addEventListener('click',()=>enterWelcome(wrap));
  const makeHeart=()=>{if(!document.body.contains(wrap))return;const h=document.createElement('span');h.className='vw-heart';h.textContent=Math.random()>.2?'♥':'✦';h.style.left=Math.random()*100+'vw';h.style.bottom='-30px';h.style.fontSize=12+Math.random()*25+'px';h.style.animationDuration=5+Math.random()*5+'s';wrap.appendChild(h);setTimeout(()=>h.remove(),10000)};
  for(let i=0;i<10;i++)setTimeout(makeHeart,i*190);wrap._heartTimer=setInterval(makeHeart,700);
}
function enterWelcome(wrap){if(wrap._heartTimer)clearInterval(wrap._heartTimer);wrap.classList.add('vw-out');setTimeout(()=>{wrap.remove();site.classList.remove('hidden');window.scrollTo({top:0,behavior:'instant'});startHearts();initReveals()},800)}
form.addEventListener('submit',e=>{e.preventDefault();if(password.value===VEDA_PASSWORD){gate.classList.add('hidden');buildWelcome()}else{error.textContent='Not quite… try again, birthday girl ♡';password.select()}});
if(wishButton){wishButton.addEventListener('click',()=>{wishMessage.textContent='Then let the universe hear it: may the wish find its way to you, beautifully and at exactly the right time. ♡';wishButton.textContent='Wish sent into the universe ✦';wishButton.disabled=true;burst()})}
function startHearts(){setInterval(()=>{const heart=document.createElement('div');heart.className='heart';heart.textContent=Math.random()>.5?'♡':'✦';heart.style.left=Math.random()*100+'vw';heart.style.bottom='-20px';heart.style.fontSize=12+Math.random()*18+'px';heart.style.animationDuration=4+Math.random()*4+'s';document.getElementById('hearts').appendChild(heart);setTimeout(()=>heart.remove(),9000)},650)}
function burst(){for(let i=0;i<28;i++){setTimeout(()=>{const h=document.createElement('div');h.className='heart';h.textContent=['♡','✦','♥'][Math.floor(Math.random()*3)];h.style.left=(42+Math.random()*16)+'vw';h.style.bottom=(30+Math.random()*15)+'vh';h.style.fontSize=14+Math.random()*22+'px';h.style.animationDuration=2.5+Math.random()*2+'s';document.getElementById('hearts').appendChild(h);setTimeout(()=>h.remove(),6000)},i*45)}}
function initReveals(){const items=document.querySelectorAll('.section,.cards article,.story-card,.photo-placeholder,.wish-orb,.final');items.forEach(el=>el.classList.add('reveal'));const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.12});items.forEach(el=>observer.observe(el))}