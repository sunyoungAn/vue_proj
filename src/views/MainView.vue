<template>
    <div class="container common_mt160 admin_wrap">
        <h3>main page</h3>
        {{ state.data }}
        <hr>
        {{ state.data.brandDtoList }}
    </div>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'

export default {
    setup () {
        
        const state = reactive({
            // productInfo : [
            //     {
            //         productName:"",
            //         price : 0
            //     }
            // ],
            // brandInfo : [
            //     {
            //         brandId : 0,
            //         name : ""
            //     }
            // ]
            data : []
        })

        const load = () => {

            axios.get(`http://localhost:8088/api/test`).then((res)=>{
                console.log(res.data.productDtoList);
                state.data = res.data;
                window.alert('삭제성공');
            }).catch(()=>{
                window.alert('삭제실패');
            })


        }

        load();


        return {
            state
        }
    }
}
</script>

<style lang="css" scoped>

</style>