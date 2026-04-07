const PROJECTS = [
  { name: "Kileleshwa Residence", plot: "Plot 45A", dev: "J. Mwangi",   ward: "Westlands", phase: "Roofing",    cls: "status-approved", lbl: "Active",  lastInsp: "Feb 20" },
  { name: "Lavington Duplex",     plot: "Plot 8B",  dev: "J. Mwangi",   ward: "Lavington", phase: "Finishing",  cls: "status-approved", lbl: "Active",  lastInsp: "Mar 5"  },
  { name: "Ngong Bungalow",       plot: "Plot 77",  dev: "G. Akinyi",   ward: "Ngong",     phase: "Foundation", cls: "status-review",   lbl: "Pending", lastInsp: "—"      },
  { name: "Ruaka Apartments",     plot: "Plot 204", dev: "M. Kipchoge", ward: "Ruaka",     phase: "Walling",    cls: "status-stalled",  lbl: "Stalled", lastInsp: "Jan 30" },
  { name: "Parklands Villa",      plot: "Plot 11A", dev: "P. Okonkwo",  ward: "Parklands", phase: "Foundation", cls: "status-approved", lbl: "Active",  lastInsp: "Mar 10" },
];

export default function AllProjects() {
  return (
    <div className="content-panel active">
      <div className="page-header">
        <h2>All Projects</h2>
        <p>County-wide view of all registered construction projects.</p>
      </div>

      <div className="toolbar">
        <input className="search-input" placeholder="Search projects..." />
        <select className="filter-select">
          <option>All phases</option><option>Foundation</option>
          <option>Walling</option><option>Roofing</option><option>Finishing</option>
        </select>
        <select className="filter-select">
          <option>All statuses</option><option>Active</option>
          <option>Stalled</option><option>Complete</option>
        </select>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Project</th><th>Developer</th><th>Ward</th><th>Phase</th><th>Status</th><th>Last Inspection</th><th></th></tr>
          </thead>
          <tbody>
            {PROJECTS.map((row) => (
              <tr key={row.name}>
                <td>
                  <strong>{row.name}</strong><br />
                  <span style={{ fontSize: 11, color: "var(--ink-4)" }}>{row.plot}</span>
                </td>
                <td>{row.dev}</td>
                <td>{row.ward}</td>
                <td><span className="inspection-phase" style={{ fontSize: 11 }}>{row.phase}</span></td>
                <td><span className={`status ${row.cls}`}>{row.lbl}</span></td>
                <td>{row.lastInsp}</td>
                <td><button className="action-btn action-btn-ghost">Details</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}