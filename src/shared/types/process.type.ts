interface IProcessStep {
  id: number;
  title: string;
  desc: string;
  icon: string; // image path or component
  position: {
    desktop: { x: string; y: string };
    mobile?: { x: string; y: string };
    tablet?: { x: string; y: string };
  };
}
