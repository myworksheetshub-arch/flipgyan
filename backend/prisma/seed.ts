import { PrismaClient } from '@prisma/client';

// Class 5
import { shapesAndAnglesData } from './data/class-5/mathematics/shapes-and-angles';
import { theFishTaleData } from './data/class-5/mathematics/the-fish-tale';
import { howManySquaresData } from './data/class-5/mathematics/how-many-squares';
import { partsAndWholesData } from './data/class-5/mathematics/parts-and-wholes';
import { beMyMultipleData } from './data/class-5/mathematics/be-my-multiple';
import { superSensesData } from './data/class-5/science/super-senses';
import { tastingToDigestingData } from './data/class-5/science/from-tasting-to-digesting';
import { experimentsWithWaterData } from './data/class-5/science/experiments-with-water';
import { iceCreamManData } from './data/class-5/english/ice-cream-man';
import { raakhKiRassiData } from './data/class-5/hindi/raakh-ki-rassi';

// Class 6 - Updated NCERT Ganita Prakash 10 Chapters
import { patternsInMathData } from './data/class-6/mathematics/ch1-patterns-in-mathematics';
import { linesAndAnglesClass6Data } from './data/class-6/mathematics/ch2-lines-and-angles';
import { numberPlayClass6Data } from './data/class-6/mathematics/ch3-number-play';
import { dataHandlingClass6Data } from './data/class-6/mathematics/ch4-data-handling';
import { primeTimeClass6Data } from './data/class-6/mathematics/ch5-prime-time';
import { perimeterAndAreaClass6Data } from './data/class-6/mathematics/ch6-perimeter-and-area';
import { fractionsClass6UpdatedData } from './data/class-6/mathematics/ch7-fractions-updated';
import { constructionsClass6Data } from './data/class-6/mathematics/ch8-constructions';
import { symmetryClass6Data } from './data/class-6/mathematics/ch9-symmetry';
import { integersZeroClass6Data } from './data/class-6/mathematics/ch10-other-side-of-zero';

import { componentsOfFoodData } from './data/class-6/science/components-of-food';
import { earthSolarSystemData } from './data/class-6/social-science/earth-in-solar-system';
import { patricksHomeworkData } from './data/class-6/english/patricks-homework';
import { howTheDogFoundMasterData } from './data/class-6/english/how-the-dog-found-master';
import { tarosRewardData } from './data/class-6/english/taros-reward';
import { kalpanaChawlaData } from './data/class-6/english/kalpana-chawla';

// Class 7 Math - 13 Complete NCERT NEP 2025 Chapters (104+ Questions)
import { ch1IntegersClass7Data } from './data/class-7/mathematics/ch1-integers';
import { ch2FractionsDecimalsClass7Data } from './data/class-7/mathematics/ch2-fractions-decimals';
import { ch3DataHandlingClass7Data } from './data/class-7/mathematics/ch3-data-handling';
import { ch4SimpleEquationsClass7Data } from './data/class-7/mathematics/ch4-simple-equations';
import { ch5LinesAnglesClass7Data } from './data/class-7/mathematics/ch5-lines-angles';
import { ch6TrianglePropertiesClass7Data } from './data/class-7/mathematics/ch6-triangle-properties';
import { ch7ComparingQuantitiesClass7Data } from './data/class-7/mathematics/ch7-comparing-quantities';
import { ch8RationalNumbersClass7Data } from './data/class-7/mathematics/ch8-rational-numbers';
import { ch9PerimeterAreaClass7Data } from './data/class-7/mathematics/ch9-perimeter-area';
import { ch10AlgebraicExpressionsClass7Data } from './data/class-7/mathematics/ch10-algebraic-expressions';
import { ch11ExponentsPowersClass7Data } from './data/class-7/mathematics/ch11-exponents-powers';
import { ch12SymmetryClass7Data } from './data/class-7/mathematics/ch12-symmetry';
import { ch13VisualisingSolidShapesClass7Data } from './data/class-7/mathematics/ch13-visualising-solid-shapes';

import { nutritionInPlantsData } from './data/class-7/science/nutrition-in-plants';
import { heatData } from './data/class-7/science/heat';
import { acidsBasesSaltsData } from './data/class-7/science/acids-bases-salts';
import { threeQuestionsData } from './data/class-7/english/three-questions';

// Class 8 Math - 13 Complete NCERT NEP 2025 Chapters
import { ch1RationalNumbersClass8Data } from './data/class-8/mathematics/ch1-rational-numbers';
import { ch2LinearEquationsClass8Data } from './data/class-8/mathematics/ch2-linear-equations';
import { ch3QuadrilateralsClass8Data } from './data/class-8/mathematics/ch3-understanding-quadrilaterals';
import { ch4DataHandlingClass8Data } from './data/class-8/mathematics/ch4-data-handling';
import { ch5SquaresClass8Data } from './data/class-8/mathematics/ch5-squares-and-square-roots';
import { ch6CubesClass8Data } from './data/class-8/mathematics/ch6-cubes-and-cube-roots';
import { ch7ComparingQuantitiesClass8Data } from './data/class-8/mathematics/ch7-comparing-quantities';
import { ch8AlgebraicExpressionsClass8Data } from './data/class-8/mathematics/ch8-algebraic-expressions';
import { ch9MensurationClass8Data } from './data/class-8/mathematics/ch9-mensuration';
import { ch10ExponentsClass8Data } from './data/class-8/mathematics/ch10-exponents-and-powers';
import { ch11ProportionsClass8Data } from './data/class-8/mathematics/ch11-direct-inverse-proportions';
import { ch12FactorisationClass8Data } from './data/class-8/mathematics/ch12-factorisation';
import { ch13IntroductionToGraphsClass8Data } from './data/class-8/mathematics/ch13-introduction-to-graphs';

import { cropProductionData } from './data/class-8/science/crop-production';
import { microorganismsClass8Data } from './data/class-8/science/microorganisms';
import { christmasPresentData } from './data/class-8/english/christmas-present';

// Class 9 Math - 12 Complete NCERT NEP 2025 Chapters
import { ch1NumberSystemsClass9Data } from './data/class-9/mathematics/ch1-number-systems';
import { ch2PolynomialsClass9Data } from './data/class-9/mathematics/ch2-polynomials';
import { ch3CoordinateGeometryClass9Data } from './data/class-9/mathematics/ch3-coordinate-geometry';
import { ch4LinearEquations2VarClass9Data } from './data/class-9/mathematics/ch4-linear-equations-2var';
import { ch5EuclidsGeometryClass9Data } from './data/class-9/mathematics/ch5-euclids-geometry';
import { ch6LinesAndAnglesClass9Data } from './data/class-9/mathematics/ch6-lines-and-angles';
import { ch7TrianglesClass9Data } from './data/class-9/mathematics/ch7-triangles';
import { ch8QuadrilateralsClass9Data } from './data/class-9/mathematics/ch8-quadrilaterals';
import { ch9CirclesClass9Data } from './data/class-9/mathematics/ch9-circles';
import { ch10HeronsFormulaClass9Data } from './data/class-9/mathematics/ch10-herons-formula';
import { ch11SurfaceAreasVolumesClass9Data } from './data/class-9/mathematics/ch11-surface-areas-volumes';
import { ch12StatisticsClass9Data } from './data/class-9/mathematics/ch12-statistics';

import { matterInOurSurroundingsData } from './data/class-9/science/matter-in-our-surroundings';
import { funTheyHadData } from './data/class-9/english/fun-they-had';

