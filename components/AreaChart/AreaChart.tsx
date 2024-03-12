"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  BarController,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
} from "chart.js";
import { IoChevronDownSharp } from "react-icons/io5";

interface Props {
  /**
   * Variants === className
   */
  variants?: string;
  /**
   * Nombre principal de la estadística
   */
  name: string;
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "",
    },
  },
};

function AreaChart({ variants, name }: Props) {
  const [typeDate, setTypeDate] = useState("last_7d");
  const [valuesChart, setValuesChart] = useState({
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    dataSets: ["100", "242", "112", "643", "64", "743", "201"],
  });

  const data = {
    labels: valuesChart.labels,
    datasets: [
      {
        label: "Followers",
        data:
          valuesChart.dataSets.length > 0
            ? valuesChart.dataSets
            : ["100", "200", "300", "400", "500", "600", "700"],
        backgroundColor: "#AC88F6",
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  };

  useEffect(() => {
    const handlerTypeDate = async () => {
      if (typeof window !== "undefined" && window.localStorage) {
        const { access_token, id }: { access_token: string; id: string } =
          JSON.parse(localStorage.getItem("access_token_page")!) || {};

        if (access_token) {
        }
      }
    };

    handlerTypeDate();
  }, [typeDate]);

  ChartJS.register(
    BarElement,
    BarController,
    CategoryScale,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip
  );

  return (
    <div
      className={`card-area-chart bg-[#2D2C2D] border border-neutral-600 rounded-md p-5 ${variants}`}
    >
      <header className="flex flex-col min-[500px]:flex-row justify-between">
        <div className="mb-4 min-[500px]:mb-0">
          <span className="text-neutral-100 font-medium">{name}</span>
          <p className="text-neutral-300">Estadística de tus seguidores</p>
        </div>

        <div className="grid">
          <IoChevronDownSharp className="pointer-events-none z-10 right-1 relative col-start-1 row-start-1 h-4 w-4 self-center justify-self-end forced-colors:hidden text-neutral-200" />

          <select
            className="appearance-none forced-colors:appearance-auto border row-start-1 col-start-1 rounded-lg bg-[#101010] text-neutral-200 p-2 border-none pr-6 pl-3"
            onChange={(e) => setTypeDate(e.target.value)}
          >
            <option value="last_7d">Esta Semana</option>
            <option value="last_14d">Estos 14 días</option>
            <option value="this_month">Este Mes</option>
          </select>
        </div>
      </header>

      <Bar className="chart-area " options={options} data={data} height={150} />
    </div>
  );
}

export default AreaChart;
