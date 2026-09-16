(function(){
  // Load the reference-matched cinematic layer after the welcome overlay exists.
  function loadMatch(){
    if(document.getElementById('cinematicMatchLoader')) return;
    const s=document.createElement('script');
    s.id='cinematicMatchLoader';
    s.src='cinematic-match.js?v=1';
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
      @media(max-width:700px){
        #vedaWelcome .vw-enter{
          left:7vw !important;
          top:78vh !important;
          width:82vw !important;
          min-width:0 !important;
          height:50px !important;
        }
      }
    `;
    document.head.appendChild(s);
  }
  alignEnter();
  if(document.getElementById('vedaWelcome')) loadMatch();
  else new MutationObserver((_,obs)=>{
    if(document.getElementById('vedaWelcome')){obs.disconnect();loadMatch();}
  }).observe(document.body,{childList:true,subtree:true});
})();
