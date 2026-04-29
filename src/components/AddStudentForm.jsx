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
    <div className="add-student-container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <input 
          type="text" 
          placeholder="Student Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input 
          type="number" 
          placeholder="Score (0-100)" 
          value={score}
          onChange={(e) => setScore(e.target.value)}
          required
          min="0"
          max="100"
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
