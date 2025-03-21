"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, Clock, Building } from "lucide-react"
import { jobs } from "./page"

interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary: string
  description: string
  requirements: string[]
  responsibilities: string[]
  postedAt: string
}

interface JobDetailsProps {
  job: Job | undefined
}

export default function JobDetails({ job }: JobDetailsProps) {
  if (!job) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-2xl font-bold text-center">Job not found</h1>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl mb-2">{job.title}</CardTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building className="h-4 w-4" />
                {job.company}
              </div>
            </div>
            <Badge variant="secondary">{job.type}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{job.postedAt}</span>
            </div>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-muted-foreground">{job.description}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </section>

            <div className="flex justify-end mt-8">
              <Button size="lg">
                Apply Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}