import { MetricSocial } from "@/types";
import { AxiosResponse } from "axios";

const createAdapterMetrics = (response: AxiosResponse<MetricSocial>) => {
  const {
    data: { profileMetric },
  } = response;

  const dateView = profileMetric.totalViews.list.map((view) => view.key);
  const valueView = profileMetric.totalViews.list.map((view) => view.value);

  return {
    data: {
      view: {
        dateView,
        valueView,
      },
    },
  };
};

export { createAdapterMetrics };
