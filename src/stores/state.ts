import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import type { AttackType, CloneEncounterPosition, ClonePosition, IslandType, Role, TetherClonePosition, TowerType } from '../lib/ffxiv'

/** 自分のロール */
export const roleAtom = atomWithStorage<Role | undefined>('role', undefined)

/** 最初の分身出現位置 */
export const cloneEncounterPositionAtom = atom<CloneEncounterPosition>()

/** 安全地帯の位置（Aマーカー両側 または Cマーカー両側）*/
export const safeAreaAtom = atom<ClonePosition>()

/** プレイヤーへの分身の線接続方向 */
export const playerPositionAtom = atom<TetherClonePosition>()

/** 最初の攻撃種類 */
export const firstAttackAtom = atom<AttackType>()

/** 自分の位置の塔種類 */
export const towerTypeAtom = atom<TowerType>()

/** ブラックホールに吸い込まれた分身（12時 または 6時）*/
export const swallowedCloneAtom = atom<ClonePosition>()

/** 安全な島 */
export const safeIslandAtom = atom<IslandType>()
