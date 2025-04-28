# el-select option超出显示tooltip

```ts
import { ref, computed, nextTick, watch } from "vue";

export default function useSelectTip() {
  const selectRef = ref<any>();
  const selectedLabel = computed(() => {
    if (typeof selectRef?.value?.selectedLabel === "string")
      return selectRef?.value?.selectedLabel;
    return selectRef?.value?.selectedLabel.toString();
  });

  const disableTip = ref<boolean>(true);
  watch(
    () => selectedLabel.value,
    () => {
      nextTick(() => {
        if (!selectedLabel.value) {
          disableTip.value = true;
        }

        const divWidth = selectRef.value.selectionRef.offsetWidth;
        const spanWidth =
          selectRef.value.selectionRef.children[1].children[0].offsetWidth;
        disableTip.value = divWidth > spanWidth;
      });
    },
    {
      immediate: true
    }
  );

  return {
    selectRef,
    selectedLabel,
    disableTip
  };
}

```



```vue
<template>
  <el-tooltip
    :disabled="disableTip"
    :content="selectedLabel"
    placement="top"
    effect="dark"
  >
    <el-select-v2 ref="selectRef" />
  </el-tooltip>
</template>

<script lang="ts" setup>
const { selectRef, selectedLabel, disableTip } = useSelectTip();
</script>
```


