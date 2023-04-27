<template>
    <div class="admin_blackBg"> <!--v-if="openmodal"-->
        <div class="admin_whiteBg_payment_delivery">
            <div class="modal-header">
                <h3 class="modal-title">결제/배송상세정보</h3>
                <button type="button" class="btn-close" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <hr>
                <!-- 결제정보 -->
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

                <!-- 배송정보 -->
                <div class="mb-3 ms-3">
                    <h4>| 받는사람</h4>
                    <div class="ps-5 py-2 modal_input">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-3 ms-3">
                    <h4>| 휴대폰번호</h4>
                    <div class="ps-5 py-2 modal_input">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-3 ms-3">
                    <h4>| 배송주소</h4>
                    <div class="ps-5 py-2 modal_input_address row">
                        <div class="col-2">
                            <input type="text" class="form-control">
                        </div>
                        <div class="col-10">
                            <input type="text" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="mb-3 ms-3">
                    <h4>| 배송메세지</h4>
                    <div class="ps-5 py-2 modal_input_long">
                        <input type="text" class="form-control">
                    </div>
                </div>

                
            </div>
            <!-- <div class="d-flex justify-content-center"> -->
            <div class="modal-footer">   
                <button type="button" class="btn btn-success btn-lg me-3">배송수정</button>
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

.modal_input {
    width: 250px;
}

.modal_input_long {
    width: 600px;
}

.modal_input_address {
    width: 700px;
}
</style>