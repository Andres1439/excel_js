const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);

const ROWS = 10;
const COL = 3;

const range = (length) => Array.from({ length }, (_, i) => i);

const rendertSpreadsheet = () => {
  const $table = $("table");
  const $head = $("thead");
  const $body = $("tbody");

  const headerHTML = `
  <tr></tr>`;

  $head.innerHTML = headerHTML;

  const bodyHTML = `
  <tr></tr>`;

  $body.innerHTML = bodyHTML;
};
