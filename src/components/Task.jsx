import { formatDistanceToNow, differenceInDays, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale'; // Türkçe için
import PropTypes from 'prop-types';

const Task = ({ taskObj, onComplete }) => {
  // deadline'ı date-fns ile parse edip gün farkını bul
  const deadlineDate = parseISO(taskObj.deadline); // YYYY-MM-DD formatı varsayalım
  const daysLeft = differenceInDays(deadlineDate, new Date());

  // arka plan rengini belirle
  const bgColorClass = daysLeft < 3 ? 'bg-urgent' : 'bg-normal';

  return (
    <div className="task p-6 bg-white border rounded-md shadow-[0_4px_5px_0_rgb(0 0 0 / 10%)] leading-normal mt-4">
      <h3 className="text-lg text-[#c8781a] font-semibold mb-2">{taskObj.title}</h3>

      <div
        className={`deadline text-xs pt-1 inline-block px-2 py-1 rounded-sm ${bgColorClass} text-white mb-2`}
      >
        Son teslim:{' '}
        <span className={`py-1 px-2 rounded-sm inline-block ${bgColorClass}`}>
          {formatDistanceToNow(deadlineDate, { addSuffix: true, locale: tr })}
        </span>
      </div>

      <p className="pt-2 pb-3 text-sm text-[#444]">{taskObj.description}</p>

      <div className="flex flex-wrap gap-2 mb-2">
        {taskObj.people.map((p) => (
        <span
            key={p}
            className="pill inline-block py-1.5 px-3 border-solid border-2 border-[#ccc] text-sm mr-1 mb-1.5 rounded-[30px]"
          >
            {p}
          </span>
        ))}
      </div>

      {onComplete && (
        <button
          onClick={() => onComplete(taskObj.id)}
          className="block py-2 px-3 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgb(0 0 0 / 5%)] text-white rounded-sm border-0 cursor-pointer hover:bg-[#e6b87a] transition-colors"
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

Task.propTypes = {
  taskObj: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    people: PropTypes.arrayOf(PropTypes.string).isRequired,
    deadline: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  onComplete: PropTypes.func,
};

export default Task;
