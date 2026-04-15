const ISSUES = [
  { project: "Ruaka Apartments",   dev: "M. Kipchoge", issue: "Failed walling inspection — reinforcement inadequate",    sevCls: "status-rejected", sevLbl: "High",   days: 49, canIssue: true  },
  { project: "South B Townhouse",  dev: "F. Hassan",   issue: "Construction commenced without approved permit",          sevCls: "status-rejected", sevLbl: "High",   days: 22, canIssue: true  },
  { project: "Kasarani Unit",      dev: "A. Mutua",    issue: "Architect certificate expired",                           sevCls: "status-submitted",sevLbl: "Medium", days: 8,  canIssue: false },
];

export default function ComplianceMonitor() {
  return (
    <div className="content-panel active">
      <div className="page-header">
        <h2>Compliance Monitor</h2>
        <p>Track regulatory compliance across all active projects.</p>
      </div>

      <div className="grid-3" style={{ marginBottom: 20 }}>
        <div className="stat-card" style={{ borderLeft: "3px solid var(--green)" }}>
          <div className="stat-label">Fully compliant</div>
          <div className="stat-value">31</div>
          <div className="stat-change">64.6% of active</div>
        </div>
        <div className="stat-card" style={{ borderLeft: "3px solid var(--amber)" }}>
          <div className="stat-label">Minor issues</div>
          <div className="stat-value">12</div>
          <div className="stat-change" style={{ color: "var(--amber)" }}>25% of active</div>
        </div>
        <div className="stat-card" style={{ borderLeft: "3px solid var(--red)" }}>
          <div className="stat-label">Non-compliant / flagged</div>
          <div className="stat-value">5</div>
          <div className="stat-change" style={{ color: "var(--red)" }}>Requires action</div>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Project</th><th>Developer</th><th>Issue</th><th>Severity</th><th>Days outstanding</th><th>Action</th></tr>
          </thead>
          <tbody>
            {ISSUES.map((row) => (
              <tr key={row.project}>
                <td><strong>{row.project}</strong></td>
                <td>{row.dev}</td>
                <td>{row.issue}</td>
                <td><span className={`status ${row.sevCls}`}>{row.sevLbl}</span></td>
                <td>{row.days}</td>
                <td>
                  {row.canIssue
                    ? <button className="action-btn action-btn-red">Issue notice</button>
                    : <button className="action-btn action-btn-ghost">Notify applicant</button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
