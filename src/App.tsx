import { useEffect, useState } from 'react';
import { ApiResponse } from './types';

function App() {

    const [coins, setCoins] = useState<ApiResponse>({ data: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCoinData = async () => {
            const data = await fetch('https://api.coincap.io/v2/assets')
                .then((res) => res.json())
                .catch((err) => console.log(err));

            setCoins(data);
            setLoading(false);
        };
        getCoinData();
    }, []);

    return (
        <div className="App">
            <div>
                {
                !loading ?
                    coins.data.map((coin) => {
                        const price = Number(coin.priceUsd).toFixed(2);
                        if (coin.id === 'bitcoin' || coin.id === 'ethereum' || coin.id === 'dogecoin') {
                            return (
                                <div key={coin.id}>
                                    {coin.id} : {price}
                                </div>
                            );
                        }
                        return '';
                    })
                    : '...loading'
                }
                    
            </div>
        </div>
    );
}

export default App;
