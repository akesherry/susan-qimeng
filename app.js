'use strict';

const KEY = 'susan-desk-v1';

const STAGE = {
  point: '指认期',
  pattern: '句型期',
  context: '常速期'
};

const STAGE_HINT = {
  point: '这周把指认做稳。句型只留一个，例如 It\'s a ___.',
  pattern: '这周的中心是随机组句：旧词装进新句型。',
  context: '这周把她会的句子串进绘本。能复述或演出来，就是 +1。'
};

const POS = [
  ['noun', '名词'],
  ['verb', '动词'],
  ['adj', '形容词'],
  ['other', '其他']
];

const ZOOM = ['音效、表情、动作，夸张一点', '无厘头、好笑', '变大、变小、变颜色', '反常识', '空间和五感'];
const SCRIPT_CHIPS = ['用英语把目标句再说一遍', '等她自己想说', '旧词装进新句型', '看她卡在哪一句', '卡壳就退回上一层横着练'];
const WEEKDAY = ['一', '二', '三', '四', '五', '六', '日'];

const METHOD = [
  ['已知区域', '听懂，而且不靠中文对译就能自己用，才算已知。你搭一把，她能把一句说完或演出来，这就是 +1。每周停在这里。'],
  ['内容包', '一周只抓一个句型。三件事都要有：单词指认、随机组句、绘本讨论。自拼可以加，不占掉这三件。'],
  ['随机组句', '用她已经会的词，去装这周的新句型。旧词负责托住她，新句型才是那一个 +1。抽到哪张说哪张。'],
  ['Zoom in', '同一句往下钻，钻的时候带上她会的句子。五个方向够用：音效和动作、搞笑、变大变小变颜色、反常识、空间和五感。'],
  ['你先会', '带她之前，你自己先把这个句型说顺。先抓住最基本的那一种结构，更难的变式以后碰到再练。她开口之后，你用英语把目标句再说一遍。'],
  ['循环着用', '句型没有毕业的一天。下周在聊天和绘本里还要再碰到。你观察到哪句不会，就退回去横着练。']
];

const SKIP = new Set('a an the is are am was were be to for of and or you i we he she it this that my your our please dont don not do did can will just so very really us me them their its time let lets at on in up down here there with from by as if than then too also baby look'.split(' '));
const VERBS = new Set('eat go come open close sit stand wash sleep play run walk see want like drink stop wait help hold give take put jump cry hop read sing dance brush put'.split(' '));
const ADJ = new Set('big small little red blue yellow green white black hot cold yummy delicious pretty beautiful nice good hungry sleepy tired happy sad clean dirty soft hard cute yucky tall fast slow'.split(' '));

const BOOK = [
  { pattern: "It's a ___.", zh: '这是一个……', example: "It's a cat.", exampleZh: '这是一只猫。', keys: '这是 这个是' },
  { pattern: "What's this? It's a ___.", zh: '这是什么？这是一个……', example: "What's this? It's a chick.", exampleZh: '这是什么？这是一只小鸡。', keys: '这是什么 什么' },
  { pattern: 'I see a ___.', zh: '我看见一个……', example: 'I see a bird.', exampleZh: '我看见一只鸟。', keys: '看见 看到' },
  { pattern: 'This is my ___.', zh: '这是我的……', example: 'This is my cup.', exampleZh: '这是我的杯子。', keys: '我的' },
  { pattern: 'I have a ___.', zh: '我有一个……', example: 'I have a book.', exampleZh: '我有一本书。', keys: '我有' },
  { pattern: 'Where is the ___?', zh: '……在哪里？', example: 'Where is the ball?', exampleZh: '球在哪里？', keys: '在哪 哪里' },
  { pattern: 'Look at the ___.', zh: '看一看……', example: 'Look at the moon.', exampleZh: '看月亮。', keys: '看一看 看看' },
  { pattern: 'I like ___.', zh: '我喜欢……', example: 'I like apples.', exampleZh: '我喜欢苹果。', keys: '喜欢' },
  { pattern: 'I want ___.', zh: '我想要……', example: 'I want water.', exampleZh: '我想要水。', keys: '想要 我要' },
  { pattern: 'Do you want ___?', zh: '你想要……吗？', example: 'Do you want milk?', exampleZh: '你想喝牛奶吗？', keys: '想不想 要不要' },
  { pattern: 'Can you ___?', zh: '你可以……吗？', example: 'Can you jump?', exampleZh: '你可以跳一跳吗？', keys: '可以吗 能不能' },
  { pattern: 'I can ___.', zh: '我可以……', example: 'I can hop.', exampleZh: '我可以跳。', keys: '我会 我能' },
  { pattern: "Let's ___.", zh: '我们一起……', example: "Let's eat.", exampleZh: '我们一起吃饭。', keys: '一起 吃饭 我们走 玩耍' },
  { pattern: "It's time to ___.", zh: '该……了', example: "It's time to sleep.", exampleZh: '该睡觉了。', keys: '该睡觉 该吃饭 该洗手 该走了' },
  { pattern: 'Open the ___.', zh: '打开……', example: 'Open the door.', exampleZh: '打开门。', keys: '打开' },
  { pattern: 'Close the ___.', zh: '关上……', example: 'Close the door.', exampleZh: '关上门。', keys: '关上 关门' },
  { pattern: 'Wash your ___.', zh: '洗一洗你的……', example: 'Wash your hands.', exampleZh: '洗手。', keys: '洗手 洗脸' },
  { pattern: 'Give me the ___.', zh: '把……给我', example: 'Give me the cup.', exampleZh: '把杯子给我。', keys: '给我' },
  { pattern: "Don't ___.", zh: '不要……', example: "Don't run.", exampleZh: '不要跑。', keys: '不要 别跑 别哭' },
  { pattern: 'The ___ is ___.', zh: '这个……是……（颜色、大小）', example: 'The ball is red.', exampleZh: '球是红色的。', keys: '颜色 红色 大大 小小' },
  { pattern: 'Come here.', zh: '到这里来', example: 'Come here.', exampleZh: '过来。', keys: '过来 到这' },
  { pattern: 'Sit down.', zh: '坐下', example: 'Sit down.', exampleZh: '坐下。', keys: '坐下' },
  { pattern: 'Stand up.', zh: '站起来', example: 'Stand up.', exampleZh: '站起来。', keys: '站起来' },
  { pattern: 'Good job.', zh: '做得好', example: 'Good job.', exampleZh: '真棒。', keys: '真棒 做得好 好厉害' },
  { pattern: 'Be careful.', zh: '小心一点', example: 'Be careful.', exampleZh: '小心。', keys: '小心' },
  { pattern: 'Thank you.', zh: '谢谢', example: 'Thank you.', exampleZh: '谢谢你。', keys: '谢谢' },
  { pattern: "I'm sorry.", zh: '对不起', example: "I'm sorry.", exampleZh: '对不起。', keys: '对不起 抱歉' },
  { pattern: 'I love you.', zh: '我爱你', example: 'I love you.', exampleZh: '我爱你。', keys: '爱你 我爱你' },
  { pattern: 'Good morning.', zh: '早上好', example: 'Good morning.', exampleZh: '早上好。', keys: '早上 早安' },
  { pattern: 'Good night.', zh: '晚安', example: 'Good night.', exampleZh: '晚安。', keys: '晚安 睡觉' },
  { pattern: 'Wait a minute.', zh: '等一下', example: 'Wait a minute.', exampleZh: '等一下。', keys: '等一下 等一等' },
  { pattern: 'All done.', zh: '做完了', example: 'All done.', exampleZh: '好了，做完了。', keys: '做完 好了' },
  { pattern: 'More, please.', zh: '还要', example: 'More, please.', exampleZh: '还要。', keys: '还要 再来' }
];

const OFFLINE = [
  ['我们该吃饭了', "It's time to eat."],
  ['该吃饭了', "It's time to eat."],
  ['吃饭了', "It's time to eat."],
  ['吃饭', "Let's eat."],
  ['我们吃饭吧', "Let's eat."],
  ['该睡觉了', "It's time to sleep."],
  ['睡觉了', "It's time to sleep."],
  ['睡觉', "It's time to sleep."],
  ['洗手', 'Wash your hands.'],
  ['过来', 'Come here.'],
  ['到这里来', 'Come here.'],
  ['坐下', 'Sit down.'],
  ['站起来', 'Stand up.'],
  ['小心', 'Be careful.'],
  ['真棒', 'Good job.'],
  ['做得好', 'Good job.'],
  ['我爱你', 'I love you.'],
  ['妈妈爱你', 'I love you.'],
  ['谢谢', 'Thank you.'],
  ['谢谢你', 'Thank you.'],
  ['对不起', "I'm sorry."],
  ['喝水', 'Drink some water.'],
  ['喝牛奶', 'Drink some milk.'],
  ['穿衣服', 'Put your clothes on.'],
  ['穿鞋', 'Shoes on.'],
  ['打开门', 'Open the door.'],
  ['关门', 'Close the door.'],
  ['不要跑', "Don't run."],
  ['不要哭', "Don't cry."],
  ['看这里', 'Look here.'],
  ['看着我', 'Look at me.'],
  ['等一下', 'Wait a minute.'],
  ['好了', 'All done.'],
  ['做完了', 'All done.'],
  ['还要', 'More, please.'],
  ['我还要', 'I want more.'],
  ['不要了', 'No, thank you.'],
  ['早上好', 'Good morning.'],
  ['晚安', 'Night-night.'],
  ['你还好吗', 'Are you okay?'],
  ['这是什么', 'What is this?'],
  ['这是猫', "It's a cat."],
  ['这是一只猫', "It's a cat."],
  ['我看见一只鸟', 'I see a bird.'],
  ['我喜欢苹果', 'I like apples.'],
  ['你想要牛奶吗', 'Do you want milk?'],
  ['我们走吧', "Let's go."],
  ['走吧', "Let's go."]
];

const WORD_ZH = {
  苹果: 'apple',
  香蕉: 'banana',
  猫: 'cat',
  狗: 'dog',
  鸟: 'bird',
  水: 'water',
  牛奶: 'milk',
  球: 'ball',
  书: 'book',
  手: 'hands',
  门: 'door',
  鞋: 'shoes',
  车: 'car',
  花: 'flower',
  月亮: 'moon',
  杯子: 'cup',
  米饭: 'rice',
  鱼: 'fish',
  红色: 'red',
  大: 'big',
  小: 'small',
  吃: 'eat',
  喝: 'drink',
  睡: 'sleep',
  跑: 'run',
  跳: 'jump',
  看: 'look',
  走: 'go',
  玩: 'play',
  洗: 'wash',
  坐: 'sit',
  开: 'open',
  关: 'close'
};

const ui = {
  view: 'talk',
  zone: 'all',
  kind: 'all',
  pos: 'all',
  query: '',
  editingId: null,
  pendingDelete: null,
  pendingWeek: false,
  practiceIndex: 0,
  focusAdd: false,
  needName: false,
  flash: '',
  confirmReset: false,
  draft: { text: '', kind: 'word', pos: 'noun', level: '3' },
  batchText: '',
  batchPos: 'noun',
  batchLevel: '3',
  talkSource: '',
  slotWord: '',
  talkPattern: '',
  talkHint: '',
  talkBusy: false,
  talkResult: null,
  talkError: '',
  showAdd: false,
  weekMore: false,
  weekDate: '',
  lexicon: 'pattern',
  guideOpen: 0
};

let state = null;

function uid() {
  return Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4);
}

function iso(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function parseISO(s) {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function addDays(start, n) {
  const d = parseISO(start);
  d.setDate(d.getDate() + n);
  return iso(d);
}

function mondayOf(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = d.getDay();
  d.setDate(d.getDate() + (day === 0 ? -6 : 1 - day));
  return iso(d);
}

function zhDate(s) {
  const d = parseISO(s);
  return `${d.getMonth() + 1}月${d.getDate()}日`;
}

function weekRange(start) {
  return `${zhDate(start)} – ${zhDate(addDays(start, 6))}`;
}

function formatWhen(ts) {
  const d = new Date(ts);
  return `${d.getMonth() + 1}月${d.getDate()}日 ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

function levelLabel(kind, level) {
  const map = kind === 'pattern' ? ['接触', '跟说', '会用', '内化'] : ['接触', '指认', '听懂', '会用'];
  return map[level] || map[0];
}

function defaultLevel(kind) {
  return kind === 'pattern' ? 2 : 3;
}

function isKnown(item) {
  return item.kind === 'pattern' ? item.level >= 2 : item.level >= 3;
}

function posName(pos) {
  return (POS.find(([id]) => id === pos) || ['', '其他'])[1];
}

function childName() {
  return (state.profile.childName || '').trim() || '她';
}

function cx(...xs) {
  return xs.filter(Boolean).join(' ');
}

function h(tag, attrs = {}, kids = []) {
  const node = document.createElement(tag);
  const prop = { value: 1, checked: 1, selected: 1 };
  Object.entries(attrs).forEach(([k, v]) => {
    if (v == null || v === false) return;
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else if (k in prop) node[k] = v;
    else node.setAttribute(k, v === true ? '' : String(v));
  });
  const list = Array.isArray(kids) ? kids : [kids];
  list.forEach((kid) => {
    if (kid == null || kid === false) return;
    node.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
  });
  return node;
}

function fresh() {
  return {
    version: 1,
    profile: { ready: false, childName: '', age: '', stage: 'pattern' },
    settings: { useAlmost: false },
    items: [],
    weeks: [],
    activeWeekId: null
  };
}

function blankChecks() {
  return { say: false, lines: false, zoom: false, book: false };
}

function blankWeek(start) {
  const days = {};
  for (let i = 0; i < 7; i += 1) {
    days[addDays(start, i)] = { point: false, drill: false, book: false, phonics: false };
  }
  return {
    id: uid(),
    start,
    childPattern: '',
    internalize: '',
    phonics: '',
    book: '',
    zoom: '',
    parentPattern: '',
    parentStructure: '',
    parentNote: '',
    script: '',
    parentLines: [],
    drillLines: [],
    pointIds: [],
    days,
    logs: [],
    reviewKnown: '',
    reviewPlus: '',
    reviewSelf: '',
    prepChecks: blankChecks()
  };
}

function hydrateWeek(w) {
  const base = blankWeek(w.start || mondayOf(new Date()));
  const next = { ...base, ...w, id: w.id || uid(), start: w.start || base.start };
  next.prepChecks = { ...blankChecks(), ...(w.prepChecks || {}) };
  next.parentLines = Array.isArray(w.parentLines) ? w.parentLines : [];
  next.drillLines = Array.isArray(w.drillLines) ? w.drillLines : [];
  next.pointIds = Array.isArray(w.pointIds) ? w.pointIds : [];
  next.logs = Array.isArray(w.logs) ? w.logs : [];
  next.days = { ...base.days, ...(w.days || {}) };
  for (let i = 0; i < 7; i += 1) {
    const date = addDays(next.start, i);
    next.days[date] = { point: false, drill: false, book: false, phonics: false, ...(next.days[date] || {}) };
  }
  return next;
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return fresh();
    const data = JSON.parse(raw);
    if (!data.profile || !Array.isArray(data.items) || !Array.isArray(data.weeks)) return fresh();
    data.settings = { useAlmost: false, ...(data.settings || {}) };
    data.weeks = data.weeks.map(hydrateWeek);
    data.items = data.items.map((item) => ({
      pos: '',
      knownAt: null,
      createdAt: iso(new Date()),
      ...item,
      level: Number(item.level) || 0
    }));
    return data;
  } catch (err) {
    return fresh();
  }
}

function save() {
  localStorage.setItem(KEY, JSON.stringify(state));
  const node = document.querySelector('[data-saved]');
  if (node) {
    node.textContent = '已保存';
    clearTimeout(save._t);
    save._t = setTimeout(() => {
      if (node.isConnected) node.textContent = '存在这台浏览器';
    }, 900);
  }
}

function flash(msg) {
  ui.flash = msg;
  render();
  clearTimeout(flash._t);
  flash._t = setTimeout(() => {
    ui.flash = '';
    const node = document.querySelector('[data-flash]');
    if (node) node.remove();
  }, 2600);
}

function activeWeek() {
  return state.weeks.find((w) => w.id === state.activeWeekId) || null;
}

function bootWeek() {
  if (!state.profile.ready) return;
  if (!activeWeek()) {
    const start = mondayOf(new Date());
    let week = state.weeks.find((w) => w.start === start);
    if (!week) {
      week = blankWeek(start);
      state.weeks.push(week);
    }
    state.activeWeekId = week.id;
    save();
  }
}

function syncKnown(item) {
  if (isKnown(item)) {
    if (!item.knownAt) item.knownAt = iso(new Date());
  } else item.knownAt = null;
}

function ensureLexeme(kind, text, pos, levelIfNew) {
  const value = text.trim();
  if (!value) return null;
  const found = state.items.find((item) => item.kind === kind && item.text.toLowerCase() === value.toLowerCase());
  if (found) return { item: found, created: false };
  const item = {
    id: uid(),
    kind,
    text: value,
    pos: kind === 'word' ? (pos || 'noun') : '',
    level: levelIfNew,
    knownAt: null,
    createdAt: iso(new Date())
  };
  syncKnown(item);
  state.items.unshift(item);
  return { item, created: true };
}

function wordPool() {
  const known = state.items.filter((item) => item.kind === 'word' && item.level >= 3);
  if (!state.settings.useAlmost) return known;
  return known.concat(state.items.filter((item) => item.kind === 'word' && item.level === 2));
}

function fillPattern(pattern, picks) {
  const text = pattern.trim();
  if (!text.includes('___')) return `${text} ${picks[0] ? picks[0].text : ''}`.trim();
  let i = 0;
  return text.replace(/___/g, () => {
    const pick = picks[i] || picks[0];
    i += 1;
    return pick ? pick.text : '___';
  });
}

function makeLine(pattern, pool, withPlus, plusText) {
  const slots = Math.max((pattern.match(/___/g) || []).length, 1);
  const plusAt = withPlus && plusText ? Math.floor(Math.random() * slots) : -1;
  const picks = [];
  for (let i = 0; i < slots; i += 1) {
    if (i === plusAt) picks.push({ text: plusText.trim(), plus: true, soft: false });
    else {
      const word = pool[Math.floor(Math.random() * pool.length)];
      picks.push({ text: word.text, plus: false, soft: word.level < 3 });
    }
  }
  return {
    id: uid(),
    text: fillPattern(pattern, picks),
    plus: plusAt >= 0,
    soft: picks.some((pick) => pick.soft),
    done: false
  };
}

function buildSentences(pattern, pool, plusText, count) {
  const seen = new Set();
  const result = [];
  let guard = 0;
  while (result.length < count && guard < 48) {
    guard += 1;
    const line = makeLine(pattern, pool, false, plusText);
    if (seen.has(line.text)) continue;
    seen.add(line.text);
    result.push(line);
  }
  if (plusText && result.length) {
    const plusLine = makeLine(pattern, pool, true, plusText);
    const at = Math.floor(Math.random() * result.length);
    result[at] = plusLine;
  }
  return result;
}

function weekDates(week) {
  return Array.from({ length: 7 }, (_, i) => addDays(week.start, i));
}

function progressOf(week) {
  const keys = ['point', 'drill', 'book'];
  if ((week.phonics || '').trim()) keys.push('phonics');
  let done = 0;
  weekDates(week).forEach((date) => {
    keys.forEach((key) => {
      if (week.days[date] && week.days[date][key]) done += 1;
    });
  });
  return { done, total: keys.length * 7 };
}

function counts() {
  const words = state.items.filter((item) => item.kind === 'word');
  const patterns = state.items.filter((item) => item.kind === 'pattern');
  return {
    knownWords: words.filter(isKnown).length,
    knownPatterns: patterns.filter(isKnown).length,
    rest: state.items.filter((item) => !isKnown(item)).length
  };
}

function prevWeek(week) {
  return state.weeks
    .filter((item) => item.start < week.start)
    .sort((a, b) => b.start.localeCompare(a.start))[0] || null;
}

function appendLine(week, key, line) {
  const current = week[key] || '';
  if (current.includes(line)) return;
  week[key] = current.trim() ? `${current.trim()}\n${line}` : line;
  save();
  render();
}

function finishWelcome() {
  if (!(state.profile.childName || '').trim()) {
    ui.needName = true;
    render();
    return;
  }
  state.profile.ready = true;
  ui.needName = false;
  ui.view = 'talk';
  bootWeek();
  save();
  render({ scroll: 'top' });
}

function createNextWeek() {
  const starts = state.weeks.map((week) => week.start).sort();
  const latest = starts[starts.length - 1] || mondayOf(new Date());
  const current = mondayOf(new Date());
  let start = addDays(latest, 7);
  if (!state.weeks.some((week) => week.start === current) && latest < current) start = current;
  if (state.weeks.some((week) => week.start === start)) {
    flash('这一周已经在列表里');
    return;
  }
  const week = blankWeek(start);
  state.weeks.push(week);
  state.activeWeekId = week.id;
  ui.practiceIndex = 0;
  ui.view = 'week';
  save();
  render({ scroll: 'top' });
}

function generate(which) {
  const week = activeWeek();
  const pattern = (which === 'parent' ? (week.parentPattern || week.childPattern) : week.childPattern).trim();
  if (!pattern) {
    flash('先写下句型。要换词的地方写成 ___');
    return;
  }
  const pool = wordPool();
  if (!pool.length) {
    flash('先在词典里标出她会用的词');
    return;
  }
  const plus = (week.internalize || '').trim();
  const lines = buildSentences(pattern, pool, plus, which === 'parent' ? 6 : 3);
  if (which === 'parent') {
    week.parentLines = lines;
    ui.practiceIndex = 0;
  } else week.drillLines = lines;
  save();
  render();
}

function parseWordList(text) {
  const words = [];
  const seen = new Set();
  text.split(/[\n\r,，、;；\t]+/).forEach((piece) => {
    const chunk = piece.trim();
    if (!chunk) return;
    const quoted = (chunk.startsWith('"') && chunk.endsWith('"'))
      || (chunk.startsWith('“') && chunk.endsWith('”'))
      || (chunk.startsWith('「') && chunk.endsWith('」'));
    const parts = quoted ? [chunk.slice(1, -1).trim()] : chunk.split(/\s+/);
    parts.forEach((part) => {
      const word = part.trim();
      const key = word.toLowerCase();
      if (!word || seen.has(key)) return;
      seen.add(key);
      words.push(word);
    });
  });
  return words;
}

function importBatch(text, pos, level) {
  const words = parseWordList(text);
  if (!words.length) {
    flash('先贴上词语。一行一个，或用逗号、空格隔开。');
    return;
  }
  let added = 0;
  let skipped = 0;
  words.forEach((word) => {
    const found = ensureLexeme('word', word, pos, level);
    if (found && found.created) added += 1;
    else skipped += 1;
  });
  ui.batchText = added ? '' : text;
  save();
  if (!added) flash('这些词都已经记过了');
  else if (skipped) flash(`记下 ${added} 个，跳过 ${skipped} 个已经有的`);
  else flash(`记下 ${added} 个`);
}

function addFromDraft() {
  const text = ui.draft.text.trim();
  if (!text) {
    ui.formError = '先写内容';
    render();
    return;
  }
  const kind = ui.draft.kind;
  const exists = state.items.some((item) => item.kind === kind && item.text.toLowerCase() === text.toLowerCase());
  if (exists) {
    ui.formError = '已经记过了';
    render();
    return;
  }
  ensureLexeme(kind, text, ui.draft.pos, Number(ui.draft.level));
  ui.draft.text = '';
  ui.formError = '';
  ui.focusAdd = true;
  save();
  render();
}

function go(view) {
  ui.view = view;
  ui.confirmReset = false;
  render({ scroll: 'top' });
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `susan-desk-${iso(new Date())}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function render(opts = {}) {
  const y = opts.scroll === 'top' ? 0 : window.scrollY;
  const active = document.activeElement;
  const keep = active && active.dataset ? active.dataset.keep : '';
  const caret = keep ? { key: keep, start: active.selectionStart, end: active.selectionEnd } : null;
  document.getElementById('app').replaceChildren(state.profile.ready ? shell() : welcome());
  if (ui.focusAdd) {
    ui.focusAdd = false;
    const input = document.querySelector('#add-text');
    if (input) input.focus();
  } else if (caret) {
    const node = document.querySelector(`[data-keep="${caret.key}"]`);
    if (node) {
      node.focus();
      if (typeof caret.start === 'number' && node.setSelectionRange) node.setSelectionRange(caret.start, caret.end);
    }
  } else if (ui.editingId) {
    const node = document.querySelector('[data-autofocus]');
    if (node) node.focus();
  }
  window.scrollTo(0, y);
  const hash = state.profile.ready ? `#${ui.view}` : '#start';
  if (location.hash !== hash) history.replaceState(null, '', hash);
}

function welcome() {
  const stage = state.profile.stage || 'pattern';
  return h('div', { class: 'welcome' }, [
    h('div', { class: 'welcome-card' }, [
      h('div', { class: 'brand' }, [
        h('div', { class: 'brand-mark', text: '知' }),
        h('div', {}, [h('div', { class: 'brand-name', text: 'Susan 启蒙工作台' })])
      ]),
      h('h1', { class: 'title', text: '先能跟她说上话' }),
      h('p', { class: 'lead', text: '用中文写下你想说的，这里翻成短英语，再多给你两句可以接着说的。句型都在词典里，用中文就能查到。' }),
      h('div', { class: 'principles' }, [
        h('span', { text: '跟她说' }),
        h('span', { text: '词典里查句型' }),
        h('span', { text: '本周再做指认和绘本' })
      ]),
      h('form', { 'data-form': 'welcome' }, [
        field('怎么称呼她', h('input', {
          type: 'text',
          'data-profile': 'childName',
          'data-keep': 'childName',
          placeholder: '小名',
          value: state.profile.childName || ''
        })),
        field('几岁了，可以空着', h('input', {
          type: 'text',
          'data-profile': 'age',
          placeholder: '4 岁 2 个月',
          value: state.profile.age || ''
        })),
        h('div', { class: 'field-label', text: '她现在大概在哪一段' }),
        h('div', { class: 'stages' }, [
          stageButton('point', '指认期', '名词能指出来。句型先固定成一个，例如 It\'s a ___.', stage),
          stageButton('pattern', '句型期', '旧词装新句型。随机组句是这一段的中心。', stage),
          stageButton('context', '常速期', '把已经会的句子串起来，在绘本里复述、表演。', stage)
        ]),
        ui.needName ? h('p', { class: 'error', 'data-name-error': '1', text: '先写怎么称呼她。' }) : null,
        h('button', { class: 'btn seal', type: 'submit', text: '开始用' })
      ])
    ])
  ]);
}

function stageButton(id, title, desc, current) {
  return h('button', { type: 'button', class: cx('stage', current === id && 'on'), 'data-action': 'set-stage', 'data-stage': id }, [
    h('b', { text: title }),
    h('span', { text: desc })
  ]);
}

function shell() {
  return h('div', { class: 'app' }, [
    sidebar(),
    h('main', { class: 'main' }, [
      h('div', { class: 'main-inner' }, [
        ui.flash ? h('div', { class: 'flash', 'data-flash': '1', role: 'status', text: ui.flash }) : null,
        page()
      ])
    ])
  ]);
}

function sidebar() {
  return h('aside', { class: 'sidebar' }, [
    h('div', { class: 'brand' }, [
      h('div', { class: 'brand-mark', text: '知' }),
      h('div', {}, [
        h('div', { class: 'brand-name', text: 'Susan 启蒙' }),
        h('div', { class: 'brand-sub', 'data-live': 'child', text: `${childName()}${state.profile.age ? ` · ${state.profile.age}` : ''}` })
      ])
    ]),
    h('nav', { class: 'nav' }, [
      navBtn('talk', '跟她说', ''),
      navBtn('dict', '词典', state.items.length ? String(state.items.length) : ''),
      navBtn('week', '本周', '')
    ]),
    h('div', { class: 'side-foot' }, [
      h('button', { class: 'btn ghost small', type: 'button', 'data-action': 'export', text: '导出备份' }),
      h('div', { class: 'quiet', 'data-saved': '1', text: '存在这台浏览器' })
    ])
  ]);
}

function navBtn(view, label, count) {
  return h('button', {
    type: 'button',
    class: cx('nav-btn', ui.view === view && 'active'),
    'data-action': 'nav',
    'data-view': view,
    'aria-current': ui.view === view ? 'page' : null
  }, [
    h('span', { text: label }),
    count !== '' ? h('span', { class: 'nav-count num', text: count }) : null
  ]);
}

function page() {
  if (ui.view === 'dict' || ui.view === 'known') return dictPage();
  if (ui.view === 'week') return weekPage();
  return talkPage();
}

function field(label, control, hint) {
  return h('label', { class: 'field' }, [
    h('span', { class: 'field-label', text: label }),
    control,
    hint ? h('span', { class: 'hint', text: hint }) : null
  ]);
}

function weekField(week, key, label, placeholder, rows) {
  return field(label, h('textarea', {
    'data-week-field': key,
    'data-keep': key,
    rows: String(rows || 2),
    placeholder,
    value: week[key] || ''
  }));
}

function pageHead(kicker, title, lead, actions) {
  return h('header', { class: 'page-head' }, [
    h('div', {}, [
      h('p', { class: 'kicker', text: kicker }),
      h('h1', { class: 'title', text: title }),
      lead ? h('p', { class: 'lead', text: lead }) : null
    ]),
    actions ? h('div', { class: 'actions no-print' }, actions) : null
  ]);
}

function normZh(text) {
  return String(text || '').replace(/\s+/g, '').replace(/[。！？!?，,、]/g, '');
}

function isChinese(text) {
  return /[\u4e00-\u9fff]/.test(text || '');
}

function tidy(text) {
  return String(text || '').replace(/\s+/g, ' ').replace(/\s+([?.!,])/g, '$1').trim();
}

function capitalize(word) {
  if (!word) return '';
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function plain(word) {
  return String(word || '').toLowerCase().replace(/[^a-z]/g, '');
}

function spokenWord(word) {
  return String(word || '').replace(/[.?!。！？]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
}

function englishTokens(english) {
  return String(english || '').replace(/[^a-zA-Z'\s-]/g, ' ').split(/\s+/).filter(Boolean)
    .map((raw) => ({ raw, key: plain(raw) }))
    .filter((token) => token.key.length > 1 && !SKIP.has(token.key));
}

function focusWord(english) {
  const tokens = englishTokens(english);
  const nouns = [];
  for (let i = tokens.length - 1; i >= 0; i -= 1) {
    const key = tokens[i].key;
    if (VERBS.has(key) || ADJ.has(key)) {
      if (nouns.length) break;
      continue;
    }
    nouns.unshift(tokens[i].raw);
  }
  if (nouns.length) return nouns.join(' ');
  const adj = [...tokens].reverse().find((token) => ADJ.has(token.key));
  if (adj) return adj.raw;
  const verb = [...tokens].reverse().find((token) => VERBS.has(token.key));
  return verb ? verb.raw : '';
}

function sentenceAdj(english) {
  const adj = [...englishTokens(english)].reverse().find((token) => ADJ.has(token.key));
  return adj ? adj.key : '';
}

function nounish(word) {
  const parts = spokenWord(word).split(' ').map(plain).filter(Boolean);
  return parts.length > 0 && parts.every((text) => text.length > 1 && !VERBS.has(text) && !ADJ.has(text) && !SKIP.has(text));
}

function fillSpoken(pattern, word) {
  let spoken = String(word || '').replace(/[.?!。！？]/g, '').trim().toLowerCase();
  if (!spoken) return tidy(pattern);
  const blanks = pattern.match(/___/g) || [];
  if (blanks.length > 1) {
    if (ADJ.has(spoken)) return tidy(`It is ${spoken}.`);
    return tidy(`The ${spoken} is here.`);
  }
  let next = pattern;
  if (/\ba ___/i.test(next) && /^[aeiou]/i.test(spoken)) next = next.replace(/\ba ___/i, 'an ___');
  if (next.includes('___')) return tidy(next.replace(/___/g, spoken));
  return tidy(next);
}

function uniqueLines(lines) {
  const seen = new Set();
  return lines.filter((line) => {
    const key = (line.text || '').toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function patternsFor(zh, focus) {
  const text = zh || '';
  const hits = BOOK.filter((item) => {
    if ((item.pattern.match(/___/g) || []).length !== 1) return false;
    return (item.keys || '').split(/\s+/).some((key) => key && text.includes(key));
  });
  const word = (focus || '').trim();
  if (!hits.length && word && ADJ.has(plain(word))) {
    return [
      { zh: '它是……', sentence: tidy(`It's ${speakAdj(word.toLowerCase())}.`) },
      { zh: '看，好……', sentence: tidy(`So ${word.toLowerCase()}!`) },
      { zh: '你喜欢吗', sentence: 'Do you like it?' }
    ];
  }
  const chosen = hits.length
    ? hits
    : BOOK.filter((item) => {
      if (!word) return false;
      const ids = nounish(word)
        ? ["It's a ___.", 'I see a ___.', 'Where is the ___?']
        : ["Let's ___.", 'Can you ___?', "It's time to ___."];
      return ids.includes(item.pattern);
    });
  return chosen.slice(0, 3).map((item) => ({
    zh: item.zh,
    sentence: spokenize(word ? fillSpoken(item.pattern, word) : item.example)
  })).filter((item) => item.sentence);
}

function artOf(word) {
  return /^[aeiou]/i.test(word) ? 'an' : 'a';
}

function speakAdj(word) {
  const key = plain(word);
  const map = {
    beautiful: 'pretty',
    gorgeous: 'pretty',
    lovely: 'pretty',
    delicious: 'yummy',
    tasty: 'yummy',
    huge: 'big',
    enormous: 'big',
    large: 'big',
    tiny: 'little',
    frightened: 'scared',
    afraid: 'scared'
  };
  return map[key] || key;
}

const SAY = [
  [/洗手/, 'Wash your hands.'],
  [/刷牙/, 'Time to brush your teeth.'],
  [/洗澡/, 'Bath time.'],
  [/起床/, 'Time to get up.'],
  [/脱鞋/, 'Shoes off.'],
  [/给你|^拿去$/, 'Here you go.'],
  [/妈妈回来了/, "Mommy's home!"],
  [/爸爸回来了/, "Daddy's home!"],
  [/吃饭|该吃/, "It's time to eat."],
  [/睡觉|该睡/, "It's time to sleep."],
  [/喝牛奶|喝奶/, 'Drink some milk.'],
  [/喝水/, 'Drink some water.'],
  [/穿鞋|鞋子穿上/, 'Shoes on.'],
  [/穿衣服|衣服穿上/, 'Put your clothes on.'],
  [/回家/, "Let's go home."],
  [/出去玩/, "Let's go outside."],
  [/饿了吗|你饿了吗|肚子饿吗/, 'Are you hungry?'],
  [/渴了吗|你渴了吗/, 'Are you thirsty?'],
  [/饿了/, "You're hungry. Let's eat."],
  [/渴了/, "You're thirsty. Have some water."],
  [/疼不疼|痛不痛|还疼吗|还痛吗/, 'Does it hurt?'],
  [/摔倒|跌倒/, 'Oops. You fell down.'],
  [/妈妈抱|抱一下|抱抱/, 'Up!'],
  [/亲亲/, 'Kiss.'],
  [/再见|拜拜/, 'Bye-bye.'],
  [/你好吗|你还好吗/, 'Are you okay?'],
  [/^你好$|^嗨$/, 'Hi.'],
  [/对不起|抱歉/, "I'm sorry."],
  [/谢谢/, 'Thank you.'],
  [/小心/, 'Careful!'],
  [/慢一点|慢慢来/, 'Slow down.'],
  [/快点|赶快/, 'Hurry.'],
  [/等一下|等一等|^等等$/, 'Wait a minute.'],
  [/做完了|^好了$/, 'All done.'],
  [/不要了|^够了$/, 'All done.'],
  [/还要|再来一点/, 'More, please.'],
  [/我爱你|^爱你$/, 'I love you.'],
  [/晚安/, 'Night-night.'],
  [/早上好|早安/, 'Morning!'],
  [/过来|到这里|到这儿/, 'Come here.'],
  [/坐下/, 'Sit down.'],
  [/站起来/, 'Stand up.'],
  [/看着我|^看我$/, 'Look at me.'],
  [/看这里|看这儿/, 'Look here.'],
  [/这是什么|那是什么|^是什么$/, "What's this?"],
  [/真棒|做得好|好厉害|真乖|好乖/, 'Good job!'],
  [/不要哭|别哭/, "Don't cry."],
  [/不要跑|别跑/, "Don't run."],
  [/不要摸|别摸|不要动|别动/, "Don't touch."],
  [/开门/, 'Open the door.'],
  [/关灯/, 'Lights off.'],
  [/开灯/, 'Lights on.'],
  [/关门/, 'Close the door.'],
  [/妈妈来了|妈妈在这/, "Mommy's here."],
  [/爸爸来了|爸爸在这/, "Daddy's here."]
];

const PRAISE = [
  ['漂亮', 'pretty'],
  ['好看', 'pretty'],
  ['可爱', 'cute'],
  ['好吃', 'yummy'],
  ['难吃', 'yucky'],
  ['开心', 'happy'],
  ['难过', 'sad'],
  ['干净', 'clean'],
  ['脏', 'dirty']
];

function praiseWord(text) {
  const hit = PRAISE.find(([zh]) => text.includes(zh));
  if (hit) return hit[1];
  const sized = text.match(/(?:好|真|太|很)(大|小|热|冷|高|红|快|慢)/);
  if (!sized) return '';
  return { 大: 'big', 小: 'little', 热: 'hot', 冷: 'cold', 高: 'tall', 红: 'red', 快: 'fast', 慢: 'slow' }[sized[1]] || '';
}

function nounIn(text) {
  const list = [];
  if (typeof CARDS !== 'undefined') {
    CARDS.forEach((card) => {
      if (card.pos !== 'noun' || !card.zh || /[，,]/.test(card.zh)) return;
      list.push([normZh(card.zh), card.en]);
    });
  }
  Object.entries(WORD_ZH).forEach(([zh, en]) => {
    if (VERBS.has(plain(en)) || ADJ.has(plain(en))) return;
    list.push([normZh(zh), en]);
  });
  list.sort((a, b) => b[0].length - a[0].length);
  const long = list.find(([zh]) => zh.length >= 2 && text.includes(zh));
  if (long) return long[1];
  const short = list.find(([zh]) => zh.length === 1 && new RegExp(`(?:这|那|看|朵|只|个|条|辆|颗|块|杯|双|本|小)${zh}|${zh}(?:好|真|太|很|在|呢|呀|啊|$)`).test(text));
  return short ? short[1] : '';
}

function verbIn(text) {
  const list = [];
  if (typeof CARDS !== 'undefined') {
    CARDS.forEach((card) => {
      if (card.pos !== 'verb' || !card.zh) return;
      list.push([normZh(card.zh.split(/[，,]/)[0]), card.en]);
    });
  }
  Object.entries(WORD_ZH).forEach(([zh, en]) => {
    if (VERBS.has(plain(en))) list.push([normZh(zh), en]);
  });
  list.sort((a, b) => b[0].length - a[0].length);
  const long = list.find(([zh]) => zh.length >= 2 && text.includes(zh));
  if (long) return long[1];
  const preferred = Object.entries(WORD_ZH).find(([zh, en]) => normZh(zh).length === 1 && VERBS.has(plain(en)) && !/^(have|look|give|see)$/.test(plain(en)) && text.includes(normZh(zh)));
  if (preferred) return preferred[1];
  const short = list.find(([zh, en]) => zh.length === 1 && !/^(have|look|give|see)$/.test(en) && text.includes(zh));
  return short ? short[1] : '';
}

function parentEnglish(zh) {
  const text = normZh(zh).replace(/^(宝宝|宝贝|小朋友)+/, '');
  const exact = offlineEnglish(text) || offlineEnglish(normZh(zh));
  if (exact) return spokenize(exact);
  const said = SAY.find(([re]) => re.test(text));
  if (said) return said[1];
  const noun = nounIn(text);
  const praise = praiseWord(text);
  const look = /看|瞧/.test(text);
  if (/不是/.test(text) && noun) return `It's not ${artOf(noun)} ${noun}.`;
  if (look && noun && praise) return `Look at the ${noun}. So ${praise}!`;
  if (look && noun) return /这|那/.test(text) ? `Look at the ${noun}.` : `Look, ${artOf(noun)} ${noun}.`;
  if (/这是|这个是|那是/.test(text) && noun) return `It's ${artOf(noun)} ${noun}.`;
  if (/在哪|哪里|哪儿/.test(text) && noun) return `Where's the ${noun}?`;
  if (/喜欢/.test(text) && noun) return `I like this ${noun}.`;
  if (/想要|我要|要一/.test(text) && noun) return `I want the ${noun}.`;
  if (/吗/.test(text) && noun && /是/.test(text)) return `Is it ${artOf(noun)} ${noun}?`;
  if (praise && /吗/.test(text)) return `Is it ${praise}?`;
  if (/打开/.test(text) && noun) return `Open the ${noun}.`;
  if (noun && praise) return `The ${noun} is so ${praise}!`;
  if (praise) return `So ${praise}!`;
  const verb = verbIn(text);
  if ((verb === 'look' || verb === 'see') && !/别|不要/.test(text)) return noun ? `Look at the ${noun}.` : 'Look.';
  if (verb && /别|不要|不许/.test(text)) return `Don't ${verb}.`;
  if (verb && /我们|一起/.test(text)) return `Let's ${verb}.`;
  if (verb && /可以|能不能|会不会/.test(text)) return `Can you ${verb}?`;
  if (verb && /该/.test(text)) return `It's time to ${verb}.`;
  if (verb && text.length <= 3) return `Let's ${verb}.`;
  if (noun && text.length <= 4) return `Look, ${artOf(noun)} ${noun}.`;
  return '';
}

function spokenize(english) {
  let text = tidy(english).replace(/^(baby|honey|dear|sweetie)\s*,\s*/i, '');
  const swaps = [
    [/\bIt is\b/g, "It's"],
    [/\bit is\b/g, "it's"],
    [/\bThat is\b/g, "That's"],
    [/\bthat is\b/g, "that's"],
    [/\bWhat is\b/g, "What's"],
    [/\bwhat is\b/g, "what's"],
    [/\bWhere is\b/g, "Where's"],
    [/\bwhere is\b/g, "where's"],
    [/\bThere is\b/g, "There's"],
    [/\bI am\b/g, "I'm"],
    [/\bYou are\b/g, "You're"],
    [/\byou are\b/g, "you're"],
    [/\bWe are\b/g, "We're"],
    [/\bLet us\b/g, "Let's"],
    [/\bdo not\b/gi, "don't"],
    [/\bdoes not\b/gi, "doesn't"],
    [/\bcannot\b/gi, "can't"],
    [/\bcan not\b/gi, "can't"],
    [/\bis not\b/gi, "isn't"],
    [/\bare not\b/gi, "aren't"],
    [/\bbeautiful\b/gi, 'pretty'],
    [/\bgorgeous\b/gi, 'pretty'],
    [/\blovely\b/gi, 'pretty'],
    [/\bdelicious\b/gi, 'yummy'],
    [/\btasty\b/gi, 'yummy']
  ];
  swaps.forEach(([re, to]) => {
    text = text.replace(re, to);
  });
  text = text.replace(/\bLook at that\b/gi, 'Look at the');
  text = text.replace(/\bIt'?s (so )?pretty[.!]?/gi, 'So pretty!');
  text = text.replace(/\bIt'?s (so )?yummy[.!]?/gi, 'So yummy!');
  text = text.replace(/\bvery\s+/gi, '');
  return capSentences(tidy(text));
}

function capSentences(text) {
  return String(text || '').replace(/(^|[.!?]\s+)([a-z])/g, (_, lead, letter) => lead + letter.toUpperCase());
}

function asParent(english) {
  let text = spokenize(english).replace(/\s*\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
  const rules = [
    [/^Our dads have (.+)\.$/i, (_, rest) => `Daddy has a ${rest.replace(/s$/, '')}.`],
    [/^Our dads don't have (.+)\.$/i, (_, rest) => `Daddy doesn't have a ${rest.replace(/s$/, '')}.`],
    [/^The skies are blue\.?$/i, () => 'The sky is blue.'],
    [/^The skies aren't blue\.?$/i, () => "The sky isn't blue."],
    [/^The key isn't gone\.?$/i, () => 'The key is here.'],
    [/^The keys aren't gone\.?$/i, () => 'The keys are here.'],
    [/^The keys are gone\.?$/i, () => 'The keys are gone.'],
    [/^I don't love my family\.?$/i, () => 'I love you.'],
    [/^We don't love our families\.?$/i, () => 'We love you.'],
    [/^What isn't it\??$/i, () => "What's this?"],
    [/^What aren't they\??$/i, () => 'What are these?'],
    [/^These days are hot\.?$/i, () => "It's hot."],
    [/^These days aren't hot\.?$/i, () => "It's not hot."],
    [/^The winter months are cold\.?$/i, () => 'Winter is cold.'],
    [/^The winter months aren't cold\.?$/i, () => "Winter isn't cold."],
    [/^How are the days recently\??$/i, () => "How's the weather?"],
    [/^How are the winter months\??$/i, () => "How's the weather?"],
    [/^The pairs of shoes (.+)$/i, (_, rest) => `The shoes ${rest}`],
    [/^The ice creams (.+)$/i, (_, rest) => `The ice cream ${rest}`],
    [/^Mr bulls want (.+)$/i, (_, rest) => `The bull wants ${rest}`],
    [/^Grandpas love (.+)$/i, (_, rest) => `Grandpa loves ${rest}`],
    [/^Grandmas (?:hate|hates) (.+)$/i, (_, rest) => `Grandma doesn't like ${rest}`],
    [/^They are (.+)$/i, (_, rest) => `They're ${rest}`],
    [/^He is (.+)$/i, (_, rest) => `He's ${rest}`],
    [/^She is (.+)$/i, (_, rest) => `She's ${rest}`]
  ];
  rules.forEach(([re, to]) => {
    if (re.test(text)) text = text.replace(re, to);
  });
  text = text.replace(/\bhates\b/gi, "doesn't like");
  text = text.replace(/(?<!don't )(?<!doesn't )\bhate\b/gi, "don't like");
  return capSentences(tidy(text));
}

function holdsBack(sentence) {
  return /\?\s*$/.test(sentence) || /n't\b/i.test(sentence) || /\bnot\b/i.test(sentence) || /^no\b/i.test(sentence);
}

function covered(clean, line) {
  const whole = clean.toLowerCase();
  const bit = String(line || '').toLowerCase().replace(/[.!?]/g, '').trim();
  return !bit || whole === String(line || '').toLowerCase() || whole.includes(bit);
}

function isFixedLine(sentence) {
  const clean = tidy(sentence).toLowerCase();
  return BOOK.some((item) => !item.pattern.includes('___') && tidy(item.example).toLowerCase() === clean);
}

function packFromSentence(sentence, zh, focus) {
  const clean = asParent(tidy(sentence));
  const after = {
    'come here.': "I'm right here.",
    'sit down.': 'There you go.',
    'stand up.': 'Up you go.',
    'good job.': 'You did it!',
    'be careful.': 'Slow down.',
    'careful!': 'Slow down.',
    'i love you.': 'So much.',
    'good night.': 'Sleep tight.',
    'night-night.': 'Sleep tight.',
    'all done.': 'You finished!',
    'more, please.': 'Here you go.'
  };
  if (isFixedLine(clean) || after[clean.toLowerCase()]) {
    const next = after[clean.toLowerCase()];
    return {
      zh: zh || '',
      translation: clean,
      say: [{ label: '跟她说', text: clean }],
      more: next ? [{ label: '接着说', text: next }] : [],
      patterns: []
    };
  }
  if (holdsBack(clean) || /\b(has|have|wants|want|likes|like|loves|love|sees|see|hears|hear|wears|wearing)\b/i.test(clean)) {
    return {
      zh: zh || '',
      translation: clean,
      say: [{ label: '跟她说', text: clean }],
      more: [],
      patterns: []
    };
  }
  const word = spokenWord(focus || focusWord(clean) || '');
  const say = [{ label: '跟她说', text: clean }];
  const more = [];
  const key = plain((word.split(' ').pop()) || '');
  if (word && /^it'?s time to /i.test(clean) && key) {
    say.push({ label: '说短一点', text: tidy(`Time to ${key}.`) });
    const act = clean.replace(/^it's time to\s+/i, '').replace(/[.!?]+$/, '');
    more.push({ label: '邀请她', text: tidy(`Let's ${act}.`) });
    more.push({ label: '问她', text: tidy(`Ready to ${act}?`) });
  } else if (word && ADJ.has(plain(word))) {
    const said = speakAdj(word);
    if (!covered(clean, `So ${said}`)) {
      say.push({ label: '说短一点', text: tidy(`So ${said}!`) });
      more.push({ label: '再看一眼', text: tidy(`Look. So ${said}.`) });
    }
    more.push({ label: '问她', text: tidy(`Is it ${said}?`) });
  } else if (word && nounish(word)) {
    const look = tidy(`Look, ${artOf(word)} ${word}.`);
    const named = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(clean);
    if (!named && !/look/i.test(clean) && !covered(clean, look)) say.push({ label: '指给她看', text: look });
    const plural = /they're|these are|those are/i.test(clean);
    const adj = sentenceAdj(clean);
    const described = new RegExp(`\\bis (so )?${adj || '$'}$`, 'i').test(clean.replace(/[.!?]+$/, ''));
    if (described && adj) {
      more.push({ label: '再说一句', text: tidy(`So ${speakAdj(adj)}!`) });
    } else if (!plural) {
      if (!/where/i.test(clean)) more.push({ label: '问她', text: tidy(`Where's the ${word}?`) });
      if (adj && adj !== plain(word)) more.push({ label: '再加一点点', text: tidy(`So ${speakAdj(adj)}!`) });
      else more.push({ label: '让她摸一摸', text: 'Can you touch it?' });
      more.push({ label: '她指对了就说', text: tidy(`Yes! The ${word}.`) });
    }
  } else if (word && key) {
    more.push({ label: '邀请她', text: tidy(`Let's ${key}.`) });
    more.push({ label: '问她', text: tidy(`Can you ${key}?`) });
    more.push({ label: '你先做给她看', text: 'Watch me.' });
  } else if (!/[.!]$/.test(clean.slice(0, -1))) {
    more.push({ label: '等她看你', text: 'Look at me.' });
    more.push({ label: '她做到了就说', text: 'Good job.' });
  }
  const said = uniqueLines(say);
  const extra = uniqueLines(more).filter((line) => !covered(clean, line.text));
  const used = new Set([...said, ...extra].map((line) => line.text.toLowerCase()));
  return {
    zh: zh || '',
    translation: clean,
    say: said,
    more: extra,
    patterns: patternsFor(zh, word).filter((item) => item.sentence && !used.has(item.sentence.toLowerCase()) && !covered(clean, item.sentence))
  };
}

function offlineEnglish(zh) {
  const text = normZh(zh);
  const hit = OFFLINE.find(([key]) => key === text);
  return hit ? hit[1] : '';
}

function decodeEntities(text) {
  const node = document.createElement('textarea');
  node.innerHTML = text;
  return node.value;
}

function looksEnglish(text) {
  return ((text || '').match(/[A-Za-z]/g) || []).length >= 2;
}

async function translateText(text, from, to) {
  const q = String(text || '').trim().slice(0, 400);
  if (!q) throw new Error('empty');
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=${from}|${to}`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      const out = data && data.responseData && data.responseData.translatedText;
      if (out && !/MYMEMORY WARNING|INVALID LANGUAGE|QUERY LENGTH/i.test(out)) {
        const decoded = decodeEntities(out).trim();
        const ok = to.startsWith('en') ? looksEnglish(decoded) : decoded;
        if (ok) return decoded;
      }
    }
  } catch (err) {
    /* 换下一条翻译 */ 
  }
  const sl = from.startsWith('zh') ? 'zh-CN' : 'en';
  const tl = to.startsWith('zh') ? 'zh-CN' : 'en';
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${encodeURIComponent(q)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('bad');
  const data = await res.json();
  const joined = (data[0] || []).map((part) => part && part[0]).join('').trim();
  if (!joined) throw new Error('bad');
  if (to.startsWith('en') && !looksEnglish(joined)) throw new Error('bad');
  return joined;
}

async function toEnglish(zh) {
  const parent = parentEnglish(zh);
  if (parent) return parent;
  return spokenize(await translateText(zh, 'zh-CN', 'en'));
}

async function wordToEnglish(text) {
  const key = normZh(text);
  if (WORD_ZH[key]) return WORD_ZH[key];
  const english = await translateText(text, 'zh-CN', 'en');
  return (focusWord(english) || english).toLowerCase();
}

function speak(text) {
  if (!window.speechSynthesis) {
    flash('这个浏览器读不出来，你照着念就行');
    return;
  }
  const synth = window.speechSynthesis;
  synth.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = 0.86;
  const voices = synth.getVoices();
  const voice = voices.find((item) => /en-US/i.test(item.lang)) || voices.find((item) => /^en/i.test(item.lang));
  if (voice) utter.voice = voice;
  synth.speak(utter);
}

function speakBtn(text, label) {
  return h('button', {
    type: 'button',
    class: 'btn ghost small',
    'data-action': 'speak',
    'data-text': text,
    text: label || '读'
  });
}

function sayLine(line, primary) {
  return h('div', { class: cx('say-line', primary && 'primary') }, [
    h('div', { class: 'say-copy' }, [
      h('div', { class: 'say-label', text: line.label }),
      h('div', { class: 'say-en', text: line.text })
    ]),
    h('div', { class: 'phrase-actions' }, [
      speakBtn(line.text, '读给我听'),
      primary ? h('button', {
        type: 'button',
        class: 'btn text',
        'data-action': 'save-line',
        'data-text': line.text,
        'data-zh': ui.talkResult && ui.talkResult.zh || '',
        text: '记下'
      }) : null
    ])
  ]);
}

function rememberLine(text, zh) {
  const found = ensureLexeme('pattern', text, '', 0);
  if (!found) return;
  if (zh && !found.item.zh) found.item.zh = zh;
  save();
  flash(found.created ? '记进词典了' : '词典里已经有这句');
}

async function runTalk() {
  const text = (ui.talkSource || '').trim();
  if (ui.talkBusy) return;
  if (!text) {
    flash('先用中文写你想说的');
    return;
  }
  ui.talkBusy = true;
  ui.talkError = '';
  render();
  try {
    const english = await toEnglish(text);
    ui.talkResult = packFromSentence(english, text, focusWord(english));
    ui.talkBusy = false;
    render();
  } catch (err) {
    ui.talkBusy = false;
    ui.talkResult = null;
    ui.talkError = '翻译这会儿没连上。可以先打开词典，挑一句型再填词。';
    render();
  }
}

async function fillSlot() {
  const raw = (ui.slotWord || '').trim();
  if (ui.talkBusy) return;
  if (!raw || !ui.talkPattern) {
    flash('先写空格里要填的词');
    return;
  }
  ui.talkBusy = true;
  ui.talkError = '';
  render();
  try {
    const word = isChinese(raw) ? await wordToEnglish(raw) : raw;
    const sentence = fillSpoken(ui.talkPattern, word);
    if (!sentence) throw new Error('blank');
    ui.talkResult = packFromSentence(sentence, raw, word);
    ui.talkBusy = false;
    render();
  } catch (err) {
    ui.talkBusy = false;
    ui.talkError = '这个词没翻译出来。可以改用英文填空，或者先到词典里挑一句现成的。';
    render();
  }
}

function openBook(index) {
  const item = BOOK[index];
  if (!item) return;
  ui.talkError = '';
  ui.slotWord = '';
  if (item.pattern.includes('___')) {
    ui.talkPattern = item.pattern;
    ui.talkHint = `${item.zh}　例如 ${item.example}`;
    ui.talkResult = null;
  } else {
    ui.talkPattern = '';
    ui.talkHint = '';
    ui.talkResult = packFromSentence(item.example || item.pattern, item.exampleZh || item.zh, focusWord(item.example || ''));
  }
  ui.view = 'talk';
  render({ scroll: 'top' });
}

function openSaved(id) {
  const item = itemById(id);
  if (!item) return;
  ui.talkError = '';
  ui.slotWord = '';
  if (item.text.includes('___')) {
    ui.talkPattern = item.text;
    ui.talkHint = item.zh || '';
    ui.talkResult = null;
  } else {
    ui.talkPattern = '';
    ui.talkHint = '';
    ui.talkResult = packFromSentence(item.text, item.zh || '', focusWord(item.text));
  }
  ui.view = 'talk';
  render({ scroll: 'top' });
}

function useWord(id) {
  const item = itemById(id);
  if (!item) return;
  const word = item.text.trim();
  const lower = word.toLowerCase();
  const pattern = item.pos === 'verb' || VERBS.has(lower)
    ? "Let's ___."
    : item.pos === 'adj' || ADJ.has(lower)
      ? 'It is ___.'
      : "It's a ___.";
  const sentence = fillSpoken(pattern, word);
  ui.talkPattern = pattern;
  ui.slotWord = word;
  ui.talkHint = item.zh ? `${item.zh}　用在：${pattern}` : pattern;
  ui.talkError = '';
  ui.talkResult = packFromSentence(sentence, item.zh || word, focusWord(sentence) || word);
  ui.view = 'talk';
  render({ scroll: 'top' });
}

async function glossWord(id) {
  const item = itemById(id);
  if (!item || ui.talkBusy) return;
  ui.talkBusy = true;
  render();
  try {
    item.zh = await translateText(item.text, 'en', 'zh-CN');
    ui.talkBusy = false;
    save();
    render();
  } catch (err) {
    ui.talkBusy = false;
    flash('这会儿没译出来，稍后再试');
  }
}

function talkPage() {
  const result = ui.talkResult;
  return h('div', {}, [
    pageHead('跟她说', '把中文变成能跟她说的英语', '翻成家长会说的短句。一句一个意思，可以直接念。'),
    h('form', { class: 'panel talk-box', 'data-form': 'talk' }, [
      h('textarea', {
        name: 'zh',
        rows: '3',
        'data-keep': 'talk',
        placeholder: '例如：我们该吃饭了',
        value: ui.talkSource,
        'aria-label': '你想跟她说的中文'
      }),
      h('div', { class: 'row' }, [
        h('button', {
          class: 'btn seal',
          type: 'submit',
          disabled: ui.talkBusy,
          text: ui.talkBusy ? '正在翻译…' : '翻译'
        })
      ])
    ]),
    ui.talkPattern ? h('form', { class: 'panel', 'data-form': 'slot' }, [
      h('h2', { text: '用这句' }),
      h('p', { class: 'phrase-en', text: ui.talkPattern }),
      ui.talkHint ? h('p', { class: 'hint', text: ui.talkHint }) : null,
      h('div', { class: 'row' }, [
        h('input', {
          type: 'text',
          name: 'slot',
          'data-keep': 'slot',
          placeholder: '空格里填什么，中文或英文都行',
          value: ui.slotWord,
          'aria-label': '空格里的词'
        }),
        h('button', { class: 'btn seal', type: 'submit', disabled: ui.talkBusy, text: '说出来' }),
        h('button', { class: 'btn ghost', type: 'button', 'data-action': 'clear-pattern', text: '先不用这句' })
      ])
    ]) : null,
    ui.talkError ? h('p', { class: 'error', text: ui.talkError }) : null,
    result ? h('section', { class: 'panel' }, [
      h('h2', { text: '现在可以这样说' }),
      ...result.say.map((line, index) => sayLine(line, index === 0)),
      result.more.length ? h('h2', { class: 'more-title', text: '接着说' }) : null,
      ...result.more.map((line) => sayLine(line, false)),
      result.patterns.length ? h('h2', { class: 'more-title', text: '换成句型再说' }) : null,
      ...result.patterns.map((item) => h('div', { class: 'say-line' }, [
        h('div', { class: 'say-copy' }, [
          h('div', { class: 'say-label', text: item.zh }),
          h('div', { class: 'say-en', text: item.sentence })
        ]),
        h('div', { class: 'phrase-actions' }, [
          speakBtn(item.sentence, '读给我听'),
          h('button', {
            type: 'button',
            class: 'btn text',
            'data-action': 'save-line',
            'data-text': item.sentence,
            'data-zh': item.zh,
            text: '记下'
          })
        ])
      ]))
    ]) : null
  ]);
}

function queryHit(q, fields) {
  const query = (q || '').trim().toLowerCase();
  if (!query) return true;
  return fields.some((field) => String(field || '').toLowerCase().includes(query));
}

function bookCard(item, index) {
  const blank = item.pattern.includes('___');
  return h('article', { class: 'phrase' }, [
    h('div', { class: 'phrase-main' }, [
      h('div', { class: 'phrase-zh', text: item.zh }),
      h('div', { class: 'phrase-en', text: item.pattern }),
      h('p', { class: 'hint', text: `${item.example}　${item.exampleZh}` })
    ]),
    h('div', { class: 'phrase-actions' }, [
      speakBtn(item.example, '读例子'),
      h('button', {
        type: 'button',
        class: 'btn small',
        'data-action': 'use-book',
        'data-i': String(index),
        text: blank ? '用这句跟她说' : '跟她说这句'
      })
    ])
  ]);
}

function savedPattern(item) {
  return h('article', { class: 'phrase' }, [
    h('div', { class: 'phrase-main' }, [
      item.zh ? h('div', { class: 'phrase-zh', text: item.zh }) : null,
      h('div', { class: 'phrase-en', text: item.text })
    ]),
    h('div', { class: 'phrase-actions' }, [
      speakBtn(item.text.includes('___') ? item.text.replace(/___/g, 'something') : item.text, '读'),
      h('button', { type: 'button', class: 'btn small', 'data-action': 'use-saved', 'data-id': item.id, text: '用这句跟她说' }),
      stamp(item)
    ])
  ]);
}

function dictWord(item) {
  return h('article', { class: 'phrase' }, [
    h('div', { class: 'phrase-main' }, [
      h('div', { class: 'phrase-en', text: item.text }),
      h('div', { class: 'phrase-zh', text: item.zh || '还没有中文' })
    ]),
    h('div', { class: 'phrase-actions' }, [
      speakBtn(item.text, '读'),
      item.zh ? null : h('button', { type: 'button', class: 'btn text', 'data-action': 'gloss', 'data-id': item.id, text: '补中文' }),
      h('button', { type: 'button', class: 'btn text', 'data-action': 'use-word', 'data-id': item.id, text: '用它跟她说' }),
      stamp(item)
    ])
  ]);
}

function cardKept(en) {
  const key = String(en || '').trim().toLowerCase();
  return state.items.some((item) => item.kind === 'word' && item.text.toLowerCase() === key && isKnown(item));
}

function cardsOf(pos) {
  return (typeof CARDS === 'undefined' ? [] : CARDS).filter((card) => !pos || card.pos === pos);
}

function cardList(pos) {
  const matched = cardsOf(pos).filter((card) => queryHit(ui.query, [card.en, card.zh]));
  const cards = matched.filter((card) => !cardKept(card.en));
  if (!cards.length) {
    const text = matched.length ? '她会了，已经从词库藏起来。' : '没有找到这张卡。换个词再搜。';
    return h('p', { class: 'hint', text });
  }
  return h('div', {}, cards.map(cardRow));
}

function cardRow(card) {
  return h('article', { class: 'phrase' }, [
    h('div', { class: 'phrase-main' }, [
      h('div', { class: 'phrase-zh', text: card.zh }),
      h('div', { class: 'phrase-en', text: card.en })
    ]),
    h('div', { class: 'phrase-actions' }, [
      speakBtn(card.en, '读'),
      h('button', {
        type: 'button',
        class: 'btn small',
        'data-action': 'use-card',
        'data-en': card.en,
        'data-zh': card.zh,
        'data-pos': card.pos,
        text: '用它跟她说'
      }),
      h('button', {
        type: 'button',
        class: 'btn text',
        'data-action': 'keep-card',
        'data-en': card.en,
        'data-zh': card.zh,
        'data-pos': card.pos,
        text: '她会了'
      })
    ])
  ]);
}

function useCard(en, zh, pos) {
  const said = pos === 'adj' ? speakAdj(en) : en;
  const pattern = pos === 'verb' ? "Let's ___." : pos === 'adj' ? 'So ___!' : "It's a ___.";
  const sentence = fillSpoken(pattern, said);
  ui.talkPattern = pattern;
  ui.slotWord = en;
  ui.talkHint = zh ? `${zh}　用在：${pattern}` : pattern;
  ui.talkError = '';
  ui.talkResult = sentence ? packFromSentence(sentence, zh, en) : null;
  ui.view = 'talk';
  render({ scroll: 'top' });
}

function keepCard(en, zh, pos) {
  const kindPos = pos === 'verb' ? 'verb' : pos === 'adj' ? 'adj' : 'noun';
  const found = ensureLexeme('word', en, kindPos, 3);
  if (!found) return;
  if (zh && !found.item.zh) found.item.zh = zh;
  if (found.item.level < 3) {
    found.item.level = 3;
    syncKnown(found.item);
  }
  save();
  flash('记下了，这个词先从词库里藏起来');
}

function guideList() {
  return typeof GUIDE === 'undefined' ? [] : GUIDE;
}

function guideMatches(group) {
  const fields = [group.phrase, String(group.n)];
  group.lines.forEach((line) => fields.push(line.en, line.zh, line.kind));
  return queryHit(ui.query, fields);
}

function guideCard(group) {
  const open = ui.guideOpen === group.n;
  const affirm = group.lines[0];
  const q = (ui.query || '').trim();
  const hit = q ? group.lines.find((line) => queryHit(q, [line.en, line.zh, line.kind]) && line !== affirm) : null;
  return h('article', { class: 'phrase guide' }, [
    h('div', { class: 'phrase-main' }, [
      h('div', { class: 'phrase-zh', text: `${group.n}. ${affirm.zh}` }),
      h('div', { class: 'phrase-en', text: affirm.en }),
      hit ? h('p', { class: 'hint', text: `${hit.kind}　${hit.en}　${hit.zh}` }) : null
    ]),
    h('div', { class: 'phrase-actions' }, [
      speakBtn(affirm.en, '读'),
      h('button', {
        type: 'button',
        class: 'btn small',
        'data-action': 'use-guide',
        'data-en': affirm.en,
        'data-zh': affirm.zh,
        text: '跟她说'
      }),
      h('button', {
        type: 'button',
        class: 'btn text',
        'data-action': 'toggle-guide',
        'data-n': String(group.n),
        text: open ? '收起' : `${group.lines.length}种变化`
      })
    ]),
    open ? h('div', { class: 'guide-lines' }, group.lines.map((line) => h('div', { class: 'guide-line' }, [
      h('span', { class: 'guide-kind', text: line.kind }),
      h('div', { class: 'guide-copy' }, [
        h('div', { class: 'guide-en', text: line.en }),
        h('div', { class: 'guide-zh', text: line.zh })
      ]),
      speakBtn(line.en, '读'),
      h('button', {
        type: 'button',
        class: 'btn text',
        'data-action': 'use-guide',
        'data-en': line.en,
        'data-zh': line.zh,
        text: '用这句'
      })
    ]))) : null
  ]);
}

function useGuide(en, zh) {
  ui.talkError = '';
  ui.slotWord = '';
  ui.talkPattern = '';
  ui.talkHint = zh || '';
  ui.talkResult = packFromSentence(en, zh, focusWord(en));
  ui.view = 'talk';
  render({ scroll: 'top' });
}

function lexiconTabs() {
  const tabs = [['pattern', '句型'], ['noun', '名词卡'], ['verb', '动词卡'], ['adj', '形容词卡']];
  return h('div', { class: 'seg lexicon' }, tabs.map(([id, label]) => h('button', {
    type: 'button',
    class: cx((ui.lexicon || 'pattern') === id && 'on'),
    'data-action': 'lexicon',
    'data-value': id,
    text: label
  })));
}

function dictPage() {
  const q = ui.query || '';
  const lexicon = ui.lexicon || 'pattern';
  const blanks = [];
  const fixed = [];
  BOOK.forEach((item, index) => {
    if (!queryHit(q, [item.pattern, item.zh, item.example, item.exampleZh, item.keys])) return;
    (item.pattern.includes('___') ? blanks : fixed).push(bookCard(item, index));
  });
  const mine = state.items.filter((item) => item.kind === 'pattern' && queryHit(q, [item.text, item.zh]));
  const words = state.items.filter((item) => item.kind === 'word' && queryHit(q, [item.text, item.zh]));
  const cardHits = lexicon === 'pattern' && q
    ? cardsOf('').filter((card) => !cardKept(card.en) && queryHit(q, [card.en, card.zh]))
    : [];
  const guides = lexicon === 'pattern' ? guideList().filter(guideMatches) : [];
  const empty = lexicon === 'pattern' && !guides.length && !blanks.length && !fixed.length && !mine.length && !words.length && !cardHits.length;
  return h('div', {}, [
    pageHead('词典', '句型和卡片都能查', '51 个句型在最上面。点开就能看到 8 种变化，再念给她听。'),
    lexiconTabs(),
    h('input', {
      class: 'search dict-search',
      type: 'search',
      placeholder: lexicon === 'pattern' ? '搜「狗」「喜欢」「this is」' : '搜这叠卡里的词',
      'data-keep': 'search',
      value: ui.query,
      'aria-label': '查词典'
    }),
    empty ? h('p', { class: 'hint', text: '没有找到。换个说法，或者回到「跟她说」里直接翻译。' }) : null,
    lexicon !== 'pattern' ? h('section', { class: 'dict-block' }, [
      h('h2', { text: lexicon === 'noun' ? '名词卡' : lexicon === 'verb' ? '动词卡' : '形容词卡' }),
      cardList(lexicon)
    ]) : null,
    lexicon === 'pattern' && guides.length ? h('section', { class: 'dict-block' }, [
      h('h2', { text: '51 个句型' }),
      h('p', { class: 'hint', text: '先看肯定句。点开才是否定、疑问和复数。每周练一两个就够。' }),
      ...guides.map(guideCard)
    ]) : null,
    cardHits.length ? h('section', { class: 'dict-block' }, [
      h('h2', { text: '卡片' }),
      ...cardHits.slice(0, 30).map(cardRow)
    ]) : null,
    lexicon === 'pattern' && blanks.length ? h('section', { class: 'dict-block' }, [
      h('h2', { text: '可以填空的句型' }),
      ...blanks
    ]) : null,
    lexicon === 'pattern' && fixed.length ? h('section', { class: 'dict-block' }, [
      h('h2', { text: '可以直接说的句子' }),
      ...fixed
    ]) : null,
    lexicon === 'pattern' && mine.length ? h('section', { class: 'dict-block' }, [
      h('h2', { text: '我记的句型' }),
      ...mine.map(savedPattern)
    ]) : null,
    lexicon === 'pattern' ? h('section', { class: 'dict-block' }, [
      h('h2', { text: '她的词' }),
      words.length ? h('div', {}, words.map(dictWord)) : h('p', { class: 'hint', text: '还没有记下词语。下面可以一个一个记，也可以一次贴上一批。' })
    ]) : null,
    lexicon === 'pattern' ? h('div', { class: 'panel' }, [
      h('button', {
        type: 'button',
        class: 'btn ghost',
        'data-action': 'toggle-add',
        text: ui.showAdd ? '收起添加' : '添加她会的词'
      }),
      ui.showAdd ? h('div', { class: 'add-fold' }, [
        addForm(),
        ui.formError ? h('p', { class: 'error', text: ui.formError }) : null,
        batchForm()
      ]) : null
    ]) : null
  ]);
}

function useWeekPattern() {
  const week = activeWeek();
  const pattern = (week && week.childPattern || '').trim();
  if (!pattern) {
    flash('先写这周的句子');
    return;
  }
  ui.talkError = '';
  ui.slotWord = '';
  if (pattern.includes('___')) {
    ui.talkPattern = pattern;
    ui.talkHint = '这周的句子';
    ui.talkResult = null;
  } else {
    ui.talkPattern = '';
    ui.talkHint = '';
    ui.talkResult = packFromSentence(pattern, '', focusWord(pattern));
  }
  ui.view = 'talk';
  render({ scroll: 'top' });
}

function weekPage() {
  const week = activeWeek();
  if (!week) return h('p', { text: '还没有周计划。' });
  const today = iso(new Date());
  const dates = weekDates(week);
  const focusDate = dates.includes(ui.weekDate) ? ui.weekDate : (dates.includes(today) ? today : dates[0]);
  const day = week.days[focusDate] || {};
  const prev = prevWeek(week);
  const weeks = [...state.weeks].sort((a, b) => b.start.localeCompare(a.start));
  const select = h('select', { class: 'select-inline', 'data-action': 'switch-week', 'aria-label': '切换周' }, weeks.map((item) => h('option', {
    value: item.id,
    text: `${weekRange(item.start)}${item.start === mondayOf(new Date()) ? ' · 本周' : ''}`
  })));
  select.value = week.id;
  const picked = week.pointIds.map((id) => itemById(id)).filter(Boolean);
  const tasks = [['point', '指认'], ['drill', '说这句'], ['book', '绘本']];

  return h('div', {}, [
    pageHead('本周', weekRange(week.start), '一句英语，几个词，今天做完三件小事就好。', weeks.length > 1 ? [select] : null),
    prev && prev.childPattern && !week.childPattern
      ? h('div', { class: 'banner' }, [
        h('span', { text: `上周的句子是 ${prev.childPattern}` }),
        h('button', { class: 'btn small ghost', type: 'button', 'data-action': 'use-prev', text: '这周继续用' })
      ])
      : null,
    h('section', { class: 'panel' }, [
      h('h2', { text: '这周就说这一句' }),
      h('textarea', {
        'data-week-field': 'childPattern',
        'data-keep': 'childPattern',
        rows: '2',
        placeholder: "It's a ___.",
        value: week.childPattern || '',
        'aria-label': '这周的句子'
      }),
      h('div', { class: 'row' }, [
        h('button', { class: 'btn seal', type: 'button', 'data-action': 'use-week-pattern', text: '用这句跟她说' })
      ])
    ]),
    h('section', { class: 'panel' }, [
      h('h2', { text: focusDate === today ? '今天做三件小事' : `${WEEKDAY[dates.indexOf(focusDate)]}做三件小事` }),
      h('div', { class: 'day-strip' }, dates.map((date, index) => h('button', {
        type: 'button',
        class: cx('day-pick', date === focusDate && 'on', date === today && 'today'),
        'data-action': 'pick-day',
        'data-date': date,
        text: WEEKDAY[index]
      }))),
      h('div', { class: 'ticks' }, tasks.map(([key, label]) => h('button', {
        type: 'button',
        class: cx('tick', day[key] && 'on'),
        'data-action': 'toggle-day',
        'data-date': focusDate,
        'data-key': key,
        'aria-pressed': day[key] ? 'true' : 'false',
        text: label
      })))
    ]),
    h('section', { class: 'panel' }, [
      h('h2', { text: '这周指给她看' }),
      picked.length
        ? h('div', { class: 'chips' }, picked.map((item) => h('button', {
          type: 'button',
          class: 'chip on',
          'data-action': 'toggle-point',
          'data-id': item.id,
          text: item.text
        })))
        : h('p', { class: 'hint', text: '写下这周要指的词。点一下就能拿掉。' }),
      h('form', { 'data-form': 'quick-point', class: 'row' }, [
        h('input', { type: 'text', name: 'text', placeholder: '例如 apple', autocomplete: 'off', 'aria-label': '这周要指的词' }),
        h('button', { class: 'btn small', type: 'submit', text: '加上' })
      ])
    ]),
    h('section', { class: 'panel' }, [
      h('h2', { text: '换个词再说' }),
      h('div', { class: 'row' }, [
        h('button', {
          class: 'btn small',
          type: 'button',
          'data-action': 'gen',
          'data-which': 'child',
          text: week.drillLines.length ? '再抽三句' : '抽三句'
        })
      ]),
      week.drillLines.length
        ? h('div', {}, week.drillLines.map((line) => h('div', { class: 'say-line' }, [
          h('div', { class: 'say-en', text: line.text }),
          speakBtn(line.text, '读给我听')
        ])))
        : h('p', { class: 'hint', text: '用她已经会的词，装进这周的句子。' })
    ]),
    h('section', { class: 'panel' }, [
      weekField(week, 'book', '这周的绘本', '可以空着', 2)
    ]),
    h('button', {
      class: 'btn ghost',
      type: 'button',
      'data-action': 'toggle-week-more',
      text: ui.weekMore ? '收起' : '还要记一点'
    }),
    ui.weekMore ? h('div', { class: 'add-fold' }, [
      h('section', { class: 'panel' }, [
        weekField(week, 'phonics', '自拼，有就写', '例如短元音 a', 2)
      ]),
      logPanel(week),
      h('div', { class: 'row' }, [
        h('button', { class: 'btn ghost', type: 'button', 'data-action': 'new-week', text: '新的一周' }),
        h('button', {
          class: 'btn text',
          type: 'button',
          'data-action': 'delete-week',
          text: ui.pendingWeek ? '确定删掉这一周' : '删掉这一周'
        })
      ])
    ]) : null
  ]);
}

function dayCard(week, date, index, today, showPhonics) {
  const day = week.days[date];
  const ticks = [
    ['point', '指认'],
    ['drill', '组句'],
    ['book', '绘本']
  ];
  if (showPhonics) ticks.push(['phonics', '自拼']);
  return h('article', { class: cx('day', date === today && 'today') }, [
    h('div', { class: 'day-name' }, [
      h('b', { text: WEEKDAY[index] }),
      date === today ? h('div', { class: 'hint', text: '今天' }) : null
    ]),
    h('div', { class: 'ticks' }, ticks.map(([key, label]) => h('button', {
      type: 'button',
      class: cx('tick', day[key] && 'on'),
      'data-action': 'toggle-day',
      'data-date': date,
      'data-key': key,
      'aria-pressed': day[key] ? 'true' : 'false',
      text: label
    })))
  ]);
}

function childHero(week) {
  return h('section', { class: 'hero plus' }, [
    h('h2', { text: '她的 +1' }),
    h('textarea', {
      'data-week-field': 'childPattern',
      'data-keep': 'childPattern',
      rows: '2',
      placeholder: state.profile.stage === 'context' ? 'She is ___ because ___.' : 'It\'s a ___.',
      value: week.childPattern || ''
    }),
    field('本周只内化一个', h('input', {
      type: 'text',
      'data-week-field': 'internalize',
      placeholder: '一个新词',
      value: week.internalize || ''
    })),
    h('div', { class: 'hero-foot' }, [
      h('button', { class: 'btn small ghost', type: 'button', 'data-action': 'save-pattern', text: '句型记成接触' }),
      h('button', { class: 'btn small ghost', type: 'button', 'data-action': 'save-word', text: '新词记成接触' })
    ])
  ]);
}

function parentHero(week) {
  return h('section', { class: 'hero' }, [
    h('h2', { text: '我先学会' }),
    h('textarea', {
      'data-week-field': 'parentPattern',
      rows: '2',
      placeholder: '和她同一个，或稍难一点',
      value: week.parentPattern || ''
    }),
    h('input', {
      type: 'text',
      'data-week-field': 'parentStructure',
      placeholder: '最基本的那一种结构',
      value: week.parentStructure || ''
    }),
    h('div', { class: 'hero-foot' }, [
      h('button', { class: 'btn small ghost', type: 'button', 'data-action': 'copy-pattern', text: '和她用同一个' }),
      h('button', { class: 'btn small', type: 'button', 'data-action': 'nav', 'data-view': 'prep', text: '去出声练' })
    ])
  ]);
}

function pointPanel(week) {
  const words = state.items.filter((item) => item.kind === 'word');
  const ordered = [...words].sort((a, b) => {
    const as = week.pointIds.includes(a.id) ? 1 : 0;
    const bs = week.pointIds.includes(b.id) ? 1 : 0;
    if (as !== bs) return bs - as;
    return b.level - a.level;
  });
  return h('section', { class: 'panel' }, [
    h('h2', { text: `指认 · 已选 ${week.pointIds.length}` }),
    words.length
      ? h('div', { class: 'chips' }, ordered.map((item) => h('button', {
        type: 'button',
        class: cx('chip', week.pointIds.includes(item.id) && 'on'),
        'data-action': 'toggle-point',
        'data-id': item.id
      }, [item.text, h('small', { text: levelLabel('word', item.level) })])))
      : h('p', { class: 'empty', text: '词库还是空的。先写下她不看中文也能自己说出来的词。' }),
    h('form', { 'data-form': 'quick-point', class: 'row' }, [
      h('input', { type: 'text', name: 'text', placeholder: '加一个这周要指的词', autocomplete: 'off' }),
      h('button', { class: 'btn small ghost', type: 'submit', text: '加入' })
    ]),
    h('button', { class: 'btn text', type: 'button', 'data-action': 'nav', 'data-view': 'dict', text: '去词典里改' })
  ]);
}

function drillPanel(week) {
  const pool = wordPool();
  return h('section', { class: 'panel' }, [
    h('h2', { text: '随机组句' }),
    h('p', { class: 'hint', text: `现在能拿来装句型的会用词：${state.items.filter((item) => item.kind === 'word' && item.level >= 3).length} 个。` }),
    h('label', { class: 'check' }, [
      h('input', { type: 'checkbox', 'data-action': 'toggle-almost', checked: !!state.settings.useAlmost }),
      h('span', { text: '会用的词不够时，暂时也用「听懂」的词。这种句子会标出来。' })
    ]),
    h('div', { class: 'row no-print' }, [
      h('button', { class: 'btn seal small', type: 'button', 'data-action': 'gen', 'data-which': 'child', text: week.drillLines.length ? '重新抽一组' : '抽一组' })
    ]),
    pool.length ? null : h('p', { class: 'empty', text: '随机组句要用她已经会的词。先到词典里，把那些词标成「会用」。' }),
    h('div', {}, week.drillLines.map((line) => sentenceRow(line, 'drillLines')))
  ]);
}

function sentenceRow(line, which) {
  return h('div', { class: 'line' }, [
    h('div', { class: 'en', text: line.text }),
    h('div', { class: 'tags' }, [
      line.plus ? h('span', { class: 'tag plus', text: '+1' }) : h('span', { class: 'tag', text: '已知词' }),
      line.soft ? h('span', { class: 'tag soft', text: '含听懂' }) : null,
      line.done ? h('span', { class: 'tag done', text: '练过' }) : null,
      h('button', {
        class: 'btn text',
        type: 'button',
        'data-action': 'toggle-line',
        'data-which': which,
        'data-id': line.id,
        text: line.done ? '取消' : '练过'
      }),
      h('button', {
        class: 'btn text',
        type: 'button',
        'data-action': 'delete-line',
        'data-which': which,
        'data-id': line.id,
        text: '删除'
      })
    ])
  ]);
}

function logPanel(week) {
  return h('section', { class: 'panel' }, [
    h('h2', { text: '启蒙之后记一笔' }),
    h('form', { 'data-form': 'log' }, [
      field('她的原话，或她演出来的那一下', h('textarea', { name: 'quote', rows: '2', placeholder: '原句' })),
      field('你帮在了哪里', h('textarea', { name: 'help', rows: '2', placeholder: '哪一个词、哪一种结构' })),
      h('button', { class: 'btn small', type: 'submit', text: '记下' })
    ]),
    h('div', {}, [...week.logs].reverse().map((log) => h('article', { class: 'log-item' }, [
      h('div', { class: 'log-meta' }, [
        h('span', { text: formatWhen(log.at) }),
        h('button', { class: 'btn text', type: 'button', 'data-action': 'delete-log', 'data-id': log.id, text: '删除' })
      ]),
      log.quote ? h('p', { text: log.quote }) : null,
      log.help ? h('p', { class: 'hint', text: `帮在：${log.help}` }) : null
    ])))
  ]);
}

function knownPage() {
  const c = counts();
  return h('div', {}, [
    pageHead('已知区域', `${childName()}会用的`, '听懂且会自己用，才算已知。听得懂但还不会说的，标成「听懂」，先不要算进来。'),
    h('div', { class: 'stats' }, [
      h('span', {}, ['会用的词 ', h('b', { text: String(c.knownWords) })]),
      h('span', {}, ['会用的句型 ', h('b', { text: String(c.knownPatterns) })]),
      h('span', {}, ['还在路上 ', h('b', { text: String(c.rest) })])
    ]),
    addForm(),
    ui.formError ? h('p', { class: 'error', text: ui.formError }) : null,
    batchForm(),
    h('div', { class: 'toolbar' }, [
      seg('zone', [['all', '全部'], ['known', '只看已知']]),
      seg('kind', [['all', '词和句'], ['word', '词'], ['pattern', '句型']]),
      ui.kind !== 'pattern' ? seg('pos', [['all', '全部词性'], ...POS]) : null,
      h('input', {
        class: 'search',
        type: 'search',
        placeholder: '查找',
        'data-keep': 'search',
        value: ui.query,
        'aria-label': '查找'
      })
    ]),
    ui.kind !== 'pattern' ? wordGroups() : null,
    ui.kind !== 'word' ? patternGroups() : null
  ]);
}

function addForm() {
  const kind = ui.draft.kind;
  const level = h('select', { 'data-draft': 'level', 'aria-label': '现在到哪一层' }, [0, 1, 2, 3].map((n) => h('option', {
    value: String(n),
    text: levelLabel(kind, n)
  })));
  level.value = String(ui.draft.level);
  const pos = h('select', { 'data-draft': 'pos', 'aria-label': '词性' }, POS.map(([id, name]) => h('option', { value: id, text: name })));
  pos.value = ui.draft.pos;
  return h('form', { 'data-form': 'add-item' }, [
    h('div', { class: 'seg', style: 'margin-bottom:8px' }, [
      h('button', { type: 'button', class: cx(kind === 'word' && 'on'), 'data-action': 'draft-kind', 'data-kind': 'word', text: '记一个词' }),
      h('button', { type: 'button', class: cx(kind === 'pattern' && 'on'), 'data-action': 'draft-kind', 'data-kind': 'pattern', text: '记一个句型' })
    ]),
    h('div', { class: cx('add-bar', kind === 'pattern' && 'pattern') }, [
      h('input', {
        id: 'add-text',
        type: 'text',
        'data-draft': 'text',
        'data-keep': 'add-text',
        placeholder: kind === 'pattern' ? '例如 It\'s a ___.' : '例如 apple',
        value: ui.draft.text,
        autocomplete: 'off'
      }),
      kind === 'word' ? pos : null,
      level,
      h('button', { class: 'btn seal', type: 'submit', text: '记下' })
    ])
  ]);
}

function batchForm() {
  const pos = h('select', { name: 'pos', 'data-batch': 'batchPos', 'aria-label': '这批词的词性' }, POS.map(([id, name]) => h('option', { value: id, text: name })));
  pos.value = ui.batchPos;
  const level = h('select', { name: 'level', 'data-batch': 'batchLevel', 'aria-label': '这批词现在到哪一层' }, [3, 2, 1, 0].map((n) => h('option', {
    value: String(n),
    text: levelLabel('word', n)
  })));
  level.value = String(ui.batchLevel);
  return h('form', { class: 'panel', 'data-form': 'batch-words' }, [
    h('h2', { text: '批量导入她会的词' }),
    h('p', { class: 'hint', text: '一行一个，也可以用逗号或空格隔开。两个词组成的，用引号包起来，例如 "ice cream"。已经记过的会跳过。' }),
    h('textarea', {
      name: 'words',
      rows: '6',
      'data-keep': 'batch',
      placeholder: '贴在这里',
      value: ui.batchText
    }),
    h('div', { class: 'row' }, [
      pos,
      level,
      h('button', { class: 'btn seal', type: 'submit', text: '导入' })
    ])
  ]);
}

function seg(key, options) {
  return h('div', { class: 'seg', role: 'tablist' }, options.map(([id, label]) => h('button', {
    type: 'button',
    class: cx(ui[key] === id && 'on'),
    'data-action': 'seg',
    'data-key': key,
    'data-value': id,
    text: label
  })));
}

function filtered(kind) {
  return state.items.filter((item) => {
    if (item.kind !== kind) return false;
    if (ui.zone === 'known' && !isKnown(item)) return false;
    if (kind === 'word' && ui.pos !== 'all' && item.pos !== ui.pos) return false;
    if (ui.query && !item.text.toLowerCase().includes(ui.query.trim().toLowerCase())) return false;
    return true;
  });
}

function wordGroups() {
  const items = filtered('word');
  if (!state.items.some((item) => item.kind === 'word')) {
    return h('p', { class: 'empty', text: '还没有词。先写她不假思索能说出来的那些，状态选「会用」。' });
  }
  if (!items.length) return h('p', { class: 'empty', text: '这个筛选下没有词。' });
  return h('div', {}, [3, 2, 1, 0].map((level) => {
    const group = items.filter((item) => item.level === level);
    if (!group.length) return null;
    return h('section', {}, [
      h('div', { class: 'group-title', text: levelLabel('word', level) }),
      h('div', { class: 'cards' }, group.map(wordCard))
    ]);
  }));
}

function patternGroups() {
  const items = filtered('pattern');
  if (!state.items.some((item) => item.kind === 'pattern')) {
    return h('p', { class: 'empty', text: '还没有句型。句型用 ___ 留出要换的词。' });
  }
  if (!items.length) return h('p', { class: 'empty', text: '这个筛选下没有句型。' });
  return h('div', {}, [
    h('div', { class: 'group-title', text: '句型' }),
    ...[3, 2, 1, 0].map((level) => {
      const group = items.filter((item) => item.level === level);
      if (!group.length) return null;
      return h('div', {}, [
        h('div', { class: 'hint', text: levelLabel('pattern', level) }),
        ...group.map(patternRow)
      ]);
    })
  ]);
}

function dots(level) {
  return h('span', { class: 'dots', 'aria-hidden': 'true' }, [0, 1, 2, 3].map((i) => h('i', { class: i <= level ? 'on' : '' })));
}

function stamp(item) {
  const deep = item.level >= 3;
  const label = levelLabel(item.kind, item.level);
  return h('button', {
    type: 'button',
    class: cx('stamp', `lv${item.level}`, deep && isKnown(item) && 'seal'),
    'data-action': 'upgrade',
    'data-id': item.id,
    disabled: item.level >= 3,
    'aria-label': item.level >= 3 ? `已经是${label}` : `升一级，现在是${label}`,
    text: label
  });
}

function wordCard(item) {
  const editing = ui.editingId === item.id;
  return h('article', { class: 'word-card' }, [
    h('button', { type: 'button', class: 'pos', 'data-action': 'cycle-pos', 'data-id': item.id, text: posName(item.pos) }),
    editing
      ? h('input', {
        class: 'edit-input',
        type: 'text',
        'data-action': 'edit-text',
        'data-id': item.id,
        'data-autofocus': '1',
        value: item.text
      })
      : h('div', { class: 'word', text: item.text }),
    item.knownAt ? h('p', { class: 'known-at', text: `${zhDate(item.knownAt)}进入已知` }) : null,
    h('div', { class: 'card-foot' }, [
      h('span', {}, [dots(item.level), stamp(item)]),
      cardActions(item)
    ])
  ]);
}

function patternRow(item) {
  const editing = ui.editingId === item.id;
  return h('article', { class: 'pattern-row' }, [
    h('div', {}, [
      editing
        ? h('input', {
          class: 'edit-input',
          type: 'text',
          'data-action': 'edit-text',
          'data-id': item.id,
          'data-autofocus': '1',
          value: item.text
        })
        : h('div', { class: 'word', text: item.text }),
      item.knownAt ? h('p', { class: 'known-at', text: `${zhDate(item.knownAt)}进入已知` }) : null
    ]),
    h('div', {}, [
      h('div', { class: 'card-foot' }, [dots(item.level), stamp(item)]),
      cardActions(item)
    ])
  ]);
}

function cardActions(item) {
  return h('div', { class: 'card-actions' }, [
    h('button', { class: 'btn text', type: 'button', 'data-action': 'edit-item', 'data-id': item.id, text: '改' }),
    item.level > 0 ? h('button', { class: 'btn text', type: 'button', 'data-action': 'downgrade', 'data-id': item.id, text: '退一级' }) : null,
    h('button', {
      class: 'btn text',
      type: 'button',
      'data-action': 'delete-item',
      'data-id': item.id,
      text: ui.pendingDelete === item.id ? '确定删除' : '删除'
    })
  ]);
}

function prepPage() {
  const week = activeWeek();
  if (!week) return h('p', { text: '还没有周计划。' });
  const lines = week.parentLines;
  ui.practiceIndex = lines.length ? Math.min(ui.practiceIndex, lines.length - 1) : 0;
  const index = ui.practiceIndex;
  const current = lines[index];
  return h('div', {}, [
    pageHead('备课', '你先把这句说顺', `${childName()}这周的 +1：${week.childPattern || '还没写'}`),
    h('div', { class: 'hero-grid' }, [
      h('section', { class: 'hero' }, [
        h('h2', { text: '我的句型' }),
        h('textarea', {
          'data-week-field': 'parentPattern',
          rows: '2',
          placeholder: 'It\'s a ___.',
          value: week.parentPattern || ''
        }),
        h('input', {
          type: 'text',
          'data-week-field': 'parentStructure',
          placeholder: '最基本的结构，先练这一种',
          value: week.parentStructure || ''
        })
      ]),
      h('section', { class: 'hero' }, [
        h('h2', { text: '我容易错的地方' }),
        h('textarea', {
          'data-week-field': 'parentNote',
          rows: '4',
          placeholder: '发音、单复数、哪一个词你自己还要停一下',
          value: week.parentNote || ''
        })
      ])
    ]),
    h('section', { class: 'panel' }, [
      h('h2', { text: '出声' }),
      lines.length && current
        ? h('div', { class: 'practice' }, [
          h('div', {}, [
            h('div', { class: 'hint', text: `${index + 1} / ${lines.length}${current.plus ? ' · 这句里有本周的新词' : ''}` }),
            h('p', { class: 'en', text: current.text })
          ]),
          h('div', { class: 'row' }, [
            h('button', { class: 'btn ghost', type: 'button', 'data-action': 'practice-prev', text: '上一句' }),
            h('button', { class: 'btn seal', type: 'button', 'data-action': 'practice-done', text: current.done ? '这句再练' : '这句顺了' }),
            h('button', { class: 'btn ghost', type: 'button', 'data-action': 'practice-next', text: '下一句' })
          ])
        ])
        : h('div', { class: 'practice' }, [
          h('p', { class: 'en', text: '抽出一组句子，出声读给自己听。' }),
          h('div', { class: 'hint', text: '读顺了，再带她。' })
        ]),
      h('div', { class: 'row' }, [
        h('button', {
          class: 'btn small',
          type: 'button',
          'data-action': 'gen',
          'data-which': 'parent',
          text: lines.length ? '重新抽 6 句' : '抽 6 句'
        }),
        h('span', { class: 'hint', text: `会用的词 ${state.items.filter((item) => item.kind === 'word' && item.level >= 3).length} 个` })
      ]),
      h('label', { class: 'check' }, [
        h('input', { type: 'checkbox', 'data-action': 'toggle-almost', checked: !!state.settings.useAlmost }),
        h('span', { text: '词不够时，暂时也用「听懂」的词。' })
      ]),
      h('div', {}, lines.map((line) => sentenceRow(line, 'parentLines')))
    ]),
    h('section', { class: 'panel' }, [
      h('h2', { text: '带她的时候' }),
      weekField(week, 'script', '我要说的话', '她说完，你用英语把目标句再说一遍。', 4),
      h('div', { class: 'chips' }, SCRIPT_CHIPS.map((line) => h('button', {
        type: 'button',
        class: 'chip',
        'data-action': 'append',
        'data-key': 'script',
        'data-line': line,
        text: line
      })))
    ]),
    h('section', { class: 'panel' }, [
      h('h2', { text: '备课打卡' }),
      prepToggle(week, 'say', '我能不看稿说出这个句型'),
      prepToggle(week, 'lines', '我出声读完了自己的那一组'),
      prepToggle(week, 'zoom', 'Zoom in 写了一个真的能演的场景'),
      prepToggle(week, 'book', '绘本选好了')
    ])
  ]);
}

function prepToggle(week, key, label) {
  return h('button', {
    type: 'button',
    class: cx('tick', week.prepChecks[key] && 'on'),
    style: 'width:auto;padding:6px 10px;margin:4px 8px 4px 0',
    'data-action': 'prep-check',
    'data-key': key,
    'aria-pressed': week.prepChecks[key] ? 'true' : 'false',
    text: label
  });
}

function methodPage() {
  return h('div', {}, [
    pageHead('方法备忘', '桌子上就这几条', '按家长圈里常说的 Susan 教英语来执行。卡片、课程和直播，仍以老师本人的材料为准。'),
    h('div', { class: 'method-grid' }, METHOD.map(([title, body]) => h('article', { class: 'method-card' }, [
      h('h2', { text: title }),
      h('p', { text: body })
    ]))),
    h('section', { class: 'panel', style: 'margin-top:14px' }, [
      h('h2', { text: '档案' }),
      field('怎么称呼她', h('input', {
        type: 'text',
        'data-profile': 'childName',
        value: state.profile.childName || ''
      })),
      field('几岁', h('input', {
        type: 'text',
        'data-profile': 'age',
        value: state.profile.age || ''
      })),
      h('div', { class: 'stages' }, [
        stageButton('point', '指认期', '名词能指出来。句型先固定一个。', state.profile.stage),
        stageButton('pattern', '句型期', '旧词装新句型。', state.profile.stage),
        stageButton('context', '常速期', '句子串进绘本。', state.profile.stage)
      ])
    ]),
    h('section', { class: 'panel' }, [
      h('h2', { text: '备份' }),
      h('p', { class: 'hint', text: '记录只在这台电脑的这个浏览器里。换浏览器或清站点数据之前，先导出。' }),
      h('div', { class: 'row' }, [
        h('button', { class: 'btn small', type: 'button', 'data-action': 'export', text: '导出 JSON' }),
        h('button', { class: 'btn small ghost', type: 'button', 'data-action': 'pick-import', text: '导入备份' }),
        h('input', { id: 'import-file', type: 'file', accept: 'application/json', hidden: true, 'data-action': 'import-file' })
      ])
    ]),
    h('button', {
      class: 'btn text',
      type: 'button',
      'data-action': 'reset-all',
      text: ui.confirmReset ? '确定清空这台浏览器里的工作台' : '清空本机数据'
    })
  ]);
}

function itemById(id) {
  return state.items.find((item) => item.id === id);
}

function closeEditFrom(target) {
  const input = document.querySelector('[data-action="edit-text"]');
  if (!input) return;
  if (target && (target === input || (target.closest && target.closest('[data-action="edit-text"]')))) return;
  const item = itemById(input.dataset.id);
  const next = input.value.trim();
  if (item && next && next !== item.text) {
    item.text = next;
    save();
  }
  if (!target || !target.closest || !target.closest('[data-action="edit-item"]')) ui.editingId = null;
}

function onClick(event) {
  const target = event.target.closest('[data-action]');
  if (!target) return;
  const action = target.dataset.action;
  if (action !== 'delete-item') ui.pendingDelete = null;
  if (action !== 'delete-week') ui.pendingWeek = false;
  if (action !== 'reset-all') ui.confirmReset = false;
  if (action !== 'edit-text') closeEditFrom(target);
  const id = target.dataset.id;
  const week = activeWeek();

  if (action === 'nav') go(target.dataset.view);
  else if (action === 'speak') speak(target.dataset.text || '');
  else if (action === 'use-book') openBook(Number(target.dataset.i));
  else if (action === 'toggle-guide') {
    const n = Number(target.dataset.n);
    ui.guideOpen = ui.guideOpen === n ? 0 : n;
    render();
  } else if (action === 'use-guide') useGuide(target.dataset.en || '', target.dataset.zh || '');
  else if (action === 'use-saved') openSaved(id);
  else if (action === 'use-word') useWord(id);
  else if (action === 'use-card') useCard(target.dataset.en || '', target.dataset.zh || '', target.dataset.pos || 'noun');
  else if (action === 'keep-card') keepCard(target.dataset.en || '', target.dataset.zh || '', target.dataset.pos || 'noun');
  else if (action === 'lexicon') {
    ui.lexicon = target.dataset.value;
    render();
  }
  else if (action === 'gloss') glossWord(id);
  else if (action === 'save-line') rememberLine(target.dataset.text || '', target.dataset.zh || '');
  else if (action === 'clear-pattern') {
    ui.talkPattern = '';
    ui.talkHint = '';
    ui.slotWord = '';
    render();
  } else if (action === 'toggle-add') {
    ui.showAdd = !ui.showAdd;
    render();
  } else if (action === 'use-week-pattern') useWeekPattern();
  else if (action === 'pick-day') {
    ui.weekDate = target.dataset.date;
    render();
  } else if (action === 'toggle-week-more') {
    ui.weekMore = !ui.weekMore;
    render();
  } else if (action === 'set-stage') {
    state.profile.stage = target.dataset.stage;
    save();
    render();
  } else if (action === 'new-week') createNextWeek();
  else if (action === 'print') window.print();
  else if (action === 'export') exportJson();
  else if (action === 'use-prev' && week) {
    const prev = prevWeek(week);
    if (prev) {
      week.childPattern = prev.childPattern;
      if (!week.parentPattern) week.parentPattern = prev.parentPattern || prev.childPattern;
      save();
      render();
    }
  } else if (action === 'save-pattern' && week) {
    if (!week.childPattern.trim()) flash('先写下她的句型');
    else {
      const found = ensureLexeme('pattern', week.childPattern, '', 0);
      if (!found.created) flash('句型库里已经有了');
      else {
        save();
        flash('句型先记成「接触」。她会用了再升。');
      }
    }
  } else if (action === 'save-word' && week) {
    if (!week.internalize.trim()) flash('先写下要内化的词');
    else {
      const pos = week.internalize.trim().includes(' ') ? 'other' : 'noun';
      const found = ensureLexeme('word', week.internalize, pos, 0);
      if (!found.created) flash('词库里已经有了');
      else {
        save();
        flash('新词先记成「接触」');
      }
    }
  } else if (action === 'copy-pattern' && week) {
    week.parentPattern = week.childPattern;
    save();
    render();
  } else if (action === 'append' && week) appendLine(week, target.dataset.key, target.dataset.line);
  else if (action === 'toggle-day' && week) {
    const day = week.days[target.dataset.date];
    day[target.dataset.key] = !day[target.dataset.key];
    save();
    render();
  } else if (action === 'toggle-point' && week) {
    const list = week.pointIds;
    const at = list.indexOf(id);
    if (at >= 0) list.splice(at, 1);
    else list.push(id);
    save();
    render();
  } else if (action === 'gen') generate(target.dataset.which);
  else if (action === 'toggle-line' && week) {
    const line = (week[target.dataset.which] || []).find((item) => item.id === id);
    if (line) line.done = !line.done;
    save();
    render();
  } else if (action === 'delete-line' && week) {
    week[target.dataset.which] = week[target.dataset.which].filter((item) => item.id !== id);
    save();
    render();
  } else if (action === 'delete-log' && week) {
    week.logs = week.logs.filter((item) => item.id !== id);
    save();
    render();
  } else if (action === 'delete-week') {
    if (state.weeks.length <= 1) {
      flash('至少留一周');
      return;
    }
    if (!ui.pendingWeek) {
      ui.pendingWeek = true;
      render();
      return;
    }
    state.weeks = state.weeks.filter((item) => item.id !== week.id);
    state.activeWeekId = [...state.weeks].sort((a, b) => b.start.localeCompare(a.start))[0].id;
    ui.pendingWeek = false;
    save();
    render();
  } else if (action === 'draft-kind') {
    ui.draft.kind = target.dataset.kind;
    ui.draft.level = String(defaultLevel(ui.draft.kind));
    ui.formError = '';
    render();
  } else if (action === 'seg') {
    ui[target.dataset.key] = target.dataset.value;
    render();
  } else if (action === 'upgrade') {
    const item = itemById(id);
    if (item && item.level < 3) {
      item.level += 1;
      syncKnown(item);
      save();
      render();
    }
  } else if (action === 'downgrade') {
    const item = itemById(id);
    if (item && item.level > 0) {
      item.level -= 1;
      syncKnown(item);
      save();
      render();
    }
  } else if (action === 'cycle-pos') {
    const item = itemById(id);
    if (!item) return;
    const ids = POS.map(([pos]) => pos);
    item.pos = ids[(ids.indexOf(item.pos) + 1) % ids.length];
    save();
    render();
  } else if (action === 'edit-item') {
    ui.editingId = id;
    render();
  } else if (action === 'delete-item') {
    if (ui.pendingDelete !== id) {
      ui.pendingDelete = id;
      render();
      return;
    }
    state.items = state.items.filter((item) => item.id !== id);
    state.weeks.forEach((item) => {
      item.pointIds = item.pointIds.filter((pointId) => pointId !== id);
    });
    ui.pendingDelete = null;
    ui.editingId = null;
    save();
    render();
  } else if (action === 'practice-prev') {
    const total = week.parentLines.length;
    if (total) ui.practiceIndex = (ui.practiceIndex - 1 + total) % total;
    render();
  } else if (action === 'practice-next') {
    const total = week.parentLines.length;
    if (total) ui.practiceIndex = (ui.practiceIndex + 1) % total;
    render();
  } else if (action === 'practice-done' && week) {
    const line = week.parentLines[ui.practiceIndex];
    if (line) line.done = !line.done;
    save();
    render();
  } else if (action === 'prep-check' && week) {
    week.prepChecks[target.dataset.key] = !week.prepChecks[target.dataset.key];
    save();
    render();
  } else if (action === 'pick-import') document.getElementById('import-file').click();
  else if (action === 'reset-all') {
    if (!ui.confirmReset) {
      ui.confirmReset = true;
      render();
      return;
    }
    state = fresh();
    save();
    ui.confirmReset = false;
    ui.view = 'week';
    render({ scroll: 'top' });
  }
}

function onInput(event) {
  const target = event.target;
  if (target.dataset.weekField) {
    const week = activeWeek();
    if (week) {
      const key = target.dataset.weekField;
      const before = (week[key] || '').trim();
      week[key] = target.value;
      save();
      const crossed = !before !== !target.value.trim();
      if (crossed && (key === 'phonics' || key === 'childPattern')) render();
    }
    return;
  }
  if (target.dataset.profile) {
    state.profile[target.dataset.profile] = target.value;
    save();
    if (target.dataset.profile === 'childName') {
      ui.needName = false;
      const live = document.querySelector('[data-live="child"]');
      if (live) live.textContent = `${target.value.trim() || '她'}${state.profile.age ? ` · ${state.profile.age}` : ''}`;
      const err = document.querySelector('[data-name-error]');
      if (err) err.remove();
    }
    return;
  }
  if (target.dataset.draft) {
    ui.draft[target.dataset.draft] = target.value;
    ui.formError = '';
    return;
  }
  if (target.dataset.keep === 'batch') {
    ui.batchText = target.value;
    return;
  }
  if (target.dataset.keep === 'talk') {
    ui.talkSource = target.value;
    return;
  }
  if (target.dataset.keep === 'slot') {
    ui.slotWord = target.value;
    return;
  }
  if (target.dataset.keep === 'search') {
    ui.query = target.value;
    if (event.isComposing) return;
    render();
  }
}

function onChange(event) {
  const target = event.target;
  if (target.dataset.action === 'switch-week') {
    state.activeWeekId = target.value;
    ui.practiceIndex = 0;
    ui.pendingWeek = false;
    save();
    render();
  } else if (target.dataset.action === 'toggle-almost') {
    state.settings.useAlmost = target.checked;
    save();
  } else if (target.dataset.batch) {
    ui[target.dataset.batch] = target.value;
  } else if (target.dataset.draft) {
    ui.draft[target.dataset.draft] = target.value;
  } else if (target.dataset.action === 'import-file') {
    const file = target.files && target.files[0];
    target.value = '';
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        if (!data.profile || !Array.isArray(data.items) || !Array.isArray(data.weeks)) throw new Error('bad');
        state = data;
        state.settings = { useAlmost: false, ...(data.settings || {}) };
        state.weeks = state.weeks.map(hydrateWeek);
        save();
        bootWeek();
        flash('备份已导入');
      } catch (err) {
        flash('这个文件读不了，请选之前导出的备份');
      }
    };
    reader.readAsText(file);
  }
}

function onSubmit(event) {
  event.preventDefault();
  const form = event.target;
  if (form.dataset.form === 'welcome') finishWelcome();
  else if (form.dataset.form === 'talk') {
    ui.talkSource = String(new FormData(form).get('zh') || '');
    runTalk();
  } else if (form.dataset.form === 'slot') {
    ui.slotWord = String(new FormData(form).get('slot') || '');
    fillSlot();
  } else if (form.dataset.form === 'add-item') addFromDraft();
  else if (form.dataset.form === 'batch-words') {
    const data = new FormData(form);
    importBatch(String(data.get('words') || ''), String(data.get('pos') || 'noun'), Number(data.get('level') || 3));
  }
  else if (form.dataset.form === 'quick-point') {
    const text = new FormData(form).get('text');
    const found = ensureLexeme('word', String(text || ''), 'noun', 1);
    const week = activeWeek();
    if (!found) {
      flash('先写一个词');
      return;
    }
    if (week && !week.pointIds.includes(found.item.id)) week.pointIds.push(found.item.id);
    save();
    render();
  } else if (form.dataset.form === 'log') {
    const data = new FormData(form);
    const quote = String(data.get('quote') || '').trim();
    const help = String(data.get('help') || '').trim();
    if (!quote && !help) {
      flash('写一句再记');
      return;
    }
    const week = activeWeek();
    if (!week) return;
    week.logs.push({ id: uid(), at: Date.now(), quote, help });
    save();
    render();
  }
}

function onKey(event) {
  if (event.key === 'Enter' && event.target.dataset.action === 'edit-text') {
    event.preventDefault();
    closeEditFrom(null);
    save();
    render();
  }
  if (event.key === 'Escape' && ui.editingId) {
    ui.editingId = null;
    render();
  }
}

document.addEventListener('mousedown', (event) => {
  if (!document.querySelector('[data-action="edit-text"]')) return;
  const button = event.target.closest('button, a');
  if (button) event.preventDefault();
});

document.addEventListener('focusout', (event) => {
  if (!event.target.dataset || event.target.dataset.action !== 'edit-text') return;
  const id = event.target.dataset.id;
  const value = event.target.value;
  setTimeout(() => {
    if (ui.editingId !== id) return;
    const item = itemById(id);
    if (item && value.trim()) item.text = value.trim();
    ui.editingId = null;
    save();
    render();
  }, 160);
});

document.addEventListener('compositionend', (event) => {
  if (event.target.dataset && event.target.dataset.keep === 'search') {
    ui.query = event.target.value;
    render();
  }
});

document.addEventListener('click', onClick);
document.addEventListener('input', onInput);
document.addEventListener('change', onChange);
document.addEventListener('submit', onSubmit);
document.addEventListener('keydown', onKey);

state = load();
const opening = location.hash.slice(1);
if (opening === 'known') ui.view = 'dict';
else if (opening === 'prep' || opening === 'method') ui.view = 'talk';
else if (['talk', 'dict', 'week'].includes(opening)) ui.view = opening;
if (state.profile.ready) bootWeek();
render();
