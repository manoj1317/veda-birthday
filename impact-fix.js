(function(){
  // Load the reference-matched cinematic layer after the welcome overlay exists.
  function loadMatch(){
    if(document.getElementById('cinematicMatchLoader')) return;
    const s=document.createElement('script');
    s.id='cinematicMatchLoader';
    s.src='cinematic-match.js?v=1';
    document.body.appendChild(s);
  }
  if(document.getElementById('vedaWelcome')) loadMatch();
  else new MutationObserver((_,obs)=>{
    if(document.getElementById('vedaWelcome')){obs.disconnect();loadMatch();}
  }).observe(document.body,{childList:true,subtree:true});
})();
