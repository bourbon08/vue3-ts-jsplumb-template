<template>
    <div id="diagramContainer" @dragstart="handleDragStart">
        <div
            v-for="(item, index) in nodeList"
            :id="item.idName"
            :key="index"
            class="drag-item"
            :style="{ left: item.left, top: item.top }"
            :data-index="index"
            :data-index1="index"
            :draggable="true"
        >
            {{ item.content }}
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    nodeList: {
        type: Object,
        default: () => {
            return [
                {
                    idName: '11',
                    left: '10px',
                    top: '20px',
                    content: '123',
                },
            ]
        },
        // 	lists: [],
        // 	idName: '',
        // 	left: '',
        // 	top: '',
        // 	content: '',
        // }),
    },
})

function handleDragStart(e: any) {
    console.log(e.target.dataset)
    e.dataTransfer.setData('index', e.target.dataset.index)
}
// let nodeData = {
// 	// 324
// 	lists: [
// 		{
// 			id: '123123',
// 			idName: 'item_left',
// 			left: '350px',
// 			top: '150px',
// 			// left: "0",
// 			// top: "0",
// 			type: 'todo',
// 			content: '123',
// 		},
// 		{
// 			id: '456456',
// 			idName: 'item_right',
// 			left: '150px',
// 			top: '100px',
// 			type: 'menu',
// 			content: '456',
// 		},
// 		{
// 			id: '456456789',
// 			idName: 'item_right1',
// 			left: '0',
// 			top: '0',
// 			type: 'menu',
// 			content: '456',
// 		},
// 	],
// 	lines: [
// 		{
// 			from: 'item_left',
// 			to: 'item_right',
// 			label: [
// 				{
// 					labelId: 'label1',
// 				},
// 			],
// 		},
// 	],
// }
</script>

<script lang="ts">
export default {
    name: 'Container',
}
</script>

<style scoped>
#diagramContainer {
    padding: 20px;
    width: 80%;
    height: 400px;
    border: 1px solid gray;
    position: relative;
}

.drag-item {
    position: absolute;
    height: 80px;
    width: 80px;
    border: 1px solid blue;
    user-select: none;
}
</style>
