import React, { useState } from 'react';

const Isogram = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const evalString = () => {
    let str = input;

    let specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let numbers = /\d/;
    if (specialChar.test(str) && numbers.test(str) && str.indexOf(' ') >= 1) {
      setResult(`Try again! ${str} is not a single word and has at least one number and special character.`);
    } else if (str.indexOf(' ') >= 1 && specialChar.test(str)) {
      setResult(`Try again! '${str}' is not a single word and has at least one special character.`);
    } else if (str.indexOf(' ') >= 1 && numbers.test(str)) {
      setResult(`Try again! '${str}' is not a single word and has at least one number.`);
    } else if (specialChar.test(str) && numbers.test(str)) {
      setResult(`Try again! '${str}' has at least one number and special character.`);
    } else if (str.indexOf(' ') >= 0) {
      setResult(`Try again! '${str}' is not a single word.`);
    } else if (specialChar.test(str)) {
      setResult(`Try again! '${str}' has at least one special character.`);
    } else if (numbers.test(str)) {
      setResult(`Try again! '${str}' has at least one number.`);
    } else {
      isIsogram();
    }
  };

  const isIsogram = () => {
    let str = input;
    let letters = str.toLowerCase().split('');
    let newLetters = [];

    letters.forEach((item) => {
      if (newLetters.indexOf(item) === -1) {
        newLetters.push(item);
      }
    });

    if (newLetters.length === letters.length) {
      setResult(`'${str}' IS an isogram.`);
    } else {
      setResult(`'${str}' is NOT an isogram.`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    evalString();
  };

  return (
    <div id="iso-container" className="container iso-container">
      <div className="home-btn-holder">
        <button id="iso-btn-close" className="btn-home iso-home" aria-label="home">
          <box-icon name="home" className="icon-home iso-home-icon"></box-icon>
        </button>
      </div>
      {/* <div className="window-holder iso-window-holder">
        <div className="window iso-window">
          <form id="form" className="iso-form" onSubmit={handleSubmit}>
            <p className="intro iso-intro">Is it an isogram?</p>

            <div className="input-holder iso-input-holder">
              <input
                id="isogramText"
                className="text-field iso-text-field"
                name="isogramText"
                type="text"
                placeholder="Enter Text Here"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <p id="eval" className="evals isoEval">{result}</p>
            <button id="check-input" className="btn-check iso-btn-check" type="submit">
              CHECK IT!
            </button>
          </form>
        </div>
        <div className="pdf-holder iso-pdf">
          <div className="pdf-content iso-pdf-content">
            <iframe
              src="assets/pdf/isogram.pdf#view=fitH&scrollbar=1&toolbar=1"
              className="pdf-frame iso-pdf-frame"
              title="Isogram"
              type="application/pdf"
            ></iframe>

            <div className="download-holder iso-download-holder" id="iso-download-holder">
              <button className="btn-dl iso-btn iso-pdf-btn" id="iso-pdf-download-btn" aria-label="download" type="button">
                <a className="dl-link" href="assets/pdf/isogram.pdf" download="isogram.pdf" alt="download isogram file">
                  <box-icon name="download" className="icon download iso-dl" id="iso-download"></box-icon>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Isogram;
