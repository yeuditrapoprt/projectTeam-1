import React, {
  useEffect, useState
} from "react";
import Card from "react-credit-cards";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "./utils";
import axios from "axios";

import "react-credit-cards/es/styles-compiled.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {},
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      issuer: "",
      focused: "",
      formData: null,
      sum:0,
      random:0
    };
  }

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };
  handleStudent = ({ student }) => {
    this.setState({ student });
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };
//////
  

  handleSubmit2 = event => {
    event.preventDefault();

    const pay = {
      sum:this.state.sum,
      reference:555555,
      status:1
    };
const id="322523275"
    axios.post(`http://localhost:8000/api/students/${id}/payments`, { pay })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

    // return axios.get(`http://localhost:8000/api/students/${ob}`).then(res => res.data.data);

 

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });

  };

  handleSubmit = e => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
   
    const { name, number, expiry, cvc, focused, issuer, formData, student } = this.state;
   
    const rand =  1 + (Math.random() * (9-1));
    return (
      <div key="Payment">
        <div className="App-payment">
          <h1>NeuroBanco</h1>
          <h4>Aceitamos As Principais Bandeiras</h4>
      
        
          <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
           <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Digite Aqui Numero do seu Cartão"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <small>Ex.: 36., 37., 41., 51., 60...</small>
            </div>
            <div className="form-group">
              <input
                type="number"
                name="sum"
                className="form-control"
                placeholder="The amount to be paid"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Seu Nome Aqui"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Data Validade"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <button className="btn btn-primary btn-block" onClick={this.handleSubmit2}>Pagar</button>
            </div>
          </form>
          {formData && (
            <div className="App-highlight">
              {formatFormData(formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )}
          <hr style={{ margin: "60px 0 30px" }} />
        </div>


      </div>
    );
  }
}
