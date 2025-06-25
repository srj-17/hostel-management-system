import React, { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { FaToggleOn, FaToggleOff } from "react-icons/fa"
import "./TablePages.css"

const StudentPayments = () => {
    const { id } = useParams()
    const studentName = "Dinesh Kumar" // Placeholder

    // Placeholder data
    const [payments, setPayments] = useState([
        { year: 2025, month: 1, isPaid: true },
        { year: 2025, month: 2, isPaid: true },
        { year: 2025, month: 3, isPaid: true },
        { year: 2025, month: 4, isPaid: false },
        { year: 2025, month: 5, isPaid: false },
        { year: 2025, month: 6, isPaid: false },
    ])

    const togglePaidStatus = (year, month) => {
        setPayments(
            payments.map((p) =>
                p.year === year && p.month === month
                    ? { ...p, isPaid: !p.isPaid }
                    : p
            )
        )
        // API call to update payment status would go here
    }

    return (
        <div className="table-page-container">
            <div className="back-link">
                <Link to={`/student/${id}`}>
                    &larr; Back to Student Details
                </Link>
            </div>
            <h2>Payments of {studentName}</h2>
            <div className="table-container card">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Month</th>
                            <th>Paid Status</th>
                            <th>Toggle Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment) => (
                            <tr key={`${payment.year}-${payment.month}`}>
                                <td>{payment.year}</td>
                                <td>
                                    {new Date(
                                        payment.year,
                                        payment.month - 1
                                    ).toLocaleString("default", {
                                        month: "long",
                                    })}
                                </td>
                                <td>
                                    <span
                                        className={`status ${payment.isPaid ? "paid" : "unpaid"}`}
                                    >
                                        {payment.isPaid ? "Paid" : "Unpaid"}
                                    </span>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            togglePaidStatus(
                                                payment.year,
                                                payment.month
                                            )
                                        }
                                        className="toggle-btn"
                                    >
                                        {payment.isPaid ? (
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

export default StudentPayments
