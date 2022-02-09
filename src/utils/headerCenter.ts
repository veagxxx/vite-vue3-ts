import { h, VNode, RendererNode, RendererElement } from 'vue'
import { NIcon } from 'naive-ui'
import { Home24Filled, DocumentBulletList20Filled } from '@vicons/fluent'
import { RouterLink } from 'vue-router'

interface MenuOptions {
  label?: () => VNode<RendererNode, RendererElement, {
      [key: string]: any;
  }>;
  key: string;
  icon?: () => VNode<RendererNode, RendererElement, {
      [key: string]: any;
  }>;
}

const renderIcon = (icon: any) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}
export const menuOptions: Array<MenuOptions> = [
  {
    label: () => h(
      RouterLink as any,
      {
        to: {
          name: 'index',
          params: {
            lang: 'zh-CN'
          }
        }
      },
      { default: () => '首页' }
    ),
    key: 'content',
    icon: renderIcon(Home24Filled)
  },
  {
    label: () => h(
      RouterLink as any,
      {
        to: {
          name: 'article',
          params: {
            lang: 'zh-CN'
          }
        }
      },
      { default: () => '推荐' }
    ),
    key: 'article',
    icon: renderIcon(DocumentBulletList20Filled)
  },
  {
    label: () => h(
      RouterLink as any,
      {
        to: {
          name: '',
          params: {
            lang: 'zh-CN'
          }
        }
      },
      { default: () => '学习' }
    ),
    key: 'learn',
    icon: renderIcon(DocumentBulletList20Filled)
  }
]