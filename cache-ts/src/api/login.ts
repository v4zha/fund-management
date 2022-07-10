import { GFAT, GFatBuilder } from "./gfat";
import { address } from "../Types/types";


const contract_add= process.env.CONTRACT_ADDR;

export async function etherLogin(): Promise<GFAT> {
  let builder = new GFatBuilder();
  builder = await builder.fromMetaMask();
  const gfat = (
    await builder.login().assign_contract(contract_add as address)
  ).build();
  return gfat;
}
export async function observer(): Promise<GFAT> {
  let builder = new GFatBuilder();
  const provider_url = process.env.PROVIDER_URL;
  builder = await builder.fromUrl(provider_url as string);
  const gfat = (
    await builder.asObserver().assign_contract(contract_add as address)
  ).build();
  return gfat;
}
