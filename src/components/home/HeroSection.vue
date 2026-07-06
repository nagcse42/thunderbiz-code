<template>
  <section
    ref="heroRef"
    class="relative min-h-screen flex items-center overflow-hidden pt-[68px]"
    style="background: #030510;"
    aria-label="Hero section"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <!-- Depth particle canvas -->
    <canvas ref="canvasRef" class="absolute inset-0 pointer-events-none" aria-hidden="true"></canvas>

    <!-- Horizontal scan lines overlay -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background: repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(96,200,255,0.022) 18px, rgba(96,200,255,0.022) 19px);">
    </div>

    <!-- Radial blue-gold ambient -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background: radial-gradient(ellipse at 70% 50%, rgba(60,120,220,0.09) 0%, transparent 55%), radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.05) 0%, transparent 50%);">
    </div>

    <!-- Bottom fade -->
    <div class="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" aria-hidden="true"
         style="background: linear-gradient(to top, #030510, transparent)"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full py-8 lg:py-12 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        <!-- ── Left: text ── -->
        <div>
          <!-- Badge -->
          <div ref="badgeRef" class="inline-flex items-center gap-2.5 mb-8 opacity-0">
            <div class="flex items-center gap-2 rounded-full px-4 py-1.5"
                 style="background: rgba(96,200,255,0.06); border: 1px solid rgba(96,200,255,0.25);" role="text">
              <span class="w-1.5 h-1.5 rounded-full" style="background:#60C8FF; animation: pulseDot 1.8s ease-in-out infinite" aria-hidden="true"></span>
              <span class="text-[10px] tracking-[0.14em] uppercase font-semibold" style="color:#60C8FF;">UAE&#39;s #1 Premium Business Setup Partner</span>
            </div>
          </div>

          <!-- Headline -->
          <h1 ref="headlineRef" class="font-serif text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] mb-6 opacity-0">
            Launch Your UAE<br />
            Business <span class="gold-text">With Confidence.</span>
          </h1>

          <p ref="subRef" class="text-[15px] leading-[1.85] max-w-[460px] mb-10 opacity-0" style="color:#A8B8CC;">
            Premium company formation, Golden Visa, corporate banking, VAT compliance, and PRO services &#8212; all under one elite roof in Dubai.
          </p>

          <!-- Buttons -->
          <div ref="btnsRef" class="flex flex-wrap gap-4 mb-14 opacity-0">
            <RouterLink to="/contact" class="btn-gold-primary btn-sheen inline-flex items-center gap-2.5 text-[12px] px-7 py-3.5 rounded-lg" aria-label="Start setting up your UAE business">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L4.09 12.97a1 1 0 0 0 .91 1.03H11v8l8.91-10.97A1 1 0 0 0 19 9H13z"/></svg>
              Start Your Business
            </RouterLink>
            <RouterLink to="/contact" class="inline-flex items-center gap-2.5 text-[12px] px-7 py-3.5 rounded-lg" style="background:transparent; color:#60C8FF; border:1px solid rgba(96,200,255,0.35); font-weight:600; letter-spacing:0.06em; text-transform:uppercase; transition:all 0.25s ease;" aria-label="Book a free consultation">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Book Free Consultation
            </RouterLink>
          </div>

          <!-- Stats -->
          <div ref="statsRef" class="grid grid-cols-2 sm:grid-cols-4 gap-3 opacity-0">
            <div v-for="(stat, i) in stats" :key="stat.label"
                 class="rounded-xl px-3 py-3.5 text-center stat-card-3d"
                 style="background: rgba(255,255,255,0.02); border: 1px solid rgba(96,200,255,0.12);"
                 :style="`animation: statFlip3d 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1+i*0.12}s both`">
              <div class="font-serif text-2xl font-extrabold mb-1 gold-gradient">{{ stat.value }}</div>
              <div class="text-[9px] tracking-wide uppercase" style="color:#6080A0;">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- ── Right: Holographic HUD ── -->
        <div ref="visualRef" class="relative opacity-0 flex items-center justify-center">
          <div class="hud-panel relative w-full"
               style="aspect-ratio:1/0.85; max-width:620px; margin:0 auto; margin-top:-40px;"
               :style="parallaxStyle">

            <!-- Panel background -->
            <div class="absolute inset-0 rounded-2xl overflow-hidden"
                 style="background: rgba(4,6,20,0.85); border:1px solid rgba(96,200,255,0.15);">
              <!-- Top edge glow -->
              <div class="absolute top-0 left-[8%] right-[8%] h-px"
                   style="background: linear-gradient(90deg, transparent, rgba(96,200,255,0.6), transparent)" aria-hidden="true"></div>
              <!-- Sweep scan line -->
              <div class="hud-sweep absolute inset-0 pointer-events-none" aria-hidden="true"></div>
            </div>

            <!-- Corner HUD brackets -->
            <div class="hud-corner" style="top:12px;left:12px;border-width:2px 0 0 2px;" aria-hidden="true"></div>
            <div class="hud-corner" style="top:12px;right:12px;border-width:2px 2px 0 0;" aria-hidden="true"></div>
            <div class="hud-corner" style="bottom:12px;left:12px;border-width:0 0 2px 2px;" aria-hidden="true"></div>
            <div class="hud-corner" style="bottom:12px;right:12px;border-width:0 2px 2px 0;" aria-hidden="true"></div>

            <!-- System label top-left -->
            <div class="absolute top-5 left-6 font-mono text-[10px] leading-relaxed" style="color:rgba(96,200,255,0.55);" aria-hidden="true">
              TBS-SYS v3.1<br/>
              <span style="color:rgba(212,175,55,0.6);">STATUS: ONLINE</span>
            </div>

            <!-- Live indicator top-right -->
            <div class="absolute top-5 right-6 flex items-center gap-2" aria-hidden="true">
              <span class="w-1.5 h-1.5 rounded-full" style="background:#60C8FF; animation:pulseDot 1.4s ease-in-out infinite"></span>
              <span class="font-mono text-[11px]" style="color:rgba(96,200,255,0.7);">ACTIVE</span>
            </div>

            <!-- Coordinate bottom-left -->
            <div class="absolute bottom-5 left-6 font-mono text-[9px]" style="color:rgba(96,200,255,0.4);" aria-hidden="true">
              LAT: 25.2°N &nbsp; LON: 55.3°E<br/>
              <span style="color:rgba(212,175,55,0.45);">DUBAI, UNITED ARAB EMIRATES</span>
            </div>

            <!-- Application counter bottom-right -->
            <div class="absolute bottom-5 right-6 text-right font-mono text-[9px]" style="color:rgba(96,200,255,0.4);" aria-hidden="true">
              <span style="color:rgba(212,175,55,0.6);">2,400+</span> BUSINESSES<br/>
              SUCCESSFULLY FORMED
            </div>

            <!-- ── Central HUD reticle ── -->
            <div class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <div class="hud-reticle relative" style="width:240px;height:240px;">

                <!-- Outer dashed ring (slow CW) -->
                <svg class="absolute inset-0 hud-ring-1" width="240" height="240" viewBox="0 0 240 240">
                  <circle cx="120" cy="120" r="114" fill="none" stroke="rgba(212,175,55,0.25)" stroke-width="1" stroke-dasharray="8 5"/>
                </svg>

                <!-- Mid ring (medium CCW) -->
                <svg class="absolute inset-0 hud-ring-2" width="240" height="240" viewBox="0 0 240 240">
                  <circle cx="120" cy="120" r="90" fill="none" stroke="rgba(96,200,255,0.2)" stroke-width="0.8" stroke-dasharray="5 8"/>
                  <circle cx="120" cy="120" r="90" fill="none" stroke="rgba(96,200,255,0.08)" stroke-width="6"/>
                </svg>

                <!-- Inner ring (fast CW, solid segments) -->
                <svg class="absolute inset-0 hud-ring-3" width="240" height="240" viewBox="0 0 240 240">
                  <circle cx="120" cy="120" r="68" fill="none" stroke="rgba(212,175,55,0.45)" stroke-width="1.2" stroke-dasharray="30 10"/>
                </svg>

                <!-- Cross hairs -->
                <svg class="absolute inset-0" width="240" height="240" viewBox="0 0 240 240">
                  <line x1="120" y1="0" x2="120" y2="240" stroke="rgba(96,200,255,0.1)" stroke-width="0.6"/>
                  <line x1="0" y1="120" x2="240" y2="120" stroke="rgba(96,200,255,0.1)" stroke-width="0.6"/>
                  <!-- Short tick marks -->
                  <line x1="120" y1="10" x2="120" y2="22" stroke="rgba(212,175,55,0.5)" stroke-width="1"/>
                  <line x1="120" y1="218" x2="120" y2="230" stroke="rgba(212,175,55,0.5)" stroke-width="1"/>
                  <line x1="10" y1="120" x2="22" y2="120" stroke="rgba(212,175,55,0.5)" stroke-width="1"/>
                  <line x1="218" y1="120" x2="230" y2="120" stroke="rgba(212,175,55,0.5)" stroke-width="1"/>
                </svg>

                <!-- Core orb -->
                <div class="absolute" style="top:50%;left:50%;transform:translate(-50%,-50%);">
                  <!-- Pulse rings -->
                  <div class="hud-pulse-ring" style="width:52px;height:52px;border:1px solid rgba(212,175,55,0.3);border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);animation:hudPulse 2.5s ease-out infinite;"></div>
                  <div class="hud-pulse-ring" style="width:52px;height:52px;border:1px solid rgba(212,175,55,0.2);border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);animation:hudPulse 2.5s ease-out infinite 0.8s;"></div>
                  <!-- Core -->
                  <div style="width:40px;height:40px;border-radius:50%;background:radial-gradient(circle,rgba(212,175,55,0.5),rgba(212,175,55,0.12));border:1.5px solid rgba(212,175,55,0.8);display:flex;align-items:center;justify-content:center;">
                    <div style="width:14px;height:14px;border-radius:50%;background:rgba(212,175,55,0.9);"></div>
                  </div>
                </div>

                <!-- Orbiting service nodes -->
                <!-- Node: MAINLAND (right) -->
                <div class="hud-node" style="top:50%;right:-2px;transform:translateY(-50%);">
                  <div class="hud-node-dot" style="background:rgba(212,175,55,0.15);border-color:rgba(212,175,55,0.6);"></div>
                  <div class="hud-node-line" style="left:100%;width:28px;background:rgba(212,175,55,0.35);"></div>
                  <div class="hud-node-card" style="left:calc(100% + 30px);">
                    <div style="font-size:9px;color:rgba(212,175,55,0.6);letter-spacing:0.1em;margin-bottom:2px;">DED · DDA · ADDED</div>
                    <div style="font-size:13px;color:#D4AF37;font-weight:700;">Mainland</div>
                    <div style="font-size:9px;color:rgba(255,255,255,0.4);margin-top:1px;">Commercial · Professional · Industrial</div>
                  </div>
                </div>

                <!-- Node: FREE ZONE (top-right) -->
                <div class="hud-node" style="top:18%;right:18%;transform:translate(50%,-50%);">
                  <div class="hud-node-dot" style="background:rgba(96,200,255,0.15);border-color:rgba(96,200,255,0.6);"></div>
                  <div class="hud-node-card" style="top:-46px;left:50%;transform:translateX(-50%);white-space:nowrap;">
                    <div style="font-size:9px;color:rgba(96,200,255,0.6);letter-spacing:0.1em;margin-bottom:2px;">DMCC · DIFC · DAFZA · JAFZA · IFZA</div>
                    <div style="font-size:13px;color:#60C8FF;font-weight:700;">Free Zone</div>
                    <div style="font-size:9px;color:rgba(255,255,255,0.4);margin-top:1px;">45+ Authorities · 0% Tax</div>
                  </div>
                </div>

                <!-- Node: GOLDEN VISA (top-left) -->
                <div class="hud-node" style="top:18%;left:18%;transform:translate(-50%,-50%);">
                  <div class="hud-node-dot" style="background:rgba(212,175,55,0.15);border-color:rgba(212,175,55,0.55);"></div>
                  <div class="hud-node-card" style="top:-36px;right:50%;transform:translateX(50%);white-space:nowrap;">
                    <div style="font-size:9px;color:rgba(212,175,55,0.6);letter-spacing:0.1em;margin-bottom:2px;">ICP</div>
                    <div style="font-size:13px;color:#D4AF37;font-weight:700;">Golden Visa</div>
                    <div style="font-size:9px;color:rgba(255,255,255,0.4);margin-top:1px;">10 Year Residency</div>
                  </div>
                </div>

                <!-- Node: OFFSHORE (left) -->
                <div class="hud-node" style="top:50%;left:-2px;transform:translateY(-50%);">
                  <div class="hud-node-dot" style="background:rgba(96,200,255,0.15);border-color:rgba(96,200,255,0.5);"></div>
                  <div class="hud-node-line" style="right:100%;width:28px;background:rgba(96,200,255,0.3);"></div>
                  <div class="hud-node-card" style="right:calc(100% + 30px);text-align:right;">
                    <div style="font-size:9px;color:rgba(96,200,255,0.6);letter-spacing:0.1em;margin-bottom:2px;">RAK ICC · JAFZA · ADGM · DIFC</div>
                    <div style="font-size:13px;color:#60C8FF;font-weight:700;">Offshore</div>
                    <div style="font-size:9px;color:rgba(255,255,255,0.4);margin-top:1px;">Asset Protection · Privacy</div>
                  </div>
                </div>

                <!-- Node: BUSINESS BANKING (bottom-right) -->
                <div class="hud-node" style="bottom:18%;right:18%;transform:translate(50%,50%);">
                  <div class="hud-node-dot" style="background:rgba(34,197,94,0.15);border-color:rgba(34,197,94,0.6);"></div>
                  <div class="hud-node-card" style="bottom:-46px;left:50%;transform:translateX(-50%);white-space:nowrap;">
                    <div style="font-size:9px;color:rgba(34,197,94,0.7);letter-spacing:0.1em;margin-bottom:2px;">ENBD · FAB · ADCB · RAKBANK</div>
                    <div style="font-size:13px;color:#22C55E;font-weight:700;">Business Banking</div>
                    <div style="font-size:9px;color:rgba(255,255,255,0.4);margin-top:1px;">Multi-Currency · Corporate Account</div>
                  </div>
                </div>

                <!-- Node: PRO SERVICES (bottom-left) -->
                <div class="hud-node" style="bottom:18%;left:18%;transform:translate(-50%,50%);">
                  <div class="hud-node-dot" style="background:rgba(212,175,55,0.15);border-color:rgba(212,175,55,0.5);"></div>
                  <div class="hud-node-card" style="bottom:-36px;right:50%;transform:translateX(50%);white-space:nowrap;">
                    <div style="font-size:9px;color:rgba(212,175,55,0.6);letter-spacing:0.1em;margin-bottom:2px;">GOVT</div>
                    <div style="font-size:13px;color:#D4AF37;font-weight:700;">PRO Services</div>
                    <div style="font-size:9px;color:rgba(255,255,255,0.4);margin-top:1px;">Visa & Permits</div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Progress arc: 98% approval -->
            <div class="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 font-mono" aria-hidden="true">
              <svg width="54" height="30" viewBox="0 0 54 30">
                <path d="M4 28 A23 23 0 0 1 50 28" fill="none" stroke="rgba(96,200,255,0.12)" stroke-width="3" stroke-linecap="round"/>
                <path d="M4 28 A23 23 0 0 1 50 28" fill="none" stroke="rgba(212,175,55,0.7)" stroke-width="3" stroke-linecap="round" stroke-dasharray="71.6 73.1"/>
              </svg>
              <span style="font-size:10px;color:rgba(212,175,55,0.7);margin-top:-6px;">98% APPROVAL</span>
            </div>

          </div>
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style="opacity:0.55;" aria-hidden="true">
      <span class="font-mono text-[8px] tracking-[0.25em] uppercase" style="color:rgba(96,200,255,0.7);">SCROLL</span>
      <div class="relative flex flex-col items-center gap-0">
        <div style="width:1px;height:28px;background:linear-gradient(to bottom,rgba(96,200,255,0.5),transparent);"></div>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style="margin-top:-1px;">
          <path d="M1 1L5 5L9 1" stroke="rgba(96,200,255,0.6)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const heroRef     = ref<HTMLElement>()
