import css from './StudentModal.module.css';

import { useState } from 'react';

import groups from '../../services/groups.json';

const StudentModal = ({ student, onClose, onSave }) => {
  const isEditMode = Boolean(student);
  const [formData, setFormData] = useState({
    group: student?.group || '',
    firstName: student?.name || '',
    lastName: student?.surname || '',
    gender: student?.gender || '',
    birthday: student?.birthday
      ? student.birthday.split('.').reverse().join('-')
      : '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      !formData.group ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.gender ||
      !formData.birthday
    ) {
      alert('Please fill in all fields');
      return;
    }

    const newStudent = {
      id: isEditMode ? student.id : Date.now(),
      group: formData.group,
      name: formData.firstName,
      surname: formData.lastName,
      gender: formData.gender,
      birthday: formData.birthday.split('-').reverse().join('.'),
      status: Math.random() < 0.5 ? 'active' : 'inactive',
    };

    onSave(newStudent);
    onClose();
  };

  return (
    <div className={css.studentModal}>
      <div className={css.studentModalContainer}>
        <button className={css.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={css.modalHeader}>
          <h2 className={css.studentModalTitle}>
            {isEditMode ? 'Edit student' : 'Add student'}
          </h2>
        </div>
        <form className={css.studentForm}>
          <label className={css.inputLabel}>
            Group
            <select
              name="group"
              value={formData.group}
              className={css.selectInput}
              onChange={handleChange}
            >
              <option value="">Select Group</option>
              {groups.map(group => (
                <option key={group.id} value={group.name}>
                  {group.name}
                </option>
              ))}
            </select>
          </label>
          <label className={css.inputLabel}>
            First name
            <input
              type="text"
              name="firstName"
              className={css.textInput}
              placeholder="Enter first name..."
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <label className={css.inputLabel}>
            Last name
            <input
              type="text"
              name="lastName"
              className={css.textInput}
              placeholder="Enter last name..."
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          <label className={css.inputLabel}>
            Gender
            <select
              name="gender"
              className={css.selectInput}
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </label>
          <label className={css.inputLabel}>
            Birthday
            <input
              type="date"
              name="birthday"
              className={css.selectInput}
              value={formData.birthday}
              onChange={handleChange}
            />
          </label>
          <div className={css.studentModalBtnContainer}>
            <button className={css.studentModalBtn} onClick={onClose}>
              Ok
            </button>
            <button className={css.studentModalBtn} onClick={handleSubmit}>
              {isEditMode ? 'Save' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentModal;
