"use client";

import { useState } from "react";
import Image from "next/image";
import { getAllTestimonials, Testimonial } from "@/lib/testimonials";
// import { StarIcon } from "@heroicons/react/20/solid";
import {Star} from "lucide-react"
export default function TestimonialsGrid() {
  const testimonials = getAllTestimonials();
  const [filter, setFilter] = useState<Testimonial["serviceType"] | "all">("all");

  const filteredTestimonials = filter === "all" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.serviceType === filter);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            What Our Students Say
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/90 hover:text-primary-foreground"
              }`}
            >
              All Testimonials
            </button>
            <button
              onClick={() => setFilter("essay")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "essay"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/90 hover:text-primary-foreground"
              }`}
            >
              Essay Writing
            </button>
            <button
              onClick={() => setFilter("research")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "research"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/90 hover:text-primary-foreground"
              }`}
            >
              Research Papers
            </button>
            <button
              onClick={() => setFilter("homework")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "homework"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/90 hover:text-primary-foreground"
              }`}
            >
              Homework Help
            </button>
            <button
              onClick={() => setFilter("project")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "project"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/90 hover:text-primary-foreground"
              }`}
            >
              Projects
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                    {testimonial.institution && `, ${testimonial.institution}`}
                  </p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground">
                  {testimonial.serviceType === "essay"
                    ? "Essay Writing"
                    : testimonial.serviceType === "research"
                    ? "Research Paper"
                    : testimonial.serviceType === "homework"
                    ? "Homework Help"
                    : testimonial.serviceType === "project"
                    ? "Project"
                    : "Other Service"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No testimonials found for this category. Please try another filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
