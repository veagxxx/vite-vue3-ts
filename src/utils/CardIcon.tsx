import { NIcon } from 'naive-ui'
import { h, defineComponent } from 'vue'

export default defineComponent({
  props: ['cardIcon'],
  render() {
    return h(NIcon, null, { default: ()=> h(this.cardIcon) })
  }
})