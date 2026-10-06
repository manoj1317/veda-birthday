const form=document.getElementById('unlockForm');
const password=document.getElementById('password');
const error=document.getElementById('error');
const gate=document.getElementById('gate');
const site=document.getElementById('site');
const wishButton=document.getElementById('wishButton');
const wishMessage=document.getElementById('wishMessage');

function heartBurst(layer){
  const originX=82;
  const originY=22;
  for(let i=0;i<18;i++){
    const h=document.createElement('span');
    h.className='intro-mini-heart';
    h.textContent='♥';
    h.style.left=`${originX}vw`;
    h.style.top=`${originY}vh`;
    const angle=(Math.PI*2*i/18)+(Math.random()-.5)*.35;
    const distance=35+Math.random()*120;
    h.style.setProperty('--x',`${Math.cos(angle)*distance}px`);
    h.style.setProperty('--y',`${Math.sin(angle)*distance*.72}px`);
    h.style.setProperty('--r',`${(Math.random()-.5)*70}deg`);
    h.style.fontSize=`${7+Math.random()*11}px`;
    h.style.animationDelay=`${Math.random()*.12}s`;
    layer.appendChild(h);
    requestAnimationFrame(()=>h.classList.add('go'));
    setTimeout(()=>h.remove(),1500);
  }
}

