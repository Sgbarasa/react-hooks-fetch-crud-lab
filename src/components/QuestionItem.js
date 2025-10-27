import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleDeleteClick() {
    onDeleteQuestion(id);
  }

  function handleAnswerChange(e) {
    const newCorrectIndex = parseInt(e.target.value, 10);
    onUpdateQuestion(id, newCorrectIndex);
  }

  return (
    <li>
      <h4>{prompt}</h4>
      <label htmlFor={`question-${id}`} aria-label="Correct Answer">
        Correct Answer:
      </label>
      <select
        id={`question-${id}`}
        value={correctIndex}
        onChange={handleAnswerChange}
        aria-label="Correct Answer"
      >
        {answers.map((answer, index) => (
          <option key={index} value={index}>
            {answer}
          </option>
        ))}
      </select>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
