import type { UserDNIResponse, APISNETResponse } from '@/interfaces'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
  | { message: string }
  | UserDNIResponse

export default async function hadler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  switch (req.method) {
    case 'GET':
      getUserDNI(req, res)
      break
    default:
      res.status(400).json({ message: 'Metodo no permitido' })
      break
  }
}

interface UserDNI {
  dni: string
}

const getUserDNI = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  const { dni } = req.query as unknown as UserDNI
  const URL = 'https://api.apis.net.pe/v2/reniec/dni?numero='

  if (dni === undefined) {
    res.status(400).json({ message: 'El DNI es requerido' })
    return
  }

  try {
    const resp = await fetch(URL + dni, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.APIS_TOKEN as string}`
      }
    })
    if (!resp.ok) {
      res.status(400).json({ message: 'DNI no encontrado' })
      return
    }
    const { numeroDocumento, apellidoMaterno, apellidoPaterno, nombres }: APISNETResponse = await resp.json()
    res.status(200).json({
      fullName: `${nombres} ${apellidoPaterno} ${apellidoMaterno}`,
      dni: numeroDocumento
    })
  } catch (error) {
    res.status(400).json({ message: 'Error al buscar a la persona' })
  }
}