function buildWelcome(){
  if(document.getElementById('vedaWelcome'))return;
  const wrap=document.createElement('section');
  wrap.id='vedaWelcome';
  wrap.setAttribute('aria-label','Veda birthday welcome');
  wrap.innerHTML=`
    <div class="intro-stars"></div>
    <div class="intro-glow"></div>
    <div class="intro-content">
      <p class="intro-kicker">A LITTLE WORLD MADE FOR YOU</p>
      <h1 class="intro-title">Welcome,<br><em>my Veda. <span class="intro-title-heart">♡</span></em></h1>
      <p class="intro-sub">Some moments are too beautiful to rush.</p>
      <p class="intro-date">08 · OCTOBER · 2001</p>
      <div class="intro-wishes"><span>more love</span><span>more happiness</span><span>more dreams</span><span>more adventures</span><span>beautiful moments</span></div>
      <button class="intro-enter" type="button">Enter your little universe ♡</button>
      <svg class="intro-art" viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true">
        <defs><path id="introArrowPath" d="M120 730 C330 780 500 690 690 555 C900 405 1080 300 1280 190"/></defs>
        <g class="intro-arrow">
          <path class="intro-arrow-head" d="M-20 -10 L25 0 L-20 10 L-8 0 Z"><animateMotion dur="1.6s" begin="indefinite" fill="freeze" rotate="auto"><mpath href="#introArrowPath"/></animateMotion></path>
          <path class="intro-arrow-shaft" d="M-92 0 L0 0"><animateMotion dur="1.6s" begin="indefinite" fill="freeze" rotate="auto"><mpath href="#introArrowPath"/></animateMotion></path>
          <path class="intro-arrow-feather" d="M-67 -1 Q-90 -23 -112 -26 M-61 1 Q-84 24 -107 27"><animateMotion dur="1.6s" begin="indefinite" fill="freeze" rotate="auto"><mpath href="#introArrowPath"/></animateMotion></path>
          <path class="intro-arrow-ribbon" d="M-82 0 Q-112 -16 -140 -7 M-82 0 Q-112 16 -140 7"><animateMotion dur="1.6s" begin="indefinite" fill="freeze" rotate="auto"><mpath href="#introArrowPath"/></animateMotion></path>
        </g>
        <g class="intro-heart" id="introHeart" transform="translate(1280 190) scale(.6)">
          <path class="intro-heart-glow" d="M0 105C-16 89-94 47-94-10C-94-55-39-72 0-31C39-72 94-55 94-10C94 47 16 89 0 105Z"/>
          <path class="intro-heart-fill" d="M0 105C-16 89-94 47-94-10C-94-55-39-72 0-31C39-72 94-55 94-10C94 47 16 89 0 105Z"/>
          <path class="intro-heart-shine" d="M-42-25C-18-51 4-50 25-35"/>
        </g>
      </svg>
      <div class="intro-hearts" aria-hidden="true"></div>
    </div>`;
  document.body.appendChild(wrap);

  const style=document.createElement('style');
  style.textContent=`
#vedaWelcome{position:fixed;inset:0;z-index:9999;overflow:hidden;background:linear-gradient(135deg,#100713 0%,#2a0c25 52%,#0b0610 100%);color:#fff7fb;animation:introIn .6s ease both}
#vedaWelcome .intro-stars{position:absolute;inset:0;opacity:.16;background-image:radial-gradient(#fff .8px,transparent .8px);background-size:54px 54px;animation:introStars 24s linear infinite}
#vedaWelcome .intro-glow{position:absolute;right:-6vw;top:-7vh;width:52vw;height:52vw;border-radius:50%;background:rgba(255,72,154,.15);filter:blur(80px)}
#vedaWelcome .intro-content{position:relative;width:100%;height:100%;min-height:100vh}
#vedaWelcome .intro-kicker{position:absolute;left:7vw;top:10vh;margin:0;font:600 10px 'DM Sans',sans-serif;letter-spacing:.38em;color:#f2cadb;opacity:0;animation:introRise .8s .12s forwards}
#vedaWelcome .intro-title{position:absolute;left:5.7vw;top:18vh;width:58vw;margin:0;font:500 clamp(58px,8vw,112px)/.84 'Cormorant Garamond',serif;letter-spacing:-.02em;opacity:0;animation:introTitle 1s .25s forwards}
#vedaWelcome .intro-title em{color:#ff9fc8;font-style:italic}.intro-title-heart{display:inline-block;color:#fff7fb;font-style:normal;font-size:.66em;vertical-align:.04em;text-shadow:0 0 16px rgba(255,135,191,.55)}
#vedaWelcome .intro-sub{position:absolute;left:7vw;top:43vh;margin:0;color:#ead5df;font:400 clamp(17px,2.1vw,24px)/1.4 'Cormorant Garamond',serif;opacity:0;animation:introRise .8s .55s forwards}
#vedaWelcome .intro-date{position:absolute;left:7vw;top:51vh;margin:0;color:#d9aabd;font:600 10px 'DM Sans',sans-serif;letter-spacing:.3em;opacity:0;animation:introRise .8s .78s forwards}
#vedaWelcome .intro-wishes{position:absolute;left:7vw;top:63vh;display:flex;flex-wrap:wrap;gap:9px;max-width:57%;opacity:0;animation:introRise .8s 1s forwards}.intro-wishes span{padding:8px 13px;border:1px solid rgba(255,188,218,.25);border-radius:999px;background:rgba(255,139,191,.055);color:#f7d3e2;font:500 9px 'DM Sans',sans-serif;letter-spacing:.1em;text-transform:uppercase}
#vedaWelcome .intro-enter{position:absolute;left:7vw;top:74vh;min-width:365px;height:52px;padding:0 28px;border:1px solid rgba(255,184,215,.7);border-radius:999px;background:rgba(53,9,35,.66);color:#fff1f7;font:600 11px 'DM Sans',sans-serif;letter-spacing:.1em;cursor:pointer;opacity:0;pointer-events:none;box-shadow:0 0 30px rgba(255,102,178,.12);transition:transform .25s,background .25s,box-shadow .25s}
#vedaWelcome .intro-enter.ready{opacity:1;pointer-events:auto;animation:introButton 2.2s ease-in-out infinite}.intro-enter:hover{transform:translateY(-3px);background:rgba(255,133,186,.14);box-shadow:0 0 45px rgba(255,102,178,.22)}
#vedaWelcome .intro-art{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible}.intro-arrow{opacity:0}.intro-arrow.show{opacity:1}.intro-arrow-head{fill:#ff8fbe;stroke:#fff5fa;stroke-width:2.2;filter:drop-shadow(0 0 7px rgba(255,130,190,.5))}.intro-arrow-shaft{fill:none;stroke:#fff5fa;stroke-width:4;stroke-linecap:round}.intro-arrow-feather{fill:none;stroke:#ffd0e2;stroke-width:3.5;stroke-linecap:round}.intro-arrow-ribbon{fill:none;stroke:#ff79b3;stroke-width:2.2;stroke-linecap:round;opacity:.8}
.intro-heart{transform-origin:0 0;opacity:1;filter:drop-shadow(0 0 9px rgba(255,210,229,.85)) drop-shadow(0 0 22px rgba(255,74,160,.42));transition:opacity .28s,transform .55s cubic-bezier(.2,.8,.2,1)}.intro-heart-glow{fill:#ff82b8;opacity:.22;filter:blur(8px)}.intro-heart-fill{fill:#ffd2e5;opacity:.96}.intro-heart-shine{fill:none;stroke:#fff;stroke-width:8;stroke-linecap:round;opacity:.7}.intro-heart.hit{opacity:0;transform:translate(42px,-24px) scale(.06)!important}
.intro-mini-heart{position:absolute;z-index:4;color:#ff9bc6;pointer-events:none;opacity:0;text-shadow:0 0 9px rgba(255,85,165,.5);font-family:Arial,sans-serif;font-weight:400}.intro-mini-heart.go{animation:introMini 1.15s cubic-bezier(.12,.72,.2,1) forwards}
@keyframes introIn{from{opacity:0}to{opacity:1}}@keyframes introStars{to{background-position:54px 54px}}@keyframes introRise{from{opacity:0;transform:translateY(15px)}to{opacity:1;transform:none}}@keyframes introTitle{from{opacity:0;transform:translateY(22px);filter:blur(5px)}to{opacity:1;transform:none;filter:none}}@keyframes introButton{0%,100%{box-shadow:0 0 25px rgba(255,102,178,.12)}50%{box-shadow:0 0 48px rgba(255,102,178,.25)}}@keyframes introMini{0%{opacity:0;transform:translate(0,0) scale(.15)}12%{opacity:1}100%{opacity:0;transform:translate(var(--x),var(--y)) scale(.62) rotate(var(--r))}}
#vedaWelcome.out{animation:introOut .7s ease forwards}@keyframes introOut{to{opacity:0;visibility:hidden;transform:scale(1.015)}}
@media(max-width:700px){#vedaWelcome .intro-kicker,#vedaWelcome .intro-sub,#vedaWelcome .intro-date,#vedaWelcome .intro-wishes,#vedaWelcome .intro-enter{left:7vw}#vedaWelcome .intro-kicker{top:8vh}#vedaWelcome .intro-title{left:7vw;top:14vh;width:82vw;font-size:clamp(50px,13vw,78px)}#vedaWelcome .intro-sub{top:35vh}#vedaWelcome .intro-date{top:42vh}#vedaWelcome .intro-wishes{top:64vh;max-width:88%}#vedaWelcome .intro-enter{top:79vh;min-width:0;width:86vw}}
@media(prefers-reduced-motion:reduce){#vedaWelcome *{animation-duration:.01ms!important;animation-iteration-count:1!important}}
`;
  document.head.appendChild(style);

  const arrow=wrap.querySelector('.intro-arrow');
  const heart=wrap.querySelector('#introHeart');
  const motions=[...arrow.querySelectorAll('animateMotion')];
  const burstLayer=wrap.querySelector('.intro-hearts');
  const enter=wrap.querySelector('.intro-enter');
  let active=true;
  let cycleTimer;

  motions.forEach(m=>{m.setAttribute('begin','indefinite');m.setAttribute('fill','freeze')});

  function cycle(){
    if(!active)return;
    heart.classList.remove('hit');
    arrow.classList.remove('show');
    void arrow.getBoundingClientRect();
    arrow.classList.add('show');
    motions.forEach(m=>{try{m.beginElement()}catch(e){}});
    cycleTimer=setTimeout(()=>{
      if(!active)return;
      heart.classList.add('hit');
      heartBurst(burstLayer);
      setTimeout(()=>{arrow.classList.remove('show')},260);
      cycleTimer=setTimeout(cycle,1150);
    },1600);
  }

  setTimeout(cycle,1100);
  setTimeout(()=>enter.classList.add('ready'),2450);
  enter.addEventListener('click',()=>{
    active=false;
    clearTimeout(cycleTimer);
    wrap.classList.add('out');
    setTimeout(()=>{
      wrap.remove();
      gate.classList.add('hidden');
      site.classList.remove('hidden');
      window.scrollTo(0,0);
      buildJourney();
      startVedaMusic();
    },650);
  });
}


