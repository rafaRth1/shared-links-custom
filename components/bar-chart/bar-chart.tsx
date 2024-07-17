"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";

interface Props {
  /**
   * Variants === className
   */
  variants?: string;
  /**
   * Nombre principal de la estadística
   */
  name: string;
  description: string;
  labels: Date[];
  value: number[];
}

function BarChart({ variants, name, labels, value, description }: Props) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      return;
    }
  }, []);

  const data = [
    {
      name: name,
      data: value,
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
        autoSelected: "pan",
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      // width: 2,
      lineCap: "round",
    },

    grid: {
      strokeDashArray: 5,
      borderColor: "rgba(24, 24, 27, 0.5)",
    },

    yaxis: {
      labels: {
        style: {
          colors: "#71717a",
        },
      },
    },

    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
      theme: "dark",
    },

    colors: ["rgba(192, 132, 252, 0.9)"],

    //  fill: {
    //    colors: ["rgba(192, 132, 252, 0.9)"],
    //    type: "gradient",
    //    gradient: {
    //      shade: "dark",
    //      type: "vertical",
    //      shadeIntensity: 0.1,
    //      gradientToColors: undefined,
    //      inverseColors: false,
    //      opacityFrom: 0.8,
    //      opacityTo: 0.8,
    //      stops: [70, 90],
    //      colorStops: [],
    //    },
    //  },

    //  colors: ["#34d399", "#f0abfc"],

    plotOptions: {
      bar: {
        borderRadius: 15,
      },
    },

    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: "#71717a",
        },
      },

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },

      categories: labels,
    },
  };

  return (
    <div className={`card-area-chart bg-[#0d0d0d] rounded-md p-5 ${variants}`}>
      <div className="mb-4 min-[500px]:mb-0">
        <span className="text-neutral-100 font-medium">{name}</span>
        <p className="text-neutral-300">{`${description}`}</p>
      </div>

      <Chart
        options={options}
        series={data}
        type="bar"
        height={350}
        width="100%"
      />
    </div>
  );
}

export default BarChart;
