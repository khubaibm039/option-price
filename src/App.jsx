
import './App.css'
import DaisyNav from './component/DaisyNav/DaisyNav'
import LineChart from './component/LineChart/LineChart'
import Navbar from './component/Navbar/Navbar'
import PriceOptions from './component/PriceOptions/PriceOptions'

function App() {
    return (
        <>
            <Navbar></Navbar>

            {/* <DaisyNav></DaisyNav> */}

            <PriceOptions></PriceOptions>

            <LineChart></LineChart>
        </>
    )
}

export default App
