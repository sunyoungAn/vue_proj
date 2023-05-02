<template>
    <div class="container common_mt160 admin_wrap">
        <admin-sub-menu></admin-sub-menu>
        <div class="admin_content">
            <h1 class="mb-4">| 회원상세관리</h1>

            <!-- 입력 영역 -->
            <div class="admin_input_wrap my-5">
                <h3 class="mb-4">회원기본정보</h3>
                <div class="mb-4">
                    <label class="form-label fs-5">| 회원번호</label>
                    <div class="px-2 col-5">
                        <label class="form-label fs-5">{{ state.memberNumber }}</label>
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 이름</label>
                    <div class="px-2 col-5">
                        <input type="text" class="form-control" v-model="state.data.name">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 이메일</label>
                    <div class="px-2 col-5">
                        <label class="form-label fs-5">{{ state.data.email }}</label>
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 비밀번호</label>
                    <div class="px-2 col-5">
                        <input type="password" class="form-control">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 휴대폰번호</label>
                    <div class="px-2 col-5">
                        <input type="text" class="form-control" v-model="state.data.phoneNumber" maxlength="11" placeholder="-를 제외하고 입력해주세요">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 성별</label>
                    <div class="px-2">
                        <div class="form-check form-check-inline me-5">
                            <input class="form-check-input" type="radio" v-model="state.data.gender" value=2>
                            <label class="form-check-label">남</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="state.data.gender" value=1>
                            <label class="form-check-label">여</label>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 생년월일</label>
                    <div class="px-2 col-5">
                        <input type="date" class="form-control" v-model="state.data.birthDate">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 가입일</label>
                    <div class="px-2 col-5">
                        <label class="form-label fs-5">{{ changeDateFormat(state.data.registDate) }}</label>
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 회원상태</label>
                    <div class="px-2 col-5">
                        <select class="form-select" v-model="state.data.memberStatus">
                            <option :value=1>관리자</option>
                            <option :value=2>일반회원</option>
                            <option :value=3>탈퇴</option>
                        </select>
                    </div>
                </div>

                <hr class="my-5">

                <h3 class="mb-4">회원정산계좌정보</h3>
                <div class="mb-4">
                    <label class="form-label fs-5">| 은행명</label>
                    <div class="px-2 col-4">
                        <input type="text" class="form-control" v-model="state.data.bankName">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 계좌번호</label>
                    <div class="px-2 col-5">
                        <input type="text" class="form-control" v-model="state.data.accountNumber" placeholder="-를 제외하고 입력해주세요">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 예금주</label>
                    <div class="px-2 col-4">
                        <input type="text" class="form-control" v-model="state.data.depositor">
                    </div>
                </div>
                
                <hr class="my-5">

                <h3 class="mb-4">회원배송주소정보</h3>
                <ul class="list-group list-group-flush">
                    <li v-for="address of state.data.addressDtoList" :key="address" class="list-group-item my-1 px-0" >
                        <div class="row">
                            <div class="col-10">
                                <label class="fs-5 fw-bold me-1">{{ address.name }}</label><span v-if="address.defaultAddress === 1" class="badge rounded-pill bg-secondary">기본배송지</span><br>
                                <label class="fs-6">{{ changePhoneNumberFormat(address.phoneNumber) }}</label><br>
                                <label class="fs-6">({{ address.zipCode }})&nbsp;</label>
                                <label class="fs-6">{{ address.address }}&nbsp;</label>
                                <label class="fs-6">{{ address.subAddress }}</label>
                            </div>
                            <div class="col-2 d-flex align-items-center justify-content-center">
                                <div class="d-flex justify-content-center">
                                    <button class="btn btn btn-outline-success d-flex justify-content-center">삭제</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                    
                <!-- <div class="mb-4">
                    <label class="form-label fs-5">| 받는사람</label>
                    <div class="px-2 col-5">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 기본주소</label>
                    <div class="px-2">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 상세주소</label>
                    <div class="px-2">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 우편번호</label>
                    <div class="px-2 col-3">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 휴대폰번호</label>
                    <div class="px-2 col-5">
                        <input type="text" class="form-control">
                    </div>
                </div> -->

                <hr class="my-5">

                <h3 class="mb-4">회원카드정보</h3>
                <ul class="list-group list-group-flush">
                        <li v-for="card of state.data.cardDtoList" :key="card" class="list-group-item my-1 px-0" >
                            <div class="row">
                                <div class="col-10">
                                    <label class="fs-6 fw-bold">{{ changeCardFormat(card.cardNumber) }}</label><br>
                                    <label class="fs-6">{{ card.expiryYear }}&nbsp;/&nbsp;</label>
                                    <label class="fs-6">{{ card.expiryMonth }}</label>
                                </div>
                                <div class="col-2 d-flex align-items-center justify-content-center">
                                    <div class="d-flex justify-content-center">
                                        <button class="btn btn btn-outline-success d-flex justify-content-center">삭제</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>








                <!-- <div class="mb-4">
                    <label class="form-label fs-5">| 카드명의자</label>
                    <div class="px-2 col-5">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 카드번호</label>
                    <div class="px-2 col-5">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 유효년도</label>
                    <div class="px-2 col-2">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="form-label fs-5">| 유효월</label>
                    <div class="px-2 col-2">
                        <input type="text" class="form-control">
                    </div>
                </div> -->

                


            </div>

            <!-- 버튼 영역 -->
            <div class="d-flex justify-content-center mt-3">
                <button class="btn btn-success btn-lg d-flex justify-content-end me-2">수정하기</button>
                <button class="btn btn-success btn-lg d-flex justify-content-start ms-2" @click="moveMemberList()">목록으로</button>
            </div>

        </div>

    </div>
