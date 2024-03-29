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
                companylogo: 'https://media-exp1.licdn.com/dms/image/C4D03AQFat-p0OgMVHQ/profile-displayphoto-shrink_800_800/0/1620544107621?e=1663804800&v=beta&t=3TZJuiDCxf4SJMzXSTxfoVE8YLIclGJuqDG8nEUqRsU', //companylogo
                position: 'Freelance Blockchain Developer', //post you held eg.Senior SDE
                time: 'https://www.linkedin.com/in/cl%C3%A9ment-aguilar/', //timespan
                social: 'Linkedin',
                description: 'Silvan worked with me on several web3 projects, ranging from the creation of simple ERC20 tokens to more complicated P2Es (play-to-earn). A quick learner, Silvan works quickly and efficiently, and communicates well as he does. He proved to be one of our most useful assets. Our collaboration lasted six months. I am looking forward to working more with him when I get the opportunity.'
            },
            {
                company: 'Mathieu Vandecasteele', //company name eg.Microsoft
                companylogo: 'https://pbs.twimg.com/profile_images/1454773740940713985/Bf6Xfd_I_400x400.png', //companylogo
                position: 'Software Engineer & Programming Mentor', //post you held eg.Senior SDE
                time: 'https://www.linkedin.com/in/mathieuvdc/', //timespan
                social: 'Linkedin',
                description: 'I have had the pleasure of working with Silvan in the past. Proactive, hard working and well organised. He has a high capacity for rapid learning and adaptation, he was very professional under the intensive workload we had. Silvan is always goal-oriented, which has proven to be valuable in difficult times. He is definitely a good asset to any project and organisation he joins.'
            },
            {
                company: 'Roko Tensei', //company name eg.Microsoft
                companylogo: 'https://rokotensei.com/wp-content/uploads/2021/02/1080-1024x1024.png.webp', //companylogo
                position: 'Music Producer', //post you held eg.Senior SDE
                time: 'https://www.instagram.com/rokotensei/', //timespan
                social: 'Instagram',
                description: 'I took some consultations with Silvan regarding the integration of some of my beats into NFTs. He helped me in a clear and professional way to understand if it was a good idea or not. I decided not to go ahead with the project. Silvan\'s knowledge saved me 1000\'s of dollars. His explanations were practical, and easy to understand, even for someone with no experience in web3. I highly recommend working with Silvan.'
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