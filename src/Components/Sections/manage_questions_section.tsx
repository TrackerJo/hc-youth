import "./manage_questions_section.css";
import { ManageQuestionsSectionProps } from "../../constants";
import ManageQuestionTile from "../Tiles/manage_question_tile";



function ManageQuestionsSection({questions, removeQuestion, answerQuestion}: ManageQuestionsSectionProps) {

    return (
        <div className="manage-questions-section">
            <h2>Manage Questions</h2>
            <div className="questions">
                {questions.map((question, index) => (
                    <ManageQuestionTile key={index} question={question} removeQuestion={removeQuestion} updateQuestion={answerQuestion} />
                ))}
            </div>
        </div>
    );
}

export default ManageQuestionsSection