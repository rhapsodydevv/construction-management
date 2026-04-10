import { useState, useRef } from "react";
import AllProjects from "./components/official/AllProjects"
import OfficialSidebar from "./components/official/OfficialSidebar";
import OfficialDashboard from "./components/official/OfficialDashboard";




export default function App(){
  return(
    <>
      
      <AllProjects/>
      <OfficialSidebar/>
      <OfficialDashboard/>

      
    </>
    
  )
}
/*
import LoginPage from "./components/LoginPage.jsx";
import Topbar from "./components/Topbar.jsx";
import Toast from "./components/Toast.jsx";
import ReviewModal from "./components/ReviewModal.jsx";
import ScheduleModal from "./components/ScheduleModal.jsx";
import ReportModal from "./components/ReportModal.jsx";

// Applicant panels
import ApplicantSidebar from "./components/applicant/ApplicantSidebar.jsx";
import ApplicantDashboard from "./components/applicant/ApplicantDashboard.jsx";
import MyProjects from "./components/applicant/MyProjects.jsx";
import NewApplication from "./components/applicant/NewApplication.jsx";
import MyDocuments from "./components/applicant/MyDocuments.jsx";
import ApplicantInspections from "./components/applicant/ApplicantInspections.jsx";
import ApplicantNotifications from "./components/applicant/ApplicantNotifications.jsx";
import ApplicantProfile from "./components/applicant/ApplicantProfile.jsx";

// Official panels
import OfficialSidebar from "./components/official/OfficialSidebar.jsx";
import OfficialDashboard from "./components/official/OfficialDashboard.jsx";
import Applications from "./components/official/Applications.jsx";
import AllProjects from "./components/official/AllProjects.jsx";
import OfficialInspections from "./components/official/OfficialInspections.jsx";
import InspectionSchedule from "./components/official/InspectionSchedule.jsx";
import ComplianceMonitor from "./components/official/ComplianceMonitor.jsx";
import OfficialNotifications from "./components/official/OfficialNotifications.jsx";
import UserManagement from "./components/official/UserManagement.jsx";

export default function App() {
  const [view, setView] = useState("login");        // "login" | "applicant" | "official"
  const [role, setRole] = useState("applicant");
  const [applicantPanel, setApplicantPanel] = useState("a-dashboard");
  const [officialPanel,  setOfficialPanel]  = useState("o-dashboard");
  const [toast,          setToast]          = useState({ msg: "", show: false });
  const [reviewOpen,     setReviewOpen]     = useState(false);
  const [scheduleOpen,   setScheduleOpen]   = useState(false);
  const [reportOpen,     setReportOpen]     = useState(false);
  const toastTimer = useRef(null);

  function showToast(msg) {
    setToast({ msg, show: true });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast({ msg: "", show: false }), 3000);
  }

  function doLogin() {
    setView(role === "official" ? "official" : "applicant");
    setApplicantPanel("a-dashboard");
    setOfficialPanel("o-dashboard");
  }

  function quickLogin(r) {
    setRole(r);
    setView(r === "official" ? "official" : "applicant");
  }

  function doLogout() {
    setView("login");
    setRole("applicant");
  }

  function closeModals() {
    setReviewOpen(false);
    setScheduleOpen(false);
    setReportOpen(false);
  }

  function handleReviewAction(action) {
    closeModals();
    showToast(`Decision recorded: ${action}`);
  }

  // ── RENDER ────────────────────────────────────────────────
  if (view === "login") {
    return (
      <>
        <LoginPage role={role} setRole={setRole} onLogin={doLogin} onQuickLogin={quickLogin} />
        <Toast message={toast.msg} show={toast.show} />
      </>
    );
  }

  if (view === "applicant") {
    const panels = {
      "a-dashboard":   <ApplicantDashboard onNav={setApplicantPanel} />,
      "a-projects":    <MyProjects />,
      "a-apply":       <NewApplication onSubmit={() => { setApplicantPanel("a-projects"); showToast("Application submitted! Reference: APP-2025-0062"); }} />,
      "a-documents":   <MyDocuments />,
      "a-inspections": <ApplicantInspections />,
      "a-notif":       <ApplicantNotifications />,
      "a-profile":     <ApplicantProfile />,
    };
    return (
      <>
        <div className="app-shell">
          <Topbar role="applicant" onNotifClick={() => setApplicantPanel("a-notif")} onLogout={doLogout} />
          <div className="layout">
            <ApplicantSidebar activePanel={applicantPanel} onNav={setApplicantPanel} />
            <div className="main-content">
              {panels[applicantPanel] ?? panels["a-dashboard"]}
            </div>
          </div>
        </div>
        <Toast message={toast.msg} show={toast.show} />
      </>
    );
  }

  // Official view
  const officialPanels = {
    "o-dashboard":    <OfficialDashboard onNav={setOfficialPanel} onOpenReview={() => setReviewOpen(true)} />,
    "o-applications": <Applications onOpenReview={() => setReviewOpen(true)} />,
    "o-projects":     <AllProjects />,
    "o-inspections":  <OfficialInspections onOpenSchedule={() => setScheduleOpen(true)} onOpenReport={() => setReportOpen(true)} />,
    "o-schedule":     <InspectionSchedule onOpenSchedule={() => setScheduleOpen(true)} />,
    "o-compliance":   <ComplianceMonitor />,
    "o-notif":        <OfficialNotifications />,
    "o-users":        <UserManagement />,
  };
  return (
    <>
      <div className="app-shell">
        <Topbar role="official" onNotifClick={() => setOfficialPanel("o-notif")} onLogout={doLogout} />
        <div className="layout">
          <OfficialSidebar activePanel={officialPanel} onNav={setOfficialPanel} />
          <div className="main-content">
            {officialPanels[officialPanel] ?? officialPanels["o-dashboard"]}
          </div>
        </div>
      </div>

      <ReviewModal  open={reviewOpen}  onClose={closeModals} onAction={handleReviewAction} />
      <ScheduleModal open={scheduleOpen} onClose={closeModals} onSchedule={() => { closeModals(); showToast("Inspection scheduled. Applicant notified."); }} />
      <ReportModal  open={reportOpen}  onClose={closeModals} onSubmit={() => { closeModals(); showToast("Inspection findings submitted. Project status updated."); }} />
      <Toast message={toast.msg} show={toast.show} />
    </>
  );
}
*/