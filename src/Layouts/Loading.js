import React from 'react'
import { IMG_URL } from '../api/config'

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-64">
            <img src={`${IMG_URL}/icons/Load.svg`} alt='Loading...' className="mx-auto" />
        </div>
    )
}
