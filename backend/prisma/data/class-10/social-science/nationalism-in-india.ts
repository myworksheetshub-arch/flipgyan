export const nationalismInIndiaData = {
  classNumber: 10,
  className: 'Class 10',
  subjectName: 'Social Science',
  subjectCode: 'SST10',
  chapterNumber: 1,
  chapterTitle: 'Nationalism in India',
  summary: 'First World War impact, Satyagraha concept, Rowlatt Act, Jallianwala Bagh massacre, Non-Cooperation Movement, Salt March, and Civil Disobedience Movement.',
  contentMarkdown: `# Chapter 1: Nationalism in India

## 1. First World War and Satyagraha
- **Impact of WWI**: Forced recruitment, price rise, food shortages, influenza epidemic.
- **Satyagraha**: Novel method of mass agitation based on truth and non-violence introduced by Mahatma Gandhi.
  - *Champaran (1917)*: Indigo farmers.
  - *Kheda (1917)*: Peasants revenue relief.
  - *Ahmedabad (1918)*: Cotton mill workers.

## 2. Rowlatt Act and Jallianwala Bagh (1919)
- **Rowlatt Act**: Gave government enormous powers to repress political activities and detain prisoners without trial for 2 years.
- **Jallianwala Bagh Massacre (13 April 1919)**: General Dyer opened fire on peaceful crowd assembled at Amritsar.

## 3. Non-Cooperation Movement (1921-1922)
Combined Non-Cooperation with Khilafat movement. Surrender of titles, boycott of civil services, army, police, courts, and schools. Called off after **Chauri Chaura violence (1922)**.

## 4. Salt March and Civil Disobedience Movement (1930)
Gandhiji walked 240 miles from Sabarmati to Dandi (6 April 1930) to break the Salt Law.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Nationalism in India',
      type: 'root',
      color: '#b91c1c',
      children: [
        {
          id: 'early',
          label: 'Satyagraha & Rowlatt Act (1919)',
          type: 'category',
          children: [
            { id: 'champaran', label: 'Champaran & Kheda (1917)', type: 'concept' },
            { id: 'jallianwala', label: 'Jallianwala Bagh Massacre', type: 'concept' },
          ],
        },
        {
          id: 'movements',
          label: 'Mass Movements',
          type: 'category',
          children: [
            { id: 'non-coop', label: 'Non-Cooperation (1921-22)', type: 'concept' },
            { id: 'dandi', label: 'Dandi Salt March (1930)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C10-SCI-NAT-001',
      questionText: 'Which incident led Mahatma Gandhi to call off the Non-Cooperation Movement in February 1922?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Chauri Chaura Violence', isCorrect: true, explanation: 'Violent clash at Chauri Chaura police station led Gandhiji to withdraw the movement.' },
        { text: 'Jallianwala Bagh Massacre', isCorrect: false, explanation: 'Occurred in 1919.' },
        { text: 'Dandi March', isCorrect: false, explanation: 'Occurred in 1930.' },
        { text: 'Kakori Conspiracy', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Gandhiji halted the Non-Cooperation movement after protestors set fire to a police station in Chauri Chaura, Gorakhpur.',
    },
  ],
};
