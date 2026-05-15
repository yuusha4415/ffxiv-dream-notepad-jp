export type Role = 'MT' | 'ST' | 'H1' | 'H2' | 'D1' | 'D2' | 'D3' | 'D4'

export type RoleType = 'T' | 'H' | 'D'

export type RolePosition = 'melee' | 'ranged'

/** スタックグループ: メイン組 または サブ組 */
export type StackGroup = 1 | 2

/** 散開順序: 1番目 または 2番目 */
export type SpreadOrder = 1 | 2

/** グループ種類: 散開 または スタック */
export type GroupType = 'spread' | 'stack'

/** 担当塔位置: 四角形の頂点 */
export type TowerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

export type RoleInfo = {
  id: Role
  type: RoleType
  group: StackGroup
  position: RolePosition
  towerPosition: TowerPosition
}

export const roles: RoleInfo[] = [
  { id: 'MT', type: 'T', group: 1, position: 'melee', towerPosition: 'top-right' },
  { id: 'ST', type: 'T', group: 2, position: 'melee', towerPosition: 'bottom-left' },
  { id: 'H1', type: 'H', group: 1, position: 'ranged', towerPosition: 'bottom-left' },
  { id: 'H2', type: 'H', group: 2, position: 'ranged', towerPosition: 'top-right' },
  { id: 'D1', type: 'D', group: 1, position: 'melee', towerPosition: 'bottom-right' },
  { id: 'D2', type: 'D', group: 2, position: 'melee', towerPosition: 'top-left' },
  { id: 'D3', type: 'D', group: 1, position: 'ranged', towerPosition: 'top-left' },
  { id: 'D4', type: 'D', group: 2, position: 'ranged', towerPosition: 'bottom-right' },
]

/** 最初の分身出現位置: 十字 または X字 */
export type CloneEncounterPosition = 'plus' | 'cross'

export type CloneEncounterPositionInfo = {
  id: CloneEncounterPosition
  name: string
}

export const cloneEncounterPositions: CloneEncounterPositionInfo[] = [
  { id: 'plus', name: '十字' },
  { id: 'cross', name: 'X字' },
]

/** プレイヤーへの線が接続される分身位置: 8方位 */
export type TetherClonePosition = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW'

/** 床マーカー種類 */
export type WaymarkType = 'A' | 'B' | 'C' | 'D' | '1' | '2' | '3' | '4'

/** プレイヤーのヘッドマーカー種類: 攻撃、禁止、拘束 */
export type MarkerType = 'attack1' | 'attack2' | 'attack3' | 'attack4' | 'stop1' | 'stop2' | 'bind1' | 'bind2'

export type PlayerPositionInfo = {
  id: TetherClonePosition
  name: string
  waymark: WaymarkType
  marker: MarkerType
  group: StackGroup
  groupType: GroupType
  gridPosition: { row: number; col: number }
}

export const playerPositions: PlayerPositionInfo[] = [
  { id: 'N', name: 'Aマーカー', waymark: 'A', marker: 'attack1', group: 1, groupType: 'stack', gridPosition: { row: 1, col: 2 } },
  { id: 'NE', name: '1番マーカー', waymark: '1', marker: 'attack3', group: 1, groupType: 'stack', gridPosition: { row: 1, col: 3 } },
  { id: 'E', name: 'Bマーカー', waymark: 'B', marker: 'attack2', group: 2, groupType: 'stack', gridPosition: { row: 2, col: 3 } },
  { id: 'SE', name: '2番マーカー', waymark: '2', marker: 'attack4', group: 2, groupType: 'stack', gridPosition: { row: 3, col: 3 } },
  { id: 'S', name: 'Cマーカー', waymark: 'C', marker: 'stop1', group: 1, groupType: 'spread', gridPosition: { row: 3, col: 2 } },
  { id: 'SW', name: '3番マーカー', waymark: '3', marker: 'bind1', group: 1, groupType: 'spread', gridPosition: { row: 3, col: 1 } },
  { id: 'W', name: 'Dマーカー', waymark: 'D', marker: 'stop2', group: 2, groupType: 'spread', gridPosition: { row: 2, col: 1 } },
  { id: 'NW', name: '4番マーカー', waymark: '4', marker: 'bind2', group: 2, groupType: 'spread', gridPosition: { row: 1, col: 1 } },
]

/** 分身位置種類: Aマーカー または Cマーカー */
export type ClonePosition = 'A' | 'C'

export const safeAreas: ClonePosition[] = ['A', 'C']
export const swallowedClones: ClonePosition[] = ['A', 'C']

/** 攻撃種類: マナバースト（散開）または ヘビースラム（4人スタック）*/
export type AttackType = 'manaburst' | 'heavyslam'

export const attackTypes: AttackType[] = ['heavyslam', 'manaburst']

