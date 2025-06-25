import React, { useState } from "react"
import { FaToggleOn, FaToggleOff, FaUserCircle } from "react-icons/fa"
import "./TablePages.css"

const Attendance = () => {
    const today = new Date()
    const dateString = today.toISOString().split("T")[0]

    // Placeholder data
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Prajwal Poudel",
            email: "balajinant.com",
            isPresent: true,
        },
        {
            id: 2,
            name: "Karthik Subramanian",
            email: "project.com/user849",
            isPresent: true,
        },
        {
            id: 3,
            name: "Jagathesh Narayanan",
            email: "project.com/user849",
            isPresent: false,
        },
        {
            id: 4,
            name: "Steve Rogers",
            email: "project.com/user849",
            isPresent: true,
        },
        {
            id: 5,
            name: "Richard Hendricks",
            email: "project.com/user849",
            isPresent: true,
        },
    ])

    const toggleAttendance = (id) => {
        setStudents(
            students.map((s) =>
                s.id === id ? { ...s, isPresent: !s.isPresent } : s
            )
        )
        // API call to update attendance would go here
    }

    return (
        <div className="table-page-container">
            <h2>Today's Attendance</h2>
            <p>{dateString}</p>
            <div className="table-container card">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Attendance Status</th>
                            <th>Toggle Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>
                                    <FaUserCircle className="student-avatar" />{" "}
                                    {student.name}
                                </td>
                                <td>
                                    <a href={`mailto:${student.email}`}>
                                        {student.email}
                                    </a>
                                </td>
                                <td>
                                    <span
                                        className={`status ${student.isPresent ? "present" : "absent"}`}
                                    >
                                        {student.isPresent
                                            ? "Present"
                                            : "Absent"}
                                    </span>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            toggleAttendance(student.id)
                                        }
                                        className="toggle-btn"
                                    >
                                        {student.isPresent ? (
                                            <FaToggleOn />
                                        ) : (
                                            <FaToggleOff />
                                        )}
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

export default Attendance
