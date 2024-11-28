
const fs = require('fs');
const path = require('path');

test('Página contiene "¡Hola Mundo!"', () => {
    const indexPath = path.join(__dirname, 'index.html');
    const htmlContent = fs.readFileSync(indexPath, 'utf-8');
    expect(htmlContent).toContain('<h1>¡Hola Mundo!, soy Juan Hernandez 2023-0613</h1>');
});
