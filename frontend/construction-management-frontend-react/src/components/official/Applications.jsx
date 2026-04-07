const APPS = [
  { num: "APP-2025-0058", applicant: "John Mwangi",   project: "Karen Villa · Plot 12, Karen",      date: "Mar 17",       cls: "status-submitted", lbl: "Submitted",   docColor: "var(--amber)", docTxt: "2/4 uploaded", canReview: true  },
  { num: "APP-2025-0055", applicant: "Grace Akinyi",  project: "Ngong Bungalow · Plot 77, Ngong",   date: "Mar 15",       cls: "status-submitted", lbl: "Submitted",   docColor: "var(--green)", docTxt: "4/4 uploaded", canReview: true  },
  { num: "APP-2025-0051", applicant: "Samuel Njiru",  project: "Runda Maisonette · Plot 3A",        date: "Mar 12",       cls: "status-review",    lbl: "Under Review",docColor: "var(--green)", docTxt: "4/4 uploaded", canReview: true  },
  { num: "APP-2025-0041", applicant: "John Mwangi",   project: "Kileleshwa Residence · Plot 45A",   date: "Jan 12",       cls: "status-approved",  lbl: "Approved",    docColor: "var(--green)", docTxt: "4/4 uploaded", canReview: false },
  { num: "APP-2024-0199", applicant: "John Mwangi",   project: "Lavington Duplex · Plot 8B",        date: "Dec 5, 2024",  cls: "status-approved",  lbl: "Approved",    docColor: "var(--green)", docTxt: "4/4 uploaded", canReview: false },
  { num: "APP-2024-0188", applicant: "Fatuma Hassan", project: "South B Townhouse · Plot 99",       date: "Nov 28, 2024", cls: "status-rejected",  lbl: "Rejected",    docColor: "var(--red)",   docTxt: "Incomplete",   canReview: false },
];

export default function Applications({ onOpenReview }) {
  return (
    <div className="content-panel active">
      <div className="page-header">
        <h2>Applications</h2>
        <p>All construction permit applications submitted by developers and applicants.</p>
      </div>

      <div className="toolbar">
        <input className="search-input" placeholder="Search by name, plot, project..." />
        <select className="filter-select">
          <option>All statuses</option><option>Submitted</option>
          <option>Under Review</option><option>Approved</option><option>Rejected</option>
        </select>
        <select className="filter-select">
          <option>All wards</option><option>Karen</option>
          <option>Westlands</option><option>Kilimani</option>
        </select>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>App #</th><th>Applicant</th><th>Project / Location</th><th>Submitted</th><th>Status</th><th>Documents</th><th>Action</th></tr>
          </thead>
          <tbody>
            {APPS.map((row) => (
              <tr key={row.num}>
                <td style={{ fontFamily: "monospace", fontSize: 12, color: "var(--ink-4)" }}>{row.num}</td>
                <td><strong>{row.applicant}</strong></td>
                <td>{row.project}</td>
                <td>{row.date}</td>
                <td><span className={`status ${row.cls}`}>{row.lbl}</span></td>
                <td><span style={{ fontSize: 12, color: row.docColor }}>{row.docTxt}</span></td>
                <td>
                  {row.canReview
                    ? <button className="action-btn action-btn-primary" onClick={onOpenReview}>Review</button>
                    : <button className="action-btn action-btn-ghost">View</button>
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