// Components
import '@refinitiv-ui/elements/icon';
// Themes
import '@refinitiv-ui/halo-theme/dark/imports/native-elements';
import '@refinitiv-ui/elements/icon/themes/halo/dark';

import { preload } from '@refinitiv-ui/elements/icon';

const generateIcons = async () => {
  const response = await fetch('./info.json');
  const info = await response.json();
  const icons = info.halo.icon.map(iconInfo => iconInfo.name);
  await preload(...icons);
  const sizes = [
    '12px'
  ];
  const docFrag = document.createDocumentFragment();
  sizes.forEach(size => {
    const demoBlock = document.createElement('div');
    demoBlock.style.fontSize = size;
    demoBlock.tags = size === '12px' ? 'condensed' : size === '16px' ? 'default' : '';
    icons.forEach(icon => {
      const iconEl = document.createElement('ef-icon');
      iconEl.icon = icon;
      iconEl.title = icon;
      demoBlock.appendChild(iconEl);
    });
    docFrag.appendChild(demoBlock);
  });
  document.body.appendChild(docFrag);
};

generateIcons();
