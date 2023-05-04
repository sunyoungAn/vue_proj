<template>
    <div class="container common_mt160 admin_wrap">
        <admin-sub-menu></admin-sub-menu>
        <div class="admin_content">
            <h1 class="mb-4">| 상품관리</h1>
            
            <!-- 검색 영역 -->
            <div class="mb-5">
                <h2 class="mb-4">상품 검색</h2>
                <div class="px-5">
                    <div class="row mb-3">
                        <div class="col-2 py-2">
                            상품번호
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="상품번호">
                        </div>
                        <div class="col-2 py-2">
                            상품명
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" placeholder="상품명">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-2 py-2">
                            브랜드
                        </div>
                        <div class="col-4">
                            <select class="form-select brand_select" v-model="state.searchBrand">
                                <option :value=0>브랜드선택</option>
                                <option v-for="brand in state.brandList" :key="brand" :value="brand.brandId" >{{ brand.brandName }}</option>
                            </select>
                        </div>
                        <div class="col-2 py-2">
                            카테고리
                        </div>
                        <div class="col-4">
                            <select class="form-select" v-model="state.serachCategory">
                                <option v-for="category in state.categoryList" :key="category" :value="category.id">{{ category.value }}</option>
                            </select>
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
                            <th scope="col" width="50px"><input class="form-check-input" type="checkbox"></th>
                            <th scope="col" width="100px">상품번호</th>
                            <th scope="col">상품명(영문)</th>
                            <th scope="col">상품명(한글)</th>
                            <th scope="col" width="110px">브랜드</th>
                            <th scope="col" width="100px">카테고리</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data of state.rows" :key="data">
                            <td class="text-center"><input class="form-check-input" type="checkbox"></td>
                            <td class="text-center">{{ data.id }}</td>
                            <td>{{ data.productEngName }}</td>
                            <td>{{ data.productKorName }}</td>
                            <td class="text-center">{{ setBrandName(data.id) }}</td>
                            <td class="text-center">{{ setCategoryName(data.category) }}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            
            <!-- 페이지 네이션-->
            <nav class="d-flex justify-content-center mt-4">
                <el-pagination background layout="prev, pager, next" @current-change="changePage" :total="state.total" />
            </nav>

            <div class="d-flex justify-content-center mt-5">
                <button class="btn btn-success btn-lg d-flex justify-content-end me-2" @click="moveProductRegister()">상품등록</button>
                <button class="btn btn-success btn-lg d-flex justify-content-start ms-2">상품삭제</button>
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
            page : 0,
            brandList : [],
            searchBrand : 0,
            productBrand : {},
            categoryList : [
                { id : 0 , value : '카테고리선택' },
                { id : 1 , value : '스니커즈' },
                { id : 2 , value : '플랫' },
                { id : 3 , value : '로퍼' },
                { id : 4 , value : '더비/레이스업' },
                { id : 5 , value : '샌들/슬리퍼' },
                { id : 6 , value : '힐/펌프스/부츠/기타' }
            ],
            categoryList2 : { 
                0 : '카테고리선택' ,
                1 : '스니커즈' ,
                2 : '플랫' ,
                3 : '로퍼' ,
                4 : '더비/레이스업' ,
                5 : '샌들/슬리퍼' ,
                6 : '힐/펌프스/부츠/기타' },

            serachCategory : 0
        })

        // 상품관리리스트페이지에 띄울 정보 모두 가져오기
        const loadData = () => {
            axios.get(`/api/admin/product/getall?page=${state.page}`).then((res)=>{
                console.log(res.data);
                state.rows = res.data.productList.content;
                state.total = res.data.productList.totalElements;
                state.brandList = res.data.brandList;
                state.productBrand = res.data.productBrandMap;

                // for(let idx in state.rows) {
                //     if(state.rows[idx].memberStatus !== 3) {
                //         state.targetMemberList = state.targetMemberList + 1;
                //     }
                // }
            }).catch(()=>{
            })
        }

        // 브랜드 이름 설정하기
        const setBrandName = (id) => {
            return state.productBrand[id];
        }

        // 카테고리 이름 설정하기
        const setCategoryName = (id) => {
            return state.categoryList[id].value;
        }

        // 페이징기능
        const changePage = (page) => {
            console.log(page);
            state.page = page - 1; // 상태변수값 변경
            loadData(); // 데이터가져오기
        }

        // 상품등록페이지로 이동
        const moveProductRegister = () =>{
            router.push({path:'/admin/product/register'});
        }

        onMounted(() => {
            loadData();
        })

        return {
            state,
            moveProductRegister,
            changePage,
            setBrandName,
            setCategoryName
        }
    }
}
</script>

<style lang="css">
@import "../assets/css/common.css";

</style>