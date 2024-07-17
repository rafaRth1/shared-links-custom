import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";
import { IconType } from "react-icons";

interface Props extends React.HTMLAttributes<Element> {
  title: string;
  followersCount: string;
  nameIcon: IconType;
  colorIcon?: string;
  series: number[];
  colorChart?: string;
}

export function CardRedSocial(props: Props) {
  const {
    title,
    nameIcon: NameIcon,
    followersCount,
    colorIcon,
    className,
    colorChart,
    series,
  } = props;

  const data: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined = [
    {
      data: series,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "line",
      height: 80,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2,
      },
    },

    grid: {
      strokeDashArray: 5,
      borderColor: "rgba(24, 24, 27, 0.5)",
    },

    stroke: {
      curve: "smooth",
      width: 2,
    },

    markers: {
      size: 0,
    },

    colors: [`${colorChart}`],

    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function formatter(val) {
            return title;
          },
        },
      },
      theme: "dark",
    },
  };

  return (
    <div className={className}>
      <div className="flex justify-between text-neutral-100 bg-[#0d0d0d] rounded-md p-4">
        <div className="flex flex-col justify-between  mr-4">
          <NameIcon color={colorIcon} size={20} className="inline" />
          <p className="text-lg inline">{title}</p>

          <p className="text-5xl">{followersCount}</p>
        </div>
        <Chart
          options={options}
          series={data}
          type="area"
          height={80}
          width={"100%"}
        />
      </div>
    </div>
  );
}

export default CardRedSocial;
