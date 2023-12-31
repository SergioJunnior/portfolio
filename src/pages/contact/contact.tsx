import { Container } from '@/styles/globals';
import * as S from './contact.styles';
import Title from '@/components/sectionTitle/sectionTitle';
import Typography from '@/components/typography/typography';

const ContactSection = () => {
  return (
    <S.ContactSection id='contact'>
      <Container>
        <Title>
          <Typography
            className='title-medium'
            htmlElement='p'
            translateId='app.header.contact'
            messageDefault='app.header.contact'
          />
        </Title>
        <S.ContactMeText>
          If you want to carry out a project or chat with me, do not hesitate to
          send me an email:{' '}
          {/* <a href={`mailto:${LinksEnum.Email}`}>{LinksEnum.Email}</a> */}
        </S.ContactMeText>

        {/* <a href={LinksEnum.Linktree} target='_blank' rel='noopener noreferrer'>
          <Button>Contact</Button>
        </a> */}
      </Container>
    </S.ContactSection>
  );
};

export default ContactSection;
