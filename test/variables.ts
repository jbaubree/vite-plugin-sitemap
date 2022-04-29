export const ROBOTS_FILE = 'dist/robots.txt'
export const SITEMAP_FILE = 'dist/sitemap.xml'
export const TEST_FILES = ['dist/test.html', 'dist/sub-path/index.html', 'dist/sub-path/deeper-path.html']
export const SUBPATH_FOLDER = 'dist/sub-path/'
export const TEST_OPTION_1 = [{
  userAgent: '*',
  allow: '/',
}]
export const TEST_OPTION_2 = [
  {
    userAgent: '*',
    allow: '/',
  },
  {
    userAgent: 'Googlebot',
    allow: '/admin',
    disallow: ['/disallow', '/test'],
    crawlDelay: 10,
  },
]

export const TEST_RULES_1 = [{
  key: 'User-agent',
  value: '*',
},
{
  key: 'Allow',
  value: '/',
}]
export const TEST_RULES_2 = [
  {
    key: 'User-agent',
    value: '*',
  },
  {
    key: 'Allow',
    value: '/',
  },
  {
    key: 'User-agent',
    value: 'Googlebot',
  },
  {
    key: 'Allow',
    value: '/admin',
  },
  {
    key: 'Disallow',
    value: '/disallow',
  },
  {
    key: 'Disallow',
    value: '/test',
  },
  {
    key: 'Crawl-delay',
    value: 10,
  },
]
