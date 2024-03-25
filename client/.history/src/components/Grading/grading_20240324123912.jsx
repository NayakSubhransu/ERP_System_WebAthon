import React from "react";
import "./grading.css"
export default function Grading(){

    const[toggle,setToggle] = React.useState(1);
    
    let admin = true;

    const array = [
        {
            name: "John Doe",
            age: 25,
            city: "New York",
            occupation: "Software Engineer",
            done:false
        },
        {
            name: "Jane Smith",
            age: 30,
            city: "Los Angeles",
            occupation: "Data Analyst",
            done:false
        },
        {
            name: "Michael Johnson",
            age: 35,
            city: "Chicago",
            occupation: "Teacher", 
            done:true

        },
        {
            name: "Emily Davis",
            age: 28,
            city: "San Francisco",
            occupation: "Graphic Designer",
            done:false
        }
    ];

    const array2 = [{
        name: "John Doe",
        age: 25,
        city: "New York",
        occupation: "Software Engineer"
    }];

    const green = {
        backgroundImage:'linear-gradient(to right, #56ff56, #ffffff)',
        //background: '#abe2f6',
        backdropFilter: 'blur(5px)',
        boxShadow: 'inset -4px 0px 2px green',
        borderRadius: '15px',
        border: '1.5px solid rgba(255, 255, 255, 0.326)',
        color: '#050505',
        padding: '15px',
        minHeight: '170px',
        display: 'flex',
        justifyContent: 'space-between',
        wordWrap: 'break-word',
        margin: '1rem',
        marginLeft: '5rem',
        marginRight: '5rem',
       
    };

    const mediaQueryStyle = {
        marginLeft: '-1.5rem',
        marginRight: '-1.5rem',
    };

    const red = {
        backgroundImage: 'linear-gradient(to right, #C94848, #ffffff)',
        //background: '#abe2f6',
        backdropFilter: 'blur(5px)',
        boxShadow: 'inset -4px 0px 2px red',
        borderRadius: '15px',
        border: '1.5px solid rgba(255, 255, 255, 0.326)',
        color: '#050505',
        padding: '15px',
        minHeight: '170px',
        fontFamily:'Impact,Haettenschweiler, Arial, Narrow Bold,sans-serif',
        display: 'flex',
        justifyContent: 'space-between',
        wordWrap: 'break-word',
        margin: '1rem',
        marginLeft: '5rem',
        marginRight: '5rem',
    }

    return(
        <div>
            <div className="navbar">
                <button className="navbut"  onClick={() => setToggle(1)}>
                    Assignment
                </button>

                <button className="navbut" onClick={() => setToggle(2)}>
                    Heading 2
                </button>

                <button className="navbut" onClick={() => setToggle(3)}>
                    Heading 3
                </button>
            </div>

           { 

           admin ?

           toggle ===1 ?
           <div className="assignment">
                {
                    array.map((item)=>(

                        item.done ?
                        <div className="arraycontents" style={
                            { ...green, '@media screen and (max-width: 520px)': mediaQueryStyle }
                        }>
                            <p className="contents">{item.name}</p>
                            <p className="contents">{item.age}</p>
                            <p className="contents">{item.city}</p>
                            <p className="contents">{item.occupation}</p>
                        </div>
                        : 
                        <div className="arraycontents" style={
                            { ...red, '@media screen and (max-width: 520px)': mediaQueryStyle }
                        }>
                            <p className="contents">{item.name}</p>
                            <p className="contents">{item.age}</p>
                            <p className="contents">{item.city}</p>
                            <p className="contents">{item.occupation}</p>
                        </div>
                    ))
                }
            </div>
            
        : toggle===2?
        <div className="heading2">
            {
                array2.map((item)=>(
                    <div>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                    <p>{item.city}</p>
                    <p>{item.occupation}</p>
                    </div>
                ))
            }
        </div>
        :undefined

        : (
            <div>
                <h1> You are not an admin</h1>
            </div>
        );
        
        }
        </div>
    )
}