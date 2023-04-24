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
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>

            <div class="d-flex justify-content-center mt-3">
                <button class="btn btn-success btn-lg d-flex justify-content-start">리뷰삭제</button>
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

<style lang="css" scoped>
@import "../assets/css/common.css";

</style>