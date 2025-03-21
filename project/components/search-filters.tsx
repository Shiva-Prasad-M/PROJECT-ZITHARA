"use client"

import { useJobStore } from "@/lib/store"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const jobCategories = [
  "All Categories",
  "Software Development",
  "Design",
  "Marketing",
  "Sales",
  "Customer Service",
]

const jobTypes = [
  "All Types",
  "Full-time",
  "Part-time",
  "Contract",
  "Remote",
]

export function SearchFilters() {
  const { filters, setFilters, resetFilters } = useJobStore()

  return (
    <div className="bg-card rounded-lg p-6 mb-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Input
            placeholder="Search jobs..."
            value={filters.search}
            onChange={(e) => setFilters({ search: e.target.value })}
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>

        <Select
          value={filters.category}
          onValueChange={(value) => setFilters({ category: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {jobCategories.map((category) => (
              <SelectItem key={category} value={category.toLowerCase()}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          placeholder="Location"
          value={filters.location}
          onChange={(e) => setFilters({ location: e.target.value })}
        />

        <Select
          value={filters.type}
          onValueChange={(value) => setFilters({ type: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            {jobTypes.map((type) => (
              <SelectItem key={type} value={type.toLowerCase()}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end mt-4">
        <Button
          variant="outline"
          onClick={resetFilters}
          className="mr-2"
        >
          Reset
        </Button>
        <Button>
          Search Jobs
        </Button>
      </div>
    </div>
  )
}