import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

function Contact() {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const sendEmail = async (data: FormData) => {
    setLoading(true);
    try {
      await emailjs.send(
        "service_18vd2u8",
        "template_glgdx2k",
        {
          from_name: `${data.firstName} ${data.lastName}`,
          from_email: data.email,
          phone: data.phone,
          message: data.message
        },
        "W-MvVLKfur6R1GGte"
      );
      toast.success("Message sent successfully");
      reset();
    } catch (error) {
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
      </div>
    </section>
  );
}

export default Contact;