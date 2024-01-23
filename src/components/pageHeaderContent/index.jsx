import React from "react";
import './styles.scss';
const pageHeaderContent = (props) => {
    const { headertext, icon } = props;
    return (
        <div className="wrapper">
            <h2>{headertext}</h2>
            <span>{icon}</span>
        </div>
    )
}
export default pageHeaderContent;