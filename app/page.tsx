"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Check,
  Cog,
  Plug,
  FileText,
  TrendingUp,
  Rocket,
  Users,
  BotIcon as Robot,
  Brain,
  Database,
  Smartphone,
  Monitor,
  MessageSquare,
  Calculator,
  Search,
  PuzzleIcon as PuzzlePiece,
  BarChart3,
  Truck,
  MapPin,
  Wrench,
  Building,
  BookOpen,
  Linkedin,
  Twitter,
  Github,
  Star,
  Zap,
  Shield,
  Globe,
} from "lucide-react"
import Image from "next/image"
import Hero from "@/components/home/Hero"
import Header from "@/components/home/Header"
import Challenges from "@/components/home/Callanges"
import Footer from "@/components/home/Footer"

export default function StarllySolutions() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    domain: "",
    services: [] as string[],
    requirements: "",
  })

  

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked ? [...prev.services, service] : prev.services.filter((s) => s !== service),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header/>

      {/* Hero Section */}
      <Hero/>

      {/* Challenge Section */}
      <Challenges/>

      {/* Opportunity Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Work on Opportunities, Build the Business You Want
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Get comprehensive support in automation, workflow setup,
              third-party integrations, content handling, and data-focused
              modules for better go-to-market planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Cog,
                title: "Automation & Workflow",
                desc: "Streamline internal processes with intelligent automation",
              },
              {
                icon: Plug,
                title: "3rd Party Integration",
                desc: "Seamlessly connect existing tools and systems",
              },
              {
                icon: FileText,
                title: "Content Handling",
                desc: "Professional content creation and management services",
              },
              {
                icon: TrendingUp,
                title: "Data Analytics",
                desc: "Implement data-focused modules for strategic planning",
              },
              {
                icon: Rocket,
                title: "POC/MVP Support",
                desc: "Rapid prototyping and minimum viable product development",
              },
              {
                icon: Users,
                title: "Expert Consultation",
                desc: "Access specialized knowledge and industry expertise",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Allow us to partner with you, enable you, help you in your growth.
            </h3>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Start Partnership
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI solutions tailored for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Robot,
                title: "AI Strategy & Consulting",
                desc: "Develop comprehensive AI strategies aligned with business objectives",
                features: [
                  "AI readiness assessment",
                  "Custom roadmap development",
                  "Technology recommendations",
                ],
              },
              {
                icon: Brain,
                title: "Machine Learning Solutions",
                desc: "Custom ML models and algorithms for specific use cases",
                features: [
                  "Predictive analytics",
                  "Computer vision",
                  "Natural language processing",
                ],
              },
              {
                icon: Database,
                title: "Data Engineering",
                desc: "Build robust data pipelines and infrastructure",
                features: [
                  "Data pipeline development",
                  "Data warehouse setup",
                  "Real-time processing",
                ],
              },
              {
                icon: Smartphone,
                title: "AI Application Development",
                desc: "End-to-end AI application development and deployment",
                features: [
                  "Custom AI applications",
                  "API development",
                  "Cloud deployment",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that best fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$2,500",
                period: "/month",
                features: [
                  "AI Strategy Consultation",
                  "Basic ML Model Development",
                  "Data Analysis & Insights",
                  "Email Support",
                  "Monthly Progress Reports",
                ],
                popular: false,
              },
              {
                name: "Professional",
                price: "$5,000",
                period: "/month",
                features: [
                  "Everything in Starter",
                  "Custom AI Application Development",
                  "Advanced ML Models",
                  "Data Pipeline Setup",
                  "Priority Support",
                  "Bi-weekly Strategy Calls",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                features: [
                  "Everything in Professional",
                  "Dedicated AI Team",
                  "Custom Integration",
                  "24/7 Support",
                  "On-site Consultation",
                  "SLA Guarantees",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular
                    ? "ring-2 ring-blue-500 shadow-2xl scale-105"
                    : "shadow-lg"
                } transition-all duration-300 hover:shadow-xl border-0`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        : "border-2 border-gray-200 hover:bg-gray-50"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-16 min-h-[80vh] flex items-center justify-center lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Add-on Services
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your AI capabilities with specialized services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI Training & Workshops",
                price: "$1,500 per session",
                desc: "Team training on AI tools and best practices",
              },
              {
                title: "Data Audit & Cleanup",
                price: "$3,000 one-time",
                desc: "Comprehensive data quality assessment",
              },
              {
                title: "AI Model Optimization",
                price: "$2,000 per model",
                desc: "Performance tuning of existing models",
              },
              {
                title: "Compliance & Security",
                price: "$2,500 one-time",
                desc: "AI ethics and security assessment",
              },
            ].map((addon, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {addon.title}
                  </h3>
                  <p className="text-xl font-bold text-blue-600 mb-2">
                    {addon.price}
                  </p>
                  <p className="text-sm text-gray-600">{addon.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section
        id="use-cases"
        className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready-to-Use Modules
            </h2>
            <p className="text-xl text-gray-600">
              Plug and play solutions for immediate implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Monitor,
                title: "Plug n Play Monitoring",
                desc: "Complete monitoring solution",
              },
              {
                icon: MessageSquare,
                title: "Omni Channel Service",
                desc: "Automated task handling",
              },
              {
                icon: Calculator,
                title: "Formula Bots",
                desc: "Advanced data calculations",
              },
              {
                icon: Search,
                title: "Contextual Search",
                desc: "Intelligent search capabilities",
              },
              {
                icon: PuzzlePiece,
                title: "No Code Automation",
                desc: "Build workflows without coding",
              },
              {
                icon: BarChart3,
                title: "Predictive Analytics",
                desc: "Forecast trends and insights",
              },
              {
                icon: Truck,
                title: "Fleet Management",
                desc: "Complete fleet tracking system",
              },
              {
                icon: MapPin,
                title: "Geo Fencing",
                desc: "Location-based tracking",
              },
              {
                icon: Wrench,
                title: "Spare Parts Auto Check",
                desc: "Automated inventory management",
              },
              {
                icon: Building,
                title: "Facility Management",
                desc: "Comprehensive facility control",
              },
              {
                icon: BookOpen,
                title: "Knowledge Base Builder",
                desc: "Team knowledge repositories",
              },
              {
                icon: Shield,
                title: "Security Monitoring",
                desc: "Advanced security analytics",
              },
            ].map((module, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {module.title}
                  </h3>
                  <p className="text-sm text-gray-600">{module.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Starlly Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Why Starlly?
          </h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              We've learned enough to know what not to do. Our focus is on
              achieving results better and in the right way. We've wasted too
              much time on wrong approaches, and when clarity hit us, we
              realized that hardware/software combination businesses need
              exceptional service offerings.
            </p>
            <p>
              We're still learning every day, and our customers teach us
              valuable lessons. We're here to document this journey so it can
              help many others. Follow our insights and learnings as we grow
              together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to transform your business? Let's discuss your requirements
            </p>
          </div>

          <Card className="shadow-2xl border-0">
            <CardContent className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Email ID *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Contact Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="company"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          company: e.target.value,
                        }))
                      }
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="website"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Website URL
                  </Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        website: e.target.value,
                      }))
                    }
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="domain"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Which Domain *
                  </Label>
                  <Select
                    value={formData.domain}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, domain: value }))
                    }
                  >
                    <SelectTrigger className="border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select your domain" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manufacturing">
                        Manufacturing
                      </SelectItem>
                      <SelectItem value="production">Production</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="qsr">QSR</SelectItem>
                      <SelectItem value="cloud-kitchen">
                        Cloud Kitchen
                      </SelectItem>
                      <SelectItem value="dark-stores">Dark Stores</SelectItem>
                      <SelectItem value="cold-storage">Cold Storage</SelectItem>
                      <SelectItem value="fleet-logistics">
                        Fleet Logistics
                      </SelectItem>
                      <SelectItem value="cold-chain">Cold Chain</SelectItem>
                      <SelectItem value="reefers">Reefers</SelectItem>
                      <SelectItem value="appliances">Appliances</SelectItem>
                      <SelectItem value="vending-machines">
                        Vending Machines
                      </SelectItem>
                      <SelectItem value="kiosks">Kiosks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-4 block">
                    What are you looking for? *
                  </Label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "Automation",
                      "Software Support",
                      "Digitisation",
                      "Content Support",
                      "Talent Support",
                      "Team Formation",
                      "Hardware Support",
                      "Subject Matter Expertise",
                      "Bespoke Development",
                    ].map((service) => (
                      <div
                        key={service}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={(checked) =>
                            handleServiceChange(service, checked as boolean)
                          }
                        />
                        <Label
                          htmlFor={service}
                          className="text-sm text-gray-700 cursor-pointer"
                        >
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="requirements"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Explain the Requirement *
                  </Label>
                  <Textarea
                    id="requirements"
                    rows={5}
                    value={formData.requirements}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        requirements: e.target.value,
                      }))
                    }
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
