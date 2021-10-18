import PropTypes from 'prop-types';
import s from './statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title.toUpperCase()}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, percentage, label }) => (
          <li key={id} className={s.item}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.oneOf(['.docx', '.pdf', '.mp3', '.psd']).isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