const canvasRef   = ref<HTMLCanvasElement>()
const badgeRef    = ref<HTMLElement>()
const headlineRef = ref<HTMLElement>()
const subRef      = ref<HTMLElement>()
const btnsRef     = ref<HTMLElement>()
const statsRef    = ref<HTMLElement>()
const visualRef   = ref<HTMLElement>()

const mouseX = ref(0)
const mouseY = ref(0)

const parallaxStyle = computed(() => {
  const rx = (mouseY.value * 4).toFixed(2)
  const ry = (-mouseX.value * 7).toFixed(2)
  return `transform: perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg); transition: transform 0.15s ease-out;`
})

function onMouseMove(e: MouseEvent) {
  const rect = heroRef.value!.getBoundingClientRect()
  mouseX.value = (e.clientX - rect.left) / rect.width - 0.5
  mouseY.value = (e.clientY - rect.top) / rect.height - 0.5
}
function onMouseLeave() { mouseX.value = 0; mouseY.value = 0 }

const stats = [
  { value: '2,400+', label: 'Businesses Formed' },
  { value: '98%',    label: 'Approval Rate' },
  { value: '48 Hrs', label: 'Avg Processing' },
  { value: '8 Yrs',  label: 'Dubai Experience' },
]

// ── Particle field (blue-gold mix) ──────────────────────────────────────────
interface Particle { x:number;y:number;z:number;vx:number;vy:number;vz:number;size:number;alpha:number;color:string }
let particles: Particle[] = []
let animFrame = 0
let ctx: CanvasRenderingContext2D | null = null

