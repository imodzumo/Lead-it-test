<template>
    <div class="drop"
         :class="getClasses"
         @dragover.prevent="dragOver"
         @dragleave.prevent="dragLeave"
         @drop.prevent="drop($event)">

        <img :src="imageSource" v-if="imageSource" />
        <h2 v-if="wrongFile">Wrong file type</h2>
        <h1 v-if="!imageSource && !isDragging && !wrongFile">Drop an image</h1>

    </div>
</template>



<script>
    export default {
        name: 'DropAnImage',
        props:['imageData'],
        data(){
            return{
                isDragging:false,
                wrongFile:false,
                imageSource:null
            }
        },
        computed:{
            getClasses(){
                return {isDragging: this.isDragging};
            },
        },
        methods:{
            dragOver(){
                this.isDragging = true;
            },
            dragLeave(){
                this.isDragging = false;
            },
            drop(e){
                let files = e.dataTransfer.files;
                this.wrongFile = false;

                if (files.length === 1) {
                    let file = files[0];

                    if (file.type.indexOf('image/') >= 0) {
                        var reader = new FileReader();
                        reader.onload = f => {
                            this.imageSource = f.target.result;
                            this.isDragging = false;
                        };
                        reader.readAsDataURL(file);
                        this.$emit('image-dropped', file);
                    }else{
                        this.wrongFile = true;
                        this.imageSource = null;
                        this.isDragging = false;
                    }
                }
            }
        },
        watch: {
            imageData: {
                handler() {
                    if (this.imageData instanceof Blob) {
                            this.wrongFile = false;
                            let file = this.imageData;

                            let reader = new FileReader();
                            reader.onload = f => {
                                this.imageSource = f.target.result;
                            };
                            reader.readAsDataURL(file);
                        } else {
                            this.imageSource = null;
                        }
                    console.log(this.imageSource);
                },
                immediate: true
            }
        }
    }
</script>



<style scoped>
    .drop{
        width: 100%;
        height: 100%;
        background-color: #eee;
        border:10px solid #eee;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        transition: background-color .2s ease-in-out;
        font-family: sans-serif;
    }
    .isDragging{
        background-color: #999;
        border-color: #fff;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>