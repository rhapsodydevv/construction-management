const DOCS = [
  {
    bg: "var(--red-light)", icon: "📄",
    title: "architectural_drawings_v2.pdf", meta: "Architectural · 4.2 MB",
    statusCls: "status-approved", statusLbl: "Verified", faded: false,
  },
  {
    bg: "var(--green-light)", icon: "📜",
    title: "title_deed_plot12.pdf", meta: "Legal · 1.1 MB",
    statusCls: "status-approved", statusLbl: "Verified", faded: false,
  },
  {
    bg: "var(--stone)", icon: "📐",
    title: "Structural design", meta: "Not yet uploaded",
    statusCls: "status-stalled", statusLbl: "Missing", faded: true,
  },
  {
    bg: "var(--stone)", icon: "🏆",
    title: "NCA contractor certificate", meta: "Not yet uploaded",
    statusCls: "status-stalled", statusLbl: "Missing", faded: true,
  },
];

export default function ReviewModal({ open, onClose, onAction }) {
  return (
    <div className={`modal-overlay${open ? " open" : ""}`}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-title">Review Application — Karen Villa</div>
        <div style={{ fontSize: 12, color: "var(--ink-4)", marginBottom: 16 }}>
          APP-2025-0058 · Submitted Mar 17, 2025 · Developer: John Mwangi
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
          <span className="status status-submitted">Submitted</span>
          <span style={{ fontSize: 12, color: "var(--ink-3)", paddingTop: 4 }}>
            → Awaiting your decision
          </span>
        </div>

        <div className="section-divider" />
        <div style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-3)", marginBottom: 10 }}>
          SUBMITTED DOCUMENTS
        </div>

        {DOCS.map((doc) => (
          <div
            key={doc.title}
            className="doc-list-item"
            style={{ cursor: "default", ...(doc.faded ? { opacity: 0.6 } : {}) }}
          >
            <div className="doc-type-icon" style={{ background: doc.bg }}>{doc.icon}</div>
            <div className="doc-info">
              <div className="doc-title">{doc.title}</div>
              <div className="doc-meta">{doc.meta}</div>
            </div>
            <span className={`status ${doc.statusCls}`}>{doc.statusLbl}</span>
          </div>
        ))}

        <div className="section-divider" />

        <div className="form-group">
          <label>Review notes / Comments</label>
          <textarea
            className="form-control"
            rows={3}
            defaultValue="Structural design and NCA certificate still outstanding. Please request applicant to upload within 5 business days before proceeding."
          />
        </div>

        <div className="review-actions">
          <button className="btn-approve"  onClick={() => onAction("Approved")}>
            ✓ Approve
          </button>
          <button className="btn-moreinfo" onClick={() => onAction("More info requested")}>
            ⟳ Request info
          </button>
          <button className="btn-reject"   onClick={() => onAction("Rejected")}>
            ✕ Reject
          </button>
        </div>
      </div>
    </div>
  );
}