/** 塔種類: 火（待機）、土（竹の子）、風（ノックバック）、闇（竹の線）*/
export type TowerType = 'fire' | 'earth' | 'wind' | 'dark'

export type TowerInfo = {
  id: TowerType
  name: string
  color: string
}

export const topTowers: TowerInfo[] = [
  { id: 'wind', name: '風', color: '#a2c584' },
  { id: 'earth', name: '土', color: '#b97e62' },
]
export const bottomTowers: TowerInfo[] = [
  { id: 'fire', name: '火', color: '#e66163' },
  { id: 'dark', name: '闇', color: '#8b65a6' },
]

export type NearFarPosition = 'D6' | 'B6' | 'D3' | 'B9' | '2' | '4' | '2X' | '4X'

export const nearFarMapping: Record<`${RolePosition}-${StackGroup}-${TowerType}`, NearFarPosition> = {
  'melee-1-wind': 'B9',
  'melee-1-earth': '4X',
  'melee-1-fire': '4X',
  'melee-1-dark': '4',
  'melee-2-wind': 'D3',
  'melee-2-earth': '2X',
  'melee-2-fire': '2X',
  'melee-2-dark': '2',
  'ranged-1-wind': 'B9',
  'ranged-1-earth': 'D6',
  'ranged-1-fire': 'D6',
  'ranged-1-dark': '4',
  'ranged-2-wind': 'D3',
  'ranged-2-earth': 'B6',
  'ranged-2-fire': 'B6',
  'ranged-2-dark': '2',
}

/** 移動地点: 床マーカー または X（散開を避ける場所）*/
export type MovementPosition = WaymarkType | 'X'

/** パターン別移動経路 */
export const movementMapping: Record<
  `${TetherClonePosition}-${AttackType}`,
  [MovementPosition, MovementPosition, MovementPosition, MovementPosition]
> = {
  'N-heavyslam': ['1', 'X', '1', 'X'],
  'N-manaburst': ['X', '1', 'X', '1'],
  'NE-heavyslam': ['1', 'X', '1', 'X'],
  'NE-manaburst': ['X', '1', 'X', '1'],
  'E-heavyslam': ['2', 'X', '2', 'X'],
  'E-manaburst': ['X', '2', 'X', '2'],
  'SE-heavyslam': ['2', 'X', '2', 'X'],
  'SE-manaburst': ['X', '2', 'X', '2'],
  'S-heavyslam': ['1', 'D', '1', 'X'],
  'S-manaburst': ['D', '1', 'X', '1'],
  'SW-heavyslam': ['1', 'X', '1', 'D'],
  'SW-manaburst': ['X', '1', 'D', '1'],
  'W-heavyslam': ['2', 'C', '2', 'X'],
  'W-manaburst': ['C', '2', 'X', '2'],
  'NW-heavyslam': ['2', 'X', '2', 'C'],
  'NW-manaburst': ['X', '2', 'C', '2'],
}

export const movementPositionNames: Record<MovementPosition, { text: string; color: string; gimmick: string; urgent?: boolean }> = {
  '1': { text: '1番マーカー', color: '#FF6E6E', gimmick: 'スタック' },
  '2': { text: '2番マーカー', color: '#F3FB9C', gimmick: 'スタック' },
  '3': { text: '3番マーカー', color: '#9BECFE', gimmick: '?' },
  '4': { text: '4番マーカー', color: '#C878FF', gimmick: '?' },
  A: { text: 'Aマーカー', color: '#FF6E6E', gimmick: '?' },
  B: { text: 'Bマーカー', color: '#F3FB9C', gimmick: '?' },
  C: { text: 'Cマーカー外', color: '#9BECFE', gimmick: '散開', urgent: true },
  D: { text: 'Dマーカー外', color: '#C878FF', gimmick: '散開', urgent: true },
  X: { text: '中央', color: '#FFFFFF', gimmick: '散開回避' },
}

export const positionToCoordinates: Record<MovementPosition, { x: number; y: number; safeX?: number; safeY?: number }> = {
  A: { x: 50, y: 21 },
  B: { x: 100 - 21, y: 50 },
  C: { x: 50, y: 100 - 21, safeX: 50, safeY: 100 - 13 },
  D: { x: 21, y: 50, safeX: 13, safeY: 50 },
  '1': { x: 50, y: 33 },
  '2': { x: 100 - 33, y: 50 },
  '3': { x: 50, y: 100 - 33 },
  '4': { x: 33, y: 50 },
  X: { x: 100 - 33 - 3, y: 33 + 3 },
}

export type IslandType = 'B' | 'D'

export const islands: IslandType[] = ['D', 'B']

export type PostPhaseMovementPosition = 'A' | 'B' | 'AB' | 'BC' | '0' | '1' | '2' | '4' | 'b' | 'd'

export const postPhaseMovementMapping: Record<
  `${StackGroup}-${CloneEncounterPosition}-${ClonePosition}-${ClonePosition}-${IslandType}`,
  [PostPhaseMovementPosition, PostPhaseMovementPosition, PostPhaseMovementPosition, PostPhaseMovementPosition]
> = {
  '1-cross-A-A-B': ['AB', 'b', 'A', '1'], // Aが左右安全だが、Aが食われた => Bの島で上下安全 => 1番マーカーで左右安全（不便）
  '1-cross-A-A-D': ['AB', 'd', 'A', '1'], // Aが左右安全だが、Aが食われた => Dの島で上下安全 => 1番マーカーで左右安全（不便）
  '1-cross-A-C-B': ['AB', '2', 'A', '0'], // Aが左右安全だが、Cが食われた => Bの島で左右安全 => 1番マーカーで上下安全（楽）
  '1-cross-A-C-D': ['AB', '4', 'A', '0'], // Aが左右安全だが、Cが食われた => Dの島で左右安全 => 1番マーカーで上下安全（楽）
  '1-cross-C-A-B': ['AB', '2', 'A', '0'], // Cが左右安全だが、Aが食われた => Bの島で左右安全 => 1番マーカーで上下安全（楽）
  '1-cross-C-A-D': ['AB', '4', 'A', '0'], // Cが左右安全だが、Aが食われた => Dの島で左右安全 => 1番マーカーで上下安全（楽）
  '1-cross-C-C-B': ['AB', 'b', 'A', '1'], // Cが左右安全だが、Cが食われた => Bの島で上下安全 => 1番マーカーで左右安全（不便）
  '1-cross-C-C-D': ['AB', 'd', 'A', '1'], // Cが左右安全だが、Cが食われた => Dの島で上下安全 => 1番マーカーで左右安全（不便）
  '1-plus-A-A-B': ['A', 'b', 'AB', '1'],
  '1-plus-A-A-D': ['A', 'd', 'AB', '1'],
  '1-plus-A-C-B': ['A', '2', 'AB', '0'],
  '1-plus-A-C-D': ['A', '4', 'AB', '0'],
  '1-plus-C-A-B': ['A', '2', 'AB', '0'],
  '1-plus-C-A-D': ['A', '4', 'AB', '0'],
  '1-plus-C-C-B': ['A', 'b', 'AB', '1'],
  '1-plus-C-C-D': ['A', 'd', 'AB', '1'],
  '2-cross-A-A-B': ['BC', 'b', 'B', '1'],
  '2-cross-A-A-D': ['BC', 'd', 'B', '1'],
  '2-cross-A-C-B': ['BC', '2', 'B', '0'],
  '2-cross-A-C-D': ['BC', '4', 'B', '0'],
  '2-cross-C-A-B': ['BC', '2', 'B', '0'],
  '2-cross-C-A-D': ['BC', '4', 'B', '0'],
  '2-cross-C-C-B': ['BC', 'b', 'B', '1'],
  '2-cross-C-C-D': ['BC', 'd', 'B', '1'],
  '2-plus-A-A-B': ['B', 'b', 'BC', '1'],
  '2-plus-A-A-D': ['B', 'd', 'BC', '1'],
  '2-plus-A-C-B': ['B', '2', 'BC', '0'],
  '2-plus-A-C-D': ['B', '4', 'BC', '0'],
  '2-plus-C-A-B': ['B', '2', 'BC', '0'],
  '2-plus-C-A-D': ['B', '4', 'BC', '0'],
  '2-plus-C-C-B': ['B', 'b', 'BC', '1'],
  '2-plus-C-C-D': ['B', 'd', 'BC', '1'],
}

export const postPhasePositionNames: Record<PostPhaseMovementPosition, { text: string; color: string; gimmick: string }> = {
  '1': { text: '1番マーカー両側', color: '#FF6E6E', gimmick: '不便' },
  '2': { text: '2番マーカー', color: '#F3FB9C', gimmick: '楽' },
  '0': { text: '腹下', color: '#FFFFFF', gimmick: '楽' },
  '4': { text: '4番マーカー', color: '#C878FF', gimmick: '楽' },
  A: { text: 'Aマーカー外', color: '#FF6E6E', gimmick: 'スタック' },
  B: { text: 'Bマーカー外', color: '#F3FB9C', gimmick: 'スタック' },
  AB: { text: '1時外', color: '#FFFFFF', gimmick: 'スタック' },
  BC: { text: '5時外', color: '#FFFFFF', gimmick: 'スタック' },
  b: { text: 'Bマーカー上下', color: '#F3FB9C', gimmick: '不便' },
  d: { text: 'Dマーカー上下', color: '#C878FF', gimmick: '不便' },
}
