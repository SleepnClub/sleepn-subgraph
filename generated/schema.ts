// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class NftsMinted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NftsMinted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NftsMinted must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NftsMinted", id.toString(), this);
    }
  }

  static load(id: string): NftsMinted | null {
    return changetype<NftsMinted | null>(store.get("NftsMinted", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bedroomNftCount(): BigInt {
    let value = this.get("bedroomNftCount");
    return value!.toBigInt();
  }

  set bedroomNftCount(value: BigInt) {
    this.set("bedroomNftCount", Value.fromBigInt(value));
  }

  get upgradeNftCount(): BigInt {
    let value = this.get("upgradeNftCount");
    return value!.toBigInt();
  }

  set upgradeNftCount(value: BigInt) {
    this.set("upgradeNftCount", Value.fromBigInt(value));
  }

  get bedroomNfts(): Array<string> {
    let value = this.get("bedroomNfts");
    return value!.toStringArray();
  }

  set bedroomNfts(value: Array<string>) {
    this.set("bedroomNfts", Value.fromStringArray(value));
  }

  get upgradeNfts(): Array<string> {
    let value = this.get("upgradeNfts");
    return value!.toStringArray();
  }

  set upgradeNfts(value: Array<string>) {
    this.set("upgradeNfts", Value.fromStringArray(value));
  }
}

export class NftsOwned extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NftsOwned entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NftsOwned must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NftsOwned", id.toString(), this);
    }
  }

  static load(id: string): NftsOwned | null {
    return changetype<NftsOwned | null>(store.get("NftsOwned", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get bedroomNftCount(): BigInt {
    let value = this.get("bedroomNftCount");
    return value!.toBigInt();
  }

  set bedroomNftCount(value: BigInt) {
    this.set("bedroomNftCount", Value.fromBigInt(value));
  }

  get upgradeNftCount(): BigInt {
    let value = this.get("upgradeNftCount");
    return value!.toBigInt();
  }

  set upgradeNftCount(value: BigInt) {
    this.set("upgradeNftCount", Value.fromBigInt(value));
  }

  get bedroomNfts(): Array<string> {
    let value = this.get("bedroomNfts");
    return value!.toStringArray();
  }

  set bedroomNfts(value: Array<string>) {
    this.set("bedroomNfts", Value.fromStringArray(value));
  }

  get upgradeNfts(): Array<string> {
    let value = this.get("upgradeNfts");
    return value!.toStringArray();
  }

  set upgradeNfts(value: Array<string>) {
    this.set("upgradeNfts", Value.fromStringArray(value));
  }
}

export class BedroomNft extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BedroomNft entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type BedroomNft must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("BedroomNft", id.toString(), this);
    }
  }

  static load(id: string): BedroomNft | null {
    return changetype<BedroomNft | null>(store.get("BedroomNft", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get upgradeNfts(): Array<string> {
    let value = this.get("upgradeNfts");
    return value!.toStringArray();
  }

  set upgradeNfts(value: Array<string>) {
    this.set("upgradeNfts", Value.fromStringArray(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get ambianceScore(): i32 {
    let value = this.get("ambianceScore");
    return value!.toI32();
  }

  set ambianceScore(value: i32) {
    this.set("ambianceScore", Value.fromI32(value));
  }

  get qualityScore(): i32 {
    let value = this.get("qualityScore");
    return value!.toI32();
  }

  set qualityScore(value: i32) {
    this.set("qualityScore", Value.fromI32(value));
  }

  get luckScore(): i32 {
    let value = this.get("luckScore");
    return value!.toI32();
  }

  set luckScore(value: i32) {
    this.set("luckScore", Value.fromI32(value));
  }

  get comfortabilityScore(): i32 {
    let value = this.get("comfortabilityScore");
    return value!.toI32();
  }

  set comfortabilityScore(value: i32) {
    this.set("comfortabilityScore", Value.fromI32(value));
  }

  get totalScore(): i32 {
    let value = this.get("totalScore");
    return value!.toI32();
  }

  set totalScore(value: i32) {
    this.set("totalScore", Value.fromI32(value));
  }

  get level(): BigInt {
    let value = this.get("level");
    return value!.toBigInt();
  }

  set level(value: BigInt) {
    this.set("level", Value.fromBigInt(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get designUri(): string {
    let value = this.get("designUri");
    return value!.toString();
  }

  set designUri(value: string) {
    this.set("designUri", Value.fromString(value));
  }
}

export class UpgradeNft extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UpgradeNft entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UpgradeNft must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UpgradeNft", id.toString(), this);
    }
  }

  static load(id: string): UpgradeNft | null {
    return changetype<UpgradeNft | null>(store.get("UpgradeNft", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get designUri(): string {
    let value = this.get("designUri");
    return value!.toString();
  }

  set designUri(value: string) {
    this.set("designUri", Value.fromString(value));
  }

  get data(): i32 {
    let value = this.get("data");
    return value!.toI32();
  }

  set data(value: i32) {
    this.set("data", Value.fromI32(value));
  }

  get level(): i32 {
    let value = this.get("level");
    return value!.toI32();
  }

  set level(value: i32) {
    this.set("level", Value.fromI32(value));
  }

  get levelMin(): i32 {
    let value = this.get("levelMin");
    return value!.toI32();
  }

  set levelMin(value: i32) {
    this.set("levelMin", Value.fromI32(value));
  }

  get value(): i32 {
    let value = this.get("value");
    return value!.toI32();
  }

  set value(value: i32) {
    this.set("value", Value.fromI32(value));
  }

  get attributeIndex(): i32 {
    let value = this.get("attributeIndex");
    return value!.toI32();
  }

  set attributeIndex(value: i32) {
    this.set("attributeIndex", Value.fromI32(value));
  }

  get valueToAdd(): i32 {
    let value = this.get("valueToAdd");
    return value!.toI32();
  }

  set valueToAdd(value: i32) {
    this.set("valueToAdd", Value.fromI32(value));
  }

  get type(): i32 {
    let value = this.get("type");
    return value!.toI32();
  }

  set type(value: i32) {
    this.set("type", Value.fromI32(value));
  }

  get bedroomNft(): string {
    let value = this.get("bedroomNft");
    return value!.toString();
  }

  set bedroomNft(value: string) {
    this.set("bedroomNft", Value.fromString(value));
  }
}

export class BedroomNftMinted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BedroomNftMinted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type BedroomNftMinted must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("BedroomNftMinted", id.toString(), this);
    }
  }

  static load(id: string): BedroomNftMinted | null {
    return changetype<BedroomNftMinted | null>(
      store.get("BedroomNftMinted", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bedroomNft(): string {
    let value = this.get("bedroomNft");
    return value!.toString();
  }

  set bedroomNft(value: string) {
    this.set("bedroomNft", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class UpgradeNftMinted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UpgradeNftMinted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UpgradeNftMinted must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UpgradeNftMinted", id.toString(), this);
    }
  }

  static load(id: string): UpgradeNftMinted | null {
    return changetype<UpgradeNftMinted | null>(
      store.get("UpgradeNftMinted", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get upgradeNft(): string {
    let value = this.get("upgradeNft");
    return value!.toString();
  }

  set upgradeNft(value: string) {
    this.set("upgradeNft", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class UpgradeNftLinked extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UpgradeNftLinked entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UpgradeNftLinked must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UpgradeNftLinked", id.toString(), this);
    }
  }

  static load(id: string): UpgradeNftLinked | null {
    return changetype<UpgradeNftLinked | null>(
      store.get("UpgradeNftLinked", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get isLinked(): boolean {
    let value = this.get("isLinked");
    return value!.toBoolean();
  }

  set isLinked(value: boolean) {
    this.set("isLinked", Value.fromBoolean(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get upgradeNft(): string {
    let value = this.get("upgradeNft");
    return value!.toString();
  }

  set upgradeNft(value: string) {
    this.set("upgradeNft", Value.fromString(value));
  }

  get bedroomNft(): string {
    let value = this.get("bedroomNft");
    return value!.toString();
  }

  set bedroomNft(value: string) {
    this.set("bedroomNft", Value.fromString(value));
  }

  get newDesignUri(): string {
    let value = this.get("newDesignUri");
    return value!.toString();
  }

  set newDesignUri(value: string) {
    this.set("newDesignUri", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}
