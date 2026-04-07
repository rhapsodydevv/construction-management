const NOTIFICATIONS = [
  { unread: true,  title: "New application submitted",    body: "John Mwangi has submitted Karen Villa (APP-2025-0058) for review. 2 of 4 documents uploaded.",                     time: "3 hours ago" },
  { unread: true,  title: "Inspection report overdue",    body: "Roofing inspection report for Parklands Villa (Mar 24) has not been filed. Please submit within 24 hours.",        time: "5 hours ago" },
  { unread: true,  title: "Stalled project alert",        body: "Ruaka Apartments has had no activity for 49 days since failed walling inspection. Escalation recommended.",        time: "Yesterday"   },
  { unread: false, title: "Application approved — Kileleshwa", body: "You approved APP-2025-0041 for Kileleshwa Residence. Permit PERMIT-2025-0041 issued.",                       time: "Jan 8, 2025" },
];

export default function OfficialNotifications() {
  return (
    <div className="content-panel active">
      <div className="page-header"><h2>Notifications</h2></div>
      <div className="card">
        {NOTIFICATIONS.map((n) => (
          <div className="notif-item" key={n.title}>
            <div className={`notif-item-dot ${n.unread ? "unread" : "read"}`} />
            <div>
              <div className="notif-title">{n.title}</div>
              <div className="notif-body">{n.body}</div>
              <div className="notif-time">{n.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}