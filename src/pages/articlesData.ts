export type ArticleTag = 'Policy brief' | 'Publications' | 'Work in progress';

export interface Article {
  id: string;
  title: string;
  thumbnail: string;
  tags: ArticleTag[];
  link: string;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Policy Implications of X',
    thumbnail: '/thumbnails/policy1.jpg',
    tags: ['Policy brief'],
    link: '/research/policy-implications-x',
  },
  {
    id: '2',
    title: 'Recent Advances in Y',
    thumbnail: '/thumbnails/publication1.jpg',
    tags: ['Publications'],
    link: '/research/recent-advances-y',
  },
  {
    id: '3',
    title: 'Ongoing Study on Z',
    thumbnail: '/thumbnails/wip1.jpg',
    tags: ['Work in progress'],
    link: '/research/ongoing-study-z',
  },
];
