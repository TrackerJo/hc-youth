import "./ask_question_dialog.css";

import { AskQuestionDialogProps } from "../../constants";
import { useState } from "react";
import { askQuestion } from "../../Firebase/db";

function AskQuestionDialog({onClose, dialogRef}: AskQuestionDialogProps) {
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);
    return (
        <dialog ref={dialogRef} className="ask-question-dialog">
            <div className="ask-question-div">
                <h2>Ask a question</h2>
                <input type="text" id="question" name="question" value={question} onChange={(e) => {
                    setQuestion(e.target.value);
                }}/>
                {loading ? <div className="loader"></div> : <button onClick={async() => {
                    setLoading(true);
                    await askQuestion(question);
                    onClose();
                }}>Submit</button>}
                <button onClick={onClose}>Cancel</button>    
            </div>
           
        </dialog>
    )
}

export default AskQuestionDialog