// TeacherDashboard.jsx
import { useLocation } from 'react-router-dom';
import EducatorsList from './EducatorsList';

export default function TeacherDashboard() {
  const { state } = useLocation();
  return (
    <div>
      {state?.welcome && (
        <div >
          <EducatorsList/>
        </div>
      )}
      {/* dashboard content */}
    </div>
  );
}
