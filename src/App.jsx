import { useEffect, useState } from 'react';
import { ArrowRight, BarChart3, Bot, Check, ChevronDown, Menu, MousePointer2, Play, Search, Sparkles, Target, X, Zap } from 'lucide-react';

const services = [
  { icon: Search, title: 'Demand discovery', text: 'Find the questions, channels, and moments that move the right buyers.' },
  { icon: Target, title: 'Campaign systems', text: 'Turn strategy into measurable campaigns with a clear learning loop.' },
  { icon: Bot, title: 'Practical automation', text: 'Automate the busywork while keeping the customer experience human.' },
  { icon: BarChart3, title: 'Decision dashboards', text: 'Give every team one clear view of what is working and what comes next.' },
];

const solutions = [
  { key: 'Signal', title: 'See the market clearly', text: 'Connect customer research, search intent, and campaign data into a shared opportunity map.', stat: '2.4×', label: 'faster insight cycles' },
  { key: 'Flow', title: 'Build journeys that convert', text: 'Shape an end-to-end path from first touch to qualified conversation, without a maze of tools.', stat: '31%', label: 'less funnel friction' },
  { key: 'Orbit AI', title: 'Scale the thoughtful work', text: 'Use responsible AI assistants to draft, sort, enrich, and route work—with your team in control.', stat: '12h', label: 'saved per team weekly' },
];

