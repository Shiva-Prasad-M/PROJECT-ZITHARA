"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, Clock, Building } from "lucide-react"
import Link from "next/link"

// Mock data - Replace with API call
const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    description: "We're looking for an experienced frontend developer to join our team...",
    postedAt: "2 days ago",
  },
  {
    id: 2,
    title: "UX Designer",
    company: "Design Studio",
    location: "Remote",
    type: "Contract",
    salary: "$80k - $100k",
    description: "Join our creative team as a UX Designer working on exciting projects...",
    postedAt: "1 week ago",
  },
  // Add more mock jobs...
]

export function JobListings() {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card key={job.id} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  {job.company}
                </CardDescription>
              </div>
              <Badge variant="secondary">{job.type}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {job.location}
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="h-4 w-4" />
                {job.salary}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {job.postedAt}
              </div>
            </div>
            <p className="text-sm mb-4">{job.description}</p>
            <div className="flex justify-end">
              <Link href={`/jobs/${job.id}`}>
                <Button>View Details</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}