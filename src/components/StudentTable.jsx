import React from 'react';
import StudentRow from './StudentRow';

const StudentTable = ({ students, onUpdateScore }) => {
  return (
    <div className="table-container">
      <h2>Student Records</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">No records found</td>
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
  );
};

export default StudentTable;
