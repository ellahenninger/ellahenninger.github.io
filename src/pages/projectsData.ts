export type ProjectTag = 'Policy brief' | 'Publication' | 'Work in progress';

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: ProjectTag[];
  link: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Climate Policy Analysis',
    description: 'A brief on climate policy recommendations for 2025.',
    thumbnail: '/thumbnails/climate-policy.jpg',
    tags: ['Policy brief'],
    link: '/research/climate-policy',
  },
  {
    id: '2',
    title: 'Education Reform Publication',
    description: 'Published work on modern education reform strategies.',
    thumbnail: '/thumbnails/education-reform.jpg',
    tags: ['Publication'],
    link: '/research/education-reform',
  },
  {
    id: '3',
    title: 'AI in Social Sciences',
    description: 'Ongoing research on the impact of AI in social sciences.',
    thumbnail: '/thumbnails/ai-social.jpg',
    tags: ['Work in progress'],
    link: '/research/ai-social',
  },
  {
    id: '4',
    title: 'Healthcare Policy Brief',
    description: 'Policy brief on healthcare access and equity.',
    thumbnail: '/thumbnails/healthcare-policy.jpg',
    tags: ['Policy brief'],
    link: '/research/healthcare-policy',
  },
  {
    id: '5',
    title: 'Migration Trends Publication',
    description: 'Peer-reviewed publication on migration trends in Europe.',
    thumbnail: '/thumbnails/migration-trends.jpg',
    tags: ['Publication'],
    link: '/research/migration-trends',
  },
  {
    id: '6',
    title: 'Digital Literacy Study',
    description: 'Work in progress: digital literacy in rural communities.',
    thumbnail: '/thumbnails/digital-literacy.jpg',
    tags: ['Work in progress'],
    link: '/research/digital-literacy',
  }
];
