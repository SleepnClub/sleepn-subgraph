import { BigInt, Address } from "@graphprotocol/graph-ts";
import {
  BedroomNftLinkedToWallet,
  BedroomNftUnlinkedFromWallet,
  UpgradeNftLinkedToBedroomNft,
  UpgradeNftLinkedToWallet,
  UpgradeNftUnlinkedFromBedroomNft,
  UpgradeNftUnlinkedFromWallet,
} from "../generated/Tracker/Tracker";
import {
  BedroomNft,
  BedroomNftMinted as BedroomNftMintedEvent
} from "../generated/BedroomNft/BedroomNft";
import {
  UpgradeNft,
  UpgradeNftMinted as UpgradeNftMintedEvent,
} from "../generated/UpgradeNft/UpgradeNft";
import {  
  NftsMinted,
  NftsOwned,
  UpgradeNft as UpgradeNftEntity,
  BedroomNft as BedroomNftEntity,
  BedroomNftMinted,
  UpgradeNftMinted,
  UpgradeNftLinked
} from "../generated/schema";

const BEDROOM_NFT_ADDRESS = "0x2AC6960E44ef6f4465Ea74Cc1a96fF0f7F05E5a3";
const UPGRADE_NFT_ADDRESS = "0xCBE4EC04ABb4593348f405B898Fa5a6DEcD325c6";

// handle BedroomNftMinted event
export function handleBedroomNftMinted(
  event: BedroomNftMintedEvent
): void {
  // Load BedroomNft entity
  let bedroomNft = BedroomNftEntity.load(event.params.tokenId.toString());
  if (bedroomNft == null) {
    return;
  }
  // Create BedroomNftMinted entity
  let bedroomNftMinted = new BedroomNftMinted(event.transaction.hash.toHex());
  bedroomNftMinted.bedroomNft = bedroomNft.id;
  bedroomNftMinted.timestamp = event.block.timestamp;
  bedroomNftMinted.save();
  // Create NftsMinted entity
  let nftsMinted = NftsMinted.load("1");
  if (nftsMinted == null) {
    nftsMinted = new NftsMinted("1");
    nftsMinted.bedroomNftCount = BigInt.fromI32(0);
    nftsMinted.upgradeNftCount = BigInt.fromI32(0);
    nftsMinted.bedroomNfts = [];
    nftsMinted.upgradeNfts = [];
  } 
  nftsMinted.bedroomNftCount = nftsMinted.bedroomNftCount.plus(BigInt.fromI32(1));
  nftsMinted.bedroomNfts.push(bedroomNft.id);
  nftsMinted.save();
}

// handle UpgradeNftMinted event
export function handleUpgradeNftMinted(
  event: UpgradeNftMintedEvent
): void {
  // Load UpgradeNft entity
  let upgradeNft = UpgradeNftEntity.load(`${event.params.owner.toHex()}-${event.params.tokenId.toString()}`);
  if (upgradeNft == null) {
    return;
  }
  // Create UpgradeNftMinted entity
  let upgradeNftMinted = new UpgradeNftMinted(event.transaction.hash.toHex());
  upgradeNftMinted.upgradeNft = upgradeNft.id;
  upgradeNftMinted.timestamp = event.block.timestamp;
  upgradeNftMinted.amount = event.params.amount;
  upgradeNftMinted.save();
  // Create NftsMinted entity
  let nftsMinted = NftsMinted.load("1");
  if (nftsMinted == null) {
    nftsMinted = new NftsMinted("1");
    nftsMinted.bedroomNftCount = BigInt.fromI32(0);
    nftsMinted.upgradeNftCount = BigInt.fromI32(0);
    nftsMinted.bedroomNfts = [];
    nftsMinted.upgradeNfts = [];
  }
  nftsMinted.upgradeNfts.push(upgradeNft.id);
  nftsMinted.upgradeNftCount = nftsMinted.upgradeNftCount.plus(event.params.amount);
  nftsMinted.save();
}

// handle BedroomNftLinkedToWallet event
export function handleBedroomNftLinkedToWallet(
  event: BedroomNftLinkedToWallet
): void { 
  // Load BedroomNft entity
  let bedroomNft = BedroomNftEntity.load(event.params.bedroomNftId.toString());
  if (bedroomNft == null) {
    bedroomNft = new BedroomNftEntity(event.params.bedroomNftId.toString());
    const bedroomNftInstance = BedroomNft.bind(Address.fromString(BEDROOM_NFT_ADDRESS));
    const data = bedroomNftInstance.getData(event.params.bedroomNftId);
    const uri = bedroomNftInstance.uri(event.params.bedroomNftId);
    bedroomNft.tokenId = event.params.bedroomNftId;
    bedroomNft.ambianceScore = data.value0;
    bedroomNft.qualityScore = data.value1;
    bedroomNft.luckScore = data.value2;
    bedroomNft.comfortabilityScore = data.value3;
    bedroomNft.level = data.value5;
    bedroomNft.value = data.value6;
    bedroomNft.designUri = uri;
    bedroomNft.totalScore = bedroomNft.ambianceScore + bedroomNft.qualityScore + bedroomNft.luckScore + bedroomNft.comfortabilityScore;
  }
  // Update BedroomNft entity
  bedroomNft.owner = event.params.owner;
  bedroomNft.save();
  // Load NftsOwned entity 
  let nftsOwned = NftsOwned.load(event.params.owner.toHex());
  if (nftsOwned == null) {
    nftsOwned = new NftsOwned(event.params.owner.toHex());
    nftsOwned.bedroomNftCount = BigInt.fromI32(0);
    nftsOwned.bedroomNfts = [];
    nftsOwned.upgradeNftCount = BigInt.fromI32(0);
    nftsOwned.upgradeNfts = [];
  } 
  // Update NftsOwned entity 
  nftsOwned.bedroomNftCount = nftsOwned.bedroomNftCount.plus(BigInt.fromI32(1));
  nftsOwned.bedroomNfts.push(bedroomNft.id);
  nftsOwned.save();
}

// handle BedroomNftLinkedToWallet event
export function handleBedroomNftUnlinkedFromWallet(
  event: BedroomNftUnlinkedFromWallet
): void { 
  // Load BedroomNft entity
  let bedroomNft = BedroomNftEntity.load(event.params.bedroomNftId.toString());
  if (bedroomNft == null) {
    return;
  }
  // Load NftsOwned entity
  let nftsOwned = NftsOwned.load(bedroomNft.owner.toHex());
  if (nftsOwned == null) {
    return;
  } 
  // Update NftsOwned entity 
  nftsOwned.bedroomNftCount = nftsOwned.bedroomNftCount.minus(BigInt.fromI32(1));
  let index = nftsOwned.bedroomNfts.indexOf(bedroomNft.id);
  nftsOwned.bedroomNfts = nftsOwned.bedroomNfts.splice(index, 1);
  nftsOwned.save(); 
}

// handle UpgradeNftLinkedToWallet event
export function handleUpgradeNftLinkedToWallet(
  event: UpgradeNftLinkedToWallet
): void { 
  // Load NftsOwned entity 
  let nftsOwned = NftsOwned.load(event.params.owner.toHex());
  if (nftsOwned == null) {
    nftsOwned = new NftsOwned(event.params.owner.toHex());
    nftsOwned.bedroomNftCount = BigInt.fromI32(0);
    nftsOwned.bedroomNfts = [];
    nftsOwned.upgradeNftCount = BigInt.fromI32(0);
    nftsOwned.upgradeNfts = [];
  } 
  // Load UpgradeNft entity
  let upgradeNft = UpgradeNftEntity.load(`${event.params.owner.toHex()}-${event.params.upgradeNftId.toString()}`);
  if (upgradeNft == null) {
    upgradeNft = new UpgradeNftEntity(`${event.params.owner.toHex()}-${event.params.upgradeNftId.toString()}`);
    const upgradeNftInstance = UpgradeNft.bind(Address.fromString(UPGRADE_NFT_ADDRESS));
    const data = upgradeNftInstance.getData(event.params.upgradeNftId);
    const uri = upgradeNftInstance.uri(event.params.upgradeNftId);
    upgradeNft.tokenId = event.params.upgradeNftId;
    upgradeNft.data = data.value0;
    upgradeNft.level = data.value1;
    upgradeNft.levelMin = data.value2;
    upgradeNft.value = data.value3;
    upgradeNft.valueToAdd = data.value4;
    upgradeNft.type = data.value5;
    upgradeNft.designUri = uri;
    upgradeNft.amount = BigInt.fromI32(0);
    nftsOwned.upgradeNfts.push(upgradeNft.id);
  }
  // Update UpgradeNft entity
  upgradeNft.owner = event.params.owner;
  upgradeNft.amount = upgradeNft.amount.plus(event.params.amount);
  upgradeNft.save();
  // Update NftsOwned entity 
  nftsOwned.upgradeNftCount = nftsOwned.upgradeNftCount.plus(event.params.amount);
  nftsOwned.save();
}

// handle UpgradeNftLinkedToWallet event
export function handleUpgradeNftUnlinkedFromWallet(
  event: UpgradeNftUnlinkedFromWallet
): void { 
  // Load NftsOwned entity 
  let nftsOwned = NftsOwned.load(event.params.owner.toHex());
  if (nftsOwned == null) {
    return;
  } 
  // Load UpgradeNft entity
  let upgradeNft = UpgradeNftEntity.load(`${event.params.owner.toHex()}-${event.params.upgradeNftId.toString()}`);
  if (upgradeNft == null) {
    return;
  }
  // Update UpgradeNft entity
  upgradeNft.amount = upgradeNft.amount.minus(event.params.amount);
  upgradeNft.save();
  // Update NftsOwned entity 
  nftsOwned.upgradeNftCount = nftsOwned.upgradeNftCount.minus(event.params.amount);
  if (upgradeNft.amount.equals(BigInt.fromI32(0))) {
    let index = nftsOwned.upgradeNfts.indexOf(upgradeNft.id);
    nftsOwned.upgradeNfts = nftsOwned.upgradeNfts.splice(index, 1);
  }
  nftsOwned.save();
}

