import React, { useState } from 'react';

const StudentRow = ({ student, onUpdateScore }) => {
  const isPassing = student.score >= 40;
  const [localScore, setLocalScore] = useState(student.score);

  const handleSave = () => {
    onUpdateScore(student.id, Number(localScore));
  };

  return (
    <tr className={isPassing ? 'pass-row' : 'fail-row'}>
      <td>{student.name}</td>
      <td>{student.score}</td>
      <td>
        <span className={isPassing ? 'status pass' : 'status fail'}>
          {isPassing ? 'Pass' : 'Fail'}
        </span>
      </td>
      <td>
        <div className="update-action">
          <input 
            type="number" 
            value={localScore}
            onChange={(e) => setLocalScore(e.target.value)}
            min="0"
            max="100"
          />
          <button onClick={handleSave}>Save</button>
        </div>
      </td>
    </tr>
  );
};

export default StudentRow;
