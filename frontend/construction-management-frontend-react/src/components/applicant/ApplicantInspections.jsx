const ROWS = [
  { project: "Kileleshwa Residence", phase: "Foundation", date: "Jan 15, 2025", inspector: "Eng. Kariuki", statusCls: "status-approved",  statusLbl: "Passed"    },
  { project: "Kileleshwa Residence", phase: "Walling",    date: "Feb 20, 2025", inspector: "Eng. Wanjiku", statusCls: "status-approved",  statusLbl: "Passed"    },
  { project: "Kileleshwa Residence", phase: "Roofing",    date: "Mar 28, 2025", inspector: "Eng. Wanjiku", statusCls: "status-review",    statusLbl: "Scheduled" },
  { project: "Karen Villa",          phase: "Foundation", date: "Apr 7, 2025",  inspector: "Pending",      statusCls: "status-submitted", statusLbl: "Pending"   },
];

export default function ApplicantInspections() {
  return (
    <div className="content-panel active">
      <div className="page-header">
        <h2>Inspections</h2>
        <p>View scheduled and completed inspections for your projects.</p>
      </div>

      <div className="grid-2" style={{ marginBottom: 20 }}>
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-label">Upcoming</div>
          <div className="stat-value">2</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-label">Completed</div>
          <div className="stat-value">4</div>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Project</th><th>Phase</th><th>Date</th><th>Inspector</th><th>Outcome</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr key={i}>
                <td>{row.project}</td>
                <td>{row.phase}</td>
                <td>{row.date}</td>
                <td>{row.inspector}</td>
                <td><span className={`status ${row.statusCls}`}>{row.statusLbl}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}