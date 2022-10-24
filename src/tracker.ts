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
import { BEDROOM_NFT_ADDRESS } from "./helpers";

// handle BedroomNftMinted event
export function handleBedroomNftMinted(
  event: BedroomNftMintedEvent
): void {
  // Create BedroomNft entity
  let bedroomNft = new BedroomNftEntity(event.params.tokenId.toString());
  const bedroomNftInstance = BedroomNft.bind(event.address);
  const data = bedroomNftInstance.getData(event.params.tokenId);
  const uri = bedroomNftInstance.uri(event.params.tokenId);
  bedroomNft.tokenId = event.params.tokenId;
  bedroomNft.owner = event.params.owner;
  bedroomNft.ambianceScore = data.value0;
  bedroomNft.qualityScore = data.value1;
  bedroomNft.luckScore = data.value2;
  bedroomNft.comfortabilityScore = data.value3;
  bedroomNft.level = data.value5;
  bedroomNft.value = data.value6;
  bedroomNft.designUri = uri;
  bedroomNft.save();
  // Create BedroomNftMinted entity
  let bedroomNftMinted = new BedroomNftMinted(event.transaction.hash.toHex());
  bedroomNftMinted.bedroomNft = bedroomNft.id;
  bedroomNftMinted.timestamp = event.block.timestamp;
  bedroomNftMinted.save();
  // Create NftsMinted entity
  let nftsMinted = NftsMinted.load("1");
  if (nftsMinted == null) {
    nftsMinted = new NftsMinted("1");
  } 
  nftsMinted.bedroomNftCount = nftsMinted.bedroomNftCount.plus(BigInt.fromI32(1));
  nftsMinted.bedroomNfts.push(bedroomNft.id);
  nftsMinted.save();
  // Create NftsOwned entity
  let nftsOwned = NftsOwned.load(event.params.owner.toHex());
  if (nftsOwned == null) {
    nftsOwned = new NftsOwned(event.params.owner.toHex());
  }
  nftsOwned.bedroomNftCount = nftsOwned.bedroomNftCount.plus(BigInt.fromI32(1));
  nftsOwned.bedroomNfts.push(bedroomNft.id);
}

// handle UpgradeNftMinted event
export function handleUpgradeNftMinted(
  event: UpgradeNftMintedEvent
): void {
  // Create UpgradeNft entity
  let upgradeNft = UpgradeNftEntity.load(`${event.params.owner.toHex()}-${event.params.tokenId.toString()}`);
  if (upgradeNft == null) {
    upgradeNft = new UpgradeNftEntity(`${event.params.owner.toHex()}-${event.params.tokenId.toString()}`);
  }
  const upgradeNftInstance = UpgradeNft.bind(event.address);
  const data = upgradeNftInstance.getData(event.params.tokenId);
  const uri = upgradeNftInstance.uri(event.params.tokenId);
  upgradeNft.tokenId = event.params.tokenId;
  upgradeNft.owner = event.params.owner;
  upgradeNft.data = data.value0;
  upgradeNft.level = data.value1;
  upgradeNft.levelMin = data.value2;
  upgradeNft.value = data.value3;
  upgradeNft.valueToAdd = data.value4;
  upgradeNft.type = data.value5;
  upgradeNft.designUri = uri;
  upgradeNft.amount = upgradeNft.amount.plus(event.params.amount);
  upgradeNft.save();
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
  }
  nftsMinted.upgradeNfts.push(upgradeNft.id);
  nftsMinted.upgradeNftCount = nftsMinted.upgradeNftCount.plus(event.params.amount);
  nftsMinted.save();
  // Create NftsOwned entity
  let nftsOwned = NftsOwned.load(event.params.owner.toHex());
  if (nftsOwned == null) {
    nftsOwned = new NftsOwned(event.params.owner.toHex());
  }
  nftsOwned.upgradeNftCount = nftsOwned.upgradeNftCount.plus(event.params.amount);
  nftsOwned.bedroomNfts.push(upgradeNft.id);
  nftsOwned.save();
}

// handle BedroomNftLinkedToWallet event
export function handleBedroomNftLinkedToWallet(
  event: BedroomNftLinkedToWallet
): void { 
  // Load BedroomNft entity
  let bedroomNft = BedroomNftEntity.load(event.params.bedroomNftId.toString());
  if (bedroomNft == null) {
    bedroomNft = new BedroomNftEntity(event.params.bedroomNftId.toString());
  }
  // Update BedroomNft entity
  bedroomNft.owner = event.params.owner;
  bedroomNft.save();
  // Load NftsOwned entity 
  let nftsOwned = NftsOwned.load(event.params.owner.toHex());
  if (nftsOwned == null) {
    nftsOwned = new NftsOwned(event.params.owner.toHex());
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
  const bedroomNftId: string = bedroomNft.id;
  const owner = bedroomNft.owner;
  // Update BedroomNft entity
  bedroomNft.owner = new Address(0x0000000000000000000000000000000000000000);
  bedroomNft.save();
  // Load NftsOwned entity
  let nftsOwned = NftsOwned.load(owner.toHex());
  if (nftsOwned == null) {
    return;
  } 
  // Update NftsOwned entity 
  nftsOwned.bedroomNftCount = nftsOwned.bedroomNftCount.minus(BigInt.fromI32(1));
  let index = nftsOwned.bedroomNfts.indexOf(bedroomNftId);
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
  } 
  // Load UpgradeNft entity
  let upgradeNft = UpgradeNftEntity.load(`${event.params.owner.toHex()}-${event.params.upgradeNftId.toString()}`);
  if (upgradeNft == null) {
    upgradeNft = new UpgradeNftEntity(`${event.params.owner.toHex()}-${event.params.upgradeNftId.toString()}`);
    nftsOwned.upgradeNfts.push(upgradeNft.id);
  }
  // Update UpgradeNft entity
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
  const upgradeNftId: string = upgradeNft.id;
  // Update UpgradeNft entity
  upgradeNft.amount = upgradeNft.amount.minus(event.params.amount);
  upgradeNft.owner = new Address(0x0000000000000000000000000000000000000000);
  upgradeNft.save();
  // Update NftsOwned entity 
  nftsOwned.upgradeNftCount = nftsOwned.upgradeNftCount.minus(event.params.amount);
  if (upgradeNft.amount.equals(BigInt.fromI32(0))) {
    let index = nftsOwned.upgradeNfts.indexOf(upgradeNftId);
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
