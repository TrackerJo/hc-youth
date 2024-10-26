import "./manage_question_tile.css";
import { ManageQuestionTileProps } from "../../constants";

import TrashIcon from "../../assets/trash_icon.png";
import { deleteQuestion, answerQuestion } from "../../Firebase/db";
import { useState } from "react";

function ManageQuestionTile({ question, removeQuestion, updateQuestion }: ManageQuestionTileProps) {
    const [answer, setAnswer] = useState("");
    return (
        <div className="question-tile">
            <h3 htmlFor="">Q: {question.question}</h3>
            {question.answer != "" ? <h4>A: {question.answer}</h4> : 
            <>
            <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
            <button onClick={async () => {
                    updateQuestion(question.question, answer);
                    await answerQuestion(question.question, answer);
                }}>Answer</button>
            </>}
            <div className="question-actions">
                <button onClick={async () => {
                    removeQuestion(question.question);
                    await deleteQuestion(question.question, question.answer);
                }}>Delete</button>
              
            </div>
        </div>
    );
}

export default ManageQuestionTile;