// 공통 필터 유틸

function setupSearch(inputId, tableBodyId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('input', () => applyFilters(tableBodyId));
}

function setupFilterBtns(groupClass, tableBodyId) {
  document.querySelectorAll(`.${groupClass} .filter-btn`).forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest(`.${groupClass}`);
      group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters(tableBodyId);
    });
  });
}

function getActiveFilter(groupClass) {
  const active = document.querySelector(`.${groupClass} .filter-btn.active`);
  return active ? active.dataset.value : 'all';
}

function applyFilters(tableBodyId) {
  const tbody = document.getElementById(tableBodyId);
  if (!tbody) return;

  const searchVal = (document.getElementById('search-input')?.value || '').toLowerCase();
  const factionVal = getActiveFilter('faction-group');
  const gradeVal   = getActiveFilter('grade-group');
  const ownedVal   = getActiveFilter('owned-group');

  let visible = 0;
  tbody.querySelectorAll('tr').forEach(row => {
    const text    = row.textContent.toLowerCase();
    const faction = row.dataset.faction || '';
    const grade   = row.dataset.grade   || '';
    const owned   = row.dataset.owned   || '';

    const matchSearch  = !searchVal || text.includes(searchVal);
    const matchFaction = factionVal === 'all' || faction === factionVal;
    const matchGrade   = gradeVal   === 'all' || grade   === gradeVal;
    const matchOwned   = ownedVal   === 'all' || owned   === ownedVal;

    const show = matchSearch && matchFaction && matchGrade && matchOwned;
    row.classList.toggle('hidden', !show);
    if (show) visible++;
  });

  const counter = document.getElementById('result-count');
  if (counter) counter.textContent = `${visible}건`;
}

// 현재 페이지 nav 하이라이트
document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname.replace(/\/$/, '');
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '');
    if (path.endsWith(href) || (href === '/index.html' && (path === '' || path.endsWith('/')))) {
      a.classList.add('active');
    }
  });
});
