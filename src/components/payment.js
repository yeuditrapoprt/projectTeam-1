import {  useState } from 'react';
import {useParams } from 'react-router-dom'
import * as React from 'react'
import App from './StudentPayment'
export default function Payment () {
    const [sum, setSum] = useState(0);
    const { id } = useParams()

    return (
        <div>

            <h1>{id}:הסכום לתשלום הוא</h1>
<App></App>
        </div>
    );
}

