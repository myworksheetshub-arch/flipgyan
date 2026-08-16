export const raakhKiRassiData = {
  classNumber: 5,
  className: 'Class 5',
  subjectName: 'Hindi',
  subjectCode: 'HIN5',
  chapterNumber: 1,
  chapterTitle: 'राख की रस्सी (Raakh Ki Rassi)',
  summary: 'रिमझिम पाठ 1 — तिब्बत के मंत्री लोनपो गार, उनके बेटे और समझदार लड़की की लोककथा।',
  contentMarkdown: `# पाठ 1: राख की रस्सी (रिमिझिम कक्षा 5)

## 1. कहानी का सारांश
लोनपो गार तिब्बत के 32वें राजा सोनगवसैन गंपो के मंत्री थे। वे अपनी होशियारी और चालाकी के लिए दूर-दूर तक मशहूर थे। लेकिन उनका बेटा बहुत भोला-भाला था।

## 2. लोनपो गार की शर्त
लोनपो गार ने अपने बेटे को 100 भेड़ें देकर शहर भेजा और कहा:
"इन्हें मारना या बेचना नहीं है। इन्हें 100 जौ के बोरों के साथ वापस लाना।"

## 3. समझदार लड़की की मदद
1. **पहली बार**: लड़की ने भेड़ों के बाल उतारे, उन्हें बाज़ार में बेचकर जौ की बोरी खरीदी।
2. **दूसरी बार**: लड़की ने भेड़ों के सींग काटे और बेचकर जौ की बोरी खरीदी।
3. **तीसरी शर्त (राख की रस्सी)**: लोनपो गार ने नौ हाथ लंबी राख की रस्सी बनाने को कहा। समझदार लड़की ने सिल पर नौ हाथ लंबी सन की रस्सी रखकर उसे जला दिया। रस्सी जल गई लेकिन राख के आकार की रस्सी सिल पर ही रह गई!
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'राख की रस्सी',
      type: 'root',
      color: '#f59e0b',
      children: [
        {
          id: 'characters',
          label: 'प्रमुख पात्र',
          type: 'category',
          children: [
            { id: 'lonpo', label: 'लोनपो गार (मंत्री)', type: 'concept' },
            { id: 'son', label: 'लोनपो गार का बेटा (भोला-भाला)', type: 'concept' },
            { id: 'girl', label: 'होशियार लड़की', type: 'concept' },
          ],
        },
        {
          id: 'tests',
          label: 'तीन शर्तें',
          type: 'category',
          children: [
            { id: 'hair', label: 'भेड़ों के बाल बेचना', type: 'concept' },
            { id: 'horns', label: 'भेड़ों के सींग बेचना', type: 'concept' },
            { id: 'rope', label: 'नौ हाथ लंबी राख की रस्सी बनाना', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C5-SUB-RAA-001',
      questionText: 'लोनपो गार किस देश के राजा के मंत्री थे?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'तिब्बत (Tibet)', isCorrect: true, explanation: 'लोनपो गार तिब्बत के राजा सोनगवसैन गंपो के मंत्री थे।' },
        { text: 'भारत', isCorrect: false, explanation: 'गलत उत्तर।' },
        { text: 'नेपाल', isCorrect: false, explanation: 'गलत उत्तर।' },
        { text: 'चीन', isCorrect: false, explanation: 'गलत उत्तर।' },
      ],
      explanation: 'लोनपो गार तिब्बत के 32वें राजा सोनगवसैन गंपो के बुद्धिमान मंत्री थे।',
    },
  ],
};
