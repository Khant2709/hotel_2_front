import {DEFAULT_CONTACTS} from "../../../config/envData";


const createMethod = (id, type, text, subtext = null, link = null) => {
  return {id, type, text, subtext, link}
};

export const trackMethod = [
  {
    id: 1,
    title: "На автомобиле или пешком:",
    method: [
      createMethod(1, "text", "Самый простой способ - написать в Яндекс навигаторе Holiday Park Borodacha."),
      createMethod(2, "link", "Еще проще => ", "открыть яндекс карты", DEFAULT_CONTACTS.linkToYaMap),
      createMethod(3, "router", "Пошаговый путь до нашей базы.", "Посмотреть", "/contacts/track/image"),
      createMethod(4, "router", "Видео путь до нашей базы.", "Посмотреть", "/contacts/track/video"),
    ]
  }
];