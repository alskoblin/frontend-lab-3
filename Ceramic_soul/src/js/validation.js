import JustValidate from 'just-validate';




const validation = new JustValidate('form');

validation
  .addField('#GET-name', [
    { rule: 'required', errorMessage: 'Введите ваше имя' },
    { rule: 'minLength', value: 2, errorMessage: 'Минимум 2 символа' },
  ])
  .addField('#GET-email', [
    { rule: 'required', errorMessage: 'Введите email' },
    { rule: 'email', errorMessage: 'Некорректный email' },
  ])
  .addField('#GET-question', [
    { rule: 'required', errorMessage: 'Введите ваш вопрос' },
    { rule: 'minLength', value: 5, errorMessage: 'Минимум 5 символов' },
  ])
  .addField('.checkbox input', [
    { rule: 'required', errorMessage: 'Необходимо согласие с условиями' },
  ])
  .onSuccess((event) => {
    console.log('Форма успешно прошла валидацию');
    event.target.submit();
  });