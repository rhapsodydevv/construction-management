import { useState } from "react";

const STEPS = ["Project Info", "Team & Details", "Documents", "Review & Submit"];

export default function NewApplication({ onSubmit }) {
  const [step, setStep] = useState(1);

  const dotStyle = (n) => {
    if (n < step)  return { background: "var(--green)",   color: "#fff" };
    if (n === step) return { background: "var(--accent)",  color: "#fff" };
    return               { background: "var(--stone-2)", color: "var(--ink-4)" };
  };
  const lblStyle = (n) => {
    if (n < step)   return { color: "var(--green)"  };
    if (n === step) return { color: "var(--accent)" };
    return               { color: "var(--ink-4)"  };
  };

  return (
    <div className="content-panel active">
      <div className="page-header">
        <h2>New Application</h2>
        <p>Submit a construction permit application for a new residential project.</p>
      </div>

      {/* Step indicators */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, alignItems: "center" }}>
        {STEPS.map((label, i) => {
          const n = i + 1;
          return (
            <div key={n} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{
                  width: 26, height: 26, borderRadius: "50%",
                  display: "grid", placeItems: "center",
                  fontSize: 11, fontWeight: 700,
                  fontFamily: "'Syne', sans-serif",
                  ...dotStyle(n),
                }}>
                  {n < step ? "✓" : n}
                </div>
                <span style={{ fontSize: 12, fontWeight: n === step ? 600 : 500, ...lblStyle(n) }}>
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div style={{ flex: 1, height: 2, background: "var(--stone-2)", maxWidth: 60, marginLeft: 8 }} />
              )}
            </div>
          );
        })}
      </div>

      {/* ── Step 1: Project Info ── */}
      {step === 1 && (
        <div className="card">
          <h3 style={{ fontSize: 16, marginBottom: 20 }}>Project Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Project title</label>
              <input className="form-control" defaultValue="My New Residence" />
            </div>
            <div className="form-group">
              <label>Project type</label>
              <select className="form-control filter-select" style={{ border: "1.5px solid var(--stone-2)" }}>
                <option>Residential — Single unit</option>
                <option>Residential — Multi unit</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Plot number</label>
              <input className="form-control" defaultValue="Plot 23C" />
            </div>
            <div className="form-group">
              <label>Ward / Locality</label>
              <input className="form-control" defaultValue="Kilimani" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Estimated start date</label>
              <input className="form-control" type="date" defaultValue="2025-05-01" />
            </div>
            <div className="form-group">
              <label>Estimated completion</label>
              <input className="form-control" type="date" defaultValue="2026-06-30" />
            </div>
          </div>
          <div className="form-group">
            <label>Project description</label>
            <textarea
              className="form-control"
              rows={3}
              defaultValue="4-bedroom single-unit residential dwelling with attached garage and swimming pool."
            />
          </div>
          <div className="form-actions">
            <button className="btn-submit" onClick={() => setStep(2)}>
              Next: Team &amp; Details →
            </button>
          </div>
        </div>
      )}

      {/* ── Step 2: Team & Details ── */}
      {step === 2 && (
        <div className="card">
          <h3 style={{ fontSize: 16, marginBottom: 20 }}>Team &amp; Professional Details</h3>
          <div style={{
            fontSize: 12, color: "var(--ink-3)",
            background: "var(--accent-light)",
            borderRadius: "var(--radius)", padding: "10px 14px", marginBottom: 16,
          }}>
            All professionals must be registered with NCA / BORAQS / IEK before submission.
          </div>
          <div className="form-row">
            <div className="form-group"><label>Architect name</label><input className="form-control" placeholder="Full name" /></div>
            <div className="form-group"><label>Architect NCA reg. no.</label><input className="form-control" placeholder="e.g. ARK/2019/1234" /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label>Structural engineer</label><input className="form-control" placeholder="Full name" /></div>
            <div className="form-group"><label>Engineer IEK reg. no.</label><input className="form-control" placeholder="e.g. IEK/ENG/5678" /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label>Contractor company</label><input className="form-control" placeholder="Company name" /></div>
            <div className="form-group"><label>Contractor NCA no.</label><input className="form-control" placeholder="e.g. NCA/CONT/9012" /></div>
          </div>
          <div className="form-actions">
            <button className="btn-outline" onClick={() => setStep(1)}>← Back</button>
            <button className="btn-submit"  onClick={() => setStep(3)}>Next: Upload Documents →</button>
          </div>
        </div>
      )}

      {/* ── Step 3: Documents ── */}
      {step === 3 && (
        <div className="card">
          <h3 style={{ fontSize: 16, marginBottom: 6 }}>Required Documents</h3>
          <p style={{ fontSize: 13, color: "var(--ink-3)", marginBottom: 20 }}>
            Upload all required documents. Accepted formats: PDF, DWG, JPG, PNG (max 10MB each).
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Architectural — already uploaded */}
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                <span style={{ color: "var(--red)" }}>*</span> Architectural drawings
                <span className="status status-approved" style={{ fontSize: 10 }}>Uploaded</span>
              </label>
              <div className="file-item">
                <span className="file-icon">📄</span>
                <span className="file-name">architectural_drawings_v2.pdf</span>
                <span className="file-size">4.2 MB</span>
                <span className="file-status">✓ Ready</span>
              </div>
            </div>

            {/* Structural — upload zone */}
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                <span style={{ color: "var(--red)" }}>*</span> Structural design
              </label>
              <div className="upload-zone">
                <div className="upload-icon">📐</div>
                <p>Drag &amp; drop or <strong>browse files</strong></p>
                <p style={{ fontSize: 11, marginTop: 4 }}>PDF, DWG up to 10MB</p>
              </div>
            </div>

            {/* Title deed — already uploaded */}
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                <span style={{ color: "var(--red)" }}>*</span> Title deed / Land ownership
                <span className="status status-approved" style={{ fontSize: 10 }}>Uploaded</span>
              </label>
              <div className="file-item">
                <span className="file-icon">📜</span>
                <span className="file-name">title_deed_plot23c.pdf</span>
                <span className="file-size">1.1 MB</span>
                <span className="file-status">✓ Ready</span>
              </div>
            </div>

            {/* NCA certificate — upload zone */}
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)", marginBottom: 8, display: "block" }}>
                NCA contractor certificate
              </label>
              <div className="upload-zone">
                <div className="upload-icon">🏆</div>
                <p>Drag &amp; drop or <strong>browse files</strong></p>
                <p style={{ fontSize: 11, marginTop: 4 }}>PDF, JPG up to 10MB</p>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button className="btn-outline" onClick={() => setStep(2)}>← Back</button>
            <button className="btn-submit"  onClick={() => setStep(4)}>Review &amp; Submit →</button>
          </div>
        </div>
      )}

      {/* ── Step 4: Review & Submit ── */}
      {step === 4 && (
        <div className="card">
          <h3 style={{ fontSize: 16, marginBottom: 20 }}>Review &amp; Submit</h3>

          <div style={{ background: "var(--stone)", borderRadius: "var(--radius)", padding: 16, marginBottom: 16 }}>
            <div className="grid-2" style={{ gap: 12 }}>
              {[
                ["PROJECT",   "My New Residence"],
                ["PLOT",      "Plot 23C, Kilimani"],
                ["TYPE",      "Residential — Single unit"],
                ["DOCUMENTS", "2 of 4 uploaded"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontSize: 11, color: "var(--ink-4)", fontWeight: 600, marginBottom: 2 }}>{k}</div>
                  <div style={{ fontSize: 13 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: "var(--amber-light)", border: "1px solid var(--amber)",
            borderRadius: "var(--radius)", padding: "12px 16px",
            fontSize: 13, color: "var(--amber)", marginBottom: 16,
          }}>
            ⚠ 2 documents still pending upload. You can submit now and upload them within 5 business days.
          </div>

          <div style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 20, lineHeight: 1.7 }}>
            By submitting, you confirm that all information provided is accurate and that all
            professionals listed are registered with the relevant bodies. Submission of false
            information is an offence under the County Building Code.
          </div>

          <div className="form-actions">
            <button className="btn-outline" onClick={() => setStep(3)}>← Back</button>
            <button className="btn-submit" onClick={onSubmit} style={{ background: "var(--green)" }}>
              Submit Application
            </button>
          </div>
        </div>
      )}
    </div>
  );
}