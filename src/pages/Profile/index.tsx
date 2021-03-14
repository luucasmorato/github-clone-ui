import React from 'react';

import ProfileData from '../../components/ProfileData';
import RandomCalendar from '../../components/RandomCalendar';
import RepoCard from '../../components/RepoCard';
import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading,  } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'luucasmorato'}
            name={'Lucas Morato'} 
            avatarUrl={'https://avatars2.githubusercontent.com/u/45272225?v=4'}
            followers={2322}
            following={1231}
            company={'Morato Company'}
            location={'MG, BR'}
            email={'luucasmorato@gmail.com'}
            blog={'https://www.linkedin.com/in/luucasmorato/'} 
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2> Random repos</h2>

            <div>
            {[1, 2, 3, 4, 5, 6].map(n => (
              <RepoCard 
                key={n}
                username={'luucasmorato'}
                reponame={'github-clone-ui'}
                description={'Github clone ui'}
                language={n % 3 === 0 ? 'Javascript' : 'Typescript'}
                stars={8}
                forks={4}
              />
            ))}
            </div>
          </Repos>

          <CalendarHeading />

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;