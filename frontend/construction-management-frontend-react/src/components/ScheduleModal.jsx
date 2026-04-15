export default function ScheduleModal({ open, onClose, onSchedule }) {
  return (
    <div className={`modal-overlay${open ? " open" : ""}`}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-title">Schedule Inspection</div>

        <div className="form-row">
          <div className="form-group">
            <label>Project</label>
            <select className="form-control filter-select">
              <option>Karen Villa — Plot 12</option>
              <option>Kileleshwa Residence</option>
              <option>Ngong Bungalow</option>
            </select>
          </div>
          <div className="form-group">
            <label>Construction phase</label>
            <select className="form-control filter-select">
              <option>Foundation</option>
              <option>Walling</option>
              <option>Roofing</option>
              <option>Finishing</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Inspection date</label>
            <input className="form-control" type="date" defaultValue="2025-04-07" />
          </div>
          <div className="form-group">
            <label>Time</label>
            <input className="form-control" type="time" defaultValue="10:30" />
          </div>
        </div>

        <div className="form-group">
          <label>Assign inspector</label>
          <select className="form-control filter-select">
            <option>Eng. Wanjiku Njoroge</option>
            <option>Eng. James Kariuki</option>
            <option>Eng. Mary Kamau</option>
          </select>
        </div>

        <div className="form-group">
          <label>Notes for inspector</label>
          <textarea
            className="form-control"
            rows={2}
            placeholder="Special instructions or access notes..."
          />
        </div>

        <div className="form-actions">
          <button className="btn-outline" onClick={onClose}>Cancel</button>
          <button className="btn-submit"  onClick={onSchedule}>Schedule inspection</button>
        </div>
      </div>
    </div>
  );
}
