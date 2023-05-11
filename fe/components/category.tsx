import { useState } from "react";
import { Typography, Grid, Link, Box } from "@mui/material";
import { ClassNames } from "@emotion/react";

export default function HoverDropdown() {
  const [open, setOpen] = useState(false);
  const [subCat, setSubCat] = useState<any>([]);
  const categoryData = [
    {
      title: "График дизайн",
      subCategory: [
        { subtitle: "Лого дизайн" },
        { subtitle: "Нэрийн хуудасний дизайн" },
        { subtitle: "Брошур гарын авлага" },
        { subtitle: "Каталог дизайн" },
        { subtitle: "Ном хавтасны дизайн" },
        { subtitle: "Веб & Мобайл дизайн" },
        { subtitle: "Веб баннер" },
        { subtitle: "Иллюстрэйшн" },
        { subtitle: "Баглаа боодлын дизайн" },
        { subtitle: "Портрет иллюстрэйшн" },
        { subtitle: "Брэндбүүк" },
        { subtitle: "Архитектур & Интерьер дизайн" },
        { subtitle: "Тоглоомын дизайн" },
        { subtitle: "Каталог дизайн" },
        { subtitle: "Пресентацны дизайн" },
        { subtitle: "AR филтер (IG, Snapchat)" },
        { subtitle: "Комик иллюстрэйшн" },
        { subtitle: "Хэвлэл дизайн" },
        { subtitle: "3D дизайн" },
      ],
    },
    {
      title: "Дижитал маркетинг",
      subCategory: [
        { subtitle: "Сошиал медиа маркетинг" },
        { subtitle: "Инфлюнсер" },
        { subtitle: "Контент маркетинг" },
        { subtitle: "Видео маркетинг" },
        { subtitle: "Хайлтын системийн маркетинг (SEM)" },
        { subtitle: "Ном & Цахим номын маркетинг" },
        { subtitle: "Онлайн худалдаа маркетинг" },
        { subtitle: "Хайлтын системийн оновчлол (SEO)" },
        { subtitle: "Подкаст маркетинг" },
        { subtitle: "Имэйл маркетинг" },
        { subtitle: "Дэлгэцийн сурталчилгаа" },
      ],
    },
    {
      title: "Бичих ба орчуулга",
      subCategory: [
        { subtitle: "Блог & Нийтлэл" },
        { subtitle: "Ном редакторлах" },
        { subtitle: "CV бичих" },
        { subtitle: "И-мэйл бичих" },
        { subtitle: "Яриа бичих" },
        { subtitle: "Орчуулга" },
        { subtitle: "Албан бичиг бичих" },
        { subtitle: "Бичгийн алдаа хянах, засварлах" },
        { subtitle: "Подкаст маркетинг" },
        { subtitle: "Имэйл маркетинг" },
        { subtitle: "Дэлгэцийн сурталчилгаа" },
      ],
    },
    {
      title: "Видео ба анимэйшн",
      subCategory: [
        { subtitle: "Видео эдит" },
        { subtitle: "Хөдөлгөөнт GIF" },
        { subtitle: "Слайд видео" },
        { subtitle: "3D бичлэг" },
        { subtitle: "Хадмал & Тайлбар" },
        { subtitle: "Дууны видео" },
        { subtitle: "Вишуал эффект" },
        { subtitle: "Тайлбарлагч видео" },
        { subtitle: "Апп & Вэбсайт танилцуулга" },
        { subtitle: "Анимэйшн" },
        { subtitle: "Оршил & Төгсгөлийн видео" },
        { subtitle: "Богино видео сурталчилгаа" },
        { subtitle: "Трейлер видео" },
      ],
    },
    {
      title: "Программ хөгжүүлэлт",
      subCategory: [
        { subtitle: "WordPress" },
        { subtitle: "Вэбсайт програмчлал" },
        { subtitle: "Дэлгэцийн аппликэйшн" },
        { subtitle: "Өгөгдлийн сан" },
        { subtitle: "Системийн дизайн" },
        { subtitle: "Онлайн худалдаа хөгжүүлэлт" },
        { subtitle: "Хэрэглэгчийн тест" },
        { subtitle: "Вэбсайт програмчлал" },
        { subtitle: "Чатбот" },
        { subtitle: "Тоглоомны хөгжүүлэлт" },
        { subtitle: "Эмбэддэд систем" },
        { subtitle: "Кибер аюулгүй байдал" },
        { subtitle: "Утасны аппликэйшн" },
      ],
    },
    {
      title: "Дуу ба аудио бичилт",
      subCategory: [
        { subtitle: "Дуу оруулалт" },
        { subtitle: "Миксинг & Мастеринг" },
        { subtitle: "Дууны үг зохиогчид" },
        { subtitle: "Аудио сурталчилгаа" },
        { subtitle: "Дууны хөг тааруулах" },
        { subtitle: "Synth Presets" },
        { subtitle: "Продюсер & Хөгжмийн найруулагчид" },
        { subtitle: "Хөгжимчид" },
        { subtitle: "Бийт хийх" },
        { subtitle: "Харилцан яриа эдитлэх" },
        { subtitle: "ДDJ миксинг" },
      ],
    },
    {
      title: "Лайфстайл",
      subCategory: [
        { subtitle: "Дасгалжуулах" },
        { subtitle: "Онлайнаар багшлах" },
        { subtitle: "Аялал жуулчлал" },
        { subtitle: "Эрүүл мэнд, Хоол тэжээл & Фитнес" },
        { subtitle: "Цуглуулга" },
        { subtitle: "Тоглоом" },
        { subtitle: "Хувийн стилист" },
        { subtitle: "Загвар өмсөх" },
        { subtitle: "Урлаг" },
      ],
    },
    {
      title: "Бизнес",
      subCategory: [
        { subtitle: "Төслийн менежмент" },
        { subtitle: "Хуулийн зөвлөгөө" },
        { subtitle: "Брэндингийн зөвлөгөө" },
        { subtitle: "Худалдаа, борлуулалт" },
        { subtitle: "Нийлүүлэлтийн сүлжээний менежмент (SCM)" },
        { subtitle: "Тайлан бичих" },
        { subtitle: "Менторинг" },
        { subtitle: "Онлайн худалдаа менежмент" },
        { subtitle: "Хүний нөөцийн зөвлөгөө" },
        { subtitle: "Харилцан яриа эдитлэх" },
        { subtitle: "Бизнесийн зөвлөгөө" },
        { subtitle: "Карьер зөвлөгөө" },
        { subtitle: "Зах зээлийн судалгаа" },
        { subtitle: "Бизнесийн төлөвлөгөө" },
        { subtitle: "Пресентац" },
        { subtitle: "Зочлох үйлчилгээний зөвлөгөө" },
      ],
    },
  ];

  return (
    <div className="bg-slate-100 -mt-4">
      <div className="max-w-screen-xl flex  items-center p-3 ">
        <div onMouseLeave={() => setOpen(false)} className="flex">
          {categoryData.map((categoryData, index) => (
            <Link
              key={index}
              href="#"
              underline="none"
              onMouseOver={() => {
                setOpen(true);
                setSubCat(categoryData.subCategory);
              }}
              className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3"
              sx={{ color: "#333333" }}
            >
              {categoryData.title}
            </Link>
          ))}
          {/* <p className="hidden md:block">Text to hide on small screens</p>
          <p className="hidden xl:block">Text to hide on big screens</p> */}

          <ul
            className={`absolute mt-14 mb-10 flex  w-full  p-3  font-medium justify-between rounded-b-xl bg-slate-200 -ml-4   ${
              open ? "block" : "hidden"
            }`}
          >
            <div className=" flex flex-row flex-wrap gap-8 p-2  ">
              {subCat.map((e: any) => (
                <Box className="flex">
                  <Link href="#" underline="hover" color="#555555">
                    {e.subtitle}
                  </Link>
                </Box>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