function buildJourney(){
  const old=[...site.children].filter(el=>!el.classList.contains('topbar'));
  old.forEach(el=>el.remove());

  const pages=[
    {
      eyebrow:'01 · A little beginning',
      title:'Choose a little<br><em>door into my heart.</em>',
      text:'There is no wrong choice. Open all four, one by one, and each will leave you a tiny message from me.',
      options:[
        ['♡','నీ చిరునవ్వు','నువ్వు నవ్వితే చాలు… నా రోజు ఎంత గందరగోళంగా ఉన్నా కాస్త సులువైపోతుంది. నీ నవ్వు నాకు ఎంత ఇష్టమో, నువ్వు బహుశా ఎప్పటికీ పూర్తిగా తెలుసుకోలేవు.'],
        ['✦','నీ నవ్వు','నువ్వు నవ్వినప్పుడు నేను కూడా ఎందుకో నవ్వేస్తాను. ఆ క్షణంలో ఇంకేం కావాలనిపించదు.'],
        ['∞','నీ మనసు','నువ్వు మనుషుల్ని చూసే విధానం, వాళ్ల కోసం ఆలోచించే తీరు… నీ అందం నాకు ఎక్కువగా కనిపించేది అక్కడే.'],
        ['☾','నీ తోడు','మనిద్దరం ఏమీ మాట్లాడకుండా పక్కపక్కనే ఉన్నా నాకు చాలు. నువ్వు పక్కన ఉన్నావనే భావనకే ఒక ప్రశాంతత ఉంటుంది.']
      ]
    },
    {
      eyebrow:'02 · The little things',
      title:'Four tiny reasons<br><em>I keep smiling.</em>',
      text:'Open every one. Think of these as four folded notes I slipped into your birthday universe.',
      options:[
        ['01','నువ్వు చూపించే శ్రద్ధ','నేను చెప్పకుండానే కొన్ని విషయాలు నువ్వు గమనిస్తావు. ఆ చిన్న శ్రద్ధే నాకు చాలా పెద్ద ప్రేమలా అనిపిస్తుంది.'],
        ['02','నీ కలలు','నీకు ఏం కావాలో, ఏం సాధించాలనుకుంటున్నావో చెప్పేటప్పుడు నీ కళ్లలో కనిపించే ఆ ఉత్సాహం నాకు చాలా ఇష్టం. నీ కలలన్నీ ఒక్కొక్కటిగా నిజం కావాలి.'],
        ['03','నువ్వు ఆటపట్టించే తీరు','నన్ను ఆటపట్టించి, నేను కోపంగా ఉన్నట్టు నటించినా నవ్వు ఆపుకోలేని పరిస్థితి చేస్తావు కదా… ఆ చిన్న అల్లరే నాకు చాలా ఇష్టం. 😛'],
        ['04','నువ్వు నువ్వుగా ఉండటం','నీ ముందు నువ్వు ఎవరో నిరూపించుకోవాల్సిన అవసరం నీకు ఎప్పుడూ ఉండకూడదు. నువ్వు ఎలా ఉన్నావో అలా ఉండటం నాకు చాలా ఇష్టం.']
      ]
    },
    {
      eyebrow:'03 · Our little story',
      title:'Some moments deserve<br><em>their own page.</em>',
      text:'Four doors. Four memories. Open them all.',
      options:[
        ['03 FEB','ఆ బైక్ ప్రయాణం','నీ ఫ్రెండ్ పెళ్లికి వెళ్తున్న సాధారణమైన బైక్ ప్రయాణం అది. కానీ ఆ రోజు నీతో వెళ్తూ, ఇక మనసులో దాచుకోలేక “I love you” అని చెప్పిన క్షణం… నాకు మాత్రం ఎప్పటికీ సాధారణం కాదు.'],
        ['♡','ఆ చిన్న ఉంగరం','నువ్వు అప్పటికే వేసుకున్న అదే ఉంగరాన్ని తీసుకుని నీకు ప్రపోజ్ చేశాను. చెప్పాల్సిన మాట చెప్పి, మళ్లీ ఆ ఉంగరాన్నే నీ వేలికి పెట్టాను. నువ్వు ఏమీ చెప్పకుండా నవ్వావు… ఆ నవ్వు మాత్రం నాకు ఇప్పటికీ గుర్తుంది. 😛'],
        ['14 FEB','మళ్లీ అడిగిన ప్రశ్న','ఫిబ్రవరి 14న మళ్లీ అడిగాను. ఈసారి నీ నుంచి వచ్చిన “అవును” కోసం నేను ఎంతగా ఎదురుచూశానో… ఆ ఒక్క మాట విన్నప్పుడు అంతా ఒక్కసారిగా చాలా అందంగా అనిపించింది.'],
        ['YES','ఆ “అవును”','నీ నోటి నుంచి వచ్చిన ఆ చిన్న “అవును” నాకు చిన్న మాట కాదు. ఆ రోజు నుంచి నా జీవిత కథలో “మన” అనే పదం మొదలైంది. ♡']
      ]
    },
    {
      eyebrow:'04 · For your birthday',
      title:'Four wishes<br><em>for my Veda.</em>',
      text:'Open every wish. Then the next page will be waiting for you.',
      options:[
        ['♡','ఇంకా ప్రేమ','నీకు ప్రేమ అంటే మాటల్లో మాత్రమే కాదు, చిన్న చిన్న పనుల్లో కూడా కనిపించేలా ఉండాలి. మనం ఎంత బిజీగా ఉన్నా, ఒకరినొకరం ఎంచుకోవడం మాత్రం ఎప్పుడూ మర్చిపోకూడదు.'],
        ['✦','ఇంకా ఆనందం','పెద్ద కారణం లేకపోయినా నవ్వుకునే రోజులు నీకు ఎక్కువగా రావాలి. నీకు నచ్చిన చిన్న చిన్న విషయాలే నీ రోజులను అందంగా మార్చాలి.'],
        ['∞','ఇంకా కలలు','నీ మనసులో ఉన్న కలలు ఏవైనా సరే, వాటిని చిన్నవిగా అనుకోకు. ఒక్కో అడుగు వేసుకుంటూ వాటన్నింటి దగ్గరికి నువ్వు చేరాలని నేను మనస్ఫూర్తిగా కోరుకుంటున్నాను.'],
        ['→','ఇంకా ప్రయాణాలు','మనిద్దరం కలిసి వెళ్లాల్సిన దారులు ఇంకా చాలా ఉన్నాయి. కొత్త ప్రదేశాలు, మధ్యలో జరిగే చిన్న గొడవలు, వెంటనే వచ్చే నవ్వులు… ఇవన్నీ ఇంకా చాలా ఉండాలి.']
      ]
    },
    {
      eyebrow:'05 · Your little universe',
      title:'And now,<br><em>one last little page.</em>',
      text:'You opened every door. So here is the part I want you to keep.',
      options:[
        ['♡','ఇది గుర్తుంచుకో','నీకు నేను ప్రతిరోజూ చెప్పకపోయినా, నువ్వు నాకు ఎంత ముఖ్యమో మాత్రం ఎప్పుడూ తగ్గదు. కొన్ని మనుషులు జీవితంలోకి వచ్చి, జీవితం మొత్తాన్నే కొంచెం అందంగా మార్చేస్తారు. నువ్వు నాకు అలాంటి మనిషివి.'],
        ['✦','ఈ రోజును గుర్తుంచుకో','ఈ రోజు నీ పుట్టినరోజు మాత్రమే కాదు… నువ్వు నా జీవితంలోకి ఇంకా ఎన్నో అందమైన రోజులు తీసుకురావాల్సిన ప్రయాణానికి ఇంకో సంవత్సరం మొదలు. ఈ రోజు మనసారా నవ్వు.'],
        ['∞','మనల్ని గుర్తుంచుకో','మన కథ ఎంత పెద్దదైనా, నాకు మాత్రం కొన్ని చిన్న క్షణాలే మళ్లీ మళ్లీ గుర్తొస్తాయి — ఆ బైక్ ప్రయాణం, ఆ ఉంగరం, నీ నవ్వు, ఫిబ్రవరి 14న నువ్వు చెప్పిన “అవును”.'],
        ['♥','ఎప్పటికీ గుర్తుంచుకో','మనకి ముందు ఇంకా ఎన్ని రోజులు, ఎన్ని కథలు ఉన్నాయో నాకు తెలియదు. కానీ ఏ రోజు వచ్చినా, చివరికి తిరిగి చూసుకున్నప్పుడు “మన జీవితం బాగుంది” అని ఇద్దరం నవ్వుతూ చెప్పుకునేలా ఉండాలి.']
      ]
    }
  ];

  let pageIndex=0;
  const journey=document.createElement('section');
  journey.id='birthdayJourney';
  journey.setAttribute('aria-label','Veda birthday interactive journey');
  journey.innerHTML='<div class="journey-shell"><div class="journey-top"><span class="journey-progress"></span><span class="journey-count"></span></div><div class="journey-copy"><p class="journey-eyebrow"></p><h2 class="journey-title"></h2><p class="journey-text"></p></div><div class="journey-options"></div><div class="journey-next">Open all four to continue</div></div>';
  site.appendChild(journey);

  const progress=journey.querySelector('.journey-progress');
  const count=journey.querySelector('.journey-count');
  const eyebrow=journey.querySelector('.journey-eyebrow');
  const title=journey.querySelector('.journey-title');
  const text=journey.querySelector('.journey-text');
  const options=journey.querySelector('.journey-options');
  const next=journey.querySelector('.journey-next');

  function renderPage(){
    const page=pages[pageIndex];
    eyebrow.textContent=page.eyebrow;
    title.innerHTML=page.title;
    text.textContent=page.text;
    count.textContent=`${pageIndex+1} / ${pages.length}`;
    journey.className=`page-${pageIndex+1}`;
    journey.style.setProperty('--journey-photo', `url("veda-page-${pageIndex+1}.jpg")`);
    progress.style.width=`${((pageIndex+1)/pages.length)*100}%`;
    options.innerHTML='';
    next.textContent=pageIndex===pages.length-1?'All four opened ♡':'Open all four to continue';
    next.classList.remove('ready');

    page.options.forEach((item,i)=>{
      const button=document.createElement('button');
      button.type='button';
      button.className='journey-option';
      button.innerHTML=`<span class="journey-icon">${item[0]}</span><span class="journey-option-copy"><strong>${item[1]}</strong><small>tap to open</small></span><span class="journey-arrow">↗</span><span class="journey-message">${item[2]}</span>`;
      button.addEventListener('click',()=>{
        if(button.classList.contains('opened'))return;
        button.classList.add('opened');
        button.querySelector('.journey-option-copy small').textContent='opened ♡';
        const opened=options.querySelectorAll('.journey-option.opened').length;
        if(opened===4){
          next.classList.add('ready');
          next.textContent=pageIndex===pages.length-1?'Enter your little universe ♡':'Continue to the next page →';
          setTimeout(()=>next.focus(),120);
        }
      });
      options.appendChild(button);
    });
  }

  next.addEventListener('click',()=>{
    if(!next.classList.contains('ready'))return;
    if(pageIndex<pages.length-1){
      pageIndex++;
      renderPage();
      window.scrollTo({top:0,behavior:'smooth'});
    }else{
      showFinalBirthday();
    }
  });

  function showFinalBirthday(){
    journey.innerHTML=`<div class="journey-finale"><p class="journey-eyebrow">08 · OCTOBER · 2001</p><div class="final-heart">♡</div><h2>Happy Birthday,<br><em>my Veda.</em></h2><p>You opened every little door. Now keep this one:</p><blockquote>“నీకు నచ్చినట్టుగా జీవించే ధైర్యం, మనసారా నవ్వే రోజులు, నువ్వు కలలు కనే వాటిని చేరుకునే అవకాశం… ఇవన్నీ ఈ కొత్త సంవత్సరంలో నీకు దొరకాలి. నేను మాత్రం ప్రతి దారిలో నీ పక్కనే ఉండాలని కోరుకుంటాను.”</blockquote><p class="final-small">With all my love, always. ♡</p><button class="final-restart" type="button">Start the little universe again</button></div>`;
    journey.querySelector('.final-restart').addEventListener('click',()=>{pageIndex=0;renderPage();});
  }

  renderPage();
}

