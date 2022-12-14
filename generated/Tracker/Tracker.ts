// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BedroomNftLinkedToWallet extends ethereum.Event {
  get params(): BedroomNftLinkedToWallet__Params {
    return new BedroomNftLinkedToWallet__Params(this);
  }
}

export class BedroomNftLinkedToWallet__Params {
  _event: BedroomNftLinkedToWallet;

  constructor(event: BedroomNftLinkedToWallet) {
    this._event = event;
  }

  get bedroomNftId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BedroomNftUnlinkedFromWallet extends ethereum.Event {
  get params(): BedroomNftUnlinkedFromWallet__Params {
    return new BedroomNftUnlinkedFromWallet__Params(this);
  }
}

export class BedroomNftUnlinkedFromWallet__Params {
  _event: BedroomNftUnlinkedFromWallet;

  constructor(event: BedroomNftUnlinkedFromWallet) {
    this._event = event;
  }

  get bedroomNftId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class UpgradeNftLinkedToBedroomNft extends ethereum.Event {
  get params(): UpgradeNftLinkedToBedroomNft__Params {
    return new UpgradeNftLinkedToBedroomNft__Params(this);
  }
}

export class UpgradeNftLinkedToBedroomNft__Params {
  _event: UpgradeNftLinkedToBedroomNft;

  constructor(event: UpgradeNftLinkedToBedroomNft) {
    this._event = event;
  }

  get upgradeNftId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get bedroomNftId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UpgradeNftLinkedToWallet extends ethereum.Event {
  get params(): UpgradeNftLinkedToWallet__Params {
    return new UpgradeNftLinkedToWallet__Params(this);
  }
}

export class UpgradeNftLinkedToWallet__Params {
  _event: UpgradeNftLinkedToWallet;

  constructor(event: UpgradeNftLinkedToWallet) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get upgradeNftId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UpgradeNftUnlinkedFromBedroomNft extends ethereum.Event {
  get params(): UpgradeNftUnlinkedFromBedroomNft__Params {
    return new UpgradeNftUnlinkedFromBedroomNft__Params(this);
  }
}

export class UpgradeNftUnlinkedFromBedroomNft__Params {
  _event: UpgradeNftUnlinkedFromBedroomNft;

  constructor(event: UpgradeNftUnlinkedFromBedroomNft) {
    this._event = event;
  }

  get upgradeNftId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get bedroomNftId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UpgradeNftUnlinkedFromWallet extends ethereum.Event {
  get params(): UpgradeNftUnlinkedFromWallet__Params {
    return new UpgradeNftUnlinkedFromWallet__Params(this);
  }
}

export class UpgradeNftUnlinkedFromWallet__Params {
  _event: UpgradeNftUnlinkedFromWallet;

  constructor(event: UpgradeNftUnlinkedFromWallet) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get upgradeNftId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Tracker__getNftsIDResult {
  value0: Array<BigInt>;
  value1: Array<BigInt>;

  constructor(value0: Array<BigInt>, value1: Array<BigInt>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    return map;
  }

  get_bedroomNfts(): Array<BigInt> {
    return this.value0;
  }

  get_upgradeNfts(): Array<BigInt> {
    return this.value1;
  }
}

export class Tracker__getUpgradeNftAmountsResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getAmountOwned(): BigInt {
    return this.value0;
  }

  getAmountUsed(): BigInt {
    return this.value1;
  }
}

export class Tracker extends ethereum.SmartContract {
  static bind(address: Address): Tracker {
    return new Tracker("Tracker", address);
  }

