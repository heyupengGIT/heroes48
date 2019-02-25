<template>
    <div>
      <h2 class="sub-header">英雄列表</h2>
      <!-- <a class="btn btn-success" href="add.html">添加</a> -->
      <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
      <div class="table-responsive">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
                
            </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in list" :key='item.id'>
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.gender }}</td>
                    <td>
                    <router-link :to="'/heroes/' + item.id ">编辑</router-link>
                    <!-- <a href="edit.html">编辑</a> -->
                    &nbsp;&nbsp;
                    <a @click.prevent="handleDelete(item.id)" href="javascript:void(0)">删除</a>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>  
    </div>
</template>
<script>
// 导入axios模块儿
import axios from 'axios';

export default {
    data() {
         return{
             list: []
         };
    },
    // 生命周期钩子函数
    created() {
        // 发送异步请求，获取数据
        this.loadData();
        
    },
    methods: {
        // 加载列表数据
        loadData() {
            axios
                .get('http://localhost:3001/heroes')
                .then((response) => {
                    if (response.status === 200) {
                        this.list = response.data;
                    }
                })
                .catch((err) => {
                    console.log(err)
            })
        },

        // 删除数据
        handleDelete(id) {
            // 删除前的提示
            if(!confirm('是否要删除该数据')) {
                return;
            }

            // 发送请求。删除英雄
            axios
                .delete('http://localhost:3001/heroes/' + id)
                .then((response) => {
                    if(response.status === 200) {
                        // 成功重新加载列表
                        this.loadData();
                    }else{
                        alert('删除失败')
                    }
                })
                .catch((err) => {
                    console.log(err);
                }) 
        }
    }    
}
</script>
<style>

</style>

