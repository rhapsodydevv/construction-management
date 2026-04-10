const NOTIFICATIONS = [
  { unread: true,  title: "Roofing inspection confirmed",       body: "Your roofing inspection for Kileleshwa Residence is confirmed for 28 March 2025 at 9:00 AM with Eng. Wanjiku Njoroge.", time: "2 hours ago"      },
  { unread: true,  title: "Application approved — Lavington Duplex", body: "Your construction plan for Lavington Duplex has been approved. Your permit number is PERMIT-2025-0041.",          time: "Yesterday at 3:12 PM" },
  { unread: true,  title: "Document request — Karen Villa",     body: "County official has requested your soil test report for Karen Villa. Please upload within 5 business days.",             time: "2 days ago"       },
  { unread: true,  title: "Karen Villa application received",   body: "Your application #APP-2025-0058 has been received and assigned for document verification.",                               time: "3 days ago"       },
  { unread: false, title: "Walling inspection passed",          body: "Kileleshwa Residence walling inspection completed successfully. Construction may proceed to roofing phase.",             time: "Feb 20, 2025"     },
];

export default function ApplicantNotifications() {
  return (
    <div className="content-panel active">
      <div className="page-header">
        <h2>Notifications</h2>
        <p>Status updates, reminders and messages from county officials.</p>
      </div>

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