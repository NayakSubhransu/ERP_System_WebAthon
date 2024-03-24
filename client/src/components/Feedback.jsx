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
  const [formData, setFormData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    additionalFeedback: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    console.log("selectedSubject", selectedSubject);
    console.log("selectedProfessor", selectedProfessor);
    console.log("formData", formData);
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
        <select required
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
                    <label>
                      Was the course {subject} Interesting?
                      <input
                        type="radio"
                        name="q1"
                        value="Very Bad"
                        onChange={handleChange}
                      />
                      <span>Very Bad</span>
                      <input
                        type="radio"
                        name="q1"
                        value="Bad"
                        onChange={handleChange}
                      />
                      <span>Bad</span>
                      <input
                        type="radio"
                        name="q1"
                        value="Neutral"
                        onChange={handleChange}
                      />
                      <span>Neutral</span>
                      <input
                        type="radio"
                        name="q1"
                        value="Good"
                        onChange={handleChange}
                      />
                      <span>Good</span>
                      <input
                        type="radio"
                        name="q1"
                        value="Very Good"
                        onChange={handleChange}
                      />
                      <span>Very Good</span>
                    </label>
                    <br />
                    <label>
                      Was the professor {selectedProfessor} teaching well?
                      <input
                      id="q2"
                        type="radio"
                        name="q2"
                        value="Very Bad"
                        onChange={handleChange}
                      />
                      <span>Very Bad</span>
                      <input
                      id="q2"
                        type="radio"
                        name="q2"
                        value="Bad"
                        onChange={handleChange}
                      />
                      <span>Bad</span>
                      <input
                      id="q2"
                        type="radio"
                        name="q2"
                        value="Neutral"
                        onChange={handleChange}
                      />
                      <span>Neutral</span>
                      <input
                      id="q2"
                        type="radio"
                        name="q2"
                        value="Good"
                        onChange={handleChange}
                      />
                      <span>Good</span>
                      <input
                      id="q2"
                        type="radio"
                        name="q2"
                        value="Very Good"
                        onChange={handleChange}
                      />
                      <span>Very Good</span>
                    </label>
                    <br />
                    <label>
                      Was the course {subject} useful?
                      <input
                        type="radio"
                        name="q3"
                        value="Very Bad"
                        onChange={handleChange}
                      />
                      <span>Very Bad</span>
                      <input
                        type="radio"
                        name="q3"
                        value="Bad"
                        onChange={handleChange}
                      />
                      <span>Bad</span>
                      <input
                        type="radio"
                        name="q3"
                        value="Neutral"
                        onChange={handleChange}
                      />
                      <span>Neutral</span>
                      <input
                        type="radio"
                        name="q3"
                        value="Good"
                        onChange={handleChange}
                      />
                      <span>Good</span>
                      <input
                        type="radio"
                        name="q3"
                        value="Very Good"
                        onChange={handleChange}
                      />
                      <span>Very Good</span>
                    </label>
                    <br />
                    <label>
                      Should the course {subject} be continued?
                      <input
                      id="q4"
                        type="radio"
                        name="q4"
                        value="Very Bad"
                        onChange={handleChange}
                      />
                      <span>Very Bad</span>
                      <input
                      id="q4"
                        type="radio"
                        name="q4"
                        value="Bad"
                        onChange={handleChange}
                      />
                      <span>Bad</span>
                      <input
                      id="q4"
                        type="radio"
                        name="q4"
                        value="Neutral"
                        onChange={handleChange}
                      />
                      <span>Neutral</span>
                      <input
                      id="q4"
                        type="radio"
                        name="q4"
                        value="Good"
                        onChange={handleChange}
                      />
                      <span>Good</span>
                      <input
                      id="q4"
                        type="radio"
                        name="q4"
                        value="Very Good"
                        onChange={handleChange}
                      />
                      <span>Very Good</span>
                    </label>
                  </li>
                ))}
            </ul>
          </li>
        )}
      </ul>
      <label style={{fontWeight:"bold"}}>Additional Feedback</label>
      <textarea type="textarea" name="additionalFeedback" onChange={handleChange}/>
      <br />
      <button disabled={(selectedProfessor==="" || selectedProfessor==="Select Professor") || (selectedSubject==="Select Subject" || selectedSubject==="")} type="submit">Submit</button>
      {(selectedProfessor==="" || selectedProfessor==="Select Professor" || selectedSubject==="Select Subject" || selectedSubject==="") ? <p style={{color:"red"}}>Please select a valid subject and professor</p> : null}
    </form>
  );
};

export default Form;
