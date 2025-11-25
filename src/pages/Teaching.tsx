
import { teachingClasses } from './teachingData';
import './Teaching.css';
import teacherInClassImg from '../assets/teaching.jpg';

export default function Teaching() {
  return (
    <section className="teaching">
      <div className="teaching-main-card">
        <img
          src={teacherInClassImg}
          alt="Teacher in class"
          className="teaching-main-img"
        />
        <div className="teaching-main-text">
          <h2>Teaching Philosophy</h2>
          <p>
            I am committed to fostering critical thinking, inclusivity, and real-world engagement in the classroom. My courses span urban policy, environmental justice, and research methods, with a focus on connecting theory to practice.
          </p>
        </div>
      </div>
      <div className="teaching-section-card">
        <h2 className="teaching-section-title">Courses Taught</h2>
        <div className="teaching-list">
          {teachingClasses.map((cls, idx) => (
            <div className="teaching-class-card" key={idx}>
              <div className="teaching-class-header">
                <h3 className="teaching-class-title">{cls.title}</h3>
                <span className="teaching-class-term">{cls.term}</span>
              </div>
              <div className="teaching-class-meta">
                <span className="teaching-class-institution">{cls.institution}</span>
              </div>
              <p className="teaching-class-desc">{cls.description}</p>
              {cls.link && (
                <a className="teaching-class-link" href={cls.link} target="_blank" rel="noopener noreferrer">More info</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
