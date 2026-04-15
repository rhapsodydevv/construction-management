const CHECKLIST = [
  { name: "c1", label: "Roofing materials meet specifications",  defaultVal: "Pass" },
  { name: "c2", label: "Structural beams correctly installed",    defaultVal: "Pass" },
  { name: "c3", label: "Waterproofing membrane properly applied", defaultVal: "Fail" },
];

export default function ReportModal({ open, onClose, onSubmit }) {
  return (
    <div className={`modal-overlay${open ? " open" : ""}`}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-title">Record Inspection Findings</div>
        <div style={{ fontSize: 12, color: "var(--ink-4)", marginBottom: 16 }}>
          Kileleshwa Residence · Roofing · Mar 28, 2025
        </div>

        <div style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-3)", marginBottom: 10 }}>
          INSPECTION CHECKLIST
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
          {CHECKLIST.map(({ name, label, defaultVal }) => (
            <div
              key={name}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: 10, background: "var(--stone)",
                borderRadius: "var(--radius)",
              }}
            >
              <div style={{ flex: 1, fontSize: 13 }}>{label}</div>
              <div style={{ display: "flex", gap: 6 }}>
                {["Pass", "Fail", "N/A"].map((opt) => (
                  <label
                    key={opt}
                    style={{ fontSize: 12, display: "flex", alignItems: "center", gap: 4, cursor: "pointer" }}
                  >
                    <input type="radio" name={name} defaultChecked={opt === defaultVal} />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="form-group">
          <label>Overall outcome</label>
          <select className="form-control filter-select">
            <option>Pass</option>
            <option>Conditional pass</option>
            <option>Fail</option>
          </select>
        </div>

        <div className="form-group">
          <label>Inspector notes</label>
          <textarea
            className="form-control"
            rows={3}
            defaultValue="Waterproofing membrane on the east wing needs reapplication before next inspection. All other elements satisfactory."
          />
        </div>

        <div className="form-actions">
          <button className="btn-outline" onClick={onClose}>Cancel</button>
          <button className="btn-submit"  onClick={onSubmit}>Submit findings</button>
        </div>
      </div>
    </div>
  );
}
