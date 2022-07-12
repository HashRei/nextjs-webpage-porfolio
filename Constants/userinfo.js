//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithub, faLinkedinIn, faTwitter,faTelegramPlane } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Silvan Reigue | HashRei", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: '', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/HashRei', icon: faGithub },
        { type: 'linkedin', link: 'https://www.linkedin.com/in/silvanreigue/', icon: faLinkedinIn },
        { type: 'twitter', link: 'https://twitter.com/HashRei_', icon: faTwitter },
        { type: 'telegram', link: 'https://t.me/HashRei_Real', icon: faTelegramPlane },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hey there, I am Silvan.",
        subtitle: "A developer freshly converted to web3, with several years of experience in programming. Throughout my time in the blockchain space, I've had the opportunity to work on several projects. People I worked with describe me as a fast learner and a dedicated person."
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "FRONTEND", // eg.frontend, backend, devops etc
            skills: ["TypeScript", "Next JS", "TailwindCSS"], //eg. react, html, python etc.
            images: ["typescript-icon.svg", "nextjs.svg", "tailwindcss.svg"]
        },
        {
            category: "BACKEND",
            skills: ["NodeJS", "ExpressJS"],
            images: ["nodejs.svg", "expressjs.svg"]
        },
        {
            category: "DATABASE",
            skills: ["MongoDB", "GraphQL"],
            images: ["mongodb.svg", "graphql.svg"]
        },
        {
            category: "BLOCKCHAIN",
            skills: ["Solidity", "Hardhat", "Subgraphs"],
            images: ["solidity.svg", "hardhat.svg", "thegraph.svg"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "Hi, I'm Silvan, a former engineer with a background in electrical engineering. I fell down the crypto rabbit hole just before the last bull market broke out in 2020. Since then, I've been learning more about it and at some point I decided I wanted to get involved in this ecosystem on a full-time basis.",
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'Consulting', //timespan
                title: 'Blockchain & Database consulting', //eg. BTech in Compuster Engineering
                organization: '', //eg. VJTI, Mumbai
                description: 'Listen to your needs, find the best solution, develop an action plan.'
            },
            {
                time: 'Building',
                title: 'I will develop your web3 project',
                organization: '',
                description: 'NFT Marketplace, DEX, DAO, Blockchain integration'
            },
            {
                time: 'Hosting',
                title: 'I will take care of the hosting your project as well as it\'s data',
                organization: '',
                description: 'IPFS, Heroku, AWS(Amazon), MongoDB'
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Clément Aguilar', //company name eg.Microsoft
                companylogo: 'https://media-exp1.licdn.com/dms/image/C4D03AQFat-p0OgMVHQ/profile-displayphoto-shrink_800_800/0/1620544107621?e=1662595200&v=beta&t=iL4VB-Bder_30sQ8KblPpoTmjDQxv_W9w7qZ4S5BDi8', //companylogo
                position: 'Freelance Blockchain Developer', //post you held eg.Senior SDE
                time: 'https://www.linkedin.com/in/cl%C3%A9ment-aguilar/', //timespan
                description: 'Silvan worked with me on several web3 projects, ranging from the creation of simple ERC20 tokens to more complicated P2Es (play-to-earn). A quick learner, Silvan works quickly and efficiently, and communicates well as he does. He proved to be one of our most useful assets. Our collaboration lasted six months. I am looking forward to working more with him when I get the opportunity.'
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: false
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Tech stack',
    about: 'About Me',
    education: 'Services',
    experience: 'Recommendations',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'My work',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}