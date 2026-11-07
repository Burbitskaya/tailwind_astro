import type { ImageMetadata } from 'astro';

import bulletSpeed from '../assets/bullet-speed.svg';
import bulletTransfers from '../assets/bullet-transfers.svg';
import bulletBonuses from '../assets/bullet-bonuses.svg';
import bulletSupport from '../assets/bullet-support.svg';

import btnIconGooglePlay from '../assets/btn-icon-google-play.svg';
import btnIconAppStore from '../assets/btn-icon-app-store.svg';
import btnIconAppGallery from '../assets/btn-icon-app-gallery.svg';
import btnIconRuStore from '../assets/btn-icon-rustore.svg';

export interface Feature {
  icon: ImageMetadata;
  lines: string[];
}

export interface StoreLink {
  icon: ImageMetadata;
  label: string;
  href: string;
}

export const featuresLeft: Feature[] = [
  {
    icon: bulletSpeed,
    lines: ['Без задержек и', 'сюрпризов'],
  },
  {
    icon: bulletTransfers,
    lines: ['Все переводы в', 'одном месте'],
  },
];

export const featuresRight: Feature[] = [
  {
    icon: bulletBonuses,
    lines: ['Бонусы и скидки', 'на комиссии'],
  },
  {
    icon: bulletSupport,
    lines: ['Поддержка', '24/7'],
  },
];

export const featuresMobile: Feature[] = [
  featuresLeft[0],
  featuresRight[0],
  featuresLeft[1],
  featuresRight[1],
];

export const stores: StoreLink[] = [
  {
    icon: btnIconGooglePlay,
    label: 'Google Play',
    href: 'https://play.google.com/store/apps',
  },
  {
    icon: btnIconAppStore,
    label: 'App Store',
    href: 'https://www.apple.com/app-store/',
  },
  {
    icon: btnIconAppGallery,
    label: 'AppGallery',
    href: 'https://appgallery.huawei.com/',
  },
  {
    icon: btnIconRuStore,
    label: 'RuStore',
    href: 'https://www.rustore.ru/',
  },
];
