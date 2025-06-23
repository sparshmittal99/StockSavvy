import { useEffect, useState } from 'react';

export default function Home() {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch('http://localhost:5000/api/stocks', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => setStocks(data));
    }, []);

    return (
        <div>
            <h1>Your Stock Portfolio</h1>
            <ul>
                {stocks.map((stock, index) => (
                    <li key={index}>
                        {stock.symbol} - ₹{stock.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}