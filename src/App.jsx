import React, { useState } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';
import './index.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Aman', score: 78 },
    { id: 2, name: 'Riya', score: 45 },
    { id: 3, name: 'Karan', score: 90 },
    { id: 4, name: 'Neha', score: 32 },
    { id: 5, name: 'lol', score: 88 }
  ]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const updateScore = (id, newScore) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, score: newScore } : student
    ));
  };

  const total = students.length;
  const passed = students.filter(s => s.score >= 40).length;
  const avgScore = total > 0 ? Math.round(students.reduce((acc, curr) => acc + curr.score, 0) / total) : 0;

  return (
    <div className="app-container">
      <Header />
      <div className="terminal-content">
        <AddStudentForm onAdd={addStudent} />
        
        <div className="stats-panel">
          <div className="stat-box">
            <span className="stat-label">TOTAL</span>
            <span className="stat-value">{total}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">PASSED</span>
            <span className="stat-value">{passed}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">AVG SCORE</span>
            <span className="stat-value">{avgScore}</span>
          </div>
        </div>

        <StudentTable students={students} onUpdateScore={updateScore} />
      </div>
      <footer className="terminal-footer">
        <div className="system-status">ACADEMIC TERMINAL - SECURE SESSION</div>
        <div className="creator-bookmark">
          <span className="flash">_</span>MADE BY TANISHQ
        </div>
      </footer>
    </div>
  );
}

export default App;