function initCanvas() {
  const canvas = canvasRef.value!
  ctx = canvas.getContext('2d')!
  const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
  resize()
  window.addEventListener('resize', resize)

  const colors = ['rgba(96,200,255,','rgba(212,175,55,','rgba(140,180,255,']
  const mk = (rnd=false): Particle => ({
    x:(Math.random()-0.5)*1800, y:(Math.random()-0.5)*1200,
    z:rnd?Math.random()*800:800,
    vx:(Math.random()-0.5)*0.12, vy:(Math.random()-0.5)*0.12,
    vz:-(0.25+Math.random()*0.45),
    size:0.6+Math.random()*2, alpha:0.15+Math.random()*0.55,
    color:colors[Math.floor(Math.random()*colors.length)]
  })

  const count = Math.min(110, Math.floor(window.innerWidth/13))
  particles = Array.from({length:count},()=>mk(true))

  const draw = () => {
    animFrame = requestAnimationFrame(draw)
    ctx!.clearRect(0,0,canvas.width,canvas.height)
    const cx=canvas.width/2, cy=canvas.height/2, fl=420
    particles.sort((a,b)=>b.z-a.z)
    for (const p of particles) {
      p.x+=p.vx+mouseX.value*0.3; p.y+=p.vy+mouseY.value*0.3; p.z+=p.vz
      if(p.z<=1){Object.assign(p,mk());p.z=800;continue}
      const sc=fl/p.z, sx=cx+p.x*sc, sy=cy+p.y*sc, sz=p.size*sc*2.5
      if(sx<-10||sx>canvas.width+10||sy<-10||sy>canvas.height+10){p.x=(Math.random()-0.5)*1800;p.y=(Math.random()-0.5)*1200;continue}
      const da=(1-p.z/800)*p.alpha
      ctx!.beginPath(); ctx!.arc(sx,sy,Math.max(0.3,sz),0,Math.PI*2)
      ctx!.fillStyle=p.color+da.toFixed(3)+')'; ctx!.fill()
      if(p.z<180){ctx!.beginPath();ctx!.arc(sx,sy,sz*2.2,0,Math.PI*2);ctx!.fillStyle=p.color+(da*0.12).toFixed(3)+')';ctx!.fill()}
    }
  }
  draw()
}

onMounted(() => {
  initCanvas()
  gsap.set([badgeRef.value,headlineRef.value,subRef.value,btnsRef.value],{y:28})
  gsap.set(visualRef.value,{y:40})
  const tl = gsap.timeline({defaults:{ease:'power3.out'}})
  tl.to(badgeRef.value,    {opacity:1,y:0,duration:0.7,delay:0.2})
    .to(headlineRef.value, {opacity:1,y:0,duration:0.8},'-=0.4')
    .to(subRef.value,      {opacity:1,y:0,duration:0.7},'-=0.5')
    .to(btnsRef.value,     {opacity:1,y:0,duration:0.6},'-=0.4')
    .to(statsRef.value,    {opacity:1,duration:0.5},'-=0.3')
    .to(visualRef.value,   {opacity:1,y:0,duration:1.0},'-=0.7')
})
onUnmounted(()=>{cancelAnimationFrame(animFrame)})
</script>

<style scoped>
/* ── HUD Panel ─────────────────────────────── */
.hud-corner {
  position: absolute;
  width: 22px; height: 22px;
  border-color: rgba(96,200,255,0.55);
  border-style: solid;
  border-radius: 0;
}

.hud-sweep {
  background: linear-gradient(90deg, transparent 0%, rgba(96,200,255,0.04) 50%, transparent 100%);
  animation: hudSweep 4s ease-in-out infinite;
}

