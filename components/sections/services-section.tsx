"use client"

import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-3 pt-16 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-1.5 font-sans text-3xl font-light tracking-tight text-foreground md:mb-2 md:text-6xl lg:text-7xl">
            Incubation
          </h2>
          <p className="font-mono text-[10px] text-foreground/60 md:text-base">/ We share our expertise and resources with select startups that meet our criteria for cash + equity or equity only basis.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {[
            {
              title: "Product Strategy",
              description: "Optimizing the product for maximum market fit, exploring the future of the product and the market.",
              direction: "top",
            },
            {
              title: "Market Timing",
              description: "Understnading the market, defining the hook, value and timing the product.",
              direction: "right",
            },
            {
              title: "Capital formation",
              description: "Defining financial needs, preparing a business plan, and strategically choosing funding sources.",
              direction: "left",
            },
            {
              title: "Operational Excellence",
              description: "Building a foundation of efficient, scalable processes to support growth.",
              direction: "bottom",
            },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-2 flex items-center gap-2 md:mb-3 md:gap-3">
        <div className="h-px w-6 bg-foreground/30 transition-all duration-300 group-hover:w-8 group-hover:bg-foreground/50 md:w-8 md:group-hover:w-12" />
        <span className="font-mono text-[10px] text-foreground/60 md:text-xs">0{index + 1}</span>
      </div>
      <h3 className="mb-1.5 font-sans text-xl font-light text-foreground md:mb-2 md:text-3xl">{service.title}</h3>
      <p className="max-w-sm text-xs leading-relaxed text-foreground/80 md:text-base">{service.description}</p>
    </div>
  )
}
