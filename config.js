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
  //rpcEndpoint: 'https://rpc.double-double-1.stargaze-apis.com/',
  // The RPC endpoint for Stargaze, mainnet
  rpcEndpoint: 'https://rpc.stargaze-apis.com/',
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
  minterHumans:'stars19pa0986q29kqcftj2l6m3d8a4v7j2gvjwmys5y07k8939wjyyzds958vn9',
  sg721Humans: 'stars1ta25gf8tq2qc9pvphrtc9nrj79wykvg3yzhfqk48p2ncwzsgxp5qrmwl7p',
  humanImg:'https://stargaze.mypinata.cloud/ipfs/bafybeibr3f66jtzus5hsdpfuleu36a56gfbjwqccjteuo65lbnzm6njydm/images/',
  minterDemons:'stars19d5u0gt66j0u4fwg0vatnr4eht8xfzcasv6z0e65qrx653m9razq30at54',
  sg721Demons: 'stars1cvl9x5lj9umelt45wgla8m4n68y4t03vhj488p5nlcs7eytjw79sqzd0kr',
  demonImg:'https://stargaze.mypinata.cloud/ipfs/bafybeidzmmxdvarfbmetgpguqnkarxebvaejb47m4gho4vjakpqsyydlii/images/',
  minterCephalopods:'stars13n679843y9443rxjcrvuv3u588cftj8wd95e2zvuc2svl3c4908sm4pxmh',
  sg721Cephalopods: 'stars1q895y7l6gsutenucljwwnwjhfpra54ulm3ahneh22ch9dtwp02wqvp5d4k',
  cephalopodImg:'https://stargaze.mypinata.cloud/ipfs/bafybeictjh2dz3aprhdc72pdwkjgdwydua7zmyuidadoj7ni5yk5pvjs74/images/',
  minterEpics:'stars1f07f287jqgqyy7qdcwazv3d34dtr27t3l3j59amt8e4zvz8a66rsse2zlv',
  sg721Epics:'stars1ktgpf5szzcrq7v3v3e2tqaxe7wayu5nvy25ekxcete9xz47kgtxq4zq82n',
  epicImg:'https://stargaze.mypinata.cloud/ipfs/bafybeiaarlxmmsmfsdb2dg2azs24nodulzot5xjnlgjqu2mpg2xtn3mnxa/images/',
  sg721Fuels:'stars18nj7a5p6g7agf76zyp2nrnv0fcjrfvsc82c5w7zzsdyjzgq0na3sfq92uz',
  sg721Rockets:'stars12jj0nj3dk5uk4ldw4hkhx0y8ewx7ts53vfsamjjwyhdpjnwlh7xsyv3f74',
  tokenURL: 'https://app.stargaze.zone/media/',

  // SG721 contract address
  // Get this after running `yarn minter`

  //// CONTRACT CODE IDs: Double Double Testnet ////
  // The code ID for sg721
  //sg721CodeId: 76,
  // The code ID for the minter contract
  //minterCodeId: 75,
  // The code ID for the whitelist contract
  //whitelistCodeId: 3,
  //marketplace:
  //  'stars154msvfvr3j37qpuqeq7neh00dh3dhzsf0cgflme9vwv7uqmjafns4dxrtr',

  // //// CONTRACT CODE IDs: Mainnet ////
  // // The code ID for sg721
   sg721CodeId: 1,
  // // The code ID for the minter contract
   minterCodeId: 2,
  // // The code ID for the whitelist contract
   whitelistCodeId: 3,
     marketplace:
         'stars1fvhcnyddukcqfnt7nlwv3thm5we22lyxyxylr9h77cvgkcn43xfsvgv0pl',
};
