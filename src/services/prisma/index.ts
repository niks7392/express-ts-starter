// @ts-ignore
import { PrismaClient } from '@prisma/client'

export const client = new PrismaClient()

/**
 * This function is deprecated
 * @param handler 
 * @param onError 
 */
export async function prisma(handler: (client:PrismaClient) => Promise<void>, onError: () => Promise<any> | void=()=>{}) {
  
  await handler(client)
    .then(async () => {
      console.log('im in the');
      
      await client.$disconnect()
    })
    .catch(async (e) => {
      console.log('im in catch');
      console.error(e)
      await client.$disconnect()
      if (onError instanceof Promise) {
        await onError()
      } else {
        onError()
      }
      // process.exit(1)
    })
};
