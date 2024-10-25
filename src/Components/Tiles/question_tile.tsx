import "./question_tile.css";

import { QuestionTileProps} from "../../constants";

function QuestionTile({question}: QuestionTileProps) {
    return (
        <div className="question-tile">
            <h3>Q: {question.question}</h3>
            <h4>A: {question.answer}</h4>
        </div>
    )
}

export default QuestionTile