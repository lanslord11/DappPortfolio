import { SlCalender } from "react-icons/sl"

import './Experience.css'
import { useState,useEffect } from "react"

const Experience = ({state}) => {

    const [education,setEducation] = useState([]);

    useEffect( ()=>{
        const {contract} = state;
        const educationDetails = async ()=>{
            const educationinfo =await contract.methods.allEductationDetails().call();
            setEducation(educationinfo);
            console.log(educationinfo);
        }
        contract && educationDetails();
        
    },[state])

    return (
        <section className="exp-section">
            <h1 className="title"> Education </h1>

            <div className="container">

                <div className="education">
                    {/* <h1 className="edu-tittle">Education</h1> */}
                    { education && education.map((instituteinfo)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {instituteinfo.date}
                        </p>
                        <h3 className="card-text2">{instituteinfo.degree}</h3>
                        <p className="card-text3">{instituteinfo.knowledgeAcquired}</p>
                        <p className="card-text4">
                        {instituteinfo.instutionName}
                        </p>
                    </div>)
                    })}
                </div>
                
            </div>
        </section>
    )
}

export default Experience
