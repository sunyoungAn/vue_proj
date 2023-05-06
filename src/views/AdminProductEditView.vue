<template>
    <div class="container common_mt160 admin_wrap">
        <admin-sub-menu></admin-sub-menu>
        <div class="admin_content">
            <h1 class="mb-4">| 상품수정</h1>

            <!-- 입력 영역 -->

            <!-- 버튼 영역 -->
            <div class="d-flex justify-content-center mt-3">
                <button class="btn btn-success btn-lg d-flex justify-content-end me-2">상품수정</button>
                <button class="btn btn-success btn-lg d-flex justify-content-start ms-2" @click="moveProductList()">목록으로</button>
            </div>
        </div>

    </div>
</template>

<script>
import AdminSubMenu from '@/components/AdminSubMenu.vue'
import { useRouter } from 'vue-router';

export default {
    name: 'SubMenu',
    components: {
        AdminSubMenu
    },

    setup () {
        // 페이지 이동 라우트
        const router = useRouter();
        
        const moveProductList = () =>{
            router.push({path:'/admin/product/list'});
            //query:{no : code}
        }

        return {
            moveProductList
        }
    }
}
</script>

<style lang="css" scoped>
@import "../assets/css/common.css";

</style>