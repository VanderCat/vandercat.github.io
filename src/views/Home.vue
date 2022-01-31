<template>
<container class="mx-auto">
    <h1 class="font-bold text-4xl">A <span class="text-purple-500">{{selectedIrony.name}}</span> without <span class="text-fuchsia-500">{{selectedIrony.characteristic}}</span> </h1>
    <h2 class="text-2xl mb-4 text-slate-600 tracking-widest">{{selectedIrony.tagline}}</h2>
    <p>
        idk im not a web designer or something
    </p>
</container>
</template>

<script setup>
import container from "../components/container.vue"
import {randomProperty} from "@/tools"
import { ref } from "@vue/reactivity"
const irony = {
    dev: {
        names: [
            "developer",
            "webdesigner",
            "ux/ui designer",
            "gamedev"
        ],
        characteristics: [
            "finished projects",
            "coding skills",
            "any games",
        ],
        taglines: [
            "i need a team guys"
        ],
        include: ["shared"] //includes characteristics and taglines
    },
    creative: {
        names: [
            "musician",
            "artist"
        ],
        characteristics: [
            "art",
            "works",
        ],
        taglines: [],
        include: ["shared"]
    },
    shared: {
        names: [
            "cat"
        ],
        characteristics: [
            "proper engilsh",
            "purpose",
            "grade",
            "dedication",
            "reasoning",
            "patience",
            "projects",
            "skills",
            //"!lazines", // A with B NYI
            //"!game addiction",
            "friends",
            "anything"
        ],
        taglines: [
            "lorem ipsum dolor sit amet",
            "todo: write here something",
            "what am i even doing?",
            "pltcm ljk;ty ,snm ntrcn",
            "ш лтщц рщц ещ срфтпу ьн лунищфкв дфнщге",
            "better than anyone in theory",
            "kto prochital tot sdohnet",
            "a lot of my project isnt about to be finished ever",
            "dedication for 1 week"
        ],
        include: ["dev"] // non recursive includes :з yeah im lazy
    }
}

let randomCategory = JSON.parse(JSON.stringify(randomProperty(irony))) //hack for copy
for (let k in randomCategory.include)
{
    randomCategory.names = randomCategory.names.concat(irony[randomCategory.include[k]].names)
    randomCategory.characteristics = randomCategory.characteristics.concat(irony[randomCategory.include[k]].characteristics)
    randomCategory.taglines = randomCategory.taglines.concat(irony[randomCategory.include[k]].taglines)
    //this is bad i'll need to made a for loop here or smth
}
let selectedIrony = ref({
    name:           randomCategory.names          [Math.floor(Math.random() * randomCategory.names          .length)],
    characteristic: randomCategory.characteristics[Math.floor(Math.random() * randomCategory.characteristics.length)],
    tagline:        randomCategory.taglines       [Math.floor(Math.random() * randomCategory.taglines       .length)],
})
</script>