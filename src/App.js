import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState(["java", "nodejs", "react", "javascript"]);
  const [mesg, updateMesg] = useState("");
  const [bookname, pickName] = useState("");
  const deleteBook = (bookindex) => {
    text.splice(bookindex, 1); //0 for adding, 1 for deleting
    setText((text) => [...text]); //a=a
    updateMesg("Book Deleted Successfully ");
  };

  const save = () => {
    setText((text) => [...text, bookname]); //a=a+b
    updateMesg(bookname + "" + "  Book Added Successfully ");
    pickName("");
  };
  return (
    <div className="main-dev">
      <div className="child-div">
        <h1> React Hooks + ...spread + Add, List, Delete </h1>
        <p align="center">
          {" "}
          Enter the Book Name:
          <input
            type="text"
            value={bookname}
            name="myInput"
            placeholder="Enter the number....."
            size="30"
            spellcheck
            required
            onChange={(obj) => pickName(obj.target.value)}
          />
          <button className="BUTTON_QXQ" onClick={save}>
            {" "}
            Save{" "}
          </button>
        </p>
        <h4 align="center"> {mesg} </h4>
        <h4> Total Books: {text.length} </h4>
        <br />
        <table id="emplist">
          <thead>
            <tr bgcolor="black">
              <th>S1 No</th>
              <th> Book Name </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {text.map((bookname, index) => {
              return (
                <tr key={index}>
                  <td> {index} </td>
                  <td> {bookname} </td>
                  <td>
                    <button
                      className="BUTTON_QXQ"
                      onClick={deleteBook.bind(this, index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
