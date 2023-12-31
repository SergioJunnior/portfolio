import { HomePageProps } from '@/layouts/homePage/homePage.types';
import HomePage from '@/layouts/homePage/HomePage';

const Index = ({ homepages }: HomePageProps) => {
  return <HomePage homepages={homepages} />;
};

export default Index;
