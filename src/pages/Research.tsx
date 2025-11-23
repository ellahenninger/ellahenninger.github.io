
import { useState } from 'react';

import { Link } from 'react-router-dom';
import { projects } from './projectsData';
import type { ProjectTag, Project } from './projectsData';
import './Research.css';

export default function Research() {
  const [selectedTag, setSelectedTag] = useState<ProjectTag | 'All'>('All');

  // Custom tab order: Publication, Work in progress, Policy brief
  const tags: (ProjectTag | 'All')[] = ['All', 'Publication', 'Work in progress', 'Policy brief'];

  // Sort projects by: Publication (date desc), Work in progress (date desc), Policy brief (date desc)
  function sortProjects(projects: Project[]): Project[] {
    const tagOrder: Record<ProjectTag, number> = {
      'Publication': 0,
      'Work in progress': 1,
      'Policy brief': 2,
    };
    return [...projects].sort((a, b) => {
      // Sort by tag order first (lowest index first)
      const aTag = a.tags[0];
      const bTag = b.tags[0];
      if (tagOrder[aTag] !== tagOrder[bTag]) {
        return tagOrder[aTag] - tagOrder[bTag];
      }
      // Then by date descending (most recent first)
      const aDate = a.date ? new Date(a.date).getTime() : 0;
      const bDate = b.date ? new Date(b.date).getTime() : 0;
      return bDate - aDate;
    });
  }

  const filteredProjects = sortProjects(
    selectedTag === 'All'
      ? projects
      : projects.filter((project: Project) => project.tags.includes(selectedTag))
  );

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
              {project.authors && (
                <div style={{ fontSize: '0.93rem', color: '#333', margin: '0.2rem 0 0.5rem 0' }}>
                  <strong>Authors:</strong> {project.authors}
                </div>
              )}
              <p style={{color: '#444', fontSize: '0.98rem', margin: '0 0 0.5rem 0'}}>{project.description}</p>
              {project.journal && (
                <div style={{ fontSize: '0.95rem', color: '#205295', marginBottom: '0.3rem' }}>
                  <strong>Journal:</strong> {project.journal}
                </div>
              )}
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
