import JobDetails from './JobDetails'

// Mock data - Replace with API call
export const jobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    description: "We're looking for an experienced frontend developer to join our team...",
    requirements: [
      "5+ years of experience with React",
      "Strong TypeScript skills",
      "Experience with Next.js",
      "Understanding of modern CSS",
    ],
    responsibilities: [
      "Build and maintain frontend applications",
      "Collaborate with design team",
      "Mentor junior developers",
      "Contribute to technical decisions",
    ],
    postedAt: "2 days ago",
  },
  {
    id: "2",
    title: "UX Designer",
    company: "Design Studio",
    location: "Remote",
    type: "Contract",
    salary: "$80k - $100k",
    description: "Join our creative team as a UX Designer working on exciting projects...",
    requirements: [
      "3+ years of UX design experience",
      "Proficiency in Figma",
      "Strong portfolio",
      "Experience with user research",
    ],
    responsibilities: [
      "Create user-centered designs",
      "Conduct user research",
      "Create wireframes and prototypes",
      "Collaborate with developers",
    ],
    postedAt: "1 week ago",
  },
]

export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }))
}

export default function Page({ params }: { params: { id: string } }) {
  const job = jobs.find(j => j.id === params.id)
  return <JobDetails job={job} />
}