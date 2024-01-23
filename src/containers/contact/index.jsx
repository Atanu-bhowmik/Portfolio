import React from 'react';
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
const Contact = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headertext="Contact Me"
                icon={<BsInfoCircleFill size={40} />}
            />
        </section>
    )
}

export default Contact;