import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import clientAxios from "@/utils/client-axios";
import { getServerSession } from "next-auth";

export async function GET() {
  const res = await clientAxios.get(
    `/bio/profile-metric/66080176496404d19d48ae8b`
  );

  const data = res.data;

  return Response.json({ data });
}
