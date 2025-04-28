# el-input内容溢出显示tooltip

```ts
import { ref } from "vue";

export default function useInputTip() {
  const disableTips = ref<{ [key: string]: boolean }>({});

  const checkOverflow = (event: MouseEvent, name: string): void => {
    if (event.target) {
      const inputEl = event.target.children[0].children[0];
      disableTips.value[name] = inputEl.scrollWidth <= inputEl.offsetWidth;
    }
  };

  return {
    disableTips,
    checkOverflow
  };
}
```

```vue
<template>
  <el-tooltip
    :disabled="disableTips.name"
    :content="form.name"
    placement="top"
    effect="dark"
  >
    <el-input
      v-model="form.name"
      disabled
      @mouseenter="(event) => checkOverflow(event, 'name')"
    />
  </el-tooltip>
</template>

<script lang="ts" setup>
const { disableTips, checkOverflow } = useInputTip();
</script>
```
