<template>
    <div class="container common_mt160 admin_wrap">
        <admin-sub-menu></admin-sub-menu>
        <div class="admin_content">
            <h1 class="mb-4">| 회원관리</h1>

            <!-- 검색 영역 -->
            <div class="mb-5">
                <h2 class="mb-4">회원 검색</h2>
                <div class="search-condition px-5">
                    <div class="row mb-3">
                        <div class="col-2 py-2">
                            회원번호
                            <!-- <p class="text-center">번호</p> -->
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="회원번호">
                        </div>
                        <div class="col-2 py-2">
                            회원이름
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="회원이름">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-2 py-2">
                            이메일
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="이메일">
                        </div>
                        <div class="col-2 py-2">
                            휴대폰번호
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="휴대폰번호">
                        </div>
                    </div>
                    
                </div>
                <div class="d-flex justify-content-center mt-4">
                    <button class="btn btn-success btn-lg">검색</button>
                </div>
            </div>
            
            <!-- 검색 결과-->
            <div>
                <table class="table align-middle">
                    <thead>
                        <tr class="text-center">
                            <th scope="col" width="50px"><input class="form-check-input" type="checkbox" value=""></th>
                            <th scope="col">회원번호</th>
                            <th scope="col">회원이름</th>
                            <th scope="col">이메일</th>
                            <th scope="col">휴대폰번호</th>
                            <th scope="col">가입일</th>
                            <th scope="col">회원상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data of state.rows" :key="data">
                            <td class="text-center"><input class="form-check-input" type="checkbox" :value="data.id" v-model="state.check"></td>
                            <td class="text-center">{{ data.memberNumber }}</td>
                            <td class="text-center" @click="moveMemberEdit(data.memberNumber)" style="cursor: pointer;">{{ data.name}}</td>
                            <td>{{ data.email }}</td>
                            <td class="text-center">{{ data.phoneNumber }}</td>
                            <td class="text-center">{{ changeDateFormat(data.registDate) }}</td>
                            <td class="text-center">{{ data.memberStatus }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <!-- 페이지 네이션-->
            <nav class="d-flex justify-content-center mt-4">
                <el-pagination background layout="prev, pager, next" @current-change="changePage" :total="state.total" />
            </nav>

            <div class="d-flex justify-content-center mt-3">
                <button class="btn btn-success btn-lg d-flex justify-content-start">회원삭제</button>
            </div>  
        </div>
    </div>
    
</template>

<script>
import AdminSubMenu from '@/components/AdminSubMenu.vue'
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
    name: 'SubMenu',
    components: {
        AdminSubMenu
    },
    setup () {
        
        // 페이지 이동 라우트
        const router = useRouter();

        const state = reactive({
            rows : [],
            total : 0,
            page: 0,
            check:[]
        })

        // 멤버 전체 가져오기
        const loadData = () => {
            axios.get(`/api/admin/member/getall?page=${state.page}`).then((res)=>{
                console.log(res.data);
                state.rows = res.data.content
                state.total = res.data.totalElements
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

        // 페이징기능
        const changePage = (page) => {
            console.log(page);
            state.page = page - 1; // 상태변수값 변경
            loadData(); // 게시물 읽기
        }

        // 멤버수정페이지로 이동
        const moveMemberEdit = (no) => {
            router.push({path:'/admin/member/edit', query:{no : no} ,});
        }

        onMounted(() => {
            loadData();
        })

        // 리턴값
        return {
            state,
            changePage,
            moveMemberEdit,
            changeDateFormat
        }
    }
}
</script>

<style lang="css">
@import "../assets/css/common.css";

/* .admin_wrap {
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 20px;
    overflow: hidden;
} */
/* .admin_member_list {
    width: 1000px;
    float: left;
} */
</style>