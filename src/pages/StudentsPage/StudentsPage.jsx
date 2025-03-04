import css from './StudentsPage.module.css';

import StudentsTable from '../../components/StudentsTable/StudentsTable';

const StudentsPage = () => {
  return (
    <div className={css.studentsPageContainer}>
      <h1 className={css.title}>Students</h1>
      <StudentsTable />
    </div>
  );
};

export default StudentsPage;
