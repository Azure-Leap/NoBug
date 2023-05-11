import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "@mui/material";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

export default function NestedList() {
  const [opensub, setopensub] = React.useState(false);
  const handleClick = () => {
    setopensub(!opensub);
  };

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
      title: "Бизнес",
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
        { subtitle: "DJ миксинг" },
      ],
    },
  ];

  return (
    <List
      className="block lg:hidden md:hidden xl:hidden l:hidden"
      sx={{ width: "100vw", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText sx={{ color: "#747474" }} primary="Browse by Category" />
        {opensub ? (
          <ExpandLess sx={{ color: "#747474" }} />
        ) : (
          <ExpandMore sx={{ color: "#747474" }} />
        )}
      </ListItemButton>
      <Collapse
        in={opensub}
        timeout="auto"
        unmountOnExit
        sx={{ width: "100vw" }}
      >
        <div className="100vw" color="#747474">
          {categoryData.map((categoryData, index) => (
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                color="#747474"
              >
                <Typography color="#747474">{categoryData.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className=" flex flex-col flex-wrap gap-4 p-2  ">
                  {categoryData.subCategory.map((e: any) => (
                    <Link href="#" underline="hover" color="#747474">
                      {e.subtitle}
                    </Link>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Collapse>
    </List>
  );
}
