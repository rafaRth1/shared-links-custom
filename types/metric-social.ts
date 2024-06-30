export interface MetricSocial {
  profileMetric: ProfileMetric;
}

export interface ProfileMetric {
  totalViews: TotalViews;
}

export interface TotalViews {
  list: List[];
  total: number;
}

export interface List {
  _id: string;
  key: Date;
  value: number;
}
