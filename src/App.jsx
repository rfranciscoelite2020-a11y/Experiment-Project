import { useEffect, useState } from 'react';
import { ArrowRight, BarChart3, Bot, Check, ChevronDown, Menu, MousePointer2, Play, Search, Sparkles, Target, X, Zap } from 'lucide-react';

const services = [
  { icon: Target, title: 'GHL architecture', text: 'Structured accounts, pipelines, calendars and permissions built to scale.' },
  { icon: MousePointer2, title: 'Funnels & websites', text: 'Responsive conversion journeys with forms, calendars and mobile QA.' },
  { icon: Bot, title: 'AI operations', text: 'Voice and conversational AI connected to workflows with human controls.' },
  { icon: Zap, title: 'Lifecycle automation', text: 'Email, SMS, appointments and pipeline automation that keep leads moving.' },
];

const solutions = [
  { key: 'Lead response', title: 'Facebook lead to AI follow-up', text: 'Capture, assign, email, SMS, AI call and long-term follow-up in one controlled workflow.', stat: '6', label: 'connected workflow stages' },
  { key: 'AI calling', title: 'Outbound appointment workflow', text: 'A calling system that qualifies prospects, records outcomes and routes the next action.', stat: '24/7', label: 'automated response coverage' },
  { key: 'Human handoff', title: 'AI with clear boundaries', text: 'Conversation controls that pause, escalate and return ownership to a real person.', stat: '100%', label: 'human-controlled automation' },
];

