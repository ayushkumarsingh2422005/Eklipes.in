import React, { useEffect, useState } from 'react'
import './Loader.css'
export default function Loader() {
    const [loaderPer, setLoaderPer] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setLoaderPer((loaderPer) => {
                if (loaderPer >= 100) {
                    return 0;
                } else {
                    return loaderPer + 0.2
                }
            });
        }, 10);
    }, []);

    return (
        <div className='loader'>
            <div style={{ background: `conic-gradient(from 0deg, #ffffff 0%, #ffffff ${loaderPer}%, #888888 ${loaderPer}%)` }}>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
