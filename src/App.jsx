
import './App.css'
import DaisyNav from './component/DaisyNav/DaisyNav'
import LineChart from './component/LineChart/LineChart'
import Navbar from './component/Navbar/Navbar'
import Phones from './component/Phones/Phones'
import PriceOptions from './component/PriceOptions/PriceOptions'

function App() {
    return (
        <>
            <Navbar></Navbar>

            {/* <DaisyNav></DaisyNav> */}

            <PriceOptions></PriceOptions>

            <LineChart></LineChart>

            <Phones></Phones>
        </>
    )
}

export default App
