<template>
    <div v-if="state.openmodal" class="admin_blackBg">
        <div class="admin_whiteBg_payment_delivery">
            <div class="modal-header">
                <h3 class="modal-title">결제/배송상세정보</h3>
                <button type="button" class="btn-close" @click="closeModal()"></button>
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
                    <h5 class="ps-5 py-2">2023년 4월 22일</h5>
                </div>
                <div class="mb-3 ms-3">
                    <h4>| 휴대폰번호</h4>
                    <h5 class="ps-5 py-2">2023년 4월 22일</h5>
                </div>
                <div class="mb-3 ms-3">
                    <h4>| 배송주소</h4>
                    <h5 class="ps-5 py-2">2023년 4월 22일</h5>
                </div>
                <div class="mb-3 ms-3">
                    <h4>| 배송메세지</h4>
                    <h5 class="ps-5 py-2">2023년 4월 22일</h5>
                </div>
            </div>
            <div class="modal-footer">   
                <button type="button" class="btn btn-success btn-lg" @click="closeModal()">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue'; 
// import axios from 'axios';

export default {

    props : {
        openmodal : {
            type : Boolean
        },
        id : {
            type : Number
        }
    },

    setup ( props, context ) {
        
        const state = reactive({
            id : props.id,
            openmodal : props.openmodal,
            paymentType : '',
            price : 0,
            paymentDate : ''
        })

        const closeModal = () => {
            context.emit('closemodal', false);
        }

        const loadData = () => {

            // axios.get(`/api/admin/inventory/getpayment/${state.id}`).then((res)=>{
            //     console.log(res.data);
            //     state.paymentType = res.data.paymentType;
            //     state.price = changePriceFormat(res.data.price);
            //     state.paymentDate = changeDateFormat(res.data.registDate);
            // }).catch(()=>{
            // })

        }

        // 모달창 열릴 때 불러와질예정
        onMounted(() => {
            loadData();
        })

        return {
            state,
            closeModal
        }
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