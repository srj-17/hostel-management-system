import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import StudentForm from "../components/StudentForm"

const EditStudent = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    // In a real app, you would fetch this data from an API based on the id
    const studentData = {
        firstName: "Prajwal",
        lastName: "Poudel",
        email: "prajwal123@gmail.com",
        phone: "980323422",
    }

    const handleEditStudent = (updatedData) => {
        console.log(`Updating student ${id}:`, updatedData)
        // On success, navigate to the student's detail page or dashboard
        alert("Student updated successfully! (Placeholder)")
        navigate(`/student/${id}`)
    }

    return (
        <div>
            <h2>Update Student Details</h2>
            <StudentForm
                studentData={studentData}
                onSubmit={handleEditStudent}
            />
        </div>
    )
}

export default EditStudent
