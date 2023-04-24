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
                        <tr>
                            <td><input class="form-check-input" type="checkbox" value=""></td>
                            <td>1</td>
                            <td>시스템보수작업에 대하여 알립니다</td>
                            <td>2023/04/07</td>
                        </tr>
                        <tr>
                            <td><input class="form-check-input" type="checkbox" value=""></td>
                            <td>1</td>
                            <td>시스템보수작업에 대하여 알립니다</td>
                            <td>2023/04/07</td>
                        </tr>
                        <tr>
                            <td><input class="form-check-input" type="checkbox" value=""></td>
                            <td>1</td>
                            <td>시스템보수작업에 대하여 알립니다</td>
                            <td>2023/04/07</td>
                        </tr>
                        <tr>
                            <td><input class="form-check-input" type="checkbox" value=""></td>
                            <td>1</td>
                            <td>시스템보수작업에 대하여 알립니다</td>
                            <td>2023/04/07</td>
                        </tr>
                        <tr>
                            <td><input class="form-check-input" type="checkbox" value=""></td>
                            <td>1</td>
                            <td>시스템보수작업에 대하여 알립니다</td>
                            <td>2023/04/07</td>
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
                <button class="btn btn-success btn-lg d-flex justify-content-end me-2" @click="moveNoticeRegister()">공지등록</button>
                <button class="btn btn-success btn-lg d-flex justify-content-start ms-2">공지삭제</button>
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
        
        const moveNoticeRegister = () =>{
            router.push({path:'/admin/notice/register'});
            //query:{no : code}
        }

        return {
            moveNoticeRegister
        }

       
    }
}
</script>

<style lang="css" scoped>
@import "../assets/css/common.css";

</style>