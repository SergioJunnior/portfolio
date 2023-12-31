import * as S from './about.styles';
import { Container } from '@/styles/globals';
import useAnimateOnScroll from '@/hooks/useAnimatedOnScroll';
import Title from '@/components/sectionTitle/sectionTitle';
import Typography from '@/components/typography/typography';

const AboutSection = () => {
  const elementRef = useAnimateOnScroll();

  //TODO concertar texto

  return (
    <S.AboutSection id='about' ref={elementRef}>
      <Container>
        <Title>
          <Typography
            className='title-medium'
            htmlElement='p'
            translateId='app.header.about'
            messageDefault='app.header.about'
          />
        </Title>
        <S.AboutTexts>
          My name is Caio Augusto, I’m from Brazil and I’m 19 years old. I
          describe myself as a passionate developer who loves coding, open
          source, and the web platform. Aside from my job, I like to create and
          contribute to open source projects. That helps me to learn a ton of
          new stuff, grow as a developer and support other open source projects.
          My passion for technology was born when I was 5 years old, when I
          first used a computer. I started as a Front-end Developer on 3/8/2020.
          and more.
        </S.AboutTexts>
      </Container>
    </S.AboutSection>
  );
};

export default AboutSection;
