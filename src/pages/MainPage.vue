<template>
    <div>
        <div class="left" @dragstart="handleDragStart">
            <div class="drag-item" :draggable="true">1</div>
            <div class="drag-item" :draggable="true">2</div>
            <div class="drag-item" :draggable="true">3</div>
        </div>
        <div class="center">
            <Containtor></Containtor>
        </div>
        <div class="right"></div>
    </div>
</template>

<script setup lang="ts">
// import nodeInfoStore from '../stores/nodeInfoStore'

const store = nodeInfoStore()
onMounted(() => {
    console.log('123')
    // todo 看看 vscode 里能否导航到定义
    console.log(store.count)
})
</script>

<style scoped>
.drag-item {
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin-top: 20px;
}
</style>
