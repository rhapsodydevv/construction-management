const NAV_ITEMS = [
  { section: "Main" },
  { id: "a-dashboard",   icon: "📊", label: "Dashboard" },
  { id: "a-projects",    icon: "🏠", label: "My Projects",   badge: "3" },
  { id: "a-apply",       icon: "📋", label: "New Application" },
  { id: "a-documents",   icon: "📁", label: "Documents" },
  { section: "Activity" },
  { id: "a-inspections", icon: "🔍", label: "Inspections" },
  { id: "a-notif",       icon: "🔔", label: "Notifications",  badge: "4", badgeRed: true },
  { section: "Account" },
  { id: "a-profile",     icon: "👤", label: "Profile" },
];

export default function ApplicantSidebar({ activePanel, onNav }) {
  return (
    <div className="sidebar">
      {NAV_ITEMS.map((item, i) =>
        item.section ? (
          <span key={i} className="nav-section-label">{item.section}</span>
        ) : (
          <button
            key={item.id}
            className={`nav-item${activePanel === item.id ? " active" : ""}`}
            onClick={() => onNav(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
            {item.badge && (
              <span className={`nav-badge${item.badgeRed ? " red" : ""}`}>
                {item.badge}
              </span>
            )}
          </button>
        )
      )}
    </div>
  );
}
