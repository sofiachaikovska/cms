import css from './DeleteStudentModal.module.css';

const DeleteStudentModal = ({ student, onClose, onDelete }) => {
  return (
    <div className={css.deleteStudentModal}>
      <div className={css.deleteStudentModalContainer}>
        <button className={css.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={css.modalHeader}>
          <h2 className={css.delteModalTitle}>Warning</h2>
        </div>
        <div className={css.deleteStudentModalContent}>
          <p className={css.deleteStudentText}>
            Are you sure you want to delete user {student.name}{' '}
            {student.surname}?
          </p>
          <div className={css.delteBtnContainer}>
            <button
              className={css.deleteBtn}
              onClick={() => onDelete(student.id)}
            >
              Ok
            </button>
            <button className={css.deleteBtn} onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteStudentModal;
