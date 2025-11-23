export type ProjectTag = 'Policy brief' | 'Publication' | 'Work in progress';

export interface Project {
  id: string;
  title: string;
  description: string;
  abstract: string;
  thumbnail: string;
  tags: ProjectTag[];
  link: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Climate Policy Analysis',
    description: 'A brief on climate policy recommendations for 2025.',
    abstract: 'This project analyzes climate policy options and their effectiveness for the year 2025, focusing on mitigation and adaptation strategies.',
    thumbnail: 'src/assets/Thumbnails/thumbnail_accra.jpeg',
    tags: ['Policy brief'],
    link: '/research/climate-policy',
  },
  {
    id: '2',
    title: 'Education Reform Publication',
    description: 'Published work on modern education reform strategies.',
    abstract: 'This publication explores innovative strategies for education reform, emphasizing inclusivity and technology integration.',
    thumbnail: 'src/assets/Thumbnails/thumbnail_beyond the haze.jpeg',
    tags: ['Publication'],
    link: '/research/education-reform',
  },
  {
    id: '3',
    title: 'AI in Social Sciences',
    description: 'Ongoing research on the impact of AI in social sciences.',
    abstract: 'This work in progress investigates the applications and implications of artificial intelligence in social science research.',
    thumbnail: 'src/assets/Thumbnails/thumbnail_bike münster.jpeg',
    tags: ['Work in progress'],
    link: '/research/ai-social',
  },
  {
    id: '4',
    title: 'Healthcare Policy Brief',
    description: 'Policy brief on healthcare access and equity.',
    abstract: 'This brief addresses challenges and solutions for improving healthcare access and equity in diverse populations.',
    thumbnail: 'src/assets/Thumbnails/thumbnail_delhi.jpeg',
    tags: ['Policy brief'],
    link: '/research/healthcare-policy',
  },
  {
    id: '5',
    title: 'Migration Trends Publication',
    description: 'Peer-reviewed publication on migration trends in Europe.',
    abstract: 'This publication analyzes recent migration trends in Europe, focusing on causes, patterns, and policy responses.',
    thumbnail: 'src/assets/Thumbnails/thumbnail_jakarta.jpeg',
    tags: ['Publication'],
    link: '/research/migration-trends',
  },
  {
    id: '6',
    title: 'Digital Literacy Study',
    description: 'Work in progress: digital literacy in rural communities.',
    abstract: 'This study examines the state of digital literacy in rural communities and proposes strategies for improvement.',
    thumbnail: 'src/assets/Thumbnails/thumbnail_map münster.jpeg',
    tags: ['Work in progress'],
    link: '/research/digital-literacy',
  },
  {
    id: '7',
    title: 'Urban Mobility Policy',
    description: 'Policy brief on sustainable urban mobility solutions.',
    abstract: 'This brief explores sustainable urban mobility solutions, including public transport and non-motorized options.',
    thumbnail: 'src/assets/Thumbnails/thumbnail_joburg.jpeg',
    tags: ['Policy brief'],
    link: '/research/urban-mobility',
  },
  {
    id: '8',
    title: 'Renewable Energy Publication',
    description: 'Publication on the adoption of renewable energy in developing countries.',
    abstract: 'This publication discusses the challenges and opportunities for renewable energy adoption in developing countries.',
    thumbnail: 'src/assets/Thumbnails/thumbnail_pollution havens1.jpeg',
    tags: ['Publication'],
    link: '/research/renewable-energy',
  },
  {
    id: '9',
    title: 'Water Security Work in Progress',
    description: 'Ongoing research on water security challenges in arid regions.',
    abstract: 'This project investigates water security issues in arid regions, focusing on sustainable management and policy.',
    thumbnail: 'src/assets/Thumbnails/thumbnail_pollution havens2.jpeg',
    tags: ['Work in progress'],
    link: '/research/water-security',
  },
  {
    id: '10',
    title: 'Food Systems Policy Brief',
    description: 'Policy brief on resilient food systems for urban populations.',
    abstract: 'This brief examines strategies for building resilient food systems in urban environments.',
    thumbnail: 'src/assets/Thumbnails/thumbnail_persistent inequalities.jpeg',
    tags: ['Policy brief'],
    link: '/research/food-systems',
  },
  {
    id: '11',
    title: 'Smart Cities Publication',
    description: 'Peer-reviewed publication on smart city technologies and governance.',
    abstract: 'This publication reviews smart city technologies and their impact on urban governance and quality of life.',
    thumbnail: 'src/assets/Thumbnails/thumbnail_qual paper.png',
    tags: ['Publication'],
    link: '/research/smart-cities',
  },
  {
    id: '12',
    title: 'Climate Adaptation Work in Progress',
    description: 'Work in progress: climate adaptation strategies for coastal areas.',
    abstract: 'This project explores adaptation strategies for coastal areas facing climate change impacts.',
    thumbnail: 'src/assets/Thumbnails/thumbnail_shifting pollution.jpeg',
    tags: ['Work in progress'],
    link: '/research/climate-adaptation',
  },
  {
    id: '13',
    title: 'Public Health Policy Brief',
    description: 'Policy brief on public health interventions in megacities.',
    abstract: 'This brief discusses public health interventions and challenges in large urban centers.',
    thumbnail: 'src/assets/Thumbnails/thumbnail_strong demand.png',
    tags: ['Policy brief'],
    link: '/research/public-health',
  }
];
