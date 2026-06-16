import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Industries from './pages/Industries'
import CaseStudiesPage from './pages/CaseStudiesPage'
import BlogPost from './pages/BlogPost'
import LocationPage from './pages/LocationPage'
import FloatingButtons from './components/ui/FloatingButtons'
import ExitPopup from './components/ui/ExitPopup'

const queryClient = new QueryClient()

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/locations/:city" element={<LocationPage />} />
            </Routes>
          </Layout>
          <FloatingButtons />
          <ExitPopup />
          <Toaster position="top-right" toastOptions={{ style: { background: '#0a1a35', color: '#fff', border: '1px solid rgba(0,102,255,0.3)' } }} />
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  )
}
