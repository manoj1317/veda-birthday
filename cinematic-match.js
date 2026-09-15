(function(){
  const css = `
  /* Cinematic reference match: deep wine/pink, large heart, curved arrow, explosive heart burst. */
  #vedaWelcome{background:
    radial-gradient(circle at 84% 22%,rgba(255,44,145,.26),transparent 25%),
    radial-gradient(circle at 44% 76%,rgba(255,48,143,.12),transparent 34%),
    linear-gradient(135deg,#12020d 0%,#3b0a28 50%,#090207 100%) !important;
  }
  #vedaWelcome .vw-stars{opacity:.32;background-size:38px 38px}
  #vedaWelcome .vw-glow{right:0;top:0;width:52vw;height:52vw;background:rgba(255,44,145,.22);filter:blur(78px)}
  #vedaWelcome .vw-kicker{left:5.6vw;top:15vh;font-size:10px;letter-spacing:.34em}
  #vedaWelcome .vw-title{left:5.5vw;top:22vh;width:48vw;font-size:clamp(64px,8vw,116px);line-height:.84;z-index:8}
  #vedaWelcome .vw-title em{color:#ff8fbd}
  #vedaWelcome .vw-sub{left:5.7vw;top:53vh;font-size:clamp(17px,2vw,25px)}
  #vedaWelcome .vw-date{left:5.7vw;top:62vh;letter-spacing:.32em}
  #vedaWelcome .vw-wishes{left:5.7vw;top:69vh;max-width:50vw;gap:10px;z-index:9}
  #vedaWelcome .vw-wish{padding:8px 15px;border-color:rgba(255,180,216,.38);background:rgba(255,121,178,.045);font-size:10px;text-transform:none;letter-spacing:.02em}
  #vedaWelcome .vw-enter{left:5.7vw;top:79vh;padding:15px 40px;min-width:380px;border:2px solid rgba(255,191,222,.82);background:rgba(255,99,169,.07);box-shadow:0 0 22px rgba(255,73,160,.28),inset 0 0 25px rgba(255,91,166,.05);font-size:12px;z-index:30}
  #vedaWelcome .vw-enter.ready{animation:referenceButtonPulse 2s ease-in-out infinite}
  #vedaWelcome .vw-art{z-index:15}
  #vedaWelcome .vw-heart-target{transform-origin:0 0;filter:drop-shadow(0 0 15px #fff) drop-shadow(0 0 34px #ff4c9e) drop-shadow(0 0 75px rgba(255,54,150,.55));animation:referenceHeartFloat 2.8s ease-in-out infinite}
  #vedaWelcome .vw-heart-target.hit{animation:referenceHeartHit .72s cubic-bezier(.12,.8,.2,1) forwards !important}
  #vedaWelcome .vw-heart-target path:nth-child(2){fill:#fff !important}
  #vedaWelcome .vw-heart-target .vw-heart-glow{fill:#ff6ea9;opacity:.62;filter:blur(8px)}
  #vedaWelcome .vw-arrow-scene{opacity:1 !important}
  #vedaWelcome .vw-arrow-scene.fade{opacity:1 !important}
  #vedaWelcome .vw-arrow-trail{stroke:url(#arrowGradient);stroke-width:4;filter:url(#arrowGlow);opacity:.98}
  #vedaWelcome .vw-arrow-trail-soft{stroke:#ff3f9b;stroke-width:13;opacity:.22;filter:url(#arrowBlur)}
  #vedaWelcome .vw-arrow-body{stroke:#fff6fb;stroke-width:5;filter:url(#arrowGlow)}
  #vedaWelcome .vw-arrow-head{fill:#ff7ab5;stroke:#fff;stroke-width:2.2;filter:url(#arrowGlow)}
  #vedaWelcome .vw-arrow-feather{stroke:#ffc2dd;stroke-width:4}
  #vedaWelcome .vw-arrow-ribbon{stroke:#ff70ae;stroke-width:2.5}
  .ref-burst{opacity:0;pointer-events:none}
  .ref-burst.show{animation:refBurstIn .95s ease-out forwards}
  .ref-ray{stroke:#ff8fc2;stroke-linecap:round;opacity:.75;filter:url(#arrowGlow)}
  .ref-ray.white{stroke:#fff;opacity:.9}
  .ref-ring{fill:none;stroke:#ff8fc2;stroke-linecap:round;opacity:0;transform-origin:1450px 205px}
  .ref-ring.show{animation:refRing .95s ease-out forwards}
  .ref-heart{opacity:0;transform-origin:1450px 205px;filter:drop-shadow(0 0 12px #fff) drop-shadow(0 0 32px #ff4c9e)}
  .ref-heart.show{animation:refHeart .7s cubic-bezier(.12,.86,.18,1) forwards}
  .ref-mini-heart{position:absolute;z-index:24;color:#ff8fbe;text-shadow:0 0 14px rgba(255,78,165,.9);opacity:0;pointer-events:none}
  .ref-mini-heart.show{animation:refMini 1.9s cubic-bezier(.12,.7,.18,1) forwards}
  .ref-spark{position:absolute;z-index:25;width:5px;height:5px;border-radius:50%;background:#fff;box-shadow:0 0 12px #fff,0 0 24px #ff66ad;opacity:0;pointer-events:none}
  .ref-spark.show{animation:refSpark 1.55s ease-out forwards}
  .ref-script{position:absolute;right:5.4vw;bottom:9vh;z-index:20;color:#ff9ac6;font:italic 400 clamp(24px,2.5vw,38px)/1.08 'Cormorant Garamond',serif;text-align:center;transform:rotate(-6deg);text-shadow:0 0 16px rgba(255,87,164,.28);opacity:0;pointer-events:none}
  .ref-script.show{animation:refScript .9s 4.1s ease forwards}
  .ref-script small{display:block;font:400 12px 'DM Sans',sans-serif;letter-spacing:.2em;margin-top:9px;color:#ffb5d3}
  @keyframes referenceHeartFloat{0%,100%{transform:translate(0,0) rotate(-2deg)}50%{transform:translate(0,-8px) rotate(2deg)}}
  @keyframes referenceHeartHit{0%{transform:translate(0,0) scale(1)}18%{transform:translate(0,0) scale(1.12)}42%{transform:translate(0,0) scale(1.32)}68%{transform:translate(0,0) scale(1.06)}100%{transform:translate(0,0) scale(.03);opacity:0}}
  @keyframes refHeart{0%{opacity:0;transform:translate(1450px,205px) scale(.04)}25%{opacity:1;transform:translate(1450px,205px) scale(1.22)}55%{opacity:1;transform:translate(1450px,205px) scale(.92)}100%{opacity:1;transform:translate(1450px,205px) scale(1)}}
  @keyframes refBurstIn{0%{opacity:0;transform:scale(.08)}15%{opacity:1}45%{opacity:1;transform:scale(1.03)}100%{opacity:.75;transform:scale(1)}}
  @keyframes refRing{0%{opacity:.9;transform:scale(.2)}100%{opacity:0;transform:scale(3.2)}}
  @keyframes refMini{0%{opacity:0;transform:translate(0,0) scale(.2) rotate(0)}10%{opacity:1}100%{opacity:0;transform:translate(var(--x),var(--y)) scale(1.1) rotate(var(--r))}}
  @keyframes refSpark{0%{opacity:0;transform:translate(0,0) scale(.2)}12%{opacity:1}100%{opacity:0;transform:translate(var(--x),var(--y)) scale(1.5)}}
  @keyframes refScript{from{opacity:0;transform:rotate(-6deg) translateY(12px)}to{opacity:1;transform:rotate(-6deg) translateY(0)}}
  @keyframes referenceButtonPulse{0%,100%{box-shadow:0 0 18px rgba(255,80,164,.22),inset 0 0 20px rgba(255,91,166,.04)}50%{box-shadow:0 0 45px rgba(255,80,164,.42),inset 0 0 25px rgba(255,91,166,.08)}}
  @media(max-width:700px){
    #vedaWelcome .vw-kicker{top:9vh;left:7vw}
    #vedaWelcome .vw-title{top:16vh;left:7vw;width:82vw;font-size:clamp(52px,14vw,82px)}
    #vedaWelcome .vw-sub{top:39vh;left:7vw}
    #vedaWelcome .vw-date{top:47vh;left:7vw}
    #vedaWelcome .vw-wishes{top:61vh;left:7vw;max-width:86vw}
    #vedaWelcome .vw-enter{top:78vh;left:7vw;min-width:0;width:82vw;padding:14px 20px}
    .ref-script{right:7vw;bottom:3vh;font-size:22px}
  }
  `;
  const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);

  function decorate(wrap){
    if(!wrap || wrap.dataset.referenceMatch==='1') return;
    wrap.dataset.referenceMatch='1';
    const art=wrap.querySelector('.vw-art');
    const target=wrap.querySelector('#vwHeartTarget');
    if(!art||!target) return;
    const ns='http://www.w3.org/2000/svg';
    const defs=art.querySelector('defs');
    const burst=document.createElementNS(ns,'g');
    burst.classList.add('ref-burst');
    burst.innerHTML=`<circle class="ref-ring" cx="1450" cy="205" r="105"/><circle class="ref-ring" cx="1450" cy="205" r="145"/>
      <g class="ref-rays">${Array.from({length:34},(_,i)=>{const a=i*(360/34)*Math.PI/180;const r1=92+(i%3)*10;const r2=190+(i%5)*18;const x1=1450+Math.cos(a)*r1,y1=205+Math.sin(a)*r1,x2=1450+Math.cos(a)*r2,y2=205+Math.sin(a)*r2;return `<line class="ref-ray ${i%4===0?'white':''}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke-width="${i%4===0?2:3}"/>`;}).join('')}</g>`;
    art.appendChild(burst);
    const heart=document.createElementNS(ns,'g');
    heart.classList.add('ref-heart');
    heart.innerHTML='<path d="M0 115C-18 98-108 51-108-16C-108-72-45-91 0-39C45-91 108-72 108-16C108 51 18 98 0 115Z" fill="#fff"/><path d="M-48-28C-26-55 2-55 27-37" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" opacity=".9"/>';
    art.appendChild(heart);
    const script=document.createElement('div');script.className='ref-script';script.innerHTML='Let Happiness<br>Find You...<small>♥</small>';wrap.appendChild(script);
    function fire(){
      target.classList.add('hit');
      burst.classList.add('show');
      burst.querySelectorAll('.ref-ring').forEach((r,i)=>{r.style.animationDelay=(i*.08)+'s';r.classList.add('show')});
      heart.classList.add('show');
      for(let i=0;i<58;i++){
        const h=document.createElement('span');h.className='ref-mini-heart';h.textContent=i%7===0?'✦':'♥';
        h.style.left='calc(90.6% - 10px)';h.style.top='calc(22.8% + 6px)';
        const angle=Math.random()*Math.PI*2,dist=100+Math.random()*270;
        h.style.setProperty('--x',(Math.cos(angle)*dist)+'px');h.style.setProperty('--y',(Math.sin(angle)*dist*.78)+'px');h.style.setProperty('--r',((Math.random()-.5)*100)+'deg');h.style.fontSize=(10+Math.random()*28)+'px';h.style.animationDelay=(Math.random()*.35)+'s';h.classList.add('show');wrap.appendChild(h);setTimeout(()=>h.remove(),2400);
      }
      for(let i=0;i<45;i++){
        const p=document.createElement('i');p.className='ref-spark';p.style.left='calc(90.6% - 2px)';p.style.top='22.8%';const angle=Math.random()*Math.PI*2,dist=70+Math.random()*330;p.style.setProperty('--x',(Math.cos(angle)*dist)+'px');p.style.setProperty('--y',(Math.sin(angle)*dist*.72)+'px');p.style.animationDelay=(Math.random()*.3)+'s';p.classList.add('show');wrap.appendChild(p);setTimeout(()=>p.remove(),1900);
      }
      script.classList.add('show');
    }
    setTimeout(fire,3650);
  }
  const existing=document.getElementById('vedaWelcome');
  if(existing) decorate(existing);
  else new MutationObserver((_,obs)=>{const wrap=document.getElementById('vedaWelcome');if(wrap){decorate(wrap);obs.disconnect()}}).observe(document.body,{childList:true,subtree:true});
})();
