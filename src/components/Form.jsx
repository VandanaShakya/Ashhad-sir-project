// components/Form.jsx
import React, { useRef, useEffect } from 'react';
import images from '../assets/images';

const Form = () => {
 const imgRef = useRef(null);
  const imgContainerRef = useRef(null);
  const rafRef = useRef(null);
  const autoRotateRef = useRef(0); // rotation angle tracker

  // --- Mouse Move Effect ---
  const handleMove = (e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const imgEl = imgRef.current;
      const container = imgContainerRef.current;
      if (!imgEl || !container) return;

      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const translateX = x * 24;
      const translateY = y * 18;
      const rotateZ = x * 6;
      const rotateX = -y * 6;

      imgEl.style.transform = `translate3d(${translateX}px, ${translateY}px, 0px) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg) rotate(${autoRotateRef.current}deg)`;
      imgEl.style.transition = "transform 120ms linear";
    });
  };


  // --- Auto Rotation Animation ---
  useEffect(() => {
    const rotateImage = () => {
      const imgEl = imgRef.current;
      if (!imgEl) return;

      autoRotateRef.current = (autoRotateRef.current + 0.3) % 360; // speed control
      imgEl.style.transform = `translate3d(0,0,0) rotate(${autoRotateRef.current}deg)`;
      imgEl.style.transition = "transform 0.1s linear";
      requestAnimationFrame(rotateImage);
    };

    const id = requestAnimationFrame(rotateImage);
    return () => cancelAnimationFrame(id);
  }, []);

  // --- Cleanup ---
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
 

      <section className="relative min-h-screen font-inter overflow-hidden">
      {/* --- Background Image with Slow Rotation --- */}
      <img
        src={images.heroImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-1 animate-spin-slow"
      />

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT: Contact Card */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="rounded-2xl p-8 lg:p-12 shadow-2xl bg-[#1a152b]">
              {/* Title: One-line */}
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 whitespace-nowrap">
                Get in Touch
              </h2>

              {/* Form */}
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <label className="block text-sm">
                  <div className="text-[#cfcce6] mb-2">Your Name</div>
                  <input
                    type="text"
                    placeholder="What's your good name?"
                    className="w-full rounded-lg px-4 py-3 bg-[#2f2550] text-white border border-[#57419e] placeholder:text-[#b9aee0] focus:outline-none"
                  />
                </label>

                <label className="block text-sm">
                  <div className="text-[#cfcce6] mb-2">Your Email</div>
                  <input
                    type="email"
                    placeholder="What's your email?"
                    className="w-full rounded-lg px-4 py-3 bg-[#2f2550] text-white border border-[#57419e] placeholder:text-[#b9aee0] focus:outline-none"
                  />
                </label>

                <label className="block text-sm">
                  <div className="text-[#cfcce6] mb-2">Your Message</div>
                  <textarea
                    rows="6"
                    placeholder="What you want to say?"
                    className="w-full rounded-lg px-4 py-3 bg-[#2f2550] text-white border border-[#57419e] placeholder:text-[#b9aee0] focus:outline-none resize-none"
                  />
                </label>

                <div>
                  <button
                    type="submit"
                    className="w-full rounded-lg py-3 font-semibold bg-gradient-to-r from-[#6b4eff] to-[#8e6cff] text-white shadow-md hover:opacity-95 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT: Image block */}
          <div className="lg:col-span-7 xl:col-span-8 flex items-center justify-center">
      <div
        ref={imgContainerRef}
      
        className="w-full flex items-center justify-center"
        style={{ perspective: 1000 }}
      >
        <img
          ref={imgRef}
          src={images.footerRightImg}
          alt="Decorative"
          className="max-w-90 w-90 h-auto object-contain will-change-transform transition-transform duration-200"
          style={{ transform: "translate3d(0,0,0) rotate(0deg)" }}
        />
      </div>
    </div>
        </div>
      </div>
    </section>
 
  );
};

export default Form;