</template>

<script>
import AdminSubMenu from '@/components/AdminSubMenu.vue'
import { useRoute,useRouter } from 'vue-router';
import { reactive } from 'vue';
import axios from "axios";
import { onMounted } from '@vue/runtime-core';

export default {
    name: 'SubMenu',
    components: {
        AdminSubMenu
    },
    setup () {

        const route = useRoute();
        const router = useRouter();

        const state = reactive({
            memberNumber : Number(route.query.memberNumber),
            data : ''
        })

        // 회원상세내용
        const loadData = () => {

            console.log(state.memberNumber);

            axios.get(`/api/admin/member/getone/${state.memberNumber}`).then((res)=>{
                console.log(res.data);
                state.data = res.data;
            }).catch(()=>{
            })
        }

        // 날짜형식변환 yyyy/mm/dd
        const changeDateFormat = (data) => {
            let date = new Date(data);
            let year = date.getFullYear();
            let month = ("0" + (1 + date.getMonth())).slice(-2);
            let day = ("0" + date.getDate()).slice(-2);

            return year + "/" + month + "/" + day;
        }

        // 휴대폰번호형식변환 000-0000-0000
        const changePhoneNumberFormat = (data) => {
            return data.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
        }
        
        // 카드번호 마스킹처리
        const changeCardFormat = (data) => {
            // return data.replace(/(?<=^(.{4})+)(?=.+)/g, '-'); // 0000-0000-0000-0000 형식
            let card1 = String(data.slice(0, 4));
            let mask_value = String(data.slice(4, 12));
            let card2 = String(data.slice(12, 16));
            let mask = '';

            for(var i=0; i < mask_value.length; i++){
                mask += '*';
            }

            return String(card1) + String(mask) + String(card2);
        }

        // 목록으로
        const moveMemberList = () => {
            router.push({path:'/admin/member/list'});
        }

        // 화면로드시처리
        onMounted(()=>{
            loadData();
        });

        return {
            state,
            moveMemberList,
            changeDateFormat,
            changePhoneNumberFormat,
            changeCardFormat

        }
    }
}
</script>

<style lang="css" scoped>
@import "../assets/css/common.css";

</style>