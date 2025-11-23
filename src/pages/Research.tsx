
import { useState } from 'react';

import { Link } from 'react-router-dom';
import { projects } from './projectsData';
import type { ProjectTag, Project } from './projectsData';
import './Research.css';

export default function Research() {
  const [selectedTag, setSelectedTag] = useState<ProjectTag | 'All'>('All');
  const tags: (ProjectTag | 'All')[] = ['All', 'Policy brief', 'Publication', 'Work in progress'];
  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter((project: Project) => project.tags.includes(selectedTag));

  return (
    <section className="research">
      <h1>Research</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', gap: '1rem', flexWrap: 'wrap' }}>
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            style={{
              background: selectedTag === tag ? '#205295' : '#e3eafc',
              color: selectedTag === tag ? '#fff' : '#205295',
              border: 'none',
              borderRadius: '4px',
              padding: '0.4rem 1.1rem',
              fontWeight: 500,
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="articles-grid">
        {filteredProjects.map(project => (
          <Link className="article-card" to={project.link} key={project.id}>
            <img src={project.thumbnail} alt={project.title} className="article-thumb" />
            <div className="article-info">
              <h2>{project.title}</h2>
              <p style={{color: '#444', fontSize: '0.98rem', margin: '0.5rem 0 1rem 0'}}>{project.description}</p>
              <div className="tags">
                {project.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
