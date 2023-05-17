import React, { useState,useEffect} from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
import heroImg from '../../assets/hero-img.png'
import './Hero.css'

const Hero = ({state}) => {
    const [modal, setModal] = useState(false);
    const [description,setDescription] = useState("");
    const [cid,setCid] = useState("");

    useEffect(()=>{
        const {contract} = state;
        const description = async()=>{
            const descriptionText = await contract.methods.description().call();
            const cidtext = await contract.methods.imageLink().call();
            setCid(cidtext);
            setDescription(descriptionText);
        }
        contract && description();
    },[state])

    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p><span>Piyush  </span>
                    is a Full-Stack Blockchain Developer From India.</p>
                <h1>I develop decentralised apps in web3 space.</h1>
                <h3>{description}</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Id - piyushyadav11102002@gmail.com
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={`https://tomato-electric-impala-477.mypinata.cloud/ipfs/${cid}`} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero
