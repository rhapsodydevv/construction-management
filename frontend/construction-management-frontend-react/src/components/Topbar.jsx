export default function Topbar({ role, onNotifClick, onLogout }) {
  const isOfficial = role === "official";

  return (
    <div className="topbar">
      <div className="topbar-brand">
        <div
          className="brand-icon"
          style={{
            background: isOfficial ? "var(--green)" : "var(--accent)",
            width: 30,
            height: 30,
            borderRadius: 6,
            display: "grid",
            placeItems: "center",
            fontSize: 14,
          }}
        >
          🏗️
        </div>
        ConstructKE
      </div>

      <div className="topbar-divider" />

      <span className={`topbar-role-badge ${isOfficial ? "badge-official" : "badge-applicant"}`}>
        {isOfficial ? "County Official" : "Applicant Portal"}
      </span>

      <div className="topbar-right">
        <button className="notif-btn" onClick={onNotifClick}>
          🔔<span className="notif-dot" />
        </button>

        <div
          className="avatar"
          style={{ background: isOfficial ? "var(--green)" : "var(--accent)" }}
          title={isOfficial ? "Insp. Kariuki" : "John Mwangi"}
        >
          {isOfficial ? "IK" : "JM"}
        </div>

        <button className="logout-btn" onClick={onLogout}>
          Sign out
        </button>
      </div>
    </div>
  );
}
