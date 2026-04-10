const RECENT_APPS = [
  { name: "Kileleshwa Residence", sub: "Plot 45A, Westlands", phase: "Roofing",    statusCls: "status-approved", statusLbl: "Approved"     },
  { name: "Karen Villa",          sub: "Plot 12, Karen",      phase: "Foundation", statusCls: "status-review",   statusLbl: "Under Review" },
  { name: "Lavington Duplex",     sub: "Plot 8B, Lavington",  phase: "Finishing",  statusCls: "status-approved", statusLbl: "Approved"     },
];

const RECENT_NOTIFS = [
  { title: "Inspection scheduled", body: "Roofing inspection for Kileleshwa Residence set for Mar 28", time: "2 hours ago" },
  { title: "Application approved", body: "Lavington Duplex plan approved. Construction may proceed.",  time: "Yesterday"   },
];

export default function ApplicantDashboard({ onNav }) {
  return (
    <div className="content-panel active">
      <div className="page-header">
        <h2>Good morning, John 👋</h2>
        <p>Here's an overview of your construction projects and applications.</p>
      </div>

      {/* Stat cards */}
      <div className="grid-4" style={{ marginBottom: 20 }}>
        <div className="stat-card">
          <div className="stat-icon">🏠</div>
          <div className="stat-label">Total Projects</div>
          <div className="stat-value">3</div>
          <div className="stat-change">↑ 1 this quarter</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-label">Under Review</div>
          <div className="stat-value">1</div>
          <div className="stat-change" style={{ color: "var(--amber)" }}>Avg. 5 days</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-label">Approved</div>
          <div className="stat-value">2</div>
          <div className="stat-change">Both compliant</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🔍</div>
          <div className="stat-label">Next Inspection</div>
          <div className="stat-value" style={{ fontSize: 18, paddingTop: 6 }}>Mar 28</div>
          <div className="stat-change">Roofing phase</div>
        </div>
      </div>

      <div className="grid-2">
        {/* Recent applications */}
        <div>
          <div className="section-hd">
            <h3>Recent applications</h3>
            <button className="see-all" onClick={() => onNav("a-projects")}>View all →</button>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Project</th><th>Phase</th><th>Status</th><th></th></tr>
              </thead>
              <tbody>
                {RECENT_APPS.map((app) => (
                  <tr key={app.name}>
                    <td>
                      <strong>{app.name}</strong><br />
                      <span style={{ fontSize: 11, color: "var(--ink-4)" }}>{app.sub}</span>
                    </td>
                    <td>
                      <span style={{ fontSize: 12, color: "var(--purple)" }}>{app.phase}</span>
                    </td>
                    <td>
                      <span className={`status ${app.statusCls}`}>{app.statusLbl}</span>
                    </td>
                    <td>
                      <button
                        className="action-btn action-btn-primary"
                        onClick={() => onNav("a-projects")}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right column */}
        <div>
          <div className="section-hd"><h3>Upcoming inspections</h3></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div className="inspection-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div className="inspection-date">Friday, 28 March 2025</div>
                  <div className="inspection-project">Kileleshwa Residence · Plot 45A</div>
                </div>
                <span className="inspection-phase">Roofing</span>
              </div>
              <div style={{ fontSize: 12, color: "var(--ink-3)" }}>
                Inspector: Eng. Wanjiku Njoroge · 9:00 AM
              </div>
            </div>

            <div className="inspection-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div className="inspection-date">Monday, 7 April 2025</div>
                  <div className="inspection-project">Karen Villa · Plot 12</div>
                </div>
                <span className="inspection-phase">Foundation</span>
              </div>
              <div style={{ fontSize: 12, color: "var(--ink-3)" }}>
                Pending assignment · 10:30 AM
              </div>
            </div>
          </div>

          <div className="section-hd" style={{ marginTop: 20 }}>
            <h3>Recent notifications</h3>
            <button className="see-all" onClick={() => onNav("a-notif")}>View all →</button>
          </div>
          <div className="card card-sm">
            {RECENT_NOTIFS.map((n) => (
              <div className="notif-item" key={n.title}>
                <div className="notif-item-dot unread" />
                <div>
                  <div className="notif-title">{n.title}</div>
                  <div className="notif-body">{n.body}</div>
                  <div className="notif-time">{n.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}