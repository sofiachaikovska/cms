import css from './StudentsTable.module.css';

import { useState } from 'react';

import StudentModal from '../StudentModal/StudentModal';
import DeleteStudentModal from '../DeleteStudentModal/DeleteStudentModal';
import PaginationSection from '../PaginationSection/PaginationSection';

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);

  const handleOpenModal = e => {
    const studentId = Number(e.currentTarget.dataset.id);
    const student = students.find(s => s.id === studentId) || null;
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
      <button className={css.addBtn} data-id="0" onClick={handleOpenModal}>
        <span className="icon-plus"></span>
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
                    student.status === 1 ? css.statusActive : css.statusInactive
                  }
                ></span>
              </td>
              <td>
                <div className={css.optionsBtnContainer}>
                  <button
                    className={css.optionsBtn}
                    data-id={student.id}
                    onClick={handleOpenModal}
                  >
                    <span className="icon-pen"></span>
                  </button>
                  <button
                    className={css.optionsBtn}
                    onClick={() => handleOpenDeleteModal(student)}
                  >
                    <span className="icon-remove"></span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationSection />
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
