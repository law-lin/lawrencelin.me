import React from 'react';

import './styles.css';

const ProjectCard = ({
  className,
  href,
  thumbnail,
  title,
  description,
  tags,
  ...other
}) => {
  return (
    <a className='card-link' href={href} target='_blank'>
      <div className='card project-card float'>
        <div className='card-overlay'>
          <div
            className='overlay'
            style={{
              backgroundImage: `url(${thumbnail})`,
            }}
          />
        </div>
        <div className='card-content'>
          <div className='thumbnail'>
            <img src={thumbnail} alt={title} />
          </div>

          <div className='text'>
            <div className='title'>{title}</div>
            <div className='description'>{description}</div>
            <div className='tags'>
              {tags &&
                tags.map((tag, i) => {
                  return (
                    <span className='tag'>
                      {typeof tag === 'function' ? tag() : tag}
                    </span>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
