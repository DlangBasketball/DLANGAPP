import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import ReminderModal from './components/ReminderModal';
import Toast from './components/Toast';
import DashboardScreen from './screens/DashboardScreen';
import PaymentsScreen from './screens/PaymentsScreen';
import ProgramsScreen from './screens/ProgramsScreen';
import ParentScreen from './screens/ParentScreen';
import PlaceholderScreen from './screens/PlaceholderScreen';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [modalOpen, setModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  function navigate(screen) {
    setActiveScreen(screen);
    // scroll content area to top — match the original demo behavior
    const content = document.querySelector('.content');
    if (content) content.scrollTop = 0;
  }

  function openComposer() {
    setModalOpen(true);
  }

  function closeComposer() {
    setModalOpen(false);
  }

  function handleSent() {
    setToastVisible(true);
  }

  // Auto-hide the toast after a few seconds
  useEffect(() => {
    if (!toastVisible) return;
    const t = setTimeout(() => setToastVisible(false), 3500);
    return () => clearTimeout(t);
  }, [toastVisible]);

  function resetDemo() {
    navigate('dashboard');
    setModalOpen(false);
    setToastVisible(false);
  }

  // Special: clicking "Draft reminders" from Payments should go to dashboard
  // first and open the composer (matches the original demo flow).
  function openComposerFromPayments() {
    navigate('dashboard');
    setTimeout(openComposer, 300);
  }

  return (
    <div className={`demo-shell ${modalOpen ? 'modal-open' : ''}`}>
      <Sidebar activeScreen={activeScreen} onNavigate={navigate} />

      <main className="main">
        <Topbar activeScreen={activeScreen} onReset={resetDemo} />

        <div className="content">
          {activeScreen === 'dashboard' && (
            <DashboardScreen onOpenComposer={openComposer} onNavigate={navigate} />
          )}

          {activeScreen === 'payments' && (
            <PaymentsScreen onOpenComposer={openComposerFromPayments} />
          )}

          {activeScreen === 'programs' && <ProgramsScreen />}

          {activeScreen === 'parent' && <ParentScreen />}

          {activeScreen === 'athletes' && (
            <PlaceholderScreen
              title="Athletes"
              sub="312 active across DL Cheetah, DL Unity, Mini Ballers, Big Ballers, Pro Training"
              heading="Athletes module"
              body={<>Full searchable, filterable athlete table with profile drawers — by program, age, payment status. <br />Click <strong>Reset demo</strong> and go back to the AI briefing for the hero moment.</>}
            />
          )}

          {activeScreen === 'calendar' && (
            <PlaceholderScreen
              title="Schedule"
              sub="Sport Arena · Outdoor Court · Gym — all locations, this week"
              heading="Multi-court schedule"
              body="Color-coded events across SPSA Sport Arena, Outdoor Court, and Gym. Conflict detection surfaces double-bookings before they happen — like the one flagged on the dashboard for tomorrow."
            />
          )}

          {activeScreen === 'ai' && (
            <PlaceholderScreen
              title="AI Assistant"
              sub="Your operations co-pilot · trained on DLang Basketball's data only"
              heading="Full AI Assistant view"
              body={<>Conversation history, all admin queries answered with sources from your real club data, tool-use indicators. <br />The AI is also embedded as a right rail on every other admin screen.</>}
            />
          )}
        </div>

        <ReminderModal
          open={modalOpen}
          onClose={closeComposer}
          onSent={handleSent}
        />

        <Toast
          visible={toastVisible}
          text="14 reminders sent — CHF 5,860 in flight"
        />
      </main>
    </div>
  );
}
