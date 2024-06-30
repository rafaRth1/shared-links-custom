import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ContentMetricSocial } from "./content-metric-social";

export default async function MetricSocialPage() {
  const session = await getServerSession(authOptions);

  return <ContentMetricSocial session={session} />;
}
