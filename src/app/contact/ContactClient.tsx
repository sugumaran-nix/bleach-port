"use client";
// Form: react-hook-form (react-hook-form.com)
// Toast: react-hot-toast (react-hot-toast.com)
// Pattern: shadcn/ui form, heroui.com input
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, GitFork, Globe, Link2, MessageSquare, User, AtSign, FileText } from "lucide-react";
import ZanpakutoSlash from "@/components/effects/ZanpakutoSlash";
import ReiatsuOrbs from "@/components/effects/ReiatsuOrbs";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const CONTACT_INFO = [
  { icon: <Mail size={18} />, label: "Email", value: "yourname@email.com", href: "mailto:yourname@email.com" },
  { icon: <MapPin size={18} />, label: "Location", value: "Your City, Country", href: null },
  { icon: <GitFork size={18} />, label: "GitHub", value: "github.com/yourname", href: "https://github.com/yourname" },
  { icon: <Globe size={18} />, label: "LinkedIn", value: "linkedin.com/in/yourname", href: "https://linkedin.com/in/yourname" },
  { icon: <Link2 size={18} />, label: "Twitter", value: "@yourhandle", href: "https://twitter.com/yourhandle" },
];

export default function ContactClient() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form data:", data);
    toast.success("Message sent! I'll get back to you soon. ⚡", { duration: 4500 });
    reset();
  };

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
        <ReiatsuOrbs />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-tag mb-3">Let&apos;s Talk</p>
            <h1 className="font-display text-5xl md:text-7xl mb-4" style={{ color: "var(--text)" }}>
              GET IN <span style={{ color: "var(--accent)" }}>TOUCH</span>
            </h1>
            <ZanpakutoSlash />
            <p className="text-base max-w-xl" style={{ color: "var(--text-muted)" }}>
              Whether you have an opportunity, a project idea, or just want to say hi — my inbox is always open.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-4"
            >
              <h2 className="font-heading text-xl font-bold mb-5" style={{ color: "var(--text)" }}>
                Contact Information
              </h2>
              {CONTACT_INFO.map((info) => (
                <div key={info.label} className="flex items-start gap-3 p-4 card">
                  <div
                    className="w-9 h-9 rounded flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--accent-glow)", color: "var(--accent)" }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest mb-0.5" style={{ color: "var(--text-faint)" }}>
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-heading font-semibold transition-colors hover:text-accent"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-heading font-semibold" style={{ color: "var(--text-muted)" }}>
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Availability badge */}
              <div
                className="p-5 rounded-lg mt-6"
                style={{ backgroundColor: "var(--surface)", border: "1px solid var(--card-border)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full animate-pulse bg-green-500" />
                  <span className="font-heading font-bold text-sm" style={{ color: "var(--text)" }}>
                    Available for Work
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Open to full-time roles, internships, and freelance projects. Typical response time: within 24 hours.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="card p-7 md:p-8">
                <h2 className="font-heading text-xl font-bold mb-6" style={{ color: "var(--text)" }}>
                  Send Me a Message
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-heading font-semibold mb-1.5" style={{ color: "var(--text-muted)" }}>
                      <User size={13} className="inline mr-1" />Full Name *
                    </label>
                    <input
                      className={`input-field ${errors.name ? "error" : ""}`}
                      placeholder="Your full name"
                      {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name too short" } })}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-heading font-semibold mb-1.5" style={{ color: "var(--text-muted)" }}>
                      <AtSign size={13} className="inline mr-1" />Email Address *
                    </label>
                    <input
                      type="email"
                      className={`input-field ${errors.email ? "error" : ""}`}
                      placeholder="yourname@email.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                      })}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-heading font-semibold mb-1.5" style={{ color: "var(--text-muted)" }}>
                      <FileText size={13} className="inline mr-1" />Subject *
                    </label>
                    <input
                      className={`input-field ${errors.subject ? "error" : ""}`}
                      placeholder="What's this about?"
                      {...register("subject", { required: "Subject is required" })}
                    />
                    {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-heading font-semibold mb-1.5" style={{ color: "var(--text-muted)" }}>
                      <MessageSquare size={13} className="inline mr-1" />Message *
                    </label>
                    <textarea
                      rows={5}
                      className={`input-field resize-none ${errors.message ? "error" : ""}`}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      {...register("message", {
                        required: "Message is required",
                        minLength: { value: 20, message: "Message too short (min 20 characters)" },
                      })}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-accent w-full justify-center py-3"
                    style={{ opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
                        />
                        Sending...
                      </>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
