import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie'
import { IMG_URL } from '../../../api/config'

export default function Success() {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch(`${IMG_URL}/Animation/success.json`)
            .then(response => response.json())
            .then(data => setAnimationData(data))
            .catch(error => console.error('Error loading animation:', error));
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    if (!animationData) {
        return <div>Loading animation...</div>;
    }

    return (
        <div className="flex justify-center items-center h-64">
            <Lottie options={defaultOptions} height={300} width={300} />
        </div>
    )
}
