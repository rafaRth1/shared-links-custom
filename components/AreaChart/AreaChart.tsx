"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getFollowersTypeDate } from "@/services/services_facebook";
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

export function AreaChart({ variants }: { variants?: string }) {
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
          try {
            const response = await getFollowersTypeDate(
              id,
              typeDate,
              access_token
            );

            const newArrayDataChart = response[0].values.map(
              (value: { value: string; end_time: string }) => value.value
            );

            const newArrayLabels = response[0].values.map(
              (value: { value: string; end_time: string }) =>
                value.end_time.split("-")[2].split("T")[0]
            );
            setValuesChart({
              labels: newArrayLabels,
              dataSets: newArrayDataChart,
            });
          } catch (error) {
            // console.log("Error handlerTypeDate");
          }
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
        <div>
          <span className="text-neutral-100 font-medium">Followers</span>
          <p className="text-neutral-300">Estadística de tus seguidores</p>
        </div>

        <select
          className="rounded-lg bg-[#101010] text-neutral-100 px-2 py-2 my-3 min-[500px]:my-0"
          onChange={(e) => setTypeDate(e.target.value)}
        >
          <option value="last_7d">Esta Semana</option>
          <option value="last_14d">Estos 14 días</option>
          <option value="this_month">Este Mes</option>
        </select>
      </header>

      <Bar className="chart-area " options={options} data={data} height={250} />
    </div>
  );
}
