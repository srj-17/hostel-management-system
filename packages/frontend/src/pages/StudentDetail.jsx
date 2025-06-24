import React from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa"
import "./StudentDetail.css"

const StudentDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    // Placeholder data - in a real app, fetch this based on `id`
    const student = {
        id: id,
        firstName: "Ram",
        lastName: "Hari",
        email: "ramhari@example.com",
        phone: "9812345678",
        age: 22,
        room: { roomNumber: "101" },
        bed: { bedNumber: "A" },
    }

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            console.log(`Deleting student ${id}`)
            // API call to delete student would go here
            alert("Student deleted successfully! (Placeholder)")
            navigate("/")
        }
    }

    if (!student) {
        return <div>Student not found</div>
    }

    return (
        <div className="student-detail-page">
            <div className="back-link">
                <Link to="/">&larr; Back to Dashboard</Link>
            </div>
            <div className="student-detail-card card">
                <div className="student-info">
                    <div className="student-photo">
                        <FaUserCircle size={100} />
                    </div>
                    <div className="student-data">
                        <h2>
                            {student.firstName} {student.lastName}
                        </h2>
                        <p>
                            <strong>Email:</strong> {student.email}
                        </p>
                        <p>
                            <strong>Contact:</strong> {student.phone}
                        </p>
                        <p>
                            <strong>Age:</strong> {student.age}
                        </p>
                        <p>
                            <strong>Room/Bed No:</strong>{" "}
                            {student.room.roomNumber} / {student.bed.bedNumber}
                        </p>
                    </div>
                </div>
                <div className="student-actions">
                    <div className="main-actions">
                        <Link to={`/student/${id}/payments`}>
                            <button>PAYMENT</button>
                        </Link>
                        <Link to={`/student/${id}/attendance`}>
                            <button>ATTENDANCE</button>
                        </Link>
                    </div>
                    <div className="secondary-actions">
                        <Link to={`/student/${id}/edit`}>
                            <button className="edit-btn">EDIT STUDENT</button>
                        </Link>
                        <button onClick={handleDelete} className="delete-btn">
                            DELETE STUDENT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDetail
