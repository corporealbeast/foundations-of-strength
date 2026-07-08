import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import AudienceSection from '@/components/AudienceSection'
import StrengthSystem from '@/components/StrengthSystem'
import CoachingIncludes from '@/components/CoachingIncludes'
import PerformanceDashboard from '@/components/PerformanceDashboard'
import AuthoritySection from '@/components/AuthoritySection'
import ApplicationCTA from '@/components/ApplicationCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemSection />
      <AudienceSection />
      <StrengthSystem />
      <CoachingIncludes />
      <PerformanceDashboard />
      <AuthoritySection />
      <ApplicationCTA />
      <Footer />
    </main>
  )
}
