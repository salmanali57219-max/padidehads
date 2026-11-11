// هیرو تعاملی: اشیای فناوری شناور؛ با کلیک به سمت نقطه کلیک جذب و سپس پخش می‌شوند
(()=>{const c=document.getElementById("fx"),x=c.getContext("2d");let W,H,D=Math.min(devicePixelRatio,2),T=null,tt=0,m={x:.5,y:.5};
const S=[],N=innerWidth<700?22:42;
const rs=()=>{W=c.width=c.offsetWidth*D;H=c.height=c.offsetHeight*D};rs();addEventListener("resize",rs);
for(let i=0;i<N;i++)S.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4*D,vy:(Math.random()-.5)*.4*D,s:(10+Math.random()*22)*D,r:Math.random()*6,vr:(Math.random()-.5)*.02,k:i%3,z:.4+Math.random()*.9});
const shape=o=>{x.save();x.translate(o.x+(m.x-.5)*40*o.z*D,o.y+(m.y-.5)*40*o.z*D);x.rotate(o.r);x.strokeStyle=o.k==1?"rgba(139,92,246,.9)":"rgba(34,211,238,.9)";x.lineWidth=1.3*D;x.globalAlpha=.35+o.z*.4;const s=o.s*o.z;
if(o.k==0){x.strokeRect(-s/2,-s/2,s,s);x.strokeRect(-s/4,-s/4,s,s)}else if(o.k==1){x.beginPath();for(let i=0;i<6;i++)x.lineTo(Math.cos(i*1.047)*s*.6,Math.sin(i*1.047)*s*.6);x.closePath();x.stroke()}else{x.beginPath();x.arc(0,0,s*.35,0,7);x.stroke();x.fillStyle="#22d3ee";x.fillRect(-1,-1,3*D,3*D)}x.restore()};
const loop=()=>{x.clearRect(0,0,W,H);if(T){tt--;if(tt<=0)T=null}
for(const o of S){if(T){const dx=T.x-o.x,dy=T.y-o.y,d=Math.hypot(dx,dy)||1;if(tt>40){o.vx+=dx/d*.35*D;o.vy+=dy/d*.35*D}else{o.vx-=dx/d*.9*D;o.vy-=dy/d*.9*D}}
o.vx*=.985;o.vy*=.985;o.x+=o.vx;o.y+=o.vy;o.r+=o.vr;if(o.x<-60)o.x=W+60;if(o.x>W+60)o.x=-60;if(o.y<-60)o.y=H+60;if(o.y>H+60)o.y=-60;shape(o)}
for(let i=0;i<S.length;i++)for(let j=i+1;j<S.length;j++){const d=Math.hypot(S[i].x-S[j].x,S[i].y-S[j].y);if(d<130*D){x.globalAlpha=(1-d/(130*D))*.25;x.strokeStyle="#22d3ee";x.beginPath();x.moveTo(S[i].x,S[i].y);x.lineTo(S[j].x,S[j].y);x.stroke()}}
if(T){x.globalAlpha=tt/60;x.strokeStyle="#8b5cf6";x.beginPath();x.arc(T.x,T.y,(60-tt)*4*D,0,7);x.stroke()}
if(!matchMedia("(prefers-reduced-motion:reduce)").matches)requestAnimationFrame(loop)};loop();
const h=document.querySelector(".hero");
h.addEventListener("pointermove",e=>{const b=c.getBoundingClientRect();m.x=(e.clientX-b.left)/b.width;m.y=(e.clientY-b.top)/b.height});
h.addEventListener("pointerdown",e=>{if(e.target.closest("a"))return;const b=c.getBoundingClientRect();T={x:(e.clientX-b.left)*D,y:(e.clientY-b.top)*D};tt=60});})();
