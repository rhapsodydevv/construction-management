const NAV_ITEMS = [
  { section: "Overview" },
  { id: "o-dashboard",    icon: "📊", label: "Dashboard" },
  { id: "o-applications", icon: "📋", label: "Applications", badge: "7" },
  { id: "o-projects",     icon: "🏗️", label: "All Projects" },
  { section: "Inspections" },
  { id: "o-inspections",  icon: "🔍", label: "Inspections",   badge: "3" },
  { id: "o-schedule",     icon: "🗓️", label: "Schedule" },
  { section: "Tools" },
  { id: "o-compliance",   icon: "✅", label: "Compliance" },
  { id: "o-notif",        icon: "🔔", label: "Notifications", badge: "5", badgeRed: true },
  { id: "o-users",        icon: "👥", label: "Users" },
];

export default function OfficialSidebar({ activePanel, onNav }) {
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

