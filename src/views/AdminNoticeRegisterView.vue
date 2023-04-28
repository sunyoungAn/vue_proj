<template>
    <div class="container common_mt160 admin_wrap">
        <admin-sub-menu></admin-sub-menu>
        <div class="admin_content">
            <h1 class="mb-4">| 공지사항등록</h1>

            <!-- 입력 영역 -->
            <div class="admin_input_wrap my-5">


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
        
        const moveNoticeList = () =>{
            router.push({path:'/admin/notice/list'});
            //query:{no : code}
        }

        return {
            moveNoticeList
        }
    }
}
</script>

<style lang="css" scoped>
@import "../assets/css/common.css";

</style>