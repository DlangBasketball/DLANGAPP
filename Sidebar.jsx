export default function Toast({ visible, text }) {
  return (
    <div className={`toast ${visible ? 'visible' : ''}`}>
      <div className="toast-icon">
        <svg viewBox="0 0 24 24" fill="none">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <span>{text}</span>
    </div>
  );
}
