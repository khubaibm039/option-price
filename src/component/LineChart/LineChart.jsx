import {
    LineChart as LChart,
    Line,
    XAxis,
    YAxis,
    BarChart,
    Bar,
} from 'recharts';

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
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 8,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 18,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];



    return (
        <div>
            <LChart width={900} height={400} data={studentData}>
                <XAxis dataKey='studentName'></XAxis>

                <Line dataKey="mathMarks"></Line>
                <Line dataKey={"physicsMarks"} stroke='yellowgreen' ></Line>
                <Line dataKey={"chemistryMarks"} stroke='blue' ></Line>
                <YAxis></YAxis>
            </LChart>
            <BarChart width={900} height={400} data={data}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="pv" fill="yellowgreen" minPointSize={5} />
                <Bar dataKey="uv" fill="pink" minPointSize={10} />
                <Bar dataKey="amt" fill="orange" minPointSize={5} />



            </BarChart>
        </div >
    );
};

export default LineChart;