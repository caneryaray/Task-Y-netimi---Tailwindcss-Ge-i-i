import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PeopleForm = ({ kisiler, submitFn }) => {
  const [isim, setIsim] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (kisiler.includes(isim)) {
      setError('Bu isim daha önce eklenmiş');
    } else {
      setError(null);
    }
  }, [isim, kisiler]);

  function handleIsimChange(e) {
    setIsim(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitFn(isim);
    setIsim('');
  }

  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <div className="form-line">
        <label className="input-label" htmlFor="name">
          İsim
        </label>
        <input
          className="input-text"
          id="name"
          name="name"
          type="text"
          onChange={handleIsimChange}
          value={isim}
        />
        <p className="input-error">{error}</p>
      </div>

      <div className="form-line">
        <button
          className="submit-button"
          type="submit"
          disabled={isim.length === 0 || error}
        >
          Ekle
        </button>
      </div>
    </form>
  );
};

PeopleForm.propTypes = {
  kisiler: PropTypes.arrayOf(PropTypes.string).isRequired,
  submitFn: PropTypes.func.isRequired,
};

export default PeopleForm;