const cases = [
  { tag: 'Automation', title: 'Facebook lead response and pipeline operations', metric: '03', caption: 'documented systems', color: 'violet' },
  { tag: 'Web & funnels', title: 'Responsive websites across service industries', metric: '10', caption: 'live projects', color: 'lime' },
  { tag: 'Delivery', title: 'Architecture, implementation, QA and handoff', metric: '06', caption: 'core capabilities', color: 'blue' },
];

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [sent, setSent] = useState(false);
  useEffect(() => { const fn = () => setMenu(false); window.addEventListener('resize', fn); return () => window.removeEventListener('resize', fn); }, []);
  return <div>
    <header className="nav-wrap"><nav className="nav container">
      <a className="brand" href="#top" aria-label="Randolf Francisco home"><span className="brand-mark"><span /></span>randolf<span>dev</span></a>
      <div className={menu ? 'nav-links open' : 'nav-links'}>
        <a href="#services">Services</a><a href="#approach">Approach</a><a href="#work">Work</a><a href="#about">About</a>
        <a className="button small" href="#contact">Start a project <ArrowRight size={16}/></a>
      </div>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X/> : <Menu/>}</button>
    </nav></header>

    <main id="top">
      <section className="hero"><div className="glow g1"/><div className="glow g2"/><div className="container hero-grid">
        <div className="hero-copy reveal"><div className="eyebrow"><Sparkles size={15}/> Strategy, systems & creative</div>
          <h1>I build systems that <em>work together.</em></h1>
          <p>GoHighLevel architecture, automation, AI and conversion-focused web experiences for agencies, consultants and service businesses.</p>
          <div className="hero-actions"><a href="#work" className="button">View my work <ArrowRight size={18}/></a><a href="https://drive.google.com/uc?export=download&id=1glLNJY_QiEhiX_Emjo86sGsqdl3rI6fg" target="_blank" rel="noreferrer" className="text-link"><span className="play"><ArrowRight size={14}/></span> Download résumé</a></div>
          <div className="trust"><div className="avatars"><i>GHL</i><i>AI</i><i>WEB</i><i>QA</i></div><p><strong>Open to opportunities</strong><br/>projects, contracts and remote roles</p></div>
        </div>
        <div className="hero-art" aria-label="Randolf Francisco portfolio portrait"><img className="hero-portrait" src="/work/randolf-hero.webp" alt="Randolf Francisco, GoHighLevel implementation specialist"/>
          <div className="orbit o1"/><div className="orbit o2"/><div className="planet"><Sparkles size={26}/></div>
          <div className="dash-card main-card"><div className="card-head"><span>Growth pulse</span><span className="live">● LIVE</span></div><strong>+42.8%</strong><small>Momentum score</small><div className="chart"><i/><i/><i/><i/><i/><i/><i/></div></div>
          <div className="dash-card mini-card"><Zap size={18}/><div><strong>18 wins</strong><small>this month</small></div></div>
          <div className="cursor"><MousePointer2 fill="currentColor"/><span>you are here</span></div>
        </div>
      </div></section>

      <section className="ticker"><div className="container"><span>Selected portfolio projects</span><div className="logo-row"><b>Realtor Cincinnati</b><b>Video Cartel</b><b>Gainstreet</b><b>Intercodam</b><b>RanaITek</b></div></div></section>

      <section className="section" id="services"><div className="container"><div className="section-intro"><div><span className="kicker">What I build</span><h2>One specialist for the whole <em>customer journey.</em></h2></div><p>I replace scattered tools and manual follow-up with organized CRM architecture, automation, AI and conversion-focused experiences—built, tested and documented end to end.</p></div>
        <div className="service-grid">{services.map(({icon:Icon,title,text}, i)=><article className="service" key={title}><span className="number">0{i+1}</span><div className="service-icon"><Icon/></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn about ${title}`}><ArrowRight/></a></article>)}</div>
      </div></section>

      <section className="section dark" id="approach"><div className="container solution-grid"><div className="solution-copy"><span className="kicker light">Our operating system</span><h2>Clarity in.<br/><em>Momentum out.</em></h2><p>Pick a starting point. Each layer is useful alone—and stronger when connected.</p><div className="tabs">{solutions.map((s,i)=><button key={s.key} onClick={()=>setActive(i)} className={active===i?'active':''}><span>0{i+1}</span>{s.key}<ChevronDown size={16}/></button>)}</div></div>
        <div className="solution-panel"><div className="panel-top"><span>ORBIT / {solutions[active].key.toUpperCase()}</span><Sparkles/></div><div className="constellation"><i/><i/><i/><i/><span/></div><div className="panel-content"><h3>{solutions[active].title}</h3><p>{solutions[active].text}</p><div className="big-stat"><strong>{solutions[active].stat}</strong><span>{solutions[active].label}</span></div></div></div>
      </div></section>

      <section className="section work" id="work"><div className="container"><span className="kicker">Selected work</span><div className="work-head"><h2>Proof lives in the <em>outcome.</em></h2><a href="#contact" className="text-link">Build your case study <ArrowRight size={17}/></a></div><div className="case-grid">{cases.map(c=><article className={`case ${c.color}`} key={c.title}><div className="case-visual"><span className="case-tag">{c.tag}</span><div className="metric"><strong>{c.metric}</strong><span>{c.caption}</span></div><div className="shape s1"/><div className="shape s2"/></div><h3>{c.title}</h3><a href="#contact">View the thinking <ArrowRight size={16}/></a></article>)}</div></div></section>

      <section className="quote section" id="about"><div className="container quote-grid"><div><span className="quote-mark">“</span><blockquote>From a messy onboarding process to a documented, handed-off system—clean, well-tested work with clear communication throughout.</blockquote><div className="person"><span>MC</span><div><strong>Marketing Consultant</strong><small>Web & automation client</small></div></div></div><div className="principles"><span className="kicker">How I deliver</span><h2>Hands-on.<br/>End-to-end <em>range.</em></h2><ul><li><Check/> Architecture before implementation</li><li><Check/> Human-controlled automation</li><li><Check/> Responsive build, QA and handoff</li></ul></div></div></section>

      <section className="cta" id="contact"><div className="container cta-grid"><div><span className="kicker light">Your next chapter</span><h2>Ready to build<br/><em>some momentum?</em></h2><p>Tell us what feels stuck. We’ll respond with a useful next step—no sprawling pitch deck required.</p></div><form onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent?<div className="success"><span><Check/></span><h3>Message received.</h3><p>This demo form works. Connect a form service before launch to receive submissions.</p><button type="button" onClick={()=>setSent(false)} className="text-link">Send another</button></div>:<><label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@company.com"/></label><label>What are you building?<textarea required placeholder="A quick note about the opportunity..."/></label><button className="button lime" type="submit">Send the signal <ArrowRight size={18}/></button></>}</form></div></section>
    </main>
    <footer><div className="container footer-grid"><div><a className="brand inverse" href="#top"><span className="brand-mark"><span/></span>randolf<span>dev</span></a><p>GoHighLevel implementation, automation, AI workflows, websites and quality assurance.</p></div><div><b>Explore</b><a href="#services">Skills</a><a href="#approach">Systems</a><a href="#work">Work</a></div><div><b>Connect</b><a href="mailto:rfranciscoelite2020@gmail.com">Email</a><a href="https://linkedin.com/in/randolffrancisco" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://wa.me/639273790758" target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="container footer-bottom"><span>© 2026 Randolf Francisco</span><span>Philippines-based • Working remotely worldwide</span></div></footer>
  </div>
}

export default App;
