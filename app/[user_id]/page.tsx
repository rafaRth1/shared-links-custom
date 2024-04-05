import Link from "next/link";
import clientAxios from "@/utils/client-axios";
import { notFound } from "next/navigation";
import { UserDataBio } from "@/types";
import { IoPerson } from "react-icons/io5";
import UserContent from "./user-content";

async function getUser(params: string) {
  try {
    const { data } = await clientAxios(`/user/profile-link/${params}`);

    return data;
  } catch (error) {
    return null;
  }
}

export default async function PageUser({
  params,
}: {
  params: { user_id: string };
}) {
  const data: UserDataBio = await getUser(params.user_id);

  if (!data) {
    notFound();
  }

  return <UserContent data={data} />;
}
