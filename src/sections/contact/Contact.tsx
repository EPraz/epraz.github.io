import { useEffect, useRef, useState } from "react";
import { EarthCanvas, TitleHeader } from "../../components";
import DOMPurify from "dompurify";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const cooldownTimerRef = useRef<number | null>(null);

  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [form, setForm] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const EMAIL_ENABLED =
    !!import.meta.env.VITE_APP_EMAILJS_SERVICE_ID &&
    !!import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID &&
    !!import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

  const isFormValid =
    form.name.trim().length > 0 &&
    emailRegex.test(form.email) &&
    form.message.trim().length > 0;

  useEffect(() => {
    if (toast) {
      const timeout = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timeout);
    }
  }, [toast]);

  useEffect(() => {
    return () => {
      if (cooldownTimerRef.current) {
        window.clearTimeout(cooldownTimerRef.current);
      }
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    const cleanValue = DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    });

    setForm((prev) => ({ ...prev, [name]: cleanValue }));

    // Oculta cualquier toast mientras el usuario edita
    if (toast) setToast(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!EMAIL_ENABLED) {
      console.error("[EmailJS] Missing env config", {
        serviceId: !!import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        templateId: !!import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        publicKey: !!import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      });

      setToast({
        type: "error",
        message:
          "Contact form is temporarily unavailable. Please email me directly.",
      });
      return;
    }

    // basic cooldown / rate-limit (10s)
    if (cooldown || loading) return;

    // Honeypot (bots fill hidden fields)
    if (formRef.current) {
      const honeypot = (
        formRef.current.querySelector(
          'input[name="company"]',
        ) as HTMLInputElement | null
      )?.value;

      if (honeypot && honeypot.trim().length > 0) {
        // Silent drop: pretend success (do not teach bots)
        setToast({ type: "success", message: "Message sent successfully!" });
        setForm({ name: "", email: "", message: "" });
        return;
      }
    }

    // Validate fields (no alerts)
    const nameOk = form.name.trim().length > 0;
    const emailOk = emailRegex.test(form.email.trim());
    const messageOk = form.message.trim().length > 0;

    if (!nameOk || !emailOk || !messageOk) {
      setToast({
        type: "error",
        message: "Please complete all fields with a valid email.",
      });
      return;
    }

    if (!formRef.current) {
      setToast({ type: "error", message: "Form not ready. Try again." });
      return;
    }

    try {
      setLoading(true);
      setCooldown(true);

      // release cooldown after 10s (even if request finishes earlier)
      cooldownTimerRef.current = window.setTimeout(
        () => setCooldown(false),
        10_000,
      );

      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      setToast({ type: "success", message: "Message sent successfully!" });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setToast({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding relative">
      {/* <StarsCanvas /> */}
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-7"
                >
                  <div>
                    <label htmlFor="name">Your name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What’s your good name?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      inputMode="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What’s your email address?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      rows={5}
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                  />
                  {toast && (
                    <div
                      className={`mt-3 flex items-center justify-center gap-2 rounded px-4 py-3 text-white shadow text-sm  ${
                        toast.type === "success"
                          ? "bg-emerald-600"
                          : "bg-red-600"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={
                            toast.type === "success"
                              ? "M5 13l4 4L19 7"
                              : "M6 18L18 6M6 6l12 12"
                          }
                        />
                      </svg>
                      <span className="">{toast.message}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={
                      loading || cooldown || !isFormValid || !EMAIL_ENABLED
                    }
                    className="disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
                  >
                    <div className="cta-button group">
                      <div className="bg-circle" />
                      <p className="text">
                        {loading ? "Sending..." : "Send Message"}
                      </p>
                      <div className="arrow-wrapper">
                        <img src="/images/arrow-down.svg" alt="arrow" />
                      </div>
                    </div>
                  </button>
                  {!EMAIL_ENABLED && (
                    <p className="text-sm text-yellow-300 text-center">
                      Contact form unavailable.
                    </p>
                  )}
                </form>
              </>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className=" w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <EarthCanvas />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
