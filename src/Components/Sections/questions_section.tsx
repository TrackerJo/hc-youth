import {  useRef } from "react";
import { QuestionSectionProps } from "../../constants";
import QuestionTile from "../Tiles/question_tile";
import "./questions_section.css";
import AskQuestionDialog from "../Dialogs/ask_question_dialog";

function QuestionsSection({questions} : QuestionSectionProps){
  const dialogRef = useRef<HTMLDialogElement>(null)
    return (
      <>
        <div className='questions-section'>
          <h2>Questions</h2>
          <div className='questions'>
            {questions.map((question) => {
              if(question.answer === ""){
                return null
              }
              return (
                <QuestionTile question={question} />
              )
            })}
          </div>
          <button onClick={() => {
            dialogRef.current?.showModal()
          }}>
            Ask a question
          </button>
        </div>
          <AskQuestionDialog dialogRef={dialogRef} onClose={() => { dialogRef.current?.close() }} />
      </>
    )
}

export default QuestionsSection