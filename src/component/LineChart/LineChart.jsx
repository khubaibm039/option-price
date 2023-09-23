import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        {
            studentId: 1,
            studentName: "Alice",
            mathMarks: 85,
            physicsMarks: 78,
            chemistryMarks: 92,
        },
        {
            studentId: 2,
            studentName: "Bob",
            mathMarks: 72,
            physicsMarks: 65,
            chemistryMarks: 80,
        },
        {
            studentId: 3,
            studentName: "Charlie",
            mathMarks: 92,
            physicsMarks: 89,
            chemistryMarks: 95,
        },
        {
            studentId: 4,
            studentName: "David",
            mathMarks: 78,
            physicsMarks: 73,
            chemistryMarks: 88,
        },
        {
            studentId: 5,
            studentName: "Eve",
            mathMarks: 88,
            physicsMarks: 82,
            chemistryMarks: 94,
        },
        {
            studentId: 6,
            studentName: "Frank",
            mathMarks: 65,
            physicsMarks: 58,
            chemistryMarks: 70,
        },
        {
            studentId: 7,
            studentName: "Grace",
            mathMarks: 95,
            physicsMarks: 90,
            chemistryMarks: 98,
        },
        {
            studentId: 8,
            studentName: "Hank",
            mathMarks: 81,
            physicsMarks: 76,
            chemistryMarks: 85,
        },
        {
            studentId: 9,
            studentName: "Ivy",
            mathMarks: 76,
            physicsMarks: 69,
            chemistryMarks: 78,
        },
        {
            studentId: 10,
            studentName: "Jack",
            mathMarks: 90,
            physicsMarks: 85,
            chemistryMarks: 91,
        },
    ];



    return (
        <div>
            <LChart width={900} height={400} data={studentData}>
                <XAxis dataKey='studentName'></XAxis>

                <Line dataKey="mathMarks"></Line>
                <Line dataKey={"physicsMarks"} stroke='yellowgreen' ></Line>
                <YAxis></YAxis>
            </LChart>
        </div>
    );
};

export default LineChart;