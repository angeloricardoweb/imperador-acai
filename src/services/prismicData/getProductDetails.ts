'use server'
import { redirect } from 'next/navigation'
import { client } from '../prismicClient'
import { getCurrentLang } from './getCurrentLang'

export const getProductDetails = async (uid: string) => {
  const lang = await getCurrentLang()
  const data = await client
    .getByUID('produto', uid, {
      lang: lang ?? 'pt-br',
    })
    .catch(() => {
      redirect('/404')
    })

  return data
}