function startPageEffects(){
  const sections=[...document.querySelectorAll('.section')];
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('in-view')}),{threshold:.12});
  sections.forEach(s=>{s.classList.add('reveal-section');observer.observe(s)});
  setInterval(()=>{
    const layer=document.getElementById('hearts');
    if(!layer)return;
    const h=document.createElement('span');h.className='heart';h.textContent=Math.random()>.35?'♡':'♥';
    h.style.left=`${8+Math.random()*84}vw`;h.style.bottom='-20px';h.style.fontSize=`${10+Math.random()*13}px`;h.style.animationDuration=`${5+Math.random()*3}s`;layer.appendChild(h);setTimeout(()=>h.remove(),8500);
  },2600);
}

form.addEventListener('submit',e=>{
  e.preventDefault();
  if(password.value===VEDA_PASSWORD){
    error.textContent='';
    password.blur();
    buildWelcome();
  }else{
    error.textContent='That secret word is not quite right. Try again ♡';
    password.select();
  }
});

if(wishButton){
  wishButton.addEventListener('click',()=>{
    const card=wishButton.closest('.wish-card');
    card.classList.add('wished');
    wishMessage.textContent='Then let the universe keep it safe. May something even better find its way to you. ♡';
    wishButton.textContent='Wish sent into the universe ✦';
    wishButton.disabled=true;
  });
}


