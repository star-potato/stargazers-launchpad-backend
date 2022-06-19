import { getClient } from '../src/client';
import { toStars } from '../src/utils';

const config = require('../config');
const mnemonic:string = process.env.MNEMONIC!;

async function burn_token(token: string, sg721:any) {
  const client = await getClient(mnemonic);

  console.log('SG721: ', sg721);
  console.log('Burning Token: ', token);
  const msg = { burn: { token_id: token } };
  console.log(JSON.stringify(msg, null, 2));

  const result = await client.execute(
    config.account,
    sg721,
    msg,
    'auto',
    'burn'
  );
  const wasmEvent = result.logs[0].events.find((e:any) => e.type === 'wasm');
  console.info(
    'The `wasm` event emitted by the contract execution:',
    wasmEvent
  );
}

async function mintTo(recipient: string, minterAddress:string) {
  const client = await getClient(mnemonic);

  const starsRecipient = toStars(recipient);
  console.log('Minter contract: ', minterAddress);
  console.log('Minting to: ', starsRecipient);

  const msg = { mint_to: { recipient: starsRecipient } };
  console.log(JSON.stringify(msg, null, 2));
  
  const result = await client.execute(
    config.account,
    minterAddress,
    msg,
    'auto',
    'mint to'
  );
  const wasmEvent = result.logs[0].events.find((e:any) => e.type === 'wasm');
  console.info(
    'The `wasm` event emitted by the contract execution:',
    wasmEvent
  );
  const tokenId = wasmEvent?.attributes?.find((a) => a.key === "token_id");
  console.log(tokenId);
  return tokenId;
}

async function queryInfo(tokenId:string, sg721:string){
  const client = await getClient(mnemonic);
  const tokenInfo = await client.queryContractSmart(sg721, {
    all_nft_info: { token_id: tokenId },
  });
  console.log('tokenInfo:', tokenInfo);
  return tokenInfo;
}

async function burn2mint1(rocketId:string, fuelId:string, starsAddress:string, minterAddress:string){
  //query fuel owner
  const responseQueryFuel = await queryInfo(fuelId, config.sg721FuelsTest);
  console.log('responseQueryFuel.access.owner =', responseQueryFuel.access.owner);
  console.log('starsAddress =', starsAddress);
  console.log('approvals length = ', responseQueryFuel.access.approvals.length);
  if (!starsAddress === responseQueryFuel.access.owner){
    console.error('FUELNOTOWNER');
    return 'FUELNOTOWNER';
  }
  if (responseQueryFuel.access.approvals.length === 0){
    console.error('FUELNOAPPROVAL');
    return 'FUELNOAPPROVAL';
  }


  //query rocket owner
  const responseQueryRocket = await queryInfo(fuelId, config.sg721RocketsTest);
  console.log('responseQueryRocket.access.owner', responseQueryRocket.access.owner);
  console.log('starsAddress', starsAddress);
  console.log('approvals length =', responseQueryRocket.access.approvals.length);
  if (!starsAddress === responseQueryRocket.access.owner){
    console.error('ROCKETNOTOWNER');
    return 'ROCKETNOTOWNER';
  }
  if (responseQueryRocket.access.approvals.length === 0){
    console.error('ROCKETNOAPPROVAL');
    return 'ROCKETNOAPPROVAL';
  }

  //burn fuel
  try {
    const responseBurnFuel = await burn_token(fuelId, config.sg721FuelsTest);
  } catch {
    console.error('FUELBURNERROR');
    return 'FUELBURNERROR';
  }
  //burn rocket
  try {
    const responseBurnRocket = await burn_token(rocketId, config.sg721RocketsTest);
  } catch {
    console.error ('ROCKETBURNERROR');
    return 'ROCKETBURNERROR';
  }
  //mint new token
  const responseMint = await mintTo(starsAddress, minterAddress);
    console.error ('MINTSUCCESS responseMint =' + responseMint);
    return ('MINTSUCCESS responseMint =' + responseMint);
}

const args = process.argv.slice(2);
if (args.length == 0) {
  console.log('No arguments provided, need rocketId, fuelId, starsAddress, minterAddress');
} else if (args.length == 4) {
  burn2mint1(args[0], args[1], args[2], args[3]);
} else {
  console.log('Invalid arguments');
}
