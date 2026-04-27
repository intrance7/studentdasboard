import React, { useState } from 'react';

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || score === '') return;
    
    onAdd({
      id: Date.now(),
      name: name.trim(),
      score: Number(score)
    });
    
    setName('');
    setScore('');
  };

  return (
    <div className="panel register-panel">
      <div className="panel-header">
        <div className="panel-title"><span className="dot"></span> REGISTER STUDENT</div>
        <div className="panel-badge">NEW ENTRY</div>
      </div>
      <form className="add-student-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Student name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input 
            type="number" 
            placeholder="Score (0-100)" 
            value={score}
            onChange={(e) => setScore(e.target.value)}
            required
            min="0"
            max="100"
          />
        </div>
        <button type="submit">+ ADD</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
