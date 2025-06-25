import React from "react"
import "./StatCard.css"

const StatCard = ({ title, value }) => {
    return (
        <div className="stat-card card">
            <h4>{title}</h4>
            <p>{value}</p>
        </div>
    )
}

export default StatCard
