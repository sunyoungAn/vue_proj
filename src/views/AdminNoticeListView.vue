<template>
    <div class="container common_mt160 admin_wrap">
        <admin-sub-menu></admin-sub-menu>
        <div class="admin_content">
            <h1 class="mb-4">| 공지관리</h1>

            <!-- 검색 영역 -->
            <div class="mb-5">
                <h2 class="mb-4">공지 검색</h2>
                <div class="px-5">
                    <div class="row mb-3">
                        <div class="col-2 py-2">
                        </div>
                        <div class="col-2">
                            <select class="form-select brand_select" id="inputGroupSelect01">
                                <option selected value="1">제목</option>
                                <option value="2">내용</option>
                                <option value="3">제목+내용</option>
                            </select>
                        </div>
                        <div class="col-7">
                            <input type="text" class="form-control" placeholder="검색내용">
                        </div>
                    </div>
                    
                </div>
                <div class="d-flex justify-content-center mt-4">
                    <button class="btn btn-success btn-lg">검색</button>
                </div>
            </div>

            <!-- 검색 결과-->
            <!-- <el-table :data="state.rows" style="cursor: pointer;" @row-click="handleContent1"> 
                <el-table-column prop="_id" label="물품번호" width="100px" />
                <el-table-column prop="name" label="물품명" />
                <el-table-column prop="content" label="물품내용" />
                <el-table-column prop="price" label="물품가격"  />

            </el-table> -->

            <!-- bootstrap-->
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">공지번호</th>
                            <th scope="col">제목</th>
                            <th scope="col">등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data of state.rows" :key="data">  
                            <td><input class="form-check-input" type="checkbox" value=""></td>
                            <td>{{ data.id }}</td>
                            <td @click="moveNoticeEdit(data.id)" style="cursor: pointer;">{{ data.title }}</td>
                            <td>{{ changeDateFormat(data.registDate) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <!-- 페이지 네이션-->
            <nav class="d-flex justify-content-center my-4">
                <el-pagination background layout="prev, pager, next" :total="state.total" />
            </nav>

            <div class="d-flex justify-content-center mt-5">
                <button class="btn btn-success btn-lg d-flex justify-content-end me-2" @click="moveNoticeRegister()">공지등록</button>
                <button class="btn btn-success btn-lg d-flex justify-content-start ms-2">공지삭제</button>
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
            total : 0
        })
        
        // 공지사항 전체 가져오기
        const loadData = () => {
            axios.get("/api/admin/notice/getall").then((res)=>{
                console.log(res.data);
                state.rows = res.data.content
                state.total = res.data.totalElements
            }).catch(()=>{
            })
        }

        // 날짜형식변환 yyyy/mm/dd
        const changeDateFormat = (data) => {
            var date = new Date(data);
            let year = date.getFullYear();
            let month = ("0" + (1 + date.getMonth())).slice(-2);
            let day = ("0" + date.getDate()).slice(-2);

            return year + "/" + month + "/" + day;
        }

        // 공지수정페이지로 이동
        const moveNoticeEdit = (no) =>{
            router.push({path:'/admin/notice/edit', query:{no : no}});
        }

        // 공지등록페이지로 이동
        const moveNoticeRegister = () =>{
            router.push({path:'/admin/notice/register'});
        }

        // 페이지로드
        onMounted(() => {
            loadData();
        })

        // 리턴값
        return {
            state,
            changeDateFormat,
            moveNoticeEdit,
            moveNoticeRegister
        }
    }
}
</script>

<style lang="css" scoped>
@import "../assets/css/common.css";

</style>