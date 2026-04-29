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
      <div className="main-content">
        <AddStudentForm onAdd={addStudent} />
        
        <div className="stats-container">
          <div className="stat-box">
            <h4>Total Students</h4>
            <p>{total}</p>
          </div>
          <div className="stat-box">
            <h4>Passed</h4>
            <p>{passed}</p>
          </div>
          <div className="stat-box">
            <h4>Average Score</h4>
            <p>{avgScore}</p>
          </div>
        </div>

        <StudentTable students={students} onUpdateScore={updateScore} />
      </div>
      <footer>
        <p>Made by Tanishq</p>
      </footer>
    </div>
  );
}

export default App;
