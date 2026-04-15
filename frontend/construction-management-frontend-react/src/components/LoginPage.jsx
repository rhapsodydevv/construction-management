export default function LoginPage({ role, setRole, onLogin, onQuickLogin }) {
  return (
    <div className="login-page">

      {/* ── Left branding panel ── */}
      <div className="login-left">
        <div className="brand">
          <div className="brand-logo">
            <div className="brand-icon">🏗️</div>
            ConstructKE
          </div>
          <div className="brand-tagline">County Construction Management System</div>
        </div>

        <div className="login-hero">
          <h1>
            Building<br />
            <span>safer cities</span><br />
            together.
          </h1>
          <p>
            A unified digital platform for construction approvals, inspections, and
            compliance monitoring across Kenya's counties.
          </p>
          <div className="stat-pills">
            <div className="stat-pill"><strong>1,240+</strong> Projects tracked</div>
            <div className="stat-pill"><strong>98%</strong> Compliance rate</div>
            <div className="stat-pill"><strong>5</strong> Stakeholder roles</div>
          </div>
        </div>

        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>
          Aligned with NCA guidelines · BORAQS standards
        </div>
      </div>

      {/* ── Right form panel ── */}
      <div className="login-right">
        <div className="login-form-wrap">
          <h2>Welcome back</h2>
          <p className="sub">Sign in to your account to continue.</p>

          <div className="role-tabs">
            {["applicant", "official", "admin"].map((r) => (
              <button
                key={r}
                className={`role-tab${role === r ? " active" : ""}`}
                onClick={() => setRole(r)}
              >
                {r === "applicant" ? "Applicant" : r === "official" ? "County Official" : "Admin"}
              </button>
            ))}
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              className="form-control"
              type="email"
              placeholder="you@example.com"
              defaultValue="john.mwangi@gmail.com"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="••••••••"
              defaultValue="••••••••"
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
            <a style={{ fontSize: 12, color: "var(--accent)", cursor: "pointer" }}>
              Forgot password?
            </a>
          </div>

          <button className="btn-primary" onClick={onLogin}>
            Sign in to ConstructKE
          </button>

          <div className="login-footer">
            Don't have an account? <a>Create one here</a>
          </div>

          <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid var(--stone-2)" }}>
            <p style={{ fontSize: 11, color: "var(--ink-4)", textAlign: "center", marginBottom: 10 }}>
              Quick demo access
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                className="action-btn action-btn-ghost"
                style={{ flex: 1, fontSize: 12, padding: 8 }}
                onClick={() => onQuickLogin("applicant")}
              >
                Applicant demo
              </button>
              <button
                className="action-btn action-btn-green"
                style={{ flex: 1, fontSize: 12, padding: 8 }}
                onClick={() => onQuickLogin("official")}
              >
                Official demo
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