const cases = [
  { tag: 'B2B SaaS', title: 'From scattered launches to one repeatable growth rhythm', metric: '+48%', caption: 'qualified pipeline', color: 'violet' },
  { tag: 'Local services', title: 'A simpler customer journey across five locations', metric: '3.1×', caption: 'booking conversion', color: 'lime' },
  { tag: 'Education', title: 'Turning expert knowledge into an always-on demand engine', metric: '-37%', caption: 'cost per lead', color: 'blue' },
];

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [sent, setSent] = useState(false);
  useEffect(() => { const fn = () => setMenu(false); window.addEventListener('resize', fn); return () => window.removeEventListener('resize', fn); }, []);
  return <div>
    <header className="nav-wrap"><nav className="nav container">
      <a className="brand" href="#top" aria-label="Orbit home"><span className="brand-mark"><span /></span>orbit<span>studio</span></a>
      <div className={menu ? 'nav-links open' : 'nav-links'}>
        <a href="#services">Services</a><a href="#approach">Approach</a><a href="#work">Work</a><a href="#about">About</a>
        <a className="button small" href="#contact">Start a project <ArrowRight size={16}/></a>
      </div>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X/> : <Menu/>}</button>
    </nav></header>

    <main id="top">
      <section className="hero"><div className="glow g1"/><div className="glow g2"/><div className="container hero-grid">
        <div className="hero-copy reveal"><div className="eyebrow"><Sparkles size={15}/> Strategy, systems & creative</div>
          <h1>Turn good ideas into <em>lasting momentum.</em></h1>
          <p>We help ambitious teams find their signal, build smarter customer journeys, and grow with less guesswork.</p>
          <div className="hero-actions"><a href="#contact" className="button">Plan your next move <ArrowRight size={18}/></a><a href="#work" className="text-link"><span className="play"><Play size={14} fill="currentColor"/></span> See how we work</a></div>
          <div className="trust"><div className="avatars"><i>AK</i><i>JM</i><i>RL</i><i>+8</i></div><p><strong>4.9 / 5</strong><br/>from growth-minded teams</p></div>
        </div>
        <div className="hero-art" aria-label="Abstract growth dashboard illustration">
          <div className="orbit o1"/><div className="orbit o2"/><div className="planet"><Sparkles size={26}/></div>
          <div className="dash-card main-card"><div className="card-head"><span>Growth pulse</span><span className="live">● LIVE</span></div><strong>+42.8%</strong><small>Momentum score</small><div className="chart"><i/><i/><i/><i/><i/><i/><i/></div></div>
          <div className="dash-card mini-card"><Zap size={18}/><div><strong>18 wins</strong><small>this month</small></div></div>
          <div className="cursor"><MousePointer2 fill="currentColor"/><span>you are here</span></div>
        </div>
      </div></section>

      <section className="ticker"><div className="container"><span>Trusted to untangle growth for</span><div className="logo-row"><b>FABLE</b><b>Northstar</b><b>kindred°</b><b>APERTURE</b><b>morrow</b></div></div></section>

      <section className="section" id="services"><div className="container"><div className="section-intro"><div><span className="kicker">What we do</span><h2>One partner for the whole <em>growth loop.</em></h2></div><p>Strategy is only useful when it travels. We connect insight, creative, technology, and measurement so every effort builds on the last.</p></div>
        <div className="service-grid">{services.map(({icon:Icon,title,text}, i)=><article className="service" key={title}><span className="number">0{i+1}</span><div className="service-icon"><Icon/></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn about ${title}`}><ArrowRight/></a></article>)}</div>
      </div></section>

      <section className="section dark" id="approach"><div className="container solution-grid"><div className="solution-copy"><span className="kicker light">Our operating system</span><h2>Clarity in.<br/><em>Momentum out.</em></h2><p>Pick a starting point. Each layer is useful alone—and stronger when connected.</p><div className="tabs">{solutions.map((s,i)=><button key={s.key} onClick={()=>setActive(i)} className={active===i?'active':''}><span>0{i+1}</span>{s.key}<ChevronDown size={16}/></button>)}</div></div>
        <div className="solution-panel"><div className="panel-top"><span>ORBIT / {solutions[active].key.toUpperCase()}</span><Sparkles/></div><div className="constellation"><i/><i/><i/><i/><span/></div><div className="panel-content"><h3>{solutions[active].title}</h3><p>{solutions[active].text}</p><div className="big-stat"><strong>{solutions[active].stat}</strong><span>{solutions[active].label}</span></div></div></div>
      </div></section>

      <section className="section work" id="work"><div className="container"><span className="kicker">Selected work</span><div className="work-head"><h2>Proof lives in the <em>outcome.</em></h2><a href="#contact" className="text-link">Build your case study <ArrowRight size={17}/></a></div><div className="case-grid">{cases.map(c=><article className={`case ${c.color}`} key={c.title}><div className="case-visual"><span className="case-tag">{c.tag}</span><div className="metric"><strong>{c.metric}</strong><span>{c.caption}</span></div><div className="shape s1"/><div className="shape s2"/></div><h3>{c.title}</h3><a href="#contact">View the thinking <ArrowRight size={16}/></a></article>)}</div></div></section>

      <section className="quote section" id="about"><div className="container quote-grid"><div><span className="quote-mark">“</span><blockquote>Orbit brought structure to a messy challenge. We left with a sharper story, a better system, and a team that knew exactly what to do next.</blockquote><div className="person"><span>MC</span><div><strong>Maya Chen</strong><small>COO, fictional client</small></div></div></div><div className="principles"><span className="kicker">How we partner</span><h2>Small team.<br/>Serious <em>range.</em></h2><ul><li><Check/> Senior specialists, hands-on</li><li><Check/> Weekly progress you can see</li><li><Check/> Systems your team can own</li></ul></div></div></section>

      <section className="cta" id="contact"><div className="container cta-grid"><div><span className="kicker light">Your next chapter</span><h2>Ready to build<br/><em>some momentum?</em></h2><p>Tell us what feels stuck. We’ll respond with a useful next step—no sprawling pitch deck required.</p></div><form onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent?<div className="success"><span><Check/></span><h3>Message received.</h3><p>This demo form works. Connect a form service before launch to receive submissions.</p><button type="button" onClick={()=>setSent(false)} className="text-link">Send another</button></div>:<><label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@company.com"/></label><label>What are you building?<textarea required placeholder="A quick note about the opportunity..."/></label><button className="button lime" type="submit">Send the signal <ArrowRight size={18}/></button></>}</form></div></section>
    </main>
    <footer><div className="container footer-grid"><div><a className="brand inverse" href="#top"><span className="brand-mark"><span/></span>orbit<span>studio</span></a><p>Strategy and systems for useful, durable growth.</p></div><div><b>Explore</b><a href="#services">Services</a><a href="#approach">Approach</a><a href="#work">Work</a></div><div><b>Connect</b><a href="mailto:hello@example.com">Email</a><a href="#contact">Start a project</a><a href="#top">Back to top</a></div></div><div className="container footer-bottom"><span>© 2026 Orbit Studio. Fictional demo brand.</span><span>Original design • Built with React</span></div></footer>
  </div>
}

export default App;
