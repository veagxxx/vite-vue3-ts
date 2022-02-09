import { Html5Filled } from '@vicons/antd'
import { Javascript16Filled, MoreCircle20Regular } from '@vicons/fluent'
import { LogoReact, LogoAngular, LogoVue } from '@vicons/ionicons5'
export interface ICard {
  title: string;
  content: string;
  icon?: any;
  iconStyle?: string | object
}

export const cardItem: ICard[] = [
  {
    title: 'Html5',
    content: 'HTML5是互联网的下一代标准。',
    icon: Html5Filled,
    iconStyle: { color: 'rgb(228, 76, 39)' },
  },
  {
    title: 'JavaScript', 
    content: 'JavaScript 非常容易学。',
    icon: Javascript16Filled,
    iconStyle: { color: '#f6e54d' },
  },
  {
    title: 'TypeScript',
    content: 'TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准。',
    icon: Javascript16Filled,
    iconStyle: { color: '#294E80' },
  },
  {
    title: 'Vue',
    content: '渐进式 JavaScript 框架。',
    icon: LogoVue,
    iconStyle: { color: '#3eaf7c' },
  },
  {
    title: 'React',
    content: '用于构建用户界面的 JavaScript 库。',
    icon: LogoReact,
    iconStyle: { color: '#61dafb' },
  },
  {
    title: 'Angular',
    content: 'AngularJS 是一个 JavaScript 框架。',
    icon: LogoAngular,
    iconStyle: { color: '#f83a3a' },
  },
]
export interface ICardList {
  content: string;
  avatar: string;
  publishTime: string;
}
export const cardList: ICardList[] = [
  {
    content: '完了，芭比Q了，这BUG太多了吧....',
    avatar: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    publishTime: '2021-12-12 12:12'
  },
  {
    content: '今天星期四，明天星期五，再坚持一天，然后星期天。',
    avatar: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    publishTime: '2021-12-12 12:12'
  },
  {
    content: '不会摸鱼的程序员跟咸鱼没区别。',
    avatar: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    publishTime: '2021-12-12 12:12'
  },
  {
    content: '当你开始准备四级背单词时，Abandon——放弃的',
    avatar: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    publishTime: '2021-12-12 12:12'
  },
  {
    content: '马东什么？马冬梅。马什么梅啊？马冬梅。什么冬梅啊？马冬梅。',
    avatar: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    publishTime: '2021-12-12 12:12'
  },
  {
    content: '你TMD声带落家里了？',
    avatar: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    publishTime: '2021-12-12 12:12'
  },
]