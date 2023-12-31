import * as S from './experience.styles';
import useAnimateOnScroll from '@/hooks/useAnimatedOnScroll';
import Tab from '@/components/tab/tab';
import Typography from '@/components/typography/typography';
import { tabContent } from './utils/tabContent';
import Title from '@/components/sectionTitle/sectionTitle';
import { Container } from '@/styles/globals';

const ExperienceSection = () => {
  const elementRef = useAnimateOnScroll();

  return (
    <S.ExperienceSection id='experience'>
      <Container>
        <Title>
          <Typography
            className='title-medium'
            htmlElement='p'
            translateId='app.header.experience'
            messageDefault='app.header.experience'
          />
        </Title>
        <S.ExperienceContent>
          <div className='content'>
            <Tab data={tabContent} />
          </div>
        </S.ExperienceContent>
      </Container>
    </S.ExperienceSection>
  );
};

export default ExperienceSection;
