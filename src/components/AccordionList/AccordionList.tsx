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
    text: 'На цьому етапі ми визначаємо, які технології найкраще підходять для вашого проекту. Аналізуємо вимоги до швидкості, безпеки та масштабованості сайту.Обираємо між Next.js, React, базою даних та іншими необхідними інструментами для ефективної роботи.'
  },
  {
    number: 2,
    title: 'Налаштування бекенду',
    text: 'Підключаємо бекенд-систему, якщо проект цього вимагає.Реалізуємо API, налаштовуємо базу даних, авторизацію та інші серверні функції для стабільної роботи сайту.'
  },
  {
    number: 3,
    title: 'Розробка структури',
    text: 'Формуємо логічну структуру майбутнього сайту або веб-додатку.Визначаємо ключові сторінки, компоненти та маршрути, щоб забезпечити зручну навігацію та ефективний UX/UI.'
  },
  {
    number: 4,
    title: 'Тестування та оптимізація',
    text: 'Перевіряємо функціональність сайту на різних пристроях і браузерах.Оптимізуємо продуктивність, зменшуємо час завантаження, налаштовуємо SEO та усуваємо можливі баги.'
  },
  {
    number: 5,
    title: 'Верстка та інтеграція',
    text: 'Розробляємо адаптивну та швидку верстку на основі макета.Інтегруємо готові компоненти React, налаштовуємо взаємодію між фронтендом і бекендом, якщо потрібно.'
  },
  {
    number: 6,
    title: 'Деплой та підтримка',
    text: 'Розгортаємо сайт на обраному хостингу або сервері.Надаємо технічну підтримку, оновлення та моніторинг продуктивності для безперебійної роботи проєкту.'
  }
];

export default function AccordionList() {
  return (
    <div className={s.accordionWrapper}>
      {steps.map((step) => (
        <Accordion key={step.number} type="single" collapsible>
          <AccordionItem
            value={`step-${step.number}`}
            className={s.accordionItem}
          >
            <AccordionTrigger className={s.accordionTrigger}>
              <span className={s.stepNumber}>{step.number}</span> {step.title}
            </AccordionTrigger>
            <AccordionContent className={s.accordionContent}>
              {step.text}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
