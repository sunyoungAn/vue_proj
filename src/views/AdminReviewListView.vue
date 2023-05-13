<template>
    <div class="container common_mt160 admin_wrap">
        <admin-sub-menu></admin-sub-menu>
        <div class="admin_content">
            <h1 class="mb-4">| 리뷰관리</h1>

            <!-- 검색 영역 -->
            <div class="mb-5">
                <h2 class="mb-4">리뷰 검색</h2>
                <div class="search-condition px-5">
                    <div class="row mb-3">
                        <div class="col-2 py-2">
                            리뷰번호
                            <!-- <p class="text-center">번호</p> -->
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="리뷰번호">
                        </div>
                        <div class="col-2 py-2">
                            회원번호
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="회원번호">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-2 py-2">
                            상품번호
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="상품번호">
                        </div>
                        <div class="col-2 py-2">
                            리뷰내용
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="리뷰내용">
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
                            <th scope="col"><input class="form-check-input" type="checkbox" value=""></th>
                            <th scope="col">리뷰번호</th>
                            <th scope="col">회원번호</th>
                            <th scope="col">회원이름</th>
                            <th scope="col">상품번호</th>
                            <th scope="col">리뷰내용</th>
                            <th scope="col">등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input class="form-check-input" type="checkbox" value=""></td>
                            <td>1</td>
                            <td>140</td>
                            <td>한여름</td>
                            <td>250</td>
                            <td>완전좋아요~완전좋아요~완전좋아요~완전좋아요~완전좋아요~완전좋아요~</td>
                            <td>2022/01/22</td>
                        </tr>
                        <tr>
                            <td><input class="form-check-input" type="checkbox" value=""></td>
                            <td>1</td>
                            <td>140</td>
                            <td>한여름</td>
                            <td>250</td>
                            <td>완전좋아요~완전좋아요~완전좋아요~완전좋아요~완전좋아요~완전좋아요~</td>
                            <td>2022/01/22</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            
            <!-- 페이지 네이션-->
            <nav class="d-flex justify-content-center mt-4">
                <el-pagination background layout="prev, pager, next" @current-change="changePage" :total="state.total" />
            </nav>

            <div class="d-flex justify-content-center mt-5">
                <button class="btn btn-success btn-lg d-flex justify-content-start" @click="deleteReview()">리뷰삭제</button>
            </div> 

        </div>

    </div>
</template>

<script>
import AdminSubMenu from '@/components/AdminSubMenu.vue'
import { onMounted, reactive } from 'vue'; 
import axios from 'axios';

export default {
    name: 'SubMenu',
    components: {
        AdminSubMenu
    },
    setup () {

        // 상태변수
        const state = reactive({
            rows : [],
            total : 0,
            page : 0,
            isSearch : false,
            checkAll : false,
            checkList : [],
            searchId : '', // 검색조건
            searchProductId : '', // 검색조건
            searchMemberNumber : '', // 검색조건
            searchContent : '' // 검색조건
        })

        // 리뷰관리리스트페이지에 띄울 정보 모두 가져오기
        const loadData = () => {
            axios.get(`/api/admin/review/getall?page=${state.page}`).then((res)=>{
                console.log(res.data);
                state.rows = res.data.reviewList;
                state.total = res.data.total;
                state.checkAll = false;
                state.checkList = [];
                // 검색조건 초기화
                state.searchId = '';
                state.searchProductId = '';
                state.searchMemberNumber = '';
                state.searchContent = '';
            }).catch(()=>{
            })
        }

        // 페이징기능
        const changePage = (page) => {
            console.log(page);
            state.page = page - 1; // 상태변수값 변경
            if(state.isSearch === false) {
                loadData(); // 데이터가져오기
            } else {
                search();
            }
        }

        // 검색하기
        const search = () => {
            // 유효성검사
            if( isNaN(state.searchId)) {
                window.alert("리뷰번호는 숫자만 입력해주세요.");
                state.searchId = '';
                return false;
            }

            if( isNaN(state.searchProductId)) {
                window.alert("상품번호는 숫자만 입력해주세요.");
                state.searchProductId = '';
                return false;
            }

            if( isNaN(state.searchMemberNumber)) {
                window.alert("회원번호는 숫자만 입력해주세요.");
                state.searchMemberNumber = '';
                return false;
            }

            // 검색플래그 설정
            if(state.searchId === '' && state.searchProductId === '' && 
                state.searchMemberNumber === '' && state.searchContent === '' ) {
                state.isSearch = false;
            } else {
                state.isSearch = true;
            }

            axios.get(`/api/admin/review/search?page=${state.page}&id=${state.searchId}&productId=${state.searchProductId}&memberNumber=${state.searchMemberNumber}&buyingStatus=${state.searchBuyingStatus}&expiryDateStart=${state.searchExpiryDateStart}&expiryDateEnd=${state.searchExpiryDateEnd}`).then((res)=>{
                console.log(res.data);
                state.rows = res.data.reviewList;
                state.total = res.data.total;
                state.checkAll = false;
                state.checkList = [];
            }).catch(()=>{
            })

        }

        // 전체선택 처리
        const checkAllEvnet = () => {
            if(state.checkAll === false) {
                for(let idx in state.rows) {

                    // 이미 선택되어 있는 경우에는 중복선택 제외하기
                    if(state.checkList.includes(state.rows[idx].id)) {
                        continue;
                    }
                    state.checkList.push(state.rows[idx].id);
                }
                state.checkAll = true;
            } else {
                state.checkList = [];
                state.checkAll = false;
            }
        }

        // 체크박스 개별 처리
        const checkEvnet = () => {
            if(state.checkList.length === state.rows.length) {
                state.checkAll = true;
            } else {
                state.checkAll = false;
            }
        }

        // 날짜형식변환 yyyy/mm/dd
        const changeDateFormat = (data) => {
            let date = new Date(data);
            let year = date.getFullYear();
            let month = ("0" + (1 + date.getMonth())).slice(-2);
            let day = ("0" + date.getDate()).slice(-2);

            return year + "/" + month + "/" + day;
        }

        // 리뷰삭제
        const deleteReview = () => {

        }

        onMounted(() => {
            loadData();
        })


        

        return {
            state,
            checkAllEvnet,
            checkEvnet,
            changeDateFormat,
            changePage,
            search,
            deleteReview
        }
    }
}
</script>

<style lang="css" scoped>
@import "../assets/css/common.css";

</style>