# Integração da busca e dos filtros

## Arquivos novos

- `js/busca.js`: abre a busca global pelo botão **BUSCAR** ou pelo atalho `Ctrl + K`.
- `assets/css/busca.css`: estilos da busca, do filtro de matérias e do contador de normas.

## Arquivos atualizados

- `index.html`
- `materias.html`
- `ferramentas.html`
- `normas.html`
- `senai.html`
- `sobre.html`
- `js/materias.js`
- `js/normas.js`

## Como integrar

1. Copie `js/busca.js` para a pasta `js` do site.
2. Copie `assets/css/busca.css` para `assets/css`.
3. Em cada página HTML, dentro de `<head>`, adicione:

```html
<link rel="stylesheet" href="assets/css/busca.css">
<script src="js/busca.js" defer></script>
```

4. Em `materias.html`, mantenha o campo com `id="materiasBusca"`.
5. Substitua `js/materias.js` e `js/normas.js` pelos arquivos desta pasta.
6. Publique normalmente no GitHub Pages.

A busca global usa apenas uma lista simples dentro do próprio `js/busca.js`. Para adicionar novas páginas, acrescente um objeto no array `paginas`.
