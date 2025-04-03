import {useContext, useState} from "react";
import {storeContext} from "../../storeContext/storeContext.jsx";
import './FeedBackForm.css'
import { MdStarOutline,MdStar } from "react-icons/md";

const FeedbackForm = () => {
    const {cartItems,food_list}=useContext(storeContext)
    const orderedItems=cartItems
    const getFoodById = (id) => food_list.find(food => food._id === id);

    const [feedback, setFeedback] = useState(
        Object.keys(orderedItems).reduce((acc, itemId) => {
            acc[itemId] = { rating: 0 };
            return acc;
        }, {})
    );
    const [finalComment, setFinalComment] = useState("");

    const handleRatingChange = (itemId, rating) => {
        setFeedback({
            ...feedback,
            [itemId]: { ...feedback[itemId], rating },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Feedback:", feedback, finalComment);
    };

    return (
        <div>
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                    <tr>
                        <th> Item</th>
                        <th> Rating</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(orderedItems).map((itemId) => (
                        <tr key={itemId}>
                            <td >{getFoodById(itemId).name}</td>
                            <td >{[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    type="button"
                                    key={star}
                                    className={'starButton'}
                                    onClick={() => handleRatingChange(itemId, star)}
                                >{
                                    feedback[itemId].rating >= star ?<MdStar size={30} className={'gold'}/>: <MdStarOutline size={30}/>
                                }

                                </button>
                            ))}</td>
                        </tr>

                    ))
                    }
                    </tbody>
                </table>
                <div>
                    <h3>Final Comments</h3>
                    <textarea className={'textArea'}
                        placeholder="Any additional feedback?"
                        value={finalComment}
                        onChange={(e) => setFinalComment(e.target.value)}
                    />
                </div>
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
