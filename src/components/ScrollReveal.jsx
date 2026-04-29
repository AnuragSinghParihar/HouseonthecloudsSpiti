import { useEffect, useRef } from "react";

export default function ScrollReveal({
  as: Tag = "div",
  animation = "up",
  delay = 0,
  threshold = 0.12,
  className = "",
  children,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const run = () => el.classList.add("is-visible");
          delay ? setTimeout(run, delay) : run();
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const revealClass = `reveal-${animation}${className ? ` ${className}` : ""}`;

  return (
    <Tag ref={ref} className={revealClass} {...props}>
      {children}
    </Tag>
  );
}
