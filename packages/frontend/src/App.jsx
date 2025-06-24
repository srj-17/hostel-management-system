import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import AddStudent from "./pages/AddStudent"
import EditStudent from "./pages/EditStudent"
import StudentDetail from "./pages/StudentDetail"
import StudentPayments from "./pages/StudentPayments"
import StudentAttendance from "./pages/StudentAttendance"
import Attendance from "./pages/Attendance"
import VacantBeds from "./pages/VacantBeds"
import "./App.css"

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/student/new" element={<AddStudent />} />
                    <Route path="/student/:id" element={<StudentDetail />} />
                    <Route path="/student/:id/edit" element={<EditStudent />} />
                    <Route
                        path="/student/:id/payments"
                        element={<StudentPayments />}
                    />
                    <Route
                        path="/student/:id/attendance"
                        element={<StudentAttendance />}
                    />
                    <Route path="/attendance" element={<Attendance />} />
                    <Route path="/beds/vacant" element={<VacantBeds />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
