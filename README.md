[README.md](https://github.com/user-attachments/files/29027692/README.md)
# NORO CODE Landing Page

Landing institucional estática da NORO CODE, construída com HTML, CSS e JavaScript puro.

## Desenvolvimento local

```bash
python3 -m http.server 4173
```

Acesse `http://localhost:4173`.

## Contatos e redes sociais

Edite o objeto `SITE_CONFIG` no início de `script.js`:

```js
const SITE_CONFIG = {
  whatsapp: "5592999999999",
  email: "nnorocode@gmail.com",
  instagram: "https://www.instagram.com/norocode/",
  linkedin: "https://www.linkedin.com/company/nnorocode",
};
```

O WhatsApp deve conter apenas números, incluindo código do país e DDD. Enquanto um canal estiver vazio, a página informa que ele ainda não foi configurado.

## GitHub Pages

1. Envie este repositório ao GitHub.
2. Abra `Settings > Pages`.
3. Em `Build and deployment`, selecione `Deploy from a branch`.
4. Escolha a branch `main` e a pasta `/ (root)`.
5. Salve e aguarde o endereço público ser gerado.

Todos os caminhos usados pela landing são relativos e compatíveis com publicação em uma subpasta do GitHub Pages.
