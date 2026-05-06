// =======================================================================
// DLang Basketball demo data
// All hard-coded "seed" data for the prototype. When backend is real,
// replace each export with a fetch from the appropriate API endpoint.
// =======================================================================

export const overdueInvoices = [
  { initials: 'AM', color: 'brand', name: 'Anna Müller',     meta: 'Sophia · DL Cheetah · 21 days overdue',                       amount: 'CHF 540' },
  { initials: 'PR', color: 'teal',  name: 'Pierre Romano',   meta: 'Lucas · Mini Ballers · 14 days overdue',                       amount: 'CHF 380' },
  { initials: 'SB', color: 'coral', name: 'Sandra Beck',     meta: 'Mateo, Tomas · 2 invoices · Pro Training · 11 days overdue',   amount: 'CHF 1,200' },
  { initials: 'JD', color: 'pink',  name: 'Julie Dubois',    meta: 'Emma · DL Cheetah · 9 days overdue',                           amount: 'CHF 540' },
  { initials: 'TS', color: 'amber', name: 'Thomas Schmid',   meta: 'Noah · DL Unity · 7 days overdue',                             amount: 'CHF 480' },
  { initials: 'CL', color: 'blue',  name: 'Camille Lopez',   meta: 'Léa · Mini Ballers · +8 more',                                 amount: 'CHF 2,720' }
];

export const allOverdueInvoices = [
  { initials: 'AM', color: 'brand', name: 'Anna Müller',     meta: 'Sophia · DL Cheetah · 21 days overdue',                amount: 'CHF 540' },
  { initials: 'PR', color: 'teal',  name: 'Pierre Romano',   meta: 'Lucas · Mini Ballers · 14 days overdue',                amount: 'CHF 380' },
  { initials: 'SB', color: 'coral', name: 'Sandra Beck',     meta: 'Mateo, Tomas · Pro Training · 11 days overdue',         amount: 'CHF 1,200' },
  { initials: 'JD', color: 'pink',  name: 'Julie Dubois',    meta: 'Emma · DL Cheetah · 9 days overdue',                    amount: 'CHF 540' },
  { initials: 'TS', color: 'amber', name: 'Thomas Schmid',   meta: 'Noah · DL Unity · 7 days overdue',                      amount: 'CHF 480' },
  { initials: 'CL', color: 'blue',  name: 'Camille Lopez',   meta: 'Léa · Mini Ballers · 6 days overdue',                   amount: 'CHF 380' },
  { initials: 'YM', color: 'green', name: 'Yann Mercier',    meta: 'Léo · Mini Ballers · 5 days overdue',                   amount: 'CHF 380' },
  { initials: 'RD', color: 'purple', name: 'Rebecca Dietrich', meta: 'Hannah · DL Cheetah · 4 days overdue',                amount: 'CHF 540' },
  { initials: 'DL', color: 'coral', name: 'Daniel Lopes',    meta: 'Mateo · DL Unity · 3 days overdue',                     amount: 'CHF 480' },
  { initials: 'MS', color: 'teal',  name: 'Marie Sauter',    meta: 'Eva · DL Cheetah · 2 days overdue',                     amount: 'CHF 540' }
];

export const attentionItems = [
  { dot: '',        title: 'Schedule conflict tomorrow',       text: 'Mini Ballers and EYBL booked SPSA Sport Arena at 16:00. Both coaches notified.' },
  { dot: 'info',    title: '4 new SPSA Summer registrations',  text: '12 spots remaining across Lausanne and Zurich locations.' },
  { dot: 'info',    title: 'Las Vegas Camp deposit due',       text: '8 athletes confirmed · 6 still need to pay flight + program deposit.' },
  { dot: 'success', title: '22 parent questions handled',      text: 'AI resolved 19 directly. 3 escalated to your inbox.' }
];

export const programs = [
  { coverClass: '',        title: 'SPSA Summer Camp',  status: 'Active',  name: 'SPSA Summer Camp 2026',     meta: 'Jul–Aug · Lausanne, Zurich · CHF 540/wk · 8U–19U', progress: 85,  spots: '68 of 80 spots',  revenue: 'CHF 36,720' },
  { coverClass: 'black',   title: 'Las Vegas Camp',    status: 'Active',  name: 'Las Vegas Camp 2026',       meta: 'Jul–Aug · Las Vegas, USA · U13–U22 Boys',          progress: 60,  spots: '12 of 20 spots',  revenue: 'CHF 84,000' },
  { coverClass: 'cheetah', title: 'DL Cheetah',        status: 'Active',  name: 'DL Cheetah · All-Girls',    meta: 'Year-round · Lausanne · Performance track',         progress: 92,  spots: '23 of 25 spots',  revenue: 'CHF 55,200' },
  { coverClass: 'unity',   title: 'DL Unity',          status: 'Active',  name: 'DL Unity',                  meta: 'Year-round · Lausanne · Boys performance',          progress: 88,  spots: '22 of 25 spots',  revenue: 'CHF 52,800' },
  { coverClass: 'easter',  title: 'Easter All Star',   status: 'Closed',  name: 'Easter All Star Camp',      meta: 'Apr 2026 · Lausanne · 8U–18U',                      progress: 100, spots: '50 of 50 spots',  revenue: 'CHF 18,000' },
  { coverClass: 'mini',    title: 'Mini Ballers',      status: 'Active',  name: 'Mini Ballers (5–9 yrs)',    meta: 'Year-round · Lausanne · Foundation skills',         progress: 76,  spots: '38 of 50 spots',  revenue: 'CHF 13,680' }
];

