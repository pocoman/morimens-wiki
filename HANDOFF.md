# 망각전야 아카이브 — 작업 인수인계

> 이 문서는 다음 작업 세션에서 Claude에게 전달하기 위한 현황 정리입니다.

---

## 현재 완성된 것

정적 사이트 (GitHub Pages) 기본 골격이 완성된 상태.

### 파일 구조

```
/
├── index.html              ← 메인 홈 (카드 3개 링크)
├── characters/index.html   ← 각성체 목록 (팩션 필터 + 검색)
├── wheels/index.html       ← 명륜 목록 (등급 필터 + 검색)
├── keyflares/index.html    ← 은열쇠 목록 (검색)
├── css/style.css           ← 다크 테마 전체 스타일
├── js/main.js              ← 검색/필터 공통 로직
└── data/
    ├── characters.js       ← 각성체 데이터
    ├── wheels.js           ← 명륜 데이터
    └── keyflares.js        ← 은열쇠 데이터
```

### 디자인 기조

- 다크 배경, 보라/남색 강조색, 골드 포인트
- 한국어 기준, 영문명 소문자 병기
- 반응형 (모바일/데스크탑)

---

## 데이터 구조

### characters.js

```js
{
  name: '라모나-회귀',        // 한글명
  nameEn: 'Ramona: Timeworn', // 영문명
  faction: 'chaos',           // 'chaos' | 'aequor' | 'caro' | 'ultra'
  detail: null,               // ← 추후 상세 데이터 추가 예정
}
```

**`detail` 필드에 들어올 예정 데이터 (아직 미입력):**
```js
detail: {
  stats: {
    lv1:  { hp, atk, def },
    lv10: { hp, atk, def },
    lv20: { hp, atk, def },
    // ... lv30, lv40, lv50, lv60, lv70, lv80, lv90
  },
  skills: [
    {
      name: '스킬명',
      effect: '효과 설명',
      levelEffects: [
        { level: 1, changes: '수치 변화' },
        // ...
      ],
    },
  ],
  exalt: {
    name: '광기 폭발명',
    effect: '효과 설명',
    levelEffects: [
      { level: 1, changes: '수치 변화' },
    ],
  },
  breakthroughs: [
    { level: 'E1', effect: '돌파 시 추가되는 효과' },
    { level: 'E2', effect: '...' },
    // ...
  ],
  traits: [
    { name: '특성명', effect: '특성 효과' },
  ],
}
```

---

### wheels.js

```js
{
  grade: 'SSR',               // 'SSR' | 'SR' | 'R'
  name: '감춰진 수레바퀴',
  nameEn: 'Wheel Unseen',
  exclusive: '타비',          // 고유 캐릭터 한글명, 없으면 null
  effect: '전체 효과 설명 (범위값 포함, 예: +13~25%)',
  breakthroughEffects: null,  // ← 추후 돌파 단계별 수치 추가 예정
}
```

**`breakthroughEffects` 필드에 들어올 예정 데이터 (아직 미입력):**
```js
breakthroughEffects: [
  { level: 'E0', changes: '기본 수치 설명' },
  { level: 'E1', changes: '+N% 변화 설명' },
  // ... E2~E15
]
```

---

### keyflares.js

```js
{
  name: '머릿속의 목소리',
  nameEn: 'Voices in Your Head',
  effect: '효과 설명',
}
// 추가 필드 없음 — 현재로선 이 구조로 충분
```

---

## 용어 정책

효과 텍스트는 전부 한글 기준. 주요 대응:

| 영문 | 한글 |
|---|---|
| Aliemus | 광기 |
| Arithmetica | 산출력 |
| Keyflare / Posse | 은열쇠 |
| Keyflare Regen | 은열쇠 충전량 |
| Exalt | 광기 폭발 |
| Counter | 반격 |
| STR (Strength buff) | 강화 |
| Vulnerable | 취약 |
| Weakness | 약화 |
| Crit Rate | 치명타 확률 |
| Crit DMG | 치명타 피해 |
| ATK | 공격력 |
| DEF | 방어력 |
| [Strike] | [공격] |
| [Defend] | [방어] |
| [Insight] | [계시] |
| Ultra Turn / Ultra Round | 초차원 턴 |
| Pursuit | 추격 |
| Retain | 보존 |
| Exhaust | 소모 |
| Embryo Fusion | 배아 융합 |
| Tentacle | 촉수 |
| Death Resistance | 생존의지 |
| Annihilation (ability) | 소멸 |
| Ultra Space | 특이점 |
| Dimensional Shuttle | 차원 서틀 |

팩션 조건 표기: `심해 시`, `혈육 시`, `초차원 시` (영문 팩션명 사용 금지)

---

## 다음 작업 예정

유저가 각 캐릭터/명륜의 상세 데이터를 조사해서 가져올 예정.

### 1. 각성체 상세 페이지

각성체 행 클릭 시 상세 패널/모달 표시. 표시할 내용:
- **레벨별 스탯**: Lv 1 / 10 / 20 / 30 / 40 / 50 / 60 / 70 / 80 / 90
- **스킬 목록**: 스킬명, 효과 설명, 레벨별 수치 변화
- **광기 폭발**: 효과 설명, 레벨별 수치 변화
- **돌파 정보**: E1~E7 각 단계별 추가 효과
- **특성**: 특성명 + 효과

### 2. 명륜 상세 패널

명륜 행 클릭 시 표시. 표시할 내용:
- **돌파 단계별 수치 변화**: E0~E15, 변화하는 수치만 (+N% 형식으로 간략 표기)

### 구현 시 참고

- 현재 목록 페이지는 그대로 유지, 클릭 이벤트로 상세 영역을 토글하는 방식 권장
- `detail: null` / `breakthroughEffects: null` 인 항목은 "정보 업데이트 예정" 표시
- 데이터는 `data/characters.js`, `data/wheels.js` 내 각 객체의 해당 필드에 직접 입력

---

*마지막 갱신: 2026-05-21*
