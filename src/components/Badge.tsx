import AnimatedSection from "./AnimationSection";

function Badge({ title }: { title: string }) {
  return (
    <AnimatedSection animation="fade-up" delay="delay-0">
      <div className="text-center mb-10 mt-25">
        <p className="bg-(--badge-bg) text-(--text) border border-(--badge-border) rounded-[15px] px-10 py-4 text-sm font-normal inline-block mx-auto">
          {title}
        </p>
      </div>
    </AnimatedSection>
  );
}

export default Badge;
