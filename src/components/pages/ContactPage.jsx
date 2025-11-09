import React, { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); 
  const [apiError, setApiError] = useState("");

  const API_URL = "https://vernanbackend.ezlab.in/api/contact-us/";

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
      if (!re.test(form.email)) errs.email = "Enter a valid email";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleReset = () => {
    setForm({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setStatus("");
    setApiError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    try {
      setStatus("loading");
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        let errText = `Server returned ${res.status}`;
        try {
          const json = await res.json();
          errText = JSON.stringify(json);
        } catch {
        }
        setApiError(errText);
        setStatus("error");
      }
    } catch (err) {
      setApiError(err.message || "Network error");
      setStatus("error");
    }
  };

  return (
    <section className="w-full px-4 sm:px-8 md:px-10 lg:px-20 py-20">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* LEFT column text */}
        <div className="w-full md:w-1/2 px-2 md:px-5">
          <p className="text-sm md:text-base leading-relaxed">
            Whether you have an idea, a question, or simply want to explore how
            V can work together, V’re just a message away. Let’s catch up over
            coffee. Great stories always begin with a good conversation
          </p>
        </div>

        {/* RIGHT column  */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-5 px-2 md:px-5">
          <h5 className="halant-regular text-4xl md:text-5xl text-center md:text-left">
            Join the Story
          </h5>
          <p className="instrument-sans text-xl md:text-2xl text-center md:text-left">
            Ready to bring your vision to life? Let’s talk.
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl flex flex-col justify-center items-center gap-4 mt-5"
            noValidate
          >
            <div className="w-full">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`bg-[#FFFFFF] p-2 w-full border ${
                  errors.name ? "border-red-500" : "border-gray-200"
                } rounded`}
                type="text"
                placeholder="Your name*"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "err-name" : undefined}
              />
              {errors.name && (
                <p id="err-name" className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`bg-[#FFFFFF] p-2 w-full border ${
                  errors.email ? "border-red-500" : "border-gray-200"
                } rounded`}
                type="email"
                placeholder="Your email*"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "err-email" : undefined}
              />
              {errors.email && (
                <p id="err-email" className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="bg-[#FFFFFF] p-2 w-full border border-gray-200 rounded"
                type="tel"
                placeholder="Phone"
              />
            </div>

            <div className="w-full">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className={`bg-[#FFFFFF] p-2 leading-[1.4] w-full h-30 border ${
                  errors.message ? "border-red-500" : "border-gray-200"
                } rounded resize-none`}
                placeholder="Your message*"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "err-msg" : undefined}
              />
              {errors.message && (
                <p id="err-msg" className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="w-full flex items-center justify-center gap-5">
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#F15D2B] rounded-full px-6 py-2 text-white disabled:opacity-60 cursor-pointer"
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>
              {/* 🔄 Reset Button */}
              <button
                type="button"
                onClick={handleReset}
                className="border border-[#F15D2B] text-[#F15D2B] rounded-full px-6 py-2 hover:bg-[#F15D2B] hover:text-white duration-300"
              >
                Reset
              </button>
            </div>

            {/* status messages */}
            <div className="w-full flex flex-col items-center md:items-start ">
              {status === "success" && (
                <p className="text-green-600 font-medium">Form Submitted</p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-medium">
                  Submission failed. {apiError ? apiError : ""}
                </p>
              )}
            </div>
          </form>

          {/* contact info row */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-5 items-center ">
            <span className="halant-bold text-[#F15D2B]">
              vernita@varnanfilms.co.in
            </span>
            <span className="halant-bold text-[#F15D2B]">+91 98736 84567</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
