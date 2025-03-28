import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion';
import s from './AccordionList.module.css';

const steps = [
  {
    number: 1,
    title: 'Вибір технологій',
    text: 'На цьому етапі ми визначаємо, які технології найкраще підходять для вашого проекту. Аналізуємо вимоги до швидкості, безпеки та масштабованості сайту. Обираємо між Next.js, React, базою даних та іншими необхідними інструментами для ефективної роботи.'
  },
  {
    number: 4,
    title: 'Налаштування бекенду',
    text: 'Підключаємо бекенд-систему, якщо проект цього вимагає. Реалізуємо API, налаштовуємо базу даних, авторизацію та інші серверні функції для стабільної роботи сайту.'
  },
  {
    number: 2,
    title: 'Розробка структури',
    text: 'Формуємо логічну структуру майбутнього сайту або веб-додатку. Визначаємо ключові сторінки, компоненти та маршрути, щоб забезпечити зручну навігацію та ефективний UX/UI.'
  },
  {
    number: 5,
    title: 'Тестування та оптимізація',
    text: 'Перевіряємо функціональність сайту на різних пристроях і браузерах. Оптимізуємо продуктивність, зменшуємо час завантаження, налаштовуємо SEO та усуваємо можливі баги.'
  },
  {
    number: 3,
    title: 'Верстка та інтеграція',
    text: 'Розробляємо адаптивну та швидку верстку на основі макета. Інтегруємо готові компоненти React, налаштовуємо взаємодію між фронтендом і бекендом, якщо потрібно.'
  },
  {
    number: 6,
    title: 'Деплой та підтримка',
    text: 'Розгортаємо сайт на обраному хостингу або сервері. Надаємо технічну підтримку, оновлення та моніторинг продуктивності для безперебійної роботи проєкту.'
  }
];

export default function AccordionList() {
  return (
    <Accordion type="single" collapsible className={s.accordionWrapper}>
      {steps.map((step) => (
        <AccordionItem
          key={step.number}
          value={`step-${step.number}`}
          className={s.accordionItem}
        >
          <AccordionTrigger className={s.accordionTrigger}>
            <div className={s.accordionTriggerBtn}>
              <span className={s.stepNumber}>{step.number}</span>
              <h4 className={`title ${s.accordionTitle}`}>{step.title}</h4>
            </div>
          </AccordionTrigger>
          <AccordionContent className={s.accordionContent}>
            <p className={s.accordionContentText}>{step.text}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
