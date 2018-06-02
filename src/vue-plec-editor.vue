<template>
    <div id="editor">
    </div>
</template>

<script>
import PlecEditor from 'plec-editor'
import 'plec-editor/src/sass/plec-editor.scss'

export default {
  props: {
    'value':{
        type: String
    },
    'options': Object
  },
  data() {
      return {
        editor: undefined
      }
  },
  watch: {
    value: function(val) {
        if (this.editor && this.editor.$_element.htmlElement && val != this.editor.$_element.htmlElement.innerHTML) {
            this.editor.$_element.htmlElement.innerHTML = val || '';
        }
    }
  },
  methods: {
  },
  mounted() {
      this.editor = PlecEditor.init({
          el: 'editor',
          // buttonFilter: this.options.buttonFilter,
          // plugins: this.options.plugins,
          afterInit:(event) => {
              event.target.innerHTML = this.value || '';
          },
          beforeInit: (event) => {
              // self.$emit('input', event.target.innerHTML);
          },
          contentChanged: (event) => {
              this.$emit('input', event.target.innerHTML);
          }
      })
  }
}
</script>

