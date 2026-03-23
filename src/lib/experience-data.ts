export interface Experience {
  id: string
  title: string
  company: string
  location: {
    city: string
    country: string
    lat: number
    lng: number
    isRemote: boolean
  }
  startDate: string
  endDate: string
  color: "pink" | "yellow" | "green" | "blue"
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Генеральная уборка",
    company: "Полная уборка квартиры или дома",
    location: {
      city: "Прокопьевск",
      country: "Россия",
      lat: 53.9,
      lng: 86.7,
      isRemote: false,
    },
    startDate: "2014-01-15",
    endDate: "2026-03-23",
    color: "green",
  },
  {
    id: "2",
    title: "Экспресс-уборка за час",
    company: "Быстрая уборка когда нет времени",
    location: {
      city: "Киселёвск",
      country: "Россия",
      lat: 53.9946,
      lng: 86.6393,
      isRemote: false,
    },
    startDate: "2014-06-20",
    endDate: "2026-03-23",
    color: "green",
  },
  {
    id: "3",
    title: "Предпродажная уборка",
    company: "Идеальная чистота перед продажей",
    location: {
      city: "Прокопьевск",
      country: "Россия",
      lat: 53.8952,
      lng: 86.7329,
      isRemote: false,
    },
    startDate: "2015-03-10",
    endDate: "2026-03-23",
    color: "blue",
  },
  {
    id: "4",
    title: "Мамин День",
    company: "Уборка в подарок близким",
    location: {
      city: "Киселёвск",
      country: "Россия",
      lat: 53.9823,
      lng: 86.6529,
      isRemote: false,
    },
    startDate: "2016-09-05",
    endDate: "2026-03-23",
    color: "pink",
  },
  {
    id: "5",
    title: "Расхламление и организация",
    company: "Порядок в каждом уголке дома",
    location: {
      city: "Прокопьевск",
      country: "Россия",
      lat: 53.9101,
      lng: 86.7189,
      isRemote: false,
    },
    startDate: "2017-02-18",
    endDate: "2026-03-23",
    color: "yellow",
  },
]