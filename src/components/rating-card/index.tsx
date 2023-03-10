import React, { useState } from "react";
import starLogo from "../../assets/icon-star.svg";
import "./style.css"

const RatingCard = () => {
    const ratings = [1, 2, 3, 4, 5];
    const [selectedValue, setSelectedValue] = useState<number>();
    const handleSelectValue = (value: number) => setSelectedValue(value); 

    return (
        <div className="rating-card">
            <img className="rating-icon" src={starLogo} alt="Star logo"/>
            <h2 className="title">How did we do?</h2>

            <p className="description">
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! 
            </p>

            <div className="rating-buttons-wrapper">
                {ratings.map((rating: number) => (
                    <button onClick={() => handleSelectValue(rating)} className="rating-button" key={rating}>{rating}</button>
                ))}
            </div>

            <button className="submit-button" disabled={selectedValue === undefined}>SUBMIT</button>
        </div>
    );
}

export default RatingCard;