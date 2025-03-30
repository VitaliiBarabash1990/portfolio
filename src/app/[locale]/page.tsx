import About from '@/components/About/About';
import FaqSection from '@/components/FaqSection/FaqSection';
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
      <About />
      <Programs />
      <Projects />
      <Steps />
      <Services />
      <FaqSection />
    </>
  );
}
