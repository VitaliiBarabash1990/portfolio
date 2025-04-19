import About from '@/components/About/About';
import FaqSection from '@/components/FaqSection/FaqSection';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Heeder/Header';
import Programs from '@/components/Programs/Programs';
import Projects from '@/components/Projects/Projects';
import Services from '@/components/Services/Services';
import Steps from '@/components/Steps/Steps';
import {setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function IndexPage({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      {/* <Header />
      <About />
      <Programs />
      <Projects /> */}
      <Steps />
      {/* <Services />
      <FaqSection />
      <Footer /> */}
    </>
  );
}