// Class 10 Math - 14 Complete NCERT NEP 2025 Chapters
import { ch1RealNumbersClass10Data } from './data/class-10/mathematics/ch1-real-numbers';
import { ch2PolynomialsClass10Data } from './data/class-10/mathematics/ch2-polynomials';
import { ch3LinearEquationsClass10Data } from './data/class-10/mathematics/ch3-linear-equations';
import { ch4QuadraticEquationsClass10Data } from './data/class-10/mathematics/ch4-quadratic-equations';
import { ch5ArithmeticProgressionsClass10Data } from './data/class-10/mathematics/ch5-arithmetic-progressions';
import { ch6TrianglesClass10Data } from './data/class-10/mathematics/ch6-triangles';
import { ch7CoordinateGeometryClass10Data } from './data/class-10/mathematics/ch7-coordinate-geometry';
import { ch8TrigonometryClass10Data } from './data/class-10/mathematics/ch8-trigonometry';
import { ch9HeightsDistancesClass10Data } from './data/class-10/mathematics/ch9-heights-and-distances';
import { ch10CirclesClass10Data } from './data/class-10/mathematics/ch10-circles';
import { ch11AreasRelatedToCirclesClass10Data } from './data/class-10/mathematics/ch11-areas-related-to-circles';
import { ch12SurfaceAreasVolumesClass10Data } from './data/class-10/mathematics/ch12-surface-areas-volumes';
import { ch13StatisticsClass10Data } from './data/class-10/mathematics/ch13-statistics';
import { ch14ProbabilityClass10Data } from './data/class-10/mathematics/ch14-probability';

import { chemicalReactionsClass10Data } from './data/class-10/science/chemical-reactions';
import { acidsBasesSaltsClass10Data } from './data/class-10/science/acids-bases-salts-class10';
import { nationalismInIndiaData } from './data/class-10/social-science/nationalism-in-india';
import { letterToGodData } from './data/class-10/english/letter-to-god';

// Class 11 Math - 14 Complete NCERT NEP 2025 Chapters
import { ch1SetsClass11Data } from './data/class-11/mathematics/ch1-sets';
import { ch2RelationsFunctionsClass11Data } from './data/class-11/mathematics/ch2-relations-functions';
import { ch3TrigonometricFunctionsClass11Data } from './data/class-11/mathematics/ch3-trigonometric-functions';
import { ch4ComplexNumbersClass11Data } from './data/class-11/mathematics/ch4-complex-numbers';
import { ch5LinearInequalitiesClass11Data } from './data/class-11/mathematics/ch5-linear-inequalities';
import { ch6PermutationsCombinationsClass11Data } from './data/class-11/mathematics/ch6-permutations-combinations';
import { ch7BinomialTheoremClass11Data } from './data/class-11/mathematics/ch7-binomial-theorem';
import { ch8SequencesSeriesClass11Data } from './data/class-11/mathematics/ch8-sequences-series';
import { ch9StraightLinesClass11Data } from './data/class-11/mathematics/ch9-straight-lines';
import { ch10ConicSectionsClass11Data } from './data/class-11/mathematics/ch10-conic-sections';
import { ch113DGeometryClass11Data } from './data/class-11/mathematics/ch11-3d-geometry';
import { ch12LimitsDerivativesClass11Data } from './data/class-11/mathematics/ch12-limits-derivatives';
import { ch13StatisticsClass11Data } from './data/class-11/mathematics/ch13-statistics';
import { ch14ProbabilityClass11Data } from './data/class-11/mathematics/ch14-probability';

import { unitsClass11Data } from './data/class-11/physics/units-and-measurements';
import { motionClass11Data } from './data/class-11/physics/motion-in-straight-line';
import { chemistryClass11Data } from './data/class-11/chemistry/some-basic-concepts';
import { livingWorldClass11Data } from './data/class-11/biology/the-living-world';

// Class 12 Math - 13 Complete NCERT NEP 2025 Chapters
import { ch1RelationsFunctionsClass12Data } from './data/class-12/mathematics/ch1-relations-functions';
import { ch2InverseTrigonometryClass12Data } from './data/class-12/mathematics/ch2-inverse-trigonometry';
import { ch3MatricesClass12Data } from './data/class-12/mathematics/ch3-matrices';
import { ch4DeterminantsClass12Data } from './data/class-12/mathematics/ch4-determinants';
import { ch5ContinuityDifferentiabilityClass12Data } from './data/class-12/mathematics/ch5-continuity-differentiability';
import { ch6ApplicationOfDerivativesClass12Data } from './data/class-12/mathematics/ch6-application-of-derivatives';
import { ch7IntegralsClass12Data } from './data/class-12/mathematics/ch7-integrals';
import { ch8ApplicationOfIntegralsClass12Data } from './data/class-12/mathematics/ch8-application-of-integrals';
import { ch9DifferentialEquationsClass12Data } from './data/class-12/mathematics/ch9-differential-equations';
import { ch10VectorAlgebraClass12Data } from './data/class-12/mathematics/ch10-vector-algebra';
import { ch113DGeometryClass12Data } from './data/class-12/mathematics/ch11-3d-geometry';
import { ch12LinearProgrammingClass12Data } from './data/class-12/mathematics/ch12-linear-programming';
import { ch13ProbabilityClass12Data } from './data/class-12/mathematics/ch13-probability';

