import { clientAxios } from "@/utils";

/**
 * @desc Obtener las metricas del usuario
 * @param idUser - ID del usuario
 * @param start - La fecha donde iniciara
 * @param end - La fecha donde terminara
 * @returns  Response<any>
 */

const getMetricProfileService = async (
  idUser: string,
  start: string,
  end: string
) => {
  const response = await clientAxios.post("/bio/profile-metric", {
    user: idUser,
    start,
    end,
  });

  return { response };
};

export { getMetricProfileService };
