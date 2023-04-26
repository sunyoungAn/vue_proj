<template>
    <div class="container common_mt160 admin_wrap">
        <admin-sub-menu></admin-sub-menu>
        <div class="admin_content">
            <h1 class="mb-4">| 거래관리</h1>

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

<style lang="css" scoped>
@import "../assets/css/common.css";

</style>