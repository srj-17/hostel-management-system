import React, { useState } from "react"
import "./TablePages.css"

const VacantBeds = () => {
    // Placeholder data
    const [beds, setBeds] = useState([
        { id: 1, bedNumber: 1, roomNumber: 5 },
        { id: 2, bedNumber: 2, roomNumber: 4 },
        { id: 3, bedNumber: 3, roomNumber: 5 },
        { id: 4, bedNumber: 8, roomNumber: 3 },
        { id: 5, bedNumber: 9, roomNumber: 1 },
        { id: 6, bedNumber: 10, roomNumber: 2 },
    ])

    const handleAssign = (bedId) => {
        // This would likely open a modal to select a student to assign the bed to
        console.log(`Assigning bed ${bedId}`)
        alert(`Assign bed ${bedId} (Placeholder)`)
    }

    return (
        <div className="table-page-container">
            <h2>Vacant Beds</h2>
            <div className="table-container card">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Bed Number</th>
                            <th>Room Number</th>
                            <th>Assign</th>
                        </tr>
                    </thead>
                    <tbody>
                        {beds.map((bed) => (
                            <tr key={bed.id}>
                                <td>{bed.bedNumber}</td>
                                <td>{bed.roomNumber}</td>
                                <td>
                                    <button
                                        onClick={() => handleAssign(bed.id)}
                                        className="action-btn"
                                    >
                                        Assign
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

export default VacantBeds
