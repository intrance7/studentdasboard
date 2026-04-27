import React, { useState } from 'react';

const StudentRow = ({ student, onUpdateScore }) => {
  const isPassing = student.score >= 40;
  const [localScore, setLocalScore] = useState(student.score);

  const handleSave = () => {
    onUpdateScore(student.id, Number(localScore));
  };

  return (
    <tr className={isPassing ? 'row-pass' : 'row-fail'}>
      <td className="col-name">{student.name}</td>
      <td className="col-score">{student.score}</td>
      <td className="col-status">
        <span className={`status-badge ${isPassing ? 'status-pass' : 'status-fail'}`}>
          <span className="dot"></span> {isPassing ? 'PASS' : 'FAIL'}
        </span>
      </td>
      <td className="col-update">
        <div className="update-controls">
          <input 
            type="number" 
            className="score-input"
            value={localScore}
            onChange={(e) => setLocalScore(e.target.value)}
            min="0"
            max="100"
          />
          <button className="save-btn" onClick={handleSave}>SAVE</button>
        </div>
      </td>
    </tr>
  );
};

export default StudentRow;
