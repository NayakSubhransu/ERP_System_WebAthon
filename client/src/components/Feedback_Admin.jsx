import React, { useState } from "react";
import FeedbackAdminStyle from "./Feedback.module.css";
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
const DUMMY_DATA = {
    "subject1": {
        "professor1":{
            "q1": {
            "VeryBad": 2,
            "Bad": 2,
            "Neutral": 4,
            "Good": 8,
            "VeryGood": 0,
            },
            "q2": {
            "VeryBad": 2,
            "Bad": 4,
            "Neutral": 5,
            "Good": 5,
            "VeryGood": 3,
            },
            "q3": {
            "VeryBad": 0,
            "Bad": 2,
            "Neutral": 8,
            "Good": 9,
            "VeryGood": 11,
            },
            "q4": {
            "VeryBad": 1,
            "Bad": 2,
            "Neutral": 6,
            "Good": 9,
            "VeryGood": 10,
            },
            "additionalFeedback":["Nice"]
        },
            "professor2":{
            "q1":  {
            "VeryBad": 2,
            "Bad": 4,
            "Neutral": 5,
            "Good": 5,
            "VeryGood": 3,
            },
            "q2": {
            "VeryBad": 2,
            "Bad": 2,
            "Neutral": 4,
            "Good": 8,
            "VeryGood": 0,
            },
            "q3": {
            "VeryBad": 0,
            "Bad": 2,
            "Neutral": 8,
            "Good": 9,
            "VeryGood": 11,
            },
            "q4": {
            "VeryBad": 1,
            "Bad": 2,
            "Neutral": 6,
            "Good": 9,
            "VeryGood": 10,
            },
            "additionalFeedback":["","Bad"]

        },
            "professor3":{
            "q1":
            {
            "VeryBad": 0,
            "Bad": 2,
            "Neutral": 8,
            "Good": 9,
            "VeryGood": 11,
            },
            "q2": {
            "VeryBad": 2,
            "Bad": 4,
            "Neutral": 5,
            "Good": 5,
            "VeryGood": 3,
            },
            "q3": {
            "VeryBad": 2,
            "Bad": 2,
            "Neutral": 4,
            "Good": 8,
            "VeryGood": 0,
            },
            "q4": {
            "VeryBad": 1,
            "Bad": 2,
            "Neutral": 6,
            "Good": 9,
            "VeryGood": 10,
            },
            "additionalFeedback":["Cool","Great"]

        }
    },
    "subject2": {
        "professor1":{
        "q1": {
        "VeryBad": 2,
        "Bad": 2,
        "Neutral": 4,
        "Good": 8,
        "VeryGood": 0,
        },
        "q2": {
        "VeryBad": 2,
        "Bad": 4,
        "Neutral": 5,
        "Good": 5,
        "VeryGood": 3,
        },
        "q3": {
        "VeryBad": 0,
        "Bad": 2,
        "Neutral": 8,
        "Good": 9,
        "VeryGood": 11,
        },
        "q4": {
        "VeryBad": 1,
        "Bad": 2,
        "Neutral": 6,
        "Good": 9,
        "VeryGood": 10,
        },
        "additionalFeedback":["Cool","Great"]

    },
        "professor2":{
        "q1":  {
        "VeryBad": 2,
        "Bad": 4,
        "Neutral": 5,
        "Good": 5,
        "VeryGood": 3,
        },
        "q2": {
        "VeryBad": 2,
        "Bad": 2,
        "Neutral": 4,
        "Good": 8,
        "VeryGood": 0,
        },
        "q3": {
        "VeryBad": 0,
        "Bad": 2,
        "Neutral": 8,
        "Good": 9,
        "VeryGood": 11,
        },
        "q4": {
        "VeryBad": 1,
        "Bad": 2,
        "Neutral": 6,
        "Good": 9,
        "VeryGood": 10,
        },
        "additionalFeedback":["Nice"]

    },
        "professor3":{
        "q1":
        {
        "VeryBad": 0,
        "Bad": 2,
        "Neutral": 8,
        "Good": 9,
        "VeryGood": 11,
        },
        "q2": {
        "VeryBad": 2,
        "Bad": 4,
        "Neutral": 5,
        "Good": 5,
        "VeryGood": 3,
        },
        "q3": {
        "VeryBad": 2,
        "Bad": 2,
        "Neutral": 4,
        "Good": 8,
        "VeryGood": 0,
        },
        "q4": {
        "VeryBad": 1,
        "Bad": 2,
        "Neutral": 6,
        "Good": 9,
        "VeryGood": 10,
        },
        "additionalFeedback":["OutStanding","Fine"]

    }
    },
    "subject3": {
        "professor1":{
            "q1": {
            "VeryBad": 2,
            "Bad": 2,
            "Neutral": 4,
            "Good": 8,
            "VeryGood": 0,
            },
            "q2": {
            "VeryBad": 2,
            "Bad": 4,
            "Neutral": 5,
            "Good": 5,
            "VeryGood": 3,
            },
            "q3": {
            "VeryBad": 0,
            "Bad": 2,
            "Neutral": 8,
            "Good": 9,
            "VeryGood": 11,
            },
            "q4": {
            "VeryBad": 1,
            "Bad": 2,
            "Neutral": 6,
            "Good": 9,
            "VeryGood": 10,
            },
            "additionalFeedback":["Cool","Great"]

        },
            "professor2":{
            "q1":  {
            "VeryBad": 2,
            "Bad": 4,
            "Neutral": 5,
            "Good": 5,
            "VeryGood": 3,
            },
            "q2": {
            "VeryBad": 2,
            "Bad": 2,
            "Neutral": 4,
            "Good": 8,
            "VeryGood": 0,
            },
            "q3": {
            "VeryBad": 0,
            "Bad": 2,
            "Neutral": 8,
            "Good": 9,
            "VeryGood": 11,
            },
            "q4": {
            "VeryBad": 1,
            "Bad": 2,
            "Neutral": 6,
            "Good": 9,
            "VeryGood": 10,
            },
            "additionalFeedback":["Cool","Great"]
        },
            "professor3":{
            "q1":
            {
            "VeryBad": 0,
            "Bad": 2,
            "Neutral": 8,
            "Good": 9,
            "VeryGood": 11,
            },
            "q2": {
            "VeryBad": 2,
            "Bad": 4,
            "Neutral": 5,
            "Good": 5,
            "VeryGood": 3,
            },
            "q3": {
            "VeryBad": 2,
            "Bad": 2,
            "Neutral": 4,
            "Good": 8,
            "VeryGood": 0,
            },
            "q4": {
            "VeryBad": 1,
            "Bad": 2,
            "Neutral": 6,
            "Good": 9,
            "VeryGood": 10,
            },
            "additionalFeedback":["OutStanding","Fine"]
        }
    }
    }
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

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    console.log("selectedSubject", selectedSubject);
    console.log("selectedProfessor", selectedProfessor);
  }

  return (
    <form onSubmit={handleSubmit} className={FeedbackAdminStyle.form}>
      <h1>Feedback Response</h1>
      <label className={FeedbackAdminStyle.label}>
        Subject:
        <select className={FeedbackAdminStyle.select} onChange={handleSubjectChange}>
          {subjects.map((subject, index) => (
            <option key={index} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </select>
      </label>
      <label className={FeedbackAdminStyle.label}>
        Professor:
        <select className={FeedbackAdminStyle.select} required
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
      <ul className={FeedbackAdminStyle.ul}>
        {selectedProfessor && (
          <li className={FeedbackAdminStyle.li} key={selectedProfessor}>
            <ul className={FeedbackAdminStyle.ul}>
              {subjects
                .find((subject) => subject.value === selectedSubject)
                .subjects.map((subject) => (
                  <li className={FeedbackAdminStyle.li} key={subject.subject}>
                    <label className={FeedbackAdminStyle.label}>
                      Was the course {subject} Interesting?
                     <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]["q1"]).VeryBad}</p>
                      <span className={FeedbackAdminStyle.span}>Very Bad</span>
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]["q1"]).Bad}</p>
                      <span className={FeedbackAdminStyle.span}>Bad</span>
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]["q1"]).Neutral}</p>
                      <span className={FeedbackAdminStyle.span}>Neutral</span>
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]["q1"]).Good}</p>
                      <span className={FeedbackAdminStyle.span}>Good</span>
                        <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]["q1"]).VeryGood}</p>
                      <span className={FeedbackAdminStyle.span}>Very Good</span>
                    </label>
                    <br />
                    <label className={FeedbackAdminStyle.label}>
                      Was the professor {selectedProfessor} teaching well?
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]["q2"]).VeryBad}</p>
                      <span className={FeedbackAdminStyle.span}>Very Bad</span>
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]["q2"]).Bad}</p>
                      <span className={FeedbackAdminStyle.span}>Bad</span>
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]["q2"]).Neutral}</p>
                      <span className={FeedbackAdminStyle.span}>Neutral</span>
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]["q2"]).Good}</p>
                      <span className={FeedbackAdminStyle.span}>Good</span>
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]["q2"]).VeryGood}</p>
                      <span className={FeedbackAdminStyle.span}>Very Good</span>
                    </label>
                    <br />
                    <label className={FeedbackAdminStyle.label}>
                      Was the course {subject} useful?
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]["q3"]).VeryBad}</p>
                      <span className={FeedbackAdminStyle.span}>Very Bad</span>
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]["q3"]).Bad}</p>
                      <span className={FeedbackAdminStyle.span}>Bad</span>
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]["q3"]).Neutral}</p>
                      <span className={FeedbackAdminStyle.span}>Neutral</span>
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]["q3"]).Good}</p>
                      <span className={FeedbackAdminStyle.span}>Good</span>
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]["q3"]).VeryGood}</p>
                      <span className={FeedbackAdminStyle.span}>Very Good</span>
                    </label>
                    <br />
                    <label className={FeedbackAdminStyle.label}>
                      Should the course {subject} be continued?
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]['q4']).VeryBad}</p>
                      <span className={FeedbackAdminStyle.span}>Very Bad</span>
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]['q4']).Bad}</p>
                      <span className={FeedbackAdminStyle.span}>Bad</span>
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]['q4']).Neutral}</p>
                      <span className={FeedbackAdminStyle.span}>Neutral</span>
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]['q4']).Good}</p>
                      <span className={FeedbackAdminStyle.span}>Good</span>
                      <p className={FeedbackAdminStyle.p}>{(DUMMY_DATA[selectedSubject][selectedProfessor]['q4']).VeryGood}</p>
                      <span className={FeedbackAdminStyle.span}>Very Good</span>
                    </label>
                  </li>
                ))}
            </ul>
          </li>
        )}
      </ul>
      <label className={FeedbackAdminStyle.label} style={{fontWeight:"bold"}}>Additional Feedback</label>
      <ul className={FeedbackAdminStyle.ul}>
        {selectedProfessor && (
          <li className={FeedbackAdminStyle.li} key={selectedProfessor}>
            <ul className={FeedbackAdminStyle.ul}>
              {DUMMY_DATA[selectedSubject][selectedProfessor]["additionalFeedback"].map((feedback, index) => (
                <li className={FeedbackAdminStyle.li} key={index} style={{ display: "list-item" }}>
                  <label className={FeedbackAdminStyle.label} style={{display:"block"}}>
                    {index+1}-{feedback}
                  </label>
                </li>
              ))}
            </ul>
          </li>
        )}
      </ul>
      <br />
      {/* <button disabled={(selectedProfessor==="" || selectedProfessor==="Select Professor") || (selectedSubject==="Select Subject" || selectedSubject==="")} type="submit">Submit</button> */}
      {(selectedProfessor==="" || selectedProfessor==="Select Professor" || selectedSubject==="Select Subject" || selectedSubject==="") ? <p style={{color:"red"}}>Please select a valid subject and professor</p> : null}
    </form>
  );
};

export default Form;
