import React, { useState } from "react";
import "./Feedback.css";
const subjects = [
  {
    label: "Select Subject",
    value: "Select Subject",
    subjects: ["Select Subject"],
  },
  { label: "Subject 1", value: "subject1", subjects: ["subject1"] },
  { label: "Subject 2", value: "subject2", subjects: ["subject2"] },
  { label: "Subject 3", value: "subject3", subjects: ["subject3"] },
];

const professors = [
  {
    label: "Select Professor",
    value: "Select Professor",
    subjects: ["Select Professor"],
  },
  { label: "Professor 1", value: "professor1", subjects: ["subject1"] },
  { label: "Professor 2", value: "professor2", subjects: ["subject2"] },
  { label: "Professor 3", value: "professor3", subjects: ["subject1"] },
];

const initialRateValues = {
  subject1: 0,
  subject2: 0,
  subject3: 0,
};

const Form = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedProfessor, setSelectedProfessor] = useState("");
  const [rates, setRates] = useState(initialRateValues);

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setRates({ ...initialRateValues, [e.target.value]: 0 });
  };

  const handleProfessorChange = (e) => {
    setSelectedProfessor(e.target.value);
    const newRates = { ...initialRateValues };
    newRates[selectedSubject] = 0;
    setRates(newRates);
  };

  const handleRateChange = (e, subject) => {
    setRates({ ...rates, [subject]: e.target.value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    console.log("selectedSubject", selectedSubject);
    console.log("selectedProfessor", selectedProfessor);
    console.log("rates", rates);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Feedback Form</h1>
      <label>
        Subject:
        <select onChange={handleSubjectChange}>
          {subjects.map((subject, index) => (
            <option key={index} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Professor:
        <select
          onChange={handleProfessorChange}
          disabled={selectedSubject === ""}
        >
          {professors.map((professor, index) => (
            <option key={index} value={professor.value}>
              {professor.label}
            </option>
          ))}
        </select>
      </label>
      <ul>
        {selectedProfessor && (
          <li key={selectedProfessor}>
            <ul>
              {subjects
                .find((subject) => subject.value === selectedSubject)
                .subjects.map((subject) => (
                  <li key={subject.subject}>
                    <label id="ques">
                      Was the course {subject} Interesting?
                      
                      <input type="radio" name="q1" />
                      <span>1</span>
                      <input type="radio" name="q1" />
                      <span>2</span>
                      <input type="radio" name="q1" />
                      <span>3</span>
                      <input type="radio" name="q1" />
                      <span>4</span>
                      <input type="radio" name="q1" />
                      <span>5</span>
                    </label>
                    <br></br>
                    <label>
                      Was the professor {selectedProfessor} teaching well?
                      <input id="q2" type="radio" name="q2" />
                      <span>1</span>
                      <input id="q2" type="radio" name="q2" />
                      <span>2</span>
                      <input id="q2" type="radio" name="q2" />
                      <span>3</span>
                      <input id="q2" type="radio" name="q2" />
                      <span>4</span>
                      <input id="q2" type="radio" name="q2" />
                      <span>5</span>
                    </label>
                    <br />
                    <label>
                      Was the course {subject} useful?
                      <input type="radio" name="q3" />
                      <span>1</span>
                      <input type="radio" name="q3" />
                      <span>2</span>
                      <input type="radio" name="q3" />
                      <span>3</span>
                      <input type="radio" name="q3" />
                      <span>4</span>
                      <input type="radio" name="q3" />
                      <span>5</span>
                    </label>
                    <br />
                    <label>
                      Should the course {subject} be continued?
                      <input id="q4" type="radio" name="q4" />
                      <span>1</span>
                      <input id="q4" type="radio" name="q4" />
                      <span>2</span>
                      <input id="q4" type="radio" name="q4" />
                      <span>3</span>
                      <input id="q4" type="radio" name="q4" />
                      <span>4</span>
                      <input id="q4" type="radio" name="q4" />
                      <span>5</span>
                    </label>
                  </li>
                ))}
            </ul>
          </li>
        )}
      </ul>
      <textarea type="textarea" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
