import React, { useState } from "react"
import { useParams, Link } from "react-router-dom"
import "./TablePages.css"

const StudentAttendance = () => {
    const { id } = useParams()
    const studentName = "Dinesh Kumar" // Placeholder

    // Placeholder data for a specific month
    const [attendance, setAttendance] = useState([
        { day: 1, isPresent: true },
        { day: 2, isPresent: true },
        { day: 3, isPresent: true },
        { day: 4, isPresent: false },
        { day: 5, isPresent: true },
    ])

    const toggleAttendance = (day) => {
        setAttendance(
            attendance.map((a) =>
                a.day === day ? { ...a, isPresent: !a.isPresent } : a
            )
        )
        // API call to update attendance status would go here
    }

    return (
        <div className="table-page-container">
            <div className="back-link">
                <Link to={`/student/${id}`}>
                    &larr; Back to Student Details
                </Link>
            </div>
            <h2>Attendances of {studentName} (June 2025)</h2>
            <div className="table-container card">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Day of Month</th>
                            <th>Attendance</th>
                            <th>Toggle Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendance.map((att) => (
                            <tr key={att.day}>
                                <td>{att.day}</td>
                                <td>
                                    <span
                                        className={`status ${att.isPresent ? "present" : "absent"}`}
                                    >
                                        {att.isPresent ? "Present" : "Absent"}
                                    </span>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            toggleAttendance(att.day)
                                        }
                                        className="action-btn"
                                    >
                                        Set{" "}
                                        {att.isPresent ? "Absent" : "Present"}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentAttendance
