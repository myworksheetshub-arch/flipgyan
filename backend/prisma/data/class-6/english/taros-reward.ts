export const tarosRewardData = {
  classNumber: 6,
  className: 'Class 6',
  subjectName: 'English',
  subjectCode: 'ENG6',
  chapterNumber: 3,
  chapterTitle: "Taro's Reward & The Kite",
  summary: 'Honeysuckle Unit 3 — Japanese folktale about Taro, a poor dutiful woodcutter whose devotion to his aged parents turns a waterfall into delicious sake.',
  contentMarkdown: `# Unit 3: Taro's Reward & The Kite (Class 6 English)

## 1. Plot Summary
**Taro** was a thoughtful and loving young woodcutter living on a lonely hillside with his elderly parents. Though he worked hard chopping wood from morning till night, he earned very little money.

## 2. The Wish for Sake
On a cold evening, a strong wind blew through the cracks of their hut, making Taro's old father shiver. The father wished for a cup of **Sake** (a warm, expensive Japanese drink) to warm his heart.
Taro decided to work even harder the next day to buy his father sake.

## 3. The Magic Waterfall
Deep in the forest, Taro heard the sound of rushing water. He found a hidden waterfall falling over rocks. When he tasted the liquid:
- For Taro, it was **delicious, warm Sake**!
- When greedy villagers visited the waterfall later, it tasted like **plain cold water**!

## 4. Emperor's Honor
The Emperor of Japan heard of Taro's story. He rewarded Taro with **20 pieces of gold** and named the most beautiful fountain in the city after Taro to encourage all children to honor and obey their parents.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: "Taro's Reward",
      type: 'root',
      color: '#8b5cf6',
      children: [
        {
          id: 'devotion',
          label: 'Filial Devotion',
          type: 'category',
          children: [
            { id: 'sake', label: 'Wished Sake for Aged Father', type: 'concept' },
            { id: 'waterfall', label: 'Magic Waterfall gave Sake to Taro', type: 'concept' },
          ],
        },
        {
          id: 'reward',
          label: "Emperor's Reward",
          type: 'category',
          children: [
            { id: 'gold', label: '20 Gold Pieces & City Fountain Named Taro', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C6-ENG-TAR-001',
      questionText: 'Why did the magic waterfall give Taro sake, while it gave plain cold water to the villagers?',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Because Taro was a thoughtful and dutiful son, whereas the villagers were greedy', isCorrect: true, explanation: 'The magic waterfall rewarded Taro’s pure heart and filial devotion.' },
        { text: 'Because Taro paid the waterfall', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Because Taro was the Emperor', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Because the waterfall was broken', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'The magic waterfall honored Taro for his selfless devotion to his parents, while giving plain water to greedy villagers.',
    },
  ],
};
