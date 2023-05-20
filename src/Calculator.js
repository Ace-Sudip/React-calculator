import React, { useState } from "react";
import "./calculator.css";
import { evaluate } from "mathjs";

function Calculator() {
  const [inputvalue, setInputValue] = useState("");

  function display(value) {
    setInputValue(inputvalue + value);
  }

  function calculating() {
    let answer = evaluate(inputvalue);
    setInputValue(answer);
  }
  function clear() {
    setInputValue("");
  }

  return (
    <>
      <div className="container-fluid realbg">
        <div className="row justify-content-center align-items-center  ">
          <div className="col-md-10 mt-5">
            <h1 align="center" className="textcalc">
              React Calculator
            </h1>
            <div className="backcalc">
              <table className="table realtable">
                <tr>
                  <td colSpan="3">
                    <input
                      className="inputall"
                      type="text"
                      value={inputvalue}
                    />
                  </td>
                  <td>
                    {" "}
                    <button className="btnall" onClick={clear}>
                      C
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <button
                      className="btnall"
                      onClick={() => {
                        display("7");
                      }}
                    >
                      7
                    </button>
                  </td>
                  <td>
                    <button
                      className="btnall"
                      onClick={() => {
                        display("8");
                      }}
                    >
                      8
                    </button>
                  </td>
                  <td>
                    <button
                      className="btnall"
                      onClick={() => {
                        display("9");
                      }}
                    >
                      9
                    </button>
                  </td>
                  <td>
                    <button
                      className="btnall"
                      onClick={() => {
                        display("/");
                      }}
                    >
                      /
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      className="btnall"
                      onClick={() => {
                        display("4");
                      }}
                    >
                      4
                    </button>
                  </td>
                  <td>
                    <button
                      className="btnall"
                      onClick={() => {
                        display("5");
                      }}
                    >
                      5
                    </button>
                  </td>
                  <td>
                    <button
                      className="btnall"
                      onClick={() => {
                        display("6");
                      }}
                    >
                      6
                    </button>
                  </td>
                  <td>
                    <button
                      className="btnall"
                      onClick={() => {
                        display("*");
                      }}
                    >
                      *
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      className="btnall"
                      onClick={() => {
                        display("1");
                      }}
                    >
                      1
                    </button>
                  </td>
                  <td>
                    <button
                      className="btnall"
                      onClick={() => {
                        display("2");
                      }}
                    >
                      2
                    </button>
                  </td>
                  <td>
                    <button
                      className="btnall"
                      onClick={() => {
                        display("3");
                      }}
                    >
                      3
                    </button>
                  </td>
                  <td>
                    <button
                      className="btnall"
                      onClick={() => {
                        display("-");
                      }}
                    >
                      -
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      className="btnall"
                      onClick={() => {
                        display(".");
                      }}
                    >
                      .
                    </button>
                  </td>
                  <td>
                    <button
                      className="btnall"
                      onClick={() => {
                        display("0");
                      }}
                    >
                      0
                    </button>
                  </td>
                  <td>
                    <button
                      className="btnall"
                      onClick={() => {
                        display("+");
                      }}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      className="btnall"
                      onClick={() => {
                        calculating();
                      }}
                    >
                      =
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
