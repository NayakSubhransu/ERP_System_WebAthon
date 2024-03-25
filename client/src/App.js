import Feedback from './components/Feedback';
import FeedbackAdmin from './components/Feedback_Admin';
import CourseStudent from './components/CourseStudent';
import CourseAdmin from './components/CourseAdmin';
import AcadmicDetails from './components/AcadmicDetail';
import ContactDetail from './components/ContactDetail';
function App() {
  return (
    <div className="App">
      <Feedback />
      <FeedbackAdmin />
      <CourseStudent />
      <CourseAdmin />
      <AcadmicDetails />
      <ContactDetail></ContactDetail>
    </div>
  );
}

export default App;
