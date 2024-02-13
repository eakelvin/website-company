import React from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    logo: string;
}

interface BlogPostCardProps {
    project: Project;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ project }) => {
// const BlogPostCard: React.FC = () => {

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={project.logo} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
            </div>
        </div>
    );
};

export default BlogPostCard;