// handle UpgradeNftLinkedToBedroomNft event
export function handleUpgradeNftLinkedToBedroomNft(
  event: UpgradeNftLinkedToBedroomNft
): void { 
  // Load BedroomNft entity
  let bedroomNft = BedroomNftEntity.load(event.params.bedroomNftId.toString());
  if (bedroomNft == null) {
    return;
  }
  const bedroomNftInstance = BedroomNft.bind(Address.fromString(BEDROOM_NFT_ADDRESS));
  const dataBedroomNft = bedroomNftInstance.getData(bedroomNft.tokenId);
  const uriBedroomNft = bedroomNftInstance.uri(bedroomNft.tokenId);
  // Load UpgradeNft entity
  let upgradeNft = UpgradeNftEntity.load(`${bedroomNft.owner}-${event.params.upgradeNftId.toString()}`);
  if (upgradeNft == null) {
    return;
  }
  // Update UpgradeNft entity
  upgradeNft.bedroomNft = bedroomNft.id;
  upgradeNft.save();
  // Update BedroomNft entity
  bedroomNft.ambianceScore = dataBedroomNft.value0;
  bedroomNft.qualityScore = dataBedroomNft.value1;
  bedroomNft.luckScore = dataBedroomNft.value2;
  bedroomNft.comfortabilityScore = dataBedroomNft.value3;
  bedroomNft.level = dataBedroomNft.value5;
  bedroomNft.value = dataBedroomNft.value6;
  bedroomNft.designUri = uriBedroomNft;
  bedroomNft.totalScore = bedroomNft.ambianceScore + bedroomNft.qualityScore + bedroomNft.luckScore + bedroomNft.comfortabilityScore;
  bedroomNft.save();
  // Create UpgradeNftLinked entity
  let upgradeNftLinked = new UpgradeNftLinked(event.transaction.hash.toHex());
  upgradeNftLinked.upgradeNft = upgradeNft.id;
  upgradeNftLinked.bedroomNft = bedroomNft.id;
  upgradeNftLinked.timestamp = event.block.timestamp;
  upgradeNftLinked.owner = bedroomNft.owner;
  upgradeNftLinked.newDesignUri = uriBedroomNft;
  upgradeNftLinked.isLinked = true;
  upgradeNftLinked.save();
}

// handle UpgradeNftUnlinkedFromBedroomNft event
export function handleUpgradeNftUnlinkedFromBedroomNft(
  event: UpgradeNftUnlinkedFromBedroomNft
): void { 
  // Load BedroomNft entity
  let bedroomNft = BedroomNftEntity.load(event.params.bedroomNftId.toString());
  if (bedroomNft == null) {
    return;
  }
  const bedroomNftInstance = BedroomNft.bind(Address.fromString(BEDROOM_NFT_ADDRESS));
  const dataBedroomNft = bedroomNftInstance.getData(bedroomNft.tokenId);
  const uriBedroomNft = bedroomNftInstance.uri(bedroomNft.tokenId);
  // Load UpgradeNft entity
  let upgradeNft = UpgradeNftEntity.load(`${bedroomNft.owner}-${event.params.upgradeNftId.toString()}`);
  if (upgradeNft == null) {
    return;
  }
  // Update UpgradeNft entity
  upgradeNft.bedroomNft = "";
  upgradeNft.save();
  // Update BedroomNft entity
  bedroomNft.ambianceScore = dataBedroomNft.value0;
  bedroomNft.qualityScore = dataBedroomNft.value1;
  bedroomNft.luckScore = dataBedroomNft.value2;
  bedroomNft.comfortabilityScore = dataBedroomNft.value3;
  bedroomNft.level = dataBedroomNft.value5;
  bedroomNft.value = dataBedroomNft.value6;
  bedroomNft.designUri = uriBedroomNft;
  bedroomNft.save();
  // Create UpgradeNftLinked entity
  let upgradeNftLinked = new UpgradeNftLinked(event.transaction.hash.toHex());
  upgradeNftLinked.upgradeNft = upgradeNft.id;
  upgradeNftLinked.bedroomNft = bedroomNft.id;
  upgradeNftLinked.timestamp = event.block.timestamp;
  upgradeNftLinked.owner = bedroomNft.owner;
  upgradeNftLinked.newDesignUri = uriBedroomNft;
  upgradeNftLinked.isLinked = false;
  upgradeNftLinked.save();
}
