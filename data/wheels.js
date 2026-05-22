// breakthroughEffects: 추후 돌파 단계별 수치 변화 추가 예정
// 형식: [{ level: 'E0', changes: '수치 설명' }, { level: 'E1', changes: '+N%' }, ...]

const WHEELS = [
  // ── SSR ──
  {
    grade: 'SSR',
    name: '감춰진 수레바퀴',
    nameEn: 'Wheel Unseen',
    exclusive: '타비',
    effect: '최대 은열쇠 +100%. 핸드 한계 +2 (중첩 불가). 은열쇠 충전량 +13~25%. 장비자 카드 사용 시 이번 턴 모든 명령 카드의 치명타 확률·치명타 피해·실드·광기·강화 +3~6% (최대 5중첩)',
    detail: {
      mainStat: '은열쇠 충전량 21.6 (E4~E15 강화 시 +1.8씩 증가)',
      subEffects: [
        { desc: '은열쇠 충전량 증가', values: ['13%', '17%', '21%', '25%'] },
        { desc: '커맨드 카드 사용 시 크리율/크리피해/방어막/광기/강화 획득 증가 (턴당 최대 5중첩)', values: ['3%', '4%', '5%', '6%'] },
      ],
      fixedEffects: ['최대 은열쇠 100% 증가', '패 한도 +2 (중첩 불가)'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '세계 끝까지의 광륙',
    nameEn: 'Doomsday Rampage',
    exclusive: '모샤',
    effect: '광기 폭발·추가 공격 기본 피해 +30~60%. 임의의 각성체 [공격] 사용 후 장비자 [공격] 피해 임시 증가 (공격력의 13~25%, 턴당 최대 8회)',
    detail: {
      mainStat: '생존의지 50.4% (E4~E15 강화 시 +4.2%씩 증가)',
      subEffects: [
        { desc: '광기 폭발 및 추가 공격 기본 피해 증가', values: ['30%', '40%', '50%', '60%'] },
        { desc: '임의의 각성체 [공격] 사용 후 장비자 [공격] 피해 임시 증가 (공격력 기준, 턴당 최대 8회)', values: ['13%', '17%', '21%', '25%'] },
      ],
      fixedEffects: ['팀 유일 효과'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '죽음을 넘어',
    nameEn: 'Deathless Ascent',
    exclusive: '돌',
    effect: '장비자 명령 카드 회복량 +13~25%. 장비자 광기 폭발 시 팀 전체 광기 +5~8. 아군에 취약 디버프가 있으면 이 효과 2배',
    detail: {
      mainStat: '광기 충전량 7.2 (E4~E15 강화 시 +0.6씩 증가)',
      subEffects: [
        { desc: '커맨드 카드 회복량 증가', values: ['13%', '17%', '21%', '25%'] },
        { desc: '광기 폭발 시 아군 전체 광기 획득', values: ['5', '6', '7', '8'] },
      ],
      fixedEffects: ['취약 디버프 상태에서 위 효과 2배 적용'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '거꾸로 가는 시계',
    nameEn: 'Rewinding Time',
    exclusive: '라모나',
    effect: '턴 1회 한정: 장비자 명령 카드 사용 후 30~60% 확률로 버린 더미에서 손패로 되돌림',
    detail: {
      mainStat: '은열쇠 충전량 21.6 (E4~E15 강화 시 +1.8씩 증가)',
      subEffects: [
        { desc: '커맨드 카드 사용 후 패로 돌아올 확률', values: ['30%', '40%', '50%', '60%'] },
      ],
      fixedEffects: ['이 효과는 턴당 1회만 발동', '버림 더미에서 손으로 돌아오는 효과'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '기사의 맹세',
    nameEn: 'Heart of a Knight',
    exclusive: '오지에',
    effect: '팀 유일: 장비자 광기 폭발로 인한 방어막 +13%. 광기 폭발 사용 후 방어력의 13%만큼 임시 강화 획득. 팀이 손상 상태라면 효과 2배',
    detail: {
      mainStat: '문장 획득 10.8% (E4~E15 강화 시 +0.9%씩 증가)',
      subEffects: [
        { desc: '광기 폭발의 방어막 제공량 증가', values: ['13%', '17%', '21%', '25%'] },
        { desc: '광기 폭발 후 임시 강화 획득 (방어력 기준)', values: ['13%', '17%', '21%', '25%'] },
      ],
      fixedEffects: ['취약 디버프 상태에서 위 효과 2배 적용'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '떠도는 욕망',
    nameEn: 'Drifting in Desire',
    exclusive: '판디아',
    effect: '팀 유일: 장비자 반격 +13%. 공격 받을 때마다 공격력의 5%만큼 임시 강화 획득. 광기 폭발 사용 후 공격력의 9%만큼 반격 획득',
    detail: {
      mainStat: '치명타 확률 14.4% (E4~E15 강화 시 +1.2%씩 증가)',
      subEffects: [
        { desc: '반격 중첩 획득량 증가', values: ['13%', '17%', '21%', '25%'] },
        { desc: '피격 시 임시 강화 획득 (공격력 기준)', values: ['5%', '6%', '7%', '8%'] },
        { desc: '광기 폭발 후 반격 획득 (공격력 기준)', values: ['9%', '11%', '13%', '15%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '견고한 의지',
    nameEn: 'Will Unyielding',
    exclusive: '엘바',
    effect: '팀 유일: 장비자 기본 피해·방어막 +9%. 탐색 시작 시 장비자 [공격]·[방어] 1장씩 덱에 추가. [방어] 사용 후 다음 [공격]의 치명타 확률·치명타 피해 +15%. [공격] 사용 후 다음 [방어]의 방어막 +15%. 최대 3회 중첩',
    detail: {
      mainStat: '생존의지 50.4% (E4~E15 강화 시 +4.2%씩 증가)',
      subEffects: [
        { desc: '기본 피해 및 방어막 생성 증가', values: ['9%', '11%', '13%', '15%'] },
      ],
      fixedEffects: ['탐험 시작 시 공격/방어 커맨드 카드 각 1장 덱에 추가', '방어 카드 후 다음 공격 카드 크리율/크리 피해 +15% (최대 3중첩)', '공격 카드 후 다음 방어 카드 방어막 +15% (최대 3중첩)'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '고통을 넘어',
    nameEn: 'Grace Through Pain',
    exclusive: '릴리',
    effect: '장비자 독 부여량·방어막 생성량 +9%. 장비자 [공격] 치명타 확률·치명타 피해 +20%. [공격] 사용 시 최대 HP의 4%만큼 실드 획득 (턴 1회)',
    detail: {
      mainStat: '생존의지 50.4% (E4~E15 강화 시 +4.2%씩 증가)',
      subEffects: [
        { desc: '독 부여량 및 방어막 제공량 증가', values: ['9%', '11%', '13%', '15%'] },
        { desc: '공격 카드 크리율/크리 피해 증가', values: ['20%', '25%', '30%', '35%'] },
        { desc: '공격 카드 사용 시 방어막 획득 (최대 HP 기준, 턴당 1회)', values: ['4%', '5%', '6%', '7%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '이형체의 포식',
    nameEn: 'Aberrant Devour',
    exclusive: '24',
    effect: '장비자 명령 카드 기본 피해 +22~40%. 턴 시작 시 15~30% 확률로 장비자의 무작위 명령 카드 복사본 1장(소모) 손패에 추가. 혈육 시 [배아] 사용 후 이번 턴 다음 [공격] 치명타 확률 +20~35%',
    detail: {
      mainStat: '광기 충전량 7.2 (E4~E15 강화 시 +0.6씩 증가)',
      subEffects: [
        { desc: '학자 페르소나: 턴 종료 시 광기 획득', values: ['11', '14', '17', '20'] },
        { desc: '광대 페르소나: 턴 종료 시 크리율/크리 피해 획득', values: ['4%', '5%', '6%', '7%'] },
      ],
      fixedEffects: ['광기 폭발 기본 피해 60% 증가', '탐험 시작 시 학자 페르소나 진입, 광기 폭발 사용 시 페르소나 전환'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '탐식의 이야기',
    nameEn: "The Glutton's Tale",
    exclusive: '레이아',
    effect: '장비자 회복량 +9~15%. 턴 시작 시 지난 턴 감소한 HP의 9~15%만큼 임시 강화·실드 획득',
    detail: {
      mainStat: '영역 숙달 36 (E4~E15 강화 시 +3씩 증가)',
      subEffects: [
        { desc: '장착자 회복량 증가', values: ['9%', '11%', '13%', '15%'] },
        { desc: '턴 시작 시 지난 턴 잃은 HP 기준 임시 강화 및 방어막 획득', values: ['9%', '11%', '13%', '15%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '행운의 시간',
    nameEn: 'Hour of Fortune',
    exclusive: '라이커',
    effect: '전투 시작 시 보유 유물 1개마다 명령 카드 치명타 확률 +3%. 광기 폭발 후 4면체 주사위 굴려 눈금의 3배만큼 광기 + 임시 치명타 피해 획득. 4 이상 시 다른 각성체도 절반 효과',
    detail: {
      mainStat: '문장 획득 10.8% (E4~E15 강화 시 +0.9%씩 증가)',
      subEffects: [
        { desc: '광기 폭발 후 4면 주사위 굴림, 주사위 값 배수로 광기 및 임시 크리 피해 획득', values: ['×3', '×4', '×5', '×6'] },
      ],
      fixedEffects: ['전투 시작 시 보유 유물당 크리율 +3%', '주사위 4 이상 시 아군 전체에게 절반의 효과 적용'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '영원한 진혼곡',
    nameEn: 'Eternal Requiem',
    exclusive: '하멜른',
    effect: '탐색 시작 시 [은열쇠의 여명] 1장 추가(파괴). 은열쇠 사용 후 치명타 피해 +2~5%. 피해 시 은열쇠 충전량의 50~80% 충전 + 임시 치명타 확률 +5~8% (턴당 최대 5회)',
    detail: {
      mainStat: '은열쇠 충전량 21.6 (E4~E15 강화 시 +1.8씩 증가)',
      subEffects: [
        { desc: '장착자 크리 피해 증가 (은열쇠 사용 시마다)', values: ['2%', '3%', '4%', '5%'] },
        { desc: '피해 시 은열쇠 획득 (은열쇠 충전량 기준, 턴당 최대 5회)', values: ['50%', '60%', '70%', '80%'] },
        { desc: '피해 시 크리율 획득 (턴당 최대 5회)', values: ['5%', '6%', '7%', '8%'] },
      ],
      fixedEffects: ['탐험 시작 시 소멸 효과가 있는 [은열쇠 여명] 카드 1장을 드로우 더미에 추가'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '거인의 검',
    nameEn: 'Blade of the Titan',
    exclusive: '골리아',
    effect: '광기 폭발 후 치명타 피해 +30~60%. 광기 폭발 후 손패 카드 20~35% 확률로 코스트 -1',
    detail: {
      mainStat: '치명타 확률 14.4% (E4~E15 강화 시 +1.2%씩 증가)',
      subEffects: [
        { desc: '광기 폭발 후 크리 피해 증가', values: ['30%', '40%', '50%', '60%'] },
        { desc: '광기 폭발 후 패의 커맨드 카드 산출력 비용 -1 확률', values: ['20%', '25%', '30%', '35%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '폭우 속에서',
    nameEn: 'Amidst the Downpour',
    exclusive: '파로스',
    effect: '[공격] 시 55~100% 확률로 산출력 +1 + 전체 적 독 10% 폭발. 심해 시 추가로 촉수 1회 공격 (턴 1회)',
    detail: {
      mainStat: '피해 증폭 14.4% (E4~E15 강화 시 +1.2%씩 증가)',
      subEffects: [
        { desc: '공격 시 산출력 1 획득 및 전체 적 독 발동 확률', values: ['55%', '70%', '85%', '100%'] },
      ],
      fixedEffects: ['이 효과는 턴당 1회 발동', '독 발동량은 현재 중첩의 10%', '심해 시, 이 효과 발동 시 촉수 1개가 1회 공격'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '신왕의 찬가',
    nameEn: 'Hymn of the Sovereign',
    exclusive: '툴루',
    effect: '전투 시작 시 광기 +25~40. 다른 각성체 광기 폭발 사용 시 광기 +3~6. 심해 시 광기 폭발 후 공격력의 2~5%만큼 촉수 피해 획득',
    detail: {
      mainStat: '광기 충전량 7.2 (E4~E15 강화 시 +0.6씩 증가)',
      subEffects: [
        { desc: '전투 시작 시 광기 획득', values: ['25', '30', '35', '40'] },
        { desc: '다른 각성체 광기 폭발 사용 시 광기 획득', values: ['3', '4', '5', '6'] },
        { desc: '심해 시, 광기 폭발 후 촉수 피해 (공격력 기준)', values: ['2%', '3%', '4%', '5%'] },
      ],
      fixedEffects: ['심해 조건은 광기 폭발 후에만 적용'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '은밀한 탄생',
    nameEn: 'Shrouded Birth',
    exclusive: '머피',
    effect: '장비자 실드 생성량 +9~15%. 장비자가 실드 제공 시 팀 전체 이번 턴 치명타 확률 +5~8% + 은열쇠 충전량의 90~150% 충전 (턴 2회). 심해 시 촉수 공격마다 장비자 광기 +1 (턴당 최대 4~10회)',
    detail: {
      mainStat: '은열쇠 충전량 21.6 (E4~E15 강화 시 +1.8씩 증가)',
      subEffects: [
        { desc: '방어막 획득량 증가', values: ['9%', '11%', '13%', '15%'] },
        { desc: '방어막 제공 시 아군 전체 크리율 증가', values: ['5%', '6%', '7%', '8%'] },
        { desc: '방어막 제공 시 아군 전체 은열쇠 획득 (충전량 기준)', values: ['90%', '110%', '130%', '150%'] },
        { desc: '심해 시, 촉수 1회 공격당 광기 획득 (턴당 최대 N회)', values: ['1 / 최대4회', '1 / 최대6회', '1 / 최대8회', '1 / 최대10회'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '산호 여인의 죽음',
    nameEn: 'Death of Ms. Coral',
    exclusive: '산',
    effect: '턴 1회 한정: 장비자 명령 카드 사용 후 방어력의 6~12%만큼 실드 획득. 촉수 1개당 방어력의 1.5~3% 추가',
    detail: {
      mainStat: '생존의지 50.4% (E4~E15 강화 시 +4.2%씩 증가)',
      subEffects: [
        { desc: '커맨드 카드 사용 후 방어막 획득 (방어력 기준 + 촉수당 추가)', values: ['6%+1.5%/촉수', '8%+2%/촉수', '10%+2.5%/촉수', '12%+3%/촉수'] },
      ],
      fixedEffects: ['이 효과는 턴당 1회 발동'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '바다의 꿈',
    nameEn: 'Dream of the Sea',
    exclusive: '오레타',
    effect: '카드 사용 시 광기 +1. 전투 시작 시 공격력의 6~9%만큼 강화 획득 (턴마다 추가 누적). 심해 시 촉수 피해 추가',
    detail: {
      mainStat: '치명타 확률 14.4% (E4~E15 강화 시 +1.2%씩 증가)',
      subEffects: [
        { desc: '전투 시작 시 강화 획득 (공격력 기준)', values: ['6%', '7%', '8%', '9%'] },
        { desc: '2턴째부터 매 턴 강화 획득 (공격력 기준)', values: ['2.1%', '2.4%', '2.7%', '3%'] },
        { desc: '심해 시, 위 효과에 촉수 피해 추가 (시작/매턴)', values: ['3%/1.1%', '4%/1.4%', '5%/1.7%', '6%/2%'] },
      ],
      fixedEffects: ['커맨드 카드 사용 시 광기 1 획득'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '신앙의 힘',
    nameEn: 'Power of the Pious',
    exclusive: '미리암',
    effect: '광기 획득량 +7~10%, 독 +9~15%. 피해 시 팀 전체 치명타 피해를 장비자 치명타 피해의 9~15%만큼 획득 (턴 1회). 심해 시 전투 시작 시 촉수 한계·수 +1',
    detail: {
      mainStat: '치명타 피해 21.6% (E4~E15 강화 시 +1.8%씩 증가)',
      subEffects: [
        { desc: '광기 획득량 증가', values: ['7%', '8%', '9%', '10%'] },
        { desc: '독 부여량 증가', values: ['9%', '11%', '13%', '15%'] },
        { desc: '피해 시 팀 전체 크리 피해 획득 (장착자 크리 피해 기준, 턴 1회)', values: ['9%', '11%', '13%', '15%'] },
      ],
      fixedEffects: ['피해 부여 효과는 턴당 1회 발동', '심해 시: 전투 시작 시 촉수 한계 및 촉수 수 1 증가'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '먼 곳의 에덴',
    nameEn: 'The Faraway Eden',
    exclusive: 'Mosk',
    effect: '전투 시작 시 기본 광기의 13~25%만큼 광기 획득. 광기 폭발 최종 피해 +11~20% (기본 광기 기준). 몰아치는 파도 태세 전환 시 임시 영역 숙달 +20~35% (3턴 쿨다운)',
    detail: {
      mainStat: '영역 숙달 36 (E4~E15 강화 시 +3씩 증가)',
      subEffects: [
        { desc: '전투 시작 시 기본 광기의 N%만큼 광기 획득', values: ['13%', '17%', '21%', '25%'] },
        { desc: '광기 폭발 최종 피해 증가 (기본 광기 기준)', values: ['11%', '14%', '17%', '20%'] },
        { desc: '몰아치는 파도 태세 전환 시 임시 영역 숙달 획득 (현재 영역 숙달 기준, 3턴 쿨다운)', values: ['20%', '25%', '30%', '35%'] },
      ],
      fixedEffects: ['팀 유일 효과'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '자비로운 양육',
    nameEn: 'Merciful Nurturing',
    exclusive: '타이스',
    effect: '핸드 한계 +2. 턴 종료 시 은열쇠 충전량의 150~300%만큼 은열쇠 획득. 은열쇠 사용 시 팀 전체 광기 +3~6. 혈육 시 추가로 배아 융합 +13~25%',
    detail: {
      mainStat: '은열쇠 충전량 21.6 (E4~E15 강화 시 +1.8씩 증가)',
      subEffects: [
        { desc: '턴 종료 시 은열쇠 획득 (충전량 기준)', values: ['150%', '200%', '250%', '300%'] },
        { desc: '은열쇠 사용 시 아군 전체 광기 획득', values: ['3', '4', '5', '6'] },
        { desc: '혈육 시, 은열쇠 사용 시 배아 융합 추가', values: ['13%', '17%', '21%', '25%'] },
      ],
      fixedEffects: ['패 한도 +2'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '장미의 이름으로',
    nameEn: 'By Rose Alone',
    exclusive: '소렐',
    effect: '피해 발생 시 40~100% 확률로 이번 턴 치명타 피해 +2% (반복 누적). 광기 폭발 후 공격력의 15~30% 3회 무작위 추가 피해. 혈육 시 배아 소모마다 배아 융합 +16~25%',
    detail: {
      mainStat: '치명타 확률 14.4% (E4~E15 강화 시 +1.2%씩 증가)',
      subEffects: [
        { desc: '피해 인스턴스마다 크리 피해 증가 확률', values: ['40%', '60%', '80%', '100%'] },
        { desc: '광기 폭발 후 공격력의 N%로 3회 무작위 피해', values: ['15%', '20%', '25%', '30%'] },
        { desc: '혈육 시, 배아 소모당 배아 융합 증가', values: ['16%', '19%', '22%', '25%'] },
      ],
      fixedEffects: ['크리 피해 증가는 이번 턴에만 적용, 인스턴스당 +2%'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '진홍빛으로 가라앉다',
    nameEn: 'Drowning in Crimson',
    exclusive: '혈쇄-히로',
    effect: '장비자 기본 피해 +22~40%. 광기 폭발 후 이번 턴 핸드 한계 +1 + 카드 1장 드로우. 혈육 시 포식 발동 시 이번 턴 치명타 피해 +22~40%',
    detail: {
      mainStat: '피해 증폭 14.4% (E4~E15 강화 시 +1.2%씩 증가)',
      subEffects: [
        { desc: '기본 피해 증가', values: ['22%', '28%', '34%', '40%'] },
        { desc: '혈육 시, 집어삼키기 발동 시 크리 피해 증가 (턴 종료까지)', values: ['22%', '28%', '34%', '40%'] },
      ],
      fixedEffects: ['광기 폭발 후 이번 턴 패 한도 +1, 카드 1장 드로우'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '혈육의 광연',
    nameEn: 'Bloody Feast',
    exclusive: '우브하시',
    effect: '팀 유일: 장비자 광기 폭발 치명타 확률·치명타 피해 +9%. 광기 폭발 후 HP 3%만큼 실드 획득. 해당 턴 광기 폭발 효과 발동 시 추가 실드 1회',
    detail: {
      mainStat: '치명타 피해 21.6% (E4~E15 강화 시 +1.8%씩 증가)',
      subEffects: [
        { desc: '광기 폭발의 크리율/크리 피해 증가', values: ['9%', '11%', '13%', '15%'] },
        { desc: '광기 폭발 후 CON 기준 강화 획득', values: ['3%', '4%', '5%', '6%'] },
      ],
      fixedEffects: ['광기 폭발로 집어삼키기 발동 시 강화 획득 효과 2회 적용'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '삼켜진 자장가',
    nameEn: 'Lullaby Devoured',
    exclusive: '페인트',
    effect: '전투 시작 시 장비자 방어력의 26~50%만큼 반격 획득. 생존의지 발동 후 "요람" 2스택 (팀 전체 회복·실드 +15~30%, 턴 종료 시 1스택 감소). 혈육 시 배아 융합 +13~25%',
    detail: {
      mainStat: '생존의지 50.4% (E4~E15 강화 시 +4.2%씩 증가)',
      subEffects: [
        { desc: '전투 시작 시 반격 획득 (방어력 기준)', values: ['26%', '34%', '42%', '50%'] },
        { desc: '생존의지 발동 시 요람 2중첩 획득 (아군 전체 회복/방어막 증가, 턴 종료 시 1중첩 감소)', values: ['15%', '20%', '25%', '30%'] },
        { desc: '혈육 시, 배아 융합 획득', values: ['13%', '17%', '21%', '25%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '겨울밤의 추억',
    nameEn: "Winter's Requiem",
    exclusive: '아이기스',
    effect: '전투 시작 시 앞줄 적에게 취약 2스택 부여. 턴 시작 시 취약 상태 적의 임시 강화를 장비자 공격력의 6~12%만큼 감소. 혈육 시 장비자 광기 폭발 후 배아 융합 +9~15%',
    detail: {
      mainStat: '은열쇠 충전량 21.6 (E4~E15 강화 시 +1.8씩 증가)',
      subEffects: [
        { desc: '턴 시작 시 취약 상태 적의 임시 강화 감소 (공격력 기준)', values: ['6%', '8%', '10%', '12%'] },
        { desc: '혈육 시, 광기 폭발 후 배아 융합 획득', values: ['9%', '11%', '13%', '15%'] },
      ],
      fixedEffects: ['전투 시작 시 전열 적에게 취약 2중첩 부여'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '신언의 석판',
    nameEn: 'Tablet of Scriptures',
    exclusive: '살바도르',
    effect: '장비자 실드·HP 회복량 +9~15%. 홀수 턴 종료 시 치명타 확률 +3~6% + 광기 +5~8. 짝수 턴 종료 시 치명타 피해 +3~6% + 은열쇠 +60~120. 혈육 시 홍로 최대 저장량 +22~40%',
    detail: {
      mainStat: '문장 획득 10.8% (E4~E15 강화 시 +0.9%씩 증가)',
      subEffects: [
        { desc: '방어막/회복 증가', values: ['9%', '11%', '13%', '15%'] },
        { desc: '홀수 턴 종료 시 크리율 증가', values: ['3%', '4%', '5%', '6%'] },
        { desc: '홀수 턴 종료 시 광기 획득', values: ['5', '6', '7', '8'] },
        { desc: '짝수 턴 종료 시 크리 피해 증가', values: ['3%', '4%', '5%', '6%'] },
        { desc: '짝수 턴 종료 시 은열쇠 획득', values: ['60', '80', '100', '120'] },
        { desc: '혈육 시, 홍로 최대 저장량 증가', values: ['22%', '28%', '34%', '40%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '헛되이 찌푸린 눈살',
    nameEn: 'Vain Regrets',
    exclusive: '서',
    effect: '고정 중독·발동 중독 효과 +15~30%. 혈육 시 자동 회복 배아 융합 +15~30%. 매 턴 첫 공명 발동 시 다른 각성체 광기 +4~10',
    detail: {
      mainStat: '피해 증폭 14.4% (E4~E15 강화 시 +1.2%씩 증가)',
      subEffects: [
        { desc: '고정 중독 및 발동 중독 효과 증가', values: ['15%', '20%', '25%', '30%'] },
        { desc: '혈육 시, 자동 회복 배아 융합 증가', values: ['15%', '20%', '25%', '30%'] },
        { desc: '매 턴 첫 공명 발동 시 다른 각성체 광기 획득', values: ['4', '6', '8', '10'] },
      ],
      fixedEffects: ['팀 유일 효과'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '끝나지 않는 계산',
    nameEn: 'Incalculable Factor',
    exclusive: '웬코르',
    effect: '장비자 광기 획득량 +9~15%. 장비자 광기 폭발 후 은열쇠 +140~200',
    detail: {
      mainStat: '광기 충전량 7.2 (E4~E15 강화 시 +0.6씩 증가)',
      subEffects: [
        { desc: '광기 획득량 증가', values: ['9%', '11%', '13%', '15%'] },
        { desc: '광기 폭발 후 은열쇠 획득', values: ['140', '160', '180', '200'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '가장 소중한 수집품',
    nameEn: 'Treasured Rarity',
    exclusive: '다포딜',
    effect: '적 처치 시 검은 인장 +2. 처치 후 이번 탐사 동안 치명타 피해 영구 +10% (최대 5중첩). 워프 발동 시 해당 턴 최종 피해 +5% (최대 3중첩)',
    detail: {
      mainStat: '치명타 피해 21.6% (E4~E15 강화 시 +1.8%씩 증가)',
      subEffects: [
        { desc: '적 처치 시 탐험 전체 크리 피해 증가', values: ['4%', '6%', '8%', '10%'] },
        { desc: '도약 효과 발동 시 이번 턴 최종 피해 증가 (최대 3중첩)', values: ['2%', '3%', '4%', '5%'] },
      ],
      fixedEffects: ['적 처치 시 검은 문장 2개 획득'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '여왕의 계율',
    nameEn: "Queen's Edict",
    exclusive: '완다',
    effect: '반격 획득량 +13~25%. 장비자 명령 카드 사용 후 방어력의 5~8%만큼 반격 획득 (턴 2회). 초차원 시 카드가 특이점 진입 시 광기 +6~12. 광기 폭발 후 모든 적 강화를 방어력의 9~15%만큼 감소',
    detail: {
      mainStat: '피해 증폭 14.4% (E4~E15 강화 시 +1.2%씩 증가)',
      subEffects: [
        { desc: '반격 획득량 증가', values: ['13%', '17%', '21%', '25%'] },
        { desc: '커맨드 카드 사용 후 반격 획득 (방어력 기준, 턴당 최대 2회)', values: ['5%', '6%', '7%', '8%'] },
        { desc: '초차원 시, 커맨드 카드가 특이점 진입 시 광기 획득', values: ['6', '8', '10', '12'] },
        { desc: '광기 폭발 후 전체 적 강화 감소 (방어력 기준)', values: ['9%', '11%', '13%', '15%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '속박된 노래',
    nameEn: 'Song of the Bound',
    exclusive: '틴커트',
    effect: '탐색 시작 시 [계시] 1장 + 장비자 [공격] 1장 덱에 추가. 장비자 [공격] 기본 피해 +15~30%. [공격] 사용 후 55~100% 확률로 카드 1장 드로우 (턴 1회). 초차원 턴 중 [공격] 사용 시 [계시] 1장 손패에 추가',
    detail: {
      mainStat: '문장 획득 10.8% (E4~E15 강화 시 +0.9%씩 증가)',
      subEffects: [
        { desc: '공격 커맨드 카드 기본 피해 증가', values: ['15%', '20%', '25%', '30%'] },
        { desc: '공격 카드 사용 후 카드 드로우 확률 (턴당 1회)', values: ['55%', '70%', '85%', '100%'] },
      ],
      fixedEffects: ['탐험 시작 시 [계시] 및 공격 커맨드 카드 1장 덱에 추가', '초차원 시, 초차원 턴 중 공격 카드 사용 시 [계시] 카드 패에 추가'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '환희의 마법 공연',
    nameEn: 'Happy Magic Show',
    exclusive: '카시아',
    effect: '광기 폭발 사용 후 광기 +4, 은열쇠 +40. 손패 4장 시 1회 추가 발동. 초차원 시 카드가 특이점 진입 후 공격력의 8%만큼 임시 강화 (턴당 최대 2회)',
    detail: {
      mainStat: '영역 숙달 36 (E4~E15 강화 시 +3씩 증가)',
      subEffects: [
        { desc: '광기 폭발 후 광기 획득', values: ['3', '4', '5', '6'] },
        { desc: '광기 폭발 후 은열쇠 획득', values: ['35', '40', '45', '50'] },
        { desc: '초차원 시, 커맨드 카드 특이점 진입 후 임시 강화 획득 (공격력 기준, 턴당 최대 2회)', values: ['6%', '8%', '10%', '12%'] },
      ],
      fixedEffects: ['광기 폭발 후 효과는 패의 카드 4장당 1회 추가 발동'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '길 없는 길',
    nameEn: 'Path Forsaken',
    exclusive: '젠킨',
    effect: '턴 1회 한정: 피해 발생 후 15~30% 확률로 장비자 명령 카드 1장 드로우 + 코스트 -1',
    detail: {
      mainStat: '치명타 확률 14.4% (E4~E15 강화 시 +1.2%씩 증가)',
      subEffects: [
        { desc: '피해 후 커맨드 카드 드로우 및 비용 -1 확률 (턴당 1회)', values: ['15%', '20%', '25%', '30%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '노심융해',
    nameEn: 'Core Meltdown',
    exclusive: '에리카',
    effect: '[공격] 기본 피해 +25%, [방어] 기본 방어막 +25%. [공격] 시 공격력의 6%만큼 임시 강화. [방어] 시 공격력의 2%만큼 임시 반격. 초차원 시 초차원 턴 진입 시 각 1회 추가 발동',
    detail: {
      mainStat: '은열쇠 충전량 21.6 (E4~E15 강화 시 +1.8씩 증가)',
      subEffects: [
        { desc: '공격 카드 사용 시 임시 강화 획득 (공격력 기준)', values: ['6%', '9%', '12%', '15%'] },
        { desc: '방어 카드 사용 시 임시 경계 획득 (방어력 기준)', values: ['2%', '3%', '4%', '5%'] },
      ],
      fixedEffects: ['공격/방어 카드 기본 피해 및 방어막 +25%', '초차원 시, 초차원 라운드 진입 시 위 두 효과 동시 발동'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '마지막 시편',
    nameEn: 'The Last Verse',
    exclusive: '오를라',
    effect: '장비자 명령 카드의 치명타 확률·치명타 피해·실드·HP 회복·광기·강화 +11~20%. 초차원 시 소멸 발동 시 은열쇠 +110~200. 초차원 턴 중 첫 번째 은열쇠 효과 2회 발동',
    detail: {
      mainStat: '생존의지 50.4% (E4~E15 강화 시 +4.2%씩 증가)',
      subEffects: [
        { desc: '커맨드 카드의 크리율/크리피해/방어막/회복/광기/강화 획득 증가', values: ['11%', '14%', '17%', '20%'] },
        { desc: '초차원 시, 소멸 발동 시 은열쇠 획득', values: ['110', '140', '170', '200'] },
      ],
      fixedEffects: ['초차원 턴 중 첫 번째 은열쇠 사용의 효과가 2회 발동'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '숨겨진 고통',
    nameEn: 'Veiled Anguish',
    exclusive: '클레멘타인',
    effect: '장비자 광기 폭발 기본 피해 +35%. 은열쇠 충전량 +15%. 초차원 턴 진입 시 모든 각성체 광기 +11. [소멸] 발동 후 장비자 광기 +11',
    detail: {
      mainStat: '은열쇠 충전량 21.6 (E4~E15 강화 시 +1.8씩 증가)',
      subEffects: [
        { desc: '광기 폭발 기본 피해 증가', values: ['35%', '40%', '45%', '50%'] },
        { desc: '은열쇠 충전량 증가', values: ['15%', '20%', '25%', '30%'] },
        { desc: '초차원 시, 소멸 발동 후 광기 획득', values: ['11', '14', '17', '20'] },
        { desc: '초차원 턴 진입 시 아군 전체 광기 획득', values: ['11', '14', '17', '20'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '견딜 수 없는 자유',
    nameEn: 'Unbearable Freedom',
    exclusive: '카스토르',
    effect: '최대 손패 +2 (중첩 불가). 장비자 방어막 생성량·기본 피해 +9%. 초차원 턴 진입 시 광기 +35. [소멸] 발동 후 모든 각성체 임시 치명타 피해 +13% (3턴 쿨다운)',
    detail: {
      mainStat: '피해 증폭 14.4% (E4~E15 강화 시 +1.2%씩 증가)',
      subEffects: [
        { desc: '장착자 기본 피해 및 방어막 획득 증가', values: ['9%', '11%', '13%', '15%'] },
        { desc: '초차원 시, 소멸 발동 후 아군 전체 크리 피해 (3턴 쿨다운)', values: ['13%', '17%', '21%', '25%'] },
        { desc: '초차원 턴 진입 시 광기 획득', values: ['35', '50', '65', '80'] },
      ],
      fixedEffects: ['패 한도 +2 (다른 명륜과 중첩 불가)'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '왜곡된 기사의 서사시',
    nameEn: 'Twisted Knight Ballad',
    exclusive: '폴룩스',
    effect: '장비자 명령 카드 기본 피해·치명타 피해 +20%. 턴 시작 시·광기 폭발 사용 시 [심염] 1스택 획득. 명령 카드 사용 시 [심염] 1스택 소모 → 해당 카드 최종 피해·방어막 +9%. 초차원 턴에서 [신염]으로 강화되어 효과 2배',
    detail: {
      mainStat: '치명타 확률 14.4% (E4~E15 강화 시 +1.2%씩 증가)',
      subEffects: [
        { desc: '커맨드 카드 기본 피해 및 크리 피해 증가', values: ['20%', '25%', '30%', '35%'] },
        { desc: '점화 소모 시 최종 피해 및 방어막 증가', values: ['9%', '11%', '13%', '15%'] },
      ],
      fixedEffects: ['턴 시작 시 및 광기 폭발 후 점화 1중첩 획득', '초차원 라운드 중에는 점화 대신 작열 획득 (효과 2배)'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '영원한 직조의 그물',
    nameEn: 'Eternal Weave',
    exclusive: '아라크네',
    effect: '방어막 획득량 +13~25%. 추가 공격 시 임시 피해 증폭 +25~40% (턴당 최대 5회). 차원 이동 발동 시 광기 +4~10',
    detail: {
      mainStat: '영역 숙달 36 (E4~E15 강화 시 +3씩 증가)',
      subEffects: [
        { desc: '방어막 획득량 증가', values: ['13%', '17%', '21%', '25%'] },
        { desc: '추가 공격 시 임시 피해 증폭 증가 (턴당 최대 5회)', values: ['25%', '30%', '35%', '40%'] },
        { desc: '차원 이동 발동 시 광기 획득', values: ['4', '6', '8', '10'] },
      ],
      fixedEffects: ['팀 유일 효과'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '도박의 지혜',
    nameEn: 'Gambling Wisdom',
    exclusive: null,
    effect: '대박의 지혜 카드 사용 시 명령 카드 추가 발동 확률 +13~25%. (탐색 시작 시 대박의 지혜 1장 덱 추가, 소모·보존·고유)',
    detail: {
      mainStat: '치명타 피해 21.6% (E4~E15 강화 시 +1.8%씩 증가)',
      subEffects: [
        { desc: '대박의 지혜 카드 사용 시 명령 카드 추가 발동 확률', values: ['13%', '17%', '21%', '25%'] },
      ],
      fixedEffects: [
        '팀 유일 효과',
        '탐색 시작 시 대박의 지혜 1장 덱에 추가 (산출력 1 소모)',
        '대박의 지혜: 손패 전체 명령 카드를 덱에 무작위로 섞음, 카드 1장 섞을 때마다 아군 전체 광기 2 획득. 소모·보존·고유',
      ],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '은밀한 오후 휴식 시간',
    nameEn: 'Private Afternoon',
    exclusive: null,
    effect: '은밀한 오후 휴식 시간 카드 사용 시 임시 크리 피해 +50~80%. (탐색 시작 시 카드 1장 덱 추가, 산출력 1 소모·보존)',
    detail: {
      mainStat: '치명타 피해 21.6% (E4~E15 강화 시 +1.8%씩 증가)',
      subEffects: [
        { desc: '은밀한 오후 휴식 시간 카드 사용 시 임시 크리 피해 증가', values: ['50%', '60%', '70%', '80%'] },
      ],
      fixedEffects: [
        '팀 유일 효과',
        '탐색 시작 시 은밀한 오후 휴식 시간 1장 덱에 추가 (산출력 1 소모). 소모·보존',
      ],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '아쿠트의 봄',
    nameEn: 'Spring in Acushnet',
    exclusive: null,
    effect: '턴 종료 시 광기 +9~15, 은열쇠 충전량만큼 은열쇠 충전',
    detail: {
      mainStat: '은열쇠 충전량 21.6 (E4~E15 강화 시 +1.8씩 증가)',
      subEffects: [
        { desc: '턴 종료 시 광기 획득', values: ['9', '11', '13', '15'] },
      ],
      fixedEffects: ['턴 종료 시 은열쇠 충전량만큼 은열쇠 획득'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '태양의 추락',
    nameEn: 'Sunfall',
    exclusive: null,
    effect: '기본 피해·독 부여량·반격 생성량 +11%. 치명타 확률·치명타 피해 +11%',
    detail: {
      mainStat: '피해 증폭 14.4% (E4~E15 강화 시 +1.2%씩 증가)',
      subEffects: [
        { desc: '기본 피해/크리율/크리 피해/독 부여/반격 획득 증가', values: ['11%', '14%', '17%', '20%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '영혼의 탄생',
    nameEn: 'Birth of a Soul',
    exclusive: null,
    effect: '팀 유일: 팀 최대 HP +10%. 장비자 치료·방어막 +4~10%. [공격] 사용 후 잃은 HP의 3~6% 회복 (턴 1회). [방어] 사용 후 현재 HP의 3~6%만큼 실드 획득 (턴 1회)',
    detail: {
      mainStat: '영역 숙달 36 (E4~E15 강화 시 +3씩 증가)',
      subEffects: [
        { desc: '장착자 회복/방어막 증가', values: ['4%', '6%', '8%', '10%'] },
        { desc: '공격 카드 사용 후 잃은 HP 회복 (턴당 1회)', values: ['3%', '4%', '5%', '6%'] },
        { desc: '방어 카드 사용 후 현재 HP 기준 방어막 획득 (턴당 1회)', values: ['3%', '4%', '5%', '6%'] },
      ],
      fixedEffects: ['팀 최대 HP 10% 증가'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '극야와 새벽',
    nameEn: 'Dusk and Dawn',
    exclusive: null,
    effect: '턴 종료 시 은열쇠 +125. 생존의지 발동 후 은열쇠 +700. 응급 영지체 사용 시 산출력 최대치 +3 + 매 턴 카드 3장 추가 드로우',
    detail: {
      mainStat: '생존의지 50.4% (E4~E15 강화 시 +4.2%씩 증가)',
      subEffects: [
        { desc: '턴 종료 시 은열쇠 획득', values: ['125', '150', '175', '200'] },
        { desc: '생존의지 발동 시 은열쇠 획득', values: ['700', '800', '900', '1000'] },
      ],
      fixedEffects: ['긴급 영지 사용 시 산출력 최대치 +3, 매 턴 시작 시 카드 3장 추가 드로우'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '순은의 초심',
    nameEn: 'Heart of Silver',
    exclusive: null,
    effect: '은열쇠 발동 후 공격력의 1.5%만큼 임시 강화 + 방어력의 6%만큼 실드 획득. 응급 영지체 사용 후 턴 종료 시 모든 각성체 광기 +15',
    detail: {
      mainStat: '은열쇠 충전량 21.6 (E4~E15 강화 시 +1.8씩 증가)',
      subEffects: [
        { desc: '은열쇠 사용 후 강화 획득 (공격력 기준)', values: ['1.5%', '2%', '2.5%', '3%'] },
        { desc: '은열쇠 사용 후 방어막 획득 (방어력 기준)', values: ['6%', '7%', '12%', '15%'] },
      ],
      fixedEffects: ['긴급 영지 사용 시 턴 종료 시 아군 전체 광기 15 획득'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '폐허로부터의 재탄생',
    nameEn: 'Annihilated Rebirth',
    exclusive: null,
    effect: '장비자 광기 폭발 사용 후 광기 폭발 기본 피해 +7%·방어막 생성량·HP 회복량 +2% (최대 5중첩). 탐사 완료 후 장비자 동조율 +10%',
    detail: {
      mainStat: '광기 충전량 7.2 (E4~E15 강화 시 +0.6씩 증가)',
      subEffects: [
        { desc: '광기 폭발 사용 후 광기 폭발 기본 피해 증가 (최대 5중첩)', values: ['7%', '8%', '9%', '10%'] },
        { desc: '광기 폭발 사용 후 방어막 및 회복 증가 (최대 5중첩)', values: ['2%', '3%', '4%', '5%'] },
        { desc: '탐험 완료 후 장착자 친밀도 획득 증가', values: ['10%', '15%', '20%', '25%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },

  {
    grade: 'SSR',
    name: '안식의 입맞춤',
    nameEn: 'Kiss of Repose',
    exclusive: '도어세인',
    effect: '기본 피해 +10~25%. 적 처치 시 크리율 +2% 및 광기 폭발 기본 피해 +2~5% (최대 10중첩). 혈육 시 배아 직접 소모 시 광기 +15~30 (3턴 쿨다운)',
    detail: {
      mainStat: '치명타 피해 21.6% (E4~E15 강화 시 +1.8%씩 증가)',
      subEffects: [
        { desc: '기본 피해 증가', values: ['10%', '15%', '20%', '25%'] },
        { desc: '적 처치 시 크리율 +2% 및 광기 폭발 기본 피해 증가 (최대 10중첩)', values: ['2%', '3%', '4%', '5%'] },
        { desc: '혈육 시, 배아 직접 소모 시 광기 획득 (3턴 쿨다운)', values: ['15', '20', '25', '30'] },
      ],
      fixedEffects: ['크리율 중첩은 탐험 중 최대 10회'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '부패의 선물',
    nameEn: 'Gift of Decay',
    exclusive: '님피아',
    effect: '독 부여량 +13~25%. 광기 폭발 시 전체 적 독 부여 (공격력의 15~30%). 은열쇠 사용 후 광기 +5~8',
    detail: {
      mainStat: '피해 증폭 14.4% (E4~E15 강화 시 +1.2%씩 증가)',
      subEffects: [
        { desc: '독 부여량 증가', values: ['13%', '17%', '21%', '25%'] },
        { desc: '광기 폭발 사용 시 전체 적에게 독 부여 (공격력 기준)', values: ['15%', '20%', '25%', '30%'] },
        { desc: '은열쇠 사용 후 광기 획득', values: ['5', '6', '7', '8'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '창백한 후예',
    nameEn: 'Pale Descendant',
    exclusive: '아그리파',
    effect: '방어막 제공량 +4~10%. 방어 카드 사용 시 최고 HP 적에게 독 부여 (공격력의 12~24%). 혈육 시 독 부여 시 배아 융합 +6~12% (턴당 최대 3회)',
    detail: {
      mainStat: '문장 획득 10.8% (E4~E15 강화 시 +0.9%씩 증가)',
      subEffects: [
        { desc: '방어막 제공량 증가', values: ['4%', '6%', '8%', '10%'] },
        { desc: '방어 커맨드 카드 사용 시 최고 HP 적에게 독 부여', values: ['12%', '16%', '20%', '24%'] },
        { desc: '혈육 시, 독 부여 시 배아 융합 (턴당 최대 3회)', values: ['6%', '8%', '10%', '12%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '상처받은 지느러미',
    nameEn: 'Fin of Sorrow',
    exclusive: '카이커스',
    effect: '방어막/회복 제공량 +2.5~4% (방어력 기준). 반격 획득량 +9~15%. 방어 카드 사용 후 반격 획득 (방어력의 11~20%). 전투 시작 시 강화 획득 (방어력의 6~12%). 심해 시 촉수 피해 추가',
    detail: {
      mainStat: '문장 획득 10.8% (E4~E15 강화 시 +0.9%씩 증가)',
      subEffects: [
        { desc: '방어막/회복 제공량 증가 (CON 기준)', values: ['2.5%', '3%', '3.5%', '4%'] },
        { desc: '반격 획득량 증가', values: ['9%', '11%', '13%', '15%'] },
        { desc: '방어 카드 사용 후 반격 획득 (방어력 기준)', values: ['11%', '14%', '17%', '20%'] },
        { desc: '전투 시작 시 강화 획득 (CON 기준)', values: ['6%', '8%', '10%', '12%'] },
      ],
      fixedEffects: ['심해 시, 위 효과에 동일량의 촉수 피해 추가'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '기억의 나선',
    nameEn: 'Memory Spiral',
    exclusive: '노틸라',
    effect: '방어막 생성량 +11~20%. 턴 시작 시 이전 턴 남은 방어막의 35~50% 유지 (최대 팀 최대 HP의 11~20%)',
    detail: {
      mainStat: '영역 숙달 36 (E4~E15 강화 시 +3씩 증가)',
      subEffects: [
        { desc: '방어막 생성량 증가', values: ['11%', '14%', '17%', '20%'] },
        { desc: '턴 시작 시 이전 턴 남은 방어막의 N% 유지 (최대 팀 최대 HP의 N%)', values: ['35%유지/11%한도', '40%유지/14%한도', '45%유지/17%한도', '50%유지/20%한도'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '사실주의의 역설',
    nameEn: 'Paradoxical Realism',
    exclusive: '픽맨',
    effect: '광기·강화 획득량 +6~12%. 광기 폭발 후 아군 전체 광기 폭발 최종 피해/방어막/회복 +9~15%. 광기 폭발로 집어삼키기 발동 시 광기 +9~15',
    detail: {
      mainStat: '광기 충전량 7.2 (E4~E15 강화 시 +0.6씩 증가)',
      subEffects: [
        { desc: '광기 획득량 및 강화 획득량 증가', values: ['6%', '8%', '10%', '12%'] },
        { desc: '광기 폭발 후 아군 전체 광기 폭발 최종 피해/방어막/회복 증가', values: ['9%', '11%', '13%', '15%'] },
        { desc: '광기 폭발로 집어삼키기 발동 시 광기 획득', values: ['9', '11', '13', '15'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '허무로 추락하는 인형',
    nameEn: 'Mannikin of Oblivion',
    exclusive: '융해-돌',
    effect: '광기 획득량/독 부여량/회복량 +4~10%. 광기 폭발 후 소비한 광기의 11~20%만큼 광기 획득',
    detail: {
      mainStat: '광기 충전량 7.2 (E4~E15 강화 시 +0.6씩 증가)',
      subEffects: [
        { desc: '광기 획득량/독 부여량/회복량 증가', values: ['4%', '6%', '8%', '10%'] },
        { desc: '광기 폭발 후 소비한 광기의 N%만큼 광기 획득', values: ['11%', '14%', '17%', '20%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '성화 속 길잡이',
    nameEn: 'Flamebound Navigator',
    exclusive: '코퍼산트',
    effect: '광기 폭발의 방어막 획득량 +15~30%. 광기 폭발 후 아군 전체 크리 피해 +11~20% (촉수 1개당 +1%). 탐험 중 첫 생존의지 발동 후 다음 턴 시작 시 최대 HP 회복 +13~25%',
    detail: {
      mainStat: '생존의지 50.4% (E4~E15 강화 시 +4.2%씩 증가)',
      subEffects: [
        { desc: '광기 폭발의 방어막 획득량 증가', values: ['15%', '20%', '25%', '30%'] },
        { desc: '광기 폭발 후 아군 전체 크리 피해 증가 (촉수 1개당 +1%)', values: ['11%', '14%', '17%', '20%'] },
        { desc: '탐험 중 첫 생존의지 발동 후 다음 턴 시작 시 최대 HP 회복', values: ['13%', '17%', '21%', '25%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '족쇄를 벗어던진 날',
    nameEn: 'Chains Unbound',
    exclusive: '히로',
    effect: '커맨드 카드 기본 피해 +22~40%. 턴 시작 시 소모 효과의 커맨드 카드 추가 확률 15~30%. 혈육 시 배아 사용 시 다음 공격 카드 크리율 +20~35%',
    detail: {
      mainStat: '피해 증폭 14.4% (E4~E15 강화 시 +1.2%씩 증가)',
      subEffects: [
        { desc: '커맨드 카드 기본 피해 증가', values: ['22%', '28%', '34%', '40%'] },
        { desc: '턴 시작 시 소모 효과의 커맨드 카드 추가 확률', values: ['15%', '20%', '25%', '30%'] },
        { desc: '혈육 시, 배아 사용 시 다음 공격 카드 크리율 증가', values: ['20%', '25%', '30%', '35%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '별하늘의 짐승',
    nameEn: 'Celestial Beast',
    exclusive: '로탄',
    effect: '공격 커맨드 카드 및 광기 폭발 기본 피해 +26~50%. 공격 커맨드 카드 사용 시 이번 턴 크리율 +5% (최대 3중첩). 3중첩 시 이번 턴 크리 피해 +15%',
    detail: {
      mainStat: '치명타 피해 21.6% (E4~E15 강화 시 +1.8%씩 증가)',
      subEffects: [
        { desc: '공격 커맨드 카드 및 광기 폭발 기본 피해 증가', values: ['26%', '34%', '42%', '50%'] },
      ],
      fixedEffects: ['공격 커맨드 카드 사용 시 이번 턴 크리율 +5% (최대 3중첩)', '3중첩 달성 시 추가로 이번 턴 크리 피해 +15%'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '인도하는 돛',
    nameEn: 'Sail of Providence',
    exclusive: '셀레스트',
    effect: '장착자 회복량 +4~10%. 광기 폭발 후 다음 턴 시작 시 잃은 HP 회복 +4~10%',
    detail: {
      mainStat: '영역 숙달 36 (E4~E15 강화 시 +3씩 증가)',
      subEffects: [
        { desc: '장착자 회복량 증가', values: ['4%', '6%', '8%', '10%'] },
        { desc: '광기 폭발 후 다음 턴 시작 시 잃은 HP 회복', values: ['4%', '6%', '8%', '10%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '돌고 도는 춤사위',
    nameEn: 'Fouetté',
    exclusive: '리즈',
    effect: '능동 피해 +11~20% (공격력 기준). 커맨드 카드 사용/버리기 후 무작위 적 독 부여 (공격력의 7.5~12%). 초차원 라운드 종료 후 전체 적 독 발동 55~100%',
    detail: {
      mainStat: '치명타 확률 14.4% (E4~E15 강화 시 +1.2%씩 증가)',
      subEffects: [
        { desc: '능동 피해 증가 (공격력 기준)', values: ['11%', '14%', '17%', '20%'] },
        { desc: '커맨드 카드 사용/버리기 후 무작위 적에게 독 부여 (공격력 기준)', values: ['7.5%', '9%', '10.5%', '12%'] },
        { desc: '초차원 라운드 종료 후 전체 적 독 발동 확률', values: ['55%', '70%', '85%', '100%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '어둠 속의 평화로운 잠',
    nameEn: 'Uteri Somnia',
    exclusive: '탄망-머피',
    effect: '은열쇠 충전량 및 광기 폭발 최종 피해·방어막 +11~20%. 고요한 바다 자세 전환 시 광기 +15~30 (3턴 쿨다운). 패 한도 +2 (중첩 불가). 격랑의 파도 자세 전환 시 전체 적 탄생 의식 6중첩 (3턴 쿨다운)',
    detail: {
      mainStat: '은열쇠 충전량 21.6 (E4~E15 강화 시 +1.8씩 증가)',
      subEffects: [
        { desc: '은열쇠 충전량 및 광기 폭발 최종 피해 + 방어막 생성 증가', values: ['11%', '14%', '17%', '20%'] },
        { desc: '고요한 바다 자세 전환 시 광기 획득 (3턴 쿨다운)', values: ['15', '20', '25', '30'] },
      ],
      fixedEffects: ['패 한도 +2 (중첩 불가)', '격랑의 파도 자세 전환 시 전체 적에게 탄생 의식 6중첩 부여 (3턴 쿨다운)'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '개학일',
    nameEn: 'School Day',
    exclusive: null,
    effect: 'D-마크 또는 잿더미 폐허 상점 재고 초기화 후 광기 +35~50',
    detail: {
      mainStat: '문장 획득 10.8% (E4~E15 강화 시 +0.9%씩 증가)',
      subEffects: [
        { desc: 'D-마크 또는 잿더미 폐허 상점 재고 초기화 후 광기 획득', values: ['35', '40', '45', '50'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '소리 없는 잔치',
    nameEn: 'Silent Banquet',
    exclusive: '카렌',
    effect: '독 부여량 +9~15%. 광기 폭발 후 CON 기준 HP 회복 +11~20%. 광기 폭발 후 남은 산출력 1당 CON 기준 HP 추가 회복 +2~5%',
    detail: {
      mainStat: '광기 충전량 7.2 (E4~E15 강화 시 +0.6씩 증가)',
      subEffects: [
        { desc: '독 부여량 증가', values: ['9%', '11%', '13%', '15%'] },
        { desc: '광기 폭발 후 CON 기준 HP 회복', values: ['11%', '14%', '17%', '20%'] },
        { desc: '광기 폭발 후 남은 산출력 1당 추가 CON 기준 HP 회복', values: ['2%', '3%', '4%', '5%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '호박색의 죽음',
    nameEn: 'Amber-Tinted Death',
    exclusive: '카티구라',
    effect: '기본 피해 +20~35%. 강화 획득량 +6~12%. 커맨드 카드 사용 후 임시 강화 획득 (공격력의 11~20%, 턴당 최대 5회)',
    detail: {
      mainStat: '치명타 피해 21.6% (E4~E15 강화 시 +1.8%씩 증가)',
      subEffects: [
        { desc: '기본 피해 증가', values: ['20%', '25%', '30%', '35%'] },
        { desc: '강화 획득량 증가', values: ['6%', '8%', '10%', '12%'] },
        { desc: '커맨드 카드 사용 후 임시 강화 획득 (공격력 기준, 턴당 최대 5회)', values: ['11%', '14%', '17%', '20%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SSR',
    name: '파트너 특훈',
    nameEn: 'Special Training',
    exclusive: null,
    effect: '은열쇠 사용 후 이번 턴 크리율 +20~35%',
    detail: {
      mainStat: '치명타 확률 14.4% (E4~E15 강화 시 +1.2%씩 증가)',
      subEffects: [
        { desc: '은열쇠 사용 후 이번 턴 크리율 증가', values: ['20%', '25%', '30%', '35%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },

  // ── SR ──
  {
    grade: 'SR', name: '책임의 무게', nameEn: "Duty's Gravitas", exclusive: null,
    effect: '광기 폭발 후 아군 전체 광기 +2~5',
    detail: {
      mainStat: '영역 숙달 18 (E4~E15 강화 시 +1.5씩 증가)',
      subEffects: [
        { desc: '광기 폭발 후 아군 전체 광기 획득', values: ['2', '3', '4', '5'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '정신 집중', nameEn: 'Elevated Focus', exclusive: null,
    effect: '은열쇠 사용 후 광기 +9~15',
    detail: {
      mainStat: '은열쇠 충전량 10.8 (E4~E15 강화 시 +0.9씩 증가)',
      subEffects: [
        { desc: '은열쇠 사용 후 광기 획득', values: ['9', '11', '13', '15'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '고통의 저주', nameEn: 'Cursed Binding', exclusive: null,
    effect: '독 부여량 +6~12%. 공격 카드 사용 시 독 부여 (공격력의 9~15%, 턴당 최대 3회)',
    detail: {
      mainStat: '피해 증폭 7.2% (E4~E15 강화 시 +0.6%씩 증가)',
      subEffects: [
        { desc: '독 부여량 증가', values: ['6%', '8%', '10%', '12%'] },
        { desc: '공격 카드 사용 시 독 부여 (공격력 기준, 턴당 최대 3회)', values: ['9%', '11%', '13%', '15%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '절단과 상처', nameEn: 'Sever and Scar', exclusive: null,
    effect: '공격 카드 사용 시 피격 적 이번 턴 강화 감소 (공격력의 6~12%, 턴당 최대 3회)',
    detail: {
      mainStat: '피해 증폭 7.2% (E4~E15 강화 시 +0.6%씩 증가)',
      subEffects: [
        { desc: '공격 카드 사용 시 피격 적의 이번 턴 강화 감소 (공격력 기준, 턴당 최대 3회)', values: ['6%', '8%', '10%', '12%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '밤의 그림자 속에서', nameEn: 'Cloaked in the Night', exclusive: null,
    effect: '반격 제공량 +6~12%. 방어 카드 사용 시 이번 턴 반격 획득 (방어력의 15~30%). 생존의지 발동 시 현재 반격 중첩의 40~100%만큼 전체 적 고정 피해. 보스전 방어 카드 반격 3배',
    detail: {
      mainStat: '생존의지 25.2% (E4~E15 강화 시 +2.1%씩 증가)',
      subEffects: [
        { desc: '반격 중첩 제공량 증가', values: ['6%', '8%', '10%', '12%'] },
        { desc: '방어 카드 사용 시 이번 턴 반격 획득 (방어력 기준)', values: ['15%', '20%', '25%', '30%'] },
        { desc: '생존의지 발동 시 현재 반격 중첩의 N%만큼 전체 적에게 고정 피해', values: ['40%', '60%', '80%', '100%'] },
      ],
      fixedEffects: ['보스전에서 방어 카드의 반격 획득량 3배'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '죽음의 해부', nameEn: 'Analysis of Death', exclusive: null,
    effect: '적 처치 시 광기 +11~20 및 크리 피해 +1% (탐험 전체 지속)',
    detail: {
      mainStat: '치명타 확률 7.2% (E4~E15 강화 시 +0.6%씩 증가)',
      subEffects: [
        { desc: '적 처치 시 광기 획득 및 크리 피해 +1% (탐험 전체 지속)', values: ['11', '14', '17', '20'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '소중한 친구에게', nameEn: 'To My Dearest Friend', exclusive: null,
    effect: '광기 폭발 후 아군 전체 크리율 +13~25%',
    detail: {
      mainStat: '치명타 피해 10.8% (E4~E15 강화 시 +0.9%씩 증가)',
      subEffects: [
        { desc: '광기 폭발 후 아군 전체 크리율 증가', values: ['13%', '17%', '21%', '25%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '마음의 장벽', nameEn: 'Mind Barrier', exclusive: null,
    effect: '광기 폭발 후 방어막 획득 (방어력의 16~25%)',
    detail: {
      mainStat: '광기 충전량 3.6 (E4~E15 강화 시 +0.3씩 증가)',
      subEffects: [
        { desc: '광기 폭발 후 방어막 획득 (방어력 기준)', values: ['16%', '19%', '22%', '25%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '임계점', nameEn: 'Critical Point', exclusive: null,
    effect: '피해 시 크리율 +4~10%. 크리 발동 시 초기화',
    detail: {
      mainStat: '치명타 피해 10.8% (E4~E15 강화 시 +0.9%씩 증가)',
      subEffects: [
        { desc: '피해 시 크리율 증가', values: ['4%', '6%', '8%', '10%'] },
      ],
      fixedEffects: ['크리티컬 히트 발동 시 위 효과 초기화'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '귀족의 지팡이', nameEn: "Nobleman's Staff", exclusive: null,
    effect: '광기 폭발 기본 피해 +15~35%. 광기 폭발 방어막/회복 +9~15%',
    detail: {
      mainStat: '광기 충전량 3.6 (E4~E15 강화 시 +0.3씩 증가)',
      subEffects: [
        { desc: '광기 폭발 기본 피해 증가', values: ['15%', '20%', '25%', '35%'] },
        { desc: '광기 폭발 방어막/회복 증가', values: ['9%', '11%', '13%', '15%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '정보가 곧 생명', nameEn: 'Data is Flesh', exclusive: null,
    effect: '커맨드 카드 기본 피해 +15~30%. 커맨드 카드 방어막/회복 +9~15%',
    detail: {
      mainStat: '영역 숙달 18 (E4~E15 강화 시 +1.5씩 증가)',
      subEffects: [
        { desc: '커맨드 카드 기본 피해 증가', values: ['15%', '20%', '25%', '30%'] },
        { desc: '커맨드 카드 방어막/회복 증가', values: ['9%', '11%', '13%', '15%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '모임의 순간', nameEn: 'Moment of Reunion', exclusive: null,
    effect: '커맨드 카드 사용 시 은열쇠 획득 (턴당 최대 3회, +20~50)',
    detail: {
      mainStat: '은열쇠 충전량 10.8 (E4~E15 강화 시 +0.9씩 증가)',
      subEffects: [
        { desc: '커맨드 카드 사용 시 은열쇠 획득 (턴당 최대 3회)', values: ['20', '30', '40', '50'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '존재하지 않는 곳', nameEn: 'The Land of Nonexistence', exclusive: null,
    effect: '방어 커맨드 카드 방어막 +22~40%. 탐험 시작 시 방어 카드 1장 덱에 추가',
    detail: {
      mainStat: '문장 획득 5.4% (E4~E15 강화 시 +0.45%씩 증가)',
      subEffects: [
        { desc: '방어 커맨드 카드 방어막 증가', values: ['22%', '28%', '34%', '40%'] },
      ],
      fixedEffects: ['탐험 시작 시 방어 커맨드 카드 1장 덱에 추가'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '망각의 손', nameEn: 'Hand of Oblivion', exclusive: null,
    effect: '공격 커맨드 카드 기본 피해 +22~40%. 탐험 시작 시 공격 카드 1장 덱에 추가',
    detail: {
      mainStat: '치명타 확률 7.2% (E4~E15 강화 시 +0.6%씩 증가)',
      subEffects: [
        { desc: '공격 커맨드 카드 기본 피해 증가', values: ['22%', '28%', '34%', '40%'] },
      ],
      fixedEffects: ['탐험 시작 시 공격 커맨드 카드 1장 덱에 추가'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '이살라우의 주시', nameEn: "Isarau's Gaze", exclusive: null,
    effect: '완다 고유. 방어막·반격 제공량 +4~10%. 아군이 피해 받을 시 아군 전체 광기 1 획득 확률 70~100%',
    detail: {
      mainStat: '피해 증폭 7.2% (E4~E15 강화 시 +0.6%씩 증가)',
      subEffects: [
        { desc: '방어막 및 반격 제공량 증가', values: ['4%', '6%', '8%', '10%'] },
        { desc: '아군이 피해 받을 시 아군 전체 광기 1 획득 확률', values: ['70%', '80%', '90%', '100%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '청석 왕좌', nameEn: 'Blue Stone Throne', exclusive: null,
    effect: '산출력 3 이상 카드에 불멸 지배(보존) 부여. 소모 시 아군 전체 크리율 +4~10%. 심해 시 소모 시 산출력 +1',
    detail: {
      mainStat: '광기 충전량 3.6 (E4~E15 강화 시 +0.3씩 증가)',
      subEffects: [
        { desc: '불멸 지배 효과 소모 시 아군 전체 이번 턴 크리율 증가', values: ['4%', '6%', '8%', '10%'] },
      ],
      fixedEffects: ['전투 시작 시 산출력 3 이상의 커맨드 카드에 불멸 지배(보존) 부여', '심해 시, 불멸 지배 소모 시 산출력 1 획득'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '갇힌 광란', nameEn: 'Imprisoned Madness', exclusive: null,
    effect: '몰아치는 파도 태세 전환 시 임시 영역 숙달 +11~20% (현재 영역 숙달 기준, 3턴 쿨다운)',
    detail: {
      mainStat: '영역 숙달 18 (E4~E15 강화 시 +1.5씩 증가)',
      subEffects: [
        { desc: '몰아치는 파도 태세 전환 시 임시 영역 숙달 획득 (현재 영역 숙달 기준, 3턴 쿨다운)', values: ['11%', '14%', '17%', '20%'] },
      ],
      fixedEffects: ['팀 유일 효과'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '기억증후군', nameEn: 'Memory Syndrome', exclusive: null,
    effect: '커맨드 카드 사용 시 광기 +1. 증상 카드 사용 후 광기 +9~12 (턴당 최대 2회)',
    detail: {
      mainStat: '생존의지 25.2% (E4~E15 강화 시 +2.1%씩 증가)',
      subEffects: [
        { desc: '증상 카드 사용 후 광기 획득 (턴당 최대 2회)', values: ['9', '10', '11', '12'] },
      ],
      fixedEffects: ['커맨드 카드 사용 시 광기 1 획득'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '모험가방', nameEn: "Adventurer's Pack", exclusive: null,
    effect: '방어 카드 사용 후 이번 턴 강화 획득 (공격력의 9~18%)',
    detail: {
      mainStat: '문장 획득 5.4% (E4~E15 강화 시 +0.45%씩 증가)',
      subEffects: [
        { desc: '방어 카드 사용 후 이번 턴 강화 획득 (공격력 기준)', values: ['9%', '12%', '15%', '18%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '숙명의 물레', nameEn: 'Rota Fortunae', exclusive: null,
    effect: '방어막 생성량 +4~10%. 추가 공격 발동 시 임시 피해 증폭 +9~15% (턴당 최대 5회)',
    detail: {
      mainStat: '영역 숙달 18 (E4~E15 강화 시 +1.5씩 증가)',
      subEffects: [
        { desc: '방어막 생성량 증가', values: ['4%', '6%', '8%', '10%'] },
        { desc: '추가 공격 발동 시 임시 피해 증폭 획득 (턴당 최대 5회)', values: ['9%', '11%', '13%', '15%'] },
      ],
      fixedEffects: ['팀 유일 효과'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '운명의 룰렛', nameEn: 'Fate Roulette', exclusive: null,
    effect: '크리율 +5~8%. 적 처치 시 검은 문장 획득 및 크리율 영구 증가 (탐험당 최대 3회)',
    detail: {
      mainStat: '문장 획득 5.4% (E4~E15 강화 시 +0.45%씩 증가)',
      subEffects: [
        { desc: '크리율 증가', values: ['5%', '6%', '7%', '8%'] },
        { desc: '적 처치 시 검은 문장 획득 (탐험당 최대 3회)', values: ['3', '4', '5', '6'] },
        { desc: '3회 달성 후 크리율 영구 증가', values: ['3%', '4%', '5%', '6%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '35mm의 마법', nameEn: '35mm Magic', exclusive: null,
    effect: '독·방어막 +4~10%. 생존의지 발동 시 아군 전체 크리율/크리 피해 +9~15%',
    detail: {
      mainStat: '생존의지 25.2% (E4~E15 강화 시 +2.1%씩 증가)',
      subEffects: [
        { desc: '독 부여량 및 방어막 제공량 증가', values: ['4%', '6%', '8%', '10%'] },
        { desc: '생존의지 발동 시 아군 전체 크리율/크리 피해 증가', values: ['9%', '11%', '13%', '15%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '지난날의 꽃과 시', nameEn: 'Poetic Bygone Days', exclusive: null,
    effect: '전투 시작/생존의지 발동 시 커맨드 카드 드로우 및 비용 -1 (40~100% 확률)',
    detail: {
      mainStat: '생존의지 25.2% (E4~E15 강화 시 +2.1%씩 증가)',
      subEffects: [
        { desc: '전투 시작 또는 생존의지 발동 시 커맨드 카드 드로우 및 비용 -1 확률', values: ['40%', '60%', '80%', '100%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '푸른 고리 독소', nameEn: 'Blue-Ringed Toxin', exclusive: null,
    effect: '은열쇠 충전량 및 광기 폭발 최종 피해·방어막 +5~8%',
    detail: {
      mainStat: '은열쇠 충전량 10.8 (E4~E15 강화 시 +0.9씩 증가)',
      subEffects: [
        { desc: '은열쇠 충전량 및 광기 폭발 최종 피해 + 방어막 생성 증가', values: ['5%', '6%', '7%', '8%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '바다의 길잡이', nameEn: 'Navigator at Sea', exclusive: null,
    effect: '전투 시작 시 방어막 획득 (방어력의 15~30%). 생존의지 발동 후 다음 턴 반복',
    detail: {
      mainStat: '생존의지 25.2% (E4~E15 강화 시 +2.1%씩 증가)',
      subEffects: [
        { desc: '전투 시작 시 방어막 획득 (방어력 기준)', values: ['15%', '20%', '25%', '30%'] },
      ],
      fixedEffects: ['생존의지 발동 후 다음 턴 시작 시 위 효과 반복'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '심연의 부름', nameEn: "Deep Sea's Call", exclusive: null,
    effect: '전투 시작 시 강화 획득 (공격력의 5~8%). 심해 시 촉수 피해 추가',
    detail: {
      mainStat: '치명타 피해 10.8% (E4~E15 강화 시 +0.9%씩 증가)',
      subEffects: [
        { desc: '전투 시작 시 강화 획득 (공격력 기준)', values: ['5%', '6%', '7%', '8%'] },
        { desc: '심해 시, 촉수 피해 추가 획득 (공격력 기준)', values: ['5%', '6%', '7%', '8%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '마녀의 모자', nameEn: "Witch's Wide-Brimmed Hat", exclusive: null,
    effect: '턴 첫 번째 커맨드 카드 기본 피해 +30~60%. 초차원 시 특이점 진입 시 광기 +5~8',
    detail: {
      mainStat: '피해 증폭 7.2% (E4~E15 강화 시 +0.6%씩 증가)',
      subEffects: [
        { desc: '턴 첫 번째 커맨드 카드 기본 피해 증가', values: ['30%', '40%', '50%', '60%'] },
        { desc: '초차원 시, 위 카드가 특이점 진입 시 광기 획득', values: ['5', '6', '7', '8'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '최면 진자', nameEn: 'Hypnotic Pendulum', exclusive: null,
    effect: '은열쇠 충전량 +4~10%. 첫 전투 시작 시 전체 적 약화·취약 1중첩 부여',
    detail: {
      mainStat: '은열쇠 충전량 10.8 (E4~E15 강화 시 +0.9씩 증가)',
      subEffects: [
        { desc: '은열쇠 충전량 증가', values: ['4%', '6%', '8%', '10%'] },
      ],
      fixedEffects: ['첫 전투 시작 시 전체 적에게 약화 1중첩 및 취약 1중첩 부여'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '갈망의 붓', nameEn: 'Thirsting Brush', exclusive: null,
    effect: '협동 소모 시 다음 광기 폭발 크리율 +13~25% 및 광기 획득. 광기 폭발 후 협동 1중첩 획득',
    detail: {
      mainStat: '광기 충전량 3.6 (E4~E15 강화 시 +0.3씩 증가)',
      subEffects: [
        { desc: '협동 소모 시 다음 광기 폭발의 크리율 증가', values: ['13%', '17%', '21%', '25%'] },
        { desc: '협동 소모 각성체의 광기 충전량 기준 광기 획득', values: ['13%', '17%', '21%', '25%'] },
      ],
      fixedEffects: ['광기 폭발 후 협동 1중첩 획득, 이번 턴 다음 광기 폭발 시 협동 소모'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '설산이 녹을 때까지', nameEn: 'Til the Snow Melts', exclusive: null,
    effect: '기본 피해 +9~15%. 눈 중첩 전부 소모 시 크리율 +11~20%. 전투 시작 시 눈 25중첩 획득',
    detail: {
      mainStat: '피해 증폭 7.2% (E4~E15 강화 시 +0.6%씩 증가)',
      subEffects: [
        { desc: '기본 피해 증가', values: ['9%', '11%', '13%', '15%'] },
        { desc: '눈 중첩 전부 소모 시 크리율 증가', values: ['11%', '14%', '17%', '20%'] },
      ],
      fixedEffects: ['전투 시작 시 눈 25중첩 획득, 커맨드 카드 사용 시 광기 2 획득 및 눈 1중첩 감소'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '진리의 문', nameEn: 'Gateway of Truth', exclusive: null,
    effect: '전투 시작/첫 은열쇠 사용 후 은열쇠 획득 (충전량의 350~500%)',
    detail: {
      mainStat: '은열쇠 충전량 10.8 (E4~E15 강화 시 +0.9씩 증가)',
      subEffects: [
        { desc: '전투 시작 또는 첫 은열쇠 사용 후 은열쇠 획득 (충전량 기준)', values: ['350%', '400%', '450%', '500%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '목동의 지팡이', nameEn: "Shepherd's Staff", exclusive: null,
    effect: '전투 시작/첫 광기 폭발 후 광기 획득 (충전량의 70~100%)',
    detail: {
      mainStat: '광기 충전량 3.6 (E4~E15 강화 시 +0.3씩 증가)',
      subEffects: [
        { desc: '전투 시작 또는 첫 광기 폭발 후 광기 획득 (충전량 기준)', values: ['70%', '80%', '90%', '100%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '거울 속의 사람', nameEn: 'Man in the Mirror', exclusive: null,
    effect: '피해 받을 시 다음 턴 방어막/홍로 회복 (피해의 1.5~3%). 턴 종료 시 광기 +5',
    detail: {
      mainStat: '문장 획득 5.4% (E4~E15 강화 시 +0.45%씩 증가)',
      subEffects: [
        { desc: '피해 받을 시 다음 턴 방어막 획득 또는 홍로 회복 (피해 기준)', values: ['1.5%', '2%', '2.5%', '3%'] },
      ],
      fixedEffects: ['턴 종료 시 광기 5 획득'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '은빛 물고기의 결심', nameEn: "Silver Cod's Determination", exclusive: null,
    effect: '은빛 대구/고양이 페르소나 전환. 피해 시 각 페르소나별 은열쇠 획득 또는 크리 피해 증가 (최대 5회)',
    detail: {
      mainStat: '치명타 확률 7.2% (E4~E15 강화 시 +0.6%씩 증가)',
      subEffects: [
        { desc: '은빛 대구 페르소나: 피해 시 은열쇠 획득 (최대 5회)', values: ['25', '30', '35', '40'] },
        { desc: '고양이 페르소나: 피해 시 이번 턴 크리 피해 획득 (최대 5회)', values: ['1%', '2%', '3%', '4%'] },
      ],
      fixedEffects: ['탐험 시작 시 은빛 대구 페르소나 진입, 광기 폭발 시 페르소나 전환', '두 효과의 발동 횟수는 공유'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '성자의 존귀한 모습', nameEn: "The Divus' Visage", exclusive: null,
    effect: '점화 소모 시 최종 피해·방어막 +9~15%. 초차원 라운드 시작 시 점화 3중첩 획득',
    detail: {
      mainStat: '치명타 확률 7.2% (E4~E15 강화 시 +0.6%씩 증가)',
      subEffects: [
        { desc: '점화 소모 시 최종 피해 및 방어막 증가', values: ['9%', '11%', '13%', '15%'] },
      ],
      fixedEffects: ['초차원 라운드 시작 시 점화 3중첩 획득'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '다가오는 태양', nameEn: 'Impending Sun', exclusive: null,
    effect: '기본 피해 +9~15%. 커맨드 카드 5장 사용 후 크리율 +11~20% (턴당 1회)',
    detail: {
      mainStat: '치명타 피해 10.8% (E4~E15 강화 시 +0.9%씩 증가)',
      subEffects: [
        { desc: '기본 피해 증가', values: ['9%', '11%', '13%', '15%'] },
        { desc: '커맨드 카드 5장 사용 후 크리율 증가 (턴당 1회)', values: ['11%', '14%', '17%', '20%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '고독한 깃털', nameEn: 'Lone Feather', exclusive: null,
    effect: '방어막 제공량 +6~12%. 턴 종료 시 방어막 획득 (방어력의 4~10%, 매 턴 +2%씩 증가)',
    detail: {
      mainStat: '피해 증폭 7.2% (E4~E15 강화 시 +0.6%씩 증가)',
      subEffects: [
        { desc: '방어막 제공량 증가', values: ['6%', '8%', '10%', '12%'] },
        { desc: '턴 종료 시 방어막 획득 (방어력 기준, 매 턴 +2%씩 증가)', values: ['4%', '6%', '8%', '10%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '작별의 키스', nameEn: 'Kiss of Farewell', exclusive: null,
    effect: '광기 폭발 후 강화 획득 (공격력의 1.5~3%). 혈육 시 배아 융합 +4~10%',
    detail: {
      mainStat: '광기 충전량 3.6 (E4~E15 강화 시 +0.3씩 증가)',
      subEffects: [
        { desc: '광기 폭발 후 강화 획득 (공격력 기준)', values: ['1.5%', '2%', '2.5%', '3%'] },
        { desc: '혈육 시, 광기 폭발 후 배아 융합 획득', values: ['4%', '6%', '8%', '10%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '끝없는 연주', nameEn: 'Never-Ending Performance', exclusive: null,
    effect: '광기 폭발 후 다음 커맨드 카드 크리율/크리 피해/방어막/회복 +11~20%. 턴 종료 시 광기 +5',
    detail: {
      mainStat: '치명타 확률 7.2% (E4~E15 강화 시 +0.6%씩 증가)',
      subEffects: [
        { desc: '광기 폭발 후 다음 커맨드 카드 크리율/크리 피해/방어막/회복 증가', values: ['11%', '14%', '17%', '20%'] },
      ],
      fixedEffects: ['턴 종료 시 광기 5 획득'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '빙하 아래에 잠든', nameEn: 'Slumber Beneath the Glacier', exclusive: null,
    effect: '방어막 +4~10%. 은열쇠 사용 후 아군 크리율/크리 피해 +4~10% (최대 HP 3% 희생). 심해 시 촉수 피해 추가',
    detail: {
      mainStat: '은열쇠 충전량 10.8 (E4~E15 강화 시 +0.9씩 증가)',
      subEffects: [
        { desc: '방어막 제공량 증가', values: ['4%', '6%', '8%', '10%'] },
        { desc: '은열쇠 사용 후 아군 전체 크리율/크리 피해 증가 (최대 HP 3% 희생)', values: ['4%', '6%', '8%', '10%'] },
        { desc: '심해 시, 은열쇠 사용 시 촉수 피해 추가 (공격력 기준)', values: ['1.5%', '2%', '2.5%', '3%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'SR', name: '무수한 총애의 시선', nameEn: 'Million Loving Gaze', exclusive: null,
    effect: '피해량 +6~12% (공격력 기준). 혈육 시 광기 폭발로 집어삼키기 발동 시마다 피해량 추가 증가 (공격력의 3%)',
    detail: {
      mainStat: '치명타 확률 7.2% (E4~E15 강화 시 +0.6%씩 증가)',
      subEffects: [
        { desc: '피해량 증가 (공격력 기준)', values: ['6%', '8%', '10%', '12%'] },
      ],
      fixedEffects: ['혈육 시, 광기 폭발로 집어삼키기 발동 시마다 피해량 추가 증가 (공격력의 3%)'],
    },
    breakthroughEffects: null,
  },

  // ── R ──
  {
    grade: 'R', name: '폭식', nameEn: 'Gluttony', exclusive: null,
    effect: '신탁 포기 시 최대 HP +11~20% 증가 (탐험당 최대 2회)',
    detail: {
      mainStat: '광기 충전량 1.8 (E4~E15 강화 시 +0.2씩 증가)',
      subEffects: [
        { desc: '신탁 포기 시 최대 HP 증가 (탐험당 최대 2회)', values: ['11%', '14%', '17%', '20%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'R', name: '광란', nameEn: 'Frenzy', exclusive: null,
    effect: '저주받은 유물 구매 시 검은 문장 +9~15 획득. 상점 유물 수 3개로 증가 (세 번째는 저주받은 유물)',
    detail: {
      mainStat: '은열쇠 충전량 3.6 (E4~E15 강화 시 +0.6씩 증가)',
      subEffects: [
        { desc: '저주받은 유물 구매 시 검은 문장 획득', values: ['9', '11', '13', '15'] },
      ],
      fixedEffects: ['상점 유물 수 3개로 증가 (세 번째는 저주받은 유물)'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'R', name: '총애', nameEn: 'Favor', exclusive: null,
    effect: '탐험 시작 시 아군 전체 광기 +11~20 획득. 보스전 시작 시 카드 2장 추가 드로우',
    detail: {
      mainStat: '치명타 확률 2.4% (E4~E15 강화 시 +0.4%씩 증가)',
      subEffects: [
        { desc: '탐험 시작 시 아군 전체 광기 획득', values: ['11', '14', '17', '20'] },
      ],
      fixedEffects: ['보스전 시작 시 카드 2장 추가 드로우'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'R', name: '발현', nameEn: 'Emerge', exclusive: null,
    effect: '상점 재고 초기화 비용 감소 (검은 문장 -2~5). D-마크 상점 추가 초기화 1회 가능',
    detail: {
      mainStat: '문장 획득 1.8% (E4~E15 강화 시 +0.3%씩 증가)',
      subEffects: [
        { desc: '상점 재고 초기화 비용 감소 (검은 문장)', values: ['2', '3', '4', '5'] },
      ],
      fixedEffects: ['D-마크 상점 추가 초기화 1회 가능'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'R', name: '환각', nameEn: 'Delirium', exclusive: null,
    effect: 'D-마크 상점 각성 카드 구매 비용 감소 (검은 문장 -9~15). 장착자의 각성 카드가 고유(Innate) 효과 획득',
    detail: {
      mainStat: '피해 증폭 2.4% (E4~E15 강화 시 +0.4%씩 증가)',
      subEffects: [
        { desc: 'D-마크 상점 각성 카드 구매 비용 감소 (검은 문장)', values: ['9', '11', '13', '15'] },
      ],
      fixedEffects: ['장착자의 각성 카드가 고유(Innate) 효과 획득'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'R', name: '밀담', nameEn: 'Whisper', exclusive: null,
    effect: '전투 종료 시 광기가 가장 낮은 각성체 광기 +35~50 획득',
    detail: {
      mainStat: '생존의지 8.4% (E4~E15 강화 시 +1.4%씩 증가)',
      subEffects: [
        { desc: '전투 종료 시 광기가 가장 낮은 각성체 광기 획득', values: ['35', '40', '45', '50'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'R', name: '희망', nameEn: 'Hope', exclusive: null,
    effect: '미탐색 타일 이동 시 잃은 HP 회복 +2~5%. 긴급 영지 사용 후 아군 전체 크리율/크리 피해 100% 증가',
    detail: {
      mainStat: '치명타 확률 2.4% (E4~E15 강화 시 +0.4%씩 증가)',
      subEffects: [
        { desc: '미탐색 타일 이동 시 잃은 HP 회복', values: ['2%', '3%', '4%', '5%'] },
      ],
      fixedEffects: ['긴급 영지 사용 후 아군 전체 크리율/크리 피해 100% 증가'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'R', name: '계시', nameEn: 'Epiphany', exclusive: null,
    effect: '탐험 시작 시 은열쇠 +400~1000 획득. 보스전 시작 시 산출력 2 획득',
    detail: {
      mainStat: '영역 숙달 6 (E4~E15 강화 시 +1씩 증가)',
      subEffects: [
        { desc: '탐험 시작 시 은열쇠 획득', values: ['400', '600', '800', '1000'] },
      ],
      fixedEffects: ['보스전 시작 시 산출력 2 획득'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'R', name: '징벌', nameEn: 'Punishment', exclusive: null,
    effect: '보스전 시작 시 검은 문장 최대 50개 소모, 소모당 생존의지 +2~5%',
    detail: {
      mainStat: '생존의지 8.4% (E4~E15 강화 시 +1.4%씩 증가)',
      subEffects: [
        { desc: '보스전 시작 시 검은 문장 최대 50개 소모, 소모당 생존의지 증가', values: ['2%', '3%', '4%', '5%'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'R', name: '축복', nameEn: 'Blessing', exclusive: null,
    effect: '획득한 신탁 업그레이드 확률 +15~30%. 일반 전투 후 신탁 선택지 4개로 증가',
    detail: {
      mainStat: '피해 증폭 2.4% (E4~E15 강화 시 +0.4%씩 증가)',
      subEffects: [
        { desc: '획득한 신탁이 업그레이드될 확률', values: ['15%', '20%', '25%', '30%'] },
      ],
      fixedEffects: ['일반 전투 후 신탁 선택지 4개로 증가'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'R', name: '활성', nameEn: 'Vitality', exclusive: null,
    effect: '교차로 지역에서 증상 카드 제거 및 검은 문장 +11~20 획득 (최대 3장)',
    detail: {
      mainStat: '은열쇠 충전량 3.6 (E4~E15 강화 시 +0.6씩 증가)',
      subEffects: [
        { desc: '교차로 지역에서 증상 카드 제거 및 검은 문장 획득 (최대 3장)', values: ['11', '14', '17', '20'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'R', name: '추방', nameEn: 'Exile', exclusive: null,
    effect: '증상 카드 판매 시 검은 문장 +13~25 획득 (흑조 상점)',
    detail: {
      mainStat: '영역 숙달 6 (E4~E15 강화 시 +1씩 증가)',
      subEffects: [
        { desc: '증상 카드 판매 시 검은 문장 획득 (흑조 상점)', values: ['13', '17', '21', '25'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'R', name: '흡입', nameEn: 'Suction', exclusive: null,
    effect: '휴식 구역 HP 회복량 +22~40%. 회복 선택 시 덱에 [고무] 카드 2장 추가',
    detail: {
      mainStat: '치명타 피해 3.6% (E4~E15 강화 시 +0.6%씩 증가)',
      subEffects: [
        { desc: '휴식 구역에서 HP 회복량 증가', values: ['22%', '28%', '34%', '40%'] },
      ],
      fixedEffects: ['HP 회복 선택 시 덱에 [고무] 카드 2장 추가'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'R', name: '숙성', nameEn: 'Aged', exclusive: null,
    effect: '전투 종료 시 은열쇠 +400~1000 획득',
    detail: {
      mainStat: '치명타 피해 3.6% (E4~E15 강화 시 +0.6%씩 증가)',
      subEffects: [
        { desc: '전투 종료 시 은열쇠 획득', values: ['400', '600', '800', '1000'] },
      ],
      fixedEffects: [],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'R', name: '탐욕', nameEn: 'Greed', exclusive: null,
    effect: '탐험 시작 시 검은 문장 +15~30 획득. 최대 유물 보유 한도 +2',
    detail: {
      mainStat: '광기 충전량 1.2 (E4~E15 강화 시 +0.2씩 증가)',
      subEffects: [
        { desc: '탐험 시작 시 검은 문장 획득', values: ['15', '20', '25', '30'] },
      ],
      fixedEffects: ['최대 유물 보유 한도 +2'],
    },
    breakthroughEffects: null,
  },
  {
    grade: 'R', name: '통찰', nameEn: 'Insight', exclusive: null,
    effect: '탐험 완전 공개 시 검은 문장 +15~30 획득. 탐험 시야 반경 +1. 보스전 시작 시 전체 적에게 약화/취약 1중첩 부여',
    detail: {
      mainStat: '문장 획득 1.8% (E4~E15 강화 시 +0.3%씩 증가)',
      subEffects: [
        { desc: '탐험 완전 공개 시 검은 문장 획득', values: ['15', '20', '25', '30'] },
      ],
      fixedEffects: ['탐험 시야 반경 +1', '보스전 시작 시 전체 적에게 약화 1중첩 및 취약 1중첩 부여'],
    },
    breakthroughEffects: null,
  },
];
