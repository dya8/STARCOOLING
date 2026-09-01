import React from 'react';
import { createRoot } from 'react-dom/client';
import { Menu, Phone, ArrowUpRight, Check, Snowflake, Wind, Wrench, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

const services = [
  ['01','Design & Engineering','We plan and size HVAC or refrigeration systems for your specific space, from retail shops to industrial facilities.', Building2],
  ['02','Supply & Procurement','We source and supply split, cassette, floor-standing, ducted, VRF, and cold-room equipment for your project.', Snowflake],
  ['03','Installation & Commissioning','Our in-house technicians install and commission systems from a single split AC to sophisticated commercial HVAC plants.', Wrench],
  ['04','Maintenance & After-Sales','Repair, servicing, and ongoing after-sales support for branded air-conditioning and refrigeration products.', Wind]
];
const solutions = [
  ['Air Conditioning','Split, cassette, floor-standing, ducted split, and VRF systems for shops, offices, commercial buildings, and homes.'],
  ['Refrigeration & Cold Rooms','Cold room design, supply, and installation for businesses that need reliable cold storage.'],
  ['Ventilation & Air Treatment','Fresh air, exhaust, treated fresh air systems, and complete ventilation projects.'],
  ['Split Air Conditioners','Individual indoor/outdoor systems for single rooms and small spaces.'],
  ['Cassette-Type AC','Ceiling-mounted units for even air distribution in showrooms, restaurants, and offices.'],
  ['VRF Systems','Multiple independently controlled indoor units served by a single outdoor system for larger commercial spaces.']
];
const clients = [
  ['KILA, Thrissur', '/images/clients/kila.jpg'],
  ['Deshabhimani Printing Press, Punkunnam', '/images/clients/deshabhimani.jpg'],
  ['Classic Regency, Alleppey', '/images/clients/classic-regency.jpg'],
  ['Y Mall, Thriprayar', '/images/clients/y-mall.jpg'],
  ['Mothimahal Residency, Thrissur', '/images/clients/mothimahal.jpg'],
  ['Kerala Bank, Thrissur', '/images/clients/kerala-bank.jpg'],
  ['White Palace Hotel, Thrissur', '/images/clients/white-palace.jpg'],
  ['KTDC Tamarind, Thrissur', '/images/clients/ktdc-tamarind.jpg']
];const fade = { hidden:{opacity:0,y:35}, show:{opacity:1,y:0,transition:{duration:.65,ease:'easeOut'}} };
function Reveal({children,className=''}){return <motion.div className={className} variants={fade} initial="hidden" whileInView="show" viewport={{once:true,amount:.12}}>{children}</motion.div>}
function Counter({ value }) {
  const [count, setCount] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  React.useEffect(() => {
    if (!started) return;

    const target = Number(value.replace(/,/g, ""));
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, value]);

  return (
    <strong ref={ref}>
      {count.toLocaleString()}
    </strong>
  );
}
const whatsappNumber = "918089261115";

const whatsappMessage = encodeURIComponent(
  "Hello STAR COOLING, I would like to enquire about your HVAC and refrigeration services."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
function App(){
 const [open,setOpen]=React.useState(false);
 return <>
  <header className="nav-shell"><div className="nav">
   <a className="logo" href="#home">STAR COOLING<span>HVAC & REFRIGERATION</span></a>
   <nav className={open?'open':''}>{['Home','About','Services','Products','Projects','Contact'].map(x=><a key={x} href={'#'+x.toLowerCase()} onClick={()=>setOpen(false)}>{x}</a>)}</nav>
   <div className="actions"><a className="btn dark" href="tel:+918089261115">Call Now</a><a className="btn primary" href="#contact">Get a Quote</a></div>
   <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation"><Menu/></button>
  </div></header>
  <main id="home">
   <section className="hero"><div className="orb orb-a"/><div className="orb orb-b"/><div className="container hero-grid">
    <Reveal><div className="kicker">Thrissur, Kerala · Since 15 Years</div><h1>Cooling & Refrigeration Experts, <em>On Call</em> for Your Business</h1><p>From a single split AC to a full commercial VRF project, STAR COOLING designs, installs, and maintains air-conditioning and refrigeration systems for shops, offices, homes, and commercial buildings across Thrissur.</p><div className="hero-buttons"><a className="btn primary" href="#contact">Request a Service <ArrowUpRight size={16}/></a><a
  className="btn ghost"
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
>
  WhatsApp Us
</a></div></Reveal>
    <motion.div className="hero-card" animate={{y:[0,-12,0],rotate:[0,.4,0]}} transition={{duration:5,repeat:Infinity,ease:'easeInOut'}}><div className="glass-label">IN-HOUSE CAPABILITY</div><strong>163</strong><span>Expert Technicians</span><p>Design, installation, project management, engineering, and after-sales support under one team.</p><div className="mini-line"><span/><span/><span/></div></motion.div>
   </div></section>
<div className="stats">
  <div className="container stats-grid">

    {[
      ['15', 'Years Experience'],
      ['163', 'Expert Technicians'],
      ['3,457', 'Satisfied Clients'],
      ['3,876', 'Completed Projects']
    ].map(([n, l]) => (

      <div className="stat" key={l}>
        <Counter value={n} />
        <span>{l}</span>
      </div>

    ))}

  </div>
</div>   
   
   
   
   
   <section id="services"><div className="container"><Reveal><div className="section-head"><div className="eyebrow">What We Do</div><h2>One team from design to after-sales.</h2><p>STAR COOLING handles the full lifecycle, not just installation.</p></div></Reveal><div className="grid4">{services.map(([num,title,text,Icon])=><Reveal key={title}><article className="card"><div className="icon"><Icon size={20}/></div><div className="num">{num}</div><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>
   <section id="products" className="alt"><div className="container"><Reveal><div className="section-head"><div className="eyebrow">Products & Solutions</div><h2>Find the system that fits your requirement.</h2><p>Air conditioning, refrigeration, cold rooms, ventilation, and air treatment.</p></div></Reveal><div className="grid3">{solutions.map(([title,text],i)=><Reveal key={title}><article className="card solution"><div className="solution-number">0{i+1}</div><h3>{title}</h3><p>{text}</p>{i<3&&<a href="#contact">Enquire <ArrowUpRight size={15}/></a>}</article></Reveal>)}</div></div></section>
   <section><div className="container"><Reveal><div className="section-head"><div className="eyebrow">Who We Serve</div><h2>Built for real working spaces.</h2><p>HVAC and refrigeration systems for a wide range of premises.</p></div></Reveal><div className="served">{['Retail Premises','Offices','Commercial Buildings','Domestic Premises','Large Industrial & Company Clients'].map(x=><motion.span className="tag" key={x} whileHover={{y:-4}}>{x}</motion.span>)}</div></div></section>
   <section className="dealer"><div className="container dealer-box"><Reveal><div><div className="eyebrow">Authorized Dealership</div><h2>Authorized LG Sales & Service Dealer</h2><p>STAR COOLING is an authorized sales and service dealer for LG air conditioners, from purchase through installation and ongoing servicing.</p></div></Reveal><a className="btn primary" href="#contact">Talk to STAR COOLING <ArrowUpRight size={16}/></a></div></section>
   <section id="about"><div className="container about-grid"><Reveal><div><div className="eyebrow">About STAR COOLING</div><h2>Electro-mechanical engineering, built around HVAC.</h2><p>STAR COOLING is an electro-mechanical engineering company operating in the HVAC industry, with in-house infrastructure to handle a wide range of air-conditioning turnkey projects.</p><p>We design, supply, install, commission, and maintain systems ranging from standard split units to VRF systems, central air-conditioning plants, and other sophisticated HVAC systems.</p><p>For Carrier and Toshiba centralized VRF and chiller systems, these are handled through our wholly owned subsidiary, STAR COOLING SYSTEMS.</p></div></Reveal><Reveal><div className="why"><h3>Why STAR COOLING</h3><ul>{['15 years of HVAC and refrigeration experience','163 expert technicians','In-house turnkey project infrastructure','Design, installation, project management, and engineering capability','Sales, installation, and maintenance under one company','Commercial and residential project experience','Authorized LG sales and service dealership'].map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul></div></Reveal></div></section>
   <section id="projects" className="alt"><div className="container"><Reveal><div className="section-head"><div className="eyebrow">Projects & Clients</div><h2>Trusted by businesses and institutions across Thrissur and Kerala.</h2><p>Major client and project references reported by STAR COOLING.</p></div></Reveal>
   <div className="clients">
  {clients.map(([name, image], i) => (
    <Reveal key={name}>
      <motion.article
        className="client client-image"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.25 }}
      >
        <div className="client-photo">
          <img src={image} alt={name} loading="lazy" />
          <div className="client-overlay">
            <span>{String(i + 1).padStart(2, '0')}</span>
          </div>
        </div>

        <div className="client-info">
          <h3>{name}</h3>
          <ArrowUpRight size={17} />
        </div>
      </motion.article>
    </Reveal>
  ))}
</div>
    </div>
    </section>
   <section><div className="container subsidiary"><Reveal><div className="eyebrow">STAR COOLING SYSTEMS</div><h2>For Carrier & Toshiba Centralized Systems</h2><p>Centralized VRF and chiller systems from Carrier and Toshiba are handled through our wholly owned subsidiary, STAR COOLING SYSTEMS.</p></Reveal></div></section>
   
   <section id="contact" className="cta"><div className="container cta-inner"><div><div className="eyebrow">Get in Touch</div><h2>Have an AC or refrigeration requirement? Let's talk.</h2></div><div><a className="btn dark" href="tel:+918089261115"><Phone size={16}/> Call Now</a><a className="btn light" href="mailto:starlgkkm@gmail.com">Email Us</a></div></div></section>
  <section className="location">
  <div className="container">

    <Reveal>
      <div className="section-head">
        <div className="eyebrow">Find Us</div>

        <h2>
          Visit STAR COOLING
        </h2>

        <p>
          Room No. 15/412, Mekkatukulam Building,
          Mundur P.O., Thrissur, Kerala, PIN 680541
        </p>
      </div>
    </Reveal>

    <Reveal>
      <div className="map-wrapper">

        <iframe
          title="STAR COOLING Location"
          src="https://www.google.com/maps?q=Mekkatukulam%20Building,%20Mundur,%20Thrissur,%20Kerala%20680541&output=embed"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="map-card">
          <div className="map-card-icon">
            📍
          </div>

          <div>
            <h3>STAR COOLING</h3>
            <p>
              Mundur, Thrissur, Kerala
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Mekkatukulam+Building,+Mundur,+Thrissur,+Kerala+680541"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Get Directions
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </Reveal>

  </div>
</section>
  </main>
  <footer><div className="container footer-grid"><div><div className="logo inverse">STAR COOLING<span>HVAC & REFRIGERATION</span></div><p>AC & refrigeration sales, installation, engineering, and maintenance in Thrissur, Kerala.</p></div><div><div className="footer-title">Contact</div><a href="tel:+918089261115">+91 8089261115</a><a href="tel:+919995066456">+91 9995066456</a><a href="mailto:starlgkkm@gmail.com">starlgkkm@gmail.com</a></div><div><div className="footer-title">Office</div><p>Room No. 15/412, Mekkatukulam Building,<br/>Mundur P.O., Thrissur, Kerala,<br/>PIN 680541</p><p className="hours">Mon–Fri: 9:00 AM–9:00 PM<br/>Sat–Sun: 9:00 AM–12:00 PM</p></div></div></footer>
  <div className="mobile-bar"><a href="tel:+918089261115"><Phone size={16}/>Call</a><a href="#contact">Get a Quote</a></div>
 </>;
}
createRoot(document.getElementById('root')).render(<App/>);
