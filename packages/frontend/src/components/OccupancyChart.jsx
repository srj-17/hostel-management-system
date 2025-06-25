import React from "react"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts"

const data = [
    { room: "Room 1", occupied: 4, total: 6 },
    { room: "Room 2", occupied: 5, total: 6 },
    { room: "Room 3", occupied: 3, total: 4 },
    { room: "Room 4", occupied: 4, total: 4 },
    { room: "Room 5", occupied: 2, total: 4 },
    { room: "Room 6", occupied: 6, total: 6 },
]

const OccupancyChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="room" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                    dataKey="occupied"
                    fill="var(--steel-blue)"
                    name="Occupied Beds"
                />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default OccupancyChart
