const USERS = [
  { name: "John Mwangi",       role: "Developer",  roleCls: "status-review",   email: "john.mwangi@gmail.com",   projects: 3, stsCls: "status-approved", stsLbl: "Active"    },
  { name: "Grace Akinyi",      role: "Developer",  roleCls: "status-review",   email: "grace.akinyi@gmail.com",  projects: 1, stsCls: "status-approved", stsLbl: "Active"    },
  { name: "Arch. Peter Otieno",role: "Architect",  roleCls: null,              email: "peter.otieno@arc.co.ke",  projects: 5, stsCls: "status-approved", stsLbl: "Active"    },
  { name: "Eng. Mary Kamau",   role: "Engineer",   roleCls: null,              email: "m.kamau@eng.ke",          projects: 4, stsCls: "status-approved", stsLbl: "Active"    },
  { name: "Fatuma Hassan",     role: "Developer",  roleCls: "status-review",   email: "fatuma.hassan@gmail.com", projects: 1, stsCls: "status-stalled",  stsLbl: "Suspended" },
];

function roleStyle(role, roleCls) {
  if (roleCls) return {};
  if (role === "Architect") return { background: "var(--purple-light)", color: "var(--purple)" };
  return { background: "var(--amber-light)", color: "var(--amber)" };
}

export default function UserManagement() {
  return (
    <div className="content-panel active">
      <div className="page-header">
        <h2>User Management</h2>
        <p>Manage registered accounts across all roles.</p>
      </div>

      <div className="toolbar">
        <input className="search-input" placeholder="Search users..." />
        <select className="filter-select">
          <option>All roles</option><option>Developer</option><option>Architect</option>
          <option>Engineer</option><option>Official</option><option>Public</option>
        </select>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Name</th><th>Role</th><th>Email</th><th>Projects</th><th>Status</th><th>Action</th></tr>
          </thead>
          <tbody>
            {USERS.map((u) => (
              <tr key={u.name}>
                <td><strong>{u.name}</strong></td>
                <td>
                  <span
                    className={`status ${u.roleCls || ""}`}
                    style={{ fontSize: 10, ...roleStyle(u.role, u.roleCls) }}
                  >
                    {u.role}
                  </span>
                </td>
                <td>{u.email}</td>
                <td>{u.projects}</td>
                <td><span className={`status ${u.stsCls}`}>{u.stsLbl}</span></td>
                <td><button className="action-btn action-btn-ghost">Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
