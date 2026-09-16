(function(){
  function loadMatch(){
    if(document.getElementById('cinematicMatchLoader')) return;
    const s=document.createElement('script');
    s.id='cinematicMatchLoader';
    s.src='cinematic-match.js?v=4';
    document.body.appendChild(s);
  }

  function styleLoveMark(){
    const mark=document.querySelector('.nav-mark');
    if(!mark || mark.dataset.loveMarkStyled==='1') return;
    mark.dataset.loveMarkStyled='1';
    mark.textContent='V ♡ M';
    const s=document.createElement('style');
    s.id='loveMarkSizeFix';
    s.textContent=`
      .nav-mark{
        font-size:52px !important;
        line-height:1 !important;
        letter-spacing:.02em !important;
        font-weight:500 !important;
        text-transform:none !important;
        text-shadow:0 0 18px rgba(245,138,185,.28) !important;
        transform-origin:center !important;
      }
      @media(max-width:760px){
        .nav-mark{font-size:40px !important}
      }
    `;
    document.head.appendChild(s);
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
    `;
    document.head.appendChild(s);
  }

  alignEnter();
  styleLoveMark();
  new MutationObserver(()=>styleLoveMark()).observe(document.body,{childList:true,subtree:true});

  if(document.getElementById('vedaWelcome')) loadMatch();
  else new MutationObserver((_,obs)=>{
    if(document.getElementById('vedaWelcome')){obs.disconnect();loadMatch();}
  }).observe(document.body,{childList:true,subtree:true});
})();