  addBedroomNft(_owner: Address, _tokenId: BigInt): boolean {
    let result = super.call(
      "addBedroomNft",
      "addBedroomNft(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );

    return result[0].toBoolean();
  }

  try_addBedroomNft(
    _owner: Address,
    _tokenId: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "addBedroomNft",
      "addBedroomNft(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  addUpgradeNft(_owner: Address, _tokenId: BigInt, _amount: BigInt): boolean {
    let result = super.call(
      "addUpgradeNft",
      "addUpgradeNft(address,uint256,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_addUpgradeNft(
    _owner: Address,
    _tokenId: BigInt,
    _amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "addUpgradeNft",
      "addUpgradeNft(address,uint256,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  bedroomNftContract(): Address {
    let result = super.call(
      "bedroomNftContract",
      "bedroomNftContract():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_bedroomNftContract(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "bedroomNftContract",
      "bedroomNftContract():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getBedroomNftsAmount(_owner: Address): BigInt {
    let result = super.call(
      "getBedroomNftsAmount",
      "getBedroomNftsAmount(address):(uint256)",
      [ethereum.Value.fromAddress(_owner)]
    );

    return result[0].toBigInt();
  }

  try_getBedroomNftsAmount(_owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getBedroomNftsAmount",
      "getBedroomNftsAmount(address):(uint256)",
      [ethereum.Value.fromAddress(_owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNftsID(_owner: Address): Tracker__getNftsIDResult {
    let result = super.call(
      "getNftsID",
      "getNftsID(address):(uint256[],uint256[])",
      [ethereum.Value.fromAddress(_owner)]
    );

    return new Tracker__getNftsIDResult(
      result[0].toBigIntArray(),
      result[1].toBigIntArray()
    );
  }

  try_getNftsID(
    _owner: Address
  ): ethereum.CallResult<Tracker__getNftsIDResult> {
    let result = super.tryCall(
      "getNftsID",
      "getNftsID(address):(uint256[],uint256[])",
      [ethereum.Value.fromAddress(_owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Tracker__getNftsIDResult(
        value[0].toBigIntArray(),
        value[1].toBigIntArray()
      )
    );
  }

  getUpgradeNftAmounts(
    _owner: Address,
    _tokenId: BigInt
  ): Tracker__getUpgradeNftAmountsResult {
    let result = super.call(
      "getUpgradeNftAmounts",
      "getUpgradeNftAmounts(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );

    return new Tracker__getUpgradeNftAmountsResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getUpgradeNftAmounts(
    _owner: Address,
    _tokenId: BigInt
  ): ethereum.CallResult<Tracker__getUpgradeNftAmountsResult> {
    let result = super.tryCall(
      "getUpgradeNftAmounts",
      "getUpgradeNftAmounts(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Tracker__getUpgradeNftAmountsResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getUpgradeNftOwners(_tokenId: BigInt): Array<Address> {
    let result = super.call(
      "getUpgradeNftOwners",
      "getUpgradeNftOwners(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return result[0].toAddressArray();
  }

  try_getUpgradeNftOwners(
    _tokenId: BigInt
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getUpgradeNftOwners",
      "getUpgradeNftOwners(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getUpgradeNftSettled(): Array<BigInt> {
    let result = super.call(
      "getUpgradeNftSettled",
      "getUpgradeNftSettled():(uint256[])",
      []
    );

    return result[0].toBigIntArray();
  }

  try_getUpgradeNftSettled(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getUpgradeNftSettled",
      "getUpgradeNftSettled():(uint256[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getUpgradeNfts(_bedroomNftId: BigInt): Array<BigInt> {
    let result = super.call(
      "getUpgradeNfts",
      "getUpgradeNfts(uint256):(uint256[])",
      [ethereum.Value.fromUnsignedBigInt(_bedroomNftId)]
    );

    return result[0].toBigIntArray();
  }

  try_getUpgradeNfts(
    _bedroomNftId: BigInt
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getUpgradeNfts",
      "getUpgradeNfts(uint256):(uint256[])",
      [ethereum.Value.fromUnsignedBigInt(_bedroomNftId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getUpgradeNftsAmount(_owner: Address): BigInt {
    let result = super.call(
      "getUpgradeNftsAmount",
      "getUpgradeNftsAmount(address):(uint256)",
      [ethereum.Value.fromAddress(_owner)]
    );

    return result[0].toBigInt();
  }

  try_getUpgradeNftsAmount(_owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUpgradeNftsAmount",
      "getUpgradeNftsAmount(address):(uint256)",
      [ethereum.Value.fromAddress(_owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isBedroomNftOwner(_tokenId: BigInt, _wallet: Address): boolean {
    let result = super.call(
      "isBedroomNftOwner",
      "isBedroomNftOwner(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_wallet)
      ]
    );

    return result[0].toBoolean();
  }

  try_isBedroomNftOwner(
    _tokenId: BigInt,
    _wallet: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isBedroomNftOwner",
      "isBedroomNftOwner(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_wallet)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isIdSettled(_tokenId: BigInt): boolean {
    let result = super.call("isIdSettled", "isIdSettled(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toBoolean();
  }

  try_isIdSettled(_tokenId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isIdSettled", "isIdSettled(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isUpgradeNftOwner(_tokenId: BigInt, _wallet: Address): boolean {
    let result = super.call(
      "isUpgradeNftOwner",
      "isUpgradeNftOwner(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_wallet)
      ]
    );

    return result[0].toBoolean();
  }

  try_isUpgradeNftOwner(
    _tokenId: BigInt,
    _wallet: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isUpgradeNftOwner",
      "isUpgradeNftOwner(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_wallet)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  linkUpgradeNft(
    _owner: Address,
    _bedroomNftId: BigInt,
    _upgradeNftId: BigInt,
    _amount: BigInt
  ): boolean {
    let result = super.call(
      "linkUpgradeNft",
      "linkUpgradeNft(address,uint256,uint256,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_bedroomNftId),
        ethereum.Value.fromUnsignedBigInt(_upgradeNftId),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_linkUpgradeNft(
    _owner: Address,
    _bedroomNftId: BigInt,
    _upgradeNftId: BigInt,
    _amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "linkUpgradeNft",
      "linkUpgradeNft(address,uint256,uint256,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_bedroomNftId),
        ethereum.Value.fromUnsignedBigInt(_upgradeNftId),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  removeBedroomNft(
    _owner: Address,
    _newOwner: Address,
    _tokenId: BigInt
  ): boolean {
    let result = super.call(
      "removeBedroomNft",
      "removeBedroomNft(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_newOwner),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );

    return result[0].toBoolean();
  }

  try_removeBedroomNft(
    _owner: Address,
    _newOwner: Address,
    _tokenId: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "removeBedroomNft",
      "removeBedroomNft(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_newOwner),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  removeUpgradeNft(
    _owner: Address,
    _tokenId: BigInt,
    _amount: BigInt
  ): boolean {
    let result = super.call(
      "removeUpgradeNft",
      "removeUpgradeNft(address,uint256,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_removeUpgradeNft(
    _owner: Address,
    _tokenId: BigInt,
    _amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "removeUpgradeNft",
      "removeUpgradeNft(address,uint256,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  unlinkUpgradeNft(
    _owner: Address,
    _bedroomNftId: BigInt,
    _upgradeNftId: BigInt,
    _amount: BigInt
  ): boolean {
    let result = super.call(
      "unlinkUpgradeNft",
      "unlinkUpgradeNft(address,uint256,uint256,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_bedroomNftId),
        ethereum.Value.fromUnsignedBigInt(_upgradeNftId),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_unlinkUpgradeNft(
    _owner: Address,
    _bedroomNftId: BigInt,
    _upgradeNftId: BigInt,
    _amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "unlinkUpgradeNft",
      "unlinkUpgradeNft(address,uint256,uint256,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_bedroomNftId),
        ethereum.Value.fromUnsignedBigInt(_upgradeNftId),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  upgradeNftContract(): Address {
    let result = super.call(
      "upgradeNftContract",
      "upgradeNftContract():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_upgradeNftContract(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "upgradeNftContract",
      "upgradeNftContract():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  upgraderContract(): Address {
    let result = super.call(
      "upgraderContract",
      "upgraderContract():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_upgraderContract(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "upgraderContract",
      "upgraderContract():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _bedroomNftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _upgradeNftAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddBedroomNftCall extends ethereum.Call {
  get inputs(): AddBedroomNftCall__Inputs {
    return new AddBedroomNftCall__Inputs(this);
  }

  get outputs(): AddBedroomNftCall__Outputs {
    return new AddBedroomNftCall__Outputs(this);
  }
}

export class AddBedroomNftCall__Inputs {
  _call: AddBedroomNftCall;

  constructor(call: AddBedroomNftCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddBedroomNftCall__Outputs {
  _call: AddBedroomNftCall;

  constructor(call: AddBedroomNftCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class AddUpgradeNftCall extends ethereum.Call {
  get inputs(): AddUpgradeNftCall__Inputs {
    return new AddUpgradeNftCall__Inputs(this);
  }

  get outputs(): AddUpgradeNftCall__Outputs {
    return new AddUpgradeNftCall__Outputs(this);
  }
}

export class AddUpgradeNftCall__Inputs {
  _call: AddUpgradeNftCall;

  constructor(call: AddUpgradeNftCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class AddUpgradeNftCall__Outputs {
  _call: AddUpgradeNftCall;

  constructor(call: AddUpgradeNftCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class LinkUpgradeNftCall extends ethereum.Call {
  get inputs(): LinkUpgradeNftCall__Inputs {
    return new LinkUpgradeNftCall__Inputs(this);
  }

  get outputs(): LinkUpgradeNftCall__Outputs {
    return new LinkUpgradeNftCall__Outputs(this);
  }
}

export class LinkUpgradeNftCall__Inputs {
  _call: LinkUpgradeNftCall;

  constructor(call: LinkUpgradeNftCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bedroomNftId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _upgradeNftId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class LinkUpgradeNftCall__Outputs {
  _call: LinkUpgradeNftCall;

  constructor(call: LinkUpgradeNftCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RemoveBedroomNftCall extends ethereum.Call {
  get inputs(): RemoveBedroomNftCall__Inputs {
    return new RemoveBedroomNftCall__Inputs(this);
  }

  get outputs(): RemoveBedroomNftCall__Outputs {
    return new RemoveBedroomNftCall__Outputs(this);
  }
}

export class RemoveBedroomNftCall__Inputs {
  _call: RemoveBedroomNftCall;

  constructor(call: RemoveBedroomNftCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _newOwner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class RemoveBedroomNftCall__Outputs {
  _call: RemoveBedroomNftCall;

  constructor(call: RemoveBedroomNftCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RemoveUpgradeNftCall extends ethereum.Call {
  get inputs(): RemoveUpgradeNftCall__Inputs {
    return new RemoveUpgradeNftCall__Inputs(this);
  }

  get outputs(): RemoveUpgradeNftCall__Outputs {
    return new RemoveUpgradeNftCall__Outputs(this);
  }
}

export class RemoveUpgradeNftCall__Inputs {
  _call: RemoveUpgradeNftCall;

  constructor(call: RemoveUpgradeNftCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class RemoveUpgradeNftCall__Outputs {
  _call: RemoveUpgradeNftCall;

  constructor(call: RemoveUpgradeNftCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SettleUpgradeNftDataCall extends ethereum.Call {
  get inputs(): SettleUpgradeNftDataCall__Inputs {
    return new SettleUpgradeNftDataCall__Inputs(this);
  }

  get outputs(): SettleUpgradeNftDataCall__Outputs {
    return new SettleUpgradeNftDataCall__Outputs(this);
  }
}

export class SettleUpgradeNftDataCall__Inputs {
  _call: SettleUpgradeNftDataCall;

  constructor(call: SettleUpgradeNftDataCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SettleUpgradeNftDataCall__Outputs {
  _call: SettleUpgradeNftDataCall;

  constructor(call: SettleUpgradeNftDataCall) {
    this._call = call;
  }
}

export class UnlinkUpgradeNftCall extends ethereum.Call {
  get inputs(): UnlinkUpgradeNftCall__Inputs {
    return new UnlinkUpgradeNftCall__Inputs(this);
  }

  get outputs(): UnlinkUpgradeNftCall__Outputs {
    return new UnlinkUpgradeNftCall__Outputs(this);
  }
}

export class UnlinkUpgradeNftCall__Inputs {
  _call: UnlinkUpgradeNftCall;

  constructor(call: UnlinkUpgradeNftCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bedroomNftId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _upgradeNftId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class UnlinkUpgradeNftCall__Outputs {
  _call: UnlinkUpgradeNftCall;

  constructor(call: UnlinkUpgradeNftCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
