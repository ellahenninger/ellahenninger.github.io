import { useParams } from 'react-router-dom';
import { projects } from '../projectsData';
import './ArticlePage.css';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  // Find the project by matching the link (slug)
  const project = projects.find(p => p.link === `/research/${slug}`);

  if (!project) {
    return <div style={{ padding: '2rem' }}>Article not found.</div>;
  }

  // Placeholder authors, but use real abstract and image from project data
  const authors = 'Author One, Author Two';
  const images = [project.thumbnail];

  return (
    <div className="article-page">
      <h1>{project.title}</h1>
      <div className="article-meta">
        <strong>Authors:</strong> {authors}
      </div>
      <div className="article-abstract">
        <strong>Abstract:</strong>
        <p>{project.abstract}</p>
      </div>
      <div className="article-images">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={project.title + ' image ' + (idx + 1)} className="article-image" />
        ))}
      </div>
      <div className="article-content">
        <h2>More Information</h2>
        <p>Room for more text, figures, and details about the article or project. You can expand this section as needed.</p>
      </div>
    </div>
  );
}
