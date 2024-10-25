import { QuestionSectionProps } from "../../constants";
import QuestionTile from "../question_tile";
import "./questions_section.css";

function QuestionsSection({questions} : QuestionSectionProps){
    return (
        <div className='questions-section'>
          <h2>Questions</h2>
          <div className='questions'>
            {questions.map((question) => {
              return (
                <QuestionTile question={question} />
              )
            })}
          </div>
        </div>
    )
}

export default QuestionsSection