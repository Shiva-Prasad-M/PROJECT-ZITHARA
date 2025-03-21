import { JobListings } from "@/components/job-listings"
import { SearchFilters } from "@/components/search-filters"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">JobBoard</h1>
          <div className="flex items-center gap-4">
            <ModeToggle />
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          Find Your Next Career Opportunity
        </h2>
        <SearchFilters />
        <JobListings />
      </div>
    </main>
  )
}