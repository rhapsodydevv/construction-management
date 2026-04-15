const DOCS = [
  { icon: "📄", bg: "var(--red-light)",    title: "architectural_drawings_v2.pdf", meta: "Kileleshwa Residence · Architectural · 4.2 MB · Uploaded Jan 12, 2025", statusCls: "status-approved", statusLbl: "Verified"     },
  { icon: "📐", bg: "var(--accent-light)", title: "structural_design_final.pdf",   meta: "Kileleshwa Residence · Structural · 6.8 MB · Uploaded Jan 12, 2025",   statusCls: "status-approved", statusLbl: "Verified"     },
  { icon: "📜", bg: "var(--green-light)",  title: "title_deed_plot45a.pdf",        meta: "Kileleshwa Residence · Legal · 1.1 MB · Uploaded Jan 12, 2025",        statusCls: "status-approved", statusLbl: "Verified"     },
  { icon: "🏆", bg: "var(--amber-light)",  title: "nca_contractor_cert.pdf",       meta: "Karen Villa · NCA Certificate · 0.9 MB · Uploaded Mar 1, 2025",        statusCls: "status-review",   statusLbl: "Under Review" },
];

export default function MyDocuments() {
  return (
    <div className="content-panel active">
      <div className="page-header">
        <h2>My Documents</h2>
        <p>All documents uploaded across your applications.</p>
      </div>

      <div className="toolbar">
        <input className="search-input" placeholder="Search documents..." />
        <select className="filter-select">
          <option>All types</option>
          <option>Architectural</option>
          <option>Structural</option>
          <option>Legal</option>
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {DOCS.map((doc) => (
          <div className="doc-list-item" key={doc.title}>
            <div className="doc-type-icon" style={{ background: doc.bg }}>{doc.icon}</div>
            <div className="doc-info">
              <div className="doc-title">{doc.title}</div>
              <div className="doc-meta">{doc.meta}</div>
            </div>
            <span className={`status ${doc.statusCls}`}>{doc.statusLbl}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
