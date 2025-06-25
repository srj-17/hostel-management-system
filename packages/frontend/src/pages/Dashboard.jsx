import React from "react"
import { Link } from "react-router-dom"
import StatCard from "../components/StatCard"
import StudentTable from "../components/StudentTable"
import OccupancyChart from "../components/OccupancyChart"
import "./Dashboard.css"

const Dashboard = () => {
    // Placeholder data
    const students = [
        {
            id: 1,
            firstName: "Prajwal",
            lastName: "Poudel",
            email: "prajwal123@gmail.com",
            phone: "980323422",
        },
        {
            id: 2,
            firstName: "Sijan",
            lastName: "Pantha",
            email: "sijan12@gmail.com",
            phone: "982334422",
        },
        {
            id: 3,
            firstName: "Binam",
            lastName: "Gautam",
            email: "binamg123@yahoo.com",
            phone: "980331222",
        },
        {
            id: 4,
            firstName: "Sudharshan",
            lastName: "Jha",
            email: "sudarsan12@hotmail.com",
            phone: "982331222",
        },
        {
            id: 5,
            firstName: "Suman",
            lastName: "Sapkota",
            email: "suman32@gmail.com",
            phone: "980331222",
        },
        {
            id: 6,
            firstName: "Dinesh",
            lastName: "Kumar",
            email: "dinesh12@gmail.com",
            phone: "980331222",
        },
    ]

    return (
        <div className="dashboard">
            <section className="overview-section">
                <h2>OverView</h2>
                <div className="stat-cards">
                    <StatCard title="Total Students" value="130" />
                    <StatCard title="Occupied Rooms" value="24" />
                    <StatCard title="Pending Payments" value="Rs.500" />
                    <StatCard title="Attendance Rate" value="95%" />
                </div>
            </section>

            <section className="occupancy-section card">
                <h3>Occupancy Status</h3>
                <div className="chart-container">
                    <OccupancyChart />
                </div>
            </section>

            <section className="student-details-section">
                <div className="section-header">
                    <h2>Student-Details</h2>
                    <Link to="/student/new">
                        <button className="new-student-btn">New Student</button>
                    </Link>
                </div>
                <StudentTable students={students} />
            </section>
        </div>
    )
}

export default Dashboard
