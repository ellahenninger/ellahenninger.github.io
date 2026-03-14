import { useParams } from 'react-router-dom';
import { projects } from '../projectsData';


import './ArticlePage.css';
import { useState, useCallback, useEffect } from 'react';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  // Find the project by matching the link (slug)
  const project = projects.find(p => p.link === `/research/${slug}`);

  if (!project) {
    return <div style={{ padding: '2rem' }}>Article not found.</div>;
  }

  // Use real authors, journal, date from project data
  const authors = project.authors || 'Unknown';
  const journal = project.journal;
  const date = project.date;

  // Prepare for multiple images in the future
  const images = [project.thumbnail].filter(Boolean);

  // Gallery modal state
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIdx, setGalleryIdx] = useState(0);

  // Open modal on image click
  const openGallery = useCallback((idx: number) => {
    setGalleryIdx(idx);
    setGalleryOpen(true);
  }, []);

  // Close modal
  const closeGallery = useCallback(() => setGalleryOpen(false), []);

  // ESC key closes modal
  useEffect(() => {
    if (!galleryOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeGallery();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [galleryOpen, closeGallery]);

  return (
    <div className="article-page">
      <div className="article-hero">
        <h1>{project.title}</h1>
        <div className="article-meta">
          <div><strong>Authors:</strong> {authors}</div>
          {journal && (
            <div><strong>Journal:</strong> {journal}</div>
          )}
          {date && (
            <div><strong>Date:</strong> {new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</div>
          )}
        </div>
      </div>
      <div className="article-abstract">
        <strong>Abstract:</strong>
        <p>{project.abstract}</p>
      </div>
     
    </div>
  );
}
