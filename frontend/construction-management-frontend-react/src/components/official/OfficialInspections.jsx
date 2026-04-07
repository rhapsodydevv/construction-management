const ROWS = [
  { project: "Kileleshwa Residence", phase: "Roofing",    date: "Mar 28, 2025", inspector: "Eng. Wanjiku", stsCls: "status-review",   stsLbl: "Scheduled", outcome: "—",      canRecord: true  },
  { project: "Parklands Villa",      phase: "Foundation", date: "Mar 25, 2025", inspector: "Eng. Kamau",   stsCls: "status-review",   stsLbl: "Scheduled", outcome: "—",      canRecord: true  },
  { project: "Ruaka Apartments",     phase: "Walling",    date: "Jan 30, 2025", inspector: "Eng. Kariuki", stsCls: "status-stalled",  stsLbl: "Completed", outcomeCls: "status-rejected",  outcomeLbl: "Failed",  canRecord: false },
  { project: "Kileleshwa Residence", phase: "Walling",    date: "Feb 20, 2025", inspector: "Eng. Wanjiku", stsCls: "status-stalled",  stsLbl: "Completed", outcomeCls: "status-approved",  outcomeLbl: "Passed",  canRecord: false },
];

export default function OfficialInspections({ onOpenSchedule, onOpenReport }) {
  return (
    <div className="content-panel active">
      <div className="page-header">
        <h2>Inspections</h2>
        <p>Manage, conduct, and record site inspections.</p>
      </div>

      <div className="grid-4" style={{ marginBottom: 20 }}>
        <div className="stat-card"><div className="stat-icon">🗓️</div><div className="stat-label">This week</div><div className="stat-value">12</div></div>
        <div className="stat-card"><div className="stat-icon">⏳</div><div className="stat-label">Pending report</div><div className="stat-value">3</div></div>
        <div className="stat-card"><div className="stat-icon">✅</div><div className="stat-label">Passed (Mar)</div><div className="stat-value">18</div></div>
        <div className="stat-card"><div className="stat-icon">❌</div><div className="stat-label">Failed (Mar)</div><div className="stat-value">4</div></div>
      </div>

      <div className="toolbar">
        <input className="search-input" placeholder="Search inspections..." />
        <select className="filter-select">
          <option>All phases</option><option>Foundation</option>
          <option>Walling</option><option>Roofing</option><option>Finishing</option>
        </select>
        <select className="filter-select">
          <option>All outcomes</option><option>Scheduled</option>
          <option>Passed</option><option>Failed</option><option>Conditional</option>
        </select>
        <button className="toolbar-btn toolbar-btn-primary" onClick={onOpenSchedule}>
          + Schedule inspection
        </button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Project</th><th>Phase</th><th>Date</th><th>Inspector</th><th>Status</th><th>Outcome</th><th>Action</th></tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr key={i}>
                <td>{row.project}</td>
                <td>{row.phase}</td>
                <td>{row.date}</td>
                <td>{row.inspector}</td>
                <td><span className={`status ${row.stsCls}`}>{row.stsLbl}</span></td>
                <td>
                  {row.outcomeCls
                    ? <span className={`status ${row.outcomeCls}`}>{row.outcomeLbl}</span>
                    : "—"
                  }
                </td>
                <td>
                  {row.canRecord
                    ? <button className="action-btn action-btn-primary" onClick={onOpenReport}>Record findings</button>
                    : <button className="action-btn action-btn-ghost">View report</button>
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