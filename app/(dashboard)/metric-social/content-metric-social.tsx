"use client";

import { useEffect, useState } from "react";
import {
  DateRangePicker,
  DateValue,
  Image,
  RangeValue,
} from "@nextui-org/react";
import { Session } from "next-auth";
import { useDebounce } from "@/hooks";
import { AreaChart, CardRedSocial } from "@/components";
import { createAdapterMetrics } from "@/adapters/metric-adapters";
import { parseDate } from "@internationalized/date";
import { HiMiniCursorArrowRays } from "react-icons/hi2";
import { IoEye, IoPeopleSharp } from "react-icons/io5";
import { getMetricProfileService } from "@/services/metric-services";

interface Props {
  session: Session | null;
}

interface MetricProps {
  view: {
    dateView: Date[];
    valueView: number[];
  };
}

export const ContentMetricSocial = ({ session }: Props) => {
  const [metric, setMetric] = useState({} as MetricProps);
  const [valueDate, setValueDate] = useState<RangeValue<DateValue>>({
    start: parseDate("2024-05-15"),
    end: parseDate("2024-06-20"),
  });

  const debouncedValueDateStart = useDebounce(valueDate?.start.toString());
  const debouncedValueDateEnd = useDebounce(valueDate?.end.toString());

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const user_agent_id = navigator.userAgent.replace(/\D+/g, "");
      localStorage.setItem("id_user", user_agent_id);
    }
  }, []);

  useEffect(() => {
    const getMetricsProfile = async () => {
      const { response } = await getMetricProfileService(
        session?.user.id!,
        new Date(valueDate.end.toString()).toISOString(),
        new Date(valueDate.start.toString()).toISOString()
      );

      const { data } = createAdapterMetrics(response);

      setMetric(data);
    };

    if (!valueDate?.start.toString() || !valueDate?.end.toString()) {
      return;
    }

    getMetricsProfile();
  }, [debouncedValueDateStart, debouncedValueDateEnd]);

  return Object.keys(metric).length === 0 ? (
    <div className="shadow rounded-md p-4 w-full animate-pulse">
      <div className="flex gap-4 mb-5">
        <div className="basis-1/3 h-56 rounded-md bg-neutral-900" />
        <div className="basis-1/3 h-56 rounded-md bg-neutral-900" />
        <div className="basis-1/3 h-56 rounded-md bg-neutral-900" />
      </div>

      <div className="flex gap-4">
        <div className="basis-1/2 h-64 rounded-md bg-neutral-900" />
        <div className="basis-1/2 h-64 rounded-md bg-neutral-900" />
      </div>
    </div>
  ) : (
    <section className="metric-social">
      <div className="flex justify-between flex-wrap items-center mb-5">
        <h2 className="text-neutral-100 text-3xl">
          ¡Buenos dias!{" "}
          <span className="font-semibold">
            {session?.user.firstname} {session?.user.lastname}
          </span>
          <span className="text-3xl">👋</span>
        </h2>

        <DateRangePicker
          value={valueDate}
          onChange={setValueDate}
          label="Elige la fecha"
          className="max-w-xs text-neutral-200 mt-5"
          classNames={{
            inputWrapper: "bg-[#0d0d0d]",
          }}
        />
      </div>

      <div className="flex w-full mb-5 flex-wrap">
        <CardRedSocial
          title="Clicks"
          followersCount={`1020`}
          nameIcon={HiMiniCursorArrowRays}
          series={[1, 2, 3, 6, 7, 10]}
          colorChart="#f43f5e"
          className="max-w-full basis-full mb-5 md:max-w-[50%] md:basis-1/2 min-[1400px]:max-w-[25%] min-[1400px]:basis-1/4 md:pr-5 md:mb-0 min-[1400px]:mb-0"
        />

        <CardRedSocial
          title="Suscriptores"
          nameIcon={IoPeopleSharp}
          followersCount={`2254`}
          series={metric.view.valueView}
          colorChart="#ca8a04"
          className="max-w-full basis-full mb-5 md:max-w-[50%] md:basis-1/2 min-[1400px]:max-w-[25%] min-[1400px]:basis-1/4 min-[1400px]:pr-5 md:mb-5 min-[1400px]:mb-0"
        />

        <CardRedSocial
          title="Vistas"
          nameIcon={IoEye}
          followersCount={`1233`}
          series={metric.view.valueView}
          colorChart="#059669"
          className="max-w-full basis-full mb-5 md:max-w-[50%] md:basis-1/2 md:mb-0 min-[1400px]:max-w-[25%] min-[1400px]:basis-1/4 md:pr-5"
        />

        <CardRedSocial
          title="Vistas"
          nameIcon={IoEye}
          followersCount={`1233`}
          series={metric.view.valueView}
          colorChart="#2563eb"
          className="max-w-full basis-full md:max-w-[50%] md:basis-1/2 min-[1400px]:max-w-[25%] min-[1400px]:basis-1/4"
        />
      </div>

      <div className="flex flex-col mb-5 min-[960px]:flex-row">
        <div className="max-w-full mb-5 min-[960px]:max-w-[66.666667%] min-[960px]:basis-2/3 min-[960px]:mb-0 min-[960px]:pr-5">
          <AreaChart
            variants="flex-1"
            name="Donaciones"
            description="Estadística de donaciones"
            colorChart="#fe7b5b"
            labels={metric.view.dateView.slice(0, 5)}
            value={[30, 10, 29, 23.1, 102]}
          />
        </div>
        <div className="max-w-full min-[960px]:max-w-[33.333333%] min-[960px]:basis-1/3">
          <div
            className={`relative h-full z-20 after:z-0 bg-[#0d0d0d] after:rounded-md after:bg-[url("data:image/svg+xml,%3csvg%20width='270'%20height='160'%20viewBox='0%200%20270%20160'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_4824_194905'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='270'%20height='160'%3e%3crect%20width='270'%20height='160'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_4824_194905)'%3e%3cg%20opacity='0.8'%3e%3cpath%20opacity='0.2'%20d='M300.657%205.12796L297.363%204.72578C238.426%20-2.45649%20186.69%2021.8216%20155.788%2071.1818C128.5%20114.779%2084.7858%20139.031%2033.8176%20138.869L-25.4783%20138.677L59.7463%20294.938L367%20125.5L300.657%205.12796Z'%20fill='white'/%3e%3cpath%20opacity='0.4'%20d='M311.194%2025.1553L307.9%2024.7531C248.95%2017.5647%20197.215%2041.8427%20166.32%2091.1991C139.031%20134.797%2095.3172%20159.048%2044.3491%20158.886L-14.9417%20158.704L76%20302L383.254%20132.562L311.194%2025.1553Z'%20fill='white'/%3e%3cpath%20opacity='0.5'%20d='M321.731%2045.1831L318.437%2044.781C259.487%2037.5925%20207.752%2061.8706%20176.857%20111.227C149.568%20154.824%20105.854%20179.076%2054.8861%20178.914L-4.4046%20178.732L75.5%20288.5L382.754%20119.062L321.731%2045.1831Z'%20fill='white'/%3e%3cpath%20opacity='0.7'%20d='M333.321%2067.2134L330.028%2066.8113C271.077%2059.6228%20219.342%2083.9009%20188.447%20133.257C161.159%20176.855%20117.445%20201.106%2066.4765%20200.944L7.18579%20200.762L72.7463%20285.938L380%20116.5L333.321%2067.2134Z'%20fill='white'/%3e%3cpath%20opacity='0.7'%20d='M343.332%2086.2395L340.038%2085.8374C281.087%2078.6489%20229.352%20102.927%20198.457%20152.283C171.169%20195.881%20127.455%20220.133%2076.4866%20219.97L17.1959%20219.788L51.3248%20284.658L358.578%20115.219L343.332%2086.2395Z'%20fill='white'/%3e%3cpath%20opacity='0.8'%20d='M352.288%20103.263L348.994%20102.861C290.043%2095.6721%20238.308%20119.95%20207.413%20169.307C180.125%20212.904%20136.411%20237.156%2085.4429%20236.993L26.1522%20236.812L60.281%20301.681L367.535%20132.243L352.288%20103.263Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")] after:absolute after:bg-no-repeat after:inset-0 after:bg-cover after:opacity-50 after:w-full after:h-full rounded-lg p-5 text-neutral-200 text-center`}
          >
            <h3 className="text-lg mb-5">Donaciones</h3>
            <p className="text-4xl">S/.PEN 0,27</p>

            <p className="text-left my-5">Recientes actividades</p>

            <ul className="relative z-20">
              <li className="flex justify-between items-center p-1">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center bg-neutral-600 p-2 h-10 w-10 rounded-full cursor-pointer">
                    {"Ra"}
                  </div>
                  <span>Rafael Alvarez</span>
                </div>
                <span>S/.PEN 1.00</span>
              </li>

              <li className="flex justify-between items-center p-1">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center bg-neutral-600 p-2 h-10 w-10 rounded-full cursor-pointer">
                    {"Ra"}
                  </div>
                  <span>Rafael Alvarez</span>
                </div>
                <span>S/.PEN 1.00</span>
              </li>

              <li className="flex justify-between items-center p-1">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center bg-neutral-600 p-2 h-10 w-10 rounded-full cursor-pointer">
                    {"Ra"}
                  </div>
                  <span>Rafael Alvarez</span>
                </div>
                <span>S/.PEN 1.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-[960px]:flex-row">
        <div className="max-w-full mb-5 min-[960px]:max-w-[66.666667%] min-[960px]:basis-2/3 min-[960px]:mb-0 min-[960px]:pr-5">
          <AreaChart
            variants="flex-1"
            name="Tienda"
            description="Estadística de mi tienda"
            colorChart="#059669"
            labels={metric.view.dateView.slice(0, 5)}
            value={[40, 60, 29, 23.1, 30]}
          />
        </div>

        <div className="bg-[#0d0d0d] rounded-md p-5 max-w-full min-[960px]:max-w-[33.333333%] min-[960px]:basis-1/3">
          <p className="font-semibold text-xl text-center">
            Objeto mas vendido
          </p>

          <div className="flex flex-col justify-center items-center max-w-full">
            <figure className="flex justify-center items-center flex-col">
              <div className="my-5">
                <Image
                  isBlurred
                  isZoomed
                  width={300}
                  height={200}
                  alt="NextUI hero Image with delay"
                  src="https://nextui.org/_next/image?url=%2Fimages%2Fshoes-1.png&w=1920&q=75"
                />
              </div>

              <h1>Nike Adapt BB 2.0</h1>
              <p className="text-neutral-400">
                Se vendio un 23% mas que otros productos
              </p>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
