# Shopify Theme

A professional Shopify theme structure with all necessary directories and files.

## Structure

```
.
├── assets/              # Theme assets (CSS, JS, images)
├── config/              # Theme configuration files
├── layout/              # Theme layout files
├── locales/             # Internationalization files
├── snippets/            # Reusable template snippets
├── templates/           # Page templates
├── theme.toml          # Theme metadata
└── README.md           # This file
```

## Getting Started

1. **Install Shopify CLI** - Download and install [Shopify CLI](https://shopify.dev/themes/tools/cli)

2. **Connect to your store** - Run:
   ```bash
   shopify theme dev
   ```

3. **Customize** - Edit the template files in the `templates/`, `layout/`, and `snippets/` directories

4. **Deploy** - When ready, deploy your theme:
   ```bash
   shopify theme push
   ```

## File Guide

### Layouts
- `layout/theme.liquid` - Main theme layout

### Templates
- `templates/index.liquid` - Home page
- `templates/product.liquid` - Product detail page
- `templates/collection.liquid` - Collection page
- `templates/cart.liquid` - Shopping cart
- `templates/page.liquid` - Static pages
- `templates/404.liquid` - 404 error page

### Snippets
- `snippets/product-card.liquid` - Reusable product card
- `snippets/header.liquid` - Site header
- `snippets/footer.liquid` - Site footer

### Configuration
- `config/settings_schema.json` - Theme settings
- `config/settings_data.json` - Theme settings data

### Assets
- `assets/theme.css` - Main stylesheet
- `assets/theme.js` - Main JavaScript file

### Localization
- `locales/en.default.json` - English translations

## Customization

Edit the following files to customize your theme:

1. **Colors** - Update `config/settings_schema.json` for color options
2. **Fonts** - Modify `assets/theme.css` font families
3. **Layout** - Edit `layout/theme.liquid` for structure changes
4. **Pages** - Customize template files as needed

## Resources

- [Shopify Theme Development](https://shopify.dev/themes/tools/cli)
- [Liquid Documentation](https://shopify.dev/api/liquid)
- [Shopify Admin API](https://shopify.dev/api/admin)

## License

This theme is provided as-is for use with Shopify stores.
