import Choices from 'choices.js';

const select = document.querySelector<HTMLSelectElement>('#service');

if (select) {
  const choices = new Choices(select, {
    allowHTML: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    placeholder: true,
    labelId: 'service-label',
    position: 'bottom',
  });

  const control = select.closest('.choices');
  const error = document.querySelector<HTMLElement>('#service-error');
  control?.setAttribute('aria-describedby', 'service-error');

  select.addEventListener('invalid', (event) => {
    // The native select remains required and supplies FormData; focus its visible replacement.
    event.preventDefault();
    if (error) error.hidden = false;
    control?.setAttribute('aria-invalid', 'true');
    const form = select.form;
    const firstInvalid = form?.querySelector(':invalid');
    if (firstInvalid === select) {
      (control as HTMLElement | null)?.focus();
      choices.showDropdown();
    }
  });

  select.addEventListener('change', () => {
    if (error) error.hidden = true;
    control?.removeAttribute('aria-invalid');
  });
}
