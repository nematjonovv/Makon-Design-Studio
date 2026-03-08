import { getServices } from "@/api/get.api";
import ServiceBox from "./components/ServiceBox";
import { IServices } from "@/shared/types/service.type";

async function Services() {
  const res = await getServices();
  const data = res.data as IServices[];
  return (
    <main className="w-screen text-(--text)">
      <div className="container relative pt-30 flex flex-col items-center gap-10">
        {data.map((service, index) => (
          <ServiceBox key={index} data={service} index={index} />
        ))}
      </div>
    </main>
  );
}

export default Services;