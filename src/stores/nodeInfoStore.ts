import { defineStore } from 'pinia'

export default defineStore('counter', {
    state: () => {
        return {
            node: new Array<nodeType>(),
            lineInfo: [],
        }
    },
    actions: {
        initNode() {
            this.node = [
                {
                    id: '231',
                    idName: 'testValue',
                    left: '20',
                    top: '30',
                    type: 'node',
                    content: 'testValue',
                },
            ]
        },
        push() {
            // this.node.push({})
        },
    },
})

interface nodeType {
    //
    id: string
    idName: string
    // default '0'
    left: string
    top: string
    type: 'menu' | 'node'
    content: string
}
