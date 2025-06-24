import React, { useState } from "react"
import "./StudentForm.css"

export default function StudentForm({ studentData = {}, onSubmit }) {
    const [form, setForm] = useState({
        firstName: studentData.firstName || "",
        lastName: studentData.lastName || "",
        email: studentData.email || "",
        phone: studentData.phone || "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(form)
    }

    // Determine mode by presence of studentData
    const isEdit = Boolean(studentData && Object.keys(studentData).length)

    return (
        <div className="student-form-outer-card">
            <form
                className="student-form-grid"
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <h2 className="form-title">
                    {isEdit ? "Update Student Details" : "Register Student"}
                </h2>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={form.phone}
                    onChange={handleChange}
                    required
                />
                <button className="form-submit-btn" type="submit">
                    {isEdit ? "Edit" : "Create"}
                </button>
            </form>
        </div>
    )
}
