import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  CheckCircle2,
  Film,
  Image as ImageIcon,
  ExternalLink,
  Layers,
  Sparkles
} from "lucide-react";
import { useLenis } from "lenis/react";
import type { ProjectItem } from "@/data/projectsData";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal = ({ project, onClose }: ProjectDetailModalProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number | "video">("video");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const lenis = useLenis();

  // Reset states when project changes
  useEffect(() => {
    setActiveMediaIndex(project?.videoUrl ? "video" : 0);
    setIsPlaying(true);
    setVideoProgress(0);
  }, [project]);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  }, []);

  const handleRestartVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, []);

  // Keyboard navigation & Lenis scroll lock
  useEffect(() => {
    if (!project) return;

    if (lenis) {
      lenis.stop();
    }
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "m" || e.key === "M") {
        toggleMute();
      } else if (e.key === " ") {
        if (
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement
        )
          return;
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (lenis) {
        lenis.start();
      }
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, lenis, toggleMute, togglePlay]);

  if (!project) return null;

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setVideoProgress((current / duration) * 100);
    }
  };

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent
        className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-8"
      >
        {/* Backdrop overlay with blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-xl cursor-pointer"
        />

        {/* Modal Dialog Content Container */}
        <motion.div
          data-lenis-prevent
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-background/95 dark:bg-card/95 border border-border/80 rounded-[2rem] shadow-2xl overflow-hidden z-10 glass-panel"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-muted/30 shrink-0">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-foreground tracking-tight line-clamp-1">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 hover:rotate-90 cursor-pointer"
              aria-label="Close modal"
              title="إغلاق (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div
            data-lenis-prevent
            className="overflow-y-auto flex-1 p-5 md:p-8 space-y-8 custom-scrollbar"
          >
            {/* 1. Main Media Stage (Large 16:9 Showcase) */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-border/70 bg-black aspect-video shadow-2xl flex items-center justify-center">
              {activeMediaIndex === "video" && project.videoUrl ? (
                <>
                  <video
                    ref={videoRef}
                    src={project.videoUrl}
                    poster={project.coverImage}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    className="w-full h-full object-cover"
                  />

                  {/* Top Floating Info Tag */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-lg pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <Film className="w-3.5 h-3.5 text-primary" />
                    <span>فيديو النظام ({project.videoDuration || "25s Loop"})</span>
                  </div>

                  {/* Video Controls Bar */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-4 flex flex-col gap-2 z-20">
                    {/* Progress Bar Line */}
                    <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-primary h-full rounded-full"
                        style={{ width: `${videoProgress}%` }}
                        transition={{ ease: "linear" }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-white text-xs pt-1">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={togglePlay}
                          className="p-2 rounded-xl bg-white/15 hover:bg-white/30 text-white transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
                          title={isPlaying ? "إيقاف مؤقت (Space)" : "تشغيل (Space)"}
                        >
                          {isPlaying ? (
                            <Pause className="w-4 h-4 fill-white" />
                          ) : (
                            <Play className="w-4 h-4 fill-white ml-0.5" />
                          )}
                        </button>
                        <button
                          onClick={handleRestartVideo}
                          className="p-2 rounded-xl bg-white/15 hover:bg-white/30 text-white transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
                          title="إعادة التشغيل من البداية"
                        >
                          <RotateCcw className="w-4 h-4" />
                        </button>
                        <button
                          onClick={toggleMute}
                          className="p-2 rounded-xl bg-white/15 hover:bg-white/30 text-white transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
                          title={isMuted ? "تشغيل الصوت (M)" : "كتم الصوت (M)"}
                        >
                          {isMuted ? (
                            <VolumeX className="w-4 h-4" />
                          ) : (
                            <Volume2 className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      <div className="text-[11px] text-white/80 font-mono tracking-wide bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                        Looping Walkthrough
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Screenshot Display Mode */
                <div className="relative w-full h-full bg-neutral-950 flex items-center justify-center">
                  <img
                    src={
                      typeof activeMediaIndex === "number"
                        ? project.galleryImages[activeMediaIndex]
                        : project.coverImage
                    }
                    alt="System Screenshot"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-medium pointer-events-none shadow-lg">
                    <ImageIcon className="w-3.5 h-3.5 text-sky-400" />
                    <span>معاينة صورة الشاشة #{typeof activeMediaIndex === "number" ? activeMediaIndex + 1 : 1}</span>
                  </div>
                  {/* Quick button to return to video */}
                  {project.videoUrl && (
                    <button
                      onClick={() => setActiveMediaIndex("video")}
                      className="absolute bottom-4 right-4 z-20 px-3.5 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1.5 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <Film className="w-4 h-4" />
                      <span>العودة لمشاهدة الفيديو (Video)</span>
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* 2. Interactive Thumbnails Gallery (مربعات الصور المصغرة تحت الفيديو) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground font-medium px-1">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-primary" />
                  لقطات الشاشة ومعرض الوسائط (انقر للعرض):
                </span>
                <span>{project.galleryImages.length + (project.videoUrl ? 1 : 0)} وسائط</span>
              </div>

              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                {/* Video thumbnail button */}
                {project.videoUrl && (
                  <button
                    onClick={() => setActiveMediaIndex("video")}
                    className={`relative w-24 h-20 sm:w-28 sm:h-20 shrink-0 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeMediaIndex === "video"
                        ? "border-primary ring-4 ring-primary/25 scale-105 shadow-lg"
                        : "border-border/80 opacity-70 hover:opacity-100 hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={project.coverImage}
                      alt="Video Thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-1">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                        <Play className="w-3 h-3 fill-current ml-0.5" />
                      </div>
                      <span className="text-[10px] text-white font-bold">فيديو</span>
                    </div>
                  </button>
                )}

                {/* Screenshots thumbnails */}
                {project.galleryImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`relative w-24 h-20 sm:w-28 sm:h-20 shrink-0 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeMediaIndex === idx
                        ? "border-primary ring-4 ring-primary/25 scale-105 shadow-lg"
                        : "border-border/80 opacity-70 hover:opacity-100 hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Screenshot ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 rounded-md text-[9px] text-white font-mono">
                      #{idx + 1}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. System Highlights, Points & Description (الشرح والتفاصيل والميزات بنقاط) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* Left / Main Column: Bullet Points & Features */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h4 className="text-lg md:text-xl font-bold text-foreground">
                      نبذة ومميزات النظام الرئيسية
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features Bullet Points */}
                <div className="space-y-3 bg-muted/40 p-5 md:p-6 rounded-2xl border border-border/70">
                  <h5 className="text-sm font-bold text-foreground mb-3">
                    المواصفات والوظائف المنفذة (Key Highlights):
                  </h5>
                  <ul className="space-y-3.5">
                    {project.bulletPoints.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed"
                      >
                        <div className="mt-0.5 p-1 rounded-lg bg-primary/10 text-primary shrink-0 border border-primary/25">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Meta details, Tech Stack, & Links */}
              <div className="space-y-5">
                <div className="p-5 rounded-2xl border border-border/70 bg-muted/30 space-y-4">
                  <div>
                    <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                      تصنيف النظام
                    </span>
                    <span className="text-sm font-bold text-foreground">
                      {project.category}
                    </span>
                  </div>

                  <div className="border-t border-border/60 pt-3">
                    <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                      التقنيات المستخدمة (Tech Stack)
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.liveUrl && project.liveUrl !== "#" && (
                    <div className="border-t border-border/60 pt-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl bg-primary text-primary-foreground font-semibold text-xs flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>معاينة الرابط المباشر</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
