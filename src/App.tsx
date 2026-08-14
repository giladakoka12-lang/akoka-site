import { useState, useRef, useEffect, type FormEvent } from 'react'
import { HERO_IMAGE, ABOUT_IMAGE, GALLERY_ITEMS } from './siteContent'

const WA_LINK = 'https://wa.me/972584998301'
const IG_LINK = 'https://www.instagram.com/djgiladakoka?igsh=bXpnamxwcTQ5MDZv&utm_source=qr'
const PHONE_LINK = 'tel:0584998301'

const NAV_LINKS = [
  { label: 'אודות', href: '#about' },
  { label: 'חבילות', href: '#packages' },
  { label: 'גלריה', href: '#gallery' },
  { label: 'ביקורות', href: '#reviews' },
]

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function PhoneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.05 10.83 19.79 19.79 0 01.02 2.2 2 2 0 012 .02h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const galleryRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', type: '', message: '' })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollGallery = (dir: 'prev' | 'next') => {
    if (!galleryRef.current) return
    galleryRef.current.scrollBy({ left: dir === 'next' ? -360 : 360, behavior: 'smooth' })
  }

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    const msg = `שלום גלעד! אני ${form.name} ואני מעוניין/ת לבדוק זמינות.
טלפון: ${form.phone}
אימייל: ${form.email}
תאריך אירוע: ${form.date}
סוג אירוע: ${form.type}
פרטים: ${form.message}`
    window.open(`${WA_LINK}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div style={{ direction: 'rtl', backgroundColor: '#070714', minHeight: '100vh', overflowX: 'hidden' }}>
      <header style={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 100, background: scrolled ? 'rgba(7,7,20,0.92)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none', borderBottom: scrolled ? '1px solid #202046' : 'none', transition: 'background 0.3s ease, border 0.3s ease', padding: '0 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: 'linear-gradient(135deg, #2B4CFF, #FF007F)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 12px rgba(255,0,127,0.4)', flexShrink: 0 }}>
              <span style={{ color: '#fff', fontFamily: 'Outfit,sans-serif', fontWeight: 900, fontSize: 14 }}>GA</span>
            </div>
            <div>
              <div style={{ fontFamily: 'Outfit,sans-serif', fontWeight: 900, fontSize: 18, lineHeight: 1.1 }}><span style={{ color: '#fff' }}>גלעד </span><span style={{ color: '#FF007F' }}>אקוקה</span></div>
              <div style={{ color: '#DFB04F', fontSize: 10, letterSpacing: '0.12em', fontWeight: 500, fontFamily: 'Inter,sans-serif' }}>דיג׳יי והפקת אירועים</div>
            </div>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
            {NAV_LINKS.map(l => <a key={l.href} href={l.href} style={{ color: '#A0A2C3', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#fff')} onMouseLeave={e => (e.currentTarget.style.color = '#A0A2C3')}>{l.label}</a>)}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-pink" style={{ padding: '10px 22px', borderRadius: 50, fontSize: 14, textDecoration: 'none', display: 'inline-block' }}>Book Now</a>
          </nav>
          <div style={{ display: 'none' }} className="show-mobile" id="mobile-nav-right"><a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-pink" style={{ padding: '8px 18px', borderRadius: 50, fontSize: 13, textDecoration: 'none' }}>Book</a></div>
        </div>
        {menuOpen && <div style={{ background: 'rgba(7,7,20,0.98)', borderTop: '1px solid #202046', padding: '20px 24px' }}>{NAV_LINKS.map(l => <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', color: '#fff', fontSize: 18, fontWeight: 600, padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid #202046' }}>{l.label}</a>)}</div>}
      </header>

      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 72, overflow: 'hidden' }}>
        <div className="ambient-blob" style={{ width: 500, height: 500, background: 'rgba(43,76,255,0.12)', top: -100, left: '40%' }} />
        <div className="ambient-blob" style={{ width: 400, height: 400, background: 'rgba(255,0,127,0.08)', bottom: 0, right: '10%' }} />
        <div className="ambient-blob" style={{ width: 300, height: 300, background: 'rgba(100,0,200,0.1)', top: '30%', left: '20%' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 420px', minWidth: 300 }}>
              <div style={{ color: '#DFB04F', fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', marginBottom: 20, fontFamily: 'Inter,sans-serif', textTransform: 'uppercase' }}>הדיג׳יי לחתונות ואירועים ברמה הגבוהה ביותר בישראל</div>
              <h1 className="font-display" style={{ fontSize: 'clamp(42px, 6vw, 80px)', fontWeight: 900, lineHeight: 1.08, marginBottom: 28 }}><span style={{ color: '#fff', display: 'block' }}>האירוע שלכם.</span><span style={{ color: '#fff', display: 'block' }}>הווייב שלכם.</span><span style={{ color: '#2B4CFF', display: 'block' }} className="text-glow-pink">המוזיקה שלי.</span></h1>
              <p style={{ color: '#A0A2C3', fontSize: 17, lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>הופך כל אירוע לחוויה בלתי נשכחת. מחגיגות מרגשות ועד רחבות חתונה מלאות, גלעד יוצר את הפסקול שמחזיק את המסיבה באוויר עד השעות הקטנות של הלילה.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-pink" style={{ padding: '14px 32px', borderRadius: 50, fontSize: 16, textDecoration: 'none', display: 'inline-block' }}>בואו נדבר</a>
                <a href={IG_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#A0A2C3', textDecoration: 'none', transition: 'color 0.2s' }}><InstagramIcon size={22} /><span style={{ fontSize: 14, fontWeight: 500 }}>@djgiladakoka</span></a>
              </div>
            </div>
            <div style={{ flex: '1 1 380px', minWidth: 280, display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', borderRadius: 24, border: '2px solid #2B4CFF', boxShadow: '0 0 40px rgba(43,76,255,0.35), 0 0 80px rgba(43,76,255,0.12)', overflow: 'hidden', width: '100%', maxWidth: 520 }}>
                <img src={HERO_IMAGE.src} onError={e => { if (e.currentTarget.src !== HERO_IMAGE.fallback) e.currentTarget.src = HERO_IMAGE.fallback }} alt="גלעד אקוקה מתקלט באירוע" style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,7,20,0.5) 0%, transparent 50%)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" style={{ background: '#101026', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}><div style={{ display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 420px', minWidth: 300 }}>
            <div style={{ color: '#FF007F', fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', marginBottom: 16, fontFamily: 'Inter,sans-serif' }}>הדיג׳יי מאחורי הקצב</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}><span style={{ color: '#fff', display: 'block' }}>קורא את הקהל.</span><span style={{ color: '#fff', display: 'block' }}>בונה את האנרגיה.</span><span style={{ color: '#DFB04F', display: 'block' }}>יוצר רגעים.</span></h2>
            <p style={{ color: '#A0A2C3', fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>גלעד אקוקה הוא דיג׳יי ישראלי לאירועים, המתמחה בחתונות ובחגיגות עם אנרגיה גבוהה. הכוח שלו הוא לקרוא את הקהל בזמן אמת, להבין בדיוק מתי לשנות כיוון ולבנות את האנרגיה ברחבה באופן טבעי לאורך כל הערב. כל אירוע מתוכנן באופן אישי, וכל סט נבנה ומבוצע בלייב בהתאם לזוג, לאורחים ולאווירה.</p>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>{[{ num: '3+', label: 'שנות ניסיון', color: '#2B4CFF' }, { num: '100+', label: 'אירועים', color: '#FF007F' }, { num: '100%', label: 'אנרגיה', color: '#DFB04F' }].map(s => <div key={s.label} style={{ textAlign: 'center' }}><div className="font-display" style={{ fontSize: 44, fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.num}</div><div style={{ color: '#A0A2C3', fontSize: 13, marginTop: 6, fontWeight: 500 }}>{s.label}</div></div>)}</div>
          </div>
          <div style={{ flex: '1 1 380px', minWidth: 280 }}><div style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid #202046' }}><img src={ABOUT_IMAGE.src} onError={e => { if (e.currentTarget.src !== ABOUT_IMAGE.fallback) e.currentTarget.src = ABOUT_IMAGE.fallback }} alt="גלעד מתקלט מול קהל" style={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }} /></div></div>
        </div></div>
      </section>

      <section id="packages" style={{ background: '#070714', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}><div style={{ color: '#DFB04F', fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', marginBottom: 16 }}>חבילות לאירוע</div><h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900, color: '#fff', marginBottom: 20 }}>בוחרים את החוויה שמתאימה לכם</h2><p style={{ color: '#A0A2C3', fontSize: 16, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>כל אירוע מקבל התאמה מוזיקלית אישית. לחצו על כפתור ההודעה לבדיקת זמינות ולקבלת הצעת מחיר.</p></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              { title: 'חתונה מלאה', badge: 'אירוע מלא', color: '#2B4CFF', featured: false, items: ['ליווי מלא מהאורח הראשון ועד שאחרון הרוקדים עוזב את הרחבה','פגישת תיאום מוזיקלי לפני האירוע','סבב ראשון ומסיבה שמתאימה לכל האורחים','קריאת קהל מדויקת לאורך כל הערב','ציוד מקצועי וליווי עד סוף המסיבה'] },
              { title: 'אפטר פארטי', badge: 'ללא הגבלת זמן', color: '#FF007F', featured: true, items: ['יש לכם להקה לסבב הראשון? מחפשים DJ שיעיף את הרחבה?','אני מגיע בדיוק בשביל זה','פגישת היכרות ותיאום מוזיקלי מקדים','סט מסיבה שמרים את הרחבה','ללא הגבלת זמן'] },
              { title: 'דיג׳יי + לייב', badge: 'הופעה חיה', color: '#DFB04F', featured: false, items: ['השילוב המושלם של DJ ושואו חי','נגנים מקצועיים שמנגנים יחד עם גלעד','הנגנים נמצאים במרכז רחבת הריקודים','מעלים את האנרגיה של המסיבה לרמה הבאה','התאמת נגנים אישית לפי האירוע'] },
            ].map((card, index) => <div key={card.title} className={`card-hover ${card.featured ? 'glow-pink' : ''}`} style={{ background: card.featured ? '#16163A' : '#101026', border: card.featured ? '2px solid #FF007F' : '1px solid #202046', borderRadius: 20, padding: 32, position: 'relative' }}>{card.featured && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#FF007F', color: '#fff', borderRadius: 50, padding: '4px 16px', fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap' }}>★ הכי פופולרי</div>}<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, marginTop: card.featured ? 8 : 0 }}><h3 className="font-display" style={{ fontSize: 26, fontWeight: 900, color: '#fff' }}>{card.title}</h3><span style={{ background: `${card.color}22`, color: card.color, border: `1px solid ${card.color}`, borderRadius: 50, padding: '4px 12px', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{card.badge}</span></div><ul style={{ listStyle: 'none', marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 14 }}>{card.items.map(item => <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#A0A2C3', fontSize: 14, lineHeight: 1.5 }}><span style={{ color: card.color, marginTop: 2, flexShrink: 0 }}>✦</span><span>{item}</span></li>)}</ul><a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={card.featured ? 'btn-pink' : 'btn-outline-pink'} style={{ display: 'block', textAlign: 'center', padding: '13px 24px', borderRadius: 12, fontSize: 14, textDecoration: 'none' }}>בדיקת זמינות בוואטסאפ</a></div>)}
          </div>
        </div>
      </section>

      <section id="gallery" style={{ background: '#101026', padding: '100px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', marginBottom: 48 }}><div style={{ color: '#2B4CFF', fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', marginBottom: 12 }}>הזיכרונות מרחבת הריקודים</div><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}><h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900, color: '#fff' }}>רגעים מהלילה</h2><div style={{ display: 'flex', gap: 12 }}><button onClick={() => scrollGallery('prev')} style={{ width: 44, height: 44, borderRadius: '50%', background: '#16163A', border: '1px solid #202046', color: '#fff', cursor: 'pointer', fontSize: 18 }}>›</button><button onClick={() => scrollGallery('next')} style={{ width: 44, height: 44, borderRadius: '50%', background: '#16163A', border: '1px solid #202046', color: '#fff', cursor: 'pointer', fontSize: 18 }}>‹</button></div></div></div>
        <div ref={galleryRef} className="gallery-track" style={{ paddingRight: 24, paddingLeft: 24 }}>{GALLERY_ITEMS.map((item, i) => <div key={`${item.file}-${i}`} className="gallery-card" style={{ width: 300, height: 380 }}><div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 20, overflow: 'hidden', border: '1px solid #202046' }}><img src={item.url} onError={e => { if (e.currentTarget.src !== item.fallback) e.currentTarget.src = item.fallback }} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} /><div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,7,20,0.75) 0%, transparent 60%)' }} /><div style={{ position: 'absolute', bottom: 16, right: 16 }}><span style={{ background: 'transparent', color: '#FF007F', border: '1px solid #FF007F', borderRadius: 50, padding: '4px 12px', fontSize: 11, fontWeight: 700 }}>{item.label}</span></div></div></div>)}</div>
      </section>

      <section id="reviews" style={{ background: '#070714', padding: '100px 24px' }}><div style={{ maxWidth: 1280, margin: '0 auto' }}><div style={{ textAlign: 'center', marginBottom: 64 }}><div style={{ color: '#2B4CFF', fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', marginBottom: 16 }}>ביקורות לקוחות</div><h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900, color: '#fff' }}>מה הלקוחות מספרים</h2></div><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>{[{ review: 'כאן תופיע ביקורת אמיתית של זוג או לקוח לאחר שנוסיף את הטקסט.', name: 'שם הלקוח / הזוג' },{ review: 'מקום לביקורת נוספת שמספרת על החוויה, האנרגיה וקריאת הקהל באירוע.', name: 'שם הלקוח / הזוג' },{ review: 'מקום לביקורת נוספת על המקצועיות, המוזיקה והרחבה.', name: 'שם הלקוח / הזוג' }].map((r, i) => <div key={i} className="card-hover" style={{ background: '#101026', border: '1px solid #202046', borderRadius: 20, padding: 32 }}><div style={{ color: '#FF007F', fontSize: 24, marginBottom: 16, letterSpacing: 2 }}>★★★★★</div><p style={{ color: '#A0A2C3', fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>“{r.review}”</p><div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #2B4CFF, #FF007F)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 16 }}>{String.fromCharCode(0x05D0 + i)}</div><span style={{ color: '#fff', fontWeight: 600, fontSize: 15 }}>{r.name}</span></div></div>)}</div></div></section>

      <section id="contact" style={{ background: '#101026', padding: '100px 24px' }}><div style={{ maxWidth: 1280, margin: '0 auto' }}><div style={{ textAlign: 'center', marginBottom: 64 }}><div style={{ color: '#FF007F', fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', marginBottom: 16 }}>שומרים את התאריך</div><h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900, color: '#fff' }}>בואו נהפוך את האירוע שלכם לבלתי נשכח</h2></div><div style={{ background: '#070714', border: '1px solid #202046', borderRadius: 24, padding: 'clamp(24px, 4vw, 56px)' }}><div style={{ display: 'flex', gap: 60, flexWrap: 'wrap' }}><div style={{ flex: '1 1 260px' }}><h3 className="font-display" style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>ספרו לי על<br />האירוע שאתם מדמיינים.</h3><p style={{ color: '#A0A2C3', fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>ספרו לי על האירוע שלכם, וגלעד יחזור אליכם עם זמינות והאפשרות המתאימה ביותר לאירוע.</p><div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}><a href={PHONE_LINK} style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: '#fff' }}><div style={{ width: 44, height: 44, borderRadius: 12, background: '#101026', border: '1px solid #202046', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2B4CFF' }}><PhoneIcon size={18} /></div><div><div style={{ color: '#A0A2C3', fontSize: 11, fontWeight: 600 }}>טלפון</div><div style={{ fontWeight: 600, fontSize: 15 }}>058-499-8301</div></div></a><a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: '#fff' }}><div style={{ width: 44, height: 44, borderRadius: 12, background: '#101026', border: '1px solid #202046', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366' }}><WhatsAppIcon size={18} /></div><div><div style={{ color: '#A0A2C3', fontSize: 11, fontWeight: 600 }}>וואטסאפ</div><div style={{ fontWeight: 600, fontSize: 15 }}>058-499-8301</div></div></a></div></div><form onSubmit={handleFormSubmit} style={{ flex: '2 1 380px', display: 'flex', flexDirection: 'column', gap: 16 }}><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}><input className="form-input" placeholder="שם מלא" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required /><input className="form-input" placeholder="מספר טלפון" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required /></div><input className="form-input" type="email" placeholder="כתובת אימייל" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}><input className="form-input" type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} /><select className="form-input" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}><option value="" disabled>סוג האירוע</option><option value="חתונה">חתונה</option><option value="בר/בת מצווה">בר/בת מצווה</option><option value="אפטר פארטי">אפטר פארטי</option><option value="דיג׳יי + לייב">דיג׳יי + לייב</option><option value="אירוע פרטי">אירוע פרטי</option><option value="אחר">אחר</option></select></div><textarea className="form-input" placeholder="פרטים נוספים / חזון האירוע" rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /><button type="submit" className="btn-pink" style={{ padding: '16px 32px', borderRadius: 14, fontSize: 16, width: '100%' }}>בדיקת זמינות וקבלת הצעת מחיר</button></form></div></div></div></section>

      <footer style={{ background: '#101026', borderTop: '1px solid #202046', padding: '40px 24px' }}><div style={{ maxWidth: 1280, margin: '0 auto' }}><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}><div><div className="font-display" style={{ fontSize: 20, fontWeight: 900 }}><span style={{ color: '#fff' }}>גלעד </span><span style={{ color: '#FF007F' }}>אקוקה</span></div><div style={{ color: '#DFB04F', fontSize: 11, letterSpacing: '0.12em', fontWeight: 500, marginTop: 4 }}>דיג׳יי והפקת אירועים</div></div><div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}><a href={IG_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#A0A2C3', textDecoration: 'none' }}><InstagramIcon size={18} /><span style={{ fontSize: 14 }}>@djgiladakoka</span></a><a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#A0A2C3', textDecoration: 'none' }}><WhatsAppIcon size={18} /><span style={{ fontSize: 14 }}>058-499-8301</span></a></div></div><div style={{ borderTop: '1px solid #202046', paddingTop: 24, textAlign: 'center', color: '#4a4a6a', fontSize: 13 }}>© 2026 דיג׳יי גלעד אקוקה. כל הזכויות שמורות.</div></div></footer>

      <style>{`@media (max-width: 768px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } } @media (min-width: 769px) { .show-mobile { display: none !important; } #mobile-nav-right { display: none !important; } } @media (max-width: 640px) { .form-input { font-size: 16px; } }`}</style>
    </div>
  )
}
