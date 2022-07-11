// import project demo images as follows.
import PROJECT1_1 from '../styles/projects/Project1_1.png';
import PROJECT1_2 from '../styles/projects/Project1_2.png';
import PROJECT1_3 from '../styles/projects/Project1_3.png';
import PROJECT2_1 from '../styles/projects/Project2_1.png';
import PROJECT2_2 from '../styles/projects/Project2_2.png';
import PROJECT3_1 from '../styles/projects/Project3_1.png';
import PROJECT3_2 from '../styles/projects/Project3_2.png';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'NFT Marketplace', //project name
        description: 'Ethereum based NFT marketplace using Polygon, Next.js, Tailwind CSS, and Hardhat', //project description
        githubLink: 'https://github.com/HashRei/nft-marketplace', //github repo link
        projectLink: '', //deployed project link
        videoLink: '', //deployed video link
        tech: ['Next.js', 'TailwindCSS', 'Solidity'],//techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [PROJECT1_1, PROJECT1_2, PROJECT1_3], //list of names of images from above imports.
    },
    {
        name: 'BAYC top holders subgraph',
        description: 'Web application that returns Bored Ape Yacht Club NFT holders and the number of Bored Apes they hold🐱‍🏍',
        githubLink: 'https://github.com/HashRei/bored-ape-yacht-club-top-holders-second-react-app',
        projectLink: '/',
        videoLink: 'https://www.youtube.com/watch?v=0mvjyO3KZxk&t=2s', //deployed video link
        tech: ['React', 'GraphQL', 'Subgraph'],
        photo: [PROJECT2_1, PROJECT2_2],
    },
    {
        name: 'On chain DAO ',
        description: 'On chain DAO using TypeScript, Solidity, Hardhat for the dev side and Tally for the visual part',
        githubLink: 'https://github.com/HashRei/on-chain-dao',
        projectLink: 'https://www.tally.xyz/governance/eip155:4:0xBBFc55Fb69e7D940B3fA3B637c8E0C22704b681f',
        videoLink: '', //deployed video link
        tech: ['Solidity', 'Hardhat', 'TypeScript'],
        photo: [PROJECT3_1, PROJECT3_2],
    },
]