// =======================================================================
// AI-drafted reminder emails — three tone variants
// =======================================================================

export const drafts = {
  friendly: [
    { name: 'Anna Müller', child: 'Sophia · DL Cheetah', amount: 'CHF 540',
      subject: "Quick reminder — Sophia's DL Cheetah May fees",
      body: "Hi Anna,\n\nQuick note — Sophia's DL Cheetah May fees of CHF 540 are showing as outstanding (21 days). I know how things slip with everything going on at this point in the season. Whenever it suits you, the link below makes it a one-tap thing — TWINT, Apple Pay, or card.\n\nThanks,\nD Lang\nDLang Basketball" },
    { name: 'Pierre Romano', child: 'Lucas · Mini Ballers', amount: 'CHF 380',
      subject: "Quick reminder — Lucas's Mini Ballers May fees",
      body: "Hi Pierre,\n\nNo urgency, just a friendly nudge — Lucas's Mini Ballers fees (CHF 380) are still open. The pay link below works with TWINT or Apple Pay if that's easier.\n\nThanks,\nD Lang\nDLang Basketball" },
    { name: 'Sandra Beck', child: 'Mateo & Tomas · Pro Training', amount: 'CHF 1,200',
      subject: "Quick reminder — Mateo & Tomas's Pro Training fees",
      body: "Hi Sandra,\n\nA gentle reminder — May fees for Mateo and Tomas in Pro Training (CHF 1,200 combined) are outstanding. No rush, but figured I'd flag it. TWINT-ready link below.\n\nThanks,\nD Lang\nDLang Basketball" },
    { name: 'Julie Dubois', child: 'Emma · DL Cheetah', amount: 'CHF 540',
      subject: "Quick reminder — Emma's DL Cheetah fees",
      body: "Hi Julie,\n\nQuick reminder that Emma's DL Cheetah May fees of CHF 540 are open. Whenever you have a moment — pay link below.\n\nThanks,\nD Lang\nDLang Basketball" },
    { name: 'Thomas Schmid', child: 'Noah · DL Unity', amount: 'CHF 480',
      subject: "Quick reminder — Noah's DL Unity May fees",
      body: "Hi Thomas,\n\nSmall nudge — Noah's DL Unity fees (CHF 480) haven't come through yet. Pay link below makes it quick.\n\nThanks,\nD Lang\nDLang Basketball" },
    { name: '+ 9 more drafts', child: 'across DL Cheetah, Mini Ballers, DL Unity', amount: 'CHF 2,720',
      subject: 'All drafted with the same warmth',
      body: 'Camille Lopez, Yann Mercier, Rebecca Dietrich, Daniel Lopes, Marie Sauter, +4 more — all personalized with parent name, child\'s name, program, and exact amount.' }
  ],
  firm: [
    { name: 'Mr. & Mrs. Müller', child: 'Sophia · DL Cheetah', amount: 'CHF 540',
      subject: 'Reminder: Sophia Müller — outstanding DL Cheetah fees',
      body: "Dear Mr. and Mrs. Müller,\n\nOur records show that Sophia's DL Cheetah May fees of CHF 540 are 21 days overdue. This is a follow-up reminder.\n\nPlease settle the balance via the secure payment link below by May 13.\n\nKind regards,\nD Lang\nFounder & Director, DLang Basketball" },
    { name: 'Mr. & Mrs. Romano', child: 'Lucas · Mini Ballers', amount: 'CHF 380',
      subject: 'Reminder: Lucas Romano — outstanding Mini Ballers fees',
      body: "Dear Mr. and Mrs. Romano,\n\nLucas's Mini Ballers May fees of CHF 380 are 14 days overdue. Please use the secure payment link below to settle within 7 days.\n\nKind regards,\nD Lang\nFounder & Director, DLang Basketball" },
    { name: 'Mr. & Mrs. Beck', child: 'Mateo & Tomas · Pro Training', amount: 'CHF 1,200',
      subject: 'Reminder: Beck family — outstanding Pro Training fees',
      body: "Dear Mr. and Mrs. Beck,\n\nMay fees for Mateo and Tomas in Pro Training (combined CHF 1,200) are 11 days overdue. This is a follow-up notice. Please settle via the link below within 7 days.\n\nKind regards,\nD Lang\nFounder & Director, DLang Basketball" },
    { name: 'Mr. & Mrs. Dubois', child: 'Emma · DL Cheetah', amount: 'CHF 540',
      subject: 'Reminder: Emma Dubois — outstanding DL Cheetah fees',
      body: "Dear Mr. and Mrs. Dubois,\n\nEmma's DL Cheetah May fees of CHF 540 are 9 days overdue. Please settle via the link below within 7 days.\n\nKind regards,\nD Lang\nFounder & Director, DLang Basketball" },
    { name: 'Mr. & Mrs. Schmid', child: 'Noah · DL Unity', amount: 'CHF 480',
      subject: 'Reminder: Noah Schmid — outstanding DL Unity fees',
      body: "Dear Mr. and Mrs. Schmid,\n\nNoah's DL Unity May fees of CHF 480 are 7 days overdue. Please settle via the link below within 7 days.\n\nKind regards,\nD Lang\nFounder & Director, DLang Basketball" },
    { name: '+ 9 more drafts', child: 'across DL Cheetah, Mini Ballers, DL Unity', amount: 'CHF 2,720',
      subject: 'All re-drafted in firm tone',
      body: 'Same 14 reminders, regenerated with formal salutations, no warmth, clear deadlines, founder title in the sign-off.' }
  ],
  final: [
    { name: 'Mr. & Mrs. Müller', child: 'Sophia · DL Cheetah', amount: 'CHF 540',
      subject: 'Final notice: Sophia Müller — outstanding DL Cheetah fees',
      body: "Dear Mr. and Mrs. Müller,\n\nThis is the final notice regarding Sophia's outstanding DL Cheetah May fees of CHF 540, now 21 days overdue.\n\nUnless settled within 7 days of this email, Sophia's training access will be temporarily suspended pending resolution.\n\nFor any questions, please contact me directly.\n\nD Lang\nFounder & Director, DLang Basketball" },
    { name: 'Mr. & Mrs. Romano', child: 'Lucas · Mini Ballers', amount: 'CHF 380',
      subject: 'Final notice: Lucas Romano — outstanding Mini Ballers fees',
      body: "Dear Mr. and Mrs. Romano,\n\nThis is the final notice regarding Lucas's outstanding Mini Ballers fees of CHF 380, now 14 days overdue.\n\nPlease settle within 7 days to avoid temporary training access suspension.\n\nD Lang\nFounder & Director, DLang Basketball" },
    { name: 'Mr. & Mrs. Beck', child: 'Mateo & Tomas · Pro Training', amount: 'CHF 1,200',
      subject: 'Final notice: Beck family — outstanding Pro Training fees',
      body: "Dear Mr. and Mrs. Beck,\n\nThis is the final notice regarding outstanding Pro Training fees for Mateo and Tomas (combined CHF 1,200), now 11 days overdue.\n\nPlease settle within 7 days to avoid temporary training access suspension.\n\nD Lang\nFounder & Director, DLang Basketball" },
    { name: 'Mr. & Mrs. Dubois', child: 'Emma · DL Cheetah', amount: 'CHF 540',
      subject: 'Final notice: Emma Dubois — outstanding DL Cheetah fees',
      body: "Dear Mr. and Mrs. Dubois,\n\nThis is the final notice regarding Emma's outstanding DL Cheetah fees of CHF 540, now 9 days overdue.\n\nPlease settle within 7 days to avoid temporary training access suspension.\n\nD Lang\nFounder & Director, DLang Basketball" },
    { name: 'Mr. & Mrs. Schmid', child: 'Noah · DL Unity', amount: 'CHF 480',
      subject: 'Final notice: Noah Schmid — outstanding DL Unity fees',
      body: "Dear Mr. and Mrs. Schmid,\n\nThis is the final notice regarding Noah's outstanding DL Unity fees of CHF 480, now 7 days overdue.\n\nPlease settle within 7 days to avoid temporary training access suspension.\n\nD Lang\nFounder & Director, DLang Basketball" },
    { name: '+ 9 more drafts', child: 'across DL Cheetah, Mini Ballers, DL Unity', amount: 'CHF 2,720',
      subject: 'All re-drafted as final notice',
      body: 'Same 14 reminders, regenerated with serious tone, suspension consequence, and concrete 7-day deadline.' }
  ]
};

export const screenTitles = {
  dashboard: 'Dashboard',
  athletes: 'Athletes',
  calendar: 'Schedule',
  programs: 'Camps & Programs',
  payments: 'Payments',
  ai: 'AI Assistant',
  parent: 'Parent app'
};