/* Birthday music — starts from Veda's explicit Enter click. */
let vedaMusicFrame=null;
function startVedaMusic(){
  if(document.getElementById('vedaMusic'))return;
  const box=document.createElement('div');
  box.id='vedaMusic';
  box.innerHTML='<div class="veda-music-player" aria-hidden="true"></div><button class="veda-music-toggle" id="vedaMusicToggle" type="button" aria-label="Pause music"><span>♫</span><strong>Veda’s song</strong><small>00:24 → 02:00</small></button>';
  document.body.appendChild(box);
  const style=document.createElement('style');
  style.textContent=`
#vedaMusic{position:fixed;right:22px;bottom:22px;z-index:5000;display:flex;align-items:center}
.veda-music-player{position:absolute;width:1px;height:1px;overflow:hidden;opacity:.01;pointer-events:none}
.veda-music-toggle{display:grid;grid-template-columns:34px 1fr;grid-template-rows:auto auto;column-gap:9px;align-items:center;min-width:220px;padding:10px 15px 10px 10px;border:1px solid rgba(255,201,222,.25);border-radius:18px;background:rgba(28,10,27,.78);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);color:#fff4f8;box-shadow:0 12px 35px rgba(0,0,0,.25);cursor:pointer;text-align:left;transition:transform .2s,border-color .2s}
.veda-music-toggle span{grid-row:1/3;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#ff9fc8;color:#2a101e;font-size:16px}.veda-music-toggle strong{font:600 11px 'DM Sans',sans-serif;letter-spacing:.02em;white-space:nowrap}.veda-music-toggle small{font:400 9px 'DM Sans',sans-serif;color:#dcbcc9;margin-top:2px}.veda-music-toggle:hover{transform:translateY(-2px);border-color:rgba(255,201,222,.5)}
@media(max-width:700px){#vedaMusic{right:12px;bottom:12px}.veda-music-toggle{min-width:0;width:205px;padding:9px 11px}.veda-music-toggle strong{font-size:10px}}
`;
  document.head.appendChild(style);
  const player=box.querySelector('.veda-music-player');
  const toggle=box.querySelector('#vedaMusicToggle');
  const src='https://www.youtube.com/embed/QPxvSJimDjw?autoplay=1&playsinline=1&start=24&end=120&loop=1&playlist=QPxvSJimDjw&rel=0&modestbranding=1';
  player.innerHTML='<iframe title="Veda birthday music" width="1" height="1" src="'+src+'" allow="autoplay; encrypted-media; picture-in-picture" frameborder="0"></iframe>';
  vedaMusicFrame=player.querySelector('iframe');
  toggle.addEventListener('click',()=>{
    if(!vedaMusicFrame)return;
    const paused=toggle.dataset.paused==='1';
    if(paused){
      vedaMusicFrame.contentWindow.postMessage(JSON.stringify({event:'command',func:'playVideo',args:[]}),'*');
      toggle.dataset.paused='0';toggle.querySelector('span').textContent='♫';toggle.setAttribute('aria-label','Pause music');
    }else{
      vedaMusicFrame.contentWindow.postMessage(JSON.stringify({event:'command',func:'pauseVideo',args:[]}),'*');
      toggle.dataset.paused='1';toggle.querySelector('span').textContent='▶';toggle.setAttribute('aria-label','Play music');
    }
  });
}
