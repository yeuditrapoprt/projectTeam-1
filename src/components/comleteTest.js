import { React, useState } from 'react';
import {useParams } from 'react-router-dom'

export default function CompleteTest () {
    const [sum, setSum] = useState(0);
    const { id } = useParams()

    return (
        <div>

            <h1>{id}להשלמת המבחן גשי...</h1>

        </div>
    );
}