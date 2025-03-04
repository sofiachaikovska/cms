import css from './StudentsTable.module.css';

import { useState } from 'react';

import StudentModal from '../StudentModal/StudentModal';
import DeleteStudentModal from '../DeleteStudentModal/DeleteStudentModal';

import initialStudents from '../../services/students.json';

const StudentsTable = () => {
  const [students, setStudents] = useState(initialStudents);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);

  const handleOpenAddModal = () => {
    setSelectedStudent(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = student => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenDeleteModal = student => {
    setStudentToDelete(student);
  };

  const handleCloseDeleteModal = () => {
    setStudentToDelete(null);
  };

  const handleSaveStudent = studentData => {
    setStudents(prevStudents => {
      const existingIndex = prevStudents.findIndex(
        s => s.id === studentData.id,
      );
      if (existingIndex !== -1) {
        const updatedStudents = [...prevStudents];
        updatedStudents[existingIndex] = studentData;
        return updatedStudents;
      } else {
        return [...prevStudents, studentData];
      }
    });

    handleCloseModal();
  };

  const handleDeleteStudent = studentId => {
    setStudents(prevStudents =>
      prevStudents.filter(student => student.id !== studentId),
    );

    handleCloseDeleteModal();
  };

  return (
    <section className={css.studentsTableSection}>
      <button className={css.addBtn} onClick={handleOpenAddModal}>
        +
      </button>
      <table className={css.studentsTable}>
        <thead>
          <tr>
            <th></th>
            <th>Group</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td className={css.bold}>{student.group}</td>
              <td className={css.bold}>
                {student.name} {student.surname}
              </td>
              <td className={css.bold}>{student.gender}</td>
              <td className={css.bold}>{student.birthday}</td>
              <td>
                <span
                  className={
                    student.status === 'active'
                      ? css.statusActive
                      : css.statusInactive
                  }
                ></span>
              </td>
              <td>
                <div className={css.optionsBtnContainer}>
                  <button
                    className={css.optionsBtn}
                    onClick={() => handleOpenEditModal(student)}
                  >
                    <svg
                      className={css.penIcon}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 28 32"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.1"
                    >
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeMiterlimit="4"
                        strokeWidth="2.6667"
                        d="M22 4.667c0.512-0.512 1.219-0.828 2-0.828 1.562 0 2.828 1.266 2.828 2.828 0 0.781-0.317 1.488-0.828 2l-16.667 16.667-5.333 1.333 1.333-5.333 16.667-16.667z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    className={css.optionsBtn}
                    onClick={() => handleOpenDeleteModal(student)}
                  >
                    ×
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <StudentModal
          student={selectedStudent}
          onClose={handleCloseModal}
          onSave={handleSaveStudent}
        />
      )}
      {studentToDelete && (
        <DeleteStudentModal
          student={studentToDelete}
          onClose={handleCloseDeleteModal}
          onDelete={handleDeleteStudent}
        />
      )}
    </section>
  );
};

export default StudentsTable;
