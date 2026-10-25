import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
<<<<<<< HEAD
import { ArrowUpRight, Loader2, Mail, MessageCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Please share a little more about your project"),
=======
import { Loader2 } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
>>>>>>> 1acf79cc7ac883e92194e6f1926ed1a9516193b7
});

type FormData = z.infer<typeof schema>;

<<<<<<< HEAD
const fieldClassName =
  "w-full border border-[#d7d1c4] bg-[#fbf9f3] px-4 py-3.5 text-sm text-[#191815] outline-none transition placeholder:text-[#9a9589] focus:border-[#9c7b45] focus:ring-2 focus:ring-[#c6a56b]/15";

function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
=======
function Contact() {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });
>>>>>>> 1acf79cc7ac883e92194e6f1926ed1a9516193b7

  const sendEmail = async (data: FormData) => {
    setLoading(true);
    try {
      await emailjs.send(
        "service_18vd2u8",
        "template_glgdx2k",
        {
<<<<<<< HEAD
          from_name: data.name,
          from_email: data.email,
          phone: "",
          message: data.message,
        },
        "W-MvVLKfur6R1GGte",
=======
          from_name: `${data.firstName} ${data.lastName}`,
          from_email: data.email,
          phone: data.phone,
          message: data.message
        },
        "W-MvVLKfur6R1GGte"
>>>>>>> 1acf79cc7ac883e92194e6f1926ed1a9516193b7
      );
      toast.success("Message sent successfully");
      reset();
    } catch (error) {
<<<<<<< HEAD
      console.error("Failed to send contact message:", error);
      toast.error("Failed to send message. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#f5f1e8] text-[#191815]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal>
            <p className="section-kicker"><span>04</span> / Get in touch</p>
            <h1 className="editorial-heading mt-5 text-5xl sm:text-6xl">
              Good work
              <br />
              starts with
              <br />
              <span className="text-[#9c7b45]">a conversation.</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#6a675f] sm:text-base">
              Have a project, a question, or an idea worth exploring? Tell me what you have in mind.
            </p>

            <div className="mt-9 space-y-4">
              <a href="mailto:paschalmasanja303@gmail.com" className="group flex w-fit items-center gap-3 text-sm text-[#34322c] transition hover:text-[#8c6b35]">
                <Mail size={16} className="text-[#9c7b45]" aria-hidden="true" />
                paschalmasanja303@gmail.com
                <ArrowUpRight size={13} className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" aria-hidden="true" />
              </a>
              <a href="https://wa.me/255764069290" target="_blank" rel="noopener noreferrer" className="group flex w-fit items-center gap-3 text-sm text-[#34322c] transition hover:text-[#8c6b35]">
                <MessageCircle size={16} className="text-[#9c7b45]" aria-hidden="true" />
                WhatsApp · +255 764 069 290
                <ArrowUpRight size={13} className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" aria-hidden="true" />
              </a>
            </div>
          </div>

          <form data-reveal onSubmit={handleSubmit(sendEmail)} className="border border-[#d9d2c4] bg-[#f9f6ee] p-5 sm:p-8">
            <div className="mb-7 flex items-center justify-between border-b border-[#d9d2c4] pb-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6a675f]">Tell me about your project</p>
              <span className="font-mono text-[9px] text-[#a48655]">TZ / OPEN</span>
            </div>

            <div>
              <label htmlFor="name" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#57544c]">Your name</label>
              <input
                id="name"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                {...register("name")}
                placeholder="Name"
                className={fieldClassName}
              />
              {errors.name && <p id="name-error" className="mt-1.5 text-xs text-red-800" role="alert">{errors.name.message}</p>}
            </div>

            <div className="mt-5">
              <label htmlFor="email" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#57544c]">Email address</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email")}
                placeholder="you@example.com"
                className={fieldClassName}
              />
              {errors.email && <p id="email-error" className="mt-1.5 text-xs text-red-800" role="alert">{errors.email.message}</p>}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#57544c]">A little about the project</label>
              <textarea
                id="message"
                rows={5}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                {...register("message")}
                placeholder="What are you looking to build?"
                className={`${fieldClassName} resize-y`}
              />
              {errors.message && <p id="message-error" className="mt-1.5 text-xs text-red-800" role="alert">{errors.message.message}</p>}
            </div>

            <button type="submit" disabled={loading} className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#101010] px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#f5f1e8] transition hover:bg-[#101010] hover:text-[#c6a56b] disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending...</> : <>Send a message <ArrowUpRight size={15} aria-hidden="true" /></>}
            </button>
            <p className="mt-3 text-center text-[10px] text-[#8c887d]">Prefer email? <a href="mailto:paschalmasanja303@gmail.com" className="underline decoration-[#c6a56b] underline-offset-2 hover:text-[#6e542b]">Write to me directly.</a></p>
            <p className="mt-2 text-center text-[9px] text-[#8c887d]">Only your name, email, and project message are requested.</p>
          </form>
        </div>
=======
      console.log(error);
      toast.error("Failed to send message");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="bg-[#0b0f19] text-white min-h-screen px-6 py-20 flex flex-col justify-center md:pl-24">
      <div className="max-w-xl mx-auto w-full">
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute -top-1.5 -right-1.5 z-20">
              <span className="relative flex h-3.5 w-3.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-blue-500 shadow-[0_0_10px_#2563EB]"></span>
              </span>
            </div>
            <div className="rounded-full border border-blue-500/30 bg-blue-950/20 px-8 py-2.5 shadow-[0_0_20px_rgba(37,99,235,0.1)] backdrop-blur-sm">
              <span className="text-sm md:text-base font-semibold uppercase tracking-widest bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Contact Me
              </span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent sm:text-5xl">
            Let's Work Together
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
            Have a project idea? Let's build something amazing together.
          </p>
        </div>

        <form onSubmit={handleSubmit(sendEmail)} className="mt-12 space-y-5 bg-gray-900/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-2xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <input {...register("firstName")} placeholder="First name" className="w-full rounded-xl bg-gray-950/50 border border-gray-800 px-4 py-3 text-sm text-gray-200 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500" />
              <p className="text-red-400 text-xs mt-1 font-medium">{errors.firstName?.message}</p>
            </div>
            <div>
              <input {...register("lastName")} placeholder="Last name" className="w-full rounded-xl bg-gray-950/50 border border-gray-800 px-4 py-3 text-sm text-gray-200 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500" />
              <p className="text-red-400 text-xs mt-1 font-medium">{errors.lastName?.message}</p>
            </div>
          </div>

          <div>
            <input {...register("email")} placeholder="Your email" className="w-full rounded-xl bg-gray-950/50 border border-gray-800 px-4 py-3 text-sm text-gray-200 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500" />
            <p className="text-red-400 text-xs mt-1 font-medium">{errors.email?.message}</p>
          </div>

          <div>
            <input {...register("phone")} placeholder="Phone number" className="w-full rounded-xl bg-gray-950/50 border border-gray-800 px-4 py-3 text-sm text-gray-200 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500" />
            <p className="text-red-400 text-xs mt-1 font-medium">{errors.phone?.message}</p>
          </div>

          <div>
            <textarea {...register("message")} rows={4} placeholder="Your message" className="w-full rounded-xl bg-gray-950/50 border border-gray-800 px-4 py-3 text-sm text-gray-200 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500 resize-none" />
            <p className="text-red-400 text-xs mt-1 font-medium">{errors.message?.message}</p>
          </div>

          <button disabled={loading} className="w-full rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-blue-500 disabled:opacity-50 flex justify-center items-center gap-3 shadow-lg shadow-blue-600/20 hover:scale-[1.01]">
            {loading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                Sending...
              </>
            ) : (
              "Let's Talk"
            )}
          </button>
        </form>
>>>>>>> 1acf79cc7ac883e92194e6f1926ed1a9516193b7
      </div>
    </section>
  );
}

<<<<<<< HEAD
export default Contact;
=======
export default Contact;
>>>>>>> 1acf79cc7ac883e92194e6f1926ed1a9516193b7