import { physicsClass12Data } from './data/class-12/physics/electric-charges-and-fields';
import { currentElectricityClass12Data } from './data/class-12/physics/current-electricity';
import { electrochemistryClass12Data } from './data/class-12/chemistry/electrochemistry';
import { geneticsClass12Data } from './data/class-12/biology/genetics';

import { seedClasses } from './seeds/class.seed';
import { seedSubjects } from './seeds/subject.seed';
import { seedChapters } from './seeds/chapter.seed';
import { seedQuestions } from './seeds/question.seed';
import { seedQuizzes } from './seeds/quiz.seed';
import { seedWorksheets } from './seeds/worksheet.seed';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Starting Master Seed execution with 100+ CBSE Class 7 Math NEP 2025 Questions...');

  // Disable Supabase statement timeout for the seed session (default is 8s on free tier)
  console.log('⚙️  Disabling statement_timeout for seed session...');
  await prisma.$executeRawUnsafe('SET statement_timeout = 0');
  await prisma.$executeRawUnsafe('SET lock_timeout = 0');
  console.log('✅ statement_timeout disabled.');

  // 1. Seed Classes
  const classes = await seedClasses(prisma);

  // 2. Seed Subjects
  const subjects = await seedSubjects(prisma, classes);

  // Combine all CBSE chapter data modules (Class 5 - 12)
  const chapterDataModules = [
    shapesAndAnglesData,
    theFishTaleData,
    howManySquaresData,
    partsAndWholesData,
    beMyMultipleData,
    superSensesData,
    tastingToDigestingData,
    experimentsWithWaterData,
    iceCreamManData,
    raakhKiRassiData,

    patternsInMathData,
    linesAndAnglesClass6Data,
    numberPlayClass6Data,
    dataHandlingClass6Data,
    primeTimeClass6Data,
    perimeterAndAreaClass6Data,
    fractionsClass6UpdatedData,
    constructionsClass6Data,
    symmetryClass6Data,
    integersZeroClass6Data,

    componentsOfFoodData,
    earthSolarSystemData,
    patricksHomeworkData,
    howTheDogFoundMasterData,
    tarosRewardData,
    kalpanaChawlaData,

    // Class 7 Math - 13 NCERT NEP 2025 Chapters
    ch1IntegersClass7Data,
    ch2FractionsDecimalsClass7Data,
    ch3DataHandlingClass7Data,
    ch4SimpleEquationsClass7Data,
    ch5LinesAnglesClass7Data,
    ch6TrianglePropertiesClass7Data,
    ch7ComparingQuantitiesClass7Data,
    ch8RationalNumbersClass7Data,
    ch9PerimeterAreaClass7Data,
    ch10AlgebraicExpressionsClass7Data,
    ch11ExponentsPowersClass7Data,
    ch12SymmetryClass7Data,
    ch13VisualisingSolidShapesClass7Data,

    nutritionInPlantsData,
    heatData,
    acidsBasesSaltsData,
    threeQuestionsData,

    ch1RationalNumbersClass8Data,
    ch2LinearEquationsClass8Data,
    ch3QuadrilateralsClass8Data,
    ch4DataHandlingClass8Data,
    ch5SquaresClass8Data,
    ch6CubesClass8Data,
    ch7ComparingQuantitiesClass8Data,
    ch8AlgebraicExpressionsClass8Data,
    ch9MensurationClass8Data,
    ch10ExponentsClass8Data,
    ch11ProportionsClass8Data,
    ch12FactorisationClass8Data,
    ch13IntroductionToGraphsClass8Data,
    cropProductionData,
    microorganismsClass8Data,
    christmasPresentData,

    ch1NumberSystemsClass9Data,
    ch2PolynomialsClass9Data,
    ch3CoordinateGeometryClass9Data,
    ch4LinearEquations2VarClass9Data,
    ch5EuclidsGeometryClass9Data,
    ch6LinesAndAnglesClass9Data,
    ch7TrianglesClass9Data,
    ch8QuadrilateralsClass9Data,
    ch9CirclesClass9Data,
    ch10HeronsFormulaClass9Data,
    ch11SurfaceAreasVolumesClass9Data,
    ch12StatisticsClass9Data,
    matterInOurSurroundingsData,
    funTheyHadData,

    ch1RealNumbersClass10Data,
    ch2PolynomialsClass10Data,
    ch3LinearEquationsClass10Data,
    ch4QuadraticEquationsClass10Data,
    ch5ArithmeticProgressionsClass10Data,
    ch6TrianglesClass10Data,
    ch7CoordinateGeometryClass10Data,
    ch8TrigonometryClass10Data,
    ch9HeightsDistancesClass10Data,
    ch10CirclesClass10Data,
    ch11AreasRelatedToCirclesClass10Data,
    ch12SurfaceAreasVolumesClass10Data,
    ch13StatisticsClass10Data,
    ch14ProbabilityClass10Data,
    chemicalReactionsClass10Data,
    acidsBasesSaltsClass10Data,
    nationalismInIndiaData,
    letterToGodData,

    ch1SetsClass11Data,
    ch2RelationsFunctionsClass11Data,
    ch3TrigonometricFunctionsClass11Data,
    ch4ComplexNumbersClass11Data,
    ch5LinearInequalitiesClass11Data,
    ch6PermutationsCombinationsClass11Data,
    ch7BinomialTheoremClass11Data,
    ch8SequencesSeriesClass11Data,
    ch9StraightLinesClass11Data,
    ch10ConicSectionsClass11Data,
    ch113DGeometryClass11Data,
    ch12LimitsDerivativesClass11Data,
    ch13StatisticsClass11Data,
    ch14ProbabilityClass11Data,

    unitsClass11Data,
    motionClass11Data,
    chemistryClass11Data,
    livingWorldClass11Data,

    ch1RelationsFunctionsClass12Data,
    ch2InverseTrigonometryClass12Data,
    ch3MatricesClass12Data,
    ch4DeterminantsClass12Data,
    ch5ContinuityDifferentiabilityClass12Data,
    ch6ApplicationOfDerivativesClass12Data,
    ch7IntegralsClass12Data,
    ch8ApplicationOfIntegralsClass12Data,
    ch9DifferentialEquationsClass12Data,
    ch10VectorAlgebraClass12Data,
    ch113DGeometryClass12Data,
    ch12LinearProgrammingClass12Data,
    ch13ProbabilityClass12Data,

    physicsClass12Data,
    currentElectricityClass12Data,
    electrochemistryClass12Data,
    geneticsClass12Data,
  ];

  // 3. Seed Chapters & Study Notes
  const chapters = await seedChapters(prisma, subjects, chapterDataModules);

  // 4. Seed Questions & Options
  const questions = await seedQuestions(prisma, chapters);

  // 5. Seed Quizzes
  await seedQuizzes(prisma, subjects, questions);

  // 6. Seed Worksheets
  await seedWorksheets(prisma, subjects, questions);

  // 7. Seed Demo Users & Achievements
  console.log('👤 Seeding Demo Users & Achievements...');
  const bcrypt = await import('bcryptjs');
  const passwordHash = await bcrypt.hash('password123', 10);

  const class7 = classes.find((c) => c.number === 7) || classes[0];

  await prisma.user.upsert({
    where: { email: 'student7@flipgyan.com' },
    update: {},
    create: {
      email: 'student7@flipgyan.com',
      passwordHash,
      name: 'Rohan Sharma',
      role: 'STUDENT',
      classGradeId: class7.id,
      school: 'Delhi Public School',
      streakDays: 14,
      totalXp: 3400,
      level: 12,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
    },
  });

  console.log('✅ 100+ CBSE Class 7 Math NEP 2025 Questions & Chapters Seeded Successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