@keyframes hudSweep {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}

/* ── Rings ────────────────────────────────── */
.hud-ring-1 { animation: hudCW  14s linear infinite; transform-origin: center; }
.hud-ring-2 { animation: hudCCW 20s linear infinite; transform-origin: center; }
.hud-ring-3 { animation: hudCW   7s linear infinite; transform-origin: center; }

@keyframes hudCW  { to { transform: rotate(360deg);  } }
@keyframes hudCCW { to { transform: rotate(-360deg); } }

/* ── Core pulse ───────────────────────────── */
@keyframes hudPulse {
  0%   { transform: translate(-50%,-50%) scale(1);   opacity: 0.8; }
  100% { transform: translate(-50%,-50%) scale(2.6); opacity: 0; }
}

/* ── Nodes ────────────────────────────────── */
.hud-node { position: absolute; display: flex; align-items: center; }
.hud-node-dot {
  width: 10px; height: 10px; border-radius: 50%;
  border: 1.5px solid; flex-shrink: 0;
  animation: pulseDot 2s ease-in-out infinite;
}
.hud-node-line {
  position: absolute; height: 1px; opacity: 0.6;
}
.hud-node-card {
  position: absolute;
  background: rgba(4,8,24,0.88);
  border: 1px solid rgba(96,200,255,0.18);
  border-radius: 6px;
  padding: 5px 8px;
  font-family: 'Outfit', sans-serif;
}

/* ── Stat flip ────────────────────────────── */
.stat-card-3d { transform-origin: center bottom; transform-style: preserve-3d; }
@keyframes statFlip3d {
  from { opacity:0; transform: perspective(600px) rotateX(-60deg) translateY(20px); }
  to   { opacity:1; transform: perspective(600px) rotateX(0deg) translateY(0); }
}
</style>