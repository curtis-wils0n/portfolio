export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'curtis-wils0n',
    subtitle: 'A blog, a portfolio, and a home for all my links',
    description: 'A personal blog and portfolio for Curtis Wilson. Theme is "Dante" by justgoodui.com',
    image: {
        src: '/post-9.jpg',
        alt: 'curtis-wils0n - blog and portfolio'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/curtis-wils0n'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/curtis__wilson/'
        }
    ],
    hero: {
        title: 'Hey There, and Welcome to My Corner of the Web!',
        text: "I'm **Curtis Wilson**, a web developer based out of Calgary, Alberta\
            currently working with <a href='https://www.atrematech.com/' target='_blank'\
            rel='nooperner noreferrer'>Atrema Technologies</a> to bring fast, elegant web\
            applications to customers around the globe. I am passionate about improving on\
            large-scale data-driven applications to prioritize ease-of-use and user\
            engagement. With a past in program facilitation, I find transforming complex topics into\
            digestable bites an immensely enjoyable experience.",
        image: {
            src: '/profile-bw.jpg',
            alt: 'A picture of Curtis Wilson sitting at a desk in front of a sound board and computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
