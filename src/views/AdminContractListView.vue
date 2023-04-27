<template>
    <div class="container common_mt160 admin_wrap">
        <admin-sub-menu></admin-sub-menu>
        <div class="admin_content">
            <h1 class="mb-4">| 거래관리</h1>

            <!-- 검색 영역 -->
            <div class="mb-5">
                <h2 class="mb-4">거래 검색</h2>
                <div class="px-5">
                    <div class="row mb-3">
                        <div class="col-2 py-2">
                            거래번호
                            <!-- <p class="text-center">번호</p> -->
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="거래번호">
                        </div>
                        <div class="col-2 py-2">
                            상품번호 <!-- TODO 구매입찰, 판매입찰 관련해서 아이디를 이름등으로 바꾸는게 좋을련가?-->
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="상품번호">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-2 py-2">
                            판매자번호
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="판매자번호">
                        </div>
                        <div class="col-2 py-2">
                            구매자번호
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="구매자번호">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-2 py-2">
                            판매상태
                        </div>
                        <div class="col-4">
                            <select class="form-select brand_select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">판매상태1</option>
                                <option value="2">판매상태2</option>
                            </select>
                        </div>
                        <div class="col-2 py-2">
                            구매상태
                        </div>
                        <div class="col-4">
                            <select class="form-select brand_select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">구매상태1</option>
                                <option value="2">구매상태2</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-2 py-2">
                            거래체결일
                        </div>
                        <div class="col-4">
                            <input type="date" class="form-control">
                        </div>
                        <div class="col-2 py-2">
                            <p class="text-center">~</p>
                        </div>
                        <div class="col-4">
                            <input type="date" class="form-control">
                        </div>
                    </div>
                    
                    
                </div>
                <div class="d-flex justify-content-center mt-4">
                    <button class="btn btn-success btn-lg">검색</button>
                </div>
            </div>

            <!-- 검색 결과-->
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">
                                <input class="form-check-input" type="checkbox" value="">
                            </th>
                            <th scope="col">거래번호</th>
                            <th scope="col">상품번호</th>
                            <th scope="col">사이즈</th>
                            <th scope="col">판매자번호</th>
                            <th scope="col">구매자번호</th>
                            <th scope="col">거래체결일</th>
                            <th scope="col">판매상태</th>
                            <th scope="col">구매상태</th>
                            <th scope="col">정산일</th>
                            <th scope="col">결제&배송정보</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input class="form-check-input" type="checkbox" value=""></td>
                            <td>1</td>
                            <td>11</td> <!-- TODO 상품상세페이지로 이동하게 할까?-->
                            <td>250</td>
                            <td>55</td>
                            <td>666</td>
                            <td>2023/04/07</td>
                            <td>
                                <select class="form-select brand_select" id="inputGroupSelect01">
                                    <option selected>등록중</option>
                                    <option value="1">등록중</option>
                                    <option value="2">등록중</option>
                                </select>
                            </td>
                            <td>
                                <select class="form-select brand_select" id="inputGroupSelect01">
                                    <option selected>등록중</option>
                                    <option value="1">등록중</option>
                                    <option value="2">등록중</option>
                                </select>
                            </td>
                            <td>2023/04/07</td>
                            <td>
                                <button type="button" class="btn btn-outline-success" @click="openModal()">상세보기</button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            
            <!-- 페이지 네이션-->
            <nav class="d-flex justify-content-center mt-4">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>

            <div class="d-flex justify-content-center mt-3">
                <button class="btn btn-success btn-lg d-flex justify-content-start">상태변경</button>
            </div> 
        </div>

    </div>

    <!-- 모달영역 -->
    <admin-payment-delivery-modal v-if="state.isModalShow"></admin-payment-delivery-modal>


</template>

<script>
import AdminSubMenu from '@/components/AdminSubMenu.vue'
import AdminPaymentDeliveryModal from '@/components/AdminPaymentDeliveryModal.vue'
import { reactive } from 'vue'

export default {
    name: 'SubMenu',
    components: {
        AdminSubMenu,
        AdminPaymentDeliveryModal
    },
    setup () {

        const state = reactive({
            isModalShow:false
        })
        

        const openModal = () => {

            if(state.isModalShow === true) {
                state.isModalShow = false;
            } else {
                state.isModalShow = true;
            }

        }

        return {
            state,
            openModal
        }
    }
}
</script>

<style lang="css" scoped>
@import "../assets/css/common.css";

</style>