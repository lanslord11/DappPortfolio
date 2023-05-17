import { useState,useEffect } from 'react'
import './Contact.css'


const Contact = ({state}) => {

    const [resume,setResume] = useState("");

    useEffect(() => {
      
        const {contract} = state;
        const getResume = async ()=>{
            const resumeLink = await contract.methods.resumeLink().call();
            setResume(resumeLink);
        }

        contract && getResume();
      
    }, [state])
    
 
    return (
        <section className="contact-section">
            <h1 className="title">
                Interested?
                Let's Get In Touch!
            </h1>
            <a href={`https://tomato-electric-impala-477.mypinata.cloud/ipfs/${resume}`} target='_blank' rel="noopener noreferrer">
                <button className="downlodeBTN">
                    View Resume
                </button>
            </a>

        </section>
    )
}

export default Contact
