(function(){
  const css = `
  /* Cinematic welcome: clean heart target + moving arrow + small heart burst. */
  #vedaWelcome{background:radial-gradient(circle at 84% 22%,rgba(255,44,145,.26),transparent 25%),radial-gradient(circle at 44% 76%,rgba(255,48,143,.12),transparent 34%),linear-gradient(135deg,#12020d 0%,#3b0a28 50%,#090207 100%) !important}
  #vedaWelcome .vw-stars{opacity:.32;background-size:38px 38px}
  #vedaWelcome .vw-glow{right:0;top:0;width:52vw;height:52vw;background:rgba(255,44,145,.22);filter:blur(78px)}
  #vedaWelcome .vw-kicker{left:5.6vw;top:15vh;font-size:10px;letter-spacing:.34em}
  #vedaWelcome .vw-title{left:5.5vw;top:22vh;width:48vw;font-size:clamp(64px,8vw,116px);line-height:.84;z-index:8}
  #vedaWelcome .vw-title em{color:#ff8fbd}
  #vedaWelcome .vw-title .vw-love path{fill:#ff8fbd !important}
  #vedaWelcome .vw-sub{left:5.7vw;top:53vh;font-size:clamp(17px,2vw,25px)}
  #vedaWelcome .vw-date{left:5.7vw;top:62vh;letter-spacing:.32em}
  #vedaWelcome .vw-wishes{left:5.7vw;top:69vh;max-width:50vw;gap:10px;z-index:9}
  #vedaWelcome .vw-wish{padding:8px 15px;border-color:rgba(255,180,216,.38);background:rgba(255,121,178,.045);font-size:10px;text-transform:none;letter-spacing:.02em}
  #vedaWelcome .vw-enter{left:5.7vw;top:79vh;padding:15px 40px;min-width:380px;border:2px solid rgba(255,191,222,.82);background:rgba(255,99,169,.07);box-shadow:0 0 22px rgba(255,73,160,.28),inset 0 0 25px rgba(255,91,166,.05);font-size:12px;z-index:30}
  #vedaWelcome .vw-enter.ready{animation:referenceButtonPulse 2s ease-in-out infinite}
  #vedaWelcome .vw-art{z-index:15}
  /* Keep the target at the SVG's upper-right position and scale only its artwork to 60%. */
  #vedaWelcome .vw-heart-target{transform:translate(1450px,205px) !important;transform-origin:0 0;filter:drop-shadow(0 0 9px rgba(255,255,255,.8)) drop-shadow(0 0 21px #ff4c9e) drop-shadow(0 0 42px rgba(255,54,150,.30));animation:none !important}
  #vedaWelcome .vw-heart-target .heart-scale{transform-box:fill-box;transform-origin:center;transform:scale(.60);animation:referenceHeartFloat60 2.8s ease-in-out infinite}
  #vedaWelcome .vw-heart-target.hit .heart-scale{animation:referenceHeartHit60 .72s cubic-bezier(.12,.8,.2,1) forwards !important}
  #vedaWelcome .vw-heart-target path:nth-child(2){fill:url(#referenceHeartGradient) !important}
  #vedaWelcome .vw-heart-target .vw-heart-glow{fill:#ff6ea9;opacity:.40;filter:blur(7px)}
  #vedaWelcome .vw-heart-after,#vedaWelcome .vw-impact{display:none !important}
  #vedaWelcome .vw-arrow-scene{opacity:1 !important}
  #vedaWelcome .vw-arrow-scene.fade{opacity:1 !important}
  /* Absolutely no trail/line: only the arrow travels on the invisible curved path. */
  #vedaWelcome .vw-arrow-trail,#vedaWelcome .vw-arrow-trail-soft{stroke-dashoffset:1 !important;animation:none !important;opacity:0 !important;visibility:hidden !important;display:none !important}
  #vedaWelcome .vw-arrow-body{display:none !important}
  #vedaWelcome .vw-arrow-head{fill:#ff7ab5;stroke:#fff;stroke-width:2.2;filter:url(#arrowGlow)}
  #vedaWelcome .vw-arrow-feather{stroke:#ffc2dd;stroke-width:4}
  #vedaWelcome .vw-arrow-ribbon{stroke:#ff70ae;stroke-width:2.5}
  /* Remove the large radial circle/rays entirely. */
  .ref-burst,.ref-burst.show{display:none !important;opacity:0 !important}
  .ref-heart,.ref-heart.show{display:none !important;opacity:0 !important}
  .ref-spark,.ref-spark.show{display:none !important;opacity:0 !important}
  /* Small hearts are the only impact particles. */
  .ref-mini-heart{position:absolute;z-index:24;color:#ff8fbe;text-shadow:0 0 10px rgba(255,78,165,.75);opacity:0;pointer-events:none;font-family:Arial,sans-serif;font-weight:400}
  .ref-mini-heart.show{animation:refMini 1.9s cubic-bezier(.12,.7,.18,1) forwards}
  .ref-script{position:absolute;right:5.4vw;bottom:9vh;z-index:20;color:#ff9ac6;font:italic 400 clamp(24px,2.5vw,38px)/1.08 'Cormorant Garamond',serif;text-align:center;transform:rotate(-6deg);text-shadow:0 0 16px rgba(255,87,164,.28);opacity:0;pointer-events:none}
  .ref-script.show{animation:refScript .9s 4.1s ease forwards}
  .ref-script small{display:block;font:400 12px 'DM Sans',sans-serif;letter-spacing:.2em;margin-top:9px;color:#ffb5d3}
  @keyframes referenceHeartFloat60{0%,100%{transform:scale(.60) rotate(-2deg)}50%{transform:scale(.60) rotate(2deg) translateY(-7px)}}
  @keyframes referenceHeartHit60{0%{transform:scale(.60)}18%{transform:scale(.70)}42%{transform:scale(.79)}68%{transform:scale(.66)}100%{transform:scale(.02);opacity:0}}
  @keyframes refMini{0%{opacity:0;transform:translate(0,0) scale(.18) rotate(0)}12%{opacity:1}100%{opacity:0;transform:translate(var(--x),var(--y)) scale(.72) rotate(var(--r))}}
  @keyframes refScript{from{opacity:0;transform:rotate(-6deg) translateY(12px)}to{opacity:1;transform:rotate(-6deg) translateY(0)}}
  @keyframes referenceButtonPulse{0%,100%{box-shadow:0 0 18px rgba(255,80,164,.22),inset 0 0 20px rgba(255,91,166,.04)}50%{box-shadow:0 0 45px rgba(255,80,164,.42),inset 0 0 25px rgba(255,91,166,.08)}}
  @media(max-width:700px){#vedaWelcome .vw-kicker{top:9vh;left:7vw}#vedaWelcome .vw-title{top:16vh;left:7vw;width:82vw;font-size:clamp(52px,14vw,82px)}#vedaWelcome .vw-sub{top:39vh;left:7vw}#vedaWelcome .vw-date{top:47vh;left:7vw}#vedaWelcome .vw-wishes{top:61vh;left:7vw;max-width:86vw}#vedaWelcome .vw-enter{top:78vh;left:7vw;min-width:0;width:82vw;padding:14px 20px}.ref-script{right:7vw;bottom:3vh;font-size:22px}}
  `;
  const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);

  function decorate(wrap){
    if(!wrap || wrap.dataset.referenceMatch==='1') return;
    wrap.dataset.referenceMatch='1';
    const art=wrap.querySelector('.vw-art');
    const target=wrap.querySelector('#vwHeartTarget');
    if(!art||!target) return;
    const ns='http://www.w3.org/2000/svg';
    /* Keep the original SVG target position, but scale the heart artwork inside it. */
    const inner=document.createElementNS(ns,'g');
    inner.classList.add('heart-scale');
    while(target.firstChild) inner.appendChild(target.firstChild);
    target.appendChild(inner);

    /* Retain the burst node for compatibility, but CSS hides it completely. */
    const burst=document.createElementNS(ns,'g');
    burst.classList.add('ref-burst');
    art.appendChild(burst);

    const defs=art.querySelector('defs');
    if(defs && !defs.querySelector('#referenceHeartGradient')){
      const grad=document.createElementNS(ns,'linearGradient');
      grad.id='referenceHeartGradient';
      grad.setAttribute('x1','0');grad.setAttribute('y1','0');grad.setAttribute('x2','1');grad.setAttribute('y2','1');
      grad.innerHTML='<stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="#ffd8ea"/><stop offset="1" stop-color="#ff9fc9"/>';
      defs.appendChild(grad);
    }

    const script=document.createElement('div');
    script.className='ref-script';
    script.innerHTML='Let Happiness<br>Find You...<small>♥</small>';
    wrap.appendChild(script);

    function fire(){
      /* Heart is the only large impact object. It disappears, then small hearts scatter. */
      target.classList.add('hit');
      for(let i=0;i<34;i++){
        const h=document.createElement('span');
        h.className='ref-mini-heart';
        h.textContent='♥';
        h.style.left='calc(90.6% - 5px)';
        h.style.top='calc(22.8% + 4px)';
        const angle=Math.random()*Math.PI*2;
        const dist=45+Math.random()*190;
        h.style.setProperty('--x',(Math.cos(angle)*dist)+'px');
        h.style.setProperty('--y',(Math.sin(angle)*dist*.78)+'px');
        h.style.setProperty('--r',((Math.random()-.5)*80)+'deg');
        h.style.fontSize=(8+Math.random()*16)+'px';
        h.style.animationDelay=(Math.random()*.22)+'s';
        h.classList.add('show');
        wrap.appendChild(h);
        setTimeout(()=>h.remove(),2200);
      }
      script.classList.add('show');
    }
    setTimeout(fire,3650);
  }

  const existing=document.getElementById('vedaWelcome');
  if(existing) decorate(existing);
  else new MutationObserver((_,obs)=>{
    const wrap=document.getElementById('vedaWelcome');
    if(wrap){decorate(wrap);obs.disconnect()}
  }).observe(document.body,{childList:true,subtree:true});
})();
