<template>
    <div class="blackBg"> <!--v-if="openmodal"-->
        <div class="whiteBg">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <!-- <img :src=products[index].imageurl />
            <h4>{{ products[index].p_name }}</h4>
            <P>{{ products[index].content }}</P>
            <P>{{ products[index].price }}원</P> -->
            <!-- <button @click="modalClose">닫기</button> -->
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="css" scoped>
@import "../assets/css/common.css";

</style>