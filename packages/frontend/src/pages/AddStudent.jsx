import React from "react"
import { useNavigate } from "react-router-dom"
import StudentForm from "../components/StudentForm"

const AddStudent = () => {
    const navigate = useNavigate()

    const handleAddStudent = (studentData) => {
        // Here you would typically make an API call to create the student
        console.log("Adding new student:", studentData)
        // On success, navigate to the dashboard or the new student's detail page
        alert("Student created successfully! (Placeholder)")
        navigate("/")
    }

    return (
        <div>
            <h2>Register Student</h2>
            <StudentForm onSubmit={handleAddStudent} />
        </div>
    )
}

export default AddStudent
