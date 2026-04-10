export default function ApplicantProfile() {
  return (
    <div className="content-panel active">
      <div className="page-header"><h2>My Profile</h2></div>
      <div className="grid-2">
        <div className="card">
          <h3 style={{ fontSize: 15, marginBottom: 16 }}>Personal information</h3>
          <div className="form-group"><label>Full name</label><input className="form-control" defaultValue="John Mwangi" /></div>
          <div className="form-group"><label>Email</label><input className="form-control" defaultValue="john.mwangi@gmail.com" /></div>
          <div className="form-group"><label>Phone</label><input className="form-control" defaultValue="+254 712 345 678" /></div>
          <div className="form-group"><label>National ID</label><input className="form-control" defaultValue="12345678" /></div>
          <button className="btn-submit" style={{ width: "auto", padding: "10px 24px" }}>Save changes</button>
        </div>
        <div className="card">
          <h3 style={{ fontSize: 15, marginBottom: 16 }}>Account security</h3>
          <div className="form-group"><label>Current password</label><input className="form-control" type="password" placeholder="••••••••" /></div>
          <div className="form-group"><label>New password</label><input className="form-control" type="password" placeholder="••••••••" /></div>
          <div className="form-group"><label>Confirm password</label><input className="form-control" type="password" placeholder="••••••••" /></div>
          <button className="btn-submit" style={{ width: "auto", padding: "10px 24px", background: "var(--ink)" }}>Update password</button>
        </div>
      </div>
    </div>
  );
}
