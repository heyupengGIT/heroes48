<template>
  <div>
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="name1">英雄名称</label>
        <input type="text" v-model="formData.name" class="form-control" id="exampleInputEmail1" placeholder="英雄名称">
      </div>
      <div class="form-group">
        <label for="sex">英雄性别</label>
        <input type="text" v-model="formData.gender" class="form-control" id="exampleInputPassword1" placeholder="英雄性别">
      </div>
      <button @click.prevent="handleAdd" type="submit" class="btn btn-success">提交</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
      return {
        // 绑定文本框的数据，将来也是给post给服务器的数据
        formData: {
          name: '',
          gender: ''
        }
      }
    },
    methods: {
      // 添加英雄
      handleAdd() {
      //  发送ajax请求
      axios
        .post('http://localhost:3001/heroes', this.formData)
        .then((response) => {
          if (response.status === 201) {
            // 跳转到列表页
            this.$router.push('/heroes');
          } else {
            alert('添加失败')
          }
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
    
}
</script>
<style>

</style>
