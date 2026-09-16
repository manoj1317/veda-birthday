(function(){
  // Load the reference-matched cinematic layer after the welcome overlay exists.
  function loadMatch(){
    if(document.getElementById('cinematicMatchLoader')) return;
    const s=document.createElement('script');
    s.id='cinematicMatchLoader';
    s.src='cinematic-match.js?v=3';
    document.body.appendChild(s);
  }
  function alignEnter(){
    if(document.getElementById('cinematicAlignmentFix')) return;
    const s=document.createElement('style');
    s.id='cinematicAlignmentFix';
    s.textContent=`
      #vedaWelcome .vw-enter{
        left:5.7vw !important;
        top:81.5vh !important;
        width:380px !important;
        min-width:380px !important;
        height:50px !important;
        padding:0 24px !important;
        box-sizing:border-box !important;
        display:flex !important;
        align-items:center !important;
        justify-content:center !important;
        text-align:center !important;
        white-space:nowrap !important;
        background:rgba(48,8,31,.62) !important;
      }
      /* Correct the 60% heart position: keep it at the intended upper-right impact point. */
      #vedaWelcome .vw-heart-target{
        transform-box:view-box !important;
        transform-origin:0 0 !important;
        transform:translate(1450px,205px) scale(.60) rotate(-2deg) !important;
      }
      #vedaWelcome .vw-heart-target.hit{
        animation:correctHeartHit .72s cubic-bezier(.12,.8,.2,1) forwards !important;
      }
      @keyframes correctHeartHit{
        0%{transform:translate(1450px,205px) scale(.60)}
        18%{transform:translate(1450px,205px) scale(.70)}
        42%{transform:translate(1450px,205px) scale(.79)}
        68%{transform:translate(1450px,205px) scale(.66)}
        100%{transform:translate(1450px,205px) scale(.02);opacity:0}
      }
      /* Softer, colorful heart instead of the heavy white heart. */
      #vedaWelcome .vw-heart-target{
        filter:drop-shadow(0 0 10px rgba(255,158,202,.8)) drop-shadow(0 0 25px rgba(255,74,160,.42)) !important;
      }
      #vedaWelcome .vw-heart-target path:nth-child(2){
        fill:#ffd6e8 !important;
        opacity:.9 !important;
      }
      .ref-heart{
        filter:drop-shadow(0 0 9px rgba(255,224,239,.9)) drop-shadow(0 0 24px rgba(255,91,170,.48)) !important;
      }
      .ref-heart path:first-child{fill:url(#vedaSoftHeartGradient) !important}
      .ref-heart path:nth-child(2){stroke:#fff0f7 !important;opacity:.55 !important}
      .ref-ray{stroke:#ff8fbe !important;opacity:.68 !important}
      .ref-ray.white{stroke:#ffd7e8 !important;opacity:.72 !important}
      .ref-ring{stroke:#ff8fbe !important}
      @media(max-width:700px){
        #vedaWelcome .vw-enter{
          left:7vw !important;
          top:78vh !important;
          width:82vw !important;
          min-width:0 !important;
          height:50px !important;
        }
        #vedaWelcome .vw-heart-target{
          transform:translate(1250px,185px) scale(.52) !important;
        }
      }
    `;
    document.head.appendChild(s);
  }
  function softenHeart(){
    if(document.getElementById('vedaSoftHeartGradient')) return;
    const wrap=document.getElementById('vedaWelcome');
    const svg=wrap && wrap.querySelector('.vw-art');
    const heart=wrap && wrap.querySelector('.ref-heart');
    if(!svg || !heart) return false;
    const ns='http://www.w3.org/2000/svg';
    let defs=svg.querySelector('defs');
    if(!defs){defs=document.createElementNS(ns,'defs');svg.insertBefore(defs,svg.firstChild)}
    const g=document.createElementNS(ns,'linearGradient');
    g.id='vedaSoftHeartGradient';
    g.setAttribute('x1','0');g.setAttribute('y1','0');g.setAttribute('x2','1');g.setAttribute('y2','1');
    g.innerHTML='<stop offset="0%" stop-color="#fff1f7"/><stop offset="45%" stop-color="#ffb6d5"/><stop offset="100%" stop-color="#d9b4ff"/>';
    defs.appendChild(g);
    return true;
  }
  alignEnter();
  if(document.getElementById('vedaWelcome')){
    loadMatch();
    const poll=setInterval(()=>{if(softenHeart()) clearInterval(poll)},100);
  } else new MutationObserver((_,obs)=>{
    if(document.getElementById('vedaWelcome')){obs.disconnect();loadMatch();const poll=setInterval(()=>{if(softenHeart()) clearInterval(poll)},100)}
  }).observe(document.body,{childList:true,subtree:true});
})();
