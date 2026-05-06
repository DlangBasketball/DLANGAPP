import logoUrl from '../assets/logo.png';

export default function ParentScreen() {
  return (
    <section className="screen active">
      <div className="screen-header">
        <h1 className="screen-title">Parent app preview</h1>
        <p className="screen-sub">What Anna Müller sees on her phone — branded as DLang Basketball</p>
      </div>

      <div className="mobile-frame">
        <div className="mobile-screen">
          <div className="mobile-header">
            <img src={logoUrl} alt="DLang Basketball" className="mobile-header-logo" />
            <div className="mobile-greeting">Welcome back</div>
            <div className="mobile-name">Müller family</div>
          </div>

          <div className="mobile-content">
            <div className="child-card">
              <div className="child-row">
                <div className="child-avatar">SM</div>
                <div>
                  <div className="child-name">Sophia</div>
                  <div className="child-team">DL Cheetah · U14</div>
                </div>
              </div>
              <div className="child-event">
                <strong>Training Tonight</strong> · 18:00 — 19:30
                <br />SPSA Sport Arena, Lausanne
              </div>
            </div>

            <div className="child-card">
              <div className="child-row">
                <div className="child-avatar" style={{ background: '#185FA5' }}>LM</div>
                <div>
                  <div className="child-name">Lucas</div>
                  <div className="child-team">Mini Ballers · U10</div>
                </div>
              </div>
              <div className="child-event">
                <strong>EYBL Game Saturday</strong> · 10:00 vs Lugano
                <br />SPSA Sport Arena (Home)
              </div>
            </div>

            <button
              className="mobile-ai-button"
              onClick={() => alert('Tap simulates: AI Parent Support opens. Anna can ask anything 24/7. Replaces the 9pm WhatsApp to D Lang.')}
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              </svg>
              Ask DLang Basketball
            </button>
          </div>
        </div>
      </div>

      <p className="mobile-explainer">
        Anna sees DLang Basketball's brand — not DLANG Sports OS. Tap "Ask" to see how parent AI works.
      </p>
    </section>
  );
}
