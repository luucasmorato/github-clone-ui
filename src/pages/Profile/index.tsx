import React from 'react';

import ProfileData from '../../components/ProfileData';
import { Container, Main, LeftSide, RightSide } from './styles';

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

        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;