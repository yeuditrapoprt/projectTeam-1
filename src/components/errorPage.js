import { useState } from 'react';
import {useParams } from 'react-router-dom'
import * as React from 'react'
export default function ErrorPage () {
    const [sum, setSum] = useState(0);
    const { id } = useParams()

    return (
        <div>

            <h1>{id}:404 not found</h1>

        </div>
    );
}