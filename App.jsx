import { useState, useEffect } from 'react';
import { drafts } from '../data/demoData';

const TONES = [
  { id: 'friendly', label: 'Friendly' },
  { id: 'firm',     label: 'Firm' },
  { id: 'final',    label: 'Final notice' }
];

export default function ReminderModal({ open, onClose, onSent }) {
  const [loading, setLoading] = useState(true);
  const [tone, setTone] = useState('friendly');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // Reset and start the loading animation each time the modal opens.
  useEffect(() => {
    if (!open) return;

    setLoading(true);
    setTone('friendly');
    setSending(false);
    setSent(false);

    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, [open]);

  if (!open) return null;

  function handleSend() {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      onSent();

      setTimeout(() => onClose(), 1500);
    }, 1100);
  }

  function handleOverlayClick(e) {
    if (e.target.id === 'modalOverlay') onClose();
  }

  return (
    <div
      id="modalOverlay"
      className="modal-overlay"
      style={{ display: 'flex' }}
      onClick={handleOverlayClick}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">Draft payment reminders</div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          {loading ? (
            <div className="composer-loading visible">
              <div className="big-spinner"></div>
              <div className="composer-loading-text">Drafting 14 reminders…</div>
              <div className="composer-loading-sub">
                Pulling each parent's name, child's name, exact amount, program, and due date from DLang Basketball's data.
              </div>
            </div>
          ) : (
            <>
              <div className="composer-status ready">
                <div className="composer-status-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div className="composer-status-text">
                  14 personalized reminders ready · drafted in 4 seconds
                </div>
              </div>

              <div className="tone-tabs">
                {TONES.map(t => (
                  <button
                    key={t.id}
                    className={`tone-tab ${tone === t.id ? 'active' : ''}`}
                    onClick={() => setTone(t.id)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="draft-list">
                {drafts[tone].map((d, i) => (
                  <div className="draft" key={`${tone}-${i}`}>
                    <div className="draft-head">
                      <div className="draft-recipient">
                        {d.name}{d.child ? ` · ${d.child}` : ''}
                      </div>
                      <div className="draft-amount">{d.amount}</div>
                    </div>
                    <div className="draft-subject">{d.subject}</div>
                    <div className="draft-body">{d.body}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="modal-footer">
          <div className="footer-meta">
            <strong>14</strong> drafts · <strong>CHF 5,860</strong> total · sent under your name
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="ghost-button" onClick={onClose}>Cancel</button>
            <button
              className={`send-button ${sent ? 'success' : ''}`}
              onClick={handleSend}
              disabled={sending || sent || loading}
            >
              {sent ? '✓ Sent' : sending ? 'Sending…' : 'Approve all & send'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
