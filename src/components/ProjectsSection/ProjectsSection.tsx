import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Sparkles, Layers, ArrowUpRight } from "lucide-react";
import { projectsData, type ProjectItem } from "@/data/projectsData";
import { ProjectDetailModal } from "./ProjectDetailModal";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Bento layout grid sizing for balanced visual rhythm
  const getGridClass = (index: number, total: number) => {
    if (total === 2) {
      return "md:col-span-6 h-[460px]";
    }
    if (total === 5) {
      if (index === 0) return "md:col-span-7 h-[430px]";
      if (index === 1) return "md:col-span-5 h-[430px]";
      return "md:col-span-4 h-[390px]";
    }
    switch (index % 4) {
      case 0:
        return "md:col-span-7 h-[420px]";
      case 1:
        return "md:col-span-5 h-[420px]";
      case 2:
        return "md:col-span-5 h-[380px]";
      case 3:
        return "md:col-span-7 h-[380px]";
      default:
        return "md:col-span-6 h-[400px]";
    }
  };

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>معرض الأنظمة والمشاريع التفاعلية</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-base md:text-lg">
            استعراض عملي للأنظمة المطوّرة والحلول التقنية مع مقاطع فيديو توضيحية ومواصفات تفصيلية لكل نظام.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground bg-muted/40 px-3.5 py-1.5 rounded-full border border-border/50">
          <Layers className="w-4 h-4 text-primary" />
          <span>انقر بالماوس أو اضغط Enter لمشاهدة الفيديو والتفاصيل</span>
        </div>
      </motion.div>

      {/* 12-Column Full-Width Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {projectsData.map((project, i) => (
          <motion.div
            key={project.id}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedProject(project);
              }
            }}
            className={`group relative overflow-hidden rounded-[2.25rem] block shadow-xl border border-foreground/10 hover:border-primary/60 dark:border-white/10 dark:hover:border-primary/60 cursor-pointer bg-neutral-950 transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary ${getGridClass(
              i,
              projectsData.length
            )}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ y: -4 }}
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 bg-neutral-950">
              <img
                src={project.coverImage}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-90 transform-gpu"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none" />
            </div>

            {/* Top Badges */}
            <div className="absolute top-6 inset-x-6 flex items-center justify-between z-10 pointer-events-none">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-md border border-white/20 text-white shadow-md">
                {project.category}
              </span>

              {project.videoUrl && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                  <Play className="w-3 h-3 fill-current" />
                  <span>فيديو {project.videoDuration || "20s"}</span>
                </div>
              )}
            </div>

            {/* Bottom Content Overlay */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end pointer-events-none">
              <div className="flex items-end justify-between gap-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300 transform-gpu">
                <div className="z-10 max-w-lg space-y-2">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-md group-hover:text-primary-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-white/85 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Tags Pill Row */}
                  <div className="flex flex-wrap gap-1.5 pt-1 opacity-90 group-hover:opacity-100 transition-opacity">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white/15 text-white backdrop-blur-sm border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] text-white/70 bg-white/10">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Interactive Play / Detail Action Button */}
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 opacity-85 group-hover:opacity-100 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 z-10 shadow-xl group-hover:scale-110">
                  {project.videoUrl ? (
                    <Play className="w-5 h-5 fill-current ml-0.5 text-white group-hover:text-primary-foreground" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-primary-foreground" />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Modal View */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
