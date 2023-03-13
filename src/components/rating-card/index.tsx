import { useState } from "react";
import starImage from "../../assets/icon-star.svg";
import thanksImage from "../../assets/illustration-thank-you.svg"; 
import "./style.css"

const RatingCard = () => {
    const [selectedValue, setSelectedValue] = useState<number>();
    const [submited, setSubmited] = useState<boolean>(false);
    const ratings = [1, 2, 3, 4, 5];
    const handleRatingButtonClick = (value: number) => selectedValue === value ? setSelectedValue(undefined) : setSelectedValue(value); 

    return (
        <div className={`rating-card ${selectedValue !== undefined && submited !== false ? 'flip' : ''}`}>
            <section className="front-side">
                <img className="star-image" src={starImage} alt="Star image"/>
                <h2 className="title">How did we do?</h2>

                <p className="description">
                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! 
                </p>

                <div className="rating-buttons-wrapper">
                    {ratings.map((rating: number) => (
                        <button 
                            className={`rating-button ${rating === selectedValue ? 'rating-button-enabled' : ''}`}
                            key={rating}
                            onClick={() => handleRatingButtonClick(rating)}>
                                {rating}
                            </button>
                    ))}
                </div>

                <button 
                    className={`submit-button ${selectedValue === undefined ? 'submit-button-disabled' : 'submit-button-enabled'}`}
                    disabled={selectedValue === undefined}
                    onClick={() => setSubmited(true)}>
                        SUBMIT
                </button>
            </section>
            <section className="back-side">
                <img className="thanks-image" src={thanksImage} alt="Thanks for the reply image" />
                <span className="select-span">You selected {selectedValue} out of 5</span>
                <h2 className="title">Thank you!</h2>
                <p className="description">We appreciate you taking the time to give a rating. If you ever need more suport, don't hesitate to get in touch!</p>
            </section>
        </div>
    );
}

export default RatingCard;