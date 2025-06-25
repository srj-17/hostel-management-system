import React from "react"
import { Link } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa"
import "./StudentTable.css"

const StudentTable = ({ students }) => {
    return (
        <div className="student-table-container card">
            <table className="student-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>
                                <FaUserCircle className="student-avatar" />
                                {student.firstName} {student.lastName}
                            </td>
                            <td>
                                <a href={`mailto:${student.email}`}>
                                    {student.email}
                                </a>
                            </td>
                            <td>{student.phone}</td>
                            <td>
                                <Link to={`/student/${student.id}`}>
                                    <button className="view-btn">View</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentTable
