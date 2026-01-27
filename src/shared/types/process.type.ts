interface IProcessStep {
  id: number;
  title: string;
  desc: string;
  icon: string; // image path or component
  position: {
    x: string; // %, vw, or px
    y: string;
  };
}
