const PHASES = [
  { label: "Foundation", sub: "Jan 10",      cls: "step-dot-done",    txt: "✓", lineColor: "var(--green)",   lblColor: "var(--green)"  },
  { label: "Walling",    sub: "Feb 15",      cls: "step-dot-done",    txt: "✓", lineColor: "var(--accent)",  lblColor: "var(--green)"  },
  { label: "Roofing",    sub: "In progress", cls: "step-dot-active",  txt: "3", lineColor: "var(--stone-2)", lblColor: "var(--accent)" },
  { label: "Finishing",  sub: "—",           cls: "step-dot-pending", txt: "4", lineColor: "var(--stone-2)", lblColor: "var(--ink-4)"  },
  { label: "Complete",   sub: "—",           cls: "step-dot-pending", txt: "5", lineColor: null,             lblColor: "var(--ink-4)"  },
];

const TIMELINE = [
  { cls: "tl-done",    title: "Application submitted",        date: "12 Dec 2024 · 10:32 AM", note: "All documents uploaded and submitted for review."                  },
  { cls: "tl-done",    title: "Under review",                 date: "16 Dec 2024 · 2:15 PM",  note: "Assigned to Insp. Kariuki for plan review."                        },
  { cls: "tl-done",    title: "Plan approved",                date: "8 Jan 2025 · 9:00 AM",   note: "Architectural and structural plans approved. Permit issued."        },
  { cls: "tl-active",  title: "Roofing inspection scheduled", date: "28 Mar 2025 · 9:00 AM",  note: "Inspection by Eng. Wanjiku Njoroge."                               },
  { cls: "tl-pending", title: "Finishing phase inspection",   date: "Pending",                note: ""                                                                   },
];

const TEAM = [
  ["Architect",   "Arch. Peter Otieno"],
  ["Engineer",    "Eng. Mary Kamau"],
  ["Contractor",  "BuildRight Ltd"],
];

export default function MyProjects() {
  return (
    <div className="content-panel active">
      <div className="page-header">
        <h2>My Projects</h2>
        <p>Track status and progress for all your registered construction projects.</p>
      </div>

      {/* ── Main project card ── */}
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div>
            <h3 style={{ fontSize: 17, fontWeight: 700 }}>Kileleshwa Residence</h3>
            <div style={{ fontSize: 12, color: "var(--ink-4)", marginTop: 2 }}>
              Plot 45A, Westlands Ward · Application #APP-2025-0041
            </div>
          </div>
          <span className="status status-approved">Approved</span>
        </div>

        {/* Phase stepper */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-3)", marginBottom: 10 }}>
            CONSTRUCTION PHASES
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            {PHASES.map(({ label, sub, cls, txt, lineColor, lblColor }) => (
              <div key={label} style={{ display: "flex", alignItems: "flex-start", flex: 1 }}>
                <div style={{ flex: 1, textAlign: "center" }}>
                  <div className={`step-dot ${cls}`} style={{ margin: "0 auto 4px" }}>{txt}</div>
                  <div style={{ fontSize: 10, color: lblColor, fontWeight: 600 }}>{label}</div>
                  <div style={{ fontSize: 10, color: "var(--ink-4)" }}>{sub}</div>
                </div>
                {lineColor && (
                  <div style={{ flex: 1, height: 2, background: lineColor, marginTop: 14 }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="grid-3">
          {TEAM.map(([role, name]) => (
            <div key={role}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "var(--ink-4)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 4 }}>
                {role}
              </div>
              <div style={{ fontSize: 13, color: "var(--ink)" }}>{name}</div>
            </div>
          ))}
        </div>

        <div className="section-divider" />

        {/* Timeline */}
        <div className="section-hd"><h3>Application timeline</h3></div>
        <div className="timeline">
          {TIMELINE.map((item) => (
            <div className="timeline-item" key={item.title}>
              <div className={`timeline-dot ${item.cls}`} />
              <div className="timeline-title">{item.title}</div>
              <div className="timeline-date">{item.date}</div>
              {item.note && <div className="timeline-note">{item.note}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* ── Other project summary cards ── */}
      <div className="grid-2">
        <div className="card card-sm">
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Karen Villa</div>
              <div style={{ fontSize: 11, color: "var(--ink-4)" }}>Plot 12, Karen · #APP-2025-0058</div>
            </div>
            <span className="status status-review">Under Review</span>
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-bar-label"><span>Foundation phase</span><span>15%</span></div>
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: "15%" }} />
            </div>
          </div>
          <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 8 }}>
            Submitted 3 days ago. Awaiting document verification.
          </div>
        </div>

        <div className="card card-sm">
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Lavington Duplex</div>
              <div style={{ fontSize: 11, color: "var(--ink-4)" }}>Plot 8B, Lavington · #APP-2024-0199</div>
            </div>
            <span className="status status-approved">Approved</span>
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-bar-label"><span>Finishing phase</span><span>85%</span></div>
            <div className="progress-bar-track">
              <div className="progress-bar-fill green" style={{ width: "85%" }} />
            </div>
          </div>
          <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 8 }}>
            Completion certificate expected April 2025.
          </div>
        </div>
      </div>
    </div>
  );
}