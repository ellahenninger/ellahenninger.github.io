
import { useState } from 'react';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { projects } from './projectsData';
import type { ProjectTag, Project } from './projectsData';
import './Research.css';

export default function Research() {
  const [selectedTag, setSelectedTag] = useState<ProjectTag | 'All'>('All');

  // Custom tab order: Publication, Work in progress, Policy brief
  const tags: (ProjectTag | 'All')[] = ['All', 'Publication', 'Work in progress', 'Policy brief'];



  // For fade-in animation: trigger on tab change
  const [fadeKey, setFadeKey] = useState(0);
  useEffect(() => {
    setFadeKey(prev => prev + 1);
  }, [selectedTag]);



  const groupOrder: ProjectTag[] = ['Publication', 'Work in progress', 'Policy brief'];
  const filteredProjects = (() => {
    const base = selectedTag === 'All'
      ? projects
      : projects.filter((project: Project) => project.tags.includes(selectedTag));
    // Group and sort by tag, then concatenate for strict top-to-bottom order
    const grouped: Record<ProjectTag, Project[]> = {
      'Publication': [],
      'Work in progress': [],
      'Policy brief': [],
    };
    base.forEach(p => {
      const tag = p.tags[0];
      if (grouped[tag]) grouped[tag].push(p);
    });
    groupOrder.forEach(tag => {
      grouped[tag].sort((a, b) => {
        const aDate = a.date ? new Date(a.date).getTime() : 0;
        const bDate = b.date ? new Date(b.date).getTime() : 0;
        return bDate - aDate;
      });
    });
    // Concatenate groups for strict order: all Publication, then Work in progress, then Policy brief
    return groupOrder.flatMap(tag => grouped[tag]);
  })();

  return (
    <section className="research" style={{ width: '100vw', maxWidth: '100vw', margin: 0, padding: 0 }}>
      <div className="tab-bar">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`tab-btn${selectedTag === tag ? ' active' : ''}`}
            type="button"
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="articles-grid">
        {filteredProjects.map((project, idx) => {
          const isExternal = project.link.startsWith('http');
          const cardContent = (
            <>
              <img src={project.thumbnail} alt={project.title} className="article-thumb" />
              <div className="article-info">
                <h2>{project.title}</h2>
                {project.authors && (
                  <div style={{ fontSize: '0.93rem', color: '#333', margin: '0.2rem 0 0.5rem 0' }}>
                    <strong>Authors:</strong> {project.authors}
                  </div>
                )}
                {project.journal && (
                  <div style={{ fontSize: '0.8rem', color: '#333', marginBottom: '0.3rem' }}>
                    <strong>Journal:</strong> {project.journal}
                  </div>
                )}
                <p style={{color: '#444', fontSize: '0.98rem', margin: '0 0 0.5rem 0'}}>{project.description}</p>
                <div className="tags">
                  {project.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </>
          );
          return isExternal ? (
            <a
              className="article-card fadein"
              href={project.link}
              key={project.id + '-' + fadeKey}
              style={{ animationDelay: `${0.08 * idx + 0.08}s` }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cardContent}
            </a>
          ) : (
            <Link
              className="article-card fadein"
              to={project.link}
              key={project.id + '-' + fadeKey}
              style={{ animationDelay: `${0.08 * idx + 0.08}s` }}
            >
              {cardContent}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
