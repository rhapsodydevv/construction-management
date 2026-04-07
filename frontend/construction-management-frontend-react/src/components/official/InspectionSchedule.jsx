const SCHEDULE = [
  { date: "Mon Mar 24", phase: "Foundation", project: "Parklands Villa · Eng. Kamau",         time: "9:00 AM"  },
  { date: "Thu Mar 27", phase: "Finishing",  project: "Lavington Duplex · Eng. Njoroge",       time: "11:00 AM" },
  { date: "Fri Mar 28", phase: "Roofing",    project: "Kileleshwa Residence · Eng. Wanjiku",   time: "9:00 AM"  },
  { date: "Mon Mar 31", phase: "Walling",    project: "Ngong Bungalow · Eng. Kariuki",         time: "2:00 PM"  },
  { date: "Wed Apr 2",  phase: "Foundation", project: "Runda Maisonette · Pending",            time: "10:00 AM" },
  { date: "Mon Apr 7",  phase: "Foundation", project: "Karen Villa · Pending assignment",      time: "10:30 AM" },
];

export default function InspectionSchedule({ onOpenSchedule }) {
  return (
    <div className="content-panel active">
      <div className="page-header">
        <h2>Inspection Schedule</h2>
        <p>Calendar view of all upcoming inspections across the county.</p>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <button className="toolbar-btn toolbar-btn-primary" onClick={onOpenSchedule}>
          + Schedule inspection
        </button>
      </div>

      <div className="grid-3">
        {SCHEDULE.map((item) => (
          <div className="inspection-card" key={item.date + item.project}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="inspection-date">{item.date}</div>
              <span className="inspection-phase">{item.phase}</span>
            </div>
            <div className="inspection-project">{item.project}</div>
            <div style={{ fontSize: 12, color: "var(--ink-3)" }}>{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}