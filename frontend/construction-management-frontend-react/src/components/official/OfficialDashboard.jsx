const PENDING_APPS = [
  { applicant: "John Mwangi",  project: "Karen Villa",       location: "Plot 12, Karen",  date: "Mar 17, 2025", cls: "status-submitted", lbl: "Submitted"   },
  { applicant: "Grace Akinyi", project: "Ngong Bungalow",    location: "Plot 77, Ngong",  date: "Mar 15, 2025", cls: "status-submitted", lbl: "Submitted"   },
  { applicant: "Samuel Njiru", project: "Runda Maisonette",  location: "Plot 3A, Runda",  date: "Mar 12, 2025", cls: "status-review",    lbl: "Under Review" },
];

const PHASES = [
  { color: "#5DCAA5", label: "Foundation", count: 14 },
  { color: "#378ADD", label: "Walling",    count: 11 },
  { color: "#7F77DD", label: "Roofing",    count: 9  },
  { color: "#EF9F27", label: "Finishing",  count: 8  },
  { color: "#888780", label: "Complete",   count: 6  },
];

const COMPLIANCE = [
  { label: "Approved applications",                pct: "68%", w: 68, color: "green" },
  { label: "Inspections passed (this quarter)",    pct: "81%", w: 81, color: "green" },
  { label: "Documents verified",                   pct: "74%", w: 74, color: ""      },
  { label: "Unauthorized constructions flagged",   pct: "12%", w: 12, color: "red"   },
];

export default function OfficialDashboard({ onNav, onOpenReview }) {
  return (
    <div className="content-panel active">
      <div className="page-header">
        <h2>Official Dashboard</h2>
        <p>Overview of all construction activity in the county.</p>
      </div>

      {/* Stats */}
      <div className="grid-4" style={{ marginBottom: 20 }}>
        <div className="stat-card"><div className="stat-icon">📋</div><div className="stat-label">Pending review</div><div className="stat-value">7</div><div className="stat-change" style={{ color: "var(--amber)" }}>3 urgent</div></div>
        <div className="stat-card"><div className="stat-icon">🏗️</div><div className="stat-label">Active projects</div><div className="stat-value">48</div><div className="stat-change">↑ 6 this month</div></div>
        <div className="stat-card"><div className="stat-icon">🔍</div><div className="stat-label">This week inspections</div><div className="stat-value">12</div><div className="stat-change">3 pending report</div></div>
        <div className="stat-card"><div className="stat-icon">⚠️</div><div className="stat-label">Stalled projects</div><div className="stat-value">5</div><div className="stat-change" style={{ color: "var(--red)" }}>Action required</div></div>
      </div>

      <div className="grid-2" style={{ marginBottom: 20 }}>
        {/* Compliance bars */}
        <div className="card">
          <div className="section-hd"><h3>Compliance overview</h3></div>
          {COMPLIANCE.map(({ label, pct, w, color }) => (
            <div className="progress-bar-wrap" key={label}>
              <div className="progress-bar-label"><span>{label}</span><span>{pct}</span></div>
              <div className="progress-bar-track">
                <div
                  className={`progress-bar-fill${color === "green" ? " green" : ""}`}
                  style={{ width: `${w}%`, ...(color === "red" ? { background: "var(--red)" } : {}) }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Phase distribution */}
        <div className="card">
          <div className="section-hd"><h3>Projects by phase</h3></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
            {PHASES.map(({ color, label, count }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 10, height: 10, borderRadius: 2, background: color, flexShrink: 0 }} />
                <div style={{ flex: 1, fontSize: 13, color: "var(--ink)" }}>{label}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>{count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awaiting review table */}
      <div className="section-hd">
        <h3>Applications awaiting review</h3>
        <button className="see-all" onClick={() => onNav("o-applications")}>View all 7 →</button>
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Applicant</th><th>Project</th><th>Location</th><th>Submitted</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            {PENDING_APPS.map((row) => (
              <tr key={row.project}>
                <td><strong>{row.applicant}</strong><br /><span style={{ fontSize: 11, color: "var(--ink-4)" }}>Developer</span></td>
                <td>{row.project}</td>
                <td>{row.location}</td>
                <td>{row.date}</td>
                <td><span className={`status ${row.cls}`}>{row.lbl}</span></td>
                <td><button className="action-btn action-btn-primary" onClick={onOpenReview}>Review</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}