import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

function GlobalBackground() {
  return (
    <div className={`fixed inset-0 -z-10`}>
      <ShootingStars  minDelay={200} maxDelay={900} maxStars={5} />
      <StarsBackground />
    </div>
  );
}

export default GlobalBackground;
