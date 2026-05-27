export const Carrinho = {
  NOME_ITEM_TABLE: '.table tbody tr:eq(0) td:eq(1) > h4',
  VALOR_ITEM_TABLE: '.table tbody tr:eq(0) td:eq(2) > p',

  VALOR_ITEM: ':nth-child(4) > .product-image-wrapper h2:eq(0)',
  NOME_ITEM: ':nth-child(4) > .product-image-wrapper p:eq(0)',
  BOTAO_ADD_CARRINHO: ':nth-child(4) > .product-image-wrapper a:eq(0)',
}