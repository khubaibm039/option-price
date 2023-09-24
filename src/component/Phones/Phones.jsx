import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Dna } from 'react-loader-spinner'

const Phones = () => {
    const [phone, setPhone] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhone(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data
                const phoneWithPhoneData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])

                    }
                    return obj;
                })
                console.log(phoneWithPhoneData);
                setPhone(phoneWithPhoneData)
                setLoading(false)
            })

    }, [])

    return (
        <div>
            {loading && <div>
                <Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            </div>}
            <h2 className="text-5xl text-center">Phones : {phone.length}</h2>
            <BarChart width={900} height={400} data={phone} >
                <Bar dataKey="price" fill="yellowgreen" />
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default Phones;