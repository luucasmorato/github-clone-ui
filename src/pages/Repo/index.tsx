import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
 
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={`username`}>
          username
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={`reponame`}>
          reponame
        </Link>
      </Breadcrumb>

      <p>description</p>

      <Stats>
        <li>
          <StarIcon />
          <b>2</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>fork</b>
          <span>2</span>
        </li>
      </Stats>

      <LinkButton >
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;