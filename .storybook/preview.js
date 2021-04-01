import { addParameters } from '@storybook/vue';

addParameters({
  viewport: {
    selectedAddonPanel: undefined,
    enableShortcuts: false,
  },
});

export const parameters = {
  //
  layout: 'fullscreen',
  //
  viewport: {
    viewports: {
      xxxl: { name: 'wide 1660', styles: { width: '1660px', height: '960px' } },
      xxl: { name: 'xxl 1480', styles: { width: '1480px', height: '960px' } },
      xl: { name: 'xl 1300', styles: { width: '1300px', height: '960px' } },
      l: { name: 'l 1120', styles: { width: '1120px', height: '960px' } },
      m: { name: 'm 940', styles: { width: '940px', height: '960px' } },
      s: { name: 's 760', styles: { width: '760px', height: '960px' } },
      xs: { name: 'xs 580', styles: { width: '580px', height: '960px' } },
      xxs: { name: 'xxs 400', styles: { width: '400px', height: '960px' } },
      mobile: { name: 'mobile 320', styles: { width: '320px', height: '960px' } },
    },
  },
  //
};
