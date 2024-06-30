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
  labels: Date[];
  value: number[];
}

function AreaChart({ variants, name, labels, value }: Props) {
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
      curve: "smooth",
      width: 2,
    },

    grid: {
      strokeDashArray: 5,
      borderColor: "rgba(24, 24, 27, 0.5)",
    },

    colors: ["rgba(192, 132, 252, 0.9)"],

    yaxis: {
      labels: {
        style: {
          colors: "#71717a",
        },
      },
    },

    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
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
    <div className={`card-area-chart bg-[#2D2C2D] rounded-md p-5 ${variants}`}>
      <div className="mb-4 min-[500px]:mb-0">
        <span className="text-neutral-100 font-medium">{name}</span>
        <p className="text-neutral-300">{`Estadística de tus ${name.toLowerCase()}`}</p>
      </div>

      <Chart
        options={options}
        series={data}
        type="area"
        height={350}
        width="100%"
      />
    </div>
  );
}

export default AreaChart;

// export const options: ChartOptions<"bar"> = {
//   // type: "line",
//   responsive: true,
//   maintainAspectRatio: true,
//   plugins: {
//     legend: {
//       position: "top" as const,
//       display: false,
//     },
//     title: {
//       display: true,
//       text: "",
//     },
//   },

//   scales: {
//     y: {
//       grid: {
//         display: true,
//         color: "rgba(24, 24, 27, 0.3)",
//       },

//       border: {
//         display: false,
//         // dash: [30],
//       },
//     },

//     x: {
//       grid: {
//         display: false,
//       },
//     },
//   },

//   elements: {
//     bar: {
//       borderRadius: 7,
//       borderWidth: 3,
//       // backgroundColor: "rgba(245, 40, 145, 0.1)",
//       backgroundColor: (context) => {
//         const bgColor = [
//           "rgba(192, 132, 252, 0.1)",
//           "rgba(192, 132, 252, 0.5)",
//         ];

//         if (!context.chart.chartArea) {
//           return;
//         }

//         const {
//           ctx,
//           chartArea: { top, bottom },
//         } = context.chart;
//         const gradientBg = ctx.createLinearGradient(0, bottom, 0, top);

//         gradientBg.addColorStop(0, bgColor[0]);
//         gradientBg.addColorStop(1, bgColor[1]);

//         return gradientBg;
//       },
//       borderColor: "rgba(192, 132, 252)",
//       // color: "rgba(245, 40, 145, 0.8)",
//     },
//   },
// };
