import React from 'react';
import StudentRow from './StudentRow';

const StudentTable = ({ students, onUpdateScore }) => {
  return (
    <div className="panel records-panel">
      <div className="panel-header">
        <div className="panel-title">STUDENT RECORDS</div>
        <div className="panel-badge">{students.length} entries</div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>SCORE</th>
              <th>STATUS</th>
              <th>UPDATE</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', padding: '2rem' }}>NO RECORDS FOUND</td>
              </tr>
            ) : (
              students.map(student => (
                <StudentRow 
                  key={student.id} 
                  student={student} 
                  onUpdateScore={onUpdateScore} 
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
