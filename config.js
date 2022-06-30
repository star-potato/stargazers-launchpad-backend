/*
 * This is the main config for your NFT sale.
 *
 * Fill this out with all your project details.
 */

module.exports = {
  //// ACCOUNT INFO ////
  // The account seed phrase to use for deployment
  mnemonic: 'REPLACEME',
  // Your STARS address
  account: 'stars14yc957g6dqcvsp45l8ar2l8fnysy4y4p6fn4r3',

  //// API CONFIG ////
  // The RPC endpoint for Stargaze, Double Double Testnet
  rpcEndpoint: 'https://rpc.double-double-1.stargaze-apis.com/',
  // The RPC endpoint for Stargaze, mainnet
  // rpcEndpoint: 'https://rpc.stargaze-apis.com/',
  // NFT.storage endpoint
  nftStorageEndpoint: 'https://api.nft.storage',
  // NFT.storage API key
  nftStorageApiKey: '',
  // Pinata API Key (optional)
  pinataApiKey: '',
  // Pinata Secret Key (optional)
  pinataSecretKey: '',

  //// COLLECTION INFO ////
  // The name of your collection
  name: 'Collection Name',
  // The 3-7 letter ticker symbol for your collection
  symbol: 'SYM',
  // Project description
  description: 'An awesome NFT series',
  // Link to image to use as the main image for the collection.
  // Either IPFS or valid http links allowed. Gif compatible.
  // (at least 500 x 500 pixels)
  image:
    'ipfs://bafybeigi3bwpvyvsmnbj46ra4hyffcxdeaj6ntfk5jpic5mx27x6ih2qvq/images/1.png',
  // External_link is optional. Gif compatible
  //   external_link:
  // 'https://c.tenor.com/o656qFKDzeUAAAAC/rick-astley-never-gonna-give-you-up.gif',
  // The address for royalites to go to (may be the same as `account`)
  // Comment out both below if not using royalites
  // royaltyPaymentAddress: 'stars1...',
  // Royalty share: 1 = 100%, 0.1 = 10%
  // royaltyShare: '0.1',

  //// WHITELIST CONTRACT (OPTIONAL) ////
  // A list of whitelisted addresses that will be able to purchase the sale early
  // Comment out if not using a whilelist
  // whitelist: ['stars1..', 'stars1...'],
  // The date when the whitelist only purchasing period ends and everyone can buy (in ISO format)
  // whitelistStartTime: '2022-03-11T21:00:00.000Z',
  // whitelistEndTime: '2022-03-13T21:00:00.000Z',
  // The price (in STARS) for the whitelist (minimum 25 STARS)
  // whitelistPrice: 50,
  // The Per Address Limit during whitelist period this can be different than the main public limit
  // whitelistPerAddressLimit: 5,
  // The number of members in the whitelist (max 5000, each 1000 is 100 STARS)
  // whitelistMemberLimit: 100,
  // The contract address for your whitelist contract
  // Get this after running `yarn whitelist`
  // whitelistContract: 'stars1...',

  //// MINTER CONTRACT ////
  // The base URI to be used to programatically mint tokens
  baseTokenUri: 'ipfs://...',
  // The number of tokens to mint
  numTokens: 100,
  // The price (in STARS) for your NFTs (minimum 50 STARS)
  unitPrice: 100,
  // The max amount of NFTs an address can mint
  perAddressLimit: 1,
  // The date when the sale goes live
  // If whitelist is enabled, only whitelisted addresses will be able to purchase
  // startTime in ISO format
  startTime: '2022-03-11T21:00:00.000Z',
  // The minter contract address
  // Get this after running `yarn minter`
  minterHumans:'stars19equv33mget3ank0yxr5k3my7u9t6f7fakdy42g5rc4mv0ycaz3s3pfy3j',
  sg721Humans: 'stars1ppnknq0xsmk9cd5frt7xujq6hqcdgg2q78f3hlwlj6a2kapeenlqfdl8zu',
  humanImg:'https://stargaze.mypinata.cloud/ipfs/bafybeibr3f66jtzus5hsdpfuleu36a56gfbjwqccjteuo65lbnzm6njydm/images/',
  minterDemons:'stars10l8a3uzxeqy955rk2h485cdswdtxvegdgzsr5cxuzlpah4l36t3q5msp3k',
  sg721Demons: 'stars1gp8ykupusa8mle5sj0dmccgyaeelxw6s7sa3w7urtqgsc4ml503q74ttg4',
  demonImg:'https://stargaze.mypinata.cloud/ipfs/bafybeidzmmxdvarfbmetgpguqnkarxebvaejb47m4gho4vjakpqsyydlii/images/',
  minterCephalopods:'stars1tz5rc4lpl5rcud7hscgkfnnchf0x9nzgka8ccsnkjvp0utjdtvzqtmufw5',
  sg721Cephalopods: 'stars1sdm0ran0eumwm999lyd0u045zafw7zku2rwcd948p2fcaakxatns9w0h8z',
  cephalopodImg:'https://stargaze.mypinata.cloud/ipfs/bafybeictjh2dz3aprhdc72pdwkjgdwydua7zmyuidadoj7ni5yk5pvjs74/images/',
  minterEpics:'stars1k7pluj4gck66mrsmrntmcrhqgla2za0jj4pfsgq2ywxf6534stmqd7hmuj',
  sg721Epics:'stars1cuhkffartyn6hpdrhp87sqrsar60mfv3t0klfvxp027gmrcwdl4qfqqdxj',
  epicImg:'https://stargaze.mypinata.cloud/ipfs/bafybeiaarlxmmsmfsdb2dg2azs24nodulzot5xjnlgjqu2mpg2xtn3mnxa/images/',
  sg721Fuels:'stars1a2akm58cv8p0qk5yw398mm4zg3jw3ee5j8qyq9hzfwzpg07kgqqsfy4c2s',
  sg721Rockets:'stars186tjfdguldrvrt6dcyqk0afwv5pcm8tl9y2p2qvjf36vfwlxnu5qys7pue',
  tokenURL: 'https://testnet.publicawesome.dev/media/',

  // SG721 contract address
  // Get this after running `yarn minter`

  //// CONTRACT CODE IDs: Double Double Testnet ////
  // The code ID for sg721
  sg721CodeId: 76,
  // The code ID for the minter contract
  minterCodeId: 75,
  // The code ID for the whitelist contract
  whitelistCodeId: 3,
  marketplace:
    'stars154msvfvr3j37qpuqeq7neh00dh3dhzsf0cgflme9vwv7uqmjafns4dxrtr',

  // //// CONTRACT CODE IDs: Mainnet ////
  // // The code ID for sg721
  // sg721CodeId: 1,
  // // The code ID for the minter contract
  // minterCodeId: 2,
  // // The code ID for the whitelist contract
  // whitelistCodeId: 3,
  //   marketplace:
  //       'stars1fvhcnyddukcqfnt7nlwv3thm5we22lyxyxylr9h77cvgkcn43xfsvgv0pl',
};
