import { h, RendererElement, RendererNode, VNode } from 'vue'
import { NAvatar, NText, NIcon } from 'naive-ui'
export interface DropDownOption {
  label?: string;
  key?: string;
  type?:string; 
  props?: {
    onClick: () => void;
  };
  icon?: any; 
  render?: () => VNode<RendererNode, RendererElement, {
    [key: string]: any;
  }>;
}

export const renderCustomHeader = () => {
  return h(
    'div',
    {
      style: 'display: flex; align-items: center; padding: 8px 12px;'
    },
    [
      h(NAvatar, {
        round: true,
        style: 'margin-right: 12px;',
        src: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg'
      }),
      h('div', null, [
        h('div', null, [h(NText, { depth: 1 }, { default: () => '握棱爹' })]),
        h('div', { style: 'font-size: 12px;' }, [
          h(
            NText,
            { depth: 3 },
            { default: () => '毫无疑问，你是办公室里最亮的星' }
          )
        ])
      ])
    ]
  )
}
export const renderIcon = (icon: any) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}