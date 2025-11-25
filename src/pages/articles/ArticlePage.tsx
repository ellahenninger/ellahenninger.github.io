import { useParams } from 'react-router-dom';
import { projects } from '../projectsData';
import thumbAccra from '../../assets/Thumbnails/thumbnail_accra.jpeg';
import thumbStrongDemand from '../../assets/Thumbnails/thumbnail_strong demand.png';
import thumbBeyondHaze from '../../assets/Thumbnails/thumbnail_beyond the haze.jpeg';
import thumbDelhi from '../../assets/Thumbnails/thumbnail_delhi.jpeg';
import thumbShiftingPollution from '../../assets/Thumbnails/thumbnail_shifting pollution.jpeg';
import thumbMapMunster from '../../assets/Thumbnails/thumbnail_map münster.jpeg';
import thumbJakarta from '../../assets/Thumbnails/thumbnail_jakarta.jpeg';
import thumbQualPaper from '../../assets/Thumbnails/thumbnail_qual paper.png';
import thumbJoburg from '../../assets/Thumbnails/thumbnail_joburg.jpeg';
import thumbPollutionHavens1 from '../../assets/Thumbnails/thumbnail_pollution havens1.jpeg';
import thumbBikeMunster from '../../assets/Thumbnails/thumbnail_bike münster.jpeg';
import thumbPollutionHavens2 from '../../assets/Thumbnails/thumbnail_pollution havens2.jpeg';
import thumbPersistentInequalities from '../../assets/Thumbnails/thumbnail_persistent inequalities.jpeg';

const thumbnails: Record<string, string> = {
  'src/assets/Thumbnails/thumbnail_accra.jpeg': thumbAccra,
  'src/assets/Thumbnails/thumbnail_strong demand.png': thumbStrongDemand,
  'src/assets/Thumbnails/thumbnail_beyond the haze.jpeg': thumbBeyondHaze,
  'src/assets/Thumbnails/thumbnail_delhi.jpeg': thumbDelhi,
  'src/assets/Thumbnails/thumbnail_shifting pollution.jpeg': thumbShiftingPollution,
  'src/assets/Thumbnails/thumbnail_map münster.jpeg': thumbMapMunster,
  'src/assets/Thumbnails/thumbnail_jakarta.jpeg': thumbJakarta,
  'src/assets/Thumbnails/thumbnail_qual paper.png': thumbQualPaper,
  'src/assets/Thumbnails/thumbnail_joburg.jpeg': thumbJoburg,
  'src/assets/Thumbnails/thumbnail_pollution havens1.jpeg': thumbPollutionHavens1,
  'src/assets/Thumbnails/thumbnail_bike münster.jpeg': thumbBikeMunster,
  'src/assets/Thumbnails/thumbnail_pollution havens2.jpeg': thumbPollutionHavens2,
  'src/assets/Thumbnails/thumbnail_persistent inequalities.jpeg': thumbPersistentInequalities,
};

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
  const images = [thumbnails[project.thumbnail]].filter(Boolean);

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
      <div className="article-details-row">
        <div className="article-images">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={project.title + ' image ' + (idx + 1)}
              className="article-image"
              style={{ cursor: 'pointer' }}
              onClick={() => openGallery(idx)}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') openGallery(idx); }}
              aria-label="Open image gallery"
            />
          ))}
        </div>
        <div className="article-content">
          <h2>More Information</h2>
          <p>Room for more text, figures, and details about the article or project. You can expand this section as needed.</p>
        </div>
      </div>

      {/* Modal Gallery */}
      {galleryOpen && (
        <div className="gallery-modal" onClick={closeGallery}>
          <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <img src={images[galleryIdx]} alt={project.title + ' large image'} className="gallery-modal-img" />
            <button className="gallery-modal-close" onClick={closeGallery} aria-label="Close gallery">&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}
