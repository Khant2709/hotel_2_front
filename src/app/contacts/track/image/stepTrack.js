import track1 from '../../../../../public/track/track1.webp';
import track2 from '../../../../../public/track/track2.webp';
import track3 from '../../../../../public/track/track0.webp';
import track3_1 from '../../../../../public/track/track3.webp';
import track4 from '../../../../../public/track/track4.webp';
import track5 from '../../../../../public/track/track5.webp';
import track6 from '../../../../../public/track/track6.webp';
import track7 from '../../../../../public/track/track7.webp';
import track8 from '../../../../../public/track/track8.webp';
import track9 from '../../../../../public/track/track9.webp';
import track10 from '../../../../../public/track/track10.webp';
import track11 from '../../../../../public/track/track11.webp';
import track12 from '../../../../../public/track/track12.webp';
import track13 from '../../../../../public/track/track13.webp';


const createImage = (id, src) => {
  return {id, alt: `image_${id}`, src}
}

const createStep = (id, text, image) => {
  return {id, text, image}
};

export const stepTrack = [
  createStep(
      0,
      '1. Ваш первый ориентир после въезда в Бетту – Пансионат Южный.',
      [createImage(0, track1)]
  ),
  createStep(
      1,
      '2. После вывески Пансионат Южный вы проезжаете мост и сразу за ним поворачиваете налево.',
      [createImage(1, track2)]
  ),
  createStep(
      2,
      '3. По правую руку – спортивная площадка и вы едете прямо. Проезжаете детский сад и зеленый забор.',
      [
        createImage(2, track3),
        createImage(3, track3_1),
      ]
  ),
  createStep(
      3,
      '4. Едете прямо до указателя на столбе &laquo;Левая Щель&raquo;',
      [createImage(4, track4)]
  ),
  createStep(
      4,
      '5. Поворачиваете налево, проезжая русло реки и въезжаете в Левую Щель.',
      [
        createImage(5, track5),
        createImage(6, track6),
      ]
  ),
  createStep(
      5,
      '6. Все время едете прямо проезжая 3 железных моста. Первый мост.',
      [createImage(7, track7)]
  ),
  createStep(
      6,
      '7. Второй мост (проезжаете базы отдыха Черномор и Эдем).',
      [createImage(7, track8)]
  ),
  createStep(
      7,
      '8. Третий Мост.',
      [createImage(8, track9)]
  ),
  createStep(
      8,
      '9. После третьего моста вы увидите развилку – дорога будет уходить направо – вам туда.',
      [createImage(9, track10)]
  ),
  createStep(
      9,
      '10. Перед деревянным домиком – поворот направо.',
      [createImage(10, track11)]
  ),
  createStep(
      10,
      '11. Дорога идет вверх вдоль забора.',
      [createImage(11, track12)]
  ),
  createStep(
      11,
      '12. За забором поворачиваете налево и вы приехали !',
      [createImage(12, track13)]
  ),
];