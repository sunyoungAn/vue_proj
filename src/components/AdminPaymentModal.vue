<template>
    <div class="admin_blackBg"> <!--v-if="openmodal"-->
        <div class="admin_whiteBg_payment">
            <div class="modal-header">
                <h3 class="modal-title">결제상세정보</h3>
                <button type="button" class="btn-close" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <hr>
                <div class="mb-3 ms-3">
                    <h4>| 결제수단</h4>
                    <h5 class="ps-5 py-2">신용카드</h5>
                </div>
                <div class="mb-3 ms-3">
                    <h4>| 결제금액</h4>
                    <h5 class="ps-5 py-2">300,000원</h5>
                </div>
                <div class="mb-3 ms-3">
                    <h4>| 결제일</h4>
                    <h5 class="ps-5 py-2">2023년 4월 22일</h5>
                </div>
                
            </div>
            <!-- <div class="d-flex justify-content-center"> -->
            <div class="modal-footer">   
                <button type="button" class="btn btn-success btn-lg">Close</button>
            </div>
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