export const ch1IntegersClass7Data = {
  classNumber: 7,
  className: 'Class 7',
  subjectName: 'Mathematics',
  subjectCode: 'MATH7',
  chapterNumber: 1,
  chapterTitle: 'Integers',
  summary: 'Properties of addition and subtraction of integers, Multiplication of positive and negative integers, Division of integers, Word problems involving integer arithmetic.',
  contentMarkdown: `# Chapter 1: Integers (Class 7 Mathematics NEP 2025)

## 1. Multiplication Rules
- Positive $\\times$ Positive $=$ Positive: $(+a) \\times (+b) = +ab$
- Negative $\\times$ Negative $=$ Positive: $(-a) \\times (-b) = +ab$
- Positive $\\times$ Negative $=$ Negative: $(+a) \\times (-b) = -ab$

## 2. Properties of Integer Operations
- **Closure Property**: $a + b \\in \\mathbb{Z}, \\quad a \\times b \\in \\mathbb{Z}$
- **Commutative Property**: $a + b = b + a, \\quad a \\times b = b \\times a$
- **Distributive Property**: $a \\times (b + c) = (a \\times b) + (a \\times c)$
`,
  mindMapNodes: [
    /*{
      id: 'root',
      label: 'Integers Operations',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'int-props',
          label: 'Properties & Sign Rules',
          type: 'category',
          children: [
            { id: 'mult-sign', label: '(-) × (-) = (+), (+) × (-) = (-)', type: 'concept' },
            { id: 'distributive', label: 'a × (b + c) = (a × b) + (a × c)', type: 'concept' },
          ],
        },
      ],
    },*/

    {
      "subject": {
        "board": "CBSE",
        "class": 7,
        "subject_name": "Mathematics",
        "chapter": {
          "chapter_number": 1,
          "chapter_name": "Integers",
          "content_type": "study_notes",
          "title": "Integers Notes & Visual Mind Map",
          "description": "Comprehensive study notes and visual mind map for Class 7 Mathematics Chapter 1.",
          "sections": [
            {
              "section_id": "INT-C1-S01",
              "section_type": "overview",
              "title": "Overview & Concepts",
              "content": {
                "introduction": "Integers are numbers that include positive numbers, negative numbers and zero.",
                "number_set": "..., -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, ...",
                "key_ideas": [
                  "Positive integers are greater than zero.",
                  "Negative integers are less than zero.",
                  "Zero is neither positive nor negative.",
                  "Integers can be represented on a number line.",
                  "Every positive integer has a corresponding negative integer."
                ]
              }
            },
            {
              "section_id": "INT-C1-S02",
              "section_type": "visual_mind_map",
              "title": "Visual Mind Map",
              "mind_map": {
                "central_topic": "INTEGERS",
                "branches": [
                  {
                    "title": "Types",
                    "items": [
                      "Positive Integers",
                      "Negative Integers",
                      "Zero"
                    ]
                  },
                  {
                    "title": "Number Line",
                    "items": [
                      "Right → Greater",
                      "Left → Smaller",
                      "Opposite Integers",
                      "Distance from Zero"
                    ]
                  },
                  {
                    "title": "Comparison",
                    "items": [
                      "Greater Than",
                      "Less Than",
                      "Equal To"
                    ]
                  },
                  {
                    "title": "Operations",
                    "items": [
                      "Addition",
                      "Subtraction",
                      "Multiplication",
                      "Division"
                    ]
                  },
                  {
                    "title": "Properties",
                    "items": [
                      "Closure",
                      "Commutative",
                      "Associative",
                      "Distributive",
                      "Identity"
                    ]
                  },
                  {
                    "title": "Applications",
                    "items": [
                      "Temperature",
                      "Profit and Loss",
                      "Elevation",
                      "Bank Balance",
                      "Sea Level"
                    ]
                  }
                ]
              }
            },
            {
              "section_id": "INT-C1-S03",
              "section_type": "deep_dive_theory",
              "title": "Deep Dive Theory",
              "topics": [
                {
                  "topic": "Integers on a Number Line",
                  "rules": [
                    "Numbers increase from left to right.",
                    "Numbers decrease from right to left.",
                    "The integer immediately to the right of a number is its successor.",
                    "The integer immediately to the left of a number is its predecessor."
                  ],
                  "example": "On the number line, -3 < -2 < -1 < 0 < 1 < 2 < 3."
                },
                {
                  "topic": "Addition of Integers",
                  "rules": [
                    "When signs are the same, add the absolute values and keep the common sign.",
                    "When signs are different, subtract the smaller absolute value from the larger absolute value and keep the sign of the number with the larger absolute value."
                  ],
                  "examples": [
                    "5 + 3 = 8",
                    "(-5) + (-3) = -8",
                    "7 + (-4) = 3",
                    "(-7) + 4 = -3"
                  ]
                },
                {
                  "topic": "Subtraction of Integers",
                  "rule": "Subtracting an integer is the same as adding its additive inverse.",
                  "formula": "a - b = a + (-b)",
                  "examples": [
                    "7 - 3 = 7 + (-3) = 4",
                    "7 - (-3) = 7 + 3 = 10",
                    "-5 - 3 = -5 + (-3) = -8"
                  ]
                },
                {
                  "topic": "Multiplication of Integers",
                  "rules": [
                    "Positive × Positive = Positive",
                    "Negative × Negative = Positive",
                    "Positive × Negative = Negative",
                    "Negative × Positive = Negative"
                  ],
                  "sign_rule": "Same signs give positive; different signs give negative."
                },
                {
                  "topic": "Division of Integers",
                  "rules": [
                    "Positive ÷ Positive = Positive",
                    "Negative ÷ Negative = Positive",
                    "Positive ÷ Negative = Negative",
                    "Negative ÷ Positive = Negative"
                  ],
                  "important_rule": "Division by zero is not defined."
                },
                {
                  "topic": "Properties of Integers",
                  "properties": [
                    {
                      "name": "Closure under Addition",
                      "statement": "The sum of any two integers is an integer."
                    },
                    {
                      "name": "Closure under Subtraction",
                      "statement": "The difference of any two integers is an integer."
                    },
                    {
                      "name": "Closure under Multiplication",
                      "statement": "The product of any two integers is an integer."
                    },
                    {
                      "name": "Commutative Property",
                      "statement": "a + b = b + a and a × b = b × a."
                    },
                    {
                      "name": "Associative Property",
                      "statement": "(a + b) + c = a + (b + c) and (a × b) × c = a × (b × c)."
                    },
                    {
                      "name": "Distributive Property",
                      "statement": "a × (b + c) = (a × b) + (a × c)."
                    },
                    {
                      "name": "Additive Identity",
                      "statement": "a + 0 = a."
                    },
                    {
                      "name": "Multiplicative Identity",
                      "statement": "a × 1 = a."
                    }
                  ]
                }
              ]
            },
            {
              "section_id": "INT-C1-S04",
              "section_type": "solved_examples",
              "title": "Solved Examples",
              "examples": [
                {
                  "question": "Find (-8) + 13.",
                  "solution_steps": [
                    "The signs are different.",
                    "Subtract the smaller absolute value from the larger: 13 - 8 = 5.",
                    "13 has the larger absolute value and is positive.",
                    "Therefore, (-8) + 13 = 5."
                  ],
                  "answer": "5"
                },
                {
                  "question": "Find (-12) - (-7).",
                  "solution_steps": [
                    "Change subtraction into addition of the additive inverse.",
                    "(-12) - (-7) = (-12) + 7.",
                    "The signs are different.",
                    "12 - 7 = 5 and the larger absolute value is negative.",
                    "Therefore, the answer is -5."
                  ],
                  "answer": "-5"
                },
                {
                  "question": "Find (-6) × (-4).",
                  "solution_steps": [
                    "Both integers are negative.",
                    "Same signs give a positive product.",
                    "6 × 4 = 24."
                  ],
                  "answer": "24"
                },
                {
                  "question": "Find (-45) ÷ 9.",
                  "solution_steps": [
                    "The signs are different.",
                    "Different signs give a negative quotient.",
                    "45 ÷ 9 = 5."
                  ],
                  "answer": "-5"
                }
              ]
            },
            {
              "section_id": "INT-C1-S05",
              "section_type": "practice_quizzes",
              "title": "Practice & Quizzes",
              "question_types": [
                "MCQ",
                "Fill in the Blanks",
                "True or False",
                "Short Answer",
                "Long Answer",
                "Assertion and Reasoning",
                "Case Based",
                "HOTS",
                "Application Based"
              ],
              "sample_questions": [
                {
                  "question_id": "INT-MCQ-001",
                  "type": "MCQ",
                  "question": "Which of the following is the greatest integer?",
                  "options": ["-8", "-3", "0", "-1"],
                  "answer": "0"
                },
                {
                  "question_id": "INT-MCQ-002",
                  "type": "MCQ",
                  "question": "What is (-7) + 12?",
                  "options": ["-19", "-5", "5", "19"],
                  "answer": "5"
                },
                {
                  "question_id": "INT-MCQ-003",
                  "type": "MCQ",
                  "question": "What is (-6) × (-5)?",
                  "options": ["-30", "-11", "11", "30"],
                  "answer": "30"
                },
                {
                  "question_id": "INT-FIB-001",
                  "type": "fill_in_the_blank",
                  "question": "The additive identity of integers is ____.",
                  "answer": "0"
                },
                {
                  "question_id": "INT-TF-001",
                  "type": "true_false",
                  "question": "Zero is a positive integer.",
                  "answer": false
                },
                {
                  "question_id": "INT-SA-001",
                  "type": "short_answer",
                  "question": "Find (-15) + 8 - (-4).",
                  "answer": "-3"
                }
              ]
            },
            {
              "section_id": "INT-C1-S06",
              "section_type": "core_concepts",
              "title": "Core Concepts to Remember",
              "items": [
                {
                  "priority": 1,
                  "title": "Core Principle of Integers",
                  "content": "Integers consist of negative integers, zero and positive integers and can be represented on a number line."
                },
                {
                  "priority": 2,
                  "title": "Critical Rules & Properties",
                  "content": "Remember the sign rules for addition, subtraction, multiplication and division, together with the commutative, associative, distributive and identity properties."
                },
                {
                  "priority": 3,
                  "title": "Exam Strategy",
                  "content": "Write every calculation step clearly, use brackets correctly with negative numbers, check signs carefully and verify answers using the number line or inverse operation where possible."
                }
              ]
            },
            {
              "section_id": "INT-C1-S07",
              "section_type": "exam_strategy",
              "title": "Common Mistakes & High-Scoring Tips",
              "common_mistakes": [
                "Forgetting the negative sign.",
                "Treating subtraction of a negative integer as ordinary subtraction.",
                "Confusing the greater integer with the integer having the greater absolute value.",
                "Incorrectly applying multiplication and division sign rules.",
                "Writing expressions without brackets around negative integers."
              ],
              "high_scoring_tips": [
                "Always write the sign with the number.",
                "Use a number line when comparing integers.",
                "Convert subtraction into addition of the additive inverse.",
                "Apply sign rules before calculating numerical values.",
                "Show all intermediate steps in long-answer questions.",
                "Recheck the final sign before submitting."
              ]
            }
          ]
        }
      }
    }

  ],
  questions: [
    {
      questionCode: 'C7-MATH-CH1-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Evaluate: (-12) × (-5) × (-2).',
      explanation: '(-12) × (-5) = +60. (+60) × (-2) = -120.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '-120', isCorrect: true },
        { optionLabel: 'B', optionText: '120', isCorrect: false },
        { optionLabel: 'C', optionText: '-60', isCorrect: false },
        { optionLabel: 'D', optionText: '60', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH1-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Evaluate: (-36) ÷ [(-12) ÷ 3].',
      explanation: 'Inside brackets: (-12) ÷ 3 = -4. Then (-36) ÷ (-4) = +9.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '9', isCorrect: true },
        { optionLabel: 'B', optionText: '-9', isCorrect: false },
        { optionLabel: 'C', optionText: '1', isCorrect: false },
        { optionLabel: 'D', optionText: '-1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH1-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'In a test, +4 marks are given for every correct answer and -2 marks for every incorrect answer. Radhika answered all questions and scored 20 marks, though she got 10 correct answers. How many incorrect answers did she attempt?',
      explanation: 'Marks for 10 correct = 10 × 4 = 40. Total score = 20. Marks for incorrect = 20 - 40 = -20. Number of incorrect = -20 / -2 = 10.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '10', isCorrect: true },
        { optionLabel: 'B', optionText: '5', isCorrect: false },
        { optionLabel: 'C', optionText: '8', isCorrect: false },
        { optionLabel: 'D', optionText: '12', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH1-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the product using suitable property: 26 × (-48) + (-48) × (-36).',
      explanation: 'Use Distributive Property: (-48) × [26 + (-36)] = (-48) × (-10) = 480.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '480', isCorrect: true },
        { optionLabel: 'B', optionText: '-480', isCorrect: false },
        { optionLabel: 'C', optionText: '2880', isCorrect: false },
        { optionLabel: 'D', optionText: '-2880', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH1-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Olympiad] An elevator descends into a mine shaft at the rate of 6 m/min. If the descent starts from 10 m above the ground level, how long will it take to reach -350 m?',
      explanation: 'Total distance to descend = 10 - (-350) = 360 m. Rate = 6 m/min. Time taken = 360 / 6 = 60 minutes = 1 hour.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1 hour (60 minutes)', isCorrect: true },
        { optionLabel: 'B', optionText: '50 minutes', isCorrect: false },
        { optionLabel: 'C', optionText: '1 hour 10 minutes', isCorrect: false },
        { optionLabel: 'D', optionText: '45 minutes', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH1-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] If a and b are any two negative integers, which of the following statements is ALWAYS TRUE?',
      explanation: 'Product of two negative integers (-a) × (-b) = +ab, which is always POSITIVE.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'a × b is always positive', isCorrect: true },
        { optionLabel: 'B', optionText: 'a + b is always positive', isCorrect: false },
        { optionLabel: 'C', optionText: 'a - b is always negative', isCorrect: false },
        { optionLabel: 'D', optionText: 'a ÷ b is always negative', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH1-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Which integer is its own additive inverse?',
      explanation: '0 + 0 = 0. The additive inverse of 0 is 0.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '0', isCorrect: true },
        { optionLabel: 'B', optionText: '1', isCorrect: false },
        { optionLabel: 'C', optionText: '-1', isCorrect: false },
        { optionLabel: 'D', optionText: 'None', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH1-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'The temperature at 12 noon was 10°C above zero. If it decreases at the rate of 2°C per hour until midnight, at what time will the temperature be 8°C below zero?',
      explanation: 'Difference = 10 - (-8) = 18°C. Time needed = 18 / 2 = 9 hours. 12 noon + 9 hours = 9 PM.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '9 PM', isCorrect: true },
        { optionLabel: 'B', optionText: '8 PM', isCorrect: false },
        { optionLabel: 'C', optionText: '10 PM', isCorrect: false },
        { optionLabel: 'D', optionText: '6 PM', isCorrect: false },
      ],
    },






    // =====================================================
    // 1. MCQ
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-MCQ-001',

      type: 'MCQ',

      questionText:
        'Which of the following is the smallest integer?',

      difficulty: 'EASY',
      cognitiveLevel: 'REMEMBER',

      marks: 1,

      options: [
        {
          optionKey: 'A',
          optionText: '-7',
          isCorrect: false,
          displayOrder: 1,
        },
        {
          optionKey: 'B',
          optionText: '-12',
          isCorrect: true,
          displayOrder: 2,
        },
        {
          optionKey: 'C',
          optionText: '0',
          isCorrect: false,
          displayOrder: 3,
        },
        {
          optionKey: 'D',
          optionText: '5',
          isCorrect: false,
          displayOrder: 4,
        },
      ],
    },

    // =====================================================
    // 2. MULTIPLE CORRECT
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-MC-001',

      type: 'MULTIPLE_CORRECT',

      questionText:
        'Which of the following statements are true?',

      difficulty: 'MEDIUM',
      cognitiveLevel: 'UNDERSTAND',

      competencyBased: true,

      marks: 2,

      options: [
        {
          optionKey: 'A',
          optionText: 'The sum of two negative integers is negative.',
          isCorrect: true,
          displayOrder: 1,
        },
        {
          optionKey: 'B',
          optionText: 'The product of two negative integers is positive.',
          isCorrect: true,
          displayOrder: 2,
        },
        {
          optionKey: 'C',
          optionText: 'Zero is a positive integer.',
          isCorrect: false,
          displayOrder: 3,
        },
        {
          optionKey: 'D',
          optionText: 'The product of a positive and a negative integer is positive.',
          isCorrect: false,
          displayOrder: 4,
        },
      ],
    },

    // =====================================================
    // 3. FILL IN THE BLANK
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-FIB-001',

      type: 'FILL_IN_BLANK',

      questionText:
        'The additive inverse of -15 is ______.',

      difficulty: 'EASY',
      cognitiveLevel: 'REMEMBER',

      marks: 1,

      questionData: {
        answers: ['15'],
      },
    },

    // =====================================================
    // 4. TRUE FALSE
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-TF-001',

      type: 'TRUE_FALSE',

      questionText:
        'The sum of an integer and its additive inverse is always zero.',

      difficulty: 'EASY',
      cognitiveLevel: 'UNDERSTAND',

      marks: 1,

      questionData: {
        answer: true,
      },
    },

    // =====================================================
    // 5. ASSERTION REASON
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-AR-001',

      type: 'ASSERTION_REASON',

      questionText:
        'Assertion (A): The product of two negative integers is positive.\n\nReason (R): When two negative signs are multiplied, the result is positive.',

      difficulty: 'MEDIUM',
      cognitiveLevel: 'ANALYZE',

      competencyBased: true,

      marks: 1,

      questionData: {
        assertion:
          'The product of two negative integers is positive.',

        reason:
          'When two negative signs are multiplied, the result is positive.',

        correctOption: 'A',

        options: {
          A: 'Both A and R are true, and R is the correct explanation of A.',
          B: 'Both A and R are true, but R is not the correct explanation of A.',
          C: 'A is true but R is false.',
          D: 'A is false but R is true.',
        },
      },
    },

    // =====================================================
    // 6. MATCH FOLLOWING
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-MATCH-001',

      type: 'MATCH_FOLLOWING',

      questionText:
        'Match the integers in Column A with their additive inverses in Column B.',

      difficulty: 'MEDIUM',
      cognitiveLevel: 'UNDERSTAND',

      marks: 2,

      questionData: {
        left: [
          { id: '1', text: '-8' },
          { id: '2', text: '12' },
          { id: '3', text: '0' },
          { id: '4', text: '-15' },
        ],

        right: [
          { id: 'A', text: '15' },
          { id: 'B', text: '-12' },
          { id: 'C', text: '0' },
          { id: 'D', text: '8' },
        ],

        answers: {
          '1': 'D',
          '2': 'B',
          '3': 'C',
          '4': 'A',
        },
      },
    },

    // =====================================================
    // 7. VERY SHORT ANSWER
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-VSA-001',

      type: 'VERY_SHORT_ANSWER',

      questionText:
        'Write the integer that is 6 less than 2.',

      difficulty: 'EASY',
      cognitiveLevel: 'APPLY',

      marks: 1,

      questionData: {
        answer: '-4',
      },
    },

    // =====================================================
    // 8. SHORT ANSWER
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-SA-001',

      type: 'SHORT_ANSWER',

      questionText:
        'Find: (-18) + 25 - 7.',

      difficulty: 'MEDIUM',
      cognitiveLevel: 'APPLY',

      marks: 3,

      questionData: {
        expectedAnswer: '0',
        working:
          '(-18) + 25 - 7 = 7 - 7 = 0',
      },

      rubrics: [
        {
          criterion: 'Correctly adds -18 and 25.',
          expectedAnswer: '7',
          marks: 1,
          displayOrder: 1,
        },
        {
          criterion: 'Correctly subtracts 7.',
          expectedAnswer: '0',
          marks: 1,
          displayOrder: 2,
        },
        {
          criterion: 'Writes the final answer correctly.',
          expectedAnswer: '0',
          marks: 1,
          displayOrder: 3,
        },
      ],
    },

    // =====================================================
    // 9. LONG ANSWER
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-LA-001',

      type: 'LONG_ANSWER',

      questionText:
        'Using the properties of integers, simplify:\n\n(-12) × [5 + (-8)]',

      difficulty: 'HARD',
      cognitiveLevel: 'ANALYZE',

      marks: 5,

      questionData: {
        expectedAnswer: '36',

        working: [
          '5 + (-8) = -3',
          '(-12) × (-3) = 36',
        ],
      },

      rubrics: [
        {
          criterion: 'Correctly simplifies the bracket.',
          expectedAnswer: '-3',
          marks: 2,
          displayOrder: 1,
        },
        {
          criterion: 'Applies multiplication rule for integers.',
          expectedAnswer: '36',
          marks: 2,
          displayOrder: 2,
        },
        {
          criterion: 'Final answer.',
          expectedAnswer: '36',
          marks: 1,
          displayOrder: 3,
        },
      ],
    },

    // =====================================================
    // 10. CASE BASED
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-CASE-001',

      type: 'CASE_BASED',

      questionText:
        'A lift starts at the ground floor. It goes down 4 floors and then goes up 7 floors. Take the ground floor as 0.',

      difficulty: 'MEDIUM',
      cognitiveLevel: 'APPLY',

      competencyBased: true,

      marks: 4,

      questionData: {
        caseText:
          'A lift starts at the ground floor. It goes down 4 floors and then goes up 7 floors. Take the ground floor as 0.',

        subQuestions: [
          {
            id: 'a',
            type: 'MCQ',
            questionText:
              'What integer represents 4 floors below the ground floor?',
            marks: 1,
            answer: '-4',
          },
          {
            id: 'b',
            type: 'VERY_SHORT_ANSWER',
            questionText:
              'At which floor does the lift stop after going up 7 floors?',
            marks: 1,
            answer: '3',
          },
          {
            id: 'c',
            type: 'SHORT_ANSWER',
            questionText:
              'Represent the movement using an integer expression.',
            marks: 2,
            answer: '-4 + 7 = 3',
          },
        ],
      },
    },

    // =====================================================
    // 11. SOURCE BASED
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-SOURCE-001',

      type: 'SOURCE_BASED',

      questionText:
        'Read the information and answer the questions.',

      difficulty: 'MEDIUM',
      cognitiveLevel: 'ANALYZE',

      competencyBased: true,

      marks: 4,

      questionData: {
        source:
          'During a winter morning, the temperature in a hill station was -6°C. By afternoon it increased by 11°C.',

        subQuestions: [
          {
            id: 'a',
            questionText:
              'What was the morning temperature?',
            marks: 1,
            answer: '-6°C',
          },
          {
            id: 'b',
            questionText:
              'What was the temperature increase?',
            marks: 1,
            answer: '11°C',
          },
          {
            id: 'c',
            questionText:
              'Find the afternoon temperature.',
            marks: 2,
            answer: '5°C',
          },
        ],
      },
    },

    // =====================================================
    // 12. DATA BASED
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-DATA-001',

      type: 'DATA_BASED',

      questionText:
        'The table shows the change in temperature during a day.',

      difficulty: 'MEDIUM',
      cognitiveLevel: 'ANALYZE',

      competencyBased: true,

      marks: 4,

      questionData: {
        table: {
          columns: [
            'Time',
            'Temperature'
          ],

          rows: [
            ['6 AM', '-3°C'],
            ['10 AM', '2°C'],
            ['2 PM', '8°C'],
            ['8 PM', '1°C'],
          ],
        },

        subQuestions: [
          {
            id: 'a',
            questionText:
              'What was the lowest temperature?',
            answer: '-3°C',
            marks: 1,
          },
          {
            id: 'b',
            questionText:
              'Find the increase from 6 AM to 2 PM.',
            answer: '11°C',
            marks: 2,
          },
          {
            id: 'c',
            questionText:
              'At what time was the temperature 1°C?',
            answer: '8 PM',
            marks: 1,
          },
        ],
      },
    },

    // =====================================================
    // 13. PICTURE BASED
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-PICTURE-001',

      type: 'PICTURE_BASED',

      questionText:
        'Observe the number line and answer the question: Which integer is represented by point P?',

      difficulty: 'MEDIUM',
      cognitiveLevel: 'UNDERSTAND',

      marks: 2,

      questionData: {
        image:
          '/images/questions/class7/maths/integers/number-line-01.png',

        answer: '-3',
      },
    },

    // =====================================================
    // 14. DIAGRAM BASED
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-DIAGRAM-001',

      type: 'DIAGRAM_BASED',

      questionText:
        'Study the number line and calculate the distance between A and B.',

      difficulty: 'MEDIUM',
      cognitiveLevel: 'APPLY',

      marks: 3,

      questionData: {
        image:
          '/images/questions/class7/maths/integers/number-line-02.png',

        points: {
          A: -5,
          B: 4,
        },

        answer: 9,
      },
    },

    // =====================================================
    // 15. NUMERICAL
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-NUM-001',

      type: 'NUMERICAL',

      questionText:
        'Evaluate: (-15) × (-4) + (-20).',

      difficulty: 'MEDIUM',
      cognitiveLevel: 'APPLY',

      marks: 3,

      questionData: {
        steps: [
          '(-15) × (-4) = 60',
          '60 + (-20) = 40',
        ],

        answer: 40,
      },
    },

    // =====================================================
    // 16. APPLICATION BASED
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-APP-001',

      type: 'APPLICATION_BASED',

      questionText:
        'A diver is 18 metres below sea level. He rises 7 metres and then dives 5 metres. What is his final position relative to sea level?',

      difficulty: 'MEDIUM',
      cognitiveLevel: 'APPLY',

      competencyBased: true,

      marks: 3,

      questionData: {
        expression:
          '-18 + 7 - 5',

        answer: '-16 metres',

        explanation:
          'The diver is finally 16 metres below sea level.',
      },
    },

    // =====================================================
    // 17. HOTS
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-HOTS-001',

      type: 'HOTS',

      questionText:
        'Without performing complete calculations, determine whether (-25) × 18 × (-4) is positive or negative. Explain your reasoning.',

      difficulty: 'HARD',
      cognitiveLevel: 'ANALYZE',

      competencyBased: true,

      hots: true,

      marks: 3,

      questionData: {
        answer: 'Positive',

        explanation:
          'There are two negative factors, so their product is positive. Multiplying by positive 18 keeps the result positive.',
      },
    },

    // =====================================================
    // 18. ANALYTICAL
    // =====================================================

    {
      questionCode: 'C7-MATH-INT-ANALYTICAL-001',

      type: 'ANALYTICAL',

      questionText:
        'Two integers have a product of -72. If one integer is 8, find the other integer and explain how you know its sign.',

      difficulty: 'HARD',
      cognitiveLevel: 'ANALYZE',

      competencyBased: true,

      marks: 4,

      questionData: {
        equation:
          '8 × x = -72',

        answer: '-9',

        explanation:
          'Since the product is negative and 8 is positive, the other integer must be negative. -72 ÷ 8 = -9.',
      },

      rubrics: [
        {
          criterion: 'Forms the correct equation.',
          expectedAnswer: '8 × x = -72',
          marks: 1,
          displayOrder: 1,
        },
        {
          criterion: 'Finds the value of x.',
          expectedAnswer: '-9',
          marks: 2,
          displayOrder: 2,
        },
        {
          criterion: 'Explains the sign.',
          expectedAnswer:
            'A positive integer multiplied by a negative integer gives a negative product.',
          marks: 1,
          displayOrder: 3,
        },
      ],
    },



    // ==========================================
    // CHAPTER 1: INTEGERS (10 Questions)
    // ==========================================
    {
      questionCode: 'C7-MATH-INT-101',
      chapterName: 'Integers',
      topicName: 'Properties of Addition and Subtraction of Integers',
      questionText: 'A submarine was situated 450 metres below sea level. It descends another 120 metres and then ascends 230 metres. What is its final position relative to sea level?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 1,
      explanation: 'Initial position = -450 m. Descends 120 m => -450 - 120 = -570 m. Ascends 230 m => -570 + 230 = -340 m. So it is 340 metres below sea level.',
      hint: 'Represent below sea level as negative integers and ascending as positive addition.',
      options: [
        { label: 'A', text: '340 metres below sea level', isCorrect: true, explanation: 'Correct (-450 - 120 + 230 = -340).' },
        { label: 'B', text: '560 metres below sea level', isCorrect: false, explanation: 'Misconception: Added all magnitudes together.' },
        { label: 'C', text: '100 metres below sea level', isCorrect: false, explanation: 'Calculation error in subtraction.' },
        { label: 'D', text: '340 metres above sea level', isCorrect: false, explanation: 'Sign error.' },
      ],
    },
    {
      questionCode: 'C7-MATH-INT-102',
      chapterName: 'Integers',
      topicName: 'Multiplication of Integers',
      questionText: 'In a competitive exam containing 20 questions, 4 marks are awarded for every correct answer and (-2) marks are deducted for every incorrect answer. If Aarav attempted all questions and got 14 correct answers, what is his total score?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Correct answers = 14 * 4 = 56. Incorrect answers = (20 - 14) = 6. Negative marks = 6 * (-2) = -12. Total score = 56 + (-12) = 44.',
      hint: 'Find the number of incorrect answers first, then calculate total score.',
      options: [
        { label: 'A', text: '56 marks', isCorrect: false, explanation: 'Forgot to deduct negative marks for wrong answers.' },
        { label: 'B', text: '44 marks', isCorrect: true, explanation: 'Correct: (14 * 4) + (6 * -2) = 56 - 12 = 44.' },
        { label: 'C', text: '48 marks', isCorrect: false, explanation: 'Incorrect subtraction of penalty.' },
        { label: 'D', text: '40 marks', isCorrect: false, explanation: 'Deducted 16 marks instead of 12.' },
      ],
    },
    {
      questionCode: 'C7-MATH-INT-103',
      chapterName: 'Integers',
      topicName: 'Division of Integers',
      questionText: 'Evaluate: [(-36) ÷ 12] ÷ 3',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: '[(-36) ÷ 12] = -3. Then (-3) ÷ 3 = -1.',
      hint: 'Follow BODMAS rules working inside brackets first.',
      options: [
        { label: 'A', text: '-1', isCorrect: true, explanation: 'Correct: (-3) / 3 = -1.' },
        { label: 'B', text: '1', isCorrect: false, explanation: 'Sign error when dividing negative by positive.' },
        { label: 'C', text: '-9', isCorrect: false, explanation: 'Incorrect division order.' },
        { label: 'D', text: '9', isCorrect: false, explanation: 'Arithmetic mistake.' },
      ],
    },
    {
      questionCode: 'C7-MATH-INT-104',
      chapterName: 'Integers',
      topicName: 'Properties of Integers',
      questionText: 'Assertion (A): The product of two negative integers is always a positive integer.\nReason (R): When dividing two negative integers, the quotient is always a negative integer.',
      type: 'ASSERTION_REASON',
      difficulty: 'MEDIUM',
      bloomLevel: 'ANALYZE',
      competency: 'LOGICAL',
      marks: 1,
      explanation: 'Assertion (A) is True: (-a) * (-b) = +(a*b). Reason (R) is False because (-a) / (-b) = +(a/b), which is a positive integer, not negative.',
      hint: 'Check rules for multiplication and division of negative integers independently.',
      options: [
        { label: 'A', text: 'Both A and R are true and R is the correct explanation of A', isCorrect: false, explanation: 'R is false.' },
        { label: 'B', text: 'Both A and R are true but R is NOT the correct explanation of A', isCorrect: false, explanation: 'R is false.' },
        { label: 'C', text: 'A is true but R is false', isCorrect: true, explanation: 'Correct: Division of two negatives gives positive.' },
        { label: 'D', text: 'A is false but R is true', isCorrect: false, explanation: 'A is true.' },
      ],
    },
    {
      questionCode: 'C7-MATH-INT-105',
      chapterName: 'Integers',
      topicName: 'Multiplication Properties',
      questionText: 'Using distributive property, calculate: (-25) × 102',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'CONCEPTUAL',
      marks: 2,
      explanation: '(-25) × (100 + 2) = (-25 × 100) + (-25 × 2) = -2500 + (-50) = -2550.',
      hint: 'Split 102 into (100 + 2) and apply a(b + c) = ab + ac.',
      options: [
        { label: 'A', text: '-2550', isCorrect: true, explanation: 'Correct: -2500 - 50 = -2550.' },
        { label: 'B', text: '-2450', isCorrect: false, explanation: 'Subtracted 50 instead of adding -50.' },
        { label: 'C', text: '2550', isCorrect: false, explanation: 'Omitted negative sign.' },
        { label: 'D', text: '-2502', isCorrect: false, explanation: 'Misapplied distributive property.' },
      ],
    },
    {
      questionCode: 'C7-MATH-INT-106',
      chapterName: 'Integers',
      topicName: 'Word Problems on Integers',
      questionText: 'The temperature of Srinagar at 12 noon was 10°C above zero. If it decreases at the rate of 2°C per hour until midnight, at what time will the temperature be 8°C below zero?',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      marks: 2,
      explanation: 'Initial temp = +10°C. Target temp = -8°C. Total temp drop = 10 - (-8) = 18°C. Rate of drop = 2°C/hr. Time required = 18 / 2 = 9 hours. 12 noon + 9 hours = 9 PM.',
      hint: 'Find the total decrease in temperature required from +10°C to -8°C.',
      options: [
        { label: 'A', text: '9 PM', isCorrect: true, explanation: 'Correct: 18°C drop / 2°C per hour = 9 hours. 12 PM + 9 hrs = 9 PM.' },
        { label: 'B', text: '8 PM', isCorrect: false, explanation: 'Calculated 16°C drop instead of 18°C.' },
        { label: 'C', text: '10 PM', isCorrect: false, explanation: 'Calculated 20°C drop.' },
        { label: 'D', text: '6 PM', isCorrect: false, explanation: 'Calculated drop from 10°C to 0°C only.' },
      ],
    },
    {
      questionCode: 'C7-MATH-INT-107',
      chapterName: 'Integers',
      topicName: 'Additive Identity and Inverse',
      questionText: 'Fill in the blank: The additive inverse of (-17) added to the multiplicative identity of integers equals ______.',
      type: 'FILL_BLANK',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'Additive inverse of -17 is +17. Multiplicative identity of integers is 1. Sum = 17 + 1 = 18.',
      hint: 'Additive inverse flips the sign (+17). Multiplicative identity is 1.',
      options: [
        { label: 'A', text: '18', isCorrect: true, explanation: 'Correct: 17 + 1 = 18.' },
        { label: 'B', text: '16', isCorrect: false, explanation: 'Used -17 + 1 = -16.' },
        { label: 'C', text: '17', isCorrect: false, explanation: 'Forgot to add multiplicative identity.' },
        { label: 'D', text: '0', isCorrect: false, explanation: 'Confused additive identity (0) with multiplicative identity (1).' },
      ],
    },
    {
      questionCode: 'C7-MATH-INT-108',
      chapterName: 'Integers',
      topicName: 'Multiplication of Negative Integers',
      questionText: 'What is the sign of the product if we multiply 19 negative integers and 6 positive integers together?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'LOGICAL',
      marks: 1,
      explanation: 'An odd number (19) of negative integers yields a negative product. Multiplying by positive integers preserves the negative sign. Result = Negative.',
      hint: 'Check whether the number of negative factors is odd or even.',
      options: [
        { label: 'A', text: 'Negative', isCorrect: true, explanation: 'Correct: 19 is odd, so negative.' },
        { label: 'B', text: 'Positive', isCorrect: false, explanation: 'Misconception: 19 + 6 = 25 is odd, but sign depends only on negative count.' },
        { label: 'C', text: 'Zero', isCorrect: false, explanation: 'None of the factors are zero.' },
        { label: 'D', text: 'Cannot be determined', isCorrect: false, explanation: 'Rule applies universally.' },
      ],
    },
    {
      questionCode: 'C7-MATH-INT-109',
      chapterName: 'Integers',
      topicName: 'Integer Operations',
      questionText: 'Verify if division is commutative for integers using a = (-8) and b = 4.',
      type: 'TRUE_FALSE',
      difficulty: 'MEDIUM',
      bloomLevel: 'EVALUATE',
      competency: 'CRITICAL',
      marks: 1,
      explanation: 'a ÷ b = (-8) ÷ 4 = -2. b ÷ a = 4 ÷ (-8) = -1/2. Since -2 ≠ -1/2, division is NOT commutative. Statement is False.',
      hint: 'Calculate a ÷ b and b ÷ a separately and compare.',
      options: [
        { label: 'A', text: 'False, because (-8) ÷ 4 = -2 whereas 4 ÷ (-8) = -0.5', isCorrect: true, explanation: 'Correct: Division is non-commutative.' },
        { label: 'B', text: 'True, division is commutative for all integers', isCorrect: false, explanation: 'Division is never commutative.' },
      ],
    },
    {
      questionCode: 'C7-MATH-INT-110',
      chapterName: 'Integers',
      topicName: 'HOTS Real Life Application',
      questionText: 'A freezer cools at a rate of 3°C per minute. If the initial room temperature is 32°C, what will be the temperature of the freezer after 15 minutes?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'APPLICATION',
      marks: 2,
      explanation: 'Total drop in 15 minutes = 15 * (-3°C) = -45°C. Final temp = 32 + (-45) = -13°C.',
      hint: 'Multiply time by cooling rate and subtract from starting temperature.',
      options: [
        { label: 'A', text: '-13°C', isCorrect: true, explanation: 'Correct: 32 - 45 = -13°C.' },
        { label: 'B', text: '-15°C', isCorrect: false, explanation: 'Arithmetic miscalculation.' },
        { label: 'C', text: '13°C', isCorrect: false, explanation: 'Forgot negative sign.' },
        { label: 'D', text: '-77°C', isCorrect: false, explanation: 'Added 32 and 45 with negative sign.' },
      ],
    },

    // ==========================================
    // CHAPTER 2: FRACTIONS AND DECIMALS (10 Questions)
    // ==========================================
    {
      questionCode: 'C7-MATH-FRAC-101',
      chapterName: 'Fractions and Decimals',
      topicName: 'Multiplication of Fractions',
      questionText: 'Riya reads 1/4 part of a book in 1 hour. How much part of the book will she read in 2 (1/3) hours?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: '2 (1/3) hours = 7/3 hours. Part read = (1/4) × (7/3) = 7/12 part.',
      hint: 'Convert mixed fraction to improper fraction and multiply.',
      options: [
        { label: 'A', text: '7/12 part', isCorrect: true, explanation: 'Correct: (1/4) * (7/3) = 7/12.' },
        { label: 'B', text: '5/12 part', isCorrect: false, explanation: 'Incorrect conversion of mixed fraction.' },
        { label: 'C', text: '3/7 part', isCorrect: false, explanation: 'Inverted the multiplication.' },
        { label: 'D', text: '1/3 part', isCorrect: false, explanation: 'Subtracted fractions instead of multiplying.' },
      ],
    },
    {
      questionCode: 'C7-MATH-FRAC-102',
      chapterName: 'Fractions and Decimals',
      topicName: 'Division of Fractions',
      questionText: 'Solve: 4/9 ÷ 2/3',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: '4/9 ÷ 2/3 = 4/9 × 3/2 = (4×3) / (9×2) = 12 / 18 = 2/3.',
      hint: 'Multiply by the reciprocal of the divisor fraction.',
      options: [
        { label: 'A', text: '2/3', isCorrect: true, explanation: 'Correct: (4/9) * (3/2) = 2/3.' },
        { label: 'B', text: '8/27', isCorrect: false, explanation: 'Multiplied directly without taking reciprocal.' },
        { label: 'C', text: '3/2', isCorrect: false, explanation: 'Took reciprocal of dividend instead.' },
        { label: 'D', text: '4/27', isCorrect: false, explanation: 'Incorrect cancellation.' },
      ],
    },
    {
      questionCode: 'C7-MATH-FRAC-103',
      chapterName: 'Fractions and Decimals',
      topicName: 'Multiplication of Decimals',
      questionText: 'A car covers a distance of 16.4 km in 1 litre of petrol. How much distance will it cover in 4.5 litres of petrol?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 2,
      explanation: 'Distance = 16.4 × 4.5 = 73.8 km.',
      hint: 'Multiply 164 by 45 and place the decimal point 2 places from right.',
      options: [
        { label: 'A', text: '73.8 km', isCorrect: true, explanation: 'Correct: 16.4 * 4.5 = 73.80 km.' },
        { label: 'B', text: '7.38 km', isCorrect: false, explanation: 'Misplaced decimal point by 1 digit left.' },
        { label: 'C', text: '738 km', isCorrect: false, explanation: 'Forgot decimal point.' },
        { label: 'D', text: '65.6 km', isCorrect: false, explanation: 'Multiplied 16.4 by 4 only.' },
      ],
    },
    {
      questionCode: 'C7-MATH-FRAC-104',
      chapterName: 'Fractions and Decimals',
      topicName: 'Division of Decimals',
      questionText: 'Find the average of 4.2, 3.8, and 5.5.',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Sum = 4.2 + 3.8 + 5.5 = 13.5. Average = 13.5 / 3 = 4.5.',
      hint: 'Average = Sum of values / Total number of values.',
      options: [
        { label: 'A', text: '4.5', isCorrect: true, explanation: 'Correct: 13.5 / 3 = 4.5.' },
        { label: 'B', text: '4.2', isCorrect: false, explanation: 'Selected first term as average.' },
        { label: 'C', text: '5.0', isCorrect: false, explanation: 'Estimation error.' },
        { label: 'D', text: '13.5', isCorrect: false, explanation: 'Gave sum instead of average.' },
      ],
    },
    {
      questionCode: 'C7-MATH-FRAC-105',
      chapterName: 'Fractions and Decimals',
      topicName: 'Decimal Place Value and Operations',
      questionText: 'If 273.45 ÷ 1000 = x, what is the value of x?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'Dividing by 1000 shifts decimal point 3 places to the left. 273.45 ÷ 1000 = 0.27345.',
      hint: 'Shift the decimal point to the left by 3 digits.',
      options: [
        { label: 'A', text: '0.27345', isCorrect: true, explanation: 'Correct shift left by 3 decimal places.' },
        { label: 'B', text: '2.7345', isCorrect: false, explanation: 'Shifted only 2 places.' },
        { label: 'C', text: '273450', isCorrect: false, explanation: 'Multiplied instead of dividing.' },
        { label: 'D', text: '27.345', isCorrect: false, explanation: 'Shifted only 1 place.' },
      ],
    },
    {
      questionCode: 'C7-MATH-FRAC-106',
      chapterName: 'Fractions and Decimals',
      topicName: 'Real Life Problem Solving',
      questionText: 'Each side of a regular polygon is 2.5 cm in length. The perimeter of the polygon is 12.5 cm. How many sides does the polygon have?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'ANALYZE',
      competency: 'LOGICAL',
      marks: 2,
      explanation: 'Number of sides = Perimeter / Length of each side = 12.5 / 2.5 = 5. The polygon is a pentagon.',
      hint: 'Perimeter of regular polygon = number of sides × side length.',
      options: [
        { label: 'A', text: '5 sides (Pentagon)', isCorrect: true, explanation: 'Correct: 12.5 / 2.5 = 5.' },
        { label: 'B', text: '6 sides (Hexagon)', isCorrect: false, explanation: 'Incorrect division 12.5/2.5.' },
        { label: 'C', text: '4 sides (Square)', isCorrect: false, explanation: 'Calculation error.' },
        { label: 'D', text: '10 sides', isCorrect: false, explanation: 'Multiplied perimeter by 2.' },
      ],
    },
    {
      questionCode: 'C7-MATH-FRAC-107',
      chapterName: 'Fractions and Decimals',
      topicName: 'Fractions Comparison',
      questionText: 'Which of the following is the reciprocal of 3 (4/7)?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: '3 (4/7) = 25/7. Its reciprocal is 7/25.',
      hint: 'Convert to improper fraction 25/7, then invert numerator and denominator.',
      options: [
        { label: 'A', text: '7/25', isCorrect: true, explanation: 'Correct reciprocal of 25/7.' },
        { label: 'B', text: '25/7', isCorrect: false, explanation: 'Improper fraction, not reciprocal.' },
        { label: 'C', text: '7/19', isCorrect: false, explanation: 'Wrong mixed fraction expansion (3*4+7).' },
        { label: 'D', text: '-25/7', isCorrect: false, explanation: 'Confused reciprocal with additive inverse.' },
      ],
    },
    {
      questionCode: 'C7-MATH-FRAC-108',
      chapterName: 'Fractions and Decimals',
      topicName: 'Word Problems on Division',
      questionText: 'A ribbon of length 15.75 metres is cut into 7 equal pieces. What is the length of each piece?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 2,
      explanation: 'Length of each piece = 15.75 / 7 = 2.25 metres.',
      hint: 'Divide total length 15.75 by number of pieces 7.',
      options: [
        { label: 'A', text: '2.25 m', isCorrect: true, explanation: 'Correct: 15.75 / 7 = 2.25 m.' },
        { label: 'B', text: '2.15 m', isCorrect: false, explanation: 'Division error in hundredths place.' },
        { label: 'C', text: '2.50 m', isCorrect: false, explanation: 'Rounded off incorrectly.' },
        { label: 'D', text: '1.75 m', isCorrect: false, explanation: 'Divided 12.25 by 7.' },
      ],
    },
    {
      questionCode: 'C7-MATH-FRAC-109',
      chapterName: 'Fractions and Decimals',
      topicName: 'Assertion-Reason on Fractions',
      questionText: 'Assertion (A): The product of two proper fractions is less than each of the two fractions.\nReason (R): When two proper fractions are multiplied, the denominator increases faster than the numerator.',
      type: 'ASSERTION_REASON',
      difficulty: 'MEDIUM',
      bloomLevel: 'ANALYZE',
      competency: 'REASONING',
      marks: 1,
      explanation: 'Both A and R are true and R correctly explains why (1/2) * (1/3) = 1/6, which is less than both 1/2 and 1/3.',
      hint: 'Test with proper fractions like 1/2 and 1/3.',
      options: [
        { label: 'A', text: 'Both A and R are true and R is the correct explanation of A', isCorrect: true, explanation: 'Correct mathematical property of proper fractions.' },
        { label: 'B', text: 'Both A and R are true but R is NOT the correct explanation of A', isCorrect: false, explanation: 'R is the exact explanation.' },
        { label: 'C', text: 'A is true but R is false', isCorrect: false, explanation: 'R is true.' },
        { label: 'D', text: 'A is false but R is true', isCorrect: false, explanation: 'A is true.' },
      ],
    },
    {
      questionCode: 'C7-MATH-FRAC-110',
      chapterName: 'Fractions and Decimals',
      topicName: 'Competency & HOTS',
      questionText: 'An container has 36 litres of milk. A jug of capacity 3/4 litres is filled completely from the container. How many maximum jugs can be filled from the container?',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 2,
      explanation: 'Number of jugs = Total volume / Volume per jug = 36 ÷ (3/4) = 36 × (4/3) = 12 × 4 = 48 jugs.',
      hint: 'Divide total volume 36 by 3/4.',
      options: [
        { label: 'A', text: '48 jugs', isCorrect: true, explanation: 'Correct: 36 * (4/3) = 48.' },
        { label: 'B', text: '27 jugs', isCorrect: false, explanation: 'Multiplied 36 by 3/4 instead of dividing.' },
        { label: 'C', text: '36 jugs', isCorrect: false, explanation: 'Assumed 1 litre capacity per jug.' },
        { label: 'D', text: '42 jugs', isCorrect: false, explanation: 'Arithmetic mistake in multiplication.' },
      ],
    },

    // ==========================================
    // CHAPTER 3: DATA HANDLING (8 Questions)
    // ==========================================
    {
      questionCode: 'C7-MATH-DATA-101',
      chapterName: 'Data Handling',
      topicName: 'Mean, Median and Mode',
      questionText: 'Find the mode of the given set of observations: 13, 16, 12, 14, 19, 12, 14, 13, 14.',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Frequency count: 12 appears 2 times, 13 appears 2 times, 14 appears 3 times, 16 & 19 appear 1 time. Most frequent = 14. So Mode = 14.',
      hint: 'Mode is the observation that occurs most frequently.',
      options: [
        { label: 'A', text: '14', isCorrect: true, explanation: 'Correct: 14 occurs 3 times (highest frequency).' },
        { label: 'B', text: '13', isCorrect: false, explanation: 'Occurs only 2 times.' },
        { label: 'C', text: '12', isCorrect: false, explanation: 'Occurs only 2 times.' },
        { label: 'D', text: '19', isCorrect: false, explanation: 'Confused mode with maximum value.' },
      ],
    },
    {
      questionCode: 'C7-MATH-DATA-102',
      chapterName: 'Data Handling',
      topicName: 'Median',
      questionText: 'Find the median of the data: 24, 36, 46, 17, 18, 25, 35.',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Arrange in ascending order: 17, 18, 24, 25, 35, 36, 46. Middle term (4th observation out of 7) is 25.',
      hint: 'First arrange the data in ascending order and find the middle term.',
      options: [
        { label: 'A', text: '25', isCorrect: true, explanation: 'Correct: 4th term in ordered list (17,18,24,25,35,36,46).' },
        { label: 'B', text: '17', isCorrect: false, explanation: 'Selected smallest term.' },
        { label: 'C', text: '24', isCorrect: false, explanation: 'Forgot to sort data before picking middle element.' },
        { label: 'D', text: '35', isCorrect: false, explanation: 'Selected 5th term.' },
      ],
    },
    {
      questionCode: 'C7-MATH-DATA-103',
      chapterName: 'Data Handling',
      topicName: 'Range of Data',
      questionText: 'The heights (in cm) of 5 students in Class 7 are 140, 135, 152, 148, and 130. What is the range of this height data?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'Range = Maximum value - Minimum value = 152 - 130 = 22 cm.',
      hint: 'Range = Highest value - Lowest value.',
      options: [
        { label: 'A', text: '22 cm', isCorrect: true, explanation: 'Correct: 152 - 130 = 22 cm.' },
        { label: 'B', text: '141 cm', isCorrect: false, explanation: 'Calculated mean height instead of range.' },
        { label: 'C', text: '152 cm', isCorrect: false, explanation: 'Stated maximum height.' },
        { label: 'D', text: '18 cm', isCorrect: false, explanation: 'Subtracted 130 from 148.' },
      ],
    },
    {
      questionCode: 'C7-MATH-DATA-104',
      chapterName: 'Data Handling',
      topicName: 'Probability',
      questionText: 'A fair six-sided die is thrown once. What is the probability of getting a prime number?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'Total outcomes = {1, 2, 3, 4, 5, 6} (6 outcomes). Prime numbers on die = {2, 3, 5} (3 outcomes). Probability = 3/6 = 1/2.',
      hint: 'Prime numbers on a die are 2, 3, and 5.',
      options: [
        { label: 'A', text: '1/2', isCorrect: true, explanation: 'Correct: 3/6 = 1/2.' },
        { label: 'B', text: '1/3', isCorrect: false, explanation: 'Counted only 2 prime numbers.' },
        { label: 'C', text: '2/3', isCorrect: false, explanation: 'Included 1 as a prime number.' },
        { label: 'D', text: '1/6', isCorrect: false, explanation: 'Probability of getting a single specific outcome.' },
      ],
    },
    {
      questionCode: 'C7-MATH-DATA-105',
      chapterName: 'Data Handling',
      topicName: 'Bar Graphs Interpretation',
      questionText: 'In a double bar graph comparing term 1 and term 2 marks out of 100, Rohan scored 75 in T1 and 90 in T2 in Science. By how much did his performance improve?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'DATA_INTERPRETATION',
      marks: 1,
      explanation: 'Improvement = T2 marks - T1 marks = 90 - 75 = 15 marks.',
      hint: 'Subtract Term 1 score from Term 2 score.',
      options: [
        { label: 'A', text: '15 marks', isCorrect: true, explanation: 'Correct: 90 - 75 = 15.' },
        { label: 'B', text: '25 marks', isCorrect: false, explanation: 'Subtracted from 100.' },
        { label: 'C', text: '165 marks', isCorrect: false, explanation: 'Added marks together.' },
        { label: 'D', text: '10 marks', isCorrect: false, explanation: 'Calculation error.' },
      ],
    },
    {
      questionCode: 'C7-MATH-DATA-106',
      chapterName: 'Data Handling',
      topicName: 'Mean Word Problem',
      questionText: 'The mean of 5 numbers is 20. If one number is excluded, their mean becomes 18. What is the excluded number?',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL',
      marks: 2,
      explanation: 'Sum of 5 numbers = 5 × 20 = 100. Sum of 4 remaining numbers = 4 × 18 = 72. Excluded number = 100 - 72 = 28.',
      hint: 'Find sum of 5 numbers and sum of remaining 4 numbers.',
      options: [
        { label: 'A', text: '28', isCorrect: true, explanation: 'Correct: 100 - 72 = 28.' },
        { label: 'B', text: '26', isCorrect: false, explanation: 'Subtracted 74 from 100.' },
        { label: 'C', text: '22', isCorrect: false, explanation: 'Arithmetic mistake.' },
        { label: 'D', text: '2', isCorrect: false, explanation: 'Subtracted 18 from 20.' },
      ],
    },
    {
      questionCode: 'C7-MATH-DATA-107',
      chapterName: 'Data Handling',
      topicName: 'Chance and Probability',
      questionText: 'Which of the following events has a probability equal to 0 (Impossible event)?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'Getting a number 7 when rolling a standard 6-sided die is impossible (P = 0).',
      hint: 'Identify the outcome that can never happen.',
      options: [
        { label: 'A', text: 'Rolling a 7 on a standard 6-sided die', isCorrect: true, explanation: 'Correct: Max face is 6.' },
        { label: 'B', text: 'Tossing a coin and getting heads', isCorrect: false, explanation: 'P = 1/2.' },
        { label: 'C', text: 'Sun rising in the east tomorrow', isCorrect: false, explanation: 'P = 1 (Certain event).' },
        { label: 'D', text: 'Drawing a red card from a deck of cards', isCorrect: false, explanation: 'P = 1/2.' },
      ],
    },
    {
      questionCode: 'C7-MATH-DATA-108',
      chapterName: 'Data Handling',
      topicName: 'Comparative Data Analysis',
      questionText: 'Can the mean of a dataset be greater than every observation in that dataset?',
      type: 'TRUE_FALSE',
      difficulty: 'MEDIUM',
      bloomLevel: 'EVALUATE',
      competency: 'REASONING',
      marks: 1,
      explanation: 'No, the mean always lies between the lowest and highest observations of the dataset. Therefore, it cannot be strictly greater than all observations. Statement is False.',
      hint: 'Consider any dataset, e.g. {2, 4, 6}. Mean is 4, which lies between 2 and 6.',
      options: [
        { label: 'A', text: 'False, mean always lies between the minimum and maximum values of the dataset', isCorrect: true, explanation: 'Correct: Mean is a measure of central tendency.' },
        { label: 'B', text: 'True, mean can be higher than all numbers if they are negative', isCorrect: false, explanation: 'Mean of negatives also lies between lowest and highest.' },
      ],
    },

    // ==========================================
    // CHAPTER 4: SIMPLE EQUATIONS (8 Questions)
    // ==========================================
    {
      questionCode: 'C7-MATH-EQ-101',
      chapterName: 'Simple Equations',
      topicName: 'Setting Up Equations',
      questionText: 'Write an equation for the statement: "Add 7 to 3 times a number x to get 34."',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: '3 times x = 3x. Adding 7 = 3x + 7. Result is 34 => 3x + 7 = 34.',
      hint: '3 times x means 3 * x.',
      options: [
        { label: 'A', text: '3x + 7 = 34', isCorrect: true, explanation: 'Correct algebraic representation.' },
        { label: 'B', text: '7x + 3 = 34', isCorrect: false, explanation: 'Swapped coefficients.' },
        { label: 'C', text: '3(x + 7) = 34', isCorrect: false, explanation: 'Added 7 before multiplying by 3.' },
        { label: 'D', text: 'x + 21 = 34', isCorrect: false, explanation: 'Multiplied 7 by 3.' },
      ],
    },
    {
      questionCode: 'C7-MATH-EQ-102',
      chapterName: 'Simple Equations',
      topicName: 'Solving Linear Equations',
      questionText: 'Solve for m: 5m + 7 = 27',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: '5m = 27 - 7 => 5m = 20 => m = 20 / 5 => m = 4.',
      hint: 'Transpose 7 to RHS by changing sign to -7.',
      options: [
        { label: 'A', text: 'm = 4', isCorrect: true, explanation: 'Correct: 5m = 20 => m = 4.' },
        { label: 'B', text: 'm = 5', isCorrect: false, explanation: 'Arithmetic mistake 20/5.' },
        { label: 'C', text: 'm = 6.8', isCorrect: false, explanation: 'Added 7 instead of subtracting (34/5).' },
        { label: 'D', text: 'm = 3', isCorrect: false, explanation: 'Calculation error.' },
      ],
    },
    {
      questionCode: 'C7-MATH-EQ-103',
      chapterName: 'Simple Equations',
      topicName: 'Equation Transposition',
      questionText: 'Solve the linear equation: 3(n - 5) = -21',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'n - 5 = -21 / 3 => n - 5 = -7 => n = -7 + 5 => n = -2.',
      hint: 'Divide RHS by 3 first, then add 5 to both sides.',
      options: [
        { label: 'A', text: 'n = -2', isCorrect: true, explanation: 'Correct: n - 5 = -7 => n = -2.' },
        { label: 'B', text: 'n = 2', isCorrect: false, explanation: 'Sign error when adding 5 to -7.' },
        { label: 'C', text: 'n = -12', isCorrect: false, explanation: 'Subtracted 5 from -7.' },
        { label: 'D', text: 'n = -7', isCorrect: false, explanation: 'Forgot to add 5.' },
      ],
    },
    {
      questionCode: 'C7-MATH-EQ-104',
      chapterName: 'Simple Equations',
      topicName: 'Real Life Word Problems',
      questionText: 'Priya’s father is 45 years old. He is 5 years older than 4 times Priya’s age. What is Priya’s age in years?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 2,
      explanation: 'Let Priya’s age be p. 4p + 5 = 45 => 4p = 40 => p = 10 years.',
      hint: 'Set up equation 4p + 5 = 45 and solve for p.',
      options: [
        { label: 'A', text: '10 years', isCorrect: true, explanation: 'Correct: 4p = 40 => p = 10.' },
        { label: 'B', text: '12 years', isCorrect: false, explanation: 'Calculation error.' },
        { label: 'C', text: '8 years', isCorrect: false, explanation: 'Subtracted 5 twice.' },
        { label: 'D', text: '11 years', isCorrect: false, explanation: 'Divided 45 by 4.' },
      ],
    },
    {
      questionCode: 'C7-MATH-EQ-105',
      chapterName: 'Simple Equations',
      topicName: 'Geometry based Equations',
      questionText: 'In an isosceles triangle, the base angles are equal. The vertex angle is 40°. Find the measure of each base angle.',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 2,
      explanation: 'Sum of angles in a triangle = 180°. Let base angle = b. 40° + b + b = 180° => 2b = 140° => b = 70°.',
      hint: 'Sum of angles in triangle = 180°. Base angles are equal.',
      options: [
        { label: 'A', text: '70°', isCorrect: true, explanation: 'Correct: (180 - 40) / 2 = 70°.' },
        { label: 'B', text: '140°', isCorrect: false, explanation: 'Forgot to divide by 2 for the two base angles.' },
        { label: 'C', text: '50°', isCorrect: false, explanation: 'Subtracted 40 from 90°.' },
        { label: 'D', text: '60°', isCorrect: false, explanation: 'Used 160° total angle sum.' },
      ],
    },
    {
      questionCode: 'C7-MATH-EQ-106',
      chapterName: 'Simple Equations',
      topicName: 'Equations Verification',
      questionText: 'Check if x = -3 is a solution to the equation 4x - 5 = -17.',
      type: 'TRUE_FALSE',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'LHS = 4(-3) - 5 = -12 - 5 = -17 = RHS. Thus x = -3 IS a solution. Statement is True.',
      hint: 'Substitute x = -3 into 4x - 5 and check if it equals -17.',
      options: [
        { label: 'A', text: 'True, because 4(-3) - 5 = -12 - 5 = -17', isCorrect: true, explanation: 'LHS equals RHS.' },
        { label: 'B', text: 'False, because 4(-3) - 5 = -7', isCorrect: false, explanation: 'Incorrect arithmetic: 4*(-3) is -12, not -2.' },
      ],
    },
    {
      questionCode: 'C7-MATH-EQ-107',
      chapterName: 'Simple Equations',
      topicName: 'HOTS Problem',
      questionText: 'Sum of three consecutive integers is 81. What is the value of the largest integer?',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL',
      marks: 2,
      explanation: 'Let integers be x, x+1, x+2. Sum: x + (x+1) + (x+2) = 81 => 3x + 3 = 81 => 3x = 78 => x = 26. Integers are 26, 27, 28. Largest = 28.',
      hint: 'Represent integers as x, x+1, x+2 and solve 3x + 3 = 81.',
      options: [
        { label: 'A', text: '28', isCorrect: true, explanation: 'Correct: 26, 27, 28 (Largest is 28).' },
        { label: 'B', text: '27', isCorrect: false, explanation: 'Selected middle integer instead of largest.' },
        { label: 'C', text: '26', isCorrect: false, explanation: 'Selected smallest integer.' },
        { label: 'D', text: '29', isCorrect: false, explanation: 'Added 1 to largest integer.' },
      ],
    },
    {
      questionCode: 'C7-MATH-EQ-108',
      chapterName: 'Simple Equations',
      topicName: 'Real Life Application',
      questionText: 'A basket contains some apples. After adding 15 more apples and dividing all apples equally among 4 children, each child receives 12 apples. How many apples were originally in the basket?',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 2,
      explanation: 'Let original apples = a. (a + 15) / 4 = 12 => a + 15 = 48 => a = 33 apples.',
      hint: 'Set up equation (a + 15) / 4 = 12 and solve for a.',
      options: [
        { label: 'A', text: '33 apples', isCorrect: true, explanation: 'Correct: 48 - 15 = 33.' },
        { label: 'B', text: '35 apples', isCorrect: false, explanation: 'Subtracted 13 from 48.' },
        { label: 'C', text: '48 apples', isCorrect: false, explanation: 'Gave total apples before distribution.' },
        { label: 'D', text: '27 apples', isCorrect: false, explanation: 'Calculation error.' },
      ],
    },

    // ==========================================
    // CHAPTER 5: LINES AND ANGLES (8 Questions)
    // ==========================================
    {
      questionCode: 'C7-MATH-LA-101',
      chapterName: 'Lines and Angles',
      topicName: 'Complementary and Supplementary Angles',
      questionText: 'Find the measure of an angle which is equal to its complement.',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'Complementary angles add up to 90°. If x = 90° - x => 2x = 90° => x = 45°.',
      hint: 'Complementary angles sum to 90°. Set x = 90° - x.',
      options: [
        { label: 'A', text: '45°', isCorrect: true, explanation: 'Correct: 45° + 45° = 90°.' },
        { label: 'B', text: '90°', isCorrect: false, explanation: 'Stated sum of complement angles.' },
        { label: 'C', text: '60°', isCorrect: false, explanation: 'Used 120° total.' },
        { label: 'D', text: '30°', isCorrect: false, explanation: 'Not equal to its complement 60°.' },
      ],
    },
    {
      questionCode: 'C7-MATH-LA-102',
      chapterName: 'Lines and Angles',
      topicName: 'Supplementary Angles',
      questionText: 'Two supplementary angles are in the ratio 4 : 5. What is the measure of the larger angle?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 1,
      explanation: 'Supplementary sum = 180°. 4x + 5x = 180° => 9x = 180° => x = 20°. Larger angle = 5 * 20 = 100°.',
      hint: 'Sum of supplementary angles is 180°. 4x + 5x = 180°.',
      options: [
        { label: 'A', text: '100°', isCorrect: true, explanation: 'Correct: 5 * 20° = 100°.' },
        { label: 'B', text: '80°', isCorrect: false, explanation: 'Gave smaller angle (4 * 20° = 80°).' },
        { label: 'C', text: '90°', isCorrect: false, explanation: 'Assumed equal division.' },
        { label: 'D', text: '120°', isCorrect: false, explanation: 'Ratio miscalculation.' },
      ],
    },
    {
      questionCode: 'C7-MATH-LA-103',
      chapterName: 'Lines and Angles',
      topicName: 'Parallel Lines and Transversal',
      questionText: 'If two parallel lines are cut by a transversal, which of the following statements is ALWAYS TRUE?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'Alternate interior angles are equal when two parallel lines are intersected by a transversal line.',
      hint: 'Recall properties of parallel lines and transversals.',
      options: [
        { label: 'A', text: 'Alternate interior angles are equal', isCorrect: true, explanation: 'Correct fundamental parallel line property.' },
        { label: 'B', text: 'Interior angles on the same side of transversal are equal', isCorrect: false, explanation: 'They are supplementary (sum to 180°), not equal.' },
        { label: 'C', text: 'Corresponding angles sum to 180°', isCorrect: false, explanation: 'They are equal, not supplementary.' },
        { label: 'D', text: 'Vertically opposite angles sum to 180°', isCorrect: false, explanation: 'They are equal.' },
      ],
    },
    {
      questionCode: 'C7-MATH-LA-104',
      chapterName: 'Lines and Angles',
      topicName: 'Linear Pair',
      questionText: 'An angle and its linear pair partner are in the ratio 1 : 2. Find the measure of the smaller angle.',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Linear pair angles sum to 180°. x + 2x = 180° => 3x = 180° => x = 60°.',
      hint: 'Linear pair sum = 180°.',
      options: [
        { label: 'A', text: '60°', isCorrect: true, explanation: 'Correct: 180 / 3 = 60°.' },
        { label: 'B', text: '120°', isCorrect: false, explanation: 'Gave larger angle.' },
        { label: 'C', text: '30°', isCorrect: false, explanation: 'Divided 90 by 3.' },
        { label: 'D', text: '45°', isCorrect: false, explanation: 'Used 90° sum instead of 180°.' },
      ],
    },
    {
      questionCode: 'C7-MATH-LA-105',
      chapterName: 'Lines and Angles',
      topicName: 'Transversal Angle Calculation',
      questionText: 'Two parallel lines l and m are cut by a transversal t. If one interior angle on the same side of the transversal is 115°, what is the measure of the other interior angle on the same side?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 1,
      explanation: 'Consecutive interior angles on the same side of a transversal are supplementary (sum = 180°). Other angle = 180° - 115° = 65°.',
      hint: 'Interior angles on same side of transversal sum to 180°.',
      options: [
        { label: 'A', text: '65°', isCorrect: true, explanation: 'Correct: 180° - 115° = 65°.' },
        { label: 'B', text: '115°', isCorrect: false, explanation: 'Confused with alternate interior angles.' },
        { label: 'C', text: '75°', isCorrect: false, explanation: 'Subtracted 115 from 190°.' },
        { label: 'D', text: '25°', isCorrect: false, explanation: 'Subtracted 115 from 140°.' },
      ],
    },
    {
      questionCode: 'C7-MATH-LA-106',
      chapterName: 'Lines and Angles',
      topicName: 'Vertically Opposite Angles',
      questionText: 'Two lines AB and CD intersect at point O. If ∠AOC = 55°, find the measure of ∠BOD and ∠AOD.',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'GEOMETRIC_REASONING',
      marks: 2,
      explanation: '∠BOD is vertically opposite to ∠AOC => ∠BOD = 55°. ∠AOD forms a linear pair with ∠AOC => ∠AOD = 180° - 55° = 125°.',
      hint: 'Vertically opposite angles are equal. Linear pair angles sum to 180°.',
      options: [
        { label: 'A', text: '∠BOD = 55°, ∠AOD = 125°', isCorrect: true, explanation: 'Correct vertically opposite & linear pair properties.' },
        { label: 'B', text: '∠BOD = 125°, ∠AOD = 55°', isCorrect: false, explanation: 'Swapped the two angle values.' },
        { label: 'C', text: '∠BOD = 55°, ∠AOD = 55°', isCorrect: false, explanation: 'Assumed all 4 angles are equal.' },
        { label: 'D', text: '∠BOD = 35°, ∠AOD = 145°', isCorrect: false, explanation: 'Subtracted 55 from 90°.' },
      ],
    },
    {
      questionCode: 'C7-MATH-LA-107',
      chapterName: 'Lines and Angles',
      topicName: 'HOTS Angle Finding',
      questionText: 'In a figure, l ║ m and p ║ q. If one acute angle formed is 65°, what is the measure of the obtuse angle formed by the intersecting lines?',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL',
      marks: 2,
      explanation: 'Adjacent angles formed by intersecting parallel lines are supplementary. Obtuse angle = 180° - 65° = 115°.',
      hint: 'Acute and obtuse consecutive angles sum to 180°.',
      options: [
        { label: 'A', text: '115°', isCorrect: true, explanation: 'Correct: 180° - 65° = 115°.' },
        { label: 'B', text: '125°', isCorrect: false, explanation: 'Arithmetic mistake 180 - 65.' },
        { label: 'C', text: '65°', isCorrect: false, explanation: '65° is acute, question asks for obtuse angle.' },
        { label: 'D', text: '135°', isCorrect: false, explanation: 'Subtracted 65 from 200°.' },
      ],
    },
    {
      questionCode: 'C7-MATH-LA-108',
      chapterName: 'Lines and Angles',
      topicName: 'Assertion-Reason',
      questionText: 'Assertion (A): Two acute angles can form a linear pair.\nReason (R): The sum of two angles in a linear pair is always 180°.',
      type: 'ASSERTION_REASON',
      difficulty: 'MEDIUM',
      bloomLevel: 'EVALUATE',
      competency: 'REASONING',
      marks: 1,
      explanation: 'Assertion (A) is False: Two acute angles (<90°) have a sum < 180°, so they can NEVER form a linear pair. Reason (R) is True.',
      hint: 'An acute angle is strictly less than 90°. Can two numbers <90 add up to 180?',
      options: [
        { label: 'A', text: 'A is false but R is true', isCorrect: true, explanation: 'Correct: 2 acute angles sum to <180°, so cannot form linear pair.' },
        { label: 'B', text: 'Both A and R are true and R is correct explanation', isCorrect: false, explanation: 'A is false.' },
        { label: 'C', text: 'Both A and R are true but R is not correct explanation', isCorrect: false, explanation: 'A is false.' },
        { label: 'D', text: 'A is true but R is false', isCorrect: false, explanation: 'A is false.' },
      ],
    },

    // ==========================================
    // CHAPTER 6: TRIANGLE AND ITS PROPERTIES (8 Questions)
    // ==========================================
    {
      questionCode: 'C7-MATH-TRI-101',
      chapterName: 'The Triangle and Its Properties',
      topicName: 'Angle Sum Property',
      questionText: 'Two angles of a triangle are 55° and 65°. Find the measure of the third angle.',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Angle sum property of triangle = 180°. Third angle = 180° - (55° + 65°) = 180° - 120° = 60°.',
      hint: 'Sum of all interior angles of a triangle is always 180°.',
      options: [
        { label: 'A', text: '60°', isCorrect: true, explanation: 'Correct: 180 - 120 = 60°.' },
        { label: 'B', text: '70°', isCorrect: false, explanation: 'Subtracted 110 from 180.' },
        { label: 'C', text: '50°', isCorrect: false, explanation: 'Subtracted 130 from 180.' },
        { label: 'D', text: '65°', isCorrect: false, explanation: 'Assumed isosceles triangle.' },
      ],
    },
    {
      questionCode: 'C7-MATH-TRI-102',
      chapterName: 'The Triangle and Its Properties',
      topicName: 'Exterior Angle Property',
      questionText: 'An exterior angle of a triangle is 110°, and one of its interior opposite angles is 45°. Find the other interior opposite angle.',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'Exterior angle = Sum of interior opposite angles. 110° = 45° + x => x = 110° - 45° = 65°.',
      hint: 'Exterior angle = Sum of two interior opposite angles.',
      options: [
        { label: 'A', text: '65°', isCorrect: true, explanation: 'Correct: 110° - 45° = 65°.' },
        { label: 'B', text: '55°', isCorrect: false, explanation: 'Subtracted 45 from 100.' },
        { label: 'C', text: '70°', isCorrect: false, explanation: 'Subtracted 40 from 110.' },
        { label: 'D', text: '155°', isCorrect: false, explanation: 'Added 110 and 45.' },
      ],
    },
    {
      questionCode: 'C7-MATH-TRI-103',
      chapterName: 'The Triangle and Its Properties',
      topicName: 'Pythagoras Theorem',
      questionText: 'A ladder 15 m long reaches a window 12 m above the ground. Find the distance of the foot of the ladder from the wall.',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 2,
      explanation: 'By Pythagoras theorem: Hypotenuse^2 = Base^2 + Height^2 => 15^2 = Base^2 + 12^2 => 225 = Base^2 + 144 => Base^2 = 81 => Base = 9 m.',
      hint: 'Ladder forms hypotenuse (15 m), window height is perpendicular (12 m). Use a^2 + b^2 = c^2.',
      options: [
        { label: 'A', text: '9 m', isCorrect: true, explanation: 'Correct: sqrt(225 - 144) = sqrt(81) = 9 m.' },
        { label: 'B', text: '8 m', isCorrect: false, explanation: 'Square root error (sqrt(64)).' },
        { label: 'C', text: '10 m', isCorrect: false, explanation: 'Approximation error.' },
        { label: 'D', text: '27 m', isCorrect: false, explanation: 'Added 15 and 12.' },
      ],
    },
    {
      questionCode: 'C7-MATH-TRI-104',
      chapterName: 'The Triangle and Its Properties',
      topicName: 'Sum of Two Sides Property',
      questionText: 'Which of the following sets of side lengths can form a valid triangle?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'ANALYZE',
      competency: 'LOGICAL',
      marks: 1,
      explanation: 'Sum of any two sides must be strictly greater than the third side. For 6 cm, 8 cm, 10 cm: 6+8=14 > 10, 6+10=16 > 8, 8+10=18 > 6. Valid triangle!',
      hint: 'Sum of smallest two sides must be greater than the largest side.',
      options: [
        { label: 'A', text: '6 cm, 8 cm, 10 cm', isCorrect: true, explanation: '6 + 8 = 14 > 10 (Valid).' },
        { label: 'B', text: '2 cm, 3 cm, 6 cm', isCorrect: false, explanation: '2 + 3 = 5 < 6 (Invalid).' },
        { label: 'C', text: '3 cm, 4 cm, 7 cm', isCorrect: false, explanation: '3 + 4 = 7 (Equal, invalid).' },
        { label: 'D', text: '1 cm, 2 cm, 4 cm', isCorrect: false, explanation: '1 + 2 = 3 < 4 (Invalid).' },
      ],
    },
    {
      questionCode: 'C7-MATH-TRI-105',
      chapterName: 'The Triangle and Its Properties',
      topicName: 'Medians and Altitudes',
      questionText: 'How many medians can a triangle have in total?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'A triangle has 3 vertices, so it has exactly 3 medians connecting each vertex to the midpoint of the opposite side.',
      hint: 'One median connects each of the 3 vertices to the opposite side midpoint.',
      options: [
        { label: 'A', text: '3', isCorrect: true, explanation: 'Correct: Exactly 3 medians.' },
        { label: 'B', text: '1', isCorrect: false, explanation: 'Confused with 1 altitude from top.' },
        { label: 'C', text: '2', isCorrect: false, explanation: 'Incorrect vertex count.' },
        { label: 'D', text: '6', isCorrect: false, explanation: 'Doubled median count.' },
      ],
    },
    {
      questionCode: 'C7-MATH-TRI-106',
      chapterName: 'The Triangle and Its Properties',
      topicName: 'Right Angled Triangle',
      questionText: 'Find the length of the diagonal of a rectangle whose sides are 12 cm and 5 cm.',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 2,
      explanation: 'Diagonal forms hypotenuse of right triangle with sides 12 cm and 5 cm. Diagonal^2 = 12^2 + 5^2 = 144 + 25 = 169 => Diagonal = sqrt(169) = 13 cm.',
      hint: 'Use Pythagoras theorem: d^2 = l^2 + b^2.',
      options: [
        { label: 'A', text: '13 cm', isCorrect: true, explanation: 'Correct: sqrt(144 + 25) = 13 cm.' },
        { label: 'B', text: '17 cm', isCorrect: false, explanation: 'Added 12 and 5.' },
        { label: 'C', text: '15 cm', isCorrect: false, explanation: 'Calculation error.' },
        { label: 'D', text: '14 cm', isCorrect: false, explanation: 'Sqrt approximation error.' },
      ],
    },
    {
      questionCode: 'C7-MATH-TRI-107',
      chapterName: 'The Triangle and Its Properties',
      topicName: 'Equilateral and Isosceles Triangle',
      questionText: 'If one angle of a right-angled isosceles triangle is 90°, what are the measures of the other two angles?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'In an isosceles right triangle, the two acute angles are equal. (180° - 90°) / 2 = 90° / 2 = 45° each.',
      hint: 'Remaining 90° is divided equally between the two equal base angles.',
      options: [
        { label: 'A', text: '45° and 45°', isCorrect: true, explanation: 'Correct: (180 - 90)/2 = 45°.' },
        { label: 'B', text: '60° and 30°', isCorrect: false, explanation: 'Right triangle, but not isosceles.' },
        { label: 'C', text: '50° and 40°', isCorrect: false, explanation: 'Unequal angles.' },
        { label: 'D', text: '90° and 45°', isCorrect: false, explanation: 'Angle sum exceeds 180°.' },
      ],
    },
    {
      questionCode: 'C7-MATH-TRI-108',
      chapterName: 'The Triangle and Its Properties',
      topicName: 'HOTS Real World Distance',
      questionText: 'A tree is broken at a height of 5 m from the ground and its top touches the ground at a distance of 12 m from the base of the tree. What was the original height of the tree?',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 2,
      explanation: 'Broken part forms hypotenuse = sqrt(5^2 + 12^2) = sqrt(25 + 144) = sqrt(169) = 13 m. Total height of tree = Standing trunk + broken part = 5 m + 13 m = 18 m.',
      hint: 'Find broken part using Pythagoras theorem, then add standing height 5 m.',
      options: [
        { label: 'A', text: '18 m', isCorrect: true, explanation: 'Correct: 5 m + 13 m = 18 m.' },
        { label: 'B', text: '13 m', isCorrect: false, explanation: 'Calculated broken part only, forgot 5 m standing trunk.' },
        { label: 'C', text: '17 m', isCorrect: false, explanation: 'Added 12 and 5.' },
        { label: 'D', text: '25 m', isCorrect: false, explanation: 'Added 12^2 and 5^2 incorrectly.' },
      ],
    },

    // ==========================================
    // CHAPTER 7: COMPARING QUANTITIES (8 Questions)
    // ==========================================
    {
      questionCode: 'C7-MATH-COMP-101',
      chapterName: 'Comparing Quantities',
      topicName: 'Ratio and Percentage',
      questionText: 'Convert the ratio 3 : 4 into percentage.',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: '(3 / 4) × 100% = 75%.',
      hint: 'Multiply fraction 3/4 by 100.',
      options: [
        { label: 'A', text: '75%', isCorrect: true, explanation: 'Correct: (3/4) * 100 = 75%.' },
        { label: 'B', text: '60%', isCorrect: false, explanation: 'Used 3/5 ratio.' },
        { label: 'C', text: '80%', isCorrect: false, explanation: 'Used 4/5 ratio.' },
        { label: 'D', text: '34%', isCorrect: false, explanation: 'Direct digits write up.' },
      ],
    },
    {
      questionCode: 'C7-MATH-COMP-102',
      chapterName: 'Comparing Quantities',
      topicName: 'Percentage Increase',
      questionText: 'The population of a city increased from 25,000 to 26,500. Find the percentage increase in population.',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 1,
      explanation: 'Increase = 26,500 - 25,000 = 1,500. % Increase = (1,500 / 25,000) × 100% = 6%.',
      hint: 'Percentage Increase = (Increase / Original Population) * 100.',
      options: [
        { label: 'A', text: '6%', isCorrect: true, explanation: 'Correct: (1500 / 25000) * 100 = 6%.' },
        { label: 'B', text: '5%', isCorrect: false, explanation: 'Divided 1500 by 30000.' },
        { label: 'C', text: '10%', isCorrect: false, explanation: 'Estimated 2500 increase.' },
        { label: 'D', text: '7.5%', isCorrect: false, explanation: 'Division error.' },
      ],
    },
    {
      questionCode: 'C7-MATH-COMP-103',
      chapterName: 'Comparing Quantities',
      topicName: 'Profit and Loss',
      questionText: 'A toy is bought for ₹500 and sold for ₹625. What is the profit percentage?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Profit = SP - CP = ₹625 - ₹500 = ₹125. Profit % = (125 / 500) × 100 = 25%.',
      hint: 'Profit % = (Profit / CP) * 100.',
      options: [
        { label: 'A', text: '25%', isCorrect: true, explanation: 'Correct: (125 / 500) * 100 = 25%.' },
        { label: 'B', text: '20%', isCorrect: false, explanation: 'Divided by SP (625) instead of CP (500).' },
        { label: 'C', text: '15%', isCorrect: false, explanation: 'Arithmetic mistake.' },
        { label: 'D', text: '30%', isCorrect: false, explanation: 'Calculation error.' },
      ],
    },
    {
      questionCode: 'C7-MATH-COMP-104',
      chapterName: 'Comparing Quantities',
      topicName: 'Simple Interest',
      questionText: 'Find the Simple Interest on ₹8,000 at 5% per annum for 3 years.',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'SI = (P × R × T) / 100 = (8000 × 5 × 3) / 100 = 80 × 15 = ₹1,200.',
      hint: 'SI formula = (P * R * T) / 100.',
      options: [
        { label: 'A', text: '₹1,200', isCorrect: true, explanation: 'Correct SI calculation.' },
        { label: 'B', text: '₹9,200', isCorrect: false, explanation: 'Gave Total Amount (P + SI) instead of Interest.' },
        { label: 'C', text: '₹1,500', isCorrect: false, explanation: 'Multiplied 8000 by 5% for 4 years.' },
        { label: 'D', text: '₹800', isCorrect: false, explanation: 'Calculated for 2 years.' },
      ],
    },
    {
      questionCode: 'C7-MATH-COMP-105',
      chapterName: 'Comparing Quantities',
      topicName: 'Finding Principal Amount',
      questionText: 'What sum of money (Principal) will yield ₹450 as Simple Interest in 2 years at 9% per annum?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 2,
      explanation: 'P = (SI × 100) / (R × T) = (450 × 100) / (9 × 2) = 45000 / 18 = ₹2,500.',
      hint: 'Use formula P = (SI * 100) / (R * T).',
      options: [
        { label: 'A', text: '₹2,500', isCorrect: true, explanation: 'Correct: (450 * 100) / 18 = ₹2,500.' },
        { label: 'B', text: '₹2,000', isCorrect: false, explanation: 'Divided by 22.5.' },
        { label: 'C', text: '₹3,000', isCorrect: false, explanation: 'Divided 45000 by 15.' },
        { label: 'D', text: '₹1,800', isCorrect: false, explanation: 'Multiplied 450 by 4.' },
      ],
    },
    {
      questionCode: 'C7-MATH-COMP-106',
      chapterName: 'Comparing Quantities',
      topicName: 'Loss Percentage',
      questionText: 'An item was bought for ₹400 and sold at a loss of 15%. What was the selling price (SP)?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 2,
      explanation: 'Loss amount = 15% of 400 = (15 / 100) × 400 = ₹60. Selling price = CP - Loss = 400 - 60 = ₹340.',
      hint: 'SP = CP - Loss amount.',
      options: [
        { label: 'A', text: '₹340', isCorrect: true, explanation: 'Correct: 400 - 60 = ₹340.' },
        { label: 'B', text: '₹460', isCorrect: false, explanation: 'Added loss instead of subtracting (Profit case).' },
        { label: 'C', text: '₹350', isCorrect: false, explanation: 'Subtracted ₹50 loss.' },
        { label: 'D', text: '₹385', isCorrect: false, explanation: 'Subtracted 15 directly from 400.' },
      ],
    },
    {
      questionCode: 'C7-MATH-COMP-107',
      chapterName: 'Comparing Quantities',
      topicName: 'Assertion-Reason on Interest',
      questionText: 'Assertion (A): Simple interest on ₹1000 for 1 year at 10% per annum is ₹100.\nReason (R): Simple Interest increases directly in proportion to the time period.',
      type: 'ASSERTION_REASON',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'REASONING',
      marks: 1,
      explanation: 'SI = (1000 * 10 * 1)/100 = 100 (Assertion true). SI is proportional to T (Reason true and relevant).',
      hint: 'Verify SI calculation and check if SI is proportional to time T.',
      options: [
        { label: 'A', text: 'Both A and R are true and R is the correct explanation of A', isCorrect: true, explanation: 'Both statements are true and related.' },
        { label: 'B', text: 'Both A and R are true but R is NOT the correct explanation', isCorrect: false, explanation: 'R explains A.' },
        { label: 'C', text: 'A is true but R is false', isCorrect: false, explanation: 'R is true.' },
        { label: 'D', text: 'A is false but R is true', isCorrect: false, explanation: 'A is true.' },
      ],
    },
    {
      questionCode: 'C7-MATH-COMP-108',
      chapterName: 'Comparing Quantities',
      topicName: 'HOTS Real World Shopping',
      questionText: 'A shopkeeper offers 20% discount on a jacket marked at ₹2,500. If GST of 10% is charged on the discounted price, what is the final amount payable by the customer?',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'APPLY',
      competency: 'APPLICATION',
      marks: 2,
      explanation: 'Discount = 20% of 2500 = ₹500. Discounted price = 2500 - 500 = ₹2,000. GST = 10% of 2000 = ₹200. Final Payable = 2000 + 200 = ₹2,200.',
      hint: 'Calculate discounted price first, then add 10% GST on the discounted price.',
      options: [
        { label: 'A', text: '₹2,200', isCorrect: true, explanation: 'Correct: 2000 + 200 = ₹2,200.' },
        { label: 'B', text: '₹2,250', isCorrect: false, explanation: 'Calculated 10% GST on original ₹2500 price.' },
        { label: 'C', text: '₹2,000', isCorrect: false, explanation: 'Forgot to add GST.' },
        { label: 'D', text: '₹2,400', isCorrect: false, explanation: 'Applied net 10% discount.' },
      ],
    },

    // ==========================================
    // CHAPTER 8: RATIONAL NUMBERS (8 Questions)
    // ==========================================
    {
      questionCode: 'C7-MATH-RAT-101',
      chapterName: 'Rational Numbers',
      topicName: 'Standard Form of Rational Numbers',
      questionText: 'Express (-36 / 48) in standard form.',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'HCF of 36 and 48 is 12. Divide numerator and denominator by 12: (-36 ÷ 12) / (48 ÷ 12) = -3/4.',
      hint: 'Divide numerator and denominator by their Highest Common Factor (12).',
      options: [
        { label: 'A', text: '-3/4', isCorrect: true, explanation: 'Correct standard form.' },
        { label: 'B', text: '-9/12', isCorrect: false, explanation: 'Not in lowest terms (can be reduced further by 3).' },
        { label: 'C', text: '3/4', isCorrect: false, explanation: 'Omitted negative sign.' },
        { label: 'D', text: '-6/8', isCorrect: false, explanation: 'Not fully simplified.' },
      ],
    },
    {
      questionCode: 'C7-MATH-RAT-102',
      chapterName: 'Rational Numbers',
      topicName: 'Addition of Rational Numbers',
      questionText: 'Find the sum: (-5/9) + (7/9)',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Same denominator: (-5 + 7) / 9 = 2/9.',
      hint: 'Keep denominator 9 and add numerators -5 and 7.',
      options: [
        { label: 'A', text: '2/9', isCorrect: true, explanation: 'Correct: (-5 + 7) / 9 = 2/9.' },
        { label: 'B', text: '-12/9', isCorrect: false, explanation: 'Added -5 and -7.' },
        { label: 'C', text: '-2/9', isCorrect: false, explanation: 'Sign error.' },
        { label: 'D', text: '12/18', isCorrect: false, explanation: 'Added denominators.' },
      ],
    },
    {
      questionCode: 'C7-MATH-RAT-103',
      chapterName: 'Rational Numbers',
      topicName: 'Multiplication of Rational Numbers',
      questionText: 'Evaluate: (-3/5) × (-10/9)',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Negative × Negative = Positive. [(-3) × (-10)] / (5 × 9) = 30 / 45 = 2/3.',
      hint: 'Product of two negative rational numbers is positive. Simplify common factors.',
      options: [
        { label: 'A', text: '2/3', isCorrect: true, explanation: 'Correct: 30 / 45 = 2/3.' },
        { label: 'B', text: '-2/3', isCorrect: false, explanation: 'Forgot product of two negatives is positive.' },
        { label: 'C', text: '5/6', isCorrect: false, explanation: 'Incorrect simplification.' },
        { label: 'D', text: '3/5', isCorrect: false, explanation: 'Cancellation mistake.' },
      ],
    },
    {
      questionCode: 'C7-MATH-RAT-104',
      chapterName: 'Rational Numbers',
      topicName: 'Rational Numbers Between Two Numbers',
      questionText: 'Which of the following rational numbers lies strictly between -1/2 and 1/2?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: '-1/2 = -0.5 and 1/2 = 0.5. 0 lies between -0.5 and 0.5.',
      hint: 'Convert to decimals: -0.5 and +0.5.',
      options: [
        { label: 'A', text: '0', isCorrect: true, explanation: 'Correct: 0 is exactly in the middle of -0.5 and 0.5.' },
        { label: 'B', text: '-3/4', isCorrect: false, explanation: '-0.75 is less than -0.5.' },
        { label: 'C', text: '3/4', isCorrect: false, explanation: '0.75 is greater than 0.5.' },
        { label: 'D', text: '-1', isCorrect: false, explanation: '-1 is less than -0.5.' },
      ],
    },
    {
      questionCode: 'C7-MATH-RAT-105',
      chapterName: 'Rational Numbers',
      topicName: 'Division of Rational Numbers',
      questionText: 'Divide: (-4/5) ÷ (-8/15)',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: '(-4/5) × (-15/8) = ((-4) × (-15)) / (5 × 8) = 60 / 40 = 3/2.',
      hint: 'Multiply by the reciprocal of (-8/15) which is (-15/8).',
      options: [
        { label: 'A', text: '3/2', isCorrect: true, explanation: 'Correct: (4*15)/(5*8) = 60/40 = 3/2.' },
        { label: 'B', text: '-3/2', isCorrect: false, explanation: 'Sign error.' },
        { label: 'C', text: '2/3', isCorrect: false, explanation: 'Inverted answer.' },
        { label: 'D', text: '32/75', isCorrect: false, explanation: 'Multiplied without taking reciprocal.' },
      ],
    },
    {
      questionCode: 'C7-MATH-RAT-106',
      chapterName: 'Rational Numbers',
      topicName: 'Properties of Rational Numbers',
      questionText: 'Which rational number is its own reciprocal?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'The reciprocal of 1 is 1/1 = 1, and reciprocal of -1 is 1/(-1) = -1.',
      hint: 'Check 1 / x for values 0, 1, 2.',
      options: [
        { label: 'A', text: '1 and -1', isCorrect: true, explanation: 'Correct: Both 1 and -1 equal their reciprocals.' },
        { label: 'B', text: '0', isCorrect: false, explanation: 'Reciprocal of 0 is undefined (1/0).' },
        { label: 'C', text: '2', isCorrect: false, explanation: 'Reciprocal of 2 is 1/2.' },
        { label: 'D', text: 'Any positive rational number', isCorrect: false, explanation: 'Only true for 1.' },
      ],
    },
    {
      questionCode: 'C7-MATH-RAT-107',
      chapterName: 'Rational Numbers',
      topicName: 'HOTS Problem',
      questionText: 'The product of two rational numbers is -14/27. If one of the numbers is 7/9, find the other number.',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 2,
      explanation: 'Other number = (-14/27) ÷ (7/9) = (-14/27) × (9/7) = (-14 × 9) / (27 × 7) = (-2 × 1) / (3 × 1) = -2/3.',
      hint: 'Divide the total product -14/27 by the given number 7/9.',
      options: [
        { label: 'A', text: '-2/3', isCorrect: true, explanation: 'Correct: (-14/27) * (9/7) = -2/3.' },
        { label: 'B', text: '2/3', isCorrect: false, explanation: 'Sign error.' },
        { label: 'C', text: '-98/243', isCorrect: false, explanation: 'Multiplied instead of dividing.' },
        { label: 'D', text: '-3/2', isCorrect: false, explanation: 'Inverted the answer.' },
      ],
    },
    {
      questionCode: 'C7-MATH-RAT-108',
      chapterName: 'Rational Numbers',
      topicName: 'Comparison',
      questionText: 'Which of the following rational numbers is the GREATEST?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL',
      marks: 1,
      explanation: 'Positive rational numbers are always greater than zero and negative numbers. Compare 3/4 (0.75) and 2/3 (0.67). 3/4 = 0.75 is the greatest.',
      hint: 'Convert to decimals or use common denominator 12.',
      options: [
        { label: 'A', text: '3/4', isCorrect: true, explanation: 'Correct: 3/4 = 0.75 (Greatest).' },
        { label: 'B', text: '2/3', isCorrect: false, explanation: '2/3 = 0.666...' },
        { label: 'C', text: '-5/6', isCorrect: false, explanation: 'Negative number.' },
        { label: 'D', text: '0', isCorrect: false, explanation: 'Less than positive numbers.' },
      ],
    },

    // ==========================================
    // CHAPTER 9: PERIMETER AND AREA (8 Questions)
    // ==========================================
    {
      questionCode: 'C7-MATH-PA-101',
      chapterName: 'Perimeter and Area',
      topicName: 'Area of Parallelogram',
      questionText: 'Find the area of a parallelogram whose base is 8 cm and height is 4.5 cm.',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Area of parallelogram = base × height = 8 × 4.5 = 36 cm².',
      hint: 'Area = base * height.',
      options: [
        { label: 'A', text: '36 cm²', isCorrect: true, explanation: 'Correct: 8 * 4.5 = 36 cm².' },
        { label: 'B', text: '18 cm²', isCorrect: false, explanation: 'Divided by 2 (Confused with triangle area).' },
        { label: 'C', text: '25 cm²', isCorrect: false, explanation: 'Calculation error.' },
        { label: 'D', text: '72 cm²', isCorrect: false, explanation: 'Multiplied by 2.' },
      ],
    },
    {
      questionCode: 'C7-MATH-PA-102',
      chapterName: 'Perimeter and Area',
      topicName: 'Area of Triangle',
      questionText: 'Find the area of a right-angled triangle with base 12 cm and height 5 cm.',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Area of triangle = 1/2 × base × height = 1/2 × 12 × 5 = 30 cm².',
      hint: 'Area of triangle = 1/2 * b * h.',
      options: [
        { label: 'A', text: '30 cm²', isCorrect: true, explanation: 'Correct: 1/2 * 12 * 5 = 30 cm².' },
        { label: 'B', text: '60 cm²', isCorrect: false, explanation: 'Forgot to divide by 2.' },
        { label: 'C', text: '17 cm²', isCorrect: false, explanation: 'Added 12 and 5.' },
        { label: 'D', text: '34 cm²', isCorrect: false, explanation: 'Multiplied sum by 2.' },
      ],
    },
    {
      questionCode: 'C7-MATH-PA-103',
      chapterName: 'Perimeter and Area',
      topicName: 'Circumference of Circle',
      questionText: 'Find the circumference of a circle of radius 14 cm. (Take π = 22/7)',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Circumference = 2πr = 2 × (22/7) × 14 = 2 × 22 × 2 = 88 cm.',
      hint: 'Circumference = 2 * pi * r.',
      options: [
        { label: 'A', text: '88 cm', isCorrect: true, explanation: 'Correct: 2 * (22/7) * 14 = 88 cm.' },
        { label: 'B', text: '616 cm²', isCorrect: false, explanation: 'Calculated area (πr²) instead of circumference.' },
        { label: 'C', text: '44 cm', isCorrect: false, explanation: 'Used πr instead of 2πr.' },
        { label: 'D', text: '176 cm', isCorrect: false, explanation: 'Used diameter 28 incorrectly.' },
      ],
    },
    {
      questionCode: 'C7-MATH-PA-104',
      chapterName: 'Perimeter and Area',
      topicName: 'Area of Circle',
      questionText: 'Find the area of a circular garden whose diameter is 28 m. (Take π = 22/7)',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 2,
      explanation: 'Radius r = 28 / 2 = 14 m. Area = πr² = (22/7) × 14 × 14 = 22 × 2 × 14 = 616 m².',
      hint: 'First find radius r = diameter / 2 = 14 m, then use Area = pi * r^2.',
      options: [
        { label: 'A', text: '616 m²', isCorrect: true, explanation: 'Correct: (22/7) * 14 * 14 = 616 m².' },
        { label: 'B', text: '2464 m²', isCorrect: false, explanation: 'Used diameter 28 as radius in πr².' },
        { label: 'C', text: '88 m²', isCorrect: false, explanation: 'Calculated circumference instead of area.' },
        { label: 'D', text: '308 m²', isCorrect: false, explanation: 'Divided area by 2.' },
      ],
    },
    {
      questionCode: 'C7-MATH-PA-105',
      chapterName: 'Perimeter and Area',
      topicName: 'Area of Paths',
      questionText: 'A path 2 m wide is built along the outside of a square park of side 30 m. What is the area of the path?',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 2,
      explanation: 'Inner square side = 30 m. Inner area = 30 × 30 = 900 m². Outer square side = 30 + 2 + 2 = 34 m. Outer area = 34 × 34 = 1156 m². Path area = 1156 - 900 = 256 m².',
      hint: 'Outer side = 30 + 2 + 2 = 34 m. Area of path = Outer Area - Inner Area.',
      options: [
        { label: 'A', text: '256 m²', isCorrect: true, explanation: 'Correct: 1156 - 900 = 256 m².' },
        { label: 'B', text: '240 m²', isCorrect: false, explanation: 'Added 2 m only once to side (32 m).' },
        { label: 'C', text: '120 m²', isCorrect: false, explanation: 'Calculated perimeter × width.' },
        { label: 'D', text: '289 m²', isCorrect: false, explanation: 'Calculation mistake.' },
      ],
    },
    {
      questionCode: 'C7-MATH-PA-106',
      chapterName: 'Perimeter and Area',
      topicName: 'Unit Conversion',
      questionText: 'Convert 5 hectares into square metres (m²).',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: '1 hectare = 10,000 m². 5 hectares = 5 × 10,000 = 50,000 m².',
      hint: '1 hectare = 10,000 m².',
      options: [
        { label: 'A', text: '50,000 m²', isCorrect: true, explanation: 'Correct: 5 * 10,000 = 50,000 m².' },
        { label: 'B', text: '5,000 m²', isCorrect: false, explanation: 'Used 1 hectare = 1,000 m².' },
        { label: 'C', text: '500 m²', isCorrect: false, explanation: 'Used 1 hectare = 100 m².' },
        { label: 'D', text: '500,000 m²', isCorrect: false, explanation: 'Added extra zero.' },
      ],
    },
    {
      questionCode: 'C7-MATH-PA-107',
      chapterName: 'Perimeter and Area',
      topicName: 'Real Life Costing Problem',
      questionText: 'A wire is in the shape of a rectangle of length 40 cm and breadth 22 cm. If the same wire is rebent into the shape of a square, what will be the measure of each side of the square?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 2,
      explanation: 'Perimeter of rectangle = 2 × (l + b) = 2 × (40 + 22) = 2 × 62 = 124 cm. Since length of wire remains same, Perimeter of square = 124 cm. Side of square = 124 / 4 = 31 cm.',
      hint: 'Wire length = Perimeter of rectangle = 2(l + b). Side of square = Perimeter / 4.',
      options: [
        { label: 'A', text: '31 cm', isCorrect: true, explanation: 'Correct: 124 / 4 = 31 cm.' },
        { label: 'B', text: '62 cm', isCorrect: false, explanation: 'Forgot to divide by 4.' },
        { label: 'C', text: '28 cm', isCorrect: false, explanation: 'Divided 112 by 4.' },
        { label: 'D', text: '33 cm', isCorrect: false, explanation: 'Arithmetic error.' },
      ],
    },
    {
      questionCode: 'C7-MATH-PA-108',
      chapterName: 'Perimeter and Area',
      topicName: 'HOTS Circle vs Square',
      questionText: 'A wire is bent into a circle of radius 7 cm. If it is rebent into a square, which shape encloses MORE area?',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'EVALUATE',
      competency: 'CRITICAL',
      marks: 2,
      explanation: 'Wire length = Circumference of circle = 2 × (22/7) × 7 = 44 cm. Area of circle = (22/7) × 7 × 7 = 154 cm². Side of square = 44 / 4 = 11 cm. Area of square = 11 × 11 = 121 cm². Since 154 > 121, the Circle encloses more area!',
      hint: 'Calculate area of circle (154 cm²) and area of square (121 cm²) and compare.',
      options: [
        { label: 'A', text: 'Circle (154 cm² vs 121 cm²)', isCorrect: true, explanation: 'Correct: Circle area 154 cm² > Square area 121 cm².' },
        { label: 'B', text: 'Square (121 cm² vs 154 cm²)', isCorrect: false, explanation: 'Incorrect comparison.' },
        { label: 'C', text: 'Both enclose equal area', isCorrect: false, explanation: 'Perimeters are equal, but areas differ.' },
        { label: 'D', text: 'Cannot be determined', isCorrect: false, explanation: 'Calculable exactly.' },
      ],
    },

    // ==========================================
    // CHAPTER 10: ALGEBRAIC EXPRESSIONS (8 Questions)
    // ==========================================
    {
      questionCode: 'C7-MATH-ALG-101',
      chapterName: 'Algebraic Expressions',
      topicName: 'Terms and Coefficients',
      questionText: 'What is the numerical coefficient of y in the expression 7x - 5y + 12?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'The term containing y is -5y. Its numerical coefficient is -5.',
      hint: 'Include the negative sign in the coefficient.',
      options: [
        { label: 'A', text: '-5', isCorrect: true, explanation: 'Correct coefficient including sign.' },
        { label: 'B', text: '5', isCorrect: false, explanation: 'Forgot negative sign.' },
        { label: 'C', text: '7', isCorrect: false, explanation: 'Gave coefficient of x.' },
        { label: 'D', text: '12', isCorrect: false, explanation: 'Gave constant term.' },
      ],
    },
    {
      questionCode: 'C7-MATH-ALG-102',
      chapterName: 'Algebraic Expressions',
      topicName: 'Addition of Expressions',
      questionText: 'Add the algebraic expressions: (3x + 5y - 7) and (2x - 3y + 4).',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: '(3x + 2x) + (5y - 3y) + (-7 + 4) = 5x + 2y - 3.',
      hint: 'Group like terms: x terms together, y terms together, constants together.',
      options: [
        { label: 'A', text: '5x + 2y - 3', isCorrect: true, explanation: 'Correct addition of like terms.' },
        { label: 'B', text: '5x + 8y - 11', isCorrect: false, explanation: 'Added coefficients without respecting negative signs.' },
        { label: 'C', text: '5x - 2y + 3', isCorrect: false, explanation: 'Sign error.' },
        { label: 'D', text: '6x + 2y - 3', isCorrect: false, explanation: 'Multiplied 3 and 2 instead of adding.' },
      ],
    },
    {
      questionCode: 'C7-MATH-ALG-103',
      chapterName: 'Algebraic Expressions',
      topicName: 'Subtraction of Expressions',
      questionText: 'Subtract (a - b) from (a + b).',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: '(a + b) - (a - b) = a + b - a + b = 2b.',
      hint: 'Subtracting (a - b) changes signs to -a + b.',
      options: [
        { label: 'A', text: '2b', isCorrect: true, explanation: 'Correct: (a + b) - a + b = 2b.' },
        { label: 'B', text: '2a', isCorrect: false, explanation: 'Subtracted in reverse order.' },
        { label: 'C', text: '0', isCorrect: false, explanation: 'Forgot sign flip on -b.' },
        { label: 'D', text: '2a + 2b', isCorrect: false, explanation: 'Added both expressions.' },
      ],
    },
    {
      questionCode: 'C7-MATH-ALG-104',
      chapterName: 'Algebraic Expressions',
      topicName: 'Evaluating Expressions',
      questionText: 'Find the value of 2a² - 3ab + b² when a = 3 and b = 2.',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 2,
      explanation: '2(3)² - 3(3)(2) + (2)² = 2(9) - 18 + 4 = 18 - 18 + 4 = 4.',
      hint: 'Substitute a = 3 and b = 2 into the expression.',
      options: [
        { label: 'A', text: '4', isCorrect: true, explanation: 'Correct: 18 - 18 + 4 = 4.' },
        { label: 'B', text: '16', isCorrect: false, explanation: 'Added 18 and 18.' },
        { label: 'C', text: '8', isCorrect: false, explanation: 'Calculation error.' },
        { label: 'D', text: '0', isCorrect: false, explanation: 'Forgot + b² at end.' },
      ],
    },
    {
      questionCode: 'C7-MATH-ALG-105',
      chapterName: 'Algebraic Expressions',
      topicName: 'Like and Unlike Terms',
      questionText: 'Which of the following pairs contains LIKE terms?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: '-7xy and 5yx have identical variable factors (x and y). They are like terms.',
      hint: 'Like terms must have the exact same algebraic variables and exponents.',
      options: [
        { label: 'A', text: '-7xy and 5yx', isCorrect: true, explanation: 'Correct: Variable order does not matter (xy = yx).' },
        { label: 'B', text: '7x and 7y', isCorrect: false, explanation: 'Different variables x and y.' },
        { label: 'C', text: '4x²y and 4xy²', isCorrect: false, explanation: 'Exponents of variables differ.' },
        { label: 'D', text: '3a and 3', isCorrect: false, explanation: 'One is variable term, one is constant.' },
      ],
    },
    {
      questionCode: 'C7-MATH-ALG-106',
      chapterName: 'Algebraic Expressions',
      topicName: 'Forming Expressions',
      questionText: 'Rohan has x marbles. Aarav has 5 more than twice the number of marbles Rohan has. Write an expression for the total number of marbles both of them have together.',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 2,
      explanation: 'Rohan = x. Aarav = 2x + 5. Total together = x + (2x + 5) = 3x + 5.',
      hint: 'Find Aarav’s marbles first (2x + 5), then add Rohan’s marbles x.',
      options: [
        { label: 'A', text: '3x + 5', isCorrect: true, explanation: 'Correct: x + (2x + 5) = 3x + 5.' },
        { label: 'B', text: '2x + 5', isCorrect: false, explanation: 'Calculated Aarav’s marbles only.' },
        { label: 'C', text: '3x + 10', isCorrect: false, explanation: 'Added 5 twice.' },
        { label: 'D', text: 'x + 5', isCorrect: false, explanation: 'Omitted factor 2.' },
      ],
    },
    {
      questionCode: 'C7-MATH-ALG-107',
      chapterName: 'Algebraic Expressions',
      topicName: 'HOTS Expression Simplification',
      questionText: 'What should be added to (x² + xy + y²) to obtain (2x² + 3xy)?',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL',
      marks: 2,
      explanation: 'Required expression = (2x² + 3xy) - (x² + xy + y²) = 2x² + 3xy - x² - xy - y² = x² + 2xy - y².',
      hint: 'Subtract (x² + xy + y²) from (2x² + 3xy).',
      options: [
        { label: 'A', text: 'x² + 2xy - y²', isCorrect: true, explanation: 'Correct subtraction of polynomials.' },
        { label: 'B', text: '3x² + 4xy + y²', isCorrect: false, explanation: 'Added expressions instead of subtracting.' },
        { label: 'C', text: 'x² + 2xy + y²', isCorrect: false, explanation: 'Forgot sign flip on y².' },
        { label: 'D', text: 'x² + xy - y²', isCorrect: false, explanation: 'Subtracted 2xy instead of adding 2xy.' },
      ],
    },
    {
      questionCode: 'C7-MATH-ALG-108',
      chapterName: 'Algebraic Expressions',
      topicName: 'Pattern Rules',
      questionText: 'If the nth term of a number sequence is given by the formula 4n + 3, what is the 15th term of the sequence?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Substitute n = 15: 4(15) + 3 = 60 + 3 = 63.',
      hint: 'Substitute n = 15 into 4n + 3.',
      options: [
        { label: 'A', text: '63', isCorrect: true, explanation: 'Correct: 4(15) + 3 = 63.' },
        { label: 'B', text: '60', isCorrect: false, explanation: 'Forgot to add 3.' },
        { label: 'C', text: '75', isCorrect: false, explanation: 'Multiplied 5 by 15.' },
        { label: 'D', text: '48', isCorrect: false, explanation: 'Multiplied 4 by 12.' },
      ],
    },

    // ==========================================
    // CHAPTER 11: EXPONENTS AND POWERS (8 Questions)
    // ==========================================
    {
      questionCode: 'C7-MATH-EXP-101',
      chapterName: 'Exponents and Powers',
      topicName: 'Laws of Exponents',
      questionText: 'Simplify and express in exponential form: 2⁵ × 2⁸',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Using law a^m × a^n = a^(m+n): 2⁵ × 2⁸ = 2^(5+8) = 2¹³.',
      hint: 'When bases are same, add the exponents: a^m * a^n = a^(m+n).',
      options: [
        { label: 'A', text: '2¹³', isCorrect: true, explanation: 'Correct: 2^(5+8) = 2^13.' },
        { label: 'B', text: '2⁴⁰', isCorrect: false, explanation: 'Multiplied exponents instead of adding.' },
        { label: 'C', text: '4¹³', isCorrect: false, explanation: 'Multiplied bases.' },
        { label: 'D', text: '4⁴⁰', isCorrect: false, explanation: 'Multiplied bases and exponents.' },
      ],
    },
    {
      questionCode: 'C7-MATH-EXP-102',
      chapterName: 'Exponents and Powers',
      topicName: 'Division Law of Exponents',
      questionText: 'Simplify: (7¹⁵ ÷ 7¹⁰) × 7³',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: '(7¹⁵ ÷ 7¹⁰) = 7^(15-10) = 7⁵. Then 7⁵ × 7³ = 7^(5+3) = 7⁸.',
      hint: 'Use a^m / a^n = a^(m-n) first, then a^m * a^n = a^(m+n).',
      options: [
        { label: 'A', text: '7⁸', isCorrect: true, explanation: 'Correct: 7^(15-10+3) = 7^8.' },
        { label: 'B', text: '7²', isCorrect: false, explanation: 'Subtracted 3 instead of adding.' },
        { label: 'C', text: '7¹⁸', isCorrect: false, explanation: 'Added all exponents.' },
        { label: 'D', text: '7⁴⁵', isCorrect: false, explanation: 'Multiplied exponents.' },
      ],
    },
    {
      questionCode: 'C7-MATH-EXP-103',
      chapterName: 'Exponents and Powers',
      topicName: 'Power of a Power Law',
      questionText: 'Evaluate: [(3²)³]²',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: '(a^m)^n = a^(m*n). [(3²)³]² = 3^(2 × 3 × 2) = 3¹².',
      hint: 'Multiply all exponents together.',
      options: [
        { label: 'A', text: '3¹²', isCorrect: true, explanation: 'Correct: 3^(2*3*2) = 3^12.' },
        { label: 'B', text: '3⁷', isCorrect: false, explanation: 'Added exponents 2 + 3 + 2.' },
        { label: 'C', text: '3⁸', isCorrect: false, explanation: 'Calculation error.' },
        { label: 'D', text: '9⁶', isCorrect: false, explanation: 'Mixed base and exponents.' },
      ],
    },
    {
      questionCode: 'C7-MATH-EXP-104',
      chapterName: 'Exponents and Powers',
      topicName: 'Zero Exponent Law',
      questionText: 'Evaluate: (2⁰ + 3⁰ + 4⁰) × 5⁰',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'Any non-zero number to power 0 equals 1. (1 + 1 + 1) × 1 = 3 × 1 = 3.',
      hint: 'a^0 = 1 for any non-zero number a.',
      options: [
        { label: 'A', text: '3', isCorrect: true, explanation: 'Correct: (1 + 1 + 1) * 1 = 3.' },
        { label: 'B', text: '0', isCorrect: false, explanation: 'Assumed a^0 = 0.' },
        { label: 'C', text: '1', isCorrect: false, explanation: 'Thought total sum equals 1.' },
        { label: 'D', text: '9', isCorrect: false, explanation: 'Added bases.' },
      ],
    },
    {
      questionCode: 'C7-MATH-EXP-105',
      chapterName: 'Exponents and Powers',
      topicName: 'Expressing Large Numbers in Standard Form',
      questionText: 'The distance between the Earth and the Sun is approximately 149,600,000,000 metres. Express this distance in scientific standard form.',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'Shift decimal point 11 places to the left: 1.496 × 10¹¹ m.',
      hint: 'Standard form is K × 10^n where 1 ≤ K < 10.',
      options: [
        { label: 'A', text: '1.496 × 10¹¹ m', isCorrect: true, explanation: 'Correct standard scientific notation.' },
        { label: 'B', text: '14.96 × 10¹⁰ m', isCorrect: false, explanation: '14.96 is not between 1 and 10.' },
        { label: 'C', text: '1.496 × 10⁹ m', isCorrect: false, explanation: 'Counted 9 places.' },
        { label: 'D', text: '0.1496 × 10¹² m', isCorrect: false, explanation: '0.1496 is less than 1.' },
      ],
    },
    {
      questionCode: 'C7-MATH-EXP-106',
      chapterName: 'Exponents and Powers',
      topicName: 'Simplification using Exponent Laws',
      questionText: 'Simplify: (2³ × 3⁴ × 4) / (3 × 32)',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 2,
      explanation: '4 = 2², 32 = 2⁵. Expression = (2³ × 3⁴ × 2²) / (3¹ × 2⁵) = (2⁵ × 3⁴) / (2⁵ × 3¹) = 2^(5-5) × 3^(4-1) = 2⁰ × 3³ = 1 × 27 = 27.',
      hint: 'Convert numbers 4 and 32 to powers of 2 (2^2 and 2^5) first.',
      options: [
        { label: 'A', text: '27', isCorrect: true, explanation: 'Correct: 3^3 = 27.' },
        { label: 'B', text: '9', isCorrect: false, explanation: 'Calculated 3^2.' },
        { label: 'C', text: '54', isCorrect: false, explanation: 'Multiplied by 2.' },
        { label: 'D', text: '81', isCorrect: false, explanation: 'Calculated 3^4.' },
      ],
    },
    {
      questionCode: 'C7-MATH-EXP-107',
      chapterName: 'Exponents and Powers',
      topicName: 'Comparing Exponential Expressions',
      questionText: 'Which is greater: 2⁸ or 8²?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'ANALYZE',
      competency: 'LOGICAL',
      marks: 1,
      explanation: '2⁸ = 256. 8² = 64. Since 256 > 64, 2⁸ is greater.',
      hint: 'Calculate values: 2^8 = 256 and 8^2 = 64.',
      options: [
        { label: 'A', text: '2⁸ is greater (256 > 64)', isCorrect: true, explanation: 'Correct: 256 is larger than 64.' },
        { label: 'B', text: '8² is greater', isCorrect: false, explanation: 'Misconception: larger base means larger value.' },
        { label: 'C', text: 'Both are equal', isCorrect: false, explanation: 'They are not equal.' },
        { label: 'D', text: 'Cannot be compared', isCorrect: false, explanation: 'Values are finite.' },
      ],
    },
    {
      questionCode: 'C7-MATH-EXP-108',
      chapterName: 'Exponents and Powers',
      topicName: 'HOTS Problem',
      questionText: 'Find the value of x if 2^(x - 1) = 64.',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'APPLY',
      competency: 'CRITICAL',
      marks: 2,
      explanation: '64 = 2⁶. Therefore 2^(x - 1) = 2⁶. Equating powers: x - 1 = 6 => x = 7.',
      hint: 'Express 64 as a power of 2: 64 = 2^6.',
      options: [
        { label: 'A', text: 'x = 7', isCorrect: true, explanation: 'Correct: x - 1 = 6 => x = 7.' },
        { label: 'B', text: 'x = 6', isCorrect: false, explanation: 'Forgot to add 1.' },
        { label: 'C', text: 'x = 5', isCorrect: false, explanation: 'Subtracted 1.' },
        { label: 'D', text: 'x = 8', isCorrect: false, explanation: 'Added 2.' },
      ],
    },

    // ==========================================
    // CHAPTER 12: SYMMETRY (6 Questions)
    // ==========================================
    {
      questionCode: 'C7-MATH-SYM-101',
      chapterName: 'Symmetry',
      topicName: 'Lines of Symmetry',
      questionText: 'How many lines of symmetry does a regular hexagon have?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'A regular polygon with n sides has n lines of symmetry. A regular hexagon has 6 sides, so it has 6 lines of symmetry.',
      hint: 'Number of lines of symmetry in a regular polygon equals its number of sides.',
      options: [
        { label: 'A', text: '6', isCorrect: true, explanation: 'Correct: 6 lines of symmetry.' },
        { label: 'B', text: '3', isCorrect: false, explanation: 'Counted diagonal lines only.' },
        { label: 'C', text: '12', isCorrect: false, explanation: 'Doubled line count.' },
        { label: 'D', text: 'Infinite', isCorrect: false, explanation: 'Only a circle has infinite lines of symmetry.' },
      ],
    },
    {
      questionCode: 'C7-MATH-SYM-102',
      chapterName: 'Symmetry',
      topicName: 'Rotational Symmetry',
      questionText: 'What is the order of rotational symmetry of a square?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'A square fits onto itself 4 times during a full 360° turn (at 90°, 180°, 270°, 360°). Order = 4.',
      hint: '360° / angle of rotation = order of rotational symmetry.',
      options: [
        { label: 'A', text: '4', isCorrect: true, explanation: 'Correct: Angle of rotation = 90°, Order = 360/90 = 4.' },
        { label: 'B', text: '2', isCorrect: false, explanation: 'Confused with rectangle.' },
        { label: 'C', text: '1', isCorrect: false, explanation: 'Minimal rotation order.' },
        { label: 'D', text: '8', isCorrect: false, explanation: 'Doubled square vertices.' },
      ],
    },
    {
      questionCode: 'C7-MATH-SYM-103',
      chapterName: 'Symmetry',
      topicName: 'Angle of Rotation',
      questionText: 'If a shape has an order of rotational symmetry of 3, what is its angle of rotation?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Angle of rotation = 360° / Order = 360° / 3 = 120°.',
      hint: 'Angle of rotation = 360° / Order of rotational symmetry.',
      options: [
        { label: 'A', text: '120°', isCorrect: true, explanation: 'Correct: 360° / 3 = 120°.' },
        { label: 'B', text: '60°', isCorrect: false, explanation: 'Divided 180 by 3.' },
        { label: 'C', text: '90°', isCorrect: false, explanation: 'Angle for order 4.' },
        { label: 'D', text: '180°', isCorrect: false, explanation: 'Angle for order 2.' },
      ],
    },
    {
      questionCode: 'C7-MATH-SYM-104',
      chapterName: 'Symmetry',
      topicName: 'Alphabet Symmetry',
      questionText: 'Which English alphabet letter has BOTH line symmetry and rotational symmetry?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'The letter H has 2 lines of symmetry (vertical & horizontal) and rotational symmetry of order 2 (180°).',
      hint: 'Check vertical/horizontal folds and 180° turns for letters H, N, Z, F.',
      options: [
        { label: 'A', text: 'H', isCorrect: true, explanation: 'Correct: Has 2 symmetry lines and order 2 rotational symmetry.' },
        { label: 'B', text: 'N', isCorrect: false, explanation: 'Has rotational symmetry but NO line symmetry.' },
        { label: 'C', text: 'Z', isCorrect: false, explanation: 'Has rotational symmetry but NO line symmetry.' },
        { label: 'D', text: 'A', isCorrect: false, explanation: 'Has line symmetry but NO rotational symmetry (>1).' },
      ],
    },
    {
      questionCode: 'C7-MATH-SYM-105',
      chapterName: 'Symmetry',
      topicName: 'Symmetry in Quadrilaterals',
      questionText: 'A rhombus has how many lines of symmetry?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'A non-square rhombus has 2 lines of symmetry along its two diagonals.',
      hint: 'Lines of symmetry in a rhombus lie along its diagonals.',
      options: [
        { label: 'A', text: '2', isCorrect: true, explanation: 'Correct: 2 lines of symmetry along diagonals.' },
        { label: 'B', text: '4', isCorrect: false, explanation: 'Confused rhombus with square.' },
        { label: 'C', text: '0', isCorrect: false, explanation: 'Confused with scalene quadrilateral.' },
        { label: 'D', text: '1', isCorrect: false, explanation: 'Confused with isosceles trapezoid.' },
      ],
    },
    {
      questionCode: 'C7-MATH-SYM-106',
      chapterName: 'Symmetry',
      topicName: 'Circle Symmetry',
      questionText: 'How many lines of symmetry does a circle have?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'Every line passing through the centre of a circle (diameter) is a line of symmetry. Thus, a circle has infinitely many lines of symmetry.',
      hint: 'Any diameter line divides a circle into two symmetrical halves.',
      options: [
        { label: 'A', text: 'Infinitely many', isCorrect: true, explanation: 'Correct: Any line passing through center is a line of symmetry.' },
        { label: 'B', text: '360', isCorrect: false, explanation: 'Confused with 360 degrees.' },
        { label: 'C', text: '4', isCorrect: false, explanation: 'Counted perpendicular diameters only.' },
        { label: 'D', text: '2', isCorrect: false, explanation: 'Counted horizontal and vertical axis.' },
      ],
    },

    // ==========================================
    // CHAPTER 13: VISUALISING SOLID SHAPES (6 Questions)
    // ==========================================
    {
      questionCode: 'C7-MATH-VSS-101',
      chapterName: 'Visualising Solid Shapes',
      topicName: 'Faces, Edges and Vertices (Euler Formula)',
      questionText: 'A 3D solid polyhedron has 6 faces and 8 vertices. How many edges does it have?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Euler’s formula: F + V - E = 2. 6 + 8 - E = 2 => 14 - E = 2 => E = 12 edges.',
      hint: 'Use Euler’s Formula: F + V - E = 2.',
      options: [
        { label: 'A', text: '12 edges', isCorrect: true, explanation: 'Correct: 6 + 8 - 12 = 2.' },
        { label: 'B', text: '14 edges', isCorrect: false, explanation: 'Added F and V without subtracting 2.' },
        { label: 'C', text: '10 edges', isCorrect: false, explanation: 'Subtracted 4 instead of 2.' },
        { label: 'D', text: '16 edges', isCorrect: false, explanation: 'Added 2 to sum.' },
      ],
    },
    {
      questionCode: 'C7-MATH-VSS-102',
      chapterName: 'Visualising Solid Shapes',
      topicName: 'Nets of 3D Solids',
      questionText: 'Which of the following 3D shapes can be formed by folding a net consisting of 6 congruent squares?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'A cube has 6 faces, each of which is a congruent square.',
      hint: '6 square faces fold into a 3D box shape.',
      options: [
        { label: 'A', text: 'Cube', isCorrect: true, explanation: 'Correct: 6 square faces form a cube.' },
        { label: 'B', text: 'Cuboid', isCorrect: false, explanation: 'Cuboid has rectangular faces.' },
        { label: 'C', text: 'Square Pyramid', isCorrect: false, explanation: 'Square pyramid has 1 square and 4 triangles.' },
        { label: 'D', text: 'Triangular Prism', isCorrect: false, explanation: 'Triangular prism has 2 triangles and 3 rectangles.' },
      ],
    },
    {
      questionCode: 'C7-MATH-VSS-103',
      chapterName: 'Visualising Solid Shapes',
      topicName: 'Cross-sections of 3D Objects',
      questionText: 'What cross-section is obtained when a vertical cut is made to a cylindrical wooden log?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'GEOMETRIC_REASONING',
      marks: 1,
      explanation: 'A vertical (longitudinal) cut of a cylinder yields a Rectangle cross-section. (A horizontal cut yields a circle).',
      hint: 'Imagine slicing a tree log top-to-bottom vertically.',
      options: [
        { label: 'A', text: 'Rectangle', isCorrect: true, explanation: 'Correct: Vertical slice of cylinder is a rectangle.' },
        { label: 'B', text: 'Circle', isCorrect: false, explanation: 'Horizontal slice gives a circle.' },
        { label: 'C', text: 'Triangle', isCorrect: false, explanation: 'Vertical slice of cone gives a triangle.' },
        { label: 'D', text: 'Square', isCorrect: false, explanation: 'Only rectangle unless diameter equals height.' },
      ],
    },
    {
      questionCode: 'C7-MATH-VSS-104',
      chapterName: 'Visualising Solid Shapes',
      topicName: 'Shadows of 3D Objects',
      questionText: 'What shape of shadow is cast by a sphere (like a football) when light falls directly from above?',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'The 2D shadow of a 3D sphere is a Circle.',
      hint: 'Look at the outline of a ball under light.',
      options: [
        { label: 'A', text: 'Circle', isCorrect: true, explanation: 'Correct: Shadow of a sphere is circular.' },
        { label: 'B', text: 'Oval / Ellipse', isCorrect: false, explanation: 'Only when light is at an inclined angle.' },
        { label: 'C', text: 'Square', isCorrect: false, explanation: 'Shadow of a cube.' },
        { label: 'D', text: 'Triangle', isCorrect: false, explanation: 'Shadow of a pyramid.' },
      ],
    },
    {
      questionCode: 'C7-MATH-VSS-105',
      chapterName: 'Visualising Solid Shapes',
      topicName: 'Pyramids and Prisms',
      questionText: 'A triangular pyramid (Tetrahedron) has how many faces, vertices, and edges?',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 2,
      explanation: 'A triangular pyramid has 4 triangular faces, 4 vertices, and 6 edges.',
      hint: 'Tetrahedron has 1 base triangle + 3 side triangles.',
      options: [
        { label: 'A', text: 'Faces = 4, Vertices = 4, Edges = 6', isCorrect: true, explanation: 'Correct: F=4, V=4, E=6 (4+4-6=2).' },
        { label: 'B', text: 'Faces = 5, Vertices = 5, Edges = 8', isCorrect: false, explanation: 'Square pyramid properties.' },
        { label: 'C', text: 'Faces = 5, Vertices = 6, Edges = 9', isCorrect: false, explanation: 'Triangular prism properties.' },
        { label: 'D', text: 'Faces = 6, Vertices = 8, Edges = 12', isCorrect: false, explanation: 'Cube / Cuboid properties.' },
      ],
    },
    {
      questionCode: 'C7-MATH-VSS-106',
      chapterName: 'Visualising Solid Shapes',
      topicName: 'Euler Formula Application',
      questionText: 'Does a 3D solid with 10 faces, 15 edges, and 7 vertices exist?',
      type: 'TRUE_FALSE',
      difficulty: 'MEDIUM',
      bloomLevel: 'EVALUATE',
      competency: 'REASONING',
      marks: 1,
      explanation: 'Check Euler’s formula: F + V - E = 10 + 7 - 15 = 2. Since F + V - E = 2 holds true, such a polyhedron CAN exist. Statement is True.',
      hint: 'Test with Euler’s formula F + V - E = 2.',
      options: [
        { label: 'A', text: 'True, because 10 + 7 - 15 = 2 (Satisfies Euler’s Formula)', isCorrect: true, explanation: 'Euler’s formula F + V - E = 2 holds.' },
        { label: 'B', text: 'False, because number of edges must be even', isCorrect: false, explanation: '15 is a valid number of edges.' },
      ],
    },




  ],
};