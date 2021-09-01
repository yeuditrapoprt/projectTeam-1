import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer, pdf } from '@react-pdf/renderer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as React from 'react'
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
export default function StudentPermit() {
    const [sum, setSum] = useState(0);
    const { id } = useParams();

    const getPdfFromNodejs = (status) => {
        return axios.get(`http://localhost:8000/api/students/pdf/${id}/${status}`, {
            responseType: "blob"
            //Force to receive data in a Blob Format
        })
            .then(response => {
                //Create a Blob from the PDF Stream
                const file = new Blob([response.data], {
                    type: "application/pdf"
                });
                //Build a URL from the file
              const  fileURL = URL.createObjectURL(file);
                //Open the URL on new Window
                window.open(fileURL);


            }).then(console.log("pdf created"))
            .catch(error => {
                console.log(error);
            });
    }




    // const () => {
    //     getPdfFromNodejs().then(console.log("pdf created"));
    // }, []);


    return (
        <div>

            <h1>{id}send to</h1>

            <button onClick={getPdfFromNodejs(1)}>תחבורה ציבורית</button>
            <button onClick={getPdfFromNodejs(2)}>ביטוח לאומי</button>
            <button onClick={getPdfFromNodejs(3)}>לכל המעונין</button>
        </div>
    );
}


