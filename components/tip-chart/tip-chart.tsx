import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Filler,
  ChartOptions,
} from "chart.js";

interface Props {
  /**
   * Variants === className
   */
  variants?: string;
  /**
   * Nombre principal de la estadística
   */
  labels: Date[];
  value: number[];
}

export const options: ChartOptions<"line"> = {
  // type: "line",
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: true,
      text: "",
    },
  },

  scales: {
    y: {
      grid: {
        display: false,
      },

      ticks: {
        display: false,
      },

      border: {
        display: false,
        dash: [6],
      },
    },

    x: {
      grid: {
        display: false,
      },

      ticks: {
        display: false,
      },
    },
  },

  elements: {
    line: {
      borderWidth: 3,
      // backgroundColor: "rgba(245, 40, 145, 0.1)",
      backgroundColor: (context) => {
        const bgColor = [
          "rgba(192, 132, 252, 0.1)",
          "rgba(192, 132, 252, 0.5)",
        ];

        if (!context.chart.chartArea) {
          return;
        }

        const {
          ctx,
          chartArea: { top, bottom },
        } = context.chart;
        const gradientBg = ctx.createLinearGradient(0, bottom, 0, top);

        gradientBg.addColorStop(0, bgColor[0]);
        gradientBg.addColorStop(1, bgColor[1]);

        return gradientBg;
      },
      borderColor: "rgba(192, 132, 252)",
      // color: "rgba(245, 40, 145, 0.8)",
      tension: 0.3,
    },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

export default function TipChart({ labels, value }: Props) {
  const data = {
    labels: labels,
    datasets: [
      {
        fill: true,
        label: "Followers",
        data: value,
      },
    ],
  };

  return (
    <Line
      className="chart-area"
      options={options}
      data={data}
      height={150}
      width="100%"
    />
  );
}
