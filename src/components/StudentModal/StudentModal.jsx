import css from './StudentModal.module.css';

import { useState } from 'react';

import groups from '../../services/groups.json';

const StudentModal = ({ student, onClose, onSave }) => {
  const isEditMode = Boolean(student);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    group: student?.group || '',
    firstName: student?.name || '',
    lastName: student?.surname || '',
    gender: student?.gender || '',
    birthday: student?.birthday
      ? student.birthday.split('.').reverse().join('-')
      : '',
    status: student?.status === 1 ? 1 : 0,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'status' ? (value === '1' ? 1 : 0) : value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!validateForm()) return;

    const newStudent = {
      id: isEditMode ? student.id : Date.now(),
      group: formData.group,
      name: formData.firstName,
      surname: formData.lastName,
      gender: formData.gender,
      birthday: formData.birthday.split('-').reverse().join('.'),
      status: formData.status,
    };

    onSave(newStudent);
    onClose();
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.group.trim()) {
      errors.group = '*Group is required';
    }

    if (!formData.firstName.trim()) {
      errors.firstName = '*First name is required';
    } else if (formData.firstName.trim().length > 128) {
      errors.firstName = '*First name must be 128 characters or less';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = '*Last name is required';
    } else if (formData.lastName.trim().length > 128) {
      errors.lastName = '*Last name must be 128 characters or less';
    }

    if (!formData.gender.trim()) {
      errors.gender = '*Gender is required';
    }

    if (!formData.birthday.trim()) {
      errors.birthday = '*Birthday is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className={css.studentModal}>
      <div className={css.studentModalContainer}>
        <button className={css.closeButton} onClick={onClose}>
          <span className="icon-remove"></span>
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
              <option value="" disabled>
                Select Group
              </option>
              {groups.map(group => (
                <option key={group.id} value={group.name}>
                  {group.name}
                </option>
              ))}
            </select>
            {formErrors.group && (
              <p className={css.error}>{formErrors.group}</p>
            )}
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
            {formErrors.firstName && (
              <p className={css.error}>{formErrors.firstName}</p>
            )}
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
            {formErrors.lastName && (
              <p className={css.error}>{formErrors.lastName}</p>
            )}
          </label>
          <label className={css.inputLabel}>
            Gender
            <select
              name="gender"
              className={css.selectInput}
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            {formErrors.gender && (
              <p className={css.error}>{formErrors.gender}</p>
            )}
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
            {formErrors.birthday && (
              <p className={css.error}>{formErrors.birthday}</p>
            )}
          </label>
          <fieldset className={css.statusFieldset}>
            <p className={css.inputLabel}>Status</p>
            <label className={css.radioLabel}>
              <input
                type="radio"
                name="status"
                value="1"
                checked={formData.status === 1}
                onChange={handleChange}
              />
              Active
            </label>
            <label className={css.radioLabel}>
              <input
                type="radio"
                name="status"
                value="0"
                checked={formData.status === 0}
                onChange={handleChange}
              />
              Inactive
            </label>
          </fieldset>
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
