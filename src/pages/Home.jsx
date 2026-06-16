import { Helmet } from 'react-helmet-async'
import ErrorBoundary from '../components/ui/ErrorBoundary'
import Hero from '../components/home/Hero'
import TrustedBy from '../components/home/TrustedBy'
import About from '../components/home/About'
import Statistics from '../components/home/Statistics'
import Services from '../components/home/Services'
import ScrapJourney from '../components/home/ScrapJourney'
import ScrapCategories from '../components/home/ScrapCategories'
import WhyChooseUs from '../components/home/WhyChooseUs'
import GlobalNetwork from '../components/home/GlobalNetwork'
import Industries from '../components/home/Industries'
import ProcessTimeline from '../components/home/ProcessTimeline'
import CaseStudies from '../components/home/CaseStudies'
import Testimonials from '../components/home/Testimonials'
import FAQs from '../components/home/FAQs'
import BlogPreview from '../components/home/BlogPreview'
import LeadForm from '../components/home/LeadForm'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>NK Traders | India's Trusted Global Scrap & Metal Trading Partner</title>
        <meta name="description" content="NK Traders – India's #1 industrial scrap buying company. We buy copper scrap, aluminium scrap, brass scrap, steel scrap, factory scrap & warehouse scrap. Pan India pickup. Fast payments. GST registered." />
        <link rel="canonical" href="https://nktraders.in/" />
      </Helmet>
      <ErrorBoundary name="Hero"><Hero /></ErrorBoundary>
      <ErrorBoundary name="TrustedBy"><TrustedBy /></ErrorBoundary>
      <ErrorBoundary name="About"><About /></ErrorBoundary>
      <ErrorBoundary name="Statistics"><Statistics /></ErrorBoundary>
      <ErrorBoundary name="Services"><Services /></ErrorBoundary>
      <ErrorBoundary name="ScrapJourney"><ScrapJourney /></ErrorBoundary>
      <ErrorBoundary name="ScrapCategories"><ScrapCategories /></ErrorBoundary>
      <ErrorBoundary name="WhyChooseUs"><WhyChooseUs /></ErrorBoundary>
      <ErrorBoundary name="GlobalNetwork"><GlobalNetwork /></ErrorBoundary>
      <ErrorBoundary name="Industries"><Industries /></ErrorBoundary>
      <ErrorBoundary name="ProcessTimeline"><ProcessTimeline /></ErrorBoundary>
      <ErrorBoundary name="CaseStudies"><CaseStudies /></ErrorBoundary>
      <ErrorBoundary name="Testimonials"><Testimonials /></ErrorBoundary>
      <ErrorBoundary name="FAQs"><FAQs /></ErrorBoundary>
      <ErrorBoundary name="BlogPreview"><BlogPreview /></ErrorBoundary>
      <ErrorBoundary name="LeadForm"><LeadForm /></ErrorBoundary>
    </>
  )
}
