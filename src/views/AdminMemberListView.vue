<template>
    <div class="container common_m160 admin_wrap">
        <admin-sub-menu></admin-sub-menu>
        <div class="admin_member_list">
            <h1 class="mb-5">| 회원관리</h1>
            <div>
                
            </div>
            <h2>회원 검색</h2>
            <div>
            
            번호 이름 이메일 휴대폰번호 가입일 회원상태
            
            </div>
        
        
        </div>
    </div>
    
</template>

<script>
import AdminSubMenu from '@/components/AdminSubMenu.vue'

export default {
    name: 'SubMenu',
    components: {
        AdminSubMenu
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="css">
@import "../assets/css/common.css";

.admin_wrap {
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 20px;
    overflow: hidden;
}
.admin_member_list {
    width: 1000px;
    float: left;
}
</style>