const words = [
    {
        char: '一',
        mean: '하나',
        sound: '일'
    },
    {
        char: '二',
        mean: '둘',
        sound: '이'
    },
    {
        char: '三',
        mean: '셋',
        sound: '삼'
    },
    {
        char: '四',
        mean: '넷',
        sound: '사'
    },
    {
        char: '五',
        mean: '다섯',
        sound: '오'
    },
    {
        char: '六',
        mean: '여섯',
        sound: '륙'
    },
    {
        char: '七',
        mean: '일곱',
        sound: '칠'
    },
    {
        char: '八',
        mean: '여덟',
        sound: '팔'
    },
    {
        char: '九',
        mean: '아홉',
        sound: '구'
    },
    {
        char: '十',
        mean: '열',
        sound: '십'
    },
    {
        char: '漢',
        mean: '한나라',
        sound: '한'
    },
    {
        char: '字',
        mean: '글자',
        sound: '자'
    },
    {
        char: '文',
        mean: '글',
        sound: '문'
    },
    {
        char: '語',
        mean: '말씀',
        sound: '어'
    },
    {
        char: '化',
        mean: '되다',
        sound: '화'
    },
    {
        char: '人',
        mean: '사람',
        sound: '인'
    },
    {
        char: '天',
        mean: '하늘',
        sound: '천'
    },
    {
        char: '地',
        mean: '땅',
        sound: '지'
    },
    {
        char: '馬',
        mean: '말',
        sound: '마'
    },
    {
        char: '車',
        mean: '수레',
        sound: '거/차'
    },
    {
        char: '形',
        mean: '모양',
        sound: '형'
    },
    {
        char: '音',
        mean: '소리',
        sound: '음'
    },
    {
        char: '義',
        mean: '뜻, 옳다',
        sound: '의'
    },
    {
        char: '古',
        mean: '예',
        sound: '고'
    },
    {
        char: '日',
        mean: '해',
        sound: '일'
    },
    {
        char: '生',
        mean: '나다',
        sound: '생'
    },
    {
        char: '活',
        mean: '살다',
        sound: '활'
    },
    {
        char: '中',
        mean: '가운데',
        sound: '중'
    },
    {
        char: '國',
        mean: '나라',
        sound: '국'
    },
    {
        char: '木',
        mean: '나무',
        sound: '목'
    },
    {
        char: '月',
        mean: '달',
        sound: '월'
    },
    {
        char: '火',
        mean: '불',
        sound: '화'
    },
    {
        char: '刀',
        mean: '칼',
        sound: '도'
    },
    {
        char: '鳥',
        mean: '새',
        sound: '조'
    },
    {
        char: '貝',
        mean: '조개',
        sound: '패'
    },
    {
        char: '山',
        mean: '산',
        sound: '산'
    },
    {
        char: '川',
        mean: '내',
        sound: '천'
    },
    {
        char: '好',
        mean: '좋아하다',
        sound: '호'
    },
    {
        char: '名',
        mean: '이름',
        sound: '명'
    },
    {
        char: '明',
        mean: '밝다',
        sound: '명'
    },
    {
        char: '上',
        mean: '위',
        sound: '상'
    },
    {
        char: '下',
        mean: '아래',
        sound: '하'
    },
    {
        char: '本',
        mean: '근본',
        sound: '본'
    },
    {
        char: '末',
        mean: '끝',
        sound: '말'
    },
    {
        char: '林',
        mean: '수풀',
        sound: '림'
    },
    {
        char: '問',
        mean: '묻다',
        sound: '문'
    },
    {
        char: '聞',
        mean: '듣다',
        sound: '문'
    },
    {
        char: '村',
        mean: '마을',
        sound: '촌'
    },
    {
        char: '注',
        mean: '살다',
        sound: '주'
    },
    {
        char: '洞',
        mean: '마을',
        sound: '동'
    },
    {
        char: '休',
        mean: '쉬다',
        sound: '휴'
    },
    {
        char: '水',
        mean: '물',
        sound: '수'
    },
    {
        char: '金',
        mean: '쇠/성',
        sound: '금/김'
    },
    {
        char: '土',
        mean: '흙',
        sound: '토'
    },
    {
        char: '心',
        mean: '마음',
        sound: '심'
    },
    {
        char: '江',
        mean: '강',
        sound: '강'
    },
    {
        char: '鼻',
        mean: '코',
        sound: '비'
    },
    {
        char: '面',
        mean: '얼굴',
        sound: '면'
    },
    {
        char: '海',
        mean: '바다',
        sound: '해'
    },
    {
        char: '情',
        mean: '뜻',
        sound: '정'
    },
    {
        char: '手',
        mean: '손',
        sound: '수'
    },
    {
        char: '足',
        mean: '발',
        sound: '족'
    },
    {
        char: '耳',
        mean: '귀',
        sound: '이'
    },
    {
        char: '目',
        mean: '눈',
        sound: '목'
    },
    {
        char: '口',
        mean: '입',
        sound: '구'
    },
    {
        char: '技',
        mean: '재주',
        sound: '기'
    },
    {
        char: '別',
        mean: '다르다',
        sound: '별'
    },
    {
        char: '花',
        mean: '꽃',
        sound: '화'
    },
    {
        char: '然',
        mean: '그러하다',
        sound: '연'
    },
    {
        char: '道',
        mean: '길',
        sound: '도'
    },
    {
        char: '身',
        mean: '몸',
        sound: '신'
    },
    {
        char: '體',
        mean: '몸',
        sound: '체'
    },
    {
        char: '宇',
        mean: '집',
        sound: '우'
    },
    {
        char: '宙',
        mean: '집',
        sound: '주'
    },
    {
        char: '長',
        mean: '길다',
        sound: '장'
    },
    {
        char: '草',
        mean: '풀',
        sound: '초'
    },
    {
        char: '季',
        mean: '철, 계절',
        sound: '계'
    },
    {
        char: '節',
        mean: '마디, 절기',
        sound: '절'
    },
    {
        char: '氣',
        mean: '기운',
        sound: '기'
    },
    {
        char: '春',
        mean: '봄',
        sound: '춘'
    },
    {
        char: '短',
        mean: '짧다',
        sound: '단'
    },
    {
        char: '有',
        mean: '있다',
        sound: '유'
    },
    {
        char: '無',
        mean: '없을',
        sound: '무'
    },
    {
        char: '至',
        mean: '이르다',
        sound: '지'
    },
    {
        char: '溫',
        mean: '따뜻하다',
        sound: '온'
    },
    {
        char: '夏',
        mean: '여름',
        sound: '하'
    },
    {
        char: '秋',
        mean: '가을',
        sound: '추'
    },
    {
        char: '冬',
        mean: '겨울',
        sound: '동'
    },
    {
        char: '大',
        mean: '크다',
        sound: '대'
    },
    {
        char: '小',
        mean: '작다',
        sound: '소'
    },
    {
        char: '寒',
        mean: '차다',
        sound: '한'
    },
    {
        char: '風',
        mean: '바람',
        sound: '풍'
    },
    {
        char: '靑',
        mean: '푸르다',
        sound: '청'
    },
    {
        char: '年',
        mean: '해, 나이',
        sound: '년'
    },
    {
        char: '立',
        mean: '서다',
        sound: '립'
    },
    {
        char: '多',
        mean: '많다',
        sound: '다'
    },
    {
        char: '少',
        mean: '적다',
        sound: '소'
    },
    {
        char: '出',
        mean: '나가다',
        sound: '출'
    },
    {
        char: '入',
        mean: '들어가다',
        sound: '일'
    },
    {
        char: '輕',
        mean: '가볍다',
        sound: '경'
    },
    {
        char: '分',
        mean: '나누다',
        sound: '분'
    },
    {
        char: '重',
        mean: '무겁다, 중요하다',
        sound: '중'
    }
]

const hintButton = document.getElementById('hint')
const answerButton = document.getElementById('answer')
const nextButton = document.getElementById('next')
const char = document.getElementById('char')
const ans = document.getElementById('ans')

hintButton.addEventListener("click", () =>{hint()})
answerButton.addEventListener("click", () =>{answer()})
nextButton.addEventListener("click", () =>{next()})
document.addEventListener("keydown", (e) =>{
    if (e.keyCode == 32) {
        answer();
    } else if (e.keyCode == 13) {
        next();
    } else if (e.keyCode == 72) {
        hint();
    }
})

let i = Math.floor(Math.random() * words.length)
let hintOX = 0;
char.textContent = words[i].char

function hint() {
    if (hintOX == 0) {
        ans.textContent = `____ ${words[i].sound}`
        hintOX = 1
    }
}

function answer() {
    ans.textContent = `${words[i].mean} ${words[i].sound}`
    hintOX = 1
}

function next() {
    location.reload()
}