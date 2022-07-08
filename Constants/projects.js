// import project demo images as follows.
import PROJECT1_1 from '../styles/projects/Project1_1.png';
import PROJECT1_2 from '../styles/projects/Project1_2.png';
import PROJECT1_3 from '../styles/projects/Project1_3.jpg';
import PROJECT2_1 from '../styles/projects/Project2_1.jpg';
import PROJECT2_2 from '../styles/projects/Project2_2.jpg';
import PROJECT2_3 from '../styles/projects/Project2_3.jpg';
import PROJECT3_1 from '../styles/projects/Project3_1.jpg';
import PROJECT3_2 from '../styles/projects/Project3_2.jpg';
import PROJECT3_3 from '../styles/projects/Project3_3.jpg';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'NFT Marketplace', //project name
        description: 'Ethereum based NFT marketplace using Polygon, Next.js, Tailwind CSS, and Hardhat', //project description
        githubLink: 'https://github.com/HashRei/nft-marketplace', //github repo link
        projectLink: '', //deployed project link
        tech: ['Next.js', 'TailwindCSS', 'Solidity'],//techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [PROJECT1_1, PROJECT1_2, PROJECT1_3], //list of names of images from above imports.
    },
    {
        name: 'BAYC top holders subgraph',
        description: 'Web application that returns Bored Ape Yacht Club NFT holders and the number of Bored Apes they hold🐱‍🏍',
        githubLink: 'https://github.com/HashRei/bored-ape-yacht-club-top-holders-second-react-app',
        projectLink: '/',
        tech: ['React', 'GraphQL', 'Subgraph'],
        photo: [PROJECT2_1, PROJECT2_2, PROJECT2_3],
    },
    {
        name: 'Project 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
        githubLink: '/',
        projectLink: '/',
        tech: ['Tech1', 'Tech2', 'Tech3'],
        photo: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
    },
]
