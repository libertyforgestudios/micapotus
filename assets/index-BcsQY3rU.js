function m(){const a=["5990ihDktk","same-origin","rel","2312lwKjrO","283188pPETZF","credentials","1109405zTmSgp","4361ozKiqb","9QoVWQw","20653loQxEe","crossOrigin","945180qYeeMk","addedNodes","integrity","2TWCQIA","childList","referrerPolicy","include","50856pSJWgI","2898bjLIGD","link","modulepreload","LINK","supports","querySelectorAll","type",'link[rel="modulepreload"]',"createElement"];return m=function(){return a},m()}function g(a,x){const e=m();return g=function(t,s){return t=t-364,e[t]},g(a,x)}(function(a,x){const e=g,t=a();for(;;)try{if(-parseInt(e(377))/1*(parseInt(e(382))/2)+-parseInt(e(376))/3*(-parseInt(e(372))/4)+parseInt(e(379))/5+parseInt(e(386))/6+-parseInt(e(375))/7*(parseInt(e(371))/8)+parseInt(e(387))/9*(-parseInt(e(368))/10)+parseInt(e(374))/11===x)break;t.push(t.shift())}catch{t.push(t.shift())}})(m,117180),function(){const x=g,e=document[x(367)](x(388)).relList;if(e&&e[x(391)]&&e[x(391)](x(389)))return;for(const h of document[x(364)](x(366)))s(h);new MutationObserver(h=>{const i=x;for(const c of h)if(c[i(365)]===i(383))for(const o of c[i(380)])o.tagName===i(390)&&o[i(370)]==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(h){const i=x,c={};return h[i(381)]&&(c[i(381)]=h[i(381)]),h[i(384)]&&(c[i(384)]=h.referrerPolicy),h[i(378)]==="use-credentials"?c[i(373)]=i(385):h[i(378)]==="anonymous"?c[i(373)]="omit":c[i(373)]=i(369),c}function s(h){if(h.ep)return;h.ep=!0;const i=t(h);fetch(h.href,i)}}();const n=u;(function(a,x){const e=u,t=a();for(;;)try{if(parseInt(e(240))/1+parseInt(e(189))/2+parseInt(e(177))/3*(parseInt(e(194))/4)+-parseInt(e(264))/5+parseInt(e(253))/6*(parseInt(e(223))/7)+parseInt(e(212))/8+-parseInt(e(287))/9*(parseInt(e(288))/10)===x)break;t.push(t.shift())}catch{t.push(t.shift())}})(y,282899);function y(){const a=["grid","/assets/mic.png","updateUI","setDisplaySize","create","1041964StbAUb","key","retryButton","missed-hit","setOrigin","10084dzNEiH","HomeScene",", Score: ","sys","now","input","sloppy-hit","comboText","Perfect hit! Count: ","android","micAspectRatio","hasTapped","scene","ScoreScene","combo","Overlaps","scoreData","start","2981728nHbYIz","perfectHitStart","Math","play","max","home-video","off","video","Mic Whack-a-Mole","Geom","destroy","14672udffcB","tweens","spawnTime","game","setVisible","startButton","setData","), Time since spawn: ","isMobile","Lives: ",`Whack the president with the mic!
Click or tap when he pops up.
Perfect hits = 100 pts, Sloppy = 25 pts.
3 misses = Game Over!`,", Multiplier: x","displayWidth","/assets/sloppy-hit.png","instructions","get","height","459274ZKAVqK","#000","image","active","log","retryText","stop","perfectHitEnd","min","bringToTop","Miss! Multiplier reset to x","homeText","scale","1068pphuUX","shutdown","textures","), Mic at (","width","forEach","setBackground","score","/assets/trump-hit.mp4","texture","random","2500720RHOvzq","add","preload","/assets/neutral.png","miss","spawnPresident","presidentAspectRatio","title","neutral","Game Over!","Rectangle","ms, Perfect range: ","setScale","windowsPhone",", Lives: ","homeButton","No overlap detected! Tap at (","setDepth","delayedCall","scoreText","loadeddata","score-bg","setPosition","4890213PwSKgk","20zkWhiY","mic","createLayout","startText","handleHit","device","load","center","livesText","elements","/assets/perfect-hit.png","text","setText","Sloppy hit! Multiplier reset to x","Retry","resize","perfectHitCount","checkMicCollision","list","rectangle","lives","displayHeight","children","GameScene","Arial","pointerdown","Scene","president","), President at (","iOS","perfect-hit","speed","time","Between","setInteractive","Distance","171qRaQAe","source","pointermove","Combo: x","/assets/missed-hit.png","floor","Start"];return y=function(){return a},y()}function u(a,x){const e=y();return u=function(t,s){return t=t-169,e[t]},u(a,x)}class T extends Phaser.Scene{constructor(){const x=u;super(x(195))}[n(266)](){const x=n;this[x(294)].video("home-video",x(261),x(284),!1,!0)}create(){const x=n;this.elements={},this[x(290)](this[x(252)][x(257)],this[x(252)][x(239)])}[n(290)](x,e){const t=n;this[t(297)].bg&&this.elements.bg[t(222)](),this[t(297)][t(271)]&&this[t(297)][t(271)][t(222)](),this[t(297)][t(237)]&&this[t(297)][t(237)][t(222)](),this[t(297)][t(228)]&&this[t(297)][t(228)][t(222)](),this[t(297)][t(291)]&&this[t(297)].startText[t(222)]();const s=this[t(265)][t(219)](x/2,e/2,t(217)).setOrigin(.5),h=1920,i=1080,c=h/i,o=x/e;let r;o>c?r=e/i:r=x/h,s[t(276)](r),s[t(215)](!0),this[t(297)].bg=s,this[t(297)].title=this[t(265)][t(299)](x/2,e*.2,t(220),{fontSize:Math[t(248)](x,e)*.08+"px",color:t(241),fontFamily:t(312)})[t(193)](.5),this[t(297)][t(237)]=this[t(265)][t(299)](x/2,e*.5,t(233),{fontSize:Math[t(248)](x,e)*.04+"px",color:t(241),fontFamily:t(312),align:t(295)})[t(193)](.5);const f=x*.25,l=e*.13;this.elements.startButton=this[t(265)][t(307)](x/2,e*.75,f,l,65280)[t(175)]().on(t(313),()=>this[t(206)][t(211)](t(311))),this[t(297)][t(291)]=this[t(265)][t(299)](x/2,e*.75,t(183),{fontSize:Math[t(248)](x,e)*.06+"px",color:t(241)}).setOrigin(.5),this[t(310)][t(249)](this[t(297)][t(271)]),this[t(310)][t(249)](this[t(297)][t(237)]),this[t(310)][t(249)](this[t(297)][t(228)]),this[t(310)][t(249)](this.elements.startText)}[n(303)](x,e){this[n(290)](x,e)}[n(254)](){const x=n;this[x(297)].bg&&this[x(297)].bg[x(246)]&&this[x(297)].bg[x(246)]()}}class P extends Phaser.Scene{constructor(){const x=n;super(x(311))}[n(266)](){const x=n;this[x(294)][x(242)]("president","/assets/president.png"),this[x(294)][x(242)](x(289),x(185)),this[x(294)][x(242)](x(272),x(267)),this.load[x(242)](x(171),x(298)),this.load[x(242)](x(200),x(236)),this[x(294)][x(242)](x(192),x(181))}[n(188)](){const x=n;this[x(260)]=0,this[x(308)]=3,this[x(208)]=1,this[x(304)]=0,this[x(172)]=1300,this[x(213)]=500,this[x(247)]=800,this[x(270)]=200/226,this[x(204)]=200/135,this[x(231)]=this[x(197)][x(226)][x(293)].os[x(203)]||this.sys.game.device.os[x(170)]||this[x(197)][x(226)][x(293)].os[x(277)],this[x(205)]=!1,this[x(297)]={},this[x(290)](this[x(252)].width,this[x(252)][x(239)]),this[x(269)](),this[x(199)].on("pointerdown",e=>{const t=x;this.isMobile?(!this[t(205)]&&(this.mic.setVisible(!0),this[t(205)]=!0),this[t(224)][t(265)]({targets:this[t(289)],x:e.x,y:e.y,duration:200,ease:"Power1",onComplete:()=>{this[t(305)](e)}})):(this[t(289)].setPosition(e.x,e.y),this[t(305)](e))}),this.input.on(x(179),e=>{!this[x(231)]&&this.mic.setPosition(e.x,e.y)})}createLayout(x,e){const t=n;this[t(297)].bg&&this[t(297)].bg[t(222)](),this.elements.scoreText&&this[t(297)][t(283)][t(222)](),this[t(297)].livesText&&this[t(297)][t(296)][t(222)](),this[t(297)][t(201)]&&this[t(297)][t(201)][t(222)](),this[t(259)](x,e,"neutral"),this[t(297)].scoreText=this[t(265)].text(x*.025,e*.033,"Score: "+Math[t(182)](this[t(260)]),{fontSize:Math[t(248)](x,e)*.04+"px",color:"#000"})[t(281)](1),this[t(297)][t(296)]=this[t(265)][t(299)](x*.025,e*.083,t(232)+this[t(308)],{fontSize:Math[t(248)](x,e)*.04+"px",color:"#000"}).setDepth(1),this[t(297)].comboText=this[t(265)][t(299)](x*.025,e*.133,t(180)+this[t(208)],{fontSize:Math.min(x,e)*.04+"px",color:t(241)})[t(281)](1);const s=x*.75,h=e*.75,i=s/3,c=h/3,o=(x-s)/2,r=(e-h)/2+e*.1;this[t(184)]=[[{x:o+i*.5,y:r+c*.5},{x:o+i*1.5,y:r+c*.5},{x:o+i*2.5,y:r+c*.5}],[{x:o+i*.5,y:r+c*1.5},{x:o+i*1.5,y:r+c*1.5},{x:o+i*2.5,y:r+c*1.5}],[{x:o+i*.5,y:r+c*2.5},{x:o+i*1.5,y:r+c*2.5},{x:o+i*2.5,y:r+c*2.5}]],this.mic&&this[t(289)][t(222)]();const f=Math[t(248)](x,e)*.13,l=f*this[t(204)];this[t(289)]=this[t(265)][t(242)](x/2,e/2,t(289))[t(193)](.5)[t(187)](l,f)[t(227)](!this[t(231)])[t(281)](3)}setBackground(x,e,t){const s=n;this.elements.bg&&this[s(297)].bg[s(222)]();const h=this[s(265)][s(242)](x/2,e/2,t).setOrigin(.5),i=1920,c=1080,o=i/c,r=x/e;let f;r>o?f=e/c:f=x/i,h.setScale(f),this.elements.bg=h,h[s(281)](0),this[s(310)][s(306)][s(258)](l=>{const p=s;l[p(262)]&&l[p(262)][p(190)]===p(315)&&l.setDepth(2)}),this[s(289)]&&this[s(289)][s(281)](3)}findClosestGridPos(x,e){const t=n;let s=this.grid[0][0],h=Phaser[t(214)][t(176)][t(174)](x,e,s.x,s.y);return this[t(184)][t(258)](i=>{const c=t;i[c(258)](o=>{const r=c,f=Phaser.Math[r(176)][r(174)](x,e,o.x,o.y);f<h&&(h=f,s=o)})}),s}spawnPresident(){const x=n;if(this[x(308)]<=0){this[x(206)][x(211)](x(207),{score:this.score,combo:this[x(208)]});return}const e=Math.floor(Math[x(263)]()*3),t=Math.floor(Math.random()*3),s=this[x(184)][e][t],h=60,i=h*this[x(270)],c=this[x(265)][x(242)](s.x,s.y,"president")[x(187)](i*.5,h*.5)[x(229)](x(225),this[x(173)][x(198)]);if(this.tweens.add({targets:c,scaleX:i/this.textures[x(238)](x(315))[x(178)][0].width,scaleY:h/this[x(255)][x(238)](x(315))[x(178)][0].height,duration:500,hold:300,yoyo:!0,repeat:0,onComplete:()=>{const o=x;c[o(243)]&&(this.miss(),c.destroy(),this[o(269)]())}}),this[x(310)][x(249)](this[x(289)]),this[x(260)]>0&&this[x(260)]%500===0){this[x(172)]=Math[x(216)](500,this[x(172)]-100);const o=this[x(172)];this.perfectHitStart=o*(500/1300),this.perfectHitEnd=this.perfectHitStart+o*(300/1300),console.log("Speed updated to "+this[x(172)]+x(275)+this.perfectHitStart+"-"+this[x(247)]+"ms")}}checkMicCollision(x){const e=n,t=new Phaser.Geom[e(274)](this[e(289)].x-this[e(289)][e(235)]/2,this[e(289)].y-this.mic[e(309)]/2,this[e(289)][e(235)],this[e(289)].displayHeight);let s=!1;this[e(310)][e(306)][e(258)](h=>{const i=e;if(h.texture&&h[i(262)][i(190)]===i(315)&&h[i(243)]){const c=new Phaser.Geom[i(274)](h.x-h[i(235)]/2,h.y-h.displayHeight/2,h.displayWidth,h[i(309)]);if(Phaser[i(221)][i(274)][i(209)](t,c)){const o=this.time[i(198)]-h.getData(i(225));console[i(244)]("Tap at ("+x.x+", "+x.y+i(256)+this[i(289)].x+", "+this[i(289)].y+i(169)+h.x+", "+h.y+i(230)+o+i(275)+this[i(213)]+"-"+this[i(247)]+"ms"),this[i(292)](o,h),s=!0}}}),!s&&(console[e(244)](e(280)+x.x+", "+x.y+e(256)+this.mic.x+", "+this.mic.y+")"),this[e(268)]())}[n(292)](x,e){const t=n;e.destroy();const s=this[t(252)][t(257)],h=this[t(252)][t(239)];if(x>=this[t(213)]&&x<=this[t(247)]){this[t(304)]++;const i=Math.min(5,Math[t(182)](this.perfectHitCount/5)+1);this[t(208)]=i,this[t(260)]+=100*this[t(208)],console.log(t(202)+this.perfectHitCount+t(234)+this.combo+t(196)+this[t(260)]),this[t(259)](s,h,t(171))}else this[t(304)]=0,this[t(208)]=1,this[t(260)]+=25,console[t(244)](t(301)+this[t(208)]+", Score: "+this[t(260)]),this[t(259)](s,h,t(200));this[t(173)].delayedCall(300,()=>{const i=t;this[i(259)](s,h,i(272))},[],this),this[t(186)](),this[t(269)]()}[n(268)](){const x=n;this[x(304)]=0,this[x(208)]=1,this[x(308)]--,console[x(244)](x(250)+this[x(208)]+x(278)+this[x(308)]);const e=this[x(252)].width,t=this[x(252)][x(239)];this.setBackground(e,t,"missed-hit"),this[x(173)][x(282)](300,()=>{const s=x;this[s(259)](e,t,s(272))},[],this),this[x(186)](),this[x(308)]<=0&&this[x(206)][x(211)](x(207),{score:this[x(260)],combo:this[x(208)]})}[n(186)](){const x=n,{width:e,height:t}=this[x(252)];this.elements[x(283)][x(300)]("Score: "+Math[x(182)](this.score)).setPosition(e*.025,t*.033),this.elements[x(296)][x(300)](x(232)+this[x(308)])[x(286)](e*.025,t*.083),this[x(297)].comboText[x(300)](x(180)+this[x(208)])[x(286)](e*.025,t*.133)}resize(x,e){this[n(290)](x,e)}[n(254)](){const x=n;this.mic&&(this[x(289)][x(222)](),this.mic=null),this[x(199)][x(218)](x(179)),this[x(199)][x(218)](x(313))}}class _ extends Phaser[n(314)]{constructor(){const x=n;super(x(207))}[n(266)](){const x=n;this[x(294)][x(242)](x(285),x(298))}[n(188)](x){const e=n;this.elements={},this[e(210)]=x,this[e(290)](this[e(252)][e(257)],this[e(252)][e(239)],x)}createLayout(x,e,t){const s=n;this[s(297)].bg&&this[s(297)].bg[s(222)](),this[s(297)][s(271)]&&this[s(297)][s(271)][s(222)](),this[s(297)][s(283)]&&this[s(297)][s(283)][s(222)](),this[s(297)][s(191)]&&this[s(297)][s(191)].destroy(),this.elements[s(245)]&&this.elements[s(245)][s(222)](),this[s(297)].homeButton&&this[s(297)][s(279)][s(222)](),this[s(297)][s(251)]&&this.elements[s(251)][s(222)]();const h=this.add[s(242)](x/2,e/2,s(285))[s(193)](.5),i=1920,c=1080,o=i/c,r=x/e;let f;r>o?f=e/c:f=x/i,h[s(276)](f),this[s(297)].bg=h,this[s(297)][s(271)]=this[s(265)][s(299)](x/2,e*.2,s(273),{fontSize:Math[s(248)](x,e)*.08+"px",color:"#000"}).setOrigin(.5),this[s(297)][s(283)]=this[s(265)][s(299)](x/2,e*.5,"Final Score: "+t[s(260)]+`
Highest Combo: x`+t.combo,{fontSize:Math.min(x,e)*.06+"px",color:s(241),align:s(295)})[s(193)](.5);const l=x*.25,p=e*.13;this[s(297)][s(191)]=this.add[s(307)](x/2,e*.75,l,p,65280)[s(175)]().on(s(313),()=>this[s(206)].start(s(311))),this[s(297)].retryText=this.add[s(299)](x/2,e*.75,s(302),{fontSize:Math.min(x,e)*.06+"px",color:s(241)}).setOrigin(.5),this.elements[s(279)]=this[s(265)][s(307)](x/2,e*.9,l,p,16711680)[s(175)]().on("pointerdown",()=>this[s(206)][s(211)]("HomeScene")),this[s(297)][s(251)]=this[s(265)].text(x/2,e*.9,"Home",{fontSize:Math.min(x,e)*.06+"px",color:s(241)})[s(193)](.5)}[n(303)](x,e){this[n(290)](x,e,this.scoreData)}}const d=b;(function(a,x){const e=b,t=a();for(;;)try{if(parseInt(e(414))/1*(-parseInt(e(409))/2)+-parseInt(e(411))/3+parseInt(e(407))/4*(parseInt(e(400))/5)+parseInt(e(422))/6*(parseInt(e(415))/7)+-parseInt(e(416))/8*(parseInt(e(412))/9)+-parseInt(e(397))/10+parseInt(e(406))/11*(parseInt(e(398))/12)===x)break;t.push(t.shift())}catch{t.push(t.shift())}})(S,853433);function b(a,x){const e=S();return b=function(t,s){return t=t-397,e[t]},b(a,x)}const v={type:Phaser.AUTO,width:Math.min(window[d(418)],800),height:Math[d(419)](window[d(408)],600),parent:d(405),scene:[T,P,_],physics:{default:d(420),arcade:{debug:!1}},scale:{mode:Phaser[d(413)][d(402)],autoCenter:Phaser[d(413)].CENTER_BOTH}},I=new Phaser[d(417)](v);function w(){const a=d,x=Math[a(419)](window.innerWidth,800),e=Math[a(419)](window[a(408)],600);I[a(410)][a(399)](x,e),I[a(423)][a(421)](!0)[a(403)](t=>{const s=a;t[s(399)]&&t[s(399)](x,e)})}let M;function S(){const a=["156DBIluY","resize","4560ZMNMOs","orientationchange","RESIZE","forEach","addEventListener","game-container","2737207OWoWPV","6224ADxBQV","innerHeight","418242GYcVlb","scale","3126393VxmCYc","9sJcotW","Scale","8gIhtTf","64197kJKraV","4412696AiLYSI","Game","innerWidth","min","arcade","getScenes","204WXXXcn","scene","8456480dCmQwd"];return S=function(){return a},S()}function z(){clearTimeout(M),M=setTimeout(w,100)}window.addEventListener(d(399),z),window[d(404)](d(401),w),w();
