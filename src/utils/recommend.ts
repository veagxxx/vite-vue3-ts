export interface IArticle {
  articleId: number;
  content?: string;
  avatar?: string;
  publishTime?: string;
  code?: string;
  star?: string;
  comment?: never[];
  author?: string;
}

export const articleList: IArticle[] = [
  {
    articleId: 1,
    content: '第一个JavaScript程序———Hello World',
    avatar: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    publishTime: '2022-01-03',
    code: `
function hello() {
  console.log('Hello World!')
}
    `,
    star: '10',
    comment: [],
    author: '佛耶格'
  }
]