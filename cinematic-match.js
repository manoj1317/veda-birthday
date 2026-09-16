(function(){
  /* Clean cinematic loop: no rays, no rings, no sparkle burst. Only arrow -> heart -> tiny hearts. */
  const css=`
  #vedaWelcome .vw-heart-target{
    transform:translate(1450px,205px) !important;
    transform-origin:0 0 !important;
    animation:none !important;
    filter:drop-shadow(0 0 8px rgba(255,182,213,.75)) drop-shadow(0 0 18px rgba(255,74,160,.35)) !important;
  }
  #vedaWelcome .vw-heart-target .heart-scale{
    transform-box:fill-box !important;
    transform-origin:center !important;
    transform:scale(.60) !important;
    animation:cleanHeartFloat 2.8s ease-in-out infinite !important;
  }
  #vedaWelcome .vw-heart-target.hit .heart-scale{
    animation:cleanHeartHit .55s cubic-bezier(.15,.8,.2,1) forwards !important;
  }
  #vedaWelcome .vw-heart-target path:nth-child(2){fill:#ffd2e5 !important;opacity:.95 !important}
  #vedaWelcome .vw-heart-target .vw-heart-glow{fill:#ff82b8 !important;opacity:.28 !important;filter:blur(6px)}

  /* Remove every large impact graphic and the old trail. */
  #vedaWelcome .vw-impact,
  #vedaWelcome .ref-burst,
  #vedaWelcome .ref-heart,
  #vedaWelcome .ref-spark,
  #vedaWelcome .vw-particle{display:none !important;opacity:0 !important}
  #vedaWelcome .vw-arrow-trail,
  #vedaWelcome .vw-arrow-trail-soft,
  #vedaWelcome .vw-arrow-body{display:none !important;opacity:0 !important;visibility:hidden !important}

  #vedaWelcome .vw-arrow-scene{
    opacity:0 !important;
    transition:transform .55s ease,opacity .35s ease !important;
  }
  #vedaWelcome .vw-arrow-scene.cycle-show{opacity:1 !important}
  #vedaWelcome .vw-arrow-scene.cycle-exit{opacity:0 !important;transform:translate(90px,-55px) scale(.82) !important}
  #vedaWelcome .vw-arrow-head{fill:#ff8fbe !important;stroke:#fff5fa !important;stroke-width:2.2 !important;filter:url(#arrowGlow)}
  #vedaWelcome .vw-arrow-feather{stroke:#ffd0e2 !important;stroke-width:3.5 !important}
  #vedaWelcome .vw-arrow-ribbon{stroke:#ff79b3 !important;stroke-width:2.2 !important}

  .clean-mini-heart{
    position:absolute;z-index:40;pointer-events:none;color:#ff9bc6;
    text-shadow:0 0 8px rgba(255,85,165,.55);opacity:0;font-family:Arial,sans-serif;font-weight:400;
  }
  .clean-mini-heart.go{animation:cleanMini 1.15s cubic-bezier(.12,.72,.2,1) forwards}

  @keyframes cleanHeartFloat{0%,100%{transform:scale(.60) rotate(-2deg)}50%{transform:scale(.60) rotate(2deg) translateY(-5px)}}
  @keyframes cleanHeartHit{0%{transform:scale(.60);opacity:1}35%{transform:scale(.68);opacity:1}70%{transform:scale(.60);opacity:.85}100%{transform:scale(.18) translate(42px,-24px);opacity:0}}
  @keyframes cleanMini{0%{opacity:0;transform:translate(0,0) scale(.15)}12%{opacity:1}100%{opacity:0;transform:translate(var(--x),var(--y)) scale(.62) rotate(var(--r))}}
  `;
  const style=document.createElement('style');style.id='cleanCinematicStyle';style.textContent=css;document.head.appendChild(style);

  function setup(wrap){
    if(!wrap || wrap.dataset.cleanLoop==='1') return;
    wrap.dataset.cleanLoop='1';
    const art=wrap.querySelector('.vw-art');
    const target=wrap.querySelector('#vwHeartTarget');
    const arrow=wrap.querySelector('.vw-arrow-scene');
    if(!art||!target||!arrow) return;
    const ns='http://www.w3.org/2000/svg';

    /* Keep the heart at its original upper-right coordinate; scale only its artwork. */
    let scale=target.querySelector(':scope > .heart-scale');
    if(!scale){
      scale=document.createElementNS(ns,'g');
      scale.classList.add('heart-scale');
      while(target.firstChild) scale.appendChild(target.firstChild);
      target.appendChild(scale);
    }

    /* Disable the old timed SVG motion so this controller owns the arrow. */
    const motions=Array.from(arrow.querySelectorAll('animateMotion'));
    motions.forEach(m=>{m.setAttribute('begin','indefinite');m.setAttribute('fill','freeze')});

    function smallHearts(){
      for(let i=0;i<18;i++){
        const h=document.createElement('span');
        h.className='clean-mini-heart';h.textContent='♥';
        h.style.left='calc(90.6% - 5px)';h.style.top='calc(22.8% + 3px)';
        const a=Math.random()*Math.PI*2,d=35+Math.random()*135;
        h.style.setProperty('--x',(Math.cos(a)*d)+'px');
        h.style.setProperty('--y',(Math.sin(a)*d*.78)+'px');
        h.style.setProperty('--r',((Math.random()-.5)*70)+'deg');
        h.style.fontSize=(7+Math.random()*11)+'px';
        h.style.animationDelay=(Math.random()*.16)+'s';
        wrap.appendChild(h);h.classList.add('go');
        setTimeout(()=>h.remove(),1450);
      }
    }

    function startArrow(){
      arrow.classList.remove('cycle-exit');
      arrow.classList.add('cycle-show');
      /* Restart all three moving arrow pieces from the start of the invisible path. */
      motions.forEach(m=>{try{m.beginElement()}catch(e){}});
    }

    function cycle(){
      target.classList.remove('hit');
      void target.offsetWidth;
      startArrow();
      /* Let the arrow travel for the original 1.55s. */
      setTimeout(()=>{
        target.classList.add('hit');
        setTimeout(()=>{
          smallHearts();
          arrow.classList.remove('cycle-show');
          arrow.classList.add('cycle-exit');
        },180);
        /* Reset and repeat the same gesture. */
        setTimeout(cycle,1550);
      },1550);
    }

    /* Start after the welcome composition has settled. */
    setTimeout(cycle,900);
  }

  const existing=document.getElementById('vedaWelcome');
  if(existing) setup(existing);
  else new MutationObserver((_,obs)=>{
    const wrap=document.getElementById('vedaWelcome');
    if(wrap){obs.disconnect();setup(wrap)}
  }).observe(document.body,{childList:true,subtree:true});
})();
