import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BedroomNftLinkedToWallet,
  BedroomNftUnlinkedFromWallet,
  UpgradeNftLinkedToBedroomNft,
  UpgradeNftLinkedToWallet,
  UpgradeNftUnlinkedFromBedroomNft,
  UpgradeNftUnlinkedFromWallet
} from "../generated/Tracker/Tracker"

export function createBedroomNftLinkedToWalletEvent(
  bedroomNftId: BigInt,
  owner: Address
): BedroomNftLinkedToWallet {
  let bedroomNftLinkedToWalletEvent = changetype<BedroomNftLinkedToWallet>(
    newMockEvent()
  )

  bedroomNftLinkedToWalletEvent.parameters = new Array()

  bedroomNftLinkedToWalletEvent.parameters.push(
    new ethereum.EventParam(
      "bedroomNftId",
      ethereum.Value.fromUnsignedBigInt(bedroomNftId)
    )
  )
  bedroomNftLinkedToWalletEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return bedroomNftLinkedToWalletEvent
}

export function createBedroomNftUnlinkedFromWalletEvent(
  bedroomNftId: BigInt,
  owner: Address
): BedroomNftUnlinkedFromWallet {
  let bedroomNftUnlinkedFromWalletEvent = changetype<
    BedroomNftUnlinkedFromWallet
  >(newMockEvent())

  bedroomNftUnlinkedFromWalletEvent.parameters = new Array()

  bedroomNftUnlinkedFromWalletEvent.parameters.push(
    new ethereum.EventParam(
      "bedroomNftId",
      ethereum.Value.fromUnsignedBigInt(bedroomNftId)
    )
  )
  bedroomNftUnlinkedFromWalletEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return bedroomNftUnlinkedFromWalletEvent
}

export function createUpgradeNftLinkedToBedroomNftEvent(
  upgradeNftId: BigInt,
  bedroomNftId: BigInt
): UpgradeNftLinkedToBedroomNft {
  let upgradeNftLinkedToBedroomNftEvent = changetype<
    UpgradeNftLinkedToBedroomNft
  >(newMockEvent())

  upgradeNftLinkedToBedroomNftEvent.parameters = new Array()

  upgradeNftLinkedToBedroomNftEvent.parameters.push(
    new ethereum.EventParam(
      "upgradeNftId",
      ethereum.Value.fromUnsignedBigInt(upgradeNftId)
    )
  )
  upgradeNftLinkedToBedroomNftEvent.parameters.push(
    new ethereum.EventParam(
      "bedroomNftId",
      ethereum.Value.fromUnsignedBigInt(bedroomNftId)
    )
  )

  return upgradeNftLinkedToBedroomNftEvent
}

export function createUpgradeNftLinkedToWalletEvent(
  upgradeNftId: BigInt,
  owner: Address
): UpgradeNftLinkedToWallet {
  let upgradeNftLinkedToWalletEvent = changetype<UpgradeNftLinkedToWallet>(
    newMockEvent()
  )

  upgradeNftLinkedToWalletEvent.parameters = new Array()

  upgradeNftLinkedToWalletEvent.parameters.push(
    new ethereum.EventParam(
      "upgradeNftId",
      ethereum.Value.fromUnsignedBigInt(upgradeNftId)
    )
  )
  upgradeNftLinkedToWalletEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return upgradeNftLinkedToWalletEvent
}

export function createUpgradeNftUnlinkedFromBedroomNftEvent(
  upgradeNftId: BigInt,
  bedroomNftId: BigInt
): UpgradeNftUnlinkedFromBedroomNft {
  let upgradeNftUnlinkedFromBedroomNftEvent = changetype<
    UpgradeNftUnlinkedFromBedroomNft
  >(newMockEvent())

  upgradeNftUnlinkedFromBedroomNftEvent.parameters = new Array()

  upgradeNftUnlinkedFromBedroomNftEvent.parameters.push(
    new ethereum.EventParam(
      "upgradeNftId",
      ethereum.Value.fromUnsignedBigInt(upgradeNftId)
    )
  )
  upgradeNftUnlinkedFromBedroomNftEvent.parameters.push(
    new ethereum.EventParam(
      "bedroomNftId",
      ethereum.Value.fromUnsignedBigInt(bedroomNftId)
    )
  )

  return upgradeNftUnlinkedFromBedroomNftEvent
}

export function createUpgradeNftUnlinkedFromWalletEvent(
  upgradeNftId: BigInt,
  owner: Address
): UpgradeNftUnlinkedFromWallet {
  let upgradeNftUnlinkedFromWalletEvent = changetype<
    UpgradeNftUnlinkedFromWallet
  >(newMockEvent())

  upgradeNftUnlinkedFromWalletEvent.parameters = new Array()

  upgradeNftUnlinkedFromWalletEvent.parameters.push(
    new ethereum.EventParam(
      "upgradeNftId",
      ethereum.Value.fromUnsignedBigInt(upgradeNftId)
    )
  )
  upgradeNftUnlinkedFromWalletEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return upgradeNftUnlinkedFromWalletEvent
}